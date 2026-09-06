---
id: lem-the-kunneth-tor-map
title: "The Kunneth Tor map"
kind: lemma
status: draft
origin: pipeline
deps: [lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid, lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free, thm-free-modules-are-projective-with-choice-boundary, def-balanced-tor-bifunctor, thm-long-exact-sequence-in-homology, cor-the-long-exact-homology-sequence-is-natural]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $R$ be a PID and $C,D$ complexes of free $R$-modules with finite diagonals. For every $n\in\mathbb Z$, the cycle-boundary presentations induce a natural surjection
$$\pi_n:H_n(C\otimes_RD)\longrightarrow\bigoplus_{p+q=n-1}\operatorname{Tor}_1^R(H_pC,H_qD).$$

## Facts & Assumptions

**Given:** The stated ring, complexes, Choice hypothesis, and degree $n$; all tensor complexes use the direct sum and Koszul differential.

[F1] The cycle-boundary sequences are exact: [[lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid]].

[F2] Under Choice, all $Z_pC,B_pC$ are free by [[lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free]], hence projective by [[thm-free-modules-are-projective-with-choice-boundary]].

[F3] A short exact sequence of complexes gives a long exact homology sequence [[thm-long-exact-sequence-in-homology]], naturally in its maps [[cor-the-long-exact-homology-sequence-is-natural]].

[F4] Tor can be computed from a projective resolution of its first variable: [[def-balanced-tor-bifunctor]].

## Proof

**Proof technique:** direct.

1.1 Let $Z$ and $A$ be the complexes with zero differential and $Z_p=Z_pC$, $A_p=B_{p-1}C$. Inclusion and the corestriction of $d_C$ give $0\to Z\to C\xrightarrow{\rho}A\to0$. This is a sequence of chain complexes because $d_C$ vanishes on cycles and $\rho d_C=0$. Each degree sequence splits by [F2]. Tensoring with $D$ and taking direct-sum total complexes therefore gives a short exact sequence $0\to X=Z\otimes D\to T=C\otimes D\xrightarrow{r=\rho\otimes1}Y=A\otimes D\to0$. [F1, F2, given, construct]

2.1 Since $Z_p$ and $A_p$ are free, tensoring with either is a direct sum of copies and commutes with homology. Thus $H_nX=\bigoplus_{p+q=n}Z_pC\otimes H_qD$ and $H_nY=\bigoplus_{p+q=n}B_{p-1}C\otimes H_qD$. The differential on a fixed $p$ summand is $(-1)^p d_D$, which has the same cycles and boundaries as $d_D$. [F2, step 1.1, algebra]

3.1 The connecting map $\partial_n:H_nY\to H_{n-1}X$ is the direct sum of the maps induced by $B_{p-1}C\hookrightarrow Z_{p-1}C$. Indeed, represent a summand by a finite sum of $b\otimes y$ with $y$ a cycle in $D$, and lift $b$ to $c\in C_p$ with $d_Cc=b$. Then $d_T(c\otimes y)=b\otimes y$, with no second term. This is the defining connecting-map calculation, so its sign is positive. [F1, F3, step 1.1, step 2.1, construct]

4.1 The free presentation $0\to B_{p-1}C\to Z_{p-1}C\to H_{p-1}C\to0$ is a length-one projective resolution. Hence [F4] identifies $\ker(B_{p-1}C\otimes H_qD\to Z_{p-1}C\otimes H_qD)$ with $\operatorname{Tor}_1^R(H_{p-1}C,H_qD)$. Therefore $\ker\partial_n$ is exactly the displayed Tor sum after reindexing $p-1$. [F1, F2, F4, step 3.1, algebra]

5.1 By [F3], $H_n(r)$ has image $\ker\partial_n$. Define $\pi_n$ as $H_n(r)$ corestricted to this kernel and followed by the identification in step 4.1. It is well defined on homology and surjective. A pair of chain maps induces maps of the sequence in step 1.1 and of the free presentations in step 4.1, so [F3] and the comparison naturality in [F4] prove naturality of $\pi_n$. Empty sums and zero modules cause no exception. [F3, F4, step 1.1, step 4.1, algebra] ∎
