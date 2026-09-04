---
id: cor-finitely-generated-projective-kg-modules-are-injective-and-conversely
kind: corollary
title: "Over a finite group algebra in defining characteristic, finite-dimensional projective and injective modules coincide"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra, def-projective-module, def-injective-module, thm-projective-module-characterizations, thm-injective-module-characterizations]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $A=k[G]$ with $G$ finite. For finite-dimensional left $A$-modules,
projective and injective are equivalent properties.

## Facts & Assumptions

**Given:** The finite-dimensional algebra $A=k[G]$ and a finite-dimensional left $A$-module.

[L1] The group algebra $A$ is symmetric Frobenius
([[prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra]]).

[F1] Projective modules are characterized by lifting and by being direct
summands of free modules ([[def-projective-module]], [[thm-projective-module-characterizations]]).

[F2] Injective modules are characterized by extension and by splitting short
exact sequences starting in the module ([[def-injective-module]], [[thm-injective-module-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 Let $A^\vee=\operatorname{Hom}_k(A,k)$. The symmetric Frobenius form from [L1] identifies $A$ with $A^\vee$ as left $A$-modules. An $A$-map $U\to A^\vee$ is determined by the scalar function $u\mapsto f(u)(1)$, and any $k$-linear extension of that scalar function from a submodule $U\subseteq V$ to $V$ induces an $A$-linear extension $V\to A^\vee$. Thus $A^\vee$, and hence $A$, is injective. [L1, F2, given, algebra]

2.1 If $P$ is projective, [F1] makes it a direct summand of a finite free module $A^n$. Step 1.1 makes $A^n$ injective, and a direct summand of an injective module is injective by [F2]. So every finite-dimensional projective module is injective. [F1, F2, step 1.1, algebra]

2.2 Conversely, let $I$ be injective. Dualizing a split monomorphism into $I$ turns the extension property of [F2] into the lifting property for the right $A$-module $I^\vee$, so $I^\vee$ is projective over $A^{\mathrm{op}}$. By the projective characterization in [F1], $I^\vee$ is a direct summand of a finite free right $A$-module. Dualizing back and using the symmetric Frobenius identification $(A^n)^\vee\cong A^n$, the bidual $I^{\vee\vee}\cong I$ becomes a direct summand of a finite free left $A$-module. Hence [F1] makes $I$ projective. [L1, F1, F2, step 1.1, algebra]

3.1 Steps 2.1 and 2.2 prove the equivalence. [step 2.1, step 2.2] ∎
