---
id: lem-gts-novikov-completion-is-filtered-ring
kind: lemma
title: Novikov convolution is a filtered ring operation
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-gts-universal-novikov-completion
dependency_roles:
  def-gts-universal-novikov-completion: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Fukaya, Oh, Ohta, and Ono, Lagrangian Floer Theory on Compact Toric Manifolds I, arXiv:0802.1703v3
      url: https://arxiv.org/pdf/0802.1703v3
      locator: §3, printed pp. 16–17; source filtration and completion conventions
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

For a field $k$, an additive abelian group $\Gamma$, a homomorphism $\nu:\Gamma\to\mathbb R$, and the completion $\Lambda_{\nu,k}$ defined in [[def-gts-universal-novikov-completion]], coefficientwise addition and convolution multiplication are well-defined, make $\Lambda_{\nu,k}$ a commutative ring, and satisfy $v(ab)\ge v(a)+v(b)$ and $v(a+b)\ge\min(v(a),v(b))$. The full ring and its nonnegative-valuation subring are complete in their energy-filtration topologies.

## Statement references

[[def-gts-universal-novikov-completion]]

## Facts & Assumptions

**Given:** The Novikov completion data and definitions above.

[F1] [[def-gts-universal-novikov-completion]]: a series has finite support below every real energy cutoff, monomials multiply by addition of exponents, and $F^c$ consists of series of valuation at least $c$.

## Proof

1.1 If a support $S$ is nonempty, choose one $\gamma_0\in S$. The set $S\cap\{\gamma:\nu(\gamma)<\nu(\gamma_0)+1\}$ is finite by [F1] and contains $\gamma_0$, so it has a least valuation $\ell_S$. Every support element outside that finite set has valuation at least $\nu(\gamma_0)+1>\ell_S$. Thus $S$ has a finite lower bound and its valuation infimum is attained; the empty support is the zero series. [given, F1, algebra]

2.1 If either factor has empty support, its product is zero. Otherwise let $\ell_T$ be the attained minimum valuation of the second support from step 1.1. For fixed $\gamma\in\Gamma$, a nonzero product coefficient at $q^\gamma$ can involve only $\gamma_1$ in the first support with $\nu(\gamma_1)\le\nu(\gamma)-\ell_T$. This weak sublevel set is finite because it lies strictly below the cutoff $\nu(\gamma)-\ell_T+1$ in [F1]; then $\gamma_2=\gamma-\gamma_1$ is fixed, so the coefficient is a finite sum. For each cutoff $C$, any supported product term with valuation below $C$ has $\nu(\gamma_1)<C-\ell_T$; there are finitely many such first factors, and for each, finitely many second factors below $C-\nu(\gamma_1)$. Thus the product has finite support below $C$. [given, F1, step 1.1, algebra]

3.1 Support of a sum is contained in the union of the two supports, giving $v(a+b)\ge\min(v(a),v(b))$. Every supported product exponent is a sum of one exponent from each factor, so its valuation is at least $v(a)+v(b)$; cancellation only removes terms. If any of the three factors is zero, both bracketings are zero. Otherwise their supports $S_1,S_2,S_3$ have minimum valuations $\ell_1,\ell_2,\ell_3$ by step 1.1. For a fixed exponent $\gamma$, every raw contributing triple $\gamma_1+\gamma_2+\gamma_3=\gamma$ satisfies $\nu(\gamma_1)\le\nu(\gamma)-\ell_2-\ell_3$. There are finitely many such $\gamma_1\in S_1$, using the strict cutoff one unit larger. For each, $\nu(\gamma_2)\le\nu(\gamma)-\nu(\gamma_1)-\ell_3$ leaves finitely many $\gamma_2\in S_2$, and $\gamma_3=\gamma-\gamma_1-\gamma_2$ is determined. Thus the raw triple sum is finite before any cancellation, and both bracketings may be expanded and regrouped as that same sum; associativity of addition in $\Gamma$ and multiplication in $k$ prove associativity of convolution. The same finite-coefficient argument proves distributivity, and $q^0$ is a unit. In the topology with zero-neighbourhoods $F^C$, a Cauchy net $(a_i)$ has an eventually constant coefficient at each $\gamma$: use a cutoff $C>\nu(\gamma)$, for which $a_i-a_j\in F^C$ forces the coefficients at $q^\gamma$ to agree on a tail. Let $a_\gamma$ be this unique eventual value. For any cutoff $C$, choose $i_0$ so that $a_i-a_j\in F^C$ for all $i,j\ge i_0$. Then $a$ and $a_{i_0}$ agree at every exponent of valuation below $C$, so the support of $a$ below $C$ is finite; hence $a\in\Lambda_{\nu,k}$. The same tail condition shows that every $a_i$ with $i\ge i_0$ agrees with $a$ below $C$, so $a_i-a\in F^C$ and the net converges. If the net lies in $\Lambda_{\nu,k}^0$, every stabilized coefficient with negative valuation is zero, so $a\in\Lambda_{\nu,k}^0$ and the same argument proves completeness in its induced topology. [F1, step 1.1, step 2.1, algebra] ∎
