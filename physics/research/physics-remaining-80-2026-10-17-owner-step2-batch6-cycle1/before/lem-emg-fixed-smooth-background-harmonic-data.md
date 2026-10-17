---
id: lem-emg-fixed-smooth-background-harmonic-data
kind: lemma
title: Harmonic initial data relative to a fixed smooth background
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps: [def-emg-constrained-electrovacuum-data, def-gr-harmonic-gauge-and-reduced-equations, def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-sobolev-algebra, lem-gr-periodic-sobolev-embedding, lem-gr-smooth-composition-and-commutator-estimates]
dependency_roles:
  def-emg-constrained-electrovacuum-data: mathematical-premise
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), section 2.4 and section 5.1"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "Section 2.4 describes the harmonic-map reduction; section 5.1 constructs reduced initial data from (h,K). The finite-regularity fixed-background correction is proved here."
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, October 12 2022 revision, sections 10.2-10.5"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Sections 10.2-10.4 define the extrinsic-curvature convention and constraint data; the local harmonic data computation is supplied by this item's proof."
verification:
  precheck: pending
---

## Statement

Let $s\ge5$, let the underlying periodic manifold be $\Sigma=\mathbb T^3_{2\pi}$ with length coordinates $X^i=L_0\theta^i$ as in [[def-emg-periodic-high-sobolev-state]], and let $(h,K,e,b)$ be periodic data of [[def-emg-constrained-electrovacuum-data]] with $h\in H^{s+1}$, $K,e,b\in H^s$ and a uniform positive lower eigenvalue bound for the continuous representative of $h$. Fix a smooth positive reference metric $\gamma$ on $\Sigma$ and use the product background $\bar g=-(dx^0)^2+\gamma_{ij}(X)dX^i dX^j$ near $\{x^0=0\}\times\Sigma$. Define

$$Q^i:=h^{jk}\bigl(\Gamma(h)^i{}_{jk}-\Gamma(\gamma)^i{}_{jk}\bigr),$$

where the difference of the two spatial Levi-Civita connections is a tensor. Prescribe the spacetime metric Cauchy $1$-jet at $x^0=0$ by

$$g_{ij}=h_{ij},\quad g_{00}=-1,\quad g_{0i}=0,\quad \partial_0g_{ij}=2K_{ij},\quad \partial_0g_{00}=-2\operatorname{tr}_hK,\quad \partial_0g_{0i}=h_{ij}Q^j.$$

For this jet, let $g_0^{ab}=\operatorname{diag}(-1,h^{ij})$ be the inverse metric block on the slice and define its Christoffel value by

$$\Gamma^a{}_{bc}[j^1_0g]:=\tfrac12 g_0^{ad}\bigl(\partial_bg_{dc}+\partial_cg_{db}-\partial_dg_{bc}\bigr)\big|_{x^0=0}.$$

Define the initial-slice harmonic-gauge vector directly from the prescribed $1$-jet by

$$H_0^a:=g_0^{bc}\bigl(\Gamma^a{}_{bc}[j^1_0g]-\bar\Gamma^a{}_{bc}\bigr)\big|_{x^0=0}.$$

This is the initial value of the harmonic-gauge vector of [[def-gr-harmonic-gauge-and-reduced-equations]] for every $C^1$ metric on a neighborhood realizing the prescribed jet; no neighborhood extension is needed to define $H_0$. Each metric value in the jet is $H^{s+1}$ and each prescribed first derivative is $H^s$, so the displayed algebraic expression has an $H^s$ representative. It vanishes on the initial slice. The background $\gamma$ is required to be smooth; choosing $\gamma=h$ is not asserted to be valid for finite-regularity $h.

## Facts & Assumptions

**Given:** The periodic high-Sobolev data, the positive metric lower bound, a fixed smooth positive $\gamma$, and the prescribed initial metric jet.

[F1] [[def-emg-constrained-electrovacuum-data]]: $h\in H^{s+1}$ is uniformly positive, $K\in H^s$, and $K$ uses the convention $K=+\tfrac12\mathcal L_nh$.

[F2] [[def-gr-harmonic-gauge-and-reduced-equations]]: for a smooth spacetime metric and smooth background, $H^a=g^{bc}(\Gamma(g)^a{}_{bc}-\Gamma(\bar g)^a{}_{bc})$. The same first-jet formula defines its initial value whenever the metric is only $C^1$ near the slice.

[F3] [[lem-gr-periodic-sobolev-algebra]] and [[lem-gr-smooth-composition-and-commutator-estimates]]: at the stated regularity, products and smooth matrix inversion on a compact subset of the positive-definite matrices preserve the indicated Sobolev orders.

[F4] [[lem-gr-periodic-sobolev-embedding]]: in three dimensions $H^q$ embeds in $C^m$ when $q-m>3/2$, so the positive representative and all contractions in the statement are pointwise defined.

## Proof

1.1 The entries of $h$ lie in $H^{s+1}$ and its values lie in the compact set of positive matrices with the assumed eigenvalue lower bound. Matrix inversion is smooth on this open cone, so [F3] gives $h^{-1}\in H^{s+1}$. Spatial derivatives of $h$ and the Christoffel formula then give $\Gamma(h)\in H^s$; $\Gamma(\gamma)$ is smooth. Consequently $Q\in H^s$, and all prescribed first derivatives of $g$ lie in $H^s$. [F1, F3, F4, algebra]

1.2 On the initial slice, $g^{00}=-1$, $g^{0i}=0$, and $g^{ij}=h^{ij}$. The Christoffel formula gives $\Gamma^0{}_{00}=\operatorname{tr}_hK$, $\Gamma^0{}_{ij}=K_{ij}$, $\Gamma^i{}_{00}=h^{ij}\partial_0g_{0j}=Q^i$, and $\Gamma^i{}_{jk}=\Gamma(h)^i{}_{jk}$. For the time-independent product background, $\bar\Gamma^0{}_{ab}=\bar\Gamma^i{}_{00}=\bar\Gamma^i{}_{0j}=0$ and $\bar\Gamma^i{}_{jk}=\Gamma(\gamma)^i{}_{jk}$. [F1, F2, algebra]

2.1 Contract these components in [F2]. The time component is $H^0=-\Gamma^0{}_{00}+h^{ij}\Gamma^0{}_{ij}=-\operatorname{tr}_hK+\operatorname{tr}_hK=0$. The spatial component is $H^i=-\Gamma^i{}_{00}+h^{jk}(\Gamma(h)^i{}_{jk}-\Gamma(\gamma)^i{}_{jk})=-Q^i+Q^i=0$. The equalities hold as Sobolev functions and hence pointwise by [F4]. This proves the gauge assertion. [step 1.2, F1, F2, F4, algebra] ∎
