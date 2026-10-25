---
id: lem-godbillon-vey-form-is-independent-of-the-choice-of-eta-up-to-an-exact-form
kind: lemma
title: "Independence of the auxiliary form eta up to exact forms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-forms-annihilated-by-a-nowhere-vanishing-one-form-are-divisible-by-it, lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega, lem-eta-wedge-d-eta-is-closed, thm-the-exterior-derivative-is-a-graded-derivation, thm-wedge-product-is-associative-and-graded-commutative, def-countable-choice-principle-for-foliation-pair, thm-the-exterior-derivative-squares-to-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 4
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steven Hurder and Remi Langevin, Dynamics and the Godbillon-Vey Class of C1 Foliations (complete author-hosted PDF)"
      url: "https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf"
      locator: "\u00a73.1, printed pp. 10-11"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a transversely oriented
codimension-one foliation with defining form $\omega$, and let $\eta,\eta'$ be smooth
$1$-forms with $d\omega=\eta\wedge\omega=\eta'\wedge\omega$. If $\eta'-\eta=f\omega$
with $f\in C^\infty(M)$, then $\eta'\wedge d\eta'=\eta\wedge
d\eta-d(f\,d\omega)=\eta\wedge d\eta+d(df\wedge\omega)$, and in particular $[\eta'\wedge
d\eta']=[\eta\wedge d\eta]$ in $H^3_{\mathrm{dR}}(M;\mathbb R)$.

## Facts & Assumptions

**Given:** A transversely oriented codimension-one foliation with defining form $\omega$ and one-forms $\eta,\eta'$ satisfying $d\omega=\eta\wedge\omega=\eta'\wedge\omega$, with $\eta'-\eta=f\omega$.

[F1] With $d\omega=\eta\wedge\omega$ one has $d\eta\wedge\omega=0$ and $\eta\wedge d\eta$ is closed. ([[lem-eta-wedge-d-eta-is-closed]]).

[F2] For homogeneous smooth forms $\alpha,\beta$ of degrees $p,q$ one has $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^p\alpha\wedge d\beta$. ([[thm-the-exterior-derivative-is-a-graded-derivation]]).

[F3] The wedge product is associative and graded-commutative, so odd-degree forms anticommute and $\omega\wedge\omega=0$. ([[thm-wedge-product-is-associative-and-graded-commutative]]).

[F4] For every differential form $\omega$, $d(d\omega)=0$. ([[thm-the-exterior-derivative-squares-to-zero]]).

## Proof

**Proof technique:** direct.

1.1 Write $\eta'=\eta+f\omega$; differentiating and using $d\omega=\eta\wedge\omega$ and $d(f\omega)=df\wedge\omega+f\,d\omega$ from [F2] gives $d\eta'=d\eta+df\wedge\omega+f\,d\omega$, while $d(d\omega)=0$ by [F4] is compatible with $d\omega=\eta'\wedge\omega$. [F2, F4, given]

2.1 Expanding $\eta'\wedge d\eta'-\eta\wedge d\eta=(f\omega)\wedge d\eta+\eta\wedge(df\wedge\omega+f\,d\omega)+(f\omega)\wedge(df\wedge\omega+f\,d\omega)$, every term containing $\eta\wedge\eta$, $d\eta\wedge\omega$, $\omega\wedge d\eta$, $\omega\wedge d\omega$ or $\omega\wedge\omega$ vanishes by [F1] and the graded commutativity and $\omega\wedge\omega=0$ of [F3], leaving $\eta\wedge df\wedge\omega=-df\wedge d\omega$. [F1, F3, step 1.1]

3.1 Since $d\eta\wedge\omega=0$ by [F1] and $d\eta'=d\eta+df\wedge\omega+f\,d\omega$, the identity $d(df\wedge\omega)=d(df)\wedge\omega-df\wedge d\omega=-df\wedge d\omega$ from [F2] and [F4] shows that $\eta'\wedge d\eta'=\eta\wedge d\eta-d(f\,d\omega)=\eta\wedge d\eta+d(df\wedge\omega)$, an exact modification; hence the two forms have the same de Rham class, and no choice principle is used. [F2, F3, step 2.1] ∎
