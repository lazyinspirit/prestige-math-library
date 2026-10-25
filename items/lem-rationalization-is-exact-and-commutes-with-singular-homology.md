---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-rationalization-is-exact-and-commutes-with-singular-homology.json
  precheck: pass
id: lem-rationalization-is-exact-and-commutes-with-singular-homology
kind: lemma
title: "Rationalization is exact and commutes with singular homology"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-localisation-of-a-module
  - thm-localisation-of-modules-is-exact
  - thm-localisation-of-modules-is-tensor-product
  - thm-localisation-of-modules-commutes-with-quotients-and-sums
  - def-singular-chain-complex-and-singular-homology
  - thm-every-independent-set-extends-to-a-basis
  - def-axiom-of-choice
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Altman and Kleiman, A Term of Commutative Algebra, 13th edition"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
      locator: "Corollary 12.13, Theorem 12.20, and Corollary 12.22: tensor description, exactness, and sums/quotients of localization"

---

## Statement

Assume AC. For every abelian group $A$, $A\otimes_{\mathbb Z}\mathbb Q$ is its positive-integer localization: every element is $a/s$ and $a/s=0$ iff $a$ is killed by some positive integer. Thus $A\otimes\mathbb Q=0$ iff $A$ is torsion. Rationalization is exact and commutes with direct sums. Naturally for every space $Y$, $H_j(Y;\mathbb Z)\otimes\mathbb Q\cong H_j(Y;\mathbb Q)$; for every rational vector space $V$, $H_j(Y;V)\cong H_j(Y;\mathbb Q)\otimes_{\mathbb Q} V$.

## Facts & Assumptions

**Given:** AC; an abelian group $A$, a space $Y$, and a rational vector space $V$; the positive integers as the multiplicative set with localization $\mathbb Q$.

[F1] For a commutative ring $R$, a multiplicative set $S$ and an $R$-module $A$, the localization $S^{-1}A$ is the tensor product $A\otimes_R S^{-1}R$; every element of $A\otimes_{\mathbb Z}\mathbb Q$ is a fraction $a/s$, and $a/s=0$ if and only if some positive integer kills $a$ ([[def-localisation-of-a-module]], [[thm-localisation-of-modules-is-tensor-product]]).

[F2] Localization is exact and commutes with direct sums and quotients for the multiplicative set of positive integers ([[thm-localisation-of-modules-is-exact]], [[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

[F3] Singular chains and homology with coefficients are the free construction on simplices, natural in the space ([[def-singular-chain-complex-and-singular-homology]]).

[F4] Under AC every vector space has a basis and every independent set extends to one ([[def-axiom-of-choice]], [[thm-every-independent-set-extends-to-a-basis]]).

## Proof

**Proof technique:** direct.

1.1 Apply the published localization/tensor theorem with $\mathbb Z$ and the nonzero positive integers, whose ring localization is $\mathbb Q$. In the fraction definition equality of $a/s$ with $0/1$ means $u a=0$ for some positive $u$. A finite sum of tensors $a_t\otimes(r_t/s_t)$ has a common denominator, and hence is a single fraction, so this criterion applies to every element. Exactness and direct sums are precisely the published localization statements. [given, F1, F2, algebra]

2.1 For a chain complex $C$, apply exact rationalization to $0\to Z_j(C)\to C_j\to B_{j-1}(C)\to0$ and $0\to B_j(C)\to Z_j(C)\to H_j(C)\to0$. It identifies the cycles and boundaries in $C\otimes\mathbb Q$ with the rationalizations of the original cycles and boundaries, hence identifies homology. The basis of singular simplices gives the literal chain isomorphism $C_*(Y;\mathbb Z)\otimes\mathbb Q=C_*(Y;\mathbb Q)$, compatible with every continuous map. Finally choose a basis of $V$ under AC. Tensoring a rational complex with $V$ is a direct sum of copies of that complex. Kernels and images of its coordinate differential are direct sums of kernels and images, since elements have finite support. This proves the $V$ assertion; the natural tensor map, not the auxiliary basis, supplies the isomorphism. [step 1.1, F2, F3, F4, algebra] ∎
