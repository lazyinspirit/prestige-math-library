---
id: lem-em-outgoing-source-helmholtz-and-diffraction
kind: lemma
domain: mathematics
title: "Outgoing source Helmholtz field: fundamental solution, Fraunhofer and Fresnel error terms"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [def-locally-integrable-function-as-a-regular-distribution, def-distributional-derivative, def-dirac-delta-and-its-derivatives, cor-second-green-identity-on-a-bounded-c-one-domain, def-laplacian-of-a-c2-function, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, lem-laplace-fundamental-kernel-is-locally-integrable, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, def-integration-against-a-signed-or-complex-measure, def-total-variation-of-a-signed-or-complex-measure, thm-integral-triangle-inequality, def-countable-choice, thm-newton-leibniz-with-interior-derivative, def-euclidean-inner-product, def-complex-exponential, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-is-entire-with-derivative-itself, cor-vector-valued-ftc-and-lipschitz-bound, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, lem-complex-conjugation-and-modulus-laws, thm-real-power-continuity-and-derivatives]
dependency_roles:
  def-locally-integrable-function-as-a-regular-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  cor-second-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  lem-laplace-fundamental-kernel-is-locally-integrable: mathematical-premise
  thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation: mathematical-premise
  def-integration-against-a-signed-or-complex-measure: mathematical-premise
  def-total-variation-of-a-signed-or-complex-measure: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Section 10.47 (spherical Bessel and Hankel functions) and Section 10.50 (Wronskians)"
      url: "https://dlmf.nist.gov/10.50"
      locator: "Sections 10.47 and 10.50 record the outgoing spherical wave solution of the Helmholtz equation and its Wronskian normalization used as the contextual statement. The distributional identity, the norm-remainder calculations and the Fraunhofer/Fresnel estimates are supplied by the explicit local arguments below."
    - title: "David Tong, Electromagnetism (University of Cambridge Part II lecture notes)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Printed pp. 88-95 discuss polarization, conductor reflection, electromagnetic energy transport and the introduction to relativity. They provide general wave context only. The scalar aperture construction and Fraunhofer/Fresnel error estimates are proved locally below and are not attributed to these pages."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. For $k>0$ define $G_k(x)=e^{ik|x|}/(4\pi|x|)$ off the origin, a locally integrable complex function. Then

$$(-\Delta-k^2)G_k=\delta_0$$

distributionally: for every $\psi\in C_c^\infty(\mathbb R^3;\mathbb C)$, $T_{G_k}(\psi)=\int G_k\psi$, $\delta_0(\psi)=\psi(0)$, and $\langle\partial_iT,\psi\rangle=-\langle T,\partial_i\psi\rangle$ ([[def-locally-integrable-function-as-a-regular-distribution]], [[def-distributional-derivative]], [[def-dirac-delta-and-its-derivatives]]); thus the displayed identity means $\int G_k(-\Delta-k^2)\psi=\psi(0)$. For $a>0$ and a finite complex measure $\alpha$ supported in the closed ball $\overline{B_a(0)}$, the field $u=G_k*\alpha$ is smooth outside the support, solves $(\Delta+k^2)u=0$ there and is outgoing: for $x=rn$, $r\ge2a$,

$$u(rn)=\frac{e^{ikr}}{4\pi r}\int e^{-ikn\cdot y}\,d\alpha(y)+O\!\Bigl(\frac{\|\alpha\|_{\mathrm{TV}}}{r}\Bigl[\frac{a}{r}+\frac{ka^2}{r}\Bigr]\Bigr)$$

uniformly in direction, and $r(\partial_ru-iku)=O(r^{-1})$ uniformly. For a planar aperture $y=(y_1,y_2,0)$ with observation $x=(\xi_1,\xi_2,z)$, $z>0$, $|\xi|\le b$, $0\le b$ and $(a+b)/z<1$, the Fresnel approximation replaces $R=|x-y|$ by $z+|\xi-y|^2/(2z)$ and $1/R$ by $1/z$ with phase error $O(k(a+b)^4/z^3)$ and relative amplitude error $O((a+b)^2/z^2)$, hence absolute field error $O(\|\alpha\|_{\mathrm{TV}}z^{-1}[(a+b)^2/z^2+k(a+b)^4/z^3])$. Aperture data are an explicitly specified scalar source, not asserted to be the unknown exact Maxwell boundary traces, and no uniqueness or existence for arbitrary obstacle boundary data is claimed.

## Facts & Assumptions
**Given:** Countable Choice, $k>0$, a radius $a>0$, the kernel $G_k$ (with arbitrary value $G_k(0)=0$ for the integral representation), a finite complex measure $\alpha$ on the Borel sets of $\mathbb R^3$ supported in $\overline{B_a(0)}$, meaning $|\alpha|(\mathbb R^3\setminus\overline{B_a(0)})=0$, and, for $x\notin\operatorname{supp}\alpha$, the field $u(x)=\int G_k(x-y)d\alpha(y)$. No value on the source support is needed.

[F1] **Radial Laplacian and derivative rules.** For a $C^2$ function $f$ of $r=|x|$ one has $\Delta f=f''(r)+2f'(r)/r$ for $x\ne0$ ([[def-laplacian-of-a-c2-function]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]); the modulus $|G_k(x)|=1/(4\pi|x|)$ is the real fundamental kernel, which is locally integrable ([[lem-laplace-fundamental-kernel-is-locally-integrable]]).

[F2] **Second Green identity.** On a bounded $C^1$ domain, $\int_\Omega(v\Delta u-u\Delta v)=\int_{\partial\Omega}(v\partial_\nu u-u\partial_\nu v)$ with outward normal ([[cor-second-green-identity-on-a-bounded-c-one-domain]]); apply the real identity to real and imaginary components and combine complex-bilinearly.

[F3] **General measure integrals and total variation.** The integral is that of [[def-integration-against-a-signed-or-complex-measure]]: $L^1(\alpha)=L^1(|\alpha|)$, and its value is the limit of the simple integrals of $L^1(|\alpha|)$ approximants. The total variation is $\|\alpha\|_{\mathrm{TV}}=|\alpha|(\mathbb R^3)$ ([[def-total-variation-of-a-signed-or-complex-measure]]). For a Borel function $h$ with $|h|\le M$ $|\alpha|$-almost everywhere, $\int|h|d|\alpha|\le M\|\alpha\|_{\mathrm{TV}}<\infty$, so $h\in L^1(\alpha)$ and $\bigl|\int h\,d\alpha\bigr|\le\int|h|\,d|\alpha|\le M\|\alpha\|_{\mathrm{TV}}$ ([[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]]). Kernels continuous and bounded on the compact source support extended by zero off that closed support are Borel, and their values off that support do not affect the integral. The integral triangle bound is [[thm-integral-triangle-inequality]].

[F4] **Real calculus and norm conventions.** The real Newton–Leibniz theorem [[thm-newton-leibniz-with-interior-derivative]] applies to continuous functions on a closed interval with the stated integrable interior derivative. Positive real powers have derivatives $(x^p)'=px^{p-1}$ and $(x^p)''=p(p-1)x^{p-2}$ by applying the first-derivative rule twice ([[thm-real-power-continuity-and-derivatives]]), supplying the square-root and reciprocal-square-root derivatives below. The Euclidean inner product and norm are those of [[def-euclidean-inner-product]].

[F5] **Complex exponential.** $\exp z$ is the convergent power-series exponential of [[def-complex-exponential]]. Its addition law is $\exp(z+w)=\exp z\exp w$ and it extends the real exponential ([[thm-complex-exponential-addition-and-real-extension]]). For real $t$, $\exp(it)=\cos t+i\sin t$ and $|\exp(it)|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]). It is entire with $\exp'(z)=\exp z$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]); equivalently, along a real parameter, the sine/cosine derivatives and chain rule give $(\exp(ikt))'=ik\exp(ikt)$ and all higher derivatives.

[F6] **Phase norm and Lipschitz tools.** $\sin'=\cos$, $\cos'=-\sin$ ([[thm-sine-and-cosine-derivatives]]) and $\cos^2t+\sin^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]). The complex modulus is the Euclidean norm of its two real coordinates, is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]). Clause 2 of [[cor-vector-valued-ftc-and-lipschitz-bound]] says that a continuous curve $v:[A,B]\to\mathbb R^m$, differentiable inside with $\|v'\|_2\le M$, is $M$-Lipschitz.

[F7] **Distribution conventions.** A locally integrable complex kernel defines $T_f(\psi)=\int f\psi$ ([[def-locally-integrable-function-as-a-regular-distribution]]), distributional derivatives pair by $\langle\partial_iT,\psi\rangle=-\langle T,\partial_i\psi\rangle$ ([[def-distributional-derivative]]), and $\delta_0(\psi)=\psi(0)$ ([[def-dirac-delta-and-its-derivatives]]). Pairings are complex-bilinear, without conjugating the test.

## Proof

**Proof technique:** direct.

1.1 For real $\theta\ne0$, set $A=\min(0,\theta)$, $B=\max(0,\theta)$ and $v(t)=(\cos t,\sin t)$ on $[A,B]$. By [F6] this curve is continuous on the closed interval and differentiable inside, with $v'(t)=(-\sin t,\cos t)$ and $\|v'(t)\|_2=1$. The Lipschitz clause with $m=2$, $M=1$ gives $\|v(\theta)-v(0)\|_2\le|\theta|$. Euler's formula [F5] and the modulus convention [F6] identify this with $|e^{i\theta}-1|\le|\theta|$; for $\theta=0$ the inequality is equality. For real $P,Q$, the addition law and unit modulus [F5] give $|e^{iP}-e^{iQ}|=|e^{iQ}(e^{i(P-Q)}-1)|\le|P-Q|$. Thus the phase bound holds for either sign and for every real phase pair, without differentiating a modulus. [F5, F6, algebra]

1.2 For $x\ne0$ write $r=|x|$; then $\partial_ir=x_i/r$ and the chain and algebra rules [F1] give $\Delta(f\circ r)=f''(r)+2f'(r)/r$ for $C^2$ functions $f$ of one variable, and with $f(r)=e^{ikr}/(4\pi r)$ a direct computation gives $f''+2f'/r=-k^2f$, so $(\Delta+k^2)G_k=0$ off the origin; since $|G_k(x)|=1/(4\pi|x|)$ is locally integrable, $G_k$ defines a regular distribution. [given, F1, F5, F6, F7, algebra]

1.3 For fixed $x=rn$ with $r\ge2a$ and $y\in\overline{B_a(0)}$ put $h(s)=|x-sy|$, $R=h(1)$; then $h$ is $C^2$ with $h(0)=r$, $h'(0)=-n\cdot y$, $h''(s)=|y|^2/|x-sy|-((x-sy)\cdot y)^2/|x-sy|^3$ and $|h''(s)|\le2a^2/(r-a)\le4a^2/r$ because $|x-sy|\ge r-s|y|\ge r-a\ge r/2$; hence two applications of the FTC [F4] give $|R-r+n\cdot y|\le\sup|h''|/2\le2a^2/r$ and, since $R\ge r-a\ge r/2$ and $|R-r|\le a+2a^2/r\le2a$, also $|r/R-1|\le4a/r$. [given, F4, algebra]

2.1 For $\psi\in C_c^\infty(\mathbb R^3;\mathbb C)$ choose $R$ with $\operatorname{supp}\psi\subset B_R(0)$ and $0<\delta<R$, and apply the second Green identity [F2] on $\Omega_\delta=B_R(0)\setminus\overline B_\delta(0)$ to $u=G_k$, $v=\psi$: since $\Delta G_k=-k^2G_k$ there, $\int_{\Omega_\delta}G_k(\Delta+k^2)\psi=\int_{\partial\Omega_\delta}(G_k\partial_\nu\psi-\psi\partial_\nu G_k)$; the outer sphere term vanishes because $\psi$ vanishes there, and on the inner sphere, where the outward normal of $\Omega_\delta$ is $-x/\delta$, one has $G_k=1/(4\pi\delta)+O(1)$ and $\partial_rG_k=-1/(4\pi\delta^2)+O(1/\delta)$, so the boundary summand $-\int\psi\partial_\nu G_k$ contributes $-\psi(0)+o(1)$ and the derivative-test term is $O(\delta)$; hence $\int_{\mathbb R^3}G_k(\Delta+k^2)\psi=-\psi(0)$, that is $\langle(-\Delta-k^2)T_{G_k},\psi\rangle=\psi(0)$, so $(-\Delta-k^2)G_k=\delta_0$ distributionally. [step 1.2, step 1.1, F2, F3, F5, F7, algebra]

2.2 If $\alpha=0$, the integral and every asserted field bound vanish. Otherwise the field $u(x)=\int G_k(x-y)d\alpha(y)$ is smooth outside $\operatorname{supp}\alpha$ and solves $(\Delta+k^2)u=0$ there: on a compact observation set $K$ with $d=\operatorname{dist}(K,\operatorname{supp}\alpha)>0$ the kernel and all its parameter derivatives are continuous and uniformly bounded on $K\times\operatorname{supp}\alpha$, so the difference-quotient limits pass through the measure integral by the total-variation bound [F3], giving all derivatives by differentiation under the integral sign, and the two spatial derivatives may be moved inside to apply step 1.2 at $x-y\ne0$. [step 1.2, F3, F1, algebra]

2.3 For $r\ge2a$ the kernel difference from the Fraunhofer product is bounded by $\bigl|G_k(x-y)-\frac{e^{ikr}}{4\pi r}e^{-ikn\cdot y}\bigr|\le\frac1{4\pi}\bigl[\frac{|e^{ikR}-e^{ik(r-n\cdot y)}|}{R}+\frac{|r-R|}{rR}\bigr]\le\frac1{4\pi}\bigl[\frac{k|R-r+n\cdot y|}{R}+\frac{|r-R|}{rR}\bigr]\le\frac{C}{r}\Bigl[\frac{a}{r}+\frac{ka^2}{r}\Bigr]$, using $|e^{i\theta}-1|\le|\theta|$ from step 1.1 with the phase error of step 1.3 and $R\ge r/2$; integrating this difference against $\alpha$ with the total-variation bound [F3] gives the displayed Fraunhofer formula with the stated error, uniformly in the direction $n=x/r$. [step 1.3, step 1.1, F3, F4, F5, F6, algebra]

3.1 For the outgoing relation compute $\partial_rG_k(x-y)-ikG_k(x-y)=\frac{e^{ikR}}{4\pi R}\bigl[ik(\partial_rR-1)-\partial_rR/R\bigr]$ with $\partial_rR=(r-n\cdot y)/R$, $|\partial_rR|\le1$ and $|\partial_rR-1|=|R-r+n\cdot y|/R\le4a^2/r^2$ and $1/R\le2/r$ by step 1.3, so $|\partial_rG_k(x-y)-ikG_k(x-y)|\le C(ka^2/r^3+1/r^2)$; integrating against $\alpha$ [F3] and multiplying by $r$ gives $r(\partial_ru-iku)=O(\|\alpha\|_{\mathrm{TV}}r^{-1}(1+ka^2/r))=O(r^{-1})$ uniformly, the term $ka^2/r$ being bounded because $r\ge2a$. [step 2.2, step 1.3, F3, F5, F6, algebra]

4.1 For the planar aperture write $x=(\xi,z)$, $y=(y_1,y_2,0)$ and $s=|\xi-y|^2/z^2$, so $R=z\sqrt{1+s}$; on the declared range $s\le s_0<1$ the derivatives in [F4] give $|(\sqrt{1+\sigma})^{\prime\prime}|=\tfrac14(1+\sigma)^{-3/2}\le1/4$ and $|((1+\sigma)^{-1/2})^{\prime}|=\tfrac12(1+\sigma)^{-3/2}\le1/2$ on $[0,s]$; integrating the second-derivative bound twice and the first-derivative bound once by the FTC gives $|\sqrt{1+s}-1-s/2|\le s^2/8$ and $|(1+s)^{-1/2}-1|\le s/2$; hence the phase error is $kz|\sqrt{1+s}-1-s/2|\le kz s^2/8=k|\xi-y|^4/(8z^3)\le k(a+b)^4/(8z^3)$, the relative amplitude error is $|1/R-1/z|/(1/z)=|z/R-1|\le s/2\le(a+b)^2/(2z^2)$, and with $|e^{i\theta}-1|\le|\theta|$ from step 1.1 the kernel error is at most $Cz^{-1}[(a+b)^2/z^2+k(a+b)^4/z^3]$; integrating against $\alpha$ with [F3] gives the stated absolute field error, while the aperture datum remains an explicitly specified scalar source and no uniqueness or existence statement for obstacle boundary data is made; Countable Choice is inherited from the cited Green, surface and measure interfaces and no stronger principle is used. [step 1.3, step 1.1, F3, F4, F5, F6, algebra] ∎
