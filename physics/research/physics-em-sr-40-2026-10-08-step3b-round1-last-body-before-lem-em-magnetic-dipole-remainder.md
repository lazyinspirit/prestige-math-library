---
id: lem-em-magnetic-dipole-remainder
kind: lemma
domain: mathematics
title: "Magnetic dipole expansion with an explicit uniform remainder"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 1
deps: [lem-em-coulomb-dipole-remainder, lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes, def-cross-product-in-r3, def-euclidean-inner-product, thm-integral-triangle-inequality, lem-the-divergence-and-curl-of-a-cross-product, def-countable-choice, thm-ftc-second-part, thm-differentiation-under-the-integral-sign, def-divergence-and-curl-of-a-c1-vector-field, thm-algebra-of-derivatives]
dependency_roles:
  lem-em-coulomb-dipole-remainder: mathematical-premise
  lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  lem-the-divergence-and-curl-of-a-cross-product: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Electromagnetism (University of Cambridge Part II lecture notes), printed pp. 60-63 (magnetic dipole moment and dipole field)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Magnetic dipole moment and dipole field formulas used as physical motivation; the uniform remainder estimates and the moment identities are proved locally through the cited published suppliers (in particular the Coulomb dipole remainder lemma)."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $\mu_0>0$ be any scalar parameter and let $J\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ with $\operatorname{div}J=0$ and $\operatorname{supp}J\subset B_a(0)$, $a>0$, and put $m=\tfrac12\int_{\mathbb R^3}y\times J(y)\,dy$ ([[def-cross-product-in-r3]]). Then for $r=|x|\ge2a$ the vector potential and magnetic field

$$A(x)=\frac{\mu_0}{4\pi}\int_{\mathbb R^3}\frac{J(y)}{|x-y|}\,dy,\qquad B=\operatorname{curl}A,$$

satisfy, uniformly in $n=x/r$,

$$A=\frac{\mu_0}{4\pi}\frac{m\times x}{r^3}+O\!\Bigl(\frac{\mu_0a^2\|J\|_1}{r^3}\Bigr),\qquad B=\frac{\mu_0}{4\pi}\frac{3n(m\cdot n)-m}{r^3}+O\!\Bigl(\frac{\mu_0a^2\|J\|_1}{r^4}\Bigr).$$

The constants in the $O$ terms are absolute (the second follows by differentiating the first, not by differentiating an unspecified remainder), and $\|J\|_1=\int|J|$.

## Facts & Assumptions
**Given:** Countable Choice, constants $\mu_0>0$, $a>0$, a divergence-free compactly supported smooth field $J$ with $\operatorname{supp}J\subseteq B_a(0)$, the moment $m=\tfrac12\int y\times J$, the potential $A$, and $r=|x|\ge2a$.

[F1] **Divergence integrals vanish.** If $F\in C^1(\mathbb R^3;\mathbb R^3)$ has $|F|\in L^1$ and $\operatorname{div}F\in L^1$, then $\int\operatorname{div}F=0$ ([[lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes]]).

[F2] **Coulomb dipole remainder.** Under $\mathrm{AC}_\omega$, for $\rho\in L^1$ supported in $B_a$ and $r\ge2a$, $\int\rho(y)/|x-y|\,dy=Q/r+\langle p,x\rangle/r^3+R(x)$ with $Q=\int\rho$, $p=\int y\rho(y)dy$ and $|R(x)|\le16a^2\|\rho\|_1/r^3$ ([[lem-em-coulomb-dipole-remainder]]).

[F3] **Cross product.** $u\times v$ is the bilinear alternating product of [[def-cross-product-in-r3]] and the pairing is that of [[def-euclidean-inner-product]]; for $C^1$ fields, $\operatorname{div}(F\times G)=\langle\operatorname{curl}F,G\rangle-\langle F,\operatorname{curl}G\rangle$ and $\operatorname{curl}(F\times G)=(\operatorname{div}G)F-(\operatorname{div}F)G+(DF)G-(DG)F$ ([[lem-the-divergence-and-curl-of-a-cross-product]]).

[F4] **FTC with interior derivative.** For $h$ continuous on $[0,1]$, differentiable on $(0,1)$ with integrable derivative, $\int_0^1h'=h(1)-h(0)$ ([[thm-ftc-second-part]]); applied twice to $t\mapsto|x-ty|^{-1}$ this gives the integral remainder formula used below.

[F5] **Differentiation under the integral sign and calculus.** Parameter differentiation under an integral with an integrable dominating function is available coordinatewise ([[thm-differentiation-under-the-integral-sign]]); the divergence and curl are those of [[def-divergence-and-curl-of-a-c1-vector-field]], and the ordinary derivative rules (product, chain, power) for the rational radial functions are available from [[thm-algebra-of-derivatives]]. The modulus of an integral is bounded by the integral of the modulus ([[thm-integral-triangle-inequality]]).



## Proof

**Proof technique:** direct.

1.1 For each $i$ the field $y\mapsto y_iJ(y)$ is compactly supported and smooth, and $\operatorname{div}(y_iJ)=J_i+y_i\operatorname{div}J=J_i$; both $|y_iJ|$ and $J_i$ are integrable, so [F1] gives $\int J_i=0$, that is $\int J=0$; similarly $\operatorname{div}(y_iy_jJ)=y_jJ_i+y_iJ_j$ is integrable with compactly supported smooth field $y_iy_jJ$, so [F1] gives $\int(y_jJ_i+y_iJ_j)=0$, that is the antisymmetry of $M_{ij}:=\int y_jJ_i$. [given, F1, F5, algebra]

2.1 The moment $m=\tfrac12\int y\times J$ is finite and $M_{ij}=-\varepsilon_{ijk}m_k$: indeed $\varepsilon_{ijk}m_k=\tfrac12\varepsilon_{ijk}\varepsilon_{kpq}M_{pq}=\tfrac12(\delta_{ip}\delta_{jq}-\delta_{iq}\delta_{jp})M_{pq}=\tfrac12(M_{ij}-M_{ji})=M_{ij}$ by the antisymmetry of step 1.1 and the $\varepsilon$-identity; consequently $(Mx)_i=\sum_jM_{ij}x_j=\sum_j(-\varepsilon_{ijk}m_k)x_j=-(x\times m)_i=(m\times x)_i$, so $Mx=m\times x$. [step 1.1, given, F3, algebra]

3.1 Apply the Coulomb dipole expansion [F2] to each component $\rho=J_i$: since $Q_i=\int J_i=0$ and $p_i=\int yJ_i(y)dy$ satisfies $\langle p_i,x\rangle=(Mx)_i=(m\times x)_i$ by step 2.1, and $|R_i(x)|\le16a^2\|J_i\|_1/r^3$, summing over the three components gives $A(x)=\frac{\mu_0}{4\pi}\bigl(\frac{m\times x}{r^3}+R(x)\bigr)$ with $\|R(x)\|_2\le48a^2\|J\|_1/r^3$, so $A=\frac{\mu_0}{4\pi}\frac{m\times x}{r^3}+O(\mu_0a^2\|J\|_1/r^3)$ uniformly for $r\ge2a$ with the absolute constant $12/\pi$. [step 2.1, given, F2, F5, algebra]

4.1 The explicit remainder is $h_2(x,y)=1/|x-y|-1/r-\langle x,y\rangle/r^3$ with $R(x)=\int J(y)h_2(x,y)dy$; applying [F4] twice to $t\mapsto|x-ty|^{-1}$ gives $h_2(x,y)=\int_0^1(1-s)y_jy_k\partial_j\partial_k|x-sy|^{-1}ds$ (derivatives in $x$), and since $|x-sy|\ge r-s|y|\ge r/2$ on the support, each third derivative $\partial_i\partial_j\partial_k|x-sy|^{-1}$ is bounded by an absolute constant $C_3$ times $|x-sy|^{-4}\le16/r^4$; hence $|\nabla_xh_2|\le8C_3a^2/r^4$ and, because $\operatorname{curl}_x(J(y)h_2)=\nabla_xh_2\times J(y)$, the modulus bound [F5] gives $\|\operatorname{curl}R(x)\|_2\le8C_3a^2\|J\|_1/r^4$. [step 3.1, F4, F5, algebra]

5.1 For the leading term compute with [F3] and the constant field $F=m$, $G=x/r^3$: $\operatorname{div}(x/r^3)=3/r^3-3r^2/r^5=0$ and the Jacobian of $x/r^3$ applied to $m$ is $m/r^3-3x\langle x,m\rangle/r^5$ by [F5]; hence $\operatorname{curl}(m\times x/r^3)=\operatorname{curl}(F\times G)=(\operatorname{div}G)m-(DG)m=0-m/r^3+3x\langle x,m\rangle/r^5=\frac{3n(m\cdot n)-m}{r^3}$ with $n=x/r$, because $\langle x,m\rangle/r^5=(m\cdot n)/(r^3)$; combining with steps 3.1 and 4.1 and differentiating the explicit formula for $A$ under the integral sign [F5] on the region $r\ge2a>\operatorname{diam}(\operatorname{supp}J)$ gives $B=\operatorname{curl}A=\frac{\mu_0}{4\pi}\frac{3n(m\cdot n)-m}{r^3}+O(\mu_0a^2\|J\|_1/r^4)$ uniformly in $n=x/r$ with an absolute constant. [step 3.1, step 4.1, given, F3, F5, algebra]

6.1 The two $O$ constants depend only on absolute numbers and $\pi$, not on $J$, $a$, $x$ or $r$, and the second was obtained by differentiating the explicit remainder of the first rather than an unspecified $O$ term; Countable Choice is inherited from the Coulomb dipole expansion [F2] and the integrability interfaces of [F1], and no stronger principle is used. This proves both estimates. [step 3.1, step 5.1, given, F1, F2, algebra] ∎
