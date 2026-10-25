---
id: thm-qftx-strong-coupling-wilson-area-law
kind: theorem
title: Exact finite-lattice SU(2) Wilson area law in two dimensions
status: draft
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
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-lattice-gauge-data: mathematical-premise
  def-qftx-wilson-loop: mathematical-premise
  def-qftx-su2-wilson-plaquette-measure: mathematical-premise
  lem-qftx-planar-plaquette-factorization: mathematical-premise
  lem-qftx-su2-one-plaquette-average: mathematical-premise
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
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M,N\geq1$ be integers and use the finite $M$-by-$N$ square lattice with free boundary (no periodic identifications and all boundary links retained), one $SU(2)$ link matrix per positively oriented edge, product normalized round measure, and only link variables (no matter variables), with the Wilson action $S_\beta(U)=\beta\sum_p(1-\tfrac12\operatorname{Tr}_2 U_p)$. Use the defining two-dimensional representation and normalized Wilson loop $W(C)=\tfrac12\operatorname{Tr}_2 U_C$, with edge matrices multiplied in traversal order. Let $\beta=4/g_0^2$ for dimensionless $g_0>0$, and restrict to the explicit strong-coupling window $0<\beta\leq1$ (equivalently $g_0^2\geq4$). For any axis-aligned rectangle contained in the lattice with corners $(a,c)$ and $(b,d)$, where $0\leq a<b\leq M$ and $0\leq c<d\leq N$, let $C_{a,b;c,d}$ be its boundary traversed counterclockwise from $(a,c)$. Its area in plaquette units is $A=(b-a)(d-c)$. The defining representation has nontrivial $\mathbb Z_2$ center charge because $-I_2$ acts as $-I_2$. Put

$$
\lambda(\beta):=\frac{\int_{SU(2)}\tfrac12\operatorname{Tr}_2(U)e^{\beta\operatorname{Tr}_2(U)/2}\,d\mu_2(U)}{\int_{SU(2)}e^{\beta\operatorname{Tr}_2(U)/2}\,d\mu_2(U)},
$$

where $\mu_2$ is normalized round measure on $SU(2)\cong S^3$. Then $0<\lambda(\beta)<1$ and the exact finite-lattice expectation is

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

## Proof

1.1 The Wilson action weight is $e^{-\beta N_p}\prod_p e^{\beta\tau(U_p)}$, where $N_p=MN$; the constant $e^{-\beta N_p}$ cancels in normalized expectations. By the coordinates in [F3], $\tau(U)=x_0\in\mathbb R$; since $U^{-1}=U^*$, $\tau(U^{-1})=\overline{\tau(U)}=\tau(U)$, and cyclicity of trace makes $\tau$ conjugation-invariant. Therefore $w_p(U)=e^{\beta\tau(U)}$ is positive, continuous, conjugation-invariant and inversion-invariant, so it meets [F4]'s hypotheses. Thus in the chosen tree gauge the plaquette variables are independent and each has law $\nu_\beta$. The inherited axiom base is $\mathrm{AC}_\omega$ [A1]. [given, A1, F1, F3, F4, algebra]

2.1 Choose the tree gauge in [F4] with its vertical tree column equal to the left side $x=a$ of $C_{a,b;c,d}$. All horizontal links and the left-side vertical links are then the identity. For each row $j$, $P_{i,j}=V_{i+1,j}V_{i,j}^{-1}$ and $V_{a,j}=I_2$, so the recursion $V_{i+1,j}=P_{i,j}V_{i,j}$ yields $V_{b,j}=P_{b-1,j}\cdots P_{a,j}$. The counterclockwise boundary from $(a,c)$ therefore has ordered holonomy $U_C=(P_{b-1,c}\cdots P_{a,c})(P_{b-1,c+1}\cdots P_{a,c+1})\cdots(P_{b-1,d-1}\cdots P_{a,d-1})$, a product of exactly $A=(b-a)(d-c)$ plaquette matrices. [given, F1, F2, F4, step 1.1, algebra]

3.1 By [F4] the plaquette variables in this ordered product are independent; Fubini applied entry by entry to the finite product of bounded matrix entries replaces each factor by its expectation without changing the order. By [F5] each expectation is $\lambda I_2$, so the expected loop holonomy is $(\lambda I_2)^A=\lambda^A I_2$. [F4, F5, step 2.1, algebra]

4.1 Taking half the trace gives $\langle W(C)\rangle_\beta=\lambda^A$. Since $0<\lambda<1$ by [F5], $\sigma_{\rm lat}=-\log\lambda$ is positive and $\lambda^A=e^{-\sigma_{\rm lat}A}$ for every positive integer area $A$. The conclusion is the stated finite-lattice model deduction only. [F2, F5, step 3.1, algebra] ∎
