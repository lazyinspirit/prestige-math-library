---
id: lem-godbillon-vey-form-is-invariant-under-rescaling-the-defining-form
kind: lemma
title: "Rescaling the defining form changes the Godbillon-Vey form by an exact form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega, lem-eta-wedge-d-eta-is-closed, thm-the-exterior-derivative-is-a-graded-derivation, thm-the-exterior-derivative-squares-to-zero, def-countable-choice-principle-for-foliation-pair]
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
      locator: "\u00a73.1, printed p. 10 (independence of the choice of the defining form)"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a transversely oriented
codimension-one foliation with defining form $\omega$ and $d\omega=\eta\wedge\omega$.
For $\omega'=e^{f}\omega$ with $f\in C^\infty(M)$ one has $d\omega'=\eta'\wedge\omega'$
with $\eta'=\eta+df$, and $\eta'\wedge d\eta'=\eta\wedge d\eta+d(f\,d\eta)$; in
particular $[\eta'\wedge d\eta']=[\eta\wedge d\eta]$ in $H^3_{\mathrm{dR}}(M;\mathbb
R)$. The same conclusion holds for any nowhere-vanishing smooth multiple
$\omega'=g\omega$, since on each connected component $g$ is $e^{f}$ or $-e^{f}$.

## Facts & Assumptions

**Given:** A transversely oriented codimension-one foliation with defining form $\omega$ and $d\omega=\eta\wedge\omega$, and a smooth function $f$ with $\omega'=e^{f}\omega$.

[F1] With $d\omega=\eta\wedge\omega$ one has $d\eta\wedge\omega=0$ and $\eta\wedge d\eta$ is closed. ([[lem-eta-wedge-d-eta-is-closed]]).

[F2] For homogeneous smooth forms $\alpha,\beta$ of degrees $p,q$ one has $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^p\alpha\wedge d\beta$. ([[thm-the-exterior-derivative-is-a-graded-derivation]]).

[F3] For every differential form $\omega$, $d(d\omega)=0$. ([[thm-the-exterior-derivative-squares-to-zero]]).

## Proof

**Proof technique:** direct.

1.1 Compute $d\omega'=d(e^{f}\omega)=e^{f}df\wedge\omega+e^{f}d\omega=e^{f}(df\wedge\omega+\eta\wedge\omega)=(\eta+df)\wedge\omega'$ by [F2], so $\eta'=\eta+df$ is admissible for $\omega'$. [F2, given]

2.1 Then $d\eta'=d\eta+d(df)=d\eta$ by [F3], so $\eta'\wedge d\eta'=(\eta+df)\wedge d\eta=\eta\wedge d\eta+d(f\,d\eta)$ because $d(f\,d\eta)=df\wedge d\eta$ by [F2]; the difference is exact and $\eta\wedge d\eta$ is closed by [F1], so the two forms define the same class in $H^3_{\mathrm{dR}}(M;\mathbb R)$. [F1, F2, F3, step 1.1]

3.1 For a general nowhere-vanishing smooth multiple $\omega'=g\omega$ the same computation applies on each connected component with $g=\pm e^{f}$: the sign choice leaves $d\omega=\eta\wedge\omega$ and the form $\eta\wedge d\eta$ unchanged, so the class is independent of the rescaling; no choice principle is used. [step 2.1] ∎
