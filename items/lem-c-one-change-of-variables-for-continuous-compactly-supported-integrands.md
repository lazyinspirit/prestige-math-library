---
id: lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands
kind: lemma
title: "The published Riemann change-of-variables theorem already gives the Lebesgue formula for continuous compactly supported integrands"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-change-of-variables-for-compactly-supported-functions, thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content, def-support-and-compactly-supported-riemann-integral-in-rn]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.47"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $U,V \subseteq \mathbb R^n$ be open and let $T : U \to V$ be a
 $C^1$ diffeomorphism. If $f : V \to \mathbb R$ is continuous and compactly
supported, then
$$
\int_V f(y)\,d\lambda_n(y) = \int_U f(T(x))\,|\det DT(x)|\,d\lambda_n(x).
$$

## Facts & Assumptions

**Given:** Open sets $U,V \subseteq \mathbb R^n$, a $C^1$ diffeomorphism $T : U \to V$, and a continuous compactly supported function $f : V \to \mathbb R$.

[L1] The published Riemann change-of-variables theorem holds for compactly supported integrands. ([[cor-change-of-variables-for-compactly-supported-functions]])

[L2] On Jordan measurable compact sets, the Riemann and Lebesgue integrals agree. ([[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]])

## Proof

**Proof technique:** direct.

1.1 Because $f$ has compact support inside $V$, there is a compact Jordan set $K \subseteq V$ containing $\operatorname{supp}(f)$. Then $f$ vanishes on $V \setminus K$, so both integrals in the statement reduce to integrals over $K$ and $T^{-1}(K)$. [L1, L2]

2.1 The Riemann theorem [L1] applies on these compact sets, and [L2] identifies those Riemann integrals with the corresponding Lebesgue integrals. Therefore the displayed Lebesgue change-of-variables formula holds. [L1, L2, step 1.1] ∎
