---
id: lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega
kind: lemma
title: "Frobenius divisibility: d omega equals eta wedge omega"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-forms-annihilated-by-a-nowhere-vanishing-one-form-are-divisible-by-it, def-transversely-oriented-codimension-one-foliation, cor-codimension-one-frobenius-criterion, thm-wedge-product-is-associative-and-graded-commutative, def-wedge-product-of-differential-forms, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 2
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steven Hurder and Remi Langevin, Dynamics and the Godbillon-Vey Class of C1 Foliations (complete author-hosted PDF)"
      url: "https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf"
      locator: "\u00a73.1, printed pp. 10-11 (integrability implies d omega = omega wedge eta for a suitable 1-form eta)"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a transversely oriented
codimension-one foliation of a smooth manifold $M$ with nowhere-vanishing defining
$1$-form $\omega$, so $TF=\ker\omega$. Then $\omega\wedge d\omega=0$ and there exists a
smooth $1$-form $\eta$ on $M$ with $d\omega=\eta\wedge\omega$. If $\eta'$ is another
such form, then $\eta'-\eta=f\omega$ for a unique $f\in C^\infty(M)$.

## Facts & Assumptions

**Given:** A transversely oriented codimension-one foliation $F$ of a smooth manifold $M$ with nowhere-vanishing defining one-form $\omega$, so $TF=\ker\omega$, and the standing countable choice assumption.

[F1] For a nowhere-zero one-form $\alpha$, the hyperplane distribution $\ker\alpha$ is integrable if and only if $\alpha\wedge d\alpha=0$. ([[cor-codimension-one-frobenius-criterion]]).

[F2] If $\omega$ is nowhere vanishing, then $\alpha\wedge\omega=0$ for a one-form $\alpha$ forces $\alpha=f\omega$ for a unique smooth $f$, and $\theta\wedge\omega=0$ for a two-form $\theta$ forces $\theta=\beta\wedge\omega$ for a smooth one-form $\beta$. ([[lem-forms-annihilated-by-a-nowhere-vanishing-one-form-are-divisible-by-it]]).

[F3] The wedge product of alternating forms is associative and graded-commutative, so for forms of odd degree $\alpha\wedge\beta=-\beta\wedge\alpha$. ([[thm-wedge-product-is-associative-and-graded-commutative]]).

## Proof

**Proof technique:** direct.

1.1 Since $F$ is integrable with $TF=\ker\omega$, the Frobenius criterion [F1] gives $\omega\wedge d\omega=0$, and by the graded commutativity of [F3] with degrees one and two (and hence sign $(-1)^{1\cdot2}=1$) this is equivalent to $d\omega\wedge\omega=0$. [F1, F3, given]

2.1 Applying the divisibility lemma [F2] to the two-form $\theta=d\omega$ with $\theta\wedge\omega=0$ produces a smooth one-form $\eta$ with $d\omega=\eta\wedge\omega$. [F2, step 1.1]

3.1 If $\eta'$ is another one-form with $d\omega=\eta'\wedge\omega$, then $(\eta'-\eta)\wedge\omega=0$, so by part (i) of [F2] there is a unique smooth $f$ with $\eta'-\eta=f\omega$; evaluating at any vector field $X$ with $\omega(X)=1$ gives $f=\eta'(X)-\eta(X)$, which both exhibits $f$ and proves its uniqueness, and no choice principle beyond the standing vocabulary is used. [F2, step 2.1] ∎
