---
id: thm-the-differential-sends-curve-velocities-to-composite-curve-velocities
kind: theorem
title: "The differential sends curve velocities to composite curve velocities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-differential-of-a-smooth-map, def-velocity-derivation-of-a-smooth-curve]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

If $\gamma$ is a smooth curve with $\gamma(0)=p$ and $F:M\to N$ is smooth, then $dF_p(\dot\gamma(0))=\frac{d}{dt}(F\circ\gamma)(0)$ as derivations at $F(p)$.

## Facts & Assumptions

**Given:** A smooth curve $\gamma$ through $p$ and a smooth map $F:M\to N$.

[F1] The differential acts by pullback of target germs ([[def-differential-of-a-smooth-map]]).

[F2] The velocity derivation of a curve sends $[g]$ to $(g\circ\gamma)'(0)$ ([[def-velocity-derivation-of-a-smooth-curve]]).

## Proof

**Proof technique:** direct.

1.1 Let $[g]$ be a smooth germ at $F(p)$. By [F1], $dF_p(\dot\gamma(0))([g])=\dot\gamma(0)([g\circ F])$. [F1, F2, given]

2.1 By [F2], the right-hand side is $((g\circ F)\circ \gamma)'(0)=(g\circ(F\circ\gamma))'(0)$, which is exactly the value of the velocity derivation of $F\circ\gamma$ on $[g]$. [F2, step 1.1]

3.1 Since the two derivations agree on every germ $[g]$, they are equal. [step 2.1] ∎
