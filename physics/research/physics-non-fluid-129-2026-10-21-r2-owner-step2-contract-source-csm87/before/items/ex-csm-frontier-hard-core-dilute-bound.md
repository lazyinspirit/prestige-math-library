---
id: ex-csm-frontier-hard-core-dilute-bound
kind: example
title: "Hard-core spheres in the explicit dilute domain"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-stable-superstable-continuum-interaction
  - def-countable-choice
  - thm-csm-frontier-dilute-mayer-domain
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - def-metric-ball
  - lem-metrics-on-rn
  - thm-metric-open-set-algebra
  - def-borel-sigma-algebra
  - def-borel-sigma-algebra-on-the-extended-real-line
  - def-euclidean-inner-product
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-integral-of-a-nonnegative-simple-function
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-abs-value
  - lem-of-abs-value
justified_by: []
dependency_roles:
  def-csm-stable-superstable-continuum-interaction: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-csm-frontier-dilute-mayer-domain: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  def-metric-ball: mathematical-premise
  lem-metrics-on-rn: mathematical-premise
  thm-metric-open-set-algebra: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-borel-sigma-algebra-on-the-extended-real-line: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: null
empirical_premises: []
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, Chapter 5, Cluster Expansion"
      url: "https://www.unige.ch/~velenik/smbook/Cluster_Expansion.pdf"
      locator: "§5.6, the hard-core interaction and polymer convergence example, PDF pp. 9–11 (printed pp. 228–230)."
    - title: "Suren Poghosyan and Daniel Ueltschi, Abstract cluster expansion with applications to statistical mechanical systems"
      url: "https://arxiv.org/pdf/0811.4281"
      locator: "§3, classical gas with stable interactions and explicit sufficient low-fugacity condition, PDF pp. 4–5."
---

## Example

Assume Countable Choice. Fix $d\in\mathbb N$ with $d\geq1$, a hard-core diameter $a\in\mathbb R$ with $a>0$, and $\beta\in\mathbb R$ with $\beta>0$. For $x=(x_j)_{j<d}\in\mathbb R^d$, write $\|x\|_2:=\sqrt{\sum_{j<d}x_j^2}$, and let $B(0,a):=\{x\in\mathbb R^d:\|x\|_2<a\}$. Let $\lambda_d$ denote Lebesgue measure on $\mathbb R^d$. Define the hard-core pair potential $v_a:\mathbb R^d\to\mathbb R\cup\{+\infty\}$ by $v_a(x)=+\infty$ when $\|x\|_2<a$ and $v_a(x)=0$ when $\|x\|_2\geq a$. Its stability constant may be chosen as $B=0$, the function $x\mapsto e^{-\beta v_a(x)}-1$ is $-1$ on $B(0,a)$ and $0$ elsewhere, and its absolute integral is $C_\beta=\lambda_d(B(0,a))$. For a complex activity $z\in\mathbb C$, with modulus $|z|$ as defined by $|x+iy|=\sqrt{x^2+y^2}$, the sufficient analytic domain is $e|z|\lambda_d(B(0,a))<1$.

## Statement references

[[thm-csm-frontier-dilute-mayer-domain]]

## Facts & Assumptions

**Given:** Countable Choice, $d\in\mathbb N$ with $d\geq1$, $a\in\mathbb R$ with $a>0$, $\beta\in\mathbb R$ with $\beta>0$, and the hard-core potential in the Example.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] [[def-csm-stable-superstable-continuum-interaction]]: stability means that every $N$-particle pair-energy sum is at least $-BN$; the potential must be even Borel.

[F2] [[thm-csm-frontier-dilute-mayer-domain]]: under Countable Choice, for a stable even Borel potential with finite $C_\beta$, the centered-cube pressure series is absolutely convergent whenever $|z|e^{2\beta B+1}C_\beta<1$.

[F3] [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]: under Countable Choice, the Euclidean ball $B(0,a)$ is Lebesgue measurable and has positive finite measure.

[F4] [[def-metric-ball]], [[lem-metrics-on-rn]], [[thm-metric-open-set-algebra]], [[def-borel-sigma-algebra]], and [[def-borel-sigma-algebra-on-the-extended-real-line]]: $B(0,a)=\{x:\|x\|_2<a\}$ is an open Euclidean ball, every open set is Borel, and $+\infty$ is Borel in the extended real line.

[F5] [[def-euclidean-inner-product]]: $\|x\|_2=\sqrt{\sum_{j<d}x_j^2}$, so $\|-x\|_2=\|x\|_2$.

[F6] [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] and [[def-integral-of-a-nonnegative-simple-function]]: the integral of an indicator of a measurable set equals that set's measure.

[F7] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: if $z=x+iy$ with $x,y\in\mathbb R$, its complex modulus is $|z|=\sqrt{x^2+y^2}$.

[F8] [[def-abs-value]], [[lem-of-abs-value]]: real absolute value is defined by sign, is nonnegative, and satisfies $|-1|=1$ and $|0|=0$.

## Proof

**Given:** The model and assumptions in the Example, [A1], [F1], [F2], [F3], [F4], [F5], [F6], [F7], and [F8].

1.1 The Euclidean norm is even by [F5], so $v_a(-x)=v_a(x)$. The ball $B(0,a)$ is open, hence Borel, by [F4]; its complement is Borel as well. The target singleton $\{+\infty\}$ is Borel by [F4], and $\{0\}=\bigcap_{m\geq1}(-1/m,1/m)$ is Borel by the extended-real topology and sigma-algebra closure in [F4]. Since $v_a$ takes the constant value $+\infty$ on the ball and $0$ on its complement, the preimage of any target Borel set is among the empty set, the ball, its complement, and all of $\mathbb R^d$; hence $v_a$ is Borel. Every pair energy is either $0$ or $+\infty$, so every finite total energy is at least zero; therefore the stability inequality holds with $B=0$. [A1, F1, F4, F5, algebra]

1.2 Under the stated convention, $e^{-\beta v_a(x)}-1=-1$ on $B(0,a)$ and $0$ elsewhere, so $|f_\beta|=\mathbf1_{B(0,a)}$ by [F8]. The ball lemma [F3] gives measurability and finite measure, and [F6] gives $C_\beta=\int\mathbf1_{B(0,a)}dx=\lambda_d(B(0,a))\in(0,\infty)$. [A1, F3, F6, F8, given, algebra]

2.1 The hypotheses of [F2] hold by steps 1.1–1.2 and [A1]. Substituting $B=0$ and $C_\beta=\lambda_d(B(0,a))$ into its sufficient disk gives $e|z|\lambda_d(B(0,a))<1$. This is a sufficient analytic domain; it is not asserted to be necessary and implies no freezing or coexistence point. [A1, F2, step 1.1, step 1.2, algebra] ∎
