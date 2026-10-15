---
id: thm-rpm-h-flat-shell-global-reduction
kind: theorem
title: "Flat future mass shell has an explicit global orbit quotient"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-cotangent-phase-space, def-sr-affine-minkowski-model, thm-a-regular-level-set-is-an-embedded-submanifold, thm-rpm-h-canonical-poisson-and-flow, thm-rpm-h-first-class-local-reduction]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  thm-rpm-h-canonical-poisson-and-flow: mathematical-premise
  thm-rpm-h-first-class-local-reduction: mathematical-premise
sources:
  references:
    - title: "Henneaux, Teitelboim and Regge, Constrained Hamiltonian Systems, Part 1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter II, printed pp. 27–30, free relativistic particle."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete lecture notes (arXiv:gr-qc/9712019v1)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Complete 238-page notes; Chapter 1, printed pp. 25–27, and Chapter 3, printed pp. 68–72; full relevant sections inspected."
physical_scope: "Explicit global reduction only for a free flat future massive or nonzero-null shell; no curved global quotient claim."
---

## Statement

In affine Minkowski space with inertial coordinates $x^0,x^i$ measured in metres and metric $\eta=\operatorname{diag}(-1,1,1,1)$, let $m\ge0$ and let

$$\Sigma_m^+=\{(x,p): -p_0=P^0=\sqrt{m^2c^2+|\mathbf p|^2},\ p_0<0\},$$

where $\mathbf p\ne0$ when $m=0$, and write $P^i=p_i$ for the spatial raised momentum components. The characteristic flow of the restricted canonical form is $(x,p)\mapsto(x+\alpha P,p)$, and its orbit space is globally diffeomorphic to $B_m=\mathbb R^3_a\times\mathbb R^3_p$ for $m>0$, or $\mathbb R^3_a\times(\mathbb R^3_p\setminus\{0\})$ for $m=0$, by

$$a^i=x^i-\frac{P^i}{P^0}x^0,\qquad p_i=p_i.$$

The reduced symplectic form is $da^i\wedge dp_i$. The quotient is Hausdorff and second countable and each full characteristic line meets each slice $x^0=ct$ exactly once. This is an explicit free flat quotient, not a conclusion about arbitrary first-class systems.

## Facts & Assumptions

**Given:** The affine Minkowski model, its canonical cotangent form, and the specified future shell with $P^0>0$.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-cotangent-phase-space]]: $\omega=\sum_a dx^a\wedge dp_a$ and $\theta=p_a\,dx^a$.

[F2] [[def-sr-affine-minkowski-model]]: inertial affine coordinates have metric $\eta=\operatorname{diag}(-1,1,1,1)$, with fixed $c>0$.

[F3] [[thm-rpm-h-canonical-poisson-and-flow]]: a Hamiltonian depending only on momentum has characteristic field $(\partial H/\partial p_a)\partial_{x^a}$.

[F4] [[thm-rpm-h-first-class-local-reduction]]: the characteristic kernel is the null direction of the restricted form; the present statement supplies explicit additional global coordinates.

[F5] [[thm-a-regular-level-set-is-an-embedded-submanifold]]: a smooth real-valued constraint whose differential is nonzero at every point of its zero level has an embedded hypersurface as that level.

## Proof

1.1 Define $C_m(x,p)=\tfrac12(-p_0^2+|\mathbf p|^2+m^2c^2)$. Solving $C_m=0$ on the future branch gives $p_0=-P^0$ with $P^0=\sqrt{m^2c^2+|\mathbf p|^2}>0$. For $m>0$ work on the full cotangent space; for $m=0$ work on its open subset $U_0=\{(x,p):p\ne0\}$. On the zero level in these domains, the vertical differential is $d_pC_m=p^\sharp\ne0$: for $m>0$ the shell equation makes $p$ timelike, and for $m=0$ nondegeneracy of $g^{-1}$ and $p\ne0$ give $p^\sharp\ne0$. Hence [F5] makes the zero level in the stated domain an embedded hypersurface, and $\Sigma_m^+$ is its open future branch. The single constraint is first class because $\{C_m,C_m\}=0$ by skew-symmetry of the canonical Poisson bracket. Thus the regular embedded-level and first-class hypotheses of [F4] hold. Now $y=x^0/P^0$ and $a^i=x^i-(P^i/P^0)x^0$ are smooth shell coordinates, with inverse $x^0=yP^0, x^i=a^i+yP^i$. These formulas prove a diffeomorphism $\Sigma_m^+\cong\mathbb R_y\times B_m$. [given, A1, F2, F3, F4, F5, algebra]

2.1 Since the constraint depends only on $p$, [F3] gives its characteristic field $X_{C_m}=P^a\partial_{x^a}$; [F4] applies by step 1.1 and identifies this direction with the characteristic leaves used for reduction. The flow sends $y\mapsto y+\alpha$ while fixing $a,p$. Hence two points are in the same full orbit exactly when their $a,p$ labels agree, and the quotient map is the product projection to $B_m$. [given, F1, F3, F4, step 1.1, algebra]

2.2 In shell coordinates $x^0=yP^0, x^i=a^i+yP^i$, so $dx^0=P^0\,dy+y\,dP^0$ and $dx^i=da^i+P^i\,dy+y\,dP^i$. Since $p_0=-P^0$, expanding the canonical form gives $$\omega=da^i\wedge dp_i+dy\wedge(P^i dp_i-P^0dP^0)+y\,dP^i\wedge dp_i.$$ Differentiating $(P^0)^2=m^2c^2+|\mathbf p|^2$ gives $P^0dP^0=P^i dp_i$, so the (dy)-term vanishes. The matrix $\partial P^i/\partial p_j=\delta^{ij}$ is symmetric, so $dP^i\wedge dp_i=0$. The restricted form is therefore the pullback of $da^i\wedge dp_i$, which is nondegenerate on $B_m$. [given, F1, step 1.1, algebra]

3.1 The spaces $\mathbb R^3$ and $\mathbb R^3\setminus\{0\}$ are Hausdorff second-countable manifolds; their product with $\mathbb R^3_a$ has the same properties. Product projection is a smooth submersion with global section $y=0$, establishing the asserted global quotient directly. [step 1.1, step 2.1, algebra]

4.1 Along every orbit $x^0(\alpha)=x^0(0)+\alpha P^0$, with $P^0>0$, so each level $x^0=ct$ is attained at the unique parameter $\alpha=(ct-x^0(0))/P^0$. [step 2.1, step 1.1] ∎

