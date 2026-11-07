---
id: thm-brezin-moore-mixing-transfer-to-affine-lattice-quotients
kind: theorem
title: "Brezin–Moore mixing transfer to free affine-lattice quotients"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-homogeneous-space-of-a-lie-group
proof_strategy: unresolved-prerequisite
sources:
  references:
    - title: "Kleinbock 1999"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§§2.2 and 4.2: Moore and Brezin–Moore mixing inputs"
---

## Statement

The Brezin–Moore mixing-transfer criterion is the following.

Let $G$ be a connected Lie group, let $\Gamma$ be a lattice, let $\Omega=G/\Gamma$, and let $F=\{\exp(tX):t\ge0\}$ be a one-parameter semigroup acting on $\Omega$. Assume that $\Omega$ has no nontrivial Euclidean homogeneous quotient and that $F$ acts ergodically on the maximal semisimple homogeneous quotient of $\Omega$. Then the $F$-action on $\Omega$ is mixing. A Euclidean quotient is a quotient $G/\Delta$ for which $G/L$ is Euclidean for some closed normal subgroup $L\subseteq\Delta$; “Euclidean” means a connected solvable Lie group locally isomorphic to an extension of a vector group by a compact abelian Lie group. The maximal semisimple quotient is one through which all semisimple homogeneous quotients factor.
## Statement references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§2.2 and 4.2: Moore and Brezin–Moore mixing inputs.



## Unresolved proof obligation

The full general mixing-transfer implication, including its general connected-Lie-group hypotheses, has not been proved locally. Kleinbock §2.2 states it as a combination of Margulis's Theorems6 and9; those complete original proofs have not been read by this primary. Checking the hypotheses for the standard affine group does not prove this broad implication. It remains held as an established-result local-proof obligation, with no theorem-import authority and no open-problem relabelling.

## Remarks

The specialized [[thm-moore-mixing-criterion-for-sl-d-lattices]] and [[thm-mixing-of-diagonal-flow-on-free-unimodular-affine-lattices]] have independent conditional local arguments. They are contextual links here; neither is used as a proof of this general criterion, and the standard affine proof does not depend logically on this held carrier.
