---
id: lem-se-3-8
kind: lemma
domain: mathematics
title: "Lemma 3.8: energy-data time-integrable supremum bound"
status: published
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - prop-se-scale-flow
  - prop-se-scale-identifications
  - lem-se-exterior-h2-uniform-algebra
  - prop-se-2-4
  - prop-se-two-dimensional-embedding
  - math:def-axiom-of-choice
  - math:thm-tonelli-and-fubini-for-completed-product-measures
  - math:thm-holder-inequality-for-integrals
  - math:thm-fatou-lemma
  - math:thm-heine-cantor-metric
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-scale-identifications: mathematical-premise
  lem-se-exterior-h2-uniform-algebra: mathematical-premise
  prop-se-2-4: mathematical-premise
  prop-se-two-dimensional-embedding: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  math:thm-holder-inequality-for-integrals: mathematical-premise
  math:thm-fatou-lemma: mathematical-premise
  math:thm-heine-cantor-metric: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 13
formulation_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
argument_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - prop-se-scale-flow
  - prop-se-scale-identifications
  - lem-se-exterior-h2-uniform-algebra
  - prop-se-2-4
  - prop-se-two-dimensional-embedding
  - math:def-axiom-of-choice
  - math:thm-tonelli-and-fubini-for-completed-product-measures
  - math:thm-holder-inequality-for-integrals
  - math:thm-fatou-lemma
  - math:thm-heine-cantor-metric
---

## Statement

Assume the Axiom of Choice and hypothesis (H): $\Omega=\mathbb R^n\setminus\Theta$ is the connected exterior of a nonempty compact obstacle with smooth boundary, and the obstacle is non-trapping, meaning that every complete admissible generalized ray $x:\mathbb R\to\overline\Omega$, parametrized at unit speed and including reflected and glancing behavior, leaves every compact set in finite forward time. Let $n\in\{2,3\}$, $T>0$, and $W(t)=e^{it\Delta_D}$, where $\Delta_D$ is the Dirichlet Laplacian. Take $p=4$ if $n=3$, and any finite $p>2$ if $n=2$. Then there is a constant $C$, depending on the fixed domain, $T$ and $p$, such that every $u_0\in H^1_0(\Omega)$ satisfies
$$\|W(\cdot)u_0\|_{L^p(0,T;L^\infty(\Omega))}\le C\|u_0\|_{H^1_0(\Omega)}.$$
Here $H^1_0$ is the $H^1$-norm closure of smooth compactly supported functions, with the inherited $H^1$ norm. The displayed time-space norm is the Bochner norm; in particular the evolution has a strongly measurable $L^\infty(\Omega)$-valued representative on $(0,T)$.

## Facts & Assumptions

**Given:** The assumptions, exponents and datum in the Statement.

[F1] The geometry and non-trapping convention are those of [[def-se-geometry]] and [[def-se-nontrapping]]. The Dirichlet spectral scale and $W(t)$ are fixed by [[def-se-dirichlet-scale]], under [[math:def-axiom-of-choice]]. The integer Sobolev closure and inherited norm are specified by [[def-se-foundation-integer-sobolev-notation]].

[F2] [[prop-se-two-dimensional-embedding]] gives the displayed Bochner estimate directly in dimension two for every finite $p>2$. In dimension three, [[prop-se-2-4]] gives the same estimate for the scalar sectionwise $L^4_tL^\infty_x$ norm, without asserting strong measurability into $L^\infty$.

[F3] The spectral core $D((I-\Delta_D)^\infty)$ is dense in $H_D^1$ by [[def-se-dirichlet-scale]]. [[prop-se-scale-identifications]] identifies $H_D^1$ with $H^1_0$ and $H_D^2$ with $H^2\cap H^1_0$, with equivalent norms. [[prop-se-scale-flow]] gives continuity of $W(t)$ on each scale and unitarity on $L^2$.

[F4] In dimensions two and three, [[lem-se-exterior-h2-uniform-algebra]] gives the continuous embedding $H^2(\Omega)\to L^\infty(\Omega)$. The Bochner and scalar sectionwise conventions are those of [[def-se-foundation-time-function-spaces]]; [[math:thm-tonelli-and-fubini-for-completed-product-measures]] supplies the needed passage between product-null sets and almost-everywhere null sections.

[F5] Hölder's inequality for real measurable functions, including the strict conjugate pair $(4,4/3)$, is supplied by [[math:thm-holder-inequality-for-integrals]]. Fatou's lemma for nonnegative measurable functions is supplied by [[math:thm-fatou-lemma]].

[F6] [[math:thm-heine-cantor-metric]] makes every continuous map from a compact metric space into any metric space uniformly continuous. The time-space supplier in F4 records compactness of $[0,T]$, as well as completeness of complex $L^q$ for $1\le q\le\infty$ and the finite-range simple-function definition of strong measurability. In particular its Banach-space assertion applies to $L^\infty(\Omega;\mathbb C)$ under the assumed Choice.

## Proof

**Given:** The domain, time, exponent and energy datum in the Statement, with the Axiom of Choice.

**Goal:** Establish the Bochner estimate in both dimensions.

1.1 If $n=2$, the hypotheses, exponent range, evolution and inherited $H^1$ norm agree with the two-dimensional estimate in F2. It gives the required Bochner bound directly. [given, F1, F2]

1.2 Suppose $n=3$. By density in F3 and the Axiom of Choice in F1, choose core data $u_j$ with $\|u_j-u_0\|_{H^1_0}\le2^{-j}$ for $j\ge1$. Then $\sum_{j\ge1}\|u_{j+1}-u_j\|_{H^1_0}<\infty$. Each $u_j$ lies in $H_D^2$; F3 and F4 therefore make $g_j(t)=W(t)u_j$ continuous from $[0,T]$ into $L^\infty(\Omega;\mathbb C)$. [given, F1, F3, F4, choose]

2.1 For any continuous $h:[0,T]\to L^\infty(\Omega;\mathbb C)$ and $\varepsilon>0$, F6 gives a $\delta>0$ such that $|t-r|<\delta$ implies $\|h(t)-h(r)\|_\infty<\varepsilon$. Take an integer $m$ with $T/m<\delta$, and set $S(t)=h(kT/m)$ for $kT/m\le t<(k+1)T/m$, restricted to $(0,T)$, for $0\le k<m$. This is a measurable finite-range simple function and $\sup_{0<t<T}\|S(t)-h(t)\|_\infty<\varepsilon$. For fixed $h$, choosing $\varepsilon=2^{-k}$ gives simple approximants converging in norm at every time, so $h$ is strongly measurable by F4. Apply the construction to each $g_j$ with $\varepsilon=2^{-j}$ and denote the resulting simple map by $s_j$. [F4, F6, step 1.2, construct]

3.1 Put $a_j(t)=\|g_{j+1}(t)-g_j(t)\|_\infty$. These are continuous nonnegative real functions. The scalar estimate in F2, with the representative convention in F4, gives $\|a_j\|_{L^4(0,T)}\le C\|u_{j+1}-u_j\|_{H^1_0}$. Hölder in F5, applied to $a_j$ and the constant function $1$ with conjugate exponents $(4,4/3)$, gives $\int_0^T a_j(t)\,dt\le T^{3/4}\|a_j\|_{L^4(0,T)}$. Consequently Tonelli in F4, for Lebesgue time measure and counting measure on the positive integers, gives $\int_0^T\sum_{j\ge1}a_j(t)\,dt=\sum_{j\ge1}\int_0^T a_j(t)\,dt<\infty$. Thus the sum is finite outside a measurable null set $E$. At every $t\notin E$, the norm triangle inequality makes $(g_j(t))$ Cauchy in complex $L^\infty$, whose completeness is supplied in F6. Let $v(t)$ be its norm limit there and set $v(t)=0$ on $E$. [F2, F4, F5, F6, step 1.2, step 2.1]

4.1 The finite-range simple functions in step 2.1 satisfy $\|s_j(t)-v(t)\|_\infty\le2^{-j}+\|g_j(t)-v(t)\|_\infty\to0$ for every $t\notin E$. They therefore witness strong measurability of $v$ directly by the definition in F4, without assuming a general closure theorem for maps into a nonseparable Banach space. [F4, step 2.1, step 3.1]

5.1 Unitarity on $L^2$ makes $W(t)u_j\to W(t)u_0$ in $L^2(\Omega)$ for every $t$. At each $t\notin E$, the same sequence converges to $v(t)$ in $L^\infty(\Omega)$ and hence in $L^2(\Omega\cap B_R)$ for every positive integer $R$, since the local $L^2$ distance is at most $|\Omega\cap B_R|^{1/2}$ times the $L^\infty$ distance. The norm triangle inequality identifies the two local $L^2$ limits. The countable balls cover $\Omega$, so $v(t)$ equals the spatial class of $W(t)u_0$ for almost every time. With the product and section conventions in F4, $v$ is a strongly measurable representative of the evolution. [F3, F4, step 3.1, step 4.1]

6.1 The scalar estimate gives $\int_0^T\|g_j(t)\|_\infty^4\,dt\le C^4\|u_j\|_{H^1_0}^4$. The norm convergence outside $E$ in step 3.1 and Fatou's lemma in F5, applied to the nonnegative measurable functions $\|g_j(t)\|_\infty^4$, give $\int_0^T\|v(t)\|_\infty^4\,dt\le C^4\|u_0\|_{H^1_0}^4$, because $u_j\to u_0$ in $H^1_0$. Taking fourth roots and using steps 4.1 and 5.1 proves the Bochner bound in dimension three. Together with step 1.1 this proves the assertion in both dimensions. [F2, F4, F5, step 1.1, step 1.2, step 3.1, step 4.1, step 5.1] ∎

## Source notes

The frozen article is cited for attribution of Lemma 3.8. The dimensional estimates used as mathematical premises are supplied by the declared items. The three-dimensional argument records the strong-measurability passage using explicit finite-range simple approximants; the scalar mixed-norm supplier is not treated as asserting Bochner measurability. Complex L-infinity completeness was already supplied by the declared time-space item. The mathematical flow chain retains its Physics Library supplier with domain mathematics. No physical assumption, new external input, or original-article defect is asserted.
