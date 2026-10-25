---
id: cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two
kind: corollary
title: "H^1 of a line bundle vanishes above degree 2g - 2"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-canonical-degree-two-g-minus-two
  - cor-h1-line-bundle-dual-sections
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-invertible-sheaf-of-cartier-divisor
  - def-index-speciality-divisor
  - thm-cartier-weil-divisors-curves-agree
  - thm-degree-positive-line-bundle-sections-zero-bound
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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the duality suppliers. Let $C$ be
a smooth proper geometrically integral curve over a field $k$ of genus $g$ and
let $L$ be an invertible $\mathcal O_C$-module with $\deg(L)>2g-2$. Then
$$H^1(C,L)=0\qquad\text{and}\qquad h^0(C,L)=\deg(L)+1-g.$$

## Facts & Assumptions

**Given:** A field $k$; a smooth proper geometrically integral curve $C$ over $k$ of genus $g$; an invertible $\mathcal O_C$-module $L$ with $\deg(L)>2g-2$; a canonical divisor $K_C$.

[F1] For a smooth proper geometrically integral curve of genus $g$ the
canonical divisor has degree $2g-2$. ([[cor-canonical-degree-two-g-minus-two]])

[F2] Duality identifies the index of speciality with the dual sections:
$h^1(C,\mathcal O_C(D))=l(K_C-D)$ for every divisor $D$.
([[cor-h1-line-bundle-dual-sections]])

[F3] Let $\mathcal L$ be an invertible sheaf on $C$ whose degree
$\deg(\mathcal L)$ is represented by $\deg_k(D)$ for any divisor $D$ with
$\mathcal L\cong\mathcal O_C(D)$. If $\deg(\mathcal L)<0$ then
$H^0(C,\mathcal L)=0$. ([[thm-degree-positive-line-bundle-sections-zero-bound]])

[F4] Riemann-Roch as $l$ minus $i$: for every divisor $D$ one has
$l(D)-i(D)=h^0(C,\mathcal O_C(D))-h^1(C,\mathcal O_C(D))=\deg_k(D)+1-g$, and
$i(D)=h^1(C,\mathcal O_C(D))\ge0$.
([[thm-riemann-roch-as-l-minus-index]], [[def-index-speciality-divisor]])

[F5] On a smooth proper geometrically integral curve the Cartier-to-Weil cycle
map is an isomorphism and every invertible sheaf is isomorphic to
$\mathcal O_C(D)$ for a divisor $D$ well defined modulo linear equivalence, so
$\deg(L)=\deg_k(D)$ for such a divisor; the degree is additive in divisors.
([[thm-cartier-weil-divisors-curves-agree]],
[[def-degree-divisor-proper-curve]],
[[def-invertible-sheaf-of-cartier-divisor]])

[F6] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; move to the dual twist, where the hypothesis forces
negative degree and hence vanishing of sections, then apply Riemann-Roch.

1.1 (Set-up.) By [F5] there is a divisor $D$ on $C$ with $L\cong\mathcal O_C(D)$ and $\deg(L)=\deg_k(D)$, and $\deg_k$ is additive in divisors; by the hypothesis $\deg_k(D)=\deg(L)>2g-2=\deg_k(K_C)$, where the last equality is [F1]. [F1, F5, given]

2.1 The dual twist has negative degree: $\deg_k(K_C-D)=\deg_k(K_C)-\deg_k(D)<2g-2-(2g-2)=0$, using additivity of $\deg_k$ from [F5] and step 1.1. [F5, step 1.1]

3.1 By [F3] applied to the invertible sheaf $\mathcal O_C(K_C-D)$ of negative degree one has $H^0(C,\mathcal O_C(K_C-D))=0$, that is $l(K_C-D)=0$. [F3, step 2.1]

4.1 (Vanishing of $H^1$.) By [F2] applied to the divisor $D$ one has $h^1(C,L)=h^1(C,\mathcal O_C(D))=l(K_C-D)$, which is zero by step 3.1; this is the first assertion. [F2, step 1.1, step 3.1]

5.1 (Exact section count.) By [F4] applied to $D$ and step 4.1, $l(D)=\deg_k(D)+1-g+i(D)=\deg(L)+1-g+0$, that is $h^0(C,L)=\deg(L)+1-g$, the second assertion. [F4, step 4.1]

6.1 Steps 4.1 and 5.1 prove both displayed statements; the Axiom of Choice [F6] is used exactly through the duality suppliers cited above, each of which assumes it. [F6, step 4.1, step 5.1] ∎
