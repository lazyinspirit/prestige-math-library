# Exact whole-annulus concentration on the Schwarzschild exterior

This is round-1 research by `/root/drift_materialization`, not an acceptance receipt. Source and native inventories remain untouched pending the root's writer-drain release. The exact intended region is the entire sphere factor: `def-gr-fx-nondegenerate-local-energy-estimate` defines K_delta by |r-3s/2| <= delta, omega arbitrary. No narrower angular-neighborhood theorem is being claimed or substituted.

## Target and conventions

Fix s>0, 0<delta<s/2, r0=3s/2, f=1-s/r, t=x^0, T=partial_t. For every prescribed H>0 and epsilon in (0,1), construct an exact real smooth wave on all R_t x (s,infinity)_r x S² with compact smooth initial data, stationary energy one, and E_(T,delta)(t)>=1-epsilon simultaneously for every t in [0,H]. No uniform choice of frequency in H is asserted. The background and the scalar stress are exactly those already defined in batch36. Only the already-carried Countable Choice is retained; the construction below does not invoke the more general globally hyperbolic Cauchy theorem or Dependent Choice.

## 1. Explicit reduction and positive energy

Set x=r+s log(r/s-1)-c, choosing c so x(r0)=0. Since dx/dr=1/f>0 and x tends to minus/plus infinity at the two ends, it is a smooth diffeomorphism (s,infinity)->R, with r_x=f. The metric is f(-dt²+dx²)+r² gamma. Expanding its density gives

    Box_g u = f^{-1}(-u_tt + r^{-2} partial_x(r² u_x)) + r^{-2} Delta_(S²)u.

For every integer l>=1, take Y_l=c_l(omega_1+i omega_2)^l, where c_l>0 normalizes integral |Y_l|² d omega=1. Its smoothness at the poles follows from its polynomial formula. In polar coordinates it is c_l sin(theta)^l exp(i l phi); direct differentiation in the sphere Laplacian gives Delta_(S²)Y_l=-l(l+1)Y_l. The eigenvalue identity extends to the poles by smoothness. Integration in phi gives integral Y_l²=0. Integration by parts on the sphere also gives integral |grad Y_l|²=l(l+1) and integral grad Y_l dot grad Y_l=l(l+1) integral Y_l²=0. These integration identities can equally be checked in theta,phi; the sin(theta)^l factors remove all polar endpoint terms.

For a complex radial amplitude q put u=q(t,x)Y_l(omega)/r(x). Substitution gives exactly

    q_tt-q_xx+W_l(x)q=0,
    W_l=f(l(l+1)/r²+s/r³)>=0.

All derivatives of W_l are bounded on R for each fixed l: differentiation is f partial_r, the rational functions decay at infinity and extend smoothly to r=s, and f vanishes there. There is no frequency-uniform assertion in this elementary existence observation.

Define the complex radial energy

    e_l[q](t) = (1/2) integral_R (|q_t|²+|q_x|²+W_l|q|²) dx.

For real fields, the specified physical stationary energy density is, by n=f^(-1/2)partial_t and d mu_Sigma=f^(-1/2)r² dr d omega,

    E_T[u] = (1/2) integral (r²|u_t|²+r²|u_x|²+f|grad_(S²)u|²) dx d omega.

For complex fields this formula denotes the sum of the two real energies. Substituting qY_l/r gives (1/2) integral(|q_t|²+|q_x-bq|²+f l(l+1)|q|²/r²) dx with b=f/r. Integrating -b partial_x|q|², with compact spatial support, and using b'+b²=f s/r³ proves E_complex[qY_l/r]=e_l[q]. The vanishing integrals of Y_l² and grad Y_l dot grad Y_l show, for every complex q, exactly

    E_T[Re(qY_l/r)] = e_l[q]/2.

The same factor identity holds on any radial interval before the boundary integration, because its angular domain remains the full sphere. In particular all original local energy densities are nonnegative; no local boundary-term equality with the reduced potential is required.

## 2. Elementary global smooth exact Cauchy solution

For completeness the radial equation above has an elementary local-to-global construction which avoids any absent global geometric supplier. For compact smooth data p,v, its d'Alembert integral equation for t>=0 is

    q(t,x)= (p(x+t)+p(x-t))/2 +(1/2) integral_(x-t)^(x+t) v(y)dy
            -(1/2) integral_0^t integral_(x-(t-a))^(x+(t-a)) W_l(y)q(a,y)dy da.

The last operator has sup norm at most ||W_l||_infinity t²/2. On a sufficiently short fixed slab it is a contraction on bounded continuous functions. Its Picard iterates have support inside the unit-speed cone from the initial compact support, and their uniform limit does too. Spatial differentiation of the integral equation, equivalently moving spatial derivatives onto W_l q under the convolution, inductively gives C^k_x regularity for every k. At each k the highest unknown derivative has the same contraction coefficient; all lower differentiated products are already known continuous bounded functions. Difference quotients and the contraction estimate identify these limits with the actual derivatives. Differentiating the displayed equation in t then gives q_t and q_tt=q_xx-W_l q; repeated differentiation proves joint smoothness and the exact initial data. This supplies existence, not merely a formal parametrix. The same construction for differences proves uniqueness. Its slab length depends on ||W_l||_infinity, not data size, so restarting at its endpoint extends over every finite positive or negative interval. Time reversal gives a single global smooth solution; successive finite intervals agree by uniqueness. Support remains in the original cone by the same integral formula or restarting uniqueness.

For a smooth compactly supported forcing F, adding its positive d'Alembert integral proves the forced version on finite slabs as well. Since all spatial integrals at each finite time have compact support, differentiation and integration by parts are legitimate. For q_tt-q_xx+W_l q=F,

    d e_l[q]/dt=Re integral F conjugate(q_t) dx,
    sqrt(e_l[q](t)) <= sqrt(e_l[q](0)) +(1/sqrt(2)) integral_0^t ||F(a)||_2 da.

To justify the latter even when energy vanishes, first differentiate sqrt(e_l+eta), integrate and let eta decrease to zero. For F=0 energy is exactly conserved on all times. Positivity of W_l is crucial for this frequency-independent estimate; the local contraction's frequency-dependent width causes no loss in it.

## 3. Explicit inverted-oscillator Gaussian

Write h=(l+1/2)^(-1), so l(l+1)=h^(-2)-1/4. Then

    W_l=h^(-2)V0+V1,  V0=f/r²,  V1=f s/r³-V0/4.

At x=0 (r=r0), direct differentiation gives

    V0(0)=Omega², Omega=2/(3 sqrt(3)s), V0'(0)=0,
    V0''(0)/2=-Omega^4.

For example V0,r=(-2r+3s)/r^4, V0,rr(r0)=-3s/r0^5 and partial_x=f partial_r. Choose

    z(t)=cosh(Omega t)+i sinh(Omega t),
    b(t)=Omega²(cosh(Omega t)-i sinh(Omega t))/z(t),
    a(t,y)=z(t)^(-1/2) exp(-b(t)y²/2).

The square root is the smooth branch with z(0)^(-1/2)=1; z has positive real part and never vanishes. Direct calculation gives Re b=Omega²/|z|²>0, b'=-i(b²+Omega^4)/Omega, and (z^(-1/2))'/z^(-1/2)=-i b/(2Omega). Consequently

    2 i Omega a_t= -a_yy -Omega^4 y² a.

On each fixed |t|<=H all t,y derivatives of a are polynomials in y with bounded t coefficients times a Gaussian with Re b>=c_H>0. Thus every weighted L² norm needed below is uniformly finite. This is a directly checked global Riccati solution and not an appeal to a Gaussian-beam theorem.

Choose a real smooth cutoff chi(x), equal to one near 0, with compact support in the open interval {x:|r(x)-r0|<delta}. Put

    Q_h(t,x)=h^(3/4) exp(-i Omega t/h) chi(x) a(t,x/sqrt(h)).

Its support, and that of every derivative, is inside the exact annulus for every t. Its initial data are smooth and compactly supported.

## 4. Uniform residual and initial normalization

Let R_h=(partial_t²-partial_x²+W_l)Q_h. Without differentiating chi, the terms of size h^(-2) cancel by V0(0)=Omega² and those of size h^(-1) cancel by the displayed envelope equation. The remaining terms are the envelope a_tt, V1 a, and

    h^(-2)(V0(x)-Omega²+Omega^4 x²)a(t,x/sqrt(h)).

On a fixed compact interval containing supp chi, Taylor's theorem bounds the parenthesis by C|x|³. Since dx=sqrt(h)dy, multiplication by h^(3/4) changes a bounded envelope L² norm by the factor h. The a_tt and V1 terms therefore have L² norm O_H(h). The cubic term has L² norm bounded by

    C h * h^(-2) * h^(3/2) || |y|³ a(t,y)||_2 = O_H(sqrt(h)).

The cutoff commutators are -2chi' partial_x of the uncut amplitude and -chi'' times that amplitude. Their supports have |x|>=d>0, so Re b>=c_H makes all their L² norms O_(H,N)(h^N), for every N: the exponential exp(-c_H d²/(2h)) beats each fixed power from differentiation. Thus

    sup_(0<=t<=H) ||R_h(t)||_2 <= C_H sqrt(h).

At t=0, using the same variable change and Gaussian tail bounds,

    e_l[Q_h](0) -> C0=Omega² integral_R |a(0,y)|²dy=Omega sqrt(pi)>0.

Indeed |partial_t Q_h|² contributes Omega² integral|a0|² to the unhalved energy integral, h^(-2)V0|Q_h|² contributes the same, and the factor 1/2 adds them to C0. Their cross/time-envelope terms and the radial derivative contribution are O(h); V1 is O(h²) in energy. Hence e_l[Q_h](0)=C0+O(h), giving a uniform positive lower bound for all sufficiently large l.

## 5. Exact correction, real wave and simultaneous concentration

Let q_h be the exact global smooth radial wave from section2 with the exact initial data Q_h(0), partial_t Q_h(0). The difference w_h=q_h-Q_h has zero Cauchy data and forcing -R_h. On [0,H], the energy estimate gives

    sup e_l[w_h](t) <= (H²/2) sup ||R_h(t)||²_2 <= C_H h.

Both q_h and Q_h have compact spatial support on each finite slab. Define the real exact scalar field U_h=Re(q_h Y_l/r). It is smooth globally, including at sphere poles, has compact smooth initial data, and solves the original Box_g equation. Its conserved total stationary energy is e_l[Q_h](0)/2. Define u_h=U_h / sqrt(e_l[Q_h](0)/2), so E_T[u_h](0)=E_T[u_h](t)=1 exactly.

On the complement of K_delta, the approximate field Re(Q_h Y_l/r), together with its derivatives, vanishes identically. There the exact field equals its correction Re(w_hY_l/r). Nonnegativity of the original stress energy density, the exact whole-sphere factor identity and the global radial energy identity therefore give

    E_(T, outside K_delta)[u_h](t)
       <= e_l[w_h](t)/e_l[Q_h](0) <= C'_H h.

Since total energy is exactly one, this proves E_(T,delta)[u_h](t)>=1-C'_H h for every t in [0,H] simultaneously. Choose a single sufficiently large integer l with C'_H/(l+1/2)<epsilon. This proves the precise required interface with no conditional concentration premise, no derivative loss on the initial right side, no narrowing of delta or time quantifiers, and no claim of uniform control as H tends to infinity.

## 6. Consumer and source limits

The exact B claim follows by taking epsilon=1/2, integrating the nonnegative local energy over [0,H] and then choosing H>2C for any proposed universal ILED constant C. The old conditional placeholder and its A2 are to be replaced only after root release by this actual supplier, preserving the designed unconditional conclusion and all fixed-background qualifications.

Retrieved complete Sbierski arXiv:1311.2477 PDF (46 pages), inspected extracted text pp.9-18,22-25: Theorem2.1 construction, Riccati/positive-Hessian argument, exact-wave correction and trapping application. Retrieved complete Marzuola et al. arXiv:0802.3942 PDF (44 pages), inspected extracted text pp.1-3 including the exterior metric and normalized tortoise coordinate. These are precise actual reading limits, not claims to reading all pages. Their full general Gaussian-beam theorem is comparison context; the smaller separated construction above directly proves the exact whole-annulus interface. The released scalar Cauchy helper was read in full but is not needed by this proof; its additional DC hypothesis is consequently not silently passed into the original Countable-Choice-only claim.
