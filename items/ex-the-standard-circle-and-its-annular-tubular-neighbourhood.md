---
id: ex-the-standard-circle-and-its-annular-tubular-neighbourhood
kind: example
title: "The standard circle and its annular tubular neighbourhood"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-euclidean-tubular-neighbourhood-theorem,
       cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

For the unit circle
$$ S^1=\{p\in\mathbb R^2:\|p\|=1\}, $$
the normal line at $p$ is the radial line $\mathbb Rp$. Thus the normal bundle
is identified with
$$ S^1\times\mathbb R,\qquad (p,t)\leftrightarrow (p,tp), $$
and the normal addition map is
$$ E(p,t)=(1+t)p. $$
For $|t|<1/2$, the image is the annulus
$$ \{x\in\mathbb R^2:1/2<\|x\|<3/2\}, $$
and the tubular retraction is radial normalization
$$ r(x)=\frac{x}{\|x\|}. $$

## Facts & Assumptions

**Given:** The unit circle $S^1\subseteq\mathbb R^2$ with its Euclidean normal
bundle.

## Verification
**Proof technique:** direct.

1.1 Every vector orthogonal to $T_pS^1$ is a scalar multiple of $p$, so the displayed identification of the normal bundle is correct. Under that identification the normal addition map is $E(p,t)=p+tp=(1+t)p$. [given, algebra]

2.1 If $|t|<1/2$, then $1/2<1+t<3/2$, so $E$ lands in the stated annulus. Conversely, every nonzero $x$ in that annulus can be written uniquely as $$x=\|x\|\frac{x}{\|x\|}=E\!\left(\frac{x}{\|x\|},\|x\|-1\right).$$ Hence this is exactly the tubular neighbourhood promised by [[thm-euclidean-tubular-neighbourhood-theorem]]. [step 1.1]

3.1 The inverse formula in step 2.1 sends $x$ to $\bigl(x/\|x\|,\|x\|-1\bigr)$, so the associated retraction is $r(x)=x/\|x\|$, in agreement with [[cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction]]. [step 2.1] ∎
