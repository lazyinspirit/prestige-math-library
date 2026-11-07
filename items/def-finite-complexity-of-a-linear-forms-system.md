---
id: def-finite-complexity-of-a-linear-forms-system
kind: definition
title: "Cauchy–Schwarz complexity and normal form of a linear-forms system"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-affine-linear-forms-system-and-size
  - def-rationals
  - def-linear-combination-and-span
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Green and Terence Tao, Linear equations in primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf"
      locator: "Definition 1.5, Lemma 1.6, and Definition 4.2, printed pp. 1759–1760 and 1771."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "Section 1.7, printed pp. 109–123: complexity of linear patterns, higher Gowers norms, and the distinction between finite- and infinite-complexity systems."
---

## Definition

Let $\Psi=(\psi_1,\ldots,\psi_t)$ be an integer affine-linear system with homogeneous coefficient vectors $a_i\in\mathbb Z^d\subset\mathbb Q^d$. For a subcollection $C\subseteq\{\psi_1,\ldots,\psi_t\}$, its **affine-linear span** is the set of all rational affine-linear forms $x\mapsto c\cdot x+b$ such that $c\in\operatorname{span}_{\mathbb Q}\{a_j:\psi_j\in C\}$; the constant term $b\in\mathbb Q$ is unrestricted. For $i\in\{1,\ldots,t\}$, the system has **$i$-complexity at most $s$**, where $s\ge0$ is an integer, if the other $t-1$ forms can be covered by at most $s+1$ classes and $\psi_i$ lies in the affine-linear span of none of the classes. The **complexity** of $\Psi$ is the least $s\ge0$ for which every $i$-complexity is at most $s$; it is infinite if no such $s$ exists.

The system is in **$s$-normal form** if for each $i$ there is a set $J_i\subseteq\{1,\ldots,d\}$ with $|J_i|\le s+1$ such that

$$\prod_{j\in J_i}a_{ij}\ne0 \qquad\text{and}\qquad \prod_{j\in J_i}a_{kj}=0\quad\text{for every }k\ne i.$$

## Definition references

[[def-affine-linear-forms-system-and-size]]

[[def-rationals]]

[[def-linear-combination-and-span]]

[Green and Tao, Definition 1.5, Lemma 1.6, and Definition 4.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.7](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)
