---
id: ex-common-height-cone-repair-in-the-complement-case
kind: example
title: "The common-height cone repair in the complement case"
status: draft
origin: pipeline
deps: [def-halpern-lauchli-finitistic-trees-density-and-matrices]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Halpern–Läuchli, A partition theorem (1966), complement case in the proof of Theorem 1, p. 367; explicit binary-tree calculation"
      url: https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Example

In two binary trees, take cone roots of heights $1$ and $3$.  Extending the
first root to the common height $3$ before restricting the dense frontiers
produces a genuine common-height matrix.

## Facts & Assumptions

**Given:** $T_1=T_2=2^{<\omega}$, the roots $t_1=0$ and $t_2=101$, and a
finite $k\ge0$.

[F1] Common-height cone extension and restriction preserve the adjusted
density parameters. [[def-halpern-lauchli-finitistic-trees-density-and-matrices]]

## Verification

1.1 The roots have heights $1$ and $3$, so they cannot themselves witness one $(h,k)$-matrix.  Put $h=3$, extend $t_1$ to $s_1=011$, and take $s_2=t_2=101$. [F1, given, construct]

2.1 Let $p=h+k$ and $B_i=T_i(p)$.  Then $B_i$ is $p$-dense.  Set $C_1=B_1\cap\{u:011\preccurlyeq u\}$ and $C_2=B_2\cap\{u:101\preccurlyeq u\}$.  Each $C_i$ is exactly the height-$(3+k)$ frontier above $s_i$, hence is $(3,k)$-dense, and $C_1\times C_2$ is a $(3,k)$-matrix. [F1, step 1.1]

3.1 For example, when $k=2$, $C_1=\{01100,01101,01110,01111\}$ and $C_2=\{10100,10101,10110,10111\}$.  Each listed set dominates all four height-5 nodes above its height-3 root; when $k=0$, the calculation instead gives the singleton sets $\{011\}$ and $\{101\}$. [F1, step 2.1]

4.1 More generally, if $B_i$ is merely $(3+k)$-dense rather than the whole level, the same restrictions remain $(3,k)$-dense: a height-$(3+k)$ extension of $s_i$ is dominated by some member of $B_i$, and that member automatically lies above $s_i$.  This is the exact common-height repair used in the complement case. [F1, step 1.1, step 2.1] ∎
