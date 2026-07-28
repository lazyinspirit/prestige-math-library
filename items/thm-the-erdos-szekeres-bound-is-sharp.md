---
id: thm-the-erdos-szekeres-bound-is-sharp
kind: theorem
title: "For all $m$ and $n$ there is a list of $mn$ pairwise distinct reals with no strictly increasing sublist of length $m+1$ and no strictly decreasing sublist of length $n+1$"
status: draft
origin: session
deps: [def-a-monotone-sublist-of-a-finite-list-of-reals, def-canonical-natural,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-nat-multiplication,
       def-nat-addition, def-nat-order, lem-nat-order-is-membership, lem-nat-order-add-compatible,
       lem-nat-add-cancellative, lem-nat-mult-distributive, lem-nat-mult-commutative, lem-nat-add-commutative,
       lem-nat-trichotomy, def-ordered-field, def-injection-surjection-bijection,
       def-finite-cardinality, thm-subset-of-a-finite-set, thm-product-rule, lem-pigeonhole,
       def-nat-finite-sum-and-product, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Erdos-Szekeres theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Szekeres_theorem"
    - title: "Longest increasing subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Longest_increasing_subsequence"
pipeline_run: null
---

## Statement

Let $m, n \in \mathbb{N}$. Then there is a pairwise distinct finite list of reals
$a : (mn) \to \mathbb{R}$ ([[def-a-monotone-sublist-of-a-finite-list-of-reals]])
with **no** strictly increasing sublist of length $m+1$ and **no** strictly
decreasing sublist of length $n+1$.

Together with the bound $mn+1$, this says that $mn+1$ is the least length at
which the two alternatives become unavoidable.

At $m = 0$ or $n = 0$ the list is empty, and there is no sublist of any positive
length at all, so the assertion holds for the trivial reason that both required
sublists have length at least $1$.

## Facts & Assumptions

**Given:** Naturals $m$ and $n$, the finite sets $m \times n$ and $mn$, and the ordered field $\mathbb{R}$ with the canonical natural $\iota : \mathbb{N} \to \mathbb{R}$ ([[def-canonical-natural]]).

[L1] Arithmetic and order of $\mathbb{N}$: addition and multiplication are as in [[def-nat-addition]] and [[def-nat-multiplication]]; $p \le q$ means $p + j = q$ for a unique $j$, written $q - p$ ([[def-nat-order]], [[lem-nat-add-cancellative]], [[def-nat-finite-sum-and-product]]); $p + k < q + k \iff p < q$ ([[lem-nat-order-add-compatible]]); addition is commutative ([[lem-nat-add-commutative]]); $\sigma(b)\cdot n = b\cdot n + n$ ([[lem-nat-mult-distributive]]); multiplication is monotone in its first factor, since $p + d = q$ gives $q\,n = n\,q = n\,p + n\,d = p\,n + d\,n$ by commutativity and distributivity ([[lem-nat-mult-commutative]], [[lem-nat-mult-distributive]]), so $p \le q$ implies $p\,n \le q\,n$; exactly one of $p<q$, $p=q$, $q<p$ holds ([[lem-nat-trichotomy]]); and $k < N \iff k \in N$ ([[lem-nat-order-is-membership]]).

[L2] $\lvert m \times n\rvert = mn$ and $\lvert K\rvert = K$ for a natural $K$ ([[thm-product-rule]], clause 1, [[def-finite-cardinality]]).

[L3] An injection between finite sets of equal cardinality is a bijection: it is a bijection onto its image, the image has the same cardinality as the domain, and clause 3 of [[thm-subset-of-a-finite-set]] then makes the image the whole codomain ([[def-finite-cardinality]], [[def-injection-surjection-bijection]]).

[L4] There is no injection of $L$ into $K$ when $K < L$ ([[lem-pigeonhole]], clause 2).

[L5] $\iota$ is strictly increasing, hence injective ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 7); and $\mathbb{R}$ is an ordered field ([[def-ordered-field]], [[def-field]]).

[L6] Sublists ([[def-a-monotone-sublist-of-a-finite-list-of-reals]]): a sublist of length $L$ is a strictly increasing $s : L \to mn$, hence injective; it is strictly increasing, respectively decreasing, when its values do the same.

## Proof

**Proof technique:** constructive.

1.1 The index bijection. Define $\beta : m \times n \to \mathbb{N}$ by $\beta(b,j) := b\,n + j$. Its values lie in $mn$: from $j < n$ and $b < m$ we get $j + 1 \le n$ and $b + 1 \le m$, so $\beta(b,j) + 1 = bn + (j+1) \le bn + n = \sigma(b)\cdot n \le mn$ by [L1], whence $\beta(b,j) < mn$. [L1, construct]

1.2 $\beta$ is injective. Suppose $\beta(b,j) = \beta(b',j')$ with $(b,j), (b',j') \in m \times n$. If $b < b'$ then $\sigma(b) \le b'$, so $\beta(b,j) < bn + n = \sigma(b)\,n \le b'n \le \beta(b',j')$ by [L1], a contradiction; symmetrically $b' < b$ is impossible, so $b = b'$ by [L1], and then $j = j'$ by cancellation. [L1, construct]

2.1 The list. By [L2] and [L3], the injection $\beta$ of step 1.2 is a bijection of $m \times n$ onto $mn$, so every index $i < mn$ is $\beta(b,j)$ for exactly one pair, and $$a_{\beta(b,j)} \;:=\; \iota\big(b\,n + n - j\big) \qquad (b<m,\ j<n)$$ defines a list $a : (mn) \to \mathbb{R}$. Write $\mathrm{blk}(\beta(b,j)) := b$ for the **block** of an index. [step 1.1, step 1.2, L2, L3, construct]

3.1 Inside a block the values decrease. Let $b < m$ and $j < j' < n$. Then $\beta(b,j) < \beta(b,j')$ by [L1], while $n - j' \ge 1$ and $n - j = (n-j') + (j'-j)$ with $j'-j \ge 1$, so $n-j' < n-j$ and hence $a_{\beta(b,j')} < a_{\beta(b,j)}$ by [L1] and [L5]. [step 2.1, L1, L5]

3.2 Across blocks the values increase, and the block is monotone in the index. Let $b < b' < m$ and $j, j' < n$. Then $bn + n - j \le bn + n = \sigma(b)\,n \le b'n < b'n + (n - j')$, the last step because $n - j' \ge 1$; so $a_{\beta(b,j)} < a_{\beta(b',j')}$ by [L5]. Moreover $\beta(b,j) < \beta(b',j')$, by the computation of step 1.2; equivalently, $\mathrm{blk}$ is nondecreasing along the index order. [step 1.2, step 2.1, L1, L5]

4.1 The list is pairwise distinct. Two indices with different blocks carry different values by step 3.2, and two indices in the same block carry different values by step 3.1; since every index has exactly one block by step 2.1, distinct indices carry distinct values. [step 2.1, step 3.1, step 3.2]

4.2 No strictly increasing sublist of length $m+1$. Let $s : L \to mn$ be a strictly increasing sublist. The map $\mathrm{blk}\circ s : L \to m$ is injective: if $p < q < L$ had $\mathrm{blk}(s(p)) = \mathrm{blk}(s(q))$, then $s(p) < s(q)$ lie in one block, so $a_{s(p)} > a_{s(q)}$ by step 3.1, contradicting that the sublist increases. Hence $L \le m$ by [L4], so $L \ne m+1$. [step 2.1, step 3.1, L4, L6]

4.3 No strictly decreasing sublist of length $n+1$. Let $s : L \to mn$ be a strictly decreasing sublist and let $p < q < L$. Then $s(p) < s(q)$, so $\mathrm{blk}(s(p)) \le \mathrm{blk}(s(q))$ by step 3.2; and $\mathrm{blk}(s(p)) < \mathrm{blk}(s(q))$ would give $a_{s(p)} < a_{s(q)}$ by step 3.2, contradicting that the sublist decreases. So all the $s(p)$ lie in one block $b$, say $s(p) = \beta(b, j_p)$, and $p \mapsto j_p$ is injective into $n$ because $s$ is injective and $\beta$ is a bijection. Hence $L \le n$ by [L4], so $L \ne n+1$. [step 2.1, step 3.2, L4, L6]

5.1 The list of step 2.1 is therefore a pairwise distinct list of $mn$ reals with no strictly increasing sublist of length $m+1$ and no strictly decreasing sublist of length $n+1$, which is the assertion. [step 4.1, step 4.2, step 4.3, discharge-construct] ∎

## Remarks

- **The two block counts are not interchangeable.** The construction uses $m$ blocks of $n$ terms each. An increasing sublist meets each block at most once, so its length is bounded by the number of blocks, $m$; a decreasing sublist lies inside one block, so its length is bounded by the block size, $n$. Exchanging the roles would bound the increasing sublists by $n$ and the decreasing ones by $m$, which is the sharpness statement for the pair $(n,m)$ and not for $(m,n)$.

- **Why the values are written through $\iota$.** The terms of a list of reals are real numbers, and $bn+n-j$ is a natural number, which is a set and not an element of $\mathbb{R}$. The strict monotonicity of $\iota$ is what transports the comparisons between the naturals into comparisons between the terms.

- **The degenerate cases need no separate argument.** If $m = 0$ or $n = 0$ then $m \times n$ and $mn$ are both empty, the list is the empty function, and steps 4.2 and 4.3 read $L \le 0$, which already excludes the two lengths $m+1$ and $n+1$.
