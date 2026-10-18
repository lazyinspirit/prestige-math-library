---
id: ex-finite-trellis-viterbi-tie-and-unreachable-state
kind: example
title: A finite trellis with tied maxima and an unreachable high-score state
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-layered-trellis
  - alg-viterbi-max-product-on-finite-trellis
  - thm-viterbi-finite-trellis-is-optimal
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the example enumerates two finite paths."
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Manolis Kellis, 6.096 Algorithms for Computational Biology, Lecture 7: Gene Finding and HMMs, MIT OpenCourseWare (Spring 2005)"
      url: "https://ocw.mit.edu/courses/6-096-algorithms-for-computational-biology-spring-2005/c48f8fdb8e1ff0cb6336e5b9b6cab23f_lecture7.pdf"
    - title: "Stanford CS262, Lecture 7: Hidden Markov Models"
      url: "https://web.stanford.edu/class/cs262/presentations/lecture7.pdf"
---

## Example

Take $T=3$, vertex layers $V_1=\{s\}$, $V_2=\{a,b,c\}$, and $V_3=\{t\}$.
Set $\alpha(s)=1$ and $\beta(t)=1$. The only layer-2 edges are
$s\to a$ and $s\to b$, each of weight $2$. The layer-3 edges are
$a\to t$ and $b\to t$, each of weight $3$, and $c\to t$ of weight $100$.
The vertex order in layer 2 is $a<b<c$.

Columns in the diagram are layers and arrow labels are multiplicative edge
weights. The dashed vertex $c$ has no incoming edge, so it is unreachable.
The proof below uses the explicit edge list and scores, not the drawing.

~~~tikz
\begin{tikzpicture}[>=stealth]
\node[circle,draw] (s) at (0,0) {$s$};
\node[circle,draw] (a) at (2,1) {$a$};
\node[circle,draw] (b) at (2,0) {$b$};
\node[circle,draw,dashed] (c) at (2,-1) {$c$};
\node[circle,draw] (t) at (4,0) {$t$};
\draw[->] (s) -- node[above] {$2$} (a);
\draw[->] (s) -- node[above] {$2$} (b);
\draw[->] (a) -- node[above] {$3$} (t);
\draw[->] (b) -- node[below] {$3$} (t);
\draw[->] (c) -- node[below] {$100$} (t);
\end{tikzpicture}
~~~

## Facts & Assumptions

**Given:** The weighted trellis and vertex order specified in the Example.

[F1] [[def-finite-layered-trellis]]: A path must start with positive initial
weight, follow allowed edges through every layer, and end with positive
terminal weight; its score is the product of these weights.

[F2] [[alg-viterbi-max-product-on-finite-trellis]]: Viterbi computes the
maximum prefix products, stores a maximizing predecessor for each positive
value, then chooses a maximum terminal product and follows the backpointers.

[F3] [[thm-viterbi-finite-trellis-is-optimal]]: If a path exists, the
algorithm returns a path of maximum score.

## Verification

1.1 Any path must leave $s$ for $a$ or $b$, since these are the only layer-2 edges. From either state it must go to $t$. Thus the complete path set is $(s,a,t)$ and $(s,b,t)$, each with score $1\cdot2\cdot3\cdot1=6$. There is no path through $c$ because no edge enters $c$, despite its outgoing edge of weight $100$. [given, F1, algebra]

2.1 The prefix values are $D_1(s)=1$, $D_2(a)=D_2(b)=2$, and $D_2(c)=0$. Therefore $D_3(t)=\max\{2\cdot3,2\cdot3,0\cdot100\}=6$. The stated order selects predecessor $a$ on the tie, so traceback returns $(s,a,t)$ with maximum score $6$, as [F3] also guarantees. [given, F2, F3, step 1.1, algebra] ∎
