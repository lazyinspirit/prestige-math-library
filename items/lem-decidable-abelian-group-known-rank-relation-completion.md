---
dependency_level: 2
id: lem-decidable-abelian-group-known-rank-relation-completion
kind: lemma
title: "A known rank and decidable words give complete abelian relations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-integer-smith-normal-form-computes-kernel-and-cokernel
  - lem-hall-malcev-integer-abelian-structure-and-rank
proof_strategy: direct
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Chapter2 integer matrix methods and Chapter8 unit groups"
      url: "https://wstein.org/books/ant/ant.pdf"
---

## Statement

Let $G$ be an abelian group with a supplied finite generating list $g_1,\ldots,g_m$, a supplied integer $r$ equal to its free abelian rank, and an algorithm deciding whether $g_1^{a_1}\cdots g_m^{a_m}=1$ for every integer vector $a$. Then a terminating algorithm computes the full kernel $R$ of $\phi:\mathbb Z^m\to G$, $\phi(a)=\prod_i g_i^{a_i}$, by integer generators, together with a Smith presentation of $G$, explicit words for a free basis and for its complete finite torsion subgroup, and unique normal forms. The case $m=r=0$ is included. No logarithmic estimates or choice axiom are required.

## Statement references

[Stein, Algebraic Number Theory: A Computational Approach, §2.1, integer presentations](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** An abelian group, its finite generating list, a correct known rank, and the word-equality decision procedure in the Statement.

[F1] Every subgroup of $\mathbb Z^m$ has a finite free basis; finitely generated abelian groups have intrinsic rank and a finite torsion subgroup. ([[lem-hall-malcev-integer-abelian-structure-and-rank]])

[F2] Exact integer Smith reduction returns transformations, kernel and cokernel decompositions, including empty and rectangular matrices. ([[thm-integer-smith-normal-form-computes-kernel-and-cokernel]])

## Proof

1.1 By [F1], $R$ is free of some rank $k\le m$. Apply [F2] to the matrix of any basis of $R$, only for this mathematical rank argument; it shows that $\mathbb Z^m/R\cong G$ has free rank $m-k$. Intrinsic rank therefore gives $k=m-r$. Enumerate integer vectors by increasing sup norm, breaking ties lexicographically, and apply the supplied equality decision to each. Retain a vector in $R$ whenever it increases the rational rank of the retained columns, computed by rational Gaussian elimination. Stop when $k$ independent columns have been retained. This stops because a basis of $R$ exists and all its finitely many columns appear at finite stages. If $k=0$, stop immediately with the empty matrix. [given, F1, F2, algebra, construct]

2.1 Let $L_0$ be the integer span of the retained columns. They span $R\otimes\mathbb Q$, since both ranks are $k$. Thus for each $a\in R$ there is a positive integer $N$ with $Na\in L_0$, by clearing its finitely many rational coefficients in that basis. Consequently $R/L_0$ consists entirely of torsion elements of $F_0=\mathbb Z^m/L_0$. Smith reduction [F2] gives $F_0\cong T_0\oplus\mathbb Z^r$ with explicit finite $T_0$. Its transformation matrices give an integer lift in $\mathbb Z^m$ for every element of $T_0$, by setting all free coordinates to zero and using the bounded standard residues in the finite coordinates. [step 1.1, F2, algebra]

3.1 Test each of those finitely many lifts with the equality decision. Let $K$ be the elements whose lift maps to $1$ in $G$. This is precisely the kernel of $F_0\to G$: the map is well-defined since $L_0\subseteq R$, its kernel is $R/L_0$, and step 2.1 puts that kernel inside $T_0$. Adjoin all these kernel lifts to the columns generating $L_0$, giving a matrix with image $L_1$. Then $L_1\subseteq R$. Conversely any $a\in R$ has class in $K$, so subtracting the selected lift of that class puts $a$ in $L_0$. Hence $L_1=R$. This finite torsion test is the step that certifies completeness; finding $k$ independent relations alone would not suffice. [given, step 2.1, algebra, construct]

4.1 Apply [F2] to the final relation matrix. If $U R_{\rm mat}Q=D$ has positive diagonal entries $d_1,\ldots,d_k$, the coordinates of a word $a$ in the quotient are $Ua$, reduced modulo $d_i$ for $i\le k$ and unchanged for $i>k$. Entries $d_i=1$ give trivial coordinates. The words $\phi(U^{-1}e_j)$, $j>k$, are a free basis, while all products of $\phi(U^{-1}e_i)$, $i\le k$, with exponents $0\le b_i<d_i$ give the torsion subgroup exactly once. These coordinates give unique normal forms because the full kernel was proved equal to the final matrix image. Every search and finite test above terminates, including an empty generating list or trivial torsion quotient. This proves the Statement. [step 3.1, F2, algebra] ∎
