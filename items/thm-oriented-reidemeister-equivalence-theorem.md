---
id: thm-oriented-reidemeister-equivalence-theorem
kind: theorem
title: "Reidemeister's theorem for oriented diagrams"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy,
       lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times,
       lem-every-oriented-link-admits-a-regular-projection,
       def-oriented-link-in-s-three-and-ambient-isotopy,
       lem-a-smooth-isotopy-of-links-can-be-put-in-general-position, def-countable-choice,
       thm-morse-sard-for-smooth-manifolds,
       thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; Theorem 3 and section 2.3, printed pp. 16-18"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); Theorem 2.1.4 and Appendix B.1"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
    - title: "Queffelec, Reidemeister's theorem using transversality, Bulletin of the Australian Mathematical Society (2024); arXiv:2406.18203v1, Theorem 1"
      url: "https://arxiv.org/pdf/2406.18203v1"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $D$ and $D'$ be regular oriented link diagrams.
Then $D$ and $D'$ represent equivalent oriented links if and only if $D'$ can be
obtained from $D$ by a finite sequence of planar isotopies and oriented
Reidemeister moves R1, R2, R3.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and regular oriented diagrams $D,D'$.

[F1] Each oriented Reidemeister move and each planar isotopy of diagrams is realized by an ambient isotopy of $S^3$ carrying the represented oriented link to the represented oriented link, with ball support for a local replacement between lifts agreeing outside that ball ([[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]]).

[F2] Equivalence of oriented links is an equivalence relation, so a finite composition of realized moves produces an equivalence ([[def-oriented-link-in-s-three-and-ambient-isotopy]]).

[F3] A regular diagram already has a smooth realizing link by its definition. Realizing lifts with the same decorated diagram are equivalent by the height interpolation in [[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]].

[F4] Assume $\mathrm{AC}_\omega$: a smooth isotopy of links, constant near the ends, can be perturbed, relative to the ends, into general position, with the ordinary cusp, quadratic tangency and transverse triple-event properties of [[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]].

[F5] Under the general-position hypotheses, each exceptional time produces exactly one oriented Reidemeister move up to planar isotopy and the intervals between exceptional times are planar isotopies ([[lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times]]).

[F6] Under countable choice, Sard makes the image of a smooth two-dimensional manifold in $S^3$ null: every differential has rank at most two, less than the target dimension ([[thm-morse-sard-for-smooth-manifolds]]). Compactly supported smooth vector fields give ambient point motions ([[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]]).

## Proof

**Proof technique:** direct.

1.1 **The easy direction and empty case.** An empty diagram represents the empty link, and the moves preserve component count. When both diagrams are empty they are already identical; neither equivalence nor a move sequence can relate an empty diagram to a nonempty one. If $D'$ is obtained from $D$ by a finite sequence of planar isotopies and oriented Reidemeister moves, then by [F1] each step is realized by an ambient isotopy of $S^3$ carrying the represented link to the next one, and [F2] makes the composition of the finitely many ambient isotopies again an equivalence; hence $D$ and $D'$ represent equivalent oriented links. [F1, F2, given]

1.2 **Keep the whole track off infinity.** Let $L_0,L_1\subset\mathbb R^3$ realize $D,D'$; by the assumed equivalence there is an ambient isotopy $H$ of $S^3$ carrying their oriented images to one another. Reparametrize time to make its restricted link isotopy stationary near both ends. Extend that track constantly to $C\times\mathbb R$; its image is null by [F6]. Choose a small coordinate ball about $\infty$ disjoint from $L_0\cup L_1$, and a point $q$ in that ball outside the track. A compactly supported vector field in the ball, equal to the velocity of a short coordinate path from $q$ to $\infty$, gives a diffeomorphism $K$ with $K(q)=\infty$ and fixing both endpoint links, by [F6]. Then $F_t=K\circ H_t|_{L_0}$ is a smooth link isotopy avoiding $\infty$ at every time, with exactly the original endpoint diagrams. Its compact trace is contained in a large ball in $\mathbb R^3$. The regular endpoint projections satisfy the hypothesis of [F4]. [F2, F3, F4, F6, given, construct]

2.1 **General position and the finite sequence.** Apply [F4] to $F$ with a strong neighbourhood small enough to keep the end projections fixed: there is a smooth isotopy $F'$ in general position whose end projections are $D$ and $D'$. By [F5] the movement from $t=0$ to $t=1$ of the projections of $F'$ is a finite sequence of planar isotopies and oriented Reidemeister moves taking the projection of $F'_0$ to that of $F'_1$, that is, taking $D$ to $D'$ up to planar isotopy. [F4, F5, step 1.2]

3.1 **Conclusion.** Steps 1.1 and 2.1 prove the two implications, so $D$ and $D'$ represent equivalent oriented links if and only if they are connected by planar isotopies and finitely many oriented Reidemeister moves. The axiom of countable choice is used exactly in [F6] (track avoidance by Sard) and [F4] (parametric transversality); the realization direction is choice-free. [F1, F2, step 1.1, step 2.1] ∎
