---
id: lem-supergravity-compact-metric-variation
kind: lemma
title: Compactly Supported Metric Variation of a Weighted Scalar-Curvature Action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - lem-cm-determinant-derivative-along-a-matrix-curve
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-ftc-second-part
  - thm-heine-cantor-metric
  - thm-multidimensional-integral-properties
  - lem-compactness-of-a-subspace-is-ambient
  - thm-heine-borel-rn
dependency_roles:
  lem-cm-determinant-derivative-along-a-matrix-curve: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  lem-compactness-of-a-subspace-is-ambient: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: '§2, Lemma 2.2, the variation of the weighted $e^{-2\phi}R$ term, used in §6.1, Theorem 6.2. The present item proves the corresponding formula for arbitrary fixed smooth $f$.'
    - title: "David Tong, General Relativity, University of Cambridge Part III lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§4.1.1, printed pp. 141–145, PDF pp. 148–152; inverse-metric, Ricci, density, and compact-support variation formulas."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $n\ge2$, let $U\subseteq\mathbb R^n$ be open, and let $g(s)=(g_{MN}(s,x))$, for $s$ in an open interval about $0$, be a smooth family of Lorentzian metrics of signature $(-+\cdots+)$ on $U$. Assume $g(0)=g$, and that $g(s)=g$ outside one compact set $K\subset U$ for every $s$. Let $f\in C^\infty(U,\mathbb R)$ be independent of $s$, put $q^{MN}:=\partial_sg(s)^{MN}|_{s=0}$, and use the Levi-Civita Christoffel formula and curvature convention

$$
R^P{}_{QMN}=\partial_M\Gamma^P{}_{NQ}-\partial_N\Gamma^P{}_{MQ}+\Gamma^P{}_{MR}\Gamma^R{}_{NQ}-\Gamma^P{}_{NR}\Gamma^R{}_{MQ},\quad R_{QN}=R^P{}_{QPN},\quad R=g^{QN}R_{QN}.
$$

Write $w=\sqrt{|\det(g_{MN})|}$, $\nabla$ for the Levi-Civita connection, and $\Box f=g^{MN}\nabla_M\nabla_Nf$. The inverse-metric variation changes the density by $\dot w=-\tfrac12w g_{MN}q^{MN}$. The chart action integral over $U$ of the difference of the two densities is differentiable at $s=0$, and its first variation is

$$
\left.\frac{d}{ds}\right|_{0}\int_U\bigl(w(s)fR(s)-w fR\bigr)\,d^nx=\int_U w\left[f\left(R_{MN}-\tfrac12g_{MN}R\right)+g_{MN}\Box f-\nabla_M\nabla_Nf\right]q^{MN}\,d^nx.
$$

All integrands in this difference and its derivative have compact support in $K$. Equivalently, for compactly supported inverse-metric variation $q$, the bulk coefficient of $q^{MN}$ in the weighted scalar-curvature action is the tensor displayed above. No field equations or physical assumptions are used.

For any smooth compactly supported vector-density components $J^M$ on $U$, the same chart integral convention gives $\int_U\partial_MJ^M\,d^nx=0$.

## Facts & Assumptions

**Given:** The smooth Lorentzian metric family $g(s)$, compact support $K$, fixed smooth scalar $f$, and the chart curvature and integral conventions of the Statement.

**Connection conventions:** Indices range from $1$ to $n$, repeated upper/lower indices are summed, and $(g^{MN})$ is the inverse of $(g_{MN})$. The Levi-Civita Christoffel formula means $\Gamma^P{}_{MN}:=\tfrac12g^{PQ}(\partial_Mg_{NQ}+\partial_Ng_{MQ}-\partial_Qg_{MN})$, applied to each $g(s)$. For a scalar $a$, vector $X$, and covector $\alpha$, define $\nabla_Ma:=\partial_Ma$, $\nabla_MX^P:=\partial_MX^P+\Gamma^P{}_{MQ}X^Q$, and $\nabla_M\alpha_N:=\partial_M\alpha_N-\Gamma^Q{}_{MN}\alpha_Q$. Extend to tensors by the product rule and contraction, and set $\nabla^P:=g^{PM}\nabla_M$. In particular, $\nabla_M\nabla_Nf=\partial_M\partial_Nf-\Gamma^P{}_{MN}\partial_Pf$.

[F1] For a differentiable invertible matrix curve $A(s)$, $(\det A)'=\det A\,\operatorname{tr}(A^{-1}A')$ ([[lem-cm-determinant-derivative-along-a-matrix-curve]]).

[F2] Every continuous real function on a closed nondegenerate rectangle in $\mathbb R^m$, $m\ge1$, is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

[F3] If $f$ is Riemann integrable on a product of two nondegenerate closed rectangles, then its iterated section integrals in either coordinate block equal the multiple integral whenever the sections are integrable ([[thm-riemann-fubini-on-product-rectangles]]).

[F4] If $G'=u$ on $[a,b]$ and $u$ is integrable, then $\int_a^b u=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F5] A continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[F6] The Riemann integral on a rectangle is linear and order preserving, and $|\int_Q u|\le\int_Q|u|$ ([[thm-multidimensional-integral-properties]]).

[F7] If $K$ is compact in the subspace $U\subseteq\mathbb R^n$, every ambient open cover of $K$ in $\mathbb R^n$ has a finite subcover; compact subsets of Euclidean space are bounded, and closed coordinate boxes are compact ([[lem-compactness-of-a-subspace-is-ambient]], [[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct; differentiate the inverse metric, determinant, connection, and curvature, then integrate compactly supported coordinate divergences by Fubini and the fundamental theorem of calculus.

1.1 Put $h_{MN}:=\partial_sg(s)_{MN}|_0$. Differentiating $g(s)^{MA}g(s)_{AN}=\delta^M{}_N$ gives $q^{MA}g_{AN}+g^{MA}h_{AN}=0$, hence $h_{MN}=-g_{MA}g_{NB}q^{AB}$. The determinant formula [F1] and $\det(g)<0$ give $\dot w=\tfrac12w g^{MN}h_{MN}=-\tfrac12w g_{MN}q^{MN}$; the first equality differentiates $w=(-\det g)^{1/2}$, and the second contracts the inverse-variation identity. [given, F1, algebra]

2.1 The explicit Christoffel formula gives $\Gamma^P{}_{MN}=\Gamma^P{}_{NM}$ and $\Gamma^Q{}_{MN}g_{QP}+\Gamma^Q{}_{MP}g_{NQ}=\partial_Mg_{NP}$, so $\nabla g=0$. Put $C^P{}_{MN}:=\partial_s\Gamma(s)^P{}_{MN}|_0$. Differentiating metric compatibility gives $\nabla_Mh_{NQ}=C^R{}_{MN}g_{RQ}+C^R{}_{MQ}g_{NR}$. Adding this identity with $M,N$ interchanged and subtracting its version with derivative index $Q$, the symmetry $C^P{}_{MN}=C^P{}_{NM}$ yields $C^P{}_{MN}=\tfrac12g^{PQ}(\nabla_Mh_{NQ}+\nabla_Nh_{MQ}-\nabla_Qh_{MN})$. This is $\delta\Gamma$; its coordinate change law is tensorial because the inhomogeneous connection-transformation term is independent of $s$. Directly differentiating the coordinate curvature formula gives $\partial_P\delta\Gamma^P{}_{NM}-\partial_N\delta\Gamma^P{}_{PM}$ plus the four variations of its quadratic terms. Expanding $\nabla_P\delta\Gamma^P{}_{NM}-\nabla_N\delta\Gamma^P{}_{PM}$ gives the same four terms; the remaining terms cancel as $-\Gamma^R{}_{PN}\delta\Gamma^P{}_{RM}+\Gamma^R{}_{NP}\delta\Gamma^P{}_{RM}=0$ by symmetry of the lower connection indices. Thus $\delta R_{MN}=\nabla_P\delta\Gamma^P{}_{NM}-\nabla_N\delta\Gamma^P{}_{PM}$. With $V^P:=g^{MN}\delta\Gamma^P{}_{MN}-g^{PM}\delta\Gamma^N{}_{NM}$, differentiating $R=g^{MN}R_{MN}$ yields $\delta R=R_{MN}q^{MN}+\nabla_PV^P$. [given, step 1.1, algebra]

3.1 Substitute $h_{MN}=-g_{MA}g_{NB}q^{AB}$ from step 1.1 into the connection variation from step 2.1 and contract its indices. Writing $q:=g_{MN}q^{MN}$, direct contraction gives $g^{MN}\delta\Gamma^P{}_{MN}=-\nabla_Mq^{MP}+\tfrac12\nabla^Pq$ and $g^{PM}\delta\Gamma^N{}_{NM}=-\tfrac12\nabla^Pq$, hence $V^P=-\nabla_Mq^{MP}+\nabla^Pq$. [step 1.1, step 2.1, algebra]

3.2 By steps 1.1–2.1 and the product rule, $\delta(wfR)=wf(R_{MN}-\tfrac12g_{MN}R)q^{MN}+wf\nabla_PV^P$. This is the pointwise variation of the density before integration by parts. [step 1.1, step 2.1, algebra]

3.3 In the explicit Christoffel formula, symmetry of $g^{MQ}$ cancels the $\partial_Mg_{PQ}$ and $-\partial_Qg_{MP}$ terms after summation, giving $\Gamma^M{}_{MP}=\tfrac12g^{MQ}\partial_Pg_{MQ}$. Apply [F1] along the $x^P$ coordinate line and differentiate $w=\sqrt{-\det g}$ to obtain $w^{-1}\partial_Pw=\tfrac12g^{MQ}\partial_Pg_{MQ}$. Thus $w\nabla_PV^P=w\partial_PV^P+w\Gamma^P{}_{PQ}V^Q=\partial_P(wV^P)$ for the vector $V$ defined in step 2.1. [given, step 2.1, F1, algebra]

4.1 Since $K$ is compact in the subspace $U\subseteq\mathbb R^n$, any ambient open cover of $K$ restricts to an open cover in $U$ and has a finite subcover; thus $K$ is compact as a subset of $\mathbb R^n$ by [F7]. Heine--Borel [F7] makes $K$ closed and bounded. If $K\ne\varnothing$, choose $p\in\mathbb R^n$ and $\rho>0$ with $K\subset B(p,\rho)$, and set $Q:=\prod_{j=1}^{n}[p_j-(\rho+1),p_j+(\rho+1)]$; then $K\subset\operatorname{int}Q$. If $K=\varnothing$, take any nondegenerate closed coordinate box $Q$. In either case [F7] makes $Q$ compact. The family of all balls $B(p,r)$ with $p\in K$ and $\overline B(p,2r)\subset U$ covers $K$; compactness gives a finite subcover, whose union has closure in $U$. The field $V$ has compact support because $q$ and its first derivatives do, by step 3.1. Extend $wfV^P$ by zero to $Q$; it vanishes outside $K$ and near $\partial U$, so the extension is continuously differentiable. By the chart-integral convention, its integral over $Q$ is the chart integral over $U$. Each coordinate section is continuously differentiable and compactly supported, so [F2] makes it integrable; [F3] reduces its integral to iterated one-dimensional integrals, and [F4] makes each coordinate integral of $\partial_P(wfV^P)$ zero at the endpoints. The identical argument proves the Statement's divergence-integral identity for any compactly supported smooth vector-density $J^P$. Using step 3.3 and the product rule for $f\partial_P(wV^P)$ gives $\int_Uwf\nabla_PV^P\,d^nx=-\int_Uw(\nabla_Pf)V^P\,d^nx$. [step 3.1, step 3.3, F2, F3, F4, F7, algebra]

5.1 Substitute $V^P=-\nabla_Mq^{MP}+\nabla^Pq$ from step 3.1 into the integration-by-parts identity in step 4.1. Integrating its two terms by parts by the same compact-support argument gives $-\int_Uw(\nabla_Pf)V^P\,d^nx=\int_Uw[-(\nabla_M\nabla_Nf)q^{MN}+g_{MN}(\Box f)q^{MN}]d^nx$; the Hessian is symmetric because $f$ is a scalar and the connection is torsion-free. [step 3.1, step 4.1, F2, F3, F4, algebra]

6.1 Let $Q$ be the closed box from step 4.1 and choose a nondegenerate closed parameter interval $J$ about $0$ contained in the open parameter domain of $g(s)$. On $J\times Q$, define $a(s,x)=w(s)fR(s)-wfR$ by its formula for $x\in U$ and by zero for $x\notin U$. The density difference and its $s$-derivative are supported in $K\subset U$ and vanish near $\partial U$ by step 4.1, so both extend smoothly by zero. By the chart-integral convention, the action difference over $U$ equals $\int_Qa(s,x)\,d^nx$. The product $J\times Q$ is a closed coordinate box and is compact by [F7]. Hence $\partial_sa$ is uniformly continuous there by [F5]. For each fixed $x$, $t\mapsto\partial_ta(t,x)$ is continuous, hence integrable on every closed subinterval of $J$ by [F2]. Since $a(0,x)=0$, for $s>0$ the fundamental theorem [F4] on $[0,s]$ gives $a(s,x)/s=s^{-1}\int_0^s\partial_ta(t,x)\,dt$; for $s<0$, [F4] on $[s,0]$ gives $a(s,x)/s=|s|^{-1}\int_s^0\partial_ta(t,x)\,dt$. Thus in either case the quotient is an average of $\partial_ta(t,x)$ over the segment joining $0$ to $s$. Uniform continuity implies that for every $\varepsilon>0$, all sufficiently small $|s|$ satisfy $\sup_{x\in Q}|a(s,x)/s-\partial_sa(0,x)|<\varepsilon$. By [F6], the absolute difference of the rectangle integrals is at most $\varepsilon$ times its volume. Thus the difference quotients of the action integrals converge to the integral of $\partial_sa(0,\cdot)$. Combining that derivative with steps 3.2 and 5.1 proves the stated differentiability and first-variation formula. [given, step 3.2, step 4.1, step 5.1, F2, F4, F5, F6, F7, algebra] ∎
