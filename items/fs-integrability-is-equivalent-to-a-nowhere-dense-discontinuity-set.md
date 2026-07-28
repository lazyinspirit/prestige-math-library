---
id: fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set
kind: false-statement
title: "FALSE: a bounded function on $[a,b]$ is Riemann integrable exactly when its set of discontinuities is nowhere dense"
status: published
origin: session
deps: [def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, def-nowhere-dense-meager, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-neighbourhood-r, def-measure-zero-and-content-zero, def-continuity-real, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-interval, def-infimum, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
short: "FALSE: integrable iff nowhere dense discontinuities"
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Statement

**False claim:** a bounded function $f : [a,b] \to \mathbb{R}$ is Riemann
integrable on $[a,b]$ ([[def-darboux-integral]]) **if and only if** its set of
discontinuities is nowhere dense ([[def-nowhere-dense-meager]],
[[def-continuity-real]]).

The claim replaces the correct smallness condition, measure zero
([[thm-lebesgue-criterion]]), by the smallness condition of category. The two are
independent, and the implication that fails below is the one from "nowhere dense"
to "integrable": the indicator of the Smith-Volterra-Cantor set
([[def-fat-cantor-set]]) is discontinuous exactly on a **closed nowhere dense**
set and is not integrable, because that set cannot be covered by intervals of
small total length.

The other implication fails too, and more cheaply: Thomae's function is
integrable and its discontinuity set is $\mathbb{Q} \cap [0,1]$, which is dense
in $[0,1]$ and therefore not nowhere dense. One failing direction refutes the
biconditional, and the harder one is worked out below.

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S \subseteq [0,1]$ ([[def-fat-cantor-set]]) and its indicator $g : [0,1] \to \mathbb{R}$, with $g(x) = 1$ for $x \in S$ and $g(x) = 0$ for $x \in [0,1]\setminus S$.

[A1] The false claim, in the direction used here: if a bounded $f$ on $[a,b]$ has a nowhere dense set of discontinuities, then $f$ is Riemann integrable.

[L1] $S$ is closed and bounded and nowhere dense, and if $(a_k)$, $(b_k)$ are sequences of reals with $a_k \le b_k$, $S \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k-a_k) \le M$ for every $i \in \mathbb{N}$, then $M \ge 2^{-1}$; in particular $S$ does not have measure zero ([[thm-fat-cantor-set-has-positive-measure]], [[def-fat-cantor-set]], [[def-measure-zero-and-content-zero]]).

[L2] A set $A$ is nowhere dense when the interior of $\overline{A}$ is empty; for closed $A$ this says that $A$ contains no nonempty open set, equivalently that every neighbourhood of every point contains a point outside $A$ ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]], [[def-open-and-closed-in-r]]).

[L3] A set is closed exactly when its complement is open, that is, when every point outside it has a neighbourhood missing it ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] For a partition $P = (n,t)$ of $[0,1]$: $n \ge 1$, $\Delta_i > 0$, $\sum_{i<n}\Delta_i = 1$, $I_i = [t_i,t_{i+1}]$, and $[0,1] = \bigcup_{i<n} I_i$ ([[def-partition-and-refinement]], [[def-interval]]).

[L5] $L(g,P) = \sum_{i<n}m_i\Delta_i$, $U(g,P) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf g[I_i]$ and $M_i = \sup g[I_i]$; $\underline{\int_0^1} g$ is the supremum of the lower sums and $\overline{\int_0^1} g$ the infimum of the upper sums; $g$ is integrable exactly when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L6] A set with a least element has it as its infimum and one with a greatest element has it as its supremum ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L7] Finite sums: scaling, splitting, monotonicity in the terms, and $\sum_{i<n}0 = 0$; a finite list may be extended to a sequence by degenerate intervals of length $0$ without changing any partial total ([[def-finite-sum]], [[lem-finite-sum-laws]], [[def-measure-zero-and-content-zero]]).

[L8] Ordered-field arithmetic: the order is total, so any two reals have a maximum and a minimum; adding a constant preserves an inequality. For $0 \le x \le 1$ and a real $\rho > 0$, the reals $u := \max\{0, x-\rho\}$ and $v := \min\{1, x+\rho\}$ satisfy $u < v$, by checking the four cases of which member each of the two attains, and $(u,v) \subseteq N_\rho(x)\cap[0,1]$, since $z \in (u,v)$ gives $x - \rho \le u < z < v \le x + \rho$ and $0 \le u < z < v \le 1$ ([[def-max-min]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-neighbourhood-r]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 $g$ is bounded, taking only the values $0$ and $1$, so its Darboux sums and integrals are defined by [L5]. [given, L5]

1.2 **$g$ is discontinuous at every point of $S$.** Let $x \in S$, so $g(x) = 1$, and let a real $\rho > 0$ be given. Put $u := \max\{0,\ x-\rho\}$ and $v := \min\{1,\ x+\rho\}$; then $u < v$ because $0 \le x \le 1$ and $\rho > 0$, and $(u,v) \subseteq N_\rho(x) \cap [0,1]$ by [L8]. Since $S$ is closed and nowhere dense it contains no nonempty open set by [L1] and [L2], so there is $y \in (u,v)$ with $y \notin S$. Then $y \in [0,1]$, $|y - x| < \rho$ and $|g(x)-g(y)| = 1$, so the continuity condition fails at $x$ for $\varepsilon := 1$. [given, L1, L2, L6, L8]

1.3 **$g$ is continuous at every point of $[0,1] \setminus S$.** Let $x \in [0,1]$ with $x \notin S$. Since $S$ is closed, [L3] gives a real $\rho > 0$ with $N_\rho(x) \cap S = \varnothing$, so $g$ vanishes identically on $N_\rho(x)\cap[0,1]$ and $|g(y)-g(x)| = 0 < \varepsilon$ there, for every $\varepsilon > 0$. [given, L1, L3]

2.1 So the set of discontinuities of $g$ in $[0,1]$ is exactly $S$, which is nowhere dense by [L1]. [step 1.2, step 1.3, L1]

2.2 **Every upper Darboux sum of $g$ is at least $2^{-1}$.** Let $P = (n,t)$ be a partition of $[0,1]$ and let $B := \{\, i < n : I_i \cap S \ne \varnothing \,\}$. For $i \in B$ the set $g[I_i]$ contains $1$, so $M_i = 1$ by [L6] and $g \le 1$; for $i \notin B$ one has $g[I_i] = \{0\}$ and $M_i = 0$. Hence $U(g,P) = \sum_{i<n}M_i\Delta_i$ is the sum of the $\Delta_i$ with $i \in B$, by [L5] and [L7]. [step 1.1, L5, L6, L7]

2.3 **Every lower Darboux sum of $g$ is $0$.** With $P$ as above and $i < n$: $t_i < t_{i+1}$ by [L4], so $(t_i,t_{i+1})$ is a nonempty open subset of $[0,1]$, and by [L1] and [L2] it is not contained in $S$; a point of it outside $S$ lies in $I_i \cap [0,1]$ and has $g$-value $0$, so $g[I_i]$ contains $0$ and $m_i = 0$ by [L6], $g$ being nonnegative. Hence $L(g,P) = 0$ by [L5] and [L7]. [step 1.1, L1, L2, L4, L5, L6, L7]

3.1 The intervals $I_i$ with $i \in B$ cover $S$: a point of $S$ lies in $[0,1] = \bigcup_{i<n}I_i$ by [L4], hence in some $I_i$, and that $i$ is in $B$. Extending this finite list of closed intervals to a sequence by degenerate intervals $[0,0]$ ([L7]) gives a cover of $S$ all of whose partial total lengths are at most $U(g,P)$, so [L1] gives $U(g,P) \ge 2^{-1}$. [step 2.2, L1, L4, L7]

4.1 Therefore $\underline{\int_0^1} g = 0$ by [L6] and step 2.3, while $\overline{\int_0^1} g \ge 2^{-1}$ by step 3.1, since every upper sum is at least $2^{-1}$ and the infimum of such a set is at least $2^{-1}$. The two differ, so $g$ is not Riemann integrable by [L5]. [step 3.1, step 2.3, L5, L6]

5.1 So $g$ is a bounded function on $[0,1]$ whose set of discontinuities is nowhere dense and which is not Riemann integrable; [A1] fails at $g$, and with it the claimed equivalence. [step 2.1, step 4.1, A1] ∎

## Remarks

- **Where the false claim comes from.** For a **closed** discontinuity set, being nowhere dense and being null are both ways of saying "small", and for the Cantor set they agree. They come apart exactly because a nowhere dense closed set may still swallow a fixed fraction of the length of every interval it meets, which is what the Smith-Volterra-Cantor construction arranges: it removes a middle interval of length $4^{-n}$ at stage $n$ rather than a fixed proportion ([[def-fat-cantor-set]]).

- **The correct statement is measure zero, in both directions.** That is [[thm-lebesgue-criterion]], and it explains both failures at once: $S$ is nowhere dense and not null, so $g$ is not integrable; $\mathbb{Q}\cap[0,1]$ is dense and null, so Thomae's function is integrable ([[fs-nonnegative-integrable-with-zero-integral-vanishes]]).

- **Nothing here uses any choice principle.** The non-integrability of $g$ is proved directly from claim 4 of [[thm-fat-cantor-set-has-positive-measure]], which is a statement about interval covers, rather than through the forward half of [[thm-lebesgue-criterion]], which spends countable choice. See [[rem-riemann-integral-choice-ledger]].
