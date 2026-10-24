---
id: ex-unit-and-counit-of-the-free-vector-space-adjunction
kind: example
title: 'The unit inserts basis vectors and the counit evaluates formal linear combinations in the free-vector-space adjunction'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-free-module-functor-is-left-adjoint-to-the-underlying-set-functor, def-free-module-on-a-set-and-standard-basis, def-adjunction-by-unit-counit-and-triangle-identities]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Tom Leinster, Basic Category Theory, Example 2.2.1'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Example

Let $k$ be a field. In the free-vector-space adjunction $k^{(-)}\dashv U$, the unit sends $x$ to the basis vector $e_x$, and the counit

$$\varepsilon_V:k^{(U(V))}\longrightarrow V$$

sends a formal finite sum $\sum_{v\in E}a_ve_v$ to the actual sum $\sum_{v\in E}a_vv$ in $V$.

## Facts & Assumptions

**Given:** A set $X$ and a $k$-vector space $V$.

[L1] The free-module adjunction sends a function on $X$ to its unique linear extension from $k^{(X)}$ ([[thm-the-free-module-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[F1] Every element of $k^{(X)}$ is a unique finite sum $\sum_{x\in E}a_xe_x$, and $x\mapsto e_x$ is the standard basis inclusion ([[def-free-module-on-a-set-and-standard-basis]]).

[F2] The unit and counit of an adjunction satisfy $(\varepsilon F)(F\eta)=1_F$ and $(U\varepsilon)(\eta U)=1_U$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the unit is the standard basis inclusion $x\mapsto e_x$. The counit is the unique linear extension of $1_{U(V)}$, so [F1] gives $\varepsilon_V(\sum a_ve_v)=\sum a_vv$. [L1, F1]

2.1 On a basis vector $e_x$, the composite $\varepsilon_{k^{(X)}}k^{(\eta_X)}$ sends $e_x$ to $e_{e_x}$ and then to $e_x$. Linearity and [F1] show that it is the identity on all of $k^{(X)}$. [step 1.1, F1]

2.2 On $v\in V$, the composite $U(\varepsilon_V)\eta_{U(V)}$ sends $v$ to $e_v$ and then to $v$. Hence both triangle identities in [F2] hold. [step 1.1, F2]

3.1 When $X=\varnothing$, $k^{(X)}$ is the zero vector space and step 2.1 is the unique linear endomorphism of it. When $V=0$, the formula in step 1.1 is the zero map. [step 1.1, step 2.1] ∎
