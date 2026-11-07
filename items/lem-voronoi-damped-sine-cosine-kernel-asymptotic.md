---
dependency_level: 0
id: lem-voronoi-damped-sine-cosine-kernel-asymptotic
kind: lemma
title: "Uniform damped asymptotic for Meurman's improper kernel"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: [cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-integration-by-parts, thm-substitution-for-improper-integrals, thm-gaussian-integral, thm-holomorphic-parameter-riemann-integral, thm-weierstrass-convergence-holomorphic-functions, thm-identity-theorem-holomorphic-functions]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tom Meurman, A simple proof of Voronoi's identity, Astérisque 209 (1992), 265–274"
      url: "https://numdam.org/item/AST_1992__209__265_0.pdf"
      locator: "Sections 2–3, formulas (2.2)–(2.4)"
---

## Statement

For $t>0$ and $0\le v\le1/2$, the integral
$$F(t,v):=\int_0^\infty e^{-v(u+t/u)}\cos(2\pi u)\sin(2\pi t/u)\,du$$
exists as an improper Riemann integral, with separate convergence at each end. For fixed $t>0$, $F(t,v)\to F(t,0)$ as $v\downarrow0$. For every $t_0>0$, uniformly for $t\ge t_0$ and $0\le v\le1/2$,
$$F(t,v)=\frac{t^{1/4}}{2\sqrt2}e^{-2v\sqrt t}\cos(4\pi\sqrt t-\pi/4)+O_{t_0}(t^{-1/4}).$$

## Statement references

[Meurman, Sections 2–3](https://numdam.org/item/AST_1992__209__265_0.pdf)

## Facts & Assumptions

**Given:** The real parameters in the statement. All improper integrals are limits of proper Riemann integrals, componentwise for complex functions.

[F1] [[thm-integration-by-parts]] applies to real continuously differentiable functions on compact intervals. Applying its identity to the four pairs of real and imaginary components gives complex integration by parts; taking endpoint limits is permitted whenever the displayed boundary limits and integral tails exist.

[F2] [[thm-substitution-for-improper-integrals]] permits the smooth monotone substitutions below, first on compact truncations and then separately at each end.

[F3] [[thm-gaussian-integral]] gives $\int_{\mathbb R}e^{-y^2}\,dy=\sqrt\pi$.

[F4] [[thm-holomorphic-parameter-riemann-integral]] gives holomorphy and differentiation for jointly continuous finite-interval parameter integrals. [[thm-weierstrass-convergence-holomorphic-functions]] passes holomorphy and derivatives through locally uniform limits.

[F5] [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]] gives the holomorphic logarithm on the slit plane, hence the principal square root on the right half-plane by exponentiating half that logarithm. [[thm-identity-theorem-holomorphic-functions]] extends an identity between holomorphic functions from positive real parameters to a connected right half-plane.

## Proof

1.1 Put $c=2\pi$ and $h_v(u)=e^{-v(u+t/u)}\sin(ct/u)$. On $u\ge L>2t$, $|h_v(L)|\le C_t/L$ and $\int_L^\infty|h_v'(u)|\,du\le C_t/L$, uniformly $0\le v\le1/2$. Indeed $|\sin(ct/u)|\le ct/u$, its derivative is $O_t(u^{-2})$, and the exponential derivative contributes $O_t(v e^{-vu}/u+v e^{-vu}/u^3)$; $v\int_L^\infty e^{-vu}\,du/u\le1/L$. Integration by parts against $\cos(cu)$ gives an integral tail $O_t(L^{-1})$. At zero the integrand has modulus at most one, so its integral on $(0,\eta)$ has modulus at most $\eta$. These bounds give separate improper convergence and, after restricting to $[\eta,L]$ where the integrands converge uniformly, give $F(t,v)\to F(t,0)$. The bounds are uniform when $t$ lies in a fixed positive compact interval. [F1, given]

1.2 For $a$ in the right half-plane, $G(a)=\int_{\mathbb R}e^{-ay^2}\,dy$ and its derivative are holomorphic: truncate to $[-R,R]$ and use [F4], noting that on each compact parameter set $\operatorname{Re}a\ge\delta>0$ the integrand and derivative tails are bounded by integrable multiples of $e^{-\delta y^2}(1+y^2)$. For positive real $a$, substitution and [F3] give $G(a)=\sqrt\pi a^{-1/2}$. The principal square-root branch is holomorphic on the right half-plane, so [F5] gives this identity throughout that half-plane. Differentiation by [F4] yields $\int y^2e^{-ay^2}\,dy=(\sqrt\pi/2)a^{-3/2}$. [F2, F3, F4, F5]

2.1 It suffices to prove the estimate for $t\ge1$ and $v>0$: step 1.1 then passes it to $v=0$, and also bounds the remaining positive compact $t$ range uniformly in $v$. Put $\lambda=\sqrt t$. Substituting $u\mapsto\lambda u$ and using the product-to-sum identity gives $F(t,v)=(\lambda/2)\operatorname{Im}(I_+-I_-)$, where $I_\pm=\int_0^\infty e^{\lambda[-v(u+u^{-1})+ic(u\pm u^{-1})]}\,du$. All these integrals are absolutely convergent for $v>0$. [F2, step 1.1, algebra]

3.1 For $g(u)=-v(u+u^{-1})+ic(u-u^{-1})$, one has $g'=-v+ic+(v+ic)u^{-2}$ and $|g'|\ge c(1+u^{-2})$. Twice integrating by parts gives $I_-=\lambda^{-2}\int_0^\infty((1/g')'/g')'e^{\lambda g}\,du$. The boundary terms vanish, since $v>0$ and the coefficients grow at most polynomially at either end. From $g''=-2(v+ic)u^{-3}$ and $g'''=6(v+ic)u^{-4}$ the differentiated coefficient is bounded by $C/(1+u^4)$, uniformly $v\le1/2$. Since $|e^{\lambda g}|\le1$, this proves $I_-=O(\lambda^{-2})$ uniformly in $v$. [F1, step 2.1, algebra]

3.2 Set $\alpha=v-ic$ and $y=\operatorname{sgn}(u-1)\sqrt{u+u^{-1}-2}$. This is a smooth increasing bijection from $(0,\infty)$ to $\mathbb R$, with $u=1+y^2/2+(y/2)\sqrt{y^2+4}$ and $du/dy=y+(y^2+2)/\sqrt{y^2+4}$. The odd term integrates to zero against the even, absolutely integrable Gaussian, giving $I_+=e^{-2\alpha\lambda}\int_{\mathbb R}h(y)e^{-\alpha\lambda y^2}\,dy$, where $h(y)=(y^2+2)/\sqrt{y^2+4}$. [F2, step 2.1, algebra]

4.1 The function $h$ is even, $h(y)=1+3y^2/8+O(y^4)$ at zero, and $h(y)=|y|+O(|y|^{-3})$ at infinity, with these estimates differentiable any fixed number of times. Set $r(y)=h(y)-1-3y^2/8$ and $T(y)=((r(y)/y)'/y)'$. The apparent singularity of $T$ at zero is removable because $r(y)=O(y^4)$; at infinity the displayed expansion gives $T(y)=O(y^{-2})$. Hence $\int_{\mathbb R}|T|<\infty$. Twice integrating by parts gives $\int r(y)e^{-\alpha\lambda y^2}\,dy=(4\alpha^2\lambda^2)^{-1}\int T(y)e^{-\alpha\lambda y^2}\,dy=O(\lambda^{-2})$, uniformly $v>0$. At zero the intermediate boundary factors vanish; at infinity their polynomial growth is killed by $e^{-v\lambda y^2}$. [F1, step 3.2, algebra]

5.1 Applying step 1.2 to $a=\alpha\lambda$, and step 4.1 to the remainder, gives $I_+=e^{-2\alpha\lambda}[\sqrt\pi(\alpha\lambda)^{-1/2}+(3\sqrt\pi/16)(\alpha\lambda)^{-3/2}+O(\lambda^{-2})]$. On $0\le v\le1/2$, $\alpha^{-1/2}-(-ic)^{-1/2}=O(v)$, and $ve^{-2v\lambda}\le C/\lambda$. Thus $I_+=(1/\sqrt2)\lambda^{-1/2}e^{-2v\lambda}e^{i(4\pi\lambda+\pi/4)}+O(\lambda^{-3/2})$. Combine this with step 3.1 and $F=(\lambda/2)\operatorname{Im}(I_+-I_-)$; $\sin(4\pi\lambda+\pi/4)=\cos(4\pi\lambda-\pi/4)$. This is the required estimate, and step 2.1 supplies the full parameter range. [step 2.1, step 3.1, step 4.1, step 1.2, algebra] ∎
