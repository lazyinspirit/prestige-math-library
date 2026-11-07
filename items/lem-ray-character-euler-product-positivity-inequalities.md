---
dependency_level: 9
id: lem-ray-character-euler-product-positivity-inequalities
kind: lemma
title: Euler-product positivity for ray-character logarithmic derivatives
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-finite-order-hecke-l-euler-product
- def-finite-order-ray-class-hecke-character-and-l-function
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-weierstrass-convergence-holomorphic-functions
- thm-exponential-beats-every-polynomial
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: AC and Countable Choice are retained from the ray-character/Euler-product interface; explicit
  convergent scalar sums and finite positivity algebra add no choice. No zero-free theorem is used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: A. R. Weiss, The least prime ideal, §1
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: 'Printed58–61: primitive conductors, Euler products and Theorem1.9 formulation/sketch. The
      complete local argument below is independently reconstructed, not imported from that sketch.'
  - title: Jürgen Neukirch, Algebraic Number Theory, VII§§6–8
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Ray characters, primitive induction and finite Euler comparison; actual local suppliers are
      used at their exact number-field hypotheses.
---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field. For a finite-order ray-class character $\xi$ modulo $\mathfrak m$ and $s=\sigma+it$, $\sigma>1$, let $D_{\mathfrak m}(s,\xi)=-\operatorname{Re}(L'_{\mathfrak m}/L_{\mathfrak m})(s,\xi)$. Then
$$D_{\mathfrak m}(\sigma+it,\xi)=\sum_{\mathfrak p\nmid\mathfrak m_0}\sum_{k\ge1}(\log N\mathfrak p)(N\mathfrak p)^{-k\sigma}\operatorname{Re}\!\left(\xi(\mathfrak p)^k e^{-ikt\log N\mathfrak p}\right),$$
with absolute local uniform convergence on $\operatorname{Re}s>1$. For every character $\chi$ modulo that same modulus and every real $t$,
$$3D_{\mathfrak m}(\sigma,1_{\mathfrak m})+4D_{\mathfrak m}(\sigma+it,\chi)+D_{\mathfrak m}(\sigma+2it,\chi^2)\ge0.$$
For real-valued characters $\chi,\chi_1,\chi_2$ on that modulus,
$$D_{\mathfrak m}(\sigma,1_{\mathfrak m})+D_{\mathfrak m}(\sigma,\chi)\ge0,$$
$$D_{\mathfrak m}(\sigma,1_{\mathfrak m})+D_{\mathfrak m}(\sigma,\chi_1)+D_{\mathfrak m}(\sigma,\chi_2)+D_{\mathfrak m}(\sigma,\chi_1\chi_2)\ge0.$$
In particular $D(\sigma,1)\ge0$ for the full trivial primitive function. These inequalities include trivial or repeated characters with their actual multiplicities.

## Facts & Assumptions

**Given:** The common modulus, characters, real ordinate and AC/CC branch.

[F1] Hecke Euler products and their ideal series converge absolutely for $\operatorname{Re}s>1$. Finite-order character values at allowed primes have modulus one. [[thm-finite-order-hecke-l-euler-product]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F2] Prime-power ideals are pairwise distinct and belong to the set of integral ideals. [[thm-number-field-integral-ideal-factorisation-in-zf]]

[F3] Locally uniform holomorphic convergence permits termwise derivative convergence; exponential decay dominates polynomial powers, hence $\log x\,x^{-\delta}$ is bounded for every fixed $\delta>0$ on $x\ge2$. [[thm-weierstrass-convergence-holomorphic-functions]] [[thm-exponential-beats-every-polynomial]]

[A1] AC and CC are retained from the ray-character/Euler interface. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The stated data.

1.1 On a compact subset of $\operatorname{Re}s>1$, choose $1<\sigma_0<\min\operatorname{Re}s$. The logarithmic Euler series $H(s)=\sum_{\mathfrak p\nmid\mathfrak m_0}\sum_{k\ge1}\xi(\mathfrak p)^k(N\mathfrak p)^{-ks}/k$ converges absolutely locally uniformly by [F1], since each prime's geometric tail is bounded by a fixed multiple of $(N\mathfrak p)^{-\sigma_0}$, and the prime sum is bounded by the ideal series. The scalar power-series identity $\exp(\sum_{k\ge1}z^k/k)=(1-z)^{-1}$ for $|z|<1$, followed through finite products and their absolute limits, gives $e^{H(s)}=L_{\mathfrak m}(s,\xi)\ne0$. [A1, F1, F3, given, choose, algebra]

2.1 The differentiated summand is $-\xi(\mathfrak p)^k\log(N\mathfrak p)(N\mathfrak p)^{-ks}$. Its absolute value is at most $\log((N\mathfrak p)^k)((N\mathfrak p)^k)^{-\operatorname{Re}s}\le C((N\mathfrak p)^k)^{-\sigma_0}$ by [F3]. The last series is bounded by the convergent ideal series because the prime powers are distinct by [F2]. Thus the derivative series is absolutely locally uniformly convergent. Differentiating $L=e^H$ using [F3] and taking real parts proves the displayed formula for $D_{\mathfrak m}$. [F1, F2, F3, step 1.1, algebra]

3.1 For each allowed prime and each $k$, put $z=\chi(\mathfrak p)^k e^{-ikt\log N\mathfrak p}$, so $|z|=1$. Algebra gives $3+4\operatorname{Re}z+\operatorname{Re}(z^2)=2(1+\operatorname{Re}z)^2\ge0$. For real-valued characters, $1+\chi(\mathfrak p)^k\ge0$, and $(1+\chi_1(\mathfrak p)^k)(1+\chi_2(\mathfrak p)^k)\ge0$. Multiplying these pointwise inequalities by the nonnegative weight $(\log N\mathfrak p)(N\mathfrak p)^{-k\sigma}$ and summing the absolutely convergent series of step 2.1 proves all three positivity statements. Excluded primes contribute zero to every common-modulus Euler series. For the trivial full function every summand of step 2.1 at real $\sigma$ is nonnegative. Repeated or trivial characters leave the literal factor multiplicities in these identities unchanged. [F1, step 2.1, algebra] ∎ 