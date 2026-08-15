---
id: cex-cyclic-prime-square-extension-does-not-split
kind: counterexample
title: ' $1\to C_p\to C_{p^2}\to C_p\to1$ does not split'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-split-extension-of-groups, thm-subgroups-of-cyclic-groups-are-cyclic, lem-order-characterisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement refuted

Every short exact sequence of groups splits.

For every prime $p$, the sequence

$$1\longrightarrow C_p\longrightarrow C_{p^2}\longrightarrow C_p\longrightarrow1$$

obtained from multiplication by $p$ and reduction modulo $p$ is a counterexample.

## Facts & Assumptions

**Given:** A prime $p$, written additively with the middle group $\mathbb Z/p^2$.

[L1] A split extension has a homomorphic section of its quotient map ([[def-split-extension-of-groups]]).

[L2] Every subgroup of a cyclic group is cyclic ([[thm-subgroups-of-cyclic-groups-are-cyclic]]).

[L3] An element $x$ of finite order $r$ satisfies $mx=0$ exactly when $r\mid m$ ([[lem-order-characterisation]]).

## Counterexample

**Proof technique:** contradiction.

1.1 The injection sends $[a]_p$ to $[pa]_{p^2}$, and the quotient map $\pi$ sends $[x]_{p^2}$ to $[x]_p$. The kernel of $\pi$ is the subgroup $pC_{p^2}$ of order $p$, so the sequence is short exact. [L3, algebra]

1.2 Suppose, for contradiction, that a section $s:C_p\to C_{p^2}$ existed. Since $\pi s$ is the identity, $s$ is injective, so its image $H$ is a subgroup of order $p$. By [L2], $H=\langle[a]_{p^2}\rangle$ for some $a$. Its generator has order $p$, so [L3] gives $p^2\mid pa$ and hence $p\mid a$. Thus $H\subseteq pC_{p^2}$; both subgroups have $p$ elements, so they are equal. [L1, L2, L3, assume-contra, algebra]

2.1 Then $\pi s$ is the zero homomorphism, contradicting that it is the identity on the nontrivial group $C_p$. Thus the extension does not split. [step 1.2, L1, discharge-contradiction] ∎
