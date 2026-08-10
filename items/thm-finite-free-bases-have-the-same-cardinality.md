---
id: thm-finite-free-bases-have-the-same-cardinality
kind: theorem
title: "Any two finite free bases of the same group have the same cardinality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-free-basis, def-symmetric-group, lem-symmetric-group-is-a-group, def-finite-cardinality, thm-cardinality-of-a-set-of-functions, def-nat-power, lem-power-monotone, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Elman, Lectures on Abstract Algebra, §18"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
    - title: "Encyclopedia of Mathematics, Free group"
      url: "https://encyclopediaofmath.org/wiki/Free_group"
pipeline_run: null
---

## Statement

If $B$ and $C$ are finite free bases of the same group $F$, then
$|B|=|C|$.

## Facts & Assumptions

**Given:** A group $F$ with finite free bases $B$ and $C$, and the group $C_2:=\operatorname{Sym}(\{0,1\})$.

[L1] If $A$ and $B$ are finite, then $A^B$ is finite and $|A^B|=|A|^{|B|}$ ([[thm-cardinality-of-a-set-of-functions]]).

[L2] For $m,n\in\mathbb N$, the natural number $m^n$ and the real number $m^n$ agree under the canonical inclusion $\mathbb N\subseteq\mathbb R$ ([[def-nat-power]]).

[L3] If $a>1$, then $a^m<a^n$ whenever $m<n$ in $\mathbb N$ ([[lem-power-monotone]]).

[L4] For naturals $m,n$, exactly one of $m<n$, $m=n$, $m>n$ holds ([[lem-nat-trichotomy]]).

[L5] $(\operatorname{Sym}(X),\circ,\operatorname{id}_X)$ is a group for every set $X$ ([[lem-symmetric-group-is-a-group]]).

[F1] If $A$ is finite and $f:A\to B$ is a bijection, then $B$ is finite and $|B|=|A|$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 Every permutation of $\{0,1\}$ is determined by the image of $0$: it is either the identity or the transposition $(0\,1)$, and these two maps are distinct; hence $C_2$ is a group with exactly two elements. [L5, algebra]

2.1 Restriction to $B$ maps $\operatorname{Hom}(F,C_2)$ to the function set $C_2^B$, and the free-basis property gives a unique homomorphic extension of every function $B\to C_2$; restriction and extension are inverse maps, so restriction is a bijection $\operatorname{Hom}(F,C_2)\to C_2^B$; [L1] counts $|C_2^B|=2^{|B|}$ and [F1] transports that count along the bijection, giving $|\operatorname{Hom}(F,C_2)|=2^{|B|}$, including $B=\varnothing$. [F1, L1, step 1.1, given]

3.1 Applying the same restriction-extension bijection to $C$ gives $|\operatorname{Hom}(F,C_2)|=2^{|C|}$, and therefore $2^{|B|}=2^{|C|}$ as natural numbers. [step 2.1, given]

4.1 If $|B|<|C|$, then [L2] lets the equality of step 3.1 be read in $\mathbb R$, and [L3] applied to the base $2>1$ gives $2^{|B|}<2^{|C|}$, contradicting step 3.1; the case $|C|<|B|$ is symmetric, so trichotomy [L4] forces $|B|=|C|$. [L2, L3, L4, step 3.1, algebra]

5.1 Thus any two finite free bases of $F$, including empty bases, have the same cardinality. [step 4.1] ∎
