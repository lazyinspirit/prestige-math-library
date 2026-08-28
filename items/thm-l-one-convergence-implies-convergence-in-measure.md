---
id: thm-l-one-convergence-implies-convergence-in-measure
kind: theorem
title: "Convergence in L^1(mu) implies convergence in measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-l-one-of-a-measure, def-convergence-in-measure, thm-chebyshev-markov-inequality-for-the-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.29"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let
$f_n,f : X \to \mathbb R$ be measurable with $f_n,f \in L^1(\mu)$. If $f_n \to f$
in $L^1(\mu)$, then $f_n \to f$ in measure.
## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, measurable real-valued integrable functions $f_n,f \in L^1(\mu)$, and convergence of $(f_n)$ to $f$ in $L^1(\mu)$.

[L1] Convergence in $L^1(\mu)$ means $\int |f_n-f|\,d\mu \to 0$. ([[def-convergence-in-l-one-of-a-measure]])

[L2] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

[L3] For a nonnegative measurable function $h$ and a real $t>0$, $\mu(\{h\ge t\})\le t^{-1}\int h\,d\mu$. ([[thm-chebyshev-markov-inequality-for-the-integral]])

## Proof

**Proof technique:** direct.

1.1 Fix $\varepsilon>0$. Applying [L3] to $h:=|f_n-f|$ and $t:=\varepsilon$ gives $$\mu(\{|f_n-f|\ge\varepsilon\})\le \varepsilon^{-1}\int |f_n-f|\,d\mu$$ for every $n$. [L1, L3, algebra]

2.1 By [L1], the right-hand side in step 1.1 tends to $0$ as $n \to \infty$. Hence $\mu(\{|f_n-f|>\varepsilon\}) \to 0$ for every $\varepsilon>0$, which is exactly [L2]. [step 1.1, L1, L2] ∎
