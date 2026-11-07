---
id: thm-lisse-zl-etale-sheaves-and-continuous-pi1-representations
kind: theorem
title: 'Finite-free lisse $\mathbb Z_\ell$ sheaves are continuous representations'
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-lisse-zl-etale-sheaf
  - cor-lisse-etale-sheaves-and-finite-pi1-modules
  - def-etale-fundamental-group-and-fibre-functor
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume full AC, inherited from the finite-coefficient classification and used to choose a compatible sequence of bases of the finite-level fibers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Pro-Étale Cohomology, Section 61.28, Definition 61.28.1"
      url: https://stacks.math.columbia.edu/tag/09BT
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter II, Section 32"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
---

## Statement

Assume AC. Let $X$ be a connected Noetherian scheme with algebraically closed geometric basepoint $\bar x$, let $\ell$ be a prime, and let $r\ge0$. The inverse-limit fiber functor gives an equivalence between rank-$r$ finite-free lisse $\mathbb Z_\ell$ étale sheaf systems on $X$ and finite-free rank-$r$ $\mathbb Z_\ell$-modules with continuous left $\pi_1^{\mathrm{et}}(X,\bar x)$-action by $\mathbb Z_\ell$-linear automorphisms.

## Statement references

[The Stacks Project, Definition 61.28.1](https://stacks.math.columbia.edu/tag/09BT)

[Milne, Lectures on Étale Cohomology, Chapter II, Section 32](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** AC, $X$, $\bar x$, $\ell$, $r$, and the system convention in [[def-lisse-zl-etale-sheaf]].

[F1] [[def-lisse-zl-etale-sheaf]]: the system has finite free rank-$r$ reductions and compatible reduction isomorphisms at every level.

[F2] [[cor-lisse-etale-sheaves-and-finite-pi1-modules]]: at each $n$, lisse sheaves of finite $\mathbb Z/\ell^n\mathbb Z$-modules are equivalent to finite modules with continuous left $\pi_1^{\mathrm{et}}(X,\bar x)$-action.

[F3] [[def-etale-fundamental-group-and-fibre-functor]]: $\pi_1^{\mathrm{et}}(X,\bar x)$ is profinite, and its topology is detected by finite fiber actions.

[A1] [[def-axiom-of-choice]]: AC permits a compatible basis choice through the countable tower of finite-level fibers.

## Proof

**Given:** The data and interfaces [F1]–[F3] under [A1].

1.1 Let $(\mathcal F_n)$ be a system and put $M_n=(\mathcal F_n)_{\bar x}$. By [F2], each $M_n$ has a continuous left action of $\pi_1^{\mathrm{et}}(X,\bar x)$. The reductions in [F1] induce equivariant isomorphisms $M_{n+1}/\ell^nM_{n+1}\cong M_n$, so the quotient maps $M_{n+1}\to M_n$ are surjective and compatible. [F1, F2, F3]

2.1 If $r=0$, every $M_n$ is zero and their inverse limit is $\mathbb Z_\ell^0=0$. Suppose $r>0$. Fix a basis of $M_1$. Given a basis of $M_n$, surjectivity lets us lift each of its $r$ vectors to $M_{n+1}$. The reductions of these lifts modulo $\ell$ form a basis of $M_{n+1}/\ell M_{n+1}$, since reduction from $M_{n+1}/\ell$ to $M_n/\ell$ is an isomorphism by [F1]. In any basis of the free module $M_{n+1}$, the lifted vectors therefore form the columns of a matrix invertible modulo $\ell$; its determinant is a unit modulo $\ell^{n+1}$, and the adjugate formula makes the matrix invertible over $\mathbb Z/\ell^{n+1}\mathbb Z$. They are a basis. Using AC, repeat this construction compatibly for every $n$. The compatible bases identify $\varprojlim_n M_n$ with $\varprojlim_n(\mathbb Z/\ell^n\mathbb Z)^r=\mathbb Z_\ell^r$. [F1, A1, step 1.1, construct]

3.1 The compatible actions on the $M_n$ define an action on $M=\varprojlim_nM_n$ coordinatewise. It is $\mathbb Z_\ell$-linear because each finite-level action is $\mathbb Z/\ell^n\mathbb Z$-linear. It is continuous: a basic neighborhood of the identity in $\operatorname{GL}_r(\mathbb Z_\ell)$ is the kernel of reduction to some $\operatorname{GL}_r(\mathbb Z/\ell^n\mathbb Z)$, whose inverse image is open by continuity of the $n$th action in [F2]. [F2, F3, step 1.1, step 2.1]

4.1 Conversely, let $M$ be a finite-free rank-$r$ $\mathbb Z_\ell$-module with continuous action. Each quotient $M_n=M/\ell^nM$ is finite, and the reduced action is continuous into the finite discrete automorphism group. By [F2], it corresponds to a lisse sheaf $\mathcal F_n$. The quotient sheaf $\mathcal F_{n+1}/\ell^n\mathcal F_{n+1}$ is lisse and has fiber $M_{n+1}/\ell^nM_{n+1}$; the given reduction isomorphism identifies this fiber with $M_n$ equivariantly. Full faithfulness and conservativity in [F2] therefore identify that quotient sheaf with $\mathcal F_n$. Thus the $\mathcal F_n$ form a system as in [F1]. [F1, F2, step 3.1, construct]

5.1 A compatible family of equivariant maps between the finite-level fibers gives, by [F2], a compatible family of sheaf maps. Taking inverse limits gives a unique $\mathbb Z_\ell$-linear equivariant map between the inverse-limit modules. Conversely, any such $\mathbb Z_\ell$-linear map reduces to that compatible family. The two constructions are inverse on objects by steps 1.1, 2.1, 3.1, and 4.1 and on morphisms by this reduction argument. This proves the equivalence. AC is used only through [F2] and the compatible-basis selection in step 2.1. [F1, F2, F3, A1, step 1.1, step 2.1, step 3.1, step 4.1] ∎
