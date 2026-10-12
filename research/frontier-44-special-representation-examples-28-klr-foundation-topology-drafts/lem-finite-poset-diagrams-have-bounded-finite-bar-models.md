---
id: lem-finite-poset-diagrams-have-bounded-finite-bar-models
kind: lemma
title: Finite poset diagrams have bounded finite bar models
status: draft
origin: session
deps: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Mark Goresky, Lecture notes on sheaves and perverse sheaves, simplicial sheaf diagrams
      url: https://www.math.ias.edu/~goresky/pdf/all2.pdf
---

## Statement

Let $P$ be a finite nonempty poset, regarded as a category with one arrow $p\to q$ when $p\le q$, and let $h$ be the largest number of strict inequalities in a chain. Let $\operatorname{Diag}_k(P)$ be the abelian category of covariant diagrams of $k$-vector spaces. If $M$ is a bounded complex of diagrams whose vector spaces are finite-dimensional and vanish outside internal degrees $[a,b]$, then its derived inverse limit has a finite-dimensional cochain model concentrated in $[a,b+h]$. If $A,B$ are such complexes, concentrated in $[a,b]$ and $[c,d]$ respectively, their derived Hom has a finite-dimensional model concentrated in $[c-b,d-a+h]$. These models commute with every field extension. For the empty poset, diagram sections and Hom are zero by convention.

## Facts & Assumptions

**Given:** A finite poset $P$, a field $k$, and the bounded finite-dimensional diagram complexes specified above.

[F1] Exactness of vector-space diagrams is tested objectwise; evaluation at a poset object is therefore exact. A projective object is one whose Hom functor preserves epimorphisms.

[F2] A bounded complex of projective objects computes derived Hom: Hom into an acyclic complex is acyclic by filtering by the finitely many source degrees and using projectivity in each degree. This finite-filtration argument is the definition of the projective derived model used here.

## Proof

1.1 For $p\in P$, define the representable diagram $Q_p(q)=k$ when $p\le q$ and zero otherwise, with identity maps where both values are nonzero. A natural transformation $Q_p\to N$ is determined uniquely by the image of $1$ at $p$, giving $\operatorname{Hom}(Q_p,N)=N(p)$. Hence $Q_p$ is projective by [F1]. More generally $Q_p\otimes_k V$ is projective for finite-dimensional $V$: choose a finite basis of $V$, identify the tensor with a finite sum of copies of $Q_p$, and lift maps componentwise. [F1, given, construct]

2.1 For a diagram $N$, put $\mathcal B_n(N)=\bigoplus_{p_0<\cdots<p_n}Q_{p_n}\otimes_k N(p_0)$. The first face deletes $p_0$ and applies $N(p_0\to p_1)$ to the coefficient; each inner face deletes its vertex and leaves the coefficient unchanged; the last face uses the natural map $Q_{p_n}\to Q_{p_{n-1}}$ and leaves the coefficient unchanged. Define $\partial$ as the alternating sum of these faces. The face identities hold because diagram transport composes and the representable maps compose; pairing deletions in opposite orders gives $\partial^2=0$. In degree zero augment $Q_p\otimes N(p)$ to $N$ using its structure maps. There are no strict chains with $n>h$. [step 1.1, algebra, construct]

3.1 Evaluate the augmented bar complex at $q\in P$. Its degree-$n$ summands are chains $p_0<\cdots<p_n\le q$ with coefficient in $N(p_0)$; the augmentation applies $N(p_0\to q)$. Define the degree-$n$ contraction by appending $q$ with sign $(-1)^{n+1}$ when $p_n<q$, and by zero when $p_n=q$. In augmented degree $-1$ send $v\in N(q)$ to the length-zero chain $q$ with coefficient $v$. If $p_n<q$, the last face of the appended chain produces the original chain with sign one; all other faces cancel the corresponding appended faces of $\partial$. If $p_n=q$, only the last-face term in the contraction of $\partial$ survives and produces the original chain. In degree zero the remaining endpoint term is exactly canceled by the augmentation-section term. Thus $\partial s+s\partial=1$ on every evaluated augmented complex. It is exact objectwise, and is a projective resolution of $N$ if the coefficient spaces of $N$ are finite-dimensional. The contraction need not be natural in $q$; objectwise exactness is sufficient. [F1, step 2.1, algebra]

4.1 Apply the same construction to each internal degree of a diagram complex $A$. Its bar maps commute with the internal differential. Give a summand of internal degree $u$ and bar degree $n$ total cochain degree $u-n$, with total differential $d_A+(-1)^u\partial$. The two parts anticommute, so the total differential squares to zero. Filtering the augmented finite double complex by internal degree, or using the objectwise row contractions of step 3.1, shows that augmentation to $A$ is a quasi-isomorphism. The total complex consists of finite-dimensional projective diagrams and is concentrated in $[a-h,b]$. [step 1.1, step 3.1, algebra]

4.2 The ordinary inverse limit of a covariant diagram is $\operatorname{Hom}(\underline{k},N)$: a natural transformation from the constant diagram $\underline{k}$ consists of vectors $v_p\in N(p)$ compatible with every structure map. Resolve $\underline{k}$ using step 3.1. Hom into $M$ gives in bar degree $n$ the finite product $\prod_{p_0<\cdots<p_n}M(p_n)$, with the differential dual to step 2.1. Its total cochain degree is internal degree plus $n$, so it is concentrated in $[a,b+h]$ and has finite-dimensional terms. It computes the derived inverse limit by [F2]. [F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 Resolve $A$ by its total bar complex from step 4.1, and apply Hom into $B$. In each summand Hom is $\operatorname{Hom}_k(A(p_0),B(p_n))$, with the internal differentials and face transports specified above. Since the projective source lies in $[a-h,b]$ and $B$ lies in $[c,d]$, Hom lies in $[c-b,d-a+h]$. There are finitely many chains and finite-dimensional fibers, so every term is finite-dimensional. [F2] and the augmentation quasi-isomorphism identify it with derived Hom. [F2, step 4.1, algebra]

6.1 Every bar term is a finite sum, its Hom term a finite product of Hom between finite-dimensional vector spaces, and all differentials are formed from finite sums of given linear maps with signs. Extension of the coefficient field commutes with these sums, products and Hom spaces. Tensor with a field extension is exact on finite-dimensional vector spaces by a finite-basis splitting of each short exact sequence. Consequently it commutes with the cohomology of each model as well. This proves both base-change assertions; the empty category contributes zero. [step 4.2, step 5.1, algebra] ∎

## Scope note

This proves derived finiteness in the category of finite diagrams. An equivalence between that category's derived model and analytic sheaves constructible for a supplied triangulation is a separate theorem, not an assumption concealed in this lemma. It does not apply to arbitrary sheaves on a compact fiber merely because that fiber is triangulable.
