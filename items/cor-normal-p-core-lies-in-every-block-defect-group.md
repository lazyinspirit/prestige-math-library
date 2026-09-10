---
id: cor-normal-p-core-lies-in-every-block-defect-group
kind: corollary
title: Normal p core lies in every block defect group
deps: [lem-block-defect-is-an-intersection-of-two-sylow-subgroups, thm-sylow-second-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
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

For a finite group $G$, its largest normal $p$-subgroup $O_p(G)$ lies in every block defect group over a field of characteristic $p$.

## Facts & Assumptions

**Given:** A finite group $G$ and a defect group $D$.

[F1] A defect group is an intersection of two Sylow $p$-subgroups. ([[lem-block-defect-is-an-intersection-of-two-sylow-subgroups]])

[F2] A $p$-subgroup can be contained in a Sylow subgroup. ([[thm-sylow-second-theorem]])

## Proof

**Proof technique:** direct.

1.1 For finite $K$, the product of two normal $p$-subgroups $N_1,N_2$ is normal and is a subgroup; its order is $|N_1||N_2|/|N_1\cap N_2|$, a power of $p$. The order formula follows because each element of the product has exactly $|N_1\cap N_2|$ representations as $n_1n_2$. There are finitely many subgroups of $K$, so their finite product defines the largest normal $p$-subgroup $O_p(K)$, including the trivial subgroup. If $T$ is Sylow and $N\trianglelefteq K$ is a $p$-subgroup, the same order formula makes $NT$ a $p$-subgroup containing $T$; maximality of $T$ forces $NT=T$. Thus $N\le T$. [given]

2.1 Choose a Sylow $P$ containing $D$ by [F2]. By [F1], $D=P\cap hPh^{-1}$ for some $h$. Apply step 1.1 to both Sylow subgroups to obtain $O_p(G)\le P\cap hPh^{-1}=D$. [F1, F2, step 1.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
