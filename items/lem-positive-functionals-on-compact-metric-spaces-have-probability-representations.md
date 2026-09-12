---
id: lem-positive-functionals-on-compact-metric-spaces-have-probability-representations
kind: lemma
title: A compact-metric probability representation using countable choice
deps: ["def-metric-compactness", "lem-closed-subset-of-a-compact-space-is-compact", "thm-caratheodory-outer-measure-theorem", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "thm-linearity-of-the-lebesgue-integral-on-l-one", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Compact-metric adaptation of the RMK construction; Cohn, Measure Theory, 2nd ed., Chapter 7
      url: https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be a nonempty compact metric space and let $\Lambda:C(K,\mathbb R)\to\mathbb R$ be real-linear, positive in the sense that $f\ge0$ implies $\Lambda(f)\ge0$, and normalized by $\Lambda(1)=1$. Then there is a Borel probability $\mu$ on $K$ with $\Lambda(f)=\int_K f\,d\mu$ for every continuous real $f$. It is outer regular on Borel sets and inner regular on open sets by compact subsets. No Dependent Choice is required.

## Facts & Assumptions

[F1] Every open cover of $K$ has a finite subcover. [[def-metric-compactness]].

[F2] A closed subset of a compact metric space is compact. [[lem-closed-subset-of-a-compact-space-is-compact]].

[F3] The measurable sets of an outer measure form a sigma-algebra carrying its restriction as a complete measure. [[thm-caratheodory-outer-measure-theorem]].

[F4] The nonnegative integral is monotone and homogeneous. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[F5] The Lebesgue integral is linear on integrable real functions. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

## Proof

**Given:** Assume the Axiom of Countable Choice. Let $K$ be a nonempty compact metric space and let $\Lambda:C(K,\mathbb R)\to\mathbb R$ be real-linear, positive in the sense that $f\ge0$ implies $\Lambda(f)\ge0$, and normalized by $\Lambda(1)=1$. Then there is a Borel probability $\mu$ on $K$ with $\Lambda(f)=\int_K f\,d\mu$ for every continuous real $f$. It is outer regular on Borel sets and inner regular on open sets by compact subsets. No Dependent Choice is required.

1.1 For an open set $U\subseteq K$ define $t_U(x)=\inf_{y\in K\setminus U}d(x,y)$ when $K\setminus U\ne\varnothing$, and $t_K=1$. The triangle inequality, followed by the infimum, shows that $t_U$ is 1-Lipschitz in the first case; it is positive at every point of $U$ because that point has a ball contained in $U$, and it vanishes outside $U$. If a nonempty closed $F$ lies in $U$, the sets $\{t_U>1/m\}$ for positive integers $m$ cover $F$. Adjoining $K\setminus F$ and using [F1] gives a $\delta>0$ with $t_U>\delta$ on $F$. Consequently $h=\min(1,\max(0,2t_U/\delta-1))$ equals 1 on $F$, takes values in $[0,1]$, and has support contained in $\{t_U\ge\delta/2\}\subseteq U$. Here support means the closure in $K$ of the nonzero set, which is compact by [F2]. For $F=\varnothing$ use $h=0$. Any compact subset of a metric space is closed: the empty subset is closed, and for a nonempty compact subset, if $x$ is outside it, its balls centered at $y$ of radii $d(x,y)/3$ have a finite subcover; the minimum of these finitely many positive radii gives a ball at $x$ missing the subset. Thus these cutoffs apply also to every compact $F$. [F1, F2]

1.2 Write $f\prec U$ for continuous $f$ with $0\le f\le1$ and support contained in $U$. Positivity and linearity give monotonicity of $\Lambda$ by applying positivity to differences, and $|\Lambda(f)|\le\|f\|_\infty$ by comparison with constants. The norm is finite: the open sets $\{|f|<m\}$ cover $K$ and a finite subcover bounds $f$. Define $\rho(U)=\sup_{f\prec U}\Lambda(f)$ and $\mu^*(E)=\inf_{E\subseteq U\text{ open}}\rho(U)$. The zero function and the open set $K$ make both families nonempty; $0\le\rho(U)\le1$, $\rho(\varnothing)=0$, and $\rho(K)=1$. Monotonicity immediately implies $\mu^*(U)=\rho(U)$ for open $U$, and monotonicity and zero empty-set value for $\mu^*$. [F1]

2.1 For a closed nonempty $F\subseteq\bigcup_{i=1}^s U_i$ with finitely many open $U_i$, put $t_i=t_{U_i}$. Compactness, applied to the sets $\{\max_i t_i>1/m\}$ and $K\setminus F$, gives $\delta>0$ with $\max_i t_i>\delta$ on $F$. Set $w_i=(t_i-\delta/2)_+$ and $w=\sum_iw_i$. Define $\varphi_i=w_i\min(2/\delta,1/w)$ where $w>0$, and zero where $w=0$. Near a zero of $w$ the formula is $(2/\delta)w_i$, proving continuity there. Each $\varphi_i$ has support in $\{t_i\ge\delta/2\}\subseteq U_i$, is nonnegative and at most 1, and $\sum_i\varphi_i=\min(2w/\delta,1)=1$ on the open neighborhood $\{w>\delta/2\}$ of $F$. For empty $F$ use all zero functions. This constructs a finite subordinate partition without any selection principle. [step 1.1, F1]

3.1 For open $U=\bigcup_{n\ge1}U_n$ and $f\prec U$, its closed support $F$ is covered by finitely many distinct $U_{n_i}$ by [F1] after adjoining $K\setminus F$. If $F$ is empty, $\Lambda(f)=0$. Otherwise the partition in step 2.1 gives $f=\sum_i f\varphi_i$, with $f\varphi_i\prec U_{n_i}$. Hence $\Lambda(f)\le\sum_i\rho(U_{n_i})\le\sum_n\rho(U_n)$; taking the supremum proves open-set subadditivity. Given arbitrary $E_n$ and $\varepsilon>0$, countable choice now selects simultaneously open $U_n\supseteq E_n$ with $\rho(U_n)<\mu^*(E_n)+\varepsilon2^{-n}$. These are a specified countable family of nonempty sets of admissible opens. Thus $\mu^*(\bigcup_nE_n)\le\rho(\bigcup_nU_n)\le\sum_n\mu^*(E_n)+\varepsilon$. Letting $\varepsilon$ decrease to zero proves that $\mu^*$ is an outer measure; if the sum on the right is infinite the inequality is immediate and no selection is needed. [step 2.1, step 1.2, F1]

4.1 For open $G,V$ and $f\prec V\cap G$, with support $F$. For any $g\prec V\setminus F$, the supports are disjoint, so $f+g\prec V$. Therefore $\rho(V)\ge\Lambda(f)+\rho(V\setminus F)\ge\Lambda(f)+\mu^*(V\setminus G)$. Taking the supremum over $f$ gives $\rho(V)\ge\mu^*(V\cap G)+\mu^*(V\setminus G)$. For arbitrary $E\subseteq V$, monotonicity replaces $V$ in the two terms by $E$; taking the infimum over open $V\supseteq E$ proves $\mu^*(E)\ge\mu^*(E\cap G)+\mu^*(E\setminus G)$. The opposite inequality is outer subadditivity. Thus every open $G$ is Carathéodory measurable, and [F3] gives a Borel measure $\mu$. It satisfies $\mu(K)=\rho(K)=1$ and is outer regular by its defining infimum and $\mu(U)=\rho(U)$. [step 1.2, step 3.1, F3]

5.1 For compact $F\subseteq K$, one has $\mu(F)=\inf\{\Lambda(h):h\in C(K,\mathbb R),\ h\ge\mathbf1_F\}$. Indeed such $h$ is nonnegative everywhere, and for $0<\varepsilon<1$ the open set $U=\{h>1-\varepsilon\}$ contains $F$. Every $g\prec U$ satisfies $g\le h/(1-\varepsilon)$, whence $\mu(F)\le\rho(U)\le\Lambda(h)/(1-\varepsilon)$, and then $\mu(F)\le\Lambda(h)$. Conversely for each open $U\supseteq F$, step 1.1 supplies $h\prec U$ with $h=1$ on $F$; hence the displayed infimum is at most $\rho(U)$. Infimizing over $U$ gives the reverse inequality. Empty $F$ has both sides zero using $h=0$. If $f\prec U$ and $F=\operatorname{supp}f$, then $f\le h$ for every $h\ge\mathbf1_F$, so the compact formula gives $\Lambda(f)\le\mu(F)$. Taking the supremum over $f$ proves $\mu(U)\le\sup_{F\subseteq U\text{ compact}}\mu(F)$; monotonicity proves equality. This is the required inner regularity on opens. [step 1.1, step 1.2, step 4.1]

6.1 Let $0\le f\in C(K,\mathbb R)$ and $\varepsilon>0$. Choose a positive integer $N$ with $f\le N\varepsilon$, put $F_0=K$, $F_n=\{f\ge n\varepsilon\}$ for $1\le n\le N$, and $f_n=\min(\varepsilon,(f-(n-1)\varepsilon)_+)$. These are continuous, the $F_n$ are compact by [F2], $f=\sum_{n=1}^N f_n$, and $\varepsilon\mathbf1_{F_n}\le f_n\le\varepsilon\mathbf1_{F_{n-1}}$. The compact formula gives the lower bound $\varepsilon\mu(F_n)\le\Lambda(f_n)$; comparison with every continuous majorant of $\mathbf1_{F_{n-1}}$ gives the upper bound $\Lambda(f_n)\le\varepsilon\mu(F_{n-1})$. By [F4] the same bounds hold for $\int f_n\,d\mu$. All these integrals are finite since $f_n\le\varepsilon$ and $\mu(K)=1$. Summing and applying [F5] locates both $\Lambda(f)$ and $\int f\,d\mu$ in the same interval of length $\varepsilon(\mu(F_0)-\mu(F_N))\le\varepsilon$. Since $\varepsilon$ is arbitrary they are equal. Finally $f=f^+-f^-$ proves equality for every real continuous $f$, using positivity, linearity and [F5]. Countable choice was spent only on the admissible open supersets in step 3.1; the cutoffs and partitions are explicit metric formulas. [step 1.1, step 1.2, step 3.1, step 4.1, step 5.1, F2, F4, F5] ∎
