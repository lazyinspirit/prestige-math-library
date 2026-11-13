---
id: prop-se-invisible-finite-dimensional
kind: proposition
domain: mathematics
title: Finite dimensionality of invisible spaces
status: draft
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-invisible-space
  - def-se-control-cutoffs
  - def-se-compact-remainder
  - def-se-foundation-weak-compactness-language
  - lem-se-positive-spectral-scale-contract
  - lem-se-3-2
  - lem-se-3-3
  - math:cor-hilbert-spaces-are-reflexive
  - math:cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence
  - math:thm-metric-compactness-equivalences
  - math:cor-infinite-dimensional-closed-unit-ball-is-not-compact
  - math:def-axiom-of-choice
  - math:def-metric-compactness
  - math:def-dimension
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-invisible-space: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-compact-remainder: mathematical-premise
  def-se-foundation-weak-compactness-language: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  lem-se-3-2: mathematical-premise
  lem-se-3-3: mathematical-premise
  math:cor-hilbert-spaces-are-reflexive: mathematical-premise
  math:cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence: mathematical-premise
  math:thm-metric-compactness-equivalences: mathematical-premise
  math:cor-infinite-dimensional-closed-unit-ball-is-not-compact: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-metric-compactness: mathematical-premise
  math:def-dimension: mathematical-premise
provenance:
  statement: literature-derived
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
  - def-se-invisible-space
  - def-se-control-cutoffs
  - def-se-compact-remainder
  - math:def-axiom-of-choice
  - math:def-metric-compactness
  - math:def-dimension
argument_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-invisible-space
  - def-se-control-cutoffs
  - def-se-compact-remainder
  - def-se-foundation-weak-compactness-language
  - lem-se-positive-spectral-scale-contract
  - lem-se-3-2
  - lem-se-3-3
  - math:cor-hilbert-spaces-are-reflexive
  - math:cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence
  - math:thm-metric-compactness-equivalences
  - math:cor-infinite-dimensional-closed-unit-ball-is-not-compact
  - math:def-axiom-of-choice
  - math:def-metric-compactness
  - math:def-dimension
---

## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and $\Theta$ is non-trapping in the generalized-ray sense. Fix $r>0$ with $\Theta\subset B_r(0)$ and an admissible pair of real cutoffs: $\varphi\in C^\infty(\mathbb R^n;[0,1])$ vanishes for $|x|\le r$, is positive for $|x|>r$, and equals one for $|x|\ge r+1$; $\psi\in C_c^\infty(\mathbb R^n;[0,1])$ equals one on $B_{r+2}(0)$ and has support in $B_{r+3}(0)$. Use this fixed $\varphi$ in the invisible space $N_T^\sigma$ and this fixed $\psi$ in the remainder $Q_\sigma$ throughout. Let $T>0$ and $\sigma\in[-2,2)$. The closed unit ball of the invisible space $N_T^\sigma\subset H_D^\sigma(\Omega)$ is compact in the norm of $H_D^\sigma(\Omega)$, and $N_T^\sigma$ is finite-dimensional.

## Statement references

[[def-se-nontrapping]]

[[def-se-control-cutoffs]]

[[def-se-invisible-space]]

[[def-se-compact-remainder]]

[[math:def-metric-compactness]]

[[math:def-dimension]]

## Facts & Assumptions

[F1] The scale $H_D^\sigma(\Omega)$ is the completion in the norm induced by the shifted Dirichlet Laplacian; it is a complex Hilbert space, with an onto isometric identification with the underlying $L^2$ Hilbert space supplied by the spectral-scale construction. [[def-se-dirichlet-scale]] [[lem-se-positive-spectral-scale-contract]]

[F2] With $W(t)=e^{it\Delta_D}$ and the fixed real observation cutoff $\varphi$, $N_T^\sigma$ consists of those $v_0\in H_D^\sigma$ for which $\varphi W(t)v_0=0$ for every $t\in[0,T]$. It is a closed complex linear subspace. [[def-se-control-cutoffs]] [[def-se-invisible-space]]

[F3] The nonnegative remainder $Q_\sigma$ is the squared time-space norm defined in [[def-se-compact-remainder]], using the fixed $\psi$ of the Statement. [[def-se-control-cutoffs]] Under the stated geometry and Choice, if $x_j\rightharpoonup x$ weakly in $H_D^\sigma$, then $Q_\sigma(x_j-x)\to0$. Weak convergence means convergence under every bounded scalar-linear functional. [[lem-se-3-2]] [[def-se-foundation-weak-compactness-language]]

[F4] Under the same hypotheses and for this fixed pair $\varphi,\psi$, the observation estimate is $\|x\|_{H_D^\sigma}^2\le C\left(\int_0^T\|\varphi W(t)x\|_{H_D^\sigma}^2dt+Q_\sigma(x)\right)$ for all $x\in H_D^\sigma$, with $C$ independent of $x$. [[def-se-control-cutoffs]] [[lem-se-3-3]]

[F5] Under Countable Choice every complex Hilbert space is reflexive; under the ultrafilter lemma, Dependent Choice and Hahn–Banach, every bounded sequence in a reflexive Banach space has a weakly convergent subsequence. The assumed Axiom of Choice supplies these principles. [[math:cor-hilbert-spaces-are-reflexive]] [[math:cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]] [[math:def-axiom-of-choice]]

[F6] Under Countable Choice and Dependent Choice, sequential compactness and compactness are equivalent for metric spaces. An infinite-dimensional normed space has a noncompact closed unit ball. [[math:thm-metric-compactness-equivalences]] [[math:cor-infinite-dimensional-closed-unit-ball-is-not-compact]] [[math:def-metric-compactness]] [[math:def-dimension]]

## Proof

[F1] The scale $H_D^\sigma(\Omega)$ is the completion in the norm induced by the shifted Dirichlet Laplacian; it is a complex Hilbert space, with an onto isometric identification with the underlying $L^2$ Hilbert space supplied by the spectral-scale construction. [[def-se-dirichlet-scale]] [[lem-se-positive-spectral-scale-contract]]

[F2] With $W(t)=e^{it\Delta_D}$ and the fixed real observation cutoff $\varphi$, $N_T^\sigma$ consists of those $v_0\in H_D^\sigma$ for which $\varphi W(t)v_0=0$ for every $t\in[0,T]$. It is a closed complex linear subspace. [[def-se-control-cutoffs]] [[def-se-invisible-space]]

[F3] The nonnegative remainder $Q_\sigma$ is the squared time-space norm defined in [[def-se-compact-remainder]], using the fixed $\psi$ of the Statement. [[def-se-control-cutoffs]] Under the stated geometry and Choice, if $x_j\rightharpoonup x$ weakly in $H_D^\sigma$, then $Q_\sigma(x_j-x)\to0$. Weak convergence means convergence under every bounded scalar-linear functional. [[lem-se-3-2]] [[def-se-foundation-weak-compactness-language]]

[F4] Under the same hypotheses and for this fixed pair $\varphi,\psi$, the observation estimate is $\|x\|_{H_D^\sigma}^2\le C\left(\int_0^T\|\varphi W(t)x\|_{H_D^\sigma}^2dt+Q_\sigma(x)\right)$ for all $x\in H_D^\sigma$, with $C$ independent of $x$. [[def-se-control-cutoffs]] [[lem-se-3-3]]

[F5] Under Countable Choice every complex Hilbert space is reflexive; under the ultrafilter lemma, Dependent Choice and Hahn–Banach, every bounded sequence in a reflexive Banach space has a weakly convergent subsequence. The assumed Axiom of Choice supplies these principles. [[math:cor-hilbert-spaces-are-reflexive]] [[math:cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]] [[math:def-axiom-of-choice]]

[F6] Under Countable Choice and Dependent Choice, sequential compactness and compactness are equivalent for metric spaces. An infinite-dimensional normed space has a noncompact closed unit ball. [[math:thm-metric-compactness-equivalences]] [[math:cor-infinite-dimensional-closed-unit-ball-is-not-compact]] [[math:def-metric-compactness]] [[math:def-dimension]]



**Given:** Choice, the geometry (H), the fixed admissible pair $\varphi,\psi$, $T>0$, and $\sigma\in[-2,2)$ as in the Statement.

**Goal:** Prove compactness of the closed unit ball of $N_T^\sigma$ and finite dimensionality of $N_T^\sigma$.

1.1 Let $(x_j)$ be any sequence in that unit ball. It is bounded in the ambient Hilbert space $H_D^\sigma$. By reflexivity and weak subsequence compactness, after passing to a subsequence it converges weakly to some $x\in H_D^\sigma$. The difference sequence is weakly null. [F1, F5, given]

2.1 For any two indices $j,k$ in this subsequence, linearity of $N_T^\sigma$ makes $x_j-x_k$ invisible. The observation term in F4 uses the same fixed $\varphi$ as $N_T^\sigma$ in F2 and therefore vanishes, giving $\|x_j-x_k\|_{H_D^\sigma}^2\le C Q_\sigma(x_j-x_k)$. Since $Q_\sigma$ is a squared norm of a linear image, its triangle inequality gives $Q_\sigma(x_j-x_k)^{1/2}\le Q_\sigma(x_j-x)^{1/2}+Q_\sigma(x_k-x)^{1/2}$. Both terms tend to zero by weak convergence and the compact-remainder lemma. Thus the subsequence is norm Cauchy. [F2, F3, F4, step 1.1]

3.1 Completeness of $H_D^\sigma$ gives a norm limit $y$. Norm convergence implies weak convergence by boundedness of every dual functional, so uniqueness of scalar limits gives $y=x$. Since $N_T^\sigma$ is norm closed and every $x_j$ has norm at most one, $x\in N_T^\sigma$ and $\|x\|_{H_D^\sigma}\le1$. Hence every sequence in the closed unit ball has a norm-convergent subsequence with limit in that ball. [F1, F2, step 2.1]

4.1 The norm induces a metric on the unit ball, so its sequential compactness implies compactness. With the inherited norm, $N_T^\sigma$ is a normed space and this is its closed unit ball. The noncompactness criterion for an infinite-dimensional normed space therefore implies that $N_T^\sigma$ is finite-dimensional. [F6, step 3.1] ∎

## Source notes

The original article is cited for attribution of the finite-dimensionality argument in the proof of Lemma 3.4, PDF page 11. The proof above uses the stated mathematical suppliers; it does not use the article's assertion as a premise.
