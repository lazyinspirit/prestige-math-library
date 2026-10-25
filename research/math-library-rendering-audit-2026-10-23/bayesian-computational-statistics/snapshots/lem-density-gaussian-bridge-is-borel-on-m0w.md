---
dependency_level: 3
id: lem-density-gaussian-bridge-is-borel-on-m0w
kind: lemma
title: A bounded-density Gaussian bridge has a Borel multiscale law
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - cor-markov-inequality-for-random-variables
  - def-axiom-of-choice
  - def-multiscale-coefficient-space-m0w
  - lem-characteristic-function-of-a-normal-law
  - lem-m0w-separable-and-projection-tails
  - thm-dominated-convergence
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel
  - thm-uniqueness-of-a-law-from-its-characteristic-function
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Full AC is inherited from the Gaussian cylinder construction and normal-law uniqueness.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, §2.1 and Theorem 1
      url: https://arxiv.org/pdf/1310.2484
---

## Statement

Assume AC. Let $P_0$ have density $0\le f_0\le D<\infty$ on $[0,1]$, and let $(\psi_{lk})$ be an orthonormal wavelet system with at most $C2^l$ coordinates per level, including finitely many coarsest scaling coordinates. The Haar system is allowed. For every admissible $w$, there exists a Borel centered Gaussian random element $G_{P_0}$ of $M_0(w)$ with coefficient covariance
$$K((l,k),(l',k'))=P_0[(\psi_{lk}-P_0\psi_{lk})(\psi_{l'k'}-P_0\psi_{l'k'})].$$
Its Borel law is uniquely determined by these finite-coordinate Gaussian laws.

## Facts & Assumptions

**Given:** AC, the bounded density, orthonormal system, finite level multiplicities, and admissible weights in the Statement.

[F1] [[thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel]] constructs a Gaussian coordinate process for any symmetric positive-semidefinite kernel under AC.

[F2] [[lem-m0w-separable-and-projection-tails]]: $M_0(w)$ is a separable Banach space; its coordinate projections $P_J$ are contractions and converge pointwise in norm to the identity.

[F3] [[lem-characteristic-function-of-a-normal-law]] and [[thm-uniqueness-of-a-law-from-its-characteristic-function]]: centered scalar normals have characteristic function $e^{-vt^2/2}$ and are determined by it under AC.

[F4] [[cor-markov-inequality-for-random-variables]] and [[thm-finite-and-countable-subadditivity-of-measures]] give exponential tail and union bounds.

[F5] [[thm-dominated-convergence]] passes bounded almost-sure limits through expectation.

## Proof

**Given:** The hypotheses in the Statement, including full AC.

1.1 The displayed kernel is symmetric and positive semidefinite because for any finite coefficients $a_j$, $\sum_{i,j}a_i a_jK(i,j)=P_0[\sum_j a_j(\psi_j-P_0\psi_j)]^2\ge0$. Thus [F1] constructs a centered jointly Gaussian coordinate sequence $Z$ with this covariance. Each coordinate variance is at most $P_0\psi_{lk}^2\le D$. [F1, given, algebra]

2.1 For a centered normal of variance $v\le D$, completing the square in its normal density gives $\mathbb E e^{tZ}=e^{vt^2/2}$; at $v=0$ the variable is zero almost surely. Exponential Markov with $t=u/D$ therefore gives $\Pr(|Z|>u)\le2e^{-u^2/(2D)}$ when $D>0$, as it is for a probability density. Consequently $\Pr\{\max_k|Z_{lk}|>R\sqrt{l+1}\}\le2C2^l e^{-R^2(l+1)/(2D)}$. Choose $R$ with $R^2/(2D)>2\log2$. The sum over $l$ is finite, and the union bound over $l\ge J$ tends to zero. The probability that infinitely many of these events occur is therefore zero, since that event is contained in every such tail union. [F3, F4, step 1.1, algebra]

3.1 Almost surely the normalized maxima $\max_k|Z_{lk}|/w_l$ tend to zero, by step 2.1 and admissibility $w_l/\sqrt{l+1}\to\infty$; each of the finitely many remaining coordinates is finite. The event $E=\{Z\in M_0(w)\}$ is coordinate-measurable, since the little-o condition is expressed by countable unions and intersections of the inequalities $\max_k|Z_{lk}|/w_l\le1/q$. It has probability one. Define $G=Z$ on $E$ and $G=0$ otherwise. Its finite projections are measurable finite-dimensional random elements and converge everywhere in the separable Banach space [F2]. Hence $G$ is Borel measurable: for every closed set $F$, the measurable functions $d(P_JG,F)$ converge to $d(G,F)$; inverse images of closed sets are thus measurable, and closed sets generate the Borel sigma-algebra. [F2, step 2.1, construct, algebra]

4.1 Let $L$ be any continuous real linear functional on $M_0(w)$. Then $L(P_JG)\to L(G)$ almost surely, and each approximant is centered normal with some variance $v_J$. These variances are bounded. Indeed, almost-sure convergence makes the laws tight: choose $M$ so that $\Pr\{\sup_J|L(P_JG)|>M\}<1/2$, using that the supremum is finite almost surely. If $v_J\to\infty$ on a subsequence, the normal density bound would give $\Pr(|L(P_JG)|\le M)\le2M/\sqrt{2\pi v_J}\to0$, a contradiction. Any convergent subsequence of $(v_J)$ with limit $v$ gives, by [F3] and [F5], $\mathbb E e^{itL(G)}=e^{-vt^2/2}$. Taking $t=1$ shows that all subsequential variance limits coincide. Thus $v_J\to v\ge0$, and [F3] identifies $L(G)$ as $N(0,v)$. Therefore $G$ is a centered Borel Gaussian random element. [F2, F3, F5, step 3.1, algebra]

5.1 Its coordinate covariance and finite Gaussian laws are unchanged by the null-set modification in step 3.1. Finally the Borel sigma-algebra of $M_0(w)$ equals the sigma-algebra generated by its countably many coordinates: the norm is their countable weighted supremum, so all open balls about a countable dense set are coordinate-measurable, and these balls generate the topology. Thus two Borel laws with the same finite-coordinate laws agree, by uniqueness of the cylinder law in [F1] restricted to this measurable space. This proves existence and uniqueness of the stated bridge law. [F1, F2, step 3.1, step 4.1, algebra] ∎
