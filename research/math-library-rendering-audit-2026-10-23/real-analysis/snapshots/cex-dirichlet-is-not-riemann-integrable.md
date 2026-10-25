---
id: cex-dirichlet-is-not-riemann-integrable
kind: counterexample
title: "The Dirichlet function on $[0,1]$ has lower Darboux integral $0$ and upper Darboux integral $1$, so it is bounded and not Riemann integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-bounded-implies-riemann-integrable, def-dirichlet-and-thomae-functions, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-interval, def-infimum, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "Dirichlet is not integrable"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
    - title: "MIT 18.013A, Nonintegrable Functions"
      url: "https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter20/section04.html"
pipeline_run: null
---

## Statement refuted

**Refuted:** that every bounded function on a closed bounded interval with
distinct endpoints is Riemann integrable
([[fs-bounded-implies-riemann-integrable]], [[def-darboux-integral]]).

The witness is the Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ restricted to
$[0,1]$ ([[def-dirichlet-and-thomae-functions]]). It takes only the values $0$
and $1$, so it is bounded ([[def-bounded-set]]); every lower Darboux sum is $0$
and every upper Darboux sum is $1$; hence

$$\underline{\int_0^1}\mathbf{1}_{\mathbb{Q}} \;=\; 0 \;\ne\; 1 \;=\; \overline{\int_0^1}\mathbf{1}_{\mathbb{Q}} ,$$

and the function is not Riemann integrable. The two Darboux integrals are as far
apart as the range of the function allows.

## Facts & Assumptions

**Given:** $g : [0,1] \to \mathbb{R}$ with $g(x) = 1$ for rational $x$ and $g(x) = 0$ for irrational $x$ ([[def-dirichlet-and-thomae-functions]]).

[A1] The refuted claim: every bounded function on such an interval is Riemann integrable ([[fs-bounded-implies-riemann-integrable]]).

[L1] Both $\mathbb{Q}$ and $\mathbb{R}\setminus\mathbb{Q}$ are dense in $\mathbb{R}$, so every nonempty open interval contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L2] For a partition $P = (n,t)$ of $[0,1]$: $n \ge 1$, $t_i < t_{i+1}$, $\Delta_i > 0$, $\sum_{i<n}\Delta_i = 1$, $I_i = [t_i,t_{i+1}]$, and $(t_i,t_{i+1})$ is a nonempty open interval contained in $I_i$ ([[def-partition-and-refinement]], [[def-interval]]).

[L3] $m_i = \inf g[I_i]$, $M_i = \sup g[I_i]$, $L(g,P) = \sum_{i<n}m_i\Delta_i$, $U(g,P) = \sum_{i<n}M_i\Delta_i$; $\underline{\int_0^1}g$ is the supremum of the lower sums and $\overline{\int_0^1}g$ the infimum of the upper sums; $g$ is integrable exactly when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L4] A set with a least element has it as its infimum and one with a greatest element has it as its supremum; the supremum and infimum of $\{c\}$ are both $c$ ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L5] Finite sums: scaling and $\sum_{i<n}0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Ordered-field arithmetic: $0 \ne 1$, and the order is total and transitive ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 $g$ is bounded, with $0 \le g(x) \le 1$ for every $x \in [0,1]$, so its Darboux sums and integrals are defined by [L3]. [given, L3]

1.2 Let $P = (n,t)$ be any partition of $[0,1]$ and $i < n$. By [L2] the interval $(t_i,t_{i+1})$ is nonempty and open, so by [L1] it contains a rational and an irrational, both lying in $I_i$. Hence $g[I_i] = \{0,1\}$ and, by [L4], $m_i = 0$ and $M_i = 1$. [given, L1, L2, L4]

2.1 Therefore $L(g,P) = \sum_{i<n}0\cdot\Delta_i = 0$ and $U(g,P) = \sum_{i<n}1\cdot\Delta_i = \sum_{i<n}\Delta_i = 1$, for every partition $P$ of $[0,1]$, by [L3], [L5] and [L2]. [step 1.2, L2, L3, L5]

3.1 The set of lower sums is $\{0\}$ and the set of upper sums is $\{1\}$, so $\underline{\int_0^1}g = 0$ and $\overline{\int_0^1}g = 1$ by [L4] and [L3]. Since $0 \ne 1$ by [L6], $g$ is not Riemann integrable on $[0,1]$. [step 2.1, L3, L4, L6]

4.1 So $g$ is bounded on $[0,1]$, an interval with $0 < 1$, and is not Riemann integrable: [A1] is refuted. [step 1.1, step 3.1, A1] ∎

## Remarks

- **The failure is uniform over partitions.** No partition does better than any other here: $U(g,P) - L(g,P) = 1$ for **every** $P$, so Riemann's criterion ([[thm-riemann-criterion]]) fails as badly as it can. Contrast the Cantor-set indicator, where the gap does go to $0$ ([[ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero]]).

- **The Lebesgue criterion gives the same verdict for the same reason.** $g$ is discontinuous at every point of $[0,1]$ ([[thm-dirichlet-and-thomae-continuity-sets]]), and $[0,1]$ is not null ([[lem-nondegenerate-interval-is-not-null]]), so [[thm-lebesgue-criterion]] refuses it too. The direct computation above is kept because it is elementary and costs no choice principle.

- **The Riemann sums are not even a warning.** Every uniform partition with rational tags gives Riemann sum $1$, so along that one sequence of tagged partitions the sums converge; this is precisely why the Riemann definition quantifies over all tagged partitions of small mesh ([[cex-riemann-sums-along-one-sequence-of-tagged-partitions-do-not-suffice]]).
