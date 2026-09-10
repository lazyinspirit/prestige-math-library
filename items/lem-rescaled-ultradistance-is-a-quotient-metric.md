---
id: "lem-rescaled-ultradistance-is-a-quotient-metric"
kind: "lemma"
title: "The rescaled ultradistance defines a metric"
status: published
origin: "pipeline"
deps: ["def-rescaled-ultralimit-and-asymptotic-cone", "lem-bounded-real-ultralimits-and-free-tail-extension", "def-metric-space"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §10.4 initial pseudometric and quotient construction"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

For the bounded sequence space in the rescaled-ultralimit definition, $D$ is a finite pseudometric, $D(x,y)=0$ is an equivalence relation, and $d_\omega([x],[y])=D(x,y)$ is a metric. Changes off a large set do not change a point. Representatives bounded only on a large set give the same quotient after replacement by the basepoints elsewhere.

## Facts & Assumptions

**Given:** Pointed metric spaces $(X_n,d_n,e_n)$, positive scales, and the supplied ultrafilter; $x,y,z\in\mathcal B$.

[F1] The sequence space and zero-distance relation are the provisional constructions. ([[def-rescaled-ultralimit-and-asymptotic-cone]]).

[F2] Bounded real ultralimits exist and preserve sums, order and absolute values; large-set modifications do not affect them. ([[lem-bounded-real-ultralimits-and-free-tail-extension]]).

[F3] Metrics are symmetric, separate points, and satisfy the triangle inequality. ([[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 Symmetry and the triangle inequality give $0=d_n(x_n,x_n)\le2d_n(x_n,y_n)$, so distances are nonnegative. The bound $\lambda_nd_n(x_n,y_n)\le\lambda_nd_n(x_n,e_n)+\lambda_nd_n(y_n,e_n)$ makes every pairwise distance sequence bounded. Thus $D(x,y)$ exists and is finite. [F1, F2, F3]

2.1 Passing the coordinate identities and inequalities to limits gives $D(x,x)=0$, $D(x,y)=D(y,x)\ge0$ and $D(x,z)\le D(x,y)+D(y,z)$. In particular $D(x,y)=D(y,z)=0$ implies $D(x,z)=0$, establishing transitivity as well as reflexivity and symmetry of the zero relation. [step 1.1, F2, F3]

3.1 The coordinate triangle inequalities in both orders imply $|\lambda_nd_n(x_n,y_n)-\lambda_nd_n(x'_n,y'_n)|\le\lambda_nd_n(x_n,x'_n)+\lambda_nd_n(y_n,y'_n)$. When $x\sim x'$ and $y\sim y'$, the right side has limit zero. Therefore $D(x,y)=D(x',y')$ and the quotient formula is independent of representatives. [step 2.1, F2, F3]

4.1 On the quotient, symmetry and the triangle inequality follow from those for $D$. Distance zero means exactly $x\sim y$, which means $[x]=[y]$; conversely equal classes have distance zero. If representatives agree on a large set, their distance sequence is zero there, hence has limit zero. [step 2.1, step 3.1, F1, F2]

5.1 If $\lambda_nd_n(x_n,e_n)\le R$ only on a large set $A$, replace $x_n$ by $e_n$ outside $A$. The replacement is globally bounded by $R$. Two such choices agree on the intersection of their large sets, so step 4.1 identifies them. Every globally bounded sequence is already of this form, proving equality of the quotient constructions, including the constant basepoint and one-point quotient. [step 4.1, F1] ∎
