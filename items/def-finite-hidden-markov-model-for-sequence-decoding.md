---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-finite-hidden-markov-model-for-sequence-decoding.json
  precheck: n/a
id: def-finite-hidden-markov-model-for-sequence-decoding
kind: definition
title: Finite hidden Markov models for sequence decoding
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by:
  - lem-finite-hmm-joint-law-normalizes
aliases: []
axiom_use: "No choice axiom is used; the joint law is defined on finite sets."
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

A **finite discrete hidden Markov model (HMM)** is a tuple
$(S,Y,\pi,A,B)$, where $S$ is a finite nonempty hidden-state set, $Y$ is a
finite nonempty observation alphabet, $\pi:S\to[0,1]$ is an initial
probability distribution, $A:S\times S\to[0,1]$ is a transition matrix, and
$B:S\times Y\to[0,1]$ is an emission matrix. The parameters satisfy
$$\sum_{s\in S}\pi(s)=1,\qquad \sum_{s'\in S}A(s,s')=1\quad(s\in S),\qquad \sum_{y\in Y}B(s,y)=1\quad(s\in S).$$

For each length $T\ge1$, hidden path $z=(z_1,\ldots,z_T)\in S^T$, and
observation sequence $y=(y_1,\ldots,y_T)\in Y^T$, define the joint mass
$$p(z,y)=\pi(z_1)B(z_1,y_1)\prod_{t=2}^{T}A(z_{t-1},z_t)B(z_t,y_t).$$
The **evidence** of $y$ is $p(y)=\sum_{z\in S^T}p(z,y)$. When $p(y)>0$,
the conditional path mass is $p(z\mid y)=p(z,y)/p(y)$, and a
**sequence MAP (maximum-a-posteriori) path** is any $z$ maximizing this conditional mass. If $p(y)=0$,
the conditional path mass is undefined, so there is no posterior sequence MAP
path for that observation sequence. A zero transition or emission factor gives
that hidden path zero joint mass.


## Remarks

For $T=3$, the diagram separates the hidden-state transitions from the
observations emitted at each time. Each hidden label $z_t$ lies in $S$ and
each observation label $y_t$ lies in $Y$. The annotation $\pi(z_1)$ is the
initial weight; a horizontal arrow contributes $A(z_{t-1},z_t)$ and a
downward arrow contributes $B(z_t,y_t)$. Multiplying these five edge
factors and the initial weight gives the joint mass defined above.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,circle] (z1) at (0,0) {$z_1$};
  \node[draw,circle] (z2) at (3.4,0) {$z_2$};
  \node[draw,circle] (z3) at (6.8,0) {$z_3$};
  \node[draw,rectangle] (y1) at (0,-1.8) {$y_1$};
  \node[draw,rectangle] (y2) at (3.4,-1.8) {$y_2$};
  \node[draw,rectangle] (y3) at (6.8,-1.8) {$y_3$};
  \node at (0,0.9) {$\pi(z_1)$};
  \draw[->] (z1) -- node[above] {$A(z_1,z_2)$} (z2);
  \draw[->] (z2) -- node[above] {$A(z_2,z_3)$} (z3);
  \draw[->] (z1) -- node[right] {$B(z_1,y_1)$} (y1);
  \draw[->] (z2) -- node[right] {$B(z_2,y_2)$} (y2);
  \draw[->] (z3) -- node[right] {$B(z_3,y_3)$} (y3);
\end{tikzpicture}
```
