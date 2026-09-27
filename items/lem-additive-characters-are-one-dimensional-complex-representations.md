---
id: lem-additive-characters-are-one-dimensional-complex-representations
kind: lemma
title: "Additive characters are exactly one-dimensional complex representation characters"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-additive-character-of-a-finite-abelian-group, def-finite-dimensional-representation-of-a-group-over-a-field, def-character-of-a-complex-representation, def-subrepresentation-and-irreducible-representation, def-irreducible-complex-character, def-splitting-field-for-a-finite-group, cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, def-algebraically-closed-field, thm-fundamental-theorem-of-algebra-minimum-modulus-proof, thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional, thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group, lem-standard-basis-of-f-n, thm-dimension-of-a-linear-subspace, def-trace-of-a-square-matrix, def-trace-of-an-endomorphism, def-order-in-a-group, lem-group-homomorphism-basic-properties, thm-complex-nth-roots-and-roots-of-unity, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
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
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3 Example 1"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 4.1.1 and Section 4.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite abelian group written additively, with identity $0$, and let
$\chi:G\to\mathbb C^{\times}$ be an additive character
([[def-additive-character-of-a-finite-abelian-group]]).

1. The formula $\rho_\chi(g)(z):=\chi(g)z$ defines a one-dimensional complex
   representation $\rho_\chi:G\to\operatorname{GL}(\mathbb C)$ of $G$; it is
   determined by $\chi$, and its trace character is $\chi$:
   $$\chi_{\rho_\chi}(g)=\operatorname{tr}\bigl(\rho_\chi(g)\bigr)=\chi(g) \qquad(g\in G).$$
2. Conversely, every one-dimensional complex representation
   $\rho:G\to\operatorname{GL}(V)$ of $G$ has as its trace character
   $g\mapsto\operatorname{tr}(\rho(g))$ an additive character of $G$, and this
   additive character does not depend on any choice of basis of $V$.
3. Every irreducible complex representation of $G$ is equivalent to
   $\rho_\psi$ for some additive character $\psi$ of $G$.
4. Every value of every additive character has modulus one: $|\chi(g)|=1$ for
   every $g\in G$.
5. Distinct additive characters give inequivalent irreducible representations:
   if $\chi\ne\psi$ then $\rho_\chi$ and $\rho_\psi$ are inequivalent
   irreducible complex representations of $G$.

## Facts & Assumptions

**Given:** A finite abelian group $G$ written additively with identity $0$, an additive character $\chi:G\to\mathbb C^{\times}$, and, where clause 2 is at issue, a one-dimensional complex representation of $G$.

[L1] An additive character is a group homomorphism $\chi:G\to\mathbb C^{\times}$, so $\chi(x+y)=\chi(x)\chi(y)$ for all $x,y\in G$, and consequently $\chi(0)=1$ and $\chi(-x)=\chi(x)^{-1}$ ([[def-additive-character-of-a-finite-abelian-group]]).

[L2] A finite-dimensional complex representation of $G$ is a group homomorphism $\rho:G\to\operatorname{GL}(V)$ on a finite-dimensional complex vector space $V$; its degree is $\dim_{\mathbb C}V$, and the associated action is $g\cdot v=\rho(g)v$ ([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[L3] The character of a finite-dimensional complex representation is $\chi_\rho(g)=\operatorname{tr}(\rho(g))$, computed with the basis-independent trace, and equivalent representations have equal characters; a character is irreducible when it is the character of an irreducible representation ([[def-character-of-a-complex-representation]], [[def-irreducible-complex-character]]).

[L4] A subrepresentation is a linear subspace carried into itself by every $\rho(g)$, and $\rho$ is irreducible when $V\ne0$ and its only subrepresentations are $0$ and $V$ ([[def-subrepresentation-and-irreducible-representation]]).

[L5] $\mathbb C$ is finite-dimensional over itself with $\dim_{\mathbb C}\mathbb C=1$, its standard basis being $\{1\}$ ([[lem-standard-basis-of-f-n]]); and for a linear subspace $U$ of a finite-dimensional $V$ one has $\dim_{\mathbb C}U\le\dim_{\mathbb C}V$, with $\dim_{\mathbb C}U=\dim_{\mathbb C}V$ if and only if $U=V$ ([[thm-dimension-of-a-linear-subspace]]).

[L6] The trace of an endomorphism is the trace of its matrix in any ordered basis ([[def-trace-of-an-endomorphism]]), and the trace of a square matrix is the sum of its diagonal entries, so the $1\times1$ matrix $(\lambda)$ has trace $\lambda$ ([[def-trace-of-a-square-matrix]]).

[L7] Every nonconstant complex polynomial has a complex root ([[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]), and a field is algebraically closed when every nonconstant polynomial over it has a root in it ([[def-algebraically-closed-field]]).

[L8] Over an algebraically closed field every endomorphism of an irreducible representation is scalar ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]); a field $k$ is a splitting field for a finite group $G$ when $\operatorname{End}_G(V)=k$ for every irreducible representation $V$ of $G$ over $k$ ([[def-splitting-field-for-a-finite-group]]); and over a splitting field every irreducible representation of a finite abelian group has degree $1$ ([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]]).

[L9] Choosing a basis of a degree-one representation produces a homomorphism $G\to k^{\times}$; every such homomorphism produces a normalized degree-one representation on the one-dimensional space $k$; and two degree-one representations are equivalent if and only if they produce the same homomorphism ([[thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group]]).

[L10] In a finite group every element has finite order, with $g^{\operatorname{ord}(g)}=e$ and $\operatorname{ord}(g)\ge1$ ([[def-order-in-a-group]]), and a group homomorphism satisfies $f(g^{n})=f(g)^{n}$ for every $g$ and every $n\in\mathbb Z$ ([[lem-group-homomorphism-basic-properties]]).

[L11] For $n\ge1$ the $n$-th roots of unity in $\mathbb C$ are exactly the values $\exp\!\left(i\frac{2\pi k}{n}\right)$ with $0\le k<n$ ([[thm-complex-nth-roots-and-roots-of-unity]]), and every purely imaginary exponential has modulus one: $|\exp(iy)|=1$ for real $y$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Proof technique:** direct.

1.1 For $g\in G$ define $\rho_\chi(g):\mathbb C\to\mathbb C$ by $\rho_\chi(g)(z):=\chi(g)z$. This map is $\mathbb C$-linear and invertible with inverse $z\mapsto\chi(g)^{-1}z$, because $\chi(g)\in\mathbb C^{\times}$; moreover $\rho_\chi(0)$ is the identity map, since $\chi(0)=1$, and $\rho_\chi(g+h)=\rho_\chi(g)\circ\rho_\chi(h)$ for all $g,h$, because $\chi(g+h)=\chi(g)\chi(h)$ and multiplication in $\mathbb C$ is associative. So $\rho_\chi$ is a group homomorphism $G\to\operatorname{GL}(\mathbb C)$, hence a complex representation of $G$ on the one-dimensional space $\mathbb C$, and its defining formula in terms of $\chi$ determines it uniquely from $\chi$. [L1, L2, L5, given, construct]

1.2 For clause 2 let $\rho:G\to\operatorname{GL}(V)$ be a one-dimensional complex representation, so $\dim_{\mathbb C}V=1$, and choose a basis vector $v$ of $V$. For each $g$ there is a unique scalar $\lambda(g)$ with $\rho(g)v=\lambda(g)v$, and $\rho(g)$ invertible forces $\lambda(g)\ne0$; by [L9] the resulting map $\lambda:G\to\mathbb C^{\times}$ is a group homomorphism, hence an additive character of $G$. Since $\rho(g)$ is multiplication by the scalar $\lambda(g)$ on a one-dimensional space, its trace is $\lambda(g)$, so the trace character of $\rho$ is $\lambda$; and because the trace of an endomorphism is basis-independent, the additive character so obtained does not depend on the choice of basis. [L3, L6, L9, given]

1.3 Every irreducible complex representation of $G$ has degree $1$: by [L7] the fundamental theorem of algebra makes $\mathbb C$ an algebraically closed field, so [L8] makes every endomorphism of an irreducible complex representation $V$ of $G$ a scalar $\lambda\operatorname{id}_V$; since an irreducible $V$ is nonzero, the map $\lambda\mapsto\lambda\operatorname{id}_V$ is injective, hence $\operatorname{End}_G(V)=\mathbb C$ and $\mathbb C$ is a splitting field for $G$, whereupon [L8] gives $\dim_{\mathbb C}V=1$ because $G$ is abelian. [L7, L8, given, algebra]

1.4 For clause 4 fix $g\in G$ and put $n:=\operatorname{ord}(g)$; since $G$ is finite, $n$ is a natural number with $n\ge1$ and $g^{n}=e$. Written additively, as this page writes $G$, the power $g^{n}$ is the $n$-fold sum $n\cdot g$, so $n\cdot g=0$, and the additive reading of claim 3 of [L10] gives $\chi(n\cdot g)=\chi(g)^{n}$. Hence $1=\chi(0)=\chi(g)^{n}$: the value $\chi(g)$ is an $n$-th root of unity. By [L11] there is $k$ with $0\le k<n$ and $\chi(g)=\exp(2\pi ik/n)$, and the modulus formula in [L11] gives $|\chi(g)|=|\exp(i\cdot2\pi k/n)|=1$. [L1, L10, L11]

2.1 In the standard basis $\{1\}$ of $\mathbb C$ the matrix of the endomorphism $\rho_\chi(g)$ is the $1\times1$ matrix $(\chi(g))$, whose trace is $\chi(g)$; since the character is computed with the basis-independent trace, $\chi_{\rho_\chi}(g)=\operatorname{tr}(\rho_\chi(g))=\chi(g)$ for every $g\in G$. Thus the trace character of $\rho_\chi$ is $\chi$, as clause 1 asserts. [L3, L6, step 1.1]

3.1 Let $W$ be an irreducible complex representation of $G$. By step 1.3 it is one-dimensional, so by step 1.2 its trace character $\psi(g):=\operatorname{tr}(\rho_W(g))$ is an additive character of $G$; by step 2.1 the representation $\rho_\psi$ attached to $\psi$ has trace character $\psi$. Thus $W$ and $\rho_\psi$ are degree-one representations producing the same homomorphism $\psi$, so [L9] makes them equivalent. This is clause 3. [step 2.1, step 1.2, step 1.3, L9]

3.2 For clause 5 let $\chi\ne\psi$ be additive characters. Each $\rho_\chi$ is irreducible: it lives on the nonzero space $\mathbb C$ of dimension $1$, and a subrepresentation $U$ is a linear subspace with $\dim_{\mathbb C}U\le1$, so either $\dim_{\mathbb C}U=0$ and $U=0$, or $\dim_{\mathbb C}U=1=\dim_{\mathbb C}\mathbb C$ and $U=\mathbb C$ by [L5]; by [L4] this is exactly irreducibility, and by step 2.1 the character of $\rho_\chi$ is $\chi$, so $\rho_\chi$ has irreducible character $\chi$ in the sense of [L3]. If $\rho_\chi$ and $\rho_\psi$ were equivalent, then their characters would be equal by the invariance clause of [L3], so step 2.1 would give $\chi=\psi$, contrary to hypothesis; hence the two irreducible representations are inequivalent. [L3, L4, L5, step 2.1, given]

4.1 Clause 1 is steps 1.1 and 2.1, clause 2 is step 1.2, clause 3 is steps 1.3 and 3.1, clause 4 is step 1.4, and clause 5 is step 3.2, so all five clauses of the statement are proved. The argument uses only finite groups, finite-dimensional complex representations and finite lists of roots, and therefore invokes no choice principle. [step 1.1, step 2.1, step 1.2, step 3.1, step 1.4, step 3.2] ∎

## Remarks

- **The bridge is the content of the item.** The word "character" names two different functions before this lemma: an additive character is a homomorphism $G\to\mathbb C^{\times}$, while the character of a representation is the trace of its matrices. Steps 1.1, 2.1 and 1.2 identify the two notions in degree one, so a later page may cite either side.

- **Basis independence is the trace, not a convention.** Clause 2 is stated for an arbitrary one-dimensional representation on an arbitrary one-dimensional space; it is the basis-independence of the trace, not a chosen identification of $V$ with $\mathbb C$, that makes the resulting additive character well defined.

- **Only finiteness of $G$ is used for clause 4.** For $g$ of infinite order there is no exponent to force $\chi(g)$ to be a root of unity, and indeed a homomorphism $\mathbb Z\to\mathbb C^{\times}$ may take any nonzero value; finiteness enters at $\operatorname{ord}(g)$ and at the splitting-field step.
