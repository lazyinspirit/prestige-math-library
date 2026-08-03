---
id: cex-bounded-not-totally-bounded
kind: counterexample
title: "$\\mathbb{N}$ with the discrete metric is bounded and is not totally bounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [fs-bounded-implies-totally-bounded, ex-discrete-metric-compact-iff-finite, def-totally-bounded, lem-totally-bounded-basic, def-metric-bounded-diameter, def-metric-space, def-metric-ball, def-natural-numbers, def-countable, def-canonical-natural, thm-of-archimedean, lem-finite-set-has-max, def-max-min, def-metric-compactness]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
short: "bounded, not totally bounded"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Totally bounded space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_bounded_space"
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every bounded metric space is totally bounded
([[fs-bounded-implies-totally-bounded]]).

The witness is $\mathbb{N}$ ([[def-natural-numbers]]) with the discrete metric
$d(m,n) = 0$ for $m = n$ and $d(m,n) = 1$ for $m \ne n$
([[ex-discrete-metric-compact-iff-finite]]). It is bounded
([[def-metric-bounded-diameter]]), lying inside the ball $B(0,2)$; it is not
totally bounded ([[def-totally-bounded]]), because a finite $1/2$-net would have
to be the whole of $\mathbb{N}$, which is not finite.

The full verification is carried out in
[[fs-bounded-implies-totally-bounded]], where the metric axioms, the identity
$B(y,1/2) = \{y\}$ and the impossibility of listing $\mathbb{N}$ are all checked.
This item records the witness and says what makes it work.

## Facts & Assumptions

**Given:** The set $\mathbb{N}$ with the discrete metric $d$, and the false claim that every bounded metric space is totally bounded.

[A1] The refuted claim: every bounded metric space is totally bounded.

[L1] $d$ is a metric on $\mathbb{N}$; $B(y,r) = \{y\}$ for $0 < r \le 1$; and $\mathbb{N} = B(0,2)$, so the space is bounded ([[fs-bounded-implies-totally-bounded]], [[ex-discrete-metric-compact-iff-finite]], [[def-metric-space]], [[def-metric-ball]], [[def-metric-bounded-diameter]]).

[L2] A finite $1/2$-net is a finite $F \subseteq \mathbb{N}$ with the balls $B(y,1/2)$, $y \in F$, covering $\mathbb{N}$; a nonempty finite set can be listed ([[def-totally-bounded]], [[def-metric-compactness]], [[def-countable]]).

[L3] A nonempty finite set of reals has a maximum, one of its members, and for every real $M$ there is a natural $N \ge 1$ with $M < \iota(N)$, $\iota$ being the canonical natural of $\mathbb{R}$ ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-of-archimedean]], [[def-canonical-natural]]).

## Counterexample

**Proof technique:** direct.

1.1 $(\mathbb{N},d)$ is a bounded metric space, since $d(0,n) \le 1 < 2$ for every $n$ gives $\mathbb{N} = B(0,2)$. [L1]

2.1 If $F$ were a finite $1/2$-net, then $\mathbb{N} = \bigcup_{y \in F} B(y,1/2) = \bigcup_{y \in F}\{y\} = F$, so $\mathbb{N}$ would be finite and, being nonempty, listable as $\{n_0, \dots, n_k\}$. [L1, L2, step 1.1]

3.1 The reals $\iota(n_0), \dots, \iota(n_k)$ then have a maximum $M$, while a natural $N \ge 1$ with $M < \iota(N)$ satisfies $\iota(N) \ne \iota(n_i)$, hence $N \ne n_i$, for every $i \le k$; so $N$ is a natural number outside $\mathbb{N}$, which is impossible. [L3, step 2.1]

4.1 So no finite $1/2$-net exists and $(\mathbb{N},d)$ is not totally bounded, while being bounded by step 1.1; the claim [A1] is refuted. [A1, L2, step 1.1, step 3.1] ∎

## Remarks

**The implication that does hold is the converse.** A totally bounded metric space is bounded ([[lem-totally-bounded-basic]]), so this witness also shows that claim 1 of that lemma does not reverse.

**The same space refutes more.** It is closed in itself and bounded and not compact, which is the witness recorded in [[fs-closed-and-bounded-implies-compact-in-every-metric-space]], and it is complete, so no one of boundedness, closedness and completeness, nor all three together, implies compactness ([[ex-discrete-metric-compact-iff-finite]]).
