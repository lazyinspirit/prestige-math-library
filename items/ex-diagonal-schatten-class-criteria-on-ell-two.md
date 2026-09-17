---
id: ex-diagonal-schatten-class-criteria-on-ell-two
kind: example
title: Diagonal Schatten class criteria on ell two
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-absolute-value-and-singular-values-of-a-compact-operator, def-hilbert-schmidt-operator, thm-hilbert-schmidt-norm-is-basis-independent, def-trace-class-operator, thm-trace-is-absolutely-convergent-and-basis-independent, def-trace-of-a-trace-class-operator, thm-hilbert-space-fourier-expansion, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, cor-compact-operator-iff-approximation-numbers-tend-to-zero, thm-norm-limit-of-compact-operators-is-compact, lem-finite-rank-operators-are-compact, def-compact-linear-operator, def-operator-norm, def-bounded-linear-operator, thm-bounded-linear-operator-equivalences, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-square-summable-family-on-an-arbitrary-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-real-and-complex-inner-product-space, def-hilbert-space, def-banach-space, def-metric-convergence, def-countable-choice, thm-singular-value-decomposition-for-compact-operators]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.5–§3.6, diagonal operators and Schatten classes"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\mathbb F\in\{\mathbb R,\mathbb C\}$, let $\ell^2:=\ell^2(\mathbb N,\mathbb F)$
with its standard inner product and norm
$\|a\|_2^2=\sum_{n\in\mathbb N}|a_n|^2$
([[def-square-summable-family-on-an-arbitrary-index-set]],
[[def-real-and-complex-inner-product-space]]), and let $u_n$ be the vector that
is $1$ at $n$ and $0$ elsewhere, the standard basis. Given a scalar
sequence $d=(d_n)_{n\in\mathbb N}$ define, on finite linear combinations,
$$T\Bigl(\sum_{n\in F}c_nu_n\Bigr):=\sum_{n\in F}c_nd_nu_n .$$
Then:

1. $T$ extends to a bounded operator on $\ell^2$ if and only if
   $d\in\ell^\infty$, that is $\sup_n|d_n|<+\infty$, and then
   $\|T\|=\sup_n|d_n|$;
2. $T$ is compact if and only if $d_n\to0$;
3. $T$ is Hilbert–Schmidt relative to the standard basis
   ([[def-hilbert-schmidt-operator]]) if and only if
   $\sum_n|d_n|^2<+\infty$, and then
   $\|T\|_{HS}=\bigl(\sum_n|d_n|^2\bigr)^{1/2}$;
4. $T$ is trace class ([[def-trace-class-operator]]) if and only if
   $\sum_n|d_n|<+\infty$, and then $\|T\|_1=\sum_n|d_n|$ and
   $\operatorname{tr}(T)=\sum_nd_n$
   ([[def-trace-of-a-trace-class-operator]],
   [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

## Facts & Assumptions

**Given:** Countable Choice, the Hilbert space $\ell^2(\mathbb N,\mathbb F)$, its standard basis $(u_n)_{n\in\mathbb N}$, and a scalar sequence $d$.

[A1] **The standard basis is a Hilbert basis.** In $\ell^2(\mathbb N,\mathbb F)$ the vectors $u_n$ (equal to $1$ at $n$ and to $0$ elsewhere) satisfy $\langle u_m,u_n\rangle=\delta_{mn}$ and $\|u_n\|_2=1$, so they form an orthonormal family; if $a\in\ell^2$ satisfies $\langle a,u_n\rangle=0$ for every $n$ then $a_n=0$ for every $n$, so $a=0$, and the zero-complement characterisation of completeness makes $(u_n)$ a complete orthonormal family, hence a Hilbert basis of $\ell^2$; consequently every $a\in\ell^2$ satisfies $a=\sum_n\langle a,u_n\rangle u_n$ with $\|a\|_2^2=\sum_n|a_n|^2$ in the finite-subset-net sense, and finite linear combinations of the $u_n$ are dense ([[def-square-summable-family-on-an-arbitrary-index-set]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[thm-hilbert-space-fourier-expansion]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-real-and-complex-inner-product-space]]).

[A2] **Boundedness and norm.** A linear map defined on a dense subspace extends to a bounded operator on the whole space exactly when it is bounded there, with the same operator norm, which is the unit-ball supremum ([[def-bounded-linear-operator]], [[thm-bounded-linear-operator-equivalences]], [[def-operator-norm]]); $\ell^2$ is complete ([[def-hilbert-space]], [[def-banach-space]]).

[A3] **Compactness criteria.** A norm limit of compact operators with Banach target is compact ($\mathrm{AC}_\omega$); a bounded finite-rank operator is compact; a compact metric space is sequentially compact ([[thm-norm-limit-of-compact-operators-is-compact]], [[lem-finite-rank-operators-are-compact]], [[def-compact-linear-operator]], [[def-metric-convergence]]).

[A4] **Singular data of a diagonal operator.** If $s_n:=|d_n|$ is the zero-padded nonincreasing rearrangement of the nonzero moduli $|d_n|$, then the absolute value of the bounded diagonal operator is the diagonal operator with entries $|d_n|$ and its positive eigenvalues with multiplicity are the nonzero values $|d_n|$; the singular values are obtained by the nonincreasing listing, whose sum equals the finite-subset supremum $\sum_n|d_n|$ ([[def-absolute-value-and-singular-values-of-a-compact-operator]], [[thm-singular-value-decomposition-for-compact-operators]], [[def-square-summable-family-on-an-arbitrary-index-set]]).

[A5] **Hilbert–Schmidt and trace.** The Hilbert–Schmidt norm relative to a Hilbert basis $E$ is $\bigl(\sum_{e\in E}\|Te\|^2\bigr)^{1/2}$ and is basis-independent; the trace is the sum of the diagonal matrix coefficients and is basis-independent, with $|\operatorname{tr}T|\le\|T\|_1$ ([[def-hilbert-schmidt-operator]], [[thm-hilbert-schmidt-norm-is-basis-independent]], [[thm-trace-is-absolutely-convergent-and-basis-independent]], [[def-trace-of-a-trace-class-operator]], [[def-trace-class-operator]]).

[A6] **Approximation numbers.** For compact $T$ one has $s_n(T)=\inf\{\|T-F\|:\dim\operatorname{ran}F<n\}$, and $T$ is compact iff these infima tend to $0$ ([[cor-compact-operator-iff-approximation-numbers-tend-to-zero]]).

## Verification

**Proof technique:** direct.

**Given:** Countable Choice, the space $\ell^2$, the standard basis $(u_n)$, and the sequence $d$.

1.1 **Boundedness and norm.** Let $T$ act on the dense span $V$ of the $u_n$ by $Tu_n=d_nu_n$. For $x=\sum_{n\in F}c_nu_n$ one has $\|Tx\|_2^2=\sum_{n\in F}|d_n|^2|c_n|^2\le(\sup_n|d_n|)^2\|x\|_2^2$; hence if $d\in\ell^\infty$ then $T$ is bounded on $V$ with norm at most $\sup_n|d_n|$ and extends by [A2] to a bounded operator with the same norm, while if $\sup_n|d_n|=+\infty$ then $\|Tu_n\|_2=|d_n|$ is unbounded on the unit sphere and no bounded extension exists. The bound is attained: for $\|x\|_2\le1$ and any $n$, $|\langle Tx,u_n\rangle|=|d_n||c_n|\le\sup_m|d_m|$, and testing $x=u_n$ gives $\|Tu_n\|_2=|d_n|$, so the operator norm is $\sup_n|d_n|$. [A1, A2, algebra]


1.2 **Hilbert–Schmidt criterion.** By [A1], $\sum_n\|Tu_n\|_2^2=\sum_n|d_n|^2$ in the finite-subset-supremum sense; hence $T$ is Hilbert–Schmidt relative to the standard basis exactly when $\sum_n|d_n|^2<+\infty$, and then its Hilbert–Schmidt norm is the square root of that sum [A5]. [A1, A5]

1.3 **Trace-class criterion and trace.** Let $T$ be the diagonal operator with $d\in\ell^\infty$ that is compact, so that $d\in c_0$ by claim 2 and the objects $|T|$ and the singular values of $T$ of [[def-absolute-value-and-singular-values-of-a-compact-operator]] are defined; then $T^*$ and $|T|=(T^*T)^{1/2}$ are the diagonal operators with entries $\overline{d_n}$ and $|d_n|$ respectively, as follows from $(T^*T)u_n=|d_n|^2u_n$ and the uniqueness of the positive square root on each span $\{u_n\}$ together with the continuity of $|T|$; hence the nonzero eigenvalues of $|T|$ are the nonzero moduli $|d_n|$, each with multiplicity one, and the singular-value sequence is their nonincreasing rearrangement, whose sum is the finite-subset supremum $\sum_n|d_n|$ by [A4]. Therefore $T$ is trace class exactly when $\sum_n|d_n|<+\infty$, and then $\|T\|_1=\sum_n|d_n|$; in that case the series $\sum_n\langle Tu_n,u_n\rangle=\sum_nd_n$ is absolutely convergent and equals the basis-independent trace $\operatorname{tr}(T)$ by [A5]. [A1, A4, A5]

2.1 **Compactness.** If $d_n\to0$ and $T_N$ denotes the operator acting as $d_n$ on $u_n$ for $n\le N$ and as $0$ for $n>N$, then $T_N$ has finite rank and $\|T-T_N\|=\sup_{n>N}|d_n|\to0$ by [step 1.1]; hence $T$ is compact by [A3]. Conversely, suppose $T$ is compact and $d_n\not\to0$; then there are a real $\varepsilon>0$ and an infinite set $A$ with $|d_n|\ge\varepsilon$ for $n\in A$, and for distinct $m,n\in A$ the orthogonality of the $u_n$ gives $\|Tu_m-Tu_n\|_2^2=|d_m|^2+|d_n|^2\ge2\varepsilon^2$; a subsequence of $(Tu_n)_{n\in A}$ cannot converge, contradicting the sequential compactness of the compact closure $\overline{T(\overline B)}$ of the image of the unit ball [A3, A6]. [step 1.1, A1, A3, A6, algebra]

3.1 **Conclusion.** The four claims are [step 1.1], [step 2.1], [step 1.2] and [step 1.3]; note that the Hilbert–Schmidt and trace-class criteria force $d_n\to0$, so in those cases compactness is automatic, and the standard basis $(u_n)$ is a Hilbert basis, being complete by [A1]. [step 1.1, step 1.2, step 1.3, step 2.1, A1, A6] ∎
