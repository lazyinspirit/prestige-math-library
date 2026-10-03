---
id: cor-the-artin-action-solves-the-braid-word-problem
kind: corollary
title: "The Artin action solves the braid word problem"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 8
deps: [thm-the-artin-representation-is-faithful, def-the-artin-representation-on-a-free-group, def-artin-automorphisms-of-the-free-group, def-free-group, thm-reduced-words-form-the-free-group, thm-word-problem-for-free-groups, def-axiom-of-choice]
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
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6.1, printed p. 9 (the first solution to the word problem in B_n via the Artin representation)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, printed pp. 113-115"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
---

## Statement

Assume AC. Given two words in $\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}$, the
braids they represent are equal if and only if the corresponding automorphisms
of $F_n$ agree on the generators $x_1,\dots,x_n$. Since reduced words in a free
group are unique and effectively computable, the word problem in $B_n$ is
solvable. No choice principle beyond AC is used.

## Facts & Assumptions

**Given:** AC, the Artin braid group $B_n$ on $\sigma_1,\dots,\sigma_{n-1}$, the
free group $F_n=\langle x_1,\dots,x_n\rangle$ with its reduced words, and two
braid words $\beta_1,\beta_2$ in the generators and their inverses.

[F1] *The representation.* $\rho:B_n\to\operatorname{Aut}(F_n)$ is a
well-defined group homomorphism, computed on a braid word by composing the
automorphisms $\rho(\sigma_i)^{\pm1}$ attached to its letters; $\rho$ of the
empty word is the identity, and
$$\rho(\sigma_i)(x_i)=x_ix_{i+1}x_i^{-1},\qquad \rho(\sigma_i)(x_{i+1})=x_i, \qquad \rho(\sigma_i)(x_j)=x_j\ (j\notin\{i,i+1\}).$$
([[def-the-artin-representation-on-a-free-group]],
[[def-artin-automorphisms-of-the-free-group]].)

[F2] *Faithfulness.* Assume AC. $\rho$ is injective: a braid word acts
trivially on $F_n$ only if it represents the trivial element of $B_n$.
([[thm-the-artin-representation-is-faithful]].)

[F3] *Free groups and their word problem.* An endomorphism of $F_n$ is
determined by its values on the basis $x_1,\dots,x_n$; reduced words are unique
representatives of elements of $F_n$, and free reduction decides whether a
word represents the identity, effectively.
([[def-free-group]], [[thm-reduced-words-form-the-free-group]],
[[thm-word-problem-for-free-groups]].)

## Proof

**Proof technique:** direct.

1.1 *The comparison criterion.* Let $\beta_1,\beta_2$ be braid words. If $\beta_1=\beta_2$ in $B_n$, then $\rho(\beta_1)=\rho(\beta_2)$ because $\rho$ is a well-defined function, so the two automorphisms agree on every element of $F_n$, in particular on the generators. Conversely, if $\rho(\beta_1)$ and $\rho(\beta_2)$ agree on the generators, then by [F3] they agree as endomorphisms of $F_n$; hence $\rho(\beta_1\beta_2^{-1})=\rho(\beta_1)\rho(\beta_2)^{-1} =\operatorname{id}$ by [F1], and by faithfulness [F2] the braid word $\beta_1\beta_2^{-1}$ represents the trivial element, that is, $\beta_1=\beta_2$ in $B_n$. [F1, F2, F3, algebra]

1.2 *Effectivity of the comparison.* The $n$ images $\rho(\beta)(x_j)$ of a braid word $\beta$ are computed letter by letter, substituting the finitely many displayed formulas of [F1] for the at most finitely many letters of $\beta$ and freely reducing; by [F3] the result is a unique reduced word representing the image. Comparing two braid words therefore amounts to computing and comparing $2n$ reduced words, a finite and effective procedure. [F1, F3, construct]

2.1 *Decision procedure and conclusion.* Steps 1.1 and 1.2 give: the braids represented by $\beta_1$ and $\beta_2$ are equal if and only if the two automorphisms agree on $x_1,\dots,x_n$, and this comparison is decided by the halting free-reduction algorithm. Hence the word problem in $B_n$ is solvable. The only use of AC is through the faithfulness theorem [F2]; the computation of the images and the free reduction are choice-free, so no choice principle beyond AC is used. [F2, step 1.1, step 1.2] ∎

## Remarks

- This is Artin's original solution of the word problem, historically the first
  known; it is by no means efficient, but it is effective.
- For $n\le1$ the group $B_n$ is trivial and both sides are trivial, so the
  criterion is vacuous; the substantive statement is for $n\ge2$.
