---
dependency_level: 0
id: lem-finite-coefficient-cyclotomic-completed-group-algebra-coordinate
kind: lemma
title: The procyclic completed group algebra with finite free coefficients
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-p-adic-integers-as-compatible-residue-classes
- thm-monic-polynomial-division
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Coates and R. Sujatha, The Main Conjecture
    url: https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download
    locator: Sections 1–3, completed group algebras, continuous actions and characteristic
      ideals; local reconstruction.
  - title: J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions
    url: https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf
    locator: Sections 3.3–3.4, Iwasawa algebra and power-series coordinate; explicit
      cofinal-completion proof supplied here.
verification: {}
---

## Statement

Let $p$ be a prime and let $B$ be a commutative algebra finite free over $\mathbb Z_p$, including the zero algebra. For the cyclic groups $C_{p^n}=\langle\gamma_n\rangle$ and transition maps $\gamma_{n+1}\mapsto\gamma_n$, there is a canonical topological $B$-algebra isomorphism
$$\varprojlim_n B[C_{p^n}]\ \cong\ B[[T]],\qquad \gamma\longmapsto1+T.$$
The group-ring inverse limit has the inverse limit of the coefficientwise $p$-adic topologies; the series ring has the $(p,T)$-adic topology. Consequently, for a finite abelian group $D$ and a procyclic group $\Gamma=\langle\gamma\rangle\cong\mathbb Z_p$, the completed group algebra defined as $\varprojlim_U\mathbb Z_p[(D\times\Gamma)/U]$ is $\mathbb Z_p[D][[T]]$. No choice axiom or reducedness assumption on $B$ is needed.

## Facts & Assumptions

**Given:** $p$, the finite free coefficient algebra $B$, and the compatible cyclic generators.

[F1] $\mathbb Z_p$ consists of compatible residue classes modulo $p^m$; this description also gives its completeness and separatedness. A finite free module over it is complete coefficientwise. ([[def-p-adic-integers-as-compatible-residue-classes]])

[F2] A quotient by a monic degree-$d$ polynomial is free on $1,T,\ldots,T^{d-1}$. ([[thm-monic-polynomial-division]])

## Proof

1.1 If $B=0$, all the rings in the Statement are zero and its assertions follow immediately. For the remaining argument assume $B\ne0$. Put $P=B[T]$ and $f_n=(1+T)^{p^n}-1$. Sending $\gamma_n$ to $1+T$ identifies $B[C_{p^n}]$ with $P/(f_n)$: the usual cyclic presentation has the relation $\gamma_n^{p^n}=1$, and $1+T$ is invertible in this quotient with inverse $(1+T)^{p^n-1}$. By [F2] this quotient is finite free over $B$, and hence complete for powers of $p$ by [F1]. Thus $\varprojlim_n P/(f_n)=\varprojlim_n\varprojlim_m P/(p^m,f_n)$. Commuting these two inverse limits is simply identifying both sides with the same compatible doubly indexed tuples; it requires no surjectivity selection. [F1, F2, given, construct, algebra]

2.1 Let $J=(p,T)\subset P$. The ideals $(p^m,f_n)$ are cofinal with the powers of $J$. In one direction fix $k$. Take $m\ge k$ and $n$ large. For $1\le j<k$, the identity $j\binom{p^n}{j}=p^n\binom{p^n-1}{j-1}$ gives $v_p\binom{p^n}{j}\ge n-v_p(j)$; choose $n$ so this is at least $k-j$ for every such $j$, and also $p^n\ge k$. All terms of $f_n$ then lie in $J^k$, so $(p^m,f_n)\subseteq J^k$. [step 1.1, algebra]

3.1 Conversely fix $m,n\ge1$. Modulo $(p^m,f_n)$, the characteristic-$p$ binomial identity gives $T^{p^n}\in pP/(p^m,f_n)$. Hence $T^{mp^n}=0$ in this quotient. Also $p^m=0$. Every monomial of total $(p,T)$-degree $m+mp^n-1$ therefore vanishes: either its exponent of $p$ is at least $m$, or its exponent of $T$ is at least $mp^n$. Thus $J^{m+mp^n-1}\subseteq(p^m,f_n)$. Together with step 2.1 this proves cofinality. [step 2.1, algebra]

4.1 The $J$-adic completion of $P$ is $B[[T]]$. Indeed modulo $J^k$ only coefficients of degrees $j<k$ remain, with the degree-$j$ coefficient taken modulo $p^{k-j}B$. A compatible system determines each coefficient uniquely in $B$ by [F1], and conversely any sequence of coefficients gives such a system. Addition and multiplication agree coefficientwise, each fixed coefficient of a product being a finite sum. Steps 1.1, 2.1 and 3.1 identify the inverse limit of the group rings with this completion, and cofinality identifies the stated topologies. [F1, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 For $D\times\Gamma$, the subgroups $\{1\}\times p^n\Gamma$ are cofinal among open subgroups: every open identity neighborhood contains one of them. Their quotient rings are $\mathbb Z_p[D][C_{p^n}]$. The coefficient algebra $\mathbb Z_p[D]$ is finite free on the elements of $D$, so step 4.1 applies to it. If $B=0$ all rings are zero and the same constructions hold. Every limit map used above is specified uniquely by its finite coordinates, so no family of witnesses is chosen. [step 4.1, given, algebra] ∎
