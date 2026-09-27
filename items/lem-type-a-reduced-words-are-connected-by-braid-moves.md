---
id: lem-type-a-reduced-words-are-connected-by-braid-moves
kind: lemma
title: "Type-A reduced words and the Coxeter presentation"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts,
       thm-von-dyck, thm-induction-principle]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §2.1, PDF pp.13–14"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §3, PDF pp.11–13"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$, let $S_n$ be the permutation group on $\{1,\ldots,n\}$ with
simple adjacent transpositions $s_i=(i\ i+1)$, and let a word in the $s_i$ be
**reduced** when it has minimal length among words representing its
permutation.

**(a) Type-A braid connectivity.** Any two reduced words for one
$w\in S_n$ are related by finitely many commutations
$s_is_j\leftrightarrow s_js_i$ for $|i-j|>1$ and adjacent braid moves
$s_is_{i+1}s_i\leftrightarrow s_{i+1}s_is_{i+1}$.

**(b) Coxeter presentation.** The canonical evaluation homomorphism
$$\Phi:\left\langle t_1,\ldots,t_{n-1}\ \middle|\ t_i^2=1,\ t_it_j=t_jt_i\ (|i-j|>1),\ t_it_{i+1}t_i=t_{i+1}t_it_{i+1}\right\rangle\longrightarrow S_n,\qquad t_i\longmapsto s_i$$
is an isomorphism. In particular these are a complete set of relations among
the adjacent transpositions, not merely relations they satisfy.

For $n=0,1$ both sides of the presentation have no generators and are trivial.
No choice principle is used.

## Facts & Assumptions

**Given:** The type-A presentation group $C_n$ displayed in (b), the ordinary
permutation group $S_n$, and words in their respective adjacent generators.

[F1] In [[lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts]],
parts (a), (b), (c), (e), and (g) prove directly from permutations and inversion
sets that the $s_i$ satisfy the involution, far-commutation, and adjacent braid
relations; they generate $S_n$; a word is reduced exactly when its length is
$\operatorname{inv}$ of its permutation; multiplication on the right by $s_i$
changes $\operatorname{inv}$ by exactly $+1$ or $-1$; and any two reduced
words for one permutation are connected by the two braid-move families. That
item's proof imports only the exchange-to-Matsumoto induction from Dehornoy
IX Corollary 1.11(ii) with its type-A hypotheses checked; it does not cite the
published Coxeter-presentation theorem.

[F2] If images of the generators satisfy every relator of a group
presentation, the assignment extends uniquely to a homomorphism; it is
surjective when those images generate the target ([[thm-von-dyck]]).

[F3] Induction on a natural-valued word length is valid
([[thm-induction-principle]]).

## Proof

**Proof technique:** direct, with induction on the length of an arbitrary
presentation word.

1.1 **The evaluation map.** By [F1] the permutations $s_i$ satisfy every relator displayed in (b), so [F2] gives a homomorphism $\Phi:C_n\to S_n$. It is surjective because the $s_i$ generate $S_n$ by [F1]. [F1, F2]

2.1 **Reduced-word connectivity (a).** The braid-connectivity clause of [F1] gives exactly the two types of moves in (a). Each is also a relator of $C_n$, so braid-equivalent reduced $s$-words have equal corresponding $t$-words in $C_n$. [F1, step 1.1]

3.1 **Reduction of every presentation word.** We prove by induction on $k$ that every word of $k$ letters $t_i$ in $C_n$ equals a reduced $t$-word for its image under $\Phi$. Every group word can first be put in this form: $t_i^{-1}=t_i$ by the involution relator, so replace each inverse letter. For $k=0$ the empty word is reduced for the identity. For the induction step write the word as $u t_i$ with $u$ of length $k-1$, and let $\tau=\Phi(u)$ and $\sigma=\tau s_i$. By induction $u$ equals a reduced $t$-word $q$ for $\tau$. By [F1], either $\operatorname{inv}(\sigma)=\operatorname{inv}(\tau)+1$ or it is $\operatorname{inv}(\tau)-1$. If the inversion number increases, $q t_i$ is reduced for $\sigma$ by [F1], so it is the required representative. If it decreases, choose a reduced $s$-word $r$ for $\sigma$; one exists because the $s_i$ generate $S_n$ and minimal finite word length exists. Since $\sigma s_i=\tau$ and $\operatorname{inv}(\tau)=\operatorname{inv}(\sigma)+1$, the word $r s_i$ is reduced for $\tau$ by [F1]. Thus the two reduced words $q$ and $r s_i$ for $\tau$ are braid-connected by step 2.1; replacing $s$ by $t$ gives $q=r t_i$ in $C_n$. Consequently $u t_i=q t_i=r t_i^2=r$ in $C_n$, and $r$ is reduced for $\sigma$. This completes the induction. [F1, F3, step 2.1]

4.1 **Injectivity and the presentation (b).** If $g\in\ker\Phi$, represent $g$ by a finite word and use step 3.1 to replace it in $C_n$ by a reduced word for the identity of $S_n$. By [F1] the identity has inversion number zero, so its only reduced word is empty; hence $g=1$. Thus $\Phi$ is injective, and with step 1.1 it is an isomorphism. [F1, step 1.1, step 3.1]

5.1 **Small ranks.** For $n\le1$ there are no adjacent generators and $S_n$ is trivial, so the empty presentation is trivial as well. Every argument above uses only finite words and induction on their lengths. ∎ [step 2.1, step 4.1]

## Remarks

- The injectivity step is the missing direction in the published
  `thm-the-symmetric-group-has-the-coxeter-presentation`: knowing that the
  $s_i$ satisfy the relators and generate $S_n$ proves only surjectivity.
  This local proof uses reduced-word connectivity and the involution relation
  to turn every presentation word into a reduced representative of its image.
- The reduced-word result is taken through the earlier Garside type-A item
  [F1], whose exchange and inversion arguments do not use a Coxeter
  presentation. The present item therefore supplies the Coxeter-system
  interface needed by the Soergel source imports without depending on the
  pending published proof.
