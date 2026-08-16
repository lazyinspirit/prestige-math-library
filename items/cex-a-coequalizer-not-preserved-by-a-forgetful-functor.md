---
id: cex-a-coequalizer-not-preserved-by-a-forgetful-functor
kind: counterexample
title: "The group coequalizer of doubling and zero on the integers is not its underlying-set coequalizer"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  truth_risk: "The equivalence relation generated in Set could accidentally be confused with the normal-subgroup quotient generated in groups."
  counterexample_search: "Computed both universal quotients: the group quotient is Z/2Z, while the set quotient has one even class and a distinct singleton class for every odd integer."
deps: [thm-the-free-group-monad-and-its-algebras-are-groups, def-equalizers-and-coequalizers, def-group-homomorphism, prop-integers-modulo-n-as-a-quotient-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

In groups, the coequalizer of $f,g:\mathbb Z\rightrightarrows\mathbb Z$ defined by $f(n)=2n$ and $g(n)=0$ is $\mathbb Z/2\mathbb Z$. In sets, the coequalizer of the same underlying functions is infinite. Thus the underlying-set functor from groups does not preserve this coequalizer.

## Facts & Assumptions

**Given:** The group homomorphisms $f(n)=2n$ and $g(n)=0$.

[L1] A coequalizer is universal among arrows $q$ satisfying $qf=qg$ ([[def-equalizers-and-coequalizers]]).

[L2] Reduction modulo $2$ is the quotient homomorphism $\mathbb Z\to\mathbb Z/2\mathbb Z$ ([[prop-integers-modulo-n-as-a-quotient-group]]).

[L3] The Eilenberg–Moore category of the free-group monad is the category of groups ([[thm-the-free-group-monad-and-its-algebras-are-groups]]).

## Verification

**Proof technique:** direct.

1.1 Reduction modulo $2$ coequalizes $f$ and $g$. If a group homomorphism $h:\mathbb Z\to H$ satisfies $hf=hg$, then $h(2n)$ is the identity for every $n$, so $h$ kills $2\mathbb Z$ and factors uniquely through $\mathbb Z/2\mathbb Z$. Thus this is the group coequalizer by [L1]–[L2]. [L1, L2]

1.2 In $\mathbf{Set}$, the generated equivalence relation identifies every even integer with $0$, because the generating pairs are $(2n,0)$. No odd integer occurs in such a pair, so each odd integer remains a singleton equivalence class. The quotient map coequalizes $f$ and $g$, and every function $u$ with $uf=ug$ is constant on the even class and therefore factors uniquely through this quotient, proving its Set universal property. [L1]

2.1 The set coequalizer is therefore infinite, while the underlying set of the group coequalizer has the residue classes of $0$ and $1$. The underlying-set functor, including the one in the free-group adjunction of [L3], does not preserve this coequalizer. [L3, step 1.1, step 1.2] ∎
