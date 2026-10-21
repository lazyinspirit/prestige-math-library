---
id: ex-ip-ideal-score-error-allows-unbounded-euler-wasserstein
kind: example
title: Ideal-marginal score error allows unbounded finite-Euler Wasserstein error
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: No additional choice axiom is used; the laws, finite predictors and
  explicit constructions are supplied.
sources:
  references:
    - title: Benjamin A. Burns and Sara Fridovich-Keil, When, why, and how do
        diffusion posterior samplers fail? A finite-sample lens (2026)
      url: https://arxiv.org/pdf/2605.30330v1
      locator: "§4.1 and §5–6, with Appendix C proofs: empirical-prior posterior laws
        at positive diffusion times and observed mode-weight/mode-missing
        failures of moment-matching score-guidance methods."
    - title: Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems
        (2024)
      url: https://arxiv.org/pdf/2410.00083v1
      locator: "§§2.4 and 3.3–3.4: posterior score guidance, finite reverse updates,
        and method-specific exactness caveats."
    - title: Jan Blechschmidt, Oliver G. Ernst, Moritz Poguntke, and Björn Sprungk,
        Flow Matching for Fast Posterior Sampling in Bayesian Inverse Problems
        (2026)
      url: https://arxiv.org/pdf/2610.02377v1
      locator: "§§3.3–3.4 and §5: Metropolized correction and computable a-posteriori
        TV/KL diagnostics for flow-matching posteriors, together with stated
        accuracy limits."
    - title: "Simon J. D. Prince, Understanding Deep Learning, Chapter 18: Diffusion
        Models (2026), complete course notes"
      url: https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html
      locator: Chapter 18, sections on the reverse process, training and sampling
        algorithms, and faster sampling.
---

## Example

For the separated-mixture question reproduced below, there are admissible fixed one-dimensional parameters with $L=2$, fixed positive score-error allowance $\varepsilon_s$, and every fixed integer $J\ge2$, for which the supremum of the displayed expected fidelity loss over the original finite-valued Borel score class is $+\infty$, for every finite $M\ge1$. Each individual field in the construction has a finite-first-moment Euler chain and obeys the required score bound at every time. Thus the original ideal-marginal $L^2$ hypothesis supplies no finite uniform bound for the requested loss, however large the fixed budget $JM$ is. The original question is retained verbatim under Original question.

## Example references

[Burns and Fridovich-Keil, full 2026 paper](https://arxiv.org/pdf/2605.30330v1)

[Daras et al., full diffusion inverse-problems survey](https://arxiv.org/pdf/2410.00083v1)

[Blechschmidt et al., full 2026 flow-matching paper](https://arxiv.org/pdf/2610.02377v1)

[Prince, Chapter 18 full diffusion notes](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html)

## Original question

Fix dimension $d\ge1$, component count $L\ge2$, noise scale $\sigma>0$, diffusion horizon $T>0$, and a continuous schedule $\beta:[0,T]\to(0,\infty)$. Assume the parameter choices below admit at least one component configuration and mixture weight vector. Consider a posterior density on $\mathbb R^d$ of the form
$$\pi(x)=\sum_{\ell=1}^L w_\ell\,\mathcal N(x;\mu_\ell,\Sigma_\ell),\qquad \sum_{\ell=1}^Lw_\ell=1,\quad w_\ell\ge w_{\min}>0,$$
Here $\mathcal N(\cdot;\mu_\ell,\Sigma_\ell)$ denotes the normal density with mean $\mu_\ell$ and covariance matrix $\Sigma_\ell$. The component means satisfy $\|\mu_\ell\|_2\le M_0$ and $\|\mu_\ell-\mu_r\|_2\ge\Delta>0$ for $\ell\ne r$, and every eigenvalue of each positive-definite $\Sigma_\ell$ lies in $[v_{\min},v_{\max}]$ for fixed $0<v_{\min}\le v_{\max}<\infty$. Assume $0<w_{\min}\le1/L$ and $\Delta\ge8\sqrt{d v_{\max}}$. For $t\in[0,T]$, let $p_t$ be the density of $X_t$ under
$$dX_t=-\tfrac12\beta(t)X_t\,dt+\sqrt{\beta(t)}\,dW_t,\qquad X_0\sim\pi,$$
where $W_t$ is a standard $d$-dimensional Brownian motion, and let $s_t=\nabla\log p_t$ be its exact score. Let $\widehat s_t$ be a supplied jointly Borel, finite-valued score field satisfying the integrated error bound
$$\sup_{0\le t\le T}\int_{\mathbb R^d}\|\widehat s_t(x)-s_t(x)\|_2^2p_t(x)\,dx\le\varepsilon_s^2.$$
Consider fields whose Euler chain has finite first moment. For $h=T/J$, use the reverse-time Euler convention $Z_0\sim p_T$ and
$$Z_{k+1}=Z_k+h\left[\tfrac12\beta(T-kh)Z_k+\beta(T-kh)\widehat s_{T-kh}(Z_k)\right]+\sqrt{h\beta(T-kh)}\,\zeta_k,\qquad k=0,\ldots,J-1,$$
with $\zeta_k\sim N(0,I_d)$ independent of $Z_0$ and of one another. Generate $M\ge1$ independent terminal values $X^{(1)},\ldots,X^{(M)}$ and let $\widehat\pi_{J,M}=M^{-1}\sum_{i=1}^M\delta_{X^{(i)}}$; one score evaluation per reverse step gives online budget $B=JM$. Define disjoint mode regions $R_\ell=\{x:\|x-\mu_\ell\|_2<\Delta/4\}$, target masses $q_\ell=\pi(R_\ell)$, and empirical masses $\widehat q_\ell=\widehat\pi_{J,M}(R_\ell)$. For probability measures on $\mathbb R^d$, let $W_1$ be the infimum of $E\|X-Y\|_2$ over all couplings with the specified marginals. Determine whether the integrated score-error assumption alone yields finite minimax-sharp nonasymptotic upper and lower bounds, uniformly over the stated score-field class, for
$$E\,W_1(\widehat\pi_{J,M},\pi)+\Delta\sum_{\ell=1}^L E|\widehat q_\ell-q_\ell|+\Delta\,P\{\min_{1\le\ell\le L}\widehat q_\ell=0\}$$
as a function of $d,L,w_{\min},\Delta,v_{\min},v_{\max},M_0,T,\beta,\varepsilon_s,J,M$. In particular, characterize the compute regimes $B=JM$ that guarantee simultaneous control of distributional error and missed-mode probability uniformly over this family. This asks about score-based reverse diffusion with finite computation; it does not assume that the posterior is unimodal or that a good posterior mean certifies its mode weights.

## Facts & Assumptions

**Given:** Choose $d=1$, $\pi=(N(-a,v)+N(a,v))/2$ with $a,v>0$ and $2a\ge8\sqrt v$. Choose $L=2$, $w_{\min}=1/2$, $M_0=a$, $\Delta=2a$, $v_{\min}=v_{\max}=v$, $T>0$, $\beta=1$, $\varepsilon_s>0$, $J\ge2$ and $h=T/J$. The extraneous positive parameter called $\sigma$ in the original formulation may be arbitrary; it is not used by its displayed sampler.

[A1] The integrating factor $e^{t/2}$ in the scalar forward equation gives $X_t=e^{-t/2}X_0+e^{-t/2}\int_0^t e^{u/2}\,dW_u$. The stochastic integral is the mean-square limit of deterministic dyadic sums of independent Gaussian increments; these sums are centered Gaussian, with variances tending to $\int_0^te^u\,du=e^t-1$, and are independent of $X_0$. The limit is therefore Gaussian with that variance and independent of $X_0$, as follows by taking limits of its Gaussian characteristic functions. At time $t$, the noised target is the symmetric Gaussian mixture with means $\pm e^{-t/2}a$ and common variance $v_t=e^{-t}v+1-e^{-t}>0$. Its exact score is a posterior-weighted average of $-(x-e^{-t/2}a)/v_t$ and $-(x+e^{-t/2}a)/v_t$, so $|s_t(x)|\le(|x|+a)/\min\{v,1\}$ and is continuous. These formulas follow directly by differentiating the sum of the two Gaussian densities.

[A2] A convolution with a nondegenerate Gaussian has a strictly positive continuous density: continuity follows from the bounded Gaussian derivative, and positivity from its positive kernel. Gaussian densities have finite first moments and exponentially decaying tails.

## Verification

**Given:** The fixed parameters and Gaussian identities in [A1]–[A2].

1.1 Use the exact score at all grid times before the last two updates. All those states have finite first moment because each exact-score drift has linear growth by [A1]. Let $U$ be the state before the penultimate update, corresponding to ideal time $2h$. Its law has a strictly positive continuous density $\rho$: for $J=2$ it is exactly $p_T$, and otherwise the last preceding nondegenerate Euler noise gives [A2]. Since $p_{2h}$ is also positive and continuous, the density ratio $\rho/p_{2h}$ has positive minimum $c$ and finite maximum $C$ on $[-1,1]$. [A1, A2, construct]

2.1 For every sufficiently small $q>0$, choose the centered interval $A_q\subseteq[-1,1]$ with $\int_{A_q}p_{2h}(x)\,dx=q$. Such an interval exists by continuity and positivity of that density. Then $cq\le P\{U\in A_q\}\le Cq$. Put $b_q=\varepsilon_s/(2\sqrt q)$ and add $b_q\mathbf1_{A_q}$ to the score at time $2h$. Its squared ideal-marginal error is exactly $\varepsilon_s^2/4$. Set $f(x)=(1+h/2)x+hs_{2h}(x)$ and $H=\sup_{|x|\le1}|f(x)|<\infty$. After this update the state is $V=f(U)+hb_q\mathbf1_{A_q}(U)+\sqrt h\,G$. [A1, step 1.1, construct, algebra]

3.1 Let $I_q=[hb_q-H-\sqrt h,hb_q+H+\sqrt h]$, and let $r_q=\int_{I_q}p_h(x)\,dx>0$. On $\{U\in A_q,|G|\le1\}$ the state $V$ lies in $I_q$, so $P\{V\in I_q\}\ge cqP\{|G|\le1\}$. The ideal density $p_h$ is a fixed Gaussian mixture. Since the interval width is constant and its center $hb_q$ tends to infinity, its Gaussian density formula gives constants $C_1,c_1>0$, independent of small $q$, such that $r_q\le C_1e^{-c_1b_q^2}$. For example, once $hb_q\ge2(H+\sqrt h+a)$, every point of the interval is at distance at least $hb_q/2$ from either component mean; use the largest fixed variance in its Gaussian exponent and the constant interval length. [A1, A2, step 2.1, algebra]

4.1 At the final evaluation time $h$ add $d_q\mathbf1_{I_q}$ to the exact score, where $d_q=\varepsilon_s/(2\sqrt{r_q})$. This second squared ideal-marginal error is also $\varepsilon_s^2/4$. At all other times use the exact score. These modifications at two distinct times define a jointly Borel finite-valued field with the original supremum-in-time score bound. Every individual field has finite first moments at all Euler steps: it is an affine-growth exact score plus two bounded, finite-amplitude additions. [A1, step 2.1, step 3.1, construct, algebra]

5.1 The first moment of $V$ is bounded uniformly as $q\downarrow0$: the added term has expectation at most $hb_qCq= hC\varepsilon_s\sqrt q/2$, while $E|f(U)|$ and $E|\sqrt hG|$ are fixed and finite. The terminal state is $X=(1+h/2)V+hs_h(V)+hd_q\mathbf1_{I_q}(V)+\sqrt hG'$. By [A1] the absolute expectation of the first two terms is uniformly bounded; $EG'=0$. Therefore $EX\ge h\varepsilon_scqP\{|G|\le1\}/(2\sqrt{r_q})-C_2\to+\infty$, because $b_q^2=\varepsilon_s^2/(4q)$ and the exponential bound in step 3.1 dominates every power of $q$. [A1, step 2.1, step 3.1, step 4.1, algebra]

6.1 Every coupling of two finite-first-moment probabilities satisfies $|EX-EY|\le E|X-Y|$ by the integral triangle inequality. Thus $W_1(\widehat\pi_{J,M},\pi)\ge|M^{-1}\sum_iX^{(i)}|$ because the target mean is zero. Taking expectations gives $EW_1\ge|EX|$, which tends to infinity by step 5.1 for every finite $M$. The other two terms in the requested fidelity loss are nonnegative. Its supremum is consequently infinite despite fixed positive score-error allowance and fixed admissible target parameters. [given, step 4.1, step 5.1, algebra] ∎

## Scope of the resolution

The negative answer concerns every positive error allowance and every finite J>=2. It does not assert the same obstruction at J=1 or at exactly zero error. The mechanism is mismatch between ideal marginal mass and actual chain mass, not merely missing a mode by iid sampling. No numerical observation or source-specific failure experiment is used as the proof.
