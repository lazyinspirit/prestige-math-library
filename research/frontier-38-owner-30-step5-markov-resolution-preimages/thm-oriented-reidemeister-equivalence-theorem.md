---
id: thm-oriented-reidemeister-equivalence-theorem
kind: theorem
title: "Reidemeister's theorem for oriented diagrams"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy,
       lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times,
       lem-every-oriented-link-admits-a-regular-projection,
       def-oriented-link-in-s-three-and-ambient-isotopy,
       lem-a-smooth-isotopy-of-links-can-be-put-in-general-position, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; Theorem 3 and section 2.2, printed pp. 16-18"
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

[F1] Each oriented Reidemeister move and each planar isotopy of diagrams is realized by an ambient isotopy of $S^3$ carrying the represented oriented link to the represented oriented link, supported in a ball meeting the plane in the disk of the move ([[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]]).

[F2] Equivalence of oriented links is an equivalence relation, so a finite composition of realized moves produces an equivalence ([[def-oriented-link-in-s-three-and-ambient-isotopy]]).

[F3] Assume $\mathrm{AC}_\omega$: every oriented link admits a regular projection, so the represented links can be realized by smooth links in $\mathbb R^3$ whose projections are $D$ and $D'$ up to planar isotopy and whose diagrams realize the given over/under and orientation data ([[lem-every-oriented-link-admits-a-regular-projection]]).

[F4] Assume $\mathrm{AC}_\omega$: a smooth isotopy of links, constant near the ends, can be perturbed, relative to the ends, into general position, with the properties (i)--(iv) of [[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]].

[F5] Under the general-position hypotheses, each exceptional time produces exactly one oriented Reidemeister move up to planar isotopy and the intervals between exceptional times are planar isotopies ([[lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times]]).

## Proof

**Proof technique:** direct.

1.1 **The easy direction.** If $D'$ is obtained from $D$ by a finite sequence of planar isotopies and oriented Reidemeister moves, then by [F1] each step is realized by an ambient isotopy of $S^3$ carrying the represented link to the next one, and [F2] makes the composition of the finitely many ambient isotopies again an equivalence; hence $D$ and $D'$ represent equivalent oriented links. [F1, F2, given]

1.2 **Choice of realizing links and of an isotopy.** Assume now that $D$ and $D'$ represent equivalent oriented links. By [F3] choose smooth oriented links $L_0,L_1\subset\mathbb R^3$ whose regular projections are $D$, respectively $D'$, with the given over/under and orientation data; by [F2] there is an orientation-preserving ambient isotopy $H$ of $S^3$ with $H_1(L_0)=L_1$. After an isotopy moving the links off $\infty$ and composing with a suitable diffeomorphism, we may assume the whole isotopy takes place inside a large ball in $\mathbb R^3$; set $F(x,t):=H_t(x)$ restricted to $L_0\times I$, a smooth isotopy of links with each $F_t$ an embedding and with $F$ constant near the ends by a reparametrisation ([[def-oriented-link-in-s-three-and-ambient-isotopy]], [[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]]). [F2, F3, F4, given]

2.1 **General position and the finite sequence.** Apply [F4] to $F$ with a strong neighbourhood small enough to keep the end projections fixed: there is a smooth isotopy $F'$ in general position whose end projections are $D$ and $D'$. By [F5] the movement from $t=0$ to $t=1$ of the projections of $F'$ is a finite sequence of planar isotopies and oriented Reidemeister moves taking the projection of $F'_0$ to that of $F'_1$, that is, taking $D$ to $D'$ up to planar isotopy. [F4, F5, step 1.2]

3.1 **Conclusion.** Steps 1.1 and 2.1 prove the two implications, so $D$ and $D'$ represent equivalent oriented links if and only if they are connected by planar isotopies and finitely many oriented Reidemeister moves. The axiom of countable choice is used exactly in [F3] (Sard) and [F4] (parametric transversality); the realization direction is choice-free. ∎ [F1, F2, step 1.1, step 2.1]
