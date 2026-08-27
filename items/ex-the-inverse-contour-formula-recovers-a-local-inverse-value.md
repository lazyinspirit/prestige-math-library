---
id: ex-the-inverse-contour-formula-recovers-a-local-inverse-value
kind: example
title: "The inverse contour formula recovers a local inverse value"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-holomorphic-inverse-contour-formula]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Example

Let $f(z)=z+z^2$, let $\gamma(t)=\frac14 e^{it}$, and let $w$ satisfy
$|w|<\frac18$. Let $s$ be the square root of $1+4w$ with positive real part.
Then $f(z)=w$ has exactly one simple solution inside $\gamma$, namely

$$z(w)=\frac{-1+s}{2},$$

and the inverse contour formula gives

$$z(w)=\frac{1}{2\pi i}\int_\gamma \frac{\zeta(1+2\zeta)}{\zeta+\zeta^2-w}\,d\zeta.$$

## Facts & Assumptions

**Given:** The function $f(z)=z+z^2$, the circle $\gamma(t)=\frac14 e^{it}$, and a complex number $w$ with $|w|<\frac18$.

[L1] If a contour encloses exactly one simple preimage of $w$, the inverse contour formula recovers it ([[thm-holomorphic-inverse-contour-formula]]).

## Verification

**Proof technique:** direct.

1.1 On the circle $|z|=1/4$ one has $$|z^2-w|\le |z|^2+|w|<\frac1{16}+\frac18=\frac3{16}<\frac14=|z|.$$ So Rouché's theorem applied to $z$ and $z+z^2-w$ shows that $f(z)-w$ has exactly one zero inside $\gamma$. [given, algebra]

2.1 The two roots of $z^2+z-w$ are $(-1\pm s)/2$. Since $\operatorname{Re}s>0$, one has $|s+1|\ge1+\operatorname{Re}s>1$, so $$|s-1|=\frac{|s^2-1|}{|s+1|}=\frac{4|w|}{|s+1|}<\frac12.$$ Therefore $$\left|\frac{-1+s}{2}\right|<\frac14,\qquad \left|\frac{-1-s}{2}\right|=\frac{|1+s|}{2}>\frac12>\frac14.$$ So the unique zero inside $\gamma$ is $z(w)=(-1+s)/2$. [step 1.1, given, algebra]

3.1 If $f(z)=w$ and $|z|<1/4$, then $|1+2z|\ge1-2|z|>1/2$, so the enclosed zero is simple. The positively oriented circle $\gamma(t)=\frac14 e^{it}$ winds once around every point of $|z|<1/4$, so the hypotheses of [L1] are satisfied and the inverse contour formula gives $$z(w)=\frac{1}{2\pi i}\int_\gamma \frac{\zeta(1+2\zeta)}{\zeta+\zeta^2-w}\,d\zeta.$$ [L1, step 1.1, step 2.1, algebra] ∎
