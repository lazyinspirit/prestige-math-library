---
id: thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group
kind: theorem
title: "Equivalence classes of degree-one representations are exactly homomorphisms $G\\to k^{\\times}$; equivalently they factor through $G/G'$, and they form an abelian group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-field, def-finite-dimensional-representation-of-a-group-over-a-field, def-group-homomorphism, def-invertible-element, def-intertwiner-equivalent-and-faithful-representations, lem-ring-units-form-a-group, thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 1.1.2 and Proposition 4.2.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field and let $G$ be a group.

1. choosing a basis of a degree-one representation of $G$ over $k$ produces a
   homomorphism $\chi:G \to k^{\times}$, and every such homomorphism produces a
   normalized degree-one representation on the one-dimensional space $k$;
2. two degree-one representations are equivalent if and only if they produce
   the same homomorphism, so equivalence classes of degree-one representations
   are in bijection with the homomorphisms $G \to k^{\times}$;
3. equivalently, those equivalence classes are in bijection with the
   homomorphisms that factor through the abelianisation quotient $G/G'$;
4. under pointwise multiplication and inversion of the corresponding
   homomorphisms, these equivalence classes form an abelian group.

## Facts & Assumptions

**Given:** A field $k$ and a group $G$.

[L1] A degree-one representation is a finite-dimensional representation whose underlying vector space has dimension $1$ ([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[L2] The units $k^{\times}$ of the field form a group under multiplication ([[lem-ring-units-form-a-group]], [[def-invertible-element]]), and field multiplication is commutative ([[def-field]]).

[L3] Every homomorphism from $G$ to an abelian group factors uniquely through the quotient $G/G'$ ([[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]], [[def-group-homomorphism]]).

[L4] Two representations are equivalent when there is an invertible intertwiner between them ([[def-intertwiner-equivalent-and-faithful-representations]]).

## Proof

**Proof technique:** constructive.

1.1 Let $\rho:G \to \operatorname{GL}(V)$ be a degree-one representation. By [L1], choose a basis vector $v$ of the one-dimensional space $V$. For each $g \in G$ there is a unique scalar $\chi(g) \in k$ with $\rho(g)v=\chi(g)v$, and because $\rho(g)$ is invertible, that scalar lies in $k^{\times}$. [L1, L2, given, construct]

2.1 The representation law gives $\chi(gh)v=\rho(gh)v=\rho(g)\rho(h)v=\chi(g)\chi(h)v$, so $\chi(gh)=\chi(g)\chi(h)$. Thus $\chi:G \to k^{\times}$ is a group homomorphism. Under the identification $V \cong k$ sending $v$ to $1$, the representation becomes the normalized action $g \cdot a=\chi(g)a$ on the one-dimensional space $k$. [step 1.1, L2, given, algebra]

3.1 Conversely, if $\chi:G \to k^{\times}$ is a group homomorphism, define $\rho_{\chi}(g):k \to k$ by $\rho_{\chi}(g)(a)=\chi(g)a$. Each $\rho_{\chi}(g)$ is invertible with inverse multiplication by $\chi(g)^{-1}$, and the homomorphism law for $\chi$ gives $\rho_{\chi}(gh)=\rho_{\chi}(g)\rho_{\chi}(h)$. So $\rho_{\chi}$ is a degree-one representation. [step 2.1, L2, given, construct]

4.1 If two degree-one representations are equivalent, an invertible intertwiner sends a chosen basis vector of one space to a nonzero scalar multiple of a basis vector of the other, so the character extracted in step 2.1 is unchanged; conversely, if two degree-one representations produce the same homomorphism $\chi$, then step 2.1 identifies each of them with the same normalized representation $\rho_\chi$ of step 3.1, so they are equivalent by [L4]. Therefore equivalence classes of degree-one representations are in bijection with homomorphisms $G \to k^{\times}$. [step 2.1, step 3.1, L4, given, algebra]

5.1 Because $k^{\times}$ is abelian by [L2], [L3] identifies the same equivalence classes with the homomorphisms factoring through $G/G'$. If $\chi,\psi:G \to k^{\times}$ are homomorphisms, then $(\chi\psi)(g):=\chi(g)\psi(g)$ and $\chi^{-1}(g):=\chi(g)^{-1}$ are again homomorphisms. Thus the equivalence classes of degree-one representations form an abelian group under pointwise multiplication and inversion of their corresponding homomorphisms. [step 4.1, L2, L3, discharge-construct] ∎
