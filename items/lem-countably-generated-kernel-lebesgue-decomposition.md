---
id: lem-countably-generated-kernel-lebesgue-decomposition
kind: lemma
title: "Measurable Lebesgue decomposition of a kernel on a countably generated space"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-finite-sigma-finite-and-semifinite-measures
  - def-measurable-space
  - def-measure-kernel-and-probability-kernel
  - def-measure-with-density
  - lem-finite-measure-sets-are-approximable-by-a-generating-algebra
  - thm-doob-submartingale-convergence
  - thm-levy-upward-convergence-of-conditional-expectations
  - thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures
  - thm-measurability-of-integration-against-a-kernel
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
    - title: "Randal Douc, Eric Moulines, Pierre Priouret, and Philippe Soulier, Markov Chains"
      url: "https://wiki.randaldouc.xyz/lib/exe/fetch.php?media=world:mainmc-tome1.pdf"
axiom_use: "The proof is choice-free except for the exact AC uses identified in Facts & Assumptions."
---
## Statement

Let $(\mathsf X,\mathcal X)$ be countably generated, let $\mu$ be a nonzero $\sigma$-finite measure, and let $K$ be a probability kernel. There are a jointly measurable $p:\mathsf X\times\mathsf X\to[0,\infty]$ and a subprobability kernel $S$ such that
$$K(x,A)=\int_Ap(x,y)\,\mu(dy)+S(x,A),$$
where $S(x,\cdot)$ and $\mu$ are mutually singular for each $x$.

## Facts & Assumptions

**Given:** The countably generated space, $\sigma$-finite reference measure, and probability kernel in the Statement.

[F1] [[def-measurable-space]]: a countable generating family yields an increasing sequence of finite partitions generating $\mathcal X$.

[F2] [[def-measure-kernel-and-probability-kernel]]: $x\mapsto K(x,A)$ is measurable and $K(x,\cdot)$ is a probability measure.

[F3] [[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]] and [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: each fixed kernel section has a scalar Lebesgue decomposition and an absolutely continuous density.

[F4] [[thm-doob-submartingale-convergence]] gives almost-sure convergence for a submartingale whose positive parts have uniformly bounded expectations. [[thm-levy-upward-convergence-of-conditional-expectations]] identifies the almost-sure limit of conditional expectations along an increasing generating sequence with the conditional expectation on the generated sigma-algebra.

[F5] [[thm-measurability-of-integration-against-a-kernel]]: integrating a nonnegative jointly measurable function against a kernel preserves measurability.

[F6] [[lem-finite-measure-sets-are-approximable-by-a-generating-algebra]]: under a finite measure, every measurable set is approximable in symmetric difference by members of a generating algebra.

[F7] [[def-finite-sigma-finite-and-semifinite-measures]]: a sigma-finite measure admits a countable partition into finite-measure pieces.

[F8] [[def-measure-with-density]]: integrating a nonnegative measurable density against the reference measure defines a measure.

[A1] [[def-axiom-of-choice]]: select sectionwise RN decompositions and singular support sets, and supply the AC hypotheses of the Doob and Levy convergence theorems in [F4].

## Proof

**Given:** The hypotheses and facts [F1]–[F7], with [A1].

1.1 Choose a disjoint measurable partition $(E_j)_{j\ge1}$ with $\mu(E_j)<\infty$ and positive total measure. Set $c_j=2^{-j}/(1+\mu(E_j))$ and $c=\sum_jc_j\mu(E_j)$. Then $0<c<\infty$, and $\bar\mu(A)=c^{-1}\sum_jc_j\mu(A\cap E_j)$ is an equivalent probability measure. Its density $w=c_j/c$ on $E_j$ is positive. For each fixed $x$, choose $K(x,\cdot)=f_x\bar\mu+S_x$ from [F3]. Let $(\mathcal P_n)$ be increasing finite partitions generating $\mathcal X$, and set $f_n(x,y)=\sum_{B\in\mathcal P_n:\bar\mu(B)>0}\frac{K(x,B)}{\bar\mu(B)}1_B(y),$ with value zero on zero-measure cells. For a positive-measure cell $B\in\mathcal P_n$, its average at level $n+1$ integrates over $B$ to the sum of $K(x,C)$ over the positive-measure children $C\subseteq B$, which is at most $K(x,B)$; zero-measure parents and all their children have value zero. Thus $(f_n(x,\cdot))$ is a nonnegative $\bar\mu$-supermartingale. Also $\int f_n(x,\cdot)\,d\bar\mu\le K(x,\mathsf X)=1$, so $-f_n(x,\cdot)$ has uniformly bounded positive-part expectations and [F4] gives a finite almost-sure limit for $f_n(x,\cdot)$. [F1, F2, F3, F7, A1]

2.1 Define $f_\infty(x,y)=\limsup_n f_n(x,y)$, a jointly measurable extended nonnegative function; for each fixed $x$ it agrees almost everywhere with the finite limit from step 1.1. The conditional-expectation averages $g_n^x$ of the integrable density $f_x$ over $\mathcal P_n$ are defined by $g_n^x(y)=\bar\mu(B)^{-1}\int_B f_x\,d\bar\mu$ on positive-measure cells $B$, and by zero on zero-measure cells. Since $\int f_x\,d\bar\mu\le1$, [F4] and the AC hypothesis [A1] give $g_n^x\to f_x$ almost everywhere: $\mathcal P_n$ generates $\mathcal X$. Cellwise $g_n^x\le f_n(x,\cdot)$ because $\int_B f_x\,d\bar\mu\le K(x,B)$, with both averages zero on null cells. Taking limits proves $f_x\le f_\infty(x,\cdot)$ almost everywhere. [F2, F4, A1, step 1.1]

3.1 For a cell $B$ at partition level $N$, every $n\ge N$ has $\int_Bf_n(x,y)\bar\mu(dy)\le K(x,B)$, since the positive-measure level-$n$ cells inside $B$ contribute only a sub-sum of the kernel masses of a partition of $B$. Fatou therefore gives $\int_Bf_\infty(x,y)\bar\mu(dy)\le K(x,B)$. By [F8], the left side defines a measure; Fatou at the whole space gives its total mass at most one, so both sides are finite measures. Their sum is a finite measure, and [F6] approximates any measurable set in symmetric difference under that sum; the inequality extends from the generating partition algebra to every measurable set. Choose a singular support $N_x$ with $\bar\mu(N_x)=0$ and $S_x(N_x^c)=0$. Since the left measure has density $f_\infty$ with respect to $\bar\mu$, it assigns zero mass to $N_x$. Applying the inequality to $A\cap N_x^c$ therefore gives $\int_Af_\infty\,d\bar\mu\le\int_Af_x\,d\bar\mu$. Together with step 2.1, this proves $f_\infty=f_x$ almost everywhere. [F3, F4, F6, F8, A1, step 2.1]

4.1 Since $\bar\mu(dy)=w(y)\mu(dy)$, set $p(x,y)=f_\infty(x,y)w(y)$ and $S(x,A)=K(x,A)-\int_Ap(x,y)\mu(dy)$. Step 3.1 shows sectionwise that $S(x,\cdot)=S_x$, a nonnegative subprobability measure singular to $\mu$. The integral is measurable in $x$ by [F5]; hence $S(\cdot,A)$ is measurable for every $A$, and its sections are countably additive. Thus $S$ is a subprobability kernel and the decomposition holds. [F2, F3, F5, step 3.1] ∎
