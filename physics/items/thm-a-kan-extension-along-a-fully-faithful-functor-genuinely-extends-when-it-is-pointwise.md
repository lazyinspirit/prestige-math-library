---
id: thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise
kind: theorem
title: "A pointwise Kan extension along a fully faithful functor genuinely extends the original functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pointwise-kan-extension-by-the-comma-category-formula, def-full-faithful-and-essentially-surjective-functor, def-comma-slice-and-coslice-categories, def-limit-and-colimit-of-a-diagram]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 6.2.16"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $K:\mathcal C\to\mathcal D$ be fully faithful.

If $(L,\eta)$ is a pointwise left Kan extension of $F:\mathcal C\to\mathcal E$
along $K$, then for every object $c$ of $\mathcal C$ the unit component

$$\eta_c:F(c)\longrightarrow L(Kc)$$

is an isomorphism.

If $(R,\varepsilon)$ is a pointwise right Kan extension of $F$ along $K$, then
for every object $c$ the counit component

$$\varepsilon_c:R(Kc)\longrightarrow F(c)$$

is an isomorphism.

So a pointwise Kan extension along a fully faithful functor really does
restrict back to the original functor.

## Facts & Assumptions

**Given:** A fully faithful functor $K:\mathcal C\to\mathcal D$; a pointwise left Kan extension $(L,\eta)$ of $F$ along $K$; and a pointwise right Kan extension $(R,\varepsilon)$ of $F$ along $K$.

[F1] A functor is fully faithful when every map $\mathcal C(c,c')\to\mathcal D(Kc,Kc')$ is bijective ([[def-full-faithful-and-essentially-surjective-functor]]).

[F2] The objects of $(K\downarrow Kc)$ are arrows $u:Kc'\to Kc$, and the objects of $(Kc\downarrow K)$ are arrows $u:Kc\to Kc'$ ([[def-comma-slice-and-coslice-categories]]).

[L1] A pointwise left Kan extension value is the colimit of the diagram over $(K\downarrow Kc)$, with leg at $(c,1_{Kc})$ equal to $\eta_c$; dually, a pointwise right Kan extension value is the limit over $(Kc\downarrow K)$, with leg at $(c,1_{Kc})$ equal to $\varepsilon_c$ ([[def-pointwise-kan-extension-by-the-comma-category-formula]]).

[F3] A colimit over a category with a terminal object is the value at that object, and dually a limit over a category with an initial object is the value there, by the universal property of colimits and limits ([[def-limit-and-colimit-of-a-diagram]]).

## Proof

**Proof technique:** direct.

1.1 In $(K\downarrow Kc)$ the object $(c,1_{Kc})$ is terminal: for any object $(c',u:Kc'\to Kc)$, full faithfulness [F1] gives a unique arrow $a:c'\to c$ with $K(a)=u$, and that arrow is exactly the unique morphism $(c',u)\to(c,1_{Kc})$ in the comma category [F2]. Dually, in $(Kc\downarrow K)$ the object $(c,1_{Kc})$ is initial, by the same full-faithfulness argument. [F1, F2]

2.1 By [F3], the colimit of the diagram over $(K\downarrow Kc)$ is the value of the diagram at its terminal object $(c,1_{Kc})$, namely $F(c)$, and the colimit leg there is an isomorphism. Since [L1] identifies $L(Kc)$ with that colimit and $\eta_c$ with that leg, $\eta_c$ is an isomorphism. The dual statement for $\varepsilon_c$ follows from the initial object in $(Kc\downarrow K)$ and the limit clause of [F3]. [F3, L1, step 1.1]

3.1 Therefore both the left and right pointwise Kan extensions along a fully faithful functor restrict back to the original functor by isomorphism on every object of the image. [step 2.1] ∎
