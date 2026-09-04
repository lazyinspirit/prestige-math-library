---
id: def-integral-curve-of-a-vector-field
kind: definition
title: "Integral curves of a vector field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-vector-field-as-a-tangent-bundle-section, def-velocity-derivation-of-a-smooth-curve]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Definition

Let $X$ be a smooth vector field on $M$. A smooth curve
$\gamma:I\to M$, defined on an interval $I\subseteq\mathbb R$, is an
**integral curve** of $X$ if

$$ \gamma'(t)=X_{\gamma(t)} $$

for every $t\in I$.

If $\gamma(0)=p$, then $\gamma$ is an integral curve of $X$ **through** $p$.
