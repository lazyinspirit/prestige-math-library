---
id: fs-it-is-enough-that-a-chosen-basis-act-nilpotently-in-engels-theorem
kind: false-statement
title: A nilpotent acting basis suffices for Engel's theorem
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-engels-theorem, def-nilpotent-linear-transformation-and-nil-representation]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, Engel's theorem discussion"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Theorem 1.35 and Corollary 1.38, printed pp. 46–48"
---

## Statement

In Engel's theorem it is enough to check that the adjoint operators belonging
to the members of one vector-space basis are nilpotent.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$ and
$\mathfrak g=\mathfrak{sl}_2(k)$ with its standard basis $e,f,h$ satisfying
$[h,e]=2e$, $[h,f]=-2f$, and $[e,f]=h$.

[L1] Engel's theorem requires $\operatorname{ad}_x$ to be nilpotent for every
$x\in\mathfrak g$, not merely for chosen basis elements
([[thm-engels-theorem]]).

[L2] A representation is nil only when every represented operator is
nilpotent ([[def-nilpotent-linear-transformation-and-nil-representation]]).

## Refutation

**Proof technique:** direct.

1.1 Put $u=h+e-f$. The three vectors $e,f,u$ form a basis: comparison of the $h$-coefficient in $ae+bf+cu=0$ first gives $c=0$, and then $a=b=0$. Directly, $\operatorname{ad}_e(e)=0$, $\operatorname{ad}_e(f)=h$, and $\operatorname{ad}_e(h)=-2e$, so $\operatorname{ad}_e^3=0$; similarly $\operatorname{ad}_f(e)=-h$, $\operatorname{ad}_f(f)=0$, and $\operatorname{ad}_f(h)=2f$, so $\operatorname{ad}_f^3=0$. [given, algebra]

2.1 The remaining brackets are $[u,e]=2e+h$, $[u,f]=h-2f$, and $[u,h]=-2e-2f$. Applying $\operatorname{ad}_u$ once more sends these three values respectively to $2u,-2u,-4u$, and $[u,u]=0$; hence $\operatorname{ad}_u^3=0$. Thus every member of the chosen basis $e,f,u$ acts nilpotently. [given, step 1.1, algebra]

3.1 Yet $h=u-e+f$ belongs to their span and $\operatorname{ad}_h(e)=2e$, so $(\operatorname{ad}_h)^r(e)=2^r e\neq0$ for every $r\geq1$ in characteristic zero. Therefore $\operatorname{ad}_h$ is not nilpotent, the adjoint representation is not nil in the sense of [L2], and $\mathfrak g$ is not nilpotent by [L1]. This basis is the required counterexample; all calculations are finite and choice-free. [L1, L2, step 1.1, step 2.1, algebra] ∎
