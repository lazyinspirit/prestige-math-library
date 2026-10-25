---
id: lem-qftx-lattice-data-well-defined
kind: lemma
title: Finite lattice gauge data define an invariant probability
status: "published"
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited through the supplied non-Abelian gauge datum; the finite-product argument adds no choice principle."
deps:
  - def-countable-choice
  - def-qftx-nonabelian-lattice-gauge-data
  - def-differential-of-a-smooth-map
  - def-lie-group
  - def-topological-manifold-without-boundary
  - def-borel-sigma-algebra
  - lem-borel-product-of-second-countable-spaces
  - def-measure
  - def-measure-space
  - def-probability-measure
  - def-left-right-and-bi-invariant-borel-measure-on-a-lie-group
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-tdmath-measure-integral
  - def-measure-with-density
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-complex-l-two-inner-product
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-lattice-gauge-data: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  def-lie-group: mathematical-premise
  def-topological-manifold-without-boundary: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  lem-borel-product-of-second-countable-spaces: mathematical-premise
  def-measure: mathematical-premise
  def-measure-space: mathematical-premise
  def-probability-measure: mathematical-premise
  def-left-right-and-bi-invariant-borel-measure-on-a-lie-group: mathematical-premise
  def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  def-measure-with-density: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-complex-l-two-inner-product: mathematical-premise
  thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. B. Meyer, Lattice QCD: A Brief Introduction, in Lattice QCD for Nuclear Physics, Lecture Notes in Physics 889"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf"
      locator: "§1.2.4, printed pp. 13–14, for traced-loop gauge invariance, the plaquette action and lattice link integration."
    - title: "Robert Lohmayer, Eigenvalue Distributions of Wilson Loops"
      url: "https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf"
      locator: "§4.1, printed pp. 59–61, for gauge-invariant two-dimensional finite-lattice integration and plaquette factorization; the finite probability and Gauss-sector proof is local."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $\mathcal V,\mathcal E^+,\mathcal F$ be finite vertex, positively oriented edge, and face sets with endpoint maps $s,t$ and based closed face words in the oriented edges, using the reverse-edge convention and traversal-ordered holonomy from the finite lattice definition above. Use its product smooth structures and empty-product convention. Let $G$ be its compact finite-dimensional real Lie group, $\mu_G$ its normalized bi-invariant link probability, and $\Phi_p:G\to\mathbb R$ its continuous conjugation-invariant face actions. Then the vertex formulas $(h\cdot U)_e=h_{s(e)}U_eh_{t(e)}^{-1}$ define a smooth group action on $G^{\mathcal E^+}$. Each face holonomy transforms by conjugation at its base vertex. Consequently the product link measure and the Boltzmann weight $e^{-\sum_p\Phi_p(U_p)}$ are gauge invariant, and the partition function satisfies $0<Z_\Lambda<\infty$. Thus the normalized finite-lattice expectation is a well-defined gauge-invariant probability expectation. In $L^2$ of that probability, the subspace of classes invariant under each vertex gauge transformation is closed. The infinitesimal Gauss generators defined by differentiating this smooth action are well-defined as directional derivatives on smooth functions.

## Statement references

[[def-qftx-nonabelian-lattice-gauge-data|Finite oriented lattice variables, gauge action, Haar product, action, and Gauss generators]]

[[def-lie-group|Smooth multiplication and inversion on a Lie group]]

[[def-topological-manifold-without-boundary|Hausdorff and second-countable group topology]]

[[def-borel-sigma-algebra|Borel sets on the compact group]]

[[lem-borel-product-of-second-countable-spaces|Borel measurability on finite products of the Lie group]]

[[def-probability-measure|Normalized probability measure]]

[[def-left-right-and-bi-invariant-borel-measure-on-a-lie-group|Bi-invariance of the link measure]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Finite product sigma-algebra]]

[[def-product-measure-on-sigma-finite-spaces|Product measure]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique|Product measure existence, rectangle formula, and uniqueness]]

[[def-tdmath-measure-integral|Measure integral and integrability]]

[[def-measure-with-density|Probability density construction]]

[[def-integrable-real-and-complex-functions-and-their-integrals|Integrability of real and complex functions]]

[[def-complex-l-two-inner-product|Complex $L^2$ inner product and norm]]

[[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz|Well-definedness of the $L^2$ norm and inner product]]

[Meyer, §1.2.4, printed pp. 13–14, on the invariant link measure and finite lattice expectation](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

[Lohmayer, §4.1, printed pp. 59–60, on gauge invariance and factorization of the pure-gauge measure](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite oriented two-complex, a compact Lie group $G$, a normalized bi-invariant probability $\mu_G$, and continuous class functions $\Phi_p$.

[A1] $\mathrm{AC}_\omega$ is inherited through the supplied construction of $\mathfrak g=T_eG$; the definition does not use arbitrary choice. [[def-countable-choice]]

[F1] [[def-qftx-nonabelian-lattice-gauge-data]]: one variable $U_e\in G$ is assigned to each positively oriented edge, reverse edges carry $U_e^{-1}$, vertices act by $h_{s(e)}U_eh_{t(e)}^{-1}$, and face holonomies are ordered products around closed edge words.

[F2] [[def-qftx-nonabelian-lattice-gauge-data]]: $G$ is compact and $\mu_G$ is a normalized left- and right-invariant Borel probability; the face actions are continuous and conjugation invariant.

[F3] [[def-differential-of-a-smooth-map]]: the differential of a smooth map at a point sends tangent vectors at that point to tangent vectors at its image.

[F4] A finite product of sigma-finite measure spaces carries the unique product measure on the product sigma-algebra, with the rectangle formula; a finite product of probability measures is again a probability measure. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[def-product-measure-on-sigma-finite-spaces]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F5] A nonnegative measurable density defines a measure by integration, and a normalized finite density defines a probability measure. [[def-measure-with-density]] [[def-probability-measure]] [[def-tdmath-measure-integral]]

[F6] The complex $L^2$ class uses $\|[f]\|_2=(\int |f|^2\,d\mathbb P_\Lambda)^{1/2}$ and the pairing $\langle[f],[g]\rangle=\int f\overline g\,d\mathbb P_\Lambda$; the cited result establishes representative-independence and norm properties. [[def-complex-l-two-inner-product]] [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]

[F7] The Lie group is second-countable, so its finite-product Borel sigma-algebra equals the product sigma-algebra; continuous face-holonomy, gauge-action, and density maps are measurable for these structures. [[def-lie-group]] [[def-topological-manifold-without-boundary]] [[lem-borel-product-of-second-countable-spaces]]

## Proof

**Proof technique:** direct.

1.1 For $h,k\in G^{\mathcal V}$, applying $k$ after $h$ sends an edge $e$ to $k_{s(e)}h_{s(e)}U_eh_{t(e)}^{-1}k_{t(e)}^{-1}=(kh)_{s(e)}U_e(kh)_{t(e)}^{-1}$; the identity tuple acts identically. Hence the formulas define a group action. The finite powers have the product smooth structures specified in the Definition, so each coordinate is a composition of smooth projections, multiplication, and inversion maps; the action map is smooth. By [F3], its differential sends the specified tangent vector at the identity of $G^{\mathcal V}$ to a tangent vector at $U$; applying $df_U$ therefore defines the stated directional derivative on every smooth $f$. The inherited axiom base is the stated $\mathrm{AC}_\omega$ [A1]. [given, A1, F1, F3, algebra]

2.1 Around a face word based at $v_0$, the intermediate factors $h_{v_i}^{-1}h_{v_i}$ cancel, leaving $U_p(h\cdot U)=h_{v_0}U_p(U)h_{v_0}^{-1}$. Thus each $\Phi_p(U_p)$ and the total action are unchanged. If $\mathcal E^+=\varnothing$, the link space is the singleton empty tuple with unit point mass, and the action preserves this measure. Otherwise, for fixed $h$, the inverse image of a measurable rectangle $\prod_e A_e$ under the link action is the rectangle $\prod_e(h_{s(e)}^{-1}A_eh_{t(e)})$; bi-invariance preserves each factor measure. The product-measure rectangle formula and uniqueness therefore show that the finite link product measure is gauge invariant on the full product sigma-algebra. [given, F1, F2, F4, step 1.1, algebra]

3.1 For each face $p$ and each $g\in G$, continuity of $\Phi_p$ gives an open neighborhood on which $|\Phi_p|\leq |\Phi_p(g)|+1$. Compactness of $G$ gives a finite subcover, so each $\Phi_p$ is bounded; summing over the finite face set gives $|S_\Lambda(U)|\leq M$ for some finite $M$. By [F7], the action, $S_\Lambda$, and its density are measurable; hence $e^{-M}\leq e^{-S_\Lambda(U)}\leq e^M$. Since the product link measure is a probability, $e^{-M}\leq Z_\Lambda\leq e^M$; in particular $0<Z_\Lambda<\infty$. The nonnegative density $Z_\Lambda^{-1}e^{-S_\Lambda}$ therefore defines the normalized probability measure $\mathbb P_\Lambda$. Its invariance follows from the invariance of the product measure and of $S_\Lambda$ in step 2.1. [given, F2, F4, F5, F7, step 2.1, algebra]

4.1 For each $h\in G^{\mathcal V}$, define $T_h[f]:=[U\mapsto f(h^{-1}\cdot U)]$ on complex $L^2(\mathbb P_\Lambda)$, with norm $\|[f]\|_2=(\int|f|^2\,d\mathbb P_\Lambda)^{1/2}$. Step 3.1 makes this well-defined and preserves the norm: invariance gives equality of integrals first for nonnegative simple functions and then, by the defining supremum for the nonnegative integral, for $|f|^2$. Thus each $T_h$ is a linear isometry. The invariant sector is exactly $\bigcap_{h\in G^{\mathcal V}}\ker(T_h-I)$; each $T_h-I$ is continuous by the norm triangle inequality, so its kernel is closed, and an arbitrary intersection of closed sets is closed. [F4, F6, step 3.1, algebra] ∎
