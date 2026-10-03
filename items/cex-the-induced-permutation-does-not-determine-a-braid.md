---
id: cex-the-induced-permutation-does-not-determine-a-braid
kind: counterexample
title: "The induced permutation does not determine a braid"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 6
deps: [def-artin-automorphisms-of-the-free-group, def-the-artin-representation-on-a-free-group, def-free-group, thm-reduced-words-form-the-free-group, thm-the-braid-group-surjects-onto-the-symmetric-group, def-braid-group-by-the-artin-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10 (the action of sigma_i and the pure braid sigma_i^2)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, equations (14)-(15), printed pp. 113-114"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
---

## Statement refuted

In $B_3$, the identity and the pure braid word $\sigma_1^2$ induce the same
permutation of the punctures (the trivial one), but they act differently on
$F_3$ and are distinct braids. Hence the endpoint permutation of a braid does
not determine the braid. The argument uses no choice principle.

## Facts & Assumptions

**Given:** the Artin braid group $B_3$ on generators $\sigma_1,\sigma_2$, the
free group $F_3=\langle x_1,x_2,x_3\rangle$, the automorphisms
$\rho(\sigma_i)$ of [[def-artin-automorphisms-of-the-free-group]], the
homomorphism $\rho:B_3\to\operatorname{Aut}(F_3)$ of
[[def-the-artin-representation-on-a-free-group]], and the permutation
homomorphism $\pi_3:B_3\to S_3$ of
[[thm-the-braid-group-surjects-onto-the-symmetric-group]].

[F1] *The substitutions.*
$\rho(\sigma_1)(x_1)=x_1x_2x_1^{-1}$, $\rho(\sigma_1)(x_2)=x_1$,
$\rho(\sigma_1)(x_3)=x_3$, and $\rho$ is a well-defined homomorphism, so
$\rho(\sigma_1^2)=\rho(\sigma_1)\circ\rho(\sigma_1)$ and
$\rho(1)=\operatorname{id}$; a homomorphism of $F_3$ is determined by its
values on the basis, and two endomorphisms agree as soon as they agree on the
basis. ([[def-artin-automorphisms-of-the-free-group]],
[[def-the-artin-representation-on-a-free-group]],
[[def-braid-group-by-the-artin-presentation]].)

[F2] *The endpoint permutation.* $\pi_3$ is a homomorphism with
$\pi_3(\sigma_i)=(i\ i+1)$ for $i=1,2$, and it assigns to each braid its
endpoint permutation of the three strands
([[thm-the-braid-group-surjects-onto-the-symmetric-group]]).

[F3] *Reduced words.* Reduced words in the free basis represent the same
element of $F_3$ only if they are equal
([[thm-reduced-words-form-the-free-group]], [[def-free-group]]).

## Counterexample

The two braids compared are the identity $1\in B_3$ and the pure braid word
$\sigma_1^2\in B_3$; they are shown to induce the same permutation and
different automorphisms of $F_3$.

1.1 *The value of $\rho(\sigma_1^2)$ on $x_1$.* By [F1], $\rho(\sigma_1)(x_1)=x_1x_2x_1^{-1}$ and $\rho(\sigma_1)(x_2)=x_1$, so, using that $\rho(\sigma_1)$ is an automorphism, $\rho(\sigma_1^2)(x_1)=\rho(\sigma_1)\bigl(x_1x_2x_1^{-1}\bigr) =\rho(\sigma_1)(x_1)\,\rho(\sigma_1)(x_2)\,\rho(\sigma_1)(x_1)^{-1} =x_1x_2x_1x_2^{-1}x_1^{-1}.$ [F1, algebra]

1.2 *The two automorphisms differ.* The words $x_1x_2x_1x_2^{-1}x_1^{-1}$ and $x_1$ are both reduced; they differ, so by [F3] they represent different elements of $F_3$. Hence $\rho(\sigma_1^2)(x_1)\ne x_1=\rho(1)(x_1)$, so $\rho(\sigma_1^2)\ne\rho(1)$. Since $\rho$ is a well-defined function on $B_3$ with $\rho(1)=\operatorname{id}$, the word $\sigma_1^2$ does not represent the trivial braid: $\sigma_1^2\ne1$ in $B_3$. [F1, F3, algebra]

1.3 *The two endpoint permutations agree.* By [F2], $\pi_3(\sigma_1)=(1\ 2)$, so $\pi_3(\sigma_1^2)=(1\ 2)^2=1=\pi_3(1)$: the braid $\sigma_1^2$ and the identity braid induce the same trivial permutation of the three strands. [F2, algebra]

2.1 *Conclusion.* Steps 1.2 and 1.3 exhibit the distinct braids $1$ and $\sigma_1^2$ in $B_3$ with equal endpoint permutation; the word $\sigma_1^2$ is moreover pure. Therefore the endpoint permutation of a braid does not determine the braid. The computation used finitely many substitutions and the choice-free suppliers [F1]-[F3], so no choice principle is used. [step 1.2, step 1.3] ∎

## Remarks

- The faithfulness theorem
  `thm-the-artin-representation-is-faithful` is not needed: the difference is
  already visible at the level of the well-defined homomorphism $\rho$, since
  $\rho(1)=\operatorname{id}$ is known without injectivity.
- The braid $\sigma_1^2$ generates the kernel of $\pi_3$ on two strands; the
  example is the first nontrivial instance of the fact that the pure braid
  group is strictly larger than the center.
