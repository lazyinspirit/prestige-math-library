---
id: lem-regular-fibers-in-seifert-pieces-with-boundary-have-infinite-order
kind: lemma
title: "Regular fibers in Seifert pieces with boundary have infinite order"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-incompressibility-seifert-fibration-and-jsj-system, lem-seifert-fiber-quotient-is-finite-orbifold-free-product, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-seifert-van-kampen]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the finite base-triangulation supplier; all lifts and group presentations used here are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.13–14 for the local Seifert models; the presentation and real-line action proving infinite order are supplied below"
---

## Statement

Assume full AC. In a compact connected orientable smooth Seifert-fibered three-manifold $M$ with nonempty boundary, every regular fiber has infinite order in $\pi_1(M)$. In particular, the inverse image of any properly embedded base arc avoiding exceptional points is a two-sided annulus whose fundamental group injects into $\pi_1(M)$; it has no compressing disk. The conclusion does not assert boundary-incompressibility of these annuli.

## Facts & Assumptions

**Given:** Full AC and the Seifert piece in the Statement.

[A1] Full AC is [[def-axiom-of-choice]].

[F1] The local models and multiplicities are those of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F2] Removing exceptional-fiber neighborhoods gives a circle bundle over a surface with boundary; the base has a finite graph spine with a free basis containing the individual puncture loops. Filling the $j$th neighborhood imposes its meridian relation, whose projection goes $q_j$ times around that puncture ([[lem-seifert-fiber-quotient-is-finite-orbifold-free-product]], Proof 1.1–3.1).

[F3] The exact homotopy sequence of a fibration identifies the kernel on fundamental groups with the image of the fiber and injects the fiber group when the base has zero $\pi_2$ ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], Statement).

[F4] Van Kampen computes the solid-torus fillings as group pushouts ([[thm-seifert-van-kampen]], Statement).

## Proof

1.1 Use [F2] to write $M_0\to B_0$ for the regular circle bundle. Its base retracts to a finite graph, so $\pi_2(B_0)=0$: a map of a sphere to a graph lifts to the graph's universal tree and contracts there. The tree is the explicit reduced-edge-path tree, and the compact image of a lifted sphere lies in finitely many edge stars of this locally finite tree and therefore contracts in a finite subtree. By [F3] there is an exact sequence $1\to\langle h\rangle\cong\mathbb Z\to\pi_1(M_0)\to\pi_1(B_0)\to1$. Fix the free base generators $c_1,\ldots,c_m,u_1,\ldots,u_r$ given in [F2], the $c_j$ being the small puncture loops. Lift each generator to a loop in $M_0$; path lifting and an arc in its terminal fiber give such a lift, and only finitely many are selected. Freeness extends these lifts to a section of the group surjection. Thus $\pi_1(M_0)$ is the semidirect product of the infinite cyclic fiber group and this free group. [A1, F2, F3, construct]

2.1 A lifted generator conjugates $h$ to $h$ or $h^{-1}$ according to the fiber-orientation transport along it. The puncture loops $c_j$ preserve orientation, since their neighborhoods in the base are annuli and the total space is orientable. Put $\varepsilon_i=\pm1$ for the signs of the remaining $u_i$. Consequently the bundle group has presentation with generators $h,c_j,u_i$ and only relations $c_j h c_j^{-1}=h$ and $u_i h u_i^{-1}=h^{\varepsilon_i}$. This is exact, rather than just a list of necessary relations: the indicated semidirect product has unique form $h^n w$, where $w$ is a reduced word in the chosen base generators; its projection determines $w$ and the injected fiber determines $n$. [F1, step 1.1, algebra]

3.1 In the boundary torus about the $j$th missing exceptional fiber, $c_j$ and $h$ give a basis: its projection onto the puncture circle takes $c_j$ once around that circle and kills $h$. After conjugating along the chosen basepath if necessary, its meridian therefore has word $c_j^{q_j}h^{p_j}$, with $p_j$ an integer relatively prime to $q_j$. The exponent $q_j$ is [F2]'s local multiplicity calculation; primitivity follows because a meridian is primitive in the torus group. The inclusion of the filled solid torus's boundary onto its core group is surjective and kills exactly that meridian. By [F4] the presentation of step 2.1, with the additional relations $c_j^{q_j}h^{p_j}=1$, is a presentation of $\pi_1(M)$. No relation for an original boundary circle is added, because the free base generators were chosen after retaining an original boundary component. [F1, F2, F4, step 2.1, algebra]

4.1 Define an action of this presented group on the real line. Let $h$ act by $x\mapsto x+1$, let $c_j$ act by $x\mapsto x-p_j/q_j$, and let $u_i$ act by $x\mapsto\varepsilon_i x$. Translations commute, reflections invert the unit translation, and $q_j(-p_j/q_j)+p_j=0$, so every relation of step 3.1 is satisfied. The resulting homomorphism sends every nonzero power $h^n$ to the nonidentity translation $x\mapsto x+n$. Hence $h$ has infinite order in $\pi_1(M)$. Any other based regular fiber is conjugate to $h$ or $h^{-1}$ by transport in the connected regular base, so has the same order. Over a proper base arc the bundle is a product $S^1\times I$; its annular core represents this infinite-order fiber. The annulus is orientable, and in orientable $M$ its normal line is trivial, so it is two-sided. Its fundamental group therefore injects. An embedded compressing disk would make a nonzero power of its core trivial in $\pi_1(M)$, contradicting that injection. This uses no general Loop theorem or irreducibility of $M$. [F1, step 3.1, construct, algebra] ∎
