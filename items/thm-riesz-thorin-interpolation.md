---
id: thm-riesz-thorin-interpolation
kind: theorem
title: "Riesz-Thorin interpolation theorem"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-riesz-thorin-bound-on-the-finite-simple-core, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, thm-complex-lp-completeness-and-almost-everywhere-subsequences, def-countable-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 6.27"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 24.2"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

Assume countable choice. Work with complex-valued $L^p$ spaces and a complex-linear operator.
Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be measure spaces. Let
$1\le p_0,p_1<\infty$, let $1<q_0,q_1<\infty$, let $0<\theta<1$, and define
$$\frac1{p_\theta}:=\frac{1-\theta}{p_0}+\frac{\theta}{p_1}, \qquad \frac1{q_\theta}:=\frac{1-\theta}{q_0}+\frac{\theta}{q_1},$$

Suppose $T$ is a complex-linear map from the almost-everywhere classes of complex finite simple functions with finite-measure nonzero set on $X$ to measurable complex almost-everywhere classes on $Y$, and suppose $M_0,M_1\ge0$ satisfy
$$\|Tf\|_{q_0}\le M_0\|f\|_{p_0}, \qquad \|Tf\|_{q_1}\le M_1\|f\|_{p_1}$$
for every such $f$. Then $T$ extends uniquely to a bounded linear operator
$$\widetilde T:L^{p_\theta}(\mu;\mathbb C)\to L^{q_\theta}(\nu;\mathbb C)$$
satisfying
$$\|\widetilde T f\|_{q_\theta}\le M_0^{1-\theta}M_1^\theta\|f\|_{p_\theta} \qquad(f\in L^{p_\theta}(\mu)).$$

## Facts & Assumptions

**Given:** Countable choice, the complex-linear operator $T$ on finite simple classes, endpoint bounds with nonnegative constants $M_0,M_1$, and $0<\theta<1$.

[L1] On arbitrary measure spaces, the finite-simple-core interpolation lemma gives $\|Tf\|_{q_\theta}\le M_0^{1-\theta}M_1^\theta\|f\|_{p_\theta}$ for every complex finite simple class when $q_0,q_1<\infty$. Its proof normalizes nonzero inputs and dual tests, establishes finite pairing integrals and strip holomorphy, then uses three-lines and finite-simple dual tests to prove target membership. ([[lem-riesz-thorin-bound-on-the-finite-simple-core]])

[L2] Complex finite simple classes with finite-measure nonzero set are dense in $L^p(\mu;\mathbb C)$ for finite $p$, on every measure space. ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]])

[L3] Assuming countable choice, every complex $L^q$ is complete. ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]], [[def-countable-choice]])

## Proof

**Proof technique:** the published normalized finite-simple-core estimate, followed by completion.

1.1 Since both target endpoint exponents are finite, [L1] applies on the arbitrary measure spaces in the statement. Put $K=M_0^{1-\theta}M_1^\theta$. For every finite simple class $f$ in the domain of $T$, it proves both $Tf\in L^{q_\theta}(\nu;\mathbb C)$ and [L1, given]
$$\|Tf\|_{q_\theta}\le K\|f\|_{p_\theta}.$$
The source proof treats $f=0$ separately and normalizes every nonzero $f$ before applying the three-lines bound, so the endpoint powers of its norm are not replaced by a first power without justification. This also covers $M_0=0$ or $M_1=0$. [L1, given]

2.1 Let $f\in L^{p_\theta}(\mu;\mathbb C)$. Since $p_\theta<\infty$, [L2] supplies a sequence of finite simple classes $f_n\to f$ in $L^{p_\theta}$. By step 1.1, $(Tf_n)$ is Cauchy in $L^{q_\theta}$. Countable choice is used through [L3] to obtain its limit; define $\widetilde T f=\lim_nTf_n$. [L2, L3, step 1.1]

3.1 If $g_n\to f$ is another finite-simple approximation, step 1.1 gives [step 1.1, step 2.1]
$$\|Tf_n-Tg_n\|_{q_\theta}\le K\|f_n-g_n\|_{p_\theta}\to0,$$
so the limit is independent of the approximation. Taking limits in the same estimate gives $\|\widetilde T f\|_{q_\theta}\le K\|f\|_{p_\theta}$. Constant approximations show that $\widetilde T$ extends $T$, and termwise linearity shows that it is complex-linear. [step 1.1, step 2.1]

4.1 Any bounded linear extension agrees with $T$ on the dense core from [L2]; continuity makes it agree with $\widetilde T$ on every $f$. Thus the extension is unique and has the asserted norm bound. [L2, step 3.1] ∎
