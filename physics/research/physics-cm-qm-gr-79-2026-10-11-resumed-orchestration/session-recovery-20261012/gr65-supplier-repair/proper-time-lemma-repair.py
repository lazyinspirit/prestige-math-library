from pathlib import Path
p=Path('items/lem-gr-proper-time-reparametrization-and-four-velocity.md');s=p.read_text()
a=s.index('2. **Reparametrization invariance.**');b=s.index('3. **Proper-time function',a)
s=s[:a]+r'''2. **Reparametrization and orientation.** Let
   $\varphi:[a',b']\to[a,b]$ be a $C^1$ diffeomorphism, with nonzero
   derivative everywhere, including one-sided derivatives at the endpoints;
   here both the map and its inverse are $C^1$ up to their included endpoints.
   Let $\tilde\gamma:=\gamma\circ\varphi$.
   If $\varphi'>0$ (so $\varphi(a')=a$, $\varphi(b')=b$), then
   $\tilde\gamma$ is a piecewise-$C^1$ future timelike worldline and
   $\tilde\tau(b')-\tilde\tau(a')=\tau(b)-\tau(a)$.
   If $\varphi'<0$ (so $\varphi(a')=b$, $\varphi(b')=a$), then
   $\tilde\gamma$ is a piecewise-$C^1$ **past** timelike traversal. Its
   unsigned metric-length density $\tilde h=\sqrt{-g(\tilde\gamma',\tilde\gamma')}$
   obeys
   $$\frac1c\int_{a'}^{b'}\tilde h=\tau(b)-\tau(a)>0,$$
   while the oriented original proper-time difference obeys
   $$\tau(\varphi(b'))-\tau(\varphi(a'))=-\bigl(\tau(b)-\tau(a)\bigr).$$
   The negative oriented difference is not the elapsed proper time of a
   future worldline; reversing the parameter reverses its causal direction.

'''+s[b:]
s=s.replace('on each open piece.','on each open piece and at its endpoints one-sided, with the two\n   corner velocities kept distinct.',1)
s=s.replace('then $\\varphi$ is strictly increasing, hence a bijection onto $[a,b]$, and its inverse is continuous.','then the supplied diffeomorphism is increasing and endpoint-preserving, with continuous inverse.')
s=s.replace('The continuous positive function $h$ attains a minimum $m>0$ on $[u,v]$;','By continuity and positivity at an interior point, shrink $[u,v]$ if necessary so that $h\\ge m:=h((u+v)/2)/2>0$ on it;')
s=s.replace('By step 1.5, $\\tau$ is $C^1$ and strictly increasing on $I$;','By step 1.5, $\\tau$ is $C^1$, and its increments are strictly positive by step 1.3, so it is strictly increasing on $I$;')
s=s.replace('At each $\\sigma\\in J$, [L7] applied to $\\tau$ at $t=\\psi(\\sigma)$ — whose derivative $\\tau\'(t)>0$ is invertible as a $1\\times1$ matrix — yields a $C^1$ local inverse of $\\tau$ on a neighborhood of $\\sigma$; by injectivity of $\\tau$ every local inverse agrees with $\\psi$ there, so $\\psi$ is $C^1$ on $J$ and $\\psi\'(\\sigma)=1/\\tau\'(\\psi(\\sigma))$.','At each interior $\\sigma\\in J$, [L7] applied to $\\tau$ at $t=\\psi(\\sigma)$ gives a $C^1$ local inverse; injectivity identifies it with $\\psi$. At an included endpoint, monotonicity first gives continuity of the inverse from that side: any relative neighbourhood of $t$ has a strictly separated inner endpoint value under $\\tau$. For $\\sigma\'\\to\\sigma$ from that side, put $t\'=\\psi(\\sigma\')$; then $t\'\\to t$ and $(\\psi(\\sigma\')-\\psi(\\sigma))/(\\sigma\'-\\sigma)=(t\'-t)/(\\tau(t\')-\\tau(t))\\to1/\\tau\'(t)$. Continuity of $\\tau\'>0$ makes the inverse derivative continuous up to that endpoint. Thus $\\psi$ is $C^1$ on $J$ in the stated one-sided sense and $\\psi\'(\\sigma)=1/\\tau\'(\\psi(\\sigma))$.').replace('[L4, L7, step 1.5, construct]','[L4, L7, step 1.3, step 1.5, construct]')
a=s.index('3.2 (Reversing orientation.)');b=s.index('\n\n4.1',a)
s=s[:a]+r'''3.2 (Reversing orientation.) For the decreasing supplied diffeomorphism, the chain rule gives $\tilde\gamma'=\varphi'(\gamma'\circ\varphi)$, a negative multiple of a future timelike tangent, hence past timelike. The closed-piece $C^1$ extensions compose in the same way, including their distinct corner values. Bilinearity gives $\tilde h=|\varphi'|(h\circ\varphi)$. Apply [L5] to the reversed endpoints on each piece and sum to get $\int_{a'}^{b'}\tilde h=\int_a^bh>0$. Meanwhile $\varphi(a')=b$ and $\varphi(b')=a$ directly give the signed original difference $\tau(a)-\tau(b)=-(\tau(b)-\tau(a))$. Thus the unsigned integral and oriented difference have different signs, as asserted; no proper-time function for a future curve is assigned a negative elapsed value. [L2, L5, L7, step 1.3, step 2.2, algebra]'''+s[b:]
s=s.replace('The same computation applies on each open piece of a piecewise-$C^1$ worldline.','The same computation applies on each open piece and, by the continuous one-sided velocity and density extensions, at each included one-sided endpoint of a piecewise-$C^1$ worldline; a corner retains its two separate values.')
s=s.replace('for a piecewise $C^1$ worldline the same construction applies on each open piece.','for a piecewise $C^1$ worldline the same construction applies on each closed piece using its one-sided inverse derivatives, with separate left and right velocities at a corner.')
s=s.replace('Step 2.2 implies that the','Steps 2.1 and 3.1 imply that the')
p.write_text(s)
