---
id: thm-riemann-roch-euler-characteristic-curve
kind: theorem
title: "Riemann-Roch for curves: the Euler-characteristic form"
status: published
origin: pipeline
deps:
  - def-invertible-sheaf-of-cartier-divisor
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-cartier-weil-divisors-curves-agree
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-dimension
  - def-divisor-smooth-proper-curve
  - def-euler-characteristic-coherent-sheaf
  - def-genus-euler-characteristic-curve
  - def-little-l-divisor
  - def-sheaf-cohomology-derived-global-sections
  - lem-riemann-roch-space-finite-dimensional
  - thm-euler-characteristic-degree-shift-curve
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

Assume the Axiom of Choice, inherited from the Euler-characteristic, genus and
finiteness suppliers below. Let $k$ be a field, let $C$ be a smooth proper
geometrically integral curve over $k$ ([[def-algebraic-curve-over-field]]) with
genus $g=g(C)=h^1(C,\mathcal O_C)=1-\chi(C,\mathcal O_C)$
([[def-genus-euler-characteristic-curve]]), and let $D$ be a divisor on $C$
([[def-divisor-smooth-proper-curve]]). Then
$$h^0(D)-h^1(D)=\chi\bigl(C,\mathcal O_C(D)\bigr)=\deg_k(D)+1-g,$$
where $h^i(D)=\dim_kH^i(C,\mathcal O_C(D))$ and $\chi$ is the Euler
characteristic of coherent sheaves on the proper $k$-scheme $C$
([[def-little-l-divisor]], [[def-euler-characteristic-coherent-sheaf]]). No
Serre duality is used: the index of speciality $h^1(D)$ is left as an unknown
nonnegative integer, and the theorem is a statement about the Euler
characteristic and the $k$-degree alone.

The attachment of $\mathcal O_C(D)$ and the identity
$\mathcal O_C(0)\cong\mathcal O_C$ use the current Cartier-divisor interfaces
[[def-invertible-sheaf-of-cartier-divisor]],
[[thm-line-bundle-rational-section-cartier-divisor]] and
[[thm-cartier-weil-divisors-curves-agree]], inherited through
[[thm-euler-characteristic-degree-shift-curve]] and
[[lem-riemann-roch-space-finite-dimensional]].

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$ with genus $g=g(C)$, and a divisor $D$ on $C$.

[F1] The curve $C$ is proper, separated and of finite type over the field $k$, geometrically integral and of chain dimension one, so the Euler characteristic of coherent sheaves on $C$ is defined; a divisor on $C$ is a finite formal integral combination of closed points and $\deg_k:\operatorname{Div}(C)\to\mathbb Z$ is a group homomorphism ([[def-algebraic-curve-over-field]], [[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]], [[def-euler-characteristic-coherent-sheaf]]).

[F2] The genus: $g=g(C)=h^1(C,\mathcal O_C)=\dim_kH^1(C,\mathcal O_C)$ and, since $H^0(C,\mathcal O_C)$ is canonically $k$ with Euler characteristic $\chi(C,\mathcal O_C)=h^0(C,\mathcal O_C)-h^1(C,\mathcal O_C)$, one has $\chi(C,\mathcal O_C)=1-g$, equivalently $g=1-\chi(C,\mathcal O_C)$ ([[def-genus-euler-characteristic-curve]], [[def-sheaf-cohomology-derived-global-sections]], [[def-dimension]]).

[F3] The degree shift: for every divisor $D'$ on $C$, $\chi(C,\mathcal O_C(D'))-\chi(C,\mathcal O_C)=\deg_k(D')$, and equivalently $h^0(D')-h^1(D')=\deg_k(D')+h^0(0)-h^1(0)$; no Serre duality is used ([[thm-euler-characteristic-degree-shift-curve]]).

[F4] Finiteness and the dimension form: for every divisor $D'$ the sheaf $\mathcal O_C(D')$ is coherent, $H^q(C,\mathcal O_C(D'))$ is finite-dimensional over $k$ for every $q\ge0$ and vanishes for $q\ge2$, and $\chi(C,\mathcal O_C(D'))=h^0(D')-h^1(D')$ ([[lem-riemann-roch-space-finite-dimensional]], [[def-little-l-divisor]]).

[F5] The current Cartier-divisor interfaces [[def-invertible-sheaf-of-cartier-divisor]], [[thm-line-bundle-rational-section-cartier-divisor]] and [[thm-cartier-weil-divisors-curves-agree]] supply the attachment of $\mathcal O_C(D)$, the global-section identification, and $\mathcal O_C(0)\cong\mathcal O_C$ used in [F3].

[F6] The Axiom of Choice is used exactly through the degree shift [F3], the genus definition [F2] and the finiteness supplier [F4], which inherit it from the proper-cohomology suppliers; no further selection is made below ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; substitute the identity $\chi(C,\mathcal O_C)=1-g$ of the genus definition into the degree shift and read off the two equalities.

1.1 Set-up. By [F1] the curve $C$ is proper over $k$, so the Euler characteristics of [F3] and [F4] are defined. By [F2] the genus satisfies $\chi(C,\mathcal O_C)=1-g$; by [F4] the sheaf $\mathcal O_C(D)$ is coherent and $\chi(C,\mathcal O_C(D))=h^0(D)-h^1(D)$, the dimensions being finite and the higher cohomology vanishing. [F1, F2, F4]

1.2 The degree shift. By [F3], applied to the divisor $D$, $\chi(C,\mathcal O_C(D))-\chi(C,\mathcal O_C)=\deg_k(D)$. Substituting $\chi(C,\mathcal O_C)=1-g$ from [F2] gives $\chi(C,\mathcal O_C(D))=\deg_k(D)+1-g$, the second asserted equality. [F2, F3]

2.1 The dimension form. By [F4] the Euler characteristic of $\mathcal O_C(D)$ is $h^0(D)-h^1(D)$, so combining with step 1.2 gives $h^0(D)-h^1(D)=\chi(C,\mathcal O_C(D))=\deg_k(D)+1-g$, which is the full displayed chain of the Statement; the index of speciality $h^1(D)$ is a nonnegative integer by [F4] and is not identified with any other expression, so no Serre duality is used. [F4, step 1.2]

3.1 Conclusion and choice accounting. Steps 1.2 and 2.1 give both asserted equalities for every divisor $D$ on $C$, with $g=g(C)$ as in [F2]. The Axiom of Choice is used only through the suppliers recorded in [F6], namely the degree shift [F3], the genus definition [F2] and the finiteness supplier [F4]; the flagged dictionary [F5] is the inherited obligation on the sheaf $\mathcal O_C(D)$, and no further selection is made above. [F2, F3, F4, F5, F6, step 1.2, step 2.1] ∎
