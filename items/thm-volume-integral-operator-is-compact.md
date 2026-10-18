---
id: thm-volume-integral-operator-is-compact
kind: theorem
title: The volume integral scattering operator is compact
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-volume-integral-scattering-model, lem-finite-volume-hilbert-schmidt-rescaling, lem-three-dimensional-scattering-kernel-is-square-integrable, lem-volume-integral-operator-well-defined-and-bounded, lem-square-integrable-kernels-define-bounded-compact-integral-operators, def-axiom-of-choice, def-countable-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-complex-lp-completeness-and-almost-everywhere-subsequences, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, thm-arzela-ascoli-for-real-ck, thm-norm-limit-of-compact-operators-is-compact, thm-heine-borel-rn, thm-finite-products-of-compact-spaces, thm-polar-coordinates-formula-for-lebesgue-measure, thm-tonelli-and-fubini-for-completed-product-measures, cor-volume-of-a-closed-three-ball, prop-essential-supremum-is-attained-as-the-least-essential-bound, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]
justified_by: []
proof_strategy: direct
axiom_use: "AC is used by the probability-space square-integrable-kernel supplier and supplies Countable Choice and Dependent Choice for L2 completeness, norm-closure, and Arzelà–Ascoli. The Schur small-ball estimate itself is choice-free once the stated polar-coordinate interface is available."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, Sommersemester 2015, Chapter 5, §5.2.6"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "PDF pp. 79–82, volume potential and compact Fredholm formulation; the L2 proof is supplied locally."
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Chapter 3, §3.3, compactness and Fredholm integral-operator framework, printed pp. 60–65; the 3D L2 kernel estimate and rescaling are proved locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume AC and the data of [[def-volume-integral-scattering-model]] with $0<|D|<\infty$. Then $K_k:L^2(D;\mathbb C)\to L^2(D;\mathbb C)$ is compact and
$$\|K_k\|\le\|G_k(x-y)q(y)\|_{L^2(D\times D)}\le\|q\|_\infty\sqrt{\frac{|D|\operatorname{diam}(D)}{4\pi}}.$$

The proof supplies both the finite-measure Hilbert–Schmidt rescaling route required by the kernel interface and the singular-truncation/Schur route specified for this volume kernel. No uniqueness or outgoing-scattering solvability is asserted here.

## Facts & Assumptions

**Given:** AC, $D,q,k$ as in [[def-volume-integral-scattering-model]], the integral operator $K_k$, and $0<|D|<\infty$.

[F1] The kernel $a(x,y)=G_k(x-y)q(y)$ is square integrable with $\|a\|_2^2\le\|q\|_\infty^2|D|\operatorname{diam}(D)/(4\pi)$ ([[lem-three-dimensional-scattering-kernel-is-square-integrable]]).

[F2] On a finite source and target measure space, $T_a$ is unitarily equivalent to the probability-space kernel operator with kernel $\sqrt{M_XM_Y}a$; for $D$ this is $M a$ ([[lem-finite-volume-hilbert-schmidt-rescaling]]).

[F3] Under AC, on a probability space a square-integrable kernel defines a bounded compact operator, with operator norm at most its kernel $L^2$ norm ([[lem-square-integrable-kernels-define-bounded-compact-integral-operators]]).

[F4] If $h(x,y)$ is a measurable kernel with $\sup_x\int|h(x,y)|dy\le A$ and $\sup_y\int|h(x,y)|dx\le B$, then its integral operator has norm at most $\sqrt{AB}$; the weighted Cauchy–Schwarz/Tonelli proof is given in step 1.2.

[F5] Under Countable Choice, $C_c^\infty(\mathbb R^3;\mathbb C)$ is dense in Euclidean $L^2$ ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).

[F6] A uniformly bounded, equicontinuous family of real functions on a compact metric space has compact closure in the sup norm, under Countable Choice and Dependent Choice ([[thm-arzela-ascoli-for-real-ck]]).

[F7] A norm limit of compact operators into a Banach space is compact under Countable Choice ([[thm-norm-limit-of-compact-operators-is-compact]]); AC supplies Countable Choice and Dependent Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F8] Any product $L^2$ kernel $h$ defines a bounded operator with norm at most $\|h\|_2$ ([[lem-volume-integral-operator-well-defined-and-bounded]]).

[F9] Polar coordinates give $\int_{B(x,\rho)}|x-y|^{-2}dy=4\pi\rho$ and the unit sphere area is $4\pi$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[cor-volume-of-a-closed-three-ball]]).

[F10] The closure $\overline D$ is compact by Heine–Borel and $\overline D\times\overline D$ is compact as a finite product ([[thm-heine-borel-rn]], [[thm-finite-products-of-compact-spaces]]).

[F11] Complex $L^2(D;\mathbb C)$ is complete under Countable Choice ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]), and AC supplies Countable Choice by [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]].

[F12] Applying [[prop-essential-supremum-is-attained-as-the-least-essential-bound]] to $|q|$ gives $|q|\le\|q\|_\infty$ almost everywhere; changing a representative on that measurable null set gives the everywhere-bounded $q_0$ used in the Schur estimate.

[F13] Cauchy--Schwarz on the finite-measure set $D$ gives $\int_D|v|\le\sqrt{|D|}\|v\|_2$ ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

## Proof

**Given:** AC and the scattering data in the Statement.

1.1 By [F11] and AC, $X=L^2(D;\mathbb C)$ is a Banach space. Normalize $D$ to the probability measure $d\nu=dx/M$. By [F2], the operator $K_k$ is unitarily equivalent to the integral operator on $L^2(D,\nu)$ with kernel $\widetilde a=M a$. Its kernel norm equals $\|a\|_{L^2(D\times D,dx\,dy)}$ by [F2]. Applying [F3] to this probability-space kernel gives compactness of the normalized operator and its norm bound; unitary equivalence transfers both to $K_k$. [given, F1, F2, F3, F11]

1.2 We also verify the singular-truncation route. By [F12], choose a measurable representative $q_0$ and set it to zero on the measurable null set where $|q_0|>\|q\|_\infty$. This does not change the operator, since the kernel changes only on a product-null set, and now $|q_0(y)|\le\|q\|_\infty$ for every $y$. For $\varepsilon>0$, put $\chi_\varepsilon(r)=0$ for $r\le\varepsilon$, $\chi_\varepsilon(r)=(r-\varepsilon)/\varepsilon$ for $\varepsilon<r<2\varepsilon$, and $\chi_\varepsilon(r)=1$ for $r\ge2\varepsilon$. Let $K_\varepsilon$ have kernel $\chi_\varepsilon(|x-y|)G_k(x-y)q_0(y)$. The difference kernel is supported where $|x-y|<2\varepsilon$ and bounded in modulus by $\|q\|_\infty/(4\pi|x-y|)$. By [F9] its row and column integrals, for every fixed row and column, are at most $A=B\le(\|q\|_\infty/(4\pi))4\pi\int_0^{2\varepsilon}r\,dr=2\|q\|_\infty\varepsilon^2$. For each $x$, weighted Cauchy–Schwarz gives $|T_hv(x)|^2\le(\int|h(x,y)|dy)(\int|h(x,y)||v(y)|^2dy)$; integrating and using Tonelli yields $\|T_hv\|_2^2\le AB\|v\|_2^2$. Hence $\|K-K_\varepsilon\|\le2\|q\|_\infty\varepsilon^2$. [given, F1, F9, F12, algebra]

1.3 Fix $\varepsilon>0$. Extend the everywhere-bounded representative $q_0$ by zero to $\mathbb R^3$; it lies in $L^2(\mathbb R^3)$ because $q\in L^\infty(D)$ and $|D|<\infty$. By [F5], choose $q_j\in C_c^\infty(\mathbb R^3;\mathbb C)$ with $\|q_j-q_0\|_{L^2(D)}\to0$. The kernel $g_{\varepsilon,j}(x,y)=\chi_\varepsilon(|x-y|)G_k(x-y)q_j(y)$ extends continuously to the compact set $\overline D\times\overline D$ by assigning zero on $x=y$; the cutoff vanishes near the diagonal. For $\|v\|_2\le1$, the integral is independent of the representative of $v$, and by [F13] its outputs obey $|T_{\varepsilon,j}v(x)|\le\sqrt{|D|}\|g_{\varepsilon,j}\|_\infty$ and $|T_{\varepsilon,j}v(x)-T_{\varepsilon,j}v(x')|\le\sqrt{|D|}\sup_y|g_{\varepsilon,j}(x,y)-g_{\varepsilon,j}(x',y)|$. Uniform continuity of $g_{\varepsilon,j}$ makes these outputs uniformly bounded and equicontinuous. Applying [F6] separately to real and imaginary parts gives compact closures $C_R,C_I$ in $C(\overline D;\mathbb R)$. The product $C_R\times C_I$ is compact by finite-product compactness. Under the homeomorphism $w\mapsto(\operatorname{Re}w,\operatorname{Im}w)$, the closure of the complex output family is a closed subset of this compact product, hence compact in $C(\overline D;\mathbb C)$. The inclusion is continuous because $\|w|_D\|_2\le\sqrt{|D|}\|w\|_{C(\overline D)}$; hence $T_{\varepsilon,j}:L^2(D)\to L^2(D)$ is compact. [given, F5, F6, F10, F13, construct]

2.1 Since $|\chi_\varepsilon G_k|\le(4\pi\varepsilon)^{-1}$, the square norm of the kernel difference between $K_\varepsilon$ and $T_{\varepsilon,j}$ is at most $|D|(16\pi^2\varepsilon^2)^{-1}\|q-q_j\|_{L^2(D)}^2$. [F8] therefore gives $\|K_\varepsilon-T_{\varepsilon,j}\|\to0$. By [F7], $K_\varepsilon$ is compact. [given, F5, F7, F8, step 1.3, algebra]

3.1 As $\varepsilon\downarrow0$, step 1.2 gives $\|K-K_\varepsilon\|\le2\|q\|_\infty\varepsilon^2\to0$. Applying [F7] again shows $K$ is compact. Step 1.1 independently gives the displayed norm estimate and compactness with the finite-measure Hilbert–Schmidt normalization. [F1, F2, F3, F7, step 1.1, step 1.2, step 2.1, algebra] ∎
