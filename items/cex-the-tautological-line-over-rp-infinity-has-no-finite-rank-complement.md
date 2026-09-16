---
id: cex-the-tautological-line-over-rp-infinity-has-no-finite-rank-complement
kind: counterexample
title: The tautological line over RP∞ has no finite-rank complement
status: published
origin: pipeline
deps: [ex-tautological-real-and-complex-lines-over-projective-space, thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians, thm-schubert-cells-give-the-stable-grassmannian-cw-structure, lem-real-projective-space-cellular-homology-and-pinch-map, thm-cellular-homology-computes-singular-homology, cor-homotopic-maps-induce-the-same-map-on-singular-homology, def-cw-complex-with-closure-finiteness-and-weak-topology, def-compactly-generated-conventions-for-based-homotopy, def-axiom-of-choice]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, discussion after Proposition 1.4 and Example 3.6"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Finite complements over compact bases, printed pp.13–14; nontrivial powers of the canonical class, printed pp.77–78"
    - title: "Milnor and Stasheff, Characteristic Classes, Problem 5-E"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Canonical line over infinite real projective space and finite complements"
---

## Statement refuted

**False claim:** compactness may be omitted from the finite-rank complement
theorem; in particular, every finite-rank bundle over a paracompact Hausdorff
CGWH base has a finite-rank complementary bundle inside a finite trivial
bundle.

Assume AC. The tautological real line $\gamma$ over
$\mathbb RP^\infty$ refutes this claim: there is no finite-rank bundle $\eta$
such that $\gamma\oplus\eta$ is trivial.

## Facts & Assumptions

**Given:** AC and the tautological line $\gamma\to\mathbb RP^\infty$.

[F1] $\mathbb RP^\infty=\operatorname{Gr}_1(\mathbb R^\infty)$, its tautological line is $\gamma$, and its stable classifying map is the identity ([[ex-tautological-real-and-complex-lines-over-projective-space]]).

[F2] Under AC, pullback along stable Grassmannian maps gives a bijection between homotopy classes of maps and numerable vector-bundle isomorphism classes; the proof also establishes that the stable Grassmannian is paracompact ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

[F3] The Schubert cells give $\mathbb RP^\infty=\operatorname{Gr}_1(\mathbb R^\infty)$ its stable weak CW structure ([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]).

[F4] The standard CW structure on each $\mathbb RP^m$ has one cell in each degree $0,\ldots,m$, and every cellular differential is zero over $\mathbb F_2$ ([[lem-real-projective-space-cellular-homology-and-pinch-map]]).

[F5] Cellular homology computes singular homology, naturally for cellular maps ([[thm-cellular-homology-computes-singular-homology]]), and homotopic maps induce the same singular-homology map ([[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

[F6] A CW complex is Hausdorff and has the weak topology with respect to its closed cells ([[def-cw-complex-with-closure-finiteness-and-weak-topology]]); CGWH means compactly generated and weak Hausdorff ([[def-compactly-generated-conventions-for-based-homotopy]]).

[A1] AC means that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Counterexample

**Proof technique:** contradiction.

1.1 Suppose for contradiction that a rank-$r$ bundle $\eta$ satisfies $\gamma\oplus\eta\cong\mathbb RP^\infty\times\mathbb R^{r+1}$. The inclusion of the first summand followed by this isomorphism is a fiberwise-linear embedding $e:\gamma\hookrightarrow\mathbb RP^\infty\times\mathbb R^{r+1}$. [assume-contra, construct]

1.2 The base is in the scope of [F2]. It is paracompact by [F2] and a Hausdorff CW complex by [F3] and [F6]. To see compact generation directly, if $A$ pulls back to a closed set under every compact-Hausdorff test map, then its pullback under every characteristic disk is closed; since a characteristic disk surjects onto its closed cell and the latter is Hausdorff, $A$ meets every closed cell in a closed set, so the weak topology makes $A$ closed. Hausdorffness makes compact images closed, hence the space is also weak Hausdorff. Thus it is CGWH. [F2, F3, F6]

1.3 The rank-one Schubert symbols in [F3] give exactly one cell in every nonnegative dimension, with $\mathbb RP^m$ as the $m$-skeleton. By [F4], the differential between any two such cells is zero over $\mathbb F_2$, since it already occurs in a sufficiently large finite skeleton. Hence [F5] gives $H_k(\mathbb RP^\infty;\mathbb F_2)\cong\mathbb F_2$ for every $k\geq0$, while $H_k(\mathbb RP^r;\mathbb F_2)=0$ for $k>r$. [F3, F4, F5]

2.1 Send $x$ to the image line $e(\gamma_x)\subseteq\mathbb R^{r+1}$. In a local nonzero frame $s$ for $\gamma$, this line is represented by the continuous nonzero vector $e(s(x))$, so the resulting map $f:\mathbb RP^\infty\to\operatorname{Gr}_1(\mathbb R^{r+1})=\mathbb RP^r$ is continuous and $f^*\gamma_r\cong\gamma$. If $j:\mathbb RP^r\hookrightarrow\mathbb RP^\infty$ is the standard inclusion, then $(jf)^*\gamma\cong\gamma$. [F1, step 1.1, construct]

3.1 The identity also pulls $\gamma$ back to itself by [F1]. The injective direction of the classification bijection [F2], applied using step 1.2, therefore gives $jf\simeq\operatorname{id}_{\mathbb RP^\infty}$. This is the sole use of AC in the counterexample. [F1, F2, A1, step 1.2, step 2.1]

4.1 Put $k=r+1$. On $H_k(-;\mathbb F_2)$, the map $(jf)_*=j_*f_*$ is zero because it factors through the zero group $H_k(\mathbb RP^r;\mathbb F_2)$ from step 1.3. But [F5] and the homotopy in step 3.1 say that $(jf)_*$ is the identity on the nonzero group $H_k(\mathbb RP^\infty;\mathbb F_2)\cong\mathbb F_2$, a contradiction. [F5, step 3.1, step 1.3]

5.1 Therefore the assumed finite-rank complement $\eta$ cannot exist. The witness is paracompact Hausdorff and CGWH by step 1.2, so it specifically shows that those hypotheses do not replace compactness in the finite-rank complement theorem. [step 1.1, step 1.2, step 4.1, discharge-contradiction] ∎
