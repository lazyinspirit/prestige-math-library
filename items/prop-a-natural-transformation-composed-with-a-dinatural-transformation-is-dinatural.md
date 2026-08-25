---
id: prop-a-natural-transformation-composed-with-a-dinatural-transformation-is-dinatural
kind: proposition
title: "Composing a dinatural transformation with a natural transformation on either side gives a dinatural transformation"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-dinatural-transformation, def-natural-transformation, def-product-category, def-opposite-category]
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
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Exercise 1.2"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $P',P,Q,Q':\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be
functors ([[def-product-category]], [[def-opposite-category]]), let
$\sigma:P'\Rightarrow P$ and $\tau:Q\Rightarrow Q'$ be natural transformations
([[def-natural-transformation]]), and let $\alpha:P\to Q$ be dinatural
([[def-dinatural-transformation]]). Then composing a dinatural transformation
with a natural transformation on either side gives a dinatural transformation:
the families

$$(\alpha\sigma)_c:=\alpha_c\circ\sigma_{c,c}:P'(c,c)\to Q(c,c),\qquad (\tau\alpha)_c:=\tau_{c,c}\circ\alpha_c:P(c,c)\to Q'(c,c)$$

are dinatural transformations $P'\to Q$ and $P\to Q'$ respectively.

## Facts & Assumptions

**Given:** Functors $P',P,Q,Q'$ on $\mathcal C^{\mathrm{op}}\times\mathcal C$, natural transformations $\sigma:P'\Rightarrow P$ and $\tau:Q\Rightarrow Q'$, and a dinatural transformation $\alpha:P\to Q$.

[F1] A dinatural transformation $\alpha:P\to Q$ is a family $\alpha_c:P(c,c)\to Q(c,c)$ such that every $f:c\to c'$ satisfies $Q(1_c,f)\circ\alpha_c\circ P(f,1_c)=Q(f,1_{c'})\circ\alpha_{c'}\circ P(1_{c'},f)$, the equation displayed by the hexagon ([[def-dinatural-transformation]]).

[F2] A natural transformation $\alpha:F\Rightarrow G$ is a family $\alpha_A:FA\to GA$ such that every $f:A\to B$ satisfies the naturality equation $Gf\circ\alpha_A=\alpha_B\circ Ff$ ([[def-natural-transformation]]).

[F3] The product category $\mathcal C\times\mathcal D$ has objects $(C,D)$, morphisms $(f,g):(C,D)\to(C',D')$, componentwise identities, and componentwise composition ([[def-product-category]]).

[F4] The opposite category has the same objects and $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$ ([[def-opposite-category]]).

## Proof

**Proof technique:** direct.

1.1 A morphism $f:c\to c'$ of $\mathcal C$ supplies exactly four morphisms of $\mathcal C^{\mathrm{op}}\times\mathcal C$ between the objects that occur in a hexagon at $f$, namely $(f,1_c):(c',c)\to(c,c)$, $(1_{c'},f):(c',c)\to(c',c')$, $(1_c,f):(c,c)\to(c,c')$ and $(f,1_{c'}):(c',c')\to(c,c')$; the first coordinate of each is the morphism of $\mathcal C^{\mathrm{op}}$ corresponding to $f$ or an identity. [F1, F3, F4, given]

2.1 For the pre-composition case, naturality of $\sigma$ at the first two morphisms of step 1.1 gives $\sigma_{c,c}\circ P'(f,1_c)=P(f,1_c)\circ\sigma_{c',c}$ and $\sigma_{c',c'}\circ P'(1_{c'},f)=P(1_{c'},f)\circ\sigma_{c',c}$, so both legs of the hexagon for $\alpha\sigma$ at $f$ equal the corresponding leg of the hexagon for $\alpha$ precomposed with $\sigma_{c',c}$; those two legs agree by [F1], hence so do the legs for $\alpha\sigma$, and $\alpha\sigma$ is dinatural. [F1, F2, step 1.1]

3.1 For the post-composition case, naturality of $\tau$ at the last two morphisms of step 1.1 gives $Q'(1_c,f)\circ\tau_{c,c}=\tau_{c,c'}\circ Q(1_c,f)$ and $Q'(f,1_{c'})\circ\tau_{c',c'}=\tau_{c,c'}\circ Q(f,1_{c'})$, so both legs of the hexagon for $\tau\alpha$ at $f$ equal the corresponding leg of the hexagon for $\alpha$ postcomposed with $\tau_{c,c'}$; those two legs agree by [F1], hence so do the legs for $\tau\alpha$, and $\tau\alpha$ is dinatural. [F1, F2, step 1.1] ∎

## Remarks

Neither half assumes anything about $\sigma$ or $\tau$ beyond naturality on the product category, and neither assumes that $\alpha$ is natural: the argument transports the hexagon for $\alpha$ along $\sigma$ or $\tau$ and never builds a new one. What it does not give is a composition rule for two dinatural transformations, and no such rule holds: [[thm-dinatural-transformations-do-not-compose-in-general]] exhibits $\alpha$ and $\beta$ both dinatural whose componentwise composite is not.
