---
id: def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid
kind: definition
title: "The outward unit normal at a boundary point of a compact solid"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-interior-closure-boundary, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Definition

Let $E\subseteq\mathbb R^3$ be compact and let $p\in\partial E$, the boundary of [[def-metric-interior-closure-boundary]]. For a unit vector $\nu\in\mathbb R^3$, that is one with $\lVert\nu\rVert_2=1$ in the norm of [[def-euclidean-inner-product]], a unit vector $\nu$ is **outward** at $p$ when there is a real $\varepsilon>0$ with $p+t\nu\notin E$ and $p-t\nu\in E$ for every $t$ with $0<t<\varepsilon$.

A **plane of unit normals** at $p$ is a two-dimensional linear subspace $T\subseteq\mathbb R^3$; the two unit vectors orthogonal to $T$ are $\pm\nu$ for a single $\nu$, and when one of them is outward at $p$ the other is not, since replacing $\nu$ by $-\nu$ exchanges the two displayed conditions. In that situation the outward one is called **the outward unit normal to $T$ at $p$**.

## Remarks

- **Outwardness alone does not single out one vector.** Take $E$ the closed unit ball and $p$ a point of the unit sphere. Every unit vector $\nu$ with $\langle p,\nu\rangle>0$ satisfies the definition, because $\lVert p\pm t\nu\rVert_2^2=1\pm2t\langle p,\nu\rangle+t^2$ is above $1$ for small $t>0$ with the plus sign and below $1$ with the minus sign. So the definition is a condition on a unit vector and not a construction of one; what makes "the outward unit normal" a definite object is the second paragraph, where a plane is supplied and only two candidates remain.

- **Existence is not asserted.** A boundary point of an arbitrary compact set need admit no outward unit vector: if $E=\{p\}$ is a singleton, then $p-t\nu\notin E$ for every unit vector $\nu$ and every $t>0$. Nothing below claims outwardness at seams and edges; the claim is made at the interior parameter points of a graph face whose projection lands in the interior of the base.

- **Why the condition is one-sided on each side.** Requiring only $p+t\nu\notin E$ would admit a vector tangent to a spike of $E$; requiring only $p-t\nu\in E$ would admit a vector pointing along the surface. Both halves are used where outwardness is proved.
