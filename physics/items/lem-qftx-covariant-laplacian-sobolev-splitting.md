---
id: lem-qftx-covariant-laplacian-sobolev-splitting
kind: lemma
title: Rough-coefficient covariant Green inverse and Coulomb splitting
status: "published"
origin: pipeline
dependency_level: 5
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF plus the full Axiom of Choice, inherited through the Hodge, Fredholm, and analytic suppliers used below."
deps:
  - def-qftx-smooth-sobolev-gauge-configuration
  - lem-qftx-gauge-sobolev-calculus
  - cor-sobolev-algebra-above-the-critical-index
  - thm-higher-order-sobolev-embedding
  - lem-qftx-gauge-stabilizer-and-properness
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - lem-neumann-series-and-small-perturbations-of-bounded-inverses
  - thm-fredholm-index-is-stable-under-compact-perturbations
  - lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates
  - def-axiom-of-choice
dependency_roles:
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  lem-qftx-gauge-sobolev-calculus: mathematical-premise
  cor-sobolev-algebra-above-the-critical-index: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  lem-qftx-gauge-stabilizer-and-properness: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  lem-neumann-series-and-small-perturbations-of-bounded-inverses: mathematical-premise
  thm-fredholm-index-is-stable-under-compact-perturbations: mathematical-premise
  lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Thomas Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf"
      locator: "§§5.13.2–5.13.3, PDF pp. 113–117: Sobolev gauge action, properness, and Coulomb-slice operator."
    - title: "Brian Williams, Geometry, Spin, and Seiberg-Witten Theory (full expository manuscript)"
      url: "https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf"
      locator: "§4.4, PDF pp. 31–36: slice operator and elliptic regularity interface; the manuscript is abelian and the rough SU(N) perturbation is proved here."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume the configuration data and integer $k>d/2+1$ from the first definition, and let $A\in\mathcal A_k^*$. Define the covariant Laplacian on adjoint sections by

$$\Delta_A:=d_A^*d_A:H^{k+1}(\operatorname{ad}P)\longrightarrow H^{k-1}(\operatorname{ad}P).$$

Then $\Delta_A$ is a bounded isomorphism with bounded inverse $G_A:H^{k-1}(\operatorname{ad}P)\to H^{k+1}(\operatorname{ad}P)$. Moreover,

$$H^k(T^*M\otimes\operatorname{ad}P)=\operatorname{im}d_A\oplus\ker d_A^*,$$

and the bounded projection onto $\operatorname{im}d_A$ is $\Pi_A=d_AG_Ad_A^*$. In operator-norm neighborhoods of each irreducible $A$, the inverse $G_A$ and projection $\Pi_A$ depend smoothly on $A$. The imported smooth-coefficient Green theorem is used only for a smooth reference connection; the asserted operator $\Delta_A$ itself may have Sobolev coefficients.

## Statement references

[Walpuski, Sobolev gauge action and slice operator](https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf)

[Williams, local structure and elliptic slice operator](https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf)

## Facts & Assumptions

**Given:** Full AC; the compact Riemannian bundle data; an irreducible $A\in\mathcal A_k^*$; and the integer $k>d/2+1$.

[A1] Full AC is retained through the elliptic, Hodge, and Fredholm suppliers. [[def-axiom-of-choice]]

[F1] The covariant derivative and formal adjoint have the local coefficient formulas fixed in the configuration definition. [[def-qftx-smooth-sobolev-gauge-configuration]]

[F2] For irreducible $A$, the holonomy centralizer is $Z_N$, hence the only covariantly constant adjoint section is zero. [[lem-qftx-gauge-stabilizer-and-properness]]

[F3] For a smooth connection $A_0$, $\Delta_{A_0}$ is a smooth-coefficient, formally symmetric, nonnegative Laplace-type operator; the compact Hodge theorem gives a finite-dimensional smooth kernel, closed range, and the decomposition $H^r=\ker\Delta_{A_0}\oplus\Delta_{A_0}(H^{r+2})$ for every integer $r\ge0$. [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]], [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]

[F4] The compact Sobolev inclusions $H^{s+1}\hookrightarrow H^s$ hold for all integer $s\ge0$, and the smooth reference operator has the elliptic estimate $\|\xi\|_{H^{k+1}}\le C(\|\Delta_{A_0}\xi\|_{H^{k-1}}+\|\xi\|_{L^2})$. [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]], [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]

[F5] The interpolation estimate $\|u\|_{H^k}\le\varepsilon\|u\|_{H^{k+1}}+C_\varepsilon\|u\|_{L^2}$ on compact manifolds follows by finite-atlas localization from the stated lower-order Sobolev interpolation inequality. [[lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates]]

[F6] A compact perturbation of a Fredholm operator is Fredholm with the same index. [[thm-fredholm-index-is-stable-under-compact-perturbations]]

[F7] If $T:X\to Y$ is a bounded isomorphism of Banach spaces and $E$ is bounded with $\|T^{-1}E\|<1$, then $T+E$ is invertible by the Neumann series. [[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]

[F8] For $k>d/2+1$, $H^k$ is a Banach algebra and the finite-atlas multiplier estimates needed below follow from the Sobolev embeddings and Hölder. [[cor-sobolev-algebra-above-the-critical-index]], [[thm-higher-order-sobolev-embedding]], [[lem-qftx-gauge-sobolev-calculus]]

## Proof

**Given:** The hypotheses of the Statement.

1.1 Fix the smooth reference connection $A_0$ from the configuration data and set $h=A-A_0\in H^k(T^*M\otimes\operatorname{ad}P)$. In a local orthonormal frame, $d_A=d_{A_0}+[h,\cdot]$ on zero-forms and $d_A^*=d_{A_0}^*-\iota_h$ on one-forms, where $\iota_h(a)=g^{ij}[h_i,a_j]$. Therefore $K_A:=\Delta_A-\Delta_{A_0}$ is a finite sum of terms of the forms $(\nabla_{A_0}h)\xi$, $h\nabla_{A_0}\xi$, and $h^2\xi$. These terms define a bounded map $H^{k+1}\to H^{k-1}$. They are compact: $(\nabla_{A_0}h)\xi$ factors through the compact inclusion $H^{k+1}\hookrightarrow H^{k-1}$ followed by multiplication in the algebra $H^{k-1}$; $h\nabla_{A_0}\xi$ and $h^2\xi$ first map boundedly into $H^k$ and then use the compact inclusion $H^k\hookrightarrow H^{k-1}$. Here $k-1>d/2$, so the needed multiplication bounds follow from [F8]. [given, A1, F4, F8, algebra]

2.1 Apply [F3] with $r=k-1\ge0$ to $\Delta_{A_0}:H^{k+1}\to H^{k-1}$. Its kernel is finite dimensional, and the Hodge theorem gives the topological direct decomposition $H^{k-1}=\ker\Delta_{A_0}\oplus\Delta_{A_0}(H^{k+1})$. Thus its range is closed with codimension equal to the kernel dimension, so $\Delta_{A_0}$ is Fredholm of index zero. By [F6] and the compactness of $K_A$ from step 1.1, $\Delta_A=\Delta_{A_0}+K_A$ is Fredholm of index zero. [F3, F6, step 1.1]

2.2 The smooth reference estimate [F4] and $\Delta_{A_0}=\Delta_A-K_A$ give $\|\xi\|_{H^{k+1}}\le C(\|\Delta_A\xi\|_{H^{k-1}}+\|K_A\xi\|_{H^{k-1}}+\|\xi\|_{L^2})$. The three terms in $K_A$ from step 1.1 satisfy $\|K_A\xi\|_{H^{k-1}}\le C_A\|\xi\|_{H^k}$. The Sobolev interpolation estimate $\|\xi\|_{H^k}\le\varepsilon\|\xi\|_{H^{k+1}}+C_\varepsilon\|\xi\|_{L^2}$ follows by finite-atlas localization and the estimate in [F5]. Choose $\varepsilon$ so that the resulting $H^{k+1}$ term is absorbed into the left side. This yields $\|\xi\|_{H^{k+1}}\le C_A'(\|\Delta_A\xi\|_{H^{k-1}}+\|\xi\|_{L^2})$. [F4, F5, F8, step 1.1, algebra]

3.1 If $\Delta_A\xi=0$ for $\xi\in H^{k+1}(\operatorname{ad}P)$, the formal-adjoint identity, first for smooth approximants and then by Sobolev continuity, gives $0=\langle\Delta_A\xi,\xi\rangle_{L^2}=\|d_A\xi\|_{L^2}^2$. Hence $d_A\xi=0$. Parallel transport makes $\xi$ determined by $\xi(p_m)$, and that value commutes with holonomy. By [F2], $\exp(t\xi(p_m))$ lies in the finite group $Z_N$ for every real $t$, because $\xi(p_m)$ commutes with holonomy. The path is continuous and equals the identity at $t=0$, so it is constant; differentiating at zero gives $\xi(p_m)=0$. Parallel transport then gives $\xi=0$. [F1, F2, step 2.1, algebra]

4.1 Since $\Delta_A$ is Fredholm of index zero and its kernel is zero by step 3.1, its cokernel has dimension zero. Its range is closed by the Fredholm property, so $\Delta_A$ is onto and therefore bijective. [step 2.1, step 3.1, algebra]

4.2 If no constant bounded $\|\xi\|_{H^{k+1}}$ by $\|\Delta_A\xi\|_{H^{k-1}}$, choose $\|\xi_j\|_{H^{k+1}}=1$ with $\Delta_A\xi_j\to0$. By [F4], a subsequence converges in $L^2$; applying the estimate of step 2.2 to differences shows it is Cauchy in $H^{k+1}$. Its limit has $H^{k+1}$ norm one and lies in $\ker\Delta_A$, contradicting step 3.1. Thus $\|\xi\|_{H^{k+1}}\le C_A''\|\Delta_A\xi\|_{H^{k-1}}$. Together with bijectivity this proves the inverse $G_A$ is bounded. [F4, step 3.1, step 2.2]

5.1 The operator-valued map $A\mapsto\Delta_A\in\mathcal B(H^{k+1},H^{k-1})$ is a continuous polynomial of degree at most two in the local coefficients of $A$, by step 1.1 and the product estimates [F8]. Near a fixed irreducible $A$, write $\Delta_{A+h}=\Delta_A+E(h)$; for small $h$, [F7] gives $(\Delta_{A+h})^{-1}=(I+G_AE(h))^{-1}G_A=\sum_{n=0}^{\infty}(-G_AE(h))^nG_A$. On a neighborhood where $\|G_AE(h)\|\le\rho<1$, the Neumann series converges in operator norm. Its $m$-th derivative is bounded termwise by a constant times $n^m\rho^{n-m}$ for $n\ge m$, whose series converges; hence all derivatives converge uniformly on a smaller neighborhood. This proves that inversion and $A\mapsto G_A$ are smooth there. [F7, F8, step 1.1, step 4.2, algebra]

6.1 Define $\Pi_A=d_AG_Ad_A^*$. The Sobolev orders give a bounded map $H^k(\Omega^1(\operatorname{ad}P))\to H^k(\Omega^1(\operatorname{ad}P))$. Since $\Delta_A G_A=I$ and $G_A\Delta_A=I$, one has $\Pi_A d_A\xi=d_A\xi$ and $d_A^*(I-\Pi_A)a=0$ for every $\xi\in H^{k+1}$ and $a\in H^k$. Thus $\Pi_A$ is a bounded projection with range $\operatorname{im}d_A$, while $I-\Pi_A$ has range $\ker d_A^*$. Their ranges intersect trivially: if $d_A\xi\in\ker d_A^*$, then $\Delta_A\xi=0$, so step 3.1 gives $\xi=0$. This proves the direct-sum decomposition and projection formula. Smooth dependence of $G_A$, $d_A$, and $d_A^*$ from step 5.1 makes $\Pi_A$ smooth in $A$. [F1, step 3.1, step 5.1, algebra] ∎

## Remarks

The three arrows below have the Sobolev domains and codomains written above them. Their composite is the bounded projection $\Pi_A=d_AG_Ad_A^*$ proved in step 6.1; the proof of its image and kernel is the operator argument in the proof, not the diagram.

```tikzcd
H^k(\Omega^1(\mathrm{ad}P)) \arrow[r,"{d_A^*}"] & H^{k-1}(\mathrm{ad}P) \arrow[r,"{G_A}"] & H^{k+1}(\mathrm{ad}P) \arrow[r,"{d_A}"] & H^k(\Omega^1(\mathrm{ad}P))
```
