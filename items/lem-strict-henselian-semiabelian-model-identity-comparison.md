---
id: lem-strict-henselian-semiabelian-model-identity-comparison
kind: lemma
title: "Strictly henselian comparison of semiabelian identity components"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-prime-to-characteristic-multiplication-etale
  - lem-connected-subgroup-of-semiabelian-has-prime-to-p-torsion
  - lem-quasi-finite-morphism-fibre-characterization
  - lem-scheme-zariski-main-factorization-quasi-finite
proof_strategy: direct
sources:
  references:
    - title: "Bosch, Lütkebohmert, Raynaud, Néron Models"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
      locator: "§7.4 Proposition 3, printed pp. 182–183; local strict-henselian reduction."
---

## Statement

Assume AC and DC. Let $R$ be a strictly henselian DVR with algebraically closed residue field $k$ and fraction field $K$. Let $G,\mathcal A$ be smooth separated commutative finite-type $R$-group schemes with connected fibres and abelian-variety generic fibres. Suppose $G_k$ is an extension of an abelian variety by a torus, and let $f:G\to\mathcal A$ be an $R$-group homomorphism inducing an isomorphism on generic fibres. Then $f$ is an isomorphism.

## Facts & Assumptions

**Given:** AC, DC, $R,k,K,G,\mathcal A,f$ as stated.

[A1] AC and DC are assumed. [[def-axiom-of-choice]], [[def-dependent-choice]]

[F2] If $n$ is invertible in $R$, multiplication on a smooth separated commutative finite-type group and its kernel are étale; reduction from $R$-sections to $k$-points of the kernel is bijective. [[lem-arith-prime-to-characteristic-multiplication-etale]]

[F3] Every positive-dimensional smooth connected closed subgroup of the semiabelian special fibre has a nonidentity point killed by any given integer $n\ge2$ prime to $\operatorname{char}k$. [[lem-connected-subgroup-of-semiabelian-has-prime-to-p-torsion]]

[F4] A finite-type morphism with finite fibres is quasi-finite. [[lem-quasi-finite-morphism-fibre-characterization]]

[F5] A separated quasi-finite morphism is locally on its target an open immersion followed by a finite morphism. [[lem-scheme-zariski-main-factorization-quasi-finite]]

## Proof

**Proof technique:** specialize prime-to-characteristic torsion, then use quasi-finiteness and Zariski's Main Theorem.

1.1 The given map $f:G\to\mathcal A$ is a homomorphism and an isomorphism on generic fibres. Both group schemes are smooth and separated with connected fibres. [given]

2.1 Fix $n\ge2$ prime to $\operatorname{char}k$. F2 identifies both $G[n](R)$ and $\mathcal A[n](R)$ with their special-fibre point sets. If $x\in G[n](k)$ maps to the identity in $\mathcal A[n](k)$, lift it to $\widetilde x\in G[n](R)$. By the uniqueness in F2, $f(\widetilde x)$ is the identity section. On the generic fibre $f$ is an isomorphism, hence $\widetilde x_K$ is the identity; separatedness of $G$ makes the two $R$-sections equal because they agree over the dense generic point. Thus $x$ is the identity. Therefore $f_k$ is injective on prime-to-characteristic torsion points. [F2, step 1.1, given]

3.1 If the special-fibre kernel had positive dimension, its reduced identity component over the algebraically closed field $k$ would be a positive-dimensional smooth connected closed subgroup of $G_k$. By F3 it would contain a nonidentity $n$-torsion point, contradicting step 2.1. Hence the kernel has dimension zero and, being finite type over $k$, is finite. Every nonempty fibre of the group homomorphism $f_k$ is a translate of its kernel; the generic-fibre map is an isomorphism. Thus all fibres of $f$ are finite and F4 gives quasi-finiteness. [F3, F4, step 2.1, given]

4.1 The target $\mathcal A$ is smooth over the regular DVR $R$, hence regular and normal. Flatness and the integral generic fibre show that it is integral; the same holds for $G$. By F5, locally on $\mathcal A$ factor the separated quasi-finite birational map $f$ as an open immersion into a scheme finite over the target. Taking the reduced closure of the integral open source gives a finite integral birational target. On each affine target open its coordinate algebra is a finite subalgebra of the common fraction field, so normality forces it to be the target ring. Thus $f$ is an open immersion. [A1, F5, step 3.1, given, algebra]

5.1 Its image is an open subgroup of $\mathcal A$. On the special fibre it is a nonempty open subgroup of the connected group $\mathcal A_k$; its cosets are disjoint open sets, so connectedness makes it the whole special fibre. Its generic image is the entire generic fibre. These are the only two fibres over $\operatorname{Spec}R$, hence $f$ is surjective. A surjective open immersion is an isomorphism, proving the claim. [step 1.1, step 4.1, given] ∎
