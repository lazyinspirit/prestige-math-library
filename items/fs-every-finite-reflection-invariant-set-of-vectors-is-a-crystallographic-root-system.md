---
id: fs-every-finite-reflection-invariant-set-of-vectors-is-a-crystallographic-root-system
kind: false-statement
title: Every finite reflection-invariant set of vectors is crystallographic
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, Figure 2.2 and the noncrystallographic dihedral systems, printed pp. 150-153"
landmark: false
proof_strategy: counterexample
---

## Statement

False: a finite set of nonzero vectors spanning a Euclidean space that is
invariant under all of its root reflections need not be crystallographic;
reflection invariance alone does not force the Cartan integers
$2(\beta,\alpha)/(\alpha,\alpha)$ to be integers.

## Facts & Assumptions

**Given:** The regular pentagon and the notation of the root-system axioms.

[L1] A reduced crystallographic root system requires $s_\alpha(\Phi)=\Phi$ and integrality of all Cartan integers ([[def-reduced-crystallographic-euclidean-root-system]]).

## Proof

**Proof technique:** counterexample.

1.1 Let $\Phi=\{\pm(\cos(2\pi k/5),\sin(2\pi k/5)):k=0,1,2,3,4\}\subset\mathbb R^{2}$; it is a finite subset of $\mathbb R^{2}\setminus\{0\}$ spanning $\mathbb R^{2}$, and its ten elements lie on five distinct lines, so $\mathbb R\alpha\cap\Phi=\{\pm\alpha\}$ for each $\alpha\in\Phi$. [given, algebra]

1.2 $\Phi$ is invariant under $s_\alpha$ for every $\alpha\in\Phi$: the reflection $s_\alpha$ is the reflection of the plane in the line $\mathbb R\alpha$, and the dihedral symmetry group of the regular pentagon permutes the ten vectors, so $s_\alpha(\Phi)=\Phi$. [given, algebra]

1.3 The integrality axiom fails. Take $\alpha=(1,0)$ and $\beta=(\cos(2\pi/5),\sin(2\pi/5))$; then $2(\beta,\alpha)/(\alpha,\alpha)=2\cos(2\pi/5)=:y$. With $\zeta=e^{2\pi i/5}$ one has $y=\zeta+\zeta^{-1}$ and $1+\zeta+\zeta^{2}+\zeta^{3}+\zeta^{4}=0$, so dividing by $\zeta^{2}$ gives $0=\zeta^{2}+\zeta+1+\zeta^{-1}+\zeta^{-2}=(y^{2}-2)+y+1$, that is $y^{2}+y-1=0$ and $y(y+1)=1$. If $y$ were an integer, the consecutive integers $y$ and $y+1$ would both divide $1$, so $y=1$ and $y+1=1$, impossible; hence $y\notin\mathbb Z$. [given, algebra]

2.1 Thus $\Phi$ is a finite, spanning, reduced, reflection-invariant set of nonzero vectors whose Cartan integer $y$ is not an integer, so $\Phi$ is not a crystallographic root system by [L1]; this refutes the claim that reflection invariance alone suffices. [L1, step 1.1, step 1.2, step 1.3] ∎
