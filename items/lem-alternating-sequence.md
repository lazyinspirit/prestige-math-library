---
id: lem-alternating-sequence
kind: lemma
title: "The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$"
status: draft
origin: session
deps: [thm-recursion, thm-induction-principle, lem-index-map-grows, def-sequence, def-natural-numbers, def-nat-addition, def-nat-order, thm-nat-linear-order, lem-nat-successor-neq-self, def-abs-value, lem-of-abs-value, def-real-order, cor-of-one-positive, lem-of-add-order, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
forward_refs: [ex-two-subsequential-limits, cex-unbounded-with-convergent-subsequence]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Parity (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parity_(mathematics)"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §2.1 and §6.4 (recursive definitions; subsequences)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
---

## Statement

Let $\sigma$ be the successor on $\mathbb{N}$ ([[def-natural-numbers]]). There are
functions $e, o : \mathbb{N} \to \mathbb{N}$ and a sequence $(s_k)$ of reals
([[def-sequence]]) with the following properties.

1. **The index maps.** $e$ is the unique function with
   $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$, and $o$ the unique
   function with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$.
   Both are **strictly increasing**.
2. **The partition.** $\mathbb{N}$ is the **disjoint union** of the ranges of $e$
   and of $o$: every natural number is $e_i$ for exactly one $i$ or $o_i$ for
   exactly one $i$, and never both.
3. **The alternating sequence.** $(s_k)$ is the **unique** sequence of reals with
   $$s_0 = 1, \qquad s_{\sigma(k)} = -s_k \quad (k \in \mathbb{N}).$$
4. **Its values.** $|s_k| = 1$ for every $k$, so $(s_k)$ is bounded; and
   $$s_{e_j} = 1, \qquad s_{o_j} = -1 \qquad (j \in \mathbb{N}),$$
   that is $s \circ e$ is constantly $1$ and $s \circ o$ constantly $-1$.

This is the sequence usually written $s_k = (-1)^k$, with $e_j = 2j$ and
$o_j = 2j+1$, presented by the recursions that its proofs actually use. It is
collected here once because three separate items on this page and its companion
need an alternating or interleaved witness, and rebuilding the recursion inside
each of them is what this lemma exists to prevent.

## Facts & Assumptions

**Given:** By the recursion theorem ([[thm-recursion]]) applied to the set $\mathbb{R}$, the element $1$ and the function $u \mapsto -u$, the unique sequence $(s_k)$ of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$; applied to the set $\mathbb{N}$, the element $0$ and the function $i \mapsto \sigma(\sigma(i))$, the unique $e : \mathbb{N} \to \mathbb{N}$ with $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$; and applied to $\mathbb{N}$, the element $\sigma(0)$ and the same function, the unique $o : \mathbb{N} \to \mathbb{N}$ with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$ ([[def-natural-numbers]], [[def-sequence]]).

[L1] Recursion theorem, including its uniqueness clause ([[thm-recursion]]).

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Order on $\mathbb{N}$: $i < \sigma(i)$ for every $i$, since $\sigma(i) = i + 1$ gives $i \le \sigma(i)$ and $\sigma(i) \ne i$; and the order is transitive and total ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-successor-neq-self]], [[thm-nat-linear-order]]).

[L4] Consecutive comparisons suffice: if $n_i < n_{\sigma(i)}$ for every $i$ then $n$ is strictly increasing ([[lem-index-map-grows]]).

[L5] Absolute value and field arithmetic: $|-u| = |u|$ ([[lem-of-abs-value]]); $|v| = v$ whenever $v \ge 0$ ([[def-abs-value]], [[def-real-order]]); and $-(-u) = u$ ([[def-field]]).

[L6] Order in $\mathbb{R}$: $0 < 1$ ([[cor-of-one-positive]]), sums of positives are positive and adding a constant preserves the order ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]), so $1 - (-1) = 1 + 1 > 0$ and hence $-1 < 1$; in particular $1 \ne -1$.

## Proof

**Proof technique:** induction.

1.1 Base case for claim 4: $|s_0| = |1| = 1$, since $1 > 0$ makes $|1| = 1$. [given, L5, L6, base]

1.2 Inductive hypothesis: fix $k \in \mathbb{N}$ and assume $|s_k| = 1$. [ih]

1.3 Both index maps satisfy consecutive strict comparisons: $e_j < \sigma(e_j) < \sigma(\sigma(e_j)) = e_{\sigma(j)}$, and likewise $o_j < o_{\sigma(j)}$, so $e$ and $o$ are strictly increasing and claim 1 holds, its uniqueness part being the uniqueness clause of the recursion theorem. [given, L1, L3, L4]

1.4 By induction, $s_{e_j} = 1$ for every $j$: the base case is $s_{e_0} = s_0 = 1$, and if $s_{e_j} = 1$ then $s_{e_{\sigma(j)}} = s_{\sigma(\sigma(e_j))} = -s_{\sigma(e_j)} = -(-s_{e_j}) = s_{e_j} = 1$. [given, L1, L2, L5]

1.5 By induction, $s_{o_j} = -1$ for every $j$: the base case is $s_{o_0} = s_{\sigma(0)} = -s_0 = -1$, and if $s_{o_j} = -1$ then $s_{o_{\sigma(j)}} = s_{\sigma(\sigma(o_j))} = -(-s_{o_j}) = s_{o_j} = -1$. [given, L1, L2, L5]

1.6 By induction on $n$, every natural number satisfies: either $n = e_i$ and $\sigma(n) = o_i$ for some $i$, or $n = o_i$ and $\sigma(n) = e_{\sigma(i)}$ for some $i$. The base case is $0 = e_0$ with $\sigma(0) = o_0$. For the successor step, if $n = e_i$ and $\sigma(n) = o_i$ then $\sigma(n) = o_i$ and $\sigma(\sigma(n)) = \sigma(\sigma(e_i)) = e_{\sigma(i)}$, which is the second alternative at $\sigma(n)$; and if $n = o_i$ and $\sigma(n) = e_{\sigma(i)}$ then $\sigma(n) = e_{\sigma(i)}$ and $\sigma(\sigma(n)) = \sigma(\sigma(o_i)) = o_{\sigma(i)}$, which is the first alternative at $\sigma(n)$. [given, L1, L2]

1.7 The sequence $(s_k)$ is the unique sequence of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, by the uniqueness clause of the recursion theorem: this is claim 3. [given, L1]

2.1 Successor step for claim 4: $|s_{\sigma(k)}| = |-s_k| = |s_k| = 1$. [step 1.2, L5]

2.2 In particular every natural number lies in the range of $e$ or in the range of $o$, since each alternative of step 1.6 exhibits $n$ as such a value. [step 1.6]

2.3 The two ranges are disjoint: if $e_i = o_j$ for some $i, j$ then $1 = s_{e_i} = s_{o_j} = -1$, contradicting $1 \ne -1$. [step 1.4, step 1.5, L6]

2.4 Each of $e$ and $o$ is injective, being strictly increasing, so a natural number in the range of $e$ is $e_i$ for exactly one $i$, and likewise for $o$. [step 1.3, L3]

3.1 By the induction principle, $|s_k| = 1$ for every $k \in \mathbb{N}$; hence $|s_k| \le 1$ at every index and $(s_k)$ is bounded. Together with steps 1.4 and 1.5 this is claim 4. [step 1.1, step 2.1, step 1.4, step 1.5, L2]

4.1 Claim 2 follows: by step 2.2 every natural is in one of the two ranges, by step 2.3 not in both, and by step 2.4 the index realising it is unique. Claims 1, 2, 3 and 4 are therefore all established. [step 2.2, step 2.3, step 3.1, step 2.4, step 1.3, step 1.7, discharge-induction] ∎

## Remarks

- **Why the recursion rather than $(-1)^k$.** Written as a power, every one of the
  four claims would have to be unwound into the two recursion equations before it
  could be proved; written as a recursion, each is a two-line induction. The
  identification with $(-1)^k$ is available ([[def-integer-power]]) and is used
  nowhere.

- **The parity statement is genuinely proved, not assumed.** Claim 2 is where the
  work is: the covering half is the interleaved induction of step 1.6, which
  tracks $n$ and $\sigma(n)$ together because neither alone is preserved by the
  successor, and the disjointness half is settled by the *sequence*, since
  $s$ takes the value $1$ on one range and $-1$ on the other and $1 \ne -1$.
  Using the sequence to separate the two ranges is shorter than any direct parity
  argument and needs no arithmetic on $\mathbb{N}$ beyond the successor.

- **What consumes this lemma.** [[fs-convergent-subsequence-implies-bounded]]
  interleaves a constant sequence with an unbounded one along $e$ and $o$;
  [[ex-two-subsequential-limits]] multiplies $s$ by a null perturbation to get a
  sequence with exactly two subsequential limits; and
  [[cex-unbounded-with-convergent-subsequence]] is the witness for the first of
  those. The same sequence, built inline, refutes
  [[fs-bounded-implies-convergent]] on the previous page; that item predates this
  lemma and is left as it stands.
