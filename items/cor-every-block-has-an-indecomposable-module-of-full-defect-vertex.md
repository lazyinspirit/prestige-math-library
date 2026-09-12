---
id: cor-every-block-has-an-indecomposable-module-of-full-defect-vertex
kind: corollary
title: Every block contains a module whose vertex is a full defect group
deps: ["def-axiom-of-choice", "def-brauer-correspondent-of-a-block", "thm-brauer-green-nagao-block-compatibility", "thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras", "thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules", "prop-normal-p-subgroups-act-trivially-on-simple-modules", "cor-block-defect-groups-are-p-radical", "cor-green-correspondence-for-modules-of-vertex-exactly-p", "lem-restriction-to-a-containing-p-subgroup-retains-a-vertex", "def-p-blocks-by-primitive-central-idempotents", "thm-higman-criterion-for-relative-projectivity", "thm-green-vertex-source-existence-and-conjugacy", "lem-relative-projectivity-mackey-intersections-for-finite-modules"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Corollary
        40.7, §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
    - title: Saunders, Modular Representation Theory, Corollary 5.19
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. Every block $B$ of $kG$ with defect group $D$ contains a nonzero indecomposable finite-dimensional module whose vertex is the actual subgroup $D$.

## Facts & Assumptions

**Given:** A finite group, splitting residue field and block with fixed defect group.

[A1] [[def-axiom-of-choice]] is used only through the Green correspondence below.

[F1] [[def-brauer-correspondent-of-a-block]] supplies the defect-$D$ block $b$ in $N=N_G(D)$.

[F2] [[thm-brauer-green-nagao-block-compatibility]] identifies blocks of matching-vertex restriction summands.

[F3] [[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]] constructs finite-dimensional projective covers as summands of finite free modules.

[F4] [[thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules]] makes the projective cover of a simple module indecomposable.

[F5] [[prop-normal-p-subgroups-act-trivially-on-simple-modules]] gives trivial action of normal $p$-subgroups.

[F6] [[cor-block-defect-groups-are-p-radical]] gives $D=O_p(N)$.

[F7] [[cor-green-correspondence-for-modules-of-vertex-exactly-p]] supplies the inverse fixed-vertex Green correspondence under AC.

[F8] [[lem-restriction-to-a-containing-p-subgroup-retains-a-vertex]] retains a vertex on restriction to a containing $p$-subgroup.

[F9] [[def-p-blocks-by-primitive-central-idempotents]] supplies the block-idempotent decompositions.

[F10] [[thm-higman-criterion-for-relative-projectivity]] detects relative projectivity by traces.

[F11] [[thm-green-vertex-source-existence-and-conjugacy]] supplies vertices and sources.

[F12] [[lem-relative-projectivity-mackey-intersections-for-finite-modules]] gives vertex containment for relatively projective modules.

## Proof

1.1 Take $b$ from F1. It is nonzero, so a proper left ideal of largest dimension in $b$ gives a nonzero simple quotient $S$. Extending by zero on the other blocks makes it a simple $kN$-module. By F6, $D=O_p(N)$, in particular $D\trianglelefteq N$, and F5 makes $D$ act trivially on $S$. Thus $S$ is a simple module of the finite-dimensional quotient group algebra $k[N/D]$. [F1, F5, F6, F9, algebra]

2.1 Take its projective cover $P\twoheadrightarrow S$ over $k[N/D]$ using F3; it is finite dimensional, nonzero and indecomposable by F4. Inflate to $N$. The action factors through the quotient, so its submodules and endomorphisms are unchanged and it stays indecomposable. The central idempotents in F9 decompose $P$ into block pieces. The piece for $b$ maps onto $S$, since the idempotent of $b$ acts as identity on $S$. It is therefore nonzero, and indecomposability forces that piece to be all of $P$. Thus $P$ lies in $b$. [F3, F4, F9, step 1.1, algebra]

3.1 F3 realizes $P$ as a summand of a finite free $k[N/D]$-module. Inflating $k[N/D]$ gives the permutation module $\operatorname{Ind}_D^N k$: the map $n\otimes1\mapsto nD$ identifies their bases and actions. Hence $P$ is relatively $D$-projective. By F11 and F12 it has a vertex $R\le D$, after conjugating in $N$ (normality of $D$ retains this containment). On restriction to $D$, $P$ is a nonzero direct sum of trivial one-dimensional modules, since all of $D$ acts trivially. The trivial $kD$-module has vertex $D$: for $E<D$, every scalar endomorphism has relative trace $[D:E]a=0$ in characteristic $p$, whereas the identity is nonzero, so F10 excludes relative $E$-projectivity. F8 applied to $R\le D$ says the restriction of $P$ has a summand with vertex $R$. All its indecomposable summands are trivial and have vertex $D$, forcing $R=D$. [F3, F8, F10, F11, F12, step 1.1, step 2.1, algebra]

4.1 Apply F7 under A1 to $P$ for $N=N_G(D)$. Its inverse correspondent $V$ is a nonzero indecomposable $kG$-module with vertex $D$, and $P\mid\operatorname{Res}_N^G V$. F2 applies with $Q=D$, since $DC_G(D)\le N$, and identifies the block of $V$ as $b^G=B$. This is the desired module. If $D=1$, the correspondence is identity and the cover already provides the module in $B$. The nonzero simple quotient guarantees no zero object enters. The finite ideal, cover and trace calculations are choice-free; AC is inherited only from F7's declared finite-length chain and selection argument. [A1, F1, F2, F7, step 2.1, step 3.1, algebra] ∎
