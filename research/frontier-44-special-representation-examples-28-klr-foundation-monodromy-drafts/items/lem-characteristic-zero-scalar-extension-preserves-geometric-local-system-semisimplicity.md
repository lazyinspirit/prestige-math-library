---
id: lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity
kind: lemma
title: "Characteristic-zero scalar extension of geometric semisimplicity"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-system-of-r-modules-and-its-pullback, def-semisimple-module, lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras, thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple, thm-finite-length-semisimple-module-characterizations, thm-nilpotent-endomorphism-characterisations]
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Statement

Let $S$ be connected and let $\mathcal V_{\mathbb Q}$ be a finite-rank rational local system. If $\mathcal V_{\mathbb Q}\otimes\mathbb C$ is semisimple, then $\mathcal V_{\mathbb Q}\otimes k$ is semisimple for every characteristic-zero field $k$. In particular this scalar-extension conclusion applies to rational Gauss–Manin local systems after complex geometric semisimplicity has been proved. The field $k$ need not embed in $\mathbb C$. Semisimplicity means that every monodromy-invariant subspace has an invariant complement, equivalently that the monodromy module is a finite direct sum of simple modules.

## Facts & Assumptions

**Given:** A base point, its fiber $V$, and the monodromy group $\Gamma$ acting on $V$, as in [[def-local-system-of-r-modules-and-its-pullback]].

[F1] For a finite-dimensional algebra the Jacobson radical is a nilpotent two-sided ideal and its quotient is semisimple ([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]). Over $\mathbb C$, regular-trace nondegeneracy is equivalent to semisimplicity ([[lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras]]).

[F2] For finite-length modules invariant complements characterize semisimplicity ([[thm-finite-length-semisimple-module-characterizations]], [[def-semisimple-module]]). Nilpotent endomorphisms have trace zero ([[thm-nilpotent-endomorphism-characterisations]]).

## Proof

1.1 Let $A\subseteq\operatorname{End}_{\mathbb Q}(V)$ be the rational span of the matrices of $\Gamma$. It contains the identity and is closed under multiplication because products of monodromy matrices are monodromy matrices. Thus it is a finite-dimensional algebra, and $A\otimes E$ injects into $\operatorname{End}_E(V\otimes E)$ for any extension $E/\mathbb Q$: rationally independent matrices remain independent by coordinate comparison. Its image is exactly the $E$-span of monodromy. Submodules for this image are exactly invariant subspaces for $\Gamma$. [given, algebra]

2.1 Put $J=J(A\otimes\mathbb C)$. On any simple constituent $T$ of $V\otimes\mathbb C$, $JT$ is a submodule and is either zero or $T$. The second case would imply $J^rT=T$ for all $r$, contradicting nilpotence. Thus $J$ kills every constituent. By complex semisimplicity it kills all of $V\otimes\mathbb C$, and faithful action from step 1.1 gives $J=0$. Consequently $A\otimes\mathbb C$ is semisimple. [F1, step 1.1, given, algebra]

3.1 Choose a rational basis $a_1,\ldots,a_d$ of $A$. The Gram matrix $T=(\operatorname{Tr}(L_{a_ia_j}))_{i,j}$ of regular trace has rational entries, and its extension to $\mathbb C$ is nondegenerate by step 2.1 and [F1]. Therefore $\det T\ne0$ in $\mathbb Q$, so the same matrix is nondegenerate in every characteristic-zero field $k$. This uses the canonical inclusion $\mathbb Q\hookrightarrow k$ and no embedding of $k$ into $\mathbb C$. [F1, step 2.1, algebra]

4.1 For $x\in J(A\otimes k)$ and every $b\in A\otimes k$, the product $xb$ lies in that nilpotent ideal. Hence $L_{xb}$ is nilpotent and $\operatorname{Tr}(L_{xb})=0$. Nondegeneracy from step 3.1 forces $x=0$. Thus the radical vanishes and $A\otimes k$ is semisimple. Choose a finite generating list of $V\otimes k$ (a vector-space basis suffices); the resulting surjection from a finite sum of regular modules expresses $V\otimes k$ as a finite sum of images of simple summands. Each nonzero image is simple. Successively retain a summand if it is not in the previous sum; its intersection with that sum is zero by simplicity. This finite procedure gives a direct sum of simples, so $V\otimes k$ is semisimple. By step 1.1 this is monodromy semisimplicity, which is equivalent to local-system semisimplicity. The zero fiber is included. [F1, F2, step 1.1, step 3.1, algebra] ∎
## Source notes

The extension argument is supplied locally, using the existing complex regular-trace theorem; it does not appeal to an unproved separable-algebra theorem.
