---
id: lem-sr-compact-variation-and-fundamental-lemma
kind: lemma
title: "Compact-support variation: the fundamental lemma, integration by parts and differentiation under the integral sign"
status: draft
origin: pipeline
domain: mathematics
deps: [lem-euclidean-bump-for-a-compact-set-inside-an-open-set, thm-multidimensional-integral-properties, thm-continuous-on-a-rectangle-is-riemann-integrable, def-multidimensional-darboux-integral, thm-jordan-content-and-indicator-integrability, thm-riemann-fubini-on-product-rectangles, thm-ftc-second-part, thm-algebra-of-derivatives, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-heine-cantor-metric, def-support-and-compactly-supported-riemann-integral-in-rn, lem-compactly-supported-riemann-integral-is-well-defined, def-directional-and-partial-derivatives, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, lem-algebra-of-continuous-real-maps-on-a-space, thm-heine-borel-rn]
dependency_roles:
  thm-heine-borel-rn: mathematical-premise
  lem-euclidean-bump-for-a-compact-set-inside-an-open-set: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  thm-jordan-content-and-indicator-integrability: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  def-support-and-compactly-supported-riemann-integral-in-rn: mathematical-premise
  lem-compactly-supported-riemann-integral-is-well-defined: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  lem-algebra-of-continuous-real-maps-on-a-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Work in an inertial chart $x$ of the affine Minkowski model, identifying a nonempty open $\Omega\subseteq A$ with its image in $\mathbb R^4$; all integrals are Riemann (Darboux) integrals. (a) If $g:\Omega\to\mathbb R$ is continuous and $\int_\Omega g\,\psi\,d^4x=0$ for every smooth compactly supported $\psi:\Omega\to\mathbb R$, then $g=0$ on $\Omega$. (b) If $f:\Omega\to\mathbb R$ is $C^1$ and compactly supported and $g:\Omega\to\mathbb R$ is $C^1$, then for each $a$, $\int_\Omega(\partial_af)g\,d^4x=-\int_\Omega f(\partial_ag)\,d^4x$, provided $g$ is $C^1$ on $\Omega$ and the products are extended by zero outside $\operatorname{supp}f$. (c) Let $s_0>0$. If $F:(-s_0,s_0)\times\Omega\to\mathbb R$ is continuous with continuous $\partial_sF$ and there is a compact $K\Subset\Omega$ with $F(s,z)=0$ for $z\notin K$ and all $s$, then $s\mapsto\int_\Omega F(s,z)\,d^4z$ is $C^1$ on $(-s_0,s_0)$ with derivative $\int_\Omega\partial_sF(s,z)\,d^4z$. The lemma is choice-free and is stated for the exact Riemann integration theory on bounded rectangles; no distribution theory, no $L^1_{\mathrm{loc}}$ hypothesis and no choice principle is used.

## Facts & Assumptions

**Given:** The affine Minkowski model $(A,V,\eta,C^+)$ with an inertial chart $x$ ([[def-sr-affine-minkowski-model]], [[def-inertial-frame-and-inertial-chart]]), a nonempty open $\Omega\subseteq A$ identified with its image $x(\Omega)\subseteq\mathbb R^4$, and coordinates $x^0,x^1,x^2,x^3$ whose partial derivatives $\partial_a$ are those of [[def-directional-and-partial-derivatives]]. For a continuous $h:\Omega\to\mathbb R$ vanishing outside a compact subset of $\Omega$, the symbol $\int_\Omega h\,d^4x$ denotes the compactly supported Riemann integral over $\mathbb R^4$ of the zero extension $\widetilde h$ ([[def-support-and-compactly-supported-riemann-integral-in-rn]]); a closed nondegenerate rectangle is called a box.

[F1] Compactness of the support and a bounding box: a compact set $K\subseteq\Omega$ is contained in the interior of some box, and every box in $\mathbb R^4$ with pairwise distinct side endpoints has positive volume. A finite union of boxes is compact and bounded. ([[def-support-and-compactly-supported-riemann-integral-in-rn]], [[lem-compactly-supported-riemann-integral-is-well-defined]])

[F2] If $\widetilde h$ is Riemann integrable on one box whose interior contains $\operatorname{supp}\widetilde h$, it is integrable on every such box and all the integrals agree. ([[lem-compactly-supported-riemann-integral-is-well-defined]])

[F3] The multidimensional integral is linear, monotone and satisfies $|\int_Qf|\le\int_Q|f|$; cutting a box along a coordinate hyperplane that meets its interior splits the integral additively. ([[thm-multidimensional-integral-properties]])

[F4] Every continuous function on a closed nondegenerate rectangle is Riemann integrable. ([[thm-continuous-on-a-rectangle-is-riemann-integrable]])

[F5] For a constant $c$ on a nondegenerate box $Q$, every lower and upper Darboux sum equals $c\operatorname{vol}(Q)$, so $\int_Qc=c\operatorname{vol}(Q)$; for a nondegenerate closed box $Q_1\subseteq Q$, the zero-extended indicator of $Q_1$ is integrable on $Q$ with integral equal to the content of $Q_1$, which is its volume. ([[def-multidimensional-darboux-integral]], [[thm-jordan-content-and-indicator-integrability]])

[F6] If $A\subseteq\mathbb R^p$, $B\subseteq\mathbb R^q$ are nondegenerate closed rectangles and $f:A\times B\to\mathbb R$ is Riemann integrable, then the iterated integral in an order in which every section is integrable equals $\int_{A\times B}f$. ([[thm-riemann-fubini-on-product-rectangles]])

[F7] If $G:[u,v]\to\mathbb R$ is differentiable at every point of $[u,v]$ as a function on that interval, then $\int_u^vG'=G(v)-G(u)$ whenever $G'$ is integrable on $[u,v]$. ([[thm-ftc-second-part]])

[F8] The one-variable sum, scalar multiple and product rules hold for coordinate derivatives: $\partial_a(fg)=(\partial_af)g+f(\partial_ag)$ for $C^1$ functions on $\Omega$. ([[thm-algebra-of-derivatives]])

[F9] For every compact $K$ inside an open $U\subseteq\mathbb R^4$ there is a smooth $\rho:\mathbb R^4\to[0,1]$ with $\rho=1$ on $K$ and $\operatorname{supp}\rho\subseteq U$. ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]])

[F10] If $g,h:[u,v]\times[w_1,w_2]\to\mathbb R$ are continuous and $x\mapsto g(x,t)$ is differentiable on $(u,v)$ with derivative $h(x,t)$ for every $t$, then $G(x)=\int_{w_1}^{w_2}g(x,t)\,dt$ has $G'(x)=\int_{w_1}^{w_2}h(x,t)\,dt$. ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]])

[F11] A continuous function on a compact metric space is uniformly continuous. ([[thm-heine-cantor-metric]])

[F12] Sums, scalar multiples and products of continuous real-valued maps on a topological space are continuous where defined; in particular the product $g\psi$ of a continuous $g:\Omega\to\mathbb R$ and a smooth real-valued $\psi$ on $\Omega$ is continuous, and the nonnegativity of a product of a nonnegative and a nonnegative function is pointwise. ([[lem-algebra-of-continuous-real-maps-on-a-space]])

[F13] Closed boxes in $\mathbb R^4$ are compact, and a subset is compact exactly when it is closed and bounded. ([[thm-heine-borel-rn]]\,(1),(2))

## Proof

**Proof technique:** direct.

1.1 Zero extensions. If a continuous $u:\Omega\to\mathbb R$ vanishes outside a compact $K\subseteq\Omega$, its zero extension is continuous on $\mathbb R^4$: it is continuous at points of $\Omega$, and every point outside $\Omega$ has a neighbourhood disjoint from the closed set $K$, on which the extension is zero. Its support lies in $K$; [F1], [F2] and [F4] therefore define its finite integral independently of a bounding rectangle. The same argument gives a $C^1$ zero extension when $u$ is $C^1$, with derivatives extended by zero; outside $K$ both $u$ and its derivatives vanish. For the parameter family in (c), zero extension of $F$ and $\partial_sF$ is jointly continuous on $(-s_0,s_0)\times\mathbb R^4$, and the extended parameter derivative is still $\partial_sF$, because the common support $K$ gives the same zero neighbourhoods. [given, F1, F2, F4, F13]

2.1 Fundamental lemma. Suppose $g(p)\ne0$ and set $\sigma=1$ if $g(p)>0$, $\sigma=-1$ otherwise. Continuity and openness give a nondegenerate closed box $Q\subseteq\Omega$ and $a>0$ with $\sigma g\ge a$ on $Q$. Choose a smaller nondegenerate closed box $Q_1\subseteq\operatorname{int}Q$. By [F9] and [F13] there is a smooth $\rho:\mathbb R^4\to[0,1]$, equal to $1$ on $Q_1$, whose support is a compact subset of $\operatorname{int}Q$; compactness follows because the support is closed and bounded. For $\psi=\sigma\rho|_\Omega$, the continuous product $g\psi$ is nonnegative, compactly supported, and at least $a$ on $Q_1$. On a bounding rectangle, [F3] and [F5] give $\int_\Omega g\psi\ge a\operatorname{vol}(Q_1)>0$, contrary to the test hypothesis. Thus $g=0$, proving (a). [given, F3, F5, F9, F12, F13, step 1.1]

2.2 Integration by parts. For (b), put $K=\operatorname{supp}f$. The function $fg$ is $C^1$ on $\Omega$, vanishes outside $K$, and has a $C^1$ zero extension $u$ by step 1.1. Its derivative $\partial_au$ is the zero extension of $(\partial_af)g+f\partial_ag$ by [F8]. Choose a nondegenerate bounding rectangle with $K$ in its interior. On each line in the $a$th coordinate, $u$ vanishes at both endpoints, so [F7] gives integral zero for $\partial_au$. By [F4] and [F6], integrating over the remaining coordinates gives $0=\int_\Omega(\partial_af)g+\int_\Omega f\partial_ag$. This is (b). [given, F1, F3, F4, F6, F7, F8, step 1.1]

2.3 Parameter differentiation. For (c), fix a closed interval $[u,v]\subseteq(-s_0,s_0)$ with $u<v$ and a nondegenerate rectangle $Q$ containing $K$ in its interior. Use the joint zero extensions from step 1.1 on $[u,v]\times Q$. Integrating in one coordinate produces a jointly continuous function of $s$ and the remaining coordinates: its difference at two parameter tuples is bounded by that coordinate's interval length times the uniform oscillation of $F$ on the compact product, which tends to zero by [F11]. Apply [F10] with $s$ as parameter to differentiate this one-coordinate integral. The resulting derivative, the integral of $\partial_sF$, is jointly continuous by the same bound and [F11]. Repeat this argument in each of the four coordinates. [F4] and [F6] identify the repeated integrals with the four-dimensional integrals; hence $G(s):=\int_\Omega F(s,z)\,d^4z$ is $C^1$ on $[u,v]$ and $G'(s)=\int_\Omega\partial_sF(s,z)\,d^4z$. [given, F2, F4, F6, F10, F11, F13, step 1.1]

3.1 Every parameter in $(-s_0,s_0)$ lies in the interior of such a closed interval, so step 2.3 proves (c) on the entire open interval. Steps 2.1 and 2.2 prove (a) and (b). All selections are finite, the bump supplier and [F13] are choice-free, and no distributional or local-integrability hypothesis is used. [F9, F13, step 2.1, step 2.2, step 2.3] ∎
