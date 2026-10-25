---
id: ex-pvm-of-a-multiplication-operator
kind: example
title: Pvm of a multiplication operator
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-bounded-normal-operators-pvm-form, thm-borel-functional-calculus-for-bounded-normal-operators, def-borel-functional-calculus-for-a-bounded-normal-operator, def-l-p-space-as-a-quotient-by-null-functions, def-essential-supremum-with-respect-to-a-measure, prop-essential-supremum-is-attained-as-the-least-essential-bound, def-finite-sigma-finite-and-semifinite-measures, cor-second-countable-lch-locally-finite-borel-measures-are-regular, def-spectrum-and-resolvent-of-a-bounded-operator, def-operator-norm, def-measurable-function-between-measurable-spaces, lem-scalar-and-complex-measures-from-a-pvm, thm-dominated-convergence, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator, def-axiom-of-choice, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-hilbert-space-adjoint, def-projection-valued-measure, thm-bounded-borel-pvm-integral]
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
verification:
  audited: 2026-09-22
---

## Example

Assume AC. Let $(X,\Sigma,\mu)$ be a sigma-finite measure space with $\mu(X)>0$
([[def-finite-sigma-finite-and-semifinite-measures]]), let
$m:X\to\mathbb C$ be bounded and measurable
([[def-measurable-function-between-measurable-spaces]]), and let
$M_m:L^2(\mu;\mathbb C)\to L^2(\mu;\mathbb C)$ be multiplication by $m$,
$M_mf=m\cdot f$ ([[def-l-p-space-as-a-quotient-by-null-functions]]). Then
$M_m$ is a bounded normal operator, its spectrum is the essential range
$$R(m):=\bigl\{z\in\mathbb C:\ \mu\bigl(m^{-1}(B(z,\varepsilon))\bigr)>0\ \text{for every }\varepsilon>0\bigr\},$$
its spectral projection valued measure $E$ on the Borel $\sigma$-algebra of
$R(m)$ is $E(B)f=\mathbf 1_{m^{-1}(B)}f$, and its bounded Borel functional
calculus is
$$f(M_m)=M_{\widetilde f\circ m},\qquad f(M_m)h=(\widetilde f\circ m)\cdot h ,$$
for every bounded Borel $f$ on $R(m)$, where $\widetilde f$ is the zero
extension of $f$ to $\mathbb C$. Since $m\in R(m)$ almost everywhere, the
resulting multiplication operator is independent of the values chosen for an
extension off $R(m)$ and is customarily denoted $M_{f\circ m}$.

## Facts & Assumptions

[A1] $L^2(\mu)$ is a Hilbert space; its elements are almost-everywhere classes, $\|f\|_2^2=\int|f|^2\,d\mu$, and $\langle f,g\rangle=\int f\overline g\,d\mu$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-hilbert-space]]).

[A2] For a bounded complex measurable $\varphi$, use the real essential-supremum interface on $|\varphi|$ to define $\|\varphi\|_\infty$. This essential supremum $\|\varphi\|_\infty$ is the least essential bound: $|\varphi|\le\|\varphi\|_\infty$ almost everywhere  ([[def-essential-supremum-with-respect-to-a-measure]], [[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[A3] $z\in\rho(T)$ exactly when $zI-T$ is bijective with bounded inverse; a bounded operator that is not bounded below has no bounded inverse ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-operator-norm]]).

[A4] Sigma-finiteness provides finite-measure sets covering $X$; finite unions make the cover increasing. If every intersection of a positive-measure set with these cover sets were null, their countable union would be null. Hence one intersection has positive finite measure ([[def-finite-sigma-finite-and-semifinite-measures]]).

[A5] A finite Borel measure on a second-countable LCH space is regular ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]).

[A6] For a bounded normal operator on a nonzero complex Hilbert space, its spectrum is nonempty compact and the spectral PVM is the unique regular PVM on $\sigma(T)$ with $\int z\,dE=T$, and $f(T)$ has pairings $\langle f(T)h,g\rangle=\int f\,dE_{h,g}$ with $E_{h,g}(B)=\langle E(B)h,g\rangle$ ([[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]], [[thm-borel-functional-calculus-for-bounded-normal-operators]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]], [[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-bounded-borel-pvm-integral]]).

[A7] Domination: if $|m|\le\|\varphi\|_\infty$ almost everywhere and $h\in L^2(\mu)$ then $\int|m|^2|h|^2\,d\mu\le\|\varphi\|^2_\infty\|h\|^2$; and dominated convergence applies to uniformly bounded pointwise convergent sequences against the finite measure $|h|^2d\mu$ ([[thm-dominated-convergence]]).

[A8] The adjoint pairing is that of [[def-hilbert-space-adjoint]], and regular PVM means [[def-projection-valued-measure]]. AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** A sigma-finite measure space $(X,\Sigma,\mu)$, a bounded measurable $m$, and the multiplication operator $M_mf=mf$ on $L^2(\mu)$; write $R:=R(m)$ for the essential range.

1.1 $M_m$ is a bounded linear operator with $\|M_m\|=\|m\|_\infty$: $\|M_mh\|_2^2=\int|m|^2|h|^2\,d\mu\le\|m\|_\infty^2\|h\|_2^2$, and if $0\le c<\|m\|_\infty$, the set $A=\{|m|>c\}$ has positive measure, and choosing $B\subseteq A$ of positive finite measure gives $\|M_m\mathbf 1_B\|_2\ge c\|\mathbf 1_B\|_2$, so $\|M_m\|\ge c$ and hence $\|M_m\|=\|m\|_\infty$ (when the essential norm is zero, the upper bound already gives equality). Since $\mu(X)>0$, [A4] also supplies a nonzero finite-measure indicator, so this Hilbert space is nonzero. [A1, A2, A4, A7]

1.2 $M_m$ is normal: the adjoint is $M_{\overline m}$ because $\langle M_mh,g\rangle=\int mh\overline g\,d\mu=\int h\overline{\overline mg}\,d\mu=\langle h,M_{\overline m}g\rangle$, and $M_mM_{\overline m}=M_{|m|^2}=M_{\overline m}M_m$. [A1, A7, A8]

2.1 $\sigma(M_m)=R$: if $z\notin R$ then $\mu(m^{-1}(B(z,\varepsilon)))=0$ for some $\varepsilon>0$, so $|m-z|\ge\varepsilon$ almost everywhere, $r(x):=1/(m(x)-z)$ on $\{|m-z|\ge\varepsilon\}$ and $r(x):=0$ elsewhere defines a bounded measurable multiplier $M_r$ that is a two-sided inverse on a.e. classes of $M_m-zI$, and $z\in\rho(M_m)$; if $z\in R$ then for each $n$ the set $A_n=\{|m-z|<1/(n+1)\}$ has positive measure, sigma-finiteness gives $B_n\subseteq A_n$ with $0<\mu(B_n)<\infty$, and the unit vectors $h_n=\mathbf 1_{B_n}/\|\mathbf 1_{B_n}\|_2$ satisfy $\|(M_m-zI)h_n\|_2\le\frac1{n+1}$, so $M_m-zI$ is not bounded below and $z\in\sigma(M_m)$. [step 1.1, A3, A4]

3.1 The set $R=\sigma(M_m)$ is nonempty compact by [A6] and steps 1.1–2.1. It is a second-countable LCH space, being a compact subspace of the Euclidean plane (intersections with rational-centre, rational-radius balls give a countable base). Moreover $m\in R$ almost everywhere: for every $z\notin R$ there is an open ball about $z$ with null preimage; a countable rational-ball base refines all these balls. The union of those base balls having null preimage is exactly $\mathbb C\setminus R$, since any point in one has a smaller ball with null preimage. Its preimage is a countable union of null sets. [step 1.1, step 1.2, step 2.1, A6]

4.1 Define $E(B)=M_{\mathbf 1_{m^{-1}(B)}}$ for Borel $B\subseteq R$; these sets are also Borel in $\mathbb C$ since $R$ is closed. Each $E(B)$ is an orthogonal projection by multiplication and the adjoint pairing; $E(\varnothing)=0$, $E(R)=I$ by step 3.1, and $E(B\cap C)=E(B)E(C)$. For disjoint $(B_n)_{n\ge0}$ with union $B$, the squared norm of the additive remainder is the integral of $|\mathbf 1_{m^{-1}(B)}-\sum_{n\le N}\mathbf 1_{m^{-1}(B_n)}|^2|h|^2$. The integrands tend to zero and are bounded by the integrable function $|h|^2$, so dominated convergence gives strong countable additivity. Thus $E$ is a PVM. Its positive scalar measures $E_h(B)=\int_{m^{-1}(B)}|h|^2\,d\mu$ have mass $\|h\|^2$ and are finite Borel measures on the second-countable LCH space $R$, hence regular by [A5]. [step 1.1, step 1.2, step 3.1, A1, A5, A7, A8]

5.1 For every $h,g\in L^2(\mu)$ the product $h\overline g$ is integrable, since $2|h\overline g|\le|h|^2+|g|^2$. The scalar measure $E_{h,g}(B)=\int_{m^{-1}(B)}h\overline g\,d\mu$ therefore satisfies $\int\varphi\,dE_{h,g}=\int(\widetilde\varphi\circ m)h\overline g\,d\mu$ first for indicators and simple functions, using zero extensions. For bounded Borel $f$ on $R$, uniformly approximating by simple functions proves the same equality: the right-side error is bounded by the uniform error times $\int|hg|$, and the left-side error by the uniform error times $|E_{h,g}|(R)<\infty$. No boundedness restriction on $h,g$ or density assertion is needed. In particular for $f(z)=z$, step 3.1 makes $\widetilde f\circ m=m$ almost everywhere, so the bounded PVM integral satisfies $\Phi_E(z)=M_m$ by equality of all pairings. [step 3.1, step 4.1, A1, A6, A7]

6.1 By the uniqueness clause of the spectral theorem the regular PVM $E$ on $R=\sigma(M_m)$ with $\int z\,dE=M_m$ is the spectral PVM of $M_m$; for every bounded Borel $f$ on $R$, let $\widetilde f$ be its zero extension to $\mathbb C$. The same approximation argument gives $\langle f(M_m)h,g\rangle=\int f\,dE_{h,g}=\int(\widetilde f\circ m)h\overline g\,d\mu=\langle M_{\widetilde f\circ m}h,g\rangle$, hence $f(M_m)=M_{\widetilde f\circ m}$ for all $h,g$; because $m\in R$ almost everywhere, this class is independent of the extension off $R$. [step 3.1, step 4.1, step 5.1, A6]

7.1 The multiplication operator has spectrum the essential range of $m$, spectral projections given by multiplication by the pulled-back indicators, and Borel calculus $f(M_m)=M_{\widetilde f\circ m}$, customarily written $M_{f\circ m}$ modulo the null set where $m\notin R(m)$. [step 2.1, step 4.1, step 6.1, A8] ∎
