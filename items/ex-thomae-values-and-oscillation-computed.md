---
id: ex-thomae-values-and-oscillation-computed
kind: example
title: "Thomae's function computed: $t(1/2) = 1/2$, $t(2/3) = 1/3$, $t(m) = 1$ at every integer $m$, $t(x) = 0$ at every irrational, and $\\omega_t(c) = t(c)$ at every real $c$"
status: published
origin: session
deps: [def-dirichlet-and-thomae-functions, thm-dirichlet-and-thomae-continuity-sets, def-oscillation, thm-continuity-iff-oscillation-zero, lem-q-and-irrationals-dense-r, lem-rat-embeds-dense, lem-integer-part, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
short: "Thomae's function computed"
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
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
pipeline_run: null
---

## Example

Let $t$ be Thomae's function ([[def-dirichlet-and-thomae-functions]]), so that
$t(x) = 1/\iota(q(x))$ at a rational $x$ with least denominator $q(x)$ and
$t(x) = 0$ at an irrational $x$. Then:

1. $t(0) = 1$ and $t(m) = 1$ for every integer $m$;
2. $t(1/2) = 1/2$, and more generally $t(1/\iota(q)) = 1/\iota(q)$ for every
   natural $q \ge 1$;
3. $t(2/3) = 1/3$;
4. $t(x) = 0$ at every irrational $x$;
5. $\omega_{t}(c) = t(c)$ at every real $c$ ([[def-oscillation]]), so
   $\omega_{t}$ is $1$ at every integer, $1/2$ at every half-integer that is not
   an integer, and $0$ at every irrational.

Claim 5 is claim 2 of [[thm-dirichlet-and-thomae-continuity-sets]] evaluated at
the points computed here; nothing new is proved about the oscillation, and the
point of the example is to see the numbers.

## Facts & Assumptions

**Given:** Thomae's function $t$, with $q(x) = \min\{\, q \in \mathbb{N} : q \ge 1 \text{ and } \iota(q)x \in \mathbb{Z} \,\}$ for rational $x$; $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}$ are the canonical copies and $\iota(q)$ is the canonical natural ([[lem-rat-embeds-dense]], [[def-canonical-natural]]).

[A1] $t(x) = 1/\iota(q(x))$ for $x \in \mathbb{Q}$ and $t(x) = 0$ for $x \notin \mathbb{Q}$ ([[def-dirichlet-and-thomae-functions]]).

[L1] $\omega_{t}(c) = t(c)$ for every real $c$ ([[thm-dirichlet-and-thomae-continuity-sets]], claim 2); and $t$ is continuous at $c$ exactly when $\omega_{t}(c) = 0$ ([[thm-continuity-iff-oscillation-zero]], [[def-oscillation]]).

[L2] No integer lies strictly between $m$ and $m+1$; equivalently a real of the form $k/\iota(q)$ with $0 < k < q$ naturals is not an integer, lying strictly between $0$ and $1$ ([[lem-integer-part]], [[lem-of-naturals-positive]]).

[L3] There exist irrational reals, the irrationals being dense in $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1: for an integer $m$ one has $\iota(1)\,m = m \in \mathbb{Z}$, so $1 \in Q(m)$ and $q(m) = 1$, the least element of a set of naturals $\ge 1$ containing $1$; hence $t(m) = 1/\iota(1) = 1$. The case $m = 0$ is included. [A1, L2]

1.2 Claim 2: let $q \ge 1$ be a natural and put $x := 1/\iota(q)$. Then $\iota(q)x = 1 \in \mathbb{Z}$, so $q \in Q(x)$ and $q(x) \le q$. Conversely, if $1 \le k \le q$ is a natural with $\iota(k)x = \iota(k)/\iota(q) \in \mathbb{Z}$, then $k < q$ would put $\iota(k)/\iota(q)$ strictly between $0$ and $1$, which no integer is; so $k = q$. Hence $q(x) = q$ and $t(1/\iota(q)) = 1/\iota(q)$. Taking $q = 2$ gives $t(1/2) = 1/2$. [A1, L2]

1.3 Claim 3: put $x := 2/3$. Then $\iota(3)x = 2 \in \mathbb{Z}$, so $q(x) \le 3$. Also $\iota(1)x = 2/3$ lies strictly between $0$ and $1$ and so is not an integer, and $\iota(2)x = 4/3$ lies strictly between $1$ and $2$ and so is not an integer. Hence $q(x) = 3$ and $t(2/3) = 1/3$. [A1, L2]

1.4 Claim 4 is the second clause of the definition of $t$, and irrational reals exist. [A1, L3]

2.1 Claim 5: $\omega_{t}(c) = t(c)$ at every real $c$. At an integer $m$ this is $1$ by step 1.1; at a real of the form $m + 1/2$ with $m$ an integer, the least denominator is $2$, by the same computation as in step 1.2 applied to $\iota(2)(m + 1/2) = 2m + 1 \in \mathbb{Z}$ together with $\iota(1)(m + 1/2) = m + 1/2$ lying strictly between $m$ and $m+1$, so the value is $1/2$; and at an irrational it is $0$. [step 1.1, step 1.2, step 1.4, A1, L1, L2]

3.1 In particular $t$ is continuous at every irrational, where $\omega_{t} = 0$, and discontinuous at every rational, where $\omega_{t} = t > 0$; the numbers above are the sizes of those failures. [step 2.1, A1, L1] ∎

## Remarks

- **The least denominator is what the values record.** $t$ is large exactly at
  the rationals with small denominators, and those are sparse: every point with least
  denominator $q$ is a multiple of $1/\iota(q)$, and consecutive multiples of
  $1/\iota(q)$ are $1/\iota(q)$ apart. The
  graph is the familiar picture of tall spikes at the integers, half as tall at
  the half-integers, and so on down.

- **Every value $1/\iota(q)$ is attained**, by step 1.2, so the range of $t$ is
  exactly $\{0\} \cup \{\, 1/\iota(q) : q \in \mathbb{N},\ q \ge 1 \,\}$; the
  value $0$ is attained at every irrational.
