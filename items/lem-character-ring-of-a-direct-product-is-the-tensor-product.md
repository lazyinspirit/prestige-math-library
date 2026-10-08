---
id: lem-character-ring-of-a-direct-product-is-the-tensor-product
kind: lemma
title: "The character ring of a direct product is the tensor product of the factor character rings"
status: draft
origin: pipeline
pipeline_run: "frontier-43-complex-representation-15"
dependency_level: 0
deps:
  - def-virtual-character-and-character-ring-of-a-finite-group
  - def-external-direct-product-of-groups
  - thm-external-direct-product-is-a-group
  - def-tensor-product-of-complex-representations
  - thm-characters-of-direct-sums-tensor-products-and-duals
  - def-standard-inner-product-on-complex-class-functions
  - thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions
  - thm-gallagher-correspondence-for-an-extendible-character
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - def-tensor-product-of-modules-by-generators-and-relations
  - thm-tensor-product-basis-from-bases
  - thm-tensor-product-of-algebras-over-a-commutative-ring
  - def-character-of-a-complex-representation
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (complete author-hosted textbook, 294 pp.)"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
      locator: "§4.1 Corollary 4.1.4 and its preceding direct-product character-table example, printed p. 52."
---

## Statement

Let $G,H$ be finite groups. For finite-dimensional complex representations $V$ of $G$ and $W$ of $H$, their **external tensor product** is the representation of $G\times H$ on $V\otimes_{\mathbb C}W$ with

$$
(g,h)\cdot(v\otimes w):=(gv)\otimes(hw).
$$

Its character satisfies $\chi_{V\boxtimes W}(g,h)=\chi_V(g)\chi_W(h)$. Extend this operation $\mathbb Z$-bilinearly from irreducible characters to $R(G)\times R(H)$, using the irreducible-character bases. Then:

(i) the induced map $R(G)\otimes_{\mathbb Z}R(H)\to R(G\times H)$, $\chi\otimes\psi\mapsto\chi\boxtimes\psi$, is an isomorphism of rings, carries $1\otimes1$ to the trivial character, and satisfies

$$
(\chi\boxtimes\psi)(\chi'\boxtimes\psi')=(\chi\chi')\boxtimes(\psi\psi')
$$

for all $\chi,\chi'\in R(G)$ and $\psi,\psi'\in R(H)$; and

(ii) as $\chi$ and $\psi$ range over the irreducible characters, the elements $\chi\boxtimes\psi$ are pairwise distinct and form an orthonormal $\mathbb Z$-basis of $R(G\times H)$. In particular, every honest character of $G\times H$ is a nonnegative integral combination of these external products. No choice principle is used.

## Facts & Assumptions

**Given:** Finite groups $G,H$ and finite-dimensional complex representations of them.

[F1] For a finite group $K$, $R(K)$ is the integral span of its irreducible complex characters, with pointwise addition and multiplication given by tensor products; the irreducible characters form a basis ([[def-virtual-character-and-character-ring-of-a-finite-group]], [[thm-characters-of-direct-sums-tensor-products-and-duals]], [[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]).

[F2] The componentwise product is a finite group and its coordinate projections are homomorphisms ([[def-external-direct-product-of-groups]], [[thm-external-direct-product-is-a-group]]).

[F3] Tensoring two finite-dimensional complex representations gives a representation whose character is the pointwise product of their characters ([[def-tensor-product-of-complex-representations]], [[thm-characters-of-direct-sums-tensor-products-and-duals]], [[def-character-of-a-complex-representation]]).

[F4] The standard inner product is $\langle\alpha,\beta\rangle_K=|K|^{-1}\sum_{x\in K}\alpha(x)\overline{\beta(x)}$, and irreducible characters form an orthonormal basis of the class functions ([[def-standard-inner-product-on-complex-class-functions]], [[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]).

[F5] Every finite-dimensional complex representation of a finite group is a finite direct sum of irreducible representations ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F6] For $N\trianglelefteq K$ and an invariant irreducible character $\theta$ of $N$ that extends to $K$, Gallagher's theorem gives a bijection from $\operatorname{Irr}(K/N)$ to the irreducible characters of $K$ lying above $\theta$ ([[thm-gallagher-correspondence-for-an-extendible-character]]).

[F7] If two free modules have bases $(e_i)$ and $(f_j)$, then $(e_i\otimes f_j)_{(i,j)}$ is a basis of their tensor product ([[def-tensor-product-of-modules-by-generators-and-relations]], [[thm-tensor-product-basis-from-bases]]).

[F8] The tensor product of $\mathbb Z$-algebras has multiplication $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $\pi_G:G\times H\to G$ and $\pi_H:G\times H\to H$ be the coordinate projections. Pulling $V$ and $W$ back along these homomorphisms and taking their tensor product gives the stated $G\times H$ action, because the two factor actions multiply componentwise. The tensor-product construction is well defined on $V\otimes_{\mathbb C}W$. [F2, F3, given, algebra]

1.2 Let $X$ be an irreducible $G\times H$-module and restrict it to $N:=G\times\{1_H\}$. By [F5] this nonzero restriction has an irreducible constituent $S$ with character $\chi\in\operatorname{Irr}(G)$. Conjugation by $(g,h)$ acts on $N$ by conjugation by $g$, so $\chi$ is fixed because characters are constant on conjugacy classes. Hence the inertia group of $\chi$ in $G\times H$ is all of $G\times H$. [F2, F5, given]

1.3 For irreducible characters $\chi,\chi'$ of $G$ and $\psi,\psi'$ of $H$, the finite sum over $G\times H$ factors as $\langle\chi\boxtimes\psi,\chi'\boxtimes\psi'\rangle_{G\times H}=\frac{1}{|G||H|}\sum_{g\in G,\,h\in H}\chi(g)\psi(h)\overline{\chi'(g)}\,\overline{\psi'(h)}=\langle\chi,\chi'\rangle_G\langle\psi,\psi'\rangle_H$. Thus the external products of irreducible characters are orthonormal by [F4]. [F2, F4, given, algebra]

2.1 By [F3], the character of this representation at $(g,h)$ is $\chi_V(g)\chi_W(h)$. Maschke decomposes representations affording honest characters into irreducibles; distributivity of tensor products over direct sums then shows that this formula agrees with the bilinear extension from the irreducible-character bases. [F1, F3, F5, step 1.1]

2.2 The representation $\widetilde S(g,h):=S(g)$ extends $S$ to $G\times H$, and the quotient by $N$ is canonically $H$. Gallagher's theorem therefore says that the irreducibles above $\chi$ are exactly $S\boxtimes W$ for $W$ irreducible over $H$, without repetition. Since $X$ lies above its chosen constituent $\chi$, this proves that every irreducible of $G\times H$ occurs exactly once in the family of external products. The argument includes a trivial factor, for which the relevant irreducible-character set is a singleton. [F2, F6, step 1.2]

2.3 The trivial character is the unit in each character ring, and its external product is the trivial character of $G\times H$. Thus $\Phi(1\otimes1)=1$. [F1, step 1.1, algebra]

3.1 Steps 1.3 and 2.2 show that the external products are precisely the irreducible characters of $G\times H$, each once, and are orthonormal. They are therefore an orthonormal $\mathbb Z$-basis of $R(G\times H)$ by [F1, F4]. [F1, F4, step 1.3, step 2.2]

3.2 For irreducible basis elements, the pointwise product formula in step 2.1 gives $\Phi((\chi\otimes\psi)(\chi'\otimes\psi'))=\Phi(\chi\chi'\otimes\psi\psi')=(\chi\boxtimes\psi)(\chi'\boxtimes\psi')$. Bilinearity extends this identity to all virtual characters, including zero and negative combinations. Thus $\Phi$ is multiplicative under the tensor-product algebra structure [F8]. [F1, F8, step 2.1, algebra]

4.1 By Maschke's theorem, any honest character of $G\times H$ is a nonnegative integral sum of its irreducible characters. Step 3.1 identifies each such character as one external product, proving the positivity assertion. [F5, step 3.1]

4.2 The irreducible characters form free $\mathbb Z$-bases of $R(G)$ and $R(H)$, so [F7] gives the basis $(\chi\otimes\psi)$ of $R(G)\otimes_{\mathbb Z}R(H)$. Step 3.1 shows that the bilinear map sends this basis bijectively to the basis of the target; hence it is a $\mathbb Z$-module isomorphism. [F1, F7, step 3.1]

5.1 Steps 2.3, 3.2, and 4.2 prove the unital ring isomorphism; steps 3.1 and 4.1 prove the orthonormal-basis and positivity claims. [step 2.3, step 3.2, step 4.2, step 3.1, step 4.1] ∎
