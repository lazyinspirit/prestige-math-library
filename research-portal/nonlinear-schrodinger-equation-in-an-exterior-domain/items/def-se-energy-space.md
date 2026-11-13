---
id: def-se-energy-space
kind: definition
domain: mathematics
title: Energy control space with a time-integrable supremum norm
status: draft
deps:
  - def-se-geometry
  - def-se-dirichlet-scale
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
  - math:thm-riesz-fischer-completeness-of-l-p
  - math:thm-tonelli-and-fubini-for-completed-product-measures
  - math:thm-monotone-convergence-for-the-integral
  - math:thm-minkowski-inequality-for-integrals
  - math:thm-function-space-is-complete-for-a-complete-target
  - math:thm-heine-cantor-metric
  - math:thm-complex-lp-completeness-and-almost-everywhere-subsequences
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-riesz-fischer-completeness-of-l-p: mathematical-premise
  math:thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  math:thm-monotone-convergence-for-the-integral: mathematical-premise
  math:thm-minkowski-inequality-for-integrals: mathematical-premise
  math:thm-function-space-is-complete-for-a-complete-target: mathematical-premise
  math:thm-heine-cantor-metric: mathematical-premise
  math:thm-complex-lp-completeness-and-almost-everywhere-subsequences: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 7
formulation_deps:
  - def-se-geometry
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
argument_deps:
  - def-se-geometry
  - def-se-dirichlet-scale
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
  - math:thm-riesz-fischer-completeness-of-l-p
  - math:thm-tonelli-and-fubini-for-completed-product-measures
  - math:thm-monotone-convergence-for-the-integral
  - math:thm-minkowski-inequality-for-integrals
  - math:thm-function-space-is-complete-for-a-complete-target
  - math:thm-heine-cantor-metric
  - math:thm-complex-lp-completeness-and-almost-everywhere-subsequences
---

## Definition

Assume the Axiom of Choice. Let $T>0$ and let $\Omega$ be the connected exterior of a nonempty compact obstacle with smooth boundary as in [[def-se-geometry]]. The space $H^1_0(\Omega)$ is the closure of $C_c^\infty(\Omega;\mathbb C)$ in the complex $H^1$ norm. A path $u$ belongs to $X_T$ if $u\in C([0,T];H^1_0(\Omega))$ and it has a jointly measurable representative $U$ on $(0,T)\times\Omega$ such that $U(t,\cdot)$ represents $u(t)$ for almost every $t$ and $\|U\|_{L^4_tL^\infty_x}<\infty$. The latter is the mixed norm of [[def-se-foundation-time-function-spaces]], namely $\left(\int_0^T(\operatorname*{ess\,sup}_{x\in\Omega}|U(t,x)|)^4\,dt\right)^{1/4}$.

Equip $X_T$ with $\|u\|_{X_T}=\sup_{0\le t\le T}\|u(t)\|_{H^1_0(\Omega)}+\|U\|_{L^4_tL^\infty_x}$. Here the $H^1_0$ norm is the inherited $H^1$ norm. The mixed term is independent of the chosen compatible representative. This is the Banach control space used in the article for $s=1$. The mixed condition does not require strong measurability of $t\mapsto U(t,\cdot)$ as an $L^\infty(\Omega)$-valued map.

## Definition references

[[def-se-geometry]]

[[def-se-foundation-integer-sobolev-notation]]

[[def-se-foundation-time-function-spaces]]

[[def-se-dirichlet-scale]]

## Facts & Assumptions

[F1] The integer Sobolev notation defines $H^1_0$ as the stated closure; the Dirichlet scale identifies it, with the displayed $H^1$ norm, with a Hilbert space. [[def-se-foundation-integer-sobolev-notation]] [[def-se-dirichlet-scale]]

[F2] The time-space definition supplies continuous paths, compatible mixed norms and their norm properties; completed-product Tonelli identifies product-null sets with almost-everywhere null sections. [[def-se-foundation-time-function-spaces]] [[math:thm-tonelli-and-fubini-for-completed-product-measures]]

[F3] Scalar $L^4(0,T)$ is complete; Minkowski and monotone convergence control sums of nonnegative $L^4$ functions. Choice permits the countable representative and subsequence selections used below. [[math:thm-riesz-fischer-completeness-of-l-p]] [[math:thm-minkowski-inequality-for-integrals]] [[math:thm-monotone-convergence-for-the-integral]] [[math:def-axiom-of-choice]]

[F4] For a nonempty topological space $S$ and a complete metric target $(Y,d)$, $C(S;Y)$ is complete for the bounded uniform metric $\bar\rho(v,w)=\sup_{t\in S}\min\{d(v(t),w(t)),1\}$. [[math:thm-function-space-is-complete-for-a-complete-target]]

[F5] The interval $[0,T]$ is compact, as recorded in the time-space supplier. A continuous map from a compact metric space into any metric space is uniformly continuous. [[def-se-foundation-time-function-spaces]] [[math:thm-heine-cantor-metric]]

[F6] Under Countable Choice, [[math:thm-complex-lp-completeness-and-almost-everywhere-subsequences]] gives completeness of complex $L^2$ on every measure space and an almost-everywhere convergent subsequence of measurable representatives for every norm-convergent sequence. Apply it on the completed product of time Lebesgue measure and restricted spatial Lebesgue measure; the stated AC assumption supplies Countable Choice. No Bochner measurability into spatial $L^\infty$ is required.

## Justification

[F1] The integer Sobolev notation defines $H^1_0$ as the stated closure; the Dirichlet scale identifies it, with the displayed $H^1$ norm, with a Hilbert space. [[def-se-foundation-integer-sobolev-notation]] [[def-se-dirichlet-scale]]

[F2] The time-space definition supplies continuous paths, compatible mixed norms and their norm properties; completed-product Tonelli identifies product-null sets with almost-everywhere null sections. [[def-se-foundation-time-function-spaces]] [[math:thm-tonelli-and-fubini-for-completed-product-measures]]

[F3] Scalar $L^4(0,T)$ is complete; Minkowski and monotone convergence control sums of nonnegative $L^4$ functions. Choice permits the countable representative and subsequence selections used below. [[math:thm-riesz-fischer-completeness-of-l-p]] [[math:thm-minkowski-inequality-for-integrals]] [[math:thm-monotone-convergence-for-the-integral]] [[math:def-axiom-of-choice]]

[F4] For a nonempty topological space $S$ and a complete metric target $(Y,d)$, $C(S;Y)$ is complete for the bounded uniform metric $\bar\rho(v,w)=\sup_{t\in S}\min\{d(v(t),w(t)),1\}$. [[math:thm-function-space-is-complete-for-a-complete-target]]

[F5] The interval $[0,T]$ is compact, as recorded in the time-space supplier. A continuous map from a compact metric space into any metric space is uniformly continuous. [[def-se-foundation-time-function-spaces]] [[math:thm-heine-cantor-metric]]



[F6] Under Countable Choice, [[math:thm-complex-lp-completeness-and-almost-everywhere-subsequences]] gives completeness of complex $L^2$ on every measure space and an almost-everywhere convergent subsequence of measurable representatives for every norm-convergent sequence. Apply it on the completed product of time Lebesgue measure and restricted spatial Lebesgue measure; the stated AC assumption supplies Countable Choice. No Bochner measurability into spatial $L^\infty$ is required.

**Given:** The geometry, $T$ and the spaces in the definition.

**Goal:** The definition and norm are independent of representatives and $X_T$ is complete.

1.1 If $U$ and $V$ are compatible representatives of the same path, their spatial sections agree almost everywhere for almost every time. Completed-product Tonelli applied to their measurable disagreement set shows that $U=V$ product-almost everywhere. Thus F2 makes the mixed norm independent of the representative. F1 and F2 give the vector-space and norm axioms; in particular, a zero supremum term makes the continuous path identically zero. [given, F1, F2]

2.1 Let $(u_j)$ be Cauchy in $X_T$. Apply F4 with $S=[0,T]$, $Y=H^1_0(\Omega)$ and $d(v,w)=\|v-w\|_{H^1_0}$; $S$ is nonempty and F1 makes $Y$ complete. The sequence is Cauchy for $\bar\rho$, since this metric is bounded above by the supremum norm distance, so F4 gives a continuous limit $u$. When $\bar\rho(u_j,u)<1$, every pointwise norm distance equals its truncation and their supremum equals $\bar\rho(u_j,u)$. Thus $u_j\to u$ uniformly in the $H^1_0$ norm. Choose a subsequence $(u_{j_k})$ whose successive $X_T$ distances are at most $2^{-k}$ and choose compatible jointly measurable representatives $U_k$. Put $a_k(t)=\operatorname*{ess\,sup}_x|U_{k+1}(t,x)-U_k(t,x)|$. Minkowski and monotone convergence give $a=\sum_k a_k\in L^4(0,T)$. For almost every $t$, the sum is finite and, outside a product-null set, every successive difference is bounded by its corresponding $a_k(t)$. Hence $U_k$ converges product-almost everywhere to a measurable $U$, and $\operatorname*{ess\,sup}_x|U(t,x)-U_k(t,x)|\le\sum_{\ell\ge k}a_\ell(t)$ for almost every $t$. The $L^4$ norm of this tail is at most $\sum_{\ell\ge k}2^{-\ell}$, so $U_k\to U$ in the mixed norm. [given, F1, F2, F3, F4, step 1.1]

3.1 The inequality $\|v\|_{L^2(\Omega)}\le\|v\|_{H^1_0(\Omega)}$ makes $u$ continuous into $L^2(\Omega)$. By F5 it is uniformly continuous on $[0,T]$. For each $m\ge1$, choose a finite time-step path $s_m$ with values in $L^2(\Omega)$ and $\sup_t\|s_m(t)-u(t)\|_2<2^{-m}$, by a partition whose mesh is smaller than a uniform-continuity radius. Choose measurable spatial representatives for the finitely many values and denote the resulting jointly measurable time-step function by $V_m(t,x)$. Tonelli gives $\|V_m-V_l\|_{L^2((0,T)\times\Omega)}\le T^{1/2}(2^{-m}+2^{-l})$. F6 therefore gives a product $L^2$ limit $V$ with a measurable representative. Tonelli also makes $V(t,\cdot)$ an $L^2(\Omega)$ class for almost every $t$. Choose a subsequence with $\sum_k\|V_{m_k}-V\|_{L^2((0,T)\times\Omega)}^2<\infty$. Tonelli and monotone convergence show that $\sum_k\|V_{m_k}(t,\cdot)-V(t,\cdot)\|_2^2<\infty$ for almost every $t$. Hence $s_{m_k}(t)\to[V(t,\cdot)]$ in spatial $L^2$ there. Since $s_m(t)\to u(t)$ uniformly in that norm, uniqueness of the norm limit gives $[V(t,\cdot)]=u(t)$ for almost every $t$. This establishes the representative identification after constructing the product limit. [given, F1, F2, F3, F5, F6, step 2.1]

4.1 By the row identification in step 3.1 and Tonelli, the compatible representatives $U_k$ from step 2.1 satisfy $\|U_k-V\|_{L^2((0,T)\times\Omega)}^2=\int_0^T\|u_{j_k}(t)-u(t)\|_2^2dt\to0$, because the paths converge uniformly in $H^1_0$. F6 gives a further subsequence of these complex product $L^2$ classes converging to $V$ product-almost everywhere. Their previously chosen representatives may be retained, since the countable union of their disagreements with the representatives supplied by F6 is null. But step 2.1 already gives $U_k\to U$ product-almost everywhere. Thus $U=V$ product-almost everywhere; Tonelli makes $U(t,\cdot)$ a representative of $u(t)$ for almost every $t$. Therefore $u\in X_T$, and step 2.1 gives convergence of the chosen subsequence in both terms of the $X_T$ norm. The triangle inequality and the original Cauchy property give convergence of the whole sequence. Hence $X_T$ is Banach. [F1, F2, F6, step 2.1, step 3.1] ∎

## Source notes

The original article is cited for the definition and notation in Proposition 3.9, not as proof of completeness. The mixed-norm convention above makes the measurable representative explicit and does not silently replace it by a Bochner $L^4(0,T;L^\infty(\Omega))$ condition.
