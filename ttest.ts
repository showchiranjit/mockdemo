const svgIcon = {
        url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 40 50">
            <!-- Marker shape -->
            <path d="M20 0 C30 0 40 10 40 20 C40 30 20 50 20 50 C20 50 0 30 0 20 C0 10 10 0 20 0 Z" fill="#4285F4"/>
            
            <!-- Dynamic image (circle cropped) -->
            <circle cx="20" cy="15" r="12" fill="white"/>
            <image href="${imageUrl}" x="8" y="3" width="24" height="24" 
                   clip-path="circle(12 at 20 15)"/>
            
            <!-- Optional border -->
            <circle cx="20" cy="15" r="12" fill="none" stroke="#4285F4" stroke-width="2"/>
          </svg>
        `)}`,
        scaledSize: new google.maps.Size(40, 50),
        anchor: new google.maps.Point(20, 50),
      };




 <foreignObject width="100%" height="100%">
      <img 
        src={imageUrl} 
        alt="Dynamic content" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }}
      />
    </foreignObject>
