---
id: lem-relative-kronecker-evaluation-is-well-defined-and-natural
kind: lemma
title: "Relative Kronecker evaluation is well defined, biadditive and natural"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-singular-cochain-complex, def-relative-singular-homology, def-kronecker-evaluation-pairing, lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives, prop-singular-cohomology-is-contravariantly-functorial, prop-singular-chains-and-homology-are-covariantly-functorial]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 2.2, relative chains and the quotient C_n(X,A); Section 3.1, evaluation of cochains on chains, printed pp. 195-196"
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed., Chapter 2 (Hom and exact sequences)"
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
      locator: "relative Hom complexes and evaluation maps"
---

## Statement

Let $(X,A)$ be a topological pair, let $G$ be an abelian group and let $k$ be an
integer. Relative Kronecker evaluation
$$\langle-,-\rangle:H^k(X,A;G)\times H_k(X,A;\mathbb Z)\to G$$
is well defined, biadditive and compatible with coefficient homomorphisms
$u:G\to G'$, and it is natural for maps of pairs $f:(X,A)\to(Y,B)$:
$$\langle f^*\alpha,z\rangle=\langle\alpha,f_*z\rangle.$$
If instead $R$ is a commutative unital ring, $R$-linear relative cochains and
chains over $R$ give an $R$-bilinear pairing
$H^k(X,A;R)\times H_k(X,A;R)\to R$ with the same naturality. No multiplication
on an arbitrary abelian group $G$ is assumed.

## Facts & Assumptions

**Given:** A topological pair $(X,A)$, an abelian group $G$ and an integer $k$.

[L1] Relative singular cochains are $C^k(X,A;G)=\operatorname{Hom}_{\mathbb Z}(C_k(X,A;\mathbb Z),G)$ with $\delta\varphi=\varphi\bar\partial$, identified with the cochains on $X$ vanishing on simplices in $A$; relative cohomology is the cohomology of this complex, and $C^k(X,A;G)=0$ for $k<0$ ([[def-relative-singular-cochain-complex]]).

[L2] Relative singular homology is the homology of $C_\bullet(X,A;\mathbb Z)=C_\bullet(X;\mathbb Z)/C_\bullet(A;\mathbb Z)$; a relative $k$-cycle is an integral chain $z$ with $\partial z\in C_{k-1}(A;\mathbb Z)$, modulo chains in $A$ and boundaries ([[def-relative-singular-homology]]).

[L3] Absolute Kronecker evaluation is $\langle[\varphi],[c]\rangle=\varphi(c)$ for an integral cycle $c$ and a cocycle $\varphi$ ([[def-kronecker-evaluation-pairing]]).

[L4] The absolute Kronecker pairing descends through both quotients, is biadditive, is compatible with coefficient homomorphisms and is natural ([[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[L5] A continuous map $f:X\to Y$ induces chain maps $f_\#:C_\bullet(X;\mathbb Z)\to C_\bullet(Y;\mathbb Z)$ and $f^*$ on cohomology with coefficients, with $f^*[\varphi]=[\varphi f_\#]$ ([[prop-singular-chains-and-homology-are-covariantly-functorial]], [[prop-singular-cohomology-is-contravariantly-functorial]]).

## Proof

**Proof technique:** direct.

1.1 For a relative cocycle $\alpha\in Z^k(X,A;G)$ and a relative $k$-cycle $z$ define $E(\alpha,z)=\alpha(z)\in G$; this is a $G$-valued function of the pair of representatives, and the relative chain condition $\partial z\in C_{k-1}(A;\mathbb Z)$ together with the vanishing of $\alpha$ on $A$-simplices is available by [L1] and [L2]. [L1, L2, given]

2.1 If $z'=z+\partial b+c$ with $b\in C_{k+1}(X;\mathbb Z)$ and $c\in C_k(A;\mathbb Z)$ is another representative of the same relative class, then $E(\alpha,z')=\alpha(z)+\alpha(\partial b)+\alpha(c)=\alpha(z)+\delta\alpha(b)+0=\alpha(z)$ because $\delta\alpha=0$ and $\alpha$ vanishes on $A$-simplices, so $E$ is independent of the relative cycle representative. [step 1.1, L1, L2]

3.1 If $\alpha'=\alpha+\delta\beta$ is another relative cocycle representative, then $E(\alpha',z)=\alpha(z)+\beta(\partial z)=\alpha(z)$ because $\partial z\in C_{k-1}(A;\mathbb Z)$ and $\beta$ vanishes on $A$-simplices, so $E$ is independent of the relative cocycle representative. [step 2.1, L1, L2]

4.1 Steps 2.1 and 3.1 descend $E$ to a well-defined map $\langle-,-\rangle:H^k(X,A;G)\times H_k(X,A;\mathbb Z)\to G$, the relative form of the absolute descent in [L4]; for $k<0$ both groups are zero by [L1] and [L2] and the pairing is the zero map. [step 3.1, L1, L2, L4]

5.1 The descended pairing is biadditive: for relative cocycles $\alpha,\alpha'$ and relative cycles $z,z'$ one has $E(\alpha+\alpha',z)=E(\alpha,z)+E(\alpha',z)$ and $E(\alpha,z+z')=E(\alpha,z)+E(\alpha,z')$ because $C^k(X,A;G)$ consists of additive homomorphisms and evaluation is additive in the chain variable, and these identities pass to the quotients. [step 4.1, L1]

6.1 The pairing is coefficient-compatible: for a coefficient homomorphism $u:G\to G'$ the composite $u\circ\alpha$ again vanishes on $A$-simplices and satisfies $\delta(u\circ\alpha)=u\circ\delta\alpha=0$, and $E(u\circ\alpha,z)=u(E(\alpha,z))$; hence on classes $\langle u_*[\alpha],[z]\rangle=u\langle[\alpha],[z]\rangle$. [step 5.1, L1]

7.1 It is natural: a map of pairs $f:(X,A)\to(Y,B)$ has $f_\#(C_\bullet(A;\mathbb Z))\subseteq C_\bullet(B;\mathbb Z)$ by [L5], so $f_\#$ descends to relative chains and $f^\#$ carries cochains vanishing on $B$-simplices to cochains vanishing on $A$-simplices; on representatives $(f^\#\varphi)(z)=\varphi(f_\#z)$, which descends to $\langle f^*[\varphi],[z]\rangle=\langle[\varphi],f_*[z]\rangle$ by step 4.1. [step 6.1, L1, L2, L5]

8.1 If $R$ is a commutative unital ring and the cochains and chains are the $R$-linear ones, the same formulae with $R$-linear maps show that $E(r\alpha,z)=rE(\alpha,z)=E(\alpha,rz)$, so the descended pairing is $R$-bilinear and the computation of steps 2.1, 3.1, 5.1 and 7.1 applies verbatim, giving the pairing $H^k(X,A;R)\times H_k(X,A;R)\to R$ with the same naturality; the abelian-group statement keeps integral chains on the homology side. [step 7.1, L1, L2]

9.1 The special cases are consistent with the statement: $A=\varnothing$ recovers the absolute pairing of [L3] and [L4]; $A=X$ or $X=\varnothing$ or $G=0$ gives the zero pairing; and for $k<0$ both sides are zero. [step 8.1, L1, L2, L3] ∎
