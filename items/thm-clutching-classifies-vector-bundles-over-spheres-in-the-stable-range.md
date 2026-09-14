---
id: thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range
kind: theorem
title: Clutching classifies vector bundles over spheres in the stable range
status: published
origin: pipeline
deps: [def-clutching-construction-for-bundles-over-a-suspension, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Propositions 1.11 and 1.14"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Complex and real clutching analysis, printed pp.23–27"
    - title: "MIT 18.906 notes, Lectures 17 and 21"
      url: https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Clutching and stable Stiefel fibrations, printed pp.55–57 and 69–72"
---

## Statement

For $q\geq1$, rank-$n$ $\mathbb F$-bundles over $S^q$ are obtained from
clutching maps $S^{q-1}\to\operatorname{GL}_n(\mathbb F)$. Two clutching
maps give isomorphic bundles exactly when they differ by homotopy and by left
and right changes of hemisphere trivialization that extend over the disks.

For $\mathbb F=\mathbb C$ and $q\geq2$, the classification is
$\pi_{q-1}(\operatorname{GL}_n(\mathbb C))$, and stabilization is an
isomorphism for $q\leq2n$. For $\mathbb F=\mathbb R$, it is stable for
$q<n$, with the $q=1$ component/orbit case kept separate. Rank zero gives
one class.

## Facts & Assumptions

**Given:** $q\geq1$, $n\geq0$, and $\mathbb F=\mathbb R$ or $\mathbb C$.

[F1] The two-hemisphere clutching convention and its transition relation are
fixed in [[def-clutching-construction-for-bundles-over-a-suspension]].

[F2] A fibration gives the exact sequence of homotopy groups, including the
pointed low-degree terms
([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

## Proof

**Proof technique:** direct.

1.1 A finite-rank bundle $E$ over a disk $D$ is trivial without a choice principle. Pull it back along the radial contraction $H:D\times I\to D$. Choose finitely many linear charts covering the compact metric space $D\times I$, shrink them by a Lebesgue-number refinement so that the closures of the shrunken opens lie in the original charts, and normalize the finitely many distance-to-complement functions. Their supports lie in the original charts, so the square-root-weighted chart formula embeds $H^*E$ in one finite trivial bundle. Let $P(x,t)$ be the orthogonal projection onto the resulting image plane. Uniform continuity on $D\times I$ gives a subdivision $0=t_0<\cdots<t_m=1$ with $\lVert P(x,t_{j+1})-P(x,t_j)\rVert<1$ for every $x$. Projection from $\operatorname{im}P(x,t_j)$ to $\operatorname{im}P(x,t_{j+1})$ is then injective—if $v$ is killed, $\lVert v\rVert=\lVert(P_j-P_{j+1})v\rVert<\lVert v\rVert$—and hence is an isomorphism between equal finite dimensions. These continuous bundle isomorphisms compose to identify the restriction at $t=0$ with the constant restriction at $t=1$. Thus $E$ is trivial. Apply this to the two closed hemispheres of $S^q$. Their trivializations differ on the equator by a continuous $g:S^{q-1}\to\operatorname{GL}_n(\mathbb F)$, and [F1] reconstructs the bundle as $E_g$. [F1, construct, algebra]

1.2 Polar normalization $A\mapsto A(A^*A)^{-1/2}$ deformation retracts $\operatorname{GL}_n(\mathbb C)$ to $U(n)$ and $\operatorname{GL}_n(\mathbb R)$ to $O(n)$, preserving the two real determinant components. The last-column maps give fibrations $U(n)\to U(n+1)\to S^{2n+1}$ and $O(n)\to O(n+1)\to S^n$. Since the homotopy groups of $S^d$ vanish below $d$, [F2] makes $\pi_{q-1}U(n)\to\pi_{q-1}U(n+1)$ an isomorphism for $q\leq2n$, and the orthogonal map an isomorphism for $q<n$. [F2, algebra]

2.1 Let $E_g$ and $E_h$ be clutched bundles. An isomorphism, written in the chosen upper and lower trivializations, has matrices $A_\pm:D_\pm^q\to\operatorname{GL}_n(\mathbb F)$ and compatibility $A_-g=hA_+$ on the equator, hence $h=A_-gA_+^{-1}$. Conversely, any such pair of disk-extending matrices defines compatible isomorphisms on the two trivial bundles and therefore an isomorphism of the quotients. This proves both directions of the left/right gauge criterion. [F1, step 1.1, algebra]

3.1 A homotopy $G:S^{q-1}\times I\to\operatorname{GL}_n(\mathbb F)$ clutches a bundle over $S^q\times I$. The finite compact version of the endpoint transport in step 1.1 makes its endpoint restrictions $E_{G_0}$ and $E_{G_1}$ isomorphic. Conversely, after fixing hemisphere trivializations, step 2.1 shows that all ambiguity is precisely homotopy together with disk-extending left and right gauges. Thus the stated equivalence classes classify the bundles. [F1, step 1.1, step 2.1]

4.1 For complex bundles and $q\geq2$, path-connectedness of $\operatorname{GL}_n(\mathbb C)$ turns the equivalence in step 3.1 into the based group $\pi_{q-1}$; disk gauges restrict to nullhomotopic maps, and the fundamental group of a topological group is abelian in the loop case. For real $q>1$, a clutching map lies in one determinant component; choosing an orientation moves it into $\operatorname{GL}_n^+$, while forgetting orientation takes the orbit under conjugation by a reflection. The stabilization in step 1.2 respects this orbit action, giving the stated real stable range. For $q=1$, maps from $S^0$ retain the separate component/orbit description. If $n=0$, the structure group is a point and [F1] gives the unique rank-zero bundle. [F1, step 3.1, step 1.2] ∎
