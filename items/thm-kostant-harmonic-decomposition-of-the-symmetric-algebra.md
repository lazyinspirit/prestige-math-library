---
id: thm-kostant-harmonic-decomposition-of-the-symmetric-algebra
kind: theorem
title: Kostant harmonic decomposition of the symmetric algebra
status: "published"
origin: pipeline
deps: [lem-kostant-harmonics-give-an-invariant-polynomial-complement, lem-local-chevalley-restriction-for-kostant-freeness, thm-chevalley-shephard-todd-for-finite-weyl-groups]
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Pavel Etingof, Representations of Lie Groups, Theorem 13.1, first proof paragraph; explicit lifting and harmonic identification below
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
proof_strategy: direct
---

## Statement

For a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, set $S=S(\mathfrak g)$, $R=S^{\mathfrak g}$, and let $\mathcal H$ be its Kostant harmonic subspace. Multiplication is an isomorphism
$$R\otimes_{\mathbb C}\mathcal H\longrightarrow S$$
of graded $\mathfrak g$-modules, where $R$ carries the trivial action. The assertion includes $\mathfrak g=0$ and uses no AC.

## Facts & Assumptions

**Given:** The indicated finite-dimensional semisimple Lie algebra and symmetric algebra.

[F1] With $I=SR_+$, the homogeneous harmonic spaces give $S_d=I_d\oplus\mathcal H_d$, and both summands are $\mathfrak g$-stable, by [[lem-kostant-harmonics-give-an-invariant-polynomial-complement]].

[F2] Cartan restriction, equivalently the symmetric-algebra map induced by the Killing-orthogonal projection onto a Cartan $\mathfrak h$, identifies $R$ with $S(\mathfrak h)^W$, by [[lem-local-chevalley-restriction-for-kostant-freeness]]. Its Cartan/root decomposition gives the complementary sum $\mathfrak n$ of root spaces.

[F3] The algebra $S(\mathfrak h)^W$ has homogeneous independent generators $q_1,\ldots,q_r$ of positive degrees $d_i$, and $S(\mathfrak h)$ has a finite homogeneous free basis $b_1,\ldots,b_m$ over it, by [[thm-chevalley-shephard-todd-for-finite-weyl-groups]].

## Proof

1.1 Fix finite bases of $\mathfrak h$ and $\mathfrak n$. Polynomial monomials identify $S$ with $S(\mathfrak h)\otimes S(\mathfrak n)$. Give a Cartan generator weight two and a root-space generator weight one; filter by total weight. This is an increasing filtration indexed by nonnegative integers and every polynomial has finite weight. A homogeneous polynomial of ordinary degree $d$ has weights between $d$ and $2d$, and its weight-$2d$ part is exactly its projection onto $S^d(\mathfrak h)$. By F2 each $q_i$ has a unique homogeneous inverse image $p_i\in R$ of degree $d_i$. Its leading weighted part is $q_i$, since $q_i\ne0$. F2 also gives $R=\mathbb C[p_1,\ldots,p_r]$ with algebraically independent generators. [F2, F3, given, algebra]

2.1 Let $z^a$ range over the monomials in the fixed root-space basis, and set $e_{j,a}=b_jz^a$. In the polynomial algebra with its weight grading these form a free basis over $\mathbb C[q_1,\ldots,q_r]$: expand first in the independent root monomials, then use F3 for each coefficient. Their ordinary degrees are $\deg b_j+|a|$ and their weights are $2\deg b_j+|a|$. We prove that exactly the same polynomials form a graded free $R$-basis of $S$. [F3, step 1.1, algebra]

3.1 For spanning, take an ordinary homogeneous $s\in S_d$ of weight $N$. Express its leading weighted part uniquely in the basis from step 2.1. Since that basis and the $q_i$ are homogeneous for both degrees, only monomials $q^k e_{j,a}$ having ordinary degree $d$ and weight $N$ occur. Replace $q^k$ by $p^k$ and subtract this finite sum from $s$. Step 1.1 makes its leading part identical, so the remainder has strictly smaller weight and the same ordinary degree. Repeat; after at most $N+1$ decreases the remainder is zero. This proves spanning by finite expressions. For independence, suppose a nonzero finite expression $\sum c_{j,a}(p)e_{j,a}$ vanishes. Give the variables in each coefficient weight $2d_i$ and take the largest total weight among its nonzero monomials, including the weight of $e_{j,a}$. The leading part of the expression is the corresponding sum of $q$-coefficient terms in the free basis of step 2.1. Algebraic independence of the $q_i$ and that free basis show this sum is nonzero, a contradiction. Thus we have the stated free decomposition; ordinary degrees were preserved throughout. [step 1.1, step 2.1, algebra]

4.1 Quotienting this free decomposition by $(p_1,\ldots,p_r)S=I$ shows that the classes of the $e_{j,a}$ form a homogeneous complex basis of $S/I$. In each ordinary degree only finitely many of them occur: $j$ has finitely many possibilities and root monomials of bounded degree in finitely many variables form a finite set. F1 identifies $\mathcal H$ with $S/I$ by the quotient map, degree by degree. Consequently, in every degree $d$, the spaces $(R\otimes\mathcal H)_d$ and $S_d$ have equal finite dimensions, by replacing each basis class of $S/I$ in the free decomposition with its degree-preserving harmonic representative. This argument uses the canonical inverse of F1's quotient isomorphism, and makes no infinite sequence of basis choices. [F1, step 1.1, step 3.1, algebra]

5.1 Multiplication $R\otimes\mathcal H\to S$ is surjective by induction on ordinary degree. For homogeneous $s\in S_d$, F1 writes $s=h+i$ with $h\in\mathcal H_d$ and $i\in I_d$. The ideal $I$ is generated by the finitely many $p_i$, so its degree-$d$ part consists of sums $\sum_i p_i s_i$ with $s_i\in S_{d-d_i}$; obtain these homogeneous coefficients by taking components of any ideal expression. Each $d_i>0$, so the induction expresses every $s_i$ as a sum of invariant multiples of harmonics. Multiplying those expressions by $p_i$ proves the step. At degree zero the assertion follows from $I_0=0$. Equal finite dimensions from step 4.1 now make this surjection injective degreewise, hence an isomorphism on the algebraic graded direct sums. [F1, step 1.1, step 4.1, algebra]

6.1 The adjoint action is a derivation, annihilates $R$ and preserves $\mathcal H$ by F1. Therefore $x\cdot(rh)=r(x\cdot h)$, exactly the tensor-product action, so the isomorphism is $\mathfrak g$-equivariant. For $\mathfrak g=0$ all polynomial algebras are $\mathbb C$ and the map is scalar multiplication. The proof selected only finite bases and finitely many generators; all infinite monomial collections are explicitly indexed by finite tuples of nonnegative integers, and all reductions terminate. No AC is used. [F1, step 5.1, given, algebra] ∎
