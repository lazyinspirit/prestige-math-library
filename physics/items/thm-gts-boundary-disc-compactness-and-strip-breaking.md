---
id: thm-gts-boundary-disc-compactness-and-strip-breaking
kind: theorem
title: Fixed-boundary disk bubble compactness contract
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 8
deps:
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-stable-j-holomorphic-disks-with-boundary-markings
  - def-gts-stable-map-and-gromov-convergence
  - thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness
  - lem-gts-tame-j-holomorphic-area-is-dirichlet-energy
  - def-countable-choice
dependency_roles:
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-stable-j-holomorphic-disks-with-boundary-markings: mathematical-premise
  def-gts-stable-map-and-gromov-convergence: mathematical-premise
  thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness: mathematical-premise
  lem-gts-tame-j-holomorphic-area-is-dirichlet-energy: mathematical-premise
  def-countable-choice: mathematical-premise
axiom_strength: ZF + Countable Choice inherited from the bubble-tree supplier.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Urs Frauenfelder and Kai Zehmisch, Gromov compactness for holomorphic discs with totally real boundary conditions
      url: https://arxiv.org/pdf/1403.6139v2
      locator: Theorem 1.1 and §§1.3–1.5, 2.2–2.5, 3.1–3.2, printed pp. 2–15
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume Countable Choice. For compact symplectic $(X,\omega)$, smooth $\omega$-tame $J$, compact embedded Lagrangian $L$, finitely many fixed distinct cyclically ordered boundary markings on $D^2$, and smooth $J$-holomorphic maps $u_i:(D^2,\partial D^2)\to(X,L)$ with bounded symplectic area, there is a subsequential PRESTABLE bordered-map limit. Its domain retains the principal disk, every boundary disk and interior sphere bubble, and the original labeled markings, which may lie on bubble disks. All normalized components are smooth, all nodes match in $X$ and boundary nodes in $L$, and the component areas sum to the subsequential limit $E_\infty$ of total area. Convergence is smooth in the component coordinates away from nodes; connecting necks have vanishing energy and image diameter. Reparametrizations are holomorphic disk or sphere coordinates as appropriate.

If $E_\infty>0$, contracting unstable constant components gives a stable limit with the same energy, node values and labeled evaluations. The principal disk need not survive. In the unmarked case its contraction may instead give a sphere tree with one distinguished point mapping to $L$, representing collapsed boundary, as in the referenced definition. If $E_\infty=0$, the prestable limit is a constant disk; it is stable exactly when there are at least three boundary markings. With fewer markings it is an unavoidable unstable exception. This keeps all input maps, including constant ones. No gluing theorem is asserted.

## Statement references

[[def-gts-stable-j-holomorphic-disks-with-boundary-markings]]

[[thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness]]

## Facts & Assumptions

**Given:** The exact compact, tame, fixed-disk data and fixed finite marking set in the Statement, and Countable Choice.

[F1] The root fixed-bordered-source theorem gives a smooth base, finitely many actual disk/sphere rescalings, removability, matched nodes, constant-bubble stability, and zero energy AND diameter on every connecting neck. It permits an unstable constant base. Its coefficients may be specialized to the autonomous $J$. [[thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness]]

[F2] The Hermitian metric $g_J(v,w)=\tfrac12(\omega(v,Jw)+\omega(w,Jv))$ is positive for tame $J$, and the Dirichlet energy of a $J$-holomorphic curve, computed with a domain metric compatible with its complex structure, equals its symplectic area. [[lem-gts-tame-j-holomorphic-area-is-dirichlet-energy]]

[F3] Prestable and stable domains allow markings on arbitrary disk components and distinguish an unmarked collapsed-boundary sphere type; stability is finite automorphism group. [[def-gts-stable-j-holomorphic-disks-with-boundary-markings]]

[A1] Countable Choice is used through [F1] and to extract finitely many real-coordinate marking subsequences. [[def-countable-choice]]

## Proof

1.1 A compact Lagrangian is totally real for tame $J$: $v,Jv\in TL$ and $v\ne0$ would imply both $\omega(v,Jv)=0$ and $\omega(v,Jv)>0$. The symmetric form in [F2] is $J$-invariant, since direct expansion using $J^2=-I$ gives $g_J(Jv,Jw)=g_J(v,w)$. It is positive by tameness. Thus bounded areas give precisely bounded Dirichlet energies in this fixed metric. Pass to a subsequence with these energies converging to $E_\infty$. [given, F2, construct, algebra]

2.1 Apply [F1] to the fixed disk with $J_i(z,x)=J(x)$, boundary structure $J_b=J$ and boundary submanifold $L$. Every hypothesis holds by step 1.1. It gives a finite tree with the original principal disk, disk children only at boundary nodes and sphere children at interior nodes, the claimed rescaling convergence and matching, and the exact energy identity. Since $J$ is autonomous, all bubbles are $J$-holomorphic. All bubble constant components already satisfy stability; the principal disk is not asserted stable. [F1, step 1.1]

3.1 We give explicitly the marking extension for this FIXED marking set. In the original disk coordinates each marking is fixed and distinct. A marking outside the finite concentration set stays on the principal disk. For a marking at a boundary atom, use the real boundary coordinates of the actual disk rescalings in [F1]. In a component chart pass to a subsequence for the marking coordinate in the compactified real line. A finite limit away from nodes puts it on the smooth boundary of that component; a finite child-node limit follows that child. Sphere children cannot receive boundary marks, since their attaching points are interior. The component tree is finite, so this procedure can follow only finitely many children. Distinct original marks cannot enter the same first boundary atom, since that would force their distinct fixed original coordinates to converge to the same point. Thus each bubble subtree has at most one original marking to place. [given, F1, A1, step 2.1, construct]

4.1 The remaining case is a marking at a parent/child neck, including infinity in the child coordinate. Write the child coordinate in the parent's straight boundary chart as $c_i+\rho_i w$, and write the marking coordinate there as $a_i$. If $(a_i-c_i)/\rho_i$ has a finite limit, step 3.1 applies inside that child, descending further if necessary. If its modulus tends to infinity while $a_i,c_i$ tend to the same parent node, insert a constant disk in the neck at scale $\sigma_i=|a_i-c_i|$. In the coordinate $(z-a_i)/\sigma_i$, the mark is $0$, the child cluster is at $+1$ or $-1$ after a subsequence, and the parent is at infinity; $\rho_i/\sigma_i\to0$. This disk therefore has three distinct boundary special points. If a previously extracted component has a scale comparable to $\sigma_i$, place the marking on that component instead, and apply step 3.1 at its finite nodes. Finiteness of the existing component tree makes this alternative terminate. The inserted disk is constant: its compact subsets outside attachment points lie in the connecting half-annulus, whose energy tends to zero by [F1]; local derivative estimates and bootstrap used in [F1] give smooth convergence there, while the no-neck diameter assertion makes that constant the common node value. Removability fills its punctures. It lies in $L$ because its boundary values do. This inserts at most one disk per marking. No area is added. Positive real rescalings preserve the boundary order. The resulting finite marked tree is therefore exactly the prestable map of [F3], and preserves the original cyclic order, evaluations and energy. [F1, F3, step 3.1, construct, algebra]

5.1 Stabilization is a finite combinatorial operation on this tree, with matching of values through each constant component. A constant sphere with at most two special points is deleted if it is a leaf or contracted if it is a bridge. For a constant disk let $b$ count its boundary nodes and markings, and $i$ its interior nodes. An unstable disk has $b+2i\le2$. If $i=0$, a boundary leaf without a mark can be removed, a boundary bridge can be contracted, and a boundary leaf with one mark can be removed while transferring its mark to the former attachment point on its neighbor. This point is now smooth and is distinct from all its other markings and nodes. If $i=1$, instability forces $b=0$: there are no boundary nodes or markings, hence this is the only disk, and it is attached to a sphere tree at one interior point. Remove the disk and retain that attaching point on the sphere tree as the distinguished collapsed-boundary point with value in $L$. If there is no node at all, an unstable disk is isolated with at most two markings. These alternatives exhaust all nonnegative pairs $(b,i)$ with $b+2i\le2$. After each contraction repeat; the number of vertices decreases, so the process terminates. No nonconstant component or positive energy is removed. [F3, step 4.1, construct, algebra]

6.1 When $E_\infty>0$, the energy identity leaves at least one nonconstant component. Thus the isolated all-constant terminal disk cannot occur, and the procedure ends with a stable marked disk tree, or with the unmarked collapsed-boundary sphere tree. Marked cases cannot lose their last disk: the only disk-removal-to-spheres case in step 5.1 has no marks. Sphere contractions preserve the distinguished point as an additional special point, transferring it to the neighboring component if necessary. The finite automorphism conditions of [F3] now hold. Node values and evaluations are preserved because each removed map is constant. Concatenating finitely many zero-energy, zero-diameter necks retains those properties, so the stabilized maps have the same Gromov convergence and total area. [F1, F3, step 5.1, algebra]

7.1 If $E_\infty=0$, every component is constant by [F2]. The bubble energy quantum in [F1] excludes nonconstant bubbles, and its stable constant-bubble tree rules exclude a finite nonempty all-constant bubble tree: a terminal bubble would violate its stability rule. Hence there is just the constant principal disk, with the original distinct fixed marks. Its automorphism group is finite exactly when there are at least three boundary markings: a disk biholomorphism is determined by three distinct cyclically ordered boundary points, while the stabilizer of zero, one or two such points has positive dimension (in the upper half-plane these are respectively the full real Möbius group, its affine subgroup fixing infinity, or the dilations fixing zero and infinity). Consequently no stable limit is claimed in the remaining cases. Indeed any all-constant stable bordered tree with $K<3$ boundary marks is impossible: doubling gives a genus-zero nodal constant sphere tree with $K$ marks and $N$ vertices, whose total special-point count $2(N-1)+K$ is less than $3N$. Thus the unstable exception is necessary. This proves every branch without omitting any original input. [F1, F2, F3, step 2.1, step 4.1, step 6.1, algebra] ∎

## Proof status

Complete corrected fixed-source compactness proof from the exact actual root boundary bubble-tree supplier, which is draft context rather than a published theorem. The former universal stable-limit and all-markings-on-root formulations were false; the correction retains all input sequences and gives the stable branch whenever possible. No strip breaking, varying-domain compactness, gluing, virtual-cycle construction or orientation theorem is inferred.
