---
id: lem-circle-and-path-loop-models-for-eilenberg-maclane-induction
kind: lemma
title: Circle and path-loop models for Eilenberg–Mac Lane induction
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-based-loop-spaces-of-cw-complexes-have-cw-homotopy-type, thm-mapping-path-factorization, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces, cor-real-line-is-universal-cover-of-circle, lem-covering-homotopies-lift-by-finite-local-strips, thm-fundamental-group-of-the-circle, cor-convex-subsets-of-rn-are-contractible, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-step4-published-alerts-cw/root-integration/published-recording/receipt.json
sources:
  references:
    - title: Rolf Schön, Fibrations Over a CWh-Base
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/schoen.pdf
      locator: Proposition 3 and proof, printed pp. 165–166
    - title: Hatcher, Algebraic Topology, path-space fibration
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 4.2, path-space fibration discussion, printed pp. 376–377
---

## Statement

Assume the Axiom of Choice.

1. The quotient circle $S^1=\mathbb R/\mathbb Z$, with its usual one-vertex,
   one-edge CW structure and degree-one loop, is a marked $K(\mathbb Z,1)$.
2. If $A$ is abelian, $n\geq2$, and $K(A,n)$ is a marked connected CW model,
   then the mapping-path fibration of $*\to K(A,n)$ is
   $$\Omega K(A,n)\longrightarrow PK(A,n)\longrightarrow K(A,n).$$
   Its total space is contractible, its strict loop fiber has CW homotopy type,
   and that fiber is marked-homotopy-equivalent to a chosen $K(A,n-1)$, with
   the marking induced by the fibration connecting isomorphism.

## Facts & Assumptions

**Given:** AC and the marked models in the statement.

[A1] [[def-axiom-of-choice]] is assumed for marked Eilenberg–Mac Lane uniqueness and the CW-type replacement.

[F1] [[cor-real-line-is-universal-cover-of-circle]] gives the covering $\mathbb R\to\mathbb R/\mathbb Z$, [[lem-covering-homotopies-lift-by-finite-local-strips]] makes it a Hurewicz fibration, [[thm-fundamental-group-of-the-circle]] computes its fundamental group, and [[cor-convex-subsets-of-rn-are-contractible]] contracts $\mathbb R$.

[F2] [[thm-mapping-path-factorization]] gives the based path fibration and contracts its total space; [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]] supplies its group and component exact sequence.

[F3] [[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]] supplies a chosen marked CW model and a homotopy equivalence inducing any prescribed marking isomorphism.

[F4] [[lem-based-loop-spaces-of-cw-complexes-have-cw-homotopy-type]] proves locally, under AC, that the based loop space of any nonempty connected CW complex has CW homotopy type, for both the ordinary compact-open topology and its compactly generated refinement. Its proof constructs the metric simplicial model, local loop contraction, nerve domination and actual CW homotopy equivalence; it requires no cardinality, dimension or local-finiteness restriction.

## Proof

**Proof technique:** covering and fibration long exact sequences, followed by the locally proved based-loop CW-type theorem.

1.1 The quotient circle is connected by the paths $t\mapsto[tx]$ and has its standard one-vertex, one-edge CW structure. Its marked fundamental group is $\mathbb Z$ by [F1]. The cover in [F1] is a Hurewicz fibration with discrete fiber $\mathbb Z$. Every positive-dimensional cube in that fiber is constant, while contractibility makes every positive homotopy group of $\mathbb R$ zero. The long exact sequence [F2] therefore gives $\pi_i(S^1)=0$ for $i>1$. This is exactly the marked $K(\mathbb Z,1)$ condition. [F1, F2]

1.2 Apply [F2] to the inclusion of the marked basepoint $*\to K(A,n)$. Its mapping-path total space is the based path space $PK(A,n)$, its endpoint map is Hurewicz, its strict fiber is $\Omega K(A,n)$, and the explicit path-shrinking deformation contracts the total space to the constant path. Exactness gives $$\pi_i(\Omega K(A,n))\cong\pi_{i+1}(K(A,n))\qquad(i\geq1).$$ The component segment and $\pi_1(K(A,n))=0$ show that the loop fiber is path connected. Thus its only nonzero positive homotopy group is $A$ in degree $n-1$, marked by the displayed connecting isomorphism. [F2]

2.1 The marked base $K(A,n)$ is a nonempty connected CW complex. Apply [F4] directly to this base and its marked point: the actual based loop space, which is the strict fiber in step 1.2, has CW homotopy type in the topology used by [F2]. Choose a CW complex $L$ and a homotopy equivalence $L\to\Omega K(A,n)$, transporting the connecting marking to $L$. Step 1.2 makes $L$ a marked $K(A,n-1)$, including the degree-one case $n=2$. Marked uniqueness [F3] supplies a homotopy equivalence from the chosen $K(A,n-1)$ to $L$ inducing the prescribed identification; composing gives the asserted marked equivalence with the strict loop fiber. [A1, F3, F4, step 1.2]

3.1 All spaces are nonempty because marked basepoints are supplied. For $A=0$, step 1.2 gives a weakly contractible connected loop fiber and step 2.1 compares it with the chosen contractible CW $K(0,n-1)$. The cases $n=2$, one loop component, the zero homotopy groups, the constant path, and both ends of the long exact sequence were included. The circle calculation uses no choice. AC is inherited by the locally proved CW-type theorem [F4], is used to select its CW-type representative, and is used through marked uniqueness in step 2.1; the mapping-path formulas and exact-sequence calculations add none. There is no converse assertion. [A1, F1, F2, F3, F4, step 1.1, step 1.2, step 2.1] ∎

## Source notes

[Schön, Proposition 3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/schoen.pdf), printed pp. 165–166, gives the more general fiber theorem historically cited here. The present proof uses the complete local based-loop theorem [F4], whose metric simplicial and local-convexity construction follows [Milnor, Theorems 2–3 and Lemmas 2–4](https://www.maths.ed.ac.uk/~v1ranick/papers/milnorcw.pdf), printed pp. 273–280. Thus no unproved external fiber theorem is a logical prerequisite of step 2.1.
