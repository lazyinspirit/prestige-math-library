---
id: ex-knot-kt-50-worked-cases
kind: example
title: Trefoil and figure-eight Jones spans
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-crossing-number-of-link
  - def-reduced-alternating-link-diagram
  - lem-kauffman-smoothing-operators-for-braid-crossings
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-elementary-geometric-half-twist
  - def-closure-of-a-geometric-braid
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-tait-graph-of-a-link-diagram
  - lem-connected-projection-has-connected-tait-graphs
  - thm-bracket-state-sum-matches-library-jones-specialization
  - cor-jones-span-detects-crossing-number-for-reduced-alternating-knots
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Full AC is used only for the library Jones specialization and the
  crossing-number corollary; the two finite state enumerations and diagram
  checks are choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Danny Calegari, Introduction to Knot Theory, §5.2, printed pp. 44–45
      url: https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf
    - title: Louis H. Kauffman, New Invariants in the Theory of Knots, Astérisque
        163–164 (1988), §III, pp. 160–168
      url: https://www.numdam.org/item/AST_1988__163-164__137_0.pdf
    - title: Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial,
        arXiv:2204.12104v2, §2
      url: https://arxiv.org/pdf/2204.12104v2
---

## Example

Assume full AC. The positive trefoil is represented by the closure of the three-crossing two-strand braid $\sigma_1^3$; its library Jones polynomial is $t+t^3-t^4$, of span $4-1=3$, and the corresponding connected reduced alternating diagram has crossing number $3$. The figure-eight knot is represented by the closure of the four-crossing three-strand braid whose levels from bottom to top are $\sigma_2^{-1},\sigma_1,\sigma_2^{-1},\sigma_1$; its library Jones polynomial is $t^{-2}-t^{-1}+1-t+t^2$, of span $2-(-2)=4$, and the corresponding connected reduced alternating diagram has crossing number $4$. The convention is $t=A^{-4}$.

```tikz
\begin{tikzpicture}[scale=0.9, line cap=round, line join=round]
  \begin{scope}
    \node at (0,1.7) {trefoil Tait graph};
    \fill (-0.7,0.5) circle (2pt) node[left] {$b_1$};
    \fill (0.7,0.5) circle (2pt) node[right] {$b_2$};
    \draw (-0.7,0.5) to[bend left=35] (0.7,0.5);
    \draw (-0.7,0.5) to (0.7,0.5);
    \draw (-0.7,0.5) to[bend right=35] (0.7,0.5);
  \end{scope}
  \begin{scope}[xshift=4cm]
    \node at (0,1.7) {figure-eight Tait graph};
    \fill (-0.9,0.5) circle (2pt) node[left] {$u$};
    \fill (0.9,0.5) circle (2pt) node[right] {$v$};
    \fill (0,-0.7) circle (2pt) node[below] {$w$};
    \draw (-0.9,0.5) to[bend left=28] (0.9,0.5);
    \draw (-0.9,0.5) to[bend right=28] (0.9,0.5);
    \draw (-0.9,0.5)--(0,-0.7)--(0.9,0.5);
  \end{scope}
\end{tikzpicture}
```

These are black Tait graphs; the white graphs are their plane duals. Each graph edge represents one crossing of the corresponding projected diagram.

## Example references

[Calegari, *Introduction to Knot Theory*, §5.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Kauffman, *New Invariants in the Theory of Knots*, §III](https://www.numdam.org/item/AST_1988__163-164__137_0.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial*, §2](https://arxiv.org/pdf/2204.12104v2)

## Facts & Assumptions

**Given:** Full AC, the two braid closures specified in the example, and the source-chart bracket convention.

[F1] A positive braid crossing expands as $A I+A^{-1}e_i$ and a negative one as $A^{-1}I+Ae_i$, where $I$ is through and $e_i$ is cup-cap ([[lem-kauffman-smoothing-operators-for-braid-crossings]]).

[F2] For each state $S$, the bracket contribution is $A^{a(S)-b(S)}\delta^{|S|-1}$, with $\delta=-A^2-A^{-2}$ ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F3] The positive Artin generator has writhe sign $+1$, and the negative generator has sign $-1$ ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]], [[def-elementary-geometric-half-twist]]).

[F4] Components of a geometric braid closure correspond to cycles of its endpoint permutation ([[def-closure-of-a-geometric-braid]]).

[F5] A connected reduced alternating knot diagram with $c$ crossings has Jones span $c$ and realizes crossing number $c$ ([[cor-jones-span-detects-crossing-number-for-reduced-alternating-knots]]).

[F6] A diagram is reduced when no region repeats a crossing on its boundary; connected alternating diagrams admit checkerboard colorings and have connected Tait graphs ([[def-reduced-alternating-link-diagram]], [[def-tait-graph-of-a-link-diagram]], [[lem-connected-projection-has-connected-tait-graphs]]).

[F7] Under full AC, $V_K(t)=f_K(t^{-1/4})$ with $t=A^{-4}$ and $f_D(A)=(-A^3)^{-\operatorname{wr}(D)}\langle D\rangle$ ([[thm-bracket-state-sum-matches-library-jones-specialization]]).

[A1] Full AC is the choice-function principle for arbitrary families of nonempty sets ([[def-axiom-of-choice]]).

## Proof

1.1 For the closure of $\sigma_1^3$, the endpoint permutation is the transposition of the two strands, hence one cycle by [F4]. The three positive crossings form a connected projection. Starting on the left bottom strand, the successive crossing visits are under, over, under; after closure the right bottom strand visits over, under, over. Thus the diagram is alternating. Its black Tait graph has two vertices and three parallel edges, while the white dual graph is a triangle. Both graphs have no loops, so no crossing repeats a region on its boundary; the diagram is reduced by [F6]. [F3, F4, F6, construct]

1.2 For the four-level braid with levels $\sigma_2^{-1},\sigma_1,\sigma_2^{-1},\sigma_1$, the successive endpoint orders are $[1,3,2]$, $[3,1,2]$, $[3,2,1]$, and $[2,3,1]$. The resulting endpoint permutation is the cycle $1\mapsto3\mapsto2\mapsto1$, so the closure is one knot component by [F4]. Traversing it from the first bottom strand gives crossing visits under, over; from the third bottom strand gives under, over, under; and from the second gives over, under, over. The full cyclic sequence alternates. The black Tait graph is the theta graph with two parallel edges between $u,v$ and a two-edge path $u-w-v$; it has no loops or bridges. Its dual has no loops because the primal has no bridges. Thus both color pairs at every crossing are distinct and the diagram is reduced by [F6]. [F3, F4, F6, construct]

2.1 If exactly $k$ of the three positive crossings use the $B$-smoothing, the states and circle counts are: $k=0$: $1$ state with $2$ circles; $k=1$: $3$ states with $1$ circle; $k=2$: $3$ states with $2$ circles; $k=3$: $1$ state with $3$ circles. Stacking through pairings and cup-cap pairings and closing the two top endpoints to the corresponding bottom endpoints gives these counts. By [F1]–[F2], the grouped contributions are $A^3\delta+3A+3A^{-1}\delta+A^{-3}\delta^2=A^{-7}-A^{-3}-A^5$. The writhe is $3$ by [F3], so [F7] gives $V_{3_1}(t)=(-A^3)^{-3}(A^{-7}-A^{-3}-A^5)\big|_{t=A^{-4}}=t+t^3-t^4$. Its span is $3$, and [F5] gives crossing number $3$. [A1, F1, F2, F3, F5, F7, step 1.1, algebra]

3.1 Encode a state by four bits from bottom to top, with $0$ meaning through pairing and $1$ meaning cup-cap pairing. Let $p$ be the number of cup-cap choices at positive crossings and $q$ the number at negative crossings; [F1] gives weight exponent $2(q-p)$. Closing the pairings gives the exhaustive state data $\begin{array}{c|c|c}\text{state}&\text{circles}&\text{exponent}\\0000&3&0\\0001&2&-2\\0010&2&2\\0011&1&0\\0100&2&-2\\0101&3&-4\\0110&1&0\\0111&2&-2\\1000&2&2\\1001&1&0\\1010&3&4\\1011&2&2\\1100&1&0\\1101&2&-2\\1110&2&2\\1111&1&0\end{array}$. Thus the five one-circle states contribute $5$, the eight two-circle states contribute $4(A^2+A^{-2})\delta$, and the three three-circle states contribute $(1+A^4+A^{-4})\delta^2$. Expanding $\delta=-A^2-A^{-2}$ gives $\langle D_F\rangle=5+4(A^2+A^{-2})\delta+(1+A^4+A^{-4})\delta^2=A^8-A^4+1-A^{-4}+A^{-8}$. There are two positive and two negative crossings, so writhe is $0$ by [F3]. By [F7], $V_{4_1}(t)=t^{-2}-t^{-1}+1-t+t^2$, whose span is $4$. Applying [F5] gives crossing number $4$. [A1, F1, F2, F3, F5, F7, step 1.2, algebra] ∎
