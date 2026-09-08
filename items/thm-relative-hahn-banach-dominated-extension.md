---
id: thm-relative-hahn-banach-dominated-extension
kind: theorem
title: Dominated extension conditional on the relative principle
status: published
origin: pipeline
deps: [def-hahn-banach-extension-principle-relative]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

Assume HB. Let $X$ be a real vector space, $M\le X$ a real linear subspace, $p:X\to\mathbb R$ sublinear, and $g:M\to\mathbb R$ real linear with $g(m)\le p(m)$ for every $m\in M$. There is a real linear extension $F:X\to\mathbb R$ satisfying
$$-p(-x)\le F(x)\le p(x)\qquad(x\in X).$$
No topology, closedness, or completeness is required.

## Facts & Assumptions

[F1] HB asserts a dominated real linear extension for every such quadruple $(X,M,p,g)$ ([[def-hahn-banach-extension-principle-relative]]).

## Proof

**Given:** HB and $X,M,p,g$ as in the statement.

1.1 All four objects have the types required by HB, and the given inequality holds for every $m\in M$. Applying HB to this quadruple yields real linear $F$ with $F|_M=g$ and $F(x)\le p(x)$ for every $x\in X$. [given, F1]

2.1 For each $x\in X$, also $-x\in X$, so $F(-x)\le p(-x)$. Since $F(-x)=-F(x)$, multiplication by $-1$ gives $-p(-x)\le F(x)$. Together with the upper bound this proves the claim. At zero, $p(0)=F(0)=0$, so both inequalities are equalities. [step 1.1, algebra] ∎

## Source notes

Brezis Theorem 1.1, p.1; Teschl Theorem 4.13 and following lower-bound observation, pp.112–113.
