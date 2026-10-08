---
id: cor-outer-pieri-rules-for-trivial-and-sign-factors
kind: corollary
title: "Outer Pieri rules for a trivial or sign factor"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
deps:
  - thm-outer-littlewood-richardson-rule
  - def-littlewood-richardson-tableau-and-coefficient
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-semistandard-tableau-and-kostka-number
  - def-partition-young-diagram-and-conjugate-partition
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-young-subgroup-tabloid-and-permutation-module
  - def-row-and-column-stabilizers-of-a-tableau
  - def-trivial-regular-and-permutation-representations
  - def-sign-representation-and-restriction-of-a-representation
  - thm-sign-is-a-homomorphism
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §5, equations (5.16)–(5.17), printed pp. 73–74: the horizontal- and vertical-strip Pieri rules"
---

## Statement

Let $\mu\vdash m$ and let $r\ge1$. Then, as complex $S_{m+r}$-modules,

$$\operatorname{Ind}_{S_m\times S_r}^{S_{m+r}}\bigl(S^\mu\boxtimes S^{(r)}\bigr)\cong\bigoplus_{\substack{\lambda\vdash m+r\\ \lambda\supseteq\mu\\ \lambda/\mu\ \text{horizontal }r\text{-strip}}}S^\lambda,$$

where a horizontal strip has at most one added node in each column, and

$$\operatorname{Ind}_{S_m\times S_r}^{S_{m+r}}\bigl(S^\mu\boxtimes S^{(1^r)}\bigr)\cong\bigoplus_{\substack{\lambda\vdash m+r\\ \lambda\supseteq\mu\\ \lambda/\mu\ \text{vertical }r\text{-strip}}}S^\lambda,$$

where a vertical strip means that at most one added node lies in each row. Every listed summand has multiplicity one, and no other Specht module occurs. Here $S^{(r)}$ is the trivial representation of $S_r$ and $S^{(1^r)}$ is its sign representation, as verified from the Specht-module definition below. For $r=0$, both factors are $S^\varnothing$, and each induced module is $S^\mu$, corresponding to the unique empty strip. No choice principle is used.

## Facts & Assumptions

**Given:** A partition $\mu\vdash m$ and an integer $r\ge0$.

[F1] The multiplicity of $S^\lambda$ in the outer induction product $S^\mu\circ S^\nu$ is the Littlewood–Richardson coefficient $c^\lambda_{\mu\nu}$ ([[thm-outer-littlewood-richardson-rule]]).

[F2] An LR tableau is a semistandard skew tableau whose top-to-bottom, right-to-left reading word is a lattice word; $c^\lambda_{\mu\nu}$ counts such tableaux of shape $\lambda/\mu$ and content $\nu$, and is zero unless the containment and size conditions hold ([[def-littlewood-richardson-tableau-and-coefficient]]).

[F3] Semistandard skew tableaux have weakly increasing rows and strictly increasing columns; their content records the number of occurrences of each entry ([[def-skew-diagram-and-semistandard-skew-tableau]], [[def-semistandard-tableau-and-kostka-number]]).

[F4] A horizontal strip is a skew diagram with at most one box in each column ([[def-skew-diagram-and-semistandard-skew-tableau]]).

[F5] The Specht module is spanned by the polytabloids obtained from the column antisymmetrizers acting on tabloids; the polytabloid of a tableau is nonzero ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F6] A tabloid forgets the order of entries within each row, and tabloids form a basis of the permutation module; for a column shape each row is a singleton ([[def-young-subgroup-tabloid-and-permutation-module]]).

[F7] The column stabilizer consists of the permutations preserving each column's entries; for a one-column tableau of size $r$ it is all of $S_r$, while for a one-row tableau it is trivial ([[def-row-and-column-stabilizers-of-a-tableau]]).

[F8] The trivial representation is one-dimensional with every group element acting as the identity ([[def-trivial-regular-and-permutation-representations]]).

[F9] The sign representation is one-dimensional with $\sigma$ acting by $\operatorname{sgn}(\sigma)$ ([[def-sign-representation-and-restriction-of-a-representation]]).

[F10] The sign map is multiplicative: $\operatorname{sgn}(\sigma\tau)=\operatorname{sgn}(\sigma)\operatorname{sgn}(\tau)$ ([[thm-sign-is-a-homomorphism]]).

[F11] The empty partition is the only partition of zero; its diagram is empty, and partitions of a fixed size have finitely many Young diagrams ([[def-partition-young-diagram-and-conjugate-partition]]).

## Proof

**Proof technique:** direct.

1.1 For $r\ge1$, consider the one-row shape $(r)$. Every tabloid has the same single row by [F6], and each column has one node, so [F7] makes its column stabilizer trivial. Its column antisymmetrizer is therefore the identity by [F5], and its polytabloid spans the one-dimensional tabloid module, on which $S_r$ acts trivially. Hence $S^{(r)}$ is the trivial representation from [F8]. [F5, F6, F7, F8, given, algebra]

1.2 For $r\ge1$, consider the one-column shape $(1^r)$. Every row has one node by [F6], so the tabloids $\sigma\{t\}$ are distinct as $\sigma$ ranges over $S_r$. By [F7] its column stabilizer is all of $S_r$, and the column antisymmetrizer gives a nonzero vector $e_t=\sum_{\sigma\in S_r}\operatorname{sgn}(\sigma)\sigma\{t\}$ by [F5]. For $\gamma\in S_r$, changing the summation variable and using [F10] gives $\gamma e_t=\operatorname{sgn}(\gamma)e_t$. Every tableau of this shape is $\delta t$ for some $\delta\in S_r$; its column stabilizer is $\delta C_t\delta^{-1}$ and [F10] makes the corresponding antisymmetrizer $\delta\kappa_t\delta^{-1}$, so its polytabloid is $\delta e_t=\operatorname{sgn}(\delta)e_t$. Hence the Specht module is one-dimensional and has the sign action [F9]. [F5, F6, F7, F9, F10, given, algebra]

1.3 Take $r\ge1$ and $\lambda\vdash m+r$ with $\mu\subseteq\lambda$. By [F1], the multiplicity in the first outer product is $c^\lambda_{\mu,(r)}$. A tableau of content $(r)$ has only the entry $1$, so there is exactly one possible filling; it is semistandard precisely when no two added nodes share a column by [F3, F4], and its word $1^r$ is a lattice word. Therefore $c^\lambda_{\mu,(r)}=1$ exactly for horizontal $r$-strips and is zero otherwise. [F1, F2, F3, F4, given]

1.4 For content $(1^r)$, every letter $1,\ldots,r$ occurs once. A lattice word must begin with $1$; inductively, after $1,\ldots,k$ its next letter must be $k+1$, since any larger unused letter would violate the prefix inequality for that letter and its predecessor. Thus the only possible LR word is $12\cdots r$. If a row had two nodes, their distinct entries would appear right-to-left in decreasing order, contradicting this increasing word; hence any such tableau has a vertical strip. Conversely, for a vertical strip, fill the nodes in reading order with $1,\ldots,r$: each row has at most one node, entries increase down each column, and the word is lattice. This filling is unique, so $c^\lambda_{\mu,(1^r)}=1$ exactly for vertical $r$-strips and is zero otherwise. [F2, F3, given]

2.1 By [F1], steps 1.3 and 1.4 give the multiplicities in the two induced modules, and steps 1.1 and 1.2 identify their factors $S^{(r)}$ and $S^{(1^r)}$ with the trivial and sign representations. Therefore the induced modules are the stated direct sums, with each listed summand appearing once. [F1, step 1.1, step 1.2, step 1.3, step 1.4]

3.1 If $r=0$, [F11] gives $\lambda=\mu$ as the only possible shape, and the empty LR tableau has coefficient one by [F2]. The empty Specht module is trivial by [F5, F8], so the outer LR rule [F1] gives the asserted induction module as $S^\mu$. All tableau sets and direct sums above are finite, and no representatives or bases are selected; no form of the axiom of choice is used. [F1, F2, F5, F8, F11, step 2.1] ∎
