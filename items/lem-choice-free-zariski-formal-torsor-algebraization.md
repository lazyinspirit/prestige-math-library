---
id: lem-choice-free-zariski-formal-torsor-algebraization
kind: lemma
title: "Choice-free algebraization of an explicitly trivialized formal torsor"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $k$ be a field, $A=k\llbracket t\rrbracket$, and let $X$ be a flat projective $A$-scheme. Let $G$ be a specified finite group, and let $\mathfrak X$ be the $t$-adic completion of $X$. Suppose a finite étale formal $G$-torsor on $\mathfrak X$ is given with trivializations on the completions of a specified finite affine cover of $X$, each affine lying in a standard chart of a specified projective embedding. Then it is the completion of a finite étale $G$-torsor on $X$. The algebraized torsor and its equivariant maps are unique up to unique isomorphism inducing the specified formal maps. The construction uses finite selections and deterministic finite-dimensional recursions; no Axiom of Choice or Dependent Choice is assumed.

## Facts & Assumptions

**Given:** The field, flat projective scheme, finite group, specified affine cover and compatible formal torsor with its trivializations.

## Proof

1.1 For a coherent sheaf on a closed subscheme of projective space over a Noetherian affine base, the standard finite affine Čech calculation gives finite cohomology, global generation after a sufficiently large twist, and vanishing of positive cohomology after a sufficiently large twist. Briefly, the Čech complex for $\mathcal O(d)$ decomposes into Laurent-monomial simplex complexes; inserting the least index outside the negative-exponent set contracts every nonexceptional simplex. For a coherent sheaf, finite chart generators extend after clearing finitely many denominators; a finite surjection by twists and its coherent kernel reduce the assertions by descending through at most the projective dimension of the Čech complex. These constructions use finite generator selections only. They apply over $A$ and over each $A_n=A/(t^{n+1})$. [given, construct, algebra]

2.1 If a coherent $\mathcal Q$ on $X$ satisfies $\mathcal Q/t\mathcal Q=0$, the map $t:\mathcal Q\to\mathcal Q$ is surjective. Its kernel is coherent; after a sufficiently large twist, step 1.1 kills the kernel's $H^1$ and makes $\mathcal Q$ globally generated. Thus $M=H^0(X,\mathcal Q(d))$ is finite over $A$ and satisfies $M=tM$, so finite Nakayama gives $M=0$ and hence $\mathcal Q=0$. In particular a closed subset of $X$ disjoint from the closed fibre is empty, by applying this to its structure sheaf. [step 1.1, algebra] [step 1.1]

3.1 For a finite locally free sheaf $\mathcal H$ on $X$, the natural map $H^0(X,\mathcal H)\to\varprojlim_nH^0(X_n,\mathcal H_n)$ is an isomorphism. Flatness of $X/A$ makes multiplication by $t^{n+1}$ injective on $\mathcal H$. In the exact cohomology sequence of $0\to\mathcal H\xrightarrow{t^{n+1}}\mathcal H\to\mathcal H_n\to0$, the connecting classes of a compatible system obey $\delta_n=t\delta_{n+1}$. The finite $A$-module $H^1(X,\mathcal H)$ is $t$-adically separated, so every $\delta_n$ is zero. The resulting compatible classes in $H^0(X,\mathcal H)/t^{n+1}$ come from a unique section because that finite $A$-module is complete. Finite modules over the complete DVR $k\llbracket t\rrbracket$ are complete by finite matrix reduction. Taking $\mathcal H=E^\vee\otimes F$ proves the corresponding formal Hom isomorphism for finite locally free $E,F$. [step 1.1, algebra] [step 2.1]

4.1 Let $B_n$ be the finite locally free algebra of the formal torsor on $X_n$. Choose finitely many generators of $B_0(d)$ after one sufficiently large twist $d$. Because $X/A$ is flat and $B_n$ is locally free, the successive kernel of $B_n(d)\to B_{n-1}(d)$ is $B_0(d)$; step 1.1 lets us choose $d$ so that $H^1(X_0,B_0(d))=0$. Consequently the transition maps on global sections are surjective. [step 1.1, given, choose, algebra] [step 3.1]

5.1 The specified affine trivializations give an ordered countable monomial spanning list, over $k$, for the finite direct sum of chart sections of $B_n(d)$: choose finite coordinate generators once and order their monomials, including $1,t,\ldots,t^n$ and the finitely many torsor coordinates. Global sections form the kernel of the specified finite Čech difference map and are finite-dimensional over $k$ by step 1.1. Intersect that kernel with the span of the first $D$ monomials; because it is finite-dimensional, there is a least $D$ for which the intersection is the whole kernel. Reduced row echelon form on that finite span gives a uniquely specified ordered basis. Applying the same rule at each $n$ gives specified bases and, by row reduction with free variables set to zero, specified linear right inverses to the surjective transition maps. Deterministic recursion lifts the finitely many special-fibre generators compatibly to all $n$, without a countable sequence of arbitrary choices. Nilpotent Nakayama makes the resulting maps $\mathcal O_{X_n}(-d)^q\to B_n$ surjective. [step 1.1, step 4.1, construct, algebra] [step 4.1]

6.1 Let $K_n$ be the kernels. They are locally free and compatible under reduction, since the $B_n$ are locally free. Choose a single twist $e$ with $K_0(e)$ globally generated and $H^1(X_0,K_0(e))=0$. The same argument as steps 4.1–5.1 gives compatible lifts of finitely many special-fibre generators of $K_0(e)$: the local sections of $K_n(e)$ are kernels inside the fixed finite free chart modules, so the same ordered-monomial and row-reduction rule supplies specified bases. This yields compatible matrices $\mathcal O_{X_n}(-e)^r\to\mathcal O_{X_n}(-d)^q$ whose cokernels are $B_n$. [step 4.1, step 5.1, choose, construct, algebra] [step 5.1]

7.1 Apply step 3.1 to the finite locally free line bundle $\mathcal O(e-d)$ to lift the compatible matrix entries to $X$, and let $E$ be the resulting cokernel. Its reduction modulo every $t^{n+1}$ is $B_n$. At a point of the closed fibre, lift a basis of $E/tE$; nilpotent Nakayama makes the map from a free module surjective, and its reduction modulo every $t^{n+1}$ is an isomorphism because $B_n$ is free of the same rank. The kernel lies in every $t^{n+1}$ multiple of a finite free module and vanishes by Krull intersection. Thus $E$ is locally free at every closed-fibre point. Its nonfree locus is closed and misses the closed fibre, so step 2.1 makes it empty. [step 2.1, step 3.1, step 6.1, algebra] [step 6.1]

8.1 Formal Hom from step 3.1 algebraizes the compatible multiplication, unit and $G$-action on $B_n$ as maps on $E$; injectivity of the same comparison proves associativity, commutativity, unit and group-action identities. The coherent differentials of the resulting finite locally free algebra vanish on the closed fibre, so step 2.1 makes them vanish everywhere; the algebra is finite étale. The torsor comparison map is a map of finite locally free modules of the same rank and is an isomorphism on the closed fibre; its determinant has closed noninvertibility locus disjoint from that fibre, hence is invertible by step 2.1. The algebraized cover is therefore a $G$-torsor. Formal Hom likewise makes equivariant maps lift uniquely and shows the constructed isomorphism class is unique. [step 2.1, step 3.1, step 7.1, algebra] [step 7.1] ∎
