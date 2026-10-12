---
id: ex-incidence-model-of-a-closed-interval
kind: example
title: Incidence cochains of a closed interval
status: draft
origin: session
deps: [lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
---

## Example

Stratify the closed interval by its endpoints and open edge. A finite constructible sheaf has vector spaces $V_0,V_1,V_e$ with generization maps $u_0:V_0\to V_e$ and $u_1:V_1\to V_e$. Its actual derived global sections are computed by
$$[V_0\oplus V_1\xrightarrow{u_0-u_1}V_e],$$
in degrees zero and one. Thus a constant sheaf $k$ has cohomology $k$ in degree zero and zero otherwise. Extension by zero of $k$ on the open edge has one copy of $k$ in degree one and zero otherwise.

## Facts & Assumptions

**Given:** AC, a field $k$, the closed interval with its three open simplices, and the displayed finite-dimensional diagram.

[F1] The actual analytic derived incidence comparison computes global sections by the finite diagram bar complex, without assuming diagram injectives are injective among all sheaves ([[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]]).

## Verification

1.1 The strict face chains have length at most one: the two nonidentity arrows are $0\to e$ and $1\to e$. Therefore the inverse-limit bar cochains have degree-zero term $V_0\oplus V_1\oplus V_e$, degree-one term $V_e\oplus V_e$, and differential $(v_0,v_1,w)\mapsto(w-u_0v_0,w-u_1v_1)$. These compute actual sheaf cohomology by [F1]. [F1, given, construct]

2.1 Write $t=w-u_1v_1$ and subtract the second output from the first. This invertible change of coordinates makes the differential the direct sum of $t\mapsto t$ and $(v_0,v_1)\mapsto u_1v_1-u_0v_0$. The first summand is contractible; negating the last output gives the asserted two-term complex. [step 1.1, algebra]

3.1 For the constant sheaf all three spaces are $k$ and both generizations are the identity, so the difference map is surjective with diagonal kernel $k$. For open extension by zero both endpoint spaces vanish and the edge space is $k$, so the cochain complex has only its degree-one term. This proves both stated computations. [step 2.1, algebra] ∎
