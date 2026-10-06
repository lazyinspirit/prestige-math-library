---
id: lem-cotangent-complex-h0-and-polynomial-case
kind: lemma
title: "H0 of the cotangent complex and the polynomial case"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-cotangent-complex-of-a-ring-map
  - def-standard-resolution-of-a-ring-map
  - def-kahler-differentials-algebra
  - thm-kahler-differentials-existence-presentation
  - def-homology-object-of-a-chain-complex
  - def-quasi-isomorphism
  - lem-cotangent-complex-resolution-independence
  - def-derivation-algebra
  - def-axiom-of-choice
  - def-commutative-ring
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 92 (The Cotangent Complex), Section 92.4"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Lemmas 92.4.5 and 92.4.7 (tags 08QF, 08QH), printed 4-5"
---

## Statement

Assume the Axiom of Choice for the resolution-comparison supplier
([[def-axiom-of-choice]]). (1) For every homomorphism $A\to B$ of commutative
unital rings ([[def-commutative-ring]]) one has
$H^0(L_{B/A})\cong\Omega_{B/A}$
([[def-cotangent-complex-of-a-ring-map]],
[[def-kahler-differentials-algebra]],
[[thm-kahler-differentials-existence-presentation]],
[[def-homology-object-of-a-chain-complex]]). (2) If $B$ is a polynomial
$A$-algebra, then $L_{B/A}$ is quasi-isomorphic to $\Omega_{B/A}$ placed in
degree $0$ ([[def-quasi-isomorphism]]).

## Facts & Assumptions

**Given:** A map $A\to B$ of commutative unital rings; the standard resolution $P_\bullet\to B$ with $P_0=A[B]$, $P_1=A[P_0]$, and the cotangent complex $L_{B/A}$ with $L^{-n}=\Omega_{P_n/A}\otimes_{P_n}B$.

[F1] $H^0$ of a complex concentrated in degrees $\le0$ is the cokernel of the differential out of degree $-1$; the cotangent complex is concentrated in degrees $\le0$ with $L^{-1}=\Omega_{P_1/A}\otimes_{P_1}B$ and $L^0=\Omega_{P_0/A}\otimes_{P_0}B$ ([[def-cotangent-complex-of-a-ring-map]], [[def-homology-object-of-a-chain-complex]]).

[F2] The module of Kähler differentials represents $A$-derivations: $\Omega_{B/A}$ receives the universal derivation $d\colon B\to\Omega_{B/A}$, and $\operatorname{Der}_A(B,-)\cong\operatorname{Hom}_B(\Omega_{B/A},-)$ ([[def-kahler-differentials-algebra]], [[def-derivation-algebra]], [[thm-kahler-differentials-existence-presentation]]).

[F3] Two admissible polynomial resolutions give canonically isomorphic cotangent complexes in the derived category, the standard resolution is admissible, and for polynomial $B/A$ the constant identity augmentation is admissible ([[lem-cotangent-complex-resolution-independence]], [[def-standard-resolution-of-a-ring-map]]).

[F4] AC is inherited from the resolution-comparison supplier of [F3] and used nowhere else ([[def-axiom-of-choice]]).



## Proof

1.1 The cokernel presents derivations. Write $P_0=A[B]$ with symbols $[b]$ and $P_1=A[P_0]$; the two face maps $d_0,d_1\colon P_1\to P_0$ send the outer variable $[p]$ to $p$ and to the variable $[\epsilon(p)]$, where $\epsilon\colon P_0\to B$ is the augmentation. The cokernel of the two face maps on differentials is therefore the free $B$-module on the symbols $d[b]$ modulo the relations $d(p)-d[\epsilon(p)]$ as $p$ ranges over $P_0$. Taking $p=a\in A$, $p=[b]+[c]$ and $p=[b][c]$ forces $d[a]=0$, additivity and the Leibniz rule; conversely these derivation relations give $d(p)=d[\epsilon(p)]$ for every polynomial $p$ by induction on sums and products. Hence the cokernel represents $A$-derivations $B\to-$ and is $\Omega_{B/A}$ by [F2], and by [F1] it is $H^0(L_{B/A})$; this proves clause (1). [F1, F2]

2.1 The polynomial case. If $B$ is a polynomial $A$-algebra, the constant simplicial $A$-algebra $B$ with the identity augmentation is a polynomial resolution and its augmentation is a trivial Kan fibration; by [F3] it may be used to compute $L_{B/A}$. Its associated differential complex is the constant simplicial module $\Omega_{B/A}$, whose alternating differential is the identity in positive even chain degrees and zero in odd degrees; pairing consecutive positive degrees contracts them, leaving $\Omega_{B/A}$ in degree zero. Hence $L_{B/A}$ is quasi-isomorphic to $\Omega_{B/A}$ placed in degree $0$, proving clause (2). [F3, step 1.1]

3.1 Choice accounting. The only construction depending on AC is the comparison of resolutions in [F3], used in step 2.1; the computation of step 1.1 uses only the universal property of Kähler differentials. [F3, F4] ∎ 