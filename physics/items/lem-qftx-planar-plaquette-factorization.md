---
id: lem-qftx-planar-plaquette-factorization
kind: lemma
title: Independent plaquette variables on a finite planar rectangle
status: draft
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited through the finite lattice data supplier; the finite coordinate changes use no additional choice."
deps:
  - def-countable-choice
  - def-qftx-nonabelian-lattice-gauge-data
  - def-qftx-nonabelian-gauge-data
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
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-lattice-gauge-data: mathematical-premise
  def-qftx-nonabelian-gauge-data: mathematical-premise
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
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. B. Meyer, Lattice QCD: A Brief Introduction, in Lattice QCD for Nuclear Physics, Lecture Notes in Physics 889"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf"
      locator: "§1.4.1.1, printed pp. 22–24, for link Haar integration and plaquette expansions; the exact finite two-dimensional factorization is proved locally."
    - title: "Robert Lohmayer, Eigenvalue Distributions of Wilson Loops"
      url: "https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf"
      locator: "§4.1, printed pp. 59–61, for gauge fixing and factorization of the two-dimensional pure-gauge partition function; its infinite-lattice gauge choice is replaced by an explicit finite tree gauge."
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $G$ be a compact group with normalized bi-invariant Borel probability $\mu$. For positive integers $M,N$, let $\Lambda_{M,N}$ have vertices $(i,j)$ with $0\leq i\leq M$ and $0\leq j\leq N$, east-oriented horizontal edges $h_{i,j}:(i,j)\to(i+1,j)$ for $0\leq i<M$, $0\leq j\leq N$, north-oriented vertical edges $v_{i,j}:(i,j)\to(i,j+1)$ for $0\leq i\leq M$, $0\leq j<N$, and faces $p_{i,j}$ for $0\leq i<M$, $0\leq j<N$. The face $p_{i,j}$ has counterclockwise boundary word $(h_{i,j},v_{i+1,j},\bar h_{i,j+1},\bar v_{i,j})$, started at its lower-left vertex; multiply its link matrices in traversal order, with the first factor on the left. Let $G^{\mathcal V}$ act on positively oriented link variables by $(g\cdot U)_e=g_{s(e)}U_eg_{t(e)}^{-1}$. Use the product Haar measure $\mu^{\mathcal E^+}$ on links and free boundary edges. Give each face a positive continuous conjugation-invariant weight $w_{i,j}:G\to(0,\infty)$ with $w_{i,j}(g^{-1})=w_{i,j}(g)$, and normalize the density proportional to $\prod_{i,j}w_{i,j}(U_{p_{i,j}})$ relative to this link measure. For any chosen column $a\in\{0,\ldots,M\}$, fixing the gauge factor at $(a,0)$ to the identity gives a unique representative with every horizontal edge and every vertical edge in column $a$ equal to the identity. Write $V_{i,j}$ for the vertical link in this representative and set $P_{i,j}:=V_{i+1,j}V_{i,j}^{-1}$. The plaquette variables $(P_{i,j})$ are independent, and $P_{i,j}$ has probability

$$
d\nu_{i,j}(g)=\frac{w_{i,j}(g)}{\int_Gw_{i,j}(z)\,d\mu(z)}\,d\mu(g).
$$

This is a finite planar lattice statement with no periodic identifications or continuum limit.

## Statement references

[[def-qftx-nonabelian-lattice-gauge-data|Finite link configurations, vertex action, face holonomies, and product Haar measure]]

[[def-borel-sigma-algebra|Borel sigma-algebra on the compact group]]

[[lem-borel-product-of-second-countable-spaces|Product Borel sigma-algebra for the Lie-group link coordinates]]

[[def-probability-measure|Normalized Borel probability]]

[[def-left-right-and-bi-invariant-borel-measure-on-a-lie-group|Left and right invariance of Haar measure]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Finite product sigma-algebra]]

[[def-product-measure-on-sigma-finite-spaces|Product measure on sigma-finite spaces]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique|Finite product measure and rectangle formula]]

[[def-tdmath-measure-integral|Measure integral and integrability]]

[[def-measure-with-density|Normalized plaquette densities]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces|Tonelli's theorem]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces|Fubini's theorem for integrable product functions]]

[Lohmayer, §4.1, printed pp. 59–61, on two-dimensional factorization and independent plaquette variables](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)

[Meyer, §1.4.1.1, printed pp. 22–24, on finite-lattice character and strong-coupling expansions](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a compact group $G$, a normalized bi-invariant probability $\mu$, the finite rectangular cellulation, and the stated positive class weights.

[A1] $\mathrm{AC}_\omega$ is inherited through the supplied Lie-algebra construction in the finite lattice datum; the proof below uses only finite products and deterministic coordinate changes. [[def-countable-choice]]

[F1] [[def-qftx-nonabelian-lattice-gauge-data]]: edge variables are $G$-valued, reverse orientations carry inverses, vertices act by left and right multiplication at endpoints, and the link measure is a finite product of $\mu$.

[F2] [[def-qftx-nonabelian-lattice-gauge-data]]: each face holonomy is the ordered product around its oriented boundary, and the action weight is a continuous class function of that holonomy.

[F3] The finite lattice datum uses a compact finite-dimensional real Lie group; its underlying smooth manifold is Hausdorff and second-countable, and for finite products the Borel sigma-algebra equals the product of the factor Borel sigma-algebras. [[def-qftx-nonabelian-gauge-data]] [[def-lie-group]] [[def-topological-manifold-without-boundary]] [[lem-borel-product-of-second-countable-spaces]]

[F4] A finite product of probability measures is a probability on the recursively defined product sigma-algebra; the product measure is characterized by its values on measurable rectangles. [[def-borel-sigma-algebra]] [[def-probability-measure]] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[def-product-measure-on-sigma-finite-spaces]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F5] The integral is the Lebesgue integral on the stated measure space; a complex function is in $L^1$ when its absolute value has finite integral. A bounded measurable function on a probability space is in $L^1$ because $\int|f|\leq\|f\|_\infty$. [[def-tdmath-measure-integral]] [[def-integrable-real-and-complex-functions-and-their-integrals]]

[F6] Tonelli applies to nonnegative measurable functions on sigma-finite products, and Fubini applies to $L^1$ functions on sigma-finite products. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

## Proof

**Proof technique:** direct change of variables.

1.1 Fix a column $a$. The set $T$ of all horizontal edges together with the vertical edges in column $a$ is a spanning tree: each row is a horizontal path and the selected vertical edges join these row paths in one vertical path, with no other vertical edge in $T$ to close a cycle. Thus $T$ connects every vertex and has no cycle. The only inherited set-theoretic premise is $\mathrm{AC}_\omega$ [A1]. [given, A1, F1, construct]

2.1 Fix the root $(a,0)$ and set its gauge factor to the identity. Recursively along $T$, each tree-edge condition $h_{s(e)}U_eh_{t(e)}^{-1}=1$ determines the as-yet-unknown gauge factor at the next vertex uniquely, using multiplication and inversion in $G$. Hence every link configuration has a unique root-fixed gauge transform whose tree links are the identity. [given, F1, step 1.1, construct]

3.1 First, inversion preserves $\mu$. For a bounded measurable $f$, the function $(x,y)\mapsto f(x^{-1}y)$ is product-measurable: by [F3], the product sigma-algebra is the Borel sigma-algebra of $G\times G$, and multiplication and inversion are continuous. Since $\mu\times\mu$ is a probability, its absolute integral is finite by [F5]. Set $I:=\int_G\int_G f(x^{-1}y)\,d\mu(y)\,d\mu(x)$. Fubini [F6] permits either order of integration. Integrating in $y$ first and using left invariance gives $I=\int_G f\,d\mu$. Reversing the order and, for fixed $y$, substituting $x=yx'$ (again left invariance) gives $I=\int_G f((x')^{-1})\,d\mu(x')$. Thus $\int f(x^{-1})d\mu(x)=\int f(x)d\mu(x)$, so inversion preserves $\mu$. With root factor $h_{(a,0)}=1$, the inverse coordinate map is $U_e=h_{s(e)}^{-1}h_{t(e)}$ on $T$ and $U_e=h_{s(e)}^{-1}V_eh_{t(e)}$ off $T$. Recovering each $h_v$ recursively along $T$ uses left or right translations and inversion; recovering each off-tree $U_e$ from fixed $h$ and $V_e$ uses left and right translations. These maps preserve each Haar factor, so successive finite Fubini integrations send $\prod_e d\mu(U_e)$ to $\prod_{v\ne(a,0)}d\mu(h_v)\prod_{e\notin T}d\mu(V_e)$; every bounded integrand used here is $L^1$ because all factors are probabilities. The tree coordinates integrate to $1$. [given, F1, F3, F4, F5, F6, step 2.1, algebra]

3.2 For each face based at $v_0$, substituting the vertex action from [F1] into its ordered boundary product cancels every intermediate factor $h_{v_i}^{-1}h_{v_i}$ and gives $U_p(h\cdot U)=h_{v_0}U_p(U)h_{v_0}^{-1}$. Since each $w_{i,j}$ is conjugation-invariant by [F2], the full density $\prod_{i,j}w_{i,j}(U_{p_{i,j}})$ is unchanged by the gauge-fixing transformation. [F1, F2, step 2.1, algebra]

4.1 In tree gauge all horizontal variables are $1$ and $V_{a,j}=1$. The counterclockwise face word gives $P_{i,j}=V_{i+1,j}V_{i,j}^{-1}$. For a fixed row $j$, starting at $V_{a,j}=1$, the equations determine $V_{i+1,j}=P_{i,j}V_{i,j}$ to the right of $a$ and $V_{i,j}=P_{i,j}^{-1}V_{i+1,j}$ to its left. Thus the map from the $M$ non-tree vertical variables in row $j$ to its $M$ plaquette variables is a bijective triangular coordinate change. Recursively, to the right of $a$ the map from $P_{i,j}$ to $V_{i+1,j}$ is right translation by fixed $V_{i,j}$, while to the left it is inversion followed by right translation by fixed $V_{i+1,j}$; both preserve $\mu$ by bi-invariance and step 3.1. Iterated Fubini therefore shows that this row map preserves the product probability measure. Distinct rows use disjoint vertical variables, so their product gives a measure-preserving bijection from all non-tree vertical variables to all plaquette variables. [given, F1, F2, F3, F4, F6, step 3.1, algebra]

5.1 By step 3.2 the gauge-fixed unnormalized density is $\prod_{i,j}w_{i,j}(P_{i,j})$. Each positive continuous $w_{i,j}$ is bounded above and below by positive constants: continuity gives a bounded neighborhood at each group element, and compactness gives a finite subcover; applying the same argument to $1/w_{i,j}$ gives a positive lower bound. Thus there are constants $0<m_{i,j}\leq w_{i,j}\leq M_{i,j}<\infty$, so the probability integral gives $0<m_{i,j}\leq z_{i,j}=\int_Gw_{i,j}\,d\mu\leq M_{i,j}<\infty$. In particular, each factor and the finite product density are $L^1$; Fubini [F6] applies to factor the partition function. The product Haar measure factors by step 4.1, so the partition function is $\prod_{i,j}z_{i,j}$; dividing by it yields the product of the displayed one-plaquette probability measures defined by the densities [F4]. [given, F1, F2, F3, F4, F5, F6, step 3.2, step 4.1, algebra] ∎
