---
id: def-fat-cantor-set
kind: definition
title: "The Smith-Volterra-Cantor set: the same construction removing, at stage $n \\ge 1$, an open middle interval of length $4^{-n}$ from each of the $2^{n-1}$ remaining intervals"
status: published
origin: session
deps: [def-cantor-set, def-interval, thm-recursion, thm-induction-principle, def-integer-power, lem-power-laws, def-finite-sum, lem-finite-sum-laws, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, def-series, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: [def-smith-volterra-cantor-set]
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
pipeline_run: null
---

## Definition

**The lengths.** By the recursion theorem in the index-carrying form used by
[[def-finite-sum]] ([[thm-recursion]], applied to $\mathbb{N} \times \mathbb{R}$
with starting element $(0,1)$ and the map
$(n,t) \mapsto (n+1,\, (t - 4^{-n-1}) \cdot 2^{-1})$) there is a unique sequence
$(\lambda_n)_{n \in \mathbb{N}}$ of reals with

$$\lambda_0 = 1, \qquad \lambda_{n+1} = (\lambda_n - 4^{-n-1}) \cdot 2^{-1} \quad (n \in \mathbb{N}),$$

powers being those of [[def-integer-power]]. Put $g_n := \lambda_n - \lambda_{n+1}$.

**The left endpoints.** Let $\mathcal{F}$ be the set of pairs $(N, \ell)$ with
$N \in \mathbb{N}$, $N \ge 1$, and $\ell$ a function from
$\{\, j \in \mathbb{N} : j < N \,\}$ to $\mathbb{R}$; such a pair is a *finite
list of reals of length $N$*. Applying [[thm-recursion]] to
$\mathbb{N} \times \mathcal{F}$, the starting element $(0, (1, \ell^{(0)}))$ with
$\ell^{(0)}_0 := 0$, and the map that sends $(n, (N,\ell))$ to
$(n+1, (N + N, \ell'))$ where

$$\ell'_j := \ell_j \ \ (j < N), \qquad \ell'_j := \ell_{j - N} + g_n \ \ (N \le j < N + N),$$

gives a unique family $(N_n, \ell^{(n)})_{n \in \mathbb{N}}$ of finite lists,
with $N_0 = 1$, $N_{n+1} = N_n + N_n$, and $\ell^{(n+1)}$ the concatenation of
$\ell^{(n)}$ with its translate by $g_n$. Write $e^{(n)}_j := \ell^{(n)}_j$.

**The sets.** For $n \in \mathbb{N}$ put

$$S_n \;:=\; \bigcup_{j < N_n} \big[\, e^{(n)}_j,\ e^{(n)}_j + \lambda_n \,\big], \qquad S \;:=\; \bigcap_{n \in \mathbb{N}} S_n ,$$

the intervals being those of [[def-interval]]. $S$ is the
**Smith-Volterra-Cantor set**, also called the *fat Cantor set*.

**Counting.** For every $n$ and every real $c$ one has
$\sum_{j < N_n} c = 2^{n} c$, by induction on $n$ ([[thm-induction-principle]]):
at $n = 0$ both sides are $c$; and $\sum_{j<N_n + N_n} c = \sum_{j<N_n} c +
\sum_{j<N_n} c = 2^{n}c + 2^{n}c = 2^{n+1}c$, by the splitting law
([[lem-finite-sum-laws]], [[def-finite-sum]]) and
$2^{n+1} = 2^{n} \cdot 2 = 2^{n} + 2^{n}$ ([[def-integer-power]],
[[def-ordered-field]]). So stage $n$ has "$2^n$ intervals" in exactly this sense,
and no separate arithmetic of natural-number exponents is needed.

**The lengths are positive and shrink.** By induction on $n$:
$0 < \lambda_{n+1} \le \lambda_n \cdot 2^{-1}$ and $2^{n}\lambda_n \ge 2^{-1}$.
Indeed $2^{n+1}\lambda_{n+1} = 2^{n}(\lambda_n - 4^{-n-1}) = 2^{n}\lambda_n -
4^{-1} \cdot 2^{-n}$ by [[lem-power-laws]], so by induction
$2^{n}\lambda_n = 1 - 4^{-1}\sum_{i<n} 2^{-i} \ge 1 - 4^{-1} \cdot 2 = 2^{-1}$,
using $\sum_{i<n}2^{-i} \le \sum_{i=0}^{\infty} 2^{-i} = 2$
([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]],
[[def-series]]). Hence $\lambda_n \ge 2^{-n-1} > 0$; and
$\lambda_{n+1} = (\lambda_n - 4^{-n-1})\cdot 2^{-1} \le \lambda_n \cdot 2^{-1}$
gives $\lambda_n \le 2^{-n}$ by a second induction, so the lengths tend to $0$.

**Each stage removes an open middle interval of length $4^{-n-1}$.** From the
recursion, the two sub-intervals of $[e,\, e + \lambda_n]$ retained at stage
$n+1$ are $[e,\, e + \lambda_{n+1}]$ and $[e + g_n,\, e + g_n + \lambda_{n+1}] =
[e + g_n,\, e + \lambda_n]$, so what is dropped from that piece is the open
interval

$$M \;=\; \big(\, e + \lambda_{n+1},\ e + g_n \,\big), \qquad \text{of length } \ g_n - \lambda_{n+1} \;=\; \lambda_n - 2\lambda_{n+1} \;=\; 4^{-n-1} .$$

In particular $\lambda_{n+1} < g_n$, so $M$ is nonempty, and $g_n > 0$, so
$[e + g_n, e + \lambda_n] \subseteq [e, e+\lambda_n]$. Counting from $1$ as in
the title: at stage $n \ge 1$ an open interval of length $4^{-n}$ is removed from
each of the $2^{n-1}$ intervals then present.

**The family is nested and lies in $[0,1]$.** Each retained sub-interval is
contained in the piece it came from, by the previous paragraph, so
$S_{n+1} \subseteq S_n$; and $S_0 = [0, 1]$ since $N_0 = 1$, $e^{(0)}_0 = 0$ and
$\lambda_0 = 1$. Hence $S \subseteq S_m \subseteq [0,1]$ for every $m$.

## Remarks

- **What is different from [[def-cantor-set]].** There the removed middle is a
  fixed *proportion* of each piece, so the construction is self-similar and the
  total removed length is $1$. Here the removed middle has a fixed *length*
  $4^{-n-1}$, chosen to shrink faster than the pieces multiply, and the total
  removed length is only $2^{-1}$. Everything topological survives the change:
  the set is still compact, perfect and nowhere dense
  ([[thm-fat-cantor-set-has-positive-measure]]). Everything metric fails: $S$ is
  not of measure zero.

- **Why the construction is written with explicit lists.** The set $S_n$ is a
  union of $2^n$ intervals, and both the estimate of the removed length and the
  finite covers used later need those intervals as a *list*, indexed by naturals
  below $N_n$. Building the list by recursion, rather than asserting its
  existence at each stage, is also what keeps the construction free of any
  choice: $(N_n, \ell^{(n)})$ is a single function of $n$.

- **The name.** The set was described by Smith in 1875, by Volterra in 1881 and
  by Cantor in 1883; "fat Cantor set" is the informal name, and the two names are
  used interchangeably below.

- **$0$ and $1$ belong to $S$.** Both are instances of the general fact that
  every $e^{(n)}_j$ and every $e^{(n)}_j + \lambda_n$ lies in $S$, proved where it
  is used, in [[thm-fat-cantor-set-has-positive-measure]]: take $n = 0$ and
  $j = 0$, where $e^{(0)}_0 = 0$ and $e^{(0)}_0 + \lambda_0 = 1$.
