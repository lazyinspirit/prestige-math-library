---
id: thm-a-natural-transformation-induces-a-morphism-of-ends-and-of-coends
kind: theorem
title: "A natural transformation of functors induces a unique morphism of their ends and of their coends"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-end-and-coend, def-wedge-and-cowedge, def-natural-transformation, def-dinatural-transformation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Remark 1.1.7"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), §2.1"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $P,P':\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be functors and
let $\eta:P\Rightarrow P'$ be a natural transformation
([[def-natural-transformation]]); a wedge is a dinatural transformation from a
constant functor ([[def-dinatural-transformation]]).

If $P$ and $P'$ have ends $(e,\omega)$ and $(e',\omega')$
([[def-end-and-coend]]), then a natural transformation induces a unique
morphism of ends: there is exactly one morphism
$\textstyle\int\eta:e\to e'$ satisfying

$$\omega'_c\circ\textstyle\int\eta=\eta_{c,c}\circ\omega_c\qquad\text{for every object }c.$$

If $P$ and $P'$ have coends $(q,\rho)$ and $(q',\rho')$, there is exactly one
morphism $\textstyle\int^{\eta}:q\to q'$ satisfying
$\textstyle\int^{\eta}\circ\rho_c=\rho'_c\circ\eta_{c,c}$ for every $c$.

Moreover $\int 1_P=1_e$, and $\int(\eta'\circ\eta)=\int\eta'\circ\int\eta$
whenever $\eta:P\Rightarrow P'$ and $\eta':P'\Rightarrow P''$ are natural and
all three ends exist.

## Facts & Assumptions

**Given:** Functors $P,P':\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$, a natural transformation $\eta:P\Rightarrow P'$, and ends and coends of $P$ and of $P'$ where these are asserted to exist.

[F1] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge, and the universal property says that every wedge factors through the end by exactly one morphism ([[def-end-and-coend]]).

[F2] A wedge from $d$ to $T$ is a dinatural transformation from a constant functor to $T$: a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$ for every $f:c\to c'$; dually a cowedge from $T$ to $d$ is a family $\rho_c:T(c,c)\to d$ with $\rho_c\circ T(f,1_c)=\rho_{c'}\circ T(1_{c'},f)$ ([[def-wedge-and-cowedge]]).

[F3] A natural transformation $\alpha:F\Rightarrow G$ is a family $\alpha_A:FA\to GA$ such that every $f:A\to B$ satisfies the naturality equation $Gf\circ\alpha_A=\alpha_B\circ Ff$ ([[def-natural-transformation]]).

[F4] A dinatural transformation $\alpha:P\to Q$ is a family $\alpha_c:P(c,c)\to Q(c,c)$ such that every $f:c\to c'$ satisfies $Q(1_c,f)\circ\alpha_c\circ P(f,1_c)=Q(f,1_{c'})\circ\alpha_{c'}\circ P(1_{c'},f)$, the equation displayed by the hexagon ([[def-dinatural-transformation]]).

## Proof

**Proof technique:** direct.

1.1 The family $\eta_{c,c}\circ\omega_c:e\to P'(c,c)$ is a wedge from $e$ to $P'$: naturality of $\eta$ at $(1_c,f):(c,c)\to(c,c')$ gives $P'(1_c,f)\circ\eta_{c,c}=\eta_{c,c'}\circ P(1_c,f)$, naturality at $(f,1_{c'}):(c',c')\to(c,c')$ gives $P'(f,1_{c'})\circ\eta_{c',c'}=\eta_{c,c'}\circ P(f,1_{c'})$, and the wedge equation for $\omega$ gives $P(1_c,f)\circ\omega_c=P(f,1_{c'})\circ\omega_{c'}$, so both sides of the wedge equation for $\eta_{c,c}\circ\omega_c$ equal $\eta_{c,c'}$ composed with that common morphism. [F2, F3, F4]

2.1 Since $(e',\omega')$ is a terminal wedge, the wedge of step 1.1 factors through it by exactly one morphism, which is the asserted $\int\eta:e\to e'$ with $\omega'_c\circ\int\eta=\eta_{c,c}\circ\omega_c$ for every $c$. [F1, step 1.1]

3.1 Taking $P'=P$, $\eta=1_P$ and $(e',\omega')=(e,\omega)$, the identity of $e$ satisfies the defining equation of step 2.1, and that equation has exactly one solution, so $\int 1_P=1_e$. [F1, step 2.1]

3.2 For $\eta:P\Rightarrow P'$ and $\eta':P'\Rightarrow P''$ with all three ends present, both $\int\eta'\circ\int\eta$ and $\int(\eta'\circ\eta)$ satisfy $\omega''_c\circ(-)=\eta'_{c,c}\circ\eta_{c,c}\circ\omega_c$, and that equation has exactly one solution, so the two agree. [F1, step 2.1]

4.1 For coends, the family $\rho'_c\circ\eta_{c,c}:P(c,c)\to q'$ is a cowedge under $P$: naturality of $\eta$ at $(f,1_c):(c',c)\to(c,c)$ and at $(1_{c'},f):(c',c)\to(c',c')$ rewrites both sides of its cowedge equation as $\rho'_c\circ P'(f,1_c)\circ\eta_{c',c}$ and $\rho'_{c'}\circ P'(1_{c'},f)\circ\eta_{c',c}$, which agree by the cowedge equation for $\rho'$; initiality of $(q,\rho)$ then gives exactly one $\int^{\eta}:q\to q'$ with $\int^{\eta}\circ\rho_c=\rho'_c\circ\eta_{c,c}$. The induced morphism runs from the coend of $P$ to the coend of $P'$, in the same direction as $\eta$, and the argument is written out here rather than left to duality because the universal property used is initiality rather than terminality. [F1, step 1.1, step 2.1] ∎

## Remarks

The two functor laws in steps 3.1 and 3.2 are proved from uniqueness alone and use nothing about $\eta$ beyond its defining equation. So on any full subcategory of functors all of whose objects have a chosen end, the assignment $P\mapsto e$ with $\eta\mapsto\int\eta$ is a functor; making that statement precise for a family of parameters, where the choice has to be made for every parameter value at once, is [[thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters]].
