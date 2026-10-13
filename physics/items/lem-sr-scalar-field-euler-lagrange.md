---
id: lem-sr-scalar-field-euler-lagrange
kind: lemma
title: "First variation of the scalar-field action and the Euler-Lagrange equation"
status: published
origin: pipeline
domain: mathematics
deps: [lem-sr-compact-variation-and-fundamental-lemma, def-ck-tensor-field-on-minkowski-space, def-sr-affine-minkowski-model, def-lorentz-form-and-inertia, def-directional-and-partial-derivatives, def-inertial-frame-and-inertial-chart, thm-total-derivative-computes-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, lem-algebra-of-continuous-real-maps-on-a-space, def-continuous-map-top, thm-continuity-characterisations-top]
dependency_roles:
  lem-sr-compact-variation-and-fundamental-lemma: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-algebra-of-continuous-real-maps-on-a-space: mathematical-premise
  def-continuous-map-top: mathematical-premise
  thm-continuity-characterisations-top: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  scraped: []
  references:
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $\Omega\subseteq A$ be a nonempty open set with an inertial chart $x$, let $c,K>0$ be numerical constants, let $V:\mathbb R\to\mathbb R$ be smooth and let $\varphi:\Omega\to\mathbb R$ be a smooth real scalar field ([[def-ck-tensor-field-on-minkowski-space]]). For every smooth compactly supported $h:\Omega\to\mathbb R$ define the first variation $$\delta S(\varphi)[h]:=-\frac{K}{c}\int_\Omega\Big(\eta^{ab}\partial_a\varphi\,\partial_bh+V'(\varphi)h\Big)\,d^4x,$$ a finite Riemann integral by compact support of $h$ ([[lem-sr-compact-variation-and-fundamental-lemma]]\,(c)). Then (a) $\delta S(\varphi)[h]=\dfrac{K}{c}\int_\Omega\big(\Box\varphi-V'(\varphi)\big)h\,d^4x$, where $\Box\varphi:=\eta^{ab}\partial_a\partial_b\varphi$; (b) $\delta S(\varphi)[h]=0$ for every such $h$ if and only if $\Box\varphi=V'(\varphi)$ on $\Omega$. The equation in (b) is called the scalar-field equation of this model. The statement is the first variation of the action on compactly supported variations; it asserts nothing about convergence of $S$ on unbounded domains, no boundary term, no dynamics beyond the equivalence in (b) and no empirical fact. No choice principle is used. Precisely, with $L(\phi):=\tfrac12\eta^{ab}\partial_a\phi\partial_b\phi+V(\phi)$, define the relative action $S_h(s):=-(K/c)\int_\Omega[L(\varphi+sh)-L(\varphi)]\,d^4x$. Its integrand has support in $\operatorname{supp}h$, so it is defined for every real $s$ even when either background action diverges; $S_h\prime(0)=\delta S(\varphi)[h]$.

## Facts & Assumptions

**Given:** The affine Minkowski model $(A,V,\eta,C^+)$ with a fixed inertial chart $x$ and its coordinate partial derivatives $\partial_a$ ([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]], [[def-directional-and-partial-derivatives]]), a nonempty open $\Omega\subseteq A$, numerical constants $c,K>0$, a smooth $V:\mathbb R\to\mathbb R$, a smooth real scalar field $\varphi:\Omega\to\mathbb R$ ([[def-ck-tensor-field-on-minkowski-space]]), and smooth compactly supported real $h:\Omega\to\mathbb R$. In the inertial chart the metric components are the constant matrices $\eta_{ab}=\eta^{ab}=\operatorname{diag}(-1,1,1,1)$, with $\eta^{ab}=\eta^{ba}$ ([[def-inertial-frame-and-inertial-chart]]). We write $\Box\varphi:=\eta^{ab}\partial_a\partial_b\varphi$ and $L(\phi):=\tfrac12\eta^{ab}\partial_a\phi\partial_b\phi+V(\phi)$ for a smooth scalar function $\phi$.

[F1] Compactly supported differentiation under the integral sign: if $F:(-s_0,s_0)\times\Omega\to\mathbb R$ is continuous with continuous $\partial_sF$ and there is a compact $K\Subset\Omega$ with $F(s,z)=0$ for $z\notin K$ and all $s$, then $s\mapsto\int_\Omega F(s,z)\,d^4z$ is $C^1$ on $(-s_0,s_0)$ with derivative $\int_\Omega\partial_sF(s,z)\,d^4z$. ([[lem-sr-compact-variation-and-fundamental-lemma]]\,(c))

[F2] Compact-support integration by parts: if $f:\Omega\to\mathbb R$ is $C^1$ and compactly supported and $g:\Omega\to\mathbb R$ is $C^1$, then for each $a$, $\int_\Omega(\partial_af)g\,d^4x=-\int_\Omega f(\partial_ag)\,d^4x$. ([[lem-sr-compact-variation-and-fundamental-lemma]]\,(b))

[F3] Fundamental lemma: if $g:\Omega\to\mathbb R$ is continuous and $\int_\Omega g\psi\,d^4x=0$ for every smooth compactly supported $\psi:\Omega\to\mathbb R$, then $g=0$ on $\Omega$. ([[lem-sr-compact-variation-and-fundamental-lemma]]\,(a))

[F4] Chain rule for total derivatives: if $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$. ([[thm-chain-rule-for-total-derivatives]])

[F5] Real one-variable sum, scalar multiple and product rules for derivatives. ([[thm-algebra-of-derivatives]])

[F6] If a map is totally differentiable at a point, then all its directional derivatives exist there and equal the total derivative evaluated on the direction; in particular coordinate partial derivatives are the entries of the Jacobian. ([[thm-total-derivative-computes-directional-and-partial-derivatives]])

[F7] Sums, scalar multiples and products of continuous real-valued maps on a topological space are continuous where defined, so every finite polynomial expression in continuous real-valued maps is continuous; a composite of continuous maps is continuous, and pulling a continuous real-valued function back along the coordinate projection $(s,z)\mapsto z$ preserves continuity, both immediately from the definition of continuity through preimages of open sets and from the descriptions of the product and subspace topologies. Consequently the maps $(s,z)\mapsto\partial_a\varphi(z)$, $(s,z)\mapsto\partial_ah(z)$, $(s,z)\mapsto h(z)$, $(s,z)\mapsto s$, $(s,z)\mapsto\varphi(z)+s\,h(z)$ and the composites $V(\varphi(z)+sh(z))$ and $V'(\varphi(z)+sh(z))$ are continuous on $\mathbb R\times\Omega$. ([[lem-algebra-of-continuous-real-maps-on-a-space]], [[def-continuous-map-top]], [[thm-continuity-characterisations-top]])

## Proof

**Proof technique:** direct.

1.1 Fix a smooth compactly supported $h$. For every real $s$ and every $z\in\Omega$ set $\Phi_s(z):=L(\varphi+sh)(z)-L(\varphi)(z)$ and $F(s,z):=-(K/c)\Phi_s(z)$. Differentiating the real function $s\mapsto L(\varphi+sh)(z)$ with the sum, scalar-multiple and product rules [F5], the chain rule [F4] and the Jacobian identification [F6] gives $$\partial_s\Phi_s(z)=\eta^{ab}\partial_a(\varphi+sh)(z)\,\partial_bh(z)+V'(\varphi(z)+sh(z))\,h(z),$$ and the right-hand side equals $\eta^{ab}\partial_a\varphi(z)\partial_bh(z)+V'(\varphi(z))h(z)$ at $s=0$. Both $\Phi_s$ and $\partial_s\Phi_s$ are continuous on $\mathbb R\times\Omega$: each is a finite sum of products of the continuous maps $(s,z)\mapsto\partial_a\varphi(z)$, $(s,z)\mapsto\partial_ah(z)$, $(s,z)\mapsto h(z)$, $(s,z)\mapsto s$, $(s,z)\mapsto\varphi(z)+sh(z)$ and of the composites of the last of these with the continuous one-variable functions $V$ and $V'$, and [F7] gives continuity of all these sums, products and composites; both functions also vanish at every $z\notin\operatorname{supp}h$, because $\varphi+sh=\varphi$ there. [given, F4, F5, F6, F7]

2.1 Apply [F1] to $F$ on $(-1,1)\times\Omega$: the relative action $S_h(s)=-(K/c)\int_\Omega\Phi_s\,d^4x$ is $C^1$ on $(-1,1)$ with $S_h'(0)=-(K/c)\int_\Omega\partial_s\Phi_0\,d^4x=\delta S(\varphi)[h]$, using the value of $\partial_s\Phi_s$ at $s=0$ from step 1.1; the integrand of $S_h(s)$ is supported in $\operatorname{supp}h$ for every $s$, so $S_h(s)$ is a finite Riemann integral for every real $s$ and $S_h'(0)=\delta S(\varphi)[h]$. [F1, step 1.1]

3.1 Claim (a): [F2] with $f=h$ and $g=\eta^{ab}\partial_b\varphi$ (here $\eta^{ab}$ is constant in the inertial chart) gives $\int_\Omega\eta^{ab}\partial_a\varphi\,\partial_bh\,d^4x=-\int_\Omega h\,\eta^{ab}\partial_a\partial_b\varphi\,d^4x=-\int_\Omega(\Box\varphi)h\,d^4x$. Substituting into the definition of $\delta S(\varphi)[h]$ from step 2.1 yields $\delta S(\varphi)[h]=\frac Kc\int_\Omega(\Box\varphi-V'(\varphi))h\,d^4x$. [F2, step 2.1, given]

4.1 Claim (b), forward direction: assume $\delta S(\varphi)[h]=0$ for every smooth compactly supported $h$. By step 3.1 the continuous function $g:=\frac Kc(\Box\varphi-V'(\varphi))$ satisfies $\int_\Omega g\psi\,d^4x=0$ for every smooth compactly supported $\psi$; [F3] gives $g=0$, i.e. $\Box\varphi=V'(\varphi)$ on $\Omega$. [F3, step 3.1]

4.2 Claim (b), reverse direction: if $\Box\varphi=V'(\varphi)$ on $\Omega$, then for every smooth compactly supported $h$ step 3.1 gives $\delta S(\varphi)[h]=\frac Kc\int_\Omega(\Box\varphi-V'(\varphi))h\,d^4x=0$, because the integrand is the zero function. [step 3.1]

5.1 Step 3.1 proves (a), steps 4.1 and 4.2 prove the two directions of (b), and step 2.1 identifies the first variation as the derivative of the relative action at $0$. No background action on $\Omega$ need converge, no boundary term and no choice principle is used; the displayed equation is an equivalence on $\Omega$ and asserts no dynamics. [step 2.1, step 3.1, step 4.1, step 4.2] ∎
