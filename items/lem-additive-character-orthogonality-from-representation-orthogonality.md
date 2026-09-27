---
id: lem-additive-character-orthogonality-from-representation-orthogonality
kind: lemma
title: "Row orthogonality for additive characters of a finite abelian group"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-additive-characters-are-one-dimensional-complex-representations, def-additive-character-of-a-finite-abelian-group, def-irreducible-complex-character, thm-first-orthogonality-relation-for-irreducible-complex-characters, def-standard-inner-product-on-complex-class-functions, def-class-function-and-the-space-of-complex-class-functions, def-group, def-finite-sum-in-a-commutative-monoid, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 3.2.3"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.8"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Statement

Let $G$ be a finite abelian group and let $\chi,\psi:G\to\mathbb C^{\times}$ be
additive characters of $G$
([[def-additive-character-of-a-finite-abelian-group]]). Then
$$\frac{1}{|G|}\sum_{g\in G}\chi(g)\,\overline{\psi(g)} =\begin{cases}1&\chi=\psi,\\ 0&\chi\ne\psi,\end{cases}$$
the sum being the finite sum over $G$ of complex-valued terms
([[def-finite-sum-in-a-commutative-monoid]]). In particular, if $\chi$ is not the
trivial additive character then $\sum_{g\in G}\chi(g)=0$. The normalized inner
product is linear in its first argument, exactly as on the published
representation-character page
([[def-standard-inner-product-on-complex-class-functions]]).

## Facts & Assumptions

**Given:** A finite abelian group $G$ and additive characters $\chi,\psi:G\to\mathbb C^{\times}$.

[L1] Each additive character is the trace character of an irreducible one-dimensional complex representation, distinct additive characters give inequivalent irreducible representations, and every irreducible complex representation of $G$ arises this way up to equivalence ([[lem-additive-characters-are-one-dimensional-complex-representations]]).

[L2] A complex character is irreducible when it is the character $\chi_V(g)=\operatorname{tr}(\rho_V(g))$ of an irreducible representation $V$, and the character depends only on the equivalence class of $V$ ([[def-irreducible-complex-character]]).

[L3] First orthogonality relation: for irreducible complex characters $\chi_1,\dots,\chi_r$ of a finite group, one from each equivalence class, $\langle\chi_i,\chi_j\rangle=\delta_{ij}$ ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]).

[L4] The standard inner product on the complex class functions of $G$ is $\langle\varphi,\psi\rangle=\frac{1}{|G|}\sum_{g\in G}\varphi(g)\overline{\psi(g)}$, a finite sum over $G$ of complex-valued terms; this assignment is an inner product in the exact sense of the published definition, with the inner product linear in the first argument ([[def-standard-inner-product-on-complex-class-functions]], [[def-finite-sum-in-a-commutative-monoid]]).

[L5] A function $f:G\to\mathbb C$ is a class function when $f(gxg^{-1})=f(x)$ for all $g,x\in G$; these functions form the complex vector space $\mathrm{cf}(G)$ carrying the inner product of [L4] ([[def-class-function-and-the-space-of-complex-class-functions]]), and a group is abelian when its operation is commutative ([[def-group]]).

[L6] An additive character of $G$ is a group homomorphism $G\to\mathbb C^{\times}$; the constant function $1$ is such a homomorphism, and for every additive character $\theta$ one has $\theta(e)=1$ for the identity $e$ of $G$ ([[def-additive-character-of-a-finite-abelian-group]]).

[L7] Complex conjugation is an involutive real-field automorphism, so it fixes $1$: $\overline{1}=1$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Every additive character of $G$ is an irreducible complex character of $G$: by [L1] the character $\chi$ is the trace character of the irreducible one-dimensional representation $\rho_\chi$, and by [L2] the character of an irreducible representation is an irreducible complex character; the same holds for $\psi$. [L1, L2]

1.2 Both $\chi$ and $\psi$ lie in $\mathrm{cf}(G)$, the space on which [L4] and [L3] are stated: since $G$ is abelian, $gxg^{-1}=x$ for all $g,x\in G$ (in the additive writing used for $G$ on this page, $g+x-g=x$), so every function $G\to\mathbb C$, in particular $\chi$ and $\psi$, is constant on conjugacy classes, which is the defining property in [L5]. [L4, L5, given]

1.3 Let $\chi_1,\dots,\chi_r$ be irreducible complex characters of $G$, one from each equivalence class, as in [L3]. By [L2] a character depends only on the equivalence class of its representation and by [L1] the representation $\rho_\chi$ is irreducible, so $\chi=\chi_i$ for some index $i$; likewise $\psi=\chi_j$ for some index $j$. [L1, L2, L3]

1.4 The normalized inner product of [L4] is linear in its first argument, as that published definition records of the form $\langle\varphi,\psi\rangle=\frac{1}{|G|}\sum_{g\in G}\varphi(g)\overline{\psi(g)}$ on class functions; this is the statement's final sentence. [L4]

2.1 If $\chi=\psi$, then $\chi=\chi_i$ for an index $i$ as in step 1.3, and [L3] applied to the pair $(i,i)$ gives $\langle\chi,\psi\rangle=\langle\chi_i,\chi_i\rangle=\delta_{ii}=1$. [L3, step 1.3]

2.2 If $\chi\ne\psi$, then the indices of step 1.3 satisfy $i\ne j$: equality $i=j$ would give $\chi=\chi_i=\chi_j=\psi$, a contradiction. Hence [L3] applied to the pair $(i,j)$ gives $\langle\chi,\psi\rangle=\langle\chi_i,\chi_j\rangle=\delta_{ij}=0$. [L3, step 1.3, given]

3.1 By [L4] the inner product just computed is the displayed normalized sum, $\langle\chi,\psi\rangle=\frac{1}{|G|}\sum_{g\in G}\chi(g)\overline{\psi(g)}$; combining with steps 2.1 and 2.2, this quantity is $1$ when $\chi=\psi$ and $0$ otherwise, which is the orthogonality clause of the statement. [L4, step 2.1, step 2.2]

4.1 Let $\chi_0(g):=1$ for every $g\in G$. Then $\chi_0$ is an additive character, by [L6], and it is the trivial additive character. If $\chi\ne\chi_0$, then step 3.1 with $\psi=\chi_0$ gives $\frac{1}{|G|}\sum_{g\in G}\chi(g)\overline{\chi_0(g)}=0$; since $\overline{\chi_0(g)}=\overline{1}=1$ by [L7], this reads $\frac{1}{|G|}\sum_{g\in G}\chi(g)=0$, and multiplying by the nonzero complex number $|G|$ gives $\sum_{g\in G}\chi(g)=0$. That is the zero-sum clause. [L6, L7, step 3.1, given]

5.1 Step 3.1 proves the orthogonality values, step 4.1 the vanishing sum for a nontrivial character, and step 1.4 the linear-first convention; these are all the claims of the statement. [step 3.1, step 4.1, step 1.4] ∎

## Remarks

- **Two independent routes exist; the one above is the representation route.** The published orthogonality relation [L3] is applied to the irreducible complex characters supplied by the dictionary [L1], so the proof inherits the Maschke-and-Schur machinery behind [L3]. A self-contained alternative computes $S=\sum_g\chi(g)\overline{\psi(g)}$ directly: for $\theta:=\chi\overline{\psi}$ with $\theta(a)\ne1$ one has $S=\theta(a)S$ by reindexing $g\mapsto g+a$, and for $\chi=\psi$ every summand is $1$. That route needs the linearity of $\mathbb C$-valued finite sums under scalar multiplication, which this page does not cite, so it is not used here.

- **The trivial character's vanishing sum is Corollary 4.1.4 of Webb's book in spirit.** It is the $\psi=1$ case of row orthogonality and is the form in which combinatorial consumers use "sum of a nontrivial additive character".

- **No Choice.** The orthogonality relation [L3] is a published theorem of the representation-character page, whose own contract is choice-free, and no selection is made here; the finite complex-valued sums over $G$ are those of [[def-finite-sum-in-a-commutative-monoid]].
