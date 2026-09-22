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
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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

1.2 The set $\Phi$ consists exactly of the unit vectors whose angles are $m\pi/5$, $m\in\mathbb Z/10\mathbb Z$. If $\alpha$ has angle $m\pi/5$, then $s_\alpha$ is reflection in the perpendicular line at angle $m\pi/5+\pi/2$. It therefore sends the vector at angle $n\pi/5$ to the vector at angle
$$2\left(\frac{m\pi}{5}+\frac{\pi}{2}\right)-\frac{n\pi}{5}=\frac{(2m+5-n)\pi}{5},$$
which again belongs to $\Phi$. Hence $s_\alpha(\Phi)=\Phi$ for every $\alpha\in\Phi$. [L1, algebra]

1.3 The integrality axiom fails. Take $\alpha=(1,0)$ and $\beta=(\cos(2\pi/5),\sin(2\pi/5))$; then $2(\beta,\alpha)/(\alpha,\alpha)=2\cos(2\pi/5)=:y$. With $\zeta=e^{2\pi i/5}$ one has $y=\zeta+\zeta^{-1}$ and $1+\zeta+\zeta^{2}+\zeta^{3}+\zeta^{4}=0$, so dividing by $\zeta^{2}$ gives $0=\zeta^{2}+\zeta+1+\zeta^{-1}+\zeta^{-2}=(y^{2}-2)+y+1$, that is $y^{2}+y-1=0$ and $y(y+1)=1$. If $y$ were an integer, the integer factor pair $(y,y+1)$ would have to be $(1,1)$ or $(-1,-1)$, neither of which consists of consecutive integers. Hence $y\notin\mathbb Z$. [given, algebra]

2.1 Thus $\Phi$ is a finite, spanning, reduced, reflection-invariant set of nonzero vectors whose Cartan integer $y$ is not an integer, so $\Phi$ is not a crystallographic root system by [L1]; this refutes the claim that reflection invariance alone suffices. [L1, step 1.1, step 1.2, step 1.3] ∎
