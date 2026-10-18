---
id: lem-complex-gaussian-interference-entropy-estimates
kind: lemma
title: Entropy estimates for complex Gaussian interference converses
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-axiom-of-choice, def-real-two-user-gaussian-interference-channel, lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing, lem-scalar-gaussian-channel-mutual-information-power-bound, lem-complex-scalar-gaussian-maximum-differential-entropy, lem-bounded-density-finite-second-moment-has-finite-differential-entropy]
aliases: []
proof_strategy: gaussian-degradation-and-linear-estimation
axiom_use: AC is inherited through the Gaussian-law and information-theoretic suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Raul H. Etkin, David N. C. Tse, and Hua Wang, Gaussian Interference Channel Capacity to Within One Bit
      url: https://arxiv.org/pdf/cs/0702045
      locator: Theorem 1, equations (16)–(18), and Theorem 3, equations (40)–(49).
---

## Statement

Assume AC, use base-two entropy, and let $Z^n,W^n$ be IID unit circular Gaussian vectors independent of $X^n$, where $n^{-1}\sum_j\operatorname{Var}(X_j)\le P$. For $s\ge t\ge0$,
$$h(\sqrt{s}X^n+Z^n)-h(\sqrt{t}X^n+W^n)\le n\log_2\frac{1+sP}{1+tP}.$$
For the complex channel in [[def-real-two-user-gaussian-interference-channel]], let the two input vectors be independent, obey the average power constraints, and have arbitrary dependence within each vector. Write $a=\mathrm{SNR}_1$, $b=\mathrm{SNR}_2$, $c=\mathrm{INR}_1$, $d=\mathrm{INR}_2$, $S_1^n=h_{12}X_1^n+Z_2^n$, and $S_2^n=h_{21}X_2^n+Z_1^n$. Then
$$h(Y_1^n|S_1^n)\le n\log_2\!\left(\pi e\left[1+c+\frac{a}{1+d}\right]\right),\quad h(Y_2^n|S_2^n)\le n\log_2\!\left(\pi e\left[1+d+\frac{b}{1+c}\right]\right),$$
$$h(Y_1^n)\le n\log_2(\pi e[1+a+c]),\quad h(Y_2^n)\le n\log_2(\pi e[1+b+d]),$$
$$h(Y_2^n|S_2^n,X_1^n)\le n\log_2\!\left(\pi e\left[1+\frac{b}{1+c}\right]\right),$$
and the index-reflected conditional bound also holds.

## Facts & Assumptions

**Given:** The finite-second-moment inputs, independent Gaussian noises, and average power bounds in the statement; entropy is measured in bits.

[A1] [[def-axiom-of-choice]]: AC is inherited through the Gaussian and information suppliers.

[F1] [[def-real-two-user-gaussian-interference-channel]]: the channel, SNR/INR convention, and average input power constraints.

[F2] [[lem-complex-scalar-gaussian-maximum-differential-entropy]]: a complex variable of variance $v$ has entropy at most $\log_2(\pi e v)$.

[F3] [[lem-bounded-density-finite-second-moment-has-finite-differential-entropy]]: bounded densities of finite second moment have finite differential entropy.

[F4] [[lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing]]: conditional mutual-information chain rules, nonnegativity, and data processing.

[F5] [[lem-scalar-gaussian-channel-mutual-information-power-bound]]: the Gaussian-noise density identity and scalar power bound, with equality for circular Gaussian inputs.

## Proof







1.1 If $(T,S)$ are Gaussian-smoothed finite-second-moment variables, then $h(T|S)=h(T-kS|S)\le h(T-kS)\le\log_2(\pi e\operatorname{Var}(T-kS))$ for every complex $k$. The first identity is conditional translation and the first inequality is conditional mutual-information nonnegativity; the second is [F2]. A finite-dimensional convolution with a nonsingular Gaussian has a density bounded by the peak of that Gaussian and finite second moment; [F3], applied after identifying complex vectors with real vectors, therefore makes every relevant joint, marginal, and residual differential entropy finite. In particular the pairs $(Y_1^n,S_1^n)$ and $(Y_2^n,S_2^n)$ have nonsingular independent receiver-noise coordinates, and the degraded pair below has nonsingular joint Gaussian noise when $s>t$. Their conditional entropies are differences of these finite joint and marginal entropies. For conditioning additionally on $X_1^n$, which need not have a density, first subtract its known translated contribution; independence removes that conditioning and leaves the nonsingular smoothed pair $(h_{22}X_2^n+Z_2^n,S_2^n)$. The information-density identity, obtained by integrating the Gaussian conditional density divided by the output density as in [F5], then justifies the remaining conditional entropy identities without infinite subtractions. At zero signal power the same Gaussian density argument applies without alteration. Coordinate entropy chain rules give $h(T^n|S^n)\le\sum_j h(T_j|S_j)$. [A1, F2, F3, F4, F5, given, algebra]

2.1 Suppose $s>t$ and set $U^n=\sqrt{s}X^n+Z^n$, $V^n=\sqrt{t/s}\,U^n+\sqrt{1-t/s}\,W^n$. The marginal law of $V^n$ is the lower-SNR channel and $X^n-U^n-V^n$ is Markov. Thus the difference of the two output entropies equals $I(X^n;U^n|V^n)=h(U^n|V^n)-n\log_2(\pi e[1-t/s])$: the conditional noise is $Z^n$ given $\sqrt{t/s}Z^n+\sqrt{1-t/s}W^n$. For a coordinate variance $p_j$, minimizing the quadratic residual variance of $U_j$ given $V_j$ gives $(1-t/s)(1+sp_j)/(1+tp_j)$. Step 1.1 therefore bounds the entropy difference by $\sum_j\log_2((1+sp_j)/(1+tp_j))$. This logarithmic ratio has derivative $(s-t)/((1+sp)(1+tp)\ln2)$, which is nonnegative and decreasing. Jensen and the average variance bound yield the first claimed inequality. If $s=t$ the two marginal entropies agree; if $t=0<s$ the same construction and computation apply. If $s=t=0$ both outputs are pure Gaussian noise. [F4, F5, step 1.1, given, construct, algebra, cases]

2.2 Let $p_{i,j}=\operatorname{Var}(X_{i,j})$. The optimal scalar linear estimate of $Y_{1,j}$ from $S_{1,j}$ has residual variance $1+|h_{21}|^2p_{2,j}+|h_{11}|^2p_{1,j}/(1+|h_{12}|^2p_{1,j})$: independence of the two user vectors and the noises eliminates all other covariances. Step 1.1 bounds the conditional entropy by the logarithm of this variance times $\pi e$. The map $x\mapsto x/(1+kx)$ is increasing and concave on $[0,\infty)$ for $k\ge0$, with second derivative $-2k/(1+kx)^3$; hence the residual variance is increasing and concave in the two powers, and its logarithm is also concave and increasing. Jensen and $n^{-1}\sum_jp_{i,j}\le P_i$ give the first conditional-output bound. Reflection gives the second. This calculation has no division by a channel gain and remains valid when any gain vanishes. [F1, F2, step 1.1, given, algebra]

3.1 The output variances are $1+|h_{11}|^2p_{1,j}+|h_{21}|^2p_{2,j}$ and $1+|h_{12}|^2p_{1,j}+|h_{22}|^2p_{2,j}$. Applying the coordinate chain rule, [F2], and logarithmic Jensen gives the two unconditioned-output bounds. Given $X_1^n$, subtract its contribution from $Y_2^n$; independence leaves the linear-estimation problem for $h_{22}X_2^n+Z_2^n$ from $h_{21}X_2^n+Z_1^n$. Its coordinate residual variance is $1+|h_{22}|^2p_{2,j}/(1+|h_{21}|^2p_{2,j})$. The same concavity calculation proves the final conditional bound. Reflection proves its counterpart. [F1, F2, step 1.1, step 2.2, given, algebra] ∎
