---
id: "thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions"
kind: "theorem"
title: "Weak mixing is equivalent to absence of nonconstant eigenfunctions"
deps: ["def-unitary-eigenfunction-for-a-probability-system", "lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace", "lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner", "lem-compact-intertwiners-produce-finite-dimensional-invariant-subspaces", "lem-nonzero-finite-dimensional-complex-invariant-subspaces-have-unitary-eigenvectors", "thm-ergodicity-and-invariant-functions", "prop-mixing-correlations-extend-to-l-two", "def-strong-and-weak-mixing", "thm-tonelli-and-fubini-for-completed-product-measures", "thm-measure-preservation-on-a-generating-pi-system", "def-completion-of-a-measure-space", "lem-square-integrable-kernels-define-bounded-compact-integral-operators", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Sarig Theorem 3.2 pp.91–92; local Hilbert and compact-kernel route supplies implication omitted there
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
    - title: Axler Example 10.5, 10.70, 10.96–10.99 (local variants)
      url: https://measure.axler.net/MIRA.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. For a measure-preserving transformation $T$ on a completed Lebesgue probability space the following are equivalent: (i) weak mixing in the absolute-Cesaro sense; (ii) no nonconstant complex $L^2$ eigenfunction; (iii) ergodicity of $T\times T$ on the completed product. Equivalently, for each pair $f,g\in L^2$ its centered correlations tend to zero outside a set of integers of natural density zero; the exceptional set may depend on the pair. Invertibility is not required.

## Facts & Assumptions

[F1] Eigenfunctions and the closed zero-mean space $H_0$ have the stated conventions [[def-unitary-eigenfunction-for-a-probability-system]].

[F2] Cesaro averages of an isometry converge to the orthogonal projection onto its fixed space [[lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace]].

[F4] An invariant kernel gives compact intertwiners commuting with $U$, and zero marginals give the stated nonzero restriction to $H_0$ [[lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner]].

[F5] A nonzero invariant kernel with zero marginals gives a nonzero finite-dimensional invariant subspace of $H_0$ [[lem-compact-intertwiners-produce-finite-dimensional-invariant-subspaces]].

[F6] Such a subspace contains a nonconstant eigenfunction [[lem-nonzero-finite-dimensional-complex-invariant-subspaces-have-unitary-eigenvectors]].

[F7] Ergodicity is equivalent to constancy a.e. of invariant measurable complex functions [[thm-ergodicity-and-invariant-functions]].

[F8] Weak mixing is equivalent to absolute-Cesaro convergence of centered complex $L^2$ correlations [[prop-mixing-correlations-extend-to-l-two]].

[F9] Weak mixing keeps the absolute value inside the average [[def-strong-and-weak-mixing]].

[F10] Completed-product Fubini applies after checking integrability [[thm-tonelli-and-fubini-for-completed-product-measures]].

[F11] Assume AC [[def-axiom-of-choice]].

[F12] On a finite measure space, preservation on a generating pi-system implies preservation on the generated sigma-algebra [[thm-measure-preservation-on-a-generating-pi-system]].

[F13] The local canonical-simple and monotone-convergence argument proves that pullback by a measure-preserving map is a linear isometry on complex $L^2$ [[def-unitary-eigenfunction-for-a-probability-system]].

[F14] Every set in a completion has the form $A\cup N$, where $A$ is base measurable and $N$ is contained in a base null set [[def-completion-of-a-measure-space]].

[F15] A square-integrable kernel defines a compact operator, and the zero operator has only the zero kernel [[lem-square-integrable-kernels-define-bounded-compact-integral-operators]].

## Proof

**Given:** The completed Lebesgue probability system and AC.

1.1 If $f$ is a nonconstant eigenfunction, center it when its eigenvalue is one; when the eigenvalue differs from one its mean already vanishes. This gives a nonzero $f_0\in H_0$ with $U^nf_0=\lambda^nf_0$ and $|\lambda|=1$. Thus $|\langle U^nf_0,f_0\rangle|=\|f_0\|^2>0$ for every $n$. Its absolute-Cesaro average cannot tend to zero. F8–F9 therefore prove (i) implies (ii). [F1, F8, F9]

1.2 On every measurable rectangle $E\times F$, the product map $S=T\times T$ satisfies
$$
(\mu\times\mu)(S^{-1}(E\times F))=\mu(T^{-1}E)\mu(T^{-1}F)=\mu(E)\mu(F).
$$
The inverse images of rectangles are measurable, so the sets whose inverse images are product measurable form a sigma-algebra; hence $S$ is measurable because rectangles generate the product sigma-algebra. Rectangles together with $X^2$ form a generating pi-system, and F12 makes $S$ measure preserving on the uncompleted product. If $A\cup N$ is completed measurable as in F14, with $N\subseteq Z$ and $(\mu\times\mu)(Z)=0$, then $S^{-1}N\subseteq S^{-1}Z$ and the latter is a base null set. Thus $S^{-1}(A\cup N)$ is completed measurable and has the same completed measure as $A\cup N$. Therefore $S$ preserves the completed product, and F13 makes its Koopman operator $W$ a complex $L^2$ isometry. [F12, F13, F14]

2.1 Assume (ii). Every invariant indicator is an eigenfunction of eigenvalue one unless zero, so it is constant a.e.; its set is null or conull. Thus $T$ is ergodic. If $Wk=k$ and $k$ is nonconstant, subtract its total mean to make $\iint k=0$, still with $k\ne0$. F15 gives a nonzero compact kernel operator $K$, while F4 gives $KU=UK$ and $K^*U=UK^*$. Since $U\mathbf1=\mathbf1$, the images $K\mathbf1$ and $K^*\mathbf1$ are invariant $L^2$ functions. Ergodicity makes both constant. Their means are $\iint k=0$ and its conjugate, respectively, by Fubini; hence both are zero. These are exactly the two zero-marginal conditions. F5 and F6 would then produce a nonconstant eigenfunction, contradicting (ii). Every $W$-fixed $L^2$ class is consequently constant. In particular each product-invariant indicator is constant, so (iii) follows. The kernel is integrable because its $L^2$ norm is finite and the product mass is one. [F1, F4, F5, F6, F7, F10, F11, F15, step 1.2]

2.2 Assume (iii). If a nonconstant eigenfunction existed, center it as in step 1.1 to obtain $f_0\ne0$ of mean zero. Put $F(x,y)=f_0(x)\overline{f_0(y)}$. Tonelli gives $\|F\|_2^2=\|f_0\|_2^4>0$, and Fubini gives $\iint F=|\int f_0|^2=0$. Its pullback is $WF=|\lambda|^2F=F$; factor-null exceptional sets pull back to null subsets of the square by the completed-product preservation in step 1.2. Product ergodicity and F7 force $F$ to be constant, and its zero mean forces that constant to be zero, a contradiction. Thus (iii) implies (ii). [F1, F7, F10, step 1.1, step 1.2]

3.1 Under (iii), F7 says the fixed space of $W$ consists exactly of constants. For arbitrary $f,g\in L^2$, let $f_0=f-(\int f)\mathbf1$, $F=f_0\otimes\overline{f_0}$ and $G=g\otimes\overline g$. As in step 2.2, these are in product $L^2$ and $F$ has integral zero. Its projection onto constants is therefore zero. Since step 1.2 proves that $W$ is an isometry, F2 yields $N^{-1}\sum_{n<N}W^nF\to0$ in norm, so its pairing with $G$ tends to zero by Cauchy–Schwarz. Fubini computes $\langle W^nF,G\rangle=|\langle U^nf_0,g\rangle|^2$: each factor $f_0\circ T^n\,\overline g$ is integrable by Cauchy–Schwarz, and the absolute double integral is the square of its finite $L^1$ norm. [F1, F2, F7, F10, F11, step 1.2, step 2.2]

4.1 Finite Cauchy–Schwarz on the $N$ real nonnegative numbers $b_n=|\langle U^nf_0,g\rangle|$ gives $N^{-1}\sum_{n<N}b_n\le(N^{-1}\sum_{n<N}b_n^2)^{1/2}\to0$. The correlation here equals $C_n(f,g)$ of F8 because $U\mathbf1=\mathbf1$. Thus F8 proves (i). Together with steps 1.1, 2.1 and 2.2 this closes all three implications. If $f_0=0$ or $g=0$, both sides of the estimate are zero. The assumed AC supplies every cited projection, compactness and completion result that requires it; no spectral-measure construction is used. [F8, F9, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1]

5.1 For completeness let $a_n=|C_n(f,g)|$, bounded by $M=\|f-(\int f)\mathbf1\|_2\|g\|_2$. If its Cesaro mean tends to zero, each $E_j=\{n:a_n>1/j\}$ has density zero since $|E_j\cap[0,N)|/N\le jN^{-1}\sum_{n<N}a_n$. Choose $N_j$ recursively as the least integer larger than $N_{j-1}$ such that this density is below $1/j$ for every $N\ge N_j$; the convergence just proved ensures existence. Put $D=\bigcup_{j\ge1}(E_j\cap[N_j,N_{j+1}))$. For $N_j\le N<N_{j+1}$, the increasing property $E_i\subseteq E_j$ for $i\le j$ implies $D\cap[0,N)\subseteq E_j\cap[0,N)$, so $D$ has density zero. Off $D$ on its $j$th interval, $a_n\le1/j$, proving the claimed convergence. Conversely, if $D$ has density zero and $a_n\to0$ off $D$, choose $N_0$ so that $a_n<\varepsilon$ off $D$ for $n\ge N_0$. Then $N^{-1}\sum_{n<N}a_n\le MN_0/N+M|D\cap[0,N)|/N+\varepsilon$. Its limsup is at most every positive $\varepsilon$, hence zero. This proves the pairwise density-zero equivalent criterion without asserting one exceptional set for all uncountably many pairs. Least integer cutoffs add no choice use. [F8, step 4.1] ∎
