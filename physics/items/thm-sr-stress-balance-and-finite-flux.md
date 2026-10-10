---
id: thm-sr-stress-balance-and-finite-flux
kind: theorem
title: "Finite-box stress balance and the flux form of conservation"
status: draft
origin: pipeline
domain: mathematics
deps: [def-sr-stress-energy-tensor-and-force-density, thm-riemann-fubini-on-product-rectangles, cor-repeated-riemann-integrals-on-rectangles, thm-ftc-second-part, thm-multidimensional-integral-properties, thm-continuous-on-a-rectangle-is-riemann-integrable, def-multidimensional-darboux-integral, thm-extreme-value-metric, def-ck-tensor-field-on-minkowski-space, def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart]
dependency_roles:
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  cor-repeated-riemann-integrals-on-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
---

## Statement

Let $x$ be an inertial chart of the affine Minkowski model with coordinates $(x^0,x^1,x^2,x^3)$, let $B:=\prod_{a=0}^{3}[c_a,d_a]$ with $c_a<d_a$ be a closed axis-parallel box, and let $T$ be a $C^1$ symmetric type-$(2,0)$ tensor field on an open neighbourhood of $B$; put $f^b:=\partial_aT^{ab}$ (continuous on $B$) as in [[def-sr-stress-energy-tensor-and-force-density]]. (a) (Box identity.) For each $b$, with $F_a^+:=\{x\in B:x^a=d_a\}$, $F_a^-:=\{x\in B:x^a=c_a\}$ and each face integral the Riemann integral over the remaining three coordinates, $$\int_B f^b\,d^4x=\sum_{a=0}^{3}\Big(\int_{F_a^+}T^{ab}\,d^3x-\int_{F_a^-}T^{ab}\,d^3x\Big).$$ (b) (Slice balance.) Write $K:=\prod_{i=1}^{3}[c_i,d_i]$ and, for $s\in[c_0,d_0]$, $Q^b(s):=\int_K T^{0b}(s,x)\,d^3x$; this is finite and continuous in $s$. For $c_0\le s_1<s_2\le d_0$, $$Q^b(s_2)-Q^b(s_1)=\int_{[s_1,s_2]\times K} f^b\,d^4x-\sum_{i=1}^{3}\Big(\int_{[s_1,s_2]\times K_i^+}T^{ib}\,d^3x-\int_{[s_1,s_2]\times K_i^-}T^{ib}\,d^3x\Big),$$ where $K_i^\pm$ are the two faces $x^i=d_i$, $x^i=c_i$ of $K$. (c) (Finite-flux conservation.) If $f=0$ on $[s_1,s_2]\times K$ and $T^{ib}=0$ on the side faces $[s_1,s_2]\times K_i^\pm$ for $i=1,2,3$, then $Q^b(s_1)=Q^b(s_2)$ for every $b$. The theorem concerns finite axis-parallel boxes in one inertial chart and is proved by the fundamental theorem of calculus. It does not assert a flux identity for arbitrary regions or hypersurfaces, does not assert that $Q^b$ transforms as a four-vector under a change of inertial chart, and asserts no conservation without the stated side-flux hypothesis; no noncompact or limiting statement is made. No choice principle is used.

## Facts & Assumptions

**Given:** The affine Minkowski model with an inertial chart $x$ ([[def-sr-affine-minkowski-model]], [[def-inertial-frame-and-inertial-chart]]), a closed nondegenerate axis-parallel box $B=\prod_{a=0}^3[c_a,d_a]$, and a $C^1$ symmetric type-$(2,0)$ field $T$ on an open neighbourhood $U\supseteq B$ ([[def-ck-tensor-field-on-minkowski-space]]); the components $T^{ab}$ are $C^1$ functions on $U$ and $f^b=\partial_aT^{ab}$ with $\partial_a$ the coordinate partial derivatives. For a face $F_a^\pm$ of a box, its face integral is the Riemann integral of the restricted continuous function over the product of the remaining three coordinate intervals.

[F1] Fundamental theorem of calculus, second part: if $G:[u,v]\to\mathbb R$ is differentiable at every point of $[u,v]$ as a function on that interval and $G'$ is integrable on $[u,v]$, then $\int_u^vG'=G(v)-G(u)$. ([[thm-ftc-second-part]])

[F2] Fubini on product rectangles: if $A$, $B$ are nondegenerate closed rectangles and $f$ is Riemann integrable on $A\times B$, then the iterated integral in an order in which every section is integrable equals the multiple integral. ([[thm-riemann-fubini-on-product-rectangles]])

[F3] Linearity, monotonicity, the absolute-value estimate $|\int_Qf|\le\int_Q|f|$ and additivity under coordinate-slice cuts of the multidimensional Riemann integral. ([[thm-multidimensional-integral-properties]])

[F4] Every continuous function on a closed nondegenerate rectangle is Riemann integrable. ([[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[def-multidimensional-darboux-integral]])

[F5] If $n\ge1$ and $f:Q\to\mathbb R$ is continuous on a nondegenerate box $Q=\prod_{j<n}[a_j,b_j]$, then for every permutation of the coordinates the corresponding repeated Riemann integral exists and equals $\int_Qf$. ([[cor-repeated-riemann-integrals-on-rectangles]])

[F6] A continuous real function on a nonempty compact metric space is bounded above and below and attains a maximum and a minimum. ([[thm-extreme-value-metric]])

## Proof

**Proof technique:** direct.

1.1 Claim (a). Fix $b$ and $a$. For each fixed tuple $y$ of the remaining three coordinates, the function $t\mapsto T^{ab}(t,y)$ is $C^1$ on $[c_a,d_a]$ as a function on that interval, with derivative $\partial_aT^{ab}(t,y)$, which is continuous and hence integrable by [F4]; [F1] gives $\int_{c_a}^{d_a}\partial_aT^{ab}(t,y)\,dt=T^{ab}(d_a,y)-T^{ab}(c_a,y)$. The function $(t,y)\mapsto\partial_aT^{ab}(t,y)$ is continuous on the box $B$, so its repeated integral in this order exists and equals $\int_B\partial_aT^{ab}\,d^4x$ by [F5] and [F2]; substituting the pointwise identity above gives $\int_B\partial_aT^{ab}\,d^4x=\int_{F_a^+}T^{ab}\,d^3x-\int_{F_a^-}T^{ab}\,d^3x$. The integrands are continuous on the box $B$, hence integrable by [F4]; summing the identities over $a=0,1,2,3$ with the linearity part of [F3] yields the box identity (a). [given, F1, F2, F3, F4, F5]

1.2 Claim (b), finiteness and continuity of $Q^b$. For each $s\in[c_0,d_0]$ the function $x\mapsto T^{0b}(s,x)$ is continuous on the compact box $K$, hence bounded and integrable by [F4] and [F6], so $Q^b(s)$ is a finite real number. For $s,r\in[c_0,d_0]$ and each $x\in K$, [F1] applied to $t\mapsto T^{0b}(t,x)$ gives $T^{0b}(s,x)-T^{0b}(r,x)=\int_r^s\partial_0T^{0b}(t,x)\,dt$; integrating over $K$ with [F2] and [F5] gives $Q^b(s)-Q^b(r)=\int_K\int_r^s\partial_0T^{0b}(t,x)\,dt\,dx$. By [F6] the continuous $|\partial_0T^{0b}|$ is bounded on the compact box $B$ by some $M_1<\infty$, so the absolute-value estimate [F3] and the constant integral give $|Q^b(s)-Q^b(r)|\le M_1\operatorname{vol}(K)|s-r|$, and $Q^b$ is (Lipschitz) continuous on $[c_0,d_0]$. [given, F1, F2, F3, F4, F5, F6]

2.1 Claim (b), slice-balance identity. The sub-box $[s_1,s_2]\times K$ is a closed nondegenerate axis-parallel box contained in $B$, and $T$ is $C^1$ on a neighbourhood of $B$, hence on a neighbourhood of the sub-box. Applying the box identity of step 1.1 to this sub-box, the two faces with $a=0$ give $\int_K T^{0b}(s_2,x)\,d^3x-\int_K T^{0b}(s_1,x)\,d^3x=Q^b(s_2)-Q^b(s_1)$, and for $i=1,2,3$ the faces $F_i^\pm$ are the side faces $[s_1,s_2]\times K_i^\pm$ with the displayed signs; with the sub-box's interior equal to $(s_1,s_2)\times\operatorname{int}K$, this is exactly the stated identity. [F3, step 1.1, given]

3.1 Claim (c). If $f=0$ on $[s_1,s_2]\times K$ then its integral there vanishes, and if $T^{ib}=0$ on the side faces $[s_1,s_2]\times K_i^\pm$ then the three side-flux differences vanish; step 2.1 then gives $Q^b(s_2)-Q^b(s_1)=0$, so $Q^b(s_1)=Q^b(s_2)$, for every $b$. [F3, step 2.1]

4.1 Claims (a), (b) and (c) are proved in steps 1.1, 1.2 and 2.1, and 3.1. The argument uses only the fundamental theorem of calculus, Fubini's theorem for continuous functions on boxes and the elementary integral estimates; it concerns one inertial chart and finite axis-parallel boxes, asserts nothing for arbitrary regions, hypersurfaces or noncompact slices, and asserts no conservation without the stated side-flux hypothesis. All choices are finite; no choice principle is used. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
