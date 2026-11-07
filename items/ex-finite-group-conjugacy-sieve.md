---
dependency_level: 3
id: ex-finite-group-conjugacy-sieve
kind: example
title: "A finite-group conjugacy sieve calculation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-kowalski-conjugacy-sieve-bound
  - def-group
  - def-group-homomorphism
  - def-finite-cardinality
  - def-conjugacy-class-and-centralizer
  - thm-bessel-inequality-and-finite-parseval-identity
  - thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions
  - def-subrepresentation-and-irreducible-representation
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-character-of-a-complex-representation
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
aliases: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "Chapter 3, Proposition 3.5 and Chapter 4.1"
---

## Example

Let $G=S_3$, the group of permutations of $\{1,2,3\}$, with weights
$\mu(g)=1/6$ for every $g\in G$; take $X=G$, $F$ the identity map, one index $\ell$ with
$G_\ell=G$ and $\rho_\ell$ the identity, and support
$\mathcal L=\{\varnothing,\{\ell\}\}$. Forbid the three transpositions.
Then the sifted set consists of the identity and the two $3$-cycles, so
$\mu(S)=3/6=1/2$. The forbidden mass is $1/2$ and $H=1+(1/2)/(1/2)=2$.
The three character functions in the second-moment family are the trivial
character $1$, the sign character $\operatorname{sgn}(g):=\det(P_g)$, where
$P_g$ is the linear map on $\mathbb C^3$ determined by
$P_ge_i=e_{g(i)}$ for the standard basis $e_1,e_2,e_3$, and the standard character. The
standard character is the trace of the permutation action on
$V:=\{(z_1,z_2,z_3)\in\mathbb C^3:z_1+z_2+z_3=0\}$, namely
$\chi_{\rm std}(g):=|\{i\in\{1,2,3\}:g(i)=i\}|-1$. Their optimal constant is
$\Delta_{\rm conj}=1$, so the finite-group
conjugacy-sieve bound is attained: $\mu(S)=\Delta_{\rm conj}/H=1/2$.

## Example references

[[thm-kowalski-conjugacy-sieve-bound]]

[[def-conjugacy-class-and-centralizer]]

[[def-group-homomorphism]]

[[def-finite-dimensional-representation-of-a-group-over-a-field]]

[[def-subrepresentation-and-irreducible-representation]]

[[def-character-of-a-complex-representation]]

[[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]

[[thm-bessel-inequality-and-finite-parseval-identity]]

## Facts & Assumptions

**Given:** $G=S_3$, the uniform probability measure, and the sieve data in the
Example.

[F1] The conjugacy classes of $S_3$ have sizes $1,3,2$: the identity, the
transpositions, and the $3$-cycles, respectively
([[def-group]], [[def-finite-cardinality]],
[[def-conjugacy-class-and-centralizer]]).

[F2] The trivial representation acts on $\mathbb C$ by $1$, the sign
representation acts on $\mathbb C$ by $\det(P_g)$, and the standard
representation is the permutation action on
$V=\{(z_1,z_2,z_3)\in\mathbb C^3:z_1+z_2+z_3=0\}$; its trace is the number of
fixed coordinates minus $1$
([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[F3] Irreducible complex characters are an orthonormal basis of class
functions, and a finite orthonormal list satisfies Bessel's inequality
([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]],
[[thm-bessel-inequality-and-finite-parseval-identity]]).

[F4] The conjugacy-sieve theorem gives $\mu(S)\le\Delta_{\rm conj}/H$ with
$H=\sum_{m\in\mathcal L}\prod_{\ell\in m}|C_\ell|/(|G_\ell|-|C_\ell|)$
([[thm-kowalski-conjugacy-sieve-bound]]).

## Verification

1.1 The elements of $S_3$ are the identity, three transpositions, and two $3$-cycles. Conjugation sends a transposition to a transposition and a $3$-cycle to a $3$-cycle; conjugating by a permutation carries any transposition to any other and either $3$-cycle to the other. Thus these are the three conjugacy classes and their sizes are $1,3,2$. Removing the three transpositions leaves the identity and two $3$-cycles, so $|S|=3$ and $\mu(S)=3/6=1/2$. The forbidden mass is $3/6=1/2$, hence $H=1+(1/2)/(1-1/2)=2$. [given, algebra]

1.2 The trivial representation is one-dimensional and irreducible. The matrices satisfy $P_gP_h=P_{gh}$, so multiplicativity of determinant makes $g\mapsto\det(P_g)$ a one-dimensional representation, which is also irreducible. The standard representation is the permutation action on $V=\{(z_1,z_2,z_3)\in\mathbb C^3:z_1+z_2+z_3=0\}$. Writing $s=z_1+z_2+z_3$, every vector decomposes as $(s/3,s/3,s/3)+(z_1-s/3,z_2-s/3,z_3-s/3)$, with the second term in $V$ and intersection of the two summands zero. Thus the permutation representation on $\mathbb C^3$ is the constant line plus $V$, so the trace on $V$ is the number of fixed coordinates minus $1$. The character values on the identity, transpositions, and $3$-cycles are $(1,1,1)$ for the trivial character, $(1,-1,1)$ for sign, and $(2,0,-1)$ for the standard character. For the standard representation, the transposition $(12)$ has two eigenspaces in $V$, the lines spanned by $(1,1,-2)$ and $(1,-1,0)$. The $3$-cycle $(123)$ sends these vectors to $(-2,1,1)$ and $(0,1,-1)$, respectively, so it preserves neither line. Any invariant line for the whole group would have to be one of those transposition eigenspaces, which is impossible; every proper nonzero subspace of $V$ is a line, so the representation is irreducible. [F2, given, algebra]

2.1 With class sizes $1,3,2$, the squared norms of the trivial, sign, and standard characters are respectively $(1+3+2)/6=1$, $(1+3+2)/6=1$, and $(4+0+2)/6=1$. Their pairwise inner products are $(1-3+2)/6=0$, $(2+0-2)/6=0$, and $(2+0-2)/6=0$. Thus they are orthonormal. Since there are three conjugacy classes, class functions have dimension three; these characters are therefore a basis, and [F3] shows they are exactly the irreducible-character basis. [F1, F3, step 1.2, algebra]

3.1 The second-moment family is this orthonormal list. Bessel gives $\Delta_{\rm conj}\le1$, and the constant function $a=1$ has constant coefficient $1$, so $\Delta_{\rm conj}\ge1$. Hence $\Delta_{\rm conj}=1$. [F3, step 2.1, algebra]

4.1 By [F4], $\mu(S)\le1/2$; step 1.1 computed $\mu(S)=1/2$, so equality holds in the conjugacy-sieve bound. [F4, step 1.1, step 3.1, algebra] ∎
