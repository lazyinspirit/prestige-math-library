---
id: prop-se-energy-duhamel
kind: proposition
domain: mathematics
title: Free and retarded bounds in the energy control space
status: draft
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-laplacian
  - def-se-dirichlet-scale
  - def-se-energy-space
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - lem-se-3-8
  - prop-se-scale-flow
  - prop-se-scale-identifications
  - lem-se-shifted-l1-retarded-transfer
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-dirichlet-laplacian: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-energy-space: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  lem-se-3-8: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-scale-identifications: mathematical-premise
  lem-se-shifted-l1-retarded-transfer: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 14
formulation_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-laplacian
  - def-se-dirichlet-scale
  - def-se-energy-space
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
argument_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-laplacian
  - def-se-dirichlet-scale
  - def-se-energy-space
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - lem-se-3-8
  - prop-se-scale-flow
  - prop-se-scale-identifications
  - lem-se-shifted-l1-retarded-transfer
  - math:def-axiom-of-choice
---

## Statement

Assume the Axiom of Choice and hypothesis (H): for $n\in\{2,3\}$, $\Omega=\mathbb R^n\setminus\Theta$ is the connected exterior of a nonempty compact obstacle with smooth boundary, and the obstacle is non-trapping, meaning that every complete admissible generalized ray $x:\mathbb R\to\overline\Omega$, parametrized at unit speed and including reflected and glancing behavior, leaves every compact set in finite forward time. Let $T>0$, let $\Delta_D$ be the Dirichlet Laplacian on $\Omega$, and write $W(t)=e^{it\Delta_D}$. Let $H^1_0(\Omega)$ be the closure of $C_c^\infty(\Omega)$ in $H^1(\Omega)$, with its inherited $H^1$ norm. Let $X_T$ be the space of continuous $H^1_0$-valued paths with a compatible jointly measurable representative of finite scalar mixed norm $L^4(0,T;L^\infty(\Omega))$, equipped with the sum of that mixed norm and the supremum $H^1_0$ norm.

There is a constant $C$, depending on $T$ and the fixed domain, such that, for every $u_0\in H^1_0(\Omega)$ and every strongly measurable $f\in L^1(0,T;H^1_0(\Omega))$,
$$\|W(\cdot)u_0\|_{X_T}\le C\|u_0\|_{H^1_0(\Omega)},\qquad \left\|\int_0^t W(t-r)f(r)\,dr\right\|_{X_T}\le C\|f\|_{L^1(0,T;H^1_0(\Omega))}.$$
The integral is the $H^1_0$-valued Bochner integral. The $L^4_tL^\infty_x$ term is the scalar sectionwise mixed norm; the second bound does not assert strong measurability into $L^\infty(\Omega)$.

## Facts & Assumptions

[F1] The domain and non-trapping convention are those of [[def-se-geometry]] and [[def-se-nontrapping]]. The Dirichlet Laplacian and its spectral scale are specified by [[def-se-dirichlet-laplacian]] and [[def-se-dirichlet-scale]]. The stated Sobolev closure, time spaces and scalar mixed norm are specified by [[def-se-foundation-integer-sobolev-notation]] and [[def-se-foundation-time-function-spaces]]; [[def-se-energy-space]] defines $X_T$ and its norm. We assume [[math:def-axiom-of-choice]].

[F2] [[prop-se-scale-identifications]] identifies $H_D^1(\Omega)$ with $H^1_0(\Omega)$ with equivalent norms. [[prop-se-scale-flow]] makes $W$ a strongly continuous unitary group on the Hilbert space $H_D^1$.

[F3] With the stated geometry and $p=4$, [[lem-se-3-8]] bounds the homogeneous orbit in $L^4(0,T;L^\infty(\Omega))$ by a constant times its initial $H^1_0$ norm, and supplies a strongly measurable $L^\infty$-valued representative.

[F4] [[lem-se-shifted-l1-retarded-transfer]] transfers a homogeneous scalar mixed-norm bound for a strongly continuous unitary group on a Hilbert space $H$ into a continuous $H$-valued retarded integral and the corresponding scalar $L^p_tL^\infty_x$ bound. Its scalar convention applies when $H$ embeds continuously in $L^2$ on the underlying sigma-finite spatial space; its proof uses the homogeneous bound on intervals of length at most $T$.

## Proof

[F1] The domain and non-trapping convention are those of [[def-se-geometry]] and [[def-se-nontrapping]]. The Dirichlet Laplacian and its spectral scale are specified by [[def-se-dirichlet-laplacian]] and [[def-se-dirichlet-scale]]. The stated Sobolev closure, time spaces and scalar mixed norm are specified by [[def-se-foundation-integer-sobolev-notation]] and [[def-se-foundation-time-function-spaces]]; [[def-se-energy-space]] defines $X_T$ and its norm. We assume [[math:def-axiom-of-choice]].

[F2] [[prop-se-scale-identifications]] identifies $H_D^1(\Omega)$ with $H^1_0(\Omega)$ with equivalent norms. [[prop-se-scale-flow]] makes $W$ a strongly continuous unitary group on the Hilbert space $H_D^1$.

[F3] With the stated geometry and $p=4$, [[lem-se-3-8]] bounds the homogeneous orbit in $L^4(0,T;L^\infty(\Omega))$ by a constant times its initial $H^1_0$ norm, and supplies a strongly measurable $L^\infty$-valued representative.

[F4] [[lem-se-shifted-l1-retarded-transfer]] transfers a homogeneous scalar mixed-norm bound for a strongly continuous unitary group on a Hilbert space $H$ into a continuous $H$-valued retarded integral and the corresponding scalar $L^p_tL^\infty_x$ bound. Its scalar convention applies when $H$ embeds continuously in $L^2$ on the underlying sigma-finite spatial space; its proof uses the homogeneous bound on intervals of length at most $T$.



**Given:** The domain, time, initial datum and forcing in the statement.

**Goal:** Establish both bounds in $X_T$.

1.1 By the equivalent norms in F2, unitarity on $H_D^1$ gives $\sup_{0\le t\le T}\|W(t)u_0\|_{H^1_0}\le C_1\|u_0\|_{H^1_0}$, and the orbit is continuous in $H^1_0$. F3 supplies its $L^4_tL^\infty_x$ bound. Its representative is compatible with the continuous orbit, so the definition in F1 gives the first inequality after adding the two bounds. [given, F1, F2, F3]

1.2 For the forcing estimate take $H=H_D^1$ with its spectral norm and $p=4$ in F4. By F2, $H$ embeds continuously in $L^2(\Omega)$, and $f$ is strongly measurable and integrable as an $H$-valued function; equivalent norms preserve both properties. By F3 and norm equivalence, the required homogeneous estimate holds with the $H$ norm. F4 therefore gives a continuous $H$-valued retarded integral with a compatible jointly measurable representative and a scalar mixed-norm estimate, bounded together by a constant times $\|f\|_{L^1(0,T;H)}$. The restriction from $(0,T)$ to $(0,T-r)$ provides the same homogeneous constant for each shifted interval. [given, F2, F3, F4]

2.1 Convert the $H$ norms in step 1.2 to the equivalent inherited $H^1_0$ norms. The resulting path and representative satisfy the defining conditions of $X_T$, and the sum of its continuous-path and mixed norms is bounded by a constant times $\|f\|_{L^1(0,T;H^1_0)}$. Together with step 1.1 this proves both inequalities, with the larger of the constants. [F1, F2, step 1.1, step 1.2] ∎

## Source notes

The frozen article is cited for the two estimates in the proof of Proposition 3.9, parts (i) and (ii). The deduction above uses the declared completed suppliers; the article citation is attribution rather than a premise proving its own claim.
