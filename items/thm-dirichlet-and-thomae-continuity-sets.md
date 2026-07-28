---
id: thm-dirichlet-and-thomae-continuity-sets
kind: theorem
title: "The Dirichlet function is continuous at no point of $\\mathbb{R}$, and Thomae's function is continuous at every irrational and at no rational, so its set of continuity points is exactly the set of irrationals and its oscillation at $c$ equals $t(c)$"
status: draft
origin: session
deps: [def-dirichlet-and-thomae-functions, def-continuity-real, lem-q-and-irrationals-dense-r, def-oscillation, thm-continuity-iff-oscillation-zero, cor-archimedean-reciprocal, lem-integer-part, def-canonical-natural, lem-of-naturals-positive, lem-finite-set-has-max, def-max-min, lem-of-abs-value, def-neighbourhood-r, thm-closure-characterisations-r, lem-rat-embeds-dense, def-extended-reals, lem-extended-reals-complete]
justified_by: []
aliases: [thm-thomae-continuity-set]
landmark: true
short: "Thomae is continuous exactly at the irrationals"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
pipeline_run: null
---

## Statement

Let $\mathbf{1}_{\mathbb{Q}}$ and $t$ be the Dirichlet and Thomae functions
([[def-dirichlet-and-thomae-functions]]), and write $q(x)$ for the least
denominator of a rational $x$, so that $t(x) = 1/\iota(q(x))$ there and
$t(x) = 0$ at every irrational $x$. Then:

1. $\mathbf{1}_{\mathbb{Q}}$ is continuous at **no** point of $\mathbb{R}$
   ([[def-continuity-real]]);
2. $\omega_{t}(c) = t(c)$ for **every** real $c$ ([[def-oscillation]]);
3. $t$ is continuous at every irrational and discontinuous at every rational, so
   its set of continuity points is exactly $\mathbb{R} \setminus \mathbb{Q}$.

**Claim 1 restates, on this page, what
[[cex-dirichlet-is-nowhere-continuous]] already proves.** That item is homed on
the examples page of *Continuity, the intermediate and extreme value theorems,
and uniform continuity*, and an examples page is a leaf of this library: nothing
outside it may depend on an item that lives there. The claim is needed here, and
on later pages, as a citable statement, so it is proved again rather than
quoted. The two statements are the same statement, and neither is stronger than
the other; the proof below is the same argument, and no originality is claimed
for it. This is the pattern
[[ex-distance-to-the-integers-is-1-lipschitz]] follows.

## Facts & Assumptions

**Given:** The Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ and Thomae's function $t$, and a real $c$; $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}$ are the canonical copies and $\iota(q) = q \cdot 1_{\mathbb{R}}$.

[A1] $\mathbf{1}_{\mathbb{Q}}(x) = 1$ for $x \in \mathbb{Q}$ and $0$ otherwise; $t(x) = 1/\iota(q(x)) \in (0,1]$ for $x \in \mathbb{Q}$ and $t(x) = 0$ otherwise, where $q(x) = \min\{q \ge 1 : \iota(q)x \in \mathbb{Z}\}$ ([[def-dirichlet-and-thomae-functions]]).

[L1] Both $\mathbb{Q}$ and $\mathbb{R} \setminus \mathbb{Q}$ are dense in $\mathbb{R}$, so every $N_\delta(y)$ contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]], [[lem-rat-embeds-dense]]).

[L2] For every real $x$ there is exactly one integer $m$ with $m \le x < m+1$, written $\lfloor x \rfloor$ ([[lem-integer-part]]); consequently no integer lies strictly between two consecutive integers.

[L3] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$; and $\iota$ is positive and strictly increasing on the naturals $\ge 1$, so $1 \le q \le N$ gives $\iota(q) \le \iota(N)$ and $1/\iota(N) \le 1/\iota(q)$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] A nonempty finite set of reals presented as $\{a_{0}, \dots, a_{n}\}$ has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] $\omega_{f}(S) = \sup\{|f(x)-f(y)| : x,y \in S\}$ and $\omega_{f}(c) = \inf\{\omega_{f}(N_\delta(c)) : \delta > 0\}$ for $f$ defined on all of $\mathbb{R}$, both computed in $\overline{\mathbb{R}}$, where every set has a supremum and an infimum; $f$ is continuous at $c$ if and only if $\omega_{f}(c) = 0$ ([[def-oscillation]], [[def-extended-reals]], [[lem-extended-reals-complete]], [[thm-continuity-iff-oscillation-zero]]).

[L6] $|u| \ge 0$, $|u - v| \le |u| + |v|$, and if $0 \le u \le M$ and $0 \le v \le M$ then $|u - v| \le M$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** cases.

1.1 Claim 1. Let $c$ be real and let $\delta > 0$ be real. The neighbourhood $N_\delta(c)$ contains a rational $u$ and an irrational $v$, and $\mathbf{1}_{\mathbb{Q}}(u) - \mathbf{1}_{\mathbb{Q}}(v) = 1 - 0 = 1$; since $\mathbf{1}_{\mathbb{Q}}(c)$ is $0$ or $1$, one of $|\mathbf{1}_{\mathbb{Q}}(u) - \mathbf{1}_{\mathbb{Q}}(c)|$ and $|\mathbf{1}_{\mathbb{Q}}(v) - \mathbf{1}_{\mathbb{Q}}(c)|$ equals $1$. So the continuity condition at $c$ fails for $\varepsilon = 1$, no $\delta$ witnessing it, and $\mathbf{1}_{\mathbb{Q}}$ is continuous at no point. [A1, L1]

1.2 **A separation estimate.** For a real $c$ and a natural $q \ge 1$ put $m := \lfloor \iota(q)c \rfloor$ and define $d_{q}(c) := 1/\iota(q)$ if $\iota(q)c = m$, and $d_{q}(c) := \min\{\iota(q)c - m,\ m + 1 - \iota(q)c\}/\iota(q)$ otherwise. In both cases $d_{q}(c) > 0$. [L2, L3, construct]

1.3 **A lower bound.** For every real $\delta > 0$ the neighbourhood $N_\delta(c)$ contains an irrational $v$, and $c \in N_\delta(c)$, so $\omega_{t}(N_\delta(c)) \ge |t(c) - t(v)| = t(c)$; taking the infimum over $\delta$ gives $\omega_{t}(c) \ge t(c)$. [A1, L1, L5]

2.1 With $d_{q}(c)$ as in step 1.2: for every integer $p$ with $p/\iota(q) \ne c$ one has $|c - p/\iota(q)| \ge d_{q}(c)$. If $\iota(q)c = m$ then $p \ne m$, so $|\iota(q)c - p| = |m - p| \ge 1$; otherwise $m < \iota(q)c < m+1$, and $p \le m$ gives $\iota(q)c - p \ge \iota(q)c - m$ while $p \ge m+1$ gives $p - \iota(q)c \ge m+1-\iota(q)c$. Dividing by $\iota(q) > 0$ gives the claim. [step 1.2, L2, L3]

2.2 For a real $c$ and a natural $N \ge 1$ put $\delta_{N}(c) := \min\{d_{1}(c), \dots, d_{N}(c)\}$, the minimum of a nonempty finite set of positive reals, so $\delta_{N}(c) > 0$. [step 1.2, L4, construct]

3.1 If $x$ is rational with $0 < |x - c| < \delta_{N}(c)$ then $q(x) > N$ and hence $t(x) < 1/\iota(N)$. Indeed $x = p/\iota(q)$ with $q := q(x)$ and $p := \iota(q)x$; if $q \le N$ then $p/\iota(q) = x \ne c$, so step 2.1 gives $|c - x| \ge d_{q}(c) \ge \delta_{N}(c)$, contrary to the hypothesis. So $q(x) > N$, and $t(x) = 1/\iota(q(x)) < 1/\iota(N)$ because $\iota$ is strictly increasing. [step 2.1, step 2.2, A1, L3]

4.1 **An upper bound for $t$ near $c$.** Let $\varepsilon > 0$ be real, take $N \ge 1$ with $1/\iota(N) < \varepsilon$ and put $\delta := \delta_{N}(c)$. Every $x \in N_\delta(c)$ satisfies $0 \le t(x) \le M$ where $M := \max\{t(c), \varepsilon\}$: for $x = c$ this is $t(c) \le M$; for $x \ne c$ rational it is $t(x) < 1/\iota(N) < \varepsilon \le M$ by step 3.1; and for $x$ irrational it is $t(x) = 0$. [step 3.1, A1, L3, L6]

5.1 Hence $\omega_{t}(N_\delta(c)) \le M$ with $\delta$ and $M$ as in step 4.1, since $|t(x) - t(y)| \le M$ for all $x, y \in N_\delta(c)$, so $M$ is an upper bound of the set whose supremum $\omega_{t}(N_\delta(c))$ is; and therefore $\omega_{t}(c) \le M = \max\{t(c), \varepsilon\}$. [step 4.1, L5, L6]

6.1 Claim 2 now follows in the two cases of the value $t(c)$, which are exactly the two cases of the position of $c$. If $c$ is rational then $t(c) > 0$, and applying step 5.1 with the admissible choice $\varepsilon := t(c)$ gives $\omega_{t}(c) \le \max\{t(c), t(c)\} = t(c)$; with step 1.3 this gives $\omega_{t}(c) = t(c)$. [step 5.1, step 1.3, A1, assume-case rat]

6.2 If $c$ is irrational then $t(c) = 0$, and step 5.1 gives $\omega_{t}(c) \le \max\{0, \varepsilon\} = \varepsilon$ for every real $\varepsilon > 0$; since also $\omega_{t}(c) \ge 0$, an extended real that is $\le \varepsilon$ for every positive real $\varepsilon$ and $\ge 0$ must be $0$, so $\omega_{t}(c) = 0 = t(c)$. [step 5.1, step 1.3, A1, L5, assume-case irr]

7.1 Every real is rational or irrational and not both, so steps 6.1 and 6.2 establish claim 2 for every real $c$. [step 6.1, step 6.2, cases-exhaustive]

8.1 Claim 3 follows from claim 2: $t$ is continuous at $c$ exactly when $\omega_{t}(c) = 0$, that is exactly when $t(c) = 0$, that is exactly when $c$ is irrational. So the continuity set of $t$ is $\mathbb{R} \setminus \mathbb{Q}$ and its discontinuity set is $\mathbb{Q}$. [step 7.1, A1, L5] ∎

## Remarks

- **What claim 2 adds beyond claim 3.** Continuity at a point is the vanishing of the oscillation there, so claim 3 is the special case of claim 2 recording where the value is $0$. The value itself is used on the companion page, where the oscillation of $t$ is computed at particular points, and it shows that the failure of continuity at a rational is exactly as large as the value of $t$ there: small denominators are the bad points.

- **The continuity set of $t$ is $G_\delta$, as it must be.** The irrationals form a $G_\delta$ set ([[cor-q-is-meager-and-not-g-delta]]), in agreement with [[thm-discontinuity-set-is-f-sigma]]. The reverse arrangement is impossible: no function is continuous at every rational and discontinuous at every irrational, because $\mathbb{Q}$ is not $G_\delta$ ([[cor-no-function-is-continuous-exactly-on-q]]).

- **No choice principle is spent.** The separation estimate of step 1.2 is written down from $\lfloor \iota(q)c \rfloor$, the minimum of step 2.1 is the minimum of an explicitly listed finite set, and the least denominator $q(x)$ is a least element. Density supplies points, and it is used only in the form "every neighbourhood meets the set", never to build a sequence.
