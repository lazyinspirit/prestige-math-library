---
id: fs-closed-and-bounded-implies-compact-in-every-metric-space
kind: false-statement
title: "FALSE: a closed and bounded subset of a metric space is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, def-metric-compactness-variants, thm-compact-subset-is-closed-and-bounded, thm-compact-implies-complete-and-totally-bounded, thm-heine-borel-rn, def-totally-bounded, def-metric-space, def-metric-bounded-diameter, def-metric-ball, def-metric-topology, def-natural-numbers, def-canonical-natural, thm-of-archimedean, lem-finite-set-has-max, def-max-min]
justified_by: []
forward_refs: [cex-bounded-not-totally-bounded, cex-closed-and-bounded-not-compact-in-the-sup-metric]
aliases: []
landmark: false
short: "FALSE: closed + bounded implies compact"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
pipeline_run: null
---

## Statement

**False claim:** in every metric space $(X,d)$ ([[def-metric-space]]), a subset
that is closed in $X$ ([[def-metric-topology]]) and bounded
([[def-metric-bounded-diameter]]) is a compact subset of $X$
([[def-metric-compactness]]).

**Where the claim comes from, and what is actually true.** One half of the
Heine-Borel property does hold in every metric space: a compact subset is closed
and bounded ([[thm-compact-subset-is-closed-and-bounded]]). The converse holds in
$\mathbb{R}^n$ with the Euclidean metric ([[thm-heine-borel-rn]]), and the claim
above is that reading of Heine-Borel transplanted to an arbitrary metric space,
where it fails. What survives in general is that a compact space is complete and
totally bounded ([[thm-compact-implies-complete-and-totally-bounded]]), and it is
total boundedness, not boundedness, that the witness below lacks.

The refutation builds its own witness: the set $\mathbb{N}$ carrying the metric
that assigns distance $1$ to distinct points.

## Facts & Assumptions

**Given:** The set $\mathbb{N}$ of natural numbers ([[def-natural-numbers]]) and the function $d : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ with $d(m,n) = 0$ for $m = n$ and $d(m,n) = 1$ for $m \ne n$.

[A1] The false claim: in every metric space a closed bounded subset is compact.

[L1] A metric on a set is a real-valued function satisfying (M1) $d(x,y) = 0$ exactly when $x = y$, (M2) $d(x,y) = d(y,x)$ and (M3) $d(x,z) \le d(x,y) + d(y,z)$ ([[def-metric-space]]).

[L2] $B(x,r) = \{y : d(x,y) < r\}$; a set is open when each of its points has a ball around it inside it; a set is closed when its complement is open; and a subset is bounded when it is empty or lies in a ball ([[def-metric-ball]], [[def-metric-topology]], [[def-metric-bounded-diameter]]).

[L3] A subset $A$ of a metric space is compact exactly when the metric subspace $(A,d_A)$ is a compact metric space; and a compact metric space has, for every family of open subsets with union the space, a finite subfamily with union the space ([[def-metric-compactness]]).

[L4] A nonempty finite set of reals has a maximum, one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] For every real $M$ there is a natural $N \ge 1$ with $M < \iota(N)$, where $\iota$ is the canonical natural of $\mathbb{R}$ ([[thm-of-archimedean]], [[def-canonical-natural]]).

## Refutation

**Proof technique:** direct.

1.1 $d$ is a metric on $\mathbb{N}$: (M1) holds because $d(m,n) = 0$ was defined to mean $m = n$; (M2) because the defining condition is symmetric in $m$ and $n$; and (M3) because the left side is $0$ or $1$, and when it is $1$ one has $x \ne z$, so $y$ differs from at least one of $x$ and $z$ and the right side is at least $1$. [L1]

2.1 In $(\mathbb{N},d)$ one has $B(n,1) = \{n\}$, since $d(n,m) < 1$ forces $d(n,m) = 0$ and hence $m = n$; consequently every subset of $\mathbb{N}$ is open, each of its points $n$ having $B(n,1)$ inside it, and every subset is closed as well. [L2, step 1.1]

3.1 $\mathbb{N}$ is a closed subset of the metric space $(\mathbb{N},d)$, and it is bounded, since $d(0,n) \le 1 < 2$ for every $n$ gives $\mathbb{N} = B(0,2)$. [L2, step 2.1]

3.2 The family $(B(n,1))_{n \in \mathbb{N}}$ consists of open subsets of $\mathbb{N}$ and has union $\mathbb{N}$, because $n \in B(n,1)$ for every $n$. [L2, step 2.1]

4.1 No finite subfamily has union $\mathbb{N}$: such a subfamily is $B(n_0,1), \dots, B(n_k,1)$ for some $k \in \mathbb{N}$ and naturals $n_0, \dots, n_k$, with union $\{n_0, \dots, n_k\}$ by step 2.1; the reals $\iota(n_0), \dots, \iota(n_k)$ have a maximum $M$, and a natural $N \ge 1$ with $M < \iota(N)$ then satisfies $\iota(N) \ne \iota(n_i)$ and hence $N \ne n_i$ for every $i \le k$, so $N$ lies in $\mathbb{N}$ and in no member of the subfamily. [L4, L5, step 2.1, step 3.2]

5.1 Hence $(\mathbb{N},d)$ is not a compact metric space, so $\mathbb{N}$ is a closed and bounded subset of the metric space $(\mathbb{N},d)$ that is not compact, and the claim [A1] is false. [A1, L3, step 3.1, step 3.2, step 4.1] ∎

## Remarks

**What the witness fails is total boundedness, not boundedness.** The space $(\mathbb{N},d)$ has diameter $1$, so it is as bounded as a nonempty space can be; but a finite $1/2$-net would have to contain every point, and $\mathbb{N}$ is not finite ([[cex-bounded-not-totally-bounded]], [[fs-bounded-implies-totally-bounded]]). Since a compact space is totally bounded ([[thm-compact-implies-complete-and-totally-bounded]]), that alone already settles non-compactness; the explicit cover of step 3.2 is given because it makes the failure visible without any theory.

**The witness is complete, so completeness is not the missing ingredient either.** In $(\mathbb{N},d)$ a Cauchy sequence is eventually constant, hence convergent, so this is a complete, bounded, closed space that is not compact. The pair that *is* equivalent to compactness is completeness together with total boundedness ([[thm-metric-compactness-equivalences]]).

**A second, analytically natural witness** is the closed unit ball of the bounded real-valued functions on $\mathbb{N}$ under the supremum metric, where the indicator functions of the singletons are pairwise at distance $1$ ([[cex-closed-and-bounded-not-compact-in-the-sup-metric]]).
