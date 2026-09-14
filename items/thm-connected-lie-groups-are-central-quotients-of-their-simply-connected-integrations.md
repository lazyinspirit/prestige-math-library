---
id: thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations
kind: theorem
title: Connected Lie groups are central quotients of simply connected integrations
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-universal-covering-lie-group, def-covering-homomorphism-of-lie-groups, cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups, def-countable-choice]
landmark: false
proof_strategy: quotient
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §3.8"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§3.8, discussion before Theorem 3.38, printed pp. 38–39"
---

## Statement

Assume countable choice. Every connected real Lie group $G$ is isomorphic to
$\widetilde G/\Gamma$, where $\widetilde G$ is its simply connected covering
Lie group and $\Gamma$ is a discrete central subgroup. Conversely, every
such quotient has the same Lie algebra as $\widetilde G$.

## Facts & Assumptions

**Given:** Countable choice and a connected real Lie group $G$.

[A1] Countable choice is [[def-countable-choice]].

[L1] There is a covering homomorphism
$p:\widetilde G\to G$ with $\widetilde G$ connected and simply connected
([[thm-universal-covering-lie-group]]).

[L2] A covering homomorphism is a surjective homomorphism and a covering map
([[def-covering-homomorphism-of-lie-groups]]).

[L3] Under [A1], discrete subgroups are closed embedded zero-dimensional Lie
subgroups
([[cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups]]).

## Proof

**Proof technique:** identify the kernel and factor the covering.

1.1 Let $\Gamma=\ker p$. A fiber of a covering is discrete, so $\Gamma$ is discrete; it is normal because it is a kernel. For fixed $\gamma\in\Gamma$, the map $x\mapsto x\gamma x^{-1}$ is continuous from connected $\widetilde G$ into the discrete space $\Gamma$, hence constant. At the identity its value is $\gamma$, so $\gamma$ is central. [L1, L2, algebra]
2.1 The fibers of $p$ are exactly the cosets of $\Gamma$. Hence $p$ factors through a bijective homomorphism $\overline p:\widetilde G/\Gamma\to G$. Covering charts for $p$ give the quotient its unique smooth structure for which the quotient projection is a local diffeomorphism, and in those charts $\overline p$ and its inverse are smooth. Thus $\overline p$ is a Lie-group isomorphism. [L2, step 1.1]
3.1 Conversely, let $\Gamma$ be a discrete central subgroup of a simply connected Lie group $\widetilde G$. It is closed and embedded by [L3]. Choose an identity neighborhood meeting $\Gamma$ only in the identity and shrink it so that distinct translates are disjoint. Its translates furnish smooth quotient charts, making $\widetilde G\to\widetilde G/\Gamma$ a covering homomorphism. Its identity differential is an isomorphism, so the two groups have the same Lie algebra. The trivial subgroup and one-point group are included. Countable choice is used exactly through [L3]; steps 1.1–2.1 need no additional choice. [A1, L3, algebra] ∎