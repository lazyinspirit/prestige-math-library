---
id: cor-block-defect-groups-are-p-radical
kind: corollary
title: Block defect groups are p radical
deps: [lem-block-defect-is-an-intersection-of-two-sylow-subgroups, thm-sylow-second-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

Every block defect group satisfies $D=O_p(N_G(D))$.

## Facts & Assumptions

**Given:** A defect group $D$ of a block of a finite group $G$ over a field of characteristic $p$.

[F1] For every Sylow $P\ge D$ there is $h\in C_G(D)$ with $D=P\cap hPh^{-1}$. ([[lem-block-defect-is-an-intersection-of-two-sylow-subgroups]])

[F2] Every $p$-subgroup is contained in a Sylow subgroup. ([[thm-sylow-second-theorem]])

## Proof

**Proof technique:** direct.

1.1 Put $N=N_G(D)$. Choose a Sylow subgroup $T$ of $N$ containing $D$, and a Sylow subgroup $P$ of $G$ containing $T$, by [F2]. Then $P\cap N$ is a $p$-subgroup of $N$ containing its Sylow subgroup $T$, hence equals $T$. Take $h\in C_G(D)\subseteq N$ from [F1]. Intersecting $D=P\cap hPh^{-1}$ with $N$ gives $D=(P\cap N)\cap h(P\cap N)h^{-1}=T\cap hTh^{-1}$. [F1, F2]

2.1 The product of normal $p$-subgroups of a finite group is a normal $p$-subgroup: for two factors its order is the product of their orders divided by the intersection order, by counting representations of a product element. A finite product over all such subgroups therefore defines $O_p(N)$. If $V$ is Sylow in $N$, normality makes $O_p(N)V$ a $p$-subgroup containing $V$, hence equal to $V$. Thus $O_p(N)$ lies in both $T$ and $hTh^{-1}$, so in $D$ by step 1.1. Conversely $D\trianglelefteq N$ by the definition of its normalizer and $D$ is a $p$-group, so $D\le O_p(N)$. Both inclusions prove equality. [step 1.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
