---
id: thm-directed-st-connectivity-is-nl-complete
kind: theorem
title: "Directed s-t connectivity is NL-complete"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-l-and-nl, lem-logspace-machines-have-polynomially-many-configurations, def-logspace-many-one-reduction, def-directed-st-connectivity]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.16"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
    - title: "Harvard CS 221, Lecture 5, Theorem 2"
      url: "https://people.seas.harvard.edu/~madhusudan/courses/Spring2018/scribe/lect05.pdf"
---

## Statement

STCON is NL-complete under $\leq_{\log}$.

## Facts & Assumptions

**Given:** an encoded digraph $\langle G,s,t\rangle$, or a language $A\in\mathrm{NL}$.

[L1] A fixed logspace machine has polynomially many configurations, and accepting branches may be made simple ([[lem-logspace-machines-have-polynomially-many-configurations]]).

[L2] A logspace many-one reduction is a deterministic bitwise polynomial-output transduction ([[def-logspace-many-one-reduction]]).

## Proof

**Proof technique:** membership and configuration-graph reduction.

1.1 To decide STCON nondeterministically, retain a current vertex and a counter through $|V|-1$ moves, guessing an outgoing edge at each move and accepting on reaching $t$. A path exists exactly when one exists with at most $|V|-1$ moves. [given, construct]

1.2 For $A\in\mathrm{NL}$, fix its machine $M$. On input $x$, make vertices from the valid configurations of $M$ on $x$, add a fresh target $t_x$, use legal transitions as arcs, and add an arc from every accepting configuration to $t_x$. [L1, construct]

2.1 Both stored vertex labels and the counter have $O(\log |V|)$ bits, so step 1.1 puts STCON in NL. [step 1.1, algebra]

2.2 By [L1], there are polynomially many configuration names of $O(\log|x|)$ bits. A transducer enumerates candidate pairs, checks locally whether one is a legal successor of the other, and streams the encoded graph, start configuration, and $t_x$ using $O(\log|x|)$ work space. [L1, L2, step 1.2, construct]

3.1 A directed path from the start to $t_x$ is exactly an accepting computation branch of $M$ on $x$. Thus the transducer is an $A\leq_{\log}\mathrm{STCON}$ reduction, which with step 2.1 proves NL-completeness. [step 2.1, step 2.2] ∎

## Remarks

The following concrete instance illustrates step 1.2. Take a fixed machine that leaves its tapes and heads unchanged: from its start state it chooses either an intermediate state or a rejecting halting state; from the intermediate state it chooses between two accepting halting states. For a fixed input $x$, denote these five reachable configurations by $s_x,c_x,r_x,a_x,b_x$, respectively. The drawing shows the reachable part of its configuration graph together with the fresh target $t_x$. Solid arrows are legal machine transitions; dashed arrows are the added accepting-to-target arcs.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node[draw,circle] (s) at (0,0) {$s_x$};
\node[draw,circle] (c) at (2.5,0) {$c_x$};
\node[draw,circle] (a) at (5,1.1) {$a_x$};
\node[draw,circle] (b) at (5,-1.1) {$b_x$};
\node[draw,circle] (r) at (0,-2.2) {$r_x$};
\node[draw,rectangle] (t) at (7.5,0) {$t_x$};
\draw[->] (s) -- (c);
\draw[->] (s) -- (r);
\draw[->] (c) -- (a);
\draw[->] (c) -- (b);
\draw[->,dashed] (a) -- (t);
\draw[->,dashed] (b) -- (t);
\node[above] at (0,0.4) {start};
\node[right] at (0.5,-2.2) {reject};
\node[above] at (5,1.5) {accept};
\node[below] at (5,-1.5) {accept};
\node[above] at (7.5,0.5) {fresh target};
\end{tikzpicture}
```

There are two paths from $s_x$ to $t_x$, through $a_x$ and through $b_x$; each ends with one added arc. The rejecting configuration $r_x$ has no outgoing arc. This small instance illustrates the accepting-branch/path correspondence in step 3.1; the proof above is independent of the figure.
