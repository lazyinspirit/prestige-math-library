---
id: lem-cm-type-tangent-character-eigenspaces-at-unramified-prime
kind: lemma
title: Integral CM tangent-character splitting at a prime unramified in the CM algebra
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- def-cm-algebra-and-cm-type
- cor-ring-of-integers-is-a-dedekind-domain
- lem-dedekind-localisation-at-nonzero-prime-is-dvr
- thm-ring-of-integers-free-of-rank-degree
- thm-discriminant-as-an-embedding-determinant
- thm-ramified-primes-and-the-number-field-discriminant
- cor-square-matrix-invertible-iff-determinant-is-a-unit
- lem-good-reduction-specialization-injective-on-abelian-variety-endomorphisms
- def-abelian-scheme
- thm-differentials-smooth-locally-free
- lem-differentials-commute-base-change-schemes
- thm-finite-flat-modules-over-local-rings-are-free
justified_by: []
sources:
  references:
  - title: J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)
    url: https://arxiv.org/pdf/0705.3446
    locator: Theorem2.1(b), printed16–17, the integral tangent-character decomposition and kernel computation. The discriminant/unit and idempotent rank argument is supplied explicitly here.
---

## Statement

Assume the Axiom of Choice. Let $E=\prod_iE_i$ be a CM algebra of degree $2g$, let $k$ be a number field containing the images of all embeddings of every $E_i$ into an algebraic closure, and let $P$ be a finite prime of $k$ above a rational prime $p$ unramified in every $E_i$. Put $R=\mathcal O_{k,P}$ and $\kappa=R/PR$. Let $\mathcal A/R$ be an abelian scheme of dimension $g$ whose generic fibre $A/k$ has an action $O_E\to\operatorname{End}_k(A)$ of CM type $\Phi\subseteq\operatorname{Hom}_{\mathbb Q\text{-alg}}(E,k)$: on $T_0A$, each $\varphi\in\Phi$ occurs with multiplicity one and every other embedding occurs with multiplicity zero. Extend these endomorphisms uniquely to $\mathcal A$.

The evaluation map is an isomorphism of $R$-algebras
$$O_E\otimes_{\mathbb Z}R\xrightarrow{\sim}\prod_{\sigma:E\to k}R,\qquad a\otimes r\longmapsto(\sigma(a)r)_\sigma.$$
The identity tangent module $T=\operatorname{Lie}(\mathcal A/R)$ has an $R$-basis $(e_\varphi)_{\varphi\in\Phi}$ such that $a e_\varphi=\varphi(a)e_\varphi$ for every $a\in O_E$. Its reduction is the tangent space of the special fibre, with the same diagonal character action reduced modulo $P$. Consequently, for every $\gamma\in O_E$,
$$\dim_\kappa\ker(d\gamma_0:T_0A_0\to T_0A_0)=\#\{\varphi\in\Phi:\varphi(\gamma)\in P\}.$$
If $(\gamma)=\mathfrak v^r$ for one prime $\mathfrak v\mid p$ of $O_E$ and $r\ge1$, this is $\#\{\varphi\in\Phi:\varphi^{-1}(P)=\mathfrak v\}$. If $r=0$, then $\gamma$ is a unit and the kernel has dimension zero. No unramifiedness of $k/\mathbb Q$ at $p$ is assumed.

## Facts & Assumptions

**Given:** AC and all CM algebra, number-field, prime, model and generic-character data in the Statement.

[A1] AC is the stated hypothesis; no extra choice assumption is introduced ([[def-axiom-of-choice]]).

[F1] A CM algebra is a finite product of CM fields. Integer rings are Dedekind domains, their nonzero primes are maximal, and their localizations at such primes are Noetherian local DVRs. Each integer ring has an integral basis, and its field discriminant is the square of its embedding determinant. A rational prime is unramified in that field exactly when it does not divide the field discriminant ([[def-cm-algebra-and-cm-type]], [[cor-ring-of-integers-is-a-dedekind-domain]], [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]], [[thm-ring-of-integers-free-of-rank-degree]], [[thm-discriminant-as-an-embedding-determinant]], [[thm-ramified-primes-and-the-number-field-discriminant]]).

[F2] A square matrix over a commutative ring is invertible if and only if its determinant is a unit ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

[F3] The generic endomorphisms extend uniquely to the good-reduction abelian-scheme model, preserving their ring operations ([[lem-good-reduction-specialization-injective-on-abelian-variety-endomorphisms]]).

[F4] An abelian scheme is smooth of relative dimension $g$. Its relative differential sheaf is locally free of rank $g$, and differentials commute with arbitrary base change ([[def-abelian-scheme]], [[thm-differentials-smooth-locally-free]], [[lem-differentials-commute-base-change-schemes]]).

[F5] A finite flat module over a Noetherian local ring is free ([[thm-finite-flat-modules-over-local-rings-are-free]]).

## Proof

1.1 Choose integral bases for the finitely many $O_{E_i}$ by [F1] and combine them into a $\mathbb Z$-basis $a_1,\ldots,a_{2g}$ of $O_E$. There are $2g$ embeddings $\sigma:E\to k$ under the hypothesis on $k$. Each $\sigma(a_j)$ belongs to $R$: it satisfies the same monic integral polynomial as $a_j$, and lies in $k$, hence is in its ring of integers. The evaluation map in the Statement is therefore a well-defined unital $R$-algebra homomorphism whose matrix in this basis is $M=(\sigma(a_j))_{\sigma,j}$. After arranging factors this matrix is block diagonal by the field factors of $E$. By [F1], $(\det M)^2$ is the product of their field discriminants. No one of these discriminants is divisible by $p$, so their product is a unit in $R$. Therefore $\det M$ itself is a unit, and [F2] makes evaluation an $R$-module isomorphism and hence an $R$-algebra isomorphism. This proves the integral splitting even if $k/\mathbb Q$ is ramified at $p$. [A1, F1, F2, given, choose, algebra]

2.1 By [F3], the $O_E$-action extends uniquely to $\mathcal A$. Its differential gives an $O_E\otimes R$-action on $T$. By [F4], $T$ is finite free of rank $g$: pull the locally free differential sheaf back along the identity section and dualize. On the local scheme $\operatorname{Spec}R$, a trivialization near its closed point is a trivialization on the whole scheme, because an open neighbourhood of that point contains a basic open defined by a unit. Use the product idempotents from step 1.1 to decompose $T=\bigoplus_\sigma T_\sigma$. Each summand is finite and flat, being a direct summand of a finite free module. As $R$ is Noetherian local by [F1], [F5] makes every $T_\sigma$ free. [F1, F3, F4, F5, step 1.1, construct, algebra]

3.1 After tensoring with $k$, the summand $T_\sigma$ is the generic tangent eigenspace for the character $\sigma$, since the idempotents in step 1.1 are exactly the coordinate projections. The specified generic CM type gives its dimension one for $\sigma\in\Phi$ and zero for every other $\sigma$. A free $R$-module has rank equal to its generic dimension. Thus the nonzero summands $T_\varphi$, $\varphi\in\Phi$, are free of rank one and the others are zero. Choose one basis vector in each of these finitely many rank-one modules. By the coordinate action of step 1.1, $a e_\varphi=\varphi(a)e_\varphi$ for every $a\in O_E$. [F1, step 1.1, step 2.1, given, choose, algebra]

4.1 Pullback of [F4] along the special-fibre identity identifies $T\otimes_R\kappa$ with $T_0A_0$, naturally for every model endomorphism. The vectors from step 3.1 therefore reduce to a basis and the differential of $\gamma$ is the diagonal matrix with entries $\varphi(\gamma)\bmod P$. Over the field $\kappa$ its kernel dimension is exactly the number of zero entries, proving the displayed formula. [F3, F4, step 3.1, algebra]

5.1 For an embedding $\varphi$ through the factor $E_i$, the contraction $\varphi^{-1}(P)$ is a prime ideal of $O_E$ above $p$: restriction of the quotient map to $O_{E_i}$ has integral domain image and sends $p$ to zero. If $(\gamma)=\mathfrak v^r$ with $r\ge1$, then $\varphi(\gamma)\in P$ is equivalent to $\gamma\in\varphi^{-1}(P)$, and hence to $\mathfrak v\subseteq\varphi^{-1}(P)$. These are nonzero prime ideals in the same integer-ring factor and are maximal, so containment is equality. In the product algebra this statement is checked componentwise. If $r=0$, $(\gamma)=O_E$, so its image under every ring homomorphism to $R$ is a unit and every diagonal entry in step 4.1 is nonzero. This proves all final kernel cases and completes the lemma. [F1, step 4.1, algebra] ∎

## Source-reading boundary

The cached 2007 Milne article was read at the integral decomposition and kernel computation in Theorem2.1, printed16–17. Its implicit integral splitting is proved here by the discriminant-unit evaluation matrix, followed by the actual finite-free idempotent decomposition. No CM centralizer, Frobenius norm, CM reciprocity, or unramifiedness of the larger field $k$ is imported or assumed.
