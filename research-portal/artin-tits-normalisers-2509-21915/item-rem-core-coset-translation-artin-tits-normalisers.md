---
title: Translation to Ko’s atomic cosets and the scope extension
status: published
research_item: rem-core-coset-translation-artin-tits-normalisers
dependency_level: 21
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: Remark 4.22, PDF p. 20
      statement: The core-coset, atom, reduced-expression and braid-relation
        dictionary, and the extension beyond the finitary case.
      hypotheses: The Coxeter-system and BH conventions of the article; Ko comparison
        restricted to finitary subsets.
      reading_limits: Read Remark 4.22 in the frozen extracted text and rendered PDF
        p. 20. Article attribution only; this citation is not a proof premise.
    - title: Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3
      url: https://arxiv.org/pdf/2312.16666v3
      locator: Section 1.2, equation (1.3) and following sentence, PDF p. 3; Theorem
        1.8 (= Theorem 5.1), PDF pp. 6 and 18; Definition 4.10, pp. 15–16
      statement: An indexing subset L is finitary precisely when W_L is finite. Any
        two atomic reduced expressions of the same core coset, with finitary
        indexing subsets, are related by atomic braid relations.
      hypotheses: A Coxeter system; all subsets indexing singular expressions are
        finitary. Section 4 is applied inside a finite standard parabolic
        (W_T,T).
      reading_limits: For this adjudication, read the extracted v3 PDF text of Section
        1.2 around (1.3), Theorem 1.8, the Section 5 opening and Theorem 5.1
        statement, and Proposition 4.9 with Definition 4.10 and their immediate
        context. The theorem is imported as a statement; no reconstruction of
        its proof, the switchback background or the papers cited by Ko is
        claimed. No visual inspection of Ko’s PDF or whole-paper reading is
        claimed. The dictionary and relation applications use the existing local
        helper items.
---

PDF p. 20: ` Remark 4.22 `

## Prerequisites

- [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers)
- [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)
- [lem-finite-parabolic-wall-formula-artin-tits-normalisers](item-lem-finite-parabolic-wall-formula-artin-tits-normalisers)
- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)
- [thm-atomic-matsumoto-artin-tits-normalisers](item-thm-atomic-matsumoto-artin-tits-normalisers)
- [lem-author-c05e7a202611-core-minimum-dictionary](item-lem-author-c05e7a202611-core-minimum-dictionary)
- [lem-author-c05e7a202611-atomic-product-length](item-lem-author-c05e7a202611-atomic-product-length)
- [lem-author-c05e7a202611-rotation-words](item-lem-author-c05e7a202611-rotation-words)
- [lem-author-c05e7a202611-corank-two-top](item-lem-author-c05e7a202611-corank-two-top)
- [lem-author-c05e7a202611-braid-identification](item-lem-author-c05e7a202611-braid-identification)
- [` Hankyung Ko, An atomic Coxeter presentation, arXiv:2312.16666v3 · Section 1.2, equation (1.3) and following sentence, PDF p. 3; Theorem 1.8 (= Theorem 5.1), PDF pp. 6 and 18; Definition 4.10, pp. 15–16 `](https://arxiv.org/pdf/2312.16666v3)


## Statement

A subset $L$ is **finitary** when its standard parabolic subgroup $W_L$ is finite. For finitary objects $I,K$, taking minimum-length representatives identifies core cosets $W_IxW_K$ with $\operatorname{Hom}_{\mathcal{BH}}(I,K)$. For an atom put $L=I+a$; its deleted target vertex is $a'=\iota_L(a)=\iota_{[I,a]}(a)$ and its minimum is $v_{a,I}=w_Iw_L$, while its maximum is $w_L$. Atomic reduced expressions correspond to standard expressions, and Ko's atomic braid relations correspond exactly to the BH atomic braid relations. Consequently Ko's atomic Matsumoto theorem is the finitary restriction of the BH atomic Matsumoto theorem. The latter also permits infinite objects $I$: only the crossing component $[I,a]$ is required to be spherical, and $W_{I+a}$ need not be finite.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] Core cosets, BH arrows, the finite wall formula, standard expressions and BH atomic braid relations have the conventions specified in the corresponding definitions. [def-core-atomic-cosets-artin-tits-normalisers](item-def-core-atomic-cosets-artin-tits-normalisers) [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers) [lem-finite-parabolic-wall-formula-artin-tits-normalisers](item-lem-finite-parabolic-wall-formula-artin-tits-normalisers) [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers) [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)

[F2] The five intermediate results establish the minimum dictionary, product order, explicit rotation parameters, common relative longest representative and exact relation identification. [lem-author-c05e7a202611-core-minimum-dictionary](item-lem-author-c05e7a202611-core-minimum-dictionary) [lem-author-c05e7a202611-atomic-product-length](item-lem-author-c05e7a202611-atomic-product-length) [lem-author-c05e7a202611-rotation-words](item-lem-author-c05e7a202611-rotation-words) [lem-author-c05e7a202611-corank-two-top](item-lem-author-c05e7a202611-corank-two-top) [lem-author-c05e7a202611-braid-identification](item-lem-author-c05e7a202611-braid-identification)

[F3] The completed BH atomic Matsumoto theorem applies without a finitary-object hypothesis. [thm-atomic-matsumoto-artin-tits-normalisers](item-thm-atomic-matsumoto-artin-tits-normalisers)

## External input

Ko Theorem 1.8 (= Theorem 5.1) states that any two atomic reduced expressions of the same core coset with finitary indexing subsets are related by atomic braid relations. This theorem is an explicitly cited established input; its full proof is not reconstructed here.

## Proof

**Proof technique:** direct.

**Goal:** Establish the stated dictionary or identification.

1.1 Apply the core-minimum dictionary and atomic-product-length lemmas in [F2]. For an atom with maximum $w_L$, the minimum is $w_Iw_L$. The finite wall formula in [F1] identifies this with $v_{a,I}$ and gives $a'=\iota_L(a)=\iota_{[I,a]}(a)$. Source and target remain $I,K$ and minimum representatives multiply in the original left-to-right order for reduced compositions. Thus atomic reduced expressions and standard expressions correspond, including the empty expression. [F1, F2]

2.1 For the relation choose Ko's finite ambient subsystem $T=I+a+b$ and parameters $s=a,t=w_Tbw_T$. The rotation-word and corank-two-top lemmas in [F2] give the two words with minimum $w_Iw_T=v_{a,b,I}$; the braid-identification lemma identifies them with exactly the pair in [F1]. Conversely every finitary BH braid relation has finite $T$ and is included. Therefore the imported Ko Matsumoto theorem translates to the finitary instance of [F3] using precisely the same moves. [F1, F2, F3, step 1.1]

3.1 The extra scope of [F3] follows from its actual hypotheses, without applying Ko to infinite singular cosets. For example let $S$ be the disjoint union of an infinite set $H$ of pairwise commuting simple generators and one additional commuting generator $a$, and set $I=H$. Then $W_I$ and $W_{I+a}$ are infinite, but $[I,a]=\{a\}$ is spherical and defines the crossing $v_{a,I}=a$. Thus the BH setting allows cases excluded from Ko's finitary-object convention. The theorem in [F3], rather than the dictionary, establishes Matsumoto in that larger setting. [F1, F3, step 2.1] ∎

## Source notes

The original article is attribution only. The five existing helpers supply the dictionary and relation identification. For this adjudication, Ko’s extracted v3 text was checked at the finitary convention, Matsumoto statements and atomic braid definition specified in the independent reference; earlier reading claims are not inherited. Remark 4.22 was read in the frozen extracted text and visually inspected on PDF p. 20. The 1999 Brink–Howlett source was not read. The two repaired omissions concern the generated draft, and no original-article defect is asserted. The scope comparison preserves the original claim without applying Ko to non-finitary singular cosets.
