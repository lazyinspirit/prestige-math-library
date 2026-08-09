---
id: ex-cauchy-complete-not-complete-field
kind: example
title: "$\\mathbb{R}((t^{-1}))$, the formal Laurent series field, is Cauchy complete, non-Archimedean, and lacks the least-upper-bound property"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [fs-cauchy-complete-implies-lub, def-sequences-in-an-ordered-field, def-completeness-properties, def-archimedean-field, def-formal-laurent-series, lem-laurent-series-ring, thm-laurent-ordered-field, thm-laurent-cauchy-complete, lem-laurent-non-archimedean, cor-laurent-not-lub-complete, cor-laurent-nested-intervals, lem-bw-implies-archimedean, lem-mct-implies-archimedean, thm-completeness-equivalences]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Example

Let $K = \mathbb{R}((t^{-1}))$ be the field of formal Laurent series in
$t^{-1}$ over $\mathbb{R}$ ([[def-formal-laurent-series]]), ordered by the sign
of the leading coefficient ([[thm-laurent-ordered-field]]). This example
assembles, in one place and against the five properties of
[[def-completeness-properties]], what the field does and does not satisfy:

| property | holds in $K$ | reference |
|---|---|---|
| ordered field | yes | [[thm-laurent-ordered-field]] |
| Archimedean | **no** | [[lem-laurent-non-archimedean]] |
| (CC) Cauchy completeness | yes | [[thm-laurent-cauchy-complete]] |
| (NIP) nested intervals, shrinking | yes | [[cor-laurent-nested-intervals]] |
| (LUB) least upper bound | **no** | [[cor-laurent-not-lub-complete]] |
| (BW) Bolzano-Weierstrass | **no** | below |
| (MCT) monotone convergence | **no** | below |

$K$ is therefore the witness for [[fs-cauchy-complete-implies-lub]], and a
worked illustration of how far apart the two things called "completeness" can
be. A concrete convergent Cauchy sequence is exhibited at the end.

## Facts & Assumptions

**Given:** $K = \mathbb{R}((t^{-1}))$, whose elements are the functions $\mathbb{Z} \to \mathbb{R}$ with support bounded below, with $t^{-a}$ the function taking the value $1$ at $a$ and $0$ elsewhere.

[L1] $K$ is an ordered field, in which $f > 0$ exactly when $f \ne 0$ and its lowest-index nonzero coefficient is a positive real ([[thm-laurent-ordered-field]], [[def-formal-laurent-series]]); and $(g-h)(j) = g(j) - h(j)$ ([[lem-laurent-series-ring]]).

[L2] $n \cdot 1_K < t$ for every natural $n$, so $K$ is not Archimedean; $0_K < t^{-(k+1)} < t^{-k}$; for every $\varepsilon > 0$ in $K$ there is $k \in \mathbb{N}$ with $t^{-k} < \varepsilon$; and if $h(j) = 0$ for every $j \le k$ then $|h| < t^{-k}$ ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L3] Every Cauchy sequence in $K$ converges in $K$ ([[thm-laurent-cauchy-complete]]), which is (CC) ([[def-completeness-properties]], [[def-sequences-in-an-ordered-field]]).

[L4] The set $A = \{\, n \cdot 1_K : n \in \mathbb{N}\,\}$ is nonempty, bounded above by $t$, and has no least upper bound in $K$, so (LUB) fails ([[cor-laurent-not-lub-complete]]).

[L5] Every nested sequence of closed intervals of $K$ whose lengths tend to $0$ in $K$ has exactly one common point, so (NIP) holds ([[cor-laurent-nested-intervals]]).

[L6] (BW) implies the Archimedean property ([[lem-bw-implies-archimedean]]) and so does (MCT) ([[lem-mct-implies-archimedean]]); and the five properties are equivalent once the Archimedean property is supplied where needed ([[thm-completeness-equivalences]]).

## Verification

**Proof technique:** direct.

1.1 $K$ is an ordered field. [L1]

1.2 $K$ is not Archimedean: $t$ exceeds every canonical natural. [L2]

1.3 $K$ has (CC). [L3]

1.4 $K$ does not have (LUB): the canonical naturals are nonempty and bounded above and have no supremum in $K$. [L4]

1.5 $K$ has (NIP) in the shrinking form of [[def-completeness-properties]]. [L5]

2.1 So $K$ is a Cauchy complete, non-Archimedean ordered field without the least-upper-bound property, which is what this example asserts, and it is the witness used in [[fs-cauchy-complete-implies-lub]] and in [[fs-nested-intervals-implies-lub]]. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5]

2.2 $K$ has neither (BW) nor (MCT), since either would force $K$ to be Archimedean, which step 1.2 denies. [step 1.2, L6]

2.3 A concrete convergent Cauchy sequence: let $f^{(n)} := \sum_{k=0}^{n} t^{-k}$, the function taking the value $1$ at each index $0 \le j \le n$ and $0$ elsewhere. For $n > m$ the difference $f^{(n)} - f^{(m)}$ vanishes at every index $j \le m$, so $|f^{(n)} - f^{(m)}| < t^{-m}$; since the monomials $t^{-m}$ get below every positive element of $K$, the sequence is Cauchy in $K$. Its limit is the element $L$ with $L(j) = 1$ for $j \ge 0$ and $L(j) = 0$ for $j < 0$, which lies in $K$ because its support is bounded below, and $f^{(n)} - L$ vanishes at every index $j \le n$, so $|f^{(n)} - L| < t^{-n}$ and $f^{(n)} \to L$ in $K$. [step 1.1, step 1.3, L1, L2]

3.1 The table of the Example is therefore established in every row, and $K$ separates Cauchy completeness from the least-upper-bound property. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **The one-line reason.** Comparison in $K$ looks only at the first coefficient at which two elements differ, so $t$ is bigger than every real constant and $t^{-1}$ is smaller than every positive real constant. The naturals are therefore bounded, which kills (LUB), (BW) and (MCT) at a stroke. Meanwhile a Cauchy sequence in $K$ must have each of its coefficients eventually constant, and reading off those eventual values builds the limit; nothing about the naturals being cofinal is needed for that.

- **Why the limit above is not a sum.** The notation $\sum_{k \ge 0} t^{-k}$ for $L$ is a name for a function, not an infinite sum ([[def-formal-laurent-series]]). What step 2.3 proves is a genuine limit in the order of $K$, and it happens to agree with that notation; no notion of convergence is presupposed by the notation itself.

- **What this example does not give.** It says nothing about $\mathbb{R}(t)$, the other non-Archimedean field in this library ([[ex-rational-function-field-order]]), which is neither Cauchy complete nor nested-interval complete and cannot replace $K$ in any of these roles.

- **Uniqueness of the complete ordered field is untouched.** $K$ is not a complete ordered field, so it is no counterexample to that uniqueness; it is a counterexample only to the habit of calling (CC) completeness.
