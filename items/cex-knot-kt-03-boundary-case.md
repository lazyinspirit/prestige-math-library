---
id: cex-knot-kt-03-boundary-case
kind: counterexample
title: "Writhe is not an invariant of an unframed knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       def-regular-oriented-link-diagram,
       def-oriented-reidemeister-moves,
       thm-oriented-reidemeister-equivalence-theorem,
       def-oriented-crossing-sign-writhe-and-blackboard-framing,
       def-framed-knot-self-linking-and-seifert-framing,
       thm-blackboard-framing-self-linking-is-writhe,
       thm-linking-number-is-invariant-and-writhe-is-not,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, the writhe and Reidemeister-I discussion, pp. 26–27"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §3, pp. 3–9"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, Definitions 3.7–3.9 and the type-I framing change, pp. 8–9"
---

## Statement refuted

The false statement is: for every regular oriented diagram $D$ of an unframed
knot, the writhe $\operatorname{wr}(D)$, defined as the sum of its oriented
crossing signs, depends only on the ambient-isotopy class of the represented
knot.

## Statement references

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Crossing sign and writhe definitions]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Ambient isotopy of oriented knots]]

## Diagram

```tikz
\begin{tikzpicture}[scale=0.9,>=stealth]
  \draw (0,0) circle (0.65);
  \draw[->] (0.65,-0.12) -- (0.65,0.12);
  \node at (0,-1) {$D_0$};
  \begin{scope}[xshift=3.2cm]
    % The under strand is split to leave the crossing gap.
    \draw[->] (0,-1) -- (0,-0.12);
    \draw[->] (0,0.12) -- (0,1);
    % Close the local kink arc outside the crossing.
    \draw[->] (1,0) .. controls (1.25,-0.35) and (0.75,-0.85) .. (0,-1);
    \draw[->] (0,1) .. controls (-0.75,1.25) and (-1.25,0.35) .. (-1,0);
    % The horizontal branch is the over strand.
    \draw[->] (-1,0) -- (1,0);
    \node[below right] at (0,0) {$c$};
    \node at (0,-1.45) {$D_1$};
  \end{scope}
\end{tikzpicture}
```

The right-hand curve is one oriented circle with a single local kink. At $c$
the over tangent is $e_1$ and the under tangent is $e_2$ in the positive
projection chart, so its crossing sign is $\det(e_1,e_2)=+1$. The lower-right
loop is the added type-I kink; deleting it gives the crossing-free unknot
diagram on the left. The figure illustrates the construction; the proof uses
the Reidemeister theorem and the signed-sum definition.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the false statement above.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] A regular oriented diagram represents a smooth oriented link, and an oriented Reidemeister type-I move adds or removes a self-crossing kink ([[def-regular-oriented-link-diagram]], [[def-oriented-reidemeister-moves]]).

[F2] Under $\mathrm{AC}_\omega$, two regular diagrams connected by an oriented Reidemeister move represent ambient-isotopic oriented links ([[thm-oriented-reidemeister-equivalence-theorem]]).

[F3] The writhe is the sum of crossing signs; a positive type-I crossing contributes $+1$ ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F4] Blackboard self-linking equals diagram writhe ([[thm-blackboard-framing-self-linking-is-writhe]]).

## Counterexample

1.1 Let $D_0$ be a crossing-free diagram of the oriented unknot and let $D_1$ be obtained by one positive type-I move. By [F1] the new crossing is a self-crossing and is positive. [F1, construct]

1.2 By [F2], the type-I move is realized by an ambient isotopy, so $D_0$ and $D_1$ represent the same unframed oriented knot. By [F3], $\operatorname{wr}(D_0)=0$ while $\operatorname{wr}(D_1)=1$. Therefore the displayed false statement fails. [A1, F2, F3, algebra]

2.1 By [F4], the blackboard self-linking values for these two diagrams are also $0$ and $1$, respectively. This is the framing change carried by the single positive kink; it does not contradict equality of knot types after forgetting the framing. [F4, step 1.1, step 1.2] ∎
