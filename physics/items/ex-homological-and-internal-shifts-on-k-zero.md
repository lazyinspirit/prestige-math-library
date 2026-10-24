---
id: "ex-homological-and-internal-shifts-on-k-zero"
kind: "example"
title: "Independent homological and internal shifts on graded K0"
deps: [lem-triangulated-k-zero-shifts-and-exact-functors, thm-perfect-complex-k-zero-agrees-with-projective-k-zero, def-graded-grothendieck-group-shift-module-and-cartan-map, def-graded-ring-module-bimodule-and-internal-shift, def-perfect-complex-over-a-ring, lem-perfect-complexes-form-a-triangulated-subcategory, def-triangulated-grothendieck-group, thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules, def-finitely-generated-graded-projective-module]
sources:
  references:
    - title: "Khovanov and Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §§2c and 2e.1"
      url: "https://arxiv.org/pdf/math/0006056"
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

Let $k$ be a field, let $A$ be a finite-dimensional unital graded $k$-algebra
and let $P$ be a finite graded projective left $A$-module, regarded as the
bounded complex with $P$ in cohomological degree $0$ and all differentials
zero. Then $P[1]\{2\}$ is a graded perfect complex and its class in
$K_0^{\mathrm{tri}}(D_{\mathrm{perf}}^{\mathrm{gr}}(A))$ satisfies
$[P[1]\{2\}]=-[P\{2\}]$; identifying that group with $K_0^{\mathrm{gr}}(A)$
along the graded projective comparison, the same equality reads
$$[P[1]\{2\}]=-v^2[P],$$
and the graded Cartan map carries this class to the element $-v^2[P]$ of
$G_0^{\mathrm{gr}}(A)$. Here $[1]$ is the cochain shift and $\{2\}$ the internal
grading shift: the sign $-1$ comes from the homological shift and the Laurent
factor $v^2$ from the internal shift. No finite-global-dimension hypothesis is
needed.

## Facts & Assumptions

**Given:** A field $k$, a finite-dimensional unital graded $k$-algebra $A$, and
a finite graded projective left $A$-module $P$, viewed as the complex with $P$
in cohomological degree $0$, zero in every other degree, and zero differential.

[F1] For a graded module $M$ and $r\in\mathbb Z$ the internal shift $M\{r\}$ is
the graded module with $(M\{r\})_d=M_{d-r}$ carrying the same scalar action; it
is invertible with $(M\{r\})\{-r\}=M$ and $M\{0\}=M$. On graded complexes the
internal shift acts termwise on the terms and leaves every differential
unchanged; the cochain shift $[1]$ and the internal shift act on different
structures and commute with one another; they need not produce distinct
isomorphism classes, since $0[1]\cong0\{1\}\cong0$
([[def-graded-ring-module-bimodule-and-internal-shift]],
[[def-perfect-complex-over-a-ring]]).

[F2] Graded perfect objects are the objects of $D(\operatorname{GrMod}_0(A))$
isomorphic to a bounded complex of finite graded projective left $A$-modules
with degree-zero differentials, and
$D_{\mathrm{perf}}^{\mathrm{gr}}(A)$ is an essentially small strictly full
triangulated subcategory of $D(\operatorname{GrMod}_0(A))$
([[def-perfect-complex-over-a-ring]],
[[lem-perfect-complexes-form-a-triangulated-subcategory]]).

[F3] $K_0^{\mathrm{tri}}(\mathcal T)$ of an essentially small triangulated
category is the free abelian group on $\operatorname{Iso}(\mathcal T)$ modulo
the distinguished-triangle relations $[Y]=[X]+[Z]$; in it $[0]=0$ and
$[X[n]]=(-1)^n[X]$ for every integer $n$
([[def-triangulated-grothendieck-group]],
[[lem-triangulated-k-zero-shifts-and-exact-functors]]).

[F4] Degree-zero inclusion induces an isomorphism from the split Grothendieck
group of the finite graded projective left $A$-modules onto
$K_0^{\mathrm{tri}}(D_{\mathrm{perf}}^{\mathrm{gr}}(A))$, sending $[Q]$ to
$[Q[0]]$, whose inverse sends the class of a graded perfect object represented
by a bounded finite-projective complex $Q$ with degree-zero differentials to
$\sum_n(-1)^n[Q^n]$
([[thm-perfect-complex-k-zero-agrees-with-projective-k-zero]]).

[F5] $K_0^{\mathrm{gr}}(A)$ is the split Grothendieck group of the
finite-dimensional graded projective left $A$-modules and $G_0^{\mathrm{gr}}(A)$
the Grothendieck group of the finite-dimensional graded left $A$-modules; both
are $\mathbb Z[v,v^{-1}]$-modules with $v^r[Q]=[Q\{r\}]$ and
$v^r[M]=[M\{r\}]$, and the graded Cartan map
$c_A^{\mathrm{gr}}:K_0^{\mathrm{gr}}(A)\to G_0^{\mathrm{gr}}(A)$ sends $[Q]$ to
$[Q]$ ([[def-graded-grothendieck-group-shift-module-and-cartan-map]]).

[F6] A graded left $A$-module is finite graded projective if and only if it is a
degree-zero direct summand of a finite direct sum of internal shifts
$A\{r_1\}\oplus\cdots\oplus A\{r_n\}$
([[def-finitely-generated-graded-projective-module]],
[[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]]).

## Verification

**Proof technique:** direct.

1.1 By [F6] the module $P$ is a degree-zero direct summand of a finite direct sum $A\{r_1\}\oplus\cdots\oplus A\{r_n\}$; since $A$ is finite dimensional over $k$, that sum and hence its summand $P$ are finite dimensional, so $P$ and $P\{2\}$ are objects of the finite-dimensional graded module category in which $K_0^{\mathrm{gr}}(A)$ and $G_0^{\mathrm{gr}}(A)$ are formed. Applying the invertible shift $\{2\}$ to the splitting exhibits $P\{2\}$ as a degree-zero direct summand of $A\{r_1+2\}\oplus\cdots\oplus A\{r_n+2\}$, so $P\{2\}$ is again finite graded projective by [F6]. The stalk complex $C$ with $C^0=P$ and all other terms and differentials zero is a bounded complex of finite graded projectives with zero, hence degree-zero, differentials, so $C$ and its shifts are objects of $D_{\mathrm{perf}}^{\mathrm{gr}}(A)$ by [F2]. Internal shift acts termwise and does not touch cochain degrees, while the cochain shift does not touch the internal grading, so $C\{2\}=P\{2\}[0]$ as complexes, and $C[1]\{2\}=C\{2\}[1]$ is the complex with $P\{2\}$ in cohomological degree $-1$ and zero differential, i.e. the class $[P[1]\{2\}]$ is the class of $(P\{2\})[1]$ in $K_0^{\mathrm{tri}}(D_{\mathrm{perf}}^{\mathrm{gr}}(A))$. [F1, F2, F6, algebra]

2.1 Applying the shift-sign identity of [F3] inside the essentially small triangulated category $D_{\mathrm{perf}}^{\mathrm{gr}}(A)$ to the object $X=C\{2\}$ gives $[X[1]]=-[X]$, that is $[C\{2\}[1]]=-[C\{2\}]$; by step 1.1 the left-hand class is $[P[1]\{2\}]$ and the right-hand class is $-[P\{2\}[0]]$, so $[P[1]\{2\}]=-[P\{2\}[0]]$ in $K_0^{\mathrm{tri}}(D_{\mathrm{perf}}^{\mathrm{gr}}(A))$. [F2, F3, step 1.1, algebra]

2.2 In $K_0^{\mathrm{gr}}(A)$ the shift action gives $v^2[P]=[P\{2\}]$ by [F5], and the graded comparison of [F4] sends this class to $\iota_\ast(v^2[P])=[(P\{2\})[0]]=[P\{2\}[0]]$; independently, the inverse Euler class of [F4] evaluated on the two-term complex $P[1]\{2\}$ of step 1.1, whose only nonzero term is $P\{2\}$ in cohomological degree $-1$, equals $(-1)^{-1}[P\{2\}]=-v^2[P]$. Hence $\iota_\ast(v^2[P])=[P\{2\}[0]]$ and $\iota_\ast^{-1}([P[1]\{2\}])=-v^2[P]$. [F4, F5, step 1.1, algebra]

3.1 Combining steps 2.1 and 2.2, $[P[1]\{2\}]=-[P\{2\}[0]]=-\iota_\ast(v^2[P])$; that is, identifying $K_0^{\mathrm{tri}}(D_{\mathrm{perf}}^{\mathrm{gr}}(A))$ with $K_0^{\mathrm{gr}}(A)$ along the comparison isomorphism $\iota_\ast$ of [F4], the class of the homological-and-internal shift of the degree-zero complex is $[P[1]\{2\}]=-v^2[P]$, the sign coming from $[1]$ and the factor $v^2$ from $\{2\}$. Since the Cartan map of [F5] sends $[Q]\mapsto[Q]$ and both $K_0^{\mathrm{gr}}(A)$ and $G_0^{\mathrm{gr}}(A)$ have $v$ acting by internal shift, $c_A^{\mathrm{gr}}(-v^2[P])=-v^2[P]$, so the image of $[P[1]\{2\}]$ in $G_0^{\mathrm{gr}}(A)$ obeys the same formula $-v^2[P]$. The differentials of $P[1]\{2\}$ vanish identically because $P$ sits in a single cohomological degree, so the internal shift introduces no cochain sign; only the homological shift contributes the sign $-1$, and no finite-global-dimension or Noetherian hypothesis is used. [F4, F5, step 1.1, step 2.1, step 2.2, algebra] ∎
