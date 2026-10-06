---
id: def-framed-cobordism-of-embedded-submanifolds
kind: definition
title: "Framed cobordism of framed submanifolds"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps:
  - def-framing-of-a-normal-bundle
  - def-unoriented-smooth-cobordism-of-closed-manifolds
  - def-neat-submanifold-of-a-manifold-with-boundary
  - def-smooth-embedding
  - def-smooth-manifold
  - def-compact-space
  - def-countable-choice
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, definition of framed cobordism within $M$, printed pp.42-43"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Definition 3.1 (neat submanifolds), printed p.25, and Definition 2.31, printed p.20"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Definitions 6.14 and 6.16, electronic p.114"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $X$ be a closed
smooth manifold and $k\ge0$ ([[def-smooth-manifold]], [[def-compact-space]]).
A **framed cobordism** from a closed framed codimension-$k$ submanifold
$(N_0,\varphi_0)$ of $X$ to another $(N_1,\varphi_1)$ is data
$(W,\varepsilon,\Psi)$ consisting of

- a compact neat embedded submanifold $W\subseteq X\times I$ of dimension
  $\dim X-k+1$ with $\partial W=N_0\times\{0\}\sqcup N_1\times\{1\}$, the
  $N_i$ read in the slice $X\times\{i\}$
  ([[def-neat-submanifold-of-a-manifold-with-boundary]],
  [[def-smooth-embedding]]; here $I=[0,1]$ with its product smooth structure
  and $X$ has been identified with $X\times\{i\}$);
- a number $\varepsilon\in(0,\tfrac12)$ such that the ends of $W$ are exactly
  the products
  $$W\cap\bigl(X\times[0,\varepsilon)\bigr)=N_0\times[0,\varepsilon),\qquad W\cap\bigl(X\times(1-\varepsilon,1]\bigr)=N_1\times(1-\varepsilon,1];$$
  equivalently, the product collar embeddings
  $\theta_0:N_0\times[0,\varepsilon)\to W$, $\theta_0(x,s)=(x,s)$ and
  $\theta_1:N_1\times(1-\varepsilon,1]\to W$, $\theta_1(x,s)=(x,s)$ are part
  of the data, with $\theta_i(x,i)=(x,i)$ and images exactly the two ends;
- a framing
  $\Psi:\nu(W\subseteq X\times I)\to W\times\mathbb R^k$
  ([[def-framing-of-a-normal-bundle]]) which, over each end collar
  $N_i\times\Theta_i$ (where $\Theta_0=[0,\varepsilon)$ and
  $\Theta_1=(1-\varepsilon,1]$), is the pullback of $\varphi_i$ along the
  product projection, under the canonical identification
  $$\nu(W\subseteq X\times I)\big|_{N_i\times\Theta_i}\cong\operatorname{pr}_{N_i}^*\nu(N_i\subseteq X)$$
  induced by the product structure: along the whole collar the $I$-direction is
  tangent to $W$, so the quotient normal of $W$ in $X\times I$ restricts there
  to the quotient normal of $N_i$ in $X$. In particular, at the end slice
  $t=i$ the restriction of $\Psi$ corresponds to $\varphi_i$; requiring the
  constancy over the whole collar is Milnor's normalisation
  $u^i(x,t)=(v^i(x),0)$.

Two closed framed codimension-$k$ submanifolds of $X$ are **framed cobordant**
when such data exist. The relation is introduced here only as a relation; that
it is reflexive, symmetric and transitive is proved in
[[lem-framed-cobordism-is-an-equivalence-relation]].

No orientation of $X$ or of the $N_i$ is used, and no direction of the normal
bundle is singled out: all signs are carried by the actual framings
$\varphi_0,\varphi_1,\Psi$. The product ends and the constant framings on them
are data, not choices made afterwards, so the restriction of $\Psi$ to each end
is a literal equality with $\varphi_i$, with no implicit inward-normal sign and
no implicit straightening of a general collar; this is Milnor's definition of
cobordism within $M$, in which the subset
$N_0\times[0,\varepsilon)\cup N_1\times(1-\varepsilon,1]$
extends to $W$. The empty manifold is allowed as $N_0$, as $N_1$ and as $W$,
and $k=0$ is allowed; for $k=0$ the normal bundles are rank zero, the framings
are unique, and the condition on $\Psi$ is vacuous. A framed cobordism
$(W,\varepsilon,\Psi)$ also yields an (unoriented) bordism
$(W,\theta_0,\theta_1)$ in the sense of
[[def-unoriented-smooth-cobordism-of-closed-manifolds]] after rescaling
$\theta_i$ to the standard widths, since $W$ is a compact smooth manifold with
boundary and the $\theta_i$ are collars onto the two boundary parts. The
countable-choice hypothesis is inherited from the smooth normal-bundle
structure through [[def-framing-of-a-normal-bundle]]; the definition itself
selects nothing.
