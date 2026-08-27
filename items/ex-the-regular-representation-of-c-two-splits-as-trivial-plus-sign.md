---
id: ex-the-regular-representation-of-c-two-splits-as-trivial-plus-sign
kind: example
title: "The regular representation of $C_2$ over a field of characteristic not $2$ is the direct sum of the trivial and sign representations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sign-representation-and-restriction-of-a-representation, def-trivial-regular-and-permutation-representations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 1.1.6"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Example

Let $C_2=\{e,s\}$ with $s^2=e$, and let $k$ be a field of characteristic not
$2$. The regular representation of $C_2$ on $k[C_2]$ splits as the direct sum
of the trivial line and the line on which $s$ acts by $-1$; after identifying
$C_2 \cong S_2$ by $s \mapsto (12)$, this second line is the sign
representation.

## Facts & Assumptions

**Given:** A field $k$ with $\operatorname{char}k \ne 2$ and the regular representation of $C_2$.

[L1] In the regular representation, $s \cdot [e]=[s]$ and $s \cdot [s]=[e]$ ([[def-trivial-regular-and-permutation-representations]]).

[L2] The trivial representation has $s$ acting by $+1$, and under the identification $C_2 \cong S_2$ the sign representation has $s$ acting by $-1$ ([[def-trivial-regular-and-permutation-representations]], [[def-sign-representation-and-restriction-of-a-representation]]).

## Verification

**Proof technique:** direct.

1.1 Put $u:=[e]+[s]$ and $v:=[e]-[s]$. By [L1], $s \cdot u=[s]+[e]=u$ and $s \cdot v=[s]-[e]=-v$. [L1, given, algebra]

2.1 Because $\operatorname{char}k \ne 2$, the two vectors $u$ and $v$ are linearly independent and span $k[C_2]$: one has $[e]=\tfrac12(u+v)$ and $[s]=\tfrac12(u-v)$. Therefore $ku$ is the trivial line of [L2], $kv$ is the sign line of [L2], and the regular representation is their direct sum. [step 1.1, L2, given, algebra] ∎
