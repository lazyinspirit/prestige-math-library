---
id: thm-torus-knot-alexander-and-genus-formulas
kind: theorem
title: "Torus-knot Alexander polynomial and genus formulas"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - def-coprime-torus-knot
  - thm-torus-knot-group-presentation
  - lem-torus-knot-alexander-polynomial-from-presentation
  - lem-positive-torus-knot-hopf-plumbing-surface
  - lem-torus-knot-sign-changes-give-mirror-or-reversal
  - lem-torus-knot-unit-slope-is-unknot
  - def-oriented-seifert-surface-and-knot-genus
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - lem-knot-genus-invariant-under-mirror-and-reversal
  - cor-knot-alexander-normalization-symmetry-and-genus-bound
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "§§5.1.6–5.3.2, printed pp. 27–32"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§§3.1–3.3 and 4.3, printed pp. 21–30 and 38–39"
    - title: "Selman Akbulut and Burak Ozbagci, Lefschetz Fibrations on Compact Stein Surfaces"
      url: "https://msp.org/gt/2001/5-1/gt-v5-n1-p10-p.pdf"
      locator: "§2, torus-knot Hopf-plumbing construction, printed pp. 324–326"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
---

## Statement

Assume the full Axiom of Choice. Let $p,q$ be coprime nonzero integers, let $K=T(p,q)$, and put $a=|p|$, $b=|q|$. For $\Lambda=\mathbb Z[t^{\pm1}]$, define
$$\delta_{a,b}(t)=\frac{(t^{ab}-1)(t-1)}{(t^a-1)(t^b-1)}.$$
Then $\delta_{a,b}(t)$ is a polynomial in $\mathbb Z[t]$, the Alexander polynomial $\Delta_K$ defined as a generator of the zeroth elementary ideal of the positive-meridian infinite-cyclic-cover module satisfies $\Delta_K(t)\doteq\delta_{a,b}(t)$, and the knot genus is $g(K)=(a-1)(b-1)/2$. Here $f\doteq g$ means $f=\pm t^k g$ for some integer $k$.

## Statement references

[[def-coprime-torus-knot|Parameterization and sign conventions for torus knots]]

[[lem-torus-knot-alexander-polynomial-from-presentation|The Alexander module and polynomial from the torus-knot presentation]]

[[def-oriented-seifert-surface-and-knot-genus|The minimum genus of a connected oriented spanning surface]]

[[cor-knot-alexander-normalization-symmetry-and-genus-bound|The Alexander degree-width bound for knot genus]]

[Cattabriga and Francaviglia, §§5.1.6–5.3.2](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Calegari, §§3.1–3.3 and 4.3](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Akbulut and Ozbagci, §2](https://msp.org/gt/2001/5-1/gt-v5-n1-p10-p.pdf)

## Facts & Assumptions

**Given:** Full AC, coprime nonzero integers $p,q$, and $K=T(p,q)$.

[A1] Full AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] Full AC implies Countable Choice, the hypothesis of the spanning-surface and genus definitions ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F1] [[def-coprime-torus-knot]] defines the oriented primitive-slope knot $T(p,q)$ and identifies sign changes with the stated mirror and orientation conventions.

[F2] [[thm-torus-knot-group-presentation]] gives $\pi_1(E_K)=\langle x,y\mid x^p=y^q\rangle$ with the positive meridian word determined by $p\alpha+q\beta=1$.

[F3] [[lem-torus-knot-alexander-polynomial-from-presentation]] proves that the positive-meridian Alexander module is cyclic with order $\delta_{p,q}(t)=(t^{pq}-1)(t-1)/((t^p-1)(t^q-1))$, a Laurent polynomial, and hence $\Delta_K\doteq\delta_{p,q}$.

[F4] [[lem-torus-knot-unit-slope-is-unknot]] says $T(p,q)$ is ambient isotopic to the standard unknot whenever $|p|=1$ or $|q|=1$.

[F5] [[lem-torus-knot-sign-changes-give-mirror-or-reversal]] identifies the mirror and reversed-orientation curves obtained by changing parameter signs; [[lem-knot-genus-invariant-under-mirror-and-reversal]] proves that these operations preserve genus.

[F6] [[lem-positive-torus-knot-hopf-plumbing-surface]] constructs a positive Hopf-plumbed Seifert surface of genus $(a-1)(b-1)/2$ for $T(a,b)$ when $a,b\ge2$.

[F7] [[def-oriented-seifert-surface-and-knot-genus]] defines $g(K)$ as the minimum genus of a connected compact oriented spanning surface under Countable Choice.

[F8] [[thm-seifert-determinant-is-the-knot-alexander-polynomial]] identifies the Alexander polynomial with the Seifert determinant under the positive-push convention; [[cor-knot-alexander-normalization-symmetry-and-genus-bound]] gives $\operatorname{width}(\Delta_K)\le2g(K)$.

## Proof


**Given:** The data in the Statement and [A1].

1.1 Apply [F2] to identify the exterior group presentation and its positive-meridian homomorphism. The Fox-module calculation [F3] applied to that presentation gives $\Delta_K\doteq\delta_{p,q}$ and proves $\delta_{p,q}\in\Lambda$. [A1, F1, F2, F3, given, construct]

1.2 Suppose $a,b\ge2$. For the four possible sign patterns, $T(p,q)$ is obtained from $T(a,b)$ by no operation, the mirror, orientation reversal, or both, according to [F5]. The genus invariance in [F5] therefore gives $g(K)=g(T(a,b))$. [L1, F1, F5, given, algebra]

2.1 For every positive integer $n$, $t^{-n}-1=-t^{-n}(t^n-1)$, so each signed factor $t^{p}-1$, $t^q-1$, and $t^{pq}-1$ differs from its absolute-exponent factor by a unit of $\Lambda$. Therefore $\delta_{p,q}$ is a unit multiple of $\delta_{a,b}$ as a rational function. By [F3] this places $\delta_{a,b}$ in $\Lambda$. Its defining rational function is finite at $t=0$, because numerator and denominator both have constant term $1$; a Laurent polynomial finite at $0$ has no negative powers. Thus $\delta_{a,b}\in\mathbb Z[t]$, and $\Delta_K\doteq\delta_{a,b}$. [F3, step 1.1, algebra]

2.2 By [F6], $T(a,b)$ bounds a connected oriented surface of genus $g_0=(a-1)(b-1)/2$, so the minimum in [F7] satisfies $g(K)=g(T(a,b))\le g_0$. [L1, F6, F7, step 1.2, choose]

3.1 If $a=1$ or $b=1$, the quotient defining $\delta_{a,b}$ cancels to $1$. By [F4], $K$ is ambient isotopic to the standard unknot, which bounds a disk; an ambient isotopy carries spanning surfaces to spanning surfaces of the same genus in both directions. Since genus is nonnegative by [F7], the minimum is $g(K)=0=(a-1)(b-1)/2$. [L1, F4, F7, step 2.1, algebra, construct]

3.2 Since $\delta_{a,b}\in\mathbb Z[t]$, its degree is $ab+1-a-b=(a-1)(b-1)$: the numerator and denominator have leading coefficient $1$, and the quotient is polynomial by step 2.1. Its constant coefficient is $1$, since the numerator and denominator both have constant term $1$. Hence its exponent width is $(a-1)(b-1)=2g_0$, and multiplication by a unit does not change width. [step 2.1, step 2.2, algebra]

4.1 By the Seifert-determinant theorem and the genus-bound corollary [F8], $\operatorname{width}(\Delta_K)\le2g(K)$. Step 2.1 gives $\operatorname{width}(\Delta_K)=2g_0$, so $2g_0\le2g(K)$. Together with step 2.2 this yields $g(K)=g_0$. The formulas hold in the nonunit case, and step 3.1 handles the unit case. [F8, step 2.1, step 3.1, step 2.2, step 3.2, algebra] ∎

