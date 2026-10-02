---
id: thm-euler-characteristic-degree-shift-curve
kind: theorem
title: "Riemann-Roch in Euler-characteristic form: the degree shift"
status: draft
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
  - def-little-l-divisor
  - def-sheaf-cohomology-derived-global-sections
  - lem-divisor-decomposition-positive-negative-points
  - lem-riemann-roch-space-finite-dimensional
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
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice, inherited from the Euler-characteristic and
finiteness suppliers below. Let $k$ be a field, let $C$ be a smooth proper
geometrically integral curve over $k$ ([[def-algebraic-curve-over-field]]) and
let $D$ be a divisor on $C$ ([[def-divisor-smooth-proper-curve]]). Then
$$\chi\bigl(C,\mathcal O_C(D)\bigr)-\chi\bigl(C,\mathcal O_C\bigr)=\deg_k(D),$$
an identity in $\mathbb Z$, and equivalently
$$h^0(D)-h^1(D)=\deg_k(D)+h^0(0)-h^1(0),$$
where $h^i(D)=\dim_kH^i(C,\mathcal O_C(D))\ge0$ is the notation of
[[def-little-l-divisor]] and $\chi$ is the Euler characteristic of coherent
sheaves on the proper $k$-scheme $C$
([[def-euler-characteristic-coherent-sheaf]]), a finite alternating sum of
finite dimensions. No Serre duality is used: both forms leave the index of
speciality $h^1(D)$ as an unknown nonnegative integer.

The attachment of $\mathcal O_C(D)$, the identity
$\mathcal O_C(0)\cong\mathcal O_C$, and the global-section identification use
the current Cartier-divisor interfaces
[[def-invertible-sheaf-of-cartier-divisor]],
[[thm-line-bundle-rational-section-cartier-divisor]] and
[[thm-cartier-weil-divisors-curves-agree]], inherited through
[[lem-divisor-decomposition-positive-negative-points]].

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$, and a divisor $D$ on $C$.

[F1] The curve $C$ is proper, separated and of finite type over the field $k$, geometrically integral and of chain dimension one; a divisor on $C$ is a finite formal integral combination of closed points, $D=\sum_xn_x[x]$, and the $k$-degree is $\deg_k(D)=\sum_xn_x[\kappa(x):k]$, a group homomorphism $\operatorname{Div}(C)\to\mathbb Z$ ([[def-algebraic-curve-over-field]], [[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]]).

[F2] The decomposition lemma: $D=D^{+}-D^{-}$ with $D^{+},D^{-}$ effective of disjoint support and $\deg_k(D)=\deg_k(D^{+})-\deg_k(D^{-})$; for every listing of the points of $\operatorname{Supp}(D^{+})$ repeated with their coefficients, followed by the points of $\operatorname{Supp}(D^{-})$ repeated with the coefficients of $D^{-}$, and for every ordering of the resulting signed symbols, the chain $M_0=0$, $M_k=M_{k-1}\pm[r_k]$ ends at $D$, and telescoping the one-point shift gives $\chi(C,\mathcal O_C(D))=\chi(C,\mathcal O_C(0))+\deg_k(D)$, a value independent of the ordering; identifying $\mathcal O_C(0)\cong\mathcal O_C$ with the structure sheaf this reads $\chi(C,\mathcal O_C(D))=\chi(C,\mathcal O_C)+\deg_k(D)$ ([[lem-divisor-decomposition-positive-negative-points]]).

[F3] Coherence, finiteness and the dimension form of $\chi$: for every divisor $D'$ on $C$ the invertible sheaf $\mathcal O_C(D')$ is a coherent $\mathcal O_C$-module, $H^q(C,\mathcal O_C(D'))$ is a finite-dimensional $k$-vector space for every $q\ge0$ and vanishes for every $q\ge2$, and the Euler characteristic satisfies $\chi(C,\mathcal O_C(D'))=h^0(D')-h^1(D')$ ([[lem-riemann-roch-space-finite-dimensional]], [[def-euler-characteristic-coherent-sheaf]], [[def-sheaf-cohomology-derived-global-sections]], [[def-dimension]]).

[F4] Notation: $h^i(D')=\dim_kH^i(C,\mathcal O_C(D'))$ for every $i\ge0$ and divisor $D'$, so in particular $h^0(D')$ and $h^1(D')$ are the dimensions appearing in [F3], and $l(D')=h^0(D')$ ([[def-little-l-divisor]]).

[F5] The current Cartier-divisor interfaces [[def-invertible-sheaf-of-cartier-divisor]], [[thm-line-bundle-rational-section-cartier-divisor]] and [[thm-cartier-weil-divisors-curves-agree]] attach $\mathcal O_C(D)$ to $D$, identify $L(D)$ with $H^0(C,\mathcal O_C(D))$, and give $\mathcal O_C(0)\cong\mathcal O_C$. The proof uses the last identification for its base term.

[F6] The Axiom of Choice is used exactly through the decomposition lemma [F2], the finiteness and coherence supplier [F3] and the flagged dictionary [F5]; no further selection is made below ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; read the degree shift off the point-by-point decomposition of the divisor, convert both Euler characteristics into their $h^0-h^1$ forms, and compare the resulting identities to obtain the two displayed forms and their equivalence.

1.1 Set-up. By [F1] the curve $C$ is proper over $k$, so the Euler characteristic of [F3] is defined for coherent sheaves on $C$. By [F3] the sheaves $\mathcal O_C(D)$ and $\mathcal O_C(0)$ are coherent $\mathcal O_C$-modules, so $\chi(C,\mathcal O_C(D))$, $\chi(C,\mathcal O_C(0))$ and, through the flagged dictionary [F5], $\chi(C,\mathcal O_C)=\chi(C,\mathcal O_C(0))$ are all integers; by [F4] the symbols $h^i(D)$ are the dimensions of [F3]. [F1, F3, F4, F5]

1.2 The degree shift. By part 3 of the decomposition lemma [F2], applied to the divisor $D$, the telescoping of the one-point shifts along any ordering of the listed signed points gives $\chi(C,\mathcal O_C(D))=\chi(C,\mathcal O_C(0))+\deg_k(D)$; by the flagged identification $\mathcal O_C(0)\cong\mathcal O_C$ of [F5] this reads $\chi(C,\mathcal O_C(D))=\chi(C,\mathcal O_C)+\deg_k(D)$. Rearranging in $\mathbb Z$ gives the first displayed identity $\chi(C,\mathcal O_C(D))-\chi(C,\mathcal O_C)=\deg_k(D)$; the ordering-independence asserted in [F2] shows that the value does not depend on how the listing is traversed. [F2, F5]

2.1 The dimension forms of the two Euler characteristics. By [F3] applied to the divisor $D$, $\chi(C,\mathcal O_C(D))=h^0(D)-h^1(D)$; by [F3] applied to the zero divisor, $\chi(C,\mathcal O_C(0))=h^0(0)-h^1(0)$. Substituting the second identity into the un-flagged form of step 1.2 gives $h^0(D)-h^1(D)=\deg_k(D)+h^0(0)-h^1(0)$, the second displayed identity; no Serre duality is involved, the terms $h^1(D)$ and $h^1(0)$ being the nonnegative dimensions of [F3] and [F4]. [F3, F4, step 1.2]

3.1 Equivalence of the two forms. Assume first the first displayed identity. By step 2.1, $h^0(D)-h^1(D)=\chi(C,\mathcal O_C(D))$ and $h^0(0)-h^1(0)=\chi(C,\mathcal O_C(0))$; by the flagged dictionary [F5], $\chi(C,\mathcal O_C(0))=\chi(C,\mathcal O_C)$, so the first identity rearranges to the second. Conversely, assume the second displayed identity; then by step 2.1, $\chi(C,\mathcal O_C(D))-\chi(C,\mathcal O_C(0))=\deg_k(D)$, and by the flagged dictionary [F5] the second term is $\chi(C,\mathcal O_C)$, giving the first identity. Thus the two displayed forms are equivalent under the flagged identification, and each of them is proved: the first in step 1.2 with the flag, the second in step 2.1 without it. [F3, F5, step 1.2, step 2.1]

4.1 Conclusion and choice accounting. Step 1.2 gives the degree-shift identity and step 2.1 the equivalent $h^0-h^1$ identity, both in $\mathbb Z$ because they are rearrangements of identities between finite alternating sums of finite dimensions and the integer $\deg_k(D)$; step 3.1 records the equivalence. The Axiom of Choice is used only through the suppliers recorded in [F6], namely the decomposition lemma [F2], the finiteness and coherence supplier [F3] and the flagged dictionary [F5]; in particular no ordering of the divisor support is chosen in a way that needs any choice principle, the listings being finite and fixed by the divisor, and the ordering-independence clause of [F2] holds for every ordering. [F2, F3, F5, F6, step 1.2, step 2.1, step 3.1] ∎
