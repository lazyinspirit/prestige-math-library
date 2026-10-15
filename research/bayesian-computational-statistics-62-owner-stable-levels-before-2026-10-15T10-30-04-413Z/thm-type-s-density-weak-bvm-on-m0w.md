---
id: thm-type-s-density-weak-bvm-on-m0w
kind: theorem
title: Type-S density posteriors satisfy the weak multiscale Bernstein–von Mises theorem
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - cor-markov-inequality-for-random-variables
  - def-axiom-of-choice
  - def-multiscale-coefficient-space-m0w
  - def-type-s-and-h-multiscale-density-priors
  - lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces
  - lem-compact-wavelet-projection-kernel-and-commutator
  - lem-density-gaussian-bridge-is-borel-on-m0w
  - lem-iid-bounded-variance-bernstein-tail
  - lem-m0w-finite-projection-and-tail-bvm-criterion
  - lem-type-s-posterior-preliminary-contraction
  - thm-cramer-wold-device
  - thm-dominated-convergence
  - thm-prokhorov-tightness-theorem-on-polish-spaces
  - thm-uniqueness-of-a-law-from-its-characteristic-function
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: Full AC is inherited from the bridge construction, characteristic-function uniqueness, and Prokhorov subsequences.
sources:
  references:
    - title: Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, Theorem 3 and §5.4; direct contraction and commutator proof here retains the approved richer prior scope
      url: https://arxiv.org/pdf/1310.2484
    - title: Castillo, On Bayesian supremum norm contraction rates, §4.3
      url: https://arxiv.org/pdf/1304.1761
---

## Statement

Assume AC. Let $X_1,\ldots,X_n$ be IID on $[0,1]$ with density $0<\rho_0\le f_0\le D_0<\infty$, and suppose $g_0=\log f_0\in C^\alpha$. Use a sufficiently regular compactly supported boundary corrected orthonormal multiresolution wavelet basis satisfying [[lem-compact-wavelet-projection-kernel-and-commutator]], with regularity greater than $\alpha$, and let $V_L$ contain exactly its wavelet levels through $L$, including the fixed low scaling space and constants. Its regularity and vanishing moments satisfy the composition hypotheses in that lemma for some integer $m>\alpha$. Let $L_n$ be either of the two cutoff sequences in [[def-type-s-and-h-multiscale-density-priors]], fixed consistently for all $n$.

In Type-S1 take $\alpha>1$, $\sigma_l=2^{-l(\alpha+1/2)}$, and any coefficient probability density with globally Lipschitz logarithm. In Type-S2 take $\alpha>1/2$, Gaussian coefficients, and $\sigma_l=2^{-l(r+1/2)}$ with $0<r<\alpha-1/4$. Normalize $f=\exp(T)/\int\exp(T)$ as in that definition. For every admissible weight sequence $w$, the posterior satisfies
$$\beta_{BL,M_0(w)}\bigl(\mathcal L(\sqrt n(f-P_n(L_n))\mid X^n),\mathcal L(G_{P_0})\bigr)\longrightarrow0$$
in $P_0^n$-probability, where $P_n(L_n)$ has empirical wavelet coefficients through $L_n$ and zero coefficients above $L_n$, and $G_{P_0}$ is the Borel Gaussian bridge with covariance $P_0[(\psi_i-P_0\psi_i)(\psi_j-P_0\psi_j)]$.

## Facts & Assumptions

**Given:** The model, truth, multiresolution basis, prior scales, cutoff, admissible weights, and full AC in the Statement. Put $d=\dim V_{L_n}\asymp2^{L_n}$, $e_n=\sqrt{d/n}+d^{-\alpha}$, and $\lambda_l=\max(l,1)$ to include the fixed low levels.

[F1] [[lem-type-s-posterior-preliminary-contraction]] gives quotient-coordinate contraction at radius $e_n$ around $\theta_*=P_{L_n}g_0-\int g_0$; its Statement supplies the positive quotient marginal prior density and its shift bounds.

[F2] [[lem-compact-wavelet-projection-kernel-and-commutator]] gives the uniform projection kernel bound, approximation, $L^2$ to supremum bound, and the multiplication commutator estimate. Its composition conclusion proves that $f_0=e^{g_0}$ has the required $\alpha$ coefficient decay, including integer $\alpha$, and that $f_0$ is $\beta$-Hölder for every $0<\beta<\min(\alpha,1)$.

[F3] [[lem-density-gaussian-bridge-is-borel-on-m0w]] constructs the Gaussian bridge law on $M_0(w)$ under AC.

[F4] [[lem-m0w-finite-projection-and-tail-bvm-criterion]] reduces the asserted bounded-Lipschitz convergence to fixed finite projections and vanishing posterior tails.

[F5] [[lem-iid-bounded-variance-bernstein-tail]] gives Bernstein's inequality for independent centered bounded variables.

[F6] [[thm-prokhorov-tightness-theorem-on-polish-spaces]], [[thm-uniqueness-of-a-law-from-its-characteristic-function]], and [[thm-cramer-wold-device]] give subsequential weak compactness from tightness, uniqueness from characteristic functions, and joint convergence from scalar projections under AC.

[F7] [[lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces]] metrizes finite-dimensional weak convergence; [[thm-dominated-convergence]] permits integrable domination; [[cor-markov-inequality-for-random-variables]] gives Markov's bound.

## Proof

1.1 Choose a deterministic $b_n\to\infty$ sufficiently slowly that $b_n\sqrt d e_n\to0$ and $b_ne_nd^{2r+1}/\sqrt n\to0$ in the Gaussian case. Such a choice exists: the first unmultiplied expression tends to zero because $\alpha>1/2$, and the second is bounded by a logarithmic factor times $d^{2r-2\alpha+1/2}\to0$. Set $D_n=\{\|\theta-\theta_*\|_2\le b_ne_n\}$ in the quotient by constants used in [F1]. Then $\Pi(D_n\mid X^n)\to1$ in probability. On $D_n$, $\|\theta-\theta_*\|_\infty\le Cb_n\sqrt d e_n=o(1)$; hence $\|f-f_0\|_\infty=o(1)$ uniformly, and the densities are bounded above and away from zero. Write $\Pi_D$ for the posterior conditioned on $D_n$. [F1, F2, given, choose]

1.2 For $\gamma=\psi_{lk}$, $l\le L_n$, define $f_s=fe^{-s\gamma/\sqrt n}/P_fe^{-s\gamma/\sqrt n}$. For $|s|\le\sqrt{\lambda_l}$, Taylor expansion of the log moment generating function gives $s\sqrt n(P_f-P_n)\gamma=\ell_n(f_s)-\ell_n(f)+(s^2/2)\operatorname{Var}_f\gamma+R$, where $|R|\le C|s|^3\|\gamma\|_\infty/\sqrt n$. To justify the uniform remainder, differentiate $a\mapsto\log P_fe^{a\gamma}$ three times; its third derivative is the third centered moment under the tilted density, bounded by $C\|\gamma\|_\infty P_f\gamma^2$ when $|a|\|\gamma\|_\infty=o(1)$. On $D_n$, $P_f\gamma^2\le C$ by orthonormality and the density bound, while $\sqrt{L_n}2^{L_n/2}/\sqrt n\to0$. Thus $|R|\le Cs^2$ and $\operatorname{Var}_f\gamma\le C$. Here $\ell_n$ is the sum log likelihood. [given, step 1.1, algebra]

1.3 The map $f\mapsto f_s$ is the quotient-coordinate translation $\theta\mapsto\theta-s(\gamma-\int\gamma)/\sqrt n$. On high wavelets it shifts one coordinate; low scaling directions involve only a fixed finite-dimensional block. In S1 the absolute log prior density ratio is at most $C|s|/(\sqrt n\sigma_l)\le C|s|$, since $2^{L_n(\alpha+1/2)}\le\sqrt n$. In S2 it is at most $C[|s|(|g_{0,lk}|+b_ne_n)/(\sqrt n\sigma_l^2)+s^2/(n\sigma_l^2)]$, with a bounded fixed low-block version. Uniformly in high $l\le L_n$, its coefficients are bounded: $|g_{0,lk}|\le C2^{-l(\alpha+1/2)}$, $b_ne_nd^{2r+1}/\sqrt n=o(1)$, and $d^{2r+1}/n=o(1)$. Changing variables in the numerator likelihood integral and discarding its transformed $D_n$ indicator therefore bounds that integral by $e^{C|s|+Cs^2}$ times the full posterior normalizer. Step 1.2 yields $E_{\Pi_D}e^{s\sqrt n(P_f-P_n)\psi_{lk}}\le Ce^{Cs^2+C|s|}/\Pi(D_n\mid X^n)$. No translation invariance of $D_n$ is used. [F1, step 1.1, step 1.2, algebra]

2.1 Put $Z_{lk}=\sqrt n\langle f-P_n,\psi_{lk}\rangle$ for $l\le L_n$ and $p_n=\Pi(D_n\mid X^n)$. Exponential Markov with $s=\pm\sqrt{\lambda_l}$ gives $\Pi_D\{|Z_{lk}|>u\sqrt{\lambda_l}\}\le Cp_n^{-1}e^{-\lambda_l(u-C)}$. Union over the at most $C2^l$ locations shows $E_{\Pi_D}\max_k|Z_{lk}|\le Cp_n^{-1}\sqrt{\lambda_l}$. Union also over levels and integrate in $u$ above a sufficiently large constant to obtain $E_{\Pi_D}\sup_{l\le L_n,k}|Z_{lk}|/\sqrt{\lambda_l}\le C/p_n$: the relevant integral is bounded by $Cp_n^{-1}\sum_{l\ge1}2^l\int_M^\infty e^{-l(u-C)}du$, plus a finite low-level term. Also the wavelet level bound and a geometric sum give $E_{\Pi_D}\|P_{L_n}(f-P_n)\|_\infty\le Cp_n^{-1}\sqrt{d\lambda_{L_n}/n}$. [F2, F7, step 1.3, algebra]

2.2 Each empirical wavelet coordinate has variance at most $D_0/n$ and summands bounded by $C2^{l/2}$. Bernstein [F5] gives $\Pr\{|(P_n-P_0)\psi_{lk}|>C[\sqrt{t/n}+2^{l/2}t/n]\}\le2e^{-t}$. Choose $t=C'(l+1)+u$, union over $k$, and integrate over $u\ge0$ to get $E\max_k|(P_n-P_0)\psi_{lk}|\le C[\sqrt{\lambda_l/n}+2^{l/2}\lambda_l/n]$. Summing against $2^{l/2}$ yields $\|P_{L_n}(P_n-P_0)\|_\infty=O_P(\sqrt{d\lambda_{L_n}/n}+d\lambda_{L_n}/n)=O_P(\sqrt{d\lambda_{L_n}/n})$, since $d\lambda_{L_n}/n\to0$. Moreover $\|P_{L_n}f_0-f_0\|_\infty\le Cd^{-\alpha}\le C\sqrt{d\lambda_{L_n}/n}$ for both cutoffs. Consequently the posterior projected density error is tight at rate $a_n=\sqrt{d\lambda_{L_n}/n}$. [F2, F5, F7, step 2.1, algebra]

2.3 This projected rate controls the full supremum error. Put $h=\theta-\theta_*$, $f_*=e^{\theta_*}/\int e^{\theta_*}$, and $v=h-P_{f_*}h\in V_{L_n}$. Since $\int h=0$, $\|h\|_\infty\le2\|v\|_\infty$. Normalized exponential expansion gives $f-f_*=f_*v+R$ with $\|R\|_\infty\le C\|h\|_\infty^2$ on $D_n$. Also $\|f_*-f_0\|_\infty\le Cd^{-\alpha}$. For any fixed $0<\beta<\min(\alpha,1)$, $f_0$ is $\beta$-Hölder, so [F2] gives $\|P_{L_n}(f_0v)-f_0v\|_\infty\le Cd^{-\beta}\|v\|_\infty$. The lower bound $f_0\ge\rho_0$ and uniform boundedness of $P_{L_n}$ imply $c\|h\|_\infty\le\|P_{L_n}(f-f_0)\|_\infty+C d^{-\beta}\|h\|_\infty+C\|h\|_\infty^2+Cd^{-\alpha}$. Step 1.1 makes the two terms proportional to $\|h\|_\infty$ absorbable. It follows that $\|f-f_0\|_\infty\le C[\|P_{L_n}(f-f_0)\|_\infty+d^{-\alpha}]$ uniformly on $D_n$. Thus the full posterior supremum error is tight at rate $a_n$. [F2, step 1.1, step 2.2, algebra]

3.1 Fix a finite linear combination $\gamma$ of wavelets and a fixed real $s$. Repeat step 1.2 with this bounded $\gamma$. Its remainder is now $o(1)$, and $\operatorname{Var}_f\gamma\to\operatorname{Var}_0\gamma$ uniformly on $D_n$. The prior translation involves finitely many fixed coordinates, and its density ratio tends to one uniformly on $D_n$: use the global S1 log-Lipschitz bound or the fixed Gaussian precision block and bounded quotient coordinates in S2. Let $A_s$ be the translated image of $D_n$. For large $n$, $A_s$ contains $D_n^-:=\{\|\theta-\theta_*\|_2\le b_ne_n/2\}$ because the translation has norm $O(n^{-1/2})=o(b_ne_n)$. Both $\Pi(D_n^-\mid X^n)$ and $\Pi(D_n\mid X^n)$ tend to one by [F1]. Bounding the translated integral above by the full normalizer and below by its integral on $D_n^-$ therefore gives $E_{\Pi_D}e^{s\sqrt n(P_f-P_n)\gamma}\to e^{s^2\operatorname{Var}_0(\gamma)/2}$ in probability. [F1, step 1.1, step 1.2, step 1.3, algebra]

3.2 Here is the needed finite-dimensional Laplace continuity argument. Along any subsequence, extract a further subsequence on which the preceding transform convergences hold almost surely for every rational $s$ and every rational vector of finite-coordinate coefficients, using countability and convergence in probability. The transforms at the positive and negative coordinate unit vectors give tightness of these deterministic finite-dimensional laws by exponential Markov and a finite union bound. [F6] gives a weakly convergent further subsequence. For a fixed rational direction and rational $s$, its exponential is uniformly integrable: its second moment is bounded by the transform at $2s$, and Cauchy–Schwarz and Markov bound the expectation above any large cutoff. Truncation thus passes its transform to the weak limit. In each coordinate direction and then any rational linear direction, the limit has finite exponential moments of every rational order, and hence of every real order by bounding $e^{t|x|}$ by $e^{q x}+e^{-q x}$ for rational $q>|t|$. Its moment generating function is analytic: on every bounded complex disk its power series can be integrated term by term under $e^{q|x|}$. Equality with the Gaussian transform on the rationals therefore gives equality of all moments by the real power series at zero. Integrating the characteristic-function power series under the same exponential bound gives the Gaussian characteristic function. [F6] identifies every rational linear projection with the corresponding centered normal. Continuity of characteristic functions in their vector argument extends the identification to real vectors; [F6] then identifies the finite-dimensional law with the Gaussian projection of [F3]. Every weakly convergent further subsequence has that limit, so tightness implies weak convergence of the full deterministic subsequence, and [F7] gives bounded-Lipschitz convergence. The initial subsequence argument proves convergence in probability of the original random projected laws. [F3, F6, F7, step 3.1, algebra]

4.1 For the coefficients through $L_n$, step 2.1 and Markov give posterior tightness of $\sup_{l\le L_n,k}|Z_{lk}|/\sqrt{\lambda_l}$. Therefore for $J<L_n$, the $M(w)$ norm of the part with $J<l\le L_n$ is at most this variable times $\sup_{l>J}\sqrt{\lambda_l}/w_l$, which tends to zero as $J\to\infty$ by admissibility. This proves the required uniform projected posterior tail bound. [F7, given, step 2.1, algebra]

4.2 Choose $M_n\to\infty$ so slowly that $M_n\sqrt{\lambda_{L_n}}/w_{L_n}\to0$. Step 2.3 makes the posterior probability of $\|f-f_0\|_\infty>M_na_n$ tend to zero. On its complement, the $L^1$ wavelet bound and monotonicity of $w$ give $\sqrt n\|P_{>L_n}(f-f_0)\|_{M(w)}\le C\sqrt n2^{-L_n/2}w_{L_n}^{-1}M_na_n\le CM_n\sqrt{\lambda_{L_n}}/w_{L_n}\to0$. The truth coefficients satisfy $\sqrt n\|P_{>L_n}f_0\|_{M(w)}\le C\sqrt n d^{-\alpha-1/2}/w_{L_n}\le C\sqrt{\lambda_{L_n}}/w_{L_n}\to0$ for either cutoff. Hence the entire density tail above $L_n$ is negligible in posterior probability. [F2, given, step 2.3, algebra]

4.3 Each density is a finite exponential of bounded continuous functions, hence belongs to $L^2$; its coefficients, and those of $P_n(L_n)$, belong to $M_0(w)$. Removing $D_n$ changes posterior integrals of functions bounded by one by at most $2[1-\Pi(D_n\mid X^n)]=o_P(1)$. Step 3.2 supplies fixed finite-projection convergence to [F3], and steps 4.1–4.2 supply the posterior-tail condition. Apply [F4] to conclude the asserted bounded-Lipschitz convergence in $M_0(w)$. [F3, F4, step 1.1, step 3.2, step 4.1, step 4.2, algebra] ∎
