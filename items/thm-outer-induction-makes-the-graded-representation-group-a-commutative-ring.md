---
id: thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring
kind: theorem
title: "Outer induction makes the graded symmetric-group representation group a commutative graded ring"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
deps:
  - def-outer-induction-product-for-symmetric-group-characters
  - def-graded-ordinary-representation-ring-of-symmetric-groups
  - def-induced-character-of-a-complex-representation
  - thm-transitivity-of-induction-for-finite-groups
  - lem-induction-commutes-with-an-external-tensor-factor
  - lem-induction-is-invariant-under-conjugation-of-subgroup-and-representation
  - def-external-direct-product-of-groups
  - def-finite-symmetric-group-and-permutation-notation
  - def-group-homomorphism
  - def-induced-r-linear-g-module-by-h-covariant-functions
  - thm-external-direct-product-is-a-group
  - def-subgroup
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
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, (7.1)–(7.3), printed pp. 112–114: the outer induction product on R=⊕R(S_n) and its commutative graded ring structure"
    - title: "Peter Webb, A Course in Finite Group Representation Theory (complete author-hosted textbook, 294 pp.)"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
      locator: "§4.3 Proposition 4.3.2 and Lemma 4.3.7: induction with an external tensor factor and transitivity; §5.2, printed pp. 76–77: conjugation of induced representations"
---

## Statement

Let $R_S=\bigoplus_{n\ge0}R(S_n)$ be the graded abelian group of ordinary symmetric-group character rings, and let $\circ$ be the outer induction product ([[def-graded-ordinary-representation-ring-of-symmetric-groups]], [[def-outer-induction-product-for-symmetric-group-characters]]). For $f\in R(S_m)$, $g\in R(S_n)$, and $h\in R(S_r)$:

(i) $f\circ g\in R(S_{m+n})$, and $\circ$ is $\mathbb Z$-bilinear and distributive over addition;

(ii) $(f\circ g)\circ h=f\circ(g\circ h)$ in $R(S_{m+n+r})$;

(iii) $f\circ g=g\circ f$ in $R(S_{m+n})$;

(iv) if $e$ is the trivial character of $S_0$, then $e\circ f=f=f\circ e$.

Consequently $(R_S,\circ,e)$ is a commutative graded $\mathbb Z$-algebra. No choice principle is used.

## Facts & Assumptions

**Given:** Nonnegative integers $m,n,r$ and virtual characters $f\in R(S_m)$, $g\in R(S_n)$, and $h\in R(S_r)$.

[F1] The current library convention realizes $S_t$ as permutations of $\{0,\ldots,t-1\}$ with composition $(\sigma\tau)(i)=\sigma(\tau(i))$ ([[def-finite-symmetric-group-and-permutation-notation]]).

[F2] A group homomorphism preserves products ([[def-group-homomorphism]]).

[F3] The outer product definition uses the ordered one-based blocks $\{1,\ldots,m\}$ and $\{m+1,\ldots,m+n\}$, defines $f\circ g$ by induction of $f\boxtimes g$, and makes this product bilinear ([[def-outer-induction-product-for-symmetric-group-characters]]).

[F4] $R_S$ is the direct sum of the $R(S_t)$, whose elements have finite support, and $R(S_0)=\mathbb Z\cdot\mathbf1$ ([[def-graded-ordinary-representation-ring-of-symmetric-groups]]).

[F5] Induced modules are functions satisfying $F(xh)=h^{-1}\cdot F(x)$, with left translation action ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F6] An induced character is the character of the induced representation ([[def-induced-character-of-a-complex-representation]]).

[F7] Induction is transitive along subgroup chains ([[thm-transitivity-of-induction-for-finite-groups]]).

[F8] Induction to a direct product commutes with an external tensor factor, including the case where a subgroup equals its ambient factor ([[lem-induction-commutes-with-an-external-tensor-factor]]).

[F9] Conjugating a subgroup and its representation by the same element leaves the induced character unchanged ([[lem-induction-is-invariant-under-conjugation-of-subgroup-and-representation]]).

[F10] The external direct product has componentwise multiplication ([[def-external-direct-product-of-groups]]).

[F11] The componentwise product of groups is a group ([[thm-external-direct-product-is-a-group]]).

[F12] A subset closed under the group identity, products, and inverses is a subgroup ([[def-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 For each $t$, define $\beta_t(i)=i+1$ from $\{0,\ldots,t-1\}$ to $\{1,\ldots,t\}$, with the empty bijection if $t=0$. The group isomorphism $c_t(\sigma)=\beta_t\sigma\beta_t^{-1}$ preserves products and carries the zero-based ordered blocks to the one-based blocks in [F3]. Pullback along $c_t$ identifies representations and character groups. Explicitly, for a one-based subgroup $H^1$ and module $W$, set $H^0=c_{m+n}^{-1}(H^1)$ and $h\cdot_0w=c_{m+n}(h)\cdot_1w$. The map $F^1\mapsto F^0=F^1\circ c_{m+n}$ has inverse composition with $c_{m+n}^{-1}$, and $F^0(gh)=c_{m+n}(h)^{-1}\cdot_1F^0(g)=h^{-1}\cdot_0F^0(g)$. Since $c_{m+n}(x^{-1}g)=c_{m+n}(x)^{-1}c_{m+n}(g)$, it also intertwines the transported left actions in [F5]. Thus the one-based calculation represents the same outer product in $R_S$. [F1, F2, F3, F5, construct]

1.2 First take honest characters $\chi,\psi,\eta$ of $S_m,S_n,S_r$. In the one-based realization let $B_1=\{1,\ldots,m\}$, $B_2=\{m+1,\ldots,m+n\}$, and $B_3=\{m+n+1,\ldots,m+n+r\}$, allowing empty blocks, and let $J$ be the permutations preserving each $B_i$. The identity, products, and inverses preserve each block, so $J\le S_{m+n+r}$ by [F12]. Restriction to the three blocks identifies $J$ with the componentwise product $S_m\times S_n\times S_r$ by [F10, F11]. Both parenthesized two-block embeddings have image $J$, and on a triple $(a,b,c)$ both parenthesized external product characters have value $\chi(a)\psi(b)\eta(c)$ by [F3]. Hence the two parenthesized external product characters on $J$ agree. [F3, F10, F11, F12, given]

1.3 In the one-based realization define $s_{m,n}\in S_{m+n}$ by $s_{m,n}(i)=n+i$ for $1\le i\le m$ and $s_{m,n}(m+j)=j$ for $1\le j\le n$. Its two ranges are disjoint and cover $\{1,\ldots,m+n\}$, so it is a permutation, also when one block is empty. If $\iota_{m,n}$ denotes the block embedding in [F3], its action on the two blocks gives $s_{m,n}\iota_{m,n}(a,b)s_{m,n}^{-1}=\iota_{n,m}(b,a)$. Thus $s_{m,n}$ conjugates the first block subgroup to the second. [F2, F3, F10, F11, F12, construct]

1.4 When one block is empty, the block subgroup $S_0\times S_n$ or $S_n\times S_0$ is all of $S_n$, and its external product character identifies with the other factor by [F3]. For any $S_n$-module $V$, evaluation at the identity identifies $\operatorname{Ind}_{S_n}^{S_n}V$ with $V$: its inverse sends $v$ to the covariant function $g\mapsto g^{-1}v$, and both maps respect left translation by [F5]. Thus the unit identities hold for honest characters, and bilinearity with finite expansions [F3, F4] gives $e\circ f=f=f\circ e$ for every virtual character. [F3, F4, F5, algebra]

2.1 Apply [F8] at each outer tensor step and then [F7] to induction in stages. Both $(\chi\circ\psi)\circ\eta$ and $\chi\circ(\psi\circ\eta)$ become induction from the same subgroup $J$ to $S_{m+n+r}$ of the equal external product characters in step 1.2. By [F6] their induced characters are equal. Bilinearity and the finite integral character expansions in [F3, F4] extend this equality to all virtual $\chi,\psi,\eta$, proving associativity. [F3, F4, F6, F7, F8, step 1.2, algebra]

2.2 For honest characters $\chi,\psi$, the representation conjugated by $s_{m,n}$ has value $\chi(a)\psi(b)=\psi(b)\chi(a)$ at $\iota_{n,m}(b,a)$, so it is exactly $\psi\boxtimes\chi$ by [F3, F9]. The conjugation-invariance result [F9] therefore gives $\chi\circ\psi=\psi\circ\chi$. Bilinearity and the finite integral expansions in [F3, F4] extend this equality to virtual characters. [F3, F4, F9, step 1.3, algebra]

3.1 Steps 1.1, 2.1, 2.2, and 1.4 establish compatibility with the library's group convention, associativity, commutativity, and the unit. The product on the direct sum is graded by [F3, F4], and all virtual characters are finite integral combinations, so the stated ring axioms follow. Every relabeling and block conjugator was given explicitly, and every extension used finite sums; no form of the axiom of choice is used. [F3, F4, step 1.1, step 2.1, step 2.2, step 1.4, algebra] ∎
