---
id: ex-hecke-landau-page-exceptional-zero-range
kind: example
title: Translate the Hecke Landau–Page range to a height-dependent zero-free region
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - thm-weiss-landau-page-zero-free-region-for-hecke-families
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. R. Weiss, The least prime ideal
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
      locator: Theorem 1.9, printed pp. 59–61; specialize to K=Q and n=1.
---

## Example

Let $K=\mathbb Q$, so $n=1$, and let $Q\ge1$ be a conductor cutoff. For each primitive finite-order Hecke character $\chi$ of $\mathbb Q$, let $q_\chi$ be the positive integer conductor of its associated primitive Dirichlet character. For a height $t\in\mathbb R$, put $T_t:=1+|t|$ and $\mathcal L_t:=\log(QT_t)$. When $\mathcal L_t\ge C_0$, the primitive finite-order Hecke characters of $K$ with $q_\chi\le Q$ have no zero at height $t$ in the region $\operatorname{Re}s\ge1-c_1/\mathcal L_t$, except that at $t=0$ the family may contain the single real simple exceptional zero allowed by the common-cutoff Landau–Page theorem.

## Example references

[[thm-weiss-landau-page-zero-free-region-for-hecke-families]]

## Facts & Assumptions

**Given:** $Q\ge1$, $t\in\mathbb R$, $T_t=1+|t|$, $\mathcal L_t=\log(QT_t)\ge C_0$, and AC, CC, and DC.

[F1] [[thm-weiss-landau-page-zero-free-region-for-hecke-families]]: for degree $n$, primitive finite-order Hecke characters with $d_\chi\le Q$, and $T\ge1$ satisfying $\log(QT^n)\ge C_0n$, at most one zero occurs in the stated region, and any such zero is real and simple.

[A1] AC, CC, and DC are the hypotheses stated by the Weiss theorem used in [F1]. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]] [[thm-weiss-landau-page-zero-free-region-for-hecke-families]]

## Verification

**Given:** The data and hypotheses above.

1.1 For $K=\mathbb Q$, $n=1$ and the discriminant-conductor quantity $d_\chi=|d_K|N\mathfrak f_\chi$ is the Dirichlet conductor $q_\chi$. The choice $T=T_t=1+|t|$ satisfies $T\ge1$ and $|t|\le T$, while $\log(QT^n)=\mathcal L_t\ge C_0n$. [given, choose, algebra]

2.1 Apply [F1] to every primitive character with $q_\chi\le Q$. Any zero at height $t$ in the indicated half-strip would be the unique real zero allowed by [F1]; a real zero has imaginary part zero, so this is impossible when $t\ne0$. At $t=0$, [F1] permits at most that one real simple exceptional zero. [A1, F1, step 1.1] ∎
