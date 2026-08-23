---
id: ex-gabriels-horn-has-unbounded-truncated-lateral-area
kind: example
title: 'Gabriel''s horn has unbounded truncated lateral area'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-surface-area-of-revolution-formula, thm-algebra-of-derivatives, thm-monotonicity-of-the-integral, def-integral-logarithm, thm-integral-logarithm-is-unbounded]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'APEX Calculus II, Section 7.4, Example 216'
      url: 'https://web.archive.org/web/20251010212618if_/https://www.vmi.edu/media/content-assets/documents/academics/appliedmath/CalculusII_Version2.pdf'
pipeline_run: null
---

## Example

Rotate $r(x)=1/x$ about the $x$-axis for $x\ge1$. If $A(T)$ is the lateral area of the compact truncation $1\le x\le T$, then $A(T)$ is unbounded as $T\to\infty$.

## Facts & Assumptions

**Given:** A real $T>1$ and the radius $r(x)=1/x$ on $[1,T]$.

[L1] The surface-of-revolution formula gives $A(T)=2\pi\int_1^Tr(x)\sqrt{1+r'(x)^2}\,dx$, and derivative algebra gives $r'(x)=-x^{-2}$ ([[cor-surface-area-of-revolution-formula]], [[thm-algebra-of-derivatives]]).

[L2] Integral monotonicity preserves pointwise inequalities, $L(T)=\int_1^Tdx/x$ is the integral logarithm, and $L$ is unbounded above ([[thm-monotonicity-of-the-integral]], [[def-integral-logarithm]], [[thm-integral-logarithm-is-unbounded]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $A(T)=2\pi\int_1^T x^{-1}\sqrt{1+x^{-4}}\,dx$. [given, L1, algebra]

2.1 Since $\sqrt{1+x^{-4}}\ge1$ for $x\ge1$, [L2] gives $A(T)\ge2\pi\int_1^Tdx/x=2\pi L(T)$. [step 1.1, L2, algebra]

3.1 The lower bound is unbounded by [L2], so the family of compact-truncation areas is unbounded. The noncompact horn itself was not treated as one compact patch. [step 2.1, L2] ∎
