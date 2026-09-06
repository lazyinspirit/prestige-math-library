---
id: lem-finite-lch-partition-of-unity-near-a-compact-set
kind: lemma
title: "A finite compactly supported partition of unity near a compact set"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-compact-support-c-c-and-c-zero-on-an-lch-space, def-cutoff-relation-f-prec-u, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, cor-compact-hausdorff-partitions-of-unity]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assume the Axiom of Dependent Choice. Let $X$ be locally compact Hausdorff,
let $K\subseteq X$ be compact, and let
$U_1,\ldots,U_n$ be open sets covering $K$. Then there are nonnegative
$\varphi_i\in C_c(X)$ with $\operatorname{supp}\varphi_i\subseteq U_i$ such
that $\sum_i\varphi_i=1$ on an open neighbourhood of $K$.

## Facts & Assumptions

**Given:** Dependent Choice, and $K\subseteq\bigcup_{i=1}^nU_i$, with $K$
compact and each $U_i$ open.

[L1] Under Dependent Choice, LCH cutoffs exist between a compact set and an
open neighbourhood. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

## Proof

**Proof technique:** direct.

1.1 Consider all triples $(V,W,i)$ with $V,W$ open, $1\le i\le n$, [given, L1]
and
$$\overline V\subseteq W\subseteq\overline W\subseteq U_i,$$
where the displayed closures are compact. Local compactness and the Hausdorff
property show that the sets $V$ occurring in these triples cover $K$.
Compactness therefore gives finitely many triples $(V_j,W_j,i_j)$ whose
$V_j$ cover $K$. Apply [L1] to $\overline{V_j}\subseteq W_j$ to obtain
$h_j\in C_c(X)$ with
$0\le h_j\le1$, $h_j=1$ on $\overline{V_j}$, and
$h_j=0$ off $W_j$. Consequently
$\operatorname{supp}h_j\subseteq\overline{W_j}\subseteq U_{i_j}$.
[L1]

2.1 Put $h=\sum_jh_j$. Then $h\ge1$ on $K$, so $\{h>1/2\}$ is an [step 1.1, L1, choose]
open neighbourhood of $K$. Choose open sets $O,W$ with
$$K\subseteq O\subseteq\overline O\subseteq W\subseteq\overline W\subseteq\{h>1/2\},$$
where the displayed closures are compact. Apply [L1] to
$\overline O\subseteq W$ to obtain $g\in C_c(X)$ with $0\le g\le1$,
$g=1$ on $\overline O$, and $g=0$ off $W$. Thus
$\operatorname{supp}g\subseteq\overline W\subseteq\{h>1/2\}$, and $g=1$
on the open neighbourhood $O$ of $K$. [step 1.1, L1]

3.1 For $1\le i\le n$, set $$\varphi_i(x)=\begin{cases}g(x)\displaystyle\frac{\sum_{j:i_j=i}h_j(x)}{h(x)},&h(x)>0,\\0,&h(x)=0.\end{cases}$$ The quotient is only used on $\operatorname{supp}g\subseteq\{h>1/2\}$, so extension by zero is continuous. Each $\varphi_i$ is nonnegative, compactly supported in $U_i$, and $\sum_i\varphi_i=g$, hence the sum is $1$ on $O$. [step 1.1, step 2.1] ∎
