---
id: lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree
kind: lemma
title: "Rational sphere homotopy below the first unstable degree"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - lem-high-relative-cells-do-not-change-lower-homotopy
  - lem-rationalization-is-exact-and-commutes-with-singular-homology
  - cor-rational-homology-vanishing-implies-rational-homotopy-vanishing-in-a-finite-range
  - lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison
  - thm-eilenberg-maclane-spaces-represent-singular-cohomology
  - thm-absolute-hurewicz-theorem
  - thm-mapping-path-factorization
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-cw-approximation-of-an-arbitrary-space
  - lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
  - thm-homological-serre-spectral-sequence
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - cor-homology-of-spheres
  - thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology
  - def-axiom-of-choice
dependency_level: 5
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Milnor and Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Theorem 18.3 and preceding discussion, printed pp.207–208; finite-complex comparison only, not a proof supplier for the arbitrary-CW theorem"
    - title: "Allen Hatcher, Spectral Sequences, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf"
      locator: "§1.2 Theorem 1.21 and its proof, printed pp.32–33; comparison with the rational sphere calculation, while the stated torsion-only range is proved locally"
verification:
  precheck: pass
---

## Statement

Assume AC. For m≥2 and 1≤i≤2m−2, π_i(S^m)⊗Q is Q if i=m and zero otherwise. Hurewicz after tensoring with Q is an isomorphism in all these degrees; in degree m its integral version is the standard orientation-generator isomorphism; no finiteness of the torsion groups is asserted.

## Facts & Assumptions

**Given:** AC; integers $m\ge2$ and $1\le i\le 2m-2$; the integral orientation class of $S^m$ representing a based map $f:S^m\to K(\mathbb Z,m)$; and the strict homotopy fiber $F$ of $f$ in its actual mapping-path fibration.

[F1] The standard CW pair $(S^m,*)$ has one relative cell of dimension $m$, so the high-relative-cells lemma gives $(m-1)$-connectivity ([[lem-high-relative-cells-do-not-change-lower-homotopy]]). Universal evaluation and the absolute Hurewicz theorem identify the degree-$m$ homotopy map of the orientation class with an isomorphism, and the mapping-path fibration exact sequence shows the fiber $F$ is $m$-connected ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]], [[thm-absolute-hurewicz-theorem]], [[thm-mapping-path-factorization]], [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F2] The rational $K(\mathbb Z,m)$ calculation gives $H^a(K(\mathbb Z,m);\mathbb Q)=0$ for $0<a<2m$, $a\ne m$, and $H_m(K(\mathbb Z,m);\mathbb Q)=\mathbb Q$; field duality with AC turns zero cohomology into zero homology below $2m$ ([[lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]], [[def-axiom-of-choice]]).

[F3] The rational Serre sequence of $F\to E_f\simeq S^m\to K(\mathbb Z,m)$ has no outgoing differentials from column zero, and strong convergence identifies $E^\infty_{0,b}$ with the bottom filtration subgroup of $H_b(S^m;\mathbb Q)=0$ for $m<b\le2m-2$ ([[thm-homological-serre-spectral-sequence]], [[cor-homology-of-spheres]]).

[F4] [[cor-rational-homology-vanishing-implies-rational-homotopy-vanishing-in-a-finite-range]] converts vanishing rational homology of the simply connected strict fiber $F$ into vanishing rational homotopy through $2m-2$.

[F5] A weak CW approximation preserves homotopy and integral homology, hence rational homology; absolute Hurewicz on its $m$-connected CW source gives lower homology vanishing for $F$ ([[thm-cw-approximation-of-an-arbitrary-space]], [[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]], [[thm-absolute-hurewicz-theorem]], [[lem-rationalization-is-exact-and-commutes-with-singular-homology]]). Homotopy equivalence identifies the total-space homology with sphere homology ([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]).

## Proof

**Proof technique:** direct.

1.1 Give $S^m$ its CW structure with a basepoint vertex and one $m$-cell. The high-relative-cells lemma applied to $(S^m,*)$ makes it $(m-1)$-connected, so the absolute first-Hurewicz theorem applies in degree $m$. Represent the integral orientation class of S^m by a based map f:S^m→K(Z,m). Universal evaluation and first Hurewicz make its degree-m homotopy map an isomorphism. Let F be its strict homotopy fiber. The exact sequence shows F is m-connected. The locally rederived rational cohomology calculation in the rational $K(\mathbb Z,n)$ calculation gives H^a(K(Z,m);Q)=0 for 0<a<2m, a≠m. Its full algebraic-dual identification with homology implies H_a(K(Z,m);Q)=0 in those degrees: a nonzero vector would have a nonzero detecting functional under AC. H_m(K(Z,m);Q)=Q also follows directly from integral first Hurewicz and the rationalization lemma. No finite-dimensional hypothesis is being inferred without proof. In particular H_{d+1}(K(Z,m);Q)=0 for m+1≤d≤2m−2. [given, F1, F2]

2.1 A weak CW approximation of F and integral first Hurewicz give H_b(F;Q)=0 for 0<b≤m. We prove the same for every m+1≤b≤2m−2 by induction. Suppose all lower positive fiber groups vanish, and consider E^2_{0,b}=H_b(F;Q) in the rational Serre sequence of F→E_f≃S^m→K(Z,m). There are no outgoing differentials from column zero. An incoming d_r, r≥2, has source (r,b−r+1). If b−r+1 is positive, the source is zero by lower fiber vanishing and the rationalization lemma; if it is negative there is no source. The remaining case r=b+1 has source H_{b+1}(K(Z,m);Q), which is zero by the preceding paragraph. Thus E^∞_{0,b}=H_b(F;Q). Strong convergence makes this the bottom filtration subgroup of H_b(E_f;Q)=H_b(S^m;Q)=0, so the fiber group is zero. This completes the induction. [step 1.1, F3, F5]

3.1 Apply the rational homology-vanishing corollary to F through degree 2m−2. Its positive rational homotopy groups vanish there. For i>m, the fiber exact sequence identifies π_i(F) with π_i(S^m), since K(Z,m) has zero groups in degrees i and i+1. Hence these sphere groups rationally vanish. Degrees below m vanish by connectivity, and degree m is the integral orientation generator by first Hurewicz. For m=2 the interval m+1≤b≤2m−2 is empty and the assertion is exactly first Hurewicz. In every other stated degree both the rationalized homotopy group and rational homology group are zero, so the rationalized Hurewicz map is their isomorphism. We assert torsion, not finiteness, of these homotopy groups. [step 2.1, F1, F4] ∎
