---
id: lem-rational-homology-sphere-heegaard-periodic-domains-are-constant
kind: lemma
title: "Complete Heegaard diagrams of rational homology spheres have only constant periodic domains"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-hat-heegaard-floer-complex-of-a-closed-three-manifold
  - thm-mayer-vietoris-sequence-in-singular-homology
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-excision-for-singular-homology
  - thm-five-lemma-for-a-morphism-of-long-exact-sequences
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class
  - thm-collar-neighborhood-theorem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Periodic domains and rational homology spheres in Sections2 and4; the finite relative-domain argument is proved locally"
---

## Statement

Assume countable choice. Let $Y=U_\alpha\cup_\Sigma U_\beta$ be a smooth closed connected oriented three-manifold with $H_2(Y;\mathbb Q)=0$, with a pointed Heegaard diagram whose two complete disk systems each cut its handlebody into one ball. Let $P$ be any integral region domain whose chain boundary is an integral linear combination of the full attaching circles. Then $P=c[\Sigma]$ for an integer $c$. Thus $n_z(P)=0$ implies $P=0$.

In particular the assertion applies to every complete singly pointed Heegaard diagram of a rational homology sphere. Such diagrams satisfy the global mixed-sign admissibility condition: there is no nonzero periodic domain with zero basepoint coefficient. No disk-index formula, existence of regular perturbations, or Floer invariance is asserted. The conclusion concerns singly pointed complete cut systems; it does not assert the same constant-domain formula for multipointed disk systems cutting a handlebody into several balls.

## Statement references

[[def-countable-choice]]

[[def-hat-heegaard-floer-complex-of-a-closed-three-manifold]]

## Facts & Assumptions

**Given:** The actual splitting, its specified complete compression disks, $H_2(Y;\mathbb Q)=0$ and the integral region domain. All homology groups used below have rational coefficients.

[F1] [[thm-mayer-vietoris-sequence-in-singular-homology]] gives exactness for an open two-set cover with any coefficient group; [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]] identifies deformation retracts.

[F2] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-excision-for-singular-homology]] and [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]] give the relative connector and the annular-neighborhood comparisons. The connector is the boundary of a relative chain.

[F3] [[lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class]] gives the unique relative orientation class determined by all interior local generator values and its oriented boundary. It works over $\mathbb Q$ without an axiom of choice.

[F4] [[thm-collar-neighborhood-theorem]] supplies smooth collars of the two compact handlebody boundaries under countable choice. They give a two-sided collar of the specified common splitting surface.

## Proof

1.1 Enlarge the interiors of the handlebodies across a thin common collar from [F4]. These two open sets cover $Y$, retract to $U_\alpha,U_\beta$, and their intersection retracts to $\Sigma$. Mayer–Vietoris [F1] has the exact segment $$H_2(Y;\mathbb Q)\longrightarrow H_1(\Sigma;\mathbb Q)\longrightarrow H_1(U_\alpha;\mathbb Q)\oplus H_1(U_\beta;\mathbb Q).$$ Its first term is zero, so the second arrow is injective. Consequently the kernels of the two individual inclusion maps from the surface have zero intersection. This uses the actual rational homology hypothesis, without replacing $Y$ by a three-sphere or invoking a torsion Spin-c assertion. [F1, F4, given, construct, algebra]

1.2 For either complete attaching system write $C$ for the union of its circles. Cutting the surface along them gives a connected compact oriented surface $S$ with two boundary copies of each circle. To see connectedness from the stated disk condition, cut the handlebody along its specified disks. Its boundary is the sphere boundary of the resulting ball. Removing the interiors of the two disk faces for each compression disk leaves exactly $S$. A sphere with finitely many pairwise disjoint open disk interiors removed is connected: connect two retained points by a path on the sphere and replace every excursion through any removed disk by a boundary-circle arc; finitely many small path adjustments in the disk collars give a path avoiding their interiors. There are finitely many disk faces, and each replacement can be made for an entire excursion interval by its first and last intersection. Thus the required cut surface is connected, including the empty-system case. [F4, given, construct, algebra]

2.1 The annular-neighborhood comparison in [F2] identifies $$H_2(\Sigma,C;\mathbb Q)\cong H_2(S,\partial S;\mathbb Q).$$ Explicitly replace $C$ by disjoint thin annuli retracting onto it, using its finite smooth collars in the oriented surface; pair sequences and the five lemma preserve the relative groups. Excise smaller closed middle annuli, and retract the remaining collar pieces onto the boundary copies of the cut surface. These operations are the displayed isomorphism. The group on the right is one-dimensional on $[S,\partial S]$. Here is the needed top-degree calculation from [F3]: the local value of any relative class at an interior point is a rational multiple of the oriented local generator. Those multiples are locally constant, since restricting to a closed coordinate disk makes the class a multiple of that disk's relative orientation class. The disk relative group is $\mathbb Q$: its pair sequence and a cover of its boundary circle by two open arcs give $H_1(S^1;\mathbb Q)=\mathbb Q$ by [F1]; both arcs are contractible, their intersection has two contractible components, and the kernel on $H_0$ is generated by their difference. Connectedness of the interior of $S$ makes all local multiples one rational number $a$. Subtracting $a[S,\partial S]$ has zero restriction at every interior point and is zero by the pointwise uniqueness in [F3]. This proves the claim, also when $S$ is closed. [F1, F2, F3, step 1.2, construct, algebra]

3.1 The connector from this one-dimensional relative group to $H_1(C;\mathbb Q)$ is zero. Indeed the boundary of its generator is the sum of the oriented boundary circles of $S$ by [F3]; the two copies of each cut circle map back to that circle with opposite orientations and cancel. Exactness of the pair sequence [F2] therefore makes $$H_1(C;\mathbb Q)\longrightarrow H_1(\Sigma;\mathbb Q)$$ injective. Its source has one independent rational generator for each attaching circle: finite disjoint unions split the singular chain complex, and the circle computation in step 2.1 gives one copy of $\mathbb Q$ for each circle. Thus a rational linear combination of the full oriented attaching circles which is zero in surface homology has every coefficient zero. This establishes the needed independence without an assumed symplectic basis or an integral surface intersection theorem. [F1, F2, F3, step 2.1, construct, algebra]

4.1 Write $\partial P=c_\alpha+c_\beta$ in full-circle coefficients. This formal region chain supplies a genuine homological boundary on $\Sigma$: take relative orientation chains of its finitely many region closures, separating their corners and rounding them in small vertex disks. Paired edge contributions cancel with the prescribed coefficients; the remaining corner arcs fill in those vertex disks. The connector construction in [F2] and the orientation-boundary statement [F3] consequently give $[c_\alpha]+[c_\beta]=0$ in $H_1(\Sigma;\mathbb Q)$. Each $c_\gamma$ bounds its integral combination of the specified compression disks inside $U_\gamma$. Therefore $[c_\alpha]=-[c_\beta]$ belongs to both kernels in step 1.1 and must be zero. Step 3.1 applied separately to the two complete systems makes every full-circle coefficient in $c_\alpha,c_\beta$ zero. Hence $\partial P=0$ as a region-chain boundary, not just in homology. [F2, F3, step 1.1, step 3.1, construct, algebra]

5.1 Across each curve edge the adjacent region coefficients of $P$ are now equal. The adjacency graph of the regions is connected. Indeed a path between two interior points on the connected surface may be altered in finitely many coordinate disks to miss the finitely many curve-intersection vertices and to cross the smooth edges transversely. One may first replace it by finitely many coordinate polygonal segments, and choose their vertices outside the finite exceptional lines and critical tangencies; in each smooth arc chart use a short transverse segment. Following this path propagates equality of the adjacent coefficients. Thus all coefficients are one integer $c$, giving $P=c[\Sigma]$. Evaluating at $z$ gives $n_z(P)=c$. If that coefficient is zero, the domain is zero, proving the admissibility assertion. For genus zero there are no attaching curves, so the same connected-surface coefficient argument applies directly. A rational homology sphere has $H_2(Y;\mathbb Q)=0$ by definition, so it is among the stated inputs. No analytic existence, index or invariant claim entered the proof. [step 4.1, construct, algebra] ∎
