---
id: cor-order-of-a-quotient-group
kind: corollary
title: "If $[G:N]$ is finite then $|G/N|=[G:N]$; for finite $G$ this equals $|G|/|N|$"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-quotient-group-laws, def-index, thm-lagrange, def-order-in-a-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, Factor Groups and Normal Subgroups"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%253A_Theory_and_Applications_%28Judson%29/10%253A_Normal_Subgroups_and_Factor_Groups/10.01%253A_Factor_Groups_and_Normal_Subgroups"
pipeline_run: null
---

## Statement

Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group
$G/N$ is finite and

$$|G/N|=[G:N].$$

In particular, if $G$ is finite, then

$$|G/N|=\frac{|G|}{|N|}.$$

## Facts & Assumptions

**Given:** A group $G$ and a normal subgroup $N\mathrel{\trianglelefteq}G$.

[F1] The index $[G:N]$ is the finite cardinality of the left-coset set $G/N$ when that set is finite ([[def-index]]).

[L1] If $G$ is finite and $N\le G$, then $|G|=[G:N]|N|$ ([[thm-lagrange]]).

[F2] The order $|K|$ of a finite group $K$ is the cardinality of its underlying set ([[def-order-in-a-group]]).

[L2] The quotient group has the left cosets of $N$ as its underlying set ([[thm-quotient-group-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $[G:N]$ is finite, then by [F1] the coset set underlying $G/N$ is finite with cardinality $[G:N]$; hence [F2] and [L2] give $|G/N|=[G:N]$. [F1, F2, L2]

2.1 If $G$ is finite, then [L1] gives $|G|=[G:N]|N|$. Since $N$ contains the identity, $|N|\ne0$, and step 1.1 yields $|G/N|=[G:N]=|G|/|N|$. [step 1.1, L1, algebra]

3.1 The two asserted formulas follow. [step 1.1, step 2.1] ∎
