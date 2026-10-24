---
id: ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation
kind: example
title: Abstract smoothing does not imply a spatial derivative without a PDE realisation
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 17
deps: [rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification, thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups, cor-abstract-parabolic-smoothing, thm-analytic-semigroup-smoothing-estimates, lem-generator-of-the-contour-semigroup-is-the-sectorial-operator, def-square-summable-family-on-an-arbitrary-index-set, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, thm-trigonometric-system-is-complete-in-l-two-of-the-torus, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-countable-choice, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 4.a, the abstract smoothing statements without spatial variables, printed pp. 101-104"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 2 Section 2.3, the diagonal smoothing examples, printed pp. 69-71"
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Put $\mathbb N_{\ge1}:=\{n\in\mathbb N:n\ge1\}$. Let $X=\ell^2(\mathbb N_{\ge1})$ and let $A$ be the diagonal operator with $D(A)=\{x\in\ell^2:\sum_nn^4|x_n|^2<\infty\}$, $(Ax)_n=-n^2x_n$, which is self-adjoint and sectorial of angle $\pi/2$ ([[thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups]]). Its semigroup is $T(t)x=(e^{-n^2t}x_n)_{n\ge1}$, and for every $t>0$ and every $m\ge1$ one has $T(t)x\in D(A^m)$ with $A^mT(t)x=((-n^2)^me^{-n^2t}x_n)_n$ for every $x\in\ell^2$, since $\sup_{n\ge1}n^{2m}e^{-n^2t}\le\sup_{s\ge0}s^me^{-st}=(m/(et))^m$ is finite. In particular $x=(1/n)_n\notin D(A)$ satisfies $T(t)x\in D(A^m)$ for every $m$ and every $t>0$. Nevertheless $\ell^2(\mathbb N_{\ge1})$ carries no spatial variables: $A^m$ is an abstract sequence operator, and the inclusion $T(t)\ell^2\subseteq\bigcap_mD(A^m)$ is a purely operator-theoretic smoothing statement. Only after identifying the abstract sequence operator with a differential operator through an elliptic-regularity theorem does $D(A^m)$ name Sobolev derivatives ([[rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification]]).

## Facts & Assumptions

**Given:** The complex Hilbert space $X=\ell^2(\mathbb N_{\ge1})$ with inner product $\langle x,y\rangle=\sum_nx_n\overline{y_n}$, norm $\|x\|=(\sum_n|x_n|^2)^{1/2}$ and standard orthonormal basis $e_n$; the diagonal operator $A$ with $D(A)=\{x\in X:\sum_nn^4|x_n|^2<\infty\}$ and $(Ax)_n=-n^2x_n$; the diagonal family $T(t)x=(e^{-n^2t}x_n)_{n\ge1}$ for $t\ge0$; and the iterated domains $D(A^m)=\{x\in D(A^{m-1}):Ax\in D(A^{m-1})\}$.

[L1] $\ell^2(\mathbb N_{\ge1})$ is a complex Hilbert space with the standard orthonormal basis: the trigonometric system is an orthonormal basis of $L^2(\mathbb T;\mathbb C)$ ([[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]), and the Fourier coefficient map of an orthonormal basis is a linear isometry onto the corresponding $\ell^2$ space, which is therefore complete ([[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]], [[def-square-summable-family-on-an-arbitrary-index-set]], [[def-countable-choice]]).

[L2] A self-adjoint densely defined operator with $\langle Ax,x\rangle\le0$ is sectorial of angle $\pi/2$ with vertex $0$ and generates a bounded analytic semigroup of angle $\pi/2$ ([[thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups]]).

[L3] For a sectorial operator the generated semigroup satisfies $T(t)X\subseteq D(A^m)$ for every $t>0$, $m\ge1$, and the contour semigroup is the unique exponentially bounded strongly continuous semigroup with that generator ([[thm-analytic-semigroup-smoothing-estimates]], [[lem-generator-of-the-contour-semigroup-is-the-sectorial-operator]], [[cor-abstract-parabolic-smoothing]]).

[L4] The graph domains $D(A^m)$ carry the graph norm and are recursively defined; the remark on domain identification records that they acquire a spatial meaning only through an elliptic-regularity theorem ([[rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

## Verification

**Proof technique:** direct.

1.1 The diagonal operator is self-adjoint and nonpositive. $D(A)$ contains the finitely supported vectors, hence is dense in $X$ by [L1]; for $x,y\in D(A)$ the series $\langle Ax,y\rangle=\sum_n(-n^2)x_n\overline{y_n}$ converges absolutely and equals $\overline{\langle Ay,x\rangle}$ because the diagonal entries are real, so $A$ is symmetric. If $y\in D(A^*)$, the adjoint identity tested against each $e_n\in D(A)$ gives $(A^*y)_n=-n^2y_n$ for every $n$; since $A^*y\in X=\ell^2(\mathbb N_{\ge1})$ and $(e_n)$ is an orthonormal basis by [L1], Parseval gives $\sum_n n^4|y_n|^2=\|A^*y\|^2<\infty$, so $y\in D(A)$. Symmetry gives the reverse inclusion $D(A)\subseteq D(A^*)$, hence $D(A^*)=D(A)$ and $A$ is self-adjoint. Finally $\langle Ax,x\rangle=-\sum_nn^2|x_n|^2\le0$ for every $x\in D(A)$. [L1, given, algebra]

1.2 The diagonal family is the semigroup generated by $A$. For $t\ge0$ one has $\|T(t)x\|^2=\sum_ne^{-2n^2t}|x_n|^2\le e^{-2t}\|x\|^2$, so $T(t)$ is a contraction for $t\ge0$; the functional equation is coefficientwise and strong continuity at $0$ follows from $\|T(t)x-x\|^2=\sum_n(1-e^{-n^2t})^2|x_n|^2\to0$ by dominated convergence; for $x\in D(A)$ the difference quotients satisfy $\|(T(t)x-x)/t-Ax\|^2=\sum_n\bigl(\frac{1-e^{-n^2t}}{n^2t}-1\bigr)^2n^4|x_n|^2\to0$ by dominated convergence, since $\bigl|\frac{1-e^{-s}}{s}-1\bigr|\le1$ for $s\ge0$ and $\sum_nn^4|x_n|^2<\infty$, so $A$ is contained in the generator; conversely, if $x$ lies in the domain $G$ of the generator then for each $n$ continuity of the $n$-th coordinate functional gives $Gx_n=\lim_{t\downarrow0}(e^{-n^2t}-1)x_n/t=-n^2x_n$, so $\sum_nn^4|x_n|^2=\|Gx\|^2<\infty$ and $x\in D(A)$ with $Ax=Gx$; hence the generator of $T$ is exactly $A$. [L1, given, algebra]

2.1 The abstract semigroup is this diagonal semigroup. By [step 1.1] $A$ is self-adjoint and nonpositive, so [L2] makes $A$ sectorial of angle $\pi/2$ and the generator of a bounded analytic semigroup, while [step 1.2] exhibits $T$ as an exponentially bounded strongly continuous semigroup with generator $A$; by the uniqueness in [L3] these semigroups coincide, so the diagonal family $T(t)x=(e^{-n^2t}x_n)$ is the semigroup generated by $A$, which is the assertion of the statement. [step 1.1, step 1.2, L2, L3, given, algebra]

3.1 The iterated domains and the smoothing identities. By induction from [step 1.2] the graph domain is $D(A^m)=\{x\in X:\sum_nn^{4m}|x_n|^2<\infty\}$ with $(A^mx)_n=(-n^2)^mx_n$: the case $m=1$ is the definition of $D(A)$, and if the description holds for $m$ then $A^mx\in D(A)$ exactly when $\sum_nn^4|(A^mx)_n|^2=\sum_nn^{4m+4}|x_n|^2<\infty$; consequently for $t>0$ the vector $T(t)x$ has $A^mT(t)x=((-n^2)^me^{-n^2t}x_n)_n$ and $\|A^mT(t)x\|^2=\sum_nn^{4m}e^{-2n^2t}|x_n|^2\le\sup_n\bigl(n^{2m}e^{-n^2t}\bigr)^2\|x\|^2<\infty$, so $T(t)x\in D(A^m)$ and $\|A^mT(t)\|\le\sup_{n\ge1}n^{2m}e^{-n^2t}\le\sup_{s\ge0}s^me^{-st}=(m/(et))^m$; this reproduces the abstract membership $T(t)X\subseteq D(A^m)$ of [L3] with an explicit constant. [step 2.1, L3, given, algebra]

4.1 The witness is not in $D(A)$ but is smoothed. For $x=(1/n)_{n\ge1}$ one has $\sum_n|x_n|^2=\sum_nn^{-2}<\infty$, so $x\in X$, while $\sum_nn^4|x_n|^2=\sum_nn^2=+\infty$, so $x\notin D(A)$ by [step 3.1]; for every $t>0$ and every $m\ge1$, however, $\sum_nn^{4m}e^{-2n^2t}n^{-2}<\infty$ because the exponential decay dominates every polynomial, so $T(t)x\in D(A^m)$ with the series of [step 3.1], and the smoothing thus raises the abstract regularity of a vector that is not even in the domain of $A$. [step 3.1, given, algebra]

5.1 No spatial derivative is produced. The statements of steps 3.1 and 4.1 are identities between sequences: $A^m$ acts by the multiplier $(-n^2)^m$ and the index $n$ carries no spatial or differential meaning, so the inclusion $T(t)\ell^2\subseteq\bigcap_mD(A^m)$ is purely operator-theoretic; by [L4] the graph domain $D(A^m)$ acquires the interpretation of Sobolev derivatives only after an elliptic-regularity theorem identifies $A$ with a differential operator, and no such identification is present for this diagonal sequence operator, which is why the example is the companion witness to that remark. [step 4.1, L4, given, algebra] ∎
