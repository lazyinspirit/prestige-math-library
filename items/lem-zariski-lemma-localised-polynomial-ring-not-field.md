---
id: lem-zariski-lemma-localised-polynomial-ring-not-field
kind: lemma
title: "A finitely localized polynomial ring in positive dimension is not a field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-zariski-lemma-one-variable-localisation-not-finite, thm-universal-property-of-a-polynomial-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Lemma 13.6 and Proposition 13.7"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field, let $r>0$, and let
$s\in k[t_1,\ldots,t_r]$ be nonzero. Then the localization
$$ k[t_1,\ldots,t_r]\left[\frac1s\right] $$
is not a field.

## Facts & Assumptions

**Given:** A field $k$, an integer $r>0$, and a nonzero polynomial $s\in k[t_1,\ldots,t_r]$.

[L1] A $k$-algebra map out of a polynomial ring is determined by the images of the indeterminates ([[thm-universal-property-of-a-polynomial-ring]]).

[A1] The one-variable denominator obstruction is the model case behind the specialization to $k[u]$.

## Proof

**Proof technique:** direct.

1.1 Choose an integer $N>1$ larger than every exponent occurring in $s$, and define a $k$-algebra map $$ \varphi:k[t_1,\ldots,t_r]\to k[u],\qquad t_i\mapsto u^{N^{i-1}}. $$ By uniqueness of base-$N$ expansion, distinct monomials of $s$ acquire distinct $u$-degrees under $\varphi$, so $\varphi(s)\ne 0$. [L1, given, choose]

2.1 Because $\varphi(s)\ne 0$, the universal property of localization gives a ring homomorphism $$ \Phi:k[t_1,\ldots,t_r]\left[\frac1s\right]\to k[u]\left[\frac1{\varphi(s)}\right]. $$ If the source were a field, its image would also be a field. [L1, step 1.1, algebra]

3.1 The target is not a field. If $\varphi(s)$ is constant, then the target is just $k[u]$, and $u$ is not invertible in $k[u]$. If $\varphi(s)$ is nonconstant and $1/(\varphi(s)+1)=h/\varphi(s)^m$ in the localization, then $\varphi(s)^m=h(\varphi(s)+1)$ in $k[u]$. Dividing the left-hand side by $\varphi(s)+1$ leaves remainder $(-1)^m\ne 0$, contradiction. [step 2.1, algebra]

4.1 Step 3.1 contradicts the conclusion of step 2.1. Therefore $k[t_1,\ldots,t_r][1/s]$ is not a field. [step 2.1, step 3.1, contradiction] ∎
