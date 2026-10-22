---
id: cex-nrqmx-permutation-invariance-not-bosons
kind: counterexample
domain: mathematics
library: mathematics
title: "Permutation invariance alone does not select a statistics sector"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-nrqmx-spin-half-tensor-chain
  - def-commuting-symmetric-and-linear-actions-on-tensor-power
  - thm-nrqmx-schur-weyl-exchange-blocks
dependency_roles:
  def-nrqmx-spin-half-tensor-chain: mathematical-premise
  def-commuting-symmetric-and-linear-actions-on-tensor-power: mathematical-premise
  thm-nrqmx-schur-weyl-exchange-blocks: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation, §II.A.1"
      url: "https://arxiv.org/pdf/0707.1889"
---

## Statement refuted

The false claim is: if a linear operator on
$H_2=(\mathbb C^2)^{\otimes2}$ commutes with the transposition that swaps the
two tensor factors, then the whole space $H_2$ must lie in one exchange
eigenspace, either the symmetric $+1$ eigenspace or the antisymmetric $-1$
eigenspace. More generally, the claim that permutation invariance by itself
chooses one of those two sectors is false.

## Witness

Take the identity operator $A=I_{H_2}$ and the swap $s(v\otimes w)=w\otimes v$.
Then $As=sA$. But $s|00\rangle=|00\rangle$, while for the normalized singlet
$$|\omega\rangle=(|01\rangle-|10\rangle)/\sqrt2$$
one has $s|\omega\rangle=-|\omega\rangle$. Both vectors are nonzero, so
$H_2$ contains nonzero vectors in both eigenspaces and cannot be contained in
either one. Thus invariance under permutations preserves the sector
decomposition but does not select a sector.

## Facts & Assumptions

**Given:** $H_2=(\mathbb C^2)^{\otimes2}$, the factor swap $s$, and the
identity operator $I_{H_2}$.

[F1] [[def-nrqmx-spin-half-tensor-chain]]: the two-factor tensor space has
the ordered basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle$, and the
swap interchanges the two factors. The product inner product is linear in its
first argument and satisfies
$\langle v_1\otimes v_2,w_1\otimes w_2\rangle
=\langle v_1,w_1\rangle_{\mathbb C^2}\langle v_2,w_2\rangle_{\mathbb C^2}$,
where $\langle(a,b),(c,d)\rangle_{\mathbb C^2}=a\bar c+b\bar d$; thus the
four displayed basis words are orthonormal.

[F2] [[def-commuting-symmetric-and-linear-actions-on-tensor-power]]:
permutations act by left place permutations on tensor factors.

[F3] [[thm-nrqmx-schur-weyl-exchange-blocks]]: the tensor space decomposes
into Specht exchange factors and their nonzero multiplicity spaces; the
transposition acts on the Specht factor and as identity on multiplicity.

## Counterexample

1.1 The identity commutes with every endomorphism, so in particular
$I_{H_2}s=sI_{H_2}$. By [F1], $s|00\rangle=|00\rangle$. Also
$s|\omega\rangle=(|10\rangle-|01\rangle)/\sqrt2=-|\omega\rangle$;
the two vectors are nonzero and orthogonal because $|00\rangle$ is orthogonal
to both one-zero/one-one basis vectors. By [F2], this swap is exactly the
left place action of the transposition. Thus both exchange eigenspaces in
$H_2$ are nonzero. [F1, F2, algebra]

2.1 The operator $I_{H_2}$ satisfies the claimed permutation invariance, but
step 1.1 shows that its underlying space is contained in neither single
exchange eigenspace. This is a counterexample to the universal claim. The
Schur–Weyl decomposition [F3] records both exchange factors and their
multiplicity spaces; it does not add a rule that removes one of them.
[F3, step 1.1, algebra] ∎

## Remarks

The physical assignment of a symmetric or antisymmetric sector remains the
separate adopted physical postulate P6 in the identical-particle framework.
This mathematical counterexample neither derives nor modifies that
postulate; permutation invariance is an algebraic symmetry statement.
