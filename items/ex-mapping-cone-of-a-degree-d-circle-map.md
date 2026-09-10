---
id: ex-mapping-cone-of-a-degree-d-circle-map
kind: example
title: Mapping cone of a degree d circle map
deps: ["def-mapping-cylinder-and-mapping-cone", "def-degree-of-a-self-map-of-an-oriented-sphere", "def-local-degree-at-an-isolated-preimage", "thm-global-sphere-degree-is-the-sum-of-local-degrees", "prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps", "thm-cellular-boundary-is-the-incidence-degree-matrix", "thm-cellular-homology-computes-singular-homology", "thm-seifert-van-kampen", "thm-fundamental-group-of-the-circle"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 4 §5 p.38 cone attachment argument; local cellular calculation
    - title: Hatcher, Algebraic Topology, Example 2.32
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: §2.2, Example 2.32, p.137
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

For $d\in\mathbb Z$ let $f_d:\mathbb R/\mathbb Z\to\mathbb R/\mathbb Z$, $f_d([t])=[dt]$. Its unreduced mapping cone has
$$H_0=\mathbb Z,\qquad H_1=\mathbb Z/d\mathbb Z,\qquad H_2=\ker(d:\mathbb Z\to\mathbb Z),\qquad H_j=0\ (j>2),$$
and $\pi_1\cong\mathbb Z/d\mathbb Z$. For d=0, $\pi_1=H_1=H_2=\mathbb Z$; for d=±1 the fundamental group and reduced homology vanish. All homology coefficients here are integers.

## Facts & Assumptions

[F1] The unreduced cone attaches the cone on the source circle to the target. [[def-mapping-cylinder-and-mapping-cone]]

[F2] Degree is the integral sphere-homology multiplier. [[def-degree-of-a-self-map-of-an-oriented-sphere]]

[F3] Local degree is the multiplier on the local oriented punctured-pair groups. [[def-local-degree-at-an-isolated-preimage]]

[F4] Degree is the sum over a finite fibre. [[thm-global-sphere-degree-is-the-sum-of-local-degrees]]

[F5] In dimension one identity, constant and reflection degrees are 1,0,−1. [[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]]

[F6] The cellular boundary coefficient is the attaching incidence degree. [[thm-cellular-boundary-is-the-incidence-degree-matrix]]

[F7] Cellular homology equals singular homology. [[thm-cellular-homology-computes-singular-homology]]

[F8] An open path-connected cover with path-connected intersection gives the fundamental-group pushout. [[thm-seifert-van-kampen]]

[F9] The standard winding class identifies π1(R/Z) with Z. [[thm-fundamental-group-of-the-circle]]


## Verification

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 The map $h([t])=e^{2\pi it}$ identifies the quotient circle with the unit circle: it is a continuous bijection, and inverse angular charts are continuous on arcs, including arcs crossing the quotient seam. Give it the counterclockwise orientation. Then $h f_d h^{-1}(z)=z^d$. For d>0 the fibre over 1 is $e^{2\pi ik/d}$, 0≤k<d. In positive angular coordinates at each preimage and at 1, the map is u↦du. Interpolating the positive coefficient d to 1 on a sufficiently small arc gives a homotopy of punctured pairs. Thus F3 identifies its local multiplier with that of an orientation-preserving circle rotation, namely +1 by the identity and rotation homotopy, or the singleton-fibre case of F4. For d<0 the same calculation reduces to angular reflection, whose degree is −1 by the circle clause of F5. Hence F4 gives degree d for every nonzero d. For d=0 the map is constant and F5 gives degree zero. [F2, F3, F4, F5]

1.2 For the fundamental group take U to be the target circle together with cone heights s<2/3, and V to be cone heights s>1/3 including its tip. They are open in the quotient, their union is the cone space, and their intersection is a circle times (1/3,2/3). U retracts to the target by decreasing height, V contracts to the tip by increasing height, and the intersection retracts to its circle. All are path-connected. Choose the basepoint at source [0], height 1/2 and transport to the target vertex along the height segment. The overlap generator maps to a^d in π1(U) by F9 and trivially in π1(V). Thus F8 gives the presentation $\langle a\mid a^d=1\rangle=\mathbb Z/d\mathbb Z$. This calculation does not infer H1 from π1. [F1, F8, F9]

2.1 The cone on the source circle is the disk via $[z,s]\mapsto(1-s)z$; its boundary at s=0 attaches by f_d. Thus the mapping cone has one vertex, one loop edge and one 2-cell. F2 and step 1.1 identify its attaching coefficient in F6 as d, so its cellular complex is $0\to\mathbb Z\xrightarrow{d}\mathbb Z\xrightarrow{0}\mathbb Z\to0$. Direct kernels and images give the stated H0,H1,H2 and vanishing above dimension two, and F7 identifies them with singular homology. [F1, F2, F6, F7, step 1.1]

3.1 When d=0 the cellular map is zero, so H1=H2=Z and the group relation is empty. When d=±1 the cellular map is an isomorphism and the group relation kills a, giving the claimed vanishings. For instance d=−2 gives H1=π1=Z/2Z and H2=0. No inference of contractibility from these invariants is made. [step 2.1, step 1.2] ∎
