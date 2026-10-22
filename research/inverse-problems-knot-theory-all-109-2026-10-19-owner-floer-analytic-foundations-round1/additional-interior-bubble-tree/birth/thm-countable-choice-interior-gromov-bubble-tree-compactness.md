---
id: thm-countable-choice-interior-gromov-bubble-tree-compactness
kind: theorem
title: "Interior Gromov bubble-tree compactness under Countable Choice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-smooth-strip-compactness-away-from-energy-concentration, lem-finite-energy-almost-complex-puncture-removability, lem-soft-rescaling-captures-isolated-interior-energy-atoms]
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aleksey Zinger, Notes on J-Holomorphic Maps"
      url: "https://arxiv.org/abs/1706.00331"
      locator: "Full proofs of Proposition 5.5 and Theorem 1.2, printed pages 44–48, read in full"
---

## Statement

Assume Countable Choice. Let $(S,j_S)$ be a fixed closed compact Riemann surface, $(X,g)$ a compact smooth target, and $J_n(z,x)$ smooth families of almost complex structures converging smoothly on $S\times X$ to $J_\infty$. Let smooth solutions $u_n:S\to X$ of $du_n\circ j_S=J_n(z,u_n)\circ du_n$ have energies $E_g(u_n)\le E_0$.

After a subsequence there are a smooth base solution $u:S\to X$, a finite set $P\subset S$, and a finite rooted forest of sphere maps attached to $S$ at these points with the following properties. Every sphere lying over $p\in P$ is holomorphic for the autonomous target structure $J_\infty(p,\cdot)$. Child infinity is attached to a finite point of its parent sphere, or to $p$ on the base, and the component maps have equal values at every node. Distinct children of one component attach at distinct points. Every constant sphere has at least three nodes. The base maps converge smoothly off $P$, and each sphere map is a smooth local limit off its child attachment points after explicit compositions of complex translations and positive dilations in a fixed source chart. Relative child scales tend to zero and relative child centers tend to their attachment points.

There is no lost energy:
$$\lim_nE_g(u_n)=E_g(u)+\sum_vE_g(u_v).$$
The annuli connecting parent and child have vanishing energy and image diameter in the successive limits removing fixed neighborhoods of their two nodes. There is a uniform $h>0$ depending only on the compact geometric bounds such that the number of nonconstant sphere components is at most $\lfloor E_0/h\rfloor$ and the total number of sphere components is at most $2\lfloor E_0/h\rfloor$.

The source here is closed and fixed. Totally real boundary bubbling, strip breaking, variable source complex structures, and gluing are separate assertions.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The compact fixed source and target, smooth coefficient convergence, actual solutions, and uniform energy bound of the statement.

[F1] The actual local proof of [[lem-smooth-strip-compactness-away-from-energy-concentration]] supplies countable concentration extraction and smooth local convergence away from finitely many points, by epsilon estimates and chart bootstrap. Its disk argument is local and therefore applies in the finitely many conformal charts of $S$.

[F2] [[lem-finite-energy-almost-complex-puncture-removability]] fills actual finite-energy interior punctures for smooth source-dependent coefficients, and fills finite-energy autonomous plane limits at infinity.

[F3] [[lem-soft-rescaling-captures-isolated-interior-energy-atoms]] proves an actual soft-rescaling step for an isolated atom of mass $m$. It gives a root sphere $v$, finitely many child atoms $m_z$, a uniform $h>0$, $E_g(v)+\sum m_z=m$, $h\le m_z\le m-h$, exact node connection, and smooth rescaled convergence off the child points. If the root is constant it has at least two children. Its proof also gives vanishing energy and image diameter on the connecting annuli and a lower bound $h$ for every nonconstant sphere.

## Proof

1.1 Pass to a subsequence with total energies converging to $E\le E_0$. Cover the compact source by finitely many relatively compact conformal charts and choose a countable basis of disks in them. The smooth convergence of $J_n$ gives uniform coefficient bounds. Apply the concentration argument of [F1]: extract energy limits on the countable basis, declare a point exceptional only when every basis neighborhood has limiting energy at least a fixed epsilon threshold, and use disjoint neighborhoods and the total bound $E_0$ to bound the number of exceptional points. Away from them actual epsilon estimates give first derivative bounds, compact target finite nets and dense source points give locally uniform subsequences, and the local higher bootstrap and a countable derivative diagonal give smooth convergence to a solution $u$. Exceptional points where a further subsequence has bounded gradients on a neighborhood are removed, at most finitely many times. Thus the remaining finite set $P$ consists of genuine concentration points. This uses finitely many charts and countably many extractions, not arbitrary choice. [F1, given, construct, algebra]

2.1 The limit has energy at most $E_0$ on $S\setminus P$ by exhaustion and smooth convergence. By [F2] it extends smoothly across every point of $P$, with equation for $J_\infty$. In disjoint coordinate disks about those points, extract limits of the energies on rational concentric radii. Smooth convergence on annuli and the filled base show that these limits extend to all sufficiently small radii and have form $$\lim_nE_g(u_n;B_r(p))=m_p+E_g(u;B_r(p)).$$ Indeed subtract two rational-radius limits, pass to the annular smooth limit, and let the inner radius decrease to zero; continuity and monotone sandwiches extend to other radii. The masses $m_p$ are positive and at least $h$: if one were below the uniform bubble quantum, the local normalized blowup construction in [F3] would produce a nonconstant bubble of energy at most $m_p$ and at least $h$, a contradiction. A point with zero mass has a neighborhood below the epsilon threshold and is not a genuine concentration point. After decreasing $h$ uniformly over the finite chart cover, it is the same constant as in [F3]. [F2, F3, step 1.1, construct, algebra]

3.1 Remove the finitely many disjoint radius-$r$ disks from the source. Smooth convergence on the remaining compact surface gives its energy, while step 2.1 gives each disk energy. Add these equalities and let $r\downarrow0$. The base is smooth and the disks have vanishing base energy, so $$E=E_g(u)+\sum_{p\in P}m_p.$$ This separates every original atom from the base by an actual finite partition and accounts for all energy on the closed source. No compactness assertion at an unbounded end has been used. [step 1.1, step 2.1, algebra]

4.1 We prove by induction on $N=\lfloor m/h\rfloor\ge1$ that any isolated interior atom of mass $m$ in these data is represented by a finite sphere tree of total energy $m$, connected to its given filled parent value. Apply [F3] to that atom. Its root sphere is connected to the parent, its distinct child points form a finite set $Z$, and its child masses obey $h\le m_z\le m-h$. Thus $\lfloor m_z/h\rfloor\le N-1$. If $N=1$ there can be no child mass, because $m-h<h$; the root itself is the required sphere tree. If $N>1$, restrict the rescaled sequence to disjoint small coordinate disks about its finitely many child points. Their filled limiting parent map is the smooth root sphere, their coefficients converge smoothly to the same autonomous structure, their isolated masses are $m_z$, and their energies have exactly the bounds required by [F3]. The induction hypothesis therefore supplies a finite tree for each child, connected at the prescribed point. Their total energy plus that of the root is $E_g(v)+\sum m_z=m$. Finitely many subsequence extractions suffice at this node. Finite depth, bounded by $N$, and finite branching prove that the entire process terminates. [F3, step 2.1, construct, algebra]

5.1 The induction constructs actual reparametrizations and all required scale relations. At a root, [F3] uses the affine map $w\mapsto z_n+\rho_n w$ in a fixed original conformal chart, with $\rho_n>0$ tending to zero. At a child in the parent's plane coordinate, it uses $w\mapsto a_n+r_n w$, where $a_n\to a$ is its finite attachment point and $r_n\to0$. Composition with the parent's map remains a complex translation and positive dilation in that original chart. The ratio of original child to parent scales is $r_n\to0$, and the relative center tends to $a$. Siblings have distinct limiting centers because [F3] extracts distinct concentration points on a parent. The convergence off the finite child set at each vertex is exactly the actual local smooth convergence in [F3]. Since the constructed forest is finite, pass to the finitely many nested subsequences and retain all earlier component limits. [F3, step 4.1, construct, algebra]

6.1 Every parent-child pair has equal nodal values by the node-connection assertion of [F3]. Its explicit cylindrical-annulus estimates also give vanishing energy and image diameter between the two components: first take the sequence limit with fixed outer parent-node radius and fixed inner child-plane radius, then shrink the former and enlarge the latter. At a deeper edge the same estimates hold in that parent's conformal coordinate, and composition with earlier affine changes preserves source conformality and energy. There are finitely many edges, so all these successive limiting conclusions hold simultaneously. Gluing the component domains only at these matched points gives a continuous map from the finite nodal surface. This describes a limit, not a smoothing or gluing construction. [F3, step 4.1, step 5.1, construct, algebra]

7.1 A constant root created in [F3] has at least two children, hence at least three nodes after adding its parent attachment at infinity. This remains true at every depth, so every constant sphere is stable. Each nonconstant sphere has energy at least $h$, and the tree energy identities together with step 3.1 imply that their number $A$ is at most $\lfloor E_0/h\rfloor$. Let $G$ be the number of constant spheres and $q=|P|$ the number of nonempty trees. In this forest the number of parent-child edges among sphere vertices is $A+G-q$, while each constant vertex has at least two children and each other vertex has nonnegative child count. Thus $A+G-q\ge2G$, so $G\le A-q$. If the forest is empty there is nothing to count; otherwise the total number of sphere vertices is at most $2A-q\le2\lfloor E_0/h\rfloor$. [F3, step 3.1, step 4.1, algebra]

8.1 Apply step 4.1 to each original atom $m_p$. Their finitely many trees attach to the smooth base at distinct points $p$. Step 6.1 proves continuity and the asserted convergence and annulus properties; summing their actual energy identities in step 3.1 gives $$\lim_nE_g(u_n)=E_g(u)+\sum_vE_g(u_v).$$ All sphere structures over $p$ are $J_\infty(p,x)$, since their source coordinates tend to $p$ and every further rescaling freezes the same coefficient. Step 7.1 proves the bounds and stability. This completes the actual fixed-source interior bubble-tree compactness statement under Countable Choice, without importing boundary compactification, strip breaking or gluing. [step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, algebra] ∎
