---
id: def-reachable-configuration-formula
kind: definition
title: "The quantified formula expressing reachability between two configurations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-quantified-boolean-formula-and-tqbf]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Fix a family of vertices encoded by bit strings of length $m$, together with a
chosen quantifier-free formula $\operatorname{Next}(U,V)$ of size $O(m)$
asserting that the encoded vertex $V$ is reachable from $U$ by one legal graph
edge. In the application to PSPACE-hardness, $\operatorname{Next}$ is the
one-step configuration predicate for a fixed machine on a fixed input length.
Let $\operatorname{Eq}_m(U,V)$ be the quantifier-free formula asserting bitwise
equality of the strings $U$ and $V$, and abbreviate
$$ \operatorname{PairEq}_m((Y,Z),(U,V)):=\operatorname{Eq}_m(Y,U)\wedge\operatorname{Eq}_m(Z,V). $$

For each $i\in\mathbb N$, define an open prenex formula $\Theta_i(U,V)$, whose
only free variables are the endpoint blocks $U,V$, recursively as follows:

$$\Theta_0(U,V):=\operatorname{Eq}_m(U,V)\vee \operatorname{Next}(U,V),$$

and for $i\ge 1$, first write the already prenex previous formula, after
renaming all its bound variables freshly, as
$$ \Theta_{i-1}(Y,Z)=Q_1X_1\cdots Q_tX_t\ \rho_{i-1}(Y,Z,X_1,\dots,X_t), $$
where $\rho_{i-1}$ is quantifier-free, and set
$$\Theta_i(U,V):=\exists W\,\forall b\,\exists Y\,\exists Z\,Q_1X_1\cdots Q_tX_t\ \Bigl(((b=0)\to\operatorname{PairEq}_m((Y,Z),(U,W)))\wedge ((b=1)\to\operatorname{PairEq}_m((Y,Z),(W,V)))\wedge \rho_{i-1}(Y,Z,X_1,\dots,X_t)\Bigr).$$

The variable $W$ is the midpoint candidate, the one-bit variable $b$ chooses
left or right half, and the variables $Y,Z$ feed the single recursive copy of
$\Theta_{i-1}$.

## Remarks

- The symbols $b=0$, $b=1$, and $P\to Q$ abbreviate quantifier-free Boolean
  formulas built from $0,1,\neg,\wedge,\vee$. Thus the displayed construction
  is genuinely prenex. After the endpoint blocks $U,V$ are replaced by fixed
  bit strings, $\Theta_i(U,V)$ is a closed quantified Boolean formula in the
  sense of [[def-quantified-boolean-formula-and-tqbf]].
- The naive formula
  $\exists W(\Theta_{i-1}(U,W)\wedge\Theta_{i-1}(W,V))$ duplicates the previous
  level. The present definition is the size-controlled version used for the
  PSPACE-hardness proof.
- The intended meaning is that $\Theta_i(U,V)$ says that $V$ is reachable from
  $U$ by a path of length at most $2^i$.
