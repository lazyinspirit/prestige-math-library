---
title: Rotation parameters and the two switchback completions
status: published
research_item: lem-author-c05e7a202611-rotation-words
dependency_level: 13
sources:
  references:
    - title: Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3
      url: https://arxiv.org/pdf/2312.16666v3
      locator: Section 4 opening and Notation 4.1, Definition 4.2, PDF p. 13;
        Proposition 4.3, Definition 4.4, Proposition 4.5 and Lemma 4.7, p. 14;
        Remark 4.8 (4.8), Proposition 4.9 (4.9)–(4.13), p. 15; Definition 4.10,
        pp. 15–16
      statement: In a finite Coxeter system with opposition c↦bar c and s≠bar t, the
        recursion of Definition 4.2 gives the atoms [L_j,I_j,L_(j+1)] of
        Proposition 4.3. At the maximal reduced index d of Definition 4.4 one
        has u_d=t and u_(d+1)=bar s. Remark 4.8 identifies the maximal atomic
        word with [L_0,I_0,T,I_d,L_(d+1)]. Proposition 4.9 equates that word to
        its reversed opposition transform; both words are atomic and reduced.
        Definition 4.10 names this relation the atomic braid relation.
      hypotheses: An ambient Coxeter system (W,S), a finitary subset T⊆S, and the
        finite standard parabolic system (W_T,T). In Ko Section 4 replace its S
        by T, take s=a and t=bar b, and require a≠b. Every indexing subset lies
        in T and is therefore finitary.
      reading_limits: Read the extracted PDF text of the Section 4 opening, Notation
        4.1, Definitions 4.2 and 4.4, Propositions 4.3, 4.5 and 4.9, Lemma 4.7,
        Remark 4.8 and Definition 4.10, including the printed arguments and
        formulas (4.1)–(4.15). The underlying Elias–Ko and
        Elias–Ko–Libedinsky–Patimo papers were not read or reconstructed. This
        repair inspected extracted PDF text only; no visual inspection is
        claimed. No whole-paper reading or independent proof of the imported
        switchback theorem is claimed.
    - title: Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3 —
        singular-expression conventions
      url: https://arxiv.org/pdf/2312.16666v3
      locator: Section 1.2, (1.3)–(1.4), PDF p. 3; Section 1.3, p. 4; Section 2.1,
        paragraph on unique Bruhat extrema of finitary double cosets, p. 8;
        Section 2.2, Definition 2.1 and (2.4)–(2.5), p. 9; Definitions 2.2–2.3
        and Proposition 2.4, p. 10; Definition 3.9, p. 13
      statement: For finitary J,K,H, singular morphisms J→K are double cosets. Write
        M(p) for the unique Bruhat-maximal element of p, in the Bruhat order of
        the Coxeter system. The Coxeter monoid has the Coxeter braid relations
        and idempotent generators c*c=c, with underlying elements identified
        with W. Singular composition is p*q=W_J(M(p)*M(q))W_H for p:J→K and
        q:K→H. A single-step expression [J_0,…,J_m] is the composition of
        W_(J_(i-1))eW_(J_i); the plus/minus notation records the added/deleted
        vertices. The composition p*q is reduced exactly when (M(p)w_K^(-1))M(q)
        is length additive; an expression is reduced when every
        prefix-to-next-step composition is reduced. Multi-step notation records
        alternating inclusions and deletions. Atomic expressions concatenate the
        expressions of their atomic factors. Reversing a reduced expression
        preserves reducedness.
      hypotheses: A Coxeter system and finitary subsets at all objects. Here all
        objects are subsets of the fixed finitary T, and products and lengths
        are taken in (W_T,T).
      reading_limits: Read the extracted PDF text of Sections 1.2–1.3, Section 2.1
        (including the paragraph specifying Bruhat extrema), the Coxeter-monoid
        presentation in Section 2.2, Definitions 2.1–2.3, formulas (2.4)–(2.5),
        Proposition 2.4 and Definition 3.9. Import these conventions and their
        stated well-definedness; no reconstruction of their cited foundational
        proofs or of the underlying papers is claimed. The subsequent redundancy
        reformulation in Definition 2.3 is not used.
---

## Prerequisites

- [lem-author-c05e7a202611-atomic-product-length](item-lem-author-c05e7a202611-atomic-product-length)
- [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers)
- [` Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3 · Section 4 opening and Notation 4.1, Definition 4.2, PDF p. 13; Proposition 4.3, Definition 4.4, Proposition 4.5 and Lemma 4.7, p. 14; Remark 4.8 (4.8), Proposition 4.9 (4.9)–(4.13), p. 15; Definition 4.10, pp. 15–16 `](https://arxiv.org/pdf/2312.16666v3)
- [` Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3 — singular-expression conventions · Section 1.2, (1.3)–(1.4), PDF p. 3; Section 1.3, p. 4; Section 2.1, paragraph on unique Bruhat extrema of finitary double cosets, p. 8; Section 2.2, Definition 2.1 and (2.4)–(2.5), p. 9; Definitions 2.2–2.3 and Proposition 2.4, p. 10; Definition 3.9, p. 13 `](https://arxiv.org/pdf/2312.16666v3)


## Statement

Let $(W,S)$ be a Coxeter system and let $T\subseteq S$ be finitary, meaning that $W_T=\langle T\rangle$ is finite. All the following constructions take place in the finite standard parabolic Coxeter system $(W_T,T)$. For $J\subseteq T$, let $w_J$ be its parabolic longest element and let $\ell$ be Coxeter length in $(W_T,T)$.

Use the following singular-expression conventions. Write $M(p)$ for the unique Bruhat-maximal element of a double coset $p$, using the Bruhat order of $(W_T,T)$. Let $*$ be the Coxeter monoid product on the underlying set $W_T$, with the Coxeter braid relations and idempotence $c*c=c$ for $c\in T$. For $p: J\to K$ and $q:K\to H$, where these arrows are respectively $(J,K)$- and $(K,H)$-double cosets, set $p*q=W_J(M(p)*M(q))W_H$. A singular expression $[J_0,\ldots,J_m]$ with successive subsets differing by one vertex denotes the composite of the double cosets $W_{J_{i-1}}eW_{J_i}$ in the displayed order. The notation $[J+c-d]$ records the path $J,J\cup\{c\},(J\cup\{c\})\setminus\{d\}$, with an addition required to add a missing vertex and a deletion required to remove a present one. An expression is reduced if each composition of a prefix with the next factor is reduced; a composition $p*q$ through $K$ is reduced when $\ell((M(p)w_K^{-1})M(q))=\ell(M(p)w_K^{-1})+\ell(M(q))$. Brackets with larger inclusions or deletions abbreviate the corresponding monotone single-vertex chains. In particular $[I,T,\bar I]$ means an inclusion chain from $I$ to $T$ followed by a deletion chain from $T$ to $\bar I$. An atomic expression concatenates the three-subset expressions of its atomic factors.

Let $T=I\sqcup\{a,b\}$ with $a\ne b$. Put $\bar c=w_Tcw_T$, $\bar J=\{\bar c:c\in J\}$ for $J\subseteq T$, $s=a$, $t=\bar b$, $u_{-1}=b$, $u_0=a$, $I_j=T\setminus\{u_j\}$ and $u_{j+1}=w_{I_j}u_{j-1}w_{I_j}$. Let $d=d(T,a,\bar b)$ be Ko's maximal index for which the rotation word is reduced. The first word $A$ consists, for $j=0,\ldots,d$, of the atomic steps $[L_j+u_{j-1}-u_{j+1}]$, where $L_j=T\setminus\{u_j,u_{j-1}\}$. The second word $B$ is obtained by reversing $A$ and applying $c\mapsto\bar c$ to every subset and vertex. Both are atomic reduced expressions from $I$ to $\bar I$. They express the same coset as the compressed expression $[I,T,\bar I]$. Their first added vertices are respectively $b$ and $a$.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] Atoms and their minimal representatives are related by the finite formula, and reduced atomic compositions translate to standard expressions. [lem-author-c05e7a202611-atomic-product-length](item-lem-author-c05e7a202611-atomic-product-length) [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers)

[F2] The singular-expression conventions, Bruhat-maximal elements, Coxeter monoid composition and reduced-composition criterion are imported from Ko Sections 1.2–1.3 and 2.1–2.2, Definitions 2.1–2.3 and Definition 3.9, as specified in the External input section.

[F3] In the finite system $(W_T,T)$, Ko Proposition 4.3 supplies the atoms, Proposition 4.5 and Lemma 4.7 give $u_d=t$ and $u_{d+1}=\bar s$, and Remark 4.8 and Proposition 4.9 supply the two reduced switchback completions.

## External input

The singular-expression construction in the Statement is the imported convention of Ko Sections 1.2–1.3 and 2.1–2.2: Section 2.1 specifies the unique maximal double-coset representatives with respect to the Bruhat order, Definition 2.1 specifies composition by the Coxeter monoid product of these representatives, (2.4)–(2.5) specify the subset and plus/minus notation, Definitions 2.2–2.3 specify reducedness, and Definition 3.9 specifies atomic expressions. The monoid presentation, identification with $W_T$, existence of the Bruhat-maximal elements and well-definedness of this composition are imported, not proved here. The compressed notation expands inclusions and deletions into monotone single-vertex chains; the intermediate subsets have no effect on the composite, since the longest element of the largest parabolic absorbs the generators of each smaller one in the Coxeter monoid.

Ko's Proposition 4.3, Proposition 4.5, Lemma 4.7, Remark 4.8 and Proposition 4.9 supply atomicity, the endpoint identities, reducedness and the switchback equality. These are imported in the finite system $(W_T,T)$, with $s=a$, $t=\bar b$. The cited Elias–Ko proofs underlying the switchback result were not independently reconstructed.

## Proof

**Proof technique:** direct.

**Goal:** Identify the two reduced atomic words and their common compressed expression.

1.1 Since $a\ne b$, the required condition $s\ne\bar t$ holds in $(W_T,T)$. By [F3], each $[L_j,I_j,L_{j+1}]$ is atomic and the rotation endpoints satisfy $u_d=\bar b$ and $u_{d+1}=\bar a$. Hence $L_0=I$ and $L_{d+1}=\bar I$. The imported switchback extension in Remark 4.8 identifies the reduced word $A$ with $[I,I_0,T,I_d,\bar I]$. Its first two portions are successive inclusions and its last two portions are successive deletions. Under the monotone-chain convention in [F2], their concatenations give exactly the compressed expression $[I,T,\bar I]$. These atomic factors and their compositions use the convention of [F1]. [F1, F2, F3]

2.1 The imported Proposition 4.9 applies a switchback, commutes the two additions and the two deletions, then applies the reversed opposition-transformed switchback. This is exactly $B$: its initial addition is $\bar u_{d+1}=a$, its final deletion is $\bar u_{-1}=\bar b$, and its endpoints are again $I,\bar I$. Both words are reduced and atomic by [F3], in the composition sense of [F1] and [F2]. The initial addition of $A$ is $u_{-1}=b$, so the two words are distinct. Reversing and applying opposition to the subset path constructs the second expression; the equality with the first expression is supplied by Proposition 4.9, rather than by treating reversal alone as equality of cosets. [F1, F2, F3, step 1.1] ∎
