---
id: lem-finite-marked-replumbings-of-checkerboards-retain-reduced-alternating-realizations
kind: lemma
title: "Finite marked re-plumbings of checkerboards retain reduced alternating realizations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-a-marked-spherical-plumbing-disk-flip-preserves-the-full-normal-pairing
  - lem-connected-alternating-link-is-nonsplit
  - lem-alternating-checkerboard-normal-pairing-is-definite
  - lem-connected-projection-has-connected-tait-graphs
  - thm-euler-formula-for-connected-plane-graphs
  - thm-reduced-alternating-diagram-minimizes-crossings
  - thm-opposite-definite-spanning-surfaces-recover-alternating-diagrams-for-nonsplit-links
  - lem-crossing-minimal-regular-link-diagrams-are-reduced
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the marked disk-flip pairing calculation and the nonsplit reconstruction. It implies countable choice for crossing minimality. The cap list, graph ranks and isometry compositions are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Proposition2.34(B–E), PDF p.16; finite marked-cap proof supplied here without the branched-cover theorem"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $D$ be a connected reduced alternating diagram of a nonempty oriented smooth link $L$, with checkerboard surfaces $B,W$ labeled so their full normal-transfer pairings are respectively positive and negative definite. Let $F_0=B,F_1,\ldots,F_m$ be a supplied finite list of compact smooth spanning surfaces for the same $L$, without closed components. At each stage, in the link exterior, replace a disk shadow $U_j$ by a cap disk $V_j$. Supply a completed disk $\widehat U_j$ such that $\widehat U_j\cup V_j$ has compatible smooth sphere and attaching-collar roundings, meets $F_j$ exactly in $U_j$, and has finitely many marked attachment intervals with the boundary-tab pattern of a spherical disk flip. At its attaching intervals the replacement uses the product semicircle fold roundings, or supported smooth isotopic variants. The annular collars completing the old and new exterior surfaces back to $L$ are supplied. No abstract cap or three-dimensional drawing is substituted for these actual finite data.

Then every $F_j$ is connected and has full normal-transfer pairing isometric to that of $B$. For each $j$ there is a connected reduced alternating diagram $D_j$ of the original smooth oriented $L$, with exactly $c(D)$ crossings, whose two checkerboard surfaces are smoothly ambient isotopic individually to $F_j$ and $W$, with their boundary orientations transported. The empty sequence is allowed. No primeness assumption is used, and the result includes composite nonsplit links.

## Statement references

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Full AC, the original connected reduced alternating diagram with its oppositely labeled checkerboards, and the actual finite marked cap sequence with its smooth boundary-link completions.

[F1] A spherical disk flip with the supplied finite attaching intervals, fold collars and optional boundary-tab indentations preserves the full normal-transfer pairing, component count and first Betti number. Its exterior-cap clause identifies the pairings of the completed spanning surfaces by their supplied annular collars. ([[lem-a-marked-spherical-plumbing-disk-flip-preserves-the-full-normal-pairing]])

[F2] A checkerboard surface retracts to its Tait graph and identifies its first homology with graph cycles, and both Tait graphs of a connected projection with crossings are connected. The planar Euler formula gives vertex minus edge plus face equal to two. ([[lem-alternating-checkerboard-normal-pairing-is-definite]], Proof1.1; [[lem-connected-projection-has-connected-tait-graphs]], [[thm-euler-formula-for-connected-plane-graphs]])

[F3] Full AC implies countable choice. A connected alternating diagram represents a nonsplit link, and a connected reduced alternating diagram realizes crossing number. ([[thm-choice-implies-dependent-implies-countable-choice]], [[lem-connected-alternating-link-is-nonsplit]], [[thm-reduced-alternating-diagram-minimizes-crossings]])

[F4] Two compact opposite definite spanning surfaces without closed components for a nonsplit link recover a connected alternating diagram of the original smooth link. Its crossing number as a diagram is the sum of their first Betti numbers, and its checkerboard surfaces have the original individual smooth ambient-isotopy classes. ([[thm-opposite-definite-spanning-surfaces-recover-alternating-diagrams-for-nonsplit-links]])

[F5] A regular diagram realizing the crossing number of its represented link is reduced. ([[lem-crossing-minimal-regular-link-diagrams-are-reduced]])

## Proof

1.1 Apply [F1] at each of the actual marked caps and compose its isometries. Induction on the finite sequence gives a full pairing isometry $B_{F_j}\cong B_B$ at every stage, retaining all cross-component terms. Its component-count and rank assertions give $c(F_j)=c(B)=1$ and $b_1(F_j)=b_1(B)$. In particular every $F_j$ is positive definite, including the zero-dimensional case. This argument also covers the empty sequence with the identity isometry. [given, F1, F2, construct, algebra]

2.1 Put $n=c(D)$. If $n>0$, let $v_B,v_W$ be the numbers of black and white regions. The connected Tait graph of either color has $n$ edges, so its cycle rank is $n-v_B+1$ or $n-v_W+1$: the incidence image is the zero-sum vertex subspace, since connected edge paths generate all differences of vertex vectors. The original projection has $n$ four-valent vertices and $2n$ edges, giving $v_B+v_W=n+2$ by the Euler formula in [F2]. Thus $b_1(B)+b_1(W)=2n-(n+2)+2=n$. For $n=0$ the connected diagram is a circle and its two checkerboards are disks, yielding the same equality. Together with step1.1 this proves $b_1(F_j)+b_1(W)=n$ at every stage. [given, step 1.1, F2, algebra]

3.1 By [F3] the original smooth link $L$ is nonsplit and $n=c(L)$. Apply [F4] to $F_j$ and the unchanged $W$, which have the required opposite definite pairings by step1.1 and the given labeling. It supplies a connected alternating diagram $D_j$ of the original smooth oriented link and its individual smooth checkerboard classes. Step2.1 makes its crossing count exactly $n$, so $c(D_j)=c(L)$. [given, step 1.1, step 2.1, F3, F4, construct, algebra]

4.1 Therefore [F5] makes $D_j$ reduced. All surface identifications and orientations are those transported by [F4]; the crossing-minimality comparison adds no geometric move. This holds for every finite stage, with no choice of a prime decomposition or assumption of link primeness. The conclusion does not assert that two such diagrams are flype-related; that remaining technical step requires its own proof. [step 3.1, F4, F5, construct] ∎
