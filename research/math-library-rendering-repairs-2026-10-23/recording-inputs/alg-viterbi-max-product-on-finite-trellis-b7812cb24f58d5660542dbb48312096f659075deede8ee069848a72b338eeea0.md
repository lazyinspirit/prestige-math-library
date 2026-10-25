---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-viterbi-max-product-on-finite-trellis.json
  precheck: n/a
id: alg-viterbi-max-product-on-finite-trellis
kind: algorithm
title: Max-product Viterbi decoding on a finite trellis
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-layered-trellis
  - lem-finite-trellis-prefix-score-recurrence
justified_by: []
aliases: []
axiom_use: "No axiom is used; the supplied finite orders resolve ties."
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

**Input:** A finite weighted trellis and a total order on each vertex set.

**Output:** “No admissible path,” or an admissible path and its score.

If $T=0$, return the empty path with score $1$. Otherwise perform the following
steps:

1. Set $D_1(v)=\alpha(v)$ for all $v\in V_1$. For each layer $t=2,\ldots,T$ and
   each $v\in V_t$, compute
   $$D_t(v)=\max\bigl(\{D_{t-1}(u)w_t(u,v):(u,v)\in E_t\}\cup\{0\}\bigr).$$
   If $D_t(v)>0$, store as $p_t(v)$ the first predecessor $u$ in the supplied
   vertex order attaining this maximum; if $D_t(v)=0$, leave $p_t(v)$
   undefined.
2. Compute $Q(v)=D_T(v)\beta(v)$ for all $v\in V_T$. If every $Q(v)=0$,
   return “no admissible path.”
3. Otherwise choose the first $v_T$ in the supplied order maximizing $Q(v)$,
   and follow the stored pointers $p_T(v_T),p_{T-1}(v_{T-1}),\ldots,p_2(v_2)$
   backwards. Return the resulting path and its score $Q(v_T)$.

The stored predecessor at each layer is a **backpointer**. Following these
pointers backward from a maximizing terminal vertex is called **traceback**.
The given orders make the returned path deterministic when several paths have
the same maximum score. The empty path at $T=0$ is the unique path and is
therefore the unique maximum-score output in that case.

## Remarks

The following example has $T=3$, ordered layers $V_1=\{a,b\}$ with $a<b$,
$V_2=\{c,d\}$ with $c<d$, and $V_3=\{e\}$. The arrows are exactly the
allowed transitions, and their labels are the positive edge weights. Take
$\alpha(a)=2$, $\alpha(b)=1$, and $\beta(e)=1$. The thick blue arrows
mark the returned path.

```tikz
\begin{tikzpicture}[>=stealth,scale=1.1]
\node at (0,2.1) {$V_1$};
\node at (3.6,2.1) {$V_2$};
\node at (7.2,2.1) {$V_3$};
\node[circle,draw] (a) at (0,1) {$a$};
\node[circle,draw] (b) at (0,-1) {$b$};
\node[circle,draw] (c) at (3.6,1) {$c$};
\node[circle,draw] (d) at (3.6,-1) {$d$};
\node[circle,draw] (e) at (7.2,1) {$e$};
\node at (0,1.55) {$D_1(a)=2$};
\node at (0,-1.55) {$D_1(b)=1$};
\node at (3.6,1.55) {$D_2(c)=6$};
\node at (3.6,-1.55) {$D_2(d)=2$};
\node at (7.2,1.55) {$D_3(e)=12$};
\draw[->,very thick,blue] (a) -- node[above] {$3$} (c);
\draw[->] (a) -- node[pos=0.72,below] {$1$} (d);
\draw[->] (b) -- node[pos=0.72,above] {$1$} (c);
\draw[->] (b) -- node[below] {$2$} (d);
\draw[->,very thick,blue] (c) -- node[above] {$2$} (e);
\draw[->] (d) -- node[midway,below] {$1$} (e);
\node at (3.6,-2.3) {$p_3(e)=c,\qquad p_2(c)=a$};
\node at (3.6,-2.9) {$\mathrm{Traceback:}\quad e\longmapsto c\longmapsto a$};
\end{tikzpicture}
```

Indeed, $D_2(c)=\max(2\cdot3,1\cdot1,0)=6$ and
$D_2(d)=\max(2\cdot1,1\cdot2,0)=2$. The tie at $d$ gives $p_2(d)=a$
by the supplied order. Next $D_3(e)=\max(6\cdot2,2\cdot1,0)=12$, so
$Q(e)=12\cdot1=12$ and traceback returns $(a,c,e)$ with score $12$.
The reverse sequence in the picture records predecessor pointers, rather than
additional trellis edges. In general, zero terminal scores return “no admissible
path”; the $T=0$ case returns the empty path as specified above. The illustration
is independent of the algorithm's defining instructions and the optimal-prefix
recurrence.
