---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2.json
  precheck: pass
id: thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2
kind: theorem
title: "The finite Thom detector is a homotopy isomorphism through 2r−2"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - def-finite-thom-classifying-detector-map
  - lem-universal-real-thom-spaces-are-r-minus-one-connected
  - thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1
  - cor-finite-range-comparison-for-arbitrary-target
  - thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison
  - thm-product-universal-property
  - prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant
  - def-eilenberg-maclane-space
  - thm-eilenberg-maclane-spaces-represent-singular-cohomology
dependency_level: 12
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf"
      locator: "Theorem 4.32 and Corollary 4.33, printed pp. 366–368: relative Hurewicz and finite-range comparison method."

---

## Statement

Assume AC. For $r\ge2$, $f_r$ induces $\pi_i(T_r)\cong\pi_i(P_r)$ for $1\le i\le2r-2$. On $\pi_{r+n}$, for $0\le n\le r-2$, the target is $\mathbb F_2^{B_n}$ and its coordinates are evaluation on the chosen stable Thom classes.

## Facts & Assumptions

**Given:** AC; a rank $r\ge2$; the detector $f_r:T_r\to P_r$; and the target $P_r$, a finite product of Eilenberg–Mac Lane spaces $K(\mathbb F_2,r+d_b)$.

[F1] The Thom space $T_r$ is a nonempty $(r-1)$-connected CW complex, and the finite product target is path-connected and simply connected with the stated homotopy groups ([[lem-universal-real-thom-spaces-are-r-minus-one-connected]], [[thm-product-universal-property]], [[def-eilenberg-maclane-space]], [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]).

[F2] The arbitrary-target finite-range comparison replaces the target by a relative CW approximation and applies the simply connected CW comparison with $N=2r-1$ ([[cor-finite-range-comparison-for-arbitrary-target]], [[thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison]]), using the integral homology isomorphism below $2r-1$ and surjection at $2r-1$ ([[thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1]]).

[F3] Eilenberg–Mac Lane representability identifies the coordinate evaluations of the detector ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]); AC underlies the model choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 By the connectivity lemma, $T_r$ is a simply connected CW complex. The target $P_r$ is a finite product of $K(\mathbb F_2,q)$ with $q\ge r\ge2$, hence path-connected and simply connected; we do not assume its ordinary product topology is a CW topology. Apply the arbitrary-target extension by relative CW approximation to replace $f_r$ by a CW extension pair, then the integral homology-to-homotopy comparison theorem with $N=2r-1$. The integral comparison supplies the exact homology hypotheses, so $f_r$ induces $\pi_i$ isomorphisms for $1\le i<N$, namely through $2r-2$. The same comparison also gives surjectivity at $\pi_{2r-1}$; only the isomorphisms through $2r-2$ are needed here, and no conclusion at $\pi_{2r}$ is supplied. [given, F1, F2]

2.1 A factor $K(\mathbb F_2,r+d_b)$ has its only nonzero positive homotopy group $\mathbb F_2$ in degree $r+d_b$. Coordinatewise homotopy groups of a finite product are the products of the factor groups, as proved in the finite-product homotopy computation. Hence at $i=r+n$ the target is $\mathbb F_2^{B_n}$. The induced coordinate on a sphere class $[\alpha:S^{r+n}\to T_r]$ is $\langle m_{r,b},\alpha_*[S^{r+n}]_{\mathbb F_2}\rangle = \langle\alpha^*m_{r,b},[S^{r+n}]_{\mathbb F_2}\rangle$, by representability and the normalized fundamental class. The cutoff $i\le2r-2$ is equivalent to $r\ge n+2$. [step 1.1, F1, F3] ∎
