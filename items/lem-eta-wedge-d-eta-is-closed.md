---
id: lem-eta-wedge-d-eta-is-closed
kind: lemma
title: "The Godbillon-Vey form eta wedge d eta is closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-forms-annihilated-by-a-nowhere-vanishing-one-form-are-divisible-by-it, lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega, thm-the-exterior-derivative-is-a-graded-derivation, thm-the-exterior-derivative-squares-to-zero, thm-wedge-product-is-associative-and-graded-commutative, prop-differential-forms-form-a-graded-commutative-algebra, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 3
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steven Hurder and Remi Langevin, Dynamics and the Godbillon-Vey Class of C1 Foliations (complete author-hosted PDF)"
      url: "https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf"
      locator: "\u00a73.1, printed p. 10, equations (13) and following (d eta is a multiple of omega and eta wedge d eta is closed)"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a transversely oriented
codimension-one foliation with defining form $\omega$ and $d\omega=\eta\wedge\omega$.
Then $d\eta\wedge\omega=0$; the $2$-form $d\eta$ is divisible by $\omega$, i.e.
$d\eta=\zeta\wedge\omega$ for a smooth $1$-form $\zeta$; $d\eta\wedge d\eta=0$; and
$d(\eta\wedge d\eta)=0$. Consequently $\eta\wedge d\eta$ is a closed $3$-form on $M$.

## Facts & Assumptions
**Given:** A transversely oriented codimension-one foliation $F$ of a smooth manifold $M$ with defining one-form $\omega$ and a one-form $\eta$ satisfying $d\omega=\eta\wedge\omega$, and the standing countable choice assumption.

[F1] Under $\mathrm{AC}_\omega$, if $\omega$ is nowhere vanishing and $\theta\wedge\omega=0$ for a smooth two-form $\theta$, then $\theta=\beta\wedge\omega$ for a smooth one-form $\beta$. ([[lem-forms-annihilated-by-a-nowhere-vanishing-one-form-are-divisible-by-it]]).

[F2] For homogeneous smooth forms $\alpha,\beta$ one has $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta$. ([[thm-the-exterior-derivative-is-a-graded-derivation]]).

[F3] For every differential form $\omega$, $d(d\omega)=0$. ([[thm-the-exterior-derivative-squares-to-zero]]).

[F4] The wedge product is associative and graded-commutative, so $\zeta\wedge\zeta=0$ for a one-form $\zeta$ and $\omega\wedge\omega=0$. ([[thm-wedge-product-is-associative-and-graded-commutative]]).



## Proof

**Proof technique:** direct.

1.1 Differentiating $d\omega=\eta\wedge\omega$ with the Leibniz rule [F2] and $d^2=0$ [F3] gives $0=d\eta\wedge\omega-\eta\wedge d\omega=d\eta\wedge\omega-\eta\wedge\eta\wedge\omega$, and $\eta\wedge\eta=0$ by graded commutativity [F4], so $d\eta\wedge\omega=0$. [F2, F3, F4, given]

2.1 Since $\omega$ is nowhere vanishing and the two-form $d\eta$ satisfies $d\eta\wedge\omega=0$, the divisibility lemma [F1] gives a smooth one-form $\zeta$ with $d\eta=\zeta\wedge\omega$. [F1, step 1.1]

3.1 Then $d\eta\wedge d\eta=(\zeta\wedge\omega)\wedge(\zeta\wedge\omega)=-\zeta\wedge\zeta\wedge\omega\wedge\omega=0$ by associativity and graded commutativity with $\zeta\wedge\zeta=0$ and $\omega\wedge\omega=0$ [F4]. [F4, step 2.1]

4.1 Finally $d(\eta\wedge d\eta)=d\eta\wedge d\eta-\eta\wedge d(d\eta)=0$ by the graded Leibniz rule [F2] and $d^2=0$ [F3], so $\eta\wedge d\eta$ is a closed three-form. The standing $\mathrm{AC}_\omega$ assumption licenses the global divisibility result in step 2.1; the remaining calculations are formal exterior-algebra identities. [F2, F3, step 3.1] ∎
