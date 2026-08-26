---
id: ex-cardano-from-the-lagrange-resolvent
kind: example
title: "Cardano's formula for $x^3-3x-1$ from the Lagrange resolvent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lagrange-resolvent, thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Ash, Basic Abstract Algebra, cubic formulas in Galois theory"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, cyclic cubic examples"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

Let

$$u^3=\frac{1+\sqrt{-3}}{2},\qquad v^3=\frac{1-\sqrt{-3}}{2},\qquad uv=1.$$

Then

$$x:=u+v$$

is a root of $x^3-3x-1$. The two nontrivial Lagrange resolvents are $3u$ and
$3v$; equivalently, $u$ and $v$ are the normalized resolvents obtained after
division by $3$.

## Facts & Assumptions
**Given:** The depressed cubic $f(x)=x^3-3x-1$ and the displayed radicals.

[L1] The Lagrange resolvent is the weighted sum attached to a cyclic action and a chosen root of unity ([[def-lagrange-resolvent]]).

[L2] In the cyclic cubic situation over a field containing the cube roots of unity, the resolvent eigenvectors lie in a radical extension ([[thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer]]).

## Verification

**Proof technique:** direct.

1.1 The displayed cube roots satisfy $$u^3+v^3=1,\qquad u^3v^3=1,$$ so our choice $uv=1$ is compatible. Now $$(u+v)^3=u^3+v^3+3uv(u+v)=1+3(u+v).$$ Therefore $$x^3-3x-1=(u+v)^3-3(u+v)-1=0.$$ [given, algebra]

2.1 Put $x_0=u+v$, $x_1=\omega u+\omega^2v$, and $x_2=\omega^2u+\omega v$, and let $\sigma$ cycle $x_0,x_1,x_2$. The definition [L1] gives $$R_{\sigma,\omega}(x_0)=x_0+\omega^2x_1+\omega x_2=3u,$$ and $$R_{\sigma,\omega^2}(x_0)=x_0+\omega x_1+\omega^2x_2=3v.$$ Thus $u$ and $v$ are the two nontrivial resolvents divided by $3$, while step 1.1 is the load-bearing check that their symmetric combination is a genuine root of the cubic. [L1, L2, step 1.1, algebra] ∎
