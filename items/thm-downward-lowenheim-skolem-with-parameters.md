---
id: thm-downward-lowenheim-skolem-with-parameters
kind: theorem
title: "Downward Löwenheim–Skolem with parameters"
status: published
origin: pipeline
deps: [lem-skolem-hull-size-and-elementarity, cor-cardinal-absorption, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Weiss–D’Mello, Fundamentals of Model Theory, Theorem 5, printed p.20; equality endpoint included."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC let $\mathcal M$ be an infinite structure for a finite-arity set signature $L$. If $\max(|L|,\aleph_0)\le\kappa\le|M|$ and $A\subseteq M$ has size at most $\kappa$, then some elementary substructure $\mathcal H\prec\mathcal M$ contains $A$ and has size exactly $\kappa$. Here $|L|$ counts nonlogical symbols.

## Facts & Assumptions

**Given:** The stated hypotheses, including AC.

[F1] In ZFC the witness hull of a subset of size at most an infinite $\kappa$, in a language of size at most $\kappa$, is elementary and has size at most $\kappa$. ([[lem-skolem-hull-size-and-elementarity]])

[F2] The union of two sets of size at most infinite $\kappa$ has size at most $\kappa$, by $\kappa+\kappa=\kappa$. ([[cor-cardinal-absorption]])

[A1] AC is assumed. ([[def-axiom-of-choice]])

## Proof

1.1 The inequality $\kappa\le|M|$ supplies an injection $i:\kappa\to M$. Put $B=A\cup i[\kappa]$. Then $A\subseteq B\subseteq M$, and $|B|\le\kappa$ by F2, while $i$ witnesses $\kappa\le|B|$. Thus $|B|=\kappa$, including when $A$ is empty or already has size $\kappa$. [F2]

2.1 Apply F1 to $B$: its size is $\kappa$, $\kappa$ is infinite, and $|L|\le\kappa$. Under A1 this yields an elementary hull $H$ containing $B$ with $|H|\le\kappa$. Since $i[\kappa]\subseteq H$, also $\kappa\le|H|$, so $|H|=\kappa$, and $A\subseteq H$. When $\kappa=|M|$, one may take a bijection $i:\kappa\to M$ in step 1.1, obtaining $B=H=M$. [F1, A1, step 1.1] ∎
