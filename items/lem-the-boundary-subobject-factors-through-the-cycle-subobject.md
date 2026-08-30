---
id: lem-the-boundary-subobject-factors-through-the-cycle-subobject
kind: lemma
title: "The boundary subobject factors through the cycle subobject"
status: draft
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cycle-and-boundary-subobjects-of-a-complex,
       def-chain-complex-in-an-abelian-category,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers,
       thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Romyar Sharifi, Homological Algebra, Definition 2.7.7"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Statement

Let $C_\bullet$ be a chain complex in an abelian category. For every
$n\in\mathbb Z$, the boundary inclusion $B_n(C)\hookrightarrow C_n$ factors
uniquely through the cycle inclusion $Z_n(C)\hookrightarrow C_n$.

## Facts & Assumptions

**Given:** A chain complex $C_\bullet$ and an integer $n$.

[L1] In a chain complex, $d_n d_{n+1}=0$ ([[def-chain-complex-in-an-abelian-category]]).

[L2] A kernel $k:Z_n(C)\to C_n$ is characterized by $d_n k=0$ and universal factorization among arrows annihilated by $d_n$ ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

[L3] Every morphism admits an epic-monic factorization; in particular $d_{n+1}$ factors as $$C_{n+1}\xrightarrow{e}B_n(C)\xrightarrow{i}C_n$$ with $e$ epic and $i$ monic ([[thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], write $d_{n+1}=i e$ with $i:B_n(C)\to C_n$ monic and $e$ epic. Then $$d_n i e=d_n d_{n+1}=0$$ by [L1], so epicity of $e$ gives $d_n i=0$. [L1, L3, given, algebra]

2.1 Since $d_n i=0$, the kernel property in [L2] gives a unique morphism $\beta_n:B_n(C)\to Z_n(C)$ with $k\beta_n=i$, where $k:Z_n(C)\to C_n$ is the cycle inclusion. That is exactly the required factorization. [L2, step 1.1, construct, discharge-construct] ∎
