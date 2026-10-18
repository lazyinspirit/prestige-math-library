---
id: lem-finite-trellis-prefix-score-recurrence
kind: lemma
title: The optimal-prefix recurrence for a finite trellis
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-layered-trellis
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the proof uses induction and finite maxima."
proof_strategy: direct
provenance:
  statement: ai-altered
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

## Statement

For a finite weighted trellis with $T=0$, the unique prefix path through no
layers is empty and has score $1$. For $T\ge1$, define $D_1(v)=\alpha(v)$ and,
for $2\le t\le T$,
$$D_t(v)=\max\bigl(\{D_{t-1}(u)w_t(u,v):(u,v)\in E_t\}\cup\{0\}\bigr).$$
Then $D_t(v)$ is the maximum score of a prefix path ending at $v$; if no such
prefix exists, $D_t(v)=0$.

## Facts & Assumptions

**Given:** A finite weighted trellis as in the Definition.

[F1] [[def-finite-layered-trellis]]: For $T=0$, the unique path through no
layers is empty with score $1$. For $T\ge1$, a prefix path through layer $t$
starts with positive initial weight and follows an allowed edge at each
preceding layer; its score through $t$ is the initial weight times the edge
weights.

[A1] For an induction step at layer $t\ge2$, assume that $D_{t-1}(u)$ is the
maximum score of a prefix path ending at each $u\in V_{t-1}$, and is zero
exactly when no such prefix path exists.

## Proof

1.1 If $T=0$, the unique prefix path through no layers is empty and has score $1$. For $T\ge1$, at layer $1$ the only prefix ending at $v$ is the one-vertex prefix. It exists exactly when $\alpha(v)>0$, and then has score $\alpha(v)=D_1(v)$; when $\alpha(v)=0$ there is no prefix and $D_1(v)=0$. [given, F1, algebra]

1.2 Fix $t\ge2$ and $v\in V_t$. Every prefix ending at $v$ has a predecessor $u$ with $(u,v)\in E_t$ and is obtained by appending that edge to a prefix ending at $u$. Its score is the predecessor-prefix score multiplied by the positive weight $w_t(u,v)$. By [A1], the best such extension through each $u$ has score $D_{t-1}(u)w_t(u,v)$; if no predecessor prefix exists this value is zero. Taking the maximum over the finite predecessor set, with zero when it is empty, gives exactly the stated recurrence. [given, F1, A1, algebra]

2.1 The $T=0$ case and the base case in step 1.1, together with the induction step in step 1.2, prove the claim for every trellis length and every layer. [step 1.1, step 1.2, induction] ∎
