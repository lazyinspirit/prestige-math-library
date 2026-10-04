# Relativistic shell, action and time gauges

The mathematical statements use an explicitly given smooth time-oriented Lorentzian manifold $(M,g)$ of dimension four, signature $(-+++)$, and its cotangent geometry H0. Its metric is nondegenerate at every point; $g^{-1}$ is the smooth inverse tensor. Flat examples use the oriented affine Minkowski model, inertial affine coordinates $x^0=ct,x^i$ in metres, and constant $c>0$ in m/s. A tetrad is an orthonormal tangent basis field; an observer congruence is a smooth future unit timelike field; a chart is a coordinate map. The time gauge below uses a chart, not an automatic observer or tetrad. Actual SR S0/S2/S4/S7 and GR G0/G1/G2/G5/G6 arguments were inspected. The adopted particle action/interpretation below is a physical postulate; every algebraic/symplectic lemma analyzes its specified mathematical function without using a claim about nature.

## H5 — explicit physical model and quantities

Adopt an ideal classical spinless massive test particle with fixed primitive mass parameter $m>0$ (kg), a given background Lorentz metric and time orientation, ideal clocks, and stationary action $I[x]=-mc\int\sqrt{-g(x',x')}d\lambda$ on future timelike curves. Curves are $C^2$, defined on a finite interval with fixed endpoint events; variations are smooth compactly supported or fixed endpoint and remain timelike. $lambda$ is any specified increasing regular parameter. In this formulation mechanical momentum is derived by fibre differentiation; the identification with the earlier SR $P=mU$ model is proved below, not inferred from units alone. Ideal proper time is $d\tau=\sqrt{-g(x',x')}d\lambda/c$ and $U=dx/d\tau$ (m/s). The action premise describes a restricted test-body model; it supplies no measured universal dynamics or backreaction theorem.

A prescribed ideal massless particle instead adopts the constrained first-order model below with $m=0$, nonzero future null momentum and positive multiplier. It has no massive proper-time parametrization and is not obtained by substituting $m=0$ into $P=mU$ or the square-root action. Additive isolated-collision conservation is a separate adopted law when collision items are consumed; it is not a theorem of the free one-particle action. Charged/external-force models need their own coupling premise, not an arbitrary potential silently appended to this free Hamiltonian.

## H6 — homogeneous momentum, Hessian and exact shell image

For a nonzero future timelike tangent $V$ set $s=\sqrt{-g(V,V)}>0$, $L=-mc s$. Fibre differentiation gives $p_a=mc\,g_{ab}V^b/s$ and

$$L_{V^aV^b}=mc\left(\frac{g_{ab}}s+\frac{V_aV_b}{s^3}\right).$$

This matrix annihilates $V$. Decompose any $W=\alpha V+W_\perp$, $g(V,W_\perp)=0$; S0's rest-basis proof gives a positive definite metric on the three-dimensional orthogonal screen. On that screen the Hessian is $(mc/s)g$, positive definite, so its kernel is exactly $\mathbb RV$ and its rank is three. Its Legendre image is precisely the future massive shell

$$\Sigma_m^+=\{(x,p):g^{-1}(p,p)=-m^2c^2,\quad p^\sharp\text{ future}\}.$$

Indeed $p^\sharp=mc V/s$ has that norm and direction; conversely every shell covector is the image of every positive multiple of its raised vector. Thus the fibres are the connected positive rays, the image is embedded and the map onto it is a submersion (base identity plus rank-three fibre derivative). The defining function $C_m=\tfrac12(g^{ab}p_ap_b+m^2c^2)$ has nonzero fibre differential $p^\sharp$ on this shell, so the regular-level theorem applies. Homogeneity gives $p(V)-L=0$. This proves exactly why no four-velocity hyperregular inverse exists. Since $U=cV/s$, $p^\sharp=mU$; raising the derived canonical covector reproduces the adopted free mechanical momentum of SR S7.

## H7 — first-order action, multiplier and reparametrization

Consider the smooth constrained functional

$$I[x,p,e]=\int\left[p_ax'^a-eC_m(x,p)\right]d\lambda,$$

where $p$ is a cotangent lift along the curve and $e>0$ is smooth. Variations of $p$ are arbitrary ambient covector variations; the shell and future/nonzero branch conditions select solutions after variation, rather than restricting null variations in advance. For dimensionless $\lambda$, $[x']=\mathrm m$, $[p]=\mathrm{kg\,m/s}$, $[C_m]=\mathrm{kg^2m^2/s^2}$, and $[e]=\mathrm{s/kg}$. More generally $[e]=\mathrm{s}/(\mathrm{kg}[\lambda])$; with $\lambda=\tau$ in seconds its units are 1/kg. Variations of $p,e$ and fixed-endpoint $x$ give, by ordinary differentiation/integration by parts,

$$x'^a=e g^{ab}p_b,\qquad p'_a=-\frac e2\partial_a g^{bc}p_bp_c,\qquad C_m=0.$$

These equations are intrinsic Hamilton equations for the total constraint generator $eC_m$. Replacing $\lambda=f(\sigma)$, $f'>0$, and setting $\widetilde e(\sigma)=f'(\sigma)e(f(\sigma))$, with $x,p$ composed with $f$, preserves the action and equations by substitution. The multiplier transforms as a one-dimensional density. Gauge rescaling changes a parameterization, not its oriented curve image.

For $m>0$ solve $p=V^\flat/e$ from the first equation and the shell gives $e=s/(mc)$. Substitution in $p(V)-eC_m$ gives $V^2/(2e)-em^2c^2/2=-mc s$. Conversely the Legendre momentum of H6 with that multiplier solves these same algebraic equations; varying the remaining curve action gives its Euler–Lagrange equation, so the two stationary formulations agree on the future timelike branch. In proper time $e=1/m$ and $p^\sharp=mU$. Writing $p_a=g_{ab}x'^b/e$ and differentiating, the metric inverse derivative identity turns the second equation into $\nabla_{x'}x'=(e'/e)x'$. Hence $e$ constant gives an affine geodesic and an arbitrary positive $e$ gives its increasing reparametrization. This also follows from the inspected G5 particle first variation with G1's connection. Local existence for supplied smooth $e$ follows from G2's phase ODE on the smooth shell; continuation requires staying in its domain.

For $m=0$ retain $C_0=\tfrac12g^{-1}(p,p)$, $p\ne0$, future $p^\sharp$, $e>0$. Its differential is still nonzero, and the same Hamilton/connection calculation gives null geodesics. The constraint now forces $g(V,V)=0$; there is no equation determining $e$ from a positive proper-length square root. A zero square-root Lagrangian would have zero fibre derivative and cannot supply this nonzero null shell. This is a separate massless model with a genuine action and constraint, not an illicit degenerate Legendre limit.

## H8 — complete flat quotient and global inertial time slice

For flat $g=\eta$, the characteristic vector field of $C_m$ on $\Sigma_m^+$ is $X_{C_m}=P^a\partial_{x^a}$ with constant $P=p^\sharp$. Its full flow is $(x,p)\mapsto(x+\alpha P,p)$ for every real $\alpha$. The trajectory images being quotiented are thus oriented complete affine lines; their invariant labels below are called ray labels only in that explicitly defined sense. It is nonzero, and the restriction of $\omega$ to the seven-dimensional shell has exactly this one-dimensional kernel by H4. Future massive momenta have $P^0=\sqrt{m^2c^2+|\mathbf p|^2}>0$. Future nonzero null momenta have $P^0=|\mathbf p|>0$ and $\mathbf p\ne0$.

Define $y=x^0/P^0$, $a^i=x^i-(P^i/P^0)x^0$, and retain $p_i$. This is a global smooth diffeomorphism $\Sigma_m^+\cong\mathbb R_y\times B_m$, where $B_m=\mathbb R^3_a\times\mathbb R^3_p$ for $m>0$ and $B_0=\mathbb R^3_a\times(\mathbb R^3_p\setminus\{0\})$. Its inverse is $x^0=yP^0,x^i=a^i+yP^i,p_0=-P^0$. The characteristic flow is translation of $y$, holding $a,p$ fixed. It is free and proper: in these product coordinates inverse images of compact sets under $(\alpha,y,b)\mapsto(y+\alpha,b,y,b)$ are closed and have bounded $y,b,\alpha=(y+\alpha)-y$, hence compact. Thus the orbit quotient is exactly the Hausdorff second-countable manifold $B_m$, with an explicit global slice $x^0=0$, not a presumed smooth orbit space. The restricted form is invariant/horizontal along its kernel (Cartan's identity); therefore its value on the slice determines its descended form, $\omega_{\mathrm{red}}=da^i\wedge dp_i$. At arbitrary chosen inertial $t$, the slice $x^0=ct$ still intersects each entire free affine trajectory once and has the same canonical form. This quotient contains entire free ray images; a finite piece of a trajectory need not intersect every time slice.

The time gauge $\psi=x^0-ct=0$ together with $C_m=0$ is second class: $\{C_m,\psi\}=-P^0$, and its $2\times2$ matrix has inverse $(0,1/P^0;-1/P^0,0)$. H3 gives the canonical spatial brackets on the fixed-$t$ slice. Consistency $\dot\psi=\partial_t\psi+\{\psi,eC_m\}=-c+eP^0=0$ fixes $e=c/P^0$. On this moving slice write $q^i=x^i$, distinguishing its physical spatial position from the fixed ray label $a^i$ above. Substituting the future root $p_0=-E(\mathbf p)/c$ in the first-order action gives

$$I=\int\left[p_i\dot q^i-E(\mathbf p)\right]dt,\qquad E=\sqrt{m^2c^4+c^2|\mathbf p|^2}.$$

Its spatial Hamiltonian is $E$, not zero: $\dot q^i=c^2p_i/E$, $\dot p_i=0$. These equations integrate to $q(t)=a+t c^2\mathbf p/E$, matching the unreduced shell flow with $e=c/P^0$. For massive particles the speed is less than $c$, and for the separately modeled nonzero massless shell it equals $c$. The slice-to-orbit identification is explicitly time dependent: $q^i=a^i+ctP^i/P^0=a^i+tE_{p_i}$. At fixed $t$, $dq^i\wedge dp_i=da^i\wedge dp_i+tE_{p_ip_j}dp_j\wedge dp_i=da^i\wedge dp_i$ by Hessian symmetry. Thus $a$ is constant on the orbit quotient while the moving-slice position $q(t)$ evolves. The time gauge is explicitly time dependent; replacing it by a stationary constraint surface and retaining only the zero canonical homogeneous Hamiltonian would incorrectly remove this evolution.

## H9 — curved temporal-chart Hamiltonian and physical observer energy

Assume a specified smooth product chart $(x^0,x^i)$ on an open spacetime region has

$$g=-N^2(dx^0)^2+h_{ij}(dx^i+\beta^i dx^0)(dx^j+\beta^j dx^0),$$

where $N>0$, $h$ is positive definite and smooth, and $\beta$ is smooth. All $x^a$ are metres; $N,h,\beta$ are dimensionless coefficient functions. This hypothesis is stronger than an arbitrary Lorentz chart: $dx^0$ is temporal and slices are spacelike. The future unit normal is $n=N^{-1}(\partial_0-\beta^i\partial_i)$; direct metric contraction gives its norm $-1$. It is an observer field and is not generally the coordinate field $\partial_0$. Matrix multiplication gives $g^{00}=-N^{-2}$, $g^{0i}=\beta^i/N^2$, $g^{ij}=h^{ij}-\beta^i\beta^j/N^2$. Thus the future shell branch has

$$p_0=\beta^ip_i-N\kappa,\quad \kappa=\sqrt{m^2c^2+h^{ij}p_ip_j},\quad H(t,q,p)=-cp_0=c(N\kappa-\beta^ip_i).$$

For $m=0$ exclude $p_i=0$; otherwise $\kappa>0$. The root is future because $P^0=\kappa/N>0$, and the inverse theorem/regular shell calculation justifies eliminating it. On any path interval lying in this product chart and transverse to its time slices, set $x^0=ct$; its reduced action is $\int(p_i\dot q^i-H)dt$ and its dynamics are exactly Hamilton equations. This is a local time-chart theorem, not a global gauge on every curved spacetime or every geodesic.

The normal observer energy is $E_n=-c p(n)=c\kappa>0$, whereas coordinate $H$ may be negative when $\partial_0$ is spacelike. Its velocity relative to the normal screen is $w^i=(\dot q^i/c+\beta^i)/N=h^{ij}p_j/\kappa$, whose squared $h$ norm is $h^{ij}p_ip_j/\kappa^2<1$ for $m>0$ and equals one for the nonzero massless branch. This dimensionless $w$ corresponds to measured speed $c|w|_h$; coordinate speed can exceed $c$ without superluminal local motion. If $|\beta|_h<N$, then $H\ge c(N\kappa-|\beta|_h|p|_{h^{-1}})>0$, and the coordinate time vector is future timelike. The reverse inequality permits negative coordinate energy despite positive $E_n$. Along a solution $\dot H=\partial_tH$, so only explicit time independence gives this conserved energy; generic curvature alone supplies no universal conserved $H$.

### H9/example — flat shift and negative coordinate Hamiltonian

Take $N=1$, $h_{ij}=\delta_{ij}$, $\beta=(2,0,0)$ and $p=(p_1,0,0)$ with $p_1>mc/\sqrt3$. The metric is $-(dx^0)^2+(dx^1+2dx^0)^2+(dx^2)^2+(dx^3)^2$, explicitly a flat Minkowski metric in the inertial coordinates $X^0=x^0,X^1=x^1+2x^0$. Its coordinate $\partial_0$ has norm3 and is spacelike, although $dx^0$ remains temporal. The inequality $m^2c^2+p_1^2<4p_1^2$ proves $H=c(\sqrt{m^2c^2+p_1^2}-2p_1)<0$, while $E_n=c\sqrt{m^2c^2+p_1^2}>0$ and the normal measured speed is $cp_1/\sqrt{m^2c^2+p_1^2}<c$. Coordinate $\dot q^1=c(p_1/\kappa-2)$ has magnitude greater than $c$; it is not the local observer speed. This verifies the exact counterexample without changing the causal metric or invoking negative mechanical observer energy.
