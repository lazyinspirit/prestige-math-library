---
id: ex-a-ceiling-bound-from-the-strong-pigeonhole
kind: example
title: "Distributing a finite set over a finite set of boxes, with the ceiling bound computed and attained"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-the-strong-pigeonhole-principle, def-the-ceiling-of-a-quotient-of-naturals,
       def-finite-cardinality, thm-sum-rule, def-sum-over-a-finite-index-set, def-nat-order,
       def-injection-surjection-bijection, def-nat-multiplication, lem-nat-trichotomy,
       thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Sylvestre, Pigeonhole Principle (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Elementary_Foundations%3A_An_Introduction_to_Topics_in_Discrete_Mathematics_%28Sylvestre%29/20%3A_Counting/20.05%3A_Pigeonhole_Principle"
pipeline_run: null
---

## Example

Take $A := 17$ and $B := 5$, so $\lvert A\rvert = 17$ and $\lvert B\rvert = 5$.

**The ceiling.** $\big\lceil 17/5\big\rceil = 4$: the least $q$ with
$17 \le 5q$ is $4$, since $5\cdot 3 = 15 < 17$ while $5\cdot 4 = 20 \ge 17$
([[def-the-ceiling-of-a-quotient-of-naturals]]). So
[[thm-the-strong-pigeonhole-principle]] says that **every** $f : A \to B$ has a
fibre with at least $4$ elements.

**The bound is attained.** Partition $A$ into the blocks

$$P_0 := \{0,1,2,3\},\quad P_1 := \{4,5,6,7\},\quad P_2 := \{8,9,10\},\quad P_3 := \{11,12,13\},\quad P_4 := \{14,15,16\},$$

and let $f : A \to B$ send each $i$ to the unique $b$ with $i \in P_b$. The fibre
sizes are $4, 4, 3, 3, 3$, summing to $17$, and the largest of them is $4$. So no
$f : A \to B$ has all its fibres smaller than $4$, and some $f$ has none larger
than $4$: the ceiling bound is exactly right for this pair of sizes and cannot be
raised to $5$.

```tikz
\begin{tikzpicture}
  \draw (-0.55,0) rectangle (0.55,2.3);
  \draw (1.05,0) rectangle (2.15,2.3);
  \draw (2.65,0) rectangle (3.75,2.3);
  \draw (4.25,0) rectangle (5.35,2.3);
  \draw (5.85,0) rectangle (6.95,2.3);
  \foreach \y in {0.45,0.95,1.45,1.95} {\fill (0,\y) circle (2.2pt);}
  \foreach \y in {0.45,0.95,1.45,1.95} {\fill (1.6,\y) circle (2.2pt);}
  \foreach \y in {0.45,0.95,1.45} {\fill (3.2,\y) circle (2.2pt);}
  \foreach \y in {0.45,0.95,1.45} {\fill (4.8,\y) circle (2.2pt);}
  \foreach \y in {0.45,0.95,1.45} {\fill (6.4,\y) circle (2.2pt);}
  \node at (0,2.65) {$4$};
  \node at (1.6,2.65) {$4$};
  \node at (3.2,2.65) {$3$};
  \node at (4.8,2.65) {$3$};
  \node at (6.4,2.65) {$3$};
  \node at (0,-0.35) {$b=0$};
  \node at (1.6,-0.35) {$b=1$};
  \node at (3.2,-0.35) {$b=2$};
  \node at (4.8,-0.35) {$b=3$};
  \node at (6.4,-0.35) {$b=4$};
  \node at (3.2,-1.05) {$|f^{-1}[\{b\}]|:\quad 4+4+3+3+3=17$.};
\end{tikzpicture}
```

**The counting form behind it.** $17 > 3\cdot 5 = 15$, so clause 1 of
[[thm-the-strong-pigeonhole-principle]] already gives a fibre with more than $3$
elements, that is with at least $4$; and $17 > 4\cdot 5 = 20$ is false, so clause
1 gives nothing at $k = 4$, which matches the witness above.

## Facts & Assumptions

**Given:** $A = 17$, $B = 5$, the blocks $P_0, \dots, P_4$ above, and the function $f : A \to B$ they define.

[L1] The ceiling: $\lceil m/n\rceil$ is the least $q \in \mathbb{N}$ with $m \le nq$, for $n \ge 1$ ([[def-the-ceiling-of-a-quotient-of-naturals]]).

[L2] If $f:A\to B$ maps finite sets and $k\in\mathbb N$, then (i) $|A|>k|B|$ implies some fibre has more than $k$ elements, and (ii), when $B\ne\varnothing$, some fibre has at least $\lceil |A|/|B|\rceil$ elements ([[thm-the-strong-pigeonhole-principle]], [[def-injection-surjection-bijection]]).

[L3] A listed set with distinct entries has as many elements as entries ([[def-finite-cardinality]], clauses (a) and (c), [[def-injection-surjection-bijection]]); and $\lvert 17\rvert = 17$, $\lvert 5\rvert = 5$.

[L4] The sum rule for a finite partition and the fibres of a function: $\lvert A\rvert = \sum_{b \in B}\lvert f^{-1}[\{b\}]\rvert$ ([[thm-sum-rule]], clause 2, [[def-sum-over-a-finite-index-set]], [[thm-subset-of-a-finite-set]]).

[L5] Arithmetic and order of $\mathbb{N}$: $5\cdot 3 = 15$, $5\cdot 4 = 20$, $15 < 17 \le 20$, and exactly one of $p<q$, $p=q$, $q<p$ holds ([[def-nat-multiplication]], [[def-nat-order]], [[lem-nat-trichotomy]]).

## Verification

**Proof technique:** direct.

1.1 The blocks are pairwise disjoint with union $A$, each entry of $A = 17$ appearing in exactly one of them, and their cardinalities are $4$, $4$, $3$, $3$, $3$ by [L3]. So $f$ is a well-defined function $A \to B$ and its fibres are exactly the blocks: $f^{-1}[\{b\}] = P_b$. [given, L3, construct]

1.2 The ceiling is $4$. By [L5], $5\cdot 3 = 15 < 17$, and likewise $5\cdot 0 = 0$, $5\cdot 1 = 5$ and $5\cdot 2 = 10$, all of them less than $17$, so no $q < 4$ satisfies $17 \le 5q$; and $5\cdot 4 = 20 \ge 17$, so $4$ does. Hence $\lceil 17/5\rceil = 4$ by [L1]. [L1, L5]

2.1 Every $f : A \to B$ has a fibre with at least $4$ elements, by clause 2 of [L2] with $B \ne \varnothing$ and the value computed in step 1.2; equivalently, by clause 1 of [L2] with $k = 3$, since $17 > 3\cdot 5 = 15$. [step 1.2, L2, L5]

2.2 The witness of step 1.1 has no fibre with more than $4$ elements, its fibre sizes being $4, 4, 3, 3, 3$; and these sum to $17 = \lvert A\rvert$, in agreement with [L4]. [step 1.1, L3, L4]

3.1 So the ceiling bound of step 1.2 is attained and cannot be improved for this pair of sizes: every function has a fibre of size at least $4$, and some function has every fibre of size at most $4$. [step 2.1, step 2.2] ∎

## Remarks

- **Why the counting form stops at $k = 3$.** Clause 1 needs $\lvert A\rvert > k\lvert B\rvert$, and $17 > 20$ is false, so it says nothing at $k = 4$. That is exactly right: a fibre with more than $4$ elements is not forced, as the witness shows. The ceiling form is the counting form used at the largest $k$ for which the hypothesis still holds.

- **The unequal block sizes are unavoidable.** A function with all fibres of size $3$ would give $\lvert A\rvert = 15$, and one with all fibres of size $4$ would give $20$; since $17$ lies strictly between, the fibre sizes of any $f$ cannot all be equal.
