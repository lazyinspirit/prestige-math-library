---
id: lem-unramified-local-tate-annihilators-prime-to-residue-characteristic
kind: lemma
title: Unramified local Tate cohomology subgroups are exact annihilators
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-local-wild-inertia-subgroup-of-absolute-galois-group
  - thm-absolute-galois-group-of-finite-field-is-procyclic
  - thm-tame-inertia-structure-and-frobenius-action
  - thm-continuous-lyndon-hochschild-serre-spectral-sequence
  - lem-cyclic-group-cohomology-norm-and-inflation
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-local-finite-module-tate-duality-in-characteristic-zero
  - thm-local-finite-module-tate-duality-prime-to-positive-characteristic
proof_strategy: direct
axiom_use: AC and DC are assumed for the supplied local Tate pairings, inertia structure and continuous cohomology.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Theorem 2.6, printed pp.30–31. The prime-to-residue finite-module counting argument is supplied below.
verification: {}
---

## Statement

Assume AC and DC. Let $K$ be a nonarchimedean local field with finite residue field of order $q$ and characteristic $p$, and fix a separable closure. Let $M$ be a finite continuous Galois module, of order prime to $p$, on which inertia $I$ acts trivially. Put $M^D=\operatorname{Hom}(M,K_s^\times)$, let $G=\operatorname{Gal}(K_s/K)$ and $\Gamma=G/I$, and write $H^1_{\rm ur}(K,N)$ for the image of inflation $H^1(\Gamma,N)\to H^1(G,N)$. Then $I$ acts trivially on $M^D$, and under the actual local Tate pairing the two subgroups $H^1_{\rm ur}(K,M)$ and $H^1_{\rm ur}(K,M^D)$ are exact mutual annihilators. Their orders are $\#M^G$ and $\#(M^D)^G$, respectively. This statement makes no assertion for residue-characteristic torsion.

## Facts & Assumptions

**Given:** The local field, unramified finite module, prime-to-residue order and explicit choices in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] $\Gamma$ is procyclic with arithmetic Frobenius generator. Wild inertia is pro-$p$; the tame inertia quotient is $\prod_{\ell\ne p}\mathbb Z_\ell(1)$, and Frobenius acts on it by $\tau\mapsto\tau^q$. [[thm-absolute-galois-group-of-finite-field-is-procyclic]] [[def-local-wild-inertia-subgroup-of-absolute-galois-group]] [[thm-tame-inertia-structure-and-frobenius-action]]

[F2] The continuous Hochschild–Serre sequence gives inflation–restriction; finite cyclic cohomology has the norm description and its stated inflation maps. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]] [[lem-cyclic-group-cohomology-norm-and-inflation]]

[F3] Simple roots lift over the complete residue field. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F4] The actual normalized local cup product is a perfect pairing on finite Galois modules in characteristic zero and on modules prime to the field characteristic in positive characteristic. [[thm-local-finite-module-tate-duality-in-characteristic-zero]] [[thm-local-finite-module-tate-duality-prime-to-positive-characteristic]]

## Proof

**Proof technique:** compute tame inertia and procyclic cohomology, then compare the two subgroup orders under the perfect local pairing.

1.1 Let $n$ annihilate $M$, with $(n,p)=1$. Reduction identifies the $n$th roots of unity in $K_s$ with those in the separable residue closure: every residue root is simple and lifts by [F3], while a root congruent to $1$ has order prime to $p$ and must be $1$ by the binomial expansion on principal units. Thus inertia fixes $\mu_n$ and also $M^D=\operatorname{Hom}(M,\mu_n)$. Arithmetic Frobenius acts on $\mu_n$ by $z\mapsto z^q$. [F1, F3, given, construct, algebra]

1.2 For a finite $\Gamma$-module $A$, write $\varphi$ for Frobenius. Continuous one-cocycles are determined by their value on $\varphi$; any value occurs because the action factors through a finite quotient and a sufficiently large multiple of that quotient degree makes its norm sum zero. Coboundaries are $(\varphi-1)A$. Hence $H^1(\Gamma,A)=A/(\varphi-1)A$ and its order equals $\#A^\Gamma$. Also $H^2(\Gamma,A)=0$: a finite-level cyclic class has a representative in $A^\varphi/N_dA$ by [F2], and inflating to a cyclic quotient of degree $kd$ multiplies this representative by $k$. Choosing $k$ divisible by $\#A$ kills it. This applies to $M$, $M^D$ and $\mu_n$. [F1, F2, given, construct, algebra]

2.1 The inflation–restriction sequence [F2] and step 1.2 give $0\to H^1(\Gamma,M)\to H^1(G,M)\to H^1(I,M)^\Gamma\to0$. Inertia acts trivially, so $H^1(I,M)=\operatorname{Hom}_{\rm cts}(I,M)$. Its wild pro-$p$ subgroup has no nontrivial homomorphism to the prime-to-$p$ group $M$, and [F1] identifies this Hom group with $M(-1)$. Frobenius acts on it by $q^{-1}\varphi_M$. Its fixed subgroup therefore has order $\#\ker(\varphi_M-q)$, which equals $\#(M^D)^\Gamma$: the Frobenius on the finite dual is $q(\varphi_M^{-1})^*$, and the kernels of an endomorphism and its dual have the same order because kernel and cokernel of an endomorphism of a finite group have equal order. Thus $\#H^1(G,M)=\#M^G\,\#(M^D)^G$. [F1, F2, step 1.1, step 1.2, algebra]

3.1 An unramified class of either module is inflated from $\Gamma$. Their cup product is inflated from $H^2(\Gamma,\mu_n)=0$ by step 1.2, so the two unramified subgroups annihilate one another under the actual local pairing. By step 1.2 their respective orders are $\#M^G$ and $\#(M^D)^G$, whose product is the order of either local $H^1$ by step 2.1 and [F4]. Perfection in [F4] therefore forces each to be the entire annihilator of the other. The zero module and $n=1$ are included. [F4, step 1.1, step 1.2, step 2.1, algebra] ∎
