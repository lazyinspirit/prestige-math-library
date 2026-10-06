---
id: def-map-transverse-to-a-regular-foliation
kind: definition
title: "Smooth maps transverse to a regular foliation"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
  - def-transverse-smooth-maps
  - def-smooth-distribution-on-a-manifold
  - def-vector-subbundle
  - thm-regular-foliations-and-integrable-distributions-correspond
  - def-differential-of-a-smooth-map
  - def-countable-choice
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), the
standing assumption of the smooth-distribution setting
([[def-smooth-distribution-on-a-manifold]]). Let $F$ be a regular foliation of
$M$ with tangent distribution $D=TF$, the integrable smooth subbundle of $TM$
supplied by
[[thm-regular-foliations-and-integrable-distributions-correspond]]
([[def-vector-subbundle]]). Let $N$ be a smooth manifold and $f:N\to M$ a smooth
map with differential $df_x:T_xN\to T_{f(x)}M$ ([[def-differential-of-a-smooth-map]]).

Then $f$ is **transverse to $F$ at $x\in N$** when

$$df_x(T_xN)+D_{f(x)}=T_{f(x)}M ,$$

and **transverse to $F$**, written $f\pitchfork F$, when this holds at every
$x\in N$. When $N\subseteq M$ and $f$ is the inclusion of an embedded
submanifold, the condition reads $T_xN+D_x=T_xM$ at every $x\in N$: this is
the pointwise sum condition of [[def-transverse-smooth-maps]] applied with the
leaf distribution $D$ in place of the tangent space of a second submanifold,
so the definition specialises the published transversality of smooth maps to
the leaf distribution. The
condition forces $\dim N\ge\operatorname{codim}F$ at every point, since
$\dim\bigl(df_x(T_xN)\bigr)\le\dim N$ and the sum with the $(n-q)$-dimensional
space $D_{f(x)}$ fills the $n$-dimensional space $T_{f(x)}M$. When
$\operatorname{codim}F=0$ the condition is automatic, because then
$D_{f(x)}=T_{f(x)}M$.
