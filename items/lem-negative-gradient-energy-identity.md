---
id: lem-negative-gradient-energy-identity
kind: lemma
title: "A negative-gradient trajectory satisfies the energy identity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-negative-gradient-trajectory-of-a-morse-function, def-riemannian-gradient-of-a-smooth-function, thm-chain-rule-for-differentials-of-smooth-maps]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Lemma 13.1"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

If $\gamma:I\to M$ is a negative-gradient trajectory of $f$ for $g$, then

$$ \frac{d}{dt}f(\gamma(t))=-\lVert\operatorname{grad}_g f(\gamma(t))\rVert_g^2\qquad(t\in I). $$

No compactness or completeness is assumed.

## Facts & Assumptions

**Given:** A negative-gradient trajectory $\gamma:I\to M$ of $f$ for $g$ and $t\in I$.

[F1] Its velocity is $\dot\gamma(t)=-\operatorname{grad}_g f(\gamma(t))$ ([[def-negative-gradient-trajectory-of-a-morse-function]]).

[F2] The gradient satisfies $df_x(v)=g_x(\operatorname{grad}_g f(x),v)$ ([[def-riemannian-gradient-of-a-smooth-function]]).

[F3] The differential chain rule applies to the smooth maps $\gamma$ and $f$ ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

## Proof

**Proof technique:** direct.

1.1 By [F3], $(f\circ\gamma)'(t)=df_{\gamma(t)}(\dot\gamma(t))$. [F3, given]

2.1 Substituting [F1] into step 1.1 and applying [F2] gives $(f\circ\gamma)'(t)=-g_{\gamma(t)}(\operatorname{grad}_g f,\operatorname{grad}_g f)$. [F1, F2, step 1.1]

3.1 The right-hand side in step 2.1 is $-\lVert\operatorname{grad}_g f(\gamma(t))\rVert_g^2$, proving the identity on $I$. [step 2.1, algebra] ∎
