---
id: ex-indicator-of-q-is-baire-class-two-not-one
kind: example
title: "The Dirichlet function is the pointwise limit of a sequence of Baire class one functions and is itself not Baire class one, so the Baire hierarchy on $[0,1]$ is already strict at the first level"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-dirichlet-and-thomae-functions, def-baire-class-one, thm-baire-one-continuity-points, thm-dirichlet-and-thomae-continuity-sets, thm-rationals-countable, lem-q-and-irrationals-dense-r, def-continuity-real, thm-algebra-of-continuous-functions, def-real-limit, def-sequence, def-countable, def-interval, def-max-min, lem-finite-set-has-max, lem-countable-iff-surjection-from-n, lem-rat-embeds-dense, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, lem-of-abs-value, def-neighbourhood-r, thm-closure-characterisations-r]
justified_by: []
aliases: []
landmark: false
short: "the Baire hierarchy is strict at level one"
proof_strategy: contradiction
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
    - title: "Baire function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_function"
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
pipeline_run: null
---

## Example

Let $D : [0,1] \to \mathbb{R}$ be the restriction to $[0,1]$
([[def-interval]]) of the Dirichlet function
([[def-dirichlet-and-thomae-functions]]), so $D(x) = 1$ at a rational $x$ and
$D(x) = 0$ at an irrational $x$. Then:

1. $D$ is the pointwise limit on $[0,1]$ of a sequence $(g_m)_{m \in \mathbb{N}}$
   of functions each of which **is** of Baire class one on $[0,1]$
   ([[def-baire-class-one]]), namely the indicators of the finite sets
   $\{s(0), \dots, s(m)\}$ for a fixed surjection
   $s : \mathbb{N} \to \mathbb{Q} \cap [0,1]$;
2. $D$ is **not** of Baire class one on $[0,1]$.

So the class of pointwise limits of sequences of Baire class one functions is
strictly larger than the class of Baire class one functions. That larger class
is classically called Baire class two; no definition of it is given in this
library and none is used, the statement above being phrased entirely in terms of
pointwise limits ([[def-baire-class-one]]).

## Facts & Assumptions

**Given:** The Dirichlet function restricted to $[0,1]$, written $D$, and $\mathbb{Q}$ for the canonical copy of the rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]).

[A1] $D(x) = 1$ for $x \in \mathbb{Q} \cap [0,1]$ and $D(x) = 0$ for $x \in [0,1] \setminus \mathbb{Q}$ ([[def-dirichlet-and-thomae-functions]]).

[L1] $\mathbb{Q} \cap [0,1]$ is nonempty and at most countable, so it is the image of a surjection $s : \mathbb{N} \to \mathbb{Q} \cap [0,1]$ ([[thm-rationals-countable]], [[def-countable]], [[lem-countable-iff-surjection-from-n]], [[lem-rat-embeds-dense]]).

[L2] Both $\mathbb{Q}$ and $\mathbb{R} \setminus \mathbb{Q}$ are dense in $\mathbb{R}$, so every nondegenerate interval contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L3] A Baire class one function on $[a,b]$ with $a < b$ is continuous at the points of a set that is dense in $[a,b]$ ([[thm-baire-one-continuity-points]], claim 3).

[L4] Sums, scalar multiples, maxima and minima of continuous functions are continuous, as are constants and the identity ([[thm-algebra-of-continuous-functions]], claims 1, 3 and 5); continuity at a point is the $\varepsilon$-$\delta$ condition of [[def-continuity-real]], and a Lipschitz function is continuous.

[L5] A nonempty finite set of reals presented as $\{a_{0}, \dots, a_{m}\}$ has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] For every real $\eta > 0$ there is a natural $n \ge 1$ with $\iota(n) > \eta$, and $\iota$ is positive and strictly increasing on the naturals $\ge 1$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L7] $|u - w| \le |u - v| + |v - w|$ and $|u| \ge 0$ ([[lem-of-abs-value]]); a sequence of reals converges to $L$ when it is eventually within every positive $\varepsilon$ of $L$ ([[def-real-limit]], [[def-sequence]]).

[L8] The Dirichlet function on $\mathbb{R}$ is continuous at no point ([[thm-dirichlet-and-thomae-continuity-sets]], claim 1).

## Verification

**Proof technique:** contradiction.

1.1 Fix a surjection $s : \mathbb{N} \to \mathbb{Q} \cap [0,1]$ and, for $m \in \mathbb{N}$, let $g_{m} : [0,1] \to \mathbb{R}$ be the indicator of $\{s(0), \dots, s(m)\}$: $g_{m}(x) = 1$ if $x = s(j)$ for some $j \le m$, and $g_{m}(x) = 0$ otherwise. [L1, construct]

1.2 Suppose, for contradiction, that $D$ is of Baire class one on $[0,1]$. [assume-contra]

1.3 But $D$ is continuous at no point of $[0,1]$. Let $c \in [0,1]$ and let $\delta > 0$ be real; put $u := \max\{0,\ c - \delta/2\}$ and $v := \min\{1,\ c + \delta/2\}$, so that $u < v$ and $[u,v] \subseteq [0,1] \cap N_{\delta}(c)$, the strict inequality holding because $c \in [0,1]$, $0 < 1$ and $\delta > 0$. The nondegenerate interval $(u,v)$ contains a rational $y_{1}$ and an irrational $y_{2}$, with $D(y_{1}) - D(y_{2}) = 1$, so one of $|D(y_{1}) - D(c)|$ and $|D(y_{2}) - D(c)|$ equals $1$; hence no $\delta$ witnesses continuity at $c$ for $\varepsilon = 1$. This is the argument of the Dirichlet claim, restricted to the domain $[0,1]$. [A1, L2, L7, L8]

2.1 For $m \in \mathbb{N}$ define $\rho_{m} : [0,1] \to \mathbb{R}$ by $\rho_{m}(x) := \min\{\, |x - s(j)| : j \le m \,\}$, the minimum of a nonempty finite set of reals. Then $\rho_{m}(x) \ge 0$, and $\rho_{m}(x) = 0$ exactly when $x = s(j)$ for some $j \le m$, the minimum being attained. [step 1.1, L5, L7]

2.2 Then the set of points of $[0,1]$ at which $D$ is continuous is dense in $[0,1]$, since $0 < 1$; in particular it is nonempty. [step 1.2, L3]

3.1 $\rho_{m}$ is $1$-Lipschitz, hence continuous: choosing $j_{0} \le m$ with $\rho_{m}(x) = |x - s(j_{0})|$ gives $\rho_{m}(y) \le |y - s(j_{0})| \le |y - x| + \rho_{m}(x)$, and exchanging $x$ and $y$ gives $|\rho_{m}(x) - \rho_{m}(y)| \le |x - y|$; so $\delta := \varepsilon$ witnesses continuity at every point. [step 2.1, L4, L5, L7]

4.1 For $m, n \in \mathbb{N}$ define $h_{m,n} : [0,1] \to \mathbb{R}$ by $h_{m,n}(x) := \max\{\, 0,\ 1 - \iota(n)\,\rho_{m}(x) \,\}$; the index runs over the whole of $\mathbb{N}$, the term at $n = 0$ being the constant $1$ since $\iota(0) = 0$, so that $n \mapsto h_{m,n}$ is a sequence in the sense of [[def-sequence]]. Each $h_{m,n}$ is continuous on $[0,1]$, being the pointwise maximum of the constant $0$ and the continuous function $x \mapsto 1 - \iota(n)\rho_{m}(x)$. [step 3.1, L4, L6]

5.1 For each fixed $m$ the sequence $n \mapsto h_{m,n}$ converges pointwise on $[0,1]$ to $g_{m}$. If $\rho_{m}(x) = 0$ then $h_{m,n}(x) = \max\{0,1\} = 1 = g_{m}(x)$ for every $n$. If $\rho_{m}(x) > 0$ then, taking a natural $n_{0} \ge 1$ with $\iota(n_{0}) > 1/\rho_{m}(x)$, every $n \ge n_{0}$ has $\iota(n)\rho_{m}(x) \ge \iota(n_{0})\rho_{m}(x) > 1$, so $h_{m,n}(x) = 0 = g_{m}(x)$. [step 2.1, step 4.1, L6, L7]

6.1 Hence each $g_{m}$ is of Baire class one on $[0,1]$, being the pointwise limit of a sequence of continuous functions. [step 4.1, step 5.1]

7.1 The sequence $(g_{m})_{m \in \mathbb{N}}$ converges pointwise on $[0,1]$ to $D$. If $x \in \mathbb{Q} \cap [0,1]$ then $x = s(k)$ for some $k$, since $s$ is onto, and $g_{m}(x) = 1 = D(x)$ for every $m \ge k$. If $x \in [0,1]$ is irrational then $x \ne s(j)$ for every $j$, so $g_{m}(x) = 0 = D(x)$ for every $m$. Claim 1 is proved. [step 1.1, step 6.1, A1, L1, L7]

8.1 Steps 2.2 and 1.3 contradict one another, so the assumption of step 1.2 is false and $D$ is not of Baire class one on $[0,1]$: claim 2 holds, and with step 7.1 the example is complete. [step 7.1, step 1.2, step 2.2, step 1.3, discharge-contradiction] ∎

## Remarks

- **Why the restriction to $[0,1]$.** [[thm-baire-one-continuity-points]] is stated on a closed bounded interval, and that is where the category argument lives; the same conclusion holds on $\mathbb{R}$ by applying it on each $[-\iota(n), \iota(n)]$, but nothing below needs that and it is not claimed here.

- **The two limits are of different kinds and the order matters.** $D$ is a double pointwise limit: $h_{m,n} \to g_{m}$ as $n$ grows, and $g_{m} \to D$ as $m$ grows. Claim 2 says the two cannot be collapsed into one: no single sequence of continuous functions converges pointwise to $D$.

- **The failing hypothesis, named exactly.** What obstructs Baire class one is the density of the continuity set, and $D$ has an **empty** continuity set ([[thm-dirichlet-and-thomae-continuity-sets]]). Thomae's function, by contrast, is continuous at every irrational and so is not excluded by this argument.
