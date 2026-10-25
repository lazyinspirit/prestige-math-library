---
id: thm-qftx-strong-coupling-wilson-area-law
kind: theorem
title: Exact finite-lattice SU(2) Wilson area law in two dimensions
status: "published"
origin: session
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega inherited through the stated finite lattice data; the finite integration proof uses no stronger choice principle."
deps:
  - def-countable-choice
  - def-qftx-nonabelian-lattice-gauge-data
  - def-qftx-wilson-loop
  - def-qftx-su2-wilson-plaquette-measure
  - lem-qftx-planar-plaquette-factorization
  - lem-qftx-su2-one-plaquette-average
  - lem-qftx-wilson-loop-gauge-invariance
  - def-borel-sigma-algebra
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-tdmath-measure-integral
  - def-measure-with-density
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-lattice-gauge-data: mathematical-premise
  def-qftx-wilson-loop: mathematical-premise
  def-qftx-su2-wilson-plaquette-measure: mathematical-premise
  lem-qftx-planar-plaquette-factorization: mathematical-premise
  lem-qftx-su2-one-plaquette-average: mathematical-premise
  lem-qftx-wilson-loop-gauge-invariance: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-probability-measure: mathematical-premise
  def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  def-measure-with-density: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. B. Meyer, Lattice QCD: A Brief Introduction, in Lattice QCD for Nuclear Physics, Lecture Notes in Physics 889"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf"
      locator: "§§1.2.3–1.2.4 and §1.4.1.1, printed pp. 11–14 and 22–24, for link and plaquette conventions and the leading minimal-surface mechanism; the exact finite two-dimensional identity is proved locally."
    - title: "Robert Lohmayer, Eigenvalue Distributions of Wilson Loops"
      url: "https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf"
      locator: "§§4.1–4.2.2, printed pp. 59–64, for two-dimensional plaquette factorization and exact rectangular Wilson-loop area dependence; the finite free-boundary SU(2) statement is rederived locally."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M,N\geq1$ be integers and use the finite $M$-by-$N$ square lattice with free boundary (no periodic identifications and all boundary links retained). Its vertices are $(i,j)$ for $0\leq i\leq M$, $0\leq j\leq N$; its positively oriented edges are eastward $h_{i,j}:(i,j)\to(i+1,j)$ for $0\leq i<M$, $0\leq j\leq N$, and northward $v_{i,j}:(i,j)\to(i,j+1)$ for $0\leq i\leq M$, $0\leq j<N$; and its faces $p_{i,j}$ for $0\leq i<M$, $0\leq j<N$ have counterclockwise boundary words $(h_{i,j},v_{i+1,j},\bar h_{i,j+1},\bar v_{i,j})$. Use the matrix group $SU(2)=\{U\in M_2(\mathbb C):U^*U=I_2,\det U=1\}$ with matrix multiplication and its identity defining representation. In real coordinates its elements are

$$
U(x)=\begin{pmatrix}x_0+ix_3&x_2+ix_1\\-x_2+ix_1&x_0-ix_3\end{pmatrix},\qquad x\in S^3:=\{x\in\mathbb R^4:\textstyle\sum_{j=0}^3x_j^2=1\}.
$$

Let $\sigma_3$ be the induced round surface-area measure on $S^3$, with total area $2\pi^2$, and let $\mu_2$ be the pushforward of $\sigma_3/(2\pi^2)$ under this map. Each positively oriented edge carries one link matrix; reverse links use inverses. For each face $p$, $U_p$ is the product of its boundary links in traversal order; for a loop $C$, $U_C$ is the analogous ordered edge product. Use the Wilson action $S_\beta(U)=\beta\sum_p(1-\tfrac12\operatorname{Tr}_2 U_p)$ and normalized loop $W(C)=\tfrac12\operatorname{Tr}_2 U_C$. Let $\beta=4/g_0^2$ for dimensionless $g_0>0$, and restrict to the explicit strong-coupling window $0<\beta\leq1$ (equivalently $g_0^2\geq4$). For any axis-aligned rectangle contained in the lattice with corners $(a,c)$ and $(b,d)$, where $0\leq a<b\leq M$ and $0\leq c<d\leq N$, let $C_{a,b;c,d}$ be its boundary traversed counterclockwise from $(a,c)$. Its area in plaquette units is $A=(b-a)(d-c)$. Define $Z(SU(2)):=\{z\in SU(2):zU=Uz\text{ for every }U\in SU(2)\}$ and $\chi:Z(SU(2))\to\{\pm1\}$ by $z=\chi(z)I_2$. Then $Z(SU(2))=\{I_2,-I_2\}$ and the defining representation has the nontrivial central character $\chi(I_2)=1$, $\chi(-I_2)=-1$. Put

$$
\lambda(\beta):=\frac{\int_{SU(2)}\tfrac12\operatorname{Tr}_2(U)e^{\beta\operatorname{Tr}_2(U)/2}\,d\mu_2(U)}{\int_{SU(2)}e^{\beta\operatorname{Tr}_2(U)/2}\,d\mu_2(U)},
$$

where $\tau(U)=\tfrac12\operatorname{Tr}_2(U)$. Then $0<\lambda(\beta)<1$ and the exact finite-lattice expectation is

$$
\langle W(C_{a,b;c,d})\rangle_\beta=\lambda(\beta)^A=\exp\!\bigl(-\sigma_{\rm lat}(\beta)A\bigr),\qquad \sigma_{\rm lat}(\beta):=-\log\lambda(\beta)>0.
$$

The parameter $\beta$ and the lattice string tension $\sigma_{\rm lat}$ are dimensionless. The identity holds for every finite container and every stated rectangle; no infinite-area, infinite-volume, or continuum limit is taken, and no continuum confinement or mass-gap claim follows.

## Statement references

[[def-qftx-nonabelian-lattice-gauge-data|Finite link configurations, gauge action, and product measure]]

[[def-qftx-wilson-loop|Normalized trace of ordered lattice holonomy]]

[[def-qftx-su2-wilson-plaquette-measure|SU(2) Wilson action and one-plaquette probability]]

[[lem-qftx-planar-plaquette-factorization|Independent plaquette variables on a finite rectangle]]

[[lem-qftx-su2-one-plaquette-average|One-plaquette matrix average and strong-coupling coefficient]]

[[lem-qftx-wilson-loop-gauge-invariance|Gauge invariance of the original loop observable under tree gauge fixing]]

[[def-probability-measure|Normalized link and plaquette probabilities]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Finite product sigma-algebra]]

[[def-product-measure-on-sigma-finite-spaces|Finite link product measure]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique|Finite product measure existence and rectangle formula]]

[[def-tdmath-measure-integral|Finite-volume expectation integral]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces|Fubini's theorem for bounded matrix-entry products]]

[Meyer, §1.4.1.1, printed pp. 22–24; the cited 4D leading-order argument is contextual, and the finite 2D identity is proved here](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

[Lohmayer, §§4.1–4.2.2, printed pp. 59–64; the exact 2D factorization mechanism is rederived for the stated finite free-boundary lattice](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the finite free-boundary square lattice, the defining $SU(2)$ representation, the Wilson action with $0<\beta\leq1$, and a rectangular loop $C_{a,b;c,d}$.

[A1] $\mathrm{AC}_\omega$ is inherited through the finite non-Abelian lattice datum; the present integration proof uses only finite products and explicit coordinate changes. [[def-countable-choice]]

[F1] [[def-qftx-nonabelian-lattice-gauge-data]]: link configurations are $G$-valued, the vertex group acts by endpoint multiplication, and normalized product Haar measure is used on the finite link set.

[F2] [[def-qftx-wilson-loop]]: $W(C)=\tfrac12\operatorname{Tr}_2(U_C)$ for the defining representation, with edge matrices multiplied in traversal order.

[F3] [[def-qftx-su2-wilson-plaquette-measure]]: $S_\beta=\beta\sum_p(1-\tau(U_p))$, $\tau(U)=\tfrac12\operatorname{Tr}_2U$, and the one-plaquette law is $d\nu_\beta=z_\beta^{-1}e^{\beta\tau}d\mu_2$.

[F4] [[lem-qftx-planar-plaquette-factorization]]: in a chosen tree gauge, the rectangle's plaquette holonomies are independent with law $\nu_\beta$ when all face weights are the same Wilson weight.

[F5] [[lem-qftx-su2-one-plaquette-average]]: $\mathbb E_{\nu_\beta}[U]=\lambda(\beta)I_2$ and $0<\lambda(\beta)<1$.

[F6] [[lem-qftx-wilson-loop-gauge-invariance]]: the normalized trace of the original closed-loop holonomy is unchanged by every vertex gauge transformation, including the configuration-dependent transformation to the tree-gauge representative.

[F7] The finite link and plaquette measures are product probabilities on their finite product sigma-algebras; the product formula supplies their rectangle values. [[def-probability-measure]] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[def-product-measure-on-sigma-finite-spaces]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F8] An integrand bounded by $1$ on the finite product probability space is in $L^1$, and Fubini applies to its product-coordinate sections. [[def-tdmath-measure-integral]] [[def-integrable-real-and-complex-functions-and-their-integrals]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces|Fubini's theorem for $L^1$ functions on a sigma-finite product]]

## Proof

1.1 The Wilson action weight is $e^{-\beta N_p}\prod_p e^{\beta\tau(U_p)}$, where $N_p=MN$; the constant $e^{-\beta N_p}$ cancels in normalized expectations. By the coordinates in [F3], $\tau(U)=x_0\in\mathbb R$; since $U^{-1}=U^*$, $\tau(U^{-1})=\overline{\tau(U)}=\tau(U)$, and cyclicity of trace makes $\tau$ conjugation-invariant. Therefore $w_p(U)=e^{\beta\tau(U)}$ is positive, continuous, conjugation-invariant and inversion-invariant, so it meets [F4]'s hypotheses. Thus [F4] gives the plaquette law $\nu_\beta$ after the tree-gauge change of variables. The inherited axiom base is $\mathrm{AC}_\omega$ [A1]. [given, A1, F1, F3, F4, algebra]

2.1 Let $U^{\mathrm{tree}}$ be the unique tree-gauge representative of the original link configuration supplied by [F4]. By [F6], $W(C;U^{\mathrm{tree}})=W(C;U)$ pointwise, so evaluating the original expectation after this configuration-dependent gauge fixing preserves the loop observable; [F4] supplies the corresponding law of its plaquette variables. Choose the vertical tree column equal to the left side $x=a$ of $C_{a,b;c,d}$. All horizontal links and the left-side vertical links are then the identity. For each row $j$, $P_{i,j}=V_{i+1,j}V_{i,j}^{-1}$ and $V_{a,j}=I_2$, so the recursion $V_{i+1,j}=P_{i,j}V_{i,j}$ yields $V_{b,j}=P_{b-1,j}\cdots P_{a,j}$. The counterclockwise boundary from $(a,c)$ therefore has ordered holonomy $U_C=(P_{b-1,c}\cdots P_{a,c})(P_{b-1,c+1}\cdots P_{a,c+1})\cdots(P_{b-1,d-1}\cdots P_{a,d-1})$, a product of exactly $A=(b-a)(d-c)$ plaquette matrices. [given, F1, F2, F4, F6, step 1.1, algebra]

3.1 By [F4] the plaquette variables in this ordered product have the product probability law $\nu_\beta^{\otimes A}$. Each defining-representation matrix entry has modulus at most $1$, so every entry of the finite matrix-product integrand is bounded and belongs to $L^1$ by [F8]. Fubini applied entry by entry therefore replaces each independent factor by its matrix expectation without changing its order. By [F5] each expectation is $\lambda I_2$, so the expected loop holonomy is $(\lambda I_2)^A=\lambda^A I_2$. [F4, F5, F8, step 2.1, algebra, F7]

4.1 Taking half the trace gives $\langle W(C)\rangle_\beta=\lambda^A$. Since $0<\lambda<1$ by [F5], $\sigma_{\rm lat}=-\log\lambda$ is positive and $\lambda^A=e^{-\sigma_{\rm lat}A}$ for every positive integer area $A$. The conclusion is the stated finite-lattice model deduction only. [F2, F5, step 3.1, algebra]

5.1 To identify the center, write $D=\operatorname{diag}(i,-i)$ and $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$; both belong to $SU(2)$. If $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in Z(SU(2))$, then $AD=DA$ forces $b=c=0$. The conditions $A\in SU(2)$ then give $A=\operatorname{diag}(z,z^{-1})$ with $|z|=1$, and $AJ=JA$ forces $z=z^{-1}$, hence $z=\pm1$. Conversely, both scalar matrices $\pm I_2$ commute with every element of $SU(2)$. Since the defining representation is the identity matrix representation, its character on this center is $\chi(\pm I_2)=\pm1$, as stated. [given, algebra] ∎
