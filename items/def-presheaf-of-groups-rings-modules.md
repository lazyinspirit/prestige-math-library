---
id: def-presheaf-of-groups-rings-modules
kind: definition
title: "Presheaves and sheaves of groups, rings, and modules"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-on-topological-space, prop-groups-and-homomorphisms-form-category-grp, prop-rings-and-homomorphisms-form-category-ring, prop-modules-and-homomorphisms-form-category-rmod]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Sections 4-6 and 8-10"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Definition

Let $X$ be a topological space.
Fix a ring $R$ when modules are under discussion.

A **presheaf of groups** on $X$ is a presheaf $\mathcal F$ such that every
$\mathcal F(U)$ is a group and every restriction map
$\rho^U_V:\mathcal F(U)\to\mathcal F(V)$ is a group homomorphism
([[prop-groups-and-homomorphisms-form-category-grp]]).

A **presheaf of rings** on $X$ is defined the same way with rings and ring
homomorphisms ([[prop-rings-and-homomorphisms-form-category-ring]]).

A **presheaf of left $R$-modules** on $X$ is defined the same way with left
$R$-modules and $R$-linear maps
([[prop-modules-and-homomorphisms-form-category-rmod]]).

A **sheaf of groups**, **sheaf of rings**, or **sheaf of left $R$-modules** is
such a presheaf whose underlying set-valued presheaf is a sheaf.

In particular, each sheaf of groups has a distinguished identity section on
every open set; in additive notation this section is written $0$, and all
restrictions preserve the algebraic operations.
