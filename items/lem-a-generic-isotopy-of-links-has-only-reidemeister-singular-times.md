---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-17.md
      - research/frontier-38-owner-30-dispatch/reader-reader-17.result.json
      - research/frontier-38-owner-30-step5-hash-17-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-17-5a-decisions.json
id: lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times
kind: lemma
title: "Generic isotopies have only Reidemeister singular times"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-a-smooth-isotopy-of-links-can-be-put-in-general-position,
       def-oriented-reidemeister-moves, def-planar-isotopy-of-link-diagrams,
       def-regular-oriented-link-diagram]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Queffelec, Reidemeister's theorem using transversality, Bulletin of the Australian Mathematical Society (2024); arXiv:2406.18203v1, sections 3.3-3.6 and Figures 4-6"
      url: "https://arxiv.org/pdf/2406.18203v1"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); Appendix B.1 and Figure B.3, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
---

## Statement

Let $F'$ satisfy the general-position conditions of
[[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]], with
exceptional times $t_1<\cdots<t_N$. Immediately before and after each event,
its regular diagrams differ, up to planar isotopy, by one oriented
Reidemeister move: R1 at an ordinary cusp, R2 at a quadratic double tangency,
and R3 at a transverse triple event. The regular intervals contribute planar
isotopies, and the moves preserve the over/under and orientation data of $F'$.
Consequently the end diagrams are connected by a finite sequence of these moves.

## Facts & Assumptions

**Given:** The isotopy $F'$ and its finite, mutually distinct exceptional times.

[F1] Ordinary cusps have $g_x=0$, $\det(g_{xx},g_{xt})\ne0$, $\det(g_{xx},g_{xxx})\ne0$; double tangencies are quadratic with nonzero relative normal velocity; triple events are transverse with pairwise independent projected tangents. There are no simultaneous events or quadruple points ([[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]]).

[F2] Regular intervals give planar isotopies ([[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]], [[def-planar-isotopy-of-link-diagrams]]).

[F3] The standard oriented local moves R1, R2 and R3 include both signs and all consistent strand orientations and height orders ([[def-oriented-reidemeister-moves]]).

## Proof

**Proof technique:** direct.

1.1 **Cusp: R1.** Subtract the moving image of the cusp point and use source and target coordinates so the leading projected terms are $(b x^2,e\delta x+c x^3)$, with $bec\ne0$ and $\delta=t-t_i$. The determinant conditions in [F1] make both coefficients in the normal direction nonzero. Equality of the two nearby branches, after division by their parameter difference, reduces to $x^2=-e\delta/c$ to leading order; the implicit function theorem preserves this two-branch picture for the higher-order terms. Thus one side of the event has no local crossing and the other has one transverse crossing bounding a small curl. The third-coordinate derivative is nonzero at the cusp, since the spatial link is immersive and its projected derivative vanishes. It separates the two local branches and determines the curl sign. This is R1, or its inverse. [F1, F3, given, algebra]

1.2 **Quadratic tangency: R2.** Both branches are immersed, so make their common tangent the first coordinate and write them as graphs. Their normal difference $q(v,\delta)$ satisfies $q=q_v=0$, $q_{vv}\ne0$ and $q_\delta\ne0$ at the event by [F1]. The one-variable Morse normal form, or Taylor expansion followed by the inverse function theorem, gives $q=\lambda v^2+\mu\delta$ in suitable local coordinates, with $\lambda\mu\ne0$. It has zero roots on one side and two simple roots on the other. The two branches have distinct spatial heights at the event and retain that order nearby; the two crossings have opposite signs because the derivative of the normal difference has opposite signs at its two roots. This is R2. An affine function of $v$ would not give this birth of two crossings. [F1, F3, algebra]

1.3 **Triple event: R3.** Pairwise transversality continues each of the three local crossings uniquely. Transversality of the four triple-equality equations in $(x,y,z,t)$ says that the third branch passes with nonzero normal velocity through the continued intersection of the first two. Thus their crossing lies on opposite sides of that branch immediately before and after the event. All three pairwise crossings persist, and their signs persist. The three distinct spatial heights give a total over/under order throughout the small neighbourhood. These are precisely the two R3 pictures, with the actual strand orientations retained. [F1, F3, algebra]

2.1 **Finite assembly.** There is only one event at each exceptional time, so choose disjoint small time intervals about the finitely many events. Steps 1.1–1.3 identify their local moves; their complements contribute planar isotopies by [F2]. Pasting gives the finite sequence between the end diagrams, with its decorations inherited from $F'$. [F1, F2, step 1.1, step 1.2, step 1.3] ∎
