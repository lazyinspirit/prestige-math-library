---
title: Ko atomic braid relations are exactly the finite BH rank-two relations
status: draft
research_item: lem-author-c05e7a202611-braid-identification
dependency_level: 20
sources:
  references:
    - title: Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3
      url: https://arxiv.org/pdf/2312.16666v3
      locator: Section 4 opening and Notation 4.1, PDF p. 13; Proposition 4.9,
        equation (4.9), and Definition 4.10, PDF p. 15
      statement: Definition 4.10 calls the equality (4.9) in Proposition 4.9 the
        atomic braid relation for (S,s,t). Its sides are the maximal rotation
        word and its reversed opposition transform, with source K=S minus {s,bar
        t}.
      hypotheses: Section 4 works in a finite Coxeter system (W,S), including a finite
        standard parabolic of an arbitrary Coxeter system; s,t belong to S and t
        differs from bar s. Apply it with S=T, s=a, t=bar b. Since a differs
        from b, this condition holds and K=I.
      reading_limits: Independently read the extracted v3 PDF text at the Section 4
        opening and Notation 4.1, and Proposition 4.9 with equations
        (4.9)–(4.13) and Definition 4.10. The PDF p. 15 screenshot request
        failed; no visual inspection is claimed. Only the definition and its
        displayed sides are imported here; the existing rotation-words supplier
        supplies reducedness and equality. No whole-paper reading or
        reconstruction of the cited Elias–Ko results is claimed.
---

## Prerequisites

- [lem-author-c05e7a202611-atomic-product-length](item-lem-author-c05e7a202611-atomic-product-length)
- [lem-author-c05e7a202611-rotation-words](item-lem-author-c05e7a202611-rotation-words)
- [lem-author-c05e7a202611-corank-two-top](item-lem-author-c05e7a202611-corank-two-top)
- [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)
- [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)
- [lem-author-73bcf419a602-finite-root-finiteness](item-lem-author-73bcf419a602-finite-root-finiteness)
- [` Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3 · Section 4 opening and Notation 4.1, PDF p. 13; Proposition 4.9, equation (4.9), and Definition 4.10, PDF p. 15 `](https://arxiv.org/pdf/2312.16666v3)


## Statement

For finitary $T=I\sqcup\{a,b\}$ with $a\ne b$, Ko's Definition 4.10 relation with parameters $(T,a,\bar b)$ maps under minimal representatives to precisely the two standard expressions for $v_{a,b,I}$ in the Brink–Howlett atomic braid relation. Conversely every Brink–Howlett atomic braid relation for which $I$ is finitary arises in this way.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] Reduced atomic expressions map factor by factor to standard expressions. [lem-author-c05e7a202611-atomic-product-length](item-lem-author-c05e7a202611-atomic-product-length)

[F2] The rotation words start with added vertices $b$ and $a$ and have common minimum $w_Iw_T$. [lem-author-c05e7a202611-rotation-words](item-lem-author-c05e7a202611-rotation-words) [lem-author-c05e7a202611-corank-two-top](item-lem-author-c05e7a202611-corank-two-top)

[F3] The two-generator lemma constructs $v_{a,b,I}$ from the finite-relative-longest element and gives exactly two standard expressions; equating those expressions defines the BH atomic braid relation. The BH definition uses $\Phi_L=\{w\alpha_i:w\in W_L,\ i\in L\}$ and requires $|\Phi_T\setminus\Phi_I|<\infty$ for $T=I\sqcup\{a,b\}$. [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers) [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)

[F4] For a finite vertex set $L$, the parabolic group $W_L$ is finite if and only if its parabolic root set $\Phi_L$ is finite. [lem-author-73bcf419a602-finite-root-finiteness](item-lem-author-73bcf419a602-finite-root-finiteness)

[F5] Ko names the rotation-word equality (4.9) the atomic braid relation in [Definition 4.10](https://arxiv.org/pdf/2312.16666v3), under the finite-system conventions recorded below.

## External input

Ko's Definition 4.10 designates the equality in Proposition 4.9 as the atomic braid relation for $(S,s,t)$ in a finite Coxeter system, with $t\ne\bar s$. Its two sides are the maximal rotation word and its reversed opposition transform. Taking $S=T$, $s=a$ and $t=\bar b$ gives source $S\setminus\{s,\bar t\}=I$ and exactly the words of the rotation-words supplier. This imported definition supplies the name of the relation; the identification of its minimum representatives is proved below.

## Proof

**Proof technique:** direct.

**Goal:** Establish the stated dictionary or identification.

1.1 By [F5], the words in [F2] are the two sides of Ko's relation for $(T,a,\bar b)$. Their common minimum is the same finite-relative-longest element that [F3] uses for $v_{a,b,I}$. By [F1] they give standard expressions, with distinct initial labels $v_{b,I}$ and $v_{a,I}$. Since [F3] supplies exactly two standard expressions, these are that pair, up to interchanging the two sides. Their equality is therefore precisely the BH atomic braid relation. [F1, F2, F3, F5]

2.1 Conversely assume the BH relation has finitary $I$, and put $T=I\sqcup\{a,b\}$. The group $W_I$ is finite. Its distinct simple generators indexed by $I$ lie in $W_I$, so $I$ is finite, and hence $T$ is finite. Apply [F4] to $I$ to obtain finite $\Phi_I$. The BH hypothesis in [F3] gives finite $\Phi_T\setminus\Phi_I$, so $\Phi_T=\Phi_I\cup(\Phi_T\setminus\Phi_I)$ is finite. Applying [F4] to the finite vertex set $T$ proves that $W_T$ is finite. The rotation construction in [F2] now applies with $s=a,t=\bar b$, and step 1.1 recovers the given BH relation. Thus no finitary BH relation is omitted. [given, F2, F3, F4, step 1.1] ∎
