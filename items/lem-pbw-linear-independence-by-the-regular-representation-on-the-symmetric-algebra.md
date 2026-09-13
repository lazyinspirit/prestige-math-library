---
id: lem-pbw-linear-independence-by-the-regular-representation-on-the-symmetric-algebra
kind: lemma
title: PBW linear independence via the ordered-monomial model
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-linear-basis, lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis, thm-universal-property-of-the-universal-enveloping-algebra]
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Lemma 13.11 and its complete adjacent-transposition/Jacobi proof, printed pages 75–77
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 5.11 and the regular-representation proof outline, printed page 74
---

## Statement

For a supplied basis $B$ of $\mathfrak g$ with a supplied total order, the
weakly increasing monomials in $B$ are linearly independent in
$U(\mathfrak g)$.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ with a specified totally ordered basis
$B$.

[L1] Let $P$ be the vector space freely spanned by weakly increasing finite
words in $B$; these words are the ordered basis model of $S(\mathfrak g)$
([[lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis]]).

[F1] Every vector of $\mathfrak g$, in particular every bracket of two basis
vectors, has a unique finite expansion in $B$. [[def-linear-basis]].

[L2] A Lie action of $\mathfrak g$ on $P$ extends uniquely to a unital
$U(\mathfrak g)$-action
([[thm-universal-property-of-the-universal-enveloping-algebra]]).

## Proof

**Proof technique:** constructive ordered rewriting and its induced regular action.

1.1 On a basis word, orient every adjacent inversion $yx$ with $y>x$ by the linear rewrite $yx\rightsquigarrow xy+[y,x]$, expanding the bracket in the supplied basis by [F1]. Every resulting term decreases lexicographically in (length, inversion number), so every reduction sequence terminates in a linear combination of ordered words. [given, F1, L1, construct]

2.1 Reductions at disjoint adjacent pairs commute after expansion. The only overlapping critical word is $zyx$ with $z>y>x$: reducing its left pair first gives, before lower reductions, $xyz+[y,x]z+y[z,x]+[z,y]x$, whereas reducing its right pair first gives $xyz+x[z,y]+[z,x]y+z[y,x]$. In the outer induction on word length, the difference of their terminal forms is therefore the already-defined normal form of $[{[y,x]},z]+[y,{[z,x]}]+[{[z,y]},x]$, which is zero by the Jacobi identity. [step 1.1, algebra]

3.1 A well-founded induction on the decreasing measure now proves uniqueness of the terminal result: if two reduction sequences start differently, step 2.1 joins their first reductions, and the induction hypothesis identifies the normal forms of all lower terms. Denote the resulting linear normal-form map by $N:T(\mathfrak g)\to P$. It fixes ordered words and satisfies $N(r(yx-xy-[y,x])s)=0$ in every word context. By bilinearity, alternation, and totality of the order, it kills every defining enveloping relator and hence the ideal they generate. [step 1.1, step 2.1, construct, algebra]

4.1 For $x\in\mathfrak g$, define $L_x:P\to P$ by $L_x(p)=N(xp)$, extending from word-basis elements linearly. Context compatibility from step 3.1 gives $N(xN(q))=N(xq)$; consequently $[L_x,L_y](p)=N((xy-yx)p)=N([x,y]p)=L_{[x,y]}(p)$. Thus $x\mapsto L_x$ is a Lie representation. [step 3.1, construct, algebra]

5.1 By [L2], the operators $L_x$ extend to a $U(\mathfrak g)$-action on $P$. If $b_1\leq\cdots\leq b_n$, then the ordered product $\iota_{\mathfrak g}(b_1)\cdots\iota_{\mathfrak g}(b_n)$ sends the empty word to $b_1\cdots b_n$: acting from the right successively inserts $b_n,b_{n-1},\ldots,b_1$ without an inversion. [step 4.1, L2, algebra]

6.1 Apply any finite linear relation among ordered monomials in $U(\mathfrak g)$ to the empty word. Step 5.1 turns it into the same linear combination of distinct basis words of $P$, so every coefficient is zero by [L1]. Hence the ordered monomials are linearly independent, including the empty-basis case. [step 5.1, L1, discharge-construct: step 4.1] ∎
