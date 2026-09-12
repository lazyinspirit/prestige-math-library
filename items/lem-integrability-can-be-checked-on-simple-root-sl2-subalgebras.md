---
id: lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras
kind: lemma
title: Integrability can be checked on simple root sl2 subalgebras
status: published
origin: pipeline
deps: [def-integrable-kac-moody-module, def-contragredient-lie-algebra-before-the-maximal-ideal-quotient, prop-kac-moody-root-spaces-are-finite-dimensional]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
proof_strategy: direct
---

## Statement

For a weight $\mathfrak g(A)$-module $V$, integrability is equivalent to local finiteness for each simple-root subalgebra $\mathfrak g_i=\operatorname{span}(e_i,h_i,f_i)\cong\mathfrak{sl}_2$: every vector lies in a finite-dimensional $\mathfrak g_i$-invariant subspace. This does not require finite-dimensional weight spaces or category-$\mathcal O$ support.

## Facts & Assumptions

**Given:** A weight module and a fixed simple index $i$.

[F1] Integrability means local nilpotence of both $e_i$ and $f_i$ ([[def-integrable-kac-moody-module]]).

[F2] The simple generators satisfy $[h_i,e_i]=2e_i$, $[h_i,f_i]=-2f_i$, $[e_i,f_i]=h_i$ ([[def-contragredient-lie-algebra-before-the-maximal-ideal-quotient]]).

[F3] Their nonzero opposite root spaces and the embedded Cartan make the three generators linearly independent ([[prop-kac-moody-root-spaces-are-finite-dimensional]]).

## Proof

1.1 By F2 and F3 their span has exactly the three independent standard $\mathfrak{sl}_2$ generators and brackets. Repeatedly using the three commutation relations puts every enveloping word into a linear combination of $f_i^a e_i^b h_i^c$: an adjacent swap decreases the number of out-of-order pairs, and its commutator term has shorter word length. Induction on length and inversions terminates. On a weight vector $v$, the last factor acts by the scalar $\mu(h_i)^c$, so the cyclic span is spanned by $f_i^a e_i^b v$. Only spanning is needed, not PBW independence or semisimplicity. [F2, F3, given]

1.2 For the reverse implication, let a vector lie in a finite-dimensional $\mathfrak g_i$-invariant subspace $W$. The operator $h_i$ is diagonalizable on $W$: on each vector it has a finite eigen-expansion inherited from the ambient weight module, and polynomial interpolation in $h_i$ keeps its components in $W$. Since $W$ is finite dimensional, only finitely many eigenvalues occur. By F2, $e_i$ and $f_i$ shift these eigenvalues by $2$ and $-2$. On an $h_i$-eigenvector, a nonzero string of length greater than the number of eigenvalues would require more distinct eigenvalues than $W$ has. Thus both operators are nilpotent on $W$, and locally nilpotent on $V$. F1 gives integrability. [F1, F2, given]

2.1 Assume integrability. For a weight vector $v$, local nilpotence of $e_i$ permits only finitely many nonzero $e_i^b v$. For each of these finitely many vectors, local nilpotence of $f_i$ permits only finitely many nonzero $f_i^a e_i^b v$. Their span in 1.1 is therefore finite dimensional and is the cyclic $\mathfrak g_i$-submodule. Every vector of a weight module is a finite sum of weight vectors. The sum of their finite-dimensional cyclic submodules is again finite dimensional and invariant, proving local finiteness. [F1, step 1.1]

3.1 This works for every simple index. Zero vectors and the zero module have zero cyclic spans, while a one-dimensional cyclic submodule satisfies the same spectral argument. Each spanning calculation and each choice of a bound concerns only finitely many vectors; no choice principle or complete-reducibility theorem was used. Both implications are proved. [step 2.1, step 1.2] ∎
