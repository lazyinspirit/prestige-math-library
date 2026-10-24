---
id: alg-hmm-viterbi-sequence-map
kind: algorithm
title: Viterbi sequence decoding for a finite hidden Markov model
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-hidden-markov-model-for-sequence-decoding
  - def-finite-layered-trellis
  - alg-viterbi-max-product-on-finite-trellis
justified_by: []
aliases: []
axiom_use: "No axiom is used; the procedure uses finite sets and the supplied state order."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Manolis Kellis, 6.096 Algorithms for Computational Biology, Lecture 7: Gene Finding and HMMs, MIT OpenCourseWare (Spring 2005)"
      url: "https://ocw.mit.edu/courses/6-096-algorithms-for-computational-biology-spring-2005/c48f8fdb8e1ff0cb6336e5b9b6cab23f_lecture7.pdf"
    - title: "Stanford CS262, Lecture 7: Hidden Markov Models"
      url: "https://web.stanford.edu/class/cs262/presentations/lecture7.pdf"
---

## Definition

**Input:** A finite discrete HMM $(S,Y,\pi,A,B)$, an observation sequence
$y=(y_1,\ldots,y_T)\in Y^T$ with $T\ge1$, and a total order on $S$.

1. Form a trellis with $V_t=S$ at every layer. Set
   $\alpha_y(s)=\pi(s)B(s,y_1)$ and terminal weights $\beta_y(s)=1$.
2. For every $t=2,\ldots,T$, include the edge $(r,s)$ exactly when
   $A(r,s)>0$ and $B(s,y_t)>0$, and give it weight
   $w_t(r,s)=A(r,s)B(s,y_t)$.
3. Run [[alg-viterbi-max-product-on-finite-trellis]] on this trellis using the
   supplied state order. If it returns no admissible path, return
   “zero evidence; no conditional sequence MAP.” Otherwise return its path as
   the decoded hidden-state sequence.

Zero transition or emission factors are omitted from the trellis, so every
trellis path has positive joint mass.


## Remarks

For illustration, take $T=3$ and $S=\{a,b\}$ with $\pi(a),\pi(b)>0$,
$A(b,a)=0$, all other transition entries positive, and
$B(s,y_t)>0$ for every $s\in S$ and $t=1,2,3$. Each column is a copy of
$S$; arrows point forward in time. The missing arrows from $b$ to $a$
represent the zero transition factor, rather than missing states.

```tikz
\begin{tikzpicture}[>=stealth]
\node at (0,1.8) {$t=1$};
\node at (3,1.8) {$t=2$};
\node at (6,1.8) {$t=3$};
\node[draw,circle] (a1) at (0,1) {$a$};
\node[draw,circle] (b1) at (0,-1) {$b$};
\node[draw,circle] (a2) at (3,1) {$a$};
\node[draw,circle] (b2) at (3,-1) {$b$};
\node[draw,circle] (a3) at (6,1) {$a$};
\node[draw,circle] (b3) at (6,-1) {$b$};
\draw[->] (a1) -- (a2);
\draw[->] (a1) -- node[above,sloped] {$w_2(a,b)$} (b2);
\draw[->] (b1) -- (b2);
\draw[->] (a2) -- (a3);
\draw[->] (a2) -- (b3);
\draw[->] (b2) -- (b3);
\end{tikzpicture}
```

Every arrow from layer $t-1$ to layer $t$ has weight
$w_t(r,s)=A(r,s)B(s,y_t)$, including the labeled example. Initial vertices
have weights $\alpha_y(s)=\pi(s)B(s,y_1)$, and terminal vertices have weights
$\beta_y(s)=1$. Thus the score of any depicted path is exactly its HMM joint
mass for the fixed observations. The illustration does not designate a
maximizing path; the procedure uses the supplied state order to break ties.
