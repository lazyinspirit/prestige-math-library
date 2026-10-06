---
id: lem-long-exact-sequence-of-a-triple-in-singular-homology
kind: lemma
title: "Long exact sequence of a triple in singular homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-singular-chain-complex-of-a-pair, def-relative-singular-homology, lem-singular-boundary-descends-to-relative-chains, thm-long-exact-sequence-in-homology, def-short-exact-sequence-of-complexes, def-chain-complex-in-an-abelian-category, def-relative-homology-connecting-homomorphism-on-cycles]
justified_by: []
aliases: []
landmark: false
proof_strategy: degreewise-quotient
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Sections 2.1-2.2 (relative homology and long exact sequences)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
dependency_level: 0
---

## Statement

For spaces $B\subseteq A\subseteq X$ and every abelian group $G$ there is a long
exact sequence
$$\cdots\to H_n(A,B;G)\to H_n(X,B;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A,B;G)\to\cdots,$$
where the first two maps are induced by inclusions and $\delta$ is the
connecting homomorphism of the degreewise short exact sequence
$$0\to C_\bullet(A,B;G)\to C_\bullet(X,B;G)\to C_\bullet(X,A;G)\to0$$
of relative singular chain complexes. Moreover $\delta$ factors as the
connecting map $H_n(X,A;G)\to H_{n-1}(A;G)$ of the pair $(X,A)$ followed by
the quotient map $H_{n-1}(A;G)\to H_{n-1}(A,B;G)$.

## Facts & Assumptions

**Given:** Spaces $B\subseteq A\subseteq X$ and an abelian group $G$.

[F1] The relative singular chain group is $C_n(X,A;G)=C_n(X;G)/C_n(A;G)$, with $C_n(A;G)\subseteq C_n(X;G)$ induced by inclusion, and both $A=\varnothing$ and $A=X$ are admitted ([[def-singular-chain-complex-of-a-pair]]).

[F2] The singular boundary descends to homomorphisms $\bar\partial_n:C_n(X,A;G)\to C_{n-1}(X,A;G)$ with $\bar\partial_{n-1}\bar\partial_n=0$ ([[lem-singular-boundary-descends-to-relative-chains]]).

[F3] A short exact sequence of chain complexes is a sequence of chain maps $0\to A_\bullet\to B_\bullet\to C_\bullet\to0$ that is exact in each degree ([[def-short-exact-sequence-of-complexes]]), a chain complex being a graded family with $d_{n-1}d_n=0$ ([[def-chain-complex-in-an-abelian-category]]).

[F4] A short exact sequence of complexes in an abelian category induces a long exact sequence in homology with connecting maps $\partial_n$ ([[thm-long-exact-sequence-in-homology]]).

[L1] $H_n(X,A;G)$ is by definition the homology of the complex $C_\bullet(X,A;G)$ ([[def-relative-singular-homology]]).

[L2] The connector of the pair sequence is fixed on cycles by $\delta[c]:=[\partial c]$ for a relative cycle $c$ with $\partial c\in C_{n-1}(A;G)$; the quotient map is the third arrow of the chain sequence ([[def-relative-homology-connecting-homomorphism-on-cycles]]).

## Proof

**Proof technique:** degreewise-quotient.

1.1 In each degree the sequence $$0\to C_n(A,B;G)\to C_n(X,B;G)\to C_n(X,A;G)\to0$$ is the sequence of quotients $C_n(A)/C_n(B)\to C_n(X)/C_n(B)\to C_n(X)/C_n(A)$ induced by $C_n(B)\subseteq C_n(A)\subseteq C_n(X)$ by [F1]; it is exact because the first map is injective (the inclusion $C_n(A)\to C_n(X)$ descends injectively after dividing by the common subgroup $C_n(B)$), the second is surjective, and its kernel is exactly $C_n(A)/C_n(B)$. [F1, given, algebra]

2.1 By [F2] all three boundary maps descend to the quotients, so the degreewise maps of step 1.1 commute with the boundaries and form chain maps; hence they constitute a short exact sequence of complexes in the sense of [F3]. [F2, F3, step 1.1]

3.1 Applying [F4] to the short exact sequence of step 2.1 gives the long exact sequence of the statement; the homology groups are $H_n(X,A;G)$, $H_n(X,B;G)$, $H_n(A,B;G)$ by [L1], and the first two maps are induced by inclusions because the chain maps of step 1.1 are. [F4, L1, step 2.1]

4.1 For the factorization, let $c$ be a relative cycle for $(X,A)$ with $\partial c\in C_{n-1}(A;G)$, representing a class in $H_n(X,A;G)$. The connecting map of the triple sequence sends its class to the class of $\partial c$ in $H_{n-1}(A,B;G)$: this is the same cycle formula as in [L2] read in the middle complex $C_\bullet(X,B;G)$, where the role of the subspace is played by $A$ modulo $B$. The pair connector of $(X,A)$ sends the same class to $[\partial c]\in H_{n-1}(A;G)$ by [L2], and the quotient map $H_{n-1}(A;G)\to H_{n-1}(A,B;G)$ is induced by the quotient chain map; composing gives the triple connector. Hence $\delta$ factors as the pair connector followed by the quotient map. [L2, step 3.1, algebra] ∎

## Remarks

- **The case $B=\varnothing$.** Then $H_n(X,B;G)=H_n(X;G)$ and $H_n(A,B;G)=H_n(A;G)$ are the absolute groups and the sequence is the ordinary long exact sequence of the pair; the factorization statement is vacuous, the quotient map being an isomorphism.
- **The case $A=B$.** Then the middle complex is $C_\bullet(X,B;G)$ and the sequence reads $\cdots\to H_n(B,B;G)\to H_n(X,B;G)\xrightarrow{\ \cong\ }H_n(X,B;G)\to H_{n-1}(B,B;G)\to\cdots$, consistent with the vanishing of the two outer groups.
- This is the exact sequence used to compare successive sublevel manifolds and to compute the connecting map of a handle stage.
