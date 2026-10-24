---
id: thm-qftx-singer-global-gauge-section-obstruction
kind: theorem
title: "Singer obstruction to a global continuous gauge representative"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 8
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-slice-mathematics
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - def-axiom-of-choice
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-qftx-smooth-sobolev-gauge-configuration
  - thm-qftx-sobolev-smooth-irreducible-gauge-bundle
  - thm-qftx-irreducible-connections-weak-contractibility
  - thm-qftx-reduced-gauge-group-sphere-nontriviality
  - lem-qftx-section-retract-obstruction
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  thm-qftx-sobolev-smooth-irreducible-gauge-bundle: mathematical-premise
  thm-qftx-irreducible-connections-weak-contractibility: mathematical-premise
  thm-qftx-reduced-gauge-group-sphere-nontriviality: mathematical-premise
  lem-qftx-section-retract-obstruction: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "I. M. Singer, Some Remarks on the Gribov Ambiguity"
      url: https://scispace.com/pdf/some-remarks-on-the-gribov-ambiguity-33y52evtqe.pdf
      locator: "CMP 60 (1978), 7–12, Theorems 1–9 and Corollary 4. Complete six-page extracted primary text read through web PDF view; no downloadable PDF or native fetch stamp. Local proof uses explicit suppliers instead of the paper’s unproved analytic/topological inputs."
verification:
  precheck: pending
---
## Statement

Assume the axiom of choice. Let $N\ge2$, let $r\in\{3,4\}$, and let $P\to S^r$ be any fixed smooth principal $SU(N)$ bundle. Give the affine space $\mathcal A^\infty(P)$ of smooth principal connections and the smooth gauge group $\mathcal G^\infty(P)$ their $C^\infty$ section topologies, as specified in [[def-qftx-smooth-sobolev-gauge-configuration]]. Let $\mathcal A^{\infty,*}(P)$ consist of connections whose holonomy representation on $\mathbb C^N$ has no proper nonzero invariant complex subspace. Let $Z_N=\{zI:z^N=1\}$ act as constant central gauge transformations, and put $\overline{\mathcal G}^\infty(P)=\mathcal G^\infty(P)/Z_N$, with its quotient topology. Give each orbit space its quotient topology.

The projection
$$
q_*:\mathcal A^{\infty,*}(P)\longrightarrow \mathcal A^{\infty,*}(P)/\overline{\mathcal G}^\infty(P)
$$
has no continuous section. Consequently the full orbit projection
$$
q:\mathcal A^\infty(P)\longrightarrow\mathcal A^\infty(P)/\mathcal G^\infty(P)
$$
has no continuous section. A section means a continuous right inverse of the indicated projection. Both conclusions hold for every bundle sector, including nontrivial bundles; irreducibility does not mean that holonomy equals all of $SU(N)$.

## Statement references

[Singer, Some Remarks on the Gribov Ambiguity, CMP 60 (1978), 7–12](https://doi.org/10.1007/BF01609471). Complete primary web-text reading and download limitations are recorded in the owner source-repair dossier.

## Facts & Assumptions

**Given:** The data and topologies of the Statement.

[A1] The axiom of choice is assumed. [[def-axiom-of-choice]]

[F1] A smooth partition of unity subordinate to a local principal trivializing cover exists. [[thm-smooth-partitions-of-unity-exist-on-manifolds]]

[F2] Use the smooth section topologies, connection affine space, gauge action, central subgroup and irreducibility conventions. [[def-qftx-smooth-sobolev-gauge-configuration]]

[F3] The smooth irreducible projection is a locally trivial principal reduced-gauge-group bundle. [[thm-qftx-sobolev-smooth-irreducible-gauge-bundle]]

[F4] For every such sphere bundle the smooth irreducible connection space is nonempty and weakly contractible. [[thm-qftx-irreducible-connections-weak-contractibility]]

[F5] For every such bundle the reduced smooth gauge group has infinitely many path components when r=3, and nonzero pi_1 at its identity when r=4. [[thm-qftx-reduced-gauge-group-sphere-nontriviality]]

[F6] A continuous section of a nonempty principal topological bundle makes the structure group a retract; a weakly contractible total space forces a weakly contractible structure group. [[lem-qftx-section-retract-obstruction]]

## Proof

1.1 Fix a point of $S^r$, a point in its bundle fiber, a smooth Riemannian metric on $S^r$, and a smooth reference connection. A reference connection exists: choose local principal trivializations and their flat local connection forms $\omega_i$ on $P|_{U_i}$, and a smooth subordinate partition $\rho_i$. The locally finite sum $\omega=\sum_i(\rho_i\circ\pi)\omega_i$ is smooth, right-equivariant and satisfies $\omega(\xi_P)=\sum_i\rho_i\xi=\xi$. It is therefore a principal connection. These choices provide exactly the auxiliary data of [F2] without restricting the isomorphism class of $P$. [A1, F1, F2, given, construct]

2.1 By [F3], $q_*$ is a locally trivial principal topological $\overline{\mathcal G}^\infty(P)$ bundle in the indicated smooth topologies. By [F4] its total space is nonempty and weakly contractible. Central gauge transformations act trivially on every connection, so its orbits are the full gauge-group orbits within the irreducible locus, as required by [F2]. [F2, F3, F4, step 1.1]

3.1 Suppose $q_*$ had a continuous section. Applying [F6] to Step 2.1 would make $\overline{\mathcal G}^\infty(P)$ path connected with all positive-degree homotopy groups zero. For $r=3$ this contradicts its infinitely many path components from [F5]. For $r=4$ it contradicts the nonzero fundamental group at the identity from [F5]. Hence $q_*$ has no continuous section. [F4, F5, F6, step 2.1, contradiction]

4.1 Write $A=\mathcal A^\infty(P)$ and $A_*=\mathcal A^{\infty,*}(P)$. The latter is gauge invariant by conjugacy of holonomy. It is open because it is the inverse image of the open Sobolev irreducible locus of [F3] under the continuous inclusion of the smooth section topology into the $H^k$ topology of [F2]. The orbit projection $q:A\to A/\mathcal G^\infty(P)$ is open: for every open $U\subset A$, $q^{-1}(q(U))=\bigcup_{g\in\mathcal G^\infty(P)}U\cdot g$ is open, since each action map is a homeomorphism. Thus $q(A_*)$ is open, and the restricted projection $A_*\to q(A_*)$ is a quotient map. Indeed a relatively open saturated subset of $A_*$ is open in $A$, and its image under $q$ is open. The same orbits occur for the reduced group, so $A_*/\overline{\mathcal G}^\infty(P)\to q(A_*)$ is a homeomorphism by these quotient topologies. If $s:A/\mathcal G^\infty(P)\to A$ were a continuous section, then $s(q(A_*))\subset A_*$, because each irreducible orbit consists only of irreducible connections. Its restriction, composed with this homeomorphism, would be a continuous section of $q_*$, contrary to Step 3.1. [F2, F3, step 3.1, given, construct] ∎
