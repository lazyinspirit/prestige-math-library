---
id: thm-gts-a-infinity-identities-bounding-cochains-and-unobstructed-fukaya-objects
kind: theorem
title: FOOO filtered curved A-infinity identity theorem
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 11
deps:
- def-axiom-of-choice
- def-gts-lagrangian-branes-and-filtered-curved-a-infinity-fukaya-operations
- thm-gts-rational-collared-disk-virtual-correspondences
- lem-gts-rational-filtered-curved-transfer-to-singular-chains
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-lagrangian-branes-and-filtered-curved-a-infinity-fukaya-operations: mathematical-premise
  thm-gts-rational-collared-disk-virtual-correspondences: mathematical-premise
  lem-gts-rational-filtered-curved-transfer-to-singular-chains: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Fukaya, Oh, Ohta, and Ono, Lagrangian Floer Theory on Compact Toric Manifolds I, arXiv:0802.1703v3
    url: https://arxiv.org/pdf/0802.1703v3
    locator: §3, printed pp. 15–19, Definition 3.1, filtered curvature, geometric operations, and Theorem 3.8; the article identifies §3 as a quick summary and refers complete proofs to the trilogy
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the filtered A-infinity algebra associated in the source framework to a compact relatively spin Lagrangian $L$ in an arbitrary tame symplectic manifold, the completed bar coderivation $D$ is continuous and satisfies $D^2=0$. The source algebra is curved and includes $m_0$; the conclusion is not the uncurved assertion $m_0=0$.

## Facts & Assumptions

**Given:** Full AC and exactly the data and hypotheses of the Statement.

[F1] [[def-gts-lagrangian-branes-and-filtered-curved-a-infinity-fukaya-operations]] fixes the full continuous rational singular-chain module, cohomological regrading, energy completion and algebraic direct-sum structure bar. Its specified virtual procedure includes a rational chain comparison with the actual finite Morse/tree evaluation model.

[F2] [[thm-gts-rational-collared-disk-virtual-correspondences]] is the required geometric supplier. Its actual sewn-atlas construction supplies finite Morse operations, signed compactified boundary and evaluated unstable-cell comparison. These geometric inputs are used before the algebraic splitting; they are not inferred from a conditional transfer hypothesis.

[F3] [[lem-gts-rational-filtered-curved-transfer-to-singular-chains]] supplies rational splitting and curved transport from a genuine geometric A. Below the splitting is chosen to retain the actual evaluated unstable-cell inclusion, giving a strict extension with the original full singular differential. No arbitrary continuous simplex is asserted transverse.

[A1] Full AC permits the specified coherent geometric choices and rational splittings, including the acyclic quotient complex of all continuous chains. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct, using the actual sewn-atlas and external unstable-cell constructions of F2, then the explicit rational full-chain extension.

1.1 F2 constructs the actual finite rational Morse operations on A and their compact oriented one-dimensional boundary. The raw disk-bubble and zero-edge seams are sewn before perturbing their matched thickening; only genuine Morse breaks over discrete generators are prescribed boundary products. Their signed finite boundary gives every curved identity on A, including positive-energy zero-input components, with the suspended cohomological insertion sign. This geometric input is not deduced from the conditional transfer lemma. [F1, F2, A1, given, construct]

2.1 In the actual smooth passage compactification $U_p$ of the unstable cell, each boundary face is the product of compactified trajectories from p to q with $U_q$. Triangulate trajectory spaces in increasing index drop and $U_p$ in increasing index, prescribing ordered shuffle product triangulations on every face; these agree at corners because multi-factor monotone shuffles are associative. Under endpoint evaluation every positive-dimensional trajectory factor projects a shuffle simplex to a simplex with repeated consecutive vertices. It is therefore a literal singular degeneracy. Modulo degeneracies only index-drop-one faces remain, with the signed Morse coefficient. This gives an evaluated chain map from A to normalized singular chains. The explicit Moore normalization section, given in degree r by $P_r=(1-s_0d_1)...(1-s_{(r-1)}d_r)$ with rightmost factor first, lifts it to a chain map u:A→S for the original unnormalized differential. Each generator has a nondegenerate interior simplex in its own disjoint unstable cell, proving injectivity. Its relative class on each skeletal pair is the oriented cellular generator, so the actual Morse/cellular/singular comparison proves u is a quasi-isomorphism. This is a geometric inclusion, not merely an arbitrary homology identification. [F2, F3, A1, step 1.1, construct, algebra]

3.1 The quotient $Q=S/u(A)$ is acyclic. Choose rational splittings and the inverse-differential contraction $h_Q$ with $d_Q h_Q+h_Q d_Q=1$. For a degreewise rational section σ of π:S→Q set $K=d_Sσ−σd_Q$ and $σ'=σ+Kh_Q$. Since K takes values in u(A) and $d_S K+Kd_Q=0$, the displayed contraction gives $d_Sσ'=σ'd_Q$ and πσ'=1. Define p by up=1−σ'π. Then pu=1, p is a chain map, and $S=u(A)⊕N$ with $N=σ'(Q)$ an acyclic chain subcomplex. Every map is rational and extends coefficientwise preserving energy; its value on any individual continuous simplex is a finite rational chain. [F3, A1, step 2.1, construct, algebra]

4.1 On the completed suspended S set $M_0=u$ $m^A_0$, $M_1=d_S+u(m^A_1−d_A)p$ and $M_k=u$ $m^A_k$ $p^⊗k$ for k≥2, with the common suspension signs. These are exactly the geometric A operations on u(A), and only the differential acts on N. In particular $M_{(1,0)}=d_S$ on the entire original continuous-chain complex, and $M_0$ retains positive valuation. The strict maps $U_1=u$ and $P_1=p$, all other Taylor components including $U_0,P_0$ zero, satisfy every curved morphism equation by these formulas and pu=1; their linear terms are quasi-isomorphisms. Thus this specified full-chain extension is explicitly A-infinity equivalent to the geometric evaluated Morse model of the Definition. [F1, F3, step 3.1, construct, algebra]

5.1 For an input word in u(A), every nested product equals u times its geometric A product with the same signs. Its sum is zero by the actual A identity. For a word with an N input, an inner non-differential operation either contains it and vanishes, or leaves it for the outer non-differential operation, which then vanishes. Differentiating it keeps it in N. The remaining unary term is $d_S²=0$. A curvature insertion never deletes an original N input; the empty-word identity is the geometric A identity lifted by u. Hence all curved identities hold on every full continuous-chain input. [F2, F3, step 4.1, algebra]

6.1 At each arity and energy cutoff the actual A coefficients are finite rational counts. Each p input is a finite combination of its finite generator set; u,p preserve energy, and only finitely many coefficients of a Novikov-series input lie below the cutoff. Thus every $M_k$ is well-defined, continuous and filtration preserving. On an algebraic bar word of length n there are finitely many insertion places and output lengths at most n+1, so the preceding identities give D squared equal to zero on the declared algebraic direct sum. Neither strict comparison has a zero-input component, so these particular comparison maps also preserve that direct sum. No step sets m0 equal to zero. This establishes the original associated-model Statement for this specified geometric full-chain comparison. [F1, F2, F3, step 5.1, algebra] ∎

## Remarks

The actual geometric supplier is essential. The full-chain comparison uses evaluated external unstable cells, normalization and a rational chain splitting. These strict comparison maps are not labeled as raw finite-interval counts. The displayed construction does not assert strict unitality on the acyclic summand or identify an independently fixed raw simplexwise intersection model.
