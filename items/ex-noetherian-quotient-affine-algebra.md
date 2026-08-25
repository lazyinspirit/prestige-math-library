---
id: ex-noetherian-quotient-affine-algebra
kind: example
title: "$k[x,y]/(xy)$ and $\\mathbb Z[x]/(x^2-2)$ are Noetherian without classifying their ideals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-finite-type-algebra-over-noetherian-ring-is-noetherian, def-finite-type-and-module-finite-algebras, def-quotient-ring, def-multivariate-polynomial-ring-by-iteration, ex-noetherian-integers-and-fields, thm-universal-property-of-a-polynomial-ring, def-generated-and-principal-ideals, thm-generated-ideal-description-in-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §3 Theorem 3.7"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (16.12)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $k$ be a field. The rings

$$k[x,y]/(xy)\qquad\text{and}\qquad\mathbb Z[x]/(x^2-2)$$

are Noetherian ([[def-quotient-ring]]). The argument sees only that each is a
quotient of a polynomial ring in finitely many variables over a Noetherian base
ring; it inspects neither ring further, and in particular it does not depend on
whether the ring has zero divisors, which the first one does.

## Facts & Assumptions

**Given:** A field $k$, the polynomial rings $k[x,y]$ and $\mathbb Z[x]$, and the ideals $(xy)\subseteq k[x,y]$ and $(x^2-2)\subseteq\mathbb Z[x]$.

[L1] For an ideal $I$ of a ring $R$ the quotient ring $R/I$ has the additive cosets of $I$ as elements and multiplication $(r+I)(s+I)=rs+I$ ([[def-quotient-ring]]).

[L2] Polynomial rings in finitely many commuting indeterminates are defined by $R[x_1,\ldots,x_0]:=R$ and $R[x_1,\ldots,x_{n+1}]:=R[x_1,\ldots,x_n][x_{n+1}]$ ([[def-multivariate-polynomial-ring-by-iteration]]).

[L3] A commutative $R$-algebra is **of finite type** over $R$ exactly when it is isomorphic as an $R$-algebra to a quotient $R[x_1,\ldots,x_n]/\mathfrak a$ for some $n\in\mathbb N$ and some ideal $\mathfrak a$ ([[def-finite-type-and-module-finite-algebras]]).

[L4] Every field $K$ is a Noetherian ring, and so is $\mathbb Z$ ([[ex-noetherian-integers-and-fields]]).

[L5] Every commutative algebra of finite type over a Noetherian commutative ring is a Noetherian ring ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]).

[L6] For commutative rings $R,S$, a unital ring homomorphism $\varphi\colon R\to S$ and $s\in S$, there is a unique unital ring homomorphism $R[x]\to S$ extending $\varphi$ on constants and sending $x$ to $s$ ([[thm-universal-property-of-a-polynomial-ring]]).

[L7] For $S\subseteq R$, $(S)$ is the intersection of all two-sided ideals containing $S$, so $S\subseteq(S)$; $(\{a\})$ is written $(a)$ ([[def-generated-and-principal-ideals]]).

[L8] In a commutative ring, $(S)$ consists of finite sums $\sum r_is_i$, and $(a)=Ra$ ([[thm-generated-ideal-description-in-a-commutative-ring]]).

## Verification

**Proof technique:** direct.

1.1 Each ring is a quotient of a polynomial ring in finitely many indeterminates over its base ring: $k[x,y]$ is $k[x_1,x_2]$ after renaming the indeterminates, and $\mathbb Z[x]$ is $\mathbb Z[x_1]$. Being such a quotient is exactly the condition of being an algebra of finite type over that base ring, so $k[x,y]/(xy)$ is of finite type over $k$ and $\mathbb Z[x]/(x^2-2)$ is of finite type over $\mathbb Z$. [L1, L2, L3, L7, given]

1.2 The base rings $k$ and $\mathbb Z$ are Noetherian. [L4, given]

2.1 An algebra of finite type over a Noetherian commutative ring is a Noetherian ring, so both displayed rings are Noetherian. [L5, step 1.1, step 1.2]

3.1 The first ring has zero divisors, and the argument above never asked. Let $\pi$ denote the quotient map $k[x,y]\to k[x,y]/(xy)$. Evaluating at $0$ in the last indeterminate gives a ring homomorphism $\varepsilon\colon k[x][y]\to k[x]$ that fixes $k[x]$ and sends $y$ to $0$. Every element of $(xy)$ is $f\cdot xy$ with $f\in k[x,y]$, and $\varepsilon(f\cdot xy)=\varepsilon(f)\,\varepsilon(x)\,\varepsilon(y)=\varepsilon(f)\,x\cdot0=0$, whereas $\varepsilon(x)=x\ne0$; so $x\notin(xy)$ and $\pi(x)\ne0$. Exchanging the roles of the two indeterminates gives $\pi(y)\ne0$ in the same way. Yet $\pi(x)\pi(y)=\pi(xy)=0$. [L1, L6, L7, L8, step 1.1, step 2.1] ∎

## Remarks

- **The same conclusion follows from the Hilbert basis theorem plus the quotient theorem**, since $k[x,y]$ and $\mathbb Z[x]$ are Noetherian by [[cor-finite-variable-polynomial-ring-noetherian]] and a quotient of a Noetherian ring is Noetherian by [[thm-noetherian-ring-quotients-and-localisations]]. The route through [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] packages both steps and is the form later pages use.

- **Nothing here describes the ideals.** For $k[x,y]/(xy)$ the ideals can be listed with more work, and for $\mathbb Z[x]/(x^2-2)$ they can be studied by number-theoretic means; neither is needed, and neither is claimed.
