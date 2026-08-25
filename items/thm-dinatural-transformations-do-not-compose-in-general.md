---
id: thm-dinatural-transformations-do-not-compose-in-general
kind: theorem
title: "Dinatural transformations do not compose in general"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dinatural-transformation, prop-sets-and-functions-form-category-set, def-product-category, def-opposite-category, def-category]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Chapter 1 introduction and Exercise 1.2"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), §4.4"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

There are a category $\mathcal C$, functors
$P,Q,R:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$
([[def-product-category]], [[def-opposite-category]],
[[prop-sets-and-functions-form-category-set]]) and dinatural transformations
$\alpha:P\to Q$ and $\beta:Q\to R$ ([[def-dinatural-transformation]]) for which
the componentwise composite $(\beta_c\circ\alpha_c)_{c}$ is **not** a dinatural
transformation $P\to R$.

Hence the dinatural transformations between functors on
$\mathcal C^{\mathrm{op}}\times\mathcal C$ are not the morphisms of a category
with componentwise composition.

## Facts & Assumptions

**Given:** The walking arrow $\mathcal C$, with objects $0$ and $1$ and one non-identity morphism $u:0\to1$.

[F1] A dinatural transformation $\alpha:P\to Q$ is a family $\alpha_c:P(c,c)\to Q(c,c)$ such that every $f:c\to c'$ satisfies $Q(1_c,f)\circ\alpha_c\circ P(f,1_c)=Q(f,1_{c'})\circ\alpha_{c'}\circ P(1_{c'},f)$, the equation displayed by the hexagon ([[def-dinatural-transformation]]).

[F2] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F3] Composition in a category is associative and unital: $h\circ(g\circ f)=(h\circ g)\circ f,\qquad 1_B\circ f=f=f\circ1_A$ ([[def-category]]).

[F4] The product category has morphisms $(f,g):(C,D)\to(C',D')$, componentwise identities, and componentwise composition $(f',g')\circ(f,g)=(f'\circ f,g'\circ g)$ ([[def-product-category]]).

## Proof

**Proof technique:** constructive.

1.1 Take $\mathcal C$ to be the walking arrow. Its product with the opposite has objects $(0,0),(0,1),(1,0),(1,1)$, and a functor $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$ is exactly four sets $T(0,0),T(0,1),T(1,0),T(1,1)$ together with four functions $T(u,1_0):T(1,0)\to T(0,0)$, $T(1_1,u):T(1,0)\to T(1,1)$, $T(1_0,u):T(0,0)\to T(0,1)$ and $T(u,1_1):T(1,1)\to T(0,1)$ subject to the single equation $T(1_0,u)\circ T(u,1_0)=T(u,1_1)\circ T(1_1,u)$. Define $P$ by taking all four sets to be a one-element set; define $Q$ by $Q(1,0)=\varnothing$ and $Q(0,0),Q(1,1),Q(0,1)$ one-element sets; define $R$ by $R(1,0)=\varnothing$, $R(0,0)=\{c\}$, $R(1,1)=\{d\}$, $R(0,1)=\{y_1,y_2\}$ with $y_1\ne y_2$, $R(1_0,u)(c)=y_1$ and $R(u,1_1)(d)=y_2$. [F2, F3, F4, given, construct]

2.1 Each of $P,Q,R$ satisfies the displayed functor equation, so each is a functor: for $P$ both composites are functions between one-element sets; for $Q$ and for $R$ both composites are functions with domain the empty set $\varnothing$, and any two functions with empty domain and the same codomain are equal. [F3, F4, step 1.1, algebra]

2.2 The unique family $\alpha$ with $\alpha_0:P(0,0)\to Q(0,0)$ and $\alpha_1:P(1,1)\to Q(1,1)$ is dinatural: the only non-identity morphism of $\mathcal C$ is $u$, and the hexagon at $u$ is an equation between two functions $P(1,0)\to Q(0,1)$ whose codomain $Q(0,1)$ has one element. [F1, step 1.1]

2.3 Every family $\beta$ with $\beta_0:Q(0,0)\to R(0,0)$ and $\beta_1:Q(1,1)\to R(1,1)$ is dinatural: the hexagon at $u$ is an equation between two functions whose domain is $Q(1,0)=\varnothing$. [F1, step 1.1]

3.1 The componentwise composite $\gamma$, with $\gamma_0=\beta_0\alpha_0$ and $\gamma_1=\beta_1\alpha_1$, fails the hexagon at $u$: the left leg $R(1_0,u)\circ\gamma_0\circ P(u,1_0)$ sends the element of the one-element set $P(1,0)$ to $y_1$, the right leg $R(u,1_1)\circ\gamma_1\circ P(1_1,u)$ sends it to $y_2$, and $y_1\ne y_2$. So $\alpha$ and $\beta$ are dinatural and their composite is not, which is the asserted witness. [F1, step 1.1, step 2.1, step 2.2, step 2.3, discharge-construct] ∎

## Remarks

The two empty slots are the whole mechanism. Putting $\varnothing$ in the $(1,0)$ position of $Q$ and of $R$ makes the functor equation of step 1.1 vacuous there and makes every family $Q\to R$ dinatural, so the second half of the composite is unconstrained; the one-element set in the $(0,1)$ position of $Q$ makes the first half unconstrained in the other direction. The composite then has to satisfy a hexagon whose codomain $R(0,1)$ has two elements, and nothing has forced its two legs to agree.

A dinatural transformation may still be composed with a natural transformation on either side, and that composite is dinatural; this is [[prop-a-natural-transformation-composed-with-a-dinatural-transformation-is-dinatural]].
