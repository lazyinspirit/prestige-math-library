---
id: lem-rmk-functional-outer-content-is-well-defined
kind: lemma
title: "The RMK functional outer content is well defined"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cutoff-relation-f-prec-u, def-positive-linear-functional-on-c-c, lem-positive-linear-functionals-on-c-c-are-monotone, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, lem-finite-lch-partition-of-unity-near-a-compact-set]
proof_strategy: direct
verification:
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

Assume the Axiom of Dependent Choice. Let $X$ be LCH and let
$\Lambda:C_c(X;\mathbb R)\to\mathbb R$ be positive.
For open $U$ define
$$\rho(U)=\sup\{\Lambda(f):f\in C_c(X),\ 0\le f\le\mathbf1_U\}=\sup\{\Lambda(f):f\prec U\},$$
with $\sup\varnothing=0$, and for arbitrary $E\subseteq X$ define
$$\mu^*(E)=\inf\{\rho(U):E\subseteq U,\ U\text{ open}\}.$$
These are well-defined elements of $[0,\infty]$; $\rho$ is monotone,
$\rho(\varnothing)=0$, and $\mu^*(U)=\rho(U)$ for every open $U$.

## Facts & Assumptions

**Given:** Dependent Choice, $X$ is LCH, and $\Lambda$ is a positive linear
functional on $C_c(X)$.

[L1] A positive functional on $C_c(X)$ is monotone. ([[lem-positive-linear-functionals-on-c-c-are-monotone]])

[L2] Under Dependent Choice, LCH cutoffs exist between a compact set and an
open neighbourhood. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

## Proof

**Proof technique:** direct.

1.1 Every pointwise-admissible $f$ is nonnegative, so $\Lambda(f)\ge0$. The [given, L1]
zero function is admissible for every open set, including the empty set; for
$U=\varnothing$ it is the only admissible function. Thus
$\rho(U)\in[0,\infty]$ and $\rho(\varnothing)=0$. [given, L1]

1.2 The cutoff supremum is at most the pointwise supremum. Conversely, let [L1, L2]
$0\le f\le\mathbf1_U$ have compact support $K$, and choose
$h\in C_c(X)$ with $0\le h\le1$ and $h=1$ on $K$ by applying [L2] to
$K\subseteq X$. For $t>0$ put
$f_t=(f-th)_+$. Then $f_t\prec U$: its support lies in the compact set
$\{f\ge t\}\subseteq U$. Moreover $0\le f-f_t\le th$, so positivity gives
$\Lambda(f)\le\Lambda(f_t)+t\Lambda(h)$. Letting $t\downarrow0$ proves that
the two displayed suprema defining $\rho(U)$ are equal. [L1, L2]

2.1 If $U\subseteq V$, every test function admissible for $U$ is admissible for $V$, hence $\rho(U)\le\rho(V)$. The family of open supersets of any $E$ is nonempty because it contains $X$, so $\mu^*(E)$ is well defined in $[0,\infty]$. [step 1.1]

3.1 For open $U$, using $U$ itself in the infimum gives [step 2.1]
$\mu^*(U)\le\rho(U)$. Conversely, if $U\subseteq V$ with $V$ open,
monotonicity gives $\rho(U)\le\rho(V)$; taking the infimum over such $V$
gives the reverse inequality. This also covers $U=\varnothing$ and
$\rho(U)=\infty$. [step 2.1] ∎
