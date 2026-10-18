---
id: thm-fas-local-contraction-under-derivative-bound
kind: theorem
title: "A smooth FAS cycle converges locally under its actual derivative bounds"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-fas-two-grid-cycle
  - lem-fas-fine-root-fixed-point
  - lem-fas-coarse-branch-derivative
  - lem-vector-newton-correction-error-under-lipschitz-jacobian
justified_by: []
proof_strategy: contraction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "William L. Briggs, Van Emden Henson, and Steve F. McCormick, A Multigrid Tutorial, 2nd ed., Chapter 6"
      url: "https://amath.colorado.edu/~stevem/appm6640/mgtut13notes.pdf"
    - title: "Harald van Brummelen, Basics of Multigrid Methods, SINTEF winter-school lecture notes"
      url: "https://www.sintef.no/globalassets/project/evitameeting/2011/lecture1.pdf"
    - title: "Van Emden Henson, Multigrid Methods for Nonlinear Problems: An Overview, UCRL-JC-150259"
      url: "https://digital.library.unt.edu/ark%3A/67531/metadc1402426/m2/1/high_res_d/15002749.pdf"
---

## Statement

Let $E:U\to\mathbb R^n$ be the actual exact-branch error map of one fixed
FAS two-grid or recursive V/W cycle, with $U\subseteq\mathbb R^n$ open. Let
$u_*\in U$ be a fine root for which the selected smoothers and coarse branches
fix $u_*$, so $E(u_*)=u_*$. Assume $E$ is $C^1$ on a neighborhood of the
closed Euclidean ball $K=\overline B_2(u_*,r)\subset U$. Put
$q=\|DE(u_*)\|_{\rm op}$, where for a linear map $T$ the induced Euclidean
operator norm is $\|T\|_{\rm op}:=\sup_{\|v\|_2=1}\|Tv\|_2$. Suppose $q<1$ and
$$\|DE(x)-DE(y)\|_{\rm op}\le L\|x-y\|_2\qquad(x,y\in K)$$
for some $L\ge0$. If $q+Lr/2<1$, then $E(K)\subseteq K$ and every iteration
$u_{k+1}=E(u_k)$ starting in $K$ satisfies
$$\|u_k-u_*\|_2\le(q+Lr/2)^k\|u_0-u_*\|_2.$$
This is a local result for the derivative of the actual cycle; it supplies no
global-start or mesh-independent rate unless $q,L,r$ are verified uniformly.

## Facts & Assumptions

**Given:** The exact-branch FAS cycle map $E$, an exact root $u_*$ fixed by the cycle, a closed convex ball $K\subset U$, $q=\|DE(u_*)\|_{\rm op}<1$, and the stated Lipschitz bound for $DE$.

[F1] [[lem-fas-fine-root-fixed-point]]: when the smoothers fix exact roots and the coarse solver selects the restricted root at zero defect, the exact-branch V/W FAS cycle fixes the fine root.

[F2] [[lem-fas-coarse-branch-derivative]]: for a C1 two-grid exact branch with invertible coarse Jacobian, the actual cycle derivative includes the pre-smoother, $I-PDF_H(Iu_*)^{-1}RDF_h(u_*)$, and the post-smoother.

[F3] [[lem-vector-newton-correction-error-under-lipschitz-jacobian]]: for a C1 map on a convex set with $L$-Lipschitz derivative, the endpoint Taylor remainder is bounded by $L\|x-x_*\|_2^2/2$.

## Proof


**Proof technique:** contraction.

1.1 In the two-grid case, [F2] identifies $DE(u_*)$ as the derivative of the actual pre-smoother, implicit coarse-branch correction, and post-smoother composition. For a recursive V/W cycle, $q$ in the hypotheses is the derivative norm of that full composed map. [F1, F2, given]

1.2 Fix $x\in K$ and put $e=x-u_*$. Apply [F3] with its variables $x=u_*$ and $x_*=x$. Reversing the resulting difference and using $E(u_*)=u_*$ gives $\|E(x)-u_*-DE(u_*)e\|_2\le\frac{L}{2}\|e\|_2^2.$ Thus, since $\|DE(u_*)\|_{\rm op}=q$ and $\|e\|_2\le r$, $\|E(x)-u_*\|_2\le q\|e\|_2+\frac{L}{2}\|e\|_2^2\le\kappa\|e\|_2,\qquad \kappa:=q+Lr/2<1.$ [given, F1, F3, algebra]

2.1 For $x\in K$, step 1.2 gives $\|E(x)-u_*\|_2\le\kappa\|x-u_*\|_2\le\kappa r<r$, so $E(x)\in K$. This proves invariance of the stated ball. [step 1.2, algebra]

3.1 For an iterate starting at $u_0\in K$, invariance keeps every $u_k$ in $K$ and step 1.2 gives $\|u_{k+1}-u_*\|_2\le\kappa\|u_k-u_*\|_2$. Induction yields $\|u_k-u_*\|_2\le\kappa^k\|u_0-u_*\|_2$; because $0\le\kappa<1$, the right side tends to zero. [step 1.2, step 2.1, algebra] ∎
## Remarks

For the two-grid exact-branch cycle, [[lem-fas-coarse-branch-derivative]] gives the derivative to be checked. For a recursive V/W cycle, the bound must be checked for the complete composed cycle. The one-sided estimate toward $u_*$ does not assert a Banach contraction bound between every pair of points in $K$.

