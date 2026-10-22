---
id: ex-csm-frontier-boundary-mle
kind: example
title: All-plus data have no finite Bernoulli-spin field MLE
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - thm-csm-frontier-finite-mle-existence
  - def-csm-frontier-inverse-finite-exponential
  - thm-derivative-of-exponential
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - cor-mean-value-theorem
dependency_roles:
  thm-csm-frontier-finite-mle-existence: mathematical-premise
  def-csm-frontier-inverse-finite-exponential: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Martin J. Wainwright and Michael I. Jordan, Graphical Models,
        Exponential Families, and Variational Inference"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/wainwright-jordan-\
        fnt.pdf"
      locator: "§6.1, printed pp. 146–147 / PDF pp. 152–153, for finite IID likelihood
        and interior mean matching; the boundary calculation below is explicit."
    - title: "Charles J. Geyer, Stat 8931 (Exponential Families) Lecture Notes: Two
        Examples of Agresti"
      url: "https://www.stat.umn.edu/geyer/8931expfam/infinity.pdf"
      locator: "§2 and §3.2, printed pp. 1–2 and 8–9 / PDF pp. 0–1 and 8–9: examples
        where boundary sufficient-statistic values have no finite canonical
        MLE."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Let $X=\{-1,+1\}$, $w(-1)=w(+1)=1$, and $T(\sigma)=\sigma$. For a finite field $h\in\mathbb R$, the Gibbs probabilities are
$$\pi_h(+1)=\frac{e^h}{e^h+e^{-h}},\qquad \pi_h(-1)=\frac{e^{-h}}{e^h+e^{-h}}.$$
For a sample of $n\ge1$ spins all equal to $+1$, the log likelihood is
$$\ell(h)=n\left(h-\log(e^h+e^{-h})\right).$$
It is strictly increasing at every finite $h$, so the likelihood has no finite maximizer. The empirical statistic mean is $1$, a boundary point of $\operatorname{conv}\{-1,+1\}=[-1,1]$.

## Example references

[[thm-csm-frontier-finite-mle-existence]]

[[def-csm-frontier-inverse-finite-exponential]]

[[def-natural-logarithm]]

[[thm-natural-logarithm-laws]]

[[cor-mean-value-theorem]]

## Facts & Assumptions

**Given:** The finite two-state Gibbs family and the hypothetical realized sample $x_i=+1$ for all $i$.

[A1] The sample is a fixed finite IID-model outcome; it is a mathematical example, not an empirical report.

[F1] [[def-csm-frontier-inverse-finite-exponential]]: the normalized mass at field $h$ is proportional to $e^{hT(\sigma)}$.

[F2] [[thm-csm-frontier-finite-mle-existence]]: in a minimal finite exponential family, a finite IID MLE exists exactly when the empirical statistic mean lies in the relative interior of the convex support, and is unique when it exists.

[F3] [[thm-derivative-of-exponential]]: $\exp$ is differentiable on $\mathbb R$ with derivative $\exp$.

[F4] [[thm-logarithm-derivative-and-integral]]: for $s>0$, $\log$ is differentiable with derivative $1/s$.

[F5] [[thm-chain-rule]]: derivatives of scalar compositions obey $(f\circ g)'(h)=f'(g(h))g'(h)$ under the stated differentiability and limit-point hypotheses.

[F6] [[thm-algebra-of-derivatives]]: derivatives of sums and scalar multiples are respectively the sums and scalar multiples of the derivatives.

[F7] [[def-natural-logarithm]]: $\exp:\mathbb R\to(0,\infty)$ is a bijection and $\log$ is its inverse, so $\log(\exp h)=h$ for real $h$.

[F8] [[thm-natural-logarithm-laws]]: for positive $a,b$, $\log(ab)=\log a+\log b$ and $\log(a/b)=\log a-\log b$; $\log$ is strictly increasing on $(0,\infty)$.

[F9] [[cor-mean-value-theorem]]: a real function continuous on $[a,b]$, $a<b$, and differentiable on $(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$.

## Verification

**Given:** The finite family and all-plus sample in the Example.

1.1 The two statistic values are $-1$ and $+1$, so their affine hull is $\mathbb R$, the family is minimal, the convex hull is $[-1,1]$, and the sample mean is $1$, which is not in its interior $(-1,1)$. Hence [F2] already implies there is no finite MLE. [A1, F1, F2, algebra]

2.1 Let $S(h)=e^h+e^{-h}$. Both exponential terms and hence $S(h)$ are positive by [F7]. For the fixed all-plus IID sample the product likelihood is $L(h)=\prod_{i=1}^n\pi_h(+1)=(e^h/S(h))^n>0$ by [A1, F1]. Applying the positive-product law [F8] repeatedly to these $n\ge1$ factors, then its quotient law and the inverse identity [F7], gives $\log L(h)=n(\log(e^h)-\log S(h))=n(h-\log S(h))=\ell(h)$. Since $\log$ is strictly increasing, this has exactly the same maximizers as $L$. By [F3] and [F5], the two exponential terms have derivatives $e^h$ and $-e^{-h}$; [F6] therefore gives $S'(h)=e^h-e^{-h}$. The identity function has derivative $1$ directly from its difference quotient. Applying the logarithm derivative [F4] and chain rule [F5] to this derived log likelihood gives
$\ell'(h)=n\left(1-\frac{e^h-e^{-h}}{e^h+e^{-h}}\right)
=\frac{2ne^{-h}}{e^h+e^{-h}}>0$
for every finite $h$. The derived formula is differentiable on all of $\mathbb R$, hence continuous there: its increment is its convergent difference quotient times the real increment. For any $h_1<h_2$, [F9] applied on $[h_1,h_2]$ gives $\ell(h_2)-\ell(h_1)=\ell'(c)(h_2-h_1)>0$ for some $c\in(h_1,h_2)$. Thus $\ell$ is strictly increasing; by [F8] the likelihood also increases. In particular each finite field has a larger likelihood at a greater field, and no finite field maximizes it. [A1, F1, F3, F4, F5, F6, F7, F8, F9, step 1.1, algebra] ∎
