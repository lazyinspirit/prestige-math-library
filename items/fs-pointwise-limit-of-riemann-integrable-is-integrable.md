---
id: fs-pointwise-limit-of-riemann-integrable-is-integrable
kind: false-statement
title: "FALSE: a pointwise limit of a sequence of Riemann integrable functions on $[a,b]$ is Riemann integrable"
status: published
origin: session
deps: [thm-finitely-many-discontinuities-integrable, fs-bounded-implies-riemann-integrable, def-dirichlet-and-thomae-functions, thm-rationals-countable, lem-subset-of-countable, lem-countable-iff-surjection-from-n, def-countable, def-real-limit, def-sequence, def-continuity-real, def-darboux-integral, def-bounded-set, lem-finite-set-has-max, def-max-min, def-neighbourhood-r, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
short: "FALSE: pointwise limits preserve integrability"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
pipeline_run: null
---

## Statement

**False claim:** if $(f_n)_{n \in \mathbb{N}}$ is a sequence of Riemann
integrable functions on $[a,b]$ ([[def-darboux-integral]], [[def-sequence]])
and $f : [a,b] \to \mathbb{R}$ satisfies

$$f_n(x) \longrightarrow f(x) \qquad \text{for every } x \in [a,b]$$

([[def-real-limit]]), then $f$ is Riemann integrable on $[a,b]$.

The witness below is the standard one: an increasing sequence of indicators of
finite sets of rationals, each integrable because it has only finitely many
discontinuities, whose pointwise limit is the Dirichlet function, which is not
integrable at all. Every $f_n$ takes values in $\{0,1\}$, so no unboundedness is
involved, and the convergence is even monotone.

## Facts & Assumptions

**Given:** The set $E := \mathbb{Q} \cap [0,1]$, a surjection $s : \mathbb{N} \to E$, the finite sets $F_n := \{\, s(k) : k < n \,\}$ for $n \in \mathbb{N}$, and the indicators $f_n : [0,1] \to \mathbb{R}$ with $f_n(x) = 1$ for $x \in F_n$ and $f_n(x) = 0$ otherwise.

[A1] The false claim: a pointwise limit of Riemann integrable functions on a closed bounded interval with distinct endpoints is Riemann integrable.

[L1] $\mathbb{Q}$ is countably infinite and every subset of an at most countable set is at most countable, so $E$ is at most countable; $E$ is nonempty, since $0 \in E$; and a nonempty at most countable set admits a surjection from $\mathbb{N}$ ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]], [[lem-countable-iff-surjection-from-n]]).

[L2] A bounded function on $[a,b]$ that is continuous at every point other than $r$ listed points is Riemann integrable ([[thm-finitely-many-discontinuities-integrable]], [[def-bounded-set]]).

[L3] The Dirichlet function restricted to $[0,1]$, that is $g : [0,1] \to \mathbb{R}$ with $g(x) = 1$ for rational $x$ and $g(x) = 0$ for irrational $x$, is bounded and **not** Riemann integrable: its lower Darboux integral is $0$ and its upper Darboux integral is $1$ ([[fs-bounded-implies-riemann-integrable]], [[def-dirichlet-and-thomae-functions]]).

[L4] A sequence of reals converges to $x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$; an eventually constant sequence converges to that constant ([[def-real-limit]], [[def-sequence]], [[lem-of-abs-value]]).

[L5] Every nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] Continuity at a point: for every real $\varepsilon > 0$ there must be a real $\delta > 0$ with $|h(y) - h(x)| < \varepsilon$ for every $y$ in the domain with $|y - x| < \delta$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L7] Ordered-field arithmetic: the order is total and transitive, $|u - v| > 0$ for $u \ne v$, and $0 < 1$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 By [L1] fix a surjection $s : \mathbb{N} \to E$ and define $F_n$ and $f_n$ as in the Given. Each $f_n$ takes only the values $0$ and $1$, so it is bounded. [given, L1, choose, construct]

2.1 **Each $f_n$ is continuous at every point of $[0,1]$ outside the $n$ listed points $s(0), \dots, s(n-1)$.** Let $x \in [0,1]$ with $x \ne s(k)$ for all $k < n$, so $f_n(x) = 0$. If $n = 0$ put $\delta := 1$; otherwise put $\delta := \min\{\, |x - s(k)| : k < n \,\}$, which exists by [L5] and is positive by [L7]. Every $y \in [0,1]$ with $|y - x| < \delta$ then differs from each $s(k)$ with $k < n$, so $f_n(y) = 0$ and $|f_n(y) - f_n(x)| = 0 < \varepsilon$ for every $\varepsilon > 0$. [step 1.1, L5, L6, L7]

2.2 **$(f_n)$ converges pointwise to $g$ on $[0,1]$.** Let $x \in [0,1]$. If $x$ is rational then $x \in E$, so $x = s(k)$ for some $k \in \mathbb{N}$ by surjectivity, and then $x \in F_n$ and $f_n(x) = 1$ for every $n > k$; the sequence is eventually constant with value $1 = g(x)$, so it converges to $g(x)$ by [L4]. If $x$ is irrational then $x \notin E$ and hence $x \notin F_n$ for any $n$, so $f_n(x) = 0 = g(x)$ for every $n$ and again the sequence converges to $g(x)$. [step 1.1, L1, L3, L4]

3.1 By [L2], applied with the $n$ listed points $s(0),\dots,s(n-1)$, each $f_n$ is Riemann integrable on $[0,1]$. [step 1.1, step 2.1, L2]

4.1 So $(f_n)$ is a sequence of Riemann integrable functions on $[0,1]$, an interval with $0 < 1$, converging pointwise to $g$, and $g$ is not Riemann integrable by [L3]. Hence [A1] fails at this sequence and the claim is false. [step 3.1, step 2.2, A1, L3] ∎

## Remarks

- **Monotone convergence does not help either.** The sequence above is nondecreasing in $n$ at every point, since $F_n \subseteq F_{n+1}$, and uniformly bounded by $1$. So no monotonicity or boundedness hypothesis on the sequence rescues the claim; what rescues it is uniform convergence, or a wider notion of integral, and neither is developed here.

- **What actually degrades in the limit.** Each $f_n$ is discontinuous at $n$ points at most, so its discontinuity set is null and [[thm-lebesgue-criterion]] passes it. The union of those finite sets is $E = \mathbb{Q}\cap[0,1]$, which is still null; but the discontinuity set of the **limit** is all of $[0,1]$ ([[thm-dirichlet-and-thomae-continuity-sets]]), which is not null ([[lem-nondegenerate-interval-is-not-null]]). Discontinuity sets do not pass to pointwise limits, and that is the whole failure.

- **The refutation incurs no choice of its own; what it costs is inherited.** [[lem-countable-iff-surjection-from-n]] produces a single surjection $s$, and every $f_n$ is defined from it by a formula; the $\delta$ of step 2.1 is a minimum of a finite set, not a selection. The one countable choice behind this item is the one inside [[thm-heine-cantor-r]], reached through [[thm-finitely-many-discontinuities-integrable]] at step 3.1, and that is how [[rem-riemann-integral-choice-ledger]] records it.
