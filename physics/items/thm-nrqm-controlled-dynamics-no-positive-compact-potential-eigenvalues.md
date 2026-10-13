---
id: thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues
aliases: [ nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues ]
kind: theorem
domain: mathematics
title: "No positive compact-potential eigenvalues"
status: draft
origin: pipeline
dependency_level: 7
deps:
  [
    thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp,
    thm-nrqm-orbital-and-spin-sphere-onb,
    def-sobolev-space-wkp-and-its-norm,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-hilbert-space,
    def-countable-choice,
    thm-nrqm-orbital-and-spin-associated-polynomial-normalization,
    thm-tonelli-theorem-for-sigma-finite-product-spaces,
    thm-algebra-of-derivatives,
    thm-chain-rule,
    thm-sine-and-cosine-derivatives,
    thm-polar-coordinates-formula-for-lebesgue-measure,
    cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn,
    thm-plancherel,
    thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces,
    thm-continuous-implies-integrable,
    thm-ftc-first-part,
    thm-newton-leibniz-with-interior-derivative,
    cor-cauchy-schwarz-inequality-for-l-two
  ]
dependency_roles:
  thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "D. Jerison and C. E. Kenig, Unique continuation and absence of positive
        eigenvalues for Schrodinger operators, Annals of Mathematics 121 (1985)
        463-494 (absence of positive eigenvalues for bounded compactly supported
        potentials)"
      url: "https://doi.org/10.2307/1971319"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Chapter 9 pp. 181-214 (radial solutions, Bessel-type asymptotics and
        spectral transforms)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ be real and compactly supported, let
$k>0$, and let $H=-\Delta+M_V$ on $D(H)=H^2(\mathbb R^3)$; its self-adjointness
for bounded real $V$ is established below by explicit resolvents. Then $k^2$ is not
an eigenvalue of $H$: if $\psi\in H^2(\mathbb R^3)$ satisfies
$-\Delta\psi+V\psi=k^2\psi$, then $\psi=0$.

## Facts & Assumptions

**Given:** Countable Choice, the real bounded compactly supported $V$, the number $k>0$, and $\psi\in H^2(\mathbb R^3)$ satisfying $-\Delta\psi+V\psi=k^2\psi$ distributionally. Fix $R>0$ such that $V=0$ almost everywhere on $\{|x|>R\}$; no radial symmetry of $V$ is assumed.

[F1] The functions $(Y_{lm})_{l\ge0,-l\le m\le l}$ are a countable complete orthonormal family in $L^2(S^2,\sigma)$ with angular Parseval identity ([[thm-nrqm-orbital-and-spin-sphere-onb]]). Their explicit associated-polynomial formula is the defining setup of [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]; its clause (a) gives the associated Legendre equation and clause (c) gives the negative-index conjugation identities.

[F2] Bounded-potential weak unique continuation: under Countable Choice, if $\Omega\subseteq\mathbb R^3$ is open and connected, $B\in L^\infty_{\mathrm{loc}}(\Omega;\mathbb C)$, and $u\in H^2_{\mathrm{loc}}(\Omega)$ satisfies $\Delta u=Bu$ distributionally and vanishes almost everywhere on a nonempty open subset, then $u=0$ almost everywhere on $\Omega$ ([[thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp]]). This is the exact supplier statement used in the final step.

[F3] Weak derivatives and $H^2$ are interpreted as in [[def-sobolev-space-wkp-and-its-norm]]. The published polar integration formula has volume element $r^2\,dr\,d\sigma$ for nonnegative Borel representatives ([[thm-polar-coordinates-formula-for-lebesgue-measure]]); Tonelli applies to the nonnegative squared modulus and angular Parseval sums ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]). Smooth functions are dense in $H^2(\mathbb R^3;\mathbb C)$ under Countable Choice ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]). The elementary derivative rules used below are [[thm-algebra-of-derivatives]], [[thm-chain-rule]] and [[thm-sine-and-cosine-derivatives]].

[F4] Under Countable Choice, $\mathcal F_2$ is unitary on complex $L^2(\mathbb R^3)$ ([[thm-plancherel]]), and the Fourier characterization of $H^2$ is $\{u:(1+4\pi^2|\xi|^2)\mathcal F_2u\in L^2\}$ with $-\Delta$ represented by the real multiplier $q(\xi)=4\pi^2|\xi|^2$ ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]).

[F5] Continuous real functions on compact intervals are Riemann integrable ([[thm-continuous-implies-integrable]]); their primitive has the prescribed derivative ([[thm-ftc-first-part]]), and a $C^1$ curve equals its initial value plus the integral of its derivative ([[thm-newton-leibniz-with-interior-derivative]]), applied componentwise for complex curves. Cauchy–Schwarz on $L^2$ is [[cor-cauchy-schwarz-inequality-for-l-two]]. In particular a smooth complex $g$ on an interval $I$ of length $L>0$ satisfies $\|g\|_\infty\le L^{-1/2}\|g\|_2+L^{1/2}\|g'\|_2$: average $g(r)=g(s)+\int_s^rg'(t)dt$ over $s\in I$ and bound both terms by Cauchy–Schwarz. Applying this estimate to $g$ and $g'$ shows that smooth $H^2$-Cauchy approximants converge in $C^1$; passing to their integral identities identifies the derivative of the uniform limit. This supplies the one-dimensional regularity used below under CC without an AC-bearing Sobolev-embedding supplier.

## Proof

1.1 (Bounded-potential operator on its stated domain.) Let $H_0=\mathcal F_2^{-1}M_q\mathcal F_2$, $q(\xi)=4\pi^2|\xi|^2$, on the domain in [F4]. This domain is dense because truncations of an $L^2$ Fourier function to $\{q\le n\}$ belong to it and converge in $L^2$. Since $q$ is real, $H_0$ is symmetric, and for $z=\pm i\lambda$, $\lambda>0$, the explicit multiplier inverse $R_0(z)=\mathcal F_2^{-1}M_{(q-z)^{-1}}\mathcal F_2$ has norm at most $\lambda^{-1}$ and maps $L^2$ into $D(H_0)$, because $q/(q-z)$ is bounded; hence $H_0-z$ is onto. The operator $H=H_0+M_V$ on the same dense domain is symmetric because $V$ is real and $M_V$ is bounded. Choose $\lambda>\|V\|_\infty$. Then $\|M_VR_0(\pm i\lambda)\|<1$, so the norm-convergent geometric series gives $(I+M_VR_0(z))^{-1}$ and $(H-z)^{-1}=R_0(z)(I+M_VR_0(z))^{-1}$. In particular $H\pm i\lambda$ are onto. To verify self-adjointness directly, for $y\in D(H^*)$ solve $(H+i\lambda)x=(H^*+i\lambda)y$ with $x\in D(H)$; then $y-x\in\ker(H^*+i\lambda)=\operatorname{ran}(H-i\lambda)^\perp=\{0\}$. Thus $D(H^*)\subseteq D(H)$, and symmetry gives equality and $H=H^*$. The free multiplier identity in [F4] identifies this $H$ with $-\Delta+V$ distributionally on $H^2$. Only explicit norm-convergent series and the CC Fourier interfaces are used, with no Kato–Rellich or arbitrary-choice multiplier supplier. [given, F4, algebra]

1.2 (Angular test functions and the exterior radial equation.) The harmonics of [F1] are smooth on the whole sphere: for $m\ge0$, their formula is the restriction of a constant multiple of $(x_1+ix_2)^mP_l^{(m)}(x_3)$ to $S^2$, and the negative indices are conjugates. In angle coordinates, with $t=\cos\theta$, direct differentiation gives $-\sin^{-1}\theta\,\partial_\theta(\sin\theta\,\partial_\theta w(t))=-((1-t^2)w'(t))'$ and $-\sin^{-2}\theta\,\partial_\varphi^2 e^{im\varphi}=m^2(1-t^2)^{-1}e^{im\varphi}$. Thus the associated Legendre equation gives $-\Delta_{S^2}Y_{lm}=l(l+1)Y_{lm}$ away from the poles and hence everywhere by smoothness. Define $f_{lm}(r)=\int_{S^2}\psi(r\omega)\overline{Y_{lm}(\omega)}\,d\sigma(\omega)$ for almost every $r>R$ and $\alpha_{lm}(r)=rf_{lm}(r)$. On every compact radial interval $[a,b]\subset(R,\infty)$, the smooth polar changes of coordinates and angular integration send the locally $H^2$ function $\psi$ to $f_{lm}\in H^2(a,b)$: this follows by mollifying $\psi$ on a slightly larger annulus, applying the ordinary chain rule to the smooth approximants, and passing in $H^2$; the coordinate Jacobians and coefficients and their first two derivatives are bounded on a finite sphere-chart cover of that annulus. The polar Laplacian formula is valid here without a domain assumption on an infinite angular diagonal operator: for a smooth Cartesian $h$, writing $G(r,\omega)=h(r\omega)$, tangential differentiation gives $\Delta_{S^2}G=r^2\sum_{i,j}(\delta_{ij}-\omega_i\omega_j)\partial_i\partial_jh-2r\partial_rG$, while $\partial_r^2G=\sum_{i,j}\omega_i\omega_j\partial_i\partial_jh$; addition yields $\Delta h=\partial_r^2G+2r^{-1}\partial_rG+r^{-2}\Delta_{S^2}G$. The same identity passes to distributions by the smooth approximants just described. Testing the exterior equation $-\Delta\psi=k^2\psi$ against $\eta(r)Y_{lm}(\omega)$, $\eta\in C_c^\infty((R,\infty))$, and using the polar Laplacian and angular integration by parts gives $(r^2f_{lm}')'+(k^2r^2-l(l+1))f_{lm}=0$ distributionally. Consequently $\alpha_{lm}''+(k^2-l(l+1)r^{-2})\alpha_{lm}=0$ on $(R,\infty)$. The smooth approximants just constructed converge in radial $H^2$; [F5] therefore supplies a $C^1$ representative of $\alpha_{lm}$ on each compact radial interval. Its distributional second derivative is the continuous function $-[k^2-l(l+1)r^{-2}]\alpha_{lm}$, so twice taking its continuous primitive gives a $C^2$ function with the same second derivative; the difference is affine, since local mollifications have second derivative zero. Thus $\alpha_{lm}$ is $C^2$, and repeated differentiation of this equation gives smoothness. This requires no extra regularity of $V$. [given, F1, F3, F5]

2.1 (The two reduced exterior solutions.) Define spherical Bessel functions for $z>0$ by $j_0(z)=\sin z/z$, $y_0(z)=-\cos z/z$ and the recurrences $j_{l+1}(z)=l\,j_l(z)/z-j_l'(z)$, $y_{l+1}(z)=l\,y_l(z)/z-y_l'(z)$. Put $J_l(z)=zj_l(z)$ and $Q_l(z)=zy_l(z)$, so either sequence obeys $u_{l+1}=(l+1)u_l/z-u_l'$. If $u_l''+(1-l(l+1)/z^2)u_l=0$, differentiating this recurrence twice shows $u_{l+1}''+(1-(l+1)(l+2)/z^2)u_{l+1}=0$; the initial functions $\sin z$ and $-\cos z$ solve the $l=0$ equation. Induction also shows each $J_l,Q_l$ is a finite sum of sine and cosine times polynomials in $1/z$. The recurrence therefore gives $J_l(z)=\sin(z-l\pi/2)+O(z^{-1})$, $Q_l(z)=-\cos(z-l\pi/2)+O(z^{-1})$, and the differentiated expansions $J_l'(z)=\cos(z-l\pi/2)+O(z^{-1})$, $Q_l'(z)=\sin(z-l\pi/2)+O(z^{-1})$. Their Wronskian $J_lQ_l'-J_l'Q_l$ has derivative zero by the reduced equation and limit $1$ by these expansions, so it is identically $1$. Hence $rj_l(kr)=J_l(kr)/k$ and $ry_l(kr)=Q_l(kr)/k$ are independent solutions of the radial reduced equation with $r$-Wronskian $1/k$. Every solution in step 1.2 is therefore $\alpha_{lm}(r)=A_{lm}\,rj_l(kr)+B_{lm}\,ry_l(kr)$ for fixed complex constants $A_{lm},B_{lm}$. Indeed, choose the constants matching the value and derivative at one $r_0>R$ using this nonzero Wronskian; the difference has zero Cauchy data. Writing the difference equation as a first-order system with continuous bounded coefficients on any compact radial interval, its integral equation forces zero on sufficiently short successive subintervals (the supremum norm is at most the interval length times the coefficient bound times itself), and finitely many such intervals cover every compact interval. This proves uniqueness and the asserted representation on all of $(R,\infty)$. [step 1.2, F3, F5, algebra]

3.1 (Complex coefficients cannot be square-integrable at infinity.) For fixed $(l,m)$, write $A=A_{lm}$, $B=B_{lm}$ and $\vartheta(r)=kr-l\pi/2$. Step 2.1 gives $\alpha_{lm}(r)=k^{-1}(A\sin\vartheta-B\cos\vartheta)+O(r^{-1})$, with constants allowed to depend on this fixed channel. For complex $A,B$ the squared leading term is $k^{-2}(|A|^2\sin^2\vartheta+|B|^2\cos^2\vartheta-2\operatorname{Re}(A\overline B)\sin\vartheta\cos\vartheta)$, not the square of a real expression. Since the leading term is bounded and the error is $O(r^{-1})$, the error in its squared modulus is also $O(r^{-1})$. The integral of that leading term from any fixed $R_1>R$ to $T$ is $\frac{|A|^2+|B|^2}{2k^2}(T-R_1)+O(1)$, because the remaining trigonometric terms have bounded primitives for $k>0$; the integrated error is $O(\log T)$. Thus if $(A,B)\neq(0,0)$, $\int_{R_1}^{T}|\alpha_{lm}(r)|^2\,dr\ge\frac{|A|^2+|B|^2}{4k^2}(T-R_1)$ for all sufficiently large $T$, contradicting square-integrability. But square-integrability follows directly from Cauchy–Schwarz and the polar formula: $\int_R^\infty|\alpha_{lm}(r)|^2\,dr\le\int_R^\infty r^2\int_{S^2}|\psi(r\omega)|^2\,d\sigma\,dr\le\|\psi\|_2^2$. Therefore $A_{lm}=B_{lm}=0$ for every channel. No estimate uniform in $l,m$ and no interchange of an asymptotic expansion with an infinite angular sum is used. [step 2.1, F1, F3, F5, given, algebra]

4.1 (Exterior vanishing and unique continuation.) Step 3.1 makes every angular coefficient zero for almost every $r>R$. There are countably many channels, so intersecting their conull radial sets and the set on which $\psi(r\,\cdot)\in L^2(S^2)$ gives a conull set of radii where all coefficients vanish simultaneously; completeness in [F1] then gives $\psi(r\,\cdot)=0$ in $L^2(S^2)$. Equivalently, angular Parseval and Tonelli give $\int_{|x|>R}|\psi(x)|^2\,dx=\sum_{l,m}\int_R^\infty|\alpha_{lm}(r)|^2\,dr=0$. Thus $\psi$ vanishes almost everywhere on the nonempty open exterior. On the connected open set $\mathbb R^3$, the original equation is $\Delta\psi=(V-k^2)\psi$ with $V-k^2\in L^\infty_{\mathrm{loc}}(\mathbb R^3;\mathbb C)$ and $\psi\in H^2_{\mathrm{loc}}$. The exact weak-UCP statement [F2] applies and yields $\psi=0$ almost everywhere on $\mathbb R^3$, so $k^2$ is not an eigenvalue. [step 3.1, F1, F2, F3, given] ∎
