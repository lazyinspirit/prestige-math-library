---
id: lem-fd-x03-tanh-error-bounds
kind: lemma
title: "Quantitative shallow and deep bounds for the hyperbolic tangent"
status: published
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x01
deps:
  - def-hyperbolic-functions
  - thm-hyperbolic-identities-and-derivatives
  - thm-exponential-addition-formula
  - cor-exponential-reciprocal-and-positivity
  - cor-mean-value-theorem
dependency_roles:
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Falk Feddersen, UC San Diego, Linear Surface Gravity Waves 1"
      url: "https://falk.ucsd.edu/pdf/WavesLecture02_211A.pdf"
    - title: "Eric Firing, University of Hawaiʻi OCN 620, chapter 19: Surface waves, Part 1"
      url: "https://uhslc.soest.hawaii.edu/ocn620/notes/surface-waves-1.html"
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

For every real $s\ge0$,

$$0\le s-\tanh s\le \frac{s^3}{3},\qquad 0\le 1-\tanh s\le 2e^{-2s}.$$

## Statement references

The linear gravity-wave shallow and deep limits use $\tanh(kh)$: [Feddersen, Linear Surface Gravity Waves 1, §2.4, PDF pp. 5–6](https://falk.ucsd.edu/pdf/WavesLecture02_211A.pdf).

The finite-depth surface-gravity dispersion relation and its limiting regimes: [Firing, OCN 620, §19.4](https://uhslc.soest.hawaii.edu/ocn620/notes/surface-waves-1.html).

[[def-hyperbolic-functions]]

[[thm-hyperbolic-identities-and-derivatives]]

## Facts & Assumptions

**Given:** A real number $s\ge0$.

[F1] For real $x$, $\sinh x=(e^x-e^{-x})/2$, $\cosh x=(e^x+e^{-x})/2$, $\tanh x=\sinh x/\cosh x$, and $\operatorname{sech}x=1/\cosh x$; $\cosh x>0$ ([[def-hyperbolic-functions]]).

[F2] $\cosh^2x-\sinh^2x=1$, $\tanh'(x)=\operatorname{sech}^2x$, $\tanh$ is strictly increasing, and $\tanh(0)=0$ ([[thm-hyperbolic-identities-and-derivatives]]).

[F3] If $a<b$ and $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, some $c\in(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$ ([[cor-mean-value-theorem]]).

[F4] $e^{x+y}=e^xe^y$ for real $x,y$ ([[thm-exponential-addition-formula]]).

[F5] $e^x>0$ and $e^{-x}=1/e^x$ for real $x$ ([[cor-exponential-reciprocal-and-positivity]]).

## Proof

1.1 Divide $\cosh^2s-\sinh^2s=1$ by $\cosh^2s>0$ to get $1-\operatorname{sech}^2s=\tanh^2s$. Let $f(s)=s-\tanh s$. Then $f(0)=0$ and $f'(s)=\tanh^2s\ge0$. If $s>0$, apply [F3] on $[0,s]$ to obtain $f(s)-f(0)=f'(c)s\ge0$ for some $c\in(0,s)$; at $s=0$ equality holds. Thus $s-\tanh s\ge0$. [given, F1, F2, F3, algebra]

2.1 Let $g(s)=s^3/3-f(s)$. By step 1.1 and monotonicity in [F2], $s-\tanh s\ge0$ and $s+\tanh s\ge0$ for $s\ge0$. Hence $g(0)=0$ and $g'(s)=s^2-\tanh^2s=(s-\tanh s)(s+\tanh s)\ge0$. For $s>0$, [F3] on $[0,s]$ gives $g(s)-g(0)=g'(c)s\ge0$ for some $c\in(0,s)$; at $s=0$ equality holds. Therefore $s-\tanh s\le s^3/3$. [given, F2, F3, step 1.1, algebra]

3.1 The definitions [F1] and reciprocal identity [F5] give $1-\tanh s=2e^{-s}/(e^s+e^{-s})$. Multiplying numerator and denominator by $e^s>0$ and using [F4] gives $1-\tanh s=2/(e^{2s}+1)$. This is nonnegative, and $e^{2s}+1\ge e^{2s}>0$, so $2/(e^{2s}+1)\le2e^{-2s}$. Together with step 1.1 this proves both claimed bounds. [given, F1, F4, F5, step 1.1, algebra] ∎
## Source notes


Hyperbolic functions and derivative identities: [[def-hyperbolic-functions]] and [[thm-hyperbolic-identities-and-derivatives]].

