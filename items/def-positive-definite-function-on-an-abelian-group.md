---
id: def-positive-definite-function-on-an-abelian-group
kind: definition
title: Positive definite functions on an abelian group
dependency_level: 0
deps:
- def-group
- def-complex-numbers-and-arithmetic
- lem-complex-conjugation-and-modulus-laws
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
status: draft
origin: pipeline
---

## Definition

Let $G$ be an abelian group written additively ([[def-group]]) and let
$\phi:G\to\mathbb C$ be a function ([[def-complex-numbers-and-arithmetic]]).
Then $\phi$ is **positive definite** when for every integer $n\ge0$, every
finite family $x_1,\dots,x_n\in G$ and all coefficients
$c_1,\dots,c_n\in\mathbb C$ one has
$$\sum_{j=1}^{n}\sum_{k=1}^{n}c_j\overline{c_k}\,\phi(x_j-x_k)\ \ge\ 0 .$$
The sum for $n=0$ is the empty sum $0$, so the convention covers it; repeated
points $x_j=x_k$ are allowed, so the finite matrices tested are the Hermitian
matrices $[\phi(x_j-x_k)]_{j,k}$. No continuity, boundedness or measurability
is part of the definition.

**Elementary consequences.** The claims below are immediate from the defining
inequality and are recorded here for later use. Taking $n=1$, $x_1=0$ and
$c_1=1$ gives $\phi(0)\ge0$. Taking $n=2$, $x_1=0$, $x_2=x$ and
$c_1=1$, $c_2=t$ gives
$$(1+|t|^2)\phi(0)+\overline{t}\,\phi(-x)+t\,\phi(x)\ \ge\ 0\qquad\text{for every }t\in\mathbb C .$$
The left side is real and equal to its own conjugate for every $t$, so
comparing coefficients at $t=1$ and $t=i$ gives $\phi(-x)=\overline{\phi(x)}$
([[lem-complex-conjugation-and-modulus-laws]]); hence every tested matrix is
Hermitian. If $\phi(x)\ne0$, choose $t=-\overline{\phi(x)}/|\phi(x)|$, so $|t|=1$ and $t\phi(x)=-|\phi(x)|$. The inequality becomes $2\phi(0)-2|\phi(x)|\ge0$, hence $|\phi(x)|\le\phi(0)$; if $\phi(x)=0$, the same bound follows from $\phi(0)\ge0$. Thus a positive definite $\phi$ satisfies
$\phi(0)\ge0$, $\phi(x)=\overline{\phi(-x)}$ and $|\phi(x)|\le\phi(0)$ for all
$x\in G$.
