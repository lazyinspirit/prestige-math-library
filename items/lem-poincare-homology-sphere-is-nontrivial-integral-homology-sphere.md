---
id: lem-poincare-homology-sphere-is-nontrivial-integral-homology-sphere
kind: lemma
title: "The Poincaré sphere is a nontrivial integral homology sphere"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-higher-dimensional-spheres-are-simply-connected
  - def-universal-covering-space
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - thm-poincare-duality-for-oriented-topological-manifolds
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - def-axiom-of-choice
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes AC only for the Poincare-duality and universal-coefficient suppliers used to compute H_2 and H_3; the covering and fundamental-group calculations use no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Algebraic Topology, Winter Semester 2021/22, §4.5.12"
      url: "https://loeh.app.ur.de/teaching/topologie1_ws2122/lecture_notes.pdf"
      locator: "Printed pp.178–179; homology and fundamental group of the Poincaré sphere and the binary icosahedral group"
    - title: "Arun Debray, Group Actions on S^3"
      url: "https://adebray.github.io/lecture_notes/group_actions_on_s3.pdf"
      locator: "§§1–2, pp.1–2; the binary icosahedral subgroup of the unit quaternions, its order and presentation, its free left action, and the quotient covering"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice. Let $I^*$ be the binary icosahedral group, the group of $120$ unit quaternions acting on the unit sphere $S^3$ by left multiplication, and put $P=S^3/I^*$. The quotient is a closed connected oriented $3$-manifold with universal cover $S^3$ and deck group $I^*$. Then $H_*(P;\mathbb Z)\cong H_*(S^3;\mathbb Z)$ and $\pi_1(P)\cong I^*$ is nontrivial.

## Statement references

[Algebraic Topology, Winter Semester 2021/22, §4.5.12](https://loeh.app.ur.de/teaching/topologie1_ws2122/lecture_notes.pdf)

[Arun Debray, *Group Actions on $S^3$*, §§1–2](https://adebray.github.io/lecture_notes/group_actions_on_s3.pdf)

## Facts & Assumptions

**Given:** AC, the binary icosahedral group presentation $I^*=\langle s,t\mid (st)^2=s^3=t^5\rangle$ of order $120$, its free orientation-preserving action on $S^3$, and the quotient $P=S^3/I^*$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. The local Poincaré-duality supplier below assumes this axiom.

[F1] [[thm-higher-dimensional-spheres-are-simply-connected]]: $S^3$ is simply connected.

[F2] [[def-universal-covering-space]]: a universal cover is a covering map with simply connected total space.

[F3] [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]: for a universal cover, its deck group is isomorphic to the fundamental group of its path-connected, locally path-connected, semilocally simply connected base.

[F4] [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]: for a path-connected space, $H_1(-;\mathbb Z)$ is the abelianization of $\pi_1$.

[F5] [[thm-poincare-duality-for-oriented-topological-manifolds]]: under AC, compact oriented boundaryless $P$ has cap-duality isomorphisms $H_i(P;\mathbb Z)\cong H^{3-i}(P;\mathbb Z)$ in every degree.

[F6] [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]: under AC, the free integral singular chain complex of $P$ gives $0\to\operatorname{Ext}^1(H_0(P),\mathbb Z)\to H^1(P;\mathbb Z)\to\operatorname{Hom}(H_1(P),\mathbb Z)\to0$.

[F7] Debray, *Group Actions on $S^3$*, §§1–2, pp.1–2: $I^*$ is the order-$120$ preimage of the icosahedral rotation group in $SU(2)$, has presentation $\langle s,t\mid (st)^2=s^3=t^5\rangle$, and acts freely by left multiplication; the finite-group quotient is a smooth covering $S^3\to S^3/I^*$.

## Proof

1.1 By [F7], the order-$120$ subgroup of unit quaternions acts freely by left multiplication, so $S^3\to P$ is a covering with deck group $I^*$. Each left multiplication is isotopic to the identity because $S^3$ is path-connected; hence the action preserves orientation and the quotient is oriented. Since $S^3$ is simply connected by [F1], this cover is universal by [F2]. Then [F3] gives $\pi_1(P)\cong I^*$, which is nontrivial because its order is $120$. [F1, F2, F3, F7, given]

1.2 In the abelianization, write the images of $s,t$ additively. The presentation in [F7] gives the relation $(st)^2=s^3=t^5$, hence $2s+2t=3s=5t$. The first equality yields $s=2t$; substituting into $3s=5t$ gives $6t=5t$, hence $t=0$ and $s=0$. Thus $(I^*)^{\mathrm{ab}}=0$, and [F4] gives $H_1(P;\mathbb Z)=0$. [given, F4, F7, algebra]

2.1 The quotient is connected, compact, and oriented, so $H_0(P;\mathbb Z)=H^0(P;\mathbb Z)=\mathbb Z$. By [F6], $H^1(P;\mathbb Z)$ is an extension of $\operatorname{Hom}(0,\mathbb Z)=0$ by $\operatorname{Ext}^1(\mathbb Z,\mathbb Z)=0$, so $H^1(P;\mathbb Z)=0$. The AC assumption is the one in [A1], needed for [F6]. [given, A1, F6, step 1.2, algebra]

3.1 By [F5] and step 2.1, $H_2(P;\mathbb Z)=0$ and $H_3(P;\mathbb Z)\cong H^0(P;\mathbb Z)=\mathbb Z$. For $i>3$, [F5] identifies $H_i(P;\mathbb Z)$ with negative-degree cohomology, which is zero. Together with steps 1.2 and 2.1, this is exactly the integral homology of $S^3$. Step 1.1 shows that $P$ is not simply connected, so it is not $S^3$. The use of [F5] requires [A1]. [A1, F5, given, step 1.1, step 1.2, step 2.1] ∎

