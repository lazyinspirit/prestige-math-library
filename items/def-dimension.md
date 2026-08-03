---
id: def-dimension
kind: definition
title: "Finite-dimensional vector space, and its dimension $\\dim_F V$; infinite-dimensional means having no finite basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-any-two-finite-bases-have-the-same-size, def-linear-basis, def-linear-independence, def-linear-combination-and-span, lem-restriction-of-scalars, def-subfield, def-vector-space, def-field, def-countable, def-equinumerous, def-injection-surjection-bijection, lem-pigeonhole, def-natural-numbers]
justified_by: []
aliases: [def-finite-dimensional, def-infinite-dimensional]
landmark: true
short: "$\\dim_F V$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 00c5f9e7b8d68228285e9a2319a6cc98f3a1d6982c44b52bdc03f0f2b9feea4d
    item_sha256: b1e7ccec53efbe1df92ba5a9cdfdce9fd51f466194a4ae3295eb879d599f7114
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Dimension (vector space) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_(vector_space)"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Interactive Linear Algebra: Dimension"
      url: "https://textbooks.math.gatech.edu/ila/dimension.html"
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

$V$ is **finite-dimensional over $F$** when it has a **finite** basis
([[def-linear-basis]], [[def-countable]]): some basis $B$ of $V$ satisfies
$B \approx n$ for some $n \in \mathbb{N}$ ([[def-equinumerous]]).

For such a $V$, the **dimension of $V$ over $F$**, written $\dim_F V$, is that
$n$:

$$\dim_F V \;:=\; \text{the unique } n \in \mathbb{N} \text{ such that } V \text{ has a basis } B \text{ with } B \approx n .$$

**This is well defined.** Existence of such an $n$ is the hypothesis, together
with the fact that a finite set is equinumerous with exactly one natural number
([[lem-pigeonhole]], claim 3). Uniqueness is
[[thm-any-two-finite-bases-have-the-same-size]]: two bases of $V$ with $n$ and
with $m$ elements force $n = m$. That theorem is therefore a **prerequisite** of
this definition, not a later justification of it, and it is listed in `deps`.

$V$ is **infinite-dimensional over $F$** when it is not finite-dimensional over
$F$, that is, when $V$ has **no** finite basis. No number is attached to such a
space here: the symbol $\dim_F V$ is defined only in the finite-dimensional case,
and the expression $\dim_F V = \infty$ is not used.

**The zero space.** $\varnothing$ is a basis of $\{0_V\}$
([[def-linear-basis]]) and $\varnothing \approx 0$, so $\{0_V\}$ is
finite-dimensional with $\dim_F \{0_V\} = 0$. Conversely a space of dimension $0$
has a basis $B \approx 0$, that is $B = \varnothing$, and then
$V = \operatorname{span}(\varnothing) = \{0_V\}$
([[def-linear-combination-and-span]]).

## Remarks

- **The subscript $F$ is not ornamental.** By [[lem-restriction-of-scalars]] the
  same set with the same addition is a vector space over any subfield
  $K \subseteq F$ ([[def-subfield]]), and for a proper subfield the two
  structures can have different bases and different dimensions. The companion
  page's basis of $\mathbb{R}$ over
  $\mathbb{Q}$ is the extreme case: $\mathbb{R}$ is a vector
  space both over itself and over the embedded copy of $\mathbb{Q}$ inside it, and
  it is infinite-dimensional over the latter. So "the dimension of $V$" is
  incomplete language in exactly the
  way that "the vector space $V$" is, and both the space and the field are part of
  the statement of every result below.

- **Infinite-dimensional is defined as a negation, deliberately.** Assigning a
  size to an infinite basis would require knowing that any two infinite bases of a
  space are equinumerous, which
  [[thm-any-two-finite-bases-have-the-same-size]] does not prove and this page
  does not claim; the standard argument for it is cardinal arithmetic, developed
  much later in the library. The companion page therefore records a proper
  subspace with an equinumerous basis rather than any statement of
  the form $\dim U = \dim V$ for infinite-dimensional spaces.

- **Dimension counts a basis, not a spanning set and not an independent set.** A
  spanning set may be larger than $\dim_F V$ and an independent set smaller;
  [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]] is what bounds
  the second by the first, and
  [[lem-basis-iff-maximal-independent-iff-minimal-spanning]] is what says a basis
  is exactly where the two meet.
