---
id: thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket
kind: theorem
title: "The Lie derivative of a vector field equals the Lie bracket"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lie-bracket-of-smooth-vector-fields, prop-leibniz-rules-for-the-lie-bracket-with-function-multiples, def-lie-derivative-of-a-vector-field, thm-fundamental-theorem-on-flows, prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
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

For smooth vector fields $X$ and $Y$ on $M$,

$$ \mathcal L_XY=[X,Y]. $$

## Facts & Assumptions

**Given:** Smooth vector fields $X,Y$ on $M$, the maximal flow $\Phi$ of $X$, a point $p\in M$, and a smooth function $f$.

[L1] The Lie derivative of a vector field is defined by the inverse-time pushforward difference quotient ([[def-lie-derivative-of-a-vector-field]]).

[L2] The Lie bracket acts on functions by $[X,Y]f=X(Yf)-Y(Xf)$ ([[def-lie-bracket-of-smooth-vector-fields]]).

[L3] The flow of $X$ satisfies $$ \left.\frac{d}{dt}\right|_{t=0} (f\circ \Phi_t)=Xf, \qquad \left.\frac{d}{dt}\right|_{t=0} (f\circ \Phi_{-t})=-Xf. $$ ([[thm-fundamental-theorem-on-flows]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], evaluating $\mathcal L_XY$ on $f$ gives $$ (\mathcal L_XY)_p(f)=\left.\frac{d}{dt}\right|_{t=0} \big((\Phi_{-t})_*Y\big)_{\Phi_t(p)}(f) =\left.\frac{d}{dt}\right|_{t=0} Y_{\Phi_t(p)}(f\circ \Phi_{-t}). $$ [L1, given]

2.1 The expression in step 1.1 is $$ \left.\frac{d}{dt}\right|_{t=0} \Big(Y(f\circ \Phi_{-t})\Big)(\Phi_t(p)). $$ Differentiating the outer evaluation along the $X$-flow contributes $X(Yf)(p)$, while differentiating the inner function $f\circ \Phi_{-t}$ contributes $-Y(Xf)(p)$ by [L3]. Therefore $$ (\mathcal L_XY)_p(f)=X(Yf)(p)-Y(Xf)(p). $$ [L3, step 1.1]

3.1 By [L2], the right-hand side of step 2.1 is exactly $[X,Y]_p(f)$. Since this holds for every smooth $f$, the tangent vectors $(\mathcal L_XY)_p$ and $[X,Y]_p$ agree. [L2, step 2.1]

4.1 Therefore $\mathcal L_XY=[X,Y]$. [step 3.1] ∎
