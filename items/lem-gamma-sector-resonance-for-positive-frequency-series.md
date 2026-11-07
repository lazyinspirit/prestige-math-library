---
id: lem-gamma-sector-resonance-for-positive-frequency-series
kind: lemma
title: "Gamma-sector resonance without frequency independence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-euler-gamma-function
  - thm-holomorphic-logarithms-homologically-simply-connected-domains
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "No extra choice hypothesis; specified finite data, absolute numerical tails and proper Riemann integrals."
sources:
  references:
    - title: "Youness Lamzouri, Sharp Omega Results for the Divisor and Circle Problems"
      url: "https://arxiv.org/pdf/2605.21476v1"
      locator: "Theorem1.2, Proposition2.1 and complete§2, printedpp4–10; the stated inequality permits every fixed sector parameter satisfying the exact displayed trigonometric condition."
---

## Statement

Let $f(n)\ge0$, $\sum_nf(n)=F_0<\infty$, and let $\lambda_n>0$ be specified real frequencies. Put $F(t)=\sum_nf(n)e^{2\pi i\lambda_nt}$. Fix $-\pi/2<\beta<\pi/2$, $0<r<1$, $0<\alpha<1$ and $\delta>0$ satisfying
$$\cos\beta-|\sin\beta|\tan(\alpha\pi/2)\ge\delta.$$
For every finite set $\mathcal M$ of cardinality $M$ and $3<Y<U$,
$$\max_{Y\le t\le U}\Re(e^{i\beta}F(t)) \ge\delta r\sum_{m\in\mathcal M}f(m) -C_{\alpha}\,F_0\left(\frac{1+r}{1-r}\right)^M \left(\frac{Y\log U}{U}\right)^\alpha.$$
There is no separation or rational-independence hypothesis on any frequency.

## Statement references

[Lamzouri](https://arxiv.org/pdf/2605.21476v1)

## Facts & Assumptions

**Given:** The specified nonnegative coefficients, absolute total, frequencies, finite set and fixed scalar parameters.

[F1] [[def-euler-gamma-function]] gives the positive finite Euler integral $\Gamma(\alpha)$.

[F2] [[thm-holomorphic-logarithms-homologically-simply-connected-domains]] supplies the principal right-half-plane power. For a specified compact set of Laplace parameters with positive real part, the integral and its derivatives below have explicit exponentially decaying tails.

## Proof

1.1 Define $K_\alpha(t)=t^{\alpha-1}e^{-t}/\Gamma(\alpha)$ for $t>0$, zero otherwise. It is nonnegative and has integral1. Its transform is [F1, F2, given, algebra]
$$\widehat K_\alpha(\xi)=\int_0^\infty K_\alpha(t)e^{-2\pi i\xi t}dt=(1+2\pi i\xi)^{-\alpha}.$$
Indeed the Laplace integral $\int_0^\infty t^{\alpha-1}e^{-zt}dt=\Gamma(\alpha)z^{-\alpha}$ for real $z>0$ follows by substitution. Both sides are holomorphic for $\Re z>0$: on each compact parameter set the differentiated tails are bounded by $C_m t^{\alpha+m-1}e^{-ct}$, and near0 by the integrable power $t^{\alpha-1}$. Analytic continuation gives the stated transform. Its argument lies in $(-\alpha\pi/2,\alpha\pi/2)$, hence its real part is positive and
$$\Re(e^{i\beta}\widehat K_\alpha(\xi))\ge\delta\Re\widehat K_\alpha(\xi)\ge0.$$
This is exactly $\cos(\beta+\theta)=\cos\theta(\cos\beta-\sin\beta\tan\theta)$ with $|\tan\theta|\le\tan(\alpha\pi/2)$. [F1, F2, given, algebra]

2.1 Use the explicit product resonator $R(t)=\prod_{m\in\mathcal M}(1-re^{2\pi i\lambda_mt})^{-1}$. Its uniformly absolutely convergent expansion has frequencies $v=\sum_{m\in\mathcal M}b_m\lambda_m$, $b_m\ge0$, and coefficient [step 1.1, given, algebra]
$$a_r(v)=\sum_{\sum b_m\lambda_m=v}r^{\sum b_m},\qquad \sum_va_r(v)=(1-r)^{-M}.$$
For nonempty $\mathcal M$ each representation set is finite, since $b_m\le v/\min_m\lambda_m$; the empty-set case has only $v=0$ and coefficient1. Coincident frequencies are grouped with their full multiplicity. Increasing one $b_m$ injects representations, proving $a_r(v+\lambda_m)\ge r a_r(v)$. All sum-integral interchanges below follow first by finite truncation and then from the absolute majorant $F_0(1-r)^{-2M}\int K_\alpha(t/T)dt$. [step 1.1, given, algebra]

3.1 Put $I_1=\int_0^\infty |R(t)|^2K_\alpha(t/T)dt$ and $I_2=\int_0^\infty\Re(e^{i\beta}F(t))|R(t)|^2K_\alpha(t/T)dt$. Expanding gives [step 1.1, step 2.1, algebra]
$$I_2=T\sum_nf(n)\sum_{u,v}a_r(u)a_r(v)\Re(e^{i\beta}\widehat K_\alpha((v-u-\lambda_n)T)).$$
Apply the sector inequality, retain $n\in\mathcal M$ and $v=w+\lambda_n$, and use the injective coefficient inequality. Every retained real transform is nonnegative, so
$$I_2\ge\delta r\left(\sum_{m\in\mathcal M}f(m)\right) T\sum_{u,w}a_r(u)a_r(w)\Re\widehat K_\alpha((w-u)T) =\delta r\left(\sum_{m\in\mathcal M}f(m)\right)I_1.$$
Also $I_1\ge T\sum_va_r(v)^2\ge T\sum_va_{r^2}(v)=T(1-r^2)^{-M}$. The second inequality expands the square of each finite positive representation sum and keeps its diagonal. Thus no frequency-independence assertion has been used. [step 1.1, step 2.1, algebra]

4.1 Set $T=U/(2\log U)\ge1$. Since $|R|\le(1-r)^{-M}$, $K_\alpha(t)\ll_\alpha t^{\alpha-1}$ everywhere and $K_\alpha(t)\ll_\alpha e^{-t}$ for $t\ge1$, the discarded mass outside $[Y,U]$ is [step 1.1, step 3.1, algebra]
$$J_{\rm out}:=\int_{(0,Y)\cup(U,\infty)}|R(t)|^2K_\alpha(t/T)dt \ll_\alpha (1-r)^{-2M}\{T^{1-\alpha}Y^\alpha+TU^{-2}\} \ll_\alpha (1-r)^{-2M}T(Y/T)^\alpha.$$
Here $U/T=2\log U>1$ and $U^{-2}\le(Y/T)^\alpha$ for $3<Y<U$, after an absolute constant. Let $V=\max_{[Y,U]}\Re(e^{i\beta}F)$. This maximum exists by uniform convergence and continuity. Since $|V|\le F_0$, splitting both integrals in step 3.1 gives $VI_1\ge\delta r(\sum_{\mathcal M}f)I_1-2F_0J_{\rm out}$. Divide by the positive lower bound for $I_1$ there and substitute $Y/T=2Y\log U/U$. This proves the full asserted bound, with constants depending only on the fixed kernel parameter. [step 1.1, step 3.1, algebra] ∎
