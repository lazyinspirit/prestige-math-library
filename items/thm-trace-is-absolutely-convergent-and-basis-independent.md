---
id: thm-trace-is-absolutely-convergent-and-basis-independent
kind: theorem
title: Trace is absolutely convergent and basis independent
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-trace-of-a-trace-class-operator, def-trace-class-operator, lem-nuclear-series-characterizes-trace-norm, def-absolute-value-and-singular-values-of-a-compact-operator, thm-singular-value-decomposition-for-compact-operators, thm-separable-hilbert-space-has-a-countable-orthonormal-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-hilbert-space-fourier-expansion, lem-finite-bessel-inequality, def-square-summable-family-on-an-arbitrary-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-cauchy-schwarz-in-an-inner-product-space, def-real-and-complex-inner-product-space, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, def-metric-convergence, def-dense-top, def-countable, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemma 3.27 (printed pp. 97–98)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5, Proposition 2.8"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
real or complex Hilbert space ([[def-hilbert-space]]) and let
$T\in\mathcal B(H)$ be trace class ([[def-trace-class-operator]]). Then:

1. for every **nuclear representation** $Tx=\sum_j\langle x,u_j\rangle v_j$ of
   $T$ (operator-norm convergence of the partial sums,
   $\sum_j\|u_j\|\|v_j\|<+\infty$), the scalar series $\sum_j\langle v_j,u_j\rangle$
   converges absolutely and
   $$\Bigl|\sum_j\langle v_j,u_j\rangle\Bigr|\le\sum_j\|u_j\|\,\|v_j\| ;$$
2. the sum $\sum_j\langle v_j,u_j\rangle$ depends only on $T$; denoting it
   $\operatorname{tr}(T)$, one has
   $$\operatorname{tr}(T)=\sum_j\langle v_j,u_j\rangle$$
   for **every** nuclear representation of $T$. This defines $\operatorname{tr}(T)$
   without assuming that $H$ has a Hilbert basis;
3. for every supplied Hilbert basis $E$ of $H$,
   $\operatorname{tr}_E(T)=\operatorname{tr}(T)$
   ([[def-trace-of-a-trace-class-operator]]);
4. the trace is linear in the trace-class variable and bounded by the trace
   norm: for trace-class $S,T$ and scalars $a,b$,
   $\operatorname{tr}(aS+bT)=a\operatorname{tr}(S)+b\operatorname{tr}(T)$ and
   $|\operatorname{tr}(T)|\le\|T\|_1$.

## Facts & Assumptions

**Given:** Countable Choice, a Hilbert space $H$, a trace-class $T\in\mathcal B(H)$, its nuclear representations, and the supplied bases.

[A1] **Nuclear representations exist and compute the trace norm.** trace class means that $T$ has a nuclear representation; the SVD series is one, and $\|T\|_1=\sum_ns_n(T)$ is the infimum of the nuclear sums ([[lem-nuclear-series-characterizes-trace-norm]], [[def-trace-class-operator]], [[thm-singular-value-decomposition-for-compact-operators]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **Absolute convergence tools.** A nonnegative family has a finite-sum supremum; if the finite subsums are bounded by $C$ then the family is summable with sum at most $C$, and sums of finite subfamilies of a nonnegative family are bounded by the full sum; for a scalar family, absolute summability implies summability with $|\sum|c_i|$ bound. Suprema over finite subsets of two index sets commute. ([[def-square-summable-family-on-an-arbitrary-index-set]], [[def-metric-convergence]])

[A3] **Parseval, Bessel, separable bases.** For a Hilbert basis $G$ of a closed subspace $M$ and $w\in M$, $w=\sum_{g\in G}\langle w,g\rangle g$ with $\|w\|^2=\sum_{g\in G}|\langle w,g\rangle|^2$; for an orthonormal family and any vector the finite coefficient sums obey Bessel; a closed subspace of $H$ with a given countable dense sequence has a finite or countable Hilbert basis obtained from that sequence by Gram–Schmidt, with no choice ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[thm-hilbert-space-fourier-expansion]], [[lem-finite-bessel-inequality]], [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-dense-top]], [[def-countable]]).

[A4] **Cauchy–Schwarz and pairing.** $|\langle u,v\rangle|\le\|u\|\|v\|$, the pairing is linear in the first argument and conjugate-linear in the second, and $\|Sv\|\le\|S\|\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-real-and-complex-inner-product-space]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

[A5] Countable Choice is the standing hypothesis; the deterministic construction below uses no choice beyond it ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the trace-class $T$ and nuclear representations $R=((u_j),(v_j))$, $R'=((u'_j),(v'_j))$.

1.1 **The candidate scalar is absolutely convergent.** For a nuclear representation, $|\langle v_j,u_j\rangle|\le\|u_j\|\|v_j\|$ by [A4], so the scalar series converges absolutely with $|\sum_j\langle v_j,u_j\rangle|\le\sum_j\|u_j\|\|v_j\|$ by [A2]. [A1, A2, A4]

1.2 **Comparison of two representations.** Put $K_0:=\overline{\operatorname{span}}\bigl(\{u_j\}\cup\{u'_j\}\cup\{v_j\}\cup\{v'_j\}\bigr)$, listing the finitely many zero families as the constant zero sequence when necessary; $K_0$ is a closed subspace with the at most countable dense set of all finite $\mathbb Q(i)$-linear combinations of the listed vectors (which exists without choice), so by [A3] it has a finite or countable Hilbert basis $(g_n)_{n\in N}$ obtained from that sequence by Gram–Schmidt. Both representations show $T(K_0)\subseteq K_0$ (the value at $x\in K_0$ is a norm limit of combinations of the $v_j$, respectively $v'_j$) and $Tx=0$ for $x\perp K_0$ (all coefficients $\langle x,u_j\rangle$, $\langle x,u'_j\rangle$ vanish). For the representation $R$, expanding both factors in the basis $(g_n)$ by Parseval [A3] and using absolute convergence and the interchange of nonnegative finite-subset suprema [A2], $\sum_j\langle v_j,u_j\rangle=\sum_j\sum_n\langle v_j,g_n\rangle\langle g_n,u_j\rangle=\sum_n\sum_j\langle v_j,g_n\rangle\langle g_n,u_j\rangle=\sum_n\langle Tg_n,g_n\rangle$, the inner identity because $Tg_n=\sum_j\langle g_n,u_j\rangle v_j$ in norm. The same computation applies to $R'$, so both representations have the same scalar sum; since a trace-class operator has at least one nuclear representation by [A1], the scalar $\operatorname{tr}(T):=\sum_j\langle v_j,u_j\rangle$ is well defined and claim 2 holds. [A1, A2, A3, A4]

1.3 **Agreement with every supplied basis.** Let $E$ be a Hilbert basis of $H$ and let $R=((u_j),(v_j))$ be any nuclear representation of $T$. For each $j$, Parseval in the full space gives $\|u_j\|^2=\sum_{e\in E}|\langle u_j,e\rangle|^2$ and $\|v_j\|^2=\sum_{e\in E}|\langle v_j,e\rangle|^2$; hence, by Cauchy–Schwarz for the $e$-sum, interchange of the nonnegative suprema [A2] and the definition of the representation, $\sum_{e\in E}\sum_j|\langle e,u_j\rangle|\,|\langle v_j,e\rangle|\le\sum_j\|u_j\|\|v_j\|<+\infty$. Therefore the double sum $\sum_e\sum_j\langle e,u_j\rangle\langle v_j,e\rangle$ converges absolutely, its value may be computed in either order, and $\sum_{e\in E}\langle Te,e\rangle=\sum_{e\in E}\sum_j\langle e,u_j\rangle\langle v_j,e\rangle=\sum_j\sum_{e\in E}\langle e,u_j\rangle\langle v_j,e\rangle=\sum_j\langle v_j,u_j\rangle$, the last equality by Parseval applied to the pair $(v_j,u_j)$ in $H$. This is exactly $\operatorname{tr}_E(T)=\operatorname{tr}(T)$, and it also reproves the absolute summability of $(\langle Te,e\rangle)$ required by the definition. [A2, A3, A4]

2.1 **Linearity and the bound.** For trace-class $S,T$ with nuclear representations $R_S$ and $R_T$, the concatenation of $R_S$ scaled by $a$ and $R_T$ scaled by $b$ is a nuclear representation of $aS+bT$ with scalar sum $a\sum\langle v_j,u_j\rangle+b\sum\langle v'_j,u'_j\rangle$ by absolute convergence, so $\operatorname{tr}(aS+bT)=a\operatorname{tr}(S)+b\operatorname{tr}(T)$; and $|\operatorname{tr}(T)|\le\sum_j\|u_j\|\|v_j\|$ for every nuclear representation by [step 1.1], so the infimum characterization [A1] gives $|\operatorname{tr}(T)|\le\|T\|_1$. [step 1.1, step 1.2, A1, A2, algebra]

3.1 **Conclusion.** Claims 1 and 2 are [step 1.1] and [step 1.2], claim 3 is [step 1.3] and claim 4 is [step 2.1]; the definition of $\operatorname{tr}(T)$ uses only nuclear representations of $T$, so no Hilbert basis of $H$ is assumed to exist, while claim 3 handles every basis that is supplied. [step 1.1, step 1.2, step 1.3, step 2.1, A1, A5] ∎
