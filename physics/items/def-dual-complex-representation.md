---
id: def-dual-complex-representation
kind: definition
title: "The dual or contragredient complex representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraic-dual-and-linear-functional, def-finite-dimensional-representation-of-a-group-over-a-field]
justified_by: []
aliases: []
verification:
  audited: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.4"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Definition

Let $\rho:G\to\operatorname{GL}(V)$ be a finite-dimensional complex
representation of a group $G$
([[def-finite-dimensional-representation-of-a-group-over-a-field]]). Its
**dual** or **contragredient** representation is the representation $\rho^{*}$
of $G$ on the algebraic dual space $V^{*}$
([[def-algebraic-dual-and-linear-functional]]) defined by

$$\bigl(g\cdot f\bigr)(v):=f\bigl(g^{-1}\cdot v\bigr)\qquad(g\in G,\ f\in V^{*},\ v\in V),$$

equivalently $g\cdot f=f\circ\rho(g^{-1})$.

Each operator $\rho^{*}(g)$ is $\mathbb C$-linear because $f$ and
$\rho(g^{-1})$ are. The inverse appears so that composition is
order-preserving: writing $g\cdot f=f\circ\rho(g^{-1})$,

$$(gh)\cdot f=f\circ\rho\bigl((gh)^{-1}\bigr)=f\circ\rho(h^{-1})\circ\rho(g^{-1})=g\cdot(h\cdot f),$$

and $1\cdot f=f\circ\operatorname{id}_V=f$. Hence $\rho^{*}$ is a group
homomorphism $G\to\operatorname{GL}(V^{*})$, a representation of the same
degree as $\rho$.
