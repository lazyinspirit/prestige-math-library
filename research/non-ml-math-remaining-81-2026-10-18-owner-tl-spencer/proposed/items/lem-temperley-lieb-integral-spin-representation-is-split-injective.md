---
id: lem-temperley-lieb-integral-spin-representation-is-split-injective
kind: lemma
title: "The integral two-letter Temperley–Lieb representation has a linear left inverse"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - thm-temperley-lieb-diagram-generators-span
  - def-free-module-on-a-set-and-standard-basis
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ben Elias and Nicolas Libedinsky, Soergel bimodules for universal Coxeter groups, Appendix A by Ben Webster"
      url: "https://arxiv.org/pdf/1401.2467v2"
      locator: "Appendix A, Lemma A.7, PDF p. 27: leading-word independence of crossingless cup tensors. The local proof additionally constructs a linear left inverse and uses the positive-loop convention."
---

## Statement

Put $A=\mathbb Z[q,q^{-1}]$ and $\delta=q+q^{-1}$. For a commutative $A$-algebra $R$, let $V_n$ be the free $R$-module on binary words of length $n$, with $V_0=R$. The cup and cap maps are

$$c(1)=q(01)+(10),\qquad b(01)=1,\quad b(10)=q^{-1},\quad b(00)=b(11)=0.$$

Insertion of these maps in adjacent positions defines a representation

$$\rho_n:\mathrm{TL}_n(R,\delta)\longrightarrow\operatorname{End}_R(V_n).$$

Over $A$ this map has an $A$-linear left inverse, and the same left inverse works after every base change to $R$. In particular, it is injective over every such $R$. It preserves the number of ones, and on the local ordered basis $00,01,10,11$ the generator $d_i$ has zero $00,11$ blocks and middle block

$$\begin{pmatrix}q&1\\1&q^{-1}\end{pmatrix}.$$

Horizontal reflection of an endomorphism diagram is represented by matrix transpose.

## Facts & Assumptions

**Given:** The diagram modules and stacking convention with loop value $q+q^{-1}$.

[F1] Diagram modules are free on noncrossing boundary pairings, composition removes each closed component with one factor $\delta$, and juxtaposition is strict monoidal ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]]).

[F2] Elementary cup-cap diagrams generate every endomorphism diagram ([[thm-temperley-lieb-diagram-generators-span]]).

[F3] A free module has its coefficient-coordinate maps in its designated basis ([[def-free-module-on-a-set-and-standard-basis]]).

## Proof

**Given:** $A$, $R$, the word bases, and the explicitly specified maps $c,b$.

1.1 Direct substitution on $0,1$ gives $(b\otimes1)(1\otimes c)=1=(1\otimes b)(c\otimes1)$, while $b(c(1))=q+q^{-1}$. Here a tensor notation means insertion of the displayed local map, with all other word letters unchanged. Decompose a noncrossing pairing into local cups, caps and straight segments. Successively eliminating an adjacent opposite pair of bends uses one of the two identity formulas; eliminating a closed component uses $bc=\delta$. Thus the map associated to a pairing is independent of its decomposition, and stacking corresponds to map composition: every exterior path straightens by these identities and each interior cycle contributes $\delta$, exactly as in [F1]. This constructs $\rho_n$. [F1, given, construct, algebra]

1.2 On two letters the cup-cap composite is $cb$; applying it to $01$ and $10$ gives respectively $q(01)+(10)$ and $(01)+q^{-1}(10)$, and it kills $00,11$. This proves the matrix formula and preservation of the number of ones. Its matrix is symmetric. Reflecting reverses products and fixes each generator, so [F2] implies $\rho_n(a^*)=\rho_n(a)^{\mathsf T}$ for all $a$. [F2, step 1.1, algebra]

2.1 Bend the $n$ input boundary points of an endomorphism pairing around the left side, reversing their order. This is a bijection from its diagram basis to noncrossing cup matchings on $2n$ ordered points. On word-space maps the same bending is a linear isomorphism $\operatorname{End}_R(V_n)\to V_{2n}$: the cap pairing on $V_1$ has matrix $\begin{pmatrix}0&1\\q^{-1}&0\end{pmatrix}$ with unit determinant, and repeated use of its inverse cup, with reversed word order on the bent side, gives the two inverse bending maps. The identities in step 1.1 verify that bending a diagram's matrix gives precisely its cup vector. No loop is introduced by bending. [F1, F3, step 1.1, construct, algebra]

2.2 For a cup matching $C$, form the word $w_C$ with $1$ at each left cup endpoint and $0$ at each right endpoint. Every prefix has at least as many ones as zeros, and the full word is balanced. These words determine their matchings uniquely: pair each zero to the most recent unmatched one; any other pairing would cross an intervening pair. The cup vector of $C$ has coefficient $1$ at $w_C$: choose the $10$ term in every cup. Every other term is lexicographically smaller, with $1>0$, because the first cup whose orientation changes has its left endpoint changed from $1$ to $0$. Its other factors are powers of the unit $q$. This argument uses only the endpoint matching, and applies to nested and disjoint cups alike. [F1, F3, step 2.1, construct, algebra]

3.1 Order the matchings by $w_C$, and restrict their cup vectors to the coefficient coordinates indexed by the same words $w_C$. The resulting square matrix is triangular with every diagonal entry $1$, so its inverse has entries in $A$: subtract successive earlier rows, or use the finite sum $1-N+N^2-\cdots$ for its strictly triangular part $N$. Composing coefficient restriction, this inverse and the inverse basis identification gives an $A$-linear left inverse on cup vectors. Composing with bending in step 2.1 gives an $A$-linear left inverse to $\rho_n$. All its matrix identities remain identities after base change, so the same construction is a left inverse over $R$ and proves injectivity there. At $n=0$ the empty matching and empty word give the one-by-one matrix $(1)$, so the same conclusion applies. [F3, step 2.1, step 2.2, construct, algebra] ∎
