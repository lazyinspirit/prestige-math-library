---
id: thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer
kind: theorem
title: "Vust's graded double centralizer for the type-A nilpotent centralizer"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       def-arakawa-suzuki-casimir-operators-on-tensor-functors,
       thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations,
       def-classical-complex-matrix-lie-algebras, def-universal-enveloping-algebra,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties,
       lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize,
       thm-nilpotent-jordan-string-basis, def-nilpotent-endomorphism,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Sections 2.1-2.3 and Theorem 2.4, printed pp. 6-9: the graded Schur algebra C[M_e]^*_d and the double centralizer for the pair (U(g^e), C_l[x_1,...,x_d] rtimes C[S_d]) on V^{tensor d}, for every nilpotent Jordan type and every d, with stable injectivity."
    - title: "T. Vust, Sur la contraction des espaces de tenseurs, C. R. Acad. Sci. Paris 289 (1979) A141-A143"
      url: "https://doi.org/10.1007/BF02566256"
      locator: "The graded double centralizer theorem for the pair of the nilpotent centralizer and the truncated polynomial/permutation algebra, quoted in the source above as Theorem 2.4. The full converse is reconstructed locally in owner-category-o-batch17-vust-local-proof.md, Sections 1, 4 and 5."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $V$ be a finite-dimensional complex vector
space, let $e\in\operatorname{End}_{\mathbb C}(V)$ be nilpotent with largest
Jordan string length $l\ge1$, let $d\ge0$, and put $E=V^{\otimes d}$. Let
$$B=\mathbb C[x_1,\dots,x_d]/(x_1^l,\dots,x_d^l)\rtimes\mathbb C[S_d]$$
act on $E$ by the individual operators $x_i=e$ (in the $i$-th tensor factor)
and the place permutations, and let
$\varphi\colon U(\mathfrak g^e)\to\operatorname{End}(E)$ be the algebra map
induced by the diagonal action of $\mathfrak g^e=\{X:[X,e]=0\}$ and
$\psi\colon B\to\operatorname{End}(E)^{\mathrm{op}}$ the map encoding the
right action. Then
$$\varphi(U(\mathfrak g^e))=\operatorname{End}_B(E),\qquad \operatorname{End}_{\mathfrak g^e}(E)^{\mathrm{op}}=\psi(B),$$
for every nilpotent Jordan type and every $d$. If $e$ has at least $d$ Jordan
strings of the maximum length $l$, then $\psi$ is injective. For $d=0$ the
identities are scalar identities and injectivity is automatic.

The full converse uses the proved normality and covariant-extension suppliers
of this page; it is not a stable-only claim and it does not assume the double
commutant identity.

## Facts & Assumptions

**Given:** AC; a nilpotent $e$ with largest Jordan length $l\ge1$, the algebra $B=\mathbb C[x_1,\dots,x_d]/(x_1^l,\dots,x_d^l)\rtimes\mathbb C[S_d]$ acting on $E=V^{\otimes d}$ by individual $e$-operators and places, and $A=\mathfrak g^e=\operatorname{End}_{\mathbb C[e]}(V)$.

[F1] $A$ is the centralizer algebra $\{X:Xe=eX\}$; in a Jordan-string basis it is a direct product of matrix algebras indexed by the equal string lengths, and it is generated as a vector space by the powers $e^0,\dots,e^{l-1}$ on each string. The invertible elements $G_e=A^\times$ act diagonally on $E$ by $a^{\otimes d}$ ([[def-nilpotent-endomorphism]], [[thm-nilpotent-jordan-string-basis]], [[def-classical-complex-matrix-lie-algebras]]).

[F2] $\operatorname{End}(E)=\operatorname{End}(V)^{\otimes d}$; an operator commuting with $e$ in every individual position lies in $A^{\otimes d}$, and further commuting with all place permutations lands in $(A^{\otimes d})^{S_d}$, the span of the elements $a^{\otimes d}$ with $a\in A$: in characteristic zero the symmetric tensors are spanned by the symmetrizations of $a_1\otimes\cdots\otimes a_d$, and Newton's identities express each symmetrization through the power sums $\sum_ia_i^k$ ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]]).

[F3] Normality and covariants: the orbit closure of $e$ is normal with
$\operatorname{codim}\partial X\ge2$, and every $G_e$-fixed endomorphism of
$V^{\otimes d}$ is the value at $e$ of a $\mathrm{GL}(V)$-equivariant
polynomial map $\Phi(X)=\sum_hc_h(X)\sigma_h(X^{h_1}\otimes\cdots\otimes X^{h_d})$
with scalar invariant coefficients
([[lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties]],
[[lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize]]).

[F4] The Hecke operators $x_j,s_i$ of
[[def-arakawa-suzuki-casimir-operators-on-tensor-functors]] satisfy the
relations of $H_d$, and $s_i$ acts as the place permutation
([[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]]).



## Proof

**Proof technique:** direct.

**Given:** The algebra $A=\mathfrak g^e$, the truncated algebra $B$, and the maps $\varphi,\psi$ of the Statement.

1.1 The first centralizer. An operator $T\in\operatorname{End}(E)$ commutes with the action of $B$ if and only if it commutes with the individual $e$-operators and with the place permutations: the first condition says $T\in A^{\otimes d}$ by [F2], and then the second says $T\in(A^{\otimes d})^{S_d}$, which is spanned by the elements $a^{\otimes d}$, $a\in A$. The image of $U(\mathfrak g^e)$ under the diagonal representation is contained in $\operatorname{End}_B(E)$: the diagonal action of $A$ commutes with the individual $e$'s and with places. Conversely, for $a\in A$ the element $a^{\otimes d}$ is the value at $1$ of the diagonal action of $\sum_ka_k^{\otimes d}$; Newton's identities express the product $a_1\cdots a_d$ of the commuting operators $a_i=1^{\otimes(i-1)}\otimes a\otimes1^{\otimes(d-i)}$ as a polynomial over $\mathbb Q$ in the power sums $p_k=\sum_ia_i^k$, $1\le k\le d$, and each $p_k$ is the image under $\varphi$ of $a^k\in U(\mathfrak g^e)$. Hence $a^{\otimes d}\in\varphi(U(\mathfrak g^e))$ and $\varphi(U(\mathfrak g^e))=\operatorname{End}_B(E)$. [F1, F2, algebra]

1.2 The second centralizer. An operator $T$ commutes with the diagonal $A$-action if and only if it is $G_e$-fixed, because $G_e=A^\times$ generates $A$ linearly in the diagonal representation: differentiating $t\mapsto(1+ta)^{\otimes d}$ at $t=0$ recovers the diagonal action of $a$, and Newton-type generation is not needed for this direction. By [F3] every $G_e$-fixed operator is $\Phi(e)$ for an equivariant polynomial covariant $\Phi(X)=\sum_hc_h(X)\sigma_h(X^{h_1}\otimes\cdots\otimes X^{h_d})$; evaluating at $X=e$ replaces each $X^{h_i}$ by $e^{h_i}$, which is a polynomial in the individual $e$-operators of degree less than $l$, so $\Phi(e)\in\psi(B)$ (the truncated algebra $B$ contains exactly the polynomials $e^0,\dots,e^{l-1}$ in each factor and the places). Conversely every element of $\psi(B)$ commutes with the individual $e$-operators and with the place permutations, hence with the diagonal $A$-action. Therefore $\operatorname{End}_{\mathfrak g^e}(E)^{\mathrm{op}}=\psi(B)$. [F3, algebra]

2.1 Stable injectivity. Suppose $e$ has at least $d$ Jordan strings of the maximum length $l$, with top vectors $w_1,\dots,w_d$ on distinct strings. The vectors $w_1^{r_1}\otimes\cdots\otimes w_d^{r_d}$ with $0\le r_i<l$ (where $w^r=e^rw$ is the $r$-th vector of the string) are $l^d$ distinct members of the Jordan tensor basis of $E$; applying the $d!$ place permutations gives $l^d d!$ distinct basis vectors, since the string label of each tensor factor is recovered from the vector and the place permutation is recovered from the ordering of the labels. These vectors span a right $B$-submodule isomorphic to the regular module $B$ (the basis vectors $e^{r_1}w_1\otimes\cdots\otimes e^{r_d}w_d\sigma$, $\sigma\in S_d$, multiply exactly as the standard basis of the truncated polynomial/permutation algebra), so the right action $\psi$ is injective. For $d=0$, $E=\mathbb C$, $B=\mathbb C$ and both identities and injectivity reduce to scalar identities. [F1, F4, algebra, construct] ∎

## Remarks

- The identity $\varphi(U(\mathfrak g^e))=\operatorname{End}_B(E)$ is the stable-looking half and is proved without normality; the identity $\operatorname{End}_{\mathfrak g^e}(E)^{\mathrm{op}}=\psi(B)$ is the converse half where the covariant extension theorem is consumed, allowing arbitrary Jordan type and arbitrary $d$.

- The truncation $x_i^l=0$ is essential: without it, the right algebra would be the full polynomial/permutation algebra and the second identity would fail in general, as the counterexample on the companion page shows.
