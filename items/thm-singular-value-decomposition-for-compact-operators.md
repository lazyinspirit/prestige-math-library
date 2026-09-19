---
id: thm-singular-value-decomposition-for-compact-operators
kind: theorem
title: Singular value decomposition for compact operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-absolute-value-and-singular-values-of-a-compact-operator, lem-positive-square-root-of-a-compact-positive-operator, thm-spectral-theorem-for-compact-self-adjoint-operators, lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal, def-self-adjoint-positive-unitary-and-normal-operator, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, def-compact-linear-operator, def-dimension, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-orthogonality-and-orthogonal-complement, thm-orthogonal-decomposition-by-a-closed-subspace, thm-hilbert-space-fourier-expansion, thm-parseval-equivalences-for-a-complete-orthonormal-family, lem-finite-bessel-inequality, lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums, def-square-summable-family-on-an-arbitrary-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-real-and-complex-inner-product-space, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, thm-bounded-linear-operator-equivalences, def-metric-convergence, def-countable, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.5, Theorem 3.17 (printed pp. 90–92)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §§4–5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and
$K$ be real or complex Hilbert spaces ([[def-hilbert-space]]), let
$T\in\mathcal B(H,K)$ be a compact operator
([[def-compact-linear-operator]]), let $|T|$ and the singular values $s_n(T)$ be
as in the absolute-value definition
([[def-absolute-value-and-singular-values-of-a-compact-operator]]). Let
$J=\{1,2,3,\ldots\}$ when $\operatorname{ran}T$ is infinite-dimensional. When
$\operatorname{ran}T$ is finite-dimensional, put
$r:=\dim\operatorname{ran}T\in\mathbb N$ ([[def-dimension]]) and let
$J=\{1,\dots,r\}$, interpreted as $\varnothing$ when $r=0$. Thus $J$ indexes
exactly the positive singular values counted with multiplicity, which we write
as $(s_j)_{j\in J}$ in nonincreasing order. Then:

1. there are orthonormal families $(e_j)_{j\in J}$ in $(\ker T)^\perp$ and
   $(f_j)_{j\in J}$ in $\overline{\operatorname{ran}T}$, indexed by exactly $J$,
   with $|T|e_j=s_je_j$ and $f_j=s_j^{-1}Te_j$ for every $j\in J$;
2. for every $x\in H$ the series converges in norm and
   $$Tx=\sum_{j\in J}s_j\langle x,e_j\rangle f_j,$$
   and its finite partial sums
   $T_n:=\sum_{j\le n}s_j\langle\cdot,e_j\rangle f_j$ satisfy
   $\|T-T_n\|\le s_{n+1}$ for every $n$ with $n+1\in J$ (and $T_n=T$ for
   $n\ge r$ when $r<+\infty$);
3. the linear map $U$ defined on the span of $\{e_j:j\in J\}$ by $Ue_j:=f_j$,
   extended by continuity to $(\ker T)^\perp$ and by zero on $\ker T$, is a
   **partial isometry** with
   $$T=U|T|,\qquad U^*U=P_{(\ker T)^\perp},\qquad U^*U\text{ is the orthogonal projection onto }(\ker T)^\perp,$$
   and $UU^*$ the orthogonal projection onto $\overline{\operatorname{ran}T}$;
4. the zero-padded sequence $(s_n(T))_{n\ge1}$ is *not* used to index the
   orthonormal systems: the systems carry exactly the index set $J$ of the
   positive singular values, and the terms $s_n(T)=0$ beyond the rank in the
   finite-rank case are numerical padding only.

## Facts & Assumptions

**Given:** Countable Choice, compact $T:H\to K$, its absolute value $|T|$, the index set $J$ of the positive singular values with multiplicity, the finite dimension $r=\dim\operatorname{ran}T$ when the range is finite-dimensional, and the zero-padded sequence $(s_n(T))$.

[A1] **Absolute value and finite rank.** $|T|$ is compact, self-adjoint and positive with $|T|^2=T^*T$, $\||T|x\|=\|Tx\|$ and $\ker|T|=\ker T$; the positive singular values with multiplicity are the positive eigenvalues of $|T|$ with multiplicity. They are finite in number exactly when $\operatorname{ran}T$ is finite-dimensional, and otherwise form a countably infinite list. In the finite-dimensional case the isometric linear bijection $\Phi:\operatorname{ran}|T|\to\operatorname{ran}T$, $\Phi(|T|x)=Tx$, gives $\dim\operatorname{ran}|T|=\dim\operatorname{ran}T=r$ ([[def-absolute-value-and-singular-values-of-a-compact-operator]], [[def-dimension]]). No value $\dim V=\infty$ is used.

[A2] **Spectral theorem for $|T|$.** The nonzero eigenvalues of $|T|$ are positive, have finite-dimensional eigenspaces $E_\lambda$, are mutually orthogonal across distinct $\lambda$, and their closed span is $(\ker|T|)^\perp=\overline{\operatorname{ran}|T|}$; moreover $\ker|T|=\ker T$ and $H=(\ker T)^\perp\oplus\ker T$, so the closed span of the eigenspaces is $(\ker T)^\perp$ ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-orthogonality-and-orthogonal-complement]], [[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[A3] **Bases and expansion.** Every finite-dimensional eigenspace $E_\lambda$ has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]); an orthonormal family is complete in a closed subspace in the case, and only in the case, that the finite-subset net of Fourier sums converges there, with Parseval and Bessel inequalities available ([[thm-hilbert-space-fourier-expansion]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[lem-finite-bessel-inequality]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A4] **Continuity.** Bounded operators are continuous and satisfy $\|Sx\|\le\|S\|\|x\|$; limits are unique ([[def-bounded-linear-operator]], [[thm-bounded-linear-operator-equivalences]], [[def-operator-norm]], [[def-metric-convergence]]).

[A5] Countable Choice supplies, for the at most countable eigenvalue list, one orthonormal basis of each finite-dimensional eigenspace ([[def-countable-choice]], [[def-countable]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the compact $T$, its absolute value $|T|$, the index set $J$ and the singular values $s_j$, the finite integer $r$ when $\operatorname{ran}T$ is finite-dimensional, and the eigenspaces $E_\lambda$ of $|T|$ for positive eigenvalues $\lambda$.

1.1 **Choosing the left system.** By [A2] the positive eigenvalues of $|T|$ are precisely the positive singular values with multiplicity, and their eigenspaces are finite-dimensional with closed span $(\ker T)^\perp$; listing those eigenvalues with multiplicity as $(s_j)_{j\in J}$ and choosing by [A5] an orthonormal basis of each $E_\lambda$ gives an orthonormal family $(e_j)_{j\in J}$ with $|T|e_j=s_je_j$ for every $j$, whose closed linear span is $(\ker T)^\perp$, and the terms $s_j>0$ are in nonincreasing order. [A1, A2, A3, A5]

2.1 **The right system is orthonormal.** For $j\in J$ put $f_j:=s_j^{-1}Te_j$, which lies in $\operatorname{ran}T\subseteq\overline{\operatorname{ran}T}$ and is well defined because $s_j>0$. For $i,j\in J$, using $|T|^2=T^*T$ and the eigenvector property of [step 1.1], $$\langle f_i,f_j\rangle=\frac{1}{s_is_j}\langle Te_i,Te_j\rangle=\frac{1}{s_is_j}\langle T^*Te_i,e_j\rangle=\frac{1}{s_is_j}\langle |T|^{2}e_i,e_j\rangle=\frac{s_i^{2}}{s_is_j}\langle e_i,e_j\rangle=\delta_{ij},$$ so $(f_j)_{j\in J}$ is orthonormal. [step 1.1, A1]

3.1 **The expansion.** Let $x\in H$. By [A2] write $x=m+n$ with $m\in(\ker T)^\perp$ and $n\in\ker T$. Since $(e_j)$ is complete in $(\ker T)^\perp$ [step 1.1], the Fourier expansion [A3] gives $m=\sum_{j\in J}\langle m,e_j\rangle e_j=\sum_{j\in J}\langle x,e_j\rangle e_j$ as a norm limit of finite-subset partial sums, and then continuity of $T$ [A4] gives $Tx=Tm=\sum_{j\in J}\langle x,e_j\rangle Te_j=\sum_{j\in J}s_j\langle x,e_j\rangle f_j$, because $Tn=0$ and the image net of the finite partial sums converges. Moreover for finite $F\subseteq J$ the remainder is $\|(T-\sum_{j\in F}s_j\langle\cdot,e_j\rangle f_j)x\|^{2}=\sum_{j\notin F}s_j^{2}|\langle x,e_j\rangle|^{2}\le s_{n+1}^{2}\|x\|^{2}$ whenever $F\supseteq\{1,\dots,n\}$, by orthonormality [step 2.1] and Bessel [A3], so the partial sums $T_n$ of the statement satisfy $\|T-T_n\|\le s_{n+1}$ for $n+1\in J$, and $T_n=T$ for $n\ge r$ in the finite-rank case because then $s_j=0$ for $j>r$ and every index in $J$ is $\le r$. [step 1.1, step 2.1, A1, A3, A4]

4.1 **The right system spans the range closure.** Each $f_j=s_j^{-1}Te_j$ lies in $\operatorname{ran}T$ by [step 2.1], so the closed linear span $N:=\overline{\operatorname{span}}\{f_j:j\in J\}$ is contained in $\overline{\operatorname{ran}T}$; conversely [step 3.1] exhibits every $Tx$ as the norm limit of finite linear combinations of the $f_j$, so $\operatorname{ran}T\subseteq N$ and hence $\overline{\operatorname{ran}T}=N$. [step 2.1, step 3.1]

5.1 **The partial isometry and $T=U|T|$.** Define $U$ first on the linear span $V$ of $\{e_j:j\in J\}$ by $U(\sum_{j\in F}c_je_j):=\sum_{j\in F}c_jf_j$ for finite $F$. This is well defined because $(e_j)$ is linearly independent as an orthonormal family, and it is isometric, since by [step 2.1] $\|\sum c_jf_j\|^{2}=\sum|c_j|^{2}=\|\sum c_je_j\|^{2}$; by [step 1.1] the closure of $V$ is $(\ker T)^\perp$, so $U$ extends uniquely to a bounded linear operator, still denoted $U$, on $(\ker T)^\perp$ with $\|Um\|=\|m\|$ for all $m\in(\ker T)^\perp$ and $U((\ker T)^\perp)=\overline{\operatorname{span}}\{f_j\}=\overline{\operatorname{ran}T}$ by [step 4.1]. Extend $U$ to $H=(\ker T)^\perp\oplus\ker T$ by $U=0$ on $\ker T$; then $U$ is bounded and, because $|T|$ is self-adjoint with $|T|e_j=s_je_j$, $U|T|e_j=Us_je_j=s_jf_j=Te_j$ for every $j$ and $U|T|=0=T$ on $\ker T=|T|^{-1}(0)$ [A1], so $U|T|=T$ by continuity on the closed span of $\ker T$ and the $e_j$, which is $H$ by [A2]. Finally $U^*U$ and $UU^*$: for $x,y\in H$ one has $\langle Ux,Uy\rangle=\langle Px,Py\rangle$ where $P$ is the orthogonal projection onto $(\ker T)^\perp$, because $U$ is isometric on $(\ker T)^\perp$ and vanishes on $\ker T$, so $\langle U^*Ux,y\rangle=\langle Px,y\rangle$ and $U^*U=P$; dually, for $y\in K$ the vector $U^*y\in(\ker T)^\perp$ is characterised by $\langle U^*y,z\rangle=\langle y,Uz\rangle$ for all $z\in(\ker T)^\perp$, so $UU^*y=y$ for $y\in\overline{\operatorname{ran}T}$ and $UU^*y=0$ for $y\perp\overline{\operatorname{ran}T}$, that is $UU^*$ is the orthogonal projection onto $\overline{\operatorname{ran}T}$. [step 1.1, step 2.1, step 4.1, A1, A2, A4]

6.1 **Conclusion.** Claim 1 is [step 1.1] and [step 2.1]; claim 2 is [step 3.1], whose index set is $J$ by construction; claim 3 is [step 5.1] together with [step 4.1]. Claim 4 is the indexing discipline used throughout: $J$ indexes the positive singular values with multiplicity and is $\varnothing$ only for $T=0$, when the finite dimension is $r=0$; it is finite exactly when the range is finite-dimensional. In that case the vanishing terms $s_n(T)=0$ with $n>r$ are numerical padding and index no vector. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, A1] ∎
