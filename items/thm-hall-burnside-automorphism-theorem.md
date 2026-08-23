---
id: thm-hall-burnside-automorphism-theorem
kind: theorem
title: "Hall–Burnside: coprime automorphisms are detected on the Frattini quotient"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-burnside-basis-theorem, thm-automorphisms-act-linearly-on-the-frattini-quotient, thm-cauchys-theorem-for-finite-groups, cor-p-group-action-has-a-fixed-point, thm-lagrange]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 2.30"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Let $P$ be a finite $p$-group, and let $A\le\operatorname{Aut}(P)$ be a finite subgroup whose order is not divisible by $p$. If $A$ acts trivially on $P/\Phi(P)$ through $\rho_P$, then $A=1$.

## Facts & Assumptions

**Given:** A finite $p$-group $P$ and a finite $p'$-subgroup $A\le\operatorname{Aut}(P)$ acting trivially on $P/\Phi(P)$.

[L1] A subset $X\subseteq P$ is minimally generating exactly when the quotient map restricts to a bijection from $X$ onto a basis of $P/\Phi(P)$ ([[thm-burnside-basis-theorem]]).

[L2] If a prime $q$ divides the order of a finite group, that group contains an element of order $q$ ([[thm-cauchys-theorem-for-finite-groups]]).

[L3] If a finite $q$-group acts on a finite set whose size is not divisible by $q$, then it has a fixed point ([[cor-p-group-action-has-a-fixed-point]]).

[L4] Every automorphism of $P$ induces its action on $P/\Phi(P)$ through $\rho_P$ ([[thm-automorphisms-act-linearly-on-the-frattini-quotient]]).

[L5] The order of a subgroup divides the order of a finite group ([[thm-lagrange]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $A\ne1$. Choose a prime $q$ dividing $|A|$; [L2] gives $\alpha\in A$ of order $q$. Since $p\nmid|A|$, one has $q\ne p$. [given, L2, assume-contra, algebra]

2.1 Triviality of the quotient action in [L4] means that $\alpha$ preserves each coset of $\Phi(P)$. Each coset has $|\Phi(P)|$, a power of $p$ by [L5], elements. The cyclic $q$-group $\langle\alpha\rangle$ acts on that coset, and $q\ne p$ makes [L3] provide an $\alpha$-fixed representative in every coset. [step 1.1, L3, L4, L5, given, algebra]

3.1 Starting from the finite generating set $P$, delete redundant elements until a minimal generating set remains; [L1] sends it bijectively onto a basis of $P/\Phi(P)$. Using step 2.1, choose a fixed representative of each of these finitely many basis cosets. By [L1] those representatives generate $P$. Since $\alpha$ fixes every generator, it fixes every element of $P$, so $\alpha$ is the identity, contradicting its prime order. [step 2.1, L1, given, algebra]

4.1 The contradiction shows that the assumed nontrivial $p'$-subgroup cannot exist; hence $A=1$. [step 1.1, step 3.1, discharge-contradiction] ∎
