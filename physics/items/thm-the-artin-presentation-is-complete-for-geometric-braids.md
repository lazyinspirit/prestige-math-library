---
id: thm-the-artin-presentation-is-complete-for-geometric-braids
kind: theorem
title: "The Artin presentation is complete for geometric braids"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-every-trivial-braid-word-combs-as-w-one-w-two,
       lem-the-combed-geometric-decomposition-is-unique,
       prop-the-artin-presentation-surjects-onto-geometric-braids,
       def-braid-group-by-the-artin-presentation,
       def-group-presentation,
       def-standard-pure-braid-generators,
       lem-standard-pure-braids-generate-each-free-kernel,
       thm-pure-braid-forgetting-a-strand-short-exact-sequence,
       cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations,
       def-zariski-braid-combing-words-alpha-and-x,
       def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 3.1, printed pp. 19-22"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume AC. For every $n\ge1$ the published surjection
$\varphi_n\colon B_n^{\mathrm{Artin}}\to B_n^{\mathrm{geom}}$ of
[[prop-the-artin-presentation-surjects-onto-geometric-braids]] is an
isomorphism. Equivalently, every word in
$\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}$ whose geometric braid is trivial is
equivalent to the empty word using only the two Artin relations and free
insertions and deletions of adjacent inverse pairs, so that the Artin
presentation of [[def-braid-group-by-the-artin-presentation]] is a presentation
of the geometric braid group.

## Facts & Assumptions

**Given:** A natural number $n\ge1$; the abstract Artin group $B_n^{\mathrm{Artin}}=\langle\sigma_1,\dots,\sigma_{n-1}\mid \sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}\ (1\le i\le n-2),\ \sigma_i\sigma_j=\sigma_j\sigma_i\ (|i-j|>1)\rangle$ of [[def-braid-group-by-the-artin-presentation]], trivial for $n\le1$; the geometric braid group $B_n^{\mathrm{geom}}=G_n$ of [[thm-geometric-braids-form-a-group]]; and the surjective homomorphism $\varphi_n$ of [[prop-the-artin-presentation-surjects-onto-geometric-braids]], which sends the abstract letter $\sigma_i$ to the class of the elementary geometric half twist.

[F1] *Permitted moves.* Two words in the letters $\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}$ are called **equivalent** when one can be obtained from the other by a finite sequence of the following operations: replacing a subword $\sigma_i\sigma_{i+1}\sigma_i$ by $\sigma_{i+1}\sigma_i\sigma_{i+1}$ or conversely; replacing a subword $\sigma_i\sigma_j$ by $\sigma_j\sigma_i$ or conversely when $|i-j|>1$; and inserting or deleting a subword $\sigma_i^{\epsilon}\sigma_i^{-\epsilon}$. Equivalence is an equivalence relation compatible with concatenation, and equivalent words represent the same element of $B_n^{\mathrm{Artin}}$ and, through $\varphi_n$, the same geometric braid. ([[def-braid-group-by-the-artin-presentation]], [[def-group-presentation]].)

[F2] *Combing.* Assume $n\ge2$ and let $W$ be a word in $\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}$ whose image under $\varphi_n$ is the trivial geometric braid. Then $W$ is equivalent, by the permitted moves of [F1], to a product $W_1W_2$ in which $W_1$ is a word in $x_1^{\pm1},\dots,x_{n-1}^{\pm1}$ and $W_2$ is a word in $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1}$, where $x_j=\alpha_{j+1}^{-1}\sigma_j^{2}\alpha_{j+1}$ are the combing words of [[def-zariski-braid-combing-words-alpha-and-x]] ([[lem-every-trivial-braid-word-combs-as-w-one-w-two]]).

[F3] *Uniqueness.* Assume AC, $n\ge2$, and that $W_1$ is a word in $x_1^{\pm1},\dots,x_{n-1}^{\pm1}$ and $W_2$ a word in $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1}$ with $\varphi_n(W_1W_2)=1$. Then $\varphi_n(W_1)=1$, the word $W_1$ reduces to the empty word by free cancellations of adjacent inverse pairs $x_j^{\pm1}x_j^{\mp1}$, each of which expands into permitted deletions of $\sigma$-pairs; and $\varphi_{n-1}(W_2)=1$, where $\varphi_{n-1}\colon B_{n-1}^{\mathrm{Artin}}\to B_{n-1}^{\mathrm{geom}}$ is the rank $n-1$ surjection applied to the same word read on $n-1$ strands ([[lem-the-combed-geometric-decomposition-is-unique]]).

[F4] AC holds, and AC implies dependent choice and countable choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]); this is the hypothesis under which [F3] is available. The free kernel of the forgetting map $PB_n\to PB_{n-1}$ is free with basis $A_{1n},\dots,A_{n-1,n}$ for the standard pure braid generators $A_{ij}$ of [[def-standard-pure-braid-generators]] ([[lem-standard-pure-braids-generate-each-free-kernel]], [[thm-pure-braid-forgetting-a-strand-short-exact-sequence]]), and $\Psi_m\colon G_m^{\mathrm{pure}}\to PB_m$ is the canonical isomorphism at every rank $m$ ([[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]]).

## Proof

**Proof technique:** direct induction on $n$.

1.1 **Base case.** For $n=1$ there is no index $i$ with $1\le i\le n-1$, so the only word in the displayed alphabet is the empty word, and it is equivalent to itself by the empty sequence of permitted moves; the claim holds at $n=1$. [F1]

2.1 **Induction step.** Assume $n\ge2$, that the claim holds at rank $n-1$, and let $W$ be a word in $\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}$ with $\varphi_n(W)=1$. By [F2] the word $W$ is equivalent to a product $W_1W_2$ with $W_1$ in the $x$-letters $x_1^{\pm1},\dots,x_{n-1}^{\pm1}$ and $W_2$ in the lower-rank letters $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1}$; since equivalence is compatible with concatenation and does not change the geometric braid, $\varphi_n(W_1W_2)=\varphi_n(W)=1$. By [F3] applied to the pair $(W_1,W_2)$, the word $W_1$ reduces to the empty word by free cancellations of adjacent inverse $x$-pairs, each of which expands into permitted deletions of $\sigma$-pairs, so $W_1$ is equivalent to the empty word by the moves of [F1]; and $\varphi_{n-1}(W_2)=1$. The word $W_2$ lies in the alphabet $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1}$ of the rank $n-1$ presentation, so the induction hypothesis applies to it: $W_2$ is equivalent to the empty word using the rank $n-1$ moves. Every rank $n-1$ move is also a permitted rank $n$ move of [F1], because the generators $\sigma_1,\dots,\sigma_{n-2}$ with the braid and far-commutation relations among them are part of the rank $n$ presentation, and the intermediate free insertions and deletions are the same operation. Hence $W\equiv W_1W_2\equiv W_2\equiv 1$, so the claim holds at rank $n$. [F2, F3, step 1.1]

3.1 **Conclusion.** By steps 1.1 and 2.1, for every $n\ge1$ each word in $\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}$ whose image under $\varphi_n$ is trivial is equivalent to the empty word; since equivalent words represent the same element of $B_n^{\mathrm{Artin}}$, the kernel of $\varphi_n$ is trivial. The published proposition gives that $\varphi_n$ is surjective, so $\varphi_n$ is an isomorphism of groups. ∎ [F4, step 2.1]

## Remarks

- The first nontrivial rank is $n=2$: there the free kernel of the forgetting map $PB_2\to PB_1$ is all of $PB_2$, freely generated by the single standard generator $A_{12}=\sigma_1^{2}$ by [[lem-standard-pure-braids-generate-each-free-kernel]], and $x_1=\sigma_1^{2}$ with $P_1$ the empty product; the uniqueness clause of [F3] therefore has content already at $n=2$, where it says that a word in $x_1^{\pm1}$ with trivial geometric image is freely trivial.
- No injectivity of any Artin presentation is assumed anywhere: the induction reduces words in the kernel to the empty word, and injectivity is a conclusion. The only use of AC is through [F3], whose suppliers invoke dependent and countable choice.
