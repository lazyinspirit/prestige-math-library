---
id: ex-finite-flat-mu-p-versus-etale-z-p
kind: example
title: "μp is finite flat but not étale in residue characteristic p"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-etale-morphism-schemes
  - thm-etale-equivalent-flat-unramified-fp
justified_by: []
proof_strategy: direct
axiom_use: "The rank and Kähler-differential calculations are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter III, §0"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, §2, Remark 2.2"
      url: "https://arxiv.org/pdf/1804.03941"
verification: {}
---

## Example

Let $R=\mathbb F_p[[t]]$ and $S=\operatorname{Spec}R$. The group scheme
$\mu_p=\operatorname{Spec}(R[T]/(T^p-1))$ is finite locally free of rank $p$
over $S$, but is not étale. Its Cartier dual is the constant group scheme
$\underline{\mathbb Z/p\mathbb Z}$.

## Example references

[[def-finite-flat-group-scheme-and-cartier-dual]]

[Milne, *Arithmetic Duality Theorems*, Chapter III, §0](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Demarche–Harari, Remark 2.2](https://arxiv.org/pdf/1804.03941)

## Facts & Assumptions

**Given:** The prime $p$ and the power-series valuation ring $R=\mathbb F_p[[t]]$.

[F1] [[def-finite-flat-group-scheme-and-cartier-dual]] defines finite locally
free commutative group schemes and Cartier duals.

[F2] [[def-etale-morphism-schemes]]: an étale morphism is smooth of relative
dimension zero, hence is formally unramified.

[F3] [[thm-etale-equivalent-flat-unramified-fp]] supplies the equivalent
flat-and-unramified criterion for morphisms locally of finite presentation.

## Proof

**Proof technique:** compute the coordinate algebra, group law, and differentials.

**Given:** The data in the Example.

1.1 In characteristic $p$, $T^p-1=(T-1)^p$, so the coordinate algebra is
$R[T]/((T-1)^p)$. It is free over $R$ on $1,(T-1),\ldots,(T-1)^{p-1}$,
and the multiplicative comultiplication $T\mapsto T\otimes T$ makes its
spectrum the kernel of $[p]$ on $\mathbb G_m$. Thus it is finite locally free
of rank $p$. [given, F1, algebra]

1.2 For $A=R[T]/((T-1)^p)$, the module of relative differentials is
$\Omega_{A/R}=A\,dT/(pT^{p-1}dT)=A\,dT$, which is nonzero. An étale morphism
of finite presentation is unramified and has zero relative differentials by
[F2]–[F3]; therefore $\mu_p\to S$ is not étale. [F2, F3, step 1.1, algebra]

2.1 The coordinate Hopf algebra is the dual Hopf algebra of the constant
cyclic group scheme algebra under the finite-projective duality in [F1]; hence
its Cartier dual is $\underline{\mathbb Z/p\mathbb Z}$. [F1, step 1.1, algebra] ∎
