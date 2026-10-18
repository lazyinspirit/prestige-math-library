---
id: thm-super-poincare-birkhoff-witt-ordered-monomial-basis
kind: theorem
title: Ordered monomial basis for the enveloping superalgebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-lie-superalgebra-over-complex-numbers
  - lem-field-is-a-commutative-ring
  - lem-odd-self-jacobi-in-characteristic-zero
  - def-universal-enveloping-superalgebra
  - thm-tensor-product-basis-from-bases
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §2.6.2"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed p. 37, Theorem 2.6.4: ordered even powers and odd exponents 0 or 1 form a basis; the thesis refers to Cheng–Wang for the proof."
---

## Statement

Let $\mathfrak g$ be a complex Lie superalgebra, and let $B$ be a supplied homogeneous vector-space basis of $\mathfrak g$ with a supplied total order. In $U(\mathfrak g)$, the unit and all ordered monomials
$$ b_1b_2\cdots b_n,\qquad b_i\in B,\quad b_1\le b_2\le\cdots\le b_n, $$
for which no odd basis element occurs more than once, form a complex-vector-space basis. Equivalently, if the order places all even basis elements before all odd basis elements, the basis consists of arbitrary nonnegative powers of the even basis elements followed by distinct increasing odd basis elements. No finite-dimensionality assumption is imposed. The basis and order are input data, so the proof makes no basis-selection or choice step.

## Facts & Assumptions

**Given:** A complex Lie superalgebra $\mathfrak g$, its enveloping-superalgebra quotient $U(\mathfrak g)$, and a supplied totally ordered homogeneous basis $B$.

[F1] [[def-lie-superalgebra-over-complex-numbers]]: for homogeneous $x,y,z$, the bracket is graded-skew and satisfies $[x,[y,z]]=\left\lbrack [x,y],z\right\rbrack+(-1)^{|x||y|}[y,[x,z]]$.

[F2] [[def-universal-enveloping-superalgebra]]: in $U(\mathfrak g)$, $xy-(-1)^{|x||y|}yx=[x,y]$ for homogeneous $x,y$; for odd $x$, $x^2=[x,x]/2$.

[F3] [[lem-odd-self-jacobi-in-characteristic-zero]]: $[x,[x,x]]=0$ for every odd $x$.

[F4] [[thm-tensor-product-basis-from-bases]]: over a commutative ring, if two modules are free with specified bases, their elementary tensors form a basis of their tensor product.

[F5] [[lem-field-is-a-commutative-ring]]: $\mathbb C$ is a commutative ring, so [F4] applies to tensor powers over $\mathbb C$.

## Proof




1.1 For adjacent homogeneous basis elements $x>y$, use [F2] to replace $xy$ by $(-1)^{|x||y|}yx+[x,y]$; if $x=y$ is odd, use [F2] to replace $xx$ by $[x,x]/2$. If $x=y$ is even, graded skew symmetry gives $[x,x]=0$ over $\mathbb C$, so no square rule is needed. Expand each bracket in the supplied basis. [given, F1, F2, construct]


1.2 The remaining overlaps have a repeated odd basis element. For $xxz$, where $x$ is odd and $x>z$, the two reductions differ after ordering shorter terms by $\tfrac12\left\lbrack [x,x],z\right\rbrack-[x,[x,z]]=0$; the equality follows from [F1] with $(x,x,z)$. For $zxx$, where $x$ is odd and $z>x$, the difference is $\tfrac12\left\lbrack [x,x],z\right\rbrack+(-1)^{|z|}[x,[z,x]]=0$: [F1] and graded skew give $[z,[x,x]]=2(-1)^{|z|}[x,[z,x]]$, while $\left\lbrack [x,x],z\right\rbrack=-[z,[x,x]]$. This also covers the pattern $xyy$ after renaming. For $xxx$, the two square reductions differ by $\tfrac12\left\lbrack [x,x],x\right\rbrack= -\tfrac12[x,[x,x]]=0$, using [F3]. Thus every one-step overlap resolves. [F1, F2, F3, algebra]


2.1 These replacements terminate: for a word $w=b_1\cdots b_n$, define $\operatorname{inv}(w)=|\{(i,j):1\le i<j\le n,\ b_i>b_j\}|$, and order words by $(n,\operatorname{inv}(w))$ lexicographically. Swapping an adjacent descending pair keeps length and reduces the inversion count by one; a bracket term has smaller length; and an odd-square replacement has length one. Each bracket has finite basis support, so each reduction is finite. [given, step 1.1, algebra]


2.2 For a strict descending triple $x>y>z$, reducing the left pair first or the right pair first gives the same ordered cubic term. After using the length-two relation [F2] to order the bracket terms, the difference of the two results is $-[x,[y,z]]+(-1)^{|x||y|}[y,[x,z]]+\left\lbrack [x,y],z\right\rbrack$, which is zero by [F1]. Disjoint reductions commute because they change disjoint adjacent pairs. [F1, F2, step 1.1, algebra]


3.1 Termination and the verified overlap resolutions give a unique normal form by induction on the ordered pair (length, inversion count): compare the first reductions of any two reduction sequences; disjoint reductions commute, overlapping reductions have a common continuation, and all later terms have smaller measure. For $n=1$, $B$ is a basis of $\mathfrak g$. If words of length $n$ form a basis of $\mathfrak g^{\otimes n}$, apply [F4], using [F5], to that basis and $B$; under the recursive tensor-power identification, the resulting elementary tensors are exactly the words of length $n+1$. Thus words of length $n$ form a basis of $\mathfrak g^{\otimes n}$ for every $n\ge1$. The $n=0$ summand is $\mathbb C$ with basis the unit, so the tensor words form a basis of $T(\mathfrak g)$. Extend the normal-form operation linearly from those words to the vector space spanned by irreducible words. [F4, F5, step 2.1, step 2.2, step 1.2, algebra]


4.1 In any left or right word context, a basis-pair defining relation has normal form zero: the local rewrite can be applied at that same adjacent pair, and confluence gives the same normal form. Relations for reversed pairs follow from graded skew symmetry; the equal-even relation is zero. Bilinearity gives the relation for arbitrary homogeneous pairs, so every generator of the two-sided ideal defining $U(\mathfrak g)$, with arbitrary word contexts, lies in the kernel. Conversely, each reduction changes a word by an element of that ideal, so every word differs from its normal form by an element of the ideal. Thus the kernel is exactly the ideal. The normal-form map fixes each irreducible word, which is a tensor word in the basis from [F4]; these distinct words are linearly independent in its image and form a basis of the quotient. [F1, F2, F4, step 1.1, step 3.1, algebra]


5.1 A word is irreducible exactly when its basis letters are weakly increasing and no odd letter is repeated: every forbidden adjacent descending pair or odd square is reducible, while any nonordered word has an adjacent descent. Therefore the irreducible words are precisely the monomials in the Statement. The empty word is the unit and covers degree zero. [F4, step 1.1, step 4.1, algebra] ∎
