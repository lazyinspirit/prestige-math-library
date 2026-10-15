---
id: thm-projected-empirical-process-clt-in-m0w
kind: theorem
title: Projected empirical bridge CLT in the little-o multiscale space
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-multiscale-coefficient-space-m0w
  - lem-m0w-separable-and-projection-tails
  - lem-m0w-finite-projection-and-tail-bvm-criterion
  - thm-multivariate-iid-central-limit-theorem
  - def-identically-distributed-and-iid-random-variables
  - lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces
  - thm-finite-and-countable-subadditivity-of-measures
  - cor-markov-inequality-for-random-variables
  - thm-continuity-from-above-for-measures
  - def-axiom-of-choice
axiom_use: "AC is inherited from the finite-dimensional multivariate iid CLT. The coefficient tail bounds, finite union bounds and projection argument add no choice use."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, Theorem 1, equations (15)–(17), and §5.1"
      url: https://arxiv.org/pdf/1310.2484
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §§3.7 and 7.4"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Assume AC. Let $P_0$ have a density $f_0$ on $[0,1]$ with $\|f_0\|_\infty\le B<\infty$. Let $(\psi_{lk})$ be an orthonormal, compactly supported wavelet basis with $2^l$ coefficients at level $l\ge1$, uniformly bounded overlap, and $\|\psi_{lk}\|_\infty\le C_0 2^{l/2}$. Suppose for some $\gamma>1/2$,
$$\max_k|\langle f_0,\psi_{lk}\rangle|\le C_f2^{-l(\gamma+1/2)}.$$
Let $w_l\ge1$ be nondecreasing and admissible in [[def-multiscale-coefficient-space-m0w]], and choose either cutoff regime
$$2^{L_n}\asymp n^{1/(2\gamma+1)}\quad\text{or}\quad 2^{L_n}\asymp(n/\log n)^{1/(2\gamma+1)}.$$
For IID $X_1,\ldots,X_n\sim P_0$, define the finite wavelet projection $P_n(L_n)$ by coefficients $\langle P_n(L_n),\psi_{lk}\rangle=P_n\psi_{lk}:=n^{-1}\sum_{i=1}^n\psi_{lk}(X_i)$ for $l\le L_n$ and zero for $l>L_n$, with the coarsest scaling coordinates projected as well. Let $G_{P_0}$ be a Borel centered Gaussian law on $M_0(w)$ whose coefficient covariance is
$$\operatorname{Cov}(G_{lk},G_{l'k'})=P_0[(\psi_{lk}-P_0\psi_{lk})(\psi_{l'k'}-P_0\psi_{l'k'})].$$
Then
$$\sqrt n\{P_n(L_n)-f_0\}\Rightarrow G_{P_0}\quad\text{in }M_0(w).$$

## Facts & Assumptions

**Given:** AC, the density and wavelet bounds, the coefficient smoothness and cutoff conditions, IID observations, and the stated Borel Gaussian bridge law.

[F1] [[def-multiscale-coefficient-space-m0w]]: $M_0(w)$ uses the norm $\sup_l w_l^{-1}\max_k|x_{lk}|$, with normalized level maxima tending to zero.

[F2] [[lem-m0w-separable-and-projection-tails]]: square-summable coefficient sequences lie in $M_0(w)$, and finite-level projections converge in its norm.

[F3] [[lem-m0w-finite-projection-and-tail-bvm-criterion]]: convergence of every fixed finite projection together with vanishing tails under the approximating and limit laws implies bounded-Lipschitz convergence on $M_0(w)$.

[F4] [[thm-multivariate-iid-central-limit-theorem]]: under AC, finite-second-moment IID vectors have the multivariate normal limit with their covariance, including singular covariance.

[F5] [[lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces]]: on finite-dimensional Euclidean space, weak convergence of Borel probabilities implies convergence in bounded-Lipschitz distance.

[F6] [[thm-finite-and-countable-subadditivity-of-measures]]: a probability of a finite union is bounded by the sum of the component probabilities.

[F7] [[cor-markov-inequality-for-random-variables]]: for nonnegative $Y$ and $a>0$, $\Pr(Y\ge a)\le\mathbb E[Y]/a$.

[F8] [[thm-continuity-from-above-for-measures]]: probabilities of decreasing measurable sets with finite first measure converge to the probability of their intersection.

[F9] [[def-identically-distributed-and-iid-random-variables]]: IID means the observations are mutually independent and have a common law.

[A1] [[def-axiom-of-choice]]: AC is the stated axiom used by [F4] for finite-dimensional CLTs; no common null set over all directions is required because each projection level $J$ is fixed.

[A2] The basis satisfies the uniform support, overlap, coefficient-count and sup-norm bounds in the Statement.

[A3] The truth coefficients satisfy the displayed $C_f2^{-l(\gamma+1/2)}$ bound.

## Proof

**Given:** The probability law, basis, coefficient smoothness, admissible weights, cutoff, Gaussian limit law, and AC hypothesis in the Statement.


1.1 $P_n(L_n)$ has finitely many nonzero coefficients, so it is in $M_0(w)$. The coefficient sequence of $f_0$ is square-summable by Parseval, so [F2] places it in $M_0(w)$. Thus $U_n=\sqrt n\{P_n(L_n)-f_0\}$ is a well-defined $M_0(w)$-valued random element. [F2, given, algebra]

1.2 Fix $J$. For all sufficiently large $n$, $L_n\ge J$, so the coordinates of $P_JU_n$ are $n^{-1/2}\sum_{i=1}^n(\psi_{lk}(X_i)-P_0\psi_{lk})$ for the finitely many indices through level $J$. The vector summand is bounded by [A2], has finite second moment, and is IID by [F9]; its covariance is the displayed covariance of $G_{P_0}$. By [F4] these finite-dimensional vectors converge weakly to the corresponding Gaussian projection. The projection space is finite-dimensional Euclidean with an equivalent weighted maximum norm, so [F5] gives convergence in bounded-Lipschitz distance for every fixed $J$. [A1, A2, F4, F5, F9, given]

1.3 Let $Y_i=\psi_{lk}(X_i)-P_0\psi_{lk}$. Then $\mathbb EY_i=0$, $\mathbb EY_i^2\le P_0\psi_{lk}^2\le B$, and $|Y_i|\le2C_0 2^{l/2}=:b_l$ by [A2]. For $m\ge2$, $\mathbb E|Y_i|^m\le b_l^{m-2}\mathbb EY_i^2$. Since $m!\ge2\,3^{m-2}$, expansion of the exponential gives, for $0<\lambda b_l<3\sqrt n$, $\mathbb E\exp(\lambda n^{-1/2}\sum_{i=1}^nY_i)\le\exp(\lambda^2B/[2(1-\lambda b_l/(3\sqrt n))])$. Applying [F7] to this exponential and optimizing at $\lambda=t/(B+b_lt/(3\sqrt n))$ yields $P_0^n\{|\sqrt n(P_n-P_0)\psi_{lk}|>t\}\le2\exp(-t^2/[2(B+b_lt/(3\sqrt n))])$. Applying the same argument to $-Y_i$ supplies the lower-tail bound. [A2, F7, given, algebra]

1.4 Above the cutoff, $U_n$ has only the deterministic bias coefficients $-\sqrt n\langle f_0,\psi_{lk}\rangle$. By [A3] and monotonicity of $w_l$, $\sup_{l>L_n,k}\sqrt n|\langle f_0,\psi_{lk}\rangle|/w_l\le C_f\sqrt n\,2^{-L_n(\gamma+1/2)}/w_{L_n}$. For the first cutoff regime the numerator is bounded, while $w_{L_n}\to\infty$. For the second, the numerator is $O(\sqrt{\log n})$ and $\sqrt{L_n}\asymp\sqrt{\log n}$; admissibility $w_{L_n}/\sqrt{L_n}\to\infty$ again makes the ratio vanish. [A3, F1, given, algebra]

2.1 Fix $\varepsilon>0$. By [F6] and step 1.3, $P_0^n\{\max_{J<l\le L_n,k}|\sqrt n(P_n-P_0)\psi_{lk}|/w_l>\varepsilon\}\le\sum_{J<l\le L_n}2^{l+1}\exp(-\varepsilon^2w_l^2/[2(B+(2C_0\varepsilon/3)2^{l/2}w_l/\sqrt n)])$. For levels with $2^{l/2}w_l/\sqrt n\le1$, the denominator is bounded by a constant depending only on $B,C_0,\varepsilon$. Their sum is bounded by $\sum_{l>J}2^{l+1}e^{-c_\varepsilon w_l^2}$, which tends to zero as $J\to\infty$: admissibility gives $w_l^2/l\to\infty$, so the summand is eventually bounded by $2^{-l}$. [F1, F6, step 1.3, given, algebra]

3.1 For the remaining levels $2^{l/2}w_l/\sqrt n>1$, the exponent in step 2.1 is at least $c_\varepsilon w_l\sqrt n/2^{l/2}\ge c_\varepsilon\sqrt n/2^{L_n/2}$. Their total contribution is at most $2^{L_n+2}\exp(-c_\varepsilon\sqrt n/2^{L_n/2})$, which tends to zero. Indeed $L_n=O(\log n)$ and either cutoff gives $\sqrt n/2^{L_n/2}\ge c n^{\gamma/(2\gamma+1)}$ for all large $n$ after decreasing $c>0$ if needed; this polynomial growth dominates $L_n\log2$. [step 2.1, given, algebra]

4.1 The two threshold classes partition all levels $J<l\le L_n$. The low-threshold sum tends to zero as $J\to\infty$ by step 2.1, and the high-threshold sum tends to zero as $n\to\infty$ by step 3.1. Therefore the centered empirical-fluctuation tails vanish in the iterated limit $n\to\infty$, then $J\to\infty$. [step 2.1, step 3.1, algebra]

5.1 For the fixed Gaussian law $G_{P_0}$, [F2] gives $\|G_{P_0}-P_JG_{P_0}\|_{M(w)}\to0$ pointwise. Hence the events $\{\|G_{P_0}-P_JG_{P_0}\|_{M(w)}>\varepsilon\}$ decrease to the empty set; [F8] makes their probabilities tend to zero. Steps 4.1 and 1.4 give the matching posterior-tail condition for the laws of $U_n$. [F2, F8, step 4.1, step 1.4]

6.1 For each fixed $J$, step 1.2 gives convergence of the projected laws in bounded-Lipschitz distance; steps 4.1 and 1.4 give vanishing tails for $U_n$, and step 5.1 gives vanishing tails for $G_{P_0}$. Applying [F3] to these laws proves $\beta_{BL}(\mathcal L(U_n),G_{P_0})\to0$, which is the asserted weak convergence on $M_0(w)$. [F3, step 1.2, step 4.1, step 1.4, step 5.1] ∎
