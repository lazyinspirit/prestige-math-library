---
id: cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p
kind: corollary
title: "An extraspecial $p$-group is nilpotent of class exactly two and its derived subgroup has order $p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-nilpotent-group-and-nilpotency-class, thm-upper-and-lower-central-characterizations-of-nilpotence, def-subgroup-commutator-and-lower-central-series, def-center-of-a-group, cor-prime-order-group-is-cyclic, def-special-and-extraspecial-p-groups]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Proposition 2.29"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, \u00a73.1"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group. Then $P$ is nilpotent of nilpotency class
exactly two, its derived subgroup satisfies $P'=Z(P)$ and has order $p$, and
every nonidentity commutator of $P$ has order $p$.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ ([[def-special-and-extraspecial-p-groups]]).

[L1] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L2] For subgroups $A,B\le G$ the subgroup commutator is $[A,B]=\langle[a,b]:a\in A,\ b\in B\rangle$, and the lower central series is $\gamma_1(G)=G$, $\gamma_{r+1}(G)=[G,\gamma_r(G)]$ ([[def-subgroup-commutator-and-lower-central-series]]).

[L3] $G$ is nilpotent exactly when its lower central series reaches $1$, and the least $c$ with $\gamma_{c+1}(G)=1$ is its nilpotency class ([[thm-upper-and-lower-central-characterizations-of-nilpotence]], [[def-nilpotent-group-and-nilpotency-class]]).

[L4] In a finite group whose order is prime, every $g\ne e$ has order $|G|$ ([[cor-prime-order-group-is-cyclic]]).

[F1] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

## Proof

**Proof technique:** direct.

1.1 By the third description in the characterisation, $P'=Z(P)$ has order $p$ and $P$ is nonabelian. [L1]

1.2 The second term of the lower central series is $\gamma_2(P)=[P,\gamma_1(P)]=[P,P]=P'$, and the third is $\gamma_3(P)=[P,P']$. [L2]

2.1 Every element of $P'=Z(P)$ commutes with every element of $P$, so each generator $[g,z]$ of $[P,P']$ is the identity and $\gamma_3(P)=1$. [F1, step 1.1, step 1.2]

3.1 Hence $P$ is nilpotent of class at most two; the class is not zero or one, since class at most one would give $\gamma_2(P)=P'=1$ and $P$ is nonabelian, so the class is exactly two. [L3, step 1.1, step 1.2, step 2.1]

4.1 Every commutator lies in $P'$, a group of order $p$, so a nonidentity commutator has order $p$. [L4, step 1.1] ∎

## Remarks

Both conclusions are hypotheses of the class-two commutator calculus: the derived subgroup is central, which is what class two says, and it has exponent $p$, which is what the order-$p$ conclusion says.
