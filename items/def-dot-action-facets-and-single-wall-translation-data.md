---
id: def-dot-action-facets-and-single-wall-translation-data
kind: definition
title: Dot-Weyl facets and single-wall translation data
status: published
origin: pipeline
deps:
- def-axiom-of-choice
- def-integral-dominant-and-strictly-dominant-weights
- def-integral-weyl-group-of-a-weight
- def-root-reflections-and-the-weyl-group-action
- def-weyl-vector-rho-for-a-chosen-positive-system
- lem-finite-weyl-closed-chambers-and-stabilizers
- thm-the-root-set-is-a-reduced-crystallographic-root-system
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Lin Chen, lecture notes (Spring 2024), Lecture 9, Definitions 3.8-3.9 and Remark 3.10
    url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    locator: §3, Definitions 3.8 and 3.9 and Remark 3.10, printed pp. 5-6 (full text read at harvest;
      page markers checked against the printed numbering)
  - title: James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O,
      AMS Graduate Studies in Mathematics 94
    locator: §7.14 (facets and the upper closure), p. 146 (title-only locator; the AMS landing page
      is bot-walled and every result used here is covered by Lin Chen's fetched text)
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Fix a finite-dimensional
complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$,
and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$, with the
chosen positive system $\Phi^+$ and Weyl vector $\rho$ of
[[def-weyl-vector-rho-for-a-chosen-positive-system]] and Weyl group $W$ acting
by the root reflections
$s_\alpha(\lambda)=\lambda-\lambda(\alpha^\vee)\alpha$ of
[[def-root-reflections-and-the-weyl-group-action]]. Write the dot action as
$w\mathbin\cdot\lambda=w(\lambda+\rho)-\rho$ and write
$\langle\zeta,\alpha^\vee\rangle$ for the pairing with the coroot
([[thm-the-root-set-is-a-reduced-crystallographic-root-system]]).

Put $R=\operatorname{span}_{\mathbb R}\Phi\subseteq\mathfrak h^*$. For a weight
$\lambda\in R$, the **dot-Weyl facet** of $\lambda$ is
the set of weights
$$F_\lambda=\{\zeta\in R:\ \operatorname{sgn}\langle\zeta+\rho,\alpha^\vee\rangle=\operatorname{sgn}\langle\lambda+\rho,\alpha^\vee\rangle\ \text{for every root }\alpha\in\Phi\},$$
where $\operatorname{sgn}$ takes the values positive, zero and negative. Its
**upper closure** is
$$F_\lambda^+=\{\zeta\in R:\ \langle\zeta+\rho,\alpha^\vee\rangle\ \text{is positive, zero or nonpositive according as}\ \langle\lambda+\rho,\alpha^\vee\rangle\ \text{is positive, zero or negative, for every }\alpha\in\Phi^+\}.$$
The upper-closure test uses only positive roots: imposing it also on their
negatives would incorrectly exclude wall points from the upper closure of
the antidominant chamber. Thus $F_\lambda\subseteq F_\lambda^+$, the facets refine the closures of the
open Weyl chambers, and $F_\lambda$ depends only on the wall-sign pattern of
$\lambda+\rho$.

Two special positions are used throughout. A weight $\lambda$ is **dot-regular**
when $\langle\lambda+\rho,\alpha^\vee\rangle\neq0$ for every root $\alpha$, so
that $F_\lambda$ is an open chamber; it is **dot-antidominant** when
$\langle\lambda+\rho,\alpha^\vee\rangle\le0$ for every positive root $\alpha$.
Integrality of weights is the notion of
[[def-integral-dominant-and-strictly-dominant-weights]].

A **single-wall translation datum** is a triple $(\lambda,\mu,\alpha)$
consisting of integral dot-antidominant weights $\lambda,\mu$ and a positive
root $\alpha$ such that:

1. $\lambda$ is dot-regular, so $F_\lambda$ is an open chamber;
2. $\mu+\rho$ lies in the closure of the chamber of $\lambda+\rho$: one has
   $\langle\mu+\rho,\alpha^\vee\rangle=0$, and
   $\langle\mu+\rho,\beta^\vee\rangle$ has the same sign as
   $\langle\lambda+\rho,\beta^\vee\rangle$ for every root $\beta$ different
   from $\alpha$ and from its multiples;
3. the dot stabilizer $S_\mu:=\{w\in W:w\mathbin\cdot\mu=\mu\}$ is exactly $\{1,s_\alpha\}$.

Equivalently, $F_\mu$ is a codimension-one facet in the closure of the open
antidominant chamber $F_\lambda$, with $S_\mu=\{1,s_\alpha\}$.
This dot stabilizer and the integral-reflection group $W_\mu$ of
[[def-integral-weyl-group-of-a-weight]] are defined by different conditions:
since $\mu$ is integral, all simple reflections belong to $W_\mu$, so
$W_\mu=W$, whereas $S_\mu=\{1,s_\alpha\}$. The groups coincide in rank one
and differ when the rank is greater than one. In
this datum the **translating weight** $\nu$ is the unique dominant weight of
the linear Weyl orbit $W(\mu-\lambda)$; it exists and is unique by
[[lem-finite-weyl-closed-chambers-and-stabilizers]], and it is integral because
$\mu-\lambda$ is integral and $W$ preserves the weight lattice. The **wall
reflection** is $s:=s_\alpha$.

The basic example is $\mathfrak{sl}_2$ with the datum
$(\lambda,\mu)=(-2,-1)$: here $\rho=1$, $\mu=-\rho$,
$\lambda+\rho=-1$ spans the open negative chamber, $\mu+\rho=0$ is the single
wall, and the dot-stabilizer of $\mu$ is $\{1,s\}$. The pair $(0,-1)$ uses the dominant regular representative rather than the
antidominant representative required here. It defines the same translation
functors: $0$ and $-2$ have the same central character, and both weight
differences have dominant representative $1$ with translating module
$L(1)$, which is self-dual. These functors are defined in
the next definition on this page.
