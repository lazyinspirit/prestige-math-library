---
id: thm-type-iib-lorentzian-hodge-star-properties
kind: theorem
title: Existence and Five-Form Properties of the Lorentzian Hodge Star
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
deps:
  - def-type-iib-lorentzian-hodge-star
  - thm-sylvesters-law-of-inertia
  - thm-increasing-basis-wedges-form-a-basis
  - thm-wedge-product-is-associative-and-graded-commutative
dependency_roles:
  def-type-iib-lorentzian-hodge-star: mathematical-premise
  thm-sylvesters-law-of-inertia: mathematical-premise
  thm-increasing-basis-wedges-form-a-basis: mathematical-premise
  thm-wedge-product-is-associative-and-graded-commutative: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "Chapter 1, Hodge duality, equations (1.87)-(1.88), PDF pp. 29-30; Chapter 2, equation (2.42), PDF p. 58."
aliases: []
---

## Statement

For every oriented smooth $10$-manifold with a smooth Lorentzian metric $g$ of inertia $(9,1,0)$, the metric volume form and Hodge star of *Lorentzian Hodge Star in Ten Dimensions* are well-defined, smooth, and unique. On $5$-forms, $*_g^2=\operatorname{id}$, and the $+1$ and $-1$ eigenspaces each have dimension $126$ at every point.

## Statement references

[[def-type-iib-lorentzian-hodge-star]]

[[thm-sylvesters-law-of-inertia]]

[[thm-increasing-basis-wedges-form-a-basis]]

## Facts & Assumptions

**Given:** An oriented smooth $10$-manifold $M$, a smooth nondegenerate symmetric metric field $g$ of inertia $(9,1,0)$, and the pointwise definition of $*_g$.

[F1] [[def-type-iib-lorentzian-hodge-star]]: in a positive chart $\operatorname{vol}_g=\sqrt{|\det g|}\,dx^0\wedge\cdots\wedge dx^9$, and $*_g$ is characterized by $\alpha\wedge *_g\beta=\langle\alpha,\beta\rangle_g\operatorname{vol}_g$ with $\langle\alpha,\beta\rangle_g=(1/p!)\alpha_{\mu_1\cdots\mu_p}\beta^{\mu_1\cdots\mu_p}$.

[F2] [[thm-sylvesters-law-of-inertia]]: a finite-dimensional real symmetric form of inertia $(9,1,0)$ has a basis with diagonal matrix $\operatorname{diag}(-1,+1,\ldots,+1)$.

[F3] [[thm-increasing-basis-wedges-form-a-basis]]: the increasing wedges of a basis and their complementary wedges give bases of the corresponding exterior powers.

[F4] [[thm-wedge-product-is-associative-and-graded-commutative]]: for forms of degrees $r,s$, $\alpha\wedge\beta=(-1)^{rs}\beta\wedge\alpha$.

## Proof

1.1 At each $x\in M$, [F2] supplies a pseudo-orthonormal basis. If it has negative orientation, reversing one spacelike basis vector preserves its metric matrix and changes the orientation sign, so a positive pseudo-orthonormal coframe exists. If two such positive coframes are related by $A$, then $A^T\eta A=\eta$ for $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$; taking determinants gives $(\det A)^2=1$, and orientation preservation gives $\det A>0$, hence $\det A=1$. Therefore their top wedges agree. In a positive coordinate change $x'=f(x)$, $\det(g')=\det(g)/(\det Df)^2$ while $dx'^0\wedge\cdots\wedge dx'^9=(\det Df)\,dx^0\wedge\cdots\wedge dx^9$; because $\det Df>0$, the displayed coordinate volume forms agree. The coefficient $\sqrt{|\det g|}$ is smooth since $\det g$ never vanishes. Thus $\operatorname{vol}_g$ is a well-defined smooth top form. [F1, F2, algebra]

2.1 In the coframe of step 1.1, for a subset $I\subset\{0,\ldots,9\}$ write $e^I$ for its increasing wedge and $I^c$ for its complement. By [F3], the $e^I$ form a basis in degree $p$ and the $e^{I^c}$ form a basis in degree $10-p$. Their metric pairing is diagonal: $\langle e^I,e^J\rangle_g=0$ for $I\ne J$ and $\langle e^I,e^I\rangle_g=\eta_I:=\prod_{i\in I}\eta_{ii}\in\{-1,+1\}$. Also $e^I\wedge e^{I^c}=\epsilon_I\operatorname{vol}_g$, where $\epsilon_I\in\{-1,+1\}$ is the permutation sign of the concatenated indices. Consequently the unique map satisfying the defining equation on basis pairs is $*_g e^I=\eta_I\epsilon_I e^{I^c}$; bilinearity extends the equation to all forms, and the complementary-basis pairing proves uniqueness. This map sends a basis to nonzero multiples of a basis, so it is an isomorphism. Its coordinate coefficients are algebraic expressions in $g^{-1}$ and $\sqrt{|\det g|}$, hence are smooth. [F1, F3, step 1.1, algebra]

3.1 For $|I|=5$, applying the formula twice gives $*_g^2e^I=\eta_I\eta_{I^c}\epsilon_I\epsilon_{I^c}e^I$. There is exactly one negative diagonal entry, so $\eta_I\eta_{I^c}=\prod_{i=0}^{9}\eta_{ii}=-1$. Interchanging the two blocks of five indices uses $5\cdot5=25$ transpositions, so $\epsilon_I\epsilon_{I^c}=(-1)^{25}=-1$ by [F4]. Their product is $+1$, and linearity proves $*_g^2=\operatorname{id}$ on every $5$-form. [F1, F2, F4, step 2.1, algebra]

4.1 No $5$-element subset equals its complement, so the $252=\binom{10}{5}$ basis wedges split into $126$ disjoint pairs $\{e^I,e^{I^c}\}$. On each pair $*_g$ exchanges the two basis lines with nonzero coefficients, and step 3.1 makes their product $1$. The vectors $e^I+*_ge^I$ and $e^I-*_ge^I$ are nonzero eigenvectors with eigenvalues $+1$ and $-1$, respectively; each pair therefore contributes one dimension to each eigenspace. Both eigenspaces have dimension $126$. [step 2.1, step 3.1, algebra] ∎
