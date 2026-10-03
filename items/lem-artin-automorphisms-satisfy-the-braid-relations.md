---
id: lem-artin-automorphisms-satisfy-the-braid-relations
kind: lemma
title: "The Artin automorphisms satisfy the braid relations"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 4
deps: [def-artin-automorphisms-of-the-free-group, def-free-group, thm-reduced-words-form-the-free-group]
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
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, equations (14)-(15) and relations (18)-(19), printed pp. 113-115"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 9-10 (the braid-relation check)"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement

For the automorphisms of [[def-artin-automorphisms-of-the-free-group]]: if
$|i-j|>1$ then $\rho(\sigma_i)\rho(\sigma_j)=\rho(\sigma_j)\rho(\sigma_i)$; if
$|i-j|=1$ then
$\rho(\sigma_i)\rho(\sigma_j)\rho(\sigma_i)=
\rho(\sigma_j)\rho(\sigma_i)\rho(\sigma_j)$.

## Facts & Assumptions

**Given:** $n\in\mathbb N$, the free group $F_n=\langle x_1,\dots,x_n\rangle$,
and the automorphisms $\rho(\sigma_i)$, $1\le i\le n-1$, of
[[def-artin-automorphisms-of-the-free-group]], with
$$\rho(\sigma_i)(x_i)=x_ix_{i+1}x_i^{-1},\quad \rho(\sigma_i)(x_{i+1})=x_i,\quad \rho(\sigma_i)(x_j)=x_j\ (j\notin\{i,i+1\}),$$
$$\rho(\sigma_i)^{-1}(x_i)=x_{i+1},\quad \rho(\sigma_i)^{-1}(x_{i+1})=x_{i+1}^{-1}x_ix_{i+1}.$$

[F1] The elements $x_1,\dots,x_n$ form a free basis of $F_n$; two endomorphisms agree if they agree on a free basis, and equality of elements is decided by equality of reduced words ([[def-free-group]], [[thm-reduced-words-form-the-free-group]]).

## Proof

**Proof technique:** direct computation on the basis.

1.1 *Far commutation.* Let $|i-j|>1$. The two substitutions involve disjoint pairs of letters. For $k\notin\{i,i+1,j,j+1\}$ both composites fix $x_k$; for $k\in\{i,i+1\}$ both send $x_k$ to $\rho(\sigma_i)(x_k)$, because $\rho(\sigma_j)$ fixes every letter of that word, and similarly for $k\in\{j,j+1\}$. Thus the composites agree on every basis letter and are equal by [F1]. [F1, given]

1.2 *Adjacent case, the composite $\rho(\sigma_i)\rho(\sigma_{i+1})\rho(\sigma_i)$.* Let $|i-j|=1$; after swapping the names of $i,j$ if necessary this is the triple $(x_i,x_{i+1},x_{i+2})$, and the composite fixes every other basis letter. Composing the displayed substitutions (the rightmost letter acts first) gives $\rho(\sigma_i)\rho(\sigma_{i+1})\rho(\sigma_i)(x_i) =x_i\,x_{i+1}x_{i+2}x_{i+1}^{-1}\,x_i^{-1},$ $\rho(\sigma_i)\rho(\sigma_{i+1})\rho(\sigma_i)(x_{i+1}) =x_i\,x_{i+1}\,x_i^{-1},$ $\rho(\sigma_i)\rho(\sigma_{i+1})\rho(\sigma_i)(x_{i+2})=x_i .$ [given]

2.1 *The other composite has the same values.* Apply $\rho(\sigma_{i+1})$, then $\rho(\sigma_i)$, then $\rho(\sigma_{i+1})$. The successive images of $x_i$ are $x_i$, $x_ix_{i+1}x_i^{-1}$, and $x_ix_{i+1}x_{i+2}x_{i+1}^{-1}x_i^{-1}$. Those of $x_{i+1}$ are $x_{i+1}x_{i+2}x_{i+1}^{-1}$, $x_ix_{i+2}x_i^{-1}$, and $x_ix_{i+1}x_i^{-1}$; those of $x_{i+2}$ are $x_{i+1}$, $x_i$, and $x_i$. Every other basis letter is fixed. These are the values of step 1.2. [given, step 1.2]

3.1 *Comparison.* A direct reduction using the formulas confirms the identity of the two triples of reduced words of steps 1.2 and 2.1: both composite automorphisms send $x_i\mapsto x_ix_{i+1}x_{i+2}x_{i+1}^{-1}x_i^{-1},\qquad x_{i+1}\mapsto x_ix_{i+1}x_i^{-1},\qquad x_{i+2}\mapsto x_i .$ [F1, step 1.2, step 2.1]

4.1 *Conclusion.* Steps 1.1 and 3.1 show that the two composites agree on every basis element in the far and the adjacent case respectively; by [F1] they are equal as automorphisms, which is the asserted braid relations. The computation used the displayed formulas only and made no case distinction beyond the two stated. [F1, step 1.1, step 3.1] ∎

## Remarks

- No choice principle is used; the verificaton is finite and effective.
