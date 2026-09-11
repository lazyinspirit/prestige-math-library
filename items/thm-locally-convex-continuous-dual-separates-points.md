---
id: "thm-locally-convex-continuous-dual-separates-points"
kind: "theorem"
title: "The continuous dual separates points in a Hausdorff locally convex space"
status: published
origin: "pipeline"
deps: ["def-locally-convex-topological-vector-space", "lem-balanced-convex-zero-neighborhood-refinement", "thm-locally-convex-open-convex-separation", "def-hahn-banach-extension-principle-relative", "def-hausdorff-space"]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, section 5.1"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: "phase-2-next-20"
proof_strategy: "direct"
---

## Statement

Assume HB. In a Hausdorff locally convex real or complex TVS, for every $x\ne y$ there is $f\in X'$ with $\operatorname{Re}f(x)\ne\operatorname{Re}f(y)$. Equivalently,
$$\bigcap_{f\in X'}\ker f=\{0\},\qquad \ker f=\{v:f(v)=0\}.$$

## Facts & Assumptions

**Given:** HB and a Hausdorff locally convex TVS $X$.

[F1] The continuous dual is a vector space of continuous scalar-linear functionals ([[def-locally-convex-topological-vector-space]]).

[F2] Every zero-neighborhood contains an open convex zero-neighborhood ([[lem-balanced-convex-zero-neighborhood-refinement]]).

[F3] Under HB, a nonempty open convex set and a disjoint nonempty convex set have a continuous separator strict on the open side ([[thm-locally-convex-open-convex-separation]]).

[F4] HB is the additional real dominated-extension principle ([[def-hahn-banach-extension-principle-relative]]).

[F5] Distinct points have disjoint open neighborhoods in a Hausdorff space ([[def-hausdorff-space]]).

## Proof

1.1 Fix $x\ne y$ and put $v=x-y\ne0$. Hausdorffness gives an open neighborhood $U$ of zero not containing $v$, by taking disjoint open neighborhoods of zero and $v$. Refine $U$ to an open convex zero-neighborhood $V\subseteq U$. The singleton $\{v\}$ is convex and nonempty, and misses $V$. [F2, F5]

2.1 Apply open separation to $V$ and $\{v\}$. There are $f\in X'$ and $\alpha\in\mathbb R$ with $0=\operatorname{Re}f(0)<\alpha\le\operatorname{Re}f(v)$. Consequently $\operatorname{Re}f(x)-\operatorname{Re}f(y)=\operatorname{Re}f(v)>0$. The only non-ZF input is the HB application inside that separation theorem. [F1, F3, F4, step 1.1]

3.1 Every linear functional vanishes at zero, so zero belongs to the intersection of the kernels. For nonzero $v$, step 2.1 applied to $x=v,y=0$ gives a functional with nonzero real part at $v$, hence $v$ does not belong to that intersection. This proves the kernel identity from point separation. [F1, step 2.1]

4.1 Conversely, assume the kernel identity and fix $x\ne y$, with $v=x-y$. Some $f\in X'$ has $z=f(v)\ne0$. Over $\mathbb R$ this already separates real parts. Over $\mathbb C$, if $\operatorname{Re}z\ne0$ again use $f$; otherwise $\operatorname{Im}z\ne0$, and $g=-if\in X'$ has $\operatorname{Re}g(v)=\operatorname{Im}z\ne0$. Thus the kernel identity implies the stated real-part separation. For $X=\{0\}$ there are no distinct points, and the kernel identity still holds. The proof selects a functional only for one fixed pair, never a simultaneous family. [F1, step 3.1] ∎