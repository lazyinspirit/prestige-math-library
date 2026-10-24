---
id: ex-nonfaithful-coset-action-of-z-six
kind: example
title: 'The action of $\mathbb Z/6$ on the cosets of $\{0,3\}$ is transitive with kernel $\{0,3\}$ and is not faithful'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-left-coset-action-and-its-kernel, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n, def-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets, Proposition 3.102"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Example

In the additive group $G=\mathbb Z/6$, let $H=\{0,3\}$. The action of $G$ on
$G/H$ by translation is transitive and has kernel $H$, so it is not faithful.

## Facts & Assumptions

**Given:** The additive group $G=\mathbb Z/6$ and the subset $H=\{0,3\}$.

[L1] The left-coset action is transitive and its kernel is the core of the subgroup ([[thm-left-coset-action-and-its-kernel]]).

[L2] Addition modulo $6$ makes $\mathbb Z/6$ an abelian group ([[thm-integers-modulo-n-basic-algebra]]).

[L3] The residue classes have representatives $0,1,2,3,4,5$ ([[thm-standard-representatives-modulo-n]]).

[L4] A subgroup contains the identity and is closed under the operation and inverses ([[def-subgroup]]).

## Verification

**Proof technique:** direct.

1.1 The set $H$ contains $0$, is closed under addition since $3+3=0$, and contains additive inverses; hence $H\le G$ by [L2], [L3], and [L4]. Its cosets are $H=\{0,3\}$, $1+H=\{1,4\}$, and $2+H=\{2,5\}$. [L2, L3, L4]

2.1 Since $G$ is abelian, every conjugate of $H$ is $H$, so $\operatorname{Core}_G(H)=H$. [step 1.1, L2, algebra]

3.1 By [L1], the coset action is transitive and has kernel $H$. Since $3\ne0$ lies in the kernel, the action is not faithful. [step 1.1, step 2.1, L1, L3] ∎
