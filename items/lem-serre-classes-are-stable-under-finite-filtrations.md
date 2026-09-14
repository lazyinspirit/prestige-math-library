---
id: lem-serre-classes-are-stable-under-finite-filtrations
kind: lemma
title: Serre classes are stable under finite filtrations
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-serre-class-ring-ideal-and-mod-c-morphism, thm-snake-lemma-for-modules]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, finite filtrations modulo a Serre class"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 30, discussion after Lemma 30.6, printed p. 106"
---

## Statement

Let $\mathcal C$ be a Serre class. If an abelian group $A$ has a finite
increasing filtration
$$0=F_{-1}A\subseteq F_0A\subseteq\cdots\subseteq F_mA=A$$
and every quotient $\operatorname{gr}_iA=F_iA/F_{i-1}A$ belongs to
$\mathcal C$, then $A\in\mathcal C$.

More generally, let $f:A\to B$ preserve finite filtrations with common zero
and total endpoints. If every induced map
$$\operatorname{gr}_i(f):\operatorname{gr}_iA\longrightarrow\operatorname{gr}_iB$$
is a $\mathcal C$-isomorphism, then $f$ is a $\mathcal C$-isomorphism. Both
assertions are choice-free.

## Facts & Assumptions

**Given:** The finite filtrations, the Serre class, and, in the second clause, the filtered homomorphism in the statement.

[F1] [[def-serre-class-ring-ideal-and-mod-c-morphism]] gives subgroup, quotient, and extension closure and defines a $\mathcal C$-isomorphism by its kernel and cokernel.

[F2] [[thm-snake-lemma-for-modules]] gives the exact sequence of kernels and cokernels associated to a map of short exact sequences.

## Proof

**Proof technique:** finite induction through consecutive short exact sequences.

1.1 The group $F_{-1}A=0$ lies in $\mathcal C$. If $F_{i-1}A\in\mathcal C$, the filtration gives a short exact sequence $$0\longrightarrow F_{i-1}A\longrightarrow F_iA\longrightarrow\operatorname{gr}_iA\longrightarrow0.$$ The two end groups lie in $\mathcal C$, so extension closure in [F1] gives $F_iA\in\mathcal C$. Finite induction from $i=0$ through $i=m$ yields $A=F_mA\in\mathcal C$. [F1]

1.2 Write $f_i:F_iA\to F_iB$. For each $i$, the filtered map gives a commutative diagram whose rows are $$0\to F_{i-1}A\to F_iA\to\operatorname{gr}_iA\to0$$ and the analogous sequence for $B$. Apply [F2]. If $f_{i-1}$ and $\operatorname{gr}_i(f)$ are $\mathcal C$-isomorphisms, all four of their kernel and cokernel groups lie in $\mathcal C$. Exactness of the snake sequence expresses $\ker f_i$ and $\operatorname{coker}f_i$ as extensions of subquotients of those four groups. By [F1], both belong to $\mathcal C$; hence $f_i$ is a $\mathcal C$-isomorphism. [F1, F2]

2.1 The initial map $f_{-1}:0\to0$ has zero kernel and cokernel. Starting there and applying step 1.2 finitely many times proves that $f_m=f$ is a $\mathcal C$-isomorphism. No simultaneous selection of lifts is made: the snake maps are homomorphisms supplied by [F2], and the argument only takes finitely many canonical kernels, images, quotients, and extensions. [F1, F2, step 1.2]

3.1 If $m=-1$, then $A=B=0$ and both conclusions are immediate. Repeated filtration terms contribute zero graded pieces. A one-step filtration is exactly the defining extension closure, and a one-piece filtered map is the defining kernel-cokernel condition. Zero graded maps and zero source or target groups are included. The induction checks its initial and terminal endpoints, and step 1.2 checks both the kernel and cokernel sides of the snake sequence. Degenerate filtrations are handled by repeated terms. No AC is used and neither assertion is a biconditional. [F1, F2, step 1.1, step 1.2, step 2.1] ∎

## Source notes

[Miller, Lecture 30](https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf), printed p. 106, states finite-filtration closure immediately after Lemma 30.6. The filtered-morphism refinement is the snake-lemma argument written out above.
