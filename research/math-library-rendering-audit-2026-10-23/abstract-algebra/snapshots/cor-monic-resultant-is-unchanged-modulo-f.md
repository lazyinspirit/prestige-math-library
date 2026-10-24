---
id: cor-monic-resultant-is-unchanged-modulo-f
kind: corollary
title: "For monic $f$, if $g-g_1=qf$, then $\\operatorname{Res}(f,g)=\\operatorname{Res}(f,g_1)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-monic-resultant-root-product-and-common-root-criterion, def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 4.35(c)"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field, let $f\in F[t]$ be monic, and let $g,g_1,q\in F[t]$ satisfy

$$g-g_1=qf.$$

Then

$$\operatorname{Res}(f,g)=\operatorname{Res}(f,g_1).$$

## Facts & Assumptions

**Given:** Polynomials $f,g,g_1,q$ satisfying the identity in the Statement, with $f$ monic.

[L1] If $f$ has roots $\alpha_i$ in a splitting field, then $\operatorname{Res}(f,h)=\prod_i h(\alpha_i)$ for every polynomial $h$ ([[thm-monic-resultant-root-product-and-common-root-criterion]]).

[L2] Polynomial evaluation is a ring homomorphism and an element $a$ is a root of $f$ exactly when $f(a)=0$ ([[def-polynomial-evaluation-and-root]]).

## Proof

**Proof technique:** direct.

1.1 For every root $\alpha_i$ of $f$, evaluate $g-g_1=qf$ to obtain $g(\alpha_i)-g_1(\alpha_i)=q(\alpha_i)f(\alpha_i)=0$, hence $g(\alpha_i)=g_1(\alpha_i)$. [given, L2, algebra]

2.1 Apply [L1] to $g$ and $g_1$ and multiply the equal values from step 1.1 to obtain equality of the resultants. [step 1.1, L1]

3.1 If $\deg f=0$, then $f=1$ and both resultants are the empty product $1$; the argument remains valid. [L1] ∎
