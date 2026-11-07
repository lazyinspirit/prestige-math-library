---
id: def-local-hilbert-symbol-over-field-containing-roots-of-unity
kind: definition
title: "Local Hilbert norm-residue symbol when the field contains the roots of unity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
proof_strategy: direct
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-local-artin-reciprocity-map
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IV §5.1"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "The definition and Proposition (5.1), printed pp.143–144."
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter III §4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "The Kummer cup product and Hilbert symbol, Theorem 4.4 and Remark 4.5, printed pp.112–114."
verification:
  precheck: n/a
---

## Definition

Let $K$ be a complete discretely valued field with finite residue field, fix
a separable closure $K_s$, and let $K^{\mathrm{ab}}$ be the maximal
abelian extension in $K_s$. Let $n\ge1$; if
$\operatorname{char}K=p>0$, assume $p\nmid n$. Let $\mu_n$ be the group of
$n$-th roots of unity in $K_s$ and suppose $\mu_n\subseteq K$. Write
$\widehat{K^\times}$ for the profinite completion of $K^\times$ and use the
local Artin map
$$
\operatorname{rec}_K:\widehat{K^\times}\longrightarrow
\operatorname{Gal}(K^{\mathrm{ab}}/K),
$$
normalized so a uniformizer maps to arithmetic Frobenius on every finite
unramified extension. For $a\in K^\times$, let $\bar a$ be its image in
$\widehat{K^\times}$. For $b\in K^\times$, choose $\beta\in K_s$ with
$\beta^n=b$, and define the local Hilbert norm-residue symbol
$$
(a,b)_{K,n}:=\frac{\operatorname{rec}_K(\bar a)(\beta)}{\beta}\in\mu_n.
$$
Since $\mu_n\subseteq K$, the extension $K(\beta)/K$ is cyclic, hence
abelian, so $\beta\in K^{\mathrm{ab}}$ and the displayed action is defined.

## Definition references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-local-artin-reciprocity-map]]

## Facts & Assumptions

**Given:** A nonarchimedean local field $K$, an integer $n$ satisfying the
stated characteristic condition, $\mu_n\subseteq K$, a supplied arithmetic
local Artin map, and $a,b\in K^\times$.

[F1] A nonarchimedean local field is complete for a surjective discrete
valuation, has finite residue field, and has a valuation ring, maximal ideal,
and uniformizer. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F2] The local Artin map is a continuous homomorphism from
$\widehat{K^\times}$ to $\operatorname{Gal}(K^{\mathrm{ab}}/K)$ with arithmetic
Frobenius normalization. [[def-local-artin-reciprocity-map]]

## Proof

**Given:** The data above.

1.1 Since all roots of $X^n-b$ are $\zeta\beta$ with $\zeta\in\mu_n\subseteq K$
and the polynomial is separable, $K(\beta)/K$ is a finite Galois extension.
For $\sigma\in\operatorname{Gal}(K(\beta)/K)$, the ratio
$\sigma(\beta)/\beta$ lies in $\mu_n$. Thus the formula has the asserted
codomain and is defined from the supplied map. [F1, F2, given, algebra]

1.2 Every choice of an $n$-th root of $b$ differs from $\beta$ by an element
of $\mu_n$, which the Galois action fixes; therefore the displayed value is
independent of that root. [F1, F2, given, algebra] ∎
