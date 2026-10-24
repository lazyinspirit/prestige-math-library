---
id: cor-riemann-inequality-divisor-sections
kind: corollary
title: "The Riemann inequality"
status: published
origin: pipeline
deps:
  - def-invertible-sheaf-of-cartier-divisor
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-cartier-weil-divisors-curves-agree
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-dimension
  - def-divisor-smooth-proper-curve
  - def-genus-euler-characteristic-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - thm-riemann-roch-euler-characteristic-curve
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice, inherited from the Riemann-Roch and finiteness
suppliers below. Let $k$ be a field, let $C$ be a smooth proper geometrically
integral curve over $k$ ([[def-algebraic-curve-over-field]]) with genus
$g=h^1(C,\mathcal O_C)=1-\chi(C,\mathcal O_C)$
([[def-genus-euler-characteristic-curve]]), and let $D$ be a divisor on $C$
([[def-divisor-smooth-proper-curve]]). Then
$$l(D)=h^0(D)\ge\deg_k(D)+1-g,$$
where $l(D)=\dim_kL(D)=h^0(D)$ and $h^i(D)=\dim_kH^i(C,\mathcal O_C(D))$ are
the integers of [[def-little-l-divisor]]. The inequality is the Riemann
inequality; it is generally strict, the excess being the index of speciality,
and it is not used here to produce sections.

The attachment of $\mathcal O_C(D)$ and the identification of $L(D)$ with
$H^0(C,\mathcal O_C(D))$ use the current interfaces
[[def-invertible-sheaf-of-cartier-divisor]],
[[thm-line-bundle-rational-section-cartier-divisor]] and
[[thm-cartier-weil-divisors-curves-agree]], inherited through
[[thm-riemann-roch-euler-characteristic-curve]].

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$ with genus $g=h^1(C,\mathcal O_C)$, and a divisor $D$ on $C$.

[F1] The curve $C$ is proper, of finite type and of chain dimension one over the field $k$; a divisor on $C$ is a finite formal integral combination of closed points and $\deg_k:\operatorname{Div}(C)\to\mathbb Z$ is the $k$-degree homomorphism ([[def-algebraic-curve-over-field]], [[def-divisor-smooth-proper-curve]]).

[F2] The integers $l(D)$ and $h^i(D)$: $l(D)=\dim_kL(D)=\dim_kH^0(C,\mathcal O_C(D))=h^0(D)$ is a nonnegative integer, and $h^i(D)=\dim_kH^i(C,\mathcal O_C(D))$ for every $i\ge0$; in particular $h^1(D)$ is the dimension of a $k$-vector space ([[def-little-l-divisor]], [[def-dimension]]).

[F3] Riemann-Roch in Euler-characteristic form: for the genus $g=g(C)=h^1(C,\mathcal O_C)$ and every divisor $D$ on $C$, $h^0(D)-h^1(D)=\chi(C,\mathcal O_C(D))=\deg_k(D)+1-g$; no Serre duality is used ([[thm-riemann-roch-euler-characteristic-curve]]).

[F4] The current interfaces [[def-invertible-sheaf-of-cartier-divisor]], [[thm-line-bundle-rational-section-cartier-divisor]] and [[thm-cartier-weil-divisors-curves-agree]] attach $\mathcal O_C(D)$ and identify $L(D)$ with its global sections; this use is inherited from [F3].

[F5] The Axiom of Choice is used exactly through the Riemann-Roch supplier [F3] and the finiteness supplier [F2], which inherit it from the proper-cohomology suppliers; no further selection is made below ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; rearrange the Riemann-Roch identity into $h^0(D)=$ right-hand side $+$ $h^1(D)$ and use that a dimension is nonnegative.

1.1 Set-up. By [F1] the curve $C$ is proper over $k$ and $D$ is a divisor on $C$ with $k$-degree $\deg_k(D)$. By [F2] the integer $l(D)$ equals $h^0(D)=\dim_kH^0(C,\mathcal O_C(D))$, and $h^1(D)=\dim_kH^1(C,\mathcal O_C(D))$ is the dimension of a $k$-vector space, hence nonnegative by [F2]. By [F3] the identity $h^0(D)-h^1(D)=\deg_k(D)+1-g$ holds for the divisor $D$ and the genus $g=h^1(C,\mathcal O_C)$ of the curve. [F1, F2, F3]

2.1 The inequality. Adding $h^1(D)$ to both sides of the identity of step 1.1 gives $h^0(D)=\deg_k(D)+1-g+h^1(D)$; since $h^1(D)\ge0$, the right-hand side is at least $\deg_k(D)+1-g$, so $h^0(D)\ge\deg_k(D)+1-g$. As $l(D)=h^0(D)$ by [F2], this is exactly the asserted inequality $l(D)\ge\deg_k(D)+1-g$. [F2, step 1.1]

3.1 Conclusion and choice accounting. Step 2.1 proves $l(D)=h^0(D)\ge\deg_k(D)+1-g$ for every divisor $D$ on $C$, the identity $l(D)=h^0(D)$ being the definitional identification of [F2]. The Axiom of Choice is used only through the suppliers recorded in [F5], namely the Riemann-Roch theorem [F3] and the finiteness supplier [F2]; the deduction itself makes no selection, and the flagged dictionary [F4] records the inherited obligation on $\mathcal O_C(D)$. [F2, F3, F4, F5, step 2.1] ∎
