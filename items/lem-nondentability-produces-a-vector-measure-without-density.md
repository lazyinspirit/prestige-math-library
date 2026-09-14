---
id: lem-nondentability-produces-a-vector-measure-without-density
kind: lemma
title: "Nondentability produces a vector measure without density"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-radon-nikodym-property, def-dentable-bounded-set-and-slice, thm-hahn-banach-dominated-extension, thm-relative-hahn-banach-geometric-separation, def-bochner-integrable-function, lem-bochner-integral-norm-inequality, thm-continuity-from-below-for-measures, prop-measure-of-a-set-difference, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Lemma 2.4 and Theorem 2.5, complete relevant proof, printed pp. 37--40"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. If a Banach space $X$ contains a nondentable
nonempty bounded closed convex set, then on the Lebesgue interval there is an
absolutely continuous bounded-variation $X$-valued vector measure whose range
lies in a closed separable subspace of $X$ and which has no Bochner density.

## Facts & Assumptions

[A1] The Axiom of Choice supplies arbitrary and recursive choices
([[def-axiom-of-choice]]).

[L1] Dentability is the existence of slices of arbitrarily small norm diameter
([[def-dentable-bounded-set-and-slice]]).

[L2] Under AC, dominated Hahn--Banach establishes HB, and under HB a point
outside a nonempty closed convex set in a real or complex normed space can be
uniformly strictly separated from it by a bounded functional
([[thm-hahn-banach-dominated-extension]],
[[thm-relative-hahn-banach-geometric-separation]]).

[L3] RNP requires a Bochner density for every absolutely continuous
bounded-variation vector measure over a finite scalar measure
([[def-radon-nikodym-property]]).

[L4] A Bochner-integrable function has integrable simple approximants
([[def-bochner-integrable-function]]) and its integral obeys the norm inequality
([[lem-bochner-integral-norm-inequality]]).

[L5] Continuity from below and measurable set-difference calculus hold for
measures ([[thm-continuity-from-below-for-measures]],
[[prop-measure-of-a-set-difference]]), and the Lebesgue sigma-algebra is the
completion of the Borel one
([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]).

## Proof

**Proof technique:** contradiction.

**Given:** A nondentable nonempty bounded closed convex set $C\subseteq X$ and
AC.

1.1 Convert nondentability into a uniformly separated convex bush. [given, A1, L1, L2, construct]
Choose $\eta>0$ such that no slice of $C$ has diameter below $\eta$, and put
$r=\eta/4$. For $x\in C$, if
$x\notin\overline{\operatorname{conv}}(C\setminus B(x,r))$, [L2] gives a
slice lying inside $B(x,r)$ and hence of diameter at most $2r<\eta$, a
contradiction. Thus every $x\in C$ belongs to that closed convex hull.
Enlarge to $D=C+B(0,r/2)$. Given $z=x+y\in D$, approximate $x$ by a finite
convex combination $\sum_i\alpha_ix_i=x+e$ of points outside $B(x,r)$ with
error $e$ satisfying $\|e\|+\|y\|<r/2$, and put $z_i=x_i+y-e$. Then
$z=\sum_i\alpha_i z_i$, every $z_i\in D$, and
$\|z_i-z\|\geq r-\|e\|>r/2$. With $\delta=r/2$, [A1] recursively chooses such
finite successor families from an initial $z_0\in C$. The resulting node set
is countable, bounded, and every child is at least $\delta$ from its parent.

2.1 Realize the bush as a separated interval martingale. [A1, step 1.1, construct]
Starting with $M_0\equiv z_0$, partition every atom at level $n-1$ into
finitely many half-open subintervals in the successor proportions
$(\alpha_i)$, put the corresponding child value on each, and overlay the
dyadic grid of mesh $2^{-n}$. Let $\mathcal P_n$ be the resulting refining
finite interval partition. Parent averages equal parent values, so
$(M_n)$ is a martingale on these finite algebras; it is uniformly bounded and
$\|M_n-M_{n-1}\|\geq\delta$ away from the finitely many endpoints. The union
algebra $\mathcal R=\bigcup_n\sigma(\mathcal P_n)$ contains every dyadic
interval algebra.

3.1 Define and extend the dominated vector measure. [A1, L5, step 2.1]
For $A\in\sigma(\mathcal P_n)$ set $\nu_0(A)=\int_AM_n\,d\lambda$.
The martingale identity makes this independent of $n$, and if
$K=\sup_n\|M_n\|_\infty$, then
$\|\nu_0(A)-\nu_0(B)\|\leq K\lambda(A\triangle B)$. The class of Borel sets
approximable in symmetric-difference measure by $\mathcal R$ is a sigma-algebra:
complements preserve the distance, and countable unions reduce by [L5] to one
large finite union. It contains the dyadic algebra and hence all Borel sets;
the completion clause in [L5] adds Lebesgue sets. Choose such approximants.
Completeness of $X$ gives a unique extension
$\nu$ with $\|\nu(E)\|\leq K\lambda(E)$; the same estimate proves norm
countable additivity. Summing it over finite partitions gives
$|\nu|(E)\leq K\lambda(E)$, so $\nu\ll\lambda$ and has bounded variation.
Every algebra value is a finite linear combination of bush nodes, hence every
extended value lies in the closed separable span $Y$ of the countable node set.

4.1 Assume a density and identify all its finite-partition averages. [assume-contra, L3, L4, step 3.1]
Suppose $f\in L^1([0,1];X)$ satisfies $\nu(E)=\int_Ef$ for all Lebesgue $E$.
For every atom $A$ of $\mathcal P_n$, the construction gives
$\int_Af=\nu(A)=\int_AM_n=\lambda(A)M_n|_A$. Thus the atomwise averaging
operator $Q_n$ applied to $f$ equals $M_n$.

5.1 Prove that the atomwise averages of a Bochner density converge in $L^1$. [L4, step 2.1, step 3.1, step 4.1]
Choose an integrable simple $s$ with $\int\|f-s\|<\varepsilon$ by [L4]. By
the approximation proved in step 3.1 and finiteness of its level family, approximate the level sets of $s$ by
sets in $\mathcal R$, obtaining an $\mathcal R$-simple $t$ with
$\int\|f-t\|<2\varepsilon$. For all sufficiently large $n$, $Q_nt=t$.
The norm inequality on each atom shows that $Q_n$ is an $L^1$ contraction, so
$\|Q_nf-f\|_1\leq\|Q_n(f-t)\|_1+\|t-f\|_1<4\varepsilon$. Hence
$M_n=Q_nf\to f$ in $L^1$.

6.1 Contradict the fixed separation and conclude. [discharge-contradiction: step 5.1, L3, step 2.1, step 4.1, step 5.1]
Step 5.1 would imply $\|M_n-M_{n-1}\|_1\to0$, whereas step 2.1 gives
$\|M_n-M_{n-1}\|_1\geq\delta$ for every $n$. Thus no density exists. The
measure in step 3.1 is the witness required by [L3], with separable range.
The exact uses of [A1] are strict separation through [L2], recursive bush and
partition choices, and the countable approximation choices in extending
$\nu_0$. The empty interval endpoints form null sets; the one-child case cannot
occur because every child is $\delta$-separated. [L3, step 2.1, step 3.1, contradiction: step 5.1] ∎
