---
id: cex-modular-specialization-collapses-unequal-parameter-cell-labels
kind: counterexample
title: A characteristic-two specialization collapses four weighted cell labels
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-arbitrary-rank-coxeter-system-and-bruhat-order, def-unequal-parameter-weight-function-and-coefficient-order, thm-arbitrary-rank-finite-parabolics-and-bruhat-subword, def-unequal-parameter-coxeter-hecke-algebra, thm-unequal-parameter-kazhdan-lusztig-basis, def-unequal-parameter-cells-and-cell-quotients, thm-unequal-parameter-cell-quotients-are-modules, lem-simple-generator-weights-extend-to-a-weight-function, lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity, def-canonical-basic-set-for-hecke-specialization]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "None; the algebras and all four one-dimensional modules are explicit."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, EPFL lecture notes (2006)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "§4.1, Definition 4.13, Remark 4.14, and Example 4.15, PDF pp. 15 and 22–23: decomposition matrices, canonical basic sets, and a separate example where such a set fails to exist."
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised arXiv text (2014)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§§3.1, 5.1–5.2 and 8.1–8.3, PDF pp. 22 and 27–29, 36–37: weighted KL bases and cell quotients used in the direct computation."
---

## Statement refuted

For every modular specialization of an unequal-parameter Hecke algebra, distinct generic weighted cell-module labels remain pairwise distinct among the simple modules of the special algebra.

## Facts & Assumptions

**Given:** The Coxeter presentation, the unequal weights, the specialization $v\mapsto3$, and the weighted KL and cell conventions.

[F1] [[def-arbitrary-rank-coxeter-system-and-bruhat-order]] and [[thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]]: the Coxeter presentation determines length and Bruhat order, and finite-generator parabolics preserve intrinsic and ambient lengths.

[F2] [[def-unequal-parameter-weight-function-and-coefficient-order]] and [[lem-simple-generator-weights-extend-to-a-weight-function]]: weights add on length-additive products, and labels on simple generators extend when equal on odd-labelled edges.

[F3] [[def-unequal-parameter-coxeter-hecke-algebra]], [[lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity]], and [[thm-unequal-parameter-kazhdan-lusztig-basis]]: the quadratic and braid relations define the weighted algebra, the standard elements form a basis after base change, and the KL elements are the unique bar-invariant triangular basis.

[F4] [[def-unequal-parameter-cells-and-cell-quotients]] and [[thm-unequal-parameter-cell-quotients-are-modules]]: coefficient transitions define the cells, and their quotients are modules with bases indexed by the cells.

[F5] [[def-canonical-basic-set-for-hecke-specialization]]: a decomposition matrix records composition multiplicities of the chosen stable lattices after reduction.

## Counterexample

**Given:** Let $W=A_1\times A_1=\langle s,t\mid s^2=t^2=1,\ (st)^2=1\rangle$ with $L(s)=1,L(t)=2$. Specialize $v\mapsto3$ in $O=\mathbb Z_2$, with fraction field $K=\mathbb Q_2$ and residue field $k=\mathbb F_2$. The four generic cell-module labels have eigenvalue pairs
$$(-3^{-1},-3^{-2}),\quad (3,-3^{-2}),\quad (-3^{-1},3^2),\quad (3,3^2)$$
for $(T_s,T_t)$. They are pairwise distinct over $K$, but every corresponding $O$-lattice reduces to the same simple $H_k$-module. This refutes the asserted universal label preservation and makes no claim about existence or nonexistence of a canonical basic set.

1.1 Since the only finite edge has even label $2$, the assignments $L(s)=1,L(t)=2$ extend to a weight function by [F2]. The relation $(st)^2=1$ gives $st=ts$, so every element is one of $1,s,t,st$. The map to $(\mathbb Z/2\mathbb Z)^2$ sending $s,t$ to the two standard basis vectors separates these four elements; their lengths are $0,1,1,2$. [F1, F2, algebra]

2.1 In $k=\mathbb F_2$, both $3$ and $3^2$ reduce to $1$, and their negatives and inverses also reduce to $1$. Put $x=T_s-1$ and $y=T_t-1$ in $H_k$. The specialized quadratic relations and characteristic two give $x^2=y^2=0$, and $x,y$ commute, so the generators define a surjection $k[x,y]/(x^2,y^2)\to H_k$. Its source has basis $1,x,y,xy$, while [F3] and the four-element group from step 1.1 give $H_k$ dimension four with standard basis $1,T_s,T_t,T_{st}$; since $T_s=1+x$ and $T_t=1+y$, the map is surjective between four-dimensional spaces and is an isomorphism. The ideal $\mathfrak r=(x,y)$ satisfies $\mathfrak r^3=0$ and $H_k/\mathfrak r\cong k$. If $M$ is a simple $H_k$-module, then $\mathfrak rM$ is a submodule; if it equalled $M$, nilpotence would imply $M=\mathfrak r^3M=0$. Thus $\mathfrak rM=0$, so $M$ is the unique one-dimensional simple module of $H_k/\mathfrak r$. [F3, step 1.1, algebra]

2.2 Let $C_1=1$, $C_s=T_s+v^{-1}$, and $C_t=T_t+v^{-2}$. The quadratic relations give $C_s^2=(v+v^{-1})C_s$ and $C_t^2=(v^2+v^{-2})C_t$. Since $s,t$ commute, $C_{st}:=C_sC_t=C_tC_s=T_{st}+v^{-2}T_s+v^{-1}T_t+v^{-3}$. The standard basis and Bruhat subword property in [F1,F3] show triangularity with negative lower coefficients; bar invariance and uniqueness in [F3] identify the KL elements. The complete left products are $C_sC_1=C_s$, $C_tC_1=C_t$, $C_sC_s=(v+v^{-1})C_s$, $C_tC_s=C_{st}$, $C_sC_t=C_{st}$, $C_tC_t=(v^2+v^{-2})C_t$, $C_sC_{st}=C_s^2C_t=(v+v^{-1})C_{st}$, and $C_tC_{st}=C_sC_t^2=(v^2+v^{-2})C_{st}$. Right products agree because the algebra is commutative. Hence the only non-loop arrows are $1\to s$, $1\to t$, $s\to st$, and $t\to st$, so all four cells are singletons. In the $\{1\}$-quotient $C_s,C_t$ vanish, giving $(T_s,T_t)=(-v^{-1},-v^{-2})$; in the $\{s\}$-quotient $C_s^2$ gives $T_s=v$ and $C_tC_s=C_{st}$ vanishes, giving $T_t=-v^{-2}$; in the $\{t\}$-quotient $C_sC_t=C_{st}$ vanishes, giving $T_s=-v^{-1}$, and $C_t^2$ gives $T_t=v^2$; in the $\{st\}$-quotient the last two products give $(T_s,T_t)=(v,v^2)$. By [F4] these are well-defined cell modules, with exactly the four action pairs in the counterexample. [F1, F3, F4, step 1.1, algebra]

3.1 At $v=3$, the two possible $T_s$-eigenvalues $3,-3^{-1}$ are distinct in $K$, since $3+3^{-1}=10/3\ne0$. The two possible $T_t$-eigenvalues $3^2,-3^{-2}$ are distinct since $3^2+3^{-2}=82/9\ne0$. Thus the four pairs listed in this counterexample label four distinct one-dimensional simple $H_K$-modules. Each has an $O$-stable lattice $\Lambda=O$, because all four eigenvalues lie in $O$. [F3, step 2.2, algebra]

4.1 Each of the four lattices from step 3.1 reduces to the one-dimensional character $T_s=T_t=1$, which is the unique simple module found in step 2.1. Each reduction is itself simple, so its composition multiplicity is one. Hence the decomposition matrix has four rows and one column, all entries equal to $1$, by [F5]. The four generic labels have collapsed to one special simple label, proving the claimed failure of universal label preservation. This calculation does not decide whether some subset satisfies the canonical-basic-set conditions. [F4, F5, step 3.1, step 2.1] ∎
