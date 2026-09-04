---
id: ex-an-interval-endpoint-is-not-a-density-point
kind: example
title: "An endpoint of an interval has density one half, not one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-density-of-a-measurable-set-at-a-point, thm-lebesgue-measure-of-a-box-of-every-kind]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed., Chapter 7"
      url: "https://web.archive.org/web/20221029120924if_/https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

For $E=[0,1]\subseteq\mathbb{R}$, the endpoint $0$ is not a density-one point
of $E$; instead,
$$\Theta(E,0)=\frac12.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the interval $E=[0,1]$.

[L1] Density is computed by $$\Theta(E,0)=\lim_{r\to0^+}\frac{\lambda(E\cap(-r,r))}{\lambda((-r,r))}$$ when the limit exists. ([[def-density-of-a-measurable-set-at-a-point]])

[L2] The interval $(-r,r)$ has measure $2r$ and $[0,r)$ has measure $r$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Verification

**Proof technique:** direct.

1.1 For every $0<r\le1$, [L2, given, algebra] $$E\cap(-r,r)=[0,r),$$ so [L2] gives $$\frac{\lambda(E\cap(-r,r))}{\lambda((-r,r))} =\frac{r}{2r}=\frac12.$$ [L2, given, algebra]

2.1 The ratio in step 1.1 is constant for all sufficiently small $r$, so [L1] [L1, step 1.1] gives $\Theta(E,0)=1/2$. In particular $0$ is not a density-one point of $E$. [L1, step 1.1] ∎
