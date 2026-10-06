---
id: cor-four-dimensional-signature-formula
kind: corollary
title: "The four-dimensional signature formula"
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
      locator: "section 19, Corollary 19.5 and $L_1=p_1/3$, original pp. 225-226"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "equation (11.55), printed p. 99: the four-dimensional signature formula"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 35: $L_1(t_1)=t_1/3$"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC, inherited from the Hirzebruch signature theorem. For every closed
oriented smooth $4$-manifold $M$,
$$\sigma(M)=\frac13\langle p_1(TM),[M]\rangle=\frac{p_1[M]}{3}.$$
Consequently $3$ divides the Pontryagin number $p_1[M]\in\mathbb Z$.

## Facts & Assumptions

**Given:** AC; a closed oriented smooth $4$-manifold $M$.

[F1] $\sigma(M)=L[M]=\langle L_1(TM),[M]\rangle$ ([[thm-hirzebruch-signature-theorem]]).

[F2] $L_1=p_1/3$ ([[def-hirzebruch-l-polynomials]]).

[F3] $p_1[M]=\langle p_1(TM),[M]\rangle\in\mathbb Z$ is the first Pontryagin number, computed by the Kronecker pairing, which is linear ([[def-pontryagin-number-of-a-closed-oriented-manifold]], [[def-kronecker-evaluation-pairing]]).

[F4] The signature $\sigma(M)=p-q$ is by definition the difference of two nonnegative integers, hence an integer ([[def-signature-of-a-closed-oriented-four-k-manifold]]).

## Proof

**Proof technique:** direct; specialise the signature theorem to $k=1$.

1.1 By [F1] and [F2], $\sigma(M)=\langle L_1(TM),[M]\rangle=\langle p_1(TM)/3,[M]\rangle=\tfrac13\langle p_1(TM),[M]\rangle=p_1[M]/3$, using the $\mathbb Q$-linearity of the Kronecker pairing [F3]. [given, F1, F2, F3]

2.1 Divisibility: $\sigma(M)\in\mathbb Z$ and $p_1[M]\in\mathbb Z$ with $3\sigma(M)=p_1[M]$, so $3$ divides $p_1[M]$. [step 1.1, F3, F4]

3.1 Steps 1.1 and 2.1 prove the displayed formula and the divisibility statement for every closed oriented smooth $4$-manifold. [step 1.1, step 2.1] ∎
