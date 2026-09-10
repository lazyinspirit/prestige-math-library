---
id: ex-law-of-total-variance
kind: example
title: "Law of total variance"
status: published
origin: pipeline
deps: [cor-conditional-variance-decomposition, lem-conditioning-a-known-variable-and-an-independent-variable, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces, def-conditional-variance]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Assume AC for conditional classes. On $\Omega=\{0,1\}^2$ with full sigma-algebra and each atom of mass $1/4$, put $U(u,v)=u$, $V(u,v)=v$, $X=U+V$ and $\mathcal G=\sigma(U)$. Then $\operatorname{Var}(X)=1/2$, $E[\operatorname{Var}(X\mid\mathcal G)]=1/4$ and $\operatorname{Var}(E[X\mid\mathcal G])=1/4$.

## Facts & Assumptions

**Given:** The four-atom model, variables U,V,X and sigma-algebra G specified in the example; AC is the conditional-class convention.

[F1] Finite weights summing to one define a probability measure. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

[F2] A known variable conditions to itself; an independent variable conditions to its mean. ([[lem-conditioning-a-known-variable-and-an-independent-variable]])

[F3] Conditional expectation is linear and fixes constants. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F4] Total variance is expected conditional variance plus the variance of the conditional mean. ([[cor-conditional-variance-decomposition]])

[F5] Conditional variance is the conditional mean of the squared residual. ([[def-conditional-variance]])

## Verification

**Proof technique:** direct.

1.1 The four masses are nonnegative and sum to one, so [F1] constructs the probability space. Each U and V marginal has mass one half at zero and at one, and $P(U=u,V=v)=1/4=P(U=u)P(V=v)$ for all four pairs. Summing over coordinate subsets gives independence for every Borel rectangle. Both variables are bounded and integrable, with $EU=EV=1/2$. [F1]

2.1 By [F2]–[F3], $E[X\mid\mathcal G]=U+1/2$. The residual is $V-1/2$, whose square equals 1/4 at every atom. Thus [F5] and the constant rule [F3] give $\operatorname{Var}(X\mid\mathcal G)=1/4$ and its expectation 1/4. [step 1.1, F2, F3, F5]

3.1 The four X values are (0,1,1,2), with mean 1, so $\operatorname{Var}(X)=(1+0+0+1)/4=1/2$. The conditional mean takes values one half and three halves, each with probability one half; its mean is 1 and its variance is $((1/2)^2+(1/2)^2)/2=1/4$. Therefore the three computed quantities satisfy [F4] as $1/2=1/4+1/4$. [step 2.1, F4] ∎

## Source notes

Durrett §4.1.2, printed pp.210–213, conditional identities; the explicit four-atom variance instance is locally calculated and has generated-example provenance.
