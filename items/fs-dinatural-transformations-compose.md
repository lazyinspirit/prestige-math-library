---
id: fs-dinatural-transformations-compose
kind: false-statement
title: "FALSE: dinatural transformations compose"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dinatural-transformation, thm-dinatural-transformations-do-not-compose-in-general, prop-a-natural-transformation-composed-with-a-dinatural-transformation-is-dinatural]
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
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Chapter 1 introduction and Exercise 1.2"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

**False claim:** for functors
$P,Q,R:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ and dinatural
transformations $\alpha:P\to Q$ and $\beta:Q\to R$
([[def-dinatural-transformation]]), the componentwise composite
$(\beta_c\circ\alpha_c)_c$ is a dinatural transformation $P\to R$; so the
functors on $\mathcal C^{\mathrm{op}}\times\mathcal C$ and the dinatural
transformations between them form a category.

## Facts & Assumptions

**Given:** The walking arrow $\mathcal C$, with objects $0$ and $1$ and one non-identity morphism $u:0\to1$, and the category $\mathbf{Set}$ as target.

[F1] A dinatural transformation $\alpha:P\to Q$ is a family $\alpha_c:P(c,c)\to Q(c,c)$ such that every $f:c\to c'$ satisfies $Q(1_c,f)\circ\alpha_c\circ P(f,1_c)=Q(f,1_{c'})\circ\alpha_{c'}\circ P(1_{c'},f)$, the equation displayed by the hexagon ([[def-dinatural-transformation]]).

[L1] There are a category, three set-valued functors on $\mathcal C^{\mathrm{op}}\times\mathcal C$ and two dinatural transformations between them whose componentwise composite is not dinatural: dinatural transformations do not compose in general ([[thm-dinatural-transformations-do-not-compose-in-general]]).

[L2] For natural $\sigma:P'\Rightarrow P$ and $\tau:Q\Rightarrow Q'$ and dinatural $\alpha:P\to Q$, composing a dinatural transformation with a natural transformation on either side gives a dinatural transformation ([[prop-a-natural-transformation-composed-with-a-dinatural-transformation-is-dinatural]]).

## Refutation

**Proof technique:** direct.

1.1 The witness is restated in full so that this item stands alone. Take $\mathcal C$ to be the walking arrow, so that a functor $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$ is four sets and four functions subject to one equation. Let $P$ have all four values a one-element set; let $Q$ have $Q(1,0)=\varnothing$ and $Q(0,0),Q(1,1),Q(0,1)$ one-element sets; and let $R$ have $R(1,0)=\varnothing$, $R(0,0)=\{c\}$, $R(1,1)=\{d\}$ and $R(0,1)=\{y_1,y_2\}$ with $y_1\ne y_2$, with $R(1_0,u)(c)=y_1$ and $R(u,1_1)(d)=y_2$. Let $\alpha:P\to Q$ and $\beta:Q\to R$ be the families whose components are the only functions available between one-element sets. [F1, given, construct]

2.1 Both families are dinatural and their composite is not. The hexagon for $\alpha$ at $u$ is an equation between two functions into the one-element set $Q(0,1)$, so it holds; the hexagon for $\beta$ at $u$ is an equation between two functions out of $Q(1,0)=\varnothing$, so it holds; and the two legs of the hexagon for the composite send the element of $P(1,0)$ to $y_1$ and to $y_2$ respectively, which differ. This is exactly the witness of [L1], so the displayed claim is false and the dinatural transformations are not the morphisms of a category under componentwise composition. [F1, L1, step 1.1]

3.1 What is true is the weaker statement [L2]: a dinatural transformation composed with a **natural** transformation on either side is again dinatural. So dinaturality is not closed under nothing; it is closed under composition with natural transformations, and the false claim is exactly the extension of that to two dinatural factors. [L2, step 2.1] ∎

## Remarks

The mechanism is the empty slot. Putting $\varnothing$ in the $(1,0)$ position of $Q$ and of $R$ makes the hexagon for $\beta$ an equation between functions with empty domain, so $\beta$ is dinatural for no reason of its own; the one-element set in the $(0,1)$ position of $Q$ does the same for $\alpha$ at the other end. Nothing then constrains the composite, whose hexagon has a two-element codomain.

The claim is a genuine trap rather than a careless one, because the analogous statement for natural transformations is true and is what makes functor categories exist. What fails here is that a dinatural transformation has components only on the diagonal, so composing two of them loses the off-diagonal information that each one's hexagon was about.
