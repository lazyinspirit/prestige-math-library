---
id: lem-quiver-motivic-extension-stack-class
kind: lemma
title: "The motive of a quiver extension stack"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-motivic-stack-function-groups-for-quiver-representations
  - def-motivic-hall-algebra-of-a-finite-quiver
  - def-algebraic-stack-and-inertia
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, arXiv:1002.4372v1, §4.1 and §7.1"
      url: "https://arxiv.org/pdf/1002.4372v1"
    - title: "Dominic Joyce, Configurations in abelian categories. II. Ringel-Hall algebras, arXiv:math/0503029v2, §§4–5"
      url: "https://arxiv.org/pdf/math/0503029v4"
verification:
  precheck: pass
---

## Statement

Let $Q$ be a finite quiver over $k$, and let $X\to\mathfrak M_{\mathbf d}(Q)$ and
$Y\to\mathfrak M_{\mathbf e}(Q)$ be finite-type stack families of quotient
representations $A$ and subrepresentations $B$. Let
$\mathfrak E_{X,Y}$ be the stack of exact sequences
$0\to B\to E\to A\to0$ with the endpoint identifications supplied by $X$
and $Y$. Define the bilinear Euler form
$$\chi_Q(\mathbf d,\mathbf e) =\sum_{i\in Q_0}d_i e_i-\sum_{a\in Q_1}d_{s(a)}e_{t(a)}.$$Then the relative motivic class over $X\times Y$ is$$[\mathfrak E_{X,Y}\to X\times Y] =\mathbb L^{-\chi_Q(\mathbf d,\mathbf e)} [X\times Y\to X\times Y]$$
in the vector-bundle-stack coefficient theory of
[[def-motivic-stack-function-groups-for-quiver-representations]]. The
statement concerns extension groupoids, so automorphisms of an extension
that act trivially on its two endpoints are retained.

## Facts & Assumptions

**Given:** A finite quiver $Q$, families of representations $A,B$ of fixed
dimension vectors $\mathbf d,\mathbf e$, and the extension-stack class above.

[F1] The relative coefficient group imposes
$[V_1/V_0\to S]=\mathbb L^{\operatorname{rk}V_1-\operatorname{rk}V_0}[S\to S]$
for a constant-rank linear map of vector bundles
$V_0\to V_1$ ([[def-motivic-stack-function-groups-for-quiver-representations]]).

[F2] For each arrow $a:i\to j$, an extension has an off-diagonal arrow map
$A_i\to B_j$ after a local splitting of the vertexwise vector-bundle
sequence; changing that splitting by $h_i:A_i\to B_i$ changes the off-diagonal
map by $B_a h_i-h_j A_a$ ([[def-motivic-hall-algebra-of-a-finite-quiver]]).

[A1] The algebraic-stack convention used here inherits the represented-sheaf
descent use of AC stated in
[[def-algebraic-stack-and-inertia]] and [[def-axiom-of-choice]]. The explicit
finite quiver quotient presentations require no further choice.

## Proof

**Proof technique:** direct.

1.1 Over the base $X\times Y$, form the vector bundles $$ V_0=\bigoplus_{i\in Q_0}\operatorname{Hom}(A_i,B_i),\qquad V_1=\bigoplus_{a\in Q_1}\operatorname{Hom}(A_{s(a)},B_{t(a)}). $$ Their ranks are $\sum_i d_i e_i$ and $\sum_{a:i\to j}d_i e_j$, respectively. On a finite Zariski cover of the base, each vertexwise short exact sequence of vector bundles splits. Refine that cover to a finite locally closed stratification. On each stratum every extension is a block upper-triangular arrow family, and changing splittings is the translation action of $V_0$ on $V_1$ through $\partial(h)_a=B_a h_{s(a)}-h_{t(a)}A_a$. The stack of extensions with identified endpoints is therefore locally the vector-bundle stack $[V_1/V_0]$. [A1, F2, given, construct]

2.1 The rank of $\partial$ may vary, so stratify $X\times Y$ by its finitely many possible ranks. On each locally closed stratum the kernels and cokernels of $\partial$ are vector bundles, and the defining vector-stack relation in [F1] gives class $\mathbb L^{\operatorname{rk}V_1-\operatorname{rk}V_0}$ times that stratum. This exponent is constant across strata because the two bundle ranks were fixed by $\mathbf d,\mathbf e$. Additivity over the strata yields $$ [\mathfrak E_{X,Y}\to X\times Y] =\mathbb L^{\sum_{a:i\to j}d_i e_j-\sum_i d_i e_i}[X\times Y\to X\times Y]. $$ [F1, F2, step 1.1, algebra]

3.1 The exponent in step 2.1 is $-\chi_Q(\mathbf d,\mathbf e)$ by the definition in the Statement. This proves the claimed relative class. [F1, step 2.1, algebra] ∎


