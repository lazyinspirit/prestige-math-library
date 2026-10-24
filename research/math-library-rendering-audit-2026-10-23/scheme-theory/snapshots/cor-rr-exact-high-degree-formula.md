---
id: cor-rr-exact-high-degree-formula
kind: corollary
title: "Riemann-Roch in exact form for divisors of degree above 2g - 2"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - def-nonspecial-divisor
  - def-riemann-roch-space-of-divisor
  - thm-cartier-weil-divisors-curves-agree
  - thm-principal-divisor-degree-zero-proper-curve
  - thm-full-riemann-roch-divisor
  - thm-riemann-roch-as-l-minus-index
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the duality suppliers. Let $C$ be
a smooth proper geometrically integral curve over a field $k$ of genus $g$ and
let $D$ be a divisor with $\deg_k(D)>2g-2$. Then
$$l(D)=\deg_k(D)+1-g,$$
that is, $D$ is nonspecial in the sense of [[def-nonspecial-divisor]], and
$h^1(C,\mathcal O_C(D))=0$.

## Facts & Assumptions

**Given:** A field $k$; a smooth proper geometrically integral curve $C$ over $k$ of genus $g$; a divisor $D$ on $C$ with $\deg_k(D)>2g-2$.

[F1] For an invertible $\mathcal O_C$-module $L$ with $\deg(L)>2g-2$ one has
$H^1(C,L)=0$ and $h^0(C,L)=\deg(L)+1-g$.
([[cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two]])

[F2] For a divisor $D$ one has
$l(D)=\dim_kL(D)=\dim_kH^0(C,\mathcal O_C(D))=h^0(D)$, the space $L(D)$
consisting of the rational functions whose divisor plus $D$ is effective, and
$i(D)=h^1(C,\mathcal O_C(D))=\dim_kH^1(C,\mathcal O_C(D))$.
([[def-little-l-divisor]], [[def-riemann-roch-space-of-divisor]],
[[def-index-speciality-divisor]])

[F3] A divisor $D$ is nonspecial when $i(D)=0$, that is when
$H^1(C,\mathcal O_C(D))=0$; by Riemann-Roch as $l$ minus $i$ this holds
exactly when $l(D)=\deg_k(D)+1-g$.
([[def-nonspecial-divisor]], [[thm-riemann-roch-as-l-minus-index]])

[F4] Full Riemann-Roch: for every divisor $D$ one has
$l(D)-l(K_C-D)=\deg_k(D)+1-g$, equivalently
$h^0(C,\mathcal O_C(D))-h^1(C,\mathcal O_C(D))=\deg_k(D)+1-g$.
([[thm-full-riemann-roch-divisor]],
[[thm-riemann-roch-as-l-minus-index]])

[F5] Divisor degree is $\deg_k(D)=\sum_x n_x[\kappa(x):k]$ and is additive ([[def-degree-divisor-proper-curve]]). Every invertible sheaf is $\mathcal O_C(E)$ with $E$ unique modulo principal divisors ([[thm-cartier-weil-divisors-curves-agree]]). Principal divisors have degree zero ([[thm-principal-divisor-degree-zero-proper-curve]]), so defining $\deg(\mathcal O_C(E)):=\deg_k(E)$ is independent of the representative. In particular $\deg(\mathcal O_C(D))=\deg_k(D)$.

[F6] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; apply the high-degree vanishing corollary to
$\mathcal O_C(D)$ and translate its output into the divisor language.

1.1 (Set-up.) The invertible sheaf $L=\mathcal O_C(D)$ has degree $\deg(L)=\deg_k(D)$ by [F5], so the hypothesis gives $\deg(L)>2g-2$, and [F1] applies to $L$. [F1, F5, given]

2.1 By [F1] one has $H^1(C,L)=0$ and $h^0(C,L)=\deg(L)+1-g=\deg_k(D)+1-g$. [F1, step 1.1]

3.1 By [F2] the vanishing of step 2.1 reads $i(D)=h^1(C,\mathcal O_C(D))=0$, so $D$ is nonspecial in the sense of [F3]; and $l(D)=h^0(C,\mathcal O_C(D))=h^0(C,L)=\deg_k(D)+1-g$, using step 2.1. [F2, F3, step 2.1]

4.1 (Consistency with full Riemann-Roch.) Substituting $l(D)=\deg_k(D)+1-g$ from step 3.1 into the full Riemann-Roch identity of [F4] gives $l(K_C-D)=0$, equivalently $h^0(C,\mathcal O_C(K_C-D))=0$; the equality $l(D)=\deg_k(D)+1-g$ is exactly the characterization of nonspeciality recorded in [F3], so the two formulations agree. [F4, step 3.1]

5.1 Steps 2.1, 3.1 and 4.1 establish $l(D)=\deg_k(D)+1-g$, the vanishing $H^1(C,\mathcal O_C(D))=0$, and the nonspeciality of $D$; the Axiom of Choice [F6] is used exactly through the duality suppliers cited above. [F6, step 2.1, step 3.1, step 4.1] ∎
