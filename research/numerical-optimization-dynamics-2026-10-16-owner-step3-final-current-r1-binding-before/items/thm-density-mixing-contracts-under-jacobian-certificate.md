---
id: thm-density-mixing-contracts-under-jacobian-certificate
kind: theorem
title: A uniform derivative bound certifies contraction of relaxed density mixing
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-admissible-hermitian-density-domain, def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, lem-admissible-density-domain-is-closed-convex-complete, thm-block-projector-frechet-derivative-and-bound, thm-banach-fixed-point, cor-vector-valued-ftc-and-lipschitz-bound, thm-chain-rule-for-total-derivatives, def-c-one-map-and-local-inverse]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §3.2
      url: https://arxiv.org/pdf/2004.09088
    - title: Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, §2.2
      url: https://www.numdam.org/item/M2AN_2000__34_4_749_0.pdf
verification:
  precheck: pending
---

## Statement

Let $K\subseteq\mathcal D_r$ be nonempty, closed, and convex in Frobenius norm.
Suppose $F$ is $C^1$ on an open neighborhood of $K$, every matrix $F(D)$ there
has a strict $r$th gap so the gapped projector map $\Phi$ is defined, and for a
fixed $\alpha\in[0,1]$ the relaxed map
$$T_\alpha(D)=(1-\alpha)D+\alpha\Phi(D)$$
satisfies $T_\alpha(K)\subseteq K$. If a certified induced-norm bound
$$\|DT_\alpha(D)\|_{F\to F}\le q\qquad(D\in K),\qquad 0\le q<1,$$
holds, where $\|A\|_{F\to F}:=\sup_{\|H\|_F=1}\|A[H]\|_F$, then
$T_\alpha$ is a contraction on $K$ and its iterates converge to a unique fixed
point. The derivative is
$$DT_\alpha(D)=(1-\alpha)I+\alpha D\Phi(D).$$
The derivative bound is a separate hypothesis; $\alpha>0$ alone does not imply
contraction.

## Facts & Assumptions
**Given:** A nonempty closed convex $K\subseteq\mathcal D_r$, a $C^1$ map $\Phi$ defined on a neighborhood of $K$ with $\Phi(K)\subseteq\mathcal P_r$, a fixed $\alpha\in[0,1]$, invariance $T_\alpha(K)\subseteq K$, and $\sup_{D\in K}\|DT_\alpha(D)\|_{F\to F}\le q<1$.

[F1] The response map is $\Phi(D)=\Pi_r(F(D))$ wherever $F(D)$ has a strict $r$th gap ([[def-self-consistent-projector-response-map]]).

[L1] At a strict gap, the response map has a unique rank-$r$ projector value ([[lem-gapped-projector-map-well-defined]]).

[F2] The gapped block projector is $C^1$ and has the contour derivative on its common-gap neighborhood ([[thm-block-projector-frechet-derivative-and-bound]]).

[F3] A continuously differentiable vector-valued map with derivative norm bounded by $q$ on an interval is $q$-Lipschitz ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F4] A contraction of a nonempty complete metric space has a unique fixed point and convergent iterates ([[thm-banach-fixed-point]]).

[F5] The composition derivative is given by the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[F6] A $C^1$ map has a continuous Frechet derivative on its open domain ([[def-c-one-map-and-local-inverse]]).

[F7] The admissible density domain is complete in Frobenius norm ([[lem-admissible-density-domain-is-closed-convex-complete]]).

## Proof


1.1 For $D,E\in K$, convexity puts the segment $Z(t)=E+t(D-E)$ in $K$ for $t\in[0,1]$. By [F1] and [L1], $\Phi$ is defined along this segment; [F2] gives its local $C^1$ regularity. For an increment $H$, $T_\alpha(D+H)-T_\alpha(D)=(1-\alpha)H+\alpha(\Phi(D+H)-\Phi(D))$, so Frechet differentiability of $\Phi$ gives $DT_\alpha(D)=(1-\alpha)I+\alpha D\Phi(D)$. The chain rule [F5] on the segment gives $\frac d{dt}T_\alpha(Z(t))=DT_\alpha(Z(t))[D-E]$. Its norm is at most $q\|D-E\|_F$ by the assumed induced-norm bound; continuity follows from [F2] and [F6]. [given, F1, L1, F2, F5, F6, algebra]

2.1 Apply [F3] on $[0,1]$ to this path. It yields $\|T_\alpha(D)-T_\alpha(E)\|_F\le q\|D-E\|_F$, so $T_\alpha$ is a contraction on $K$. [step 1.1, F3]

3.1 Any Frobenius-Cauchy sequence in $K$ is Cauchy in $\mathcal D_r$, so [F7] gives a limit in $\mathcal D_r$; closedness of $K$ places that limit in $K$. Thus $K$ is complete. Invariance and step 2.1 allow [F4] to give a unique fixed point and convergence of all iterates from $K$. [given, step 2.1, F4, F7] ∎
