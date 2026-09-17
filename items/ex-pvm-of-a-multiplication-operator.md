---
id: ex-pvm-of-a-multiplication-operator
kind: example
title: Pvm of a multiplication operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-bounded-normal-operators-pvm-form, thm-borel-functional-calculus-for-bounded-normal-operators, def-borel-functional-calculus-for-a-bounded-normal-operator, def-l-p-space-as-a-quotient-by-null-functions, def-essential-supremum-with-respect-to-a-measure, prop-essential-supremum-is-attained-as-the-least-essential-bound, def-finite-sigma-finite-and-semifinite-measures, cor-second-countable-lch-locally-finite-borel-measures-are-regular, def-spectrum-and-resolvent-of-a-bounded-operator, def-operator-norm, def-measurable-function-between-measurable-spaces, lem-scalar-and-complex-measures-from-a-pvm, thm-dominated-convergence, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.7, printed pp.293–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §4.1, printed pp.113–115"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Example

Assume AC. Let $(X,\Sigma,\mu)$ be a sigma-finite measure space
([[def-finite-sigma-finite-and-semifinite-measures]]), let
$m:X\to\mathbb C$ be bounded and measurable
([[def-measurable-function-between-measurable-spaces]]), and let
$M_m:L^2(\mu)\to L^2(\mu)$ be multiplication by $m$,
$M_mf=m\cdot f$ ([[def-l-p-space-as-a-quotient-by-null-functions]]). Then
$M_m$ is a bounded normal operator, its spectrum is the essential range
$$R(m):=\bigl\{z\in\mathbb C:\ \mu\bigl(m^{-1}(B(z,\varepsilon))\bigr)>0\ \text{for every }\varepsilon>0\bigr\},$$
its spectral projection valued measure $E$ on the Borel $\sigma$-algebra of
$R(m)$ is $E(B)f=\mathbf 1_{m^{-1}(B)}f$, and its bounded Borel functional
calculus is
$$f(M_m)=M_{f\circ m},\qquad f(M_m)h=(f\circ m)\cdot h ,$$
for every bounded Borel $f$ on $R(m)$.

## Facts & Assumptions

[A1] $L^2(\mu)$ is a Hilbert space; its elements are almost-everywhere classes, $\|f\|_2^2=\int|f|^2\,d\mu$, and $\langle f,g\rangle=\int f\overline g\,d\mu$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-hilbert-space]]).

[A2] For a bounded measurable $\varphi$ the essential supremum $\|\varphi\|_\infty$ is the least essential bound: $|\varphi|\le\|\varphi\|_\infty$ almost everywhere and $\|M_\varphi\|\le\|\varphi\|_\infty$ ([[def-essential-supremum-with-respect-to-a-measure]], [[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[A3] $z\in\rho(T)$ exactly when $zI-T$ is bijective with bounded inverse; a bounded operator that is not bounded below has no bounded inverse ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-operator-norm]]).

[A4] Sigma-finiteness provides an increasing sequence of finite-measure sets covering $X$, so any set of positive measure contains a subset of positive finite measure ([[def-finite-sigma-finite-and-semifinite-measures]]).

[A5] A finite Borel measure on a second-countable LCH space is regular; $R(m)\subseteq\mathbb C$ is compact and second countable ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]).

[A6] For a bounded normal operator the spectral PVM is the unique regular PVM on $\sigma(T)$ with $\int z\,dE=T$, and $f(T)$ has pairings $\langle f(T)h,g\rangle=\int f\,dE_{h,g}$ with $E_{h,g}(B)=\langle E(B)h,g\rangle$ ([[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]], [[thm-borel-functional-calculus-for-bounded-normal-operators]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[A7] Domination: if $|m|\le\|\varphi\|_\infty$ almost everywhere and $h\in L^2(\mu)$ then $\int|m|^2|h|^2\,d\mu\le\|\varphi\|^2_\infty\|h\|^2$; and dominated convergence applies to uniformly bounded pointwise convergent sequences against the finite measure $|h|^2d\mu$ ([[thm-dominated-convergence]]).

[A8] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** A sigma-finite measure space $(X,\Sigma,\mu)$, a bounded measurable $m$, and the multiplication operator $M_mf=mf$ on $L^2(\mu)$; write $R:=R(m)$ for the essential range.

1.1 $M_m$ is a bounded linear operator with $\|M_m\|=\|m\|_\infty$: $\|M_mh\|_2^2=\int|m|^2|h|^2\,d\mu\le\|m\|_\infty^2\|h\|_2^2$, and if $A=\{|m|>c\}$ has positive measure for some $c$ then choosing $B\subseteq A$ of positive finite measure gives $\|M_m\mathbf 1_B\|_2>\ c\|\mathbf 1_B\|_2$, so $\|M_m\|\ge c$ and hence $\|M_m\|=\|m\|_\infty$. [A1, A2, A4, A7]

1.2 $M_m$ is normal: the adjoint is $M_{\overline m}$ because $\langle M_mh,g\rangle=\int mh\overline g\,d\mu=\int h\overline{\overline mg}\,d\mu=\langle h,M_{\overline m}g\rangle$, and $M_mM_{\overline m}=M_{|m|^2}=M_{\overline m}M_m$. [A1, A7]

2.1 $\sigma(M_m)=R$: if $z\notin R$ then $\mu(m^{-1}(B(z,\varepsilon)))=0$ for some $\varepsilon>0$, so $|m-z|\ge\varepsilon$ almost everywhere, $h\mapsto h/(m-z)$ is a bounded two-sided inverse of $M_m-zI$, and $z\in\rho(M_m)$; if $z\in R$ then for each $n$ the set $A_n=\{|m-z|<1/n\}$ has positive measure, sigma-finiteness gives $B_n\subseteq A_n$ with $0<\mu(B_n)<\infty$, and the unit vectors $h_n=\mathbf 1_{B_n}/\|\mathbf 1_{B_n}\|_2$ satisfy $\|(M_m-zI)h_n\|_2\le\frac1n$, so $M_m-zI$ is not bounded below and $z\in\sigma(M_m)$. [step 1.1, A3, A4]

2.2 The formula $E(B):=M_{\mathbf 1_{m^{-1}(B)}}$ for Borel $B\subseteq R$ defines a regular PVM: each $E(B)$ is an orthogonal projection by coordinatewise algebra; $E(\varnothing)=0$, $E(R)=I$ because $m\in R$ almost everywhere, $E(B\cap C)=E(B)E(C)$, and for pairwise disjoint $B_n$ with union $B$ the difference $\|E(B)h-\sum_{n\le N}E(B_n)h\|_2^2=\int\bigl|\mathbf 1_B-\sum_{n\le N}\mathbf 1_{B_n}\bigr|^2|h|^2\,d\mu$ is the tail sum $\sum_{n>N}\int_{m^{-1}(B_n)}|h|^2\,d\mu\to0$; the scalar measures $E_h(B)=\int_{m^{-1}(B)}|h|^2\,d\mu$ are finite Borel measures on the compact second-countable set $R$, hence regular. [step 1.1, A1, A5, A7]

3.1 The coordinate integral is $M_m$: for bounded $h,g$ the measure $E_{h,g}(B)=\int_{m^{-1}(B)}h\overline g\,d\mu$ satisfies $\int\varphi\,dE_{h,g}=\int(\varphi\circ m)h\overline g\,d\mu$ for every simple $\varphi$, and approximating the bounded Borel function $z$ on the compact set $R$ uniformly by simple functions and passing to the limit gives $\int z\,dE_{h,g}=\int m\,h\overline g\,d\mu=\langle M_mh,g\rangle$; density of bounded functions in $L^2$ extends this to all $h,g$, so $\int z\,dE=M_m$. [step 2.2, A1, A2, A7]

4.1 By the uniqueness clause of the spectral theorem the regular PVM $E$ on $R=\sigma(M_m)$ with $\int z\,dE=M_m$ is the spectral PVM of $M_m$; for every bounded Borel $f$ on $R$ the same approximation argument gives $\langle f(M_m)h,g\rangle=\int f\,dE_{h,g}=\int(f\circ m)h\overline g\,d\mu=\langle M_{f\circ m}h,g\rangle$, hence $f(M_m)=M_{f\circ m}$ for all $h,g$. [step 3.1, A6]

5.1 The multiplication operator has spectrum the essential range of $m$, spectral projections given by multiplication by the pulled-back indicators, and Borel calculus $f(M_m)=M_{f\circ m}$. [step 2.1, step 2.2, step 4.1, A8] ∎
