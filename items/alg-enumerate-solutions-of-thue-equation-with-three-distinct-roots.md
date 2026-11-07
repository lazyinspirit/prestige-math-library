---
id: alg-enumerate-solutions-of-thue-equation-with-three-distinct-roots
kind: algorithm
title: "Enumerate integer solutions of a Thue equation with at least three distinct roots"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - alg-certified-splitting-field-and-exact-roots
  - thm-certified-splitting-field-and-root-computation-correct
  - alg-effective-divisor-representatives-modulo-units
  - thm-effective-divisor-representatives-computation-correct
  - lem-certified-number-field-embeddings-and-logarithmic-minors
  - thm-thue-equation-finiteness-with-three-distinct-roots
  - alg-enumerate-solutions-of-two-variable-number-field-unit-equation
  - lem-divisors-of-fixed-integer-are-finite-modulo-units
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Theorem 5.13 and proof"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Input an integer $d\ge3$, a binary form $F(X,Y)=a_0X^d+a_1X^{d-1}Y+\cdots+a_dY^d\in\mathbb Z[X,Y]$ with $a_0\ne0$ such that $F(X,1)$ has at least three distinct complex roots, and an integer $m\ne0$. The output is a finite list of all $(x,y)\in\mathbb Z^2$ satisfying $F(x,y)=m$. Exact rational and algebraic-number field arithmetic, equality testing, and the subroutines specified below are required.

1. Form the monic binary form
$$G(U,V)=U^d+a_1U^{d-1}V+a_2a_0U^{d-2}V^2+\cdots+a_da_0^{d-1}V^d$$
and $m'=a_0^{d-1}m$. Compute a splitting field $L$ of $G(T,1)$ and its distinct roots $\rho_1,\ldots,\rho_t$ exactly.

2. Compute a finite list of representatives for the classes modulo $\mathcal O_L^\times$ of algebraic-integer divisors of $m'$ in $\mathcal O_L$. For every ordered triple of distinct roots $(\rho_i,\rho_j,\rho_k)$ and every corresponding triple of representatives $(\mu_i,\mu_j,\mu_k)$, call the two-variable unit-equation enumerator on
$$\frac{\rho_j-\rho_k}{\rho_j-\rho_i}\frac{\mu_i}{\mu_k}z_1+\frac{\rho_k-\rho_i}{\rho_j-\rho_i}\frac{\mu_j}{\mu_k}z_2=1,$$
where $z_1,z_2\in\mathcal O_L^\times$.

3. For each returned pair set $R=(\mu_i/\mu_k)z_1$. If $R=1$, enumerate the finitely many integers $u$ satisfying $u^d=m'$ and set $v=0$. If $R\ne1$, set $t=(R\rho_k-\rho_i)/(R-1)$; if $G(t,1)=0$, discard this candidate, and otherwise set $c=m'/G(t,1)$. Retain only when $c$ is an integer, enumerate its integer $d$-th roots $v$, and retain those for which $u=tv$ is an integer.

4. Keep only candidates satisfying $G(u,v)=m'$ and $a_0\mid u$, and output $(u/a_0,v)$ after exact verification that $F(u/a_0,v)=m$. Remove duplicates.

## Definition references

[[def-axiom-of-choice]]

[[def-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[[lem-divisors-of-fixed-integer-are-finite-modulo-units]]

[[alg-enumerate-solutions-of-two-variable-number-field-unit-equation]]

[[thm-thue-equation-finiteness-with-three-distinct-roots]]

[Evertse, *Diophantine Equations*, Chapter 5, §5.3, Theorem 5.13](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

## Remarks

The certified splitting-field algorithm supplies instruction 1. After computing integral field data, the effective divisor-representative algorithm supplies instruction 2. The unit-equation enumerator has a complete arithmetic basis and cutoff construction, conditional on the separately held homogeneous logarithmic lower bound. That foundational hold therefore still prevents unconditional readiness of this procedure.

## Remarks references

[[alg-compute-units-and-class-group-from-bounded-s-units]]

[[thm-bounded-s-unit-matrix-computation-correct]]
