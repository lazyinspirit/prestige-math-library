---
id: pthm-cmp4-local-uplift-stability-criterion
kind: physics-theorem
title: Local persistence of an uplifted minimum in a finite-dimensional scalar EFT
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 16
domain: physics
library: physics
category: string-theory
page: cmp-susy-breaking-soft-terms
deps:
  - def-cmp4-compactification-uplift-source-data
  - def-cmp4-moduli-mass-matrix-and-evolution-cutoff
  - thm-heine-borel-rn
  - thm-extreme-value-metric
dependency_roles:
  def-cmp4-compactification-uplift-source-data: formulation-prerequisite
  def-cmp4-moduli-mass-matrix-and-evolution-cutoff: formulation-prerequisite
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional theorem for a finite-dimensional canonical-scalar chart of a two-derivative four-dimensional Einstein-frame EFT. It does not identify the positive profile with an anti-D3, T-brane, D-term, or localized string source and does not bound omitted corrections."
empirical_premises: []
sources:
  references:
    - title: "S. Kachru, R. Kallosh, A. Linde, and S. Trivedi, de Sitter Vacua in String Theory, arXiv:hep-th/0301240v2"
      url: "https://arxiv.org/pdf/hep-th/0301240v2"
      locator: "§III.B, equations (15)–(16), printed pp. 5–6; one source-specific effective-potential uplift."
    - title: "L. McAllister and F. Quevedo, Moduli Stabilization in String Theory, arXiv:2310.20559v1"
      url: "https://arxiv.org/pdf/2310.20559v1"
      locator: "§4.3, equations (116)–(123), printed pp. 36–38; source- and frame-dependent uplift data and limitations."
---

## Statement

Use natural units $\hbar=c=1$ and one four-dimensional Einstein-frame normalization. Let $n\ge1$, let $x\in\mathbb R^n$ be canonical real scalar coordinates of mass dimension one, and let $B_r(x_0)=\{x:\|x-x_0\|_2\le r\}$ with $r>0$. Let $U\subset\mathbb R^n$ be open with $B_r(x_0)\subset U$, and let $V_0,f\in C^2(U)$, where $V_0$ has units of energy density and $f$ is a dimensionless real source profile. Write $I_n$ for the identity matrix, $A\succeq B$ when $v^{\mathsf T}(A-B)v\ge0$ for every $v\in\mathbb R^n$, and $\|A\|_{\rm op}:=\sup_{\|v\|_2=1}\|Av\|_2$ for the Euclidean operator norm. Suppose $\nabla V_0(x_0)=0$, $D^2V_0(x)\succeq\mu I_n$ on the whole ball for $\mu>0$, $f(x)\ge f_{\min}>0$, $\|D^2f(x)\|_{\rm op}\le L$, and $\operatorname{osc}_{B_r} f:=\sup_{B_r}f-\inf_{B_r}f\le C$ for $L,C\ge0$. For a source coefficient $D\ge0$ with energy-density units, put $V_D=V_0+D f$. If $DL<\mu$ and $DC<\mu r^2/2$, then $V_D$ has a unique interior minimizer $x_D$ in $B_r(x_0)$. If also $V_0(x_0)+Df_{\min}>0$, then $V_D(x_D)>0$. This is a conditional result about the stipulated finite-dimensional EFT potential, not a derivation of a source profile or a claim that a string compactification realizes it.

## Statement references

[Kachru, Kallosh, Linde, and Trivedi, §III.B](https://arxiv.org/pdf/hep-th/0301240v2)

[McAllister and Quevedo, §4.3](https://arxiv.org/pdf/2310.20559v1)

## Facts & Assumptions

**Given:** A finite-dimensional canonical Euclidean scalar chart, a closed ball of positive radius, and the hypotheses in the Statement.

[F1] [[def-cmp4-compactification-uplift-source-data]] defines a source contribution $\Delta V_{\rm src}=D f$ with a real coefficient and profile, fixed in the same four-dimensional Einstein-frame normalization as the base potential. It assigns no universal volume scaling.

[F2] [[def-cmp4-moduli-mass-matrix-and-evolution-cutoff]] defines finite-dimensional retained scalar EFT data and requires any physical mass/cutoff comparison to use the actually present omitted spectrum in one common Einstein frame. This theorem makes no mass/cutoff comparison and uses only the definition's finite scalar EFT interface.

[F3] [[thm-heine-borel-rn]]: in Euclidean $\mathbb R^n$ with $n\ge1$, every closed bounded subset is compact. The ball $B_r(x_0)$ is closed and bounded.

[F4] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains its maximum and minimum. We use only attainment of $V_D$ on $B_r(x_0)$.

[A1] The Euclidean norm and Hessian operator norm in the Statement use the canonical local scalar metric. In these units $\mu$ has mass dimension two, $L$ has inverse-mass-squared dimension, $C$ is dimensionless, and both $DL$ and $\mu$ have mass dimension two while $DC$ and $\mu r^2$ have mass dimension four.

[A2] The bounds on $f$, $D^2f$, and $\operatorname{osc}f$ hold uniformly on the entire closed ball, not just at its center.

## Proof

**Given:** [F1]–[F4], the regularity and uniform bounds [A1]–[A2], and the strict inequalities in the Statement.

1.1 By [F1], $D f$ is the declared source contribution in the same Einstein-frame potential; [F2] places the scalar chart in the finite retained EFT, and neither supplier adds hypotheses to the analytic estimates. The closed ball is compact by [F3] and nonempty because it contains $x_0$. Since $V_D=V_0+D f$ is continuous on the ball, [F4] gives $x_D\in B_r(x_0)$ at which $V_D$ attains its minimum. [given, F1, F2, F3, F4, A1, algebra]

1.2 For any $x\in B_r(x_0)$, the segment $\gamma(t)=x_0+t(x-x_0)$ stays in the ball by convexity. The function $g(t)=V_0(\gamma(t))$ satisfies $g'(0)=0$ and $g''(t)=(x-x_0)^TD^2V_0(\gamma(t))(x-x_0)\ge\mu\|x-x_0\|_2^2$. Integrating twice on $[0,1]$ yields $V_0(x)\ge V_0(x_0)+\frac{\mu}{2}\|x-x_0\|_2^2$. [given, A1, A2, algebra]

1.3 For each vector $v\in\mathbb R^n$ and $x$ in the ball, $v^TD^2f(x)v\ge-\|D^2f(x)\|_{\rm op}\|v\|_2^2\ge-L\|v\|_2^2$. Hence $D^2V_D(x)=D^2V_0(x)+D D^2f(x)\succeq(\mu-DL)I\succ0$. So $V_D$ is strictly convex on the convex ball and can have at most one minimizer there. [given, A1, A2, algebra]

2.1 If $\|x-x_0\|_2=r$, then [A2] gives $f(x)-f(x_0)\ge-C$. Using step 1.2 and $D\ge0$, $$V_D(x)-V_D(x_0)\ge\frac{\mu r^2}{2}-DC>0.$$ The boundary therefore has strictly larger value than the center. The minimizer from step 1.1 cannot lie on the boundary, so it is interior; by strict convexity from step 1.3 it is unique. [given, A2, step 1.1, step 1.2, step 1.3, algebra]

3.1 Applying step 1.2 to $x_D$ gives $V_0(x_D)\ge V_0(x_0)$. Since $f(x_D)\ge f_{\min}$ and $D\ge0$, $V_D(x_D)=V_0(x_D)+Df(x_D)\ge V_0(x_0)+Df_{\min}$. Under the final positivity hypothesis in the Statement this is strictly positive. [given, step 1.2, algebra] ∎

## Remarks

The extra dependency [[thm-heine-borel-rn]] supplies compactness of the closed Euclidean ball; the extreme-value supplier alone assumes compactness and does not establish it. No step uses the diagrammatic shape of the basin or any empirical observation.
