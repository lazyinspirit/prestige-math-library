---
id: thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally
title: "The cohomology universal-coefficient sequence splits nonnaturally"
kind: theorem
status: draft
origin: pipeline
deps: ["thm-universal-coefficient-theorem-for-cohomology-over-a-pid", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid", "thm-free-modules-are-projective-with-choice-boundary"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $R$ be a PID, $C$ a chain complex of free $R$-modules, $G$ an $R$-module, and $n\in\mathbb Z$. The cohomological UCT sequence
$$0\to\operatorname{Ext}_R^1(H_{n-1}C,G)\to H^n\operatorname{Hom}_R(C,G)\xrightarrow{\operatorname{ev}_n}\operatorname{Hom}_R(H_nC,G)\to0$$
splits after choosing a complement of $Z_nC$ in $C_n$. No splitting natural in the complex $C$ is asserted.

## Proof

**Given:** $R,C,G,n$ as stated and the UCT sequence of [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]].

1.1 The exact sequence $0\to Z_nC\to C_n\xrightarrow{d_n}B_{n-1}C\to0$ comes from [[lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid]]. Under AC, [[lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free]] makes $B_{n-1}C$ free and [[thm-free-modules-are-projective-with-choice-boundary]] makes it projective. Lift its identity through $d_n$ to choose a section $s$. Then $1-sd_n$ factors through the inclusion $Z_nC\to C_n$ as a projection $\pi:C_n\to Z_nC$ restricting to the identity on cycles. [given, construct]

2.1 Write $q:Z_nC\to H_nC$ for the quotient. For $f:H_nC\to G$, define $\sigma(f)=[f q\pi]$. The map $f q\pi:C_n\to G$ is a cocycle: $d_{n+1}$ lands in $B_nC\subseteq Z_nC$, where $\pi$ is the identity and $q$ is zero. This assignment is $R$-linear in $f$, so it defines a homomorphism into cohomology. [step 1.1, algebra]

3.1 For a cycle $z$, $(f q\pi)(z)=f(qz)$, so $\operatorname{ev}_n\sigma(f)=f$. Thus $\sigma$ is a section of the surjection in the exact UCT sequence. Its construction uses the chosen projection; it supplies existence without asserting naturality in $C$. [step 2.1, algebra] ∎
