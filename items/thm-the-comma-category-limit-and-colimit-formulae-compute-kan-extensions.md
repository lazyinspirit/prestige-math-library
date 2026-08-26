---
id: thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions
kind: theorem
title: "Comma-category limit and colimit formulae compute Kan extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-kan-extension, def-comma-slice-and-coslice-categories, def-limit-and-colimit-of-a-diagram, def-constant-diagram-cone-cocone-and-cone-morphism, def-functor-and-contravariant-functor]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Theorem 6.2.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, §§4.1-4.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$ be functors,
and fix $d\in\mathcal D$.

For the comma category $(K\downarrow d)$, let

$$\pi_d:(K\downarrow d)\longrightarrow\mathcal C\longrightarrow\mathcal E$$

be the diagram sending $(c,u:Kc\to d)$ to $F(c)$.

If $\pi_d$ has a colimit cocone
$\lambda_{(c,u)}:F(c)\to L_d$, then $L_d$ has the objectwise universal property
of the left Kan extension value at $d$: for every functor
$M:\mathcal D\to\mathcal E$ and natural transformation $\alpha:F\Rightarrow MK$,
there is a unique morphism $\overline{\alpha}_d:L_d\to M(d)$ with

$$\overline{\alpha}_d\circ\lambda_{(c,u)}=M(u)\circ\alpha_c.$$

Dually, if the diagram

$$\sigma_d:(d\downarrow K)\longrightarrow\mathcal C\longrightarrow\mathcal E$$

has a limit cone $\rho_{(c,u)}:R_d\to F(c)$, then $R_d$ has the objectwise
universal property of the right Kan extension value at $d$: for every functor
$M:\mathcal D\to\mathcal E$ and natural transformation $\beta:MK\Rightarrow F$,
there is a unique morphism $\overline{\beta}_d:M(d)\to R_d$ with

$$\rho_{(c,u)}\circ\overline{\beta}_d=\beta_c\circ M(u).$$

If such colimits, respectively limits, are supplied for every $d$, then their
values and the uniquely forced arrow maps assemble into a functor
$\operatorname{Lan}_KF$, respectively $\operatorname{Ran}_KF$. The left unit
component $\eta_c:F(c)\to\operatorname{Lan}_KF(Kc)$ is the leg at
$(c,1_{Kc})$, and the right counit component
$\varepsilon_c:\operatorname{Ran}_KF(Kc)\to F(c)$ is the leg at $(c,1_{Kc})$.

## Facts & Assumptions

**Given:** Functors $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$; an object $d$ of $\mathcal D$; the comma categories $(K\downarrow d)$ and $(d\downarrow K)$; and the diagrams $\pi_d$ and $\sigma_d$ described in the Statement.

[F1] The objects of $(K\downarrow d)$ are pairs $(c,u:Kc\to d)$ and the objects of $(d\downarrow K)$ are pairs $(c,u:d\to Kc)$, with the usual commuting-arrow morphisms ([[def-comma-slice-and-coslice-categories]]).

[F2] A colimit is an initial cocone and a limit is a terminal cone: morphisms out of a colimit, and into a limit, are uniquely determined by their composites with the structure maps ([[def-limit-and-colimit-of-a-diagram]], [[def-constant-diagram-cone-cocone-and-cone-morphism]]).

[F3] A left Kan extension $(L,\eta)$ of $F$ along $K$ is initial among pairs $(M,\alpha)$ with $\alpha:F\Rightarrow MK$, and a right Kan extension $(R,\varepsilon)$ is terminal among pairs $(M,\beta)$ with $\beta:MK\Rightarrow F$ ([[def-left-and-right-kan-extension]]).

## Proof

**Proof technique:** direct.

1.1 Let $\alpha:F\Rightarrow MK$. For each object $(c,u:Kc\to d)$ of $(K\downarrow d)$, the morphism $M(u)\circ\alpha_c:F(c)\to M(d)$ is natural in $(c,u)$ because $\alpha$ is natural, so it is a cocone under $\pi_d$. By [F2] there is a unique morphism $\overline{\alpha}_d:L_d\to M(d)$ with $\overline{\alpha}_d\lambda_{(c,u)}=M(u)\alpha_c$ for every $(c,u)$. This is exactly the left objectwise universal property at $d$. [F1, F2, F3]

1.2 Let $\beta:MK\Rightarrow F$. For each object $(c,u:d\to Kc)$ of $(d\downarrow K)$, the morphism $\beta_c\circ M(u):M(d)\to F(c)$ is natural in $(c,u)$, hence a cone over $\sigma_d$. By [F2] there is a unique morphism $\overline{\beta}_d:M(d)\to R_d$ with $\rho_{(c,u)}\overline{\beta}_d=\beta_cM(u)$ for every $(c,u)$. This is exactly the right objectwise universal property at $d$. [F1, F2, F3]

2.1 Suppose the colimits are supplied for all $d$. For $v:d\to d'$, the family $\lambda_{(c,vu)}:F(c)\to L_{d'}$ is a cocone under $\pi_d$, so [F2] gives a unique morphism $\operatorname{Lan}_KF(v):L_d\to L_{d'}$ with $\operatorname{Lan}_KF(v)\lambda_{(c,u)}=\lambda_{(c,vu)}$; uniqueness makes identities and composition hold, so the values assemble into a functor, and the leg at $(c,1_{Kc})$ is the unit component $\eta_c$. The same argument with the cones of step 1.2 assembles the supplied limits into $\operatorname{Ran}_KF$, with counit component $\varepsilon_c$ the leg at $(c,1_{Kc})$. [F1, F2, step 1.1, step 1.2] ∎
