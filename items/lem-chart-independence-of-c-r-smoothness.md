---
id: lem-chart-independence-of-c-r-smoothness
kind: lemma
title: "Chart independence of $C^r$ smoothness"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-c-r-and-smooth-maps-between-smooth-manifolds,
       def-smoothly-compatible-charts, def-smooth-manifold,
       prop-compatibility-of-smooth-atlases-is-an-equivalence-relation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Statement

Let $M$ and $N$ be smooth manifolds, let $F:M\to N$ be continuous at
$p\in M$, and let $r\in\mathbb N_0\cup\{\infty\}$. Let $(U,\varphi)$,
$(U',\varphi')$ be smooth charts of $M$ at $p$ and $(V,\psi)$,
$(V',\psi')$ smooth charts of $N$ at $F(p)$, with $F(U)\subseteq V$ and
$F(U')\subseteq V'$. If the representative $\psi\circ F\circ\varphi^{-1}$ is of
class $C^r$ on a neighbourhood of $\varphi(p)$, then the representative
$\psi'\circ F\circ\varphi'^{-1}$ is of class $C^r$ on a neighbourhood of
$\varphi'(p)$. Testing one chart pair therefore agrees with testing any other.

## Facts & Assumptions

**Given:** The manifolds, map, point, smoothness class $r$, and the four charts
of the Statement, with $\psi\circ F\circ\varphi^{-1}$ of class $C^r$ near
$\varphi(p)$.

[F1] Any two charts of a smooth manifold are smoothly compatible: their domains
are disjoint or both transition maps are smooth
([[def-smoothly-compatible-charts]], [[def-smooth-manifold]]).

[L1] If $u:W\to W'$ is smooth and $g:W'\to W''$ is $C^r$, then $g\circ u$ is
$C^r$; and if $h:W\to W'$ is $C^r$ and $v:W'\to W''$ is smooth, then $v\circ h$
is $C^r$
([[prop-compatibility-of-smooth-atlases-is-an-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 The overlaps $U\cap U'$ and $V\cap V'$ contain $p$ and $F(p)$, so both are
nonempty; by [F1] the transitions $\varphi\circ\varphi'^{-1}$ on
$\varphi'(U\cap U')$ and $\psi'\circ\psi^{-1}$ on $\psi(V\cap V')$ are smooth.
Because $F$ is continuous at $p$ and $F(p)\in V\cap V'$, there is an open
neighbourhood $U_p\subseteq U\cap U'$ of $p$ with $F(U_p)\subseteq V\cap V'$.
[given, F1]

1.2 On $\varphi'(U_p)$ the new representative factors as

$$\psi'\circ F\circ\varphi'^{-1}
=\bigl(\psi'\circ\psi^{-1}\bigr)\circ\bigl(\psi\circ F\circ\varphi^{-1}\bigr)
\circ\bigl(\varphi\circ\varphi'^{-1}\bigr).$$

First [L1] composes the smooth $\varphi\circ\varphi'^{-1}$ after the $C^r$ map
$\psi\circ F\circ\varphi^{-1}$ and keeps $C^r$; then [L1] composes the smooth
$\psi'\circ\psi^{-1}$ after that and keeps $C^r$. The middle factor is $C^r$ on
the image of $\varphi'(U_p)$ under $\varphi\circ\varphi'^{-1}$, which is an open
neighbourhood of $\varphi(p)$ inside the set where the given representative is
$C^r$; hence the composite is $C^r$ on $\varphi'(U_p)$. [given, F1, L1,
step 1.1]

2.1 The set $\varphi'(U_p)$ is an open neighbourhood of $\varphi'(p)$, so the
representative $\psi'\circ F\circ\varphi'^{-1}$ is $C^r$ near $\varphi'(p)$,
proving the claim; the reverse implication is the same argument with the chart
pairs interchanged. [given, step 1.2] ∎
