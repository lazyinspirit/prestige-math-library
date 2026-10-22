---
id: lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
kind: lemma
title: "Choice-free relative transversality for a compact smooth embedding"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-choice-free-isotopy-extension-for-a-compact-smooth-source, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, thm-morse-sard-for-euclidean-maps, def-null-and-content-zero-in-rn]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. Compactness gives finite coordinate and velocity families and finitely many critical-set charts. Euclidean Sard is choice-free, and a finite union of its null sets cannot fill a parameter ball."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Encyclopedia of Mathematics, Sard theorem"
      url: "https://encyclopediaofmath.org/wiki/Sard_theorem"
      locator: "Classical critical-value input, via the fully read local Euclidean Sard proof; the compact finite perturbation and choice audit are given here, with no claim to a full primary-text reading."
---

## Statement

Let $P$ be a compact smooth manifold with boundary, let $N$ be a boundaryless Hausdorff smooth manifold, and let $i:P\to N$ be a smooth embedding. Let $Z\subset N$ be a closed embedded smooth submanifold without boundary. If $i$ is transverse to $Z$ along $\partial P$, then an arbitrarily small jointly smooth ambient isotopy, supported in any prescribed neighborhood of $i(P)$ and fixed on a neighborhood of $i(\partial P)$, makes $i(P)$ transverse to $Z$. The isotopy may be stationary near its time endpoints. No choice axiom is assumed. The same assertion holds for any finite family of such $Z$, provided the initial boundary restriction is transverse to every member. Empty source and empty intersection are allowed.

## Facts & Assumptions

**Given:** The compact embedding, closed target submanifold or finite family, initial boundary transversality and prescribed track neighborhood.

[F1] Compact-source smooth embedding isotopies have choice-free ambient extensions. Its finite coordinate-bump and quantitative compact-flow construction is also available ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement and Proof 2.1–4.1).

[F2] An invertible Euclidean derivative has a smooth local inverse ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], Statement).

[F3] The critical values of a smooth map between Euclidean open sets form a null set, without choice ([[thm-morse-sard-for-euclidean-maps]], Statement and full proof).

[F4] Null sets admit arbitrarily small total-volume cube covers ([[def-null-and-content-zero-in-rn]], Definition).

## Proof

1.1 If $P$ is empty, take the identity. Transversality is open by the tangent spanning condition. Compactness of $\partial P$ therefore gives a source neighborhood $U$ of that boundary on which $i$ is transverse to every specified $Z$. Choose smaller neighborhoods $V_0,V_1$ of the boundary with $\overline V_0\subset V_1$ and $\overline V_1\subset U$. They can be obtained from finitely many half-space charts and finite bumps; if $\partial P$ is empty take them empty. The compact sets $i(P\setminus U)$ and $i(\overline V_1)$ are disjoint. Choose finitely many target coordinate balls covering the former, with compact closures in the prescribed track neighborhood and disjoint from the latter. In each choose bump-multiplied coordinate frame fields, with bumps positive on smaller balls. If the former set is empty, sufficiently small perturbations are already transverse, so the identity suffices. Otherwise these finitely many fields span the target tangent space at every point of $i(P\setminus U)$ and vanish on a neighborhood of $i(\overline V_1)$. No infinite family of local choices has been selected. [F1, F2, given, construct]

2.1 The finite compact-flow proof of [F1] integrates each field for a common short parameter range. Compose their time-$a_j$ flows, in a fixed order, to get ambient diffeomorphisms $H_a$ with $H_0=\operatorname{id}$ and compact support in the chosen neighborhood. Put $G(p,a)=H_a(i(p))$. At $a=0$, the parameter derivative spans $T_{i(p)}N$ for $p\in P\setminus U$. This submersion property persists for all sufficiently small $a$, by compactness and finitely many nonzero minors. The parameter-spanning neighborhoods contain an open neighborhood of the compact set $P\setminus U$. Remove a smaller such neighborhood. The remaining source region outside the fixed boundary neighborhood is a compact subset of $U$, so initial transversality there persists for small $a$ by the same finite-minor argument; closedness of $Z$ excludes new intersections away from a neighborhood of its initial preimage. On the fixed boundary neighborhood the map remains $i$. Hence after restricting to one parameter ball $B$, $G$ is transverse to each $Z$ everywhere. The path $H_{t a}$ is already an ambient isotopy, so there is no separate embedding-openness or extension assumption. [F1, F2, step 1.1, construct]

3.1 Fix one $Z$. The preimage $W=G^{-1}(Z)$ is a smooth submanifold near every source point in the interior of $P$: in target coordinates $Z$ is the zero set of its normal coordinates, and the spanning condition says that the derivative of their composite with $G$ has full rank. Adding complementary source coordinates gives a square invertible derivative, so [F2] solves it as a graph. Let $\pi:W\to B$ be parameter projection. At $(p,a)\in W$, a tangent pair $(u,v)$ lies in $T W$ exactly when $dG(u,v)\in T Z$. Consequently $d\pi$ is onto exactly when $G_a$ is transverse to $Z$: one direction solves for $u$ for every $v$, and the reverse subtracts such a pair from a decomposition of any target vector given by total transversality. This is the elementary critical-projection argument, with no manifold transversality theorem as a premise. Critical points lie away from $V_0$, since all slices there are transverse. Restrict $a$ to a smaller closed parameter ball $\overline B'\subset B$. The critical set is closed in the compact set $(P\setminus V_0)\times\overline B'$: the preimage of closed $Z$ is closed and rank failure is closed. It is therefore compact and contained in the interior source region. Cover it by finitely many of the graph charts just constructed. In each chart, projection is a smooth Euclidean map; [F3] makes its critical values null. Thus all bad parameters in $B'$ lie in a finite union of null sets. Do this for each of the finitely many target submanifolds. [F2, F3, step 1.1, step 2.1, construct]

4.1 A finite union of null sets cannot contain a parameter ball. Indeed it remains null by assigning finitely many volume budgets. If it covered a closed positive-volume cube inside the ball, [F4] would give a cube cover of total volume less than half that cube's volume. Enlarge to open cubes with a still smaller total bound than the volume; compactness selects a finite subcover. Subdividing by their finitely many coordinate endpoints shows that their total volume is at least that of the covered cube, a contradiction. Choose a parameter outside the bad set in an arbitrarily small ball about zero. The associated $H_a i$ is transverse to every target submanifold and fixed on a neighborhood of the original boundary image. Smooth dependence makes $H_a$ and the whole path $H_{t a}$ arbitrarily small on the finite compact track as $a\to0$. Reparametrize $t$ smoothly to be stationary near $0,1$. All fields and chart choices were finite, the Euclidean critical-value suppliers are choice-free, and the final parameter is a single finite selection. This proves the claim. [F1, F3, F4, step 2.1, step 3.1, construct] ∎
