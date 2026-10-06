---
id: cor-eight-dimensional-signature-formula
kind: corollary
title: "The eight-dimensional signature formula"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 11
deps:
  - def-signature-of-a-closed-oriented-four-k-manifold
  - def-axiom-of-choice
  - def-hirzebruch-l-polynomials
  - def-kronecker-evaluation-pairing
  - def-pontryagin-number-of-a-closed-oriented-manifold
  - thm-hirzebruch-signature-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, the displayed $L_2$ and Corollary 19.5, original pp. 225-226"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 35: $L_2(t_1,t_2)=(7t_2-t_1^2)/45$"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Exercise 11.57, printed p. 99: the eight-dimensional signature formula"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC, inherited from the Hirzebruch signature theorem. For every closed
oriented smooth $8$-manifold $M$,
$$\sigma(M)=\frac1{45}\bigl(7\,p_2[M]-p_{(1,1)}[M]\bigr).$$
Here $p_{(1,1)}[M]:=\langle p_1(TM)\smile p_1(TM),[M]\rangle$; it is not the square of a degree-four evaluation on $[M]$. Consequently $45$ divides $7\,p_2[M]-p_{(1,1)}[M]$ in $\mathbb Z$.

## Facts & Assumptions

**Given:** AC; a closed oriented smooth $8$-manifold $M$, and the Pontryagin classes $p_1,p_2$ of $TM$.

[F1] $\sigma(M)=L[M]=\langle L_2(TM),[M]\rangle$ ([[thm-hirzebruch-signature-theorem]]).

[F2] $L_2=(7p_2-p_1^2)/45$ ([[def-hirzebruch-l-polynomials]]).

[F3] The Pontryagin numbers $p_{(1,1)}[M]=\langle p_1\smile p_1,[M]\rangle$ and $p_2[M]=\langle p_2,[M]\rangle$ are integers. The Kronecker pairing is $\mathbb Q$-linear in the cohomology variable; no multiplicativity of evaluation on a single fundamental class is asserted ([[def-pontryagin-number-of-a-closed-oriented-manifold]], [[def-kronecker-evaluation-pairing]]).

[F4] $\sigma(M)$ is an integer by [[def-signature-of-a-closed-oriented-four-k-manifold]].

## Proof

**Proof technique:** direct; specialise the signature theorem to $k=2$.

1.1 By [F1], [F2] and the linearity of the Kronecker pairing [F3], $\sigma(M)=\bigl\langle(7p_2-p_1^2)/45,[M]\bigr\rangle=\tfrac1{45}\bigl(7\langle p_2,[M]\rangle-\langle p_1\smile p_1,[M]\rangle\bigr)=\tfrac1{45}\bigl(7p_2[M]-p_{(1,1)}[M]\bigr)$. [given, F1, F2, F3]

2.1 Divisibility: the left side is an integer by [F4] and $7p_2[M]-p_{(1,1)}[M]$ is an integer by [F3], so $45$ divides $7p_2[M]-p_{(1,1)}[M]$. [step 1.1, F3, F4]

3.1 Steps 1.1 and 2.1 prove the displayed formula and the divisibility statement. [step 1.1, step 2.1] ∎
