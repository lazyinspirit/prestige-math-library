---
id: cex-cusp-level-set-has-a-rank-drop-at-the-origin
kind: counterexample
title: 'The cusp $y^2=x^3$ has a rank drop at the origin'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-regular-critical-points-values-and-level-sets, cor-regular-level-set-local-graph-theorem, def-vector-valued-derivative-and-integral, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, regular-level examples'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
pipeline_run: null
---

## Statement refuted

A polynomial level curve need not be regular everywhere. The zero level of $F(x,y)=y^2-x^3$ has derivative rank $1$ away from the origin and rank $0$ at the origin.

## Facts & Assumptions

**Given:** The polynomial $F(x,y)=y^2-x^3$ and the curve $\gamma(t)=(t^2,t^3)$.

[L1] The power rule and derivative algebra give the continuous Jacobian row $(-3x^2,2y)$ and $\gamma'(t)=(2t,3t^2)$; the continuous-partials theorem identifies that row with $DF(x,y)$ ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-vector-valued-derivative-and-integral]]).

[L2] Regularity means surjectivity of the derivative, and a regular level is locally a $C^1$ graph ([[def-regular-critical-points-values-and-level-sets]], [[cor-regular-level-set-local-graph-theorem]]).

## Counterexample

**Proof technique:** direct.

1.1 One has $F(\gamma(t))=t^6-t^6=0$, so the parametrized cusp lies in the zero level, and [L1] gives $DF(0,0)=0$ and $\gamma'(0)=0$. [given, L1, algebra]

1.2 If $(x,y)\ne(0,0)$ lies on $F^{-1}(0)$, then $(-3x^2,2y)\ne(0,0)$, so $DF(x,y)$ has rank $1$ and is surjective onto $\mathbb R$. [given, L1, algebra]

2.1 Hence the derivative rank drops precisely at the cusp point. The two values $y=\pm x^{3/2}$ for $x>0$ prevent a graph $y=g(x)$ there, while the relation $x=|y|^{2/3}$ is not differentiable at $0$, in accord with the missing hypothesis in [L2]. [step 1.1, step 1.2, L2, algebra]

3.1 The polynomial level curve therefore supplies the claimed rank-drop counterexample. [step 2.1] ∎
