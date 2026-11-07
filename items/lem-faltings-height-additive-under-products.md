---
id: lem-faltings-height-additive-under-products
kind: lemma
title: "Faltings height is additive under products"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-archimedean-embeddings-and-number-field-signature
  - def-fractional-ideal
  - def-height-of-a-rank-one-normed-module-over-number-ring
  - cor-ring-of-integers-is-a-dedekind-domain
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - def-stable-faltings-height-of-an-abelian-variety
  - lem-faltings-differentials-module-has-rank-one
  - lem-rank-one-projective-embedded-as-a-fractional-ideal
  - thm-projective-modules-are-flat
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-product-of-neron-models-and-invariant-differentials
  - thm-stable-faltings-height-independent-of-semistable-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §2"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 355–356; determinant-of-differentials height convention."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. Let $A/K$ and $B/K$ be abelian varieties over a number field with semistable reduction. Then their stable Faltings heights satisfy
$$h_F(A\times B)=h_F(A)+h_F(B).$$

## Statement references

[[def-stable-faltings-height-of-an-abelian-variety]]

[[def-height-of-a-rank-one-normed-module-over-number-ring]]

[[lem-product-of-neron-models-and-invariant-differentials]]

[[thm-stable-faltings-height-independent-of-semistable-extension]]

[Faltings 1983, §2](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

## Facts & Assumptions

**Given:** AC and DC; a number field $K$, semistable abelian varieties $A,B/K$, their Néron models $\mathcal N_A,\mathcal N_B$ over $R=\mathcal O_K$, their fiberwise semiabelian identity components $\mathcal A=\mathcal N_A^0$, $\mathcal B=\mathcal N_B^0$, identity sections $e_A,e_B$, and the modules $M=e_A^*(\bigwedge^{\dim A}\Omega^1_{\mathcal A/R})$, $N=e_B^*(\bigwedge^{\dim B}\Omega^1_{\mathcal B/R})$ with nonzero $m\in M$, $n\in N$.

[A1] [[def-axiom-of-choice]]: AC is inherited from the supplied height/model interface; the displayed local calculation makes no further use of it.

[A2] [[def-dependent-choice]]: DC is inherited from the supplied height/model interface; the displayed local calculation makes no further use of it.

[F1] [[def-stable-faltings-height-of-an-abelian-variety]]: the height is the normalized degree of the rank-one invariant top-differential module with its Faltings metric.

[F2] [[def-height-of-a-rank-one-normed-module-over-number-ring]]: the module height is computed from finite index and weighted archimedean norms.

[F3] [[lem-rank-one-projective-embedded-as-a-fractional-ideal]]: rank-one projective modules over $R$ are invertible fractional ideals and their tensor product is represented by the product ideal.

[F4] [[cor-ring-of-integers-is-a-dedekind-domain]] and [[lem-nonzero-number-field-ideal-has-finite-quotient]]: finite $R$-modules have finite composition series with factors $R/\mathfrak p$, and each residue field $R/\mathfrak p$ is finite.

[F5] [[thm-projective-modules-are-flat]]: tensoring with the projective rank-one module $\omega_{B/K}$ preserves short exact sequences.

[F6] [[lem-product-of-neron-models-and-invariant-differentials]]: the product of the full Néron models is a Néron model of $A\times B$, and its cotangent module at the identity is the direct sum of those of the factors. Since each identity component is open and contains the identity, this gives the same invariant differential line used in [F1], namely $M\otimes_RN$.

[F7] [[thm-stable-faltings-height-independent-of-semistable-extension]]: the module heights computed from these semistable Néron models are the stable Faltings heights.

## Proof

**Proof technique:** identify the product differential line and add its finite and archimedean degrees.

**Given:** [F1]–[F7] and the data in the Facts & Assumptions.

1.1 By [F6], the product of the given Néron models is the Néron model of $A\times B$ and its invariant cotangent module at the identity is the direct sum of the factor modules. The determinant-line isomorphism in [F6] therefore identifies the product's invariant top-differential module with $M\otimes_RN$. [F1, F6, given, algebra]

2.1 Let $Q=M/Rm$, which is finite by [F2]. Since $N$ is flat by [F5], tensoring $0\to Rm\to M\to Q\to0$ with $N$ is exact. Under $Rm\otimes_RN\cong N$, quotienting by $R(m\otimes n)$ gives an exact sequence $$0\to N/Rn\to (M\otimes_RN)/R(m\otimes n)\to Q\otimes_RN\to0.$$ A composition series of $Q$ has simple factors $R/\mathfrak p$; tensoring each factor with the rank-one projective module $N$ gives $N/\mathfrak pN$, which is one-dimensional over $R/\mathfrak p$ because $N$ is locally free of rank one. Hence $\#(Q\otimes_RN)=\#Q$, and the finite-index numerator for $m\otimes n$ is the product of those for $m$ and $n$. [F2, F3, F4, F5, given, step 1.1, algebra]

2.2 Let $a=\dim A$ and $b=\dim B$. The top form on the product is $m\wedge n$. Reordering factors gives $$m\wedge n\wedge\overline m\wedge\overline n=(-1)^{ab}(m\wedge\overline m)\wedge(n\wedge\overline n).$$ Also $i^{(a+b)^2}=(-1)^{ab}i^{a^2}i^{b^2}$. The two signs cancel in the Faltings metric of [F1], and Fubini on $A(\mathbb C)\times B(\mathbb C)$ therefore gives $\|m\wedge n\|_v^2=\|m\|_v^2\|n\|_v^2$ and hence $\|m\wedge n\|_v=\|m\|_v\|n\|_v$. [F1, step 1.1, algebra]

3.1 Substitute the finite-index identity of step 2.1 and the archimedean norm identity of step 2.2 into the rank-one module height formula [F2]. By [F7], these module heights compute the stable Faltings heights in the Statement. The numerator and denominator each factor, and taking logarithms and dividing by $[K:\mathbb Q]$ gives $h_F(A\times B)=h_F(A)+h_F(B)$. [F2, F7, step 2.1, step 2.2, algebra] ∎
## Proof status

The calculation proves the Statement using the declared stable-height independence theorem. Readiness remains dependent on that theorem and its prerequisites.
