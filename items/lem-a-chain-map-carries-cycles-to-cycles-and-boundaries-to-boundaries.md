---
id: lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries
kind: lemma
title: "A chain map carries cycles to cycles and boundaries to boundaries"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-map,
       def-cycle-and-boundary-subobjects-of-a-complex,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers,
       thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism,
       thm-every-monomorphism-is-the-kernel-of-its-cokernel]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Romyar Sharifi, Homological Algebra, Lemma 2.7.10"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Statement

Let $f:C_\bullet\to D_\bullet$ be a chain map. For every $n\in\mathbb Z$ there
are induced morphisms
$$Z_n(f):Z_n(C)\to Z_n(D),\qquad B_n(f):B_n(C)\to B_n(D),$$
compatible with the canonical inclusions into $C_n$ and $D_n$.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$ and an integer $n$.

[L1] A chain map satisfies $d_n^D f_n=f_{n-1} d_n^C$ ([[def-chain-map]]).

[L2] Kernels are universal among arrows killed by the given morphism ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

[L3] Write $d_{n+1}^C=i_C e_C$ and $d_{n+1}^D=i_D e_D$ as epic-monic factorizations, where $i_C$ and $i_D$ are the boundary inclusions ([[thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]]).

[L4] In an abelian category, every monomorphism is the kernel of its cokernel ([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Let $k_C:Z_n(C)\to C_n$ and $k_D:Z_n(D)\to D_n$ be the cycle inclusions. Using [L1], $$d_n^D f_n k_C=f_{n-1} d_n^C k_C=0,$$ so [L2] yields a unique map $Z_n(f):Z_n(C)\to Z_n(D)$ with $k_D Z_n(f)=f_n k_C$. [L1, L2, given, construct]

2.1 By [L3], $$f_n i_C e_C=f_n d_{n+1}^C=d_{n+1}^D f_{n+1}=i_D e_D f_{n+1}.$$ Let $c_D$ be a cokernel of $i_D$. Then $$c_D f_n i_C e_C=c_D i_D e_D f_{n+1}=0.$$ Since $e_C$ is epic, this implies $c_D f_n i_C=0$. By [L4], the monomorphism $i_D$ is a kernel of $c_D$, so [L2] gives a unique morphism $$B_n(f):B_n(C)\to B_n(D)$$ with $$i_D B_n(f)=f_n i_C.$$ This is the required boundary map. [L1, L2, L3, L4, given, algebra, construct, discharge-construct] ∎
