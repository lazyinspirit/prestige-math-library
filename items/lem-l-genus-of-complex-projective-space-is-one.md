---
id: lem-l-genus-of-complex-projective-space-is-one
kind: lemma
title: "The L-genus of complex projective space of even complex dimension is one"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-hirzebruch-l-polynomials
  - def-kronecker-evaluation-pairing
  - def-total-l-class-of-a-smooth-manifold
  - lem-l-class-of-complex-projective-space
  - lem-l-series-coefficient-identity-for-projective-spaces
  - lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original pp. 225-226: the L-genus of $\\mathbb{CP}^{2k}$ is $+1$"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 37: $L[\\mathbb{CP}^{2n}]=+1$ by the substitution $u=\\tanh z$"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Proposition 8.8, printed p. 68: the L-genus of even-dimensional complex projective space is 1"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC, inherited from the L-class and projective-space characteristic-class
suppliers. For every $k\ge0$, with the complex orientation of
$\mathbb{CP}^{2k}$,
$$L[\mathbb{CP}^{2k}]=\bigl\langle L_k(T\mathbb{CP}^{2k}),[\mathbb{CP}^{2k}]\bigr\rangle=1.$$

## Facts & Assumptions

**Given:** AC, the integer $k\ge0$, and the complex orientation of $\mathbb{CP}^{2k}$.

[F1] $L(T\mathbb{CP}^{2k})=Q(y)^{2k+1}=(y/\tanh y)^{2k+1}$ in $H^{4*}(\mathbb{CP}^{2k};\mathbb Q)$, where $y=c_1(\gamma^*)$ is the standard generator ([[lem-l-class-of-complex-projective-space]]).

[F2] The in-run supplier gives $H^*(\mathbb{CP}^n;\mathbb Z)=\mathbb Z[y]/(y^{n+1})$, $\langle y^n,[\mathbb{CP}^n]\rangle=1$, and $p(T\mathbb{CP}^n)=(1+y^2)^{n+1}$ ([[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]).

[F3] For every $m\ge0$, $[z^m](z/\tanh z)^{m+1}=1$ when $m$ is even and $0$ when $m$ is odd ([[lem-l-series-coefficient-identity-for-projective-spaces]]).

[F4] The L-genus in dimension $4k$ is $L[M]=\langle L_k(TM),[M]\rangle$, the degree-$4k$ evaluation of the total L-class under the Kronecker pairing, and $L(T\mathbb{CP}^{2k})$ has degree-$4k$ component lying in $H^{4k}(\mathbb{CP}^{2k};\mathbb Q)=\mathbb Q\,y^{2k}$ ([[def-total-l-class-of-a-smooth-manifold]], [[def-kronecker-evaluation-pairing]], [[def-hirzebruch-l-polynomials]]).

## Proof

**Proof technique:** direct; reduce the genus to a single power-series coefficient.

1.1 By [F1], $L(T\mathbb{CP}^{2k})=Q(y)^{2k+1}=(y/\tanh y)^{2k+1}$, whose degree-$4k$ component is $c\,y^{2k}$ with $c=[y^{2k}](y/\tanh y)^{2k+1}$, since $H^{4k}(\mathbb{CP}^{2k};\mathbb Q)$ is one-dimensional spanned by $y^{2k}$ by [F2]. Taking $m=2k$ in [F3] gives $c=1$. [given, F1, F2, F3]

2.1 Evaluating: $L[\mathbb{CP}^{2k}]=\langle c\,y^{2k},[\mathbb{CP}^{2k}]\rangle=c\,\langle y^{2k},[\mathbb{CP}^{2k}]\rangle=c=1$, using $\langle y^{2k},[\mathbb{CP}^{2k}]\rangle=1$ from [F2] and the $\mathbb Q$-linearity of the Kronecker pairing [F4]. For $k=0$ the manifold is a point with $y\in H^2(\mathbb{CP}^0)=0$, the total class is $Q(0)=1$, and the evaluation on $[\mathrm{pt}]$ is $1$, the same computation with an empty product. [step 1.1, F2, F4]

3.1 Steps 1.1 and 2.1 compute $L[\mathbb{CP}^{2k}]=\langle L_k(T\mathbb{CP}^{2k}),[\mathbb{CP}^{2k}]\rangle=1$ for every $k\ge0$, as asserted; AC is used only through the inherited L-class and projective-space suppliers. [step 1.1, step 2.1, given] ∎
