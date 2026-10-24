---
id: lem-lp-interpolation-absorbs-lower-order-derivatives
kind: lemma
title: "$L^p$ interpolation absorption of first derivatives by second derivatives"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 0
deps: [thm-mihlin-fourier-multiplier-theorem, def-mihlin-symbol-with-more-than-half-dimension-derivatives, def-lp-fourier-multiplier-and-multiplier-norm, def-translation-invariant-fourier-multiplier-on-schwartz-space, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, def-sobolev-space-wkp-and-its-norm, thm-meyers-serrin-density-on-an-arbitrary-open-set, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, lem-ltwo-fourier-multiplier-bound, thm-newton-leibniz-with-a-countable-exceptional-set, thm-fubini-over-a-region-between-continuous-graphs, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-holder-inequality-for-integrals, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "Part III of the proof of Theorem 3.8, the Gagliardo–John–Nirenberg interpolation and the $\\epsilon$-absorption (3.16), printed p. 105 (read in full)"
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§7.6, the cutoff-and-Riesz-transform bootstrap with the multiplier bounds, printed pp. 137-139 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, the interpolation estimates used to absorb intermediate norms, printed pp. 127-133 (read in full)"
---

## Statement

Assume Countable Choice. Let $n\ge1$ and $1<p<\infty$, and for a function with the relevant weak derivatives write $\|Du\|_{L^p}:=\max_{|\beta|=1}\|D^\beta u\|_{L^p}$ and $\|D^2u\|_{L^p}:=\max_{|\beta|=2}\|D^\beta u\|_{L^p}$, equivalent to the sum-form Sobolev norms of [[def-sobolev-space-wkp-and-its-norm]] up to constants depending on $n$. For every $\varepsilon>0$ there is $C=C(n,p,\varepsilon)<\infty$ such that every $u\in W^{2,p}(\mathbb R^n)$ satisfies
$$\|Du\|_{L^p(\mathbb R^n)}\le\varepsilon\|D^2u\|_{L^p(\mathbb R^n)}+C\|u\|_{L^p(\mathbb R^n)}.$$
The scaled form on balls, with the norm over the doubled ball on the right, is
$$\|Du\|_{L^p(B_R(x_0))}\le\varepsilon R\|D^2u\|_{L^p(B_{2R}(x_0))}+C R^{-1}\|u\|_{L^p(B_{2R}(x_0))}\qquad\bigl(u\in W^{2,p}(B_{2R}(x_0))\bigr),$$
with $C$ independent of $R$ and $x_0$. This is the absorption inequality used in the frozen-coefficient $W^{2,p}$ estimates. The result is asserted for the strict range $1<p<\infty$ only; the form with the same ball on both sides is not claimed here.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge1$, $1<p<\infty$, a fixed $\varepsilon>0$, the Euclidean ball $B_R(x_0)=\{x:|x-x_0|<R\}$, and the multiplier and Sobolev conventions below.

[A1] The only choice assumption is Countable Choice $\mathrm{AC}_\omega$; it enters through the choice-qualified Fourier, multiplier, Sobolev and measure interfaces cited below. No full Axiom of Choice is used. ([[def-countable-choice]])

[F1] A measurable $m$ is a Mihlin symbol when $m=m_0$ a.e. for some $m_0\in C^q(\mathbb R^n\setminus\{0\})$, $q=\lfloor n/2\rfloor+1$, with $|\partial^\alpha m_0(\xi)|\le C_\alpha|\xi|^{-|\alpha|}$ for $|\alpha|\le q$ and $\xi\ne0$. Every Mihlin symbol is an $L^p$ multiplier for $1<p<\infty$ with $\|m\|_{M_p}\le C_n\max(p,(p-1)^{-1})(A+\|m\|_\infty)$, $A=\max_{|\alpha|\le q}C_\alpha$, in the multiplier conventions of the cited items. ([[def-mihlin-symbol-with-more-than-half-dimension-derivatives]], [[thm-mihlin-fourier-multiplier-theorem]], [[def-lp-fourier-multiplier-and-multiplier-norm]], [[def-translation-invariant-fourier-multiplier-on-schwartz-space]])

[F2] The Fourier transform is the negative-sign $2\pi$-normalized transform, an automorphism of $\mathcal S'(\mathbb R^n)$ that is injective on tempered distributions, with $\mathcal F(\partial^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ for every multi-index $\alpha$. ([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]], [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]])

[F3] For finite $p$ the Sobolev norm of [[def-sobolev-space-wkp-and-its-norm]] is the $p$-sum of the $L^p$ norms of the weak derivatives, and $L^p(\mathbb R^n)$ norms obey the triangle inequality; the mixed higher derivatives are the canonical-order weak derivatives $D^\beta$ of [[def-ck-and-multi-index-notation-in-several-variables]].

[F4] For $n\ge1$, $k\in\mathbb N_0$ and $1\le p<\infty$, the compactly supported smooth functions are dense in $W^{k,p}(\mathbb R^n)$; and on any open set, $C^\infty\cap W^{k,p}$ is dense in $W^{k,p}$. ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[thm-meyers-serrin-density-on-an-arbitrary-open-set]])

[F5] For $g\in C^2([a,b])$ one has $g(b)-g(a)=\int_a^b g'(t)\,dt$, and the weighted identity $\frac{1}{2s}\int_{-s}^s\bigl(g'(t)-g'(0)\bigr)dt=\frac{1}{2s}\int_{-s}^s\operatorname{sign}(t)(s-|t|)g''(t)\,dt$ for $g\in C^2([-s,s])$; iterated integrals of continuous functions over a triangle may be exchanged, and Lebesgue measure is invariant under translations of $\mathbb R^n$. ([[thm-newton-leibniz-with-a-countable-exceptional-set]], [[thm-fubini-over-a-region-between-continuous-graphs]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[F6] For a nonnegative measurable $f$ on a finite-measure set $E$, $\bigl(\int_E f\bigr)^p\le|E|^{p-1}\int_E f^p$; this is Hölder with the pair $(p,p/(p-1))$ and the constant function. ([[thm-holder-inequality-for-integrals]])

## Proof

**Proof technique:** direct.

1.1 The multiplier symbol. Fix an index $i$ and, for $\varepsilon>0$, define $m_\varepsilon(\xi):=\dfrac{2\pi i\xi_i}{4\pi^2\varepsilon|\xi|^2+1}$ for $\xi\in\mathbb R^n$. Writing $\eta:=2\pi\sqrt\varepsilon\,\xi$ and $g(\eta):=\eta_i/(|\eta|^2+1)$, we have $m_\varepsilon(\xi)=i\varepsilon^{-1/2}g(\eta)$ and hence $\partial^\alpha_\xi m_\varepsilon(\xi)=i\varepsilon^{-1/2}(2\pi\sqrt\varepsilon)^{|\alpha|}(\partial^\alpha g)(\eta)$; therefore $|\xi|^{|\alpha|}|\partial^\alpha_\xi m_\varepsilon(\xi)|=\varepsilon^{-1/2}|\eta|^{|\alpha|}|(\partial^\alpha g)(\eta)|\le C_\alpha\varepsilon^{-1/2}$ and $\|m_\varepsilon\|_\infty=\varepsilon^{-1/2}\sup_\eta|\eta|/(1+|\eta|^2)=\tfrac12\varepsilon^{-1/2}$, because $g$ and all of its derivatives are bounded on $\mathbb R^n$ and $|\eta|^{|\alpha|}|\partial^\alpha g|$ is bounded (near zero the derivatives of $g$ are bounded, while for $|\eta|\ge1$ the quotient rule gives $|\partial^\alpha g(\eta)|\le C_\alpha|\eta|^{-1-|\alpha|}$). Thus $m_\varepsilon$ is a Mihlin symbol with constants $C_\alpha\varepsilon^{-1/2}$, and [F1] gives the $L^p$ bound $\|T_{m_\varepsilon}h\|_{L^p}\le C_{n,p}\varepsilon^{-1/2}\|h\|_{L^p}$ for every $h\in L^p$, and $T_{m_\varepsilon}(\varepsilon(-\Delta u)+u)=\partial_iu$ for $u\in C_c^\infty(\mathbb R^n)$. [F1, F2, F3, given, algebra]

1.2 One-dimensional identity along a coordinate line. Let $v\in C^2(\mathbb R^n)$, $y\in\mathbb R^n$, $s>0$ and $i\in\{1,\dots,n\}$, and put $g(t):=v(y+te_i)$ for $t\in[-s,s]$. Since $g'(0)=\partial_iv(y)$, $g'(t)=\partial_iv(y+te_i)$ and $g''(t)=\partial_i^2v(y+te_i)$, the first identity of [F5] applied on $[-s,s]$ gives $\frac{1}{2s}\int_{-s}^s g'(t)\,dt=\frac{g(s)-g(-s)}{2s}$, while the weighted second identity of [F5] gives $|g'(0)-\frac{g(s)-g(-s)}{2s}|=\bigl|\frac{1}{2s}\int_{-s}^s\operatorname{sign}(t)(s-|t|)g''(t)\,dt\bigr|\le\frac12\int_{-s}^s|g''(t)|\,dt$. Hence $|\partial_iv(y)|\le\frac{1}{2s}\bigl|v(y+se_i)-v(y-se_i)\bigr|+\frac12\int_{-s}^s\bigl|\partial_i^2v(y+te_i)\bigr|\,dt$. [F5, algebra]

2.1 Global form for smooth compact data. Let $u\in C_c^\infty(\mathbb R^n)$. On the Fourier side $\mathcal F\bigl(\varepsilon(-\Delta u)+u\bigr)=(4\pi^2\varepsilon|\xi|^2+1)\widehat u$ by [F2], so $m_\varepsilon\cdot\mathcal F(\varepsilon(-\Delta u)+u)=2\pi i\xi_i\widehat u=\mathcal F(\partial_iu)$; two tempered distributions with the same Fourier transform are equal by [F2], hence $T_{m_\varepsilon}(\varepsilon(-\Delta u)+u)=\partial_iu$. Step 1.1 and $\|\Delta u\|_{L^p}\le n\|D^2u\|_{L^p}$ therefore give $\|\partial_iu\|_{L^p}\le C_{n,p}\varepsilon^{-1/2}\bigl(\varepsilon n\|D^2u\|_{L^p}+\|u\|_{L^p}\bigr)$, that is $\|\partial_iu\|_{L^p}\le C_{n,p}n\sqrt\varepsilon\,\|D^2u\|_{L^p}+C_{n,p}\varepsilon^{-1/2}\|u\|_{L^p}$; replacing $\sqrt\varepsilon\, C_{n,p}n$ by a new $\varepsilon>0$ yields the global form $\|Du\|_{L^p}\le\varepsilon\|D^2u\|_{L^p}+C_{n,p}\varepsilon^{-1}\|u\|_{L^p}$ for every smooth compactly supported $u$ and every $\varepsilon>0$. [step 1.1, F2, F3, algebra]

2.2 Local estimate for smooth functions. Fix a ball $B_R(x_0)$, let $0<s\le R$ and $v\in C^\infty(B_{2R}(x_0))$; the points $y\pm se_i$ and $y+te_i$, $|t|\le s$, lie in $B_{2R}(x_0)$ whenever $y\in B_R(x_0)$. Raise the inequality of step 1.2 to the power $p$, use $(a+b)^p\le 2^p(a^p+b^p)$, integrate over $y\in B_R(x_0)$ and apply [F6] to the inner integral over $t\in[-s,s]$: $$\int_{B_R}\bigl|\partial_iv\bigr|^p dy\le 2^{2p}\Bigl[(2s)^{-p}\int_{B_R}\bigl(|v(y+se_i)|^p+|v(y-se_i)|^p\bigr)dy+2^{-p}(2s)^{p-1}\int_{B_R}\int_{-s}^s\bigl|\partial_i^2v(y+te_i)\bigr|^p dt\,dy\Bigr].$$ By translation invariance [F5] the first integral is at most $2\|v\|^p_{L^p(B_{2R})}$ and the second at most $2s\|D^2v\|^p_{L^p(B_{2R})}$ (the inner $y$-integrals are integrals over translate balls contained in $B_{2R}(x_0)$). Taking the $p$-th root and the maximum over $i$ gives $\|Dv\|_{L^p(B_R)}\le C_{n,p}\bigl(s^{-1}\|v\|_{L^p(B_{2R})}+s\|D^2v\|_{L^p(B_{2R})}\bigr)$ for every $0<s\le R$. [step 1.2, F3, F5, F6, algebra]

3.1 Density. Let $u\in W^{2,p}(\mathbb R^n)$ and let $u_k\in C_c^\infty(\mathbb R^n)$ satisfy $u_k\to u$ in $W^{2,p}(\mathbb R^n)$, which exists by [F4]. Applying step 2.1 to $u_k-u_l$ and to $u_k$ and letting $k\to\infty$ gives, in the limit, $\|Du\|_{L^p}\le\varepsilon\|D^2u\|_{L^p}+C_{n,p}\varepsilon^{-1}\|u\|_{L^p}$: all three norms converge along the sequence and the constant is unchanged. This is the global form of the statement for every $W^{2,p}$ class. [step 2.1, F3, F4, algebra]

3.2 Choosing the scale and passing to $W^{2,p}$ on the ball. In step 2.2 put $s:=\min\{R,\varepsilon R/(C_{n,p})\}$; then $s\le R$ and $s^{-1}\le \max\{R^{-1},C_{n,p}\varepsilon^{-1}R^{-1}\}\le C_{n,p}\varepsilon^{-1}R^{-1}$ for $0<\varepsilon\le C_{n,p}$, while for $\varepsilon>C_{n,p}$ the inequality is implied by the case $\varepsilon=C_{n,p}$ (the right-hand side is increasing in $\varepsilon$); hence for every $\varepsilon>0$ there is $C(n,p,\varepsilon)<\infty$ with $\|Dv\|_{L^p(B_R)}\le\varepsilon R\|D^2v\|_{L^p(B_{2R})}+CR^{-1}\|v\|_{L^p(B_{2R})}$ for every smooth $v$ on $B_{2R}(x_0)$. Finally let $u\in W^{2,p}(B_{2R}(x_0))$ and approximate it in $W^{2,p}(B_{2R}(x_0))$ by smooth functions on that ball, which exist by [F4]; the estimate is stable under this convergence, so it holds for $u$ as well. This is the scaled form of the statement, uniformly in $x_0$ and $R$. [step 2.2, F3, F4, algebra]

4.1 Conclusion. The global form is step 3.1 and the scaled form is step 3.2. Both were derived using only the Countable Choice instances recorded in [A1], namely those of the Fourier, multiplier, Sobolev-density and measure-translation interfaces; no extension operator and no full Axiom of Choice is used, which is why the scaled form is stated with the doubled ball on the right. The strict range $1<p<\infty$ is used in the Mihlin theorem and nowhere else; the first-order identity of step 1.2 and the absorption of step 2.2 are elementary. [step 3.1, step 3.2, A1, given] ∎

## Remarks

- The scale choice in step 3.2 is the only place where the parameter $s$ is optimized; the equality of the two forms after renaming $\varepsilon$ in step 2.1 is the classical "absorb the intermediate norm" step of the Gagliardo–Nirenberg interpolation.
- The undoubled ball form $\|Du\|_{L^p(B_R)}\le\varepsilon R\|D^2u\|_{L^p(B_R)}+CR^{-1}\|u\|_{L^p(B_R)}$ is a stronger statement on a bounded domain; an extension theorem gives one proof, but no necessity of a choice axiom is asserted. The doubled form above is what the local $W^{2,p}$ estimates actually consume.
