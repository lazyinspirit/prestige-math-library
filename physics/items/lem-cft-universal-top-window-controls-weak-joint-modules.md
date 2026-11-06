---
id: lem-cft-universal-top-window-controls-weak-joint-modules
kind: lemma
title: A universal finite weight window detects all C2-cofinite weak joint modules
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - lem-cft-c2-cofinite-modules-finitely-generated
  - thm-cft-finitely-generated-weak-joint-modules-grading-restricted
  - lem-cft-zhu-zero-mode-identities-on-singular-vectors
  - lem-cft-locality-to-jacobi-residue-calculus
dependency_roles:
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  thm-cft-finitely-generated-weak-joint-modules-grading-restricted: mathematical-premise
  lem-cft-zhu-zero-mode-identities-on-singular-vectors: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gui and Zhang, Analytic Conformal Blocks I
      url: https://arxiv.org/pdf/2305.10180v4
      locator: Appendix A.14 and Sections3.4–3.5; the proof below replaces the projective-cover argument in3.29 by a universal top-window argument.
dependency_level: 3
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let V be a C2-cofinite CFT-type conformal vertex algebra. There is a nonempty finite set E of complex numbers, depending only on V, such that every weak joint module D with k commuting component actions has an algebraic decomposition into joint generalized weights, all of whose real parts are at least $b=\min\{\operatorname{Re}(e):e\in E\}$ in every coordinate. Each coordinate weight belongs to E plus the nonnegative integers. The spaces in this decomposition need not be finite dimensional. Put G(D)=the direct sum of D_[lambda] for lambda in $E^{k}$. This subspace generates D. Consequently D is finitely generated, and hence grading restricted in the full joint sense, if G(D) is finite dimensional. This criterion requires no projective covers or semisimplicity.

## Facts & Assumptions

**Given:** V, k and D as stated. Weak modules satisfy vectorwise truncation and module Jacobi.

[F1] [[thm-cft-finitely-generated-weak-joint-modules-grading-restricted]] proves that every cyclic weak joint module is grading restricted, with finite joint spaces, finite lattice-coset support and coordinatewise lower bounds. It also proves the conclusion for every finitely generated weak joint module.

[F2] [[lem-cft-c2-cofinite-modules-finitely-generated]] proves that V/O(V) is finite dimensional without using its associative structure: the leading C2 relation reduces a state above a fixed finite weight bound to lower states modulo O(V).

[F3] [[lem-cft-zhu-zero-mode-identities-on-singular-vectors]] proves $o(O(V))Omega=0$ and $o(a*b)v=o(a)o(b)v$ on Omega of any weak module. Here Omega is killed by every mode of strictly negative operator degree.

[F4] [[lem-cft-locality-to-jacobi-residue-calculus]] supplies the weight shift $[L_{i}(0),a_{n}^{j}]=\delta_{ij}(wt(a)-n-1)a_{n}^{j}$.

## Proof

1.1 Define $p_{0}=1$ and $p_{n+1}=\omega*p_{n}$ in V. Finite dimensionality in F2 gives a nonzero polynomial $P(x)=\sum c_{n} x^{n}$ with sum $c_{n} p_{n}$ in O(V). F3 implies $o(p_{n})v=L(0)^{n} v$ on Omega of every weak module, by induction; each star identity is applied to that same v. Therefore $P(L(0))Omega=0$ universally. The vacuum lies in Omega(V), so P(0)=0. Let E be the finite nonempty root set of P. [F2, F3, algebra]

2.1 First take a grading-restricted single-component module U. In any occurring lattice coset alpha+Z, take its least occurring integer translate alpha+m; it exists by the lower real-part bound. Every vector of that generalized-weight space is in Omega(U), since a negative-degree mode would land at a smaller translate in the same coset. By step 1.1 P(alpha+m)=0: otherwise P(L(0)) is invertible on each finite nilpotent cyclic orbit of such a vector. Thus the least occurring weight is in E and every weight in that coset is that element plus a nonnegative integer. In particular every real part is at least b. For a grading-restricted joint module, fix all other coordinates of a joint weight and sum the spaces on that slice. F1 and finite lattice-coset support make this a grading-restricted module for the remaining component: its single-coordinate spaces are the finite joint spaces. Applying the preceding argument to each slice proves the same universal bound and support for each coordinate. The other component modes are not used in this slice argument. [F1, F3, F4, step 1.1, algebra]

3.1 Each vector of D lies in its cyclic joint submodule, which is grading restricted by F1. Hence it has finite joint generalized-weight support and finite nilpotent orbits. Distinct joint weights are independent, since on any proposed finite relation polynomial primary projections in the commuting $L_{i}(0)$ separate the finitely many weights. Thus these decompositions assemble into an algebraic direct sum on D. Every occurring weight belongs to one of these cyclic submodules, so step 2.1 proves the universal bound and support on D, regardless of dimensions of its joint spaces. Exactly the same conclusions apply to every weak quotient of D, because F1 applies to its cyclic submodules too. [F1, step 2.1, algebra]

4.1 Let U be generated by G(D) and put $Q=D/U$. The submodule U decomposes into joint components: on each vector finite polynomial primary projections in the conformal operators isolate its components and preserve U. Therefore the quotient map is surjective on every joint generalized-weight space. More explicitly, lift a vector of Q, decompose its lift into finitely many joint components by step 3.1, and discard all components at other weights; the remaining component maps to the specified vector. Since U contains D_[lambda] for lambda in $E^{k}, Q$ has zero joint spaces at all those weights. [F4, step 3.1, algebra]

5.1 If Q were nonzero, pick an occurring joint coset $\alpha+Z^{k}$ and minimize the sum of its integer coordinates among its occurring weights. The universal coordinate lower bounds of step 3.1 make this integer sum bounded below, hence it has a minimum. At a minimizing weight every component mode of negative operator degree kills the whole joint space. A nonzero vector q there is therefore in Omega for every component. Step 1.1 gives $P(L_{i}(0))q=0$ for all i, so its weight lies in $E^{k}$. This contradicts step 4.1. Thus $Q=0$ and G(D) generates D. If G(D) is finite dimensional, any finite basis generates D; F1 gives full grading restriction, including finite joint spaces, and all stated conclusions follow. [F1, step 1.1, step 3.1, step 4.1, algebra] ∎
