---
id: def-linear-sieve-level-of-distribution
kind: definition
title: "Level of distribution and local density for a linear sieve sequence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-sieve-sequence-local-density-and-remainders
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers, Chapter 18, Axioms 1–3"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
    - title: "H.-E. Richert, Lectures on Sieve Methods, Chapter 11 (full-text copy hosted by the University of Toledo)"
      url: "https://www.math.utoledo.edu/~codenth/Spring_13/3200/NT-books/Lectures_on_Sieve_Methods-Richert.pdf"
verification:
  precheck: n/a
---

## Definition

Fix a real scale $x\ge3$, a finite set $\mathcal P$ of positive primes with
$y:=\max\mathcal P$, a nonnegative sequence $a_n$ supported on integers
$1\le n\le x$, and a positive main scale $X$. For each squarefree
$d\mid\prod_{p\in\mathcal P}p$, set

$$A_d:=\sum_{\substack{n\le x\\d\mid n}}a_n.$$

A **linear-sieve local-density model** consists of a multiplicative function
$\nu$ on the squarefree divisors of $\prod_{p\in\mathcal P}p$, with
$0\le\nu(p)<p$, and remainders $r_d$ satisfying

$$A_d=X\frac{\nu(d)}{d}+r_d.$$

Its sifting product is

$$V(z):=\prod_{\substack{p\in\mathcal P\\p<z}}\left(1-\frac{\nu(p)}p\right).$$

The model has **dimension at most $\kappa$ with constant $C$** if

$$\prod_{\substack{p\in\mathcal P\\w<p\le z}} \left(1-\frac{\nu(p)}p\right)^{-1} \le\left(1+\frac C{\log w}\right) \left(\frac{\log z}{\log w}\right)^\kappa$$

for every $3/2\le w\le z\le y$. It has **level $D$** with remainder exponent
$A>0$ if

$$\sum_{\substack{d\mid\prod_{p\in\mathcal P}p\\d\le D}}|r_d| \le\frac X{(\log X)^A}.$$

It has **level of distribution $\theta$** if, for every fixed $A>0$, there
is a constant $B=B(A)>0$ such that the preceding remainder bound holds at
$D=x^\theta(\log x)^{-B}$. The parameter $\kappa$ is a dimension bound for
the local Euler product; it is not the number of forbidden residue classes.

This density model is stated independently of literal forbidden-residue
proportions: in particular, $\nu(p)/p$ need not equal $|\Omega_p|/p$ for a
finite set $\Omega_p\subseteq\mathbb Z/p\mathbb Z$.

## Definition references

[[def-sieve-sequence-local-density-and-remainders|Sieve sequences and remainder notation]]

Koukoulopoulos, *The Distribution of Prime Numbers*, Chapter 18, Axioms 1–3

Richert, *Lectures on Sieve Methods*, Chapter 11

## Facts & Assumptions

**Given:** The scale $x$, sequence $a_n$, finite sieve-prime set $\mathcal P$, main scale $X$, and multiplicative local data described in the Definition.

[F1] [[def-sieve-sequence-local-density-and-remainders]]: $A_d$ denotes the mass of sequence elements satisfying the local divisibility condition for each prime factor of squarefree $d$, and $r_d$ is the difference between that mass and its declared local main term.
