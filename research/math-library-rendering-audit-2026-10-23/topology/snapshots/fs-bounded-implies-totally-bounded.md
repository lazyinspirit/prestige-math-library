---
id: fs-bounded-implies-totally-bounded
kind: false-statement
title: "FALSE: a bounded metric space is totally bounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-totally-bounded, lem-totally-bounded-basic, def-metric-compactness, def-metric-bounded-diameter, def-metric-space, def-metric-ball, def-natural-numbers, def-countable, def-canonical-natural, thm-of-archimedean, lem-finite-set-has-max, def-max-min]
justified_by: []
forward_refs: [cex-bounded-not-totally-bounded]
aliases: []
landmark: false
short: "FALSE: bounded implies totally bounded"
proof_strategy: direct
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
    - title: "Totally bounded space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_bounded_space"
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
pipeline_run: null
---

## Statement

**False claim:** every bounded metric space ([[def-metric-bounded-diameter]],
[[def-metric-space]]) is totally bounded ([[def-totally-bounded]]).

**Where the claim comes from, and what is actually true.** The implication holds
in the other direction: a totally bounded metric space is bounded, which is claim
1 of [[lem-totally-bounded-basic]]. The claim above is its converse, and the
converse fails. Boundedness asks for one ball containing the space; total
boundedness asks for finitely many balls of *every* prescribed radius, and no
amount of shrinking the diameter forces the second condition.

The refutation builds its witness: the set $\mathbb{N}$ carrying the metric that
assigns distance $1$ to distinct points.

## Facts & Assumptions

**Given:** The set $\mathbb{N}$ ([[def-natural-numbers]]) and the function $d$ with $d(m,n) = 0$ for $m = n$ and $d(m,n) = 1$ for $m \ne n$.

[A1] The false claim: every bounded metric space is totally bounded.

[L1] A metric satisfies (M1) $d(x,y) = 0$ exactly when $x = y$, (M2) symmetry and (M3) the triangle inequality ([[def-metric-space]]).

[L2] $B(x,r) = \{y : d(x,y) < r\}$, and a space is bounded when it is empty or is contained in a ball ([[def-metric-ball]], [[def-metric-bounded-diameter]]).

[L3] A finite $\varepsilon$-net is a finite $F \subseteq X$ with $X = \bigcup_{y \in F} B(y,\varepsilon)$, and a space is totally bounded when it has one for every real $\varepsilon > 0$; a nonempty finite set can be listed as $\{n_0, \dots, n_k\}$ ([[def-totally-bounded]], [[def-metric-compactness]], [[def-countable]]).

[L4] A nonempty finite set of reals has a maximum, one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] For every real $M$ there is a natural $N \ge 1$ with $M < \iota(N)$, where $\iota$ is the canonical natural of $\mathbb{R}$ ([[thm-of-archimedean]], [[def-canonical-natural]]).

## Refutation

**Proof technique:** direct.

1.1 $d$ is a metric on $\mathbb{N}$: (M1) holds by the definition of $d$; (M2) because the defining condition is symmetric; and (M3) because the left side is $0$ or $1$, and if it is $1$ then $x \ne z$, so $y$ differs from at least one of $x$ and $z$ and the right side is at least $1$. [L1]

2.1 $(\mathbb{N},d)$ is bounded: $d(0,n) \le 1 < 2$ for every $n$, so $\mathbb{N} = B(0,2)$. [L2, step 1.1]

2.2 In $(\mathbb{N},d)$ one has $B(y,1/2) = \{y\}$, since $d(y,n) < 1/2$ forces $d(y,n) = 0$ and hence $n = y$. [L2, step 1.1]

3.1 Suppose $F$ were a finite $1/2$-net for $(\mathbb{N},d)$; then $\mathbb{N} = \bigcup_{y \in F} B(y,1/2) = \bigcup_{y \in F}\{y\} = F$, so $\mathbb{N}$ would be finite, and being nonempty it could be listed as $\mathbb{N} = \{n_0, \dots, n_k\}$. [L3, step 2.2]

4.1 The reals $\iota(n_0), \dots, \iota(n_k)$ then have a maximum $M$, and a natural $N \ge 1$ with $M < \iota(N)$ satisfies $\iota(N) \ne \iota(n_i)$ and hence $N \ne n_i$ for every $i \le k$, so $N$ is a natural number outside $\{n_0, \dots, n_k\} = \mathbb{N}$, which is impossible. [L4, L5, step 3.1]

5.1 So no finite $1/2$-net exists, $(\mathbb{N},d)$ is a bounded metric space that is not totally bounded, and the claim [A1] is false. [A1, L3, step 2.1, step 3.1, step 4.1] ∎

## Remarks

**Diameter is not a measure of how spread out a space is at small scales.** The witness has diameter $1$, and yet every ball of radius $1/2$ contains a single point, so no finite family of them can cover an infinite space. Total boundedness is exactly the condition that rules this out, and it is what makes the pair "complete and totally bounded" equivalent to compactness ([[thm-metric-compactness-equivalences]]).

**The same witness refutes more.** Because it is complete and closed in itself, it also shows that a closed bounded subset of a metric space need not be compact ([[fs-closed-and-bounded-implies-compact-in-every-metric-space]]). The counterexample page records it once, in [[cex-bounded-not-totally-bounded]].

**In $\mathbb{R}^n$ the claim is true**, since a bounded subset lies in a box and a box is compact, hence totally bounded ([[thm-heine-borel-rn]], [[thm-compact-implies-complete-and-totally-bounded]]). What fails is the general metric statement, and the witness is a space whose points are pairwise equidistant, which is exactly what the geometry of $\mathbb{R}^n$ forbids for infinitely many points at once.
