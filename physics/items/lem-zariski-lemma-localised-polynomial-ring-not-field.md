---
id: lem-zariski-lemma-localised-polynomial-ring-not-field
kind: lemma
title: "A finitely localized polynomial ring in positive dimension is not a field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-a-polynomial-ring, thm-universal-property-of-localisation, prop-localisation-zero-equality-and-kernel-criteria, cor-rational-function-field-as-a-fraction-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized F-FINAL-8 localization and surjectivity repair; local checks only, no independent judge"
    delegated_by: owner
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

[L2] Maps inverting the denominators extend uniquely to a localization ([[thm-universal-property-of-localisation]]).

[L3] The polynomial ring $k[u]$ is a domain inside its fraction field; localizing it at powers of a nonzero polynomial is injective, and equality of fractions permits cross-multiplication ([[cor-rational-function-field-as-a-fraction-field]], [[prop-localisation-zero-equality-and-kernel-criteria]]).

## Proof

**Proof technique:** direct.

1.1 Choose an integer $N>1$ larger than every exponent occurring in $s$. Iterating [L1] defines $\varphi:k[t_1,\ldots,t_r]\to k[u]$ by $t_i\mapsto u^{N^{i-1}}$. Distinct exponent tuples with entries below $N$ give distinct sums $\sum_i e_iN^{i-1}$: reduction modulo $N$ identifies the first entry, and subtraction and division by $N$ repeats the argument. Thus distinct monomials of $s$ retain distinct degrees, and $g:=\varphi(s)\ne0$. Also $\varphi(t_1)=u$. [L1, given, choose, algebra]

2.1 In $k[u][1/g]$ the image of $s$ is the unit $g$, so [L2] gives a unital homomorphism $\Phi:k[t_1,\ldots,t_r][1/s]\to k[u][1/g]$. It is surjective: $h(u)/g^m$ is the image of $h(t_1)/s^m$. The target is nonzero by [L3]. If the source were a field, every nonzero target element would be the image of a nonzero element and its inverse would be the image of the source inverse. Hence the target would be a field. [L2, L3, step 1.1, algebra]

3.1 The target is not a field. If $g$ is constant, it is nonzero, so the target is $k[u]$; the polynomial $u$ has no inverse since a nonzero product $uh$ has positive degree. If $g$ is nonconstant, then $g+1$ is a nonzero nonconstant polynomial and remains nonzero after localization. An inverse $h/g^m$ would imply $g^m=h(g+1)$ in $k[u]$ by [L3]. But $g^m-(-1)^m$ is divisible by $g+1$ (expand $(g+1-1)^m$), so this equality would make $g+1$ divide the nonzero constant $(-1)^m$, impossible by degrees. This also covers $m=0$. [L3, step 1.1, step 2.1, algebra]

4.1 By step 2.1 a field source would give a field target, which step 3.1 rules out. Therefore $k[t_1,\ldots,t_r][1/s]$ is not a field. [step 2.1, step 3.1] ∎
