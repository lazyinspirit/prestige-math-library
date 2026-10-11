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

[F1] $A=\operatorname{End}_{\mathbb C[e]}(V)=\{X:Xe=eX\}$ is the full associative centralizer algebra, with multiplication given by composition. For a Jordan-string decomposition $V=\bigoplus_\alpha R_\alpha$, $R_\alpha=\mathbb C[t]/(t^{p_\alpha})$ with $t$ acting as $e$, its $(\alpha,\beta)$ block is $\operatorname{Hom}_{\mathbb C[t]}(R_\beta,R_\alpha)$, of dimension $\min(p_\alpha,p_\beta)$: a homomorphism is determined by the image of $1$, which must be killed by $t^{p_\beta}$. Thus all off-diagonal string-homomorphism blocks, including those between unequal lengths, are retained. The algebra need not be semisimple: for a single string of length $2$ it is $\mathbb C[t]/(t^2)$, with nonzero radical $(t)$. The invertible elements $G_e=A^\times$ act diagonally on $E$ by $a^{\otimes d}$ ([[def-nilpotent-endomorphism]], [[thm-nilpotent-jordan-string-basis]], [[def-classical-complex-matrix-lie-algebras]]).

[F2] Tensor matrix units identify $\operatorname{End}(E)$ with $\operatorname{End}(V)^{\otimes d}$. Extending a basis of $A=\ker[X\mapsto[X,e]]$ in each factor shows that commuting with every individual $e$ is exactly membership in $A^{\otimes d}$. The place-fixed tensors are spanned by symmetrized pure tensors. For $a_1,\ldots,a_d\in A$, the identity $\sum_{S\subseteq\{1,\ldots,d\}}(-1)^{d-|S|}(\sum_{j\in S}a_j)^{\otimes d}=\sum_{\sigma\in S_d}a_{\sigma(1)}\otimes\cdots\otimes a_{\sigma(d)}$ follows by expansion: any term missing a label cancels in the subset sum, and surviving terms use each label once. Thus $(A^{\otimes d})^{S_d}$ is spanned by $a^{\otimes d}$. For $d=0$ both spaces are $\mathbb C$.

[F3] Normality and covariants: the orbit closure of $e$ is normal with $\operatorname{codim}\partial X\ge2$, and every $G_e$-fixed endomorphism of $V^{\otimes d}$ is the value at $e$ of a $\mathrm{GL}(V)$-equivariant polynomial map $\Phi(X)=\sum_hc_h(X)\sigma_h(X^{h_1}\otimes\cdots\otimes X^{h_d})$ with scalar invariant coefficients ([[lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties]], [[lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize]]).

[F4] The Hecke operators $x_j,s_i$ of [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]] satisfy the relations of $H_d$, and $s_i$ acts as the place permutation ([[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]]).



## Proof

**Proof technique:** direct.

**Given:** The algebra $A=\mathfrak g^e$, the truncated algebra $B$, and the maps $\varphi,\psi$ of the Statement.

1.1 The first centralizer. An operator $T\in\operatorname{End}(E)$ commutes with the action of $B$ if and only if it commutes with the individual $e$-operators and with the place permutations: the first condition says $T\in A^{\otimes d}$ by [F2], and then the second says $T\in(A^{\otimes d})^{S_d}$, which is spanned by the elements $a^{\otimes d}$, $a\in A$. The image of $U(\mathfrak g^e)$ under the diagonal representation is contained in $\operatorname{End}_B(E)$: the diagonal action of $A$ commutes with the individual $e$'s and with places. Conversely, for $a\in A$ the element $a^{\otimes d}$ equals the product of its individual-position operators; For the commuting individual operators $a_i$, put $Q(t)=\prod_i(1+a_it)=\sum_r q_rt^r$ and $p_k=\sum_i a_i^k$. Formal differentiation and the geometric series for each factor give $Q'(t)=Q(t)\sum_{k\ge1}(-1)^{k-1}p_kt^{k-1}$, so $q_0=1$ and $q_r=r^{-1}\sum_{k=1}^r(-1)^{k-1}p_kq_{r-k}$. Each $p_k=\Delta_d(a^k)$ belongs to the enveloping image because $A$ is an associative algebra; here $a^k$ is the matrix power, regarded as an element of the Lie algebra $A$. The recurrence therefore puts $q_d=\prod_i a_i=a^{\otimes d}$ in that image. Hence $a^{\otimes d}\in\varphi(U(\mathfrak g^e))$ and $\varphi(U(\mathfrak g^e))=\operatorname{End}_B(E)$. [F1, F2, algebra]

2.1 The second centralizer. An operator $T$ commutes with the diagonal $A$-action if and only if it is $G_e$-fixed, as follows. If $T$ is $G_e$-fixed, commuting with $(1+ta)^{\otimes d}$ for all but finitely many $t$ and comparing its linear coefficient gives $[T,\Delta_d(a)]=0$. Conversely, if $T$ commutes with every $\Delta_d(a)$, it commutes with $\Delta_d(a^k)$ for all $k$. Newton identities express $a^{\otimes d}$ in these power sums, so $T$ commutes with $a^{\otimes d}$, in particular for every unit $a\in G_e$. By [F3] every $G_e$-fixed operator is $\Phi(e)$ for an equivariant polynomial covariant $\Phi(X)=\sum_hc_h(X)\sigma_h(X^{h_1}\otimes\cdots\otimes X^{h_d})$; evaluating at $X=e$ replaces each $X^{h_i}$ by $e^{h_i}$, which is a polynomial in the individual $e$-operators of degree less than $l$, so $\Phi(e)\in\psi(B)$ (the truncated algebra $B$ contains exactly the polynomials $e^0,\dots,e^{l-1}$ in each factor and the places). Conversely every element of $\psi(B)$ commutes with the diagonal $A$-action: for $a\in A$ put $\Delta_d(a)=\sum_{k=1}^d a^{(k)}$; each individual $e^{(j)}$ satisfies $[\Delta_d(a),e^{(j)}]=[a,e]^{(j)}=0$, and each place permutation $P_\sigma$ satisfies $P_\sigma\Delta_d(a)P_\sigma^{-1}=\Delta_d(a)$. These operators generate $\psi(B)$, so their products and linear combinations also commute with every $\Delta_d(a)$. Therefore $\operatorname{End}_{\mathfrak g^e}(E)^{\mathrm{op}}=\psi(B)$. [F1, F3, step 1.1, algebra]

3.1 Stable injectivity. Suppose $e$ has at least $d$ Jordan strings of the maximum length $l$, with top vectors $w_1,\dots,w_d$ on distinct strings. The vectors $w_1^{r_1}\otimes\cdots\otimes w_d^{r_d}$ with $0\le r_i<l$ (where $w^r=e^rw$ is the $r$-th vector of the string) are $l^d$ distinct members of the Jordan tensor basis of $E$; applying the $d!$ place permutations gives $l^d d!$ distinct basis vectors, since the string label of each tensor factor is recovered from the vector and the place permutation is recovered from the ordering of the labels. These vectors span a right $B$-submodule isomorphic to the regular module $B$ (the basis vectors $e^{r_1}w_1\otimes\cdots\otimes e^{r_d}w_d\sigma$, $\sigma\in S_d$, multiply exactly as the standard basis of the truncated polynomial/permutation algebra), so the right action $\psi$ is injective. For $d=0$, $E=\mathbb C$, $B=\mathbb C$ and both identities and injectivity reduce to scalar identities. [F1, F4, algebra, construct] ∎

## Remarks

- The identity $\varphi(U(\mathfrak g^e))=\operatorname{End}_B(E)$ is the stable-looking half and is proved without normality; the identity $\operatorname{End}_{\mathfrak g^e}(E)^{\mathrm{op}}=\psi(B)$ is the converse half where the covariant extension theorem is consumed, allowing arbitrary Jordan type and arbitrary $d$.

- The full polynomial/permutation algebra has the same operator image, since each individual $e$ satisfies $e^l=0$. Truncation removes this kernel; it does not alter either centralizer.
