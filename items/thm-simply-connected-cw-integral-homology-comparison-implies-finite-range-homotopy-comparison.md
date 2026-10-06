---
id: thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison
kind: theorem
title: "Integral homology comparison gives finite-range homotopy comparison for simply connected CW complexes"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - thm-cellular-approximation-for-maps-of-cw-pairs
  - lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - thm-long-exact-sequence-of-relative-homotopy-groups
  - thm-relative-hurewicz-theorem
  - prop-higher-homotopy-basepoint-transport-and-moving-homotopies
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf"
      locator: "Theorem 4.32 and Corollary 4.33, printed pp.366–368; finite-range endpoint proved locally"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let N≥2 and let f:(X,x₀)→(Y,y₀) be a based continuous map between nonempty path-connected simply connected CW complexes. Suppose f_*:H_i(X;Z)→H_i(Y;Z) is an isomorphism for 0≤i<N and a surjection for i=N. Then f_*:π_i(X,x₀)→π_i(Y,y₀) is an isomorphism for 1≤i<N and a surjection for i=N. No conclusion about π_{N+1} or homotopy equivalence of the spaces is included.

## Facts & Assumptions

**Given:** AC; an integer $N\ge2$; nonempty path-connected simply connected CW complexes $X,Y$ with based continuous map $f:(X,x_0)\to(Y,y_0)$; and $f_*:H_i(X;\mathbb Z)\to H_i(Y;\mathbb Z)$ an isomorphism for $0\le i<N$ and a surjection for $i=N$.

[F1] A based map of CW complexes is homotopic to a cellular map, and mapping cylinders of cellular maps of CW complexes are CW complexes with the source as a subcomplex and the target a deformation retract ([[thm-cellular-approximation-for-maps-of-cw-pairs]], [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]]).

[F2] The singular homology of a pair is related by a long exact sequence, and homotopic maps induce the same homology map ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

[F3] The relative homotopy groups of a pair fit in a long exact sequence, and relative Hurewicz identifies the first nonzero relative homotopy group of an $(m-1)$-connected pair with the first nonzero relative integral homology when the pair is simply connected in the appropriate sense ([[thm-long-exact-sequence-of-relative-homotopy-groups]], [[thm-relative-hurewicz-theorem]]); based homotopy groups transport along homotopy tracks ([[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]).

[F4] AC underlies the CW approximation and cellular-approximation selections used to put the map in cellular form ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Use cellular approximation to replace $f$ by a cellular map $g$ through a homotopy. If the homotopy moves the basepoint, its track gives the canonical target basepoint-transport isomorphism, so both the hypotheses and conclusions transfer between $f$ and $g$. Form the CW mapping cylinder $M_g$, with source inclusion $j:X\hookrightarrow M_g$ and target deformation retraction $r:M_g\to Y$, so $rj=g$. The homology exact sequence contains $$H_i(X)\xrightarrow{j_*}H_i(M_g)\longrightarrow H_i(M_g,X)\longrightarrow H_{i-1}(X)\xrightarrow{j_*}H_{i-1}(M_g).$$ For $1\le i\le N$, the first arrow is surjective and the last injective. Exactness therefore forces $H_i(M_g,X)=0$. The component condition gives $H_0(M_g,X)=0$ as well. [given, F1, F2]

2.1 Both $X$ and $M_g$ are path connected and simply connected. The relative homotopy exact sequence consequently gives $\pi_1(M_g,X)=*$: every relative path has its initial endpoint connected to the basepoint inside $X$, and the resulting based loop is null in $M_g$. Induct on $m=2,\ldots,N$. If the relative groups below $m$ vanish, the CW pair $(M_g,X)$ is $(m-1)$-connected, and $X$ is nonempty simply connected. Relative Hurewicz identifies $\pi_m(M_g,X)$ with $H_m(M_g,X)=0$. This proves all relative groups through $N$ vanish. [step 1.1, F3]

3.1 For $2\le i<N$, the two adjacent relative groups in $$\pi_{i+1}(M_g,X)\longrightarrow\pi_i(X)\xrightarrow{j_*} \pi_i(M_g)\longrightarrow\pi_i(M_g,X)$$ vanish, so $j_*$ is injective and surjective. At $i=N$, vanishing of the last term gives surjectivity. At $i=1$ both absolute groups are trivial. Composition with $r_*$ and the basepoint-transport isomorphism proves the claims for $f$. Every Hurewicz invocation is within its stated simple-connectivity range. [step 2.1, F3, F4]

4.1 **Endpoint justification.** Homology isomorphisms through degree $L$ imply homotopy isomorphisms only through degree $L-1$ by this argument: apply the lemma with $N=L$. To deduce an isomorphism at $L$, one also needs homology surjectivity at $L+1$. This loss of one degree is essential to this proof, since injectivity at $L$ uses $\pi_{L+1}(M_g,X)$. [step 3.1] ∎
