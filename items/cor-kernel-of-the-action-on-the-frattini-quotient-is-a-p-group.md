---
id: cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group
kind: corollary
title: "The kernel of the automorphism action on $P/\\Phi(P)$ is a $p$-group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-automorphisms-act-linearly-on-the-frattini-quotient, thm-hall-burnside-automorphism-theorem, thm-cauchys-theorem-for-finite-groups, thm-canonical-prime-factorisation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Proposition 4.10"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $P$ be a finite $p$-group. The kernel of

$$\rho_P:\operatorname{Aut}(P)\longrightarrow\operatorname{Aut}_{\mathbb F_p}(P/\Phi(P))$$

is a finite $p$-group.

## Facts & Assumptions

**Given:** A finite $p$-group $P$ and $K:=\ker\rho_P$.

[L1] Every automorphism of a finite $p$-group induces an $\mathbb F_p$-linear automorphism of $P/\Phi(P)$, and these form a homomorphism $\rho_P$ ([[thm-automorphisms-act-linearly-on-the-frattini-quotient]]).

[L2] If a $p'$-subgroup of $\operatorname{Aut}(P)$ acts trivially on $P/\Phi(P)$, then it is trivial ([[thm-hall-burnside-automorphism-theorem]]).

[L3] If a prime $q$ divides the order of a finite group, that group contains an element of order $q$ ([[thm-cauchys-theorem-for-finite-groups]]).

[L4] A positive integer is the product of powers of its prime divisors, with uniquely determined exponents ([[thm-canonical-prime-factorisation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $K$ is a subgroup of $\operatorname{Aut}(P)$. Since $P$ is finite, its automorphism group is a subgroup of the finite permutation group of its underlying set, so $K$ is finite. [given, L1, algebra]

2.1 If a prime $q\ne p$ divided $|K|$, [L3] would give $\alpha\in K$ of order $q$. Then $\langle\alpha\rangle$ would be a nontrivial $p'$-subgroup acting trivially on the quotient, contradicting [L2]. [step 1.1, L2, L3, L4, algebra]

3.1 By [L4], no prime other than $p$ occurs in $|K|$, so $|K|$ is a power of $p$. The exponent-zero case gives the trivial kernel, including $P=1$. [step 2.1, L4, algebra] ∎
