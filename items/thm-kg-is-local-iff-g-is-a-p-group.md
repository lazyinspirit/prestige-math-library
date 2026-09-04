---
id: thm-kg-is-local-iff-g-is-a-p-group
kind: theorem
title: "For a finite group and a field of characteristic p, the group algebra is local exactly when the group is a p-group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent, def-jacobson-radical-of-a-finite-dimensional-algebra, thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple, def-augmentation-map-and-augmentation-ideal-of-a-group-ring, thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules, thm-cauchys-theorem-for-finite-groups, thm-group-ring-is-a-unital-algebra-with-basis-g]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite group and $k$ a field of characteristic $p$. Then the group
algebra $k[G]$ is local if and only if $G$ is a $p$-group.

## Facts & Assumptions

**Given:** A finite group $G$ and a field $k$ of characteristic $p$.

[F1] The augmentation ideal $I_G$ is the kernel of the augmentation map ([[def-augmentation-map-and-augmentation-ideal-of-a-group-ring]]).

[L1] For a finite $p$-group, the augmentation ideal is nilpotent ([[lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent]]).

[L2] The Jacobson radical is nilpotent and the quotient by it is semisimple ([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]).

[L3] Cauchy's theorem supplies a subgroup of order $q$ whenever a prime $q$
divides $|G|$ ([[thm-cauchys-theorem-for-finite-groups]]).

[L4] In the group algebra, basis elements multiply by the group law
([[thm-group-ring-is-a-unital-algebra-with-basis-g]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $G=P$ is a finite $p$-group. The quotient $k[P]/I_P$ is the field $k$, so $I_P$ is a maximal ideal by [F1]. By [L1], $I_P$ is nilpotent. Every maximal left ideal of $k[P]$ therefore contains $I_P$, so the Jacobson radical from [[def-jacobson-radical-of-a-finite-dimensional-algebra]] is exactly $I_P$. Hence $k[P]/J(k[P])\cong k$ is simple, so $k[P]$ is local. [F1, L1, L2, given, algebra]

1.2 Conversely, assume $k[G]$ is local and suppose that $G$ is not a $p$-group. Choose a prime $q\ne p$ dividing $|G|$. By [L3], $G$ contains a subgroup $C$ of order $q$. Since $q$ is invertible in $k$, the element $$e_C:=q^{-1}\sum_{c\in C}[c]\in k[G]$$ satisfies $e_C^2=e_C$ by [L4]. It is neither $0$ nor $1$: its coefficient at every $c\in C$ is the nonzero scalar $q^{-1}$, and either $C\ne G$ or the coefficients at the nonidentity elements still differ from those of $1=[1_G]$. [L3, L4, given, algebra]

2.1 A finite-dimensional local algebra has no nontrivial idempotent. Indeed, if $e^2=e$ with $e\ne0,1$, then the nonzero proper left ideals $Ae$ and $A(1-e)$ are contained in maximal left ideals. Locality puts both inside the unique maximal left ideal, but $e+(1-e)=1$ then lies in that proper ideal, a contradiction. Applying this to $e_C$ contradicts step 1.2. Therefore every prime divisor of $|G|$ is $p$, and $G$ is a $p$-group. [step 1.2, algebra]

3.1 Steps 1.1, 1.2, and 2.1 prove the equivalence. The trivial group is included in the forward direction with $I_1=0$. [step 1.1, step 1.2, step 2.1] ∎
