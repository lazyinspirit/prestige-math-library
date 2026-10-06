---
id: def-hopf-lax-operator
kind: definition
title: The Hopf--Lax operator and the Hopf--Lax formula
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-legendre-transform-of-a-hamiltonian
- def-metric-uniform-continuity
- def-bounded-set
- def-extended-reals
- def-infimum
justified_by: []
aliases: []
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2 Section 5.4, assumptions (2.18) and Theorem 2.23, equation (2.19), printed pp. 67--68; Definition 2.19, equation (2.16), printed p. 65, is the related path value function.
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$, let $H:\mathbb R^n\to\mathbb R$ be convex and superlinear,
$$\lim_{|p|\to\infty}\frac{H(p)}{|p|}=+\infty,$$
let $L$ be its Legendre transform
([[def-legendre-transform-of-a-hamiltonian]]), and let
$u_0:\mathbb R^n\to\mathbb R$ be bounded and uniformly continuous
([[def-metric-uniform-continuity]], [[def-bounded-set]]). For $t>0$ and
$x\in\mathbb R^n$ define
$$Q_tu_0(x):=\inf_{y\in\mathbb R^n}\Bigl\{u_0(y)+tL\Bigl(\frac{x-y}{t}\Bigr)\Bigr\},$$
the infimum being computed in $\mathbb R\cup\{+\infty\}$
([[def-extended-reals]], [[def-infimum]]) over the extended-real values
$u_0(y)+tL((x-y)/t)$; the term $tL((x-y)/t)$ is $+\infty$ exactly when
$L((x-y)/t)=+\infty$. Set $Q_0u_0:=u_0$.

The **Hopf--Lax operator** with Lagrangian $L$ is the family $(Q_t)_{t\ge0}$,
and the function $(x,t)\mapsto Q_tu_0(x)$ is the **Hopf--Lax formula** for the
Cauchy problem $u_t+H(Du)=0$, $u(\cdot,0)=u_0$. The infimum is an
extended-real expression at this point: finiteness and the confinement of
near-minimisers are proved in [[lem-hopf-lax-infima-localise]], where
superlinearity makes $L$ real-valued everywhere.

## Remarks

- **What is fixed and what is postponed.** The definition fixes the
  autonomous Hamiltonian $H:\mathbb R^n\to\mathbb R$, convex and superlinear;
  the datum class, bounded and uniformly continuous $u_0$; the infimum over
  all $y\in\mathbb R^n$ of $u_0(y)+tL((x-y)/t)$ for $t>0$, read in the
  extended reals; and the value $Q_0u_0=u_0$. Neither the attainment of the
  infimum nor its finiteness is asserted here, and no assertion that $L$ is
  real-valued is smuggled into the definition; the value $+\infty$ is kept
  visible until [[lem-hopf-lax-infima-localise]] proves the opposite under
  superlinearity.
- **Time scaling.** The velocity variable in the formula is $(x-y)/t$, the
  average velocity of a straight path from $y$ at time $0$ to $x$ at time
  $t$; the factor $t$ multiplies the Lagrangian density. This normalisation is
  the one for which the dynamic-programming identity
  $Q_{t+s}u_0=Q_t(Q_su_0)$ of
  [[thm-hopf-lax-dynamic-programming-semigroup]] holds with the coefficient
  $t+s$. No choice principle is used in the definition.
- **Bounded data without continuity.** The same pointwise infimum formula
  defines $Q_t f(x)$ for any bounded function $f$, even when $f$ is not
  uniformly continuous. Since $L(v)\ge-H(0)$ and the competitor $y=x$ is
  finite, these values are real. This extension is used for the
  nonexpansiveness estimate in [[cor-hopf-lax-is-a-contraction-in-the-supremum-norm]];
  continuity conclusions such as [[cor-hopf-lax-preserves-a-modulus-of-continuity]]
  retain their stated hypotheses.
