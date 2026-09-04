---
id: prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes
kind: proposition
title: "A vector field is flow-invariant if and only if its Lie derivative vanishes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lie-derivative-of-a-vector-field, thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket]
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

Let $X$ have maximal flow $\Phi$. A smooth vector field $Y$ is invariant under
that flow, meaning

$$ (\Phi_t)_*Y=Y $$

whenever both sides are defined, if and only if $\mathcal L_XY=0$.

## Facts & Assumptions

**Given:** Smooth vector fields $X,Y$ on $M$ and the maximal flow $\Phi$ of $X$.

[L1] The Lie derivative is defined by $$ (\mathcal L_XY)_p=\left.\frac{d}{dt}\right|_{t=0} (\Phi_{-t})_*Y_{\Phi_t(p)}. $$ ([[def-lie-derivative-of-a-vector-field]]).

## Proof

**Proof technique:** direct.

1.1 If $(\Phi_t)_*Y=Y$ for all admissible $t$, then $(\Phi_{-t})_*Y_{\Phi_t(p)}=Y_p$ for every $p$. Differentiating at $t=0$ and using [L1] gives $(\mathcal L_XY)_p=0$ for every $p$. [L1, given]

1.2 Conversely, assume $\mathcal L_XY=0$. For fixed $p$, define $F_p(t):=(\Phi_{-t})_*Y_{\Phi_t(p)}$. The same difference-quotient formula as in [L1], applied at the point $\Phi_t(p)$ and then transported back by $\Phi_{-t}$, shows $F_p'(t)=0$ for every admissible $t$. Hence $F_p$ is constant, so $F_p(t)=F_p(0)=Y_p$. [L1, given]

2.1 Rewriting the identity from step 1.2 gives $(\Phi_t)_*Y=Y$ wherever defined. Therefore $Y$ is flow-invariant if and only if $\mathcal L_XY=0$. [step 1.1, step 1.2] ∎
