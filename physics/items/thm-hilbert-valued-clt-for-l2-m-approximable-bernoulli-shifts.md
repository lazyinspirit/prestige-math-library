---
id: thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts
kind: theorem
title: Hilbert-valued CLT for L2-m-approximable Bernoulli shifts
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [cor-characteristic-function-criterion-for-weak-convergence, cor-cauchy-schwarz-for-random-variables, cor-markov-inequality-for-random-variables, cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator, def-axiom-of-choice, def-convergence-in-distribution-of-random-elements, def-countable-choice, def-dependent-choice, def-l2-m-approximable-causal-bernoulli-shift, def-multivariate-normal-law, def-trace-class-operator, lem-ac-supplies-sequential-choices-for-probability-constructions, lem-characteristic-function-of-a-normal-law, lem-finite-dependent-vector-clt, lem-independent-centered-hilbert-elements-have-zero-expected-inner-product, lem-l2-basis-projections-converge-and-satisfy-parseval, lem-long-run-covariance-is-trace-class, lem-measurable-functions-preserve-independence, lem-positive-trace-class-covariance-defines-hilbert-gaussian, thm-cauchy-schwarz-in-an-inner-product-space, thm-cramer-wold-device, thm-dominated-convergence, thm-factorization-of-expectations-for-independent-variables, thm-portmanteau-theorem, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "L. Horváth, P. Kokoszka, and R. Reeder, Estimation of the Mean of Functional Time Series and a Two-Sample Problem, JRSS B 75 (2013), Theorem 1, printed pp.105–106, and Appendix A.1, printed pp.117–119"
      url: "https://www.stat.colostate.edu/~piotr/horvathKokoszkaReeder2013.pdf"
    - title: "S. Hörmann and P. Kokoszka, Functional Time Series, in Time Series Analysis: Methods and Applications, Handbook of Statistics 30 (2012), pp.157–186; bibliographic context, DOI 10.1016/B978-0-444-53858-1.00007-7"
      url: "https://doi.org/10.1016/B978-0-444-53858-1.00007-7"
---

## Statement

Assume the Axiom of Choice. Let $H=L^2([0,1],dt;\mathbb R)$ and let
$(X_t)_{t\in\mathbb Z}$ be a centered, $L^2$-$m$-approximable causal
Bernoulli shift as defined in
[[def-l2-m-approximable-causal-bernoulli-shift]], with Bochner mean
$\mathbb E_BX_0=0$. Let $\Gamma$ be its long-run covariance operator from
[[lem-long-run-covariance-is-trace-class]], and let $G$ be a centered
$H$-valued Gaussian random element with covariance $\Gamma$, whose existence
is given by [[lem-positive-trace-class-covariance-defines-hilbert-gaussian]].
Then, for $S_n=\sum_{t=1}^nX_t$,
$$n^{-1/2}S_n\ \Rightarrow\ G$$
in the weak topology of Borel probability measures on $H$. The covariance
kernel is the $L^2([0,1]^2)$ equivalence class $c$ in the long-run covariance
lemma, and its integral operator is $T_c=\Gamma$. This is a CLT for the
$H$-valued sample sums; it is not a functional CLT for the time-indexed
partial-sum process.

## Facts & Assumptions

**Given:** Assume AC and take the centered shift and notation in the Statement.

[A1] AC implies Countable Choice and Dependent Choice, which supply the countable product constructions used in the definition and Gaussian supplier ([[def-axiom-of-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]], [[def-countable-choice]], [[def-dependent-choice]]).

[F1] The definition gives strict stationarity of $X_t$ and, for each fixed $m\ge1$, of $X_{t,m}$. The joint process $(X_t,X_{t,m})$ is stationary because the original iid coordinates and the mutually independent, independently indexed replacement arrays are invariant in law under a common time shift. It also gives centered replacement differences, $\delta_m=\|X_0-X_{0,m}\|_{L^2(H)}$, and $\|X_t-X_{t,m}\|_{L^2(H)}=\delta_m$ ([[def-l2-m-approximable-causal-bernoulli-shift]]). For $h\ge1$, $X_0$ is independent of $X_{h,h-1}$ because their original innovation indices are disjoint and all replacement arrays are independent of the original family; the measurable maps defining the random elements preserve this independence ([[lem-measurable-functions-preserve-independence]]).

[F2] The long-run covariance lemma gives $\Gamma_n=n^{-1}\mathbb E_B[S_n\otimes S_n]\to\Gamma$ in trace norm, where $\Gamma$ is positive, self-adjoint and trace class ([[lem-long-run-covariance-is-trace-class]]). For trace-class operators $\|T\|_{op}\le\|T\|_1$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[F3] AC supplies a complete finite or countable orthonormal eigenbasis $(e_k)$ for the positive compact self-adjoint operator $\Gamma$; its eigenvalues $\lambda_k\ge0$ sum to $\operatorname{tr}\Gamma<\infty$ ([[def-trace-class-operator]], [[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator]], [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]). The local basis-projection lemma gives norm convergence of $P_Kx$ to $x$ and Parseval's identity for this basis ([[lem-l2-basis-projections-converge-and-satisfy-parseval]]).

[F3a] Tonelli permits summing the nonnegative squared Gaussian coordinates before taking expectation ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F9] Cauchy--Schwarz holds in the real Hilbert space $H$ and for square- integrable real random variables ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[cor-cauchy-schwarz-for-random-variables]]).

[F10] Independent centered square-integrable random elements in $H$ have zero expected inner product; the local proof uses the complete countable orthonormal basis in [F3] ([[lem-independent-centered-hilbert-elements-have-zero-expected-inner-product]]).

[F4] A centered stationary finite $m$-dependent sequence of square-integrable vectors in $\mathbb R^d$ has the CLT with covariance equal to the finite sum of its lag covariances, including singular covariance ([[lem-finite-dependent-vector-clt]]).

[F5] Pointwise characteristic-function convergence to a specified real law implies weak convergence, and convergence of every real linear projection implies vector weak convergence ([[cor-characteristic-function-criterion-for-weak-convergence]], [[thm-cramer-wold-device]]).

[F11] A centered real normal with variance $v\ge0$ has characteristic function $t\mapsto e^{-t^2v/2}$, including $v=0$ ([[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-normal-law]]).

[F6] Dominated convergence applies to the squared projection tails when they are bounded by $\|X_0\|_H^2$ ([[thm-dominated-convergence]]).

[F7] Markov's inequality bounds the probability that a nonnegative random variable exceeds a positive threshold by its expectation divided by that threshold ([[cor-markov-inequality-for-random-variables]]).

[F8] For Borel probability laws on a metric space, weak convergence is defined as convergence against bounded continuous tests and is equivalent to convergence of expectations against every bounded uniformly continuous real function ([[def-convergence-in-distribution-of-random-elements]], [[thm-portmanteau-theorem]]).

## Proof

**Given:** The assumptions and supplier facts in the Statement and Facts & Assumptions.

1.1 Put $\sigma=\|X_0\|_{L^2(H)}$ and $D_{t,m}=X_t-X_{t,m}$ for $m\ge1$. Both terms have the same centered law, so $D_{t,m}$ is centered. For $h\ge1$, $X_{h,h}$ is independent of $D_{0,m}$: its original inputs have indices $1,\ldots,h$, while $D_{0,m}$ uses original indices at most $0$ and its own replacement array; $X_{h,h}$ uses a distinct independent replacement array. It has the centered law of $X_0$, so [F10] gives $\mathbb E\langle D_{0,m},X_{h,h}\rangle_H=0$. Also $\|X_h-X_{h,h}\|_{L^2(H)}=\delta_h$. Hence Cauchy--Schwarz gives $$|\mathbb E\langle D_{0,m},X_h\rangle_H| =|\mathbb E\langle D_{0,m},X_h-X_{h,h}\rangle_H| \le\delta_m\delta_h.$$ If $h\ge m$, the original inputs of $X_{h,m}$ have indices $h-m+1,\ldots,h$, all positive, and its replacement array is independent of the coordinates in $D_{0,m}$; hence it is independent of $D_{0,m}$ and centered. [F10] gives $\mathbb E\langle D_{0,m},X_{h,m}\rangle_H=0$. If $1\le h<m$, its marginal second moment is $\sigma^2$, giving $|\mathbb E\langle D_{0,m},X_{h,m}\rangle_H|\le\delta_m\sigma$. Therefore $$|\mathbb E\langle D_{0,m},D_{h,m}\rangle_H| \le\begin{cases}\delta_m(\delta_h+\sigma),&1\le h<m,\\ \delta_m\delta_h,&h\ge m.\end{cases}$$ Stationarity makes the negative-lag inner products equal to the corresponding positive-lag ones. Expanding the squared norm of the normalized sum and bounding each finite-lag weight by one yields, for $U_n=n^{-1/2}S_n$ and $U_n^{(m)}=n^{-1/2}\sum_{t=1}^nX_{t,m}$, $$\sup_n\mathbb E\|U_n-U_n^{(m)}\|_H^2 \le\delta_m^2+2\delta_m\sum_{h\ge1}\delta_h+2\sigma(m-1)\delta_m.$$ The $m=1$ empty middle-lag sum is zero. [F1, F9, F10, given, algebra]

2.1 Since $\sum_{m\ge1}\delta_m<\infty$, $\liminf_{m\to\infty}m\delta_m=0$: otherwise $\delta_m\ge c/m$ eventually for some $c>0$, contradicting summability. Recursively choose strictly increasing integers $m_r$ with $m_r\delta_{m_r}<1/r$; the least eligible integer at each stage exists by the liminf statement. Thus the right side of step 1.1 tends to zero along $m=m_r$. Write $\varepsilon_m$ for its square root. For each fixed $K$, the covariance matrices of $P_KU_n$ are bounded because $\operatorname{Cov}(U_n)=\Gamma_n$ and [F2] bounds $\operatorname{tr}(P_K\Gamma_nP_K)$. For any $v\in P_KH$, the scalar variance difference satisfies $$|\mathbb E\langle U_n^{(m)}-\mathbb EU_n^{(m)},v\rangle_H^2 -\mathbb E\langle U_n,v\rangle_H^2| \le\|v\|_H^2\varepsilon_m(2M_K+\varepsilon_m),$$ where $M_K=\sup_n(\mathbb E\|P_KU_n\|_H^2)^{1/2}<\infty$; this follows from $|a^2-b^2|\le|a-b|(|a|+|b|)$ and [F9]. [A1, F2, F9, step 1.1, choose, algebra]

3.1 For fixed $m$ and $K$, the coordinate vectors $(\langle X_{t,m},e_1\rangle_H,\ldots,\langle X_{t,m},e_K\rangle_H)_t$ are centered, stationary, $m$-dependent and square-integrable in $\mathbb R^K$; they identify $P_KX_{t,m}$ isometrically with $P_KH$. By [F4], their normalized sums converge to a centered Gaussian with covariance matrix $\Sigma_{m,K}=\sum_{|j|\le m}\operatorname{Cov}(P_KX_{0,m},P_KX_{j,m})$. The finite covariance expansion shows $\operatorname{Cov}(P_KU_n^{(m)})=\sum_{|j|\le m}(1-|j|/n)_+\, \operatorname{Cov}(P_KX_{0,m},P_KX_{j,m})\to\Sigma_{m,K}$; terms with $|j|>m$ vanish by $m$-dependence, and each of the finitely many coefficients tends to one. Letting $n\to\infty$ in step 2.1 and using [F2] gives $$\|\Sigma_{m,K}-P_K\Gamma P_K\|_{op} \le\varepsilon_m(2M_K+\varepsilon_m).$$ In particular $\Sigma_{m_r,K}\to P_K\Gamma P_K$. Because these operators are symmetric and finite-dimensional, their operator norm is the supremum of the absolute quadratic form over unit vectors. For each real $v\in P_KH$, [F11] therefore gives convergence of the characteristic functions of the scalar projections of $N(0,\Sigma_{m_r,K})$ to that of $N(0,P_K\Gamma P_K)$; [F5] and Cramér--Wold give convergence of these finite-dimensional Gaussian laws. [F2, F3, F4, F5, F11, step 2.1, algebra]

4.1 For $a\in P_KH$, compare the characteristic functions of $\langle U_n,a\rangle_H$ and $\langle U_n^{(m)},a\rangle_H$. The inequality $|e^{ix}-e^{iy}|\le|x-y|$ and step 1.1 bound their difference by $\|a\|_H\varepsilon_m$. For each fixed $m$, [F4] gives the limit law of the second projection; along $m=m_r$, step 3.1 and [F11] make those Gaussian limit laws converge to $N(0,\langle\Gamma a,a\rangle_H)$. Taking first $n\to\infty$ and then $r\to\infty$ proves convergence of the characteristic functions of $\langle U_n,a\rangle_H$ to that normal law. Explicitly, their limsup difference from the target characteristic function is at most $$\|a\|_H\varepsilon_m+ \left|e^{-\langle\Sigma_{m,K}a,a\rangle_H/2} -e^{-\langle\Gamma a,a\rangle_H/2}\right|,$$ which tends to zero along $m=m_r$ by steps 1.1 and 3.1. Since $a$ ranges over all vectors, for any fixed projection direction $b$ this also gives its characteristic-function convergence at every frequency $t$ by taking $a=tb$. Thus [F5] and Cramér--Wold give $$P_KU_n\Rightarrow P_KG$$ for every fixed $K$, since $G$ has covariance $\Gamma$. [F4, F5, F11, step 1.1, step 3.1, algebra]

5.1 Let $R_K=I-P_K$ and $\alpha_K=(\mathbb E\|R_KX_0\|_H^2)^{1/2}$. Completeness of the eigenbasis and Parseval give $R_KX_0\to0$ almost surely in $H$; the bound $\|R_KX_0\|_H^2\le\|X_0\|_H^2$ and [F6] imply $\alpha_K\to0$. For $h\ge1$, $X_0$ is independent of $X_{h,h-1}$ by [F1]; bounded linear projection preserves independence and centering, so [F10] gives $\mathbb E\langle R_KX_0,R_KX_{h,h-1}\rangle_H=0$. Hence $$|\mathbb E\langle R_KX_0,R_KX_h\rangle_H| =|\mathbb E\langle R_KX_0,R_K(X_h-X_{h,h-1})\rangle_H| \le\alpha_K\delta_{h-1}.$$ Expanding the variance of $R_KU_n$ and using [F9] now gives $$\sup_n\mathbb E\|R_KU_n\|_H^2 \le\alpha_K^2+2\alpha_K\left(\delta_0+\sum_{m\ge1}\delta_m\right)\longrightarrow0.$$ Also [F3], [F3a] and the covariance of $G$ give $\mathbb E\|R_KG\|_H^2=\sum_{k>K}\lambda_k\to0$; if the basis is finite, take $P_K=I$ once all basis vectors are included. [F1, F3, F6, F9, F10, step 4.1, algebra]

6.1 Let $\phi:H\to\mathbb R$ be bounded and uniformly continuous, with $M=\sup_x|\phi(x)|$. For $\eta>0$ put $\omega_\phi(\eta)=\sup_{\|x-y\|\le\eta}|\phi(x)-\phi(y)|$, which tends to zero as $\eta\downarrow0$. Markov's inequality [F7] and step 5.1 imply $$|\mathbb E\phi(U_n)-\mathbb E\phi(P_KU_n)| \le\omega_\phi(\eta)+2M\eta^{-2}\sup_n\mathbb E\|R_KU_n\|_H^2,$$ and the same bound for $G$ and $P_KG$ with $\mathbb E\|R_KG\|_H^2$. For fixed $K$, step 4.1 gives $\mathbb E\phi(P_KU_n)\to\mathbb E\phi(P_KG)$. First let $K\to\infty$ in these inequalities and then let $\eta\downarrow0$. It follows that $\mathbb E\phi(U_n)\to\mathbb E\phi(G)$ for every bounded uniformly continuous $\phi$. By [F8], $U_n\Rightarrow G$ in the Borel weak topology of $H$. The kernel assertion is the conclusion of the long-run covariance lemma; the theorem asserts no time-indexed process convergence. [F7, F8, step 4.1, step 5.1] ∎