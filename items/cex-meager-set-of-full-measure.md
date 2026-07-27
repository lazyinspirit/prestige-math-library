---
id: cex-meager-set-of-full-measure
kind: counterexample
title: "$\\mathbb{R}$ is the union of a meager set and a set of measure zero, so smallness of category and smallness of measure are independent notions"
status: published
origin: session
deps: [thm-baire-category-r, def-nowhere-dense-meager, def-f-sigma-g-delta, def-measure-zero-and-content-zero, lem-countable-sets-are-null, thm-rationals-countable, lem-countable-iff-surjection-from-n, lem-q-and-irrationals-dense-r, lem-rat-embeds-dense, thm-geometric-series, def-series, def-open-and-closed-in-r, thm-open-set-algebra-r, def-interval, def-countable, def-equinumerous, def-integer-power, lem-power-laws, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-neighbourhood-r, def-limit-point-r, lem-geometric-sequence-null, def-real-limit, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Meagre set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Meagre_set"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "J. C. Oxtoby, Measure and Category, 2nd ed., Ch. 1-2 (John C. Oxtoby)"
      url: "https://en.wikipedia.org/wiki/John_C._Oxtoby"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** meagreness and measure zero are comparable notions of
smallness, so that a set small in one sense is small, or at least not
co-small, in the other.

The witness is a decomposition $\mathbb{R} = (\mathbb{R} \setminus G) \cup G$ in
which $\mathbb{R} \setminus G$ is meager ([[def-nowhere-dense-meager]]) and $G$
has measure zero ([[def-measure-zero-and-content-zero]]). So $\mathbb{R}$, which
by [[thm-baire-category-r]] is not meager, splits into two pieces each of which
is negligible, one in the sense of category and one in the sense of measure. In
particular $G$ is residual and null at the same time, and its complement is
meager and, being the complement of a null set, in no sense small in measure.

The set is
$$G := \bigcap_{n \in \mathbb{N}} U_n, \qquad U_n := \bigcup_{k \in \mathbb{N}} \big(e(k) - 2^{-k-n-2},\ e(k) + 2^{-k-n-2}\big),$$
where $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ is a bijection onto the
rationals ([[lem-rat-embeds-dense]]).

## Facts & Assumptions

**Given:** A bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ onto the rationals inside $\mathbb{R}$, the sets $U_n$ and $G$ displayed above.

[A1] The refuted claim: a meager set and a set of measure zero cannot together exhaust $\mathbb{R}$, meagreness and nullity being comparable notions of smallness.

[L1] $\mathbb{Q} \approx \mathbb{N}$ and $q \mapsto \hat q$ is injective onto $\mathbb{Q}_{\mathbb{R}}$, so a bijection $e$ exists; $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$ ([[thm-rationals-countable]], [[def-equinumerous]], [[def-countable]], [[lem-countable-iff-surjection-from-n]], [[lem-rat-embeds-dense]], [[lem-q-and-irrationals-dense-r]], [[def-limit-point-r]]).

[L2] $(c,d)$ is an open interval of length $d - c$ and is an open set; an arbitrary union of open sets is open; the complement of an open set is closed ([[def-interval]], [[def-open-and-closed-in-r]], [[thm-open-set-algebra-r]]).

[L3] A set is dense exactly when every $N_\varepsilon(x)$ meets it; a closed set is nowhere dense exactly when its interior is empty; a meager set is a union of a sequence of nowhere dense sets ([[def-limit-point-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]], [[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]]).

[L4] $\sum_{k=0}^{\infty}2^{-k} = 2$, powers satisfy $2^{-k-n-1} = 2^{-n-1}2^{-k}$, finite sums scale, and $2^{-n} \to 0$ ([[thm-geometric-series]], [[def-series]], [[def-integer-power]], [[lem-power-laws]], [[def-finite-sum]], [[lem-finite-sum-laws]], [[thm-nonnegative-series-bounded-partial-sums]], [[lem-geometric-sequence-null]], [[def-real-limit]]).

[L5] Nullity: $A$ is null when for every real $\varepsilon > 0$ there is a sequence of closed intervals covering $A$ with all partial total lengths at most $\varepsilon$; every at most countable set is null ([[def-measure-zero-and-content-zero]], [[lem-countable-sets-are-null]]).

[L6] $\mathbb{R}$ is not a union of a sequence of nowhere dense sets ([[thm-baire-category-r]]).

[L7] $G$ is an intersection of a sequence of open sets, so it is $G_\delta$ ([[def-f-sigma-g-delta]]).

[L8] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $2^{-k-n-2} > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 Fix $e$ by [L1]. Each $U_n$ is an open set, being a union of open intervals by [L2], and each contains $\mathbb{Q}_{\mathbb{R}}$, since $e(k)$ lies in the $k$-th interval by [L8]. Hence each $U_n$ is dense by [L1] and [L3], a superset of a dense set being dense. [given, L1, L2, L3, L8, choose]

2.1 **$G$ is null.** Let the real $\varepsilon > 0$ be given and use [L4] to fix $n$ with $2^{-n} \le \varepsilon$. The closed intervals $I_k := [\,e(k) - 2^{-k-n-2},\ e(k) + 2^{-k-n-2}\,]$ cover $U_n$, hence cover $G \subseteq U_n$, and each has length $2^{-k-n-1} = 2^{-n-1}2^{-k}$ by [L2], [L4] and [L8]; so every partial total length is $\sum_{k<i}2^{-n-1}2^{-k} = 2^{-n-1}\sum_{k<i}2^{-k} \le 2^{-n-1} \cdot 2 = 2^{-n} \le \varepsilon$ by [L4]. By [L5] the set $G$ has measure zero. [step 1.1, L4, L5, L8]

2.2 **$\mathbb{R} \setminus G$ is meager.** By De Morgan $\mathbb{R} \setminus G = \bigcup_n (\mathbb{R} \setminus U_n)$, and each $\mathbb{R} \setminus U_n$ is closed by [L2]. Its interior is empty: if $N_\delta(x) \subseteq \mathbb{R} \setminus U_n$ for some real $\delta > 0$, then $N_\delta(x)$ would miss $\mathbb{Q}_{\mathbb{R}} \subseteq U_n$, contradicting the density of $\mathbb{Q}_{\mathbb{R}}$ given by [L1] and [L3]. So each $\mathbb{R} \setminus U_n$ is nowhere dense by [L3], and $\mathbb{R} \setminus G$ is meager. [step 1.1, L1, L2, L3]

3.1 So $\mathbb{R} = (\mathbb{R} \setminus G) \cup G$ with the first piece meager and the second null, which is the failure of [A1]. Moreover $G$ is residual, its complement being meager, and $G \ne \varnothing$: were $G$ empty, $\mathbb{R} = \mathbb{R} \setminus G$ would be meager, contradicting [L6]. Thus $G$ is a residual, $G_\delta$ set of measure zero by [L7], and $\mathbb{R} \setminus G$ is a meager set whose complement is null. [step 2.1, step 2.2, A1, L3, L6, L7] ∎

## Remarks

- **Both pieces are as small as their notion allows, and they are complementary.**
  $G$ is null and residual; $\mathbb{R} \setminus G$ is meager and its complement
  is null. So no implication holds between "meager" and "null" in either
  direction, and neither can be strengthened to a statement about the complement.
  This is the standard duality between measure and category, and $G$ is the
  standard witness for it.

- **$G$ contains all the irrationals that are well approximable by rationals.**
  Membership in $U_n$ says that some rational $e(k)$ lies within
  $2^{-k-n-2}$ of the point, so $G$ is a set of points approximable by rationals
  at every accuracy of that shape. Nothing on this page needs that reading; it is
  recorded because it is what makes the example natural rather than contrived.

- **Baire is used only once, and only for nonemptiness.** Steps 2.1 and 2.2 are
  independent of [[thm-baire-category-r]]; it enters in step 3.1 to rule out
  $G = \varnothing$, which would make the decomposition vacuous. That is also the
  precise sense in which the example needs the completeness of $\mathbb{R}$.

- **The individual $U_n$ are open, dense and of small total cover length**, which
  is [[ex-q-covered-by-intervals-of-small-total-length]] with
  $\varepsilon = 2^{-n}$; the example is that construction iterated and
  intersected.
