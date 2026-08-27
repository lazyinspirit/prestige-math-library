---
id: cex-torsion-free-abelian-groups-do-not-form-an-abelian-category
kind: counterexample
title: "Torsion-free abelian groups do not form an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-abelian-category, thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups, prop-abelian-groups-are-z-modules, thm-an-abelian-category-is-balanced]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 4.5.13"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-21
---

## Statement refuted

The full subcategory of torsion-free abelian groups is an abelian category.

## Facts & Assumptions

**Given:** The full subcategory $\mathbf{Ab}_{\mathrm{tf}}$ of torsion-free
abelian groups.

[L1] Torsion-free abelian groups form a full subcategory of $\mathbf{Ab}$
([[thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups]],
[[prop-abelian-groups-are-z-modules]]).

[L2] Abelian categories are balanced
([[thm-an-abelian-category-is-balanced]]).

## Counterexample

1.1 In $\mathbf{Ab}_{\mathrm{tf}}$, multiplication by $2$ on $\mathbb Z$ is monic and epic. Indeed, if $2u=2v$ for maps into or out of a torsion-free group $T$, then $2(u(x)-v(x))=0$ for every $x$, so torsion-freeness forces $u=v$. [L1]

2.1 The map $2:\mathbb Z\to\mathbb Z$ is not an isomorphism in $\mathbf{Ab}_{\mathrm{tf}}$, because its inverse would have to send $1$ to $1/2$, which is not an integer. If $\mathbf{Ab}_{\mathrm{tf}}$ were abelian, [L2] would force every bimorphism to be an isomorphism. So the subcategory is not abelian. [L2, step 1.1] ∎
