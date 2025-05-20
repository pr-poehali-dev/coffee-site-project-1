
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface QrCodeProps {
  url: string;
  size?: number;
  className?: string;
  title?: string;
}

const QrCode: React.FC<QrCodeProps> = ({ 
  url = window.location.href, 
  size = 200, 
  className,
  title = "Отсканируйте QR-код, чтобы посетить наш сайт"
}) => {
  // Используем Google Charts API для генерации QR-кода
  const qrCodeUrl = `https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=${encodeURIComponent(url)}&choe=UTF-8`;

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-4 text-center">
        <h3 className="text-lg font-medium mb-3">{title}</h3>
        <div className="flex justify-center">
          <img 
            src={qrCodeUrl} 
            alt="QR код для сайта" 
            width={size} 
            height={size} 
            className="mx-auto"
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {url}
        </p>
      </CardContent>
    </Card>
  );
};

export default QrCode;
