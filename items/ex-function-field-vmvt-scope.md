---
id: ex-function-field-vmvt-scope
kind: example
title: "Function-Field Scope of the Mean-Value Theorem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - thm-function-field-weighted-polynomial-family-mean-value
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "T. D. Wooley, Nested Efficient Congruencing and Relatives of Vinogradov's Mean Value Theorem"
      url: "https://arxiv.org/pdf/1708.01220v2"
      locator: "§17, Theorem 17.1 and its function-field hypotheses"
verification: {}
---

## Example

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ for the construction and Radon regularity of the normalized function-field measure and its finite products. Wooley's Theorem 17.1 records a separate function-field analogue under the following hypotheses. Let $q=p^m$ be a finite field of characteristic $p>k$, let $\mathcal O=\mathbb F_q[t]$, let $K_\infty=\mathbb F_q((1/t))$, and let $\mathbb T=\{\alpha\in K_\infty:\operatorname{ord}(\alpha)<0\}$, where $\operatorname{ord}(\alpha)$ is the largest exponent with nonzero coefficient in the Laurent expansion and $\operatorname{ord}(0)=-\infty$. For an integer $d\ge0$, set $\mathcal O_d=\{\nu\in\mathcal O:\deg(\nu)\le d\}$. Write $\operatorname{tr}:\mathbb F_q\to\mathbb F_p$ for the field trace, put $\psi(a)=\exp(2\pi i\widetilde{\operatorname{tr}(a)}/p)$ using any integer lift $\widetilde{\operatorname{tr}(a)}$ of the trace, and for $\alpha\in K_\infty$ put $e_\infty(\alpha)=\psi(a_{-1}(\alpha))$, where $a_{-1}(\alpha)$ is the coefficient of $t^{-1}$. Give $\mathbb T$ Haar measure of total mass one. If $\phi_1,\ldots,\phi_k\in\mathcal O[x]$ have nonzero Wronskian $W(x;\boldsymbol\phi)=\det(\phi_j^{(i)}(x))_{1\le i,j\le k}$, $0<s\le k(k+1)/2$, $(a_\nu)_{\nu\in\mathcal O}$ is any complex sequence, and $\varepsilon>0$, the source states that

$$\int_{\mathbb T^k}\left|\sum_{\nu\in\mathcal O_d}a_\nu e_\infty\!\left(\sum_{j=1}^k\alpha_j\phi_j(\nu)\right)\right|^{2s}\,d\boldsymbol\alpha\ll_{q,k,s,\boldsymbol\phi,\varepsilon}(q^d)^\varepsilon\left(\sum_{\nu\in\mathcal O_d}|a_\nu|^2\right)^s,$$

with $d$ sufficiently large in terms of the fixed parameters. This is a separately formulated function-field result, not a consequence of the integer-polynomial statement above.

## Example references

[Wooley, §17, Theorem 17.1](https://arxiv.org/pdf/1708.01220v2)


[[thm-function-field-weighted-polynomial-family-mean-value]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice and the fixed finite field, $k$, nondegenerate polynomial family, arbitrary complex coefficients, $0<s\le k(k+1)/2$, $\varepsilon>0$ and the degree bound in the Example.

[F1] The weighted function-field theorem gives the displayed bound for every integer $d\ge0$, with precisely this character, normalized Haar measure, degree ball, characteristic hypothesis, Wronskian convention and dependence of constants ([[thm-function-field-weighted-polynomial-family-mean-value]]).

[A1] Countable Choice is inherited from the genuine function-field theorem and is spent in its normalized Radon Haar measure construction and finite products ([[def-countable-choice]], [[thm-function-field-weighted-polynomial-family-mean-value]]).

## Verification

1.1 Under [A1], the Example has characteristic $p>k$, $\phi_j\in\mathbb F_q[t][x]$, and the same nonzero derivative-order-1-through-$k$ Wronskian as [F1]. Its character uses the coefficient of $t^{-1}$ and the field trace, exactly as [F1]; its domain includes zero and all polynomials of degree at most $d$, with Haar measure of mass one. Thus all hypotheses and normalizations in [F1] agree. [given, A1, F1, algebra]

2.1 Applying [F1] gives the displayed weighted estimate, in particular for the sufficiently large $d$ asserted in the Example. The supplier is the function-field theorem, whose proof uses function-field finite congruence concentration and orthogonality. This verifies the assertion without an inference from the integer-polynomial theorem. [given, F1, step 1.1] ∎
