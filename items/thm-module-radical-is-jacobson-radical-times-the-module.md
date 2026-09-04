---
id: thm-module-radical-is-jacobson-radical-times-the-module
kind: theorem
title: "For a finite-dimensional algebra, the module radical is exactly the action of the Jacobson radical"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-jacobson-radical-of-a-finite-dimensional-algebra, thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple, def-simple-module, thm-equivalent-characterizations-of-semisimple-rings]
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

Let $A$ be a finite-dimensional algebra with Jacobson radical $J(A)$, and let
$M$ be a finite-dimensional left $A$-module. If

$$ \operatorname{rad}(M):=\bigcap\{N<M:N\text{ maximal submodule of }M\}, $$

then

$$ \operatorname{rad}(M)=J(A)M. $$

## Facts & Assumptions

**Given:** A finite-dimensional algebra $A$, its Jacobson radical $J=J(A)$, and a finite-dimensional left $A$-module $M$.

[F1] The Jacobson radical is the intersection of maximal left ideals ([[def-jacobson-radical-of-a-finite-dimensional-algebra]]).

[L1] The algebra radical is nilpotent and $A/J$ is semisimple ([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]).

[L2] A simple module is a nonzero module with no proper nonzero submodule ([[def-simple-module]]).

[L3] Over a semisimple ring every module is semisimple ([[thm-equivalent-characterizations-of-semisimple-rings]]).

## Proof

**Proof technique:** direct.

1.1 If $M=0$, then $J(A)M=0$ and $\operatorname{rad}(M)=0$, so the claim is immediate. Assume from now on that $M\ne0$. Let $N$ be a maximal submodule of $M$. Then $M/N$ has no proper nonzero submodule, so it is simple by [L2]. Fix $m\in M$. If $m\in N$, then every $j\in J$ already satisfies $jm\in N$. If $m\notin N$, then the nonzero coset $m+N$ generates the simple module $M/N$, so the $A$-linear map $$ \theta_m:A\to M/N,\qquad a\mapsto am+N $$ is surjective. Its kernel $$ I_m:=\{a\in A:am\in N\} $$ is therefore a maximal left ideal of $A$. By [F1], $J$ is contained in every maximal left ideal, so $J\subseteq I_m$ and hence $jm\in N$ for every $j\in J$. Thus $JM\subseteq N$. Since $N$ was arbitrary, $JM\subseteq\operatorname{rad}(M)$. [F1, L2, given, algebra]

2.1 Consider the quotient module $M/JM$. Because $J$ acts trivially on it, $M/JM$ is naturally a module over the semisimple ring $A/J$ from [L1]. Therefore [L3] makes $M/JM$ semisimple, so the intersection of its maximal submodules is $0$. Maximal submodules of $M/JM$ correspond exactly to maximal submodules of $M$ containing $JM$, and their intersection is $\operatorname{rad}(M)/JM$. Hence $\operatorname{rad}(M)/JM=0$. [L1, L3, step 1.1, algebra]

3.1 Step 1.1 gives $JM\subseteq\operatorname{rad}(M)$ and step 2.1 gives the reverse inclusion. Therefore $\operatorname{rad}(M)=J(A)M$. [step 1.1, step 2.1] ∎
