---
id: thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple
kind: theorem
title: "For a finite-dimensional algebra, the Jacobson radical is nilpotent and the quotient by it is semisimple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobson-radical-of-a-finite-dimensional-algebra, thm-composition-series-iff-noetherian-and-artinian, thm-wedderburn-artin-theorem, thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules, def-simple-module, def-semisimple-ring, thm-equivalent-characterizations-of-semisimple-rings]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $A$ be a finite-dimensional algebra over a field and let $J=J(A)$. Then
$J$ is nilpotent, and the quotient algebra $A/J$ is semisimple.

## Facts & Assumptions

**Given:** A finite-dimensional algebra $A$ and its Jacobson radical $J=J(A)$.

[F1] The Jacobson radical is the intersection of the maximal left ideals
([[def-jacobson-radical-of-a-finite-dimensional-algebra]]).

[L1] A finite-dimensional module has a composition series and hence finite
length ([[thm-composition-series-iff-noetherian-and-artinian]]).

[L2] Every nonzero finitely generated module has a maximal proper submodule
([[thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules]]).

[L3] A simple module is a nonzero module with no proper nonzero submodule
([[def-simple-module]]).

[L4] A unital ring is semisimple when its left regular module is semisimple
([[def-semisimple-ring]]), and for such a ring every module is semisimple
([[thm-equivalent-characterizations-of-semisimple-rings]]).

## Proof

**Proof technique:** direct.

1.1 The left regular module ${}_A A$ is finite-dimensional, so [L1] gives finite length. Therefore the descending chain $A\supseteq J\supseteq J^2\supseteq\cdots$ stabilizes: choose $n$ with $J^n=J^{n+1}$. If $J^n\ne0$, [L2] gives a maximal submodule $N$ of the left $A$-module $J^n$, so $J^n/N$ is simple by [L3]. Since $J$ lies in every maximal left ideal of $A$, it annihilates every simple quotient of a finitely generated left module; in particular $J(J^n/N)=0$. Hence $J^{n+1}=JJ^n\subseteq N$, contradicting $J^{n+1}=J^n$. Therefore $J^n=0$, so $J$ is nilpotent. [F1, L1, L2, L3, given, algebra]

1.2 Maximal left ideals of $A/J$ are exactly the quotients $L/J$ with $L$ a maximal left ideal of $A$ containing $J$, so their intersection is $0$ by [F1]. Let $M={}_{A/J}(A/J)$ be the left regular module. It still has finite length by [L1]. We prove by induction on its composition length that a finite-length module whose maximal submodules intersect trivially is semisimple. If $M=0$ there is nothing to prove. Otherwise choose a minimal nonzero submodule $S\le M$, so $S$ is simple. Since the intersection of maximal submodules is $0$, some maximal submodule $N$ does not contain $S$. Then $S\cap N=0$, and maximality makes $(S+N)/N$ a nonzero submodule of the simple quotient $M/N$, so $M=S\oplus N$. The maximal submodules of $N$ correspond to the maximal submodules $S\oplus N'$ of $M$ that contain $S$, so their intersection in $N$ is again $0$; the induction hypothesis makes $N$ semisimple, hence so is $M$. [F1, L1, L2, L3, given, induction]

2.1 By step 1.2, the left regular module of $A/J$ is semisimple. Thus [L4] makes the quotient algebra $A/J$ semisimple. Together with step 1.1, this proves the theorem. [L4, step 1.1, step 1.2] ∎
