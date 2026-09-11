---
id: "thm-cramer-wold-device"
kind: "theorem"
title: "Cramer wold device"
deps: ["def-characteristic-function-of-a-real-random-variable", "cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms", "thm-fourier-transform-of-a-finite-complex-measure", "thm-continuous-mapping-theorem", "cor-weakly-convergent-sequences-are-tight", "thm-prokhorov-tightness-theorem-on-polish-spaces", "def-weak-convergence-of-borel-probability-measures", "def-axiom-of-choice", "thm-finite-and-countable-subadditivity-of-measures", "thm-euclidean-space-complete", "def-polish-space", "thm-rationals-countable", "lem-rat-embeds-dense", "thm-product-of-countable", "thm-heine-borel-rn", "thm-levy-continuity-theorem-forward-direction"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $d\ge1$ be a finite integer and $p_\theta(x)=\theta\cdot x$ for $\theta\in\mathbb R^d$. Borel probability laws on $\mathbb R^d$ are determined by all the laws $(p_\theta)_*\mu$. Moreover, if $(p_\theta)_*\mu_n\Rightarrow(p_\theta)_*\mu$ for every $\theta$ and a specified Borel probability law $\mu$, then $\mu_n\Rightarrow\mu$. If dimension zero is admitted, interpret $\mathbb R^0$ as the singleton empty tuple; both conclusions then hold as well.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Characteristic functions are expectations of the complex exponential. [[def-characteristic-function-of-a-real-random-variable]].

[F2] AC gives uniqueness of finite-variation Borel measures in every positive finite dimension. [[cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms]].

[F3] The Fourier convention in dimension d is exp(-2 pi i x dot xi). [[thm-fourier-transform-of-a-finite-complex-measure]].

[F4] A continuous map carries weak convergence to weak convergence. [[thm-continuous-mapping-theorem]].

[F5] Under AC a weakly convergent sequence on a Polish space is tight. [[cor-weakly-convergent-sequences-are-tight]].

[F6] Under AC tight sequences on Polish spaces have weakly convergent subsequences. [[thm-prokhorov-tightness-theorem-on-polish-spaces]].

[F7] Weak convergence is tested by bounded continuous real functions. [[def-weak-convergence-of-borel-probability-measures]].

[F8] AC covers Prokhorov and the finite-dimensional Fourier uniqueness proof. [[def-axiom-of-choice]].

[F9] A finite union has measure at most the sum of its measures. [[thm-finite-and-countable-subadditivity-of-measures]].

[F10] Euclidean spaces in positive finite dimension are complete. [[thm-euclidean-space-complete]].

[F11] Separable completely metrizable spaces are Polish. [[def-polish-space]].

[F12] The rationals are countable. [[thm-rationals-countable]].

[F13] Rationals approximate every real coordinate. [[lem-rat-embeds-dense]].

[F14] Finite products of countable sets remain countable by iteration. [[thm-product-of-countable]].

[F15] Closed boxes are compact; compact real sets are bounded. [[thm-heine-borel-rn]].

[F16] One-dimensional weak convergence yields pointwise convergence of characteristic functions. [[thm-levy-continuity-theorem-forward-direction]].

## Proof

**Proof technique:** direct.

1.1 Write $\Phi_\rho(\theta)=\int e^{i\theta\cdot x}\,\rho(dx)$. The map $p_\theta$ is continuous: $|p_\theta(x)-p_\theta(y)|\le(\sum_{j=1}^d|\theta_j|)\|x-y\|_2$. Hence its pushforward is a Borel probability, and $\Phi_\rho(\theta)=\varphi_{(p_\theta)_*\rho}(1)$. In particular $\widehat\rho(\xi)=\Phi_\rho(-2\pi\xi)$. Positive probability measures have total variation one, since the absolute masses of any measurable partition sum to one. Thus if all projection laws of $\rho$ and $\tau$ agree, their finite-dimensional Fourier transforms agree at every $\xi$; the finite-measure uniqueness theorem gives $\rho=\tau$. The zero projection has the law of the constant zero and introduces no exception. [F1, F2, F3]

1.2 Euclidean space is complete. The set $\mathbb Q^d$ is countable by induction using the product theorem, and dense: approximate each of the finitely many coordinates of $x$ within $\eta/(2d)$ by a rational to get a vector within Euclidean distance $\eta$. Thus $\mathbb R^d$, and in particular $\mathbb R$, is Polish. For each coordinate vector $e_j$, the assumed convergence and the tightness corollary give a compact real set with uniform complement mass below $\varepsilon/(2d)$ for all projected laws. Enlarge each such bounded compact set to $[-R_j,R_j]$. For the compact box $K=\prod_{j=1}^d[-R_j,R_j]$, finite subadditivity yields $$\mu_n(K^c)\le\sum_{j=1}^d\mu_n\{|x_j|>R_j\}<\varepsilon/2<\varepsilon.$$ This proves tightness of the original laws, not just of their projections. [F5, F9, F10, F11, F12, F13, F14, F15]

2.1 Prokhorov gives a weakly convergent further subsequence from every subsequence; write one such limit as $\nu$. For fixed $\theta$, continuous mapping gives convergence of its projected laws to $(p_\theta)_*\nu$, whereas the hypothesis gives convergence to $(p_\theta)_*\mu$. Apply the one-dimensional forward theorem to these two convergences at frequency one: the same numerical sequence has limits $\Phi_\nu(\theta)$ and $\Phi_\mu(\theta)$, so they are equal. This is true for every $\theta$. The Fourier identity and uniqueness argument of step 1.1 give $\nu=\mu$. [step 1.1, step 1.2, F4, F6, F16]

3.1 If convergence failed for a bounded continuous real test $f$, some positive error threshold would be exceeded at infinitely many indices. List those indices increasingly using the least next one. Step 2.1 supplies a further weakly convergent subsequence with limit $\mu$, contradicting that fixed error bound. Hence all such tests converge, which is $\mu_n\Rightarrow\mu$. AC is inherited from tightness/Prokhorov and finite-dimensional Fourier uniqueness, including its countable-choice transform and smoothing prerequisites; only finitely many coordinate choices are made locally. For $d=1$ the argument is unchanged. For $d=0$ the space is one point with zero metric and its only probability is unit mass there, so equality and convergence are immediate without a maximum over an empty coordinate set. Point masses in positive dimension are also covered. [step 2.1, F7, F8] ∎
