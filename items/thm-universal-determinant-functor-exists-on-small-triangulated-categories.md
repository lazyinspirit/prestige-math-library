---
id: thm-universal-determinant-functor-exists-on-small-triangulated-categories
kind: theorem
title: Universal Determinant Functors Exist for Small Triangulated Categories
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-universal-determinant-functor-on-a-perfect-derived-category
- def-triangulated-category
sources:
  references:
  - title: Breuning, Determinant Functors on Triangulated Categories, Theorem 4.3
    url: https://arxiv.org/pdf/math/0610435
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

For every small triangulated category $T$, there is a Picard category $\mathcal W(T)$ and a universal determinant functor $g_T:T\to\mathcal W(T)$ in the sense defined above. Any two choices are equivalent as Picard categories by a monoidal equivalence compatible with their determinant functors.

## Statement references

[Breuning, Theorem 4.3](https://arxiv.org/pdf/math/0610435)



## Proof

**Given:** A small triangulated category $T$ and the determinant-functor axioms in the Definition.

1.1 We construct a category by typed terms. An object term is either a symbol $[A]$ for an object of $T$, or a parenthesized expression $(X\otimes Y)$ in object terms. An arrow term has specified object terms as source and target. Its generators are identities; associativity arrows $X\otimes(Y\otimes Z)\longrightarrow(X\otimes Y)\otimes Z$ and their inverses; symmetry arrows $X\otimes Y\longrightarrow Y\otimes X$; an arrow $[a]:[A]\longrightarrow[B]$ for each isomorphism $a:A\to B$ in $T$; and an invertible arrow $[\Delta]:[B]\longrightarrow[A]\otimes[C]$ for each distinguished triangle $\Delta:A\to B\to C\to A[1]$. Close these terms under typed composition and tensor product. Because the data of $T$ are sets, all object terms and all arrow terms form sets: they are finite words in a set of symbols, with their typing conditions imposed. [given, construct]

2.1 Divide parallel arrow terms by the least congruence imposing the category identities and associativity, bifunctoriality of tensor product, naturality of the associators and symmetries, the pentagon and symmetric hexagon identities, the inverse identities for structural arrows, the equations $[\operatorname{id}_A]=\operatorname{id}_{[A]}$ and $[ba]=[b][a]$, and the determinant-functor naturality, octahedral associativity and split-triangle commutativity equations. More explicitly, an isomorphism $(a,b,c):\Delta\to\Delta'$ imposes $[\Delta'][b]=([a]\otimes[c])[\Delta]$; each octahedron imposes equality of its two composites from the determinant of its central object to the ordered three factors; and the two split triangles for $A\oplus B$ impose equality after the symmetry of $[A]\otimes[B]$. These are equations between parallel terms. The intersection of all congruences containing them exists, since the indiscrete equivalence on every set of parallel terms is one such congruence. Quotienting gives a small category $V$ with an associative symmetric tensor structure. Every arrow is invertible, because each generator is invertible, and composition and tensor product preserve invertibility. [step 1.1, construct, algebra]

3.1 Every object term $X$ is isomorphic to a symbol $[A]$, by an arrow term involving no symmetry. Induct on its formation. A symbol needs only its identity. If $X=Y\otimes Z$, reduce $Y,Z$ to $[B],[C]$ by induction and use the inverse of the arrow for the split triangle $B\to B\oplus C\to C\to B[1]$. This gives $Y\otimes Z\cong[B\oplus C]$ using only tensors, compositions and triangle arrows. [step 2.1, induction, construct]

3.2 Fix a zero object $0$ in $T$. For a symbol $[A]$, let $\lambda_{[A]}:[0]\otimes[A]\to[A]$ be the inverse triangle arrow of $0\to A\xrightarrow{\operatorname{id}}A\to0[1]$. Recursively set $\lambda_{X\otimes Y}=(\lambda_X\otimes\operatorname{id}_Y)\varphi_{[0],X,Y}$, where $\varphi$ is the associator from right to left parentheses. We verify naturality, namely $u\lambda_X=\lambda_Y(\operatorname{id}_{[0]}\otimes u)$ for each arrow $u:X\to Y$. For arrows $[a]$ this is the imposed triangle naturality for the two zero triangles. For $u=[\Delta]$, where $\Delta:A\to B\to C\to A[1]$, apply octahedral associativity to the morphisms $0\to A\to B$: the four triangles are the zero triangles of $A,B$, $\Delta$, and its identity copy. Its equation is exactly the required naturality equation. It holds for $[\Delta]^{-1}$ by inversion. For associators it is the pentagon with initial factor $[0]$, together with the recursive definition of $\lambda$; the inverse associator follows by inversion. Identities, compositions and tensors preserve the naturality equation by bifunctoriality. Consequently it holds for all terms containing no symmetry. [step 2.1, construct, induction, algebra]

4.1 For the symmetry of two symbols, split-triangle commutativity expresses it as $\psi_{[A],[B]}=[\Delta_2][\Delta_1]^{-1}$, where $\Delta_1$ and $\Delta_2$ are the two split triangles of $A\oplus B$ with their ends in opposite order. Naturality of $\lambda$ for this arrow therefore follows from step 3.2. For arbitrary $X,Y$, choose the symmetry-free reductions $v:X\to[A]$ and $w:Y\to[B]$ from step 3.1. Naturality of symmetry gives $(w\otimes v)\psi_{X,Y}=\psi_{[A],[B]}(v\otimes w)$. The naturality equations for $v,w$ and the symbol symmetry, already proved, transport across this equation and prove the equation for $\psi_{X,Y}$. Induction on arrow terms now proves naturality of $\lambda$ for every arrow. [step 2.1, step 3.1, step 3.2, induction, algebra]

5.1 Tensoring by every object is an equivalence. By step 3.1 it suffices to check tensoring by $[A]$. Its inverse is tensoring by $[A[1]]$. Indeed the distinguished triangle $A\to0\to A[1]\xrightarrow{\operatorname{id}}A[1]$ supplies an isomorphism $[A]\otimes[A[1]]\cong[0]$. Associativity, symmetry and this isomorphism give natural isomorphisms from either composite of these two tensor functors to $[0]\otimes-$; step 4.1 identifies the latter naturally with the identity functor. For the convention with a specified monoidal unit, take $[0]$ as unit, $\lambda_X$ as left constraint and $\rho_X=\lambda_X\psi_{X,[0]}$ as right constraint. The recursive equation for $\lambda_{X\otimes Y}$, the hexagon and naturality give the unit triangle equation; on the two symbols $[0],[0]$ the split triangles are identical, so split commutativity gives $\psi_{[0],[0]}=1$ and $\lambda_{[0]}=\rho_{[0]}$. These are the unit coherence conditions. Thus $V$ is nonempty, all its arrows are invertible and all its translation functors are equivalences. It is a Picard category in the convention of the Definition. [step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 Set $g_1(A)=[A]$, $g_1(a)=[a]$, and $g_2(\Delta)=[\Delta]$. These assignments are a determinant functor $g:T\to V$: functoriality and precisely its three compatibility axioms were imposed in step 2.1. [step 2.1, step 5.1, construct]

7.1 Let $h:T\to\mathcal P$ be any determinant functor into a Picard category. Evaluate each symbol $[A]$ as $h_1(A)$ and each parenthesized tensor recursively as the corresponding parenthesized tensor in $\mathcal P$. Evaluate $[a]$ as $h_1(a)$, $[\Delta]$ as $h_2(\Delta)$, their inverses as inverse arrows, and the structural generators as the structural arrows of $\mathcal P$. Extend evaluation to composition and tensor product. Every relation of step 2.1 holds after evaluation, because it is respectively a category, symmetric tensor or determinant-functor axiom. Evaluation therefore factors through a monoidal functor $M:V\to\mathcal P$, whose tensor comparison maps can be taken to be identities, and $Mg=h$. This proves essential surjectivity of precomposition with $g$. [step 2.1, step 6.1, construct, algebra]

8.1 To prove full faithfulness, let $M,M':V\to\mathcal P$ be monoidal functors, with tensor comparison maps $c,c'$, and let $\theta:Mg\to M'g$ be a morphism of determinant functors. There is at most one monoidal natural transformation $\kappa:M\to M'$ restricting to $\theta$: it must have $\kappa_{[A]}=\theta_A$ and $\kappa_{X\otimes Y}=c'_{X,Y}(\kappa_X\otimes\kappa_Y)c_{X,Y}^{-1}$. These formulas also construct such a transformation. Naturality for $[a]$ is naturality of $\theta$; for $[\Delta]$ it is its defining compatibility with triangle determinants; for associators and symmetries it is the compatibility of $c,c'$ with the structural constraints. Naturality for inverses, compositions and tensors follows from the same equation by inversion, composition and bifunctoriality. Induction on arrow terms proves naturality for all arrows. The recursive formula gives monoidality. All components are invertible. Thus the restriction functor is fully faithful, and step 7.1 proves that it is an equivalence. [step 1.1, step 2.1, step 6.1, step 7.1, construct, induction, algebra]

9.1 This proves the asserted universal property. If $(V',g')$ is another universal choice, universality supplies monoidal functors $A:V\to V'$ and $B:V'\to V$ compatible with $g,g'$. Their composites restrict to determinant functors isomorphic to $g$ and $g'$ respectively. Full faithfulness of the two restriction functors lifts these isomorphisms to $BA\cong\operatorname{id}_V$ and $AB\cong\operatorname{id}_{V'}$. Therefore $A$ is a monoidal equivalence compatible with the universal determinant functors, as claimed. [step 8.1, construct, algebra] ∎
