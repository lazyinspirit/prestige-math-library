---
id: pthm-sr-integrated-conservation-for-isolated-matter
kind: physics-theorem
title: "Integrated conservation of the isolated total slice four-momentum"
status: draft
origin: pipeline
domain: physics
physical_scope: "Flat affine Minkowski spacetime in one inertial chart; the total stress-energy tensor of a system subject to the isolation premise on a finite box and length-coordinate interval, with vanishing side flux. The slice integrals are chart-component integrals of a finite box; the theorem asserts no transformation law for them, no noncompact, asymptotic or gravitational-energy statement, and no measurement; the reading of the integrals as four-momentum is the model's interpretation."
deps: [post-sr-matter-isolation-and-total-stress-energy, pthm-sr-local-stress-energy-conservation, thm-sr-stress-balance-and-finite-flux, def-sr-stress-energy-tensor-and-force-density, def-sr-total-four-momentum-and-invariant-mass, def-inertial-frame-and-inertial-chart, def-causal-classification-of-lorentz-vectors, def-rational-power, def-sr-affine-minkowski-model]
dependency_roles:
  post-sr-matter-isolation-and-total-stress-energy: physical-assumption
  pthm-sr-local-stress-energy-conservation: physical-result
  thm-sr-stress-balance-and-finite-flux: mathematical-premise
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-rational-power: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
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

Fix $c>0$ and an inertial chart $x$ with $x^0=ct$. Let $\bar K=\prod_{i=1}^3[a_i,b_i]$, $a_i<b_i$, be a nondegenerate closed spatial rectangle and let $s_1<s_2$ be real length-coordinate values, and let $T$ be the total stress-energy tensor of a system in the situation of [[post-sr-matter-isolation-and-total-stress-energy]]: $T$ is $C^1$ and symmetric on a neighbourhood of $[s_1,s_2]\times\bar K$, satisfies $\partial_aT^{ab}=0$ there (for the adopted models this is the conclusion of [[pthm-sr-local-stress-energy-conservation]]; for any other system it is an explicit premise), and satisfies the zero side-flux condition $T^{ib}=0$ on the spatial faces for $i=1,2,3$. Put $Q^b(s):=\int_{\bar K}T^{0b}(s,x)\,d^3x$ and $P^b:=Q^b/c$. Then: (a) $Q^b(s)$ is finite for every $s\in[s_1,s_2]$ and $Q^b(s_1)=Q^b(s_2)$; (b) consequently $P^b$ is independent of $s\in[s_1,s_2]$; if $P$ is future timelike, its invariant mass $\sqrt{-\eta(P,P)}/c$ is independent of $s$ as well; (c) if the side flux does not vanish, the exact balance is the finite-flux identity of [[thm-sr-stress-balance-and-finite-flux]], and no conservation is asserted; (d) no transformation law for $P^b$ under a change of inertial chart or slicing is asserted: without an admissible-region flux argument, $P^b$ is a chart-component integral and is not claimed to be a four-vector; no noncompact, asymptotic or gravitational-energy statement is made, and the reading of $P^b$ as the system's four-momentum is the model's interpretation of the integral, not a measurement.

## Facts & Assumptions

**Given:** The affine Minkowski model with inertial chart $x$ ([[def-sr-affine-minkowski-model]], [[def-inertial-frame-and-inertial-chart]]), $c>0$, the nondegenerate closed spatial rectangle $\bar K$ of the Statement, length-coordinate values $s_1<s_2$, and the total tensor $T$ of the isolation premise [[post-sr-matter-isolation-and-total-stress-energy]] with its stated hypotheses; $Q^b(s)=\int_{\bar K}T^{0b}(s,x)\,d^3x$ and $P^b=Q^b/c$; the conservation of $T$ is either the conclusion of [[pthm-sr-local-stress-energy-conservation]] for the adopted models or an explicit premise for any other system.

[F1] Finite-flux theorem: for a $C^1$ symmetric field on a neighbourhood of the box, $Q^b(s)=\int_{\bar K}T^{0b}(s,x)\,d^3x$ is finite and continuous in $s$, and for $c_0\le s_1<s_2\le d_0$ the slice balance $$Q^b(s_2)-Q^b(s_1)=\int_{[s_1,s_2]\times\bar K}\partial_aT^{ab}\,d^4x-\sum_{i=1}^{3}\Big(\int_{[s_1,s_2]\times\bar K_i^+}T^{ib}\,d^3x-\int_{[s_1,s_2]\times\bar K_i^-}T^{ib}\,d^3x\Big)$$ holds; if the force density vanishes on $[s_1,s_2]\times\bar K$ and $T^{ib}=0$ on the side faces, then $Q^b(s_1)=Q^b(s_2)$. ([[thm-sr-stress-balance-and-finite-flux]]\,(b),(c), [[def-sr-stress-energy-tensor-and-force-density]])

[F2] Total four-momentum and invariant mass: for a vector $P=\sum_bP^be_b$ built from a chase of chart components $P^b$, if $P$ is future timelike then its invariant mass is $\sqrt{-\eta(P,P)}/c>0$, and if $P$ is future null the convention assigns mass $0$. ([[def-sr-total-four-momentum-and-invariant-mass]], [[def-causal-classification-of-lorentz-vectors]])


## Proof

**Proof technique:** direct.

1.1 Clause (a). By the isolation premise, $T$ is $C^1$ and symmetric on a neighbourhood of $[s_1,s_2]\times\bar K$; [F1] applied to this box gives that $Q^b(s)$ is finite and continuous for every $s\in[s_1,s_2]$, and since $\partial_aT^{ab}=0$ on the box and the zero side-flux condition holds on its spatial faces, the balance identity of [F1] reduces to $Q^b(s_2)-Q^b(s_1)=0$, i.e. $Q^b(s_1)=Q^b(s_2)$. [F1, given]

1.2 Clauses (c) and (d). If the side flux does not vanish, the exact statement available is the full balance identity of [F1] with its side-flux terms; the derivation above never establishes the vanishing of the differences, so no conservation of $Q^b$ is asserted in that case. The argument is carried out entirely in one inertial chart: $Q^b$ is defined by the chart components $T^{0b}$ of $T$ and no transformation law for $Q^b$ or $P^b$ under a change of chart or of slicing is used or claimed; the identification of $P^b$ with the system's four-momentum is the model's reading of the integral, not a measurement, and no noncompact or asymptotic limit is taken. [F1, given]

2.1 Clause (b). Evaluating clause (a) with $(s_1,s_2)$ replaced by any pair $r<s$ in $[s_1,s_2]$ gives $Q^b(s)=Q^b(r)$ for all $r,s$ in the interval, so $Q^b$ is constant there and $P^b=Q^b/c$ is constant as well. Form the vector $P:=\sum_bP^be_b$ in the frame of the chart; since the components are constant in $s$, $\eta(P,P)$ is a constant real number, so if $P$ is future timelike its invariant mass $\sqrt{-\eta(P,P)}/c$ is independent of $s$, and if it is future null the assigned mass $0$ is likewise independent. [F2, step 1.1]

3.1 Clauses (a) and (b) are steps 1.1 and 2.1 and clauses (c) and (d) are step 1.2. The theorem is a finite conditional deduction on one box in one inertial chart; it asserts no four-vector transformation law, no noncompact or gravitational-energy statement and no measurement; for the adopted models the conservation hypothesis is supplied by [[pthm-sr-local-stress-energy-conservation]], and for any other system it is an explicit premise of this theorem, separate from the isolation postulate. All choices are finite; no choice principle is used. [step 1.1, step 2.1, step 1.2] ∎
