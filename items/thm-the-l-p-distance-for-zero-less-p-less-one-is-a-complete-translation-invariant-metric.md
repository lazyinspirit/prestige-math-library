---
id: thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric
kind: theorem
title: "The $L^p$ distance for $0 < p < 1$ is a complete translation-invariant metric"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-metric-space, def-complete-metric-space, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-closure-properties-of-measurable-functions-used-by-the-integral, thm-finite-and-countable-subadditivity-of-measures, def-real-power, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing]
proof_strategy: "Because (a + b)^p <= a^p + b^p for 0 < p < 1, d([f],[g]) = int |f - g|^p dmu defines a metric on quotient classes and is translation invariant. Completeness follows by repeating the Riesz-Fischer telescoping argument without taking p-th roots."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem 8.16"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, reverse inequality discussion before Definition 7.6"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $0<p<1$ and let $L^p(\mu)$ denote the set of almost-everywhere classes of
functions in $\mathcal L^p(\mu)$. Define

$$d_p([f],[g]):=\int |f-g|^p\,d\mu.$$

Then $d_p$ is a translation-invariant metric on $L^p(\mu)$, and
$(L^p(\mu),d_p)$ is complete.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$ and an exponent $0<p<1$.

[L1] The class notation $L^p(\mu)$ means almost-everywhere equivalence classes
of $\mathcal L^p(\mu)$ representatives
([[def-l-p-space-as-a-quotient-by-null-functions]]).

[L2] A metric and a complete metric space are defined in
[[def-metric-space]] and [[def-complete-metric-space]].

[L3] Monotone convergence, dominated convergence, and measurability of pointwise
limits are available
([[thm-monotone-convergence-for-the-integral]],
[[thm-dominated-convergence]],
[[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[L4] Zero nonnegative integral means zero almost everywhere
([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L5] Sums, scalar multiples, absolute values, and pointwise limits of measurable
functions are measurable
([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[L6] Countable unions of measurable null sets are measurable and null
([[thm-finite-and-countable-subadditivity-of-measures]]).

[L7] For $0<p<1$ and nonnegative reals $a,b$,
$$(a+b)^p\le a^p+b^p.$$
Indeed, if $a+b=0$ the claim is trivial. Otherwise set $s:=a+b>0$,
$u:=a/s$, and $v:=b/s$. Then $u,v\in[0,1]$ and $u+v=1$. If $0<u\le1$, then
$\log u\le0$, so $p\log u\ge\log u$ because $0<p<1$; strict increase of the
exponential and the definition of real power therefore give $u^p\ge u$. The
same holds for $v$. Hence
$$a^p+b^p=s^p(u^p+v^p)\ge s^p(u+v)=s^p=(a+b)^p.$$
([[def-real-power]], [[thm-natural-logarithm-laws]],
[[thm-exponential-is-strictly-increasing]]) [given]

## Proof

**Proof technique:** Because $(a+b)^p\le a^p+b^p$ for $0<p<1$,
$d_p([f],[g])=\int|f-g|^p\,d\mu$ defines a metric on quotient classes and is
translation invariant. Completeness follows by repeating the Riesz-Fischer
telescoping argument without taking $p$-th roots.

1.1 If $f\sim f'$ and $g\sim g'$, then $f-f'$ and $g-g'$ vanish almost everywhere. Outside the union of those two null sets, one has $f-g=f'-g'$, so $|f-g|^p=|f'-g'|^p$ almost everywhere. Hence $d_p([f],[g])$ is well defined. The same union-of-null-sets argument shows that addition and scalar multiplication descend to the quotient classes, and the inequality in [L7] shows that $\mathcal L^p(\mu)$ is closed under those operations. [L1, L5, L6, L7]

1.2 Symmetry of $d_p$ is immediate. If $d_p([f],[g])=0$, then $\int |f-g|^p\,d\mu=0$, so $f=g$ almost everywhere and hence $[f]=[g]$. For the triangle inequality, the pointwise inequality from [L7] gives [L2, L4, L7]
$$|f-h|^p=|(f-g)+(g-h)|^p\le |f-g|^p+|g-h|^p,$$
and integrating yields
$$d_p([f],[h])\le d_p([f],[g])+d_p([g],[h]).$$
Thus [L2] makes $d_p$ a metric.

1.3 Let $(u_n)$ be Cauchy in $d_p$. Choose by least indices a subsequence $(u_{n_k})$ with [L3, L5, given, choose]
$$d_p(u_{n_{k+1}},u_{n_k})<2^{-k}.$$
Choose representatives $f_k$ of $u_{n_k}$ and define
$$h_k:=|f_{k+1}-f_k|^p,\qquad g_m:=\sum_{j<m} h_j.$$
Each $h_k$ is measurable and integrable, and [L3] gives a measurable pointwise
limit $g:=\sum_{j=0}^\infty h_j$ with
$$\int g\,d\mu=\lim_{m\to\infty}\int g_m\,d\mu\le\sum_{j=0}^\infty2^{-j}<\infty.$$
Hence $g<\infty$ almost everywhere.

2.1 Translation invariance is pointwise: [step 1.1]
$$d_p([f]+[u],[g]+[u])=\int |(f+u)-(g+u)|^p\,d\mu=d_p([f],[g]).$$

2.2 Fix $x$ outside the null set where $g(x)=\infty$. Then $\sum_j |f_{j+1}(x)-f_j(x)|^p<\infty$, so the terms tend to $0$. Thus $|f_{j+1}(x)-f_j(x)|\le1$ for all large $j$, and then [step 1.3, L3, L7]
$$|f_{j+1}(x)-f_j(x)|\le |f_{j+1}(x)-f_j(x)|^p=h_j(x).$$
So the real series $\sum_j |f_{j+1}(x)-f_j(x)|$ converges by comparison with
$\sum_j h_j(x)$, which makes $(f_k(x))$ converge to some real value $f(x)$. By
[L3], the resulting function $f$ is measurable. Also
$$|f(x)-f_k(x)|^p\le\left(\sum_{j\ge k}|f_{j+1}(x)-f_j(x)|\right)^p\le\sum_{j\ge k} h_j(x).$$
Integrating and using monotone convergence on the tails yields
$$d_p(u_{n_k},[f])\le\sum_{j\ge k} d_p(u_{n_{j+1}},u_{n_j})\le\sum_{j\ge k}2^{-j}\to0.$$

3.1 Because $(u_n)$ is Cauchy, given $\varepsilon>0$ choose $K$ with $d_p(u_n,u_m)<\varepsilon/2$ for $m,n\ge K$, then choose $k$ with $n_k\ge K$ and $d_p(u_{n_k},[f])<\varepsilon/2$ from step 2.2. The triangle inequality from step 1.2 gives $d_p(u_n,[f])<\varepsilon$ for all $n\ge K$. Hence $(L^p(\mu),d_p)$ is complete. [step 1.2, step 2.2]

4.1 Steps 1.2 and 2.1 prove that $d_p$ is a translation-invariant metric, and step 3.1 proves completeness. [step 1.2, step 2.1, step 3.1] ∎
