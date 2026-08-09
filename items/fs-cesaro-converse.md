---
id: fs-cesaro-converse
kind: false-statement
title: "FALSE: if the Cesaro means of a sequence converge then the sequence converges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cesaro-mean-theorem, def-cesaro-mean, lem-alternating-sequence, fs-bounded-implies-convergent, cor-archimedean-reciprocal, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, def-real-limit, def-sequence, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
forward_refs: [ex-cesaro-means-of-alternating]
justified_by: []
aliases: []
landmark: false
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
    - title: "Grandi's series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Grandi%27s_series"
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "G. H. Hardy, Divergent Series, Ch. 1"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Statement

**False claim:** if the Cesaro means $(\sigma_n)$ of a sequence $(x_k)$ of reals
converge ([[def-cesaro-mean]]), then $(x_k)$ converges.

The implication in the opposite direction is true and is
[[thm-cesaro-mean-theorem]]. The claim above asserts its converse, and it is
refuted below by the alternating sequence $s_k = (-1)^k$, whose Cesaro means
converge to $0$ while the sequence itself does not converge at all.

That is the whole reason Cesaro summability is worth defining: it is a strictly
larger notion than convergence, consistent with it where both apply.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ of [[lem-alternating-sequence]], the unique sequence of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, together with the index maps $e$ and $o$ of that lemma; and its partial sums $S_n := \sum_{k<n} s_k$ ([[def-finite-sum]]), and its Cesaro means $\sigma_n = (n+1)^{-1}S_{n+1}$ ([[def-cesaro-mean]]).

[L1] The alternating sequence: $e$ and $o$ are the unique maps with $e_0 = 0$, $e_{\sigma(j)} = \sigma(\sigma(e_j))$, $o_0 = \sigma(0)$, $o_{\sigma(j)} = \sigma(\sigma(o_j))$; both are strictly increasing; $\mathbb{N}$ is the disjoint union of their ranges; $(s_k)$ is the unique sequence with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$; $|s_k| = 1$, $s_{e_j} = 1$ and $s_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] Finite sums: $\sum_{k<0} s_k = 0$ and $\sum_{k<n+1} s_k = \sum_{k<n} s_k + s_n$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] Induction principle ([[thm-induction-principle]]).

[L4] Cesaro means: $\sigma_n = (n+1)^{-1}\sum_{k=0}^{n}x_k$, and $\sum_{k=0}^{n} = \sum_{k<n+1}$ ([[def-cesaro-mean]], [[def-finite-sum]]).

[L5] The alternating sequence does not converge: it is bounded and divergent, which is the refutation of [[fs-bounded-implies-convergent]], carried out there for the very same sequence, the one determined by $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, which [[lem-alternating-sequence]] shows is unique.

[L6] Reciprocal Archimedean property ([[cor-archimedean-reciprocal]]); convergence of a real sequence ([[def-real-limit]], [[def-sequence]]).

[L7] Order arithmetic: $(n+1)\cdot 1_{\mathbb{R}} > 0$ ([[lem-of-naturals-positive]]) hence invertible with positive inverse, and reciprocation reverses the order ([[lem-of-inverse-positive]]); $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Refutation

**Proof technique:** direct.

1.1 By induction on $j$, $o_j = \sigma(e_j)$ and $e_{\sigma(j)} = \sigma(o_j)$: at $j = 0$ one has $o_0 = \sigma(0) = \sigma(e_0)$, and $e_{\sigma(j)} = \sigma(\sigma(e_j)) = \sigma(o_j)$ follows from the first identity at $j$, while $o_{\sigma(j)} = \sigma(\sigma(o_j)) = \sigma(e_{\sigma(j)})$ carries the first identity to $\sigma(j)$. [L1, L3]

1.2 The partial sums satisfy $S_0 = 0$ and $S_{\sigma(n)} = S_n + s_n$, and $\sigma_n = (n+1)^{-1}S_{\sigma(n)}$. [L2, L4, L7]

1.3 $(s_k)$ does not converge. [L5]

2.1 By induction on $j$: $S_{e_j} = 0$ and $S_{o_j} = 1$. At $j = 0$: $S_{e_0} = S_0 = 0$ and $S_{o_0} = S_{\sigma(0)} = S_0 + s_0 = 1$. For the step, $S_{e_{\sigma(j)}} = S_{\sigma(o_j)} = S_{o_j} + s_{o_j} = 1 + (-1) = 0$ and $S_{o_{\sigma(j)}} = S_{\sigma(e_{\sigma(j)})} = S_{e_{\sigma(j)}} + s_{e_{\sigma(j)}} = 0 + 1 = 1$. [step 1.1, step 1.2, L1, L3]

3.1 Every natural number is $e_j$ for exactly one $j$ or $o_j$ for exactly one $j$, so $S_m \in \{0,1\}$ for every $m$; in particular $0 \le S_{\sigma(n)} \le 1$ for every $n$. [step 1.1, step 2.1, L1]

4.1 Hence $0 \le \sigma_n = (n+1)^{-1}S_{\sigma(n)} \le (n+1)^{-1}$ and so $|\sigma_n| \le (n+1)^{-1}$ for every $n$. [step 1.2, step 3.1, L7]

5.1 Given a real $\varepsilon > 0$, choose $m \ge 1$ with $1/m < \varepsilon$; for every $n \ge m$ one has $n+1 > m$ and therefore $|\sigma_n - 0| \le (n+1)^{-1} < 1/m < \varepsilon$. So $(\sigma_n)$ converges to $0$, that is, $(s_k)$ is $(C,1)$-summable to $0$. [step 4.1, L4, L6, L7]

6.1 So $(s_k)$ has convergent Cesaro means and does not converge, and the claim is false. [step 1.3, step 5.1] ∎

## Remarks

- **What averaging destroys.** The Cesaro mean of the first $n+1$ terms of an
  alternating sequence is either $0$ or $1/(n+1)$, because the terms cancel in
  pairs and at most one is left over. The oscillation is real and is not damped
  by any tail condition; it is simply invisible to the average. So the transform
  loses information, and no regular summability method can be expected to
  recover a limit that does not exist ([[cor-cesaro-matrix-is-regular]]).

- **The worked computation** of the means, with the values displayed, is
  [[ex-cesaro-means-of-alternating]].

- **A correct converse needs an extra hypothesis.** The classical one is
  Tauberian: if the Cesaro means converge and in addition $k(x_k - x_{k-1})$ is
  bounded, then $(x_k)$ converges. No such theorem is proved in this library,
  and none may be cited from it; the statement is mentioned only to say what the
  repaired claim would look like.

- **The failure is not caused by unboundedness.** The witness is bounded, with
  $|s_k| = 1$ at every index. It is the same sequence that refutes the claim
  that bounded sequences converge ([[fs-bounded-implies-convergent]]), and for
  the same underlying reason: boundedness forbids escaping, not oscillating.
