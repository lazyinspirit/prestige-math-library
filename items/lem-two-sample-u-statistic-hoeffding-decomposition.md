---
id: lem-two-sample-u-statistic-hoeffding-decomposition
kind: lemma
title: Two-sample Hoeffding decomposition
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-two-sample-order-r-u-statistic-and-first-projections
  - lem-two-sample-u-statistic-projections-well-defined
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-moments-variance-and-covariance
  - cor-cauchy-schwarz-inequality-for-l-two
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Péter Major, Some Results About U-statistics, in On the Estimation of Multiple Random Integrals and U-Statistics, Lecture Notes in Mathematics 2079, Theorem 9.1 and proof, printed pp. 77–78"
      url: "https://static.renyi.hu/~major/articles/lect-note1.pdf"
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, §3.2"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Statement

In the setup of [[def-two-sample-order-r-u-statistic-and-first-projections]],
assume $h\in L^2(P^{\otimes r}\otimes Q^{\otimes r})$. For each $X$-coordinate
$u$ let $P_u$ integrate that coordinate under $P$; for each $Y$-coordinate
let $P_u$ integrate under $Q$, and put $Q_u=I-P_u$. These coordinate
operators commute on $h$ by Fubini. For $0\le a,b\le r$, choose any $a$ of
the $X$-coordinates and any $b$ of the $Y$-coordinates, apply $Q_u$ in those
coordinates and $P_u$ in all others, and call the resulting (reindexed)
kernel $h_{a,b}$. Separate block symmetry makes it independent of the chosen
coordinate subsets. It is canonical in each of its $a+b$ arguments: integrating
it in any such argument gives zero. Let $U_{a,b}(h_{a,b})$ be its average over
all $a$-subsets of the $X$ sample and all $b$-subsets of the $Y$ sample, with
the zero-order convention $U_{0,0}=\theta(P,Q;h)$. Then

$$U_{m,n}-\theta(P,Q;h)=\sum_{\substack{0\le a,b\le r\\a+b\ge1}}\binom ra\binom rb\,U_{a,b}(h_{a,b}).$$

In particular,

$$U_{m,n}-\theta(P,Q;h)=\frac r m\sum_{i=1}^m g_X(X_i)+\frac r n\sum_{j=1}^n g_Y(Y_j)+R_{m,n},$$

where $R_{m,n}$ is the sum of the terms with $a+b\ge2$.

## Facts & Assumptions

**Given:** Independent IID samples from $P$ and $Q$, a symmetric order-$(r,r)$ kernel with finite second moment, and the projection definitions.

[F1] [[def-two-sample-order-r-u-statistic-and-first-projections]] defines $U_{m,n}$, $g_X$, and $g_Y$.

[F2] [[lem-two-sample-u-statistic-projections-well-defined]] supplies measurable square-integrable coordinate integrals and the Fubini equalities needed for each projection operator.

[F3] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] permits the coordinate-integration operators on different coordinates to commute.

[F4] [[cor-cauchy-schwarz-inequality-for-l-two]] gives the $L^2$ contraction bound for integration over a probability coordinate.

## Proof

**Given:** The hypotheses in the Statement. Prove the finite decomposition and identify its order-one terms.

1.1 For each coordinate $u$, Cauchy–Schwarz [F4] on its probability marginal and Fubini [F3] give $\|P_uh\|_2\le\|h\|_2$. The pointwise inequality $|h-P_uh|^2\le2|h|^2+2|P_uh|^2$ then gives $\|Q_uh\|_2\le2\|h\|_2$. Thus every finite product of the coordinate operators is a well-defined $L^2$ class. The operator $P_u$ is idempotent because integrating an already coordinate-independent function changes nothing. For distinct coordinates $u,v$, Fubini [F3] gives $P_uP_v=P_vP_u$ on each integrable section, so $P_u,Q_u$ commute across distinct coordinates. [F2, F3, F4, algebra]

2.1 Since $I=P_u+Q_u$ for every one of the $2r$ coordinates, multiplying these finitely many identities and using commutativity expands $h$ as the sum over all subsets of coordinates of the corresponding products of $P_u$ and $Q_u$. This is a finite algebraic expansion; its empty selected subset is $P_1\cdots P_{2r}h=\theta(P,Q;h)$. [step 1.1, algebra]

3.1 If coordinate $u$ is selected, applying $P_u$ to that component gives zero because $P_uQ_u=P_u-P_u^2=0$; the other commuting factors do not alter this identity. Thus each component is canonical in each selected coordinate. Block symmetry identifies the $\binom ra\binom rb$ components with $a$ selected $X$-coordinates and $b$ selected $Y$-coordinates as reindexed copies of $h_{a,b}$. [step 1.1, step 2.1, algebra]

4.1 Apply the expansion in step 2.1 to each summand $h(X_I;Y_J)$ in $U_{m,n}$, summing over sample subsets and selected kernel coordinates together. Each fixed $a$-subset of the $X$ sample is contained in exactly $\binom{m-a}{r-a}$ sample $r$-subsets; in each, exactly one choice of $a$ kernel coordinates selects it. Thus its coefficient after averaging is $\binom{m-a}{r-a}/\binom mr=\binom ra/\binom ma$. Similarly, each fixed $b$-subset of the $Y$ sample has coefficient $\binom rb/\binom nb$. These identities also hold when $a=0$ or $b=0$. Block symmetry identifies the resulting functions with $h_{a,b}$, so the combined contribution is $\binom ra\binom rb U_{a,b}(h_{a,b})$. Removing the constant component gives the first displayed decomposition. [F1, step 2.1, step 3.1, algebra]

5.1 For $(a,b)=(1,0)$, the integrated kernel is exactly $g_X$ from [F1], and its subset average is $m^{-1}\sum_i g_X(X_i)$; its coefficient is $\binom r1=r$. For $(a,b)=(0,1)$ the average is $n^{-1}\sum_j g_Y(Y_j)$ with the same coefficient $r$. All remaining pairs have $a+b\ge2$ and are, by definition, the remainder $R_{m,n}$. [F1, step 4.1, algebra] ∎
