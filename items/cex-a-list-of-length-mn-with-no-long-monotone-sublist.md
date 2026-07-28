---
id: cex-a-list-of-length-mn-with-no-long-monotone-sublist
kind: counterexample
title: "A list of six distinct reals with no strictly increasing sublist of length four and no strictly decreasing sublist of length three"
status: published
origin: session
deps: [fs-the-erdos-szekeres-bound-can-be-lowered, thm-the-erdos-szekeres-bound-is-sharp,
       thm-erdos-szekeres, def-a-monotone-sublist-of-a-finite-list-of-reals,
       def-canonical-natural, def-ordered-field, def-nat-order, lem-pigeonhole,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
cx_machine_verified: false
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Erdos-Szekeres theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Szekeres_theorem"
    - title: "Longest increasing subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Longest_increasing_subsequence"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** [[fs-the-erdos-szekeres-bound-can-be-lowered]] at $m = 3$ and
$n = 2$, that is, the assertion that every pairwise distinct list of
$mn = 6$ reals has a strictly increasing sublist of length $m+1 = 4$ or a
strictly decreasing sublist of length $n+1 = 3$.

The witness is the list $a : 6 \to \mathbb{R}$ with values

$$\big(a_0, a_1, a_2, a_3, a_4, a_5\big) = \big(\iota(2), \iota(1), \iota(4), \iota(3), \iota(6), \iota(5)\big),$$

that is $2, 1, 4, 3, 6, 5$ read through the canonical natural
([[def-canonical-natural]]). It is the instance at $m = 3$, $n = 2$ of the
construction of [[thm-the-erdos-szekeres-bound-is-sharp]]: three blocks of two
positions each, decreasing inside a block and increasing across blocks.

Its longest strictly increasing sublist has length $3$, for example
$a_0, a_2, a_4$, and its longest strictly decreasing sublist has length $2$, for
example $a_0, a_1$.

## Facts & Assumptions

**Given:** The list $a : 6 \to \mathbb{R}$ above, and the three index blocks $P_0 := \{0,1\}$, $P_1 := \{2,3\}$, $P_2 := \{4,5\}$, with $\mathrm{blk}(i) := b$ for $i \in P_b$.

[L1] Lists and sublists: a sublist of length $L$ is a strictly increasing $s : L \to 6$, and it is strictly increasing, respectively decreasing, when its values are ([[def-a-monotone-sublist-of-a-finite-list-of-reals]], [[def-injection-surjection-bijection]]).

[L2] $\iota$ is strictly increasing, so the comparisons between the six values are those between $1,2,3,4,5,6$ in $\mathbb{N}$ ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 7, [[def-ordered-field]], [[def-nat-order]]).

[L3] There is no injection of $L$ into $K$ when $K < L$ ([[lem-pigeonhole]], clause 2).

[L4] The witness family and the theorem it refutes ([[thm-the-erdos-szekeres-bound-is-sharp]], [[fs-the-erdos-szekeres-bound-can-be-lowered]]); and the true bound at length $mn+1$ ([[thm-erdos-szekeres]]).

## Counterexample

**Proof technique:** constructive.

1.1 The list is pairwise distinct: its values are $\iota(2), \iota(1), \iota(4), \iota(3), \iota(6), \iota(5)$, and the naturals $1,2,3,4,5,6$ are pairwise distinct, so their canonical naturals are too by [L2]. [given, L2, construct]

1.2 Inside a block the values decrease. $a_0 = \iota(2) > \iota(1) = a_1$, $a_2 = \iota(4) > \iota(3) = a_3$ and $a_4 = \iota(6) > \iota(5) = a_5$, by [L2]. [given, L2]

1.3 Across blocks the values increase. Every value at a position of $P_0$ is $\iota(1)$ or $\iota(2)$, every value at a position of $P_1$ is $\iota(3)$ or $\iota(4)$, and every value at a position of $P_2$ is $\iota(5)$ or $\iota(6)$; so $b < b'$ implies that every value on $P_b$ is smaller than every value on $P_{b'}$, by [L2]. Also $i < i'$ implies $\mathrm{blk}(i) \le \mathrm{blk}(i')$, since the blocks list the positions in increasing order. [given, L2]

2.1 No strictly increasing sublist of length $4$. Let $s : L \to 6$ be a strictly increasing sublist. If $p < q < L$ had $\mathrm{blk}(s(p)) = \mathrm{blk}(s(q))$, then $s(p) < s(q)$ lie in one block, so $a_{s(p)} > a_{s(q)}$ by step 1.2, contradicting that the values increase. So $\mathrm{blk}\circ s$ is an injection of $L$ into $3$, whence $L \le 3$ by [L3] and $L \ne 4$. [step 1.2, L1, L3]

2.2 No strictly decreasing sublist of length $3$. Let $s : L \to 6$ be a strictly decreasing sublist and let $p < q < L$. Then $s(p) < s(q)$, so $\mathrm{blk}(s(p)) \le \mathrm{blk}(s(q))$ by step 1.3; and a strict inequality there would give $a_{s(p)} < a_{s(q)}$ by step 1.3, contradicting that the values decrease. So all positions of $s$ lie in one block, and $s$ is an injection of $L$ into a two-element set, whence $L \le 2$ by [L3] and $L \ne 3$. [step 1.3, L1, L3]

3.1 The list of step 1.1 is therefore a pairwise distinct list of $6 = 3\cdot 2$ reals with neither of the two sublists the refuted claim asserts, so that claim is false at $m = 3$, $n = 2$; what holds instead is [L4] at length $3\cdot 2 + 1 = 7$. [step 1.1, step 2.1, step 2.2, L4, discharge-construct] ∎

## Remarks

- **The two bounds come from the two block counts.** An increasing sublist takes at most one position from each block, so its length is bounded by the number of blocks; a decreasing sublist stays inside one block, so its length is bounded by the block size. Exchanging the roles of the block count and the block size would give a witness for the pair $(2,3)$ instead.

- **Both bounds are attained**, by $a_0, a_2, a_4$ and by $a_0, a_1$ respectively, so the witness is not merely short of the two thresholds: it sits exactly one below each.
