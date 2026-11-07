---
dependency_level: 0
id: lem-symmetric-power-scalar-twist-and-local-factor-shift
kind: lemma
title: Scalar symmetric-power twists and the local factor shift
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-symmetric-algebra-of-a-vector-space
- lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis
- thm-identity-theorem-holomorphic-functions
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Local bounded reconstruction of the BLS/BS07/Kim method
    url: https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf
    locator: Appendix2 equations1-2; scalar symmetric-power algebra, no local correspondence
      assertion
---

## Statement

Let $V$ be a finite-dimensional complex representation $r$ of a group, let $\eta$ be a scalar character, and let $k\ge0$ be an integer. Then
$$
\operatorname{Sym}^k(r\otimes\eta)=\operatorname{Sym}^k(r)\otimes\eta^k.
$$
For a given finite-place Weil--Deligne parameter $(r,N)$ with residue cardinality $q>1$, twist by the unramified scalar character with Frobenius value $q^{-it}$, $t\in\mathbb R$. The monodromy operator on the symmetric power is unchanged, and its determinant local factor satisfies
$$
L(s,\operatorname{Sym}^k(r\otimes|\cdot|^{it}))=L(s+kit,\operatorname{Sym}^k r).
$$
The same shift holds for given archimedean local factors of the form $\Gamma_{\mathbb R}(s+b)$ or $\Gamma_{\mathbb C}(s+b)$ when their norm-twist convention shifts each standard argument by $it$. Hence products of such specified factors agree in every common absolute-convergence domain, and their meromorphic continuations, if supplied, obey the same shift. This is parameter algebra and not a proof that local Langlands assignments or global functorial lifts exist or commute with twisting.

## Facts & Assumptions

**Given:** The representation, character and integer, and for the factor assertions the specified parameter, scalar Frobenius value and local-factor conventions.

[F1] The symmetric algebra is the quotient of tensor algebra by commutation relations and has its ordered commutative monomial basis. [[def-symmetric-algebra-of-a-vector-space]] [[lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis]]

[F2] Holomorphic identities on a nonempty open set extend uniquely on a connected domain; the same uniqueness follows for meromorphic continuations after clearing their local poles. [[thm-identity-theorem-holomorphic-functions]]

## Proof

1.1 On a pure degree-$k$ monomial $v_1\cdots v_k$, the scalar twist multiplies each of the $k$ vector factors by $\eta(g)$. Thus its action is $\eta(g)^k\operatorname{Sym}^k r(g)$. The construction respects the symmetric quotient [F1], so it gives the displayed identity, including $k=0$. In particular, a character with $\eta^k=1$ leaves the degree-$k$ representation unchanged. [given, F1, algebra]

2.1 In the Weil--Deligne calculation, the nilpotent operator acts on a monomial as the sum of the $k$ terms obtained by applying $N$ to one vector factor. Twisting the group action by a character does not change $N$ or this formula. The unramified scalar is trivial on inertia, so the subspace $(\ker d\operatorname{Sym}^k(N))^I$ used in the determinant factor is unchanged. Its Frobenius operator is multiplied by $q^{-kit}$ by step 1.1; hence $\det(1-q^{-s}q^{-kit}T)^{-1}=\det(1-q^{-(s+kit)}T)^{-1}$. This proves the local shift without a semisimplicity assumption. [given, F1, step 1.1, algebra]

3.1 At infinity the stated argument convention gives the same identity for each given Gamma factor by substitution. Finite products therefore agree, and passing to the assumed convergent Euler products preserves equality. If meromorphic continuations are supplied, their uniqueness extends this equality from a nonempty convergence half-plane. The argument proves no convergence half-plane or analytic continuation itself. For $k=2$, the shift is $s+2it$; for a quadratic character and $k=4$, its fourth power is one and the symmetric fourth parameter is unchanged. [given, F2, step 1.1, step 2.1, algebra] ∎
