---
id: thm-conjugacy-of-decomposition-and-inertia-groups
title: "Conjugacy of decomposition and inertia groups"
kind: theorem
status: published
origin: pipeline
deps: [def-inertia-group-of-a-prime]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a79.3, Lemma 9.3.2, p.104"
      url: https://wstein.org/books/ant/ant.pdf
proof_strategy: direct argument
---

## Statement

In finite Galois L/K, if $\sigma P=P'$ above a nonzero p, then
$$D(P'/p)=\sigma D(P/p)\sigma^{-1},\qquad I(P'/p)=\sigma I(P/p)\sigma^{-1}.$$
The residue actions correspond under $\kappa(P)\to\kappa(P')$, $\bar a\mapsto\overline{\sigma a}$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[def-inertia-group-of-a-prime]]: For finite Galois L/K and a chosen nonzero prime $P\mid p$, set $\kappa(P)=\mathcal O_L/P$ and $\kappa(p)=\mathcal O_K/p$. Each $\sigma\in D(P/p)$ induces a $\kappa(p)$-automorphism $\bar\sigma$ of $\kappa(P)$: the rule $\bar a\mapsto\overline{\sigma a}$ is independent of the representative because $\sigma P=P$. The **inertia group** is $I(P/p)=\ker\!\left(D(P/p)\longrightarrow\operatorname{Gal}(\kappa(P)/\kappa(p))\right).$ Equivalently, $\sigma\in I(P/p)$ exactly when $\sigma\in D(P/p)$ and $\sigma(a)-a\in P$ for every $a\in\mathcal O_L$. It is a normal subgroup of D.

## Proof

1.1 For $\tau\in G$, the equality $\tau P=P$ is equivalent to $(\sigma\tau\sigma^{-1})P'=P'$. This proves both subgroup inclusions for D. [F1]

2.1 The displayed residue map is well-defined and invertible, with inverse induced by $\sigma^{-1}$. For $\tau\in D(P/p)$ and $a\in\mathcal O_L$, transporting $\overline{\tau a}$ gives $\overline{\sigma\tau a}$, exactly the action of $\sigma\tau\sigma^{-1}$ on $\overline{\sigma a}$. Therefore the residue action is identity on one side exactly when it is identity on the other. Taking kernels proves the equality for I. [F1, step 1.1] ∎
