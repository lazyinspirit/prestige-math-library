---
id: thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute
kind: theorem
title: "Two vector fields commute if and only if their local flows commute"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-on-flows, prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains, thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket, prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $X$ and $Y$ be smooth vector fields with local flows $\Phi^X$ and $\Phi^Y$.
Then $[X,Y]=0$ if and only if

$$ \Phi_t^X\circ \Phi_s^Y=\Phi_s^Y\circ \Phi_t^X $$

whenever both compositions are defined.

## Facts & Assumptions

**Given:** Smooth vector fields $X,Y$ with local flows $\Phi^X,\Phi^Y$.

[L1] $\mathcal L_XY=[X,Y]$ ([[thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket]]).

[L2] A vector field is invariant under the flow of $X$ exactly when its Lie derivative along $X$ vanishes ([[prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes]]).

## Proof

**Proof technique:** direct.

1.1 Assume $[X,Y]=0$. By [L1] and [L2], the field $Y$ is invariant under the $X$-flow. Therefore, for each admissible $t$, the diffeomorphism $\Phi_t^X$ sends $Y$-integral curves to $Y$-integral curves with the same parameter. [L1, L2, given]

1.2 Conversely, assume the local flows commute whenever both sides are defined. Differentiate the identity $$ \Phi_t^X(\Phi_s^Y(p))=\Phi_s^Y(\Phi_t^X(p)) $$ with respect to $s$ at $s=0$. This yields $(\Phi_t^X)_*Y=Y$ on the common domain. By [L2], $\mathcal L_XY=0$, and then [L1] gives $[X,Y]=0$. [L1, L2, given]

2.1 Fix $p$ and admissible $s,t$. The curves $$ r\mapsto \Phi_t^X(\Phi_r^Y(p)) \quad\text{and}\quad r\mapsto \Phi_r^Y(\Phi_t^X(p)) $$ are both $Y$-integral curves through the point $\Phi_t^X(p)$ at $r=0$. By uniqueness of integral curves, they agree for all common $r$, and evaluating at $r=s$ gives $$ \Phi_t^X(\Phi_s^Y(p))=\Phi_s^Y(\Phi_t^X(p)). $$ [step 1.1]

3.1 Therefore two smooth vector fields commute if and only if their local flows commute on their common domains. [step 2.1, step 1.2] ∎
