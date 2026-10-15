---
id: prop-emg-test-field-residual-order
kind: proposition
title: "Exact small-field coupled residual order"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - def-emg-geometric-scaling
  - def-emg-lorentzian-forms
  - lem-emg-lorentz-hodge-calculus
  - thm-emg-field-normalization-equivalence
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-geometric-scaling: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-emg-field-normalization-equivalence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §4, author-hosted full-text HTML, Maxwell equations and quadratic electromagnetic stress"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, §§4.3–4.5 and 7.2, Maxwell equations and electromagnetic stress tensor"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $U$ be a smooth Lorentzian four-dimensional chart domain with metric $g$ as in [[def-emg-lorentzian-forms]], and let $\Lambda\in\mathbb R$ be constant. Write $\Omega^k(U)$ for the smooth real $k$-forms on $U$. Here $d:\Omega^k(U)\to\Omega^{k+1}(U)$, $0\le k\le3$, is the exterior derivative with coordinate formula $(d\beta)_{a_0\ldots a_k}=(k+1)\partial_{[a_0}\beta_{a_1\ldots a_k]}$, and $\star_g:\Omega^2(U)\to\Omega^2(U)$ is the Lorentzian Hodge map characterized by $\alpha\wedge\star_g\beta=\frac12\alpha_{ab}\beta^{ab}\,\operatorname{vol}_g$ for $\alpha,\beta\in\Omega^2(U)$, as in [[lem-emg-lorentz-hodge-calculus]]. Both operators are real-linear. Suppose $G_{ab}(g)+\Lambda g_{ab}=0$. Let $F_1\in\Omega^2(U)$ satisfy $dF_1=0$ and $d(\star_gF_1)=0$. For any real dimensionless $\varepsilon$, put $F_\varepsilon:=\varepsilon F_1$ and define

$$T^{(1)}_{ab}:=\mu_0^{-1}\mathcal Q_{ab}(g,F_1),\qquad \mathscr R_{ab}(g,F;\Lambda):=G_{ab}(g)+\Lambda g_{ab}-\frac{\kappa}{\mu_0}\mathcal Q_{ab}(g,F),$$

using $\kappa,\mu_0,\mathcal Q$ of [[def-emg-geometric-scaling]] and [[thm-emg-field-normalization-equivalence]]. Then $F_\varepsilon$ remains an exact source-free Maxwell field on the fixed metric and

$$\mathscr R_{ab}(g,F_\varepsilon;\Lambda)=-\kappa\varepsilon^2T^{(1)}_{ab}.$$

For a smooth covariant two-tensor $S$ and compact $K\subset U$, define the chart component norm of its restriction by $\|S\|_{K}:=\max_{0\le a,b\le3}\sup_{p\in K}|S_{ab}(p)|$ when $K\ne\varnothing$. In this estimate and its applications, use $\sup_{p\in\varnothing}f(p):=0$ for nonnegative component functions $f$; equivalently, the empty restriction has $\|S\|_{\varnothing}:=0$. It is finite for smooth $S$ and satisfies

$$\|\mathscr R(g,F_\varepsilon;\Lambda)\|_K=\kappa\varepsilon^2\|T^{(1)}\|_K.$$

If $\varepsilon\ne0$ and $T^{(1)}$ is not identically zero on $K$, the fixed pair $(g,F_\varepsilon)$ is not an exact coupled Einstein–Maxwell solution on $K$. This is a residual estimate only; it gives no nearby metric, solution-distance bound, point-source solution or backreaction limit.

## Facts & Assumptions

**Given:** The smooth Lorentzian geometry of [[def-emg-lorentzian-forms]], positive constants and quadratic tensor of [[def-emg-geometric-scaling]], a compact chart subset $K$, and the stated vacuum and source-free equations. The inherited geometric setup carries $\mathrm{AC}_\omega$ as in [A1].

[F1] The tensor $\mathcal Q_{ab}(g,F)$ is quadratic in the two-form and the Einstein normalization uses the coefficient $\kappa/\mu_0$. ([[thm-emg-field-normalization-equivalence]])

[F2] The geometric setup admits smooth two-forms and their Hodge operator; the specified $F_1$ is smooth on $U$. ([[def-emg-lorentzian-forms]])

[F3] The exterior derivative on smooth forms is real-linear, and the Lorentzian Hodge map is a real-linear bundle map characterized by $\alpha\wedge\star_g\beta=\langle\alpha,\beta\rangle_g\operatorname{vol}_g$, with $\langle\alpha,\beta\rangle_g=\frac12\alpha_{ab}\beta^{ab}$ on two-forms. ([[lem-emg-lorentz-hodge-calculus]])

[A1] The inherited choice assumption is Countable Choice $\mathrm{AC}_\omega$, not full Choice. ([[def-countable-choice]])

## Proof

1.1 Exterior differentiation and the Hodge map are real-linear by [F3], so $dF_\varepsilon=\varepsilon dF_1=0$ and $d(\star_gF_\varepsilon)=\varepsilon d(\star_gF_1)=0$. Thus the source-free Maxwell equations remain exactly satisfied on the unchanged $g$. [given, F2, F3, A1, algebra]

1.2 Each term of $\mathcal Q$ is quadratic in $F$, so $\mathcal Q(g,F_\varepsilon)=\varepsilon^2\mathcal Q(g,F_1)$ and the associated lower tensor is $\varepsilon^2T^{(1)}$ by the definition in the Statement. [given, F1, algebra]

2.1 Substituting the assumed vacuum equation $G(g)+\Lambda g=0$ and step 1.2 into the residual definition gives $\mathscr R(g,F_\varepsilon;\Lambda)=-\kappa\varepsilon^2T^{(1)}$ exactly. [given, F1, step 1.2, algebra]

3.1 If $K=\varnothing$, the stated convention makes both norms in the claimed equality zero. Suppose $K\ne\varnothing$. Each component $f=S_{ab}|_K$ is continuous; the relative open sets $f^{-1}((-n,n))$, for positive integers $n$, cover $K$. Compactness gives a finite subcover, and the largest of its indices bounds $|f|$ on $K$. Thus every component supremum, and hence their finite maximum, is finite. The norm is homogeneous, so step 2.1 and $\kappa\varepsilon^2\ge0$ give $\|\mathscr R\|_K=\kappa\varepsilon^2\|T^{(1)}\|_K$. If $\varepsilon\ne0$ and $T^{(1)}$ is not identically zero on $K$, then $K$ is nonempty and some component of $T^{(1)}$ is nonzero at a point of $K$; step 2.1 makes the residual nonzero there, so the fixed pair fails the coupled equation on $K$. No estimate comparing it with a different metric follows from this identity. [given, step 2.1, algebra] ∎
