# Proposed strengthening of the frozen stable-core proof

The frozen finite theorem is unchanged. This is a proposed replacement for its Step6 and for the restriction that stabilizing A,B be finite free. It is submitted to the same independent reviewer; it records no acceptance or native readiness.

Keep C,D finite free graded bifiltered complexes. Allow A,B to be arbitrary Maslov-graded bifiltered Laurent complexes with zero total homology, with all equivalence maps and homotopies Laurent-linear and preserving the stated grading and filtrations. Decompose only the finite originals in their finite homotopy category:

C ≃ E_C ⊕ L_C, D ≃ E_D ⊕ L_D,

where each E is the unique non-acyclic indecomposable and each L is totally acyclic, using frozen Steps1–6's finite decomposition and homology-idempotent argument. No decomposition of A or B is required.

Let T:C⊕A → D⊕B and S be inverse maps in the larger homotopy category. Restrict ST=1 to E_C and project back. Resolving the middle D⊕B as E_D⊕L_D⊕B gives

1_(E_C) = a_D + a_L + a_B

as endomorphisms in the finite homotopy category of E_C. Each summand factors through the indicated object; the maps to and from B need not have finite intermediate rank. The composites are nevertheless actual endomorphisms of the finite object E_C. Since L_D and B have zero homology, a_L and a_B induce zero homology. Neither can be a unit, because E_C has nonzero total homology. Frozen Step4 proves that nonunits form the unique maximal ideal in End(E_C). Consequently a_D=1-(a_L+a_B) is a unit.

Write a_D=p i with i:E_C→E_D and p:E_D→E_C. Replace p by a_D^(-1)p, so p i=1_(E_C). Then i p is an idempotent of E_D whose induced homology is nonzero. Since E_D is indecomposable and its homotopy idempotents split by frozen Step3, this idempotent must be 1_(E_D). Hence i and p give an isomorphism E_C≃E_D.

Frozen Steps7–8 now apply verbatim: the admissible originals have rank-one vertical homology, so their internal acyclic complements are vertically acyclic by Euler characteristic; the core equivalence preserves tau and both hook-map zero patterns. No vertical acyclicity, finite rank, freeness, or decomposition of the added A,B is used.
