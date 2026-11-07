---
id: thm-weak-mordell-weil-finite-generation
kind: theorem
title: Weak Mordell–Weil finiteness for abelian varieties over number fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-number-field
  - def-abelian-variety-over-a-field
  - def-good-reduction-and-abelian-scheme-model
  - lem-good-reduction-stable-under-base-change
  - lem-multiplication-by-n-on-abelian-scheme
  - thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre
  - lem-finiteness-of-unramified-h1-for-finite-etale-sheaves
  - lem-finiteness-of-picard-group-of-s-integers
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, Abelian Varieties"
      url: "https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf"
      locator: "§9.3, weak Mordell–Weil and the unramified Kummer route, pp. 87–92."
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§5.7.7 and §6.5.7, including Theorem 6.5.13, pp. 145–146 and 183–185."
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Chapter I Proposition 6.2 and Corollary 4.15, pp. 73–74 and 61–62."
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K/\mathbb Q$ be a finite extension, let $A/K$ be a proper, smooth, geometrically connected group variety, and let $n\ge2$ be an integer. The quotient group $A(K)/nA(K)$ of $K$-rational points by the subgroup of $n$-fold multiples is finite.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-number-field|number field]]

[[def-abelian-variety-over-a-field|abelian variety]]

## Facts & Assumptions

**Given:** AC and DC; a finite extension $K/\mathbb Q$; an abelian variety $A/K$; and an integer $n\ge2$.

[A1] AC and DC are the stated axioms ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Every abelian variety over a number field has good reduction at all but finitely many finite places; good reduction means the existence of an abelian-scheme model ([[lem-good-reduction-stable-under-base-change]], [[def-good-reduction-and-abelian-scheme-model]]).

[F2] Multiplication by $n$ on an abelian scheme is finite, flat, and surjective, and is finite étale when $n$ is invertible on the base ([[lem-multiplication-by-n-on-abelian-scheme]]).

[F3] An abelian scheme over a Dedekind base is the Néron model of its generic fibre; in particular every generic-fibre morphism from a smooth test scheme extends uniquely ([[thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre]]).

[F4] For a finite étale commutative group scheme killed by $n$ over $\operatorname{Spec}\mathcal O_{K,S}$, its étale torsor group $H^1$ is finite when $n$ is invertible ([[lem-finiteness-of-unramified-h1-for-finite-etale-sheaves]]).

[F5] For every number field $K$ and finite set $S$ of finite primes, the ring of $S$-integers $\mathcal O_{K,S}$ is Dedekind ([[lem-finiteness-of-picard-group-of-s-integers]]).

## Proof

**Proof technique:** spread out $A$ to an abelian scheme with $n$ invertible, identify its sections with $A(K)$, and inject the quotient into a finite étale torsor group.

1.1 By [F1], remove a finite set $S_0$ of finite places so that $A$ extends to an abelian scheme over $\operatorname{Spec}\mathcal O_{K,S_0}$. Enlarge $S_0$ by the finite set of prime ideals dividing $n$, call the resulting set $S$, and localize the model. The resulting abelian scheme $\mathcal A\to U:=\operatorname{Spec}\mathcal O_{K,S}$ has generic fibre $A$, and $n$ is invertible on $U$. By [F5], its base ring is Dedekind, as required in [F3]. The use of AC and DC here is inherited from [F1]. [A1, F1, F5, given, construct]

1.2 By [F2], $[n]:\mathcal A\to\mathcal A$ is finite étale and surjective, with finite étale kernel $\mathcal A[n]$ killed by $n$. For $P\in\mathcal A(U)$, the inverse image $[n]^{-1}(P)\to U$ is an $\mathcal A[n]$-torsor. To verify additivity of its class, take an étale cover on which lifts $Q_i,Q'_i$ of $P,P'$ exist. On overlaps their differences $Q_j-Q_i$ and $Q'_j-Q'_i$ lie in $\mathcal A[n]$ and represent the two torsors; $Q_i+Q'_i$ lifts $P+P'$, and its differences are the sums of those cocycles. Thus the torsor-class map is a homomorphism. Its class is trivial exactly when it has a global section $Q\in\mathcal A(U)$, which is exactly the condition $P=[n]Q$. Hence its kernel is $n\mathcal A(U)$ and it induces an injection $\mathcal A(U)/n\mathcal A(U)\hookrightarrow H^1_{\mathrm{\acute et}}(U,\mathcal A[n]).$ [F2, given, construct, algebra]

2.1 Apply [F3] to the identity smooth $U$-scheme $Y=U$. Restriction to the generic point gives a bijection $\mathcal A(U)\cong A(K)$: existence in the Néron property extends every $K$-point, and uniqueness makes restriction injective. [A1, F3, step 1.1]

3.1 The hypotheses of [F4] hold for $U$ and $\mathcal A[n]$: $U$ is the spectrum of the ring of $S$-integers, $\mathcal A[n]$ is finite étale and commutative, and $n$ is invertible by step 1.1. Thus the target of the injection in step 1.2 is finite. Using the bijection in step 2.1 proves that $A(K)/nA(K)$ is finite. AC and DC also enter through [F2] and [F3]; no additional axiom is used. [A1, F2, F3, F4, step 1.1, step 2.1, step 1.2] ∎
