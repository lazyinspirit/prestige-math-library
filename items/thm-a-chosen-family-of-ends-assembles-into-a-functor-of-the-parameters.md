---
id: thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters
kind: theorem
title: "A chosen family of ends is the object part of exactly one functor making the counit natural in the parameters"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-parametrised-end-and-parametrised-coend, def-end-and-coend, thm-a-natural-transformation-induces-a-morphism-of-ends-and-of-coends, def-functor-and-contravariant-functor, def-wedge-and-cowedge]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (2.5)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $T:\mathcal P\times\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be
a functor and suppose given a parametrised end of $T$
([[def-parametrised-end-and-parametrised-coend]]): an end
$(E(p),\omega^p)$ of $T(p,-,-)$ for every object $p$ of $\mathcal P$
([[def-end-and-coend]], [[def-wedge-and-cowedge]]).

Then there is exactly one functor structure making every counit component
natural in the parameter: exactly one assignment of a morphism
$E(u):E(p)\to E(p')$ to each $u:p\to p'$ such that $E$ satisfies the functor
laws ([[def-functor-and-contravariant-functor]]) and, for every object $c$ of
$\mathcal C$, the family $\omega^{\bullet}_c$ is natural in the parameter,
that is

$$\omega^{p'}_c\circ E(u)=T(u,1_c,1_c)\circ\omega^{p}_c\qquad\text{for every }u:p\to p'\text{ and every }c.$$

The statement is about a **given** choice of ends. It does not assert that a
functor on $\mathcal P$ can be produced from the bare hypothesis that each
$T(p,-,-)$ has an end.

## Facts & Assumptions

**Given:** A functor $T$ on $\mathcal P\times\mathcal C^{\mathrm{op}}\times\mathcal C$ and a chosen end $(E(p),\omega^p)$ of $T(p,-,-)$ for every object $p$ of $\mathcal P$.

[F1] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge, and every wedge factors through a terminal one by exactly one morphism ([[def-end-and-coend]]).

[F2] A wedge from $d$ to $T$ is a dinatural transformation from a constant functor to $T$: a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$ for every $f:c\to c'$ ([[def-wedge-and-cowedge]]).

[F3] A parametrised end of $T$ is a choice, for every object $p$ of the parameter category, of an end taken in the two dinatural variables with the remaining variables held fixed ([[def-parametrised-end-and-parametrised-coend]]).

[L1] For a natural transformation $\eta:P\Rightarrow P'$ of functors on $\mathcal C^{\mathrm{op}}\times\mathcal C$ whose ends exist, a natural transformation induces a unique morphism of ends: there is exactly one $\int\eta$ with $\omega'_c\circ\int\eta=\eta_{c,c}\circ\omega_c$ for every $c$ ([[thm-a-natural-transformation-induces-a-morphism-of-ends-and-of-coends]]).

[F4] A functor satisfies $F(1_A)=1_{FA},\qquad F(g\circ f)=Fg\circ Ff$ ([[def-functor-and-contravariant-functor]]).

## Proof

**Proof technique:** direct.

1.1 For $u:p\to p'$ the family $T(u,1_a,1_b):T(p,a,b)\to T(p',a,b)$, indexed by the objects $(a,b)$ of $\mathcal C^{\mathrm{op}}\times\mathcal C$, is a natural transformation $T(p,-,-)\Rightarrow T(p',-,-)$: its naturality equation at a morphism $(g,h)$ is the equality of the two ways of writing $T$ applied to the composite of $(u,1_a,1_b)$ with $(1_{p'},g,h)$ and of $(1_p,g,h)$ with $(u,1_{a'},1_{b'})$, and these composites agree in $\mathcal P\times\mathcal C^{\mathrm{op}}\times\mathcal C$ because composition there is componentwise. [F1, F2, F3, given]

2.1 By [L1] applied to that natural transformation, terminality of the chosen end at $p'$ gives exactly one morphism $E(u):E(p)\to E(p')$ satisfying $\omega^{p'}_cE(u)=T(u,1_c,1_c)\omega^p_c$ for every $c$; so an arrow map with the required naturality exists and no other assignment has it. [F1, F3, L1, step 1.1]

3.1 The identity of $E(p)$ satisfies the equation defining $E(1_p)$, since $T(1_p,1_c,1_c)$ is the identity of $T(p,c,c)$ by [F4]; by the uniqueness in step 2.1, $E(1_p)=1_{E(p)}$. [F1, F4, step 2.1]

3.2 For $u:p\to p'$ and $u':p'\to p''$, both $E(u')E(u)$ and $E(u'u)$ satisfy $\omega^{p''}_c\circ(-)=T(u'u,1_c,1_c)\circ\omega^p_c$, the first because $T(u',1_c,1_c)T(u,1_c,1_c)=T(u'u,1_c,1_c)$ by [F4]; by the uniqueness in step 2.1 they are equal. [F4, step 2.1]

4.1 So $E$ with the arrow map of step 2.1 is a functor and every $\omega^{\bullet}_c$ is natural in the parameter; and any functor structure with that naturality has an arrow map satisfying the same defining equation, hence equals this one by the uniqueness in step 2.1. That is the asserted existence and uniqueness. [step 2.1, step 3.1, step 3.2] ∎

## Remarks

The whole argument is the uniqueness half of one universal property, used four times: once to produce the arrow map, once for each functor law, and once for the uniqueness of the structure. Nothing is checked by hand about the morphisms $E(u)$ themselves.

Stating the theorem in the data-supplied form matters. Without a chosen end at every parameter there is no object map to make functorial, and producing one would mean selecting an end simultaneously for all objects of $\mathcal P$, which may be a proper class. The library's treatment of chosen limits carries the same hypothesis for the same reason.
