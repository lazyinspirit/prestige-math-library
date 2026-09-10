---
id: thm-rmk-functional-outer-content-is-an-outer-measure
kind: theorem
title: "The RMK functional outer content is an outer measure"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-rmk-functional-outer-content-is-well-defined, lem-finite-lch-partition-of-unity-near-a-compact-set, def-cutoff-relation-f-prec-u, def-dependent-choice, def-outer-measure]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-compact-support-and-choice-repair
    delegated_by: owner
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assume Dependent Choice. With $\rho$ and $\mu^*$ as in
[[lem-rmk-functional-outer-content-is-well-defined]], $\mu^*$ is an outer
measure on $X$ in the sense of [[def-outer-measure]].

## Facts & Assumptions

**Given:** Dependent Choice and the stated functional construction on a
locally compact Hausdorff space.

[L0] For open $U$, $\rho(U)$ is also the supremum of $\Lambda(f)$ over
$f\prec U$: $0\le f\le1$ and compact support contained in $U$.
([[lem-rmk-functional-outer-content-is-well-defined]],
[[def-cutoff-relation-f-prec-u]])

[L1] Compact sets admit finite compactly supported partitions subordinate to finite open covers. ([[lem-finite-lch-partition-of-unity-near-a-compact-set]])

[L2] Dependent Choice supplies a sequence of successive extensions of finite
partial selections. ([[def-dependent-choice]])

## Proof

**Proof technique:** direct.

1.1 The definition gives $\mu^*(\varnothing)=0$ and monotonicity: an open superset of $F$ is also one of $E$ when $E\subseteq F$. [given]

1.2 For any sequence of open sets $(U_n)_{n\ge0}$ put $U=\bigcup_nU_n$. [L0, L1]
Use the equivalent supremum in [L0], not merely the condition
$f\le\mathbf1_U$. For $f\prec U$, its compact support $K$ is contained in
$U$. If $K$ is empty, $f=0$. Otherwise a finite set of distinct indices
$n_1,\ldots,n_m$ gives a cover of $K$. By [L1] choose nonnegative
$\varphi_j\in C_c(X)$ with support contained in $U_{n_j}$ and sum $1$
near $K$. Then $f=\sum_jf\varphi_j$. On $K$ each $\varphi_j\le1$;
off $K$ the product is zero. Thus $0\le f\varphi_j\le1$ and its compact
support is contained in $U_{n_j}$, so $f\varphi_j\prec U_{n_j}$. Linearity
gives
$$\Lambda(f)\le\sum_{j=1}^m\rho(U_{n_j})\le\sum_{n\ge0}\rho(U_n).$$
The last inequality uses the distinct indices and nonnegativity. Taking
the supremum in [L0] proves countable subadditivity for these open sets.
[L0, L1]

2.1 Let $E\subseteq\bigcup_{n\ge0}E_n$. [given, L2, step 1.2]
If $\sum_n\mu^*(E_n)=\infty$, the required inequality is automatic.
Otherwise fix $\varepsilon>0$. Each set of open supersets $U_n$ of $E_n$
satisfying $\rho(U_n)<\mu^*(E_n)+\varepsilon2^{-n-1}$ is nonempty by the
defining infimum. To select all $U_n$, consider the set of finite lists of
admissible choices, starting with the empty list, with relation given by
one-term extension. Every list has an extension. Applying [L2] and taking
the union of the resulting coherent lists supplies the sequence. This is
the countable selection used here; [L0] and [L1] also use the stated DC
hypothesis. No implication theorem from a later choice page is assumed.
For $U=\bigcup_nU_n$, step 1.2 now gives
$$\mu^*(E)\le\rho(U)\le\sum_n\rho(U_n)\le\sum_n\mu^*(E_n)+\varepsilon.$$
Letting $\varepsilon\downarrow0$ completes countable subadditivity.
[given, L2, step 1.2] ∎
