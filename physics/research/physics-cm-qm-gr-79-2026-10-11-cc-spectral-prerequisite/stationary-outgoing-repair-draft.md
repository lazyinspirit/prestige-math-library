---
id: thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux
aliases: [nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]
kind: theorem
domain: mathematics
title: "Stationary outgoing integral and flux"
status: draft
origin: pipeline
deps: [thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility, thm-interior-h-two-regularity-for-divergence-form-equations, def-sobolev-space-wkp-and-its-norm, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility: mathematical-premise
  thm-interior-h-two-regularity-for-divergence-form-equations: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics, Scattering Theory"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, stationary and dynamical scattering"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $R>0$, let
$V\in L^\infty(\mathbb R^3;\mathbb R)$ with $\operatorname{supp}V\subseteq B_R$,
let $k>0$ and $d\in S^2$. On $\mathcal H=L^2(B_R;\mathbb C)$ let
$K_kf(x)=\int_{B_R}G_k(x-y)V(y)f(y)dy$, where
$G_k(z)=e^{ik|z|}/(4\pi|z|)$. The repaired supplier
[[thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility]] supplies
bounded invertibility of $I+K_k$. Define

$$u=(I+K_k)^{-1}(e^{ikd\cdot x}|_{B_R}),\qquad \Psi(x)=e^{ikd\cdot x}-\int_{B_R}G_k(x-y)V(y)u(y)dy,\qquad \Psi_{\mathrm{sc}}=\Psi-e^{ikd\cdot x}.$$

Then:

(a) $\Psi\in H^2_{\mathrm{loc}}(\mathbb R^3)$,
$(-\Delta+V-k^2)\Psi=0$ distributionally, and $\Psi|_{B_R}=u$.

(b) With $r=|x|>2R$, $\Omega=x/r$, the smooth amplitude

$$f_k(\Omega)=-\frac1{4\pi}\int_{B_R}e^{-ik\Omega\cdot y}V(y)u(y)dy$$

satisfies $\Psi=e^{ikd\cdot x}+e^{ikr}f_k(\Omega)/r+\mathcal E(r,\Omega)$.
The error and its first radial derivative are bounded uniformly in $\Omega$
by $C(k,R,\|Vu\|_1)r^{-2}$. For every fixed finite product $D_\Omega$ of
smooth tangential differential operators on $S^2$, also
$|D_\Omega\mathcal E|+|D_\Omega\partial_r\mathcal E|\le C_Dr^{-2}$.

(c) Fix normalization constants $\hbar,m>0$. The scattered radial current is

$$j_r^{\mathrm{sc}}(r,\Omega)=\frac\hbar m\operatorname{Im}(\overline{\Psi_{\mathrm{sc}}}\,\partial_r\Psi_{\mathrm{sc}})=\frac{\hbar k}{m}\frac{|f_k(\Omega)|^2}{r^2}+O(r^{-3}),$$

uniformly in $\Omega$. With incident plane-wave flux density
$J_{\mathrm{in}}=\hbar k/m$, the stationary elastic model's differential
cross section is

$$\frac{d\sigma}{d\Omega}=\lim_{r\to\infty}\frac{r^2j_r^{\mathrm{sc}}(r,\Omega)}{J_{\mathrm{in}}}=|f_k(\Omega)|^2,\qquad \sigma=\int_{S^2}|f_k|^2d\sigma<\infty.$$

These are conditional model statements. Measured count rates additionally
require incident fluence, target and detector acceptance, efficiency and
background modelling; none is asserted. Part (a) is a local regularity
statement for a stationary scattering wave, with no assertion of membership
in the global $L^2$ operator domain.

## Facts & Assumptions

**Given:** $V,R,k,d$, the operator $K_k$, the vectors/functions $u,\Psi$,
and the positive current-normalization constants $\hbar,m$.

[F1] Required repaired Fredholm conclusion: for every real bounded compact $V$ and every $k>0$, $I+K_k$ is a bounded bijection of $L^2(B_R)$ ([[thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility]]). The research finite-rank/Neumann draft derives that conclusion under CC using the exact repaired positive-eigenvalue/UCP suppliers; neither that research draft nor the present item certifies the still-held production chain. Invertibility here concerns $I+K_k$, never $K_k$ itself.

[F2] Interior regularity [[thm-interior-h-two-regularity-for-divergence-form-equations]]: a weak $H^1_{\mathrm{loc}}$ solution with local $L^2$ Laplacian is $H^2_{\mathrm{loc}}$; the spaces are those of [[def-sobolev-space-wkp-and-its-norm]]. For $q\in L^1$ and $g\in L^2$, weighted Cauchy-Schwarz and Tonelli give $\|q*g\|_2\le\|q\|_1\|g\|_2$, because $|\int q(z)g(x-z)dz|^2\le\|q\|_1\int|q(z)||g(x-z)|^2dz$.

## Proof

1.1 Actual source and local regularity: [F1] makes $u\in L^2(B_R)$. Therefore $g=Vu$, zero-extended outside the ball, belongs to $L^2\cap L^1$ with $\|g\|_2\le\|V\|_\infty\|u\|_2$ and $\|g\|_1\le|B_R|^{1/2}\|g\|_2$. On a fixed bounded $x$-region only bounded-radius values of $G_k$ and $\nabla G_k$ enter their convolutions with $g$; those restricted kernels are in $L^1$, since $G_k=O(|z|^{-1})$ and $\nabla G_k=O(|z|^{-2})+O(|z|^{-1})$ near zero. Apply the explicit estimate [F2] to the function and each distributional first derivative to obtain $G_k*g\in H^1_{\mathrm{loc}}$. Radial differentiation away from zero gives $(-\Delta-k^2)G_k=0$, and integration over a shrinking sphere gives the delta mass $1$ from $-\partial_r(1/(4\pi r))$; thus $(-\Delta-k^2)G_k=\delta_0$ distributionally. Consequently $(-\Delta-k^2)\Psi=-g$. Both $g$ and $\Psi$ are locally square integrable, so $\Delta\Psi=-k^2\Psi+g\in L^2_{\mathrm{loc}}$ and [F2] gives $\Psi\in H^2_{\mathrm{loc}}$. The defining equation $(I+K_k)u=e^{ikd\cdot x}|_{B_R}$ identifies $\Psi=u$ on $B_R$, hence $g=V\Psi$ everywhere and $(-\Delta+V-k^2)\Psi=0$. This proves (a), without an arbitrary-$L^1$ regularity assertion. [F1, F2, given, algebra]

2.1 Uniform smooth far-field kernel: set $s=1/r$ and $H(s,\Omega,y)=(1-2s\Omega\cdot y+s^2|y|^2)^{1/2}$. For $0\le s\le(2R)^{-1}$ and $|y|\le R$, $H\ge1/2$; the quotient $(H-1)/s$ extends smoothly to $s=0$ by the identity $(H-1)/s=(-2\Omega\cdot y+s|y|^2)/(H+1)$, with value $-\Omega\cdot y$ there. Define $A(s,\Omega,y)=H^{-1}\exp(ik(H-1)/s)$ using that extension. Then $G_k(r\Omega-y)=e^{ikr}A(s,\Omega,y)/(4\pi r)$ and $A(0,\Omega,y)=e^{-ik\Omega\cdot y}$. All fixed-order $s$ and angular derivatives of $A$ are uniformly bounded on this compact parameter set. The fundamental theorem in $s$ gives $A(s)-A(0)=s\int_0^1\partial_sA(ts)dt$; the same formula after any $D_\Omega$ bounds its angular derivatives by $C_Ds$. Integrating against $g\in L^1$ proves smoothness of $f_k$ by dominated differentiation and gives $\mathcal E=-(4\pi)^{-1}e^{ikr}r^{-1}\int[A(1/r)-A(0)]g(y)dy$ with all stated angular error bounds. Differentiating this exact formula in $r$ produces the three factors $ik/r$, $-1/r^2$ and $-1/r^3$ multiplying respectively $A(1/r)-A(0)$, that same difference, and $\partial_sA(1/r)$; their bounds give $|D_\Omega\partial_r\mathcal E|\le C_Dr^{-2}$. This proves (b), including derivative control, directly from the actual compact source. [step 1.1, construct, algebra]

3.1 Direct scattered current: step 2.1 gives $\Psi_{\mathrm{sc}}=e^{ikr}f_k/r+O(r^{-2})$ and $\partial_r\Psi_{\mathrm{sc}}=ik e^{ikr}f_k/r+O(r^{-2})$ uniformly on the sphere. Their product is $\overline{\Psi_{\mathrm{sc}}}\partial_r\Psi_{\mathrm{sc}}=ik|f_k|^2/r^2+O(r^{-3})$, since $f_k$ is bounded and each error is $O(r^{-2})$. Taking its imaginary part and multiplying by $\hbar/m$ yields the claimed $j_r^{\mathrm{sc}}$. Independently, for $\Psi_{\mathrm{in}}=e^{ikd\cdot x}$ the vector current is $(\hbar/m)\operatorname{Im}(\overline{\Psi_{\mathrm{in}}}\nabla\Psi_{\mathrm{in}})=(\hbar k/m)d$, so incident flux through a plane normal to $d$ is $J_{\mathrm{in}}=\hbar k/m$. Dividing the scattered flux per asymptotic solid angle by that incident density gives $d\sigma/d\Omega=|f_k|^2$. Uniform convergence allows integration over the finite-area sphere, giving $\sigma=\int_{S^2}|f_k|^2d\sigma<\infty$. No incident/scattered interference term enters this scattered-component computation, and no assertion that such terms average away is needed. Parts (a)-(c) follow. [step 1.1, step 2.1, algebra] ∎

## Remarks

Research-only repair draft, awaiting the sole spectral successor's mathematical review and completion of the held CC Fredholm/UCP/positive-eigenvalue chain. The proof above discharges the local-source, far-field and scattered-flux arguments once the exact [F1] conclusion is available; it does not turn held prerequisites into accepted assumptions or mark any production item ready. At $V=0$, $K_k=0$ and $I+K_k=I$; the construction gives the incident plane wave, $f_k=0$ and zero scattered cross section. This retains the original generic-potential/all-$k>0$ scope and normalization. No central-potential hypothesis, Born approximation, detector interpretation or global scattering-wave $L^2$ domain claim is introduced.
