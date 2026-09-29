---
id: lem-relative-projective-line-cohomology-and-apolarity
kind: lemma
title: Relative projective-line cohomology and apolarity
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - lem-relative-projective-line-degree-normal-form
  - thm-cohomology-projective-space-twisting-sheaves
  - lem-projective-space-top-cohomology-residue-pairing
  - def-higher-direct-image-sheaf
  - lem-higher-direct-image-affine-localization
  - def-axiom-of-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
      locator: "§§30.2, 30.8, 30.14"
    - title: "Jacob Lurie, A Proof of the Borel–Weil–Bott Theorem"
      url: "https://people.math.harvard.edu/~lurie/papers/bwb.pdf"
      locator: "Theorems 1 and 3 and Lemma 4"
---

## Statement

Assume the Axiom of Choice. Let $\pi:E\to S$ be a Zariski locally trivial
$\mathbb P^1$-bundle of complex schemes and let $L$ be an invertible sheaf
whose degree on every geometric fibre is the same integer $n\ge-1$.
Write $K_\pi=\omega_{E/S}$. Then
$$R^q\pi_*L=0\quad(q>0),\qquad R^q\pi_*(L\otimes K_\pi^{\otimes(n+1)})=0\quad(q\ne1).$$
With the nonzero apolarity normalization determined by the ordered residue
$x_0^{-1}x_1^{-1}\mapsto1$, there is a natural isomorphism
$$a_L:\pi_*L\xrightarrow{\ \sim\ }R^1\pi_*(L\otimes K_\pi^{\otimes(n+1)}).$$
It commutes with restriction on $S$, bundle isomorphisms and changes of
local projective coordinates. When $n=-1$, both sheaves in this isomorphism
are zero.

## Facts & Assumptions

**Given:** $\pi,E,S,L,K_\pi,n$ as in the statement.

[F1] On a sufficiently fine Zariski cover $U$ of $S$ with
$E_U\cong\mathbb P^1_U$, there is an invertible $M_U$ on $U$ such that
$L|_{E_U}\cong\mathcal O(n)\otimes\pi^*M_U$. The evaluation construction
gives $M_U=\pi_*(L(-n))|_U$. ([[lem-relative-projective-line-degree-normal-form]])

[F2] For any ring $A$, the ordered two-chart Čech calculation gives
$H^0(\mathbb P^1_A,\mathcal O(d))=\operatorname{Sym}^d(A^2)^\vee$ for
$d\ge0$ and zero for $d<0$, while $H^1$ vanishes for $d\ge-1$ and for
$d\le-2$ is free on the Laurent classes
$x_0^{-a}x_1^{-b}$ with $a,b\ge1$ and $a+b=-d$; higher cohomology
vanishes. These formulas commute with ring maps through the same Čech
complex. ([[thm-cohomology-projective-space-twisting-sheaves]])

[F3] Over a field, the Laurent coefficient functional sends
$x_0^{-1}x_1^{-1}\in H^1(\mathbb P^1_k,\mathcal O(-2))$ to $1$ and pairs
$H^0(\mathcal O(n))$ perfectly with $H^1(\mathcal O(-n-2))$.
([[lem-projective-space-top-cohomology-residue-pairing]])

[F4] A higher direct image is the cohomology sheaf of the direct image of
an injective resolution; for a quasi-compact separated morphism and a
quasi-coherent sheaf, on each affine base open $U$ its restriction is the
associated sheaf of $H^q(E_U,-)$, compatibly with restriction to smaller
affine opens. ([[def-higher-direct-image-sheaf]],
[[lem-higher-direct-image-affine-localization]])

[F5] The Axiom of Choice is [[def-axiom-of-choice]] and the Axiom of
Dependent Choice is [[def-dependent-choice]]. AC implies DC: choose, for
each element of the domain of a serial relation, one successor, then
iterate this choice function from a given starting element. Thus the
DC-qualified affine-localization supplier [F4] is available under the
statement's AC hypothesis.

## Proof

1.1 Work over a sufficiently small affine $U=\operatorname{Spec}A$ that trivializes $E$ and $M_U$ in [F1]. Put $V=A^2$, use the line convention $\mathbb P(V)$, and write $L|_{E_U}=\mathcal O(n)\otimes\pi^*M_U$. The relative Euler sequence, or its direct two-chart differential calculation, gives $$K_\pi|_{E_U}=\mathcal O(-2)\otimes\pi^*(\det V)^\vee.$$ Indeed $\Omega^1_{\mathbb P(V)/U}$ is the determinant of the kernel of $V^\vee\otimes\mathcal O(-1)\to\mathcal O$, and the displayed formula has central $\lambda I_V$-weight zero, as a relative canonical bundle must. Hence $$L\otimes K_\pi^{\otimes(n+1)} =\mathcal O(-n-2)\otimes\pi^*(M_U\otimes(\det V)^{-n-1}).$$ [F1, construct]

2.1 Apply [F2] to these two twists and [F4] to identify the resulting modules with higher direct images on $U$. For $n\ge0$ this gives $$\pi_*L|_U\cong\operatorname{Sym}^n(V^\vee)\otimes M_U, \qquad R^q\pi_*L|_U=0\ (q>0),$$ and $R^q\pi_*(L K_\pi^{n+1})|_U=0$ for $q\ne1$. For $n=-1$ the two twists are both $\mathcal O(-1)\otimes M_U$ and [F2] makes every direct image zero. The calculations hold after every affine restriction because their Čech matrices are defined over $A$ and tensor with the new base ring. [F1, F2, F4, step 1.1]

3.1 For $n\ge0$, the monomial bases of [F2] give a perfect pairing over $A$: a degree-$n$ monomial $x_0^ax_1^{n-a}$ pairs to $1$ with the Laurent class $x_0^{-a-1}x_1^{-(n-a)-1}$ and to $0$ with the other basis classes. This is the same ordered residue normalization as [F3] after every field specialization. It identifies $H^1(\mathcal O(-n-2))$ with $\operatorname{Sym}^n(V^\vee)^\vee\otimes\det V =\operatorname{Sym}^n V\otimes\det V$ as a $GL(V)$-representation: the determinant factor records how the ordered Laurent residue changes under a coordinate matrix. After the determinant twist of step 1.1, $$R^1\pi_*(L K_\pi^{n+1})|_U \cong\operatorname{Sym}^nV\otimes(\det V)^{-n}\otimes M_U.$$ The canonical wedge pairing in rank two gives a $GL(V)$-equivariant isomorphism $V^\vee\cong V\otimes(\det V)^{-1}$; its $n$th symmetric power identifies the right side with $\operatorname{Sym}^n(V^\vee)\otimes M_U=\pi_*L|_U$. Choose the scalar of this map so the dual pair of ordered monomials has residue $1$; the wedge and residue formulas then determine the same nonzero invariant normalization on every chart. [F2, F3, step 1.1, step 2.1, algebra]

4.1 On an overlap two projective trivializations differ by a $PGL_2$-matrix. After an affine refinement lift it to $g\in GL_2$; replacing $g$ by $\lambda g$ changes the action on $\operatorname{Sym}^n V^\vee$ by $\lambda^{-n}$ and the action on $\operatorname{Sym}^nV\otimes(\det V)^{-n}$ by $\lambda^n\lambda^{-2n}=\lambda^{-n}$. The transition of $M_U$ is the same on both sides because both functors are linear in $L$. Thus the $GL_2$-equivariance of step 3.1 and equal central weights show that the local maps agree on overlaps independently of the lift, and they glue to $a_L$. The Čech constructions, wedge map and descent use only restriction and tensor operations, so $a_L$ is compatible with base restriction and coordinate changes. The explicit projective-line Čech calculation of [F2] supplies the required cohomology comparison, and the completed local normal form [F1] is used at steps 1.1–2.1. AC is inherited through [F1], [F2] and [F4]. [F1, F2, F3, F4, F5, step 2.1, step 3.1] ∎
