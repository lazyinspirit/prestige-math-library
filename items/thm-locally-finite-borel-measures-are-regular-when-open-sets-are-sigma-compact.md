---
id: thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact
kind: theorem
title: "Sigma-compact open sets make locally finite Borel measures regular"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radon-measure-on-an-lch-space, def-regular-borel-measure-on-an-lch-space, def-compact-support-c-c-and-c-zero-on-an-lch-space]
proof_strategy: direct
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Let $X$ be LCH and suppose every open subset of $X$ is sigma-compact. Every Borel measure finite on compact sets is regular: it is outer regular on Borel sets and inner regular by compact sets on every Borel set.

## Facts & Assumptions

**Given:** Every open subset of $X$ is sigma-compact and $\mu(K)<\infty$ for compact $K$.

## Proof

**Proof technique:** direct.

1.1 If $U$ is open, write $U=\bigcup_nL_n$ with $L_n$ compact. The compact sets $K_n=\bigcup_{j\le n}L_j$ increase to $U$, so continuity from below gives $\mu(U)=\sup_n\mu(K_n)$. Thus $\mu$ is inner regular on opens. [given]

2.1 Since $X$ itself is sigma-compact, local compactness and finite [step 1.1, choose]
subcovers give increasing relatively compact open sets $V_n$ with
$X=\bigcup_nV_n$. Fix one such $V=V_n$. Its total measure is finite because
$\mu(V)\le\mu(\overline V)<\infty$. Every relatively open subset of $V$ is
open in $X$, hence is compact-inner-regular by step 1.1. Every relatively
closed subset of $V$ is sigma-compact: intersect it with a compact exhaustion
of the sigma-compact open space $V$. It is therefore also
compact-inner-regular by continuity from below. [step 1.1]

3.1 Let $\mathcal R_V$ be the Borel subsets of $V$ that are both outer [step 2.1]
regular in $V$ and inner regular by compact sets. The relatively open sets
belong to $\mathcal R_V$: inner regularity is step 2.1 and outer regularity is
immediate. A relatively closed set $F$ is inner regular by step 2.1; if
$W=V\setminus F$, choose compact $K\subseteq W$ with
$\mu(W\setminus K)<\varepsilon$, and then the relatively open set $V\setminus K$
contains $F$ with excess below $\varepsilon$. Thus closed sets also belong to
$\mathcal R_V$. Because $\mu(V)<\infty$, taking complements interchanges the
two approximation properties. Countable unions preserve outer regularity by
summable open errors and preserve inner regularity by first taking a finite
partial union and then a finite union of compact cores. Hence
$\mathcal R_V$ is a sigma-algebra containing the relatively open sets, so
every Borel subset of $V$ is regular. [step 2.1]

4.1 Let $E$ be Borel. Since $E\cap V_n\uparrow E$, the regularity just proved [step 3.1]
on each $V_n$ gives
$$\mu(E)=\sup\{\mu(K):K\subseteq E,\ K\text{ compact}\}.$$
Indeed, when $\mu(E)<\infty$, first choose $n$ so that
$\mu(E\setminus V_n)$ is small and then take a compact core of $E\cap V_n$;
when $\mu(E)=\infty$, choose $n$ and then a compact core with arbitrarily
large finite measure. [step 3.1]

5.1 If $\mu(E)=\infty$, outer regularity is automatic. Otherwise partition [step 3.1, step 4.1]
$E$ into the Borel slices $E_n=E\cap(V_n\setminus V_{n-1})$, with
$V_{-1}=\varnothing$. Relative outer regularity in $V_n$ gives a relatively
open, hence open-in-$X$, set $O_n\subseteq V_n$ containing $E_n$ with
$\mu(O_n\setminus E_n)<\varepsilon2^{-n-1}$. Then
$O=\bigcup_nO_n$ is open, contains $E$, and
$\mu(O\setminus E)<\varepsilon$. Thus every Borel set is outer regular as
well as compact-inner-regular; in particular $\mu$ is Radon and is regular
in the stronger convention. [step 3.1, step 4.1] ∎
