---
id: thm-every-group-has-a-presentation
kind: theorem
title: "Every group admits a presentation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-free-group, thm-reduced-words-form-the-free-group, def-group-presentation, def-kernel-and-image-of-group-homomorphism, thm-image-subgroup-and-kernel-normal, def-normal-closure, thm-first-isomorphism-theorem-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "M. Brittenham, Group Presentations, Class Notes"
      url: "https://www.math.unl.edu/~mbrittenham2/classwk/872s07/lecnotes/slides.from.class/cls08--presentations.pdf"
pipeline_run: null
---

## Statement

Every group $G$ is isomorphic to a group given by generators and relations. More
precisely, if $X$ is the underlying set of $G$, the free-group extension of the
identity function $X\to G$ gives a presentation

$$G\cong\langle X\mid\ker\pi\rangle.$$

## Facts & Assumptions

**Given:** A group $G$ and its underlying set $X$.

[L1] The reduced-word construction supplies a free group on $X$, and its
universal property extends every function $X\to G$ uniquely to a group
homomorphism ([[thm-reduced-words-form-the-free-group]], [[def-free-group]]).

[L2] The kernel of a group homomorphism is a normal subgroup
([[thm-image-subgroup-and-kernel-normal]]).

[L3] The normal closure of a set is the smallest normal subgroup containing it
([[def-normal-closure]]).

[L4] The presentation $\langle X\mid R\rangle$ is the quotient of $F(X)$ by the normal closure of $R$
([[def-group-presentation]]).

[L5] A homomorphism induces an isomorphism from its quotient by the kernel onto its image
([[thm-first-isomorphism-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the identity function $u:X\to G$ to obtain a homomorphism $\pi:F(X)\to G$ satisfying $\pi(x)=x$ for every $x\in X$. It is surjective because every element of $G$ is such an $x$. [L1, given]

2.1 Put $K:=\ker\pi$. By [L2], $K\mathrel{\trianglelefteq}F(X)$; since $K$ is itself a normal subgroup containing $K$, the minimality in [L3] gives $\langle\!\langle K\rangle\!\rangle_{F(X)}=K$. [step 1.1, L2, L3]

3.1 By [L4], $\langle X\mid K\rangle=F(X)/K$. By [L5] and the surjectivity from step 1.1, $F(X)/K\cong\operatorname{im}\pi=G$. [step 1.1, step 2.1, L4, L5]

4.1 Hence $G\cong\langle X\mid\ker\pi\rangle$, as required. [step 3.1] ∎
