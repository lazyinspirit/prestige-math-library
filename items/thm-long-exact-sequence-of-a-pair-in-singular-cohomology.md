---
id: thm-long-exact-sequence-of-a-pair-in-singular-cohomology
kind: theorem
title: Long exact sequence of a pair in singular cohomology
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-relative-singular-cochain-complex, def-singular-cochain-complex-with-coefficients, lem-the-singular-coboundary-squares-to-zero, prop-singular-cohomology-is-contravariantly-functorial]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, Relative Groups and the Long Exact Sequence of a Pair, printed pages 199–200
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement

For every subspace $A\subseteq X$ and abelian group $G$ there is an exact sequence
$$\cdots\to H^n(X,A;G)\xrightarrow{j}H^n(X;G)\xrightarrow{r}H^n(A;G)\xrightarrow{\partial}H^{n+1}(X,A;G)\to\cdots.$$
Here $j$ comes from including the relative cochains, $r$ is restriction, and the connector sends a cocycle class $[a]$ to $[\delta\widetilde a]$, for any cochain extension $\widetilde a$ of $a$ to $X$. Negative groups are zero, so the sequence begins $0\to H^0(X,A;G)\to H^0(X;G)\to H^0(A;G)$.

## Facts & Assumptions

[F1] [[def-relative-singular-cochain-complex]] identifies relative cochains with absolute cochains vanishing on simplices in $A$, and defines their cohomology quotient.

[F2] [[def-singular-cochain-complex-with-coefficients]] identifies cochains with arbitrary functions on simplices and uses positive precomposition coboundary; [[lem-the-singular-coboundary-squares-to-zero]] gives $\delta^2=0$.

[F3] [[prop-singular-cohomology-is-contravariantly-functorial]] makes restriction a cochain map and supplies its induced map on cohomology.

## Proof

**Given:** The pair and coefficients of the statement. Abbreviate the relative, absolute and subspace cochain complexes by $D,C,E$, respectively, and their differentials by $\delta$.

1.1 In every degree, restriction $r:C^n\to E^n$ is onto: extend a function on simplices in $A$ by zero on all other simplices of $X$, using [F2]. Its kernel is exactly $D^n$ by [F1], and $j:D^n\to C^n$ is inclusion. These maps commute with $\delta$ by [F1] and [F3]. Thus $0\to D\xrightarrow{j}C\xrightarrow{r}E\to0$ is termwise exact. Extension by zero is a linear degreewise section, and is not asserted to be a cochain map. For negative degrees the exact row consists of zeros. [F1, F2, F3]

2.1 Let $a\in E^n$ be a cocycle and choose an extension $\widetilde a$ as in step 1.1. Then $r\delta\widetilde a=\delta a=0$, so $\delta\widetilde a\in D^{n+1}$; it is closed by $\delta^2=0$. Two extensions differ by an element $d\in D^n$ and their differentials differ by the relative coboundary $\delta d$. If $a'=a+\delta b$, extend $b$ to $\widetilde b$; then $\widetilde a+\delta\widetilde b$ extends $a'$ and has the same differential as $\widetilde a$. Combining the two observations proves representative independence. Sum extensions and integer multiples prove that $\partial[a]=[\delta\widetilde a]$ is a homomorphism. [F1, F2, step 1.1]

2.2 At $H^n(C)$, every relative class restricts to zero. Conversely if a cocycle $c$ has $[rc]=0$, write $rc=\delta b$ in $E^n$. Extend $b\in E^{n-1}$ to $\widetilde b\in C^{n-1}$. Then $c-\delta\widetilde b$ is a relative cocycle representing $[c]$. For $n=0$, $b$ and its extension are zero, since negative cochains vanish; the same reasoning is valid. Hence this kernel is exactly the relative image. [F1, F2, step 1.1]

3.1 At $H^n(E)$, a global cocycle restricting to $a$ has zero connecting class. Conversely if $\partial[a]=0$, an extension has $\delta\widetilde a=\delta d$ for some $d\in D^n$. Then $\widetilde a-d$ is a cocycle of $C$ restricting to $a$, so $[a]$ lies in the restriction image. This proves exactness there in both directions. [F1, step 1.1, step 2.1]

3.2 At $H^{n+1}(D)$, a connecting representative $\delta\widetilde a$ is a coboundary in $C$, so its class maps to zero. Conversely if a relative cocycle $d$ is a global coboundary $d=\delta c$, then $rc$ is a cocycle of $E$ since $\delta rc=rd=0$. Its connector, using the extension $c$, is $[d]$. This proves exactness at the third type of position. If this relative degree is zero, $c\in C^{-1}=0$ forces $d=0$, establishing the initial injection explicitly. [F1, F2, step 1.1, step 2.1]

4.1 All integer degrees and all three types of position are covered by steps 3.1, 2.2 and 3.2, proving the long exact sequence and its connector. If $A=\varnothing$, then $D=C$ and $E=0$, so the sequence consists of identity and zero maps. If $A=X$, then $D=0$ and restriction is identity. Empty $X$ or zero $G$ give zero sequences. For a point and either of its two subspaces these same endpoint cases apply. The explicit extension-by-zero function is available without selecting any elements of $G$ beyond its specified zero; no AC, projectivity or injectivity of $G$ is used. [F1, F2, step 1.1, step 2.1, step 3.1, step 2.2, step 3.2] ∎
