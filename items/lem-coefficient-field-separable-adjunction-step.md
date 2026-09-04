---
id: lem-coefficient-field-separable-adjunction-step
kind: lemma
title: "Separable residue elements adjoin across a maximal subfield"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-maximal-residue-injective-subfield, cor-henselian-local-simple-root-criterion, cor-complete-local-rings-are-henselian]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a complete equicharacteristic local ring, let
$K \subseteq A$ be a residue-injective subfield, and let $\rho(K) \subseteq k$
be its image in the residue field $k=A/\mathfrak m$. If $\overline u \in k$ is
separable algebraic over $\rho(K)$ and $\overline u\notin\rho(K)$, then there
exists a strictly larger residue-injective subfield $K' \subseteq A$ whose
residue image contains $\overline u$.

## Facts & Assumptions

**Given:** A complete equicharacteristic local ring $(A,\mathfrak m)$, a
residue-injective subfield $K \subseteq A$, and a residue element
$\overline u\notin\rho(K)$ separable algebraic over $\rho(K)$.

[L1] Complete local rings are Henselian, hence satisfy the simple-root lifting
criterion ([[cor-complete-local-rings-are-henselian]], [[cor-henselian-local-simple-root-criterion]]).

[L2] Maximal residue-injective subfields are the objects to be enlarged in the
coefficient-field argument ([[lem-maximal-residue-injective-subfield]]).

## Proof

**Proof technique:** lift the separable minimal polynomial.

1.1 Let $\overline p(T) \in \rho(K)[T]$ be the minimal polynomial of $\overline u$. Since $\overline u$ is separable over $\rho(K)$, one has $\overline p'(\overline u) \ne 0$. Lift the coefficients of $\overline p$ through the residue isomorphism $\rho:K \to \rho(K)$ to a monic polynomial $p(T) \in K[T] \subseteq A[T]$. [given, choose, algebra]

2.1 By [L1], the simple residue root $\overline u$ of $\overline p$ lifts uniquely to some $u \in A$ with $p(u)=0$. Then $K[u]$ is an integral domain finite over $K$, and its fraction field $K':=K(u)$ sits inside $A$ because every nonzero element of $K[u]$ has nonzero residue, hence is a unit in the local ring $A$. The residue image of $K'$ contains both $\rho(K)$ and $\overline u$. [L1, step 1.1, given, algebra]

3.1 The residue map is injective on $K'$: if $x/y \in K'$ has zero residue, then $\rho(x)=0$, so $x=0$ because $K[u] \to k$ remains injective on polynomials of degree smaller than the minimal polynomial of $\overline u$. Moreover, $u\notin K$ because $\overline u\notin\rho(K)$. Thus $K'$ is a strictly larger residue-injective subfield containing a lift of $\overline u$. [step 2.1, given, algebra]

4.1 Therefore every separable residue element adjoins across a maximal residue-injective subfield. The role of [L2] is to show exactly why this contradicts maximality in the later corollary. [L2, step 3.1] ∎
