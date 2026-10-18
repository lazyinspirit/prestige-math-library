---
id: lem-uniqueness-of-stable-clifford-hopf-decomposition
kind: lemma
title: Uniqueness of the stable Clifford–Hopf decomposition
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- thm-stable-clifford-hopf-decomposition-over-sphere-bundles
- lem-stabilized-upper-gauge-cancellation-by-block-rotation
- cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory
      (2021), expanded local argument
    url: https://arxiv.org/pdf/2011.14368v3
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 7
---

## Statement

Assume AC. Let $X$ be finite CW and $V\to X$ oriented Euclidean of rank $4m>0$. Suppose $\pi^*E_0\oplus H(\Lambda)$ and $\pi^*E_1\oplus H(M)$ become isomorphic after adding the same trivial real and regular Clifford–Hopf summands. Then $E_0,E_1$ are ordinarily stably isomorphic, and the ungraded $C(V)$-modules $\Lambda,M$ become isomorphic after adding equal regular module summands. The proof uses relative affine decomposition over $X\times I$ in dimension $\dim X+1$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed; it implies the countable-choice assumptions in the differential-geometric suppliers. No stronger choice principle is introduced. ([[def-axiom-of-choice]]).

[F1] The relative affine splitting and lower-gauge extension theorem holds after arranging the rank and winding inequalities at the actual relative cell dimension. ([[thm-stable-clifford-hopf-decomposition-over-sphere-bundles]]).

[F2] Stabilizing by the common pulled-back upper bundle permits cancellation of the upper gauge with the target fixed. ([[lem-stabilized-upper-gauge-cancellation-by-block-rotation]]).

[F3] Ordinary real bundles over finite CW bases have complements in finite trivial bundles. ([[cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac]]).

## Proof

**Proof technique:** direct construction.

**Given:** The data and hypotheses in the Statement.

1.1 Absorb the original common trivial shifts into the $E_i$ and common regular shifts into the modules. Their upper bundles $F_0=E_0\oplus\Lambda^+$ and $F_1=E_1\oplus M^+$ are isomorphic by restricting the given isomorphism to the upper pole. Choose a regular module $R$ whose positive half contains both $E_i$, as in [F1], and put $A=M^+\oplus(R^+\ominus E_0)$ and $B=\Lambda^+\oplus(R^+\ominus E_1)$. Then $F_0\oplus A=\Lambda^+\oplus M^+\oplus R^+=F_1\oplus B$. Since $F_0\cong F_1$, adding a complement of $F_0$ shows $A$ and $B$ are ordinarily stably isomorphic. [A1, F1, F3, construct, algebra]


2.1 Add trivial summands so the added $A,B$ can be identified, retaining the total bundle isomorphism. The zero parts become $E_0\oplus A=M^+\oplus R^+$ and $E_1\oplus B=\Lambda^+\oplus R^+$, which are invariant halves in the common ambient module $\Lambda\oplus M\oplus R$. This invariance is essential; merely embedding $E_i$ into an arbitrary real complement would not give affine boundary data. Apply [F2], adding the common ambient upper bundle as a pulled-back summand. Since that is itself a module half, the boundary splittings remain invariant and the new upper gauge is $I$. If identifying $A,B$ required an additional common trivial bundle $\varepsilon^t$, embed it in a regular positive half $S^+$ using [F1], and add the common pulled-back complement $S^+\ominus\varepsilon^t$. The entire added zero part is then $S^+$, so the upper ambient and both zero parts again are invariant module halves. [F1, F2, step 1.1, construct]


3.1 Add the same regular Hopf bundles to raise winding, followed by the same pulled-back regular halves to raise upper rank, until the size conditions of [F1] hold with $d=\dim X+1$. These common additions do not alter the desired stable conclusion. Let $\phi_-$ be the lower gauge over $D_-V$ and $\phi_0$ its value at the zero section. Radial contraction gives a homotopy from $\phi_0$ to $\phi_-$. Glue the two lower bundles on $X\times[0,1/2]$ and $X\times[1/2,1]$ using $\phi_0$. On the second interval use the homotopy followed by the first clutching map. Its final value is the second clutching map, because the upper gauge is $I$. This gives a global triple on $\widehat V\times I$, with fixed common upper module half and the two prescribed affine end triples. [F1, step 2.1, construct]


4.1 Apply [F1] to $(X\times I,X\times\{0,1\})$, starting from the given end splittings and identity lower gauges. Its relative cells have dimension at most $\dim X+1$, exactly the connectivity arranged in step 3.1. We obtain an ungraded module subbundle over the cylinder restricting to $\Lambda$ and $M$ with the same regular additions, and a zero-part real bundle restricting to the correspondingly enlarged $E_0\oplus A$ and $E_1\oplus B$. [F1, step 3.1, construct]


5.1 For explicit endpoint identification, represent these subbundles by orthogonal projections in the fixed ambient bundle. Compactness gives a subdivision of $I$ on which adjacent projections $P,Q$ have $\|P-Q\|<1$ uniformly. Then $T=QP+(I-Q)(I-P)$ is invertible: on $\operatorname{im}P$ its $Q$ component is bounded below by $1-\|P-Q\|$, and similarly on the orthogonal complement. Its polar part $T(T^*T)^{-1/2}$ intertwines $P$ and $Q$. For module projections all these operators commute with the Clifford action, so the polar part is module linear. Multiplying finitely many such isomorphisms identifies the endpoints. Thus $\Lambda,M$ are stably module-isomorphic and $E_0\oplus A,E_1\oplus B$ are ordinarily stably isomorphic. Since $A,B$ are stably isomorphic, complement cancellation gives $E_0\sim_s E_1$. [F3, step 1.1, step 4.1, construct, algebra] ∎
