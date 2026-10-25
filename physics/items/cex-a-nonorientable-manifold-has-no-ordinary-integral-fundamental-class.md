---
id: "cex-a-nonorientable-manifold-has-no-ordinary-integral-fundamental-class"
kind: "counterexample"
title: "A nonorientable closed manifold has no integral fundamental class"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["ex-mod-two-duality-for-real-projective-space","lem-real-projective-space-cellular-homology-and-pinch-map","thm-cellular-homology-computes-singular-homology","thm-local-homology-detects-interior-points-boundary-points-and-dimension","thm-top-homology-characterizes-compact-orientable-manifolds"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Corollary 3.28
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

The real projective plane $P=\mathbb {RP}^2$ is a nonempty connected compact boundaryless $2$-manifold, but
$$H_2(P;\mathbb Z)=0.$$
It has no ordinary integral class restricting to a generator of every local top-homology group, and is not integrally orientable. Its canonical mod-two fundamental class nevertheless exists and is the nonzero element of $H_2(P;\mathbb F_2)\cong\mathbb F_2$. This counterexample requires no AC.

## Facts & Assumptions

[F1] The choice-free clauses of [[ex-mod-two-duality-for-real-projective-space]] prove the compact connected boundaryless manifold hypotheses, canonical mod-two orientation and fundamental-class existence. Its separate cap-isomorphism clause assumes AC and is not used here.

[F2] The choice-free cellular calculation in [[lem-real-projective-space-cellular-homology-and-pinch-map]] gives one integral cell in each degree $0,1,2$, with $d_2=2$ and $d_1=0$, and computes $H_2(P;\mathbb F_2)=\mathbb F_2$. Its separate field-cohomology clause is not used.

[F3] [[thm-cellular-homology-computes-singular-homology]] identifies the computed cellular groups with singular homology.

[F4] [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]] gives $H_2(P,P\setminus\{x\};\mathbb Z)=\mathbb Z$ at each point of this boundaryless manifold.

[F5] [[thm-top-homology-characterizes-compact-orientable-manifolds]] says that for a connected compact integrally oriented manifold its top class maps onto each local stalk, without AC.

## Proof

**Given:** $P=\mathbb {RP}^2$ and integral coefficients unless otherwise indicated.

1.1 Apply the choice-free part of [F1] with $n=2$. It makes $P$ a nonempty compact connected boundaryless $2$-manifold and supplies a canonical mod-two fundamental class. In the quotient model a specified point is $x=[1:0:0]$. By [F4], its local integral top-homology group is infinite cyclic and therefore has nonzero generators. The same holds at every point. [F1, F4, given]

1.2 The integral cellular chain complex of [F2] is $$0\longrightarrow\mathbb Z\xrightarrow{\;2\;}\mathbb Z\xrightarrow{\;0\;}\mathbb Z\longrightarrow0,$$ with the three nonzero terms in degrees $2,1,0$. Multiplication by two is injective on $\mathbb Z$, so the degree-two cycle group is zero. There is no degree-three cell and hence no incoming boundary. Therefore [F3] gives $$H_2(P;\mathbb Z)=\ker(2)/0=0.$$ For clarity the same complex gives $H_1(P;\mathbb Z)=\mathbb Z/2$ and $H_0(P;\mathbb Z)=\mathbb Z$; the failure is in the required top degree, not in connectedness. [F2, F3, given]

2.1 Every homomorphism from the zero group $H_2(P;\mathbb Z)$ has image zero. In particular restriction at the explicit point $x$ of step 1.1 cannot hit either generator of its infinite cyclic stalk. Thus no global integral class can have the required generator restrictions at all points. If $P$ had an integral orientation, [F5] with the hypotheses in step 1.1 would make that restriction onto, contradicting step 1.2. Hence $P$ is nonorientable and witnesses the failure of an ordinary integral fundamental class without the orientation hypothesis. [F5, step 1.1, step 1.2]

2.2 Modulo two, the differential $2$ in step 1.2 becomes zero, as established through characteristic coefficient maps in [F2]; the entire top cellular group survives as $H_2(P;\mathbb F_2)=\mathbb F_2$. The canonical class from step 1.1 restricts to the nonzero mod-two local generator, so cannot be zero. It is therefore the unique nonzero element of this one-dimensional group. This is a change of coefficients, not an integral generator hidden by an orientation convention. [F1, F2, step 1.1, step 1.2]

3.1 The example uses the positive even dimension two, not the zero-dimensional point $\mathbb {RP}^0$, which is orientable. The zero integral top group in step 1.2 is compared with a nonzero stalk at a specified point, so the failure is not vacuous. The two endpoints of the one-cell attach to the sole zero-cell, giving $d_1=0$, while the top attaching incidence is $2$, not zero; both are covered by [F2]'s full attaching calculation. Degenerate singular chains are included in the comparison [F3]. No top cap isomorphism or field-cohomology dualization is used, and every clause of [F1] and [F2] invoked above is explicitly choice-free. [F1, F2, F3, step 1.1, step 1.2, step 2.1, step 2.2] ∎
