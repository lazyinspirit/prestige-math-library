---
dependency_level: 10
id: lem-riemann-zeta-choice-free-classical-strip-reciprocal-bound
kind: lemma
title: "Choice-free classical-strip reciprocal bound for the Riemann zeta function"
status: draft
origin: session
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-korobov-vinogradov-zero-free-region-for-riemann-zeta
  - thm-korobov-vinogradov-hurwitz-zeta-estimate
  - lem-log-derivative-bound-from-disc-zero-factorization
  - thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-euler-product-for-riemann-zeta
  - thm-heine-borel-r
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - thm-holomorphic-logarithms-homologically-simply-connected-domains
  - prop-star-shaped-plane-domains-are-homologically-simply-connected
  - thm-fundamental-theorem-for-complex-line-integrals
  - thm-chain-rule-for-complex-derivatives
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Green and Tao, The primes contain arbitrarily long arithmetic progressions, Annals167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "AppendixA reciprocal-strip input; stronger local foundation proof from the actual supplied KV/Hurwitz/disc interfaces, without a new external theorem premise"
---

## Statement

There are absolute constants $b,C>0$ such that the Riemann zeta function has no zeros on
$$\operatorname{Re}s\ge1-\frac b{\log(|\operatorname{Im}s|+2)},$$
and throughout this region
$$|1/\zeta(s)|\le C\log(|\operatorname{Im}s|+2).$$
At its pole $s=1$, the reciprocal means its holomorphic removable extension, with valuezero. For $|\operatorname{Im}s|\le3$ and $1-b/\log(|\operatorname{Im}s|+2)\le\operatorname{Re}s\le2$, one also has $1/\zeta(s)=O(|s-1|)$. No choice axiom is assumed and no pole-uniform bound for $\zeta'/\zeta$ is asserted.

## Facts & Assumptions

**Given:** The actual unqualified zeta interfaces below. All constants are absolute, and a finite subcover is the only covering selection used.

[F1] [[thm-korobov-vinogradov-zero-free-region-for-riemann-zeta]] gives no zeros for $\sigma>1-\kappa(|t|)$, where $\kappa(T)=[C_0(\log(T+4))^{2/3}(\log\log(T+4))^{1/3}]^{-1}$ for an absolute $C_0>0$.

[F2] [[thm-korobov-vinogradov-hurwitz-zeta-estimate]], at $\alpha=1$, bounds $|\zeta(s)|$ by $1+|s-1|^{-1}+C(\log(|t|+4))^{2/3}\exp(C\max(0,1-\sigma)^{3/2}\log(|t|+4))$ for $\sigma\ge1/2$.

[F3] [[lem-log-derivative-bound-from-disc-zero-factorization]] gives $|f'/f|\le C\log(M/|f(s_0)|)/\rho$ on the inner $\rho/3$-disc when $f$ is holomorphic near the closed $\rho$-disc centered at $s_0$, $f(s_0)\ne0$, and that disc has no zeros; $M$ is its boundary maximum. This is its empty-zero-sum case.

[F4] [[thm-euler-product-for-riemann-zeta]] gives the absolutely convergent Euler product to the right of1. [[thm-riemann-zeta-continuation-to-the-right-half-plane]] gives residue one at the only pole1 in the right half-plane. [[thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane]] gives nonvanishing on the line and to its right.

[F5] [[thm-heine-borel-r]] makes every closed real interval compact by a canonical bisection proof without choice. [[cor-holomorphic-functions-are-real-analytic-and-smooth]] gives continuity of holomorphic functions.

[F6] An open disc is homologically simply connected by [[prop-star-shaped-plane-domains-are-homologically-simply-connected]], and a nonvanishing holomorphic function on it has a holomorphic logarithm by [[thm-holomorphic-logarithms-homologically-simply-connected-domains]]. Differentiating its exponential with [[thm-chain-rule-for-complex-derivatives]] and [[thm-complex-exponential-is-entire-with-derivative-itself]] gives the logarithmic derivative. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] identifies its real part with the logarithm of the modulus, and [[thm-fundamental-theorem-for-complex-line-integrals]] gives its endpoint difference as the integral of its derivative along a segment.

## Proof

1.1 Put $T=|t|$, $X=\log(T+4)$ and $Y=\log X$. For sufficiently large $T$, $\kappa(T+1)\ge\kappa(T)/2$ by the fixed-increment ratios of the two logarithms, and $\kappa(T)<1/2$. Set $s_0=1+X^{-1}+it$ and $\rho=\kappa(T)/8$. For every $s$ in the closed $2\rho$-disc, $||\operatorname{Im}s|-T|\le2\rho<1$, so $\kappa(|\operatorname{Im}s|)\ge\kappa(T)/2$. Also $\operatorname{Re}s\ge1+X^{-1}-\kappa(T)/4>1-\kappa(|\operatorname{Im}s|)$. Thus even this larger disc lies STRICTLY in [F1]'s zero-free region, with real part above $1/2$ and height away from the pole. In particular zeta is holomorphic on a neighborhood of the closed $\rho$-disc and its zero sum in [F3] is empty. The radius here is the actual zero-free width, not the larger Hurwitz disc scale $(\log\log T)^{2/3}/(\log T)^{2/3}$. [F1, F4, given, algebra]

2.1 On the closed $\rho$-disc, $\Theta=\max(0,1-\operatorname{Re}s)\le\rho$ and $\log(|\operatorname{Im}s|+4)\asymp X$. Hence $\Theta^{3/2}X\le C Y^{-1/2}$ and [F2] bounds its maximum by $M\le C X^{2/3}$ for large $T$. At the center, absolute convergence of the Euler product in [F4] gives $$1/|\zeta(s_0)|\le\prod_p(1+p^{-1-1/X})\le\zeta(1+1/X)\le1+X,$$ where the last bound follows by comparing its positive series with its integral. Therefore $\log(M/|\zeta(s_0)|)\le C Y$. By [F3], throughout $|s-s_0|\le\rho/3$, $$|\zeta'(s)/\zeta(s)|\le C X^{2/3}Y^{4/3}.$$ This uses an Euler LOWER bound at the center and a Hurwitz UPPER bound on a genuinely zero-free disc, not an unsupported lower bound inferred from the latter. [F2, F3, F4, step 1.1, algebra]

3.1 Fix temporarily $0<b\le1$. If $1-b/\log(T+2)\le\sigma\le1+1/X$, then for large $T$, $|\sigma-(1+1/X)|\le3/X$. Since $X^{-1}/\rho\to0$, the segment from $s_0$ to $\sigma+it$ lies in the inner disc. Choose one holomorphic logarithm there by [F6]; its derivative is $\zeta'/\zeta$, so its real endpoint change has absolute value at most $C X^{-1/3}Y^{4/3}$ by step2.1 and [F6]. This tends tozero. Exponentiation and the center bound give $1/|\zeta(\sigma+it)|\le C X$. If $\sigma\ge1+1/X$, [F4] directly gives $1/|\zeta(\sigma+it)|\le\zeta(\sigma)\le1+X$. Thus the asserted nonvanishing and reciprocal bound hold at every sufficiently large height, uniformly for any eventual $b\le1$. Only a single disc logarithm for a fixed point is used; no family of logarithms is selected. [F4, F6, step 1.1, step 2.1, algebra]

4.1 Choose a fixed height $T_0\ge30$ above the preceding absolute thresholds. Put $h(s)=(s-1)\zeta(s)$, extending $h(1)=1$ by [F4]. It is holomorphic on $\operatorname{Re}s>0$ and nonzero at every $1+it$, $|t|\le T_0$. For ALL pairs $(t,r)$ such that $r>0$ and $|h(s)-h(1+it)|<|h(1+it)|/2$ for $|s-(1+it)|<r$, the intervals $(t-r/2,t+r/2)$ cover $[-T_0,T_0]$ by continuity [F5]. Apply [F5] to this property-defined cover and take a finite subcover $(t_j,r_j)$. Shrink every radius below $1/2$ if needed before forming the cover, so the discs remain in the right half-plane. Let $\eta=\min_j r_j/2>0$ and $d=\min_j|h(1+it_j)|/2>0$. If $|t|\le T_0$ and $|\sigma-1|<\eta$, choose a covering interval containing $t$. Its distance estimate $|(\sigma+it)-(1+it_j)|<r_j$ gives $|h(\sigma+it)|\ge d$. Hence there are no zeros in this strip, and $1/\zeta(s)=(s-1)/h(s)$ is $O(|s-1|)$ there, including its removable zero at1. To the right, $\sigma\ge1+\eta/2$ has the uniform Euler reciprocal bound $1+2/\eta$, so together these estimates cover all $\sigma>1-\eta/2$ at bounded heights. Choose $b>0$ with $b\le1$ and $b/\log2<\eta/2$. Then every bounded-height point in the stated classical region belongs to this nonvanishing union, and the reciprocal bound there is a uniform constant, hence at most $C\log(|t|+2)$. For $|t|\le3$, $\sigma\le2$, the near-line estimate is already $O(|s-1|)$; in the right Euler part $|s-1|\ge\eta/2$ converts its bounded estimate to the same form. Combining with step3.1 proves all claims. The cover is formed from all admissible pairs and only finitely many are taken; no countable choice or compact-product theorem is invoked. [F4, F5, step 3.1, given, algebra] ∎

