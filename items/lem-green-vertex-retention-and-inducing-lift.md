---
id: lem-green-vertex-retention-and-inducing-lift
kind: lemma
title: Green vertex retention and inducing lift
status: draft
origin: pipeline
deps: [def-vertex-and-source-of-an-indecomposable-module, thm-green-vertex-source-existence-and-conjugacy, thm-krull-schmidt-for-finite-dimensional-kg-modules, lem-relative-projectivity-mackey-intersections-for-finite-modules, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Saunders, Modular Representation Theory, Lemmas 4.18–4.19 and 4.35–4.38, Theorem 4.34
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Lassueur–Farrell, Chapter 7, §29, Theorem 29.4 and proof
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload2.pdf
proof_strategy: direct
---

## Statement

Assume AC. Let $G$ be finite, $k$ a field of characteristic $p>0$, $M$ a nonzero indecomposable finite-dimensional $kG$-module, and $Q$ a vertex of $M$. For $Q\leq L\leq G$:

(a) $\operatorname{Res}_L^G M$ has an indecomposable direct summand with vertex $Q$.

(b) There is an indecomposable $kL$-module $U$ with vertex $Q$ such that $M$ is a direct summand of $\operatorname{Ind}_L^G U$.

The two assertions supply separate witnesses. Write $X\mid Y$ for being isomorphic to a direct summand.

## Facts & Assumptions

**Given:** The groups and modules in the statement. All modules below are finite dimensional.

[A1] AC is assumed ([[def-axiom-of-choice]]); its use is inherited through the chain-condition converse in the finite-length proof underlying Krull–Schmidt, not through finite coset representatives.

[F1] Vertices and sources have the minimality and two-summand meanings of [[def-vertex-and-source-of-an-indecomposable-module]].

[F2] A source exists at a fixed vertex, and vertices are conjugate ([[thm-green-vertex-source-existence-and-conjugacy]]).

[F3] Finite-dimensional modules have unique finite indecomposable decompositions ([[thm-krull-schmidt-for-finite-dimensional-kg-modules]]).

[F4] Mackey decomposition, transitivity, preservation of splittings, vertex containment and extraction of an indecomposable from a finite sum hold as in [[lem-relative-projectivity-mackey-intersections-for-finite-modules]].

## Proof

1.1 Choose a source $S$ at $Q$. Thus $S\mid\operatorname{Res}_Q^G M$ and $M\mid\operatorname{Ind}_Q^G S$. If $S$ were relatively $D$-projective for some proper subgroup $D<Q$, transitivity would make $M$ relatively $D$-projective, contradicting vertex minimality. Thus $S$ has vertex $Q$ as a $kQ$-module. [F1, F2, F4, given]

2.1 Decompose $\operatorname{Ind}_Q^L S=\bigoplus_jU_j$ into indecomposables. Transitivity gives $M\mid\bigoplus_j\operatorname{Ind}_L^G U_j$, so $M\mid\operatorname{Ind}_L^G U_j$ for some $j$. Put $U=U_j$. It is relatively $Q$-projective. Vertex containment and conjugacy let us choose a vertex $T$ of $U$ with $T\leq Q$. Then $M$ is relatively $T$-projective by transitivity. Vertex containment for $M$ gives $|Q|\leq|T|$, whereas $T\leq Q$ gives the reverse inequality. Hence $T=Q$, proving (b). The decompositions here use the inherited finite-length chain under AC. [A1, F2, F3, F4, step 1.1]

2.2 Independently decompose $\operatorname{Res}_L^G M=\bigoplus_jV_j$. From $S\mid\operatorname{Res}_Q^G M=\bigoplus_j\operatorname{Res}_Q^L V_j$, extract a summand $V=V_j$ with $S\mid\operatorname{Res}_Q^L V$. Because $M\mid\operatorname{Ind}_Q^G S$, Mackey expresses $\operatorname{Res}_L^G M$ as a summand of a finite sum of modules induced from $L\cap{}^gQ$. Extracting $V$ from one term and applying vertex containment shows that any vertex $T$ of $V$ has $|T|\leq|Q|$. [A1, F3, F4, step 1.1]

3.1 Relative $T$-projectivity supplies the counit splitting $V\mid\operatorname{Ind}_T^L\operatorname{Res}_T^L V$ from F4. Restrict to $Q$ and use $S\mid\operatorname{Res}_Q^L V$. Mackey and summand extraction make $S$ relatively $Q\cap{}^lT$-projective for some $l\in L$. Its vertex is the whole group $Q$, by 1.1, so $Q=Q\cap{}^lT$. The inequality in 2.2 forces $Q={}^lT$. Conjugacy of vertices now makes $Q$ itself a vertex of $V$, proving (a). [F1, F2, F4, step 1.1, step 2.2]

4.1 All decompositions and coset sums used above are finite, and the two nonzero witnesses are extracted separately. If $L=G$, the module $M$ itself witnesses both conclusions. If $L=Q$, the source witnesses both, and its full vertex was checked in 1.1. The same reasoning covers $Q=1$; zero $M$ is excluded from the statement. Thus both assertions hold with precisely the stated inherited AC assumption. [step 1.1, step 2.1, step 3.1, given] QED
