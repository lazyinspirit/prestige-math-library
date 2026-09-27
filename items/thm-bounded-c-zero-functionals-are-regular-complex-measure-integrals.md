---
id: thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals
kind: theorem
title: "The bounded complex dual of C_0(X) is regular complex measures"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-complex-borel-measure-on-an-lch-space, lem-positive-c-zero-functionals-have-finite-regular-representing-measures, lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals, thm-total-variation-is-a-measure, def-integration-against-a-signed-or-complex-measure, thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, def-dependent-choice]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-receipts.jsonl (thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assume Dependent Choice. For an LCH space $X$, every bounded complex linear functional $L$ on $C_0(X;\mathbb C)$ has a unique representation
$$L(f)=\int_X f\,d\mu$$
by a finite regular complex Borel measure $\mu$. Conversely each such $\mu$ defines a bounded functional and $\|L\|=|\mu|(X)$.

## Facts & Assumptions

**Given:** Dependent Choice and a bounded complex linear functional $L$ on $C_0(X;\mathbb C)$.

[L1] Bounded real functionals split into differences of positive functionals. ([[lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals]])

[L2] Positive bounded functionals have finite regular representing measures. ([[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]])

[L3] For a finite complex measure, total variation is the supremum of integrals against simple functions bounded by $1$ ([[thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals]]).

[L4] Under Dependent Choice, a compact subset of an open set in an LCH space has a $[0,1]$-valued compactly supported cutoff equal to $1$ on the compact set ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[def-dependent-choice]]).

[L5] For a regular complex Borel measure, its total variation is finite and regular on every Borel set, so compact inner and open outer approximation apply ([[def-regular-complex-borel-measure-on-an-lch-space]]).

## Proof

**Proof technique:** direct.

1.1 On the real vector space of real-valued functions put $A(u)=\operatorname{Re}L(u)$ and $B(u)=\operatorname{Im}L(u)$. Apply [L1], then [L2], to the positive decompositions of both $A$ and $B$. This gives finite regular signed measures $\alpha$ and $\beta$ representing $A$ and $B$. Put $\mu=\alpha+i\beta$. If $f=u+iv$, complex linearity gives $L(f)=L(u)+iL(v)$, whose real and imaginary parts agree exactly with those of $\int f\,d(\alpha+i\beta)$; hence $\mu$ represents $L$. [L1, L2]

2.1 If two finite regular complex measures $\mu$ and $\nu$ represent $L$, then the real and imaginary signed parts of their difference $\mu-\nu$ integrate every real $C_c$ function to zero. For either signed part, move its negative Jordan component to the other side; the two resulting positive Radon measures have equal integrals on $C_c$. The positive-measure uniqueness in [L2] makes those positive measures equal, so both signed parts of $\mu-\nu$ vanish and $\mu=\nu$. [L2, step 1.1]

3.1 Conversely, the total-variation integral bound gives $|\int f\,d\mu|\le\|f\|_\infty|\mu|(X)$, so integration is bounded with norm at most $|\mu|(X)$. If $|\mu|(X)=0$, then $\mu=0$ and equality is immediate. Otherwise fix $0<\varepsilon<|\mu|(X)$. By [L3], choose a unit-bounded simple $s=\sum_{j=1}^m c_j\mathbf1_{E_j}$, with disjoint Borel $E_j$ and $|c_j|\le1$, such that $|\int s\,d\mu|>|\mu|(X)-\varepsilon$. By [L5], choose compact $K_j\subseteq E_j$ and open $O_j\supseteq K_j$ with $|\mu|(E_j\setminus K_j)<\varepsilon/(8m)$ and $|\mu|(O_j\setminus K_j)<\varepsilon/(8m)$. Replace $O_j$ by $U_j:=O_j\setminus\bigcup_{i\ne j}K_i$, still an open neighbourhood of $K_j$. By [L4], choose $0\le f_j\le\mathbf1_{U_j}$ in $C_c(X)$ with $f_j=1$ on $K_j$. Put $$f:=\frac{\sum_j c_jf_j}{\max(1,\sum_j f_j)}.$$ Then $f\in C_c(X)$, $|f|\le1$, and $f=s$ on $\bigcup_jK_j$, because on $K_j$ only $f_j$ is nonzero. Outside that union, $|s-f|\le2$ and its support lies in $\bigcup_j(E_j\setminus K_j)\cup\bigcup_j(U_j\setminus K_j)$. Thus $\int|s-f|\,d|\mu|<\varepsilon$, and the variation bound gives $|\int f\,d\mu|>|\mu|(X)-2\varepsilon$. Since $\varepsilon$ is arbitrary, $\|L\|\ge|\mu|(X)$, proving equality. [L3, L4, L5, given, algebra] ∎
