---
id: cor-reciprocal-rule-for-equivalent-sigma-finite-measures
kind: corollary
title: "Equivalent sigma-finite positive measures have reciprocal Radon-Nikodym derivatives almost everywhere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-radon-nikodym-derivative, thm-chain-rule-for-radon-nikodym-derivatives, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.5 and Exercise 13.6"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

Let $\mu$ and $\nu$ be equivalent sigma-finite positive measures on the same measurable space. Then
$$\frac{d\nu}{d\mu}\frac{d\mu}{d\nu}=1\qquad\nu\text{-almost everywhere,}$$
and therefore also $\mu$-almost everywhere.

## Facts & Assumptions

**Given:** Sigma-finite positive measures $\mu$ and $\nu$ with $\mu\ll\nu\ll\mu$.

[L1] Under one exhaustion finite for the outer and intermediate positive
measures and the variation of the inner measure, the chain rule gives
$d\eta/d\lambda=(d\eta/d\kappa)(d\kappa/d\lambda)$ almost everywhere along
$\eta\ll\kappa\ll\lambda$
([[thm-chain-rule-for-radon-nikodym-derivatives]]).

[L2] The constant function $1$ represents $d\mu/d\mu$ because $\mu(E)=\int_E1\,d\mu$ for every measurable set, and the representing density is unique up to almost-everywhere equality. ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]])

## Proof

**Proof technique:** direct.

1.1 Choose increasing finite-measure exhaustions $(A_n)$ for $\mu$ and $(B_n)$ for $\nu$, and put $X_n:=A_n\cap B_n$. After replacing both exhaustions by finite unions, $(X_n)$ is increasing, covers $X$, and is finite for both measures. Apply [L1] to the chain $\mu\ll\nu\ll\mu$ on this common exhaustion. Then $$\frac{d\mu}{d\mu}=\frac{d\mu}{d\nu}\frac{d\nu}{d\mu}\qquad\mu\text{-almost everywhere.}$$ By [L2], $d\mu/d\mu=1$ almost everywhere, so $$\frac{d\mu}{d\nu}\frac{d\nu}{d\mu}=1\qquad\mu\text{-almost everywhere.}$$ [L1, L2, construct]

2.1 Interchanging the roles of $\mu$ and $\nu$ gives $$\frac{d\nu}{d\mu}\frac{d\mu}{d\nu}=1\qquad\nu\text{-almost everywhere.}$$ Because $\mu$ and $\nu$ have the same null sets, the two almost-everywhere conclusions are equivalent. [step 1.1, L1, algebra] ∎
