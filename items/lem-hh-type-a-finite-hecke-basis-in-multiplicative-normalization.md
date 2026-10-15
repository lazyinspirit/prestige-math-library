---
id: lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization
kind: lemma
title: "The finite type-A Hecke basis over the multiplicative parameter ring"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [thm-hh-generic-coxeter-hecke-standard-basis, lem-hh-hecke-anti-involution-bar-and-normalization, lem-hh-universal-presentations-and-base-change, lem-hh-finite-polynomial-and-localization-constructions, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-hh-matsumoto-reduced-word-theorem, lem-hh-free-associative-ring-and-relations-descent]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Lectures on Hecke Algebras with Unequal Parameters, MIT lecture notes, arXiv:math/0108172"
      url: "https://arxiv.org/pdf/math/0108172"
      locator: "Sections 3.1–3.3, PDF pp. 8–9: generic finite Hecke algebra, reduced products, and the standard basis."
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups, Springer GTM 231 (2005), complete author-hosted book"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "§6.1, printed pp. 174–175: type-A finite Hecke basis and its quadratic normalization."
    - title: "I. G. Macdonald, Affine Hecke algebras and orthogonal polynomials, Séminaire Bourbaki 797, Astérisque 237 (1996), pp. 189–207"
      url: "https://smf.emath.fr/system/files/2017-08/smf_ast_237_189-207.pdf"
      locator: "§4.1, PDF p. 8: finite Hecke generators and their quadratic relation."
---

## Statement

Let $n\ge2$, $R_0=\mathbb Z[Q,Q^{-1}]$, and let $H_{n,Q}^{\mathrm{fin}}$ be the unital associative $R_0$-algebra presented by generators $T_1,\ldots,T_{n-1}$, relations $(T_i-Q)(T_i+1)=0$, and the type-$A_{n-1}$ braid relations. For $w\in S_n$, let $T_w$ be the product along a reduced expression of $w$. Then $T_w$ is well-defined and
$$
\{T_w:w\in S_n\}
$$
is an $R_0$-basis of $H_{n,Q}^{\mathrm{fin}}$. For every commutative $R_0$-algebra $R'$, the scalar extension $R'\otimes_{R_0}H_{n,Q}^{\mathrm{fin}}$ has basis $(1\otimes T_w)_{w\in S_n}$.

## Facts & Assumptions

**Given:** The type-$A_{n-1}$ Coxeter group $S_n$, the ring $R_0=\mathbb Z[Q,Q^{-1}]$, and the finite Hecke presentation in the Statement.

[F1] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]]: the type-$A_{n-1}$ Coxeter group on adjacent transpositions identifies with $S_n$.

[F2] [[thm-hh-matsumoto-reduced-word-theorem]]: any two reduced expressions of one Coxeter-group element are related by a finite sequence of braid moves.

[F3] [[thm-hh-generic-coxeter-hecke-standard-basis]]: over the one-parameter Laurent ring $\mathbb Z[v,v^{-1}]$, the finite generic Hecke algebra with generators $U_i$ and relations $(U_i-v)(U_i+v^{-1})=0$ has basis $(U_w)_{w\in S_n}$ and that basis survives commutative base change.

[F4] [[lem-hh-hecke-anti-involution-bar-and-normalization]]: for the same parameter on all type-A generators, $T_i=vU_i$ and $Q=v^2$ convert $(U_i-v)(U_i+v^{-1})=0$ into $(T_i-Q)(T_i+1)=0$; scaling every braid word of a fixed length multiplies both sides by the same power of $v$.

[F5] [[lem-hh-finite-polynomial-and-localization-constructions]]: Laurent polynomial rings are free on their Laurent monomials; in particular the powers $v^k$ form a $\mathbb Z$-basis of $\mathbb Z[v,v^{-1}]$.

[F6] [[lem-hh-universal-presentations-and-base-change]]: scalar extension of a presented algebra is the algebra presented by the images of its relations, and scalar extension of a free module carries its basis to the tensor images, with no flatness assumption.

[F7] [[lem-hh-free-associative-ring-and-relations-descent]]: quotienting the free associative algebra by the finite Hecke and braid relations defines the unital associative algebra with that presentation.

## Proof

**Given:** The data of the Statement.

1.1 The free associative presentation and its quotient exist by [F7]. If two reduced expressions of $w$ are chosen, [F2] connects them by braid moves; each move is one defining braid relation in $H_{n,Q}^{\mathrm{fin}}$. The corresponding products therefore agree, defining $T_w$ independently of the chosen reduced expression. [F1, F2, F7, algebra]

1.2 Let $R_v:=\mathbb Z[v,v^{-1}]$ and define $\varphi:R_0\to R_v$ by $\varphi(Q)=v^2$. By [F5], each Laurent polynomial in $v$ has a unique even-power part plus $v$ times a unique even-power part, so $R_v=R_0\oplus vR_0$ as an $R_0$-module; in particular $\varphi$ is injective. By [F6], $R_v\otimes_{R_0}H_{n,Q}^{\mathrm{fin}}$ is presented by the same braid relations and scalar-extended quadratic relations. The assignments $1\otimes T_i\mapsto vU_i$ give an $R_v$-algebra homomorphism to the generic finite Hecke algebra of [F3], since $(vU_i-v^2)(vU_i+1)=v^2(U_i-v)(U_i+v^{-1})=0$; scaling both sides of each braid relation by $v$ to its number of factors preserves that relation. The inverse assignment is $U_i\mapsto v^{-1}(1\otimes T_i)$: its quadratic relation is $v^{-2}(T_i-Q)(T_i+1)=0$, and the same equal-length argument preserves braids. The two maps are inverse on generators and coefficients, so this is an isomorphism. [F3, F4, F5, F6, algebra]

2.1 Under this isomorphism, $1\otimes T_w$ maps to $v^{\ell(w)}U_w$ for any reduced expression of $w$. By [F3], $(U_w)_{w\in S_n}$ is an $R_v$-basis, and each $v^{\ell(w)}$ is a unit; hence $(1\otimes T_w)_{w\in S_n}$ is a basis after extension to $R_v$. Let $M:=\bigoplus_{w\in S_n}R_0e_w$ and $\psi:M\to H_{n,Q}^{\mathrm{fin}}$ send $e_w$ to $T_w$. Relative to $R_v=R_0\oplus vR_0$, the map $R_v\otimes_{R_0}\psi$ is $\psi\oplus\psi$. Since this map is an isomorphism by the preceding basis calculation, $\psi$ is both injective and surjective: injectivity follows from injectivity of $\psi\oplus\psi$, and for any $h$ the element $(h,0)$ has a preimage $(m_1,m_2)$, giving $\psi(m_1)=h$. Thus $(T_w)$ is the asserted $R_0$-basis. [F3, F5, step 1.2, algebra]

3.1 For a commutative $R_0$-algebra $R'$, [F6] identifies $R'\otimes_{R_0}H_{n,Q}^{\mathrm{fin}}$ with the presentation obtained by applying $R_0\to R'$ to the defining relations and carries the free basis of step 2.1 to $(1\otimes T_w)_{w\in S_n}$. No property of $R'$ beyond being a commutative $R_0$-algebra is needed. [F6, step 2.1]

4.1 The preceding steps prove the well-defined reduced products, the universal basis, and its arbitrary commutative base change. All coefficient extensions and the rank-two free decomposition are explicit; no Choice principle is used. [F1, F2, F3, F4, F5, F6, step 1.1, step 1.2, step 2.1, step 3.1] ∎

