---
id: post-td-nernst-scoped
kind: postulate
title: Uniform Nernst heat-theorem postulate on a compact family
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A chosen compact family of fixed-constraint equilibrium branches at strictly positive temperatures in the adopted macroscopic thermodynamic framework; no zero-temperature state, absolute entropy normalization, or microscopic identification is supplied.
deps:
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - def-td-temperature-pressure-chemical-potential
  - post-td-concave-fundamental-entropy
  - def-complete-ordered-field
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  post-td-concave-fundamental-entropy: formulation-prerequisite
  def-complete-ordered-field: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, complete Chapter 4 lecture-note PDF, §4.5
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.6.2
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
dependency_level: 6
---

## Postulate

Fix a material constitution $c$, a positive temperature $T_0$ in kelvins, and a nonempty set $K$ equipped with a specified topology $\tau_K$ such that the topological space $(K,\tau_K)$ is compact. Compact means that every cover of $K$ by $\tau_K$-open subsets has a finite subcover; the label $a\in K$ holds its listed external constraints fixed while temperature varies. Let $D_{c,+}\subseteq D_c$ be the designated open equilibrium charts on which the finite $C^2$ entropy and positive absolute temperature $T_c=1/S_{c,U}$ are defined, as in [[post-td-concave-fundamental-entropy]] and [[def-td-temperature-pressure-chemical-potential]]. A model-specified family map
$
\phi:(0,T_0)\times K\longrightarrow D_{c,+}
$
assigns an equilibrium state $\phi(t,a)$ at temperature $t$, so $T_c(\phi(t,a))=t$. The map need not be continuous in $a$; the postulate below itself requires the displayed supremum to be finite for all sufficiently small $t$. Define $S_K(t,a):=S_c(\phi(t,a))$, measured in $\mathrm{J\,K^{-1}}$.

The model adopts the following uniform compact-family Nernst heat-theorem postulate:
$
\lim_{t\downarrow0}\ \sup_{a,b\in K}\left|S_K(t,a)-S_K(t,b)\right|=0,
$
where the supremum is the least upper bound of the displayed real differences. This is an additional low-temperature physical postulate, not a consequence of the first or second law. It is a deliberately scoped uniform formulation; it is not asserted equivalent to every statement called the third law or Nernst's theorem.

The postulate constrains entropy differences within the declared family. It does not assert that any individual finite limit $S_K(0,a):=\lim_{t\downarrow0}S_K(t,a)$ exists, that such a limit is zero, or that the family includes every material or constraint. If the indicated individual limit is to be used, its existence and finiteness are an additional premise.
