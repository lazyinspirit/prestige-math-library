---
id: fs-bounded-implies-riemann-integrable
kind: false-statement
title: "FALSE: every bounded function on $[a,b]$ is Riemann integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-darboux-sums, def-darboux-integral, def-partition-and-refinement, def-dirichlet-and-thomae-functions, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, def-bounded-set, lem-finite-sum-laws, def-finite-sum, def-interval, def-infimum, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
short: "FALSE: bounded $\\Rightarrow$ integrable"
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

## Statement

**False claim:** every bounded function $f : [a,b] \to \mathbb{R}$
([[def-bounded-set]]) is Riemann integrable on $[a,b]$
([[def-darboux-integral]]).

Boundedness is exactly what is needed for the Darboux sums to **exist**
([[def-darboux-sums]]), and the claim above confuses that with their two extrema
agreeing. The witness below is bounded, takes only the values $0$ and $1$, and
has lower Darboux integral $0$ and upper Darboux integral $1$: as far apart as
the values allow.

## Facts & Assumptions

**Given:** The Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ restricted to $[0,1]$, that is $g : [0,1] \to \mathbb{R}$ with $g(x) = 1$ for rational $x$ and $g(x) = 0$ for irrational $x$ ([[def-dirichlet-and-thomae-functions]]).

[A1] The false claim: every bounded function on a closed bounded interval with distinct endpoints is Riemann integrable.

[L1] Both $\mathbb{Q}$ and $\mathbb{R}\setminus\mathbb{Q}$ are dense in $\mathbb{R}$, and a set is dense exactly when every neighbourhood of every real meets it ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L2] For a partition $P = (n,t)$ of $[0,1]$: $n \ge 1$, $t_i < t_{i+1}$, $\Delta_i = t_{i+1}-t_i > 0$, $\sum_{i<n}\Delta_i = 1 - 0 = 1$, and $I_i = [t_i,t_{i+1}]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L3] $m_i = \inf g[I_i]$, $M_i = \sup g[I_i]$, $L(g,P) = \sum_{i<n}m_i\Delta_i$, $U(g,P) = \sum_{i<n}M_i\Delta_i$; $\underline{\int_0^1} g$ is the supremum of the lower sums and $\overline{\int_0^1} g$ the infimum of the upper sums; $g$ is integrable exactly when these agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L4] A set with a least element has it as its infimum, and one with a greatest element has it as its supremum; the supremum and infimum of $\{c\}$ are both $c$ ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L5] Finite sums: scaling and $\sum_{i<n}0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Ordered-field arithmetic: the midpoint $(u+v)\cdot 2^{-1}$ of $u < v$ satisfies $u < (u+v)\cdot 2^{-1} < v$, and $N_\rho(c) \subseteq (u,v)$ for $c$ the midpoint and $\rho := (v-u)\cdot 2^{-1}$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-neighbourhood-r]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 $g$ is bounded: $0 \le g(x) \le 1$ for every $x \in [0,1]$, since $g$ takes only the values $0$ and $1$. So its Darboux sums and integrals are defined by [L3]. [given, L3]

1.2 Every subinterval of every partition of $[0,1]$ contains both a rational and an irrational. Let $P = (n,t)$ be a partition and $i < n$; then $t_i < t_{i+1}$ by [L2], so with $c := (t_i + t_{i+1})\cdot 2^{-1}$ and $\rho := (t_{i+1}-t_i)\cdot 2^{-1}$ one has $N_\rho(c) \subseteq (t_i,t_{i+1}) \subseteq I_i$ by [L6], and $N_\rho(c)$ meets $\mathbb{Q}$ and meets $\mathbb{R}\setminus\mathbb{Q}$ by [L1]. [L1, L2, L6]

2.1 Hence $g[I_i] = \{0,1\}$ for every $i < n$, so $m_i = 0$ and $M_i = 1$ by [L4]. [step 1.2, given, L4]

3.1 Therefore $L(g,P) = \sum_{i<n}0\cdot\Delta_i = 0$ and $U(g,P) = \sum_{i<n}1\cdot\Delta_i = \sum_{i<n}\Delta_i = 1$, for **every** partition $P$ of $[0,1]$, by [L3], [L5] and [L2]. [step 2.1, L2, L3, L5]

4.1 The set of lower sums is $\{0\}$ and the set of upper sums is $\{1\}$, so $\underline{\int_0^1} g = 0$ and $\overline{\int_0^1} g = 1$ by [L4] and [L3]. Since $0 \ne 1$, $g$ is not Riemann integrable on $[0,1]$. [step 3.1, L3, L4]

5.1 $g$ is a bounded function on $[0,1]$, an interval with $0 < 1$, and it is not Riemann integrable; so [A1] fails at $g$ and the claim is false. [step 1.1, step 4.1, A1] ∎

## Remarks

- **What the true statement is.** Boundedness is necessary and not sufficient; the exact condition is that the discontinuity set have measure zero ([[thm-lebesgue-criterion]]). The Dirichlet function is discontinuous at **every** point of $[0,1]$ ([[thm-dirichlet-and-thomae-continuity-sets]]), and $[0,1]$ is not null ([[lem-nondegenerate-interval-is-not-null]]), so the criterion refuses it for the strongest possible reason.

- **The gap is maximal for the values available.** A function with values in $\{0,1\}$ can have upper minus lower integral at most $1$, and this one attains that. Halving the function halves the gap and changes nothing else, so no bound on the size of the failure can be extracted from boundedness alone.

- **The support is not what decides.** Thomae's function is nonzero at exactly the same points as the Dirichlet function, namely the rationals, and differs from it only in the *values* it takes there; yet it **is** integrable, with integral $0$ ([[fs-nonnegative-integrable-with-zero-integral-vanishes]]). What matters is not where a function is nonzero but where it is discontinuous.
