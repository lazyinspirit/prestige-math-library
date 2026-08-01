---
id: ex-trivial-and-total-quotients
kind: example
title: "$G/\\{e\\}$ reproduces $G$, while $G/G$ is the one-element quotient group"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-quotient-group-laws, def-subgroup, def-coset]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Quotient group"
      url: "https://encyclopediaofmath.org/wiki/Quotient_group"
pipeline_run: null
---

## Example

For every group $G$ with identity $e$, the quotient $G/\{e\}$ consists of the
singleton cosets $\{g\}$ and has exactly the same multiplication as $G$ after
identifying $g\{e\}$ with $g$. At the other extreme, $G/G=\{G\}$ is the
one-element quotient group.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$.

[F1] The sets $\{e\}$ and $G$ are subgroups of $G$ ([[def-subgroup]]).

[F2] A left coset is $gN=\{gn:n\in N\}$ ([[def-coset]]).

[L1] For a normal subgroup $N$, quotient multiplication is $(gN)(hN)=(gh)N$ ([[thm-quotient-group-laws]]).

## Verification

**Proof technique:** direct.

1.1 For every $g\in G$, [F2] gives $g\{e\}=\{ge\}=\{g\}$. Hence the cosets of $\{e\}$ are precisely the singleton subsets of $G$. [F2]

1.2 The subgroup $\{e\}$ is normal because $g\{e\}g^{-1}=\{e\}$, and [L1] gives $(g\{e\})(h\{e\})=(gh)\{e\}$. Thus $g\{e\}\mapsto g$ preserves the multiplication exactly. [F1, L1, algebra]

2.1 For every $g\in G$, [F2] gives $gG=G$, so $G/G$ has the sole element $G$. Since $G$ is normal in itself, [L1] makes this the one-element quotient group. [F1, F2, L1] ∎
