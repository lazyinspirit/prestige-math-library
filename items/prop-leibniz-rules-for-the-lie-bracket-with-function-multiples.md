---
id: prop-leibniz-rules-for-the-lie-bracket-with-function-multiples
kind: proposition
title: "Leibniz rules for the Lie bracket with function multiples"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lie-bracket-of-smooth-vector-fields, prop-a-vector-field-acts-as-a-derivation-of-smooth-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Statement

For smooth vector fields $X,Y$ and smooth functions $f,g$ on $M$,

$$ [X,fY]=f[X,Y]+(Xf)Y $$

and

$$ [fX,gY]=fg[X,Y]+f(Xg)Y-g(Yf)X. $$

## Facts & Assumptions

**Given:** Smooth vector fields $X,Y$ and smooth functions $f,g,h$.

[L1] Smooth vector fields act as derivations on smooth functions ([[prop-a-vector-field-acts-as-a-derivation-of-smooth-functions]]).

## Proof

**Proof technique:** direct.

1.1 For any test function $h$, $$ [X,fY](h)=X(f\,Yh)-f\,Y(Xh)=f[X,Y](h)+(Xf)\,Yh $$ by one application of the Leibniz rule from [L1]. Since this holds for every $h$, one has $[X,fY]=f[X,Y]+(Xf)Y$. [L1, given]

2.1 Apply step 1.1 with $fX$ in place of $X$ and use [L1] once more: $$ [fX,gY]=g[fX,Y]+(fXg)Y=g(f[X,Y]-(Yf)X)+f(Xg)Y. $$ Collecting terms gives $$ [fX,gY]=fg[X,Y]+f(Xg)Y-g(Yf)X. $$ [L1, step 1.1, algebra]

3.1 Therefore the Lie bracket satisfies the displayed Leibniz rules with function multiples. [step 1.1, step 2.1] ∎
