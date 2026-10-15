---
id: pthm-td-compact-continuous-phase-mixture
kind: physics-theorem
title: Attained entropy-maximizing mixtures on compact phase domains
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Mixtures of a compact set of declared phase-generator states with continuous entropy and a fixed barycenter; every feasible Borel probability mixture is included, while no attainment claim is made for noncompact domains or a different physical normalization.
dependency_level: 9
deps:
  - def-td-phase-and-coexistence-domain
  - post-td-concave-fundamental-entropy
  - def-borel-sigma-algebra
  - def-probability-measure
  - def-tdmath-measure-integral
  - lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-integral-triangle-inequality
  - thm-extreme-value-metric
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-compact-subset-is-closed-and-bounded
  - thm-heine-borel-rn
  - thm-rank-nullity
dependency_roles:
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  post-td-concave-fundamental-entropy: physical-assumption
  def-borel-sigma-algebra: mathematical-premise
  def-probability-measure: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-rank-nullity: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §5.1.1"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $d\ge1$ and let $K\subseteq\mathbb R^d$ be a nonempty compact set of dimensionless generator coordinates. Each $x\in K$ labels one model-specified phase-generator state; the model assigns it entropy per mole $s(x)\in\mathrm{J\,mol^{-1}K^{-1}}$, and $s:K\to\mathbb R$ is continuous, using the numerical entropy value in that fixed unit. Define $\operatorname{conv}K$ to be the set of all finite convex combinations of points of $K$, and fix $\bar x\in\operatorname{conv}K$. Use the Borel sigma algebra relative to $K$. A Borel probability mixture is a countably additive probability measure $P$ on that sigma algebra; its barycenter and entropy per mole are the coordinatewise integrals $\int_Kx\,dP$ and $\int_Ks\,dP$. For $x\in K$, define the unit point mass $\delta_x$ by $\delta_x(A)=1$ if $x\in A$ and $\delta_x(A)=0$ otherwise, for Borel $A\subseteq K$. Assume every Borel probability mixture with barycenter $\bar x$ is feasible and has entropy per mole $\int_Ks\,dP$. Then there are $m\le d+1$, points $x_1,\ldots,x_m\in K$, and weights $\theta_i\ge0$ with $\sum_{i=1}^m\theta_i=1$ such that $P_*:=\sum_{i=1}^m\theta_i\delta_{x_i}$ is a feasible Borel probability mixture and $\int_Ks\,dP_*\ge\int_Ks\,dP$ for every feasible mixture $P$.

Here integrals use the measure convention of [[def-tdmath-measure-integral]]. The entropy map is part of the model; this theorem derives neither its microscopic meaning nor compactness of a physical phase domain.

## Facts & Assumptions

**Given:** The nonempty compact set $K\subseteq\mathbb R^d$, $d\ge1$, continuous entropy map $s$, prescribed $\bar x\in\operatorname{conv}K$, coordinatewise integral convention, and feasibility of every Borel probability mixture with that barycenter. The normalization is per mole and no system-size limit is taken.

[A1] [[def-td-phase-and-coexistence-domain]]: A generator point is a model-specified state label; the theorem's mixture feasibility is an additional model assumption and does not assert that every phase collection is physically available.

[A2] [[post-td-concave-fundamental-entropy]]: Entropy is a finite state function on the declared physical states. Continuity of $s$ on this compact $K$ is the explicit regularity hypothesis here.

[F1] [[def-borel-sigma-algebra]] and [[def-probability-measure]]: The Borel sigma algebra is generated by the relatively open subsets of $K$, and each probability measure has total mass one.

[F2] [[def-tdmath-measure-integral]] and [[lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral]]: The local nonnegative integral is the supremum of simple-function integrals and agrees with the shared nonnegative Lebesgue integral. Since both signed-integral conventions use the difference of the positive and negative part integrals, they agree on bounded real functions as well.

[F3] [[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], and [[thm-integral-triangle-inequality]]: Bounded Borel real functions are integrable under a finite probability measure; their integrals are linear, order-preserving, and satisfy $|\int f\,dP|\le\int|f|\,dP$.

[L1] [[thm-extreme-value-metric]]: A continuous real function on a nonempty compact metric space is bounded and attains its minimum and maximum.

[L2] [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-compact-subset-is-closed-and-bounded]], and [[thm-heine-borel-rn]]: Continuous images of compact metric spaces are compact; compact Euclidean subsets are closed and bounded; closed bounded subsets of finite-dimensional Euclidean spaces are compact.

[L3] [[thm-rank-nullity]]: For a linear map between finite-dimensional vector spaces, domain dimension equals kernel dimension plus image dimension.

## Proof

**Given:** The data in [A1]–[A2] and [F1]–[F3]. Write $h:K\to\mathbb R^{d+1}$ for the continuous map $h(x)=(x,s(x))$, and let $H:=h[K]$ and $C:=\operatorname{conv}H$, where convex hull means finite convex combinations.

1.1 The map $h$ is continuous, so [L2] makes $H$ compact. For every Borel probability $P$ on $K$, each coordinate of $h$ is bounded and Borel. Compactness and [L1] give boundedness. If $|f|\le M$ for one such coordinate, [F3] gives $\int_K|f|\,dP\le M P(K)=M$, so $f$ is integrable. [given, A2, F1, F3, L1, L2, construct]

2.1 Every point of $C$ is a finite convex combination of points $h(x_i)$. If such a representation has $N>d+2$, the linear map $T:\mathbb R^N\to\mathbb R^{d+2}$ defined by $T(c)=(\sum_i c_i h(x_i),\sum_i c_i)$ has a nonzero kernel vector $c$ by [L3], because the coordinate bases give domain dimension $N$ and codomain dimension $d+2$. Thus $\sum_i c_i=0$ and $\sum_i c_i h(x_i)=0$, so $c$ has both positive and negative coordinates. After dropping zero weights from the representation, set $t=\min_{c_i>0}\theta_i/c_i$ and replace each weight $\theta_i$ by $\theta_i-tc_i$. The new weights remain nonnegative, still sum to one, represent the same point, and at least one is zero. Repeating reduces every combination to at most $d+2$ terms. Hence $C$ is the image of $K^{d+2}\times\Delta_{d+2}$ under $\Theta((x_i),(\theta_i))=\sum_{i=1}^{d+2}\theta_i h(x_i)$, where $\Delta_{d+2}:=\{(\theta_i):\theta_i\ge0,\sum_i\theta_i=1\}$; shorter combinations are padded with zero weights and any fixed point of nonempty $K$. Each factor $K$ is closed and bounded by [L2], and $\Delta_{d+2}$ is closed by continuity of the finite coordinate sum and its coordinate inequalities; it is bounded since $0\le\theta_i\le1$. Their product is therefore closed and bounded in $\mathbb R^{(d+1)(d+2)}$, so compact by [L2]. To check $\Theta$ is continuous on this compact parameter set, fix a parameter $((x_i),(\theta_i))$. Each coordinate $h_j$ is bounded by some $M$ on $K$ and is continuous at each of the finitely many $x_i$. For any $\epsilon>0$, choose neighborhoods of the $x_i$ making $|h_j(x_i')-h_j(x_i)|<\epsilon/(2N)$ for every output coordinate $j$, and require $|\theta_i'-\theta_i|<\epsilon/(2N(M+1))$. Since $0\le\theta_i'\le1$ and $|h_j(x_i)|\le M$, each product difference $|\theta_i'h_j(x_i')-\theta_ih_j(x_i)|<\epsilon/N$; summing over $i$ makes each output-coordinate difference smaller than $\epsilon$. Thus $\Theta$ is continuous. The continuous-image clause of [L2] makes its image $C$ compact, and [L2] also makes $C$ closed. [given, L1, L2, L3, step 1.1, construct, algebra]

3.1 Fix any Borel probability $P$ on $K$ and let $y(P):=(\int_K x\,dP,\int_Ks\,dP)=\int_Kh\,dP$, with coordinatewise integration. For $\epsilon>0$, compactness of $H$ gives a finite cover of $H$ by open Euclidean balls of radius $\epsilon$. Their preimages under $h$ are Borel; disjointifying them in a fixed finite order gives a finite Borel partition $(A_i)$ of $K$. For every nonempty part choose $z_i\in A_i$ and put $\theta_i=P(A_i)$. Then $y_\epsilon:=\sum_i\theta_i h(z_i)$ belongs to $C$. For $x\in A_i$, both $h(x)$ and $h(z_i)$ lie in the same radius-$\epsilon$ ball, so each coordinate difference is at most $2\epsilon$. The simple map equal to $h(z_i)$ on $A_i$ has integral $y_\epsilon$ by the simple-integral definition. By linearity and the integral triangle inequality in [F3], each coordinate of $y(P)-y_\epsilon$ has absolute value at most $2\epsilon\sum_iP(A_i)=2\epsilon$. Consequently $\|y(P)-y_\epsilon\|_2\le2\epsilon\sqrt{d+1}$, so the sequence obtained with $\epsilon=1/n$ converges to $y(P)$. Since $C$ is closed by step 2.1, $y(P)\in C$. [given, F1, F2, F3, L2, step 2.1, construct]

3.2 Because $\bar x\in\operatorname{conv}K$, a finite convex combination of generators has barycenter $\bar x$; its corresponding combination of points $h(x)$ shows that $E_{\bar x}:=\{r\in\mathbb R:(\bar x,r)\in C\}$ is nonempty. The set $E_{\bar x}$ is bounded because $C$ is bounded, and it is closed because $C$ is closed and $r\mapsto(\bar x,r)$ is continuous. By [L2] it is compact in $\mathbb R$, so [L1] applied to the identity function yields a maximum $r_*\in E_{\bar x}$. [given, L1, L2, step 2.1, algebra]

4.1 Represent $(\bar x,r_*)\in C$ by a finite convex combination $\sum_{i=1}^N\theta_i(x_i,s(x_i))$, dropping zero weights. If $N>d+1$, the linear map $R:\mathbb R^N\to\mathbb R^{d+1}$ given by $R(c)=(\sum_i c_ix_i,\sum_i c_i)$ has a nonzero kernel vector by [L3], since its domain dimension is $N$ and its codomain dimension is $d+1$. Hence $\sum_i c_i=0$ and $\sum_i c_ix_i=0$, with both signs among the $c_i$. If $\sum_i c_is(x_i)\ne0$, choose the sign of $c$ so that this sum is positive. For sufficiently small $t>0$, the weights $\theta_i+tc_i$ are nonnegative, preserve total mass and barycenter, and increase the last coordinate above $r_*$, contradicting maximality in step 3.2. Thus $\sum_i c_is(x_i)=0$. Now take $t=\min_{c_i>0}\theta_i/c_i$ and replace $\theta_i$ by $\theta_i-tc_i$. This removes at least one positive weight while preserving total mass, barycenter, and entropy value $r_*$. Repeating finitely many times leaves at most $d+1$ positive weights. [given, L3, step 3.2, construct, algebra]

5.1 Let $P_*:=\sum_i\theta_i\delta_{x_i}$ be the probability measure from step 4.1. Each $\delta_{x_i}$ is countably additive because among disjoint Borel sets at most one contains $x_i$, and $\delta_{x_i}(K)=1$; hence $P_*$ is a Borel probability measure. It has barycenter $\bar x$ and entropy $r_*$, so it is feasible by the model assumption. For any other feasible Borel probability $P$, step 3.1 gives $(\bar x,\int s\,dP)\in C$, so $\int s\,dP\le r_*$. Thus $P_*$ attains the entropy maximum among all Borel mixtures and has at most $d+1$ atoms. No finite generator menu was assumed. [given, A1, F1, step 3.1, step 3.2, step 4.1, algebra] ∎

## Remarks

The proof treats every feasible Borel probability mixture, not just finite mixtures. It proves that the vector of integrated generator coordinates and entropy lies in a compact finite-dimensional convex hull, then uses maximality at the prescribed barycenter to reduce the support to $d+1$. It does not establish that a physical system has a compact generator domain or that every mathematical mixture is physically feasible; those remain explicit model hypotheses.
