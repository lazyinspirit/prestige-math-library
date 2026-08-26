---
id: lem-adjoining-roots-of-unity-to-a-galois-extension-adds-an-abelian-kernel
kind: lemma
title: "Adjoining roots of unity to a finite Galois extension adds an abelian kernel and preserves solvability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclotomic-extension, cor-cyclotomic-extensions-are-abelian, thm-normal-subgroups-and-quotients-in-the-galois-correspondence, thm-subgroups-and-quotients-of-solvable-groups-are-solvable, thm-extensions-and-direct-products-of-solvable-groups-are-solvable, thm-finite-galois-extension-characterizations, thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Ash, Basic Abstract Algebra, Section 6.8"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Lemma 5.33"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite Galois extension, let $n\ge1$, assume
$\operatorname{char}F\nmid n$, and put $L=K(\mu_n)$. Then $L/F$ is finite
Galois, restriction gives a surjective homomorphism

$$\operatorname{Gal}(L/F)\twoheadrightarrow \operatorname{Gal}(K/F),$$

and its kernel is $\operatorname{Gal}(L/K)$, which is abelian. Consequently
$\operatorname{Gal}(L/F)$ is solvable if and only if $\operatorname{Gal}(K/F)$
is solvable.

## Facts & Assumptions

**Given:** A finite Galois extension $K/F$, the cyclotomic extension $F(\mu_n)/F$, and the compositum $L=K(\mu_n)$.

[L1] The cyclotomic extension $F(\mu_n)/F$ is finite Galois with abelian Galois group when $\operatorname{char}F\nmid n$ ([[def-cyclotomic-extension]], [[cor-cyclotomic-extensions-are-abelian]], [[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]]).

[L2] A finite extension is Galois exactly when it is the splitting field of a separable polynomial ([[thm-finite-galois-extension-characterizations]]).

[L3] In a finite Galois tower, normal intermediate fields correspond to normal subgroups and quotient Galois groups ([[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]]).

[L4] Subgroups and quotients of solvable groups are solvable, and an extension of solvable groups is solvable ([[thm-subgroups-and-quotients-of-solvable-groups-are-solvable]], [[thm-extensions-and-direct-products-of-solvable-groups-are-solvable]]).

## Proof

**Proof technique:** direct.

1.1 Because $K/F$ is finite Galois, it is the splitting field of a separable polynomial $f\in F[x]$ by [L2]. By [L1], $F(\mu_n)$ is the splitting field of the separable polynomial $x^n-1$ over $F$. Therefore $$L=K(\mu_n)$$ is the splitting field over $F$ of the separable polynomial $f(x)(x^n-1)$, so $L/F$ is finite Galois by [L2]. [L1, L2]

1.2 Since $K/F$ is Galois and $K$ is an intermediate field of the finite Galois extension $L/F$, [L3] gives a surjective restriction map $$\rho\colon \operatorname{Gal}(L/F)\twoheadrightarrow \operatorname{Gal}(K/F)$$ with kernel $\operatorname{Gal}(L/K)$. [L3]

2.1 The kernel extension $L/K$ is the cyclotomic extension $K(\mu_n)/K$, so [L1] makes $\operatorname{Gal}(L/K)$ abelian. If $\operatorname{Gal}(L/F)$ is solvable, then its quotient $\operatorname{Gal}(K/F)$ is solvable by [L4]. Conversely, if $\operatorname{Gal}(K/F)$ is solvable, then [L4] applied to the exact sequence with abelian kernel from step 1.2 makes $\operatorname{Gal}(L/F)$ solvable. [step 1.2, L1, L4]

3.1 This proves every part of the statement. [step 1.1, step 1.2, step 2.1] ∎
