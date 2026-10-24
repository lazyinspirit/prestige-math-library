---
id: thm-euler-distinct-parts-equal-odd-parts-by-generating-functions
kind: theorem
title: "Euler's theorem by generating functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-distinct-partitions-have-product-generating-function,
       cor-odd-partitions-have-product-generating-function,
       prop-coefficient-extraction-linearity-and-extensionality]
justified_by: []
aliases: []
landmark: false
proof_strategy: coefficient-comparison
verification:
  audited: 2026-08-28
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Statement

For every integer $n \ge 0$,

$$p_{\mathrm{dist}}(n)=p_{\mathrm{odd}}(n).$$

## Facts & Assumptions

**Given:** the two formal power series for distinct-part and odd-part partitions.

[L1] Distinct-part partitions have generating function $\sum_{n \ge 0} p_{\mathrm{dist}}(n)x^n = \prod_{m \ge 1}(1+x^m)$ ([[cor-distinct-partitions-have-product-generating-function]]).

[L2] Odd-part partitions have generating function $\sum_{n \ge 0} p_{\mathrm{odd}}(n)x^n = \prod_{m \ge 1}(1-x^{2m-1})^{-1}$ ([[cor-odd-partitions-have-product-generating-function]]).

[L3] Two formal series are equal exactly when all coefficients are equal ([[prop-coefficient-extraction-linearity-and-extensionality]]).

## Proof

**Proof technique:** coefficient comparison.

1.1 Fix $N \ge 1$. Using $1+x^m=(1-x^{2m})(1-x^m)^{-1}$ for $1 \le m \le N$ and canceling only the even factors that already appear in the denominator gives $\prod_{m=1}^{N}(1+x^m)=\left(\prod_{m=\lfloor N/2\rfloor+1}^{N}(1-x^{2m})\right)\big/\left(\prod_{\substack{1 \le j \le N\\ j\text{ odd}}}(1-x^j)\right)$. Every uncancelled numerator factor has degree $>N$, so the left-hand side and $1/\prod_{1 \le j \le N,\ j\text{ odd}}(1-x^j)$ have the same coefficients through degree $N$. [algebra]

2.1 Fix $n \ge 0$ and choose $N>n$. By step 1.1, the coefficient of $x^n$ in $\prod_{m=1}^{N}(1+x^m)$ equals the coefficient of $x^n$ in $1/\prod_{1 \le j \le N,\ j\text{ odd}}(1-x^j)$. Factors with index $>N$ have degree $>n$ in both products, so this is also the common coefficient of $x^n$ in the two infinite products $\prod_{m \ge 1}(1+x^m)$ and $\prod_{m \ge 1}(1-x^{2m-1})^{-1}$. [step 1.1]

3.1 Substitute the two product expansions from [L1] and [L2] into step 2.1. The resulting formal series are equal, so [L3] gives equality of every coefficient. Hence $p_{\mathrm{dist}}(n)=p_{\mathrm{odd}}(n)$ for all $n \ge 0$. [step 2.1, L1, L2, L3] ∎
