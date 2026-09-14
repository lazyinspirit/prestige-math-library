---
id: cex-serre-page-collapse-does-not-split-the-abutment
kind: counterexample
title: A stable Serre diagonal need not split its abutment
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [cor-classifying-space-of-a-discrete-group-is-a-k-g-one, thm-mapping-path-factorization, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, prop-the-first-hurewicz-map-in-degree-one-is-abelianization, thm-homological-serre-spectral-sequence, prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion, def-axiom-of-choice]
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
sources:
  references:
    - title: Hatcher, Algebraic Topology, extension warning before Example 5.4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf
      locator: Stable terms and the nonsplit 0→Z→Z→Z/n extension, printed p. 527
---

## Statement

Assume the Axiom of Choice and fix $n\geq2$. Let
$q:B\mathbb Z\to BC_n$ induce the quotient $\mathbb Z\twoheadrightarrow C_n$,
and let
$$F_q\longrightarrow E_q\xrightarrow{p_q}BC_n$$
be its mapping-path fibration. Then $E_q\simeq B\mathbb Z$, the fiber is
connected, and, under the fiber-inclusion identification,
$$\pi_1(F_q)=n\mathbb Z\subseteq\mathbb Z=\pi_1(E_q),\qquad\pi_k(F_q)=0\quad(k>1).$$
The total-degree-one stable Serre pieces are
$$E^\infty_{0,1}=n\mathbb Z\cong\mathbb Z,\qquad E^\infty_{1,0}=\mathbb Z/n,$$
but $H_1(E_q;\mathbb Z)=\mathbb Z$ has the nonsplit filtration
$0\subset n\mathbb Z\subset\mathbb Z$. Thus knowing the stable Serre diagonal
does not split the abutment.

## Facts & Assumptions

**Given:** AC, $n\geq2$, the quotient-induced based map $q$, and integral coefficients.

[A1] [[def-axiom-of-choice]] is assumed exactly for the classifying-space models in [F1].

[F1] [[cor-classifying-space-of-a-discrete-group-is-a-k-g-one]] identifies $B\mathbb Z$ and $BC_n$ as connected CW $K(\mathbb Z,1)$ and $K(C_n,1)$ models under AC.

[F2] [[thm-mapping-path-factorization]] factors $q=p_qj_q$, with $j_q$ a homotopy equivalence and $p_q$ a Hurewicz fibration.

[F3] [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]] supplies the group and component exact sequence of this mapping-path fibration.

[F4] [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]] computes and compares first homology of the connected fiber and total space.

[F5] [[thm-homological-serre-spectral-sequence]] supplies the finite total-degree-one filtration and its stable associated-graded pieces. [[prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion]] identifies the first filtration subgroup with the image of fiber inclusion.

## Verification

**Proof technique:** compute the homotopy fiber, then read the actual first Serre filtration before testing whether its extension splits.

1.1 Since $j_q$ is a homotopy equivalence, [F1, F2] identify $\pi_1(E_q)$ with $\mathbb Z$, all its higher homotopy groups with zero, and $(p_q)_*$ with the quotient $\mathbb Z\twoheadrightarrow C_n$. The component end of [F3] is $$\mathbb Z\twoheadrightarrow C_n\longrightarrow\pi_0(F_q) \longrightarrow *.$$ The first map is onto, so exactness gives one fiber component. The group part then gives an injection $$\pi_1(F_q)\hookrightarrow\mathbb Z$$ with image the kernel $n\mathbb Z$. For $k>1$, the adjacent homotopy groups of both $E_q$ and $BC_n$ vanish, so [F3] gives $\pi_k(F_q)=0$. [A1, F1, F2, F3]

2.1 All three spaces used here are connected. Their fundamental groups $n\mathbb Z$, $\mathbb Z$, and $C_n$ are abelian, so [F4] identifies their first homology groups with those same groups. Naturality of Hurewicz identifies the fiber-inclusion map on first homology with $$n\mathbb Z\hookrightarrow\mathbb Z.$$ By [F5], its image is precisely the first Serre filtration term $F_0H_1(E_q)=n\mathbb Z$. Strong convergence in total degree one therefore gives $$E^\infty_{0,1}=F_0H_1(E_q)=n\mathbb Z,\qquad E^\infty_{1,0}=H_1(E_q)/F_0H_1(E_q)=\mathbb Z/n.$$ This uses the actual edge image, so it does not assume that either stable term already splits off. [F4, F5, step 1.1]

3.1 If $0\subset n\mathbb Z\subset\mathbb Z$ split, a section of $\mathbb Z\twoheadrightarrow\mathbb Z/n$ would embed a nonzero element of order $n$ in the torsion-free group $\mathbb Z$, which is impossible for $n\geq2$. Thus the abutment is not the direct sum $n\mathbb Z\oplus\mathbb Z/n$, even though these are its two stable pieces. The witness is explicit, not merely an appeal to the existence of extension problems. [step 2.1]

4.1 The fiber and total space are nonempty and connected. The zero higher homotopy groups, zero and first filtration terms, both total-degree-one stable positions, both maps in the short exact filtration, and the first permitted case $n=2$ were checked. The excluded value $n=1$ would give a trivial quotient and no nonsplit extension. AC is used only by [F1]; mapping paths, the homotopy exact sequence, Hurewicz, Serre filtration, and the finite torsion argument add no choice. No converse is asserted. [A1, F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1] ∎

## Source notes

[Hatcher's extension warning](https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf), printed p. 527, uses the nonsplit sequence $0\to\mathbb Z\to\mathbb Z\to\mathbb Z/n\to0$ to warn that stable terms need not sum to the abutment. Steps 1.1–3.1 realize exactly that extension as an actual Serre filtration.
