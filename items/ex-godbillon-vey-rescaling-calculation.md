---
id: ex-godbillon-vey-rescaling-calculation
kind: example
title: "Explicit Godbillon-Vey rescaling calculation"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-kernel-of-a-constant-rank-submersion-is-integrable, def-de-rham-cohomology, lem-godbillon-vey-form-is-invariant-under-rescaling-the-defining-form, thm-regular-foliations-and-integrable-distributions-correspond, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steven Hurder and Remi Langevin, Dynamics and the Godbillon-Vey Class of C1 Foliations (complete author-hosted PDF)"
      url: "https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf"
      locator: "\u00a73.1, printed pp. 10-11 (Definition 3.1, the identity d omega = omega wedge eta, Theorem 3.2: independence of the choices of omega and eta)"
---

## Example

Assume Countable Choice $\mathrm{AC}_\omega$. On $M=\mathbb R^3$ with coordinates
$(x,y,z)$ let $\varphi=ze^{x^2/2}$, so that $\omega:=e^{-x^2/2}\,d\varphi=dz+xz\,dx$ is
a nowhere-vanishing defining form and $F=\ker\omega$ is the regular codimension-one
foliation by the surfaces $z=ce^{-x^2/2}$, $c\in\mathbb R$. The $1$-form
$\eta=(xyz-x)\,dx+y\,dz$ satisfies $d\omega=\eta\wedge\omega$, and $d\eta=-xz\,dx\wedge
dy-xy\,dx\wedge dz+dy\wedge dz\neq0$ with $\eta\wedge d\eta=-x\,dx\wedge dy\wedge dz$,
nonzero where $x\neq0$. For the rescaled defining form $\omega'=e^{y}\omega$, the form
$\eta'=\eta+dy$ satisfies $d\omega'=\eta'\wedge\omega'$, $d\eta'=d\eta$, and
$\eta'\wedge d\eta'=\eta\wedge d\eta+dy\wedge d\eta=\eta\wedge
d\eta+d(y\,d\eta)=(xy-x)\,dx\wedge dy\wedge dz$; the difference is the exact form
$d(y\,d\eta)$, the explicit instance of [[lem-godbillon-vey-form-is-invariant-under-rescaling-the-defining-form]] with $f=y$.

## Facts & Assumptions

**Given:** $\mathbb R^3$ with coordinates $(x,y,z)$, the function $\varphi=ze^{x^2/2}$, the one-form $\omega=e^{-x^2/2}d\varphi=dz+xz\,dx$, and the one-form $\eta=(xyz-x)\,dx+y\,dz$.

[F1] The kernel of the differential of a constant-rank submersion is an integrable distribution whose leaves are the connected components of the level sets. ([[cor-kernel-of-a-constant-rank-submersion-is-integrable]]).

[F2] If $d\omega=\eta\wedge\omega$ and $\omega'=e^{f}\omega$, then $\eta'=\eta+df$ satisfies $d\omega'=\eta'\wedge\omega'$ and $\eta'\wedge d\eta'=\eta\wedge d\eta+d(f\,d\eta)$, so the two forms define the same de Rham class. ([[lem-godbillon-vey-form-is-invariant-under-rescaling-the-defining-form]]).

## Proof

**Proof technique:** direct.

1.1 The function $\varphi=ze^{x^2/2}$ has $d\varphi=e^{x^2/2}\omega$ nowhere zero, so $\varphi$ is a constant-rank submersion and by [F1] the common kernel $\ker\omega=\ker d\varphi$ is an integrable codimension-one distribution whose leaves are the level surfaces $z=ce^{-x^2/2}$, $c\in\mathbb R$. [F1, given]

2.1 A direct calculation gives $d\omega=x\,dz\wedge dx$ and $\eta\wedge\omega=(xyz-x)\,dx\wedge dz+xyz\,dz\wedge dx=(-xyz+x+xyz)\,dz\wedge dx=x\,dz\wedge dx=d\omega$. Also $d\eta=-xz\,dx\wedge dy-xy\,dx\wedge dz+dy\wedge dz$ and $\eta\wedge d\eta=-x\,dx\wedge dy\wedge dz$, which is nonzero exactly where $x\neq0$. The level surfaces in step 1.1 are connected graphs over the $(x,y)$ plane, so the supplier’s connected components are precisely these surfaces. [given, algebra, step 1.1]

3.1 For $\omega'=e^{y}\omega$ one has $d\omega'=e^{y}(dy\wedge\omega+d\omega)=e^{y}(dy+\eta)\wedge\omega=(\eta+dy)\wedge\omega'$, so $\eta'=\eta+dy$ is admissible with $d\eta'=d\eta$ and $\eta'\wedge d\eta'=\eta\wedge d\eta+dy\wedge d\eta=\eta\wedge d\eta+d(y\,d\eta)$; the last term is exact by the graded Leibniz rule, so $\eta\wedge d\eta$ and $\eta'\wedge d\eta'$ define the same Godbillon-Vey class, which is the explicit instance of [F2] with $f=y$, the discrepancy $(xy-x)\,dx\wedge dy\wedge dz=-x\,dx\wedge dy\wedge dz+d(y\,d\eta)$ being exactly the rescaled form modulo an exact form. [F2, step 2.1] ∎
