---
id: ex-ip-finite-dimensional-small-ball-map-equals-density-mode
kind: example
title: Finite-dimensional small-ball MAP equals the density mode
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-small-ball-map-estimator
  - def-ip-misfit-evidence-and-posterior-law
  - def-axiom-of-choice
  - def-countable-choice
  - def-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-borel-sets-are-lebesgue-measurable
  - prop-measure-monotonicity
  - def-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "M. Dashti, K. J. H. Law, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems"
      url: "https://arxiv.org/pdf/1303.4795"
      locator: "§2, finite-dimensional density definition and motivation; §3, Definition 3.1 and Theorem 3.2."
    - title: "H. Kekkonen and Y. Korolev, Inverse Problems, lecture notes"
      url: "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf"
      locator: "§7.5, Theorems 7.5.2–7.5.3 for the finite-dimensional and Gaussian small-ball relation."
axiom_use: "AC is assumed for the repository's nondegenerate multivariate normal and density interfaces; it also supplies countable choice for the positive-finite Lebesgue ball-volume result. The ball-average limit itself uses continuity and translation-invariant ball volumes."
generation:
  role: example
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Assume the Axiom of Choice. Take the parameter space and prior domain to be $B=D=\mathbb R^d$ with the Euclidean norm. Let $d,m\ge1$, let $C$ and $\Gamma$ be symmetric positive-definite real matrices of sizes $d\times d$ and $m\times m$, let $A$ be an $m\times d$ real matrix, and observe the fixed datum $y=Au+\eta$ with prior $u\sim N(0,C)$ and independent noise $\eta\sim N(0,\Gamma)$. Define $\Phi_y(u)=\tfrac12(y-Au)^T\Gamma^{-1}(y-Au)$ and $I_y(u)=\Phi_y(u)+\tfrac12u^TC^{-1}u$. The posterior has a positive continuous Lebesgue density proportional to $e^{-I_y(u)}$; its density mode is the unique minimizer of $I_y$ and is a strong small-ball MAP.

## Example references

[[def-ip-small-ball-map-estimator|the strong small-ball MAP is defined by ratios to the largest ball probability]]

[[def-ip-misfit-evidence-and-posterior-law|the fixed-data posterior normalizes likelihood-weighted prior mass]]

## Facts & Assumptions

**Given:** AC, positive-definite covariance matrices $C,\Gamma$, a matrix $A$, the Gaussian prior $N(0,C)$, independent Gaussian observation noise $N(0,\Gamma)$, and datum $y$.

[A1] AC is assumed by the repository's normal-law and density interfaces. [[def-axiom-of-choice]]

[F1] A positive-definite multivariate normal has density proportional to $\exp(-\tfrac12(x-m)^T\Sigma^{-1}(x-m))$, and the fixed-data posterior normalizes the likelihood-weighted prior. [[def-multivariate-normal-law]], [[thm-nondegenerate-multivariate-normal-law-has-density]], [[def-ip-misfit-evidence-and-posterior-law]]

[F2] A centered finite-dimensional Gaussian minimizes every bounded symmetric quasi-convex loss at its mean; applying the indicator of the complement of a closed Euclidean ball shows that a Gaussian ball probability is maximized at its mean. [[lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss]]

[F3] A strong small-ball MAP maximizes small-ball probabilities asymptotically relative to their supremum over all centers. [[def-ip-small-ball-map-estimator]]

[F4] Translation preserves Lebesgue measure, so Euclidean balls of the same radius have equal volume. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F5] Write $B(z,r)=\{x:\|x-z\|_2<r\}$ and $\overline B(z,r)=\{x:\|x-z\|_2\le r\}$. AC implies countable choice. Every open Euclidean ball has positive finite Lebesgue measure; each closed Euclidean ball is Borel and hence measurable, and $B(z,r)\subseteq\overline B(z,r)\subseteq B(z,2r)$. Monotonicity therefore gives $0<\lambda(\overline B(z,r))<\infty$. [[def-axiom-of-choice]], [[def-countable-choice]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-borel-sets-are-lebesgue-measurable]], [[prop-measure-monotonicity]]

[F6] The nonnegative Lebesgue integral is monotone and homogeneous for positive scalars. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

## Verification

1.1 By [F1], the prior and noise have positive continuous Gaussian densities proportional to $\exp(-\tfrac12u^TC^{-1}u)$ and $\exp(-\tfrac12(y-Au)^T\Gamma^{-1}(y-Au))$, respectively. For any $w$, $w^T\Gamma^{-1}w\ge0$: write $w=\Gamma v$, so $w^T\Gamma^{-1}w=v^T\Gamma v\ge0$. Thus $\Phi_y\ge0$ and $e^{-\Phi_y}\le1$, so the evidence is finite by [F6] and the fact that the prior is a probability. Write $f_0$ for the prior density. The function $f_0$ is positive and continuous at $0$, and $e^{-\Phi_y}$ is also positive and continuous there. On a sufficiently small open ball $O$ about $0$, there are constants $c_0,c_1>0$ with $f_0\ge c_0$ and $e^{-\Phi_y}\ge c_1$. By [F5], $\lambda(O)>0$; [F6] then gives $N(0,C)(O)=\int_O f_0\,d\lambda\ge c_0\lambda(O)>0$ and $Z\ge c_1N(0,C)(O)>0$. The posterior update [F1] is therefore defined. Its Lebesgue density is proportional to the product of the prior density and likelihood, hence to $e^{-I_y(u)}$. Put $Q=C^{-1}+A^T\Gamma^{-1}A$. For $v\ne0$, $v^TQv=v^TC^{-1}v+(Av)^T\Gamma^{-1}(Av)>0$: if $z=C^{-1}v$, then $v^TC^{-1}v=z^TCz>0$, and the second term is nonnegative by the preceding argument. Thus $Q$ is positive definite. Completing the square gives the unique minimizer $m=Q^{-1}A^T\Gamma^{-1}y$, and the posterior is the nondegenerate Gaussian $N(m,Q^{-1})$. [A1, F1, F5, F6, given, algebra]

2.1 For every $r>0$, apply [F2] to this posterior and the loss $L_r(x)=\mathbf1_{\{\|x\|_2>r\}}$. Its sublevel sets are the closed radius-$r$ ball and the whole space, so it is bounded, symmetric and quasi-convex. Thus every ball of radius $r$ has posterior mass at most the ball centered at $m$, and the supremum in [F3] is attained at $m$. Consequently $m$ is a strong small-ball MAP. [F2, F3, step 1.1, given]

3.1 Let $q$ be the positive continuous posterior density. By [F5], every closed Euclidean ball has positive finite Lebesgue measure; the inclusions $B(z,r)\subseteq\overline B(z,r)\subseteq B(z,2r)$ and the open-ball result in [F5] give the volume bounds, while [F4] makes the volumes of same-radius balls equal. For any fixed $z\in\mathbb R^d$, the absolute difference between $\lambda(\overline B(z,r))^{-1}\Pi(\overline B(z,r))$ and $q(z)$ is at most $\sup_{\|x-z\|_2\le r}|q(x)-q(z)|$, by [F6]; this tends to zero by continuity. The same holds at any $v$, and the common ball volume cancels; hence $\Pi(\overline B(z,r))/\Pi(\overline B(v,r))\to q(z)/q(v)$. Since $q$ is proportional to $e^{-I_y}$, the finite-dimensional small-ball ratio agrees with the density and Onsager–Machlup comparison. [F1, F4, F5, F6, step 1.1, given, algebra] ∎
