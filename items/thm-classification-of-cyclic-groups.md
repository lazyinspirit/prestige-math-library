---
id: thm-classification-of-cyclic-groups
kind: theorem
title: "Every cyclic group is isomorphic to $(\\mathbb Z,+)$ or to $(\\mathbb Z/n,+)$ for its finite order $n\\ge1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-generated-subgroup, lem-cyclic-subgroup-is-the-set-of-powers, def-order-in-a-group, lem-order-characterisation, def-group-homomorphism, lem-group-power-laws, def-group-isomorphism-and-automorphism, prop-integers-modulo-n-as-a-quotient-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Abstract Algebra"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Statement

If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies:

- if $g$ has infinite order, $G\cong(\mathbb Z,+)$;
- if $g$ has finite order $n$, necessarily $n\ge1$, then $G\cong(\mathbb Z/n,+)$.

## Facts & Assumptions

**Given:** A group $G$ and an element $g\in G$ with $G=\langle g\rangle$.

[L1] A cyclic subgroup is precisely the set of all integer powers of its generator
([[lem-cyclic-subgroup-is-the-set-of-powers]]).

[L2] For finite order $n$, $g^k=e$ exactly when $n\mid k$, while for infinite
order no nonzero integer power of $g$ is the identity
([[lem-order-characterisation]]).

[L3] Integer powers satisfy $g^{r+s}=g^rg^s$ and
$g^{-s}=(g^s)^{-1}$; a bijective group homomorphism is a group isomorphism
([[lem-group-power-laws]], [[def-group-isomorphism-and-automorphism]]).

[L4] The additive quotient group $(\mathbb Z,+)/n\mathbb Z$ is the group $(\mathbb Z/n,+)$
([[prop-integers-modulo-n-as-a-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $g$ has infinite order. The map $\phi:\mathbb Z\to G$, $r\mapsto g^r$, is a homomorphism by the power law in [L3]. If $g^r=g^s$, then $g^{r-s}=g^r(g^s)^{-1}=e$ by [L3], so [L2] forces $r=s$; it is surjective by [L1]. [L1, L2, L3, given]

1.2 Suppose instead that $g$ has finite order $n$. Then $n\ge1$ by the definition of element order, and $[r]\mapsto g^r$ defines a map $\bar\phi:\mathbb Z/n\to G$ because $[r]=[s]$ means $n\mid(r-s)$, so [L2] gives $g^{r-s}=e$ and [L3] gives $g^r=g^{r-s}g^s=g^s$. [L2, L3, L4, given]

2.1 Hence in the infinite-order case $\phi$ is an isomorphism $\mathbb Z\cong G$. [step 1.1, L3]

2.2 The map $\bar\phi$ is a homomorphism by the power law, is injective because $g^r=g^s$ gives $g^{r-s}=g^r(g^s)^{-1}=e$ by [L3] and then [L2] gives $n\mid(r-s)$, and is surjective by [L1]. [step 1.2, L1, L2, L3]

3.1 Thus $\bar\phi$ is an isomorphism $(\mathbb Z/n,+)\cong G$ in the finite-order case. [step 2.2, L3, L4]

4.1 Steps 2.1 and 3.1 give the asserted classification according as the order of $g$ is infinite or finite. [step 2.1, step 3.1] ∎
