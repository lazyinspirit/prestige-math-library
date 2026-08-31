---
id: thm-a-subobject-classifier-represents-the-subobject-functor
kind: theorem
title: "With a supplied well-powering, a subobject classifier represents the subobject functor"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-subobject-classifier, def-well-powered-and-co-well-powered-category, def-presheaf-representable-functor-and-representation, def-subobject-and-quotient-object, thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tom Leinster, Basic Category Theory, Exercise 6.3.26"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., IV.9"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
---

## Statement

Assume $\mathcal C$ is locally small, has a subobject classifier $\operatorname{true}:\mathbf 1\to\Omega$, and has a supplied well-powering $X\mapsto M_X$. For each object $X$, let $\operatorname{Sub}_M(X)$ be the quotient set of $M_X$ by mutual factorization. Then $X\mapsto\operatorname{Sub}_M(X)$ is a contravariant Set-valued functor, and the classifier induces a natural isomorphism

$$\mathcal C(-,\Omega)\xRightarrow{\cong}\operatorname{Sub}_M.$$

Thus $\Omega$ represents the supplied representative-set form of the subobject functor.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$ with a subobject classifier $\operatorname{true}:\mathbf 1\to\Omega$ and a supplied well-powering $X\mapsto M_X$.

[L1] A subobject classifier assigns to each monomorphism $m:A\to X$ a unique classifying map $\chi_m:X\to\Omega$ whose pullback of $\operatorname{true}$ recovers the same subobject ([[def-subobject-classifier]]).

[L2] A supplied well-powering gives a set $M_X$ of monomorphisms into each object $X$, containing a representative of every subobject class ([[def-well-powered-and-co-well-powered-category]]).

[L3] Mutual factorization is an equivalence relation on monomorphisms into a fixed object, and subobjects are precisely those equivalence classes ([[def-subobject-and-quotient-object]], [[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]]).

[L4] A contravariantly representable functor is a natural isomorphism $\mathcal C(-,\Omega)\cong P$ for some presheaf $P$ ([[def-presheaf-representable-functor-and-representation]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the quotient $\operatorname{Sub}_M(X):=M_X/{\sim}$ by mutual factorization is a well-defined set for each $X$, and its elements correspond exactly to subobject classes of $X$ represented inside the supplied set $M_X$. [given, L2, L3]

2.1 For a morphism $u:X\to Y$ and a class $[m]\in\operatorname{Sub}_M(Y)$, pull back $m$ along $u$. The resulting monomorphism into $X$ defines a subobject class of $X$, and [L2] provides a representative of that class in $M_X$; step 1.1 shows that the resulting element of $\operatorname{Sub}_M(X)$ is independent of the chosen representative. Hence $X\mapsto\operatorname{Sub}_M(X)$ is a contravariant functor. [step 1.1, L2, L3, construct]

3.1 For each $X$, define $\Phi_X:\mathcal C(X,\Omega)\to\operatorname{Sub}_M(X)$ by sending $f:X\to\Omega$ to the class of the pullback of $\operatorname{true}$ along $f$. Conversely, define $\Psi_X:\operatorname{Sub}_M(X)\to\mathcal C(X,\Omega)$ by sending the class of $m$ to its unique classifying map $\chi_m$ from [L1]. [given, L1, step 2.1, construct]

4.1 The composites are identities. If $f:X\to\Omega$, then $\Psi_X(\Phi_X(f))=f$ because the pullback subobject of $\operatorname{true}$ along $f$ is classified by $f$ itself, and that classifying map is unique by [L1]. If $[m]\in\operatorname{Sub}_M(X)$, then the pullback of $\operatorname{true}$ along $\chi_m$ represents the same subobject class as $m$, so $\Phi_X(\Psi_X([m]))=[m]$. Naturality follows because pullback commutes with composition of classifying maps. [step 3.1, L1, L3, algebra]

5.1 Therefore $\Phi$ is a natural isomorphism $\mathcal C(-,\Omega)\cong\operatorname{Sub}_M$. By [L4], $\Omega$ represents the supplied representative-set form of the subobject functor. [step 2.1, step 4.1, L4] ∎
