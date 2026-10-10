---
id: lem-em-outgoing-source-helmholtz-and-diffraction
kind: lemma
domain: mathematics
title: "Outgoing source Helmholtz field: fundamental solution, Fraunhofer and Fresnel error terms"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [cor-second-green-identity-on-a-bounded-c-one-domain, def-laplacian-of-a-c2-function, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, lem-laplace-fundamental-kernel-is-locally-integrable, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, def-simple-integral-against-a-signed-or-complex-measure, def-total-variation-of-a-signed-or-complex-measure, thm-integral-triangle-inequality, def-countable-choice, thm-newton-leibniz-with-interior-derivative, def-euclidean-inner-product]
dependency_roles:
  cor-second-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  lem-laplace-fundamental-kernel-is-locally-integrable: mathematical-premise
  thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation: mathematical-premise
  def-simple-integral-against-a-signed-or-complex-measure: mathematical-premise
  def-total-variation-of-a-signed-or-complex-measure: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
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
      locator: "Printed pp. 88-95: scalar diffraction integrals and the Fraunhofer/Fresnel regimes, used as physical motivation. No empirical or modelling claim is attributed to the source; the aperture is an explicitly specified scalar source."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. For $k>0$ define $G_k(x)=e^{ik|x|}/(4\pi|x|)$ off the origin, a locally integrable complex function. Then

$$(-\Delta-k^2)G_k=\delta_0$$

distributionally ([[def-laplacian-of-a-c2-function]]). For a finite complex measure $\alpha$ supported in $B_a(0)$, the field $u=G_k*\alpha$ is smooth outside the support, solves $(\Delta+k^2)u=0$ there and is outgoing: for $x=rn$, $r\ge2a$,

$$u(rn)=\frac{e^{ikr}}{4\pi r}\int e^{-ikn\cdot y}\,d\alpha(y)+O\!\Bigl(\frac{\|\alpha\|_{\mathrm{TV}}}{r}\Bigl[\frac{a}{r}+\frac{ka^2}{r}\Bigr]\Bigr)$$

uniformly in direction, and $r(\partial_ru-iku)=O(r^{-1})$ uniformly. For a planar aperture $y=(y_1,y_2,0)$ with observation $x=(\xi_1,\xi_2,z)$, $z>0$, $|\xi|\le b$, $a+b\ll z$, the Fresnel approximation replaces $R=|x-y|$ by $z+|\xi-y|^2/(2z)$ and $1/R$ by $1/z$ with phase error $O(k(a+b)^4/z^3)$ and relative amplitude error $O((a+b)^2/z^2)$, hence absolute field error $O(\|\alpha\|_{\mathrm{TV}}z^{-1}[(a+b)^2/z^2+k(a+b)^4/z^3])$. Aperture data are an explicitly specified scalar source, not asserted to be the unknown exact Maxwell boundary traces, and no uniqueness or existence for arbitrary obstacle boundary data is claimed.

## Facts & Assumptions
**Given:** Countable Choice, $k>0$, the kernel $G_k$, a finite complex measure $\alpha$ on the Borel sets of $\mathbb R^3$ supported in $B_a(0)$, meaning $|\alpha|(\mathbb R^3\setminus B_a(0))=0$, and the field $u(x)=\int G_k(x-y)d\alpha(y)$.

[F1] **Radial Laplacian and derivative rules.** For a $C^2$ function $f$ of $r=|x|$ one has $\Delta f=f''(r)+2f'(r)/r$ for $x\ne0$ ([[def-laplacian-of-a-c2-function]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]); the modulus $|G_k(x)|=1/(4\pi|x|)$ is the real fundamental kernel, which is locally integrable ([[lem-laplace-fundamental-kernel-is-locally-integrable]]).

[F2] **Second Green identity.** On a bounded $C^1$ domain, $\int_\Omega(v\Delta u-u\Delta v)=\int_{\partial\Omega}(v\partial_\nu u-u\partial_\nu v)$ with outward normal ([[cor-second-green-identity-on-a-bounded-c-one-domain]]).

[F3] **Measure integrals and total variation.** Integrals against a signed or complex measure are those of [[def-simple-integral-against-a-signed-or-complex-measure]], the total variation $\|\alpha\|_{\mathrm{TV}}=|\alpha|(\mathbb R^3)$ is that of [[def-total-variation-of-a-signed-or-complex-measure]], and $\bigl|\int h\,d\alpha\bigr|\le\int|h|\,d|\alpha|\le\sup|h|\,\|\alpha\|_{\mathrm{TV}}$ ([[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]]), so bounded continuous kernels are integrable and the modulus bound of [[thm-integral-triangle-inequality]] applies.

[F4] **FTC with interior derivative.** If $h$ is continuous on $[a,b]$, differentiable on $(a,b)$ with integrable derivative, then $\int_a^bh'=h(b)-h(a)$ ([[thm-newton-leibniz-with-interior-derivative]]); applied to $|e^{i\theta}|$-type and square-root expressions this yields $|e^{i\theta}-1|\le|\theta|$ and the Taylor remainders used below. The Euclidean inner product and norm are those of [[def-euclidean-inner-product]].



## Proof

**Proof technique:** direct.

1.1 For $x\ne0$ write $r=|x|$; then $\partial_ir=x_i/r$ and the chain and algebra rules [F1] give $\Delta(f\circ r)=f''(r)+2f'(r)/r$ for $C^2$ functions $f$ of one variable, and with $f(r)=e^{ikr}/(4\pi r)$ a direct computation gives $f''+2f'/r=-k^2f$, so $(\Delta+k^2)G_k=0$ off the origin; since $|G_k(x)|=1/(4\pi|x|)$ is locally integrable, $G_k$ defines a regular distribution. [given, F1, algebra]

1.2 For fixed $x=rn$ with $r\ge2a$ and $y\in B_a(0)$ put $h(s)=|x-sy|$, $R=h(1)$; then $h$ is $C^2$ with $h(0)=r$, $h'(0)=-n\cdot y$, $h''(s)=|y|^2/|x-sy|-((x-sy)\cdot y)^2/|x-sy|^3$ and $|h''(s)|\le2a^2/(r-a)\le4a^2/r$ because $|x-sy|\ge r-s|y|\ge r-a\ge r/2$; hence two applications of the FTC [F4] give $|R-r+n\cdot y|\le\sup|h''|/2\le2a^2/r$ and, since $R\ge r-a\ge r/2$ and $|R-r|\le a+2a^2/r\le2a$, also $|r/R-1|\le4a/r$. [given, F4, algebra]

2.1 For $\psi\in C_c^\infty(\mathbb R^3)$ choose $R$ with $\operatorname{supp}\psi\subset B_R(0)$ and $0<\delta<R$, and apply the second Green identity [F2] on $\Omega_\delta=B_R(0)\setminus\overline B_\delta(0)$ to $u=G_k$, $v=\psi$: since $\Delta G_k=-k^2G_k$ there, $\int_{\Omega_\delta}G_k(\Delta+k^2)\psi=\int_{\partial\Omega_\delta}(G_k\partial_\nu\psi-\psi\partial_\nu G_k)$; the outer sphere term vanishes because $\psi$ vanishes there, and on the inner sphere, where the outward normal of $\Omega_\delta$ is $-x/\delta$, one has $G_k=1/(4\pi\delta)+O(1)$ and $\partial_rG_k=-1/(4\pi\delta^2)+O(1/\delta)$, so the term $\int\psi\partial_\nu G_k$ contributes $-\psi(0)+o(1)$ and the derivative-test term is $O(\delta)$; hence $\int_{\mathbb R^3}G_k(\Delta+k^2)\psi=-\psi(0)$, that is $\langle(-\Delta-k^2)T_{G_k},\psi\rangle=\psi(0)$, so $(-\Delta-k^2)G_k=\delta_0$ distributionally. [step 1.1, F2, F3, algebra]

2.2 The field $u(x)=\int G_k(x-y)d\alpha(y)$ is smooth outside $\operatorname{supp}\alpha$ and solves $(\Delta+k^2)u=0$ there: on a compact observation set $K$ with $d=\operatorname{dist}(K,\operatorname{supp}\alpha)>0$ the kernel and all its parameter derivatives are continuous and uniformly bounded on $K\times\operatorname{supp}\alpha$, so the difference-quotient limits pass through the measure integral by the total-variation bound [F3], giving all derivatives by differentiation under the integral sign, and the two spatial derivatives may be moved inside to apply step 1.1 at $x-y\ne0$. [step 1.1, F3, F1, algebra]

2.3 For $r\ge2a$ the kernel difference from the Fraunhofer product is bounded by $\bigl|G_k(x-y)-\frac{e^{ikr}}{4\pi r}e^{-ikn\cdot y}\bigr|\le\frac1{4\pi}\bigl[\frac{|e^{ikR}-e^{ik(r-n\cdot y)}|}{R}+\frac{|r-R|}{rR}\bigr]\le\frac1{4\pi}\bigl[\frac{k|R-r+n\cdot y|}{R}+\frac{|r-R|}{rR}\bigr]\le\frac{C}{r}\Bigl[\frac{a}{r}+\frac{ka^2}{r}\Bigr]$, using $|e^{i\theta}-1|\le|\theta|$ [F4] with the phase error of step 1.2 and $R\ge r/2$; integrating this difference against $\alpha$ with the total-variation bound [F3] gives the displayed Fraunhofer formula with the stated error, uniformly in the direction $n=x/r$. [step 1.2, F3, F4, algebra]

3.1 For the outgoing relation compute $\partial_rG_k(x-y)-ikG_k(x-y)=\frac{e^{ikR}}{4\pi R}\bigl[ik(\partial_rR-1)-\partial_rR/R\bigr]$ with $\partial_rR=(rn-y)\cdot n/R=1+O(a^2/r^2)$ and $1/R\le2/r$ by step 1.2, so $|\partial_rG_k(x-y)-ikG_k(x-y)|\le C(ka^2/r^3+1/r^2)$; integrating against $\alpha$ [F3] and multiplying by $r$ gives $r(\partial_ru-iku)=O(\|\alpha\|_{\mathrm{TV}}r^{-1}(1+ka^2/r))=O(r^{-1})$ uniformly, the term $ka^2/r$ being bounded because $r\ge2a$. [step 2.2, step 1.2, F3, algebra]

4.1 For the planar aperture write $x=(\xi,z)$, $y=(y_1,y_2,0)$ and $s=|\xi-y|^2/z^2$, so $R=z\sqrt{1+s}$; on the declared range $s\le s_0<1$ the FTC [F4] applied to $\sqrt{1+\sigma}$ and $(1+\sigma)^{-1/2}$ gives $|\sqrt{1+s}-1-s/2|\le s^2/8$ and $|(1+s)^{-1/2}-1|\le s/2$; hence the phase error is $kz|\sqrt{1+s}-1-s/2|\le kz s^2/8=k|\xi-y|^4/(8z^3)\le k(a+b)^4/(8z^3)$, the relative amplitude error is $|1/R-1/z|/(1/z)=|z/R-1|\le s/2\le(a+b)^2/(2z^2)$, and with $|e^{i\theta}-1|\le|\theta|$ [F4] the kernel error is at most $Cz^{-1}[(a+b)^2/z^2+k(a+b)^4/z^3]$; integrating against $\alpha$ with [F3] gives the stated absolute field error, while the aperture datum remains an explicitly specified scalar source and no uniqueness or existence statement for obstacle boundary data is made; Countable Choice is inherited from the cited Green, surface and measure interfaces and no stronger principle is used. [step 1.2, F3, F4, algebra] ∎
