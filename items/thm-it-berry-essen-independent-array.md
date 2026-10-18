---
id: thm-it-berry-essen-independent-array
kind: theorem
title: Berry–Esseen bound for a finite independent array
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-axiom-of-choice, def-standard-normal-and-normal-laws, thm-derivative-of-exponential, thm-exponential-beats-every-polynomial, thm-gaussian-integral, thm-integration-by-parts, thm-ftc-first-part, thm-ftc-second-part, thm-continuous-implies-integrable, thm-algebra-of-derivatives]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: The Axiom of Choice is assumed through the repository's standard-normal probability-law interface; no further choice is used in the finite-array argument.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - Prove the finite-array quantitative CDF bound by smoothing, the Stein equation, an averaged increment estimate, and induction.
  - Include arrays with zero-variance summands and make the variance normalization explicit.
sources:
  references:
    - title: "Roman Vershynin, Two friendly proofs of the Berry–Esseen theorem, arXiv:2602.06234v2"
      url: https://arxiv.org/abs/2602.06234
      locator: Part II, §§6–11, PDF pp. 9–17; smoothing, Stein ODE, averaged increments, and induction. The numerical constant 1088 is derived in this item.
---

## Statement

Assume the Axiom of Choice. Let $X_1,\ldots,X_n$ be independent, finite-support real random variables with $\mathbb E X_i=0$ and total variance $\sigma^2=\sum_i\mathbb E X_i^2>0$. If $S=\sum_iX_i$ and $\Phi$ is the standard-normal CDF, then
$$\sup_{z\in\mathbb R}\left|\Pr\{S/\sigma\le z\}-\Phi(z)\right|\le1088\,\frac{\sum_i\mathbb E|X_i|^3}{\sigma^3}.$$

## Facts & Assumptions

**Given:** The finite independent array, its mean and variance hypotheses, and the Axiom of Choice.

[A1] [[def-axiom-of-choice]] and [[def-standard-normal-and-normal-laws]]: assume AC, and let $G$ have density $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ and total mass one.

[F1] [[thm-derivative-of-exponential]], [[thm-exponential-beats-every-polynomial]], and [[thm-gaussian-integral]]: $\varphi'(x)=-x\varphi(x)$, Gaussian tails vanish at infinity, and the Gaussian integral is finite with the stated normalization.

[F2] [[thm-ftc-first-part]], [[thm-continuous-implies-integrable]], [[thm-algebra-of-derivatives]], and [[thm-integration-by-parts]]: the first fundamental theorem differentiates a continuous-integrand integral, the product rule applies, and integration by parts holds on finite intervals for integrable derivatives.

[F3] [[thm-ftc-second-part]]: on a closed interval, a differentiable function whose derivative is integrable has endpoint difference equal to the derivative's integral; apply it separately on each smooth piece of $f'$ split at the two breakpoints of $h$.

## Proof

1.1 Divide each summand by $\sigma$, so it suffices to consider independent mean-zero variables with total variance one and $\beta:=\sum_i\mathbb E|X_i|^3$. A zero-variance summand is zero almost surely and may be removed. For $r>0$, let $\delta_m(r)$ be the supremum of $\{0\}$ together with the normal-CDF errors $\sup_z|\Pr\{\sum_iX_i\le z\}-\Phi(z)$ over all $m$-term finite-support arrays with total variance one and third-moment sum at most $r^3$. This convention also defines $\delta_m(r)=0$ when the class of arrays is empty. [given, algebra]

1.2 If some summand has variance greater than $1/2$, the needed Lyapunov inequality follows locally as follows. Put $A=|X_i|$ and $m_3=\mathbb EA^3$; then $m_3>0$. For $U=A/m_3^{1/3}$, the pointwise identity $1+2U^3-3U^2=(U-1)^2(2U+1)\ge0$ gives $\mathbb EA^2/m_3^{2/3}\le1$, so $\mathbb E|X_i|^3\ge(\mathbb EX_i^2)^{3/2}$. Therefore $\beta\ge(\mathbb EX_i^2)^{3/2}>1/(2\sqrt2)>1/3$. Since any two CDF values differ by at most one, the bound $\delta_m(r)\le1088r^3$ holds in this case. [given, algebra]

1.3 It remains to prove the induction step when each summand variance is at most $1/2$. Fix a threshold $a$ and $\epsilon>0$, and let $h$ equal $1$ on $(-\infty,a]$, decrease linearly to $0$ on $[a,a+\epsilon]$, and equal $0$ afterward. Define $f(x)=e^{x^2/2}\int_{-\infty}^x e^{-t^2/2}(h(t)-\mathbb Eh(G))\,dt,$ where $G$ has the standard-normal law. On any finite interval, [F2] differentiates the integral term and the product rule differentiates the integrating factor, giving $f'(x)-xf(x)=h(x)-\mathbb Eh(G)$. The total integral of the integrand is zero, so its upper-tail form also holds. [A1, F1, F2, given]

2.1 For $x>0$, the upper-tail formula and $0\le h\le1$ give $|f(x)|\le e^{x^2/2}\int_x^\infty e^{-t^2/2}dt=\int_0^\infty e^{-xs-s^2/2}ds\le\min(2,1/x)$. For $x\le0$ the lower-tail formula gives the same bounds. Thus $|xf(x)|\le1$ and the differential equation gives $|f'(x)|\le2$. Away from the two breakpoints of the piecewise-linear $h$, differentiating the Stein equation gives $f''=f+xf'+h'$, so $|f''(x)|\le2+2|x|+\epsilon^{-1}\mathbf1_{[a,a+\epsilon]}(x)$. On any finite segment, split at those breakpoints and apply [F3] on each smooth subinterval to the function $f'$; it is differentiable there, its derivative $f''$ is continuous up to the one-sided endpoints, and hence integrable. Continuity of $f'$ lets the increments add across the breakpoints. [F1, F2, F3, step 1.3]

3.1 Integrating the last bound along the segment from $x$ to $x+y$ (and using $|f'|\le2$ when $|y|>1$) yields $|f'(x+y)-f'(x)|\le4|y|\left(1+|x|+\epsilon^{-1}\int_0^1\mathbf1_{[a,a+\epsilon]}(x+sy)ds\right).$ For the sum $S_{-i}$ omitting term $i$, its variance is at least $1/2$. After dividing by its standard deviation $\sigma_{-i}\ge1/\sqrt2$, its third-moment sum is at most $\sqrt8r^3<8r^3=(2r)^3$, so the induction definition bounds its CDF error by $\delta_{m-1}(2r)$. Comparing the two endpoints of any interval of length $\epsilon$ with a normal interval, whose density is bounded by one, gives $\Pr\{S_{-i}+sy\in[a,a+\epsilon]\}\le2\epsilon+2\delta_{m-1}(2r)$. Finally, $(\mathbb E|S_{-i}|)^2\le\mathbb E S_{-i}^2=\operatorname{Var}(S_{-i})\le1$, because $\mathbb E(|S_{-i}|-\mathbb E|S_{-i}|)^2\ge0$. Taking expectations in the increment bound therefore gives $\mathbb E|f'(S_{-i}+y)-f'(S_{-i})|\le16|y|(1+\delta_{m-1}(2r)/\epsilon)$. [A1, F1, step 2.1, given, induction, algebra]

3.2 Integrating by parts on $[-A,A]$ using [F2] gives $\int_{-A}^A f'\varphi= [f\varphi]_{-A}^A+\int_{-A}^Axf\varphi$. The boundary term tends to zero because $f$ is bounded by step 2.1 and $\varphi(A)\to0$ by [F2]; the integrals converge since $f,f'$ are bounded and $|x|\varphi(x)$ is integrable by [F1]. Hence $\mathbb Ef'(G)=\mathbb EGf(G)$. The smoothing inequalities $\mathbf1_{(-\infty,a]}\le h_a\le\mathbf1_{(-\infty,a+\epsilon]}$ show that $\Pr\{S\le a\}-\Phi(a)\le\mathbb Eh_a(S)-\mathbb Eh_a(G)+\epsilon$: the normal mass of an interval of length $\epsilon$ is at most $\epsilon$. For the reverse difference, apply the same calculation to $h_{a-\epsilon}$ and its corresponding Stein solution; the bounds in step 2.1 are uniform in the threshold. For either smoothing function, the Stein equation identifies the expectation difference as $\mathbb E[f'(S)-Sf(S)]$, proving the displayed uniform estimate. [A1, F1, F2, step 1.3, step 2.1, algebra]

4.1 For the needed moment comparison, write the finite law of $A=|X_i|$ as values $a_j$ with weights $p_j$. For every pair $j,k$, $a_j^2a_k\le(2a_j^3+a_k^3)/3$, since $2a^3+b^3-3a^2b=(a-b)^2(2a+b)\ge0$. Averaging with weights $p_jp_k$ gives $\mathbb E X_i^2\,\mathbb E|X_i|\le\mathbb E|X_i|^3$. Put $Z=S_{-i}$. Independence and mean zero give $\mathbb E[X_if(S)]=\mathbb E\left[X_i^2\int_0^1 f'(Z+tX_i)dt\right]$, while independence also gives $\mathbb E[X_i^2f'(Z)]=\mathbb E X_i^2\,\mathbb E f'(Z)$. By step 3.1, conditioning on $X_i$ bounds $\mathbb E\left[X_i^2\int_0^1|f'(Z+tX_i)-f'(Z)|dt\right]$ by $8\mathbb E|X_i|^3(1+\delta_{m-1}(2r)/\epsilon)$, and the same step bounds $\mathbb E X_i^2\,\mathbb E|f'(Z+X_i)-f'(Z)|$ by $16\mathbb E X_i^2\,\mathbb E|X_i|(1+\delta_{m-1}(2r)/\epsilon)$. Decomposing at $f'(Z)$ and using the moment comparison shows $|\mathbb E[X_if(S)]-\mathbb E X_i^2\,\mathbb E f'(S)|\le24\mathbb E|X_i|^3(1+\delta_{m-1}(2r)/\epsilon)\le32\mathbb E|X_i|^3(1+\delta_{m-1}(2r)/\epsilon)$. Summing over $i$ and using $\sum_i\mathbb E X_i^2=1$ bounds the difference in step 3.2 by $32r^3(1+\delta_{m-1}(2r)/\epsilon)$. [step 3.1, step 3.2, given, algebra]

5.1 Choose $\epsilon=512r^3$. Steps 3.2 and 4.1 give $\delta_m(r)\le544r^3+\tfrac1{16}\delta_{m-1}(2r)$. Inductively, $\delta_{m-1}(2r)\le1088(2r)^3$, so the right side is at most $(544+544)r^3=1088r^3$. For one summand with variance one, Lyapunov gives $r^3\ge\beta\ge1$, and the trivial CDF bound starts the induction. Combining with step 1.2 proves the normalized claim; undoing the variance normalization proves the Statement. [step 1.1, step 1.2, step 3.2, step 4.1, algebra] ∎
