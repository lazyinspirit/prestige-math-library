---
id: lem-affine-central-coroot-from-the-transpose-null-ray
kind: lemma
title: Affine central coroot from the transpose null ray
status: published
origin: pipeline
deps: [thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms, def-realization-of-a-generalized-cartan-matrix, def-contragredient-lie-algebra-before-the-maximal-ideal-quotient, def-kac-moody-algebra-associated-to-a-gcm]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
proof_strategy: direct
---

## Statement

For an indecomposable affine GCM $A$ in the row-coroot convention $\alpha_j(h_i)=a_{ij}$, there is a unique positive integer vector $b=(b_i)$ with $A^tb=0$ and $\gcd_i b_i=1$. The element $c_A=\sum_i b_i h_i$ is nonzero, central in $\mathfrak g(A)$ and belongs to its derived algebra. On any cyclic highest-weight module of weight $\lambda$, it acts by the scalar $\lambda(c_A)$. This scalar defines the intrinsic GCM **level**; no loop-model normalization is included in this assertion.

## Facts & Assumptions

**Given:** An indecomposable affine GCM with its minimal realization.

[F1] Affine $A$ and $A^t$ have rank $n-1$ and unique positive null rays ([[thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms]]).

[F2] The coroots $h_i$ are independent and $\alpha_j(h_i)=a_{ij}$ ([[def-realization-of-a-generalized-cartan-matrix]]).

[F3] The generators satisfy $[h,e_j]=\alpha_j(h)e_j$, $[h,f_j]=-\alpha_j(h)f_j$, $[e_i,f_i]=h_i$ and commuting Cartan relations ([[def-contragredient-lie-algebra-before-the-maximal-ideal-quotient]]).

[F4] These generators descend to $\mathfrak g(A)$ and the Cartan embeds ([[def-kac-moody-algebra-associated-to-a-gcm]]).

## Proof

1.1 Row reduction of the integer matrix $A^t$ uses rational operations. Its rank over $\mathbb Q$ equals its rank over $\mathbb R$, since the same nonzero minors determine rank. Thus its rational kernel has dimension one: choose the one free coordinate to be $1$ and solve the pivot equations to obtain a nonzero rational null vector. Its real span is the real kernel by F1. Since that kernel contains a strictly positive vector, all its coordinates have one strict sign; change the sign if necessary. Multiply by the product of the finitely many positive denominators to get a positive integer null vector, then divide its entries by their positive gcd to obtain $b$. If $b'$ is another such primitive positive vector, the common null line gives $b'=q b$ with positive rational $q$. Write $q=r/s$ in lowest positive integer terms. Since every $rb_i/s$ is integral and $r,s$ are coprime, $s$ divides every $b_i$, hence $s=1$. Primitivity of $b'$ then forces $r=1$. This proves uniqueness. [F1, given]

2.1 Independence and the embedded Cartan in F2 and F4 make $c_A\ne0$. For every $j$, F2 and F3 give $[c_A,e_j]=(\sum_i b_i a_{ij})e_j=(A^tb)_j e_j=0$ and $[c_A,f_j]=-(A^tb)_j f_j=0$. It also commutes with every Cartan element. The identity $[c_A,[x,y]]=[ [c_A,x],y]+[x,[c_A,y]]$ propagates these equalities through all Lie words in the generators, proving centrality. Moreover $c_A=\sum_i b_i[e_i,f_i]$ by F3, so it belongs to $[\mathfrak g,\mathfrak g]$. [F2, F3, F4, step 1.1]

3.1 On a highest vector $v$ of weight $\lambda$, the Cartan action gives $c_Av=\lambda(c_A)v$. By 2.1, commuting $c_A$ through any finite enveloping word $u$ gives $c_Auv=u c_Av=\lambda(c_A)uv$. Such vectors span the cyclic module, proving scalar action. Positive normalization rules out $b=0$, whereas level zero is permitted. A single affine index cannot occur since the one-by-one GCM $[2]$ has no null vector; no empty-index case is hidden in the indecomposable affine hypothesis. The rational elimination, denominator clearing and gcd operations are finite and require no AC. [F3, F4, step 2.1] ∎
