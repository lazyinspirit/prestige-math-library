---
id: thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial
kind: theorem
title: "A nonabelian group of order $p^3$ is extraspecial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-equivalent-characterisations-of-an-extraspecial-p-group, thm-nontrivial-center-of-a-finite-p-group, lem-cyclic-quotient-by-center-implies-abelian, thm-lagrange, def-finite-p-group, def-center-of-a-group, def-quotient-group, def-elementary-abelian-p-group, cor-groups-of-order-p-squared-are-abelian, lem-subgroups-of-finite-p-groups-are-p-groups]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Lemma 2.7"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime and let $P$ be a nonabelian group of order $p^3$. Then $P$ is
extraspecial: $Z(P)=[P,P]=\Phi(P)$ has order $p$ and $P/Z(P)$ is elementary
abelian of order $p^2$.

## Facts & Assumptions

**Given:** A prime $p$ and a nonabelian group $P$ with $\lvert P\rvert=p^3$.

[F1] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F2] A finite $p$-group is a finite group whose order has the form $\lvert P\rvert=p^n$ ([[def-finite-p-group]]).

[L1] If $P$ is a nontrivial finite $p$-group then $p$ divides $\lvert Z(P)\rvert$ ([[thm-nontrivial-center-of-a-finite-p-group]]).

[L2] If the quotient group $G/Z(G)$ is cyclic, then $G$ is abelian ([[lem-cyclic-quotient-by-center-implies-abelian]]).

[L3] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L4] If $p$ is prime and $G$ is a group of order $p^2$, then $G$ is abelian ([[cor-groups-of-order-p-squared-are-abelian]]).

[L5] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$ ([[def-elementary-abelian-p-group]]).

[L6] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L7] If $P$ is a finite $p$-group and $H\le P$ then $\lvert H\rvert=p^k$ for some $k$ ([[lem-subgroups-of-finite-p-groups-are-p-groups]]).

## Proof

**Proof technique:** direct.

1.1 $P$ is a nontrivial finite $p$-group, so its centre has order a power of $p$ divisible by $p$; and $Z(P)\ne P$ because $P$ is nonabelian. So $\lvert Z(P)\rvert$ is $p$ or $p^2$. [F1, F2, L1, L3, L7]

2.1 If $\lvert Z(P)\rvert=p^2$ then $P/Z(P)$ has order $p$ by Lagrange, hence is cyclic, and $P$ would be abelian. So $\lvert Z(P)\rvert=p$. [L2, L3, step 1.1]

3.1 By Lagrange $P/Z(P)$ has order $p^2$, so it is abelian; it is not cyclic, since that would again force $P$ abelian; and an abelian group of order $p^2$ that is not cyclic has every nonidentity element of order $p$, so it is elementary abelian. [L2, L3, L4, L5, step 2.1]

4.1 So $P$ is a nonabelian finite $p$-group with centre of order $p$ and elementary abelian central quotient, which is the second description in the characterisation; hence $P$ is extraspecial and $Z(P)=[P,P]=\Phi(P)$ has order $p$. [L6, step 2.1, step 3.1] ∎

## Remarks

Order $p^3$ is the smallest order at which a nonabelian $p$-group exists, and the argument shows the extraspecial condition is automatic there. At larger orders it is not: a direct product of two nonabelian groups of order $p^3$ is nonabelian of order $p^6$ with centre of order $p^2$.
