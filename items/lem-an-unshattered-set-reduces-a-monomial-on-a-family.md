---
id: lem-an-unshattered-set-reduces-a-monomial-on-a-family
kind: lemma
title: "If $\\mathcal{F}$ does not shatter $T$ then $x_T$ agrees on $\\{v_F:F\\in\\mathcal{F}\\}$ with a combination of the $x_S$ for $S\\subsetneq T$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-shattering-and-vc-dimension, def-multilinear-polynomial-and-multilinear-reduction, def-incidence-vector-of-a-subset, def-monomials-multidegree-and-total-degree, def-polynomial-evaluation-and-root, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field, let $\mathcal{F}\subseteq\mathcal{P}([n])$, and let $T\subseteq[n]$. If
$\mathcal{F}$ does not shatter $T$, then on the set of incidence vectors
$\{v_F:F\in\mathcal{F}\}$ the monomial

$$x_T:=\prod_{i\in T}x_i$$

agrees with a $K$-linear combination of the monomials $x_S$ with $S\subsetneq T$.

## Facts & Assumptions

**Given:** a field $K$, a family $\mathcal{F}\subseteq\mathcal{P}([n])$, and a set $T\subseteq[n]$ that is not shattered by $\mathcal{F}$; incidence vectors and polynomials are taken over $K$.

[F1] Since $T$ is not shattered, there is some subset $A\subseteq T$ that is not realised as $F\cap T$ by any member $F$ of $\mathcal{F}$ ([[def-shattering-and-vc-dimension]]).

[F2] The incidence vector $v_F$ has coordinate $1$ exactly on the elements of $F$ ([[def-incidence-vector-of-a-subset]]).

## Proof

**Proof technique:** direct.

1.1 Choose $A\subseteq T$ as in [F1], and define $$g(x):=\prod_{i\in A}x_i\prod_{i\in T\setminus A}(1-x_i).$$ [F1, construct]

2.1 For any $F\in\mathcal{F}$, the value $g(v_F)$ is $1$ exactly when $F\cap T=A$, and it is $0$ otherwise. Since no member of $\mathcal{F}$ realises the trace $A$, step 1.1 gives $g(v_F)=0$ for every $F\in\mathcal{F}$. [F2, step 1.1]

3.1 Expanding the product in step 1.1 gives $$g=(-1)^{\lvert T\setminus A\rvert}x_T+\sum_{A\subseteq S\subsetneq T}(\pm1)x_S.$$ Since step 2.1 says $g$ is the zero function on the incidence vectors of $\mathcal{F}$, this rearranges there to an expression of $x_T$ as a linear combination of the $x_S$ with $S\subsetneq T$. [step 1.1, step 2.1] ∎
