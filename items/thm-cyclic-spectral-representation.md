---
id: thm-cyclic-spectral-representation
kind: theorem
title: Cyclic spectral representation
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cyclic-vector-and-cyclic-normal-operator, thm-bounded-borel-pvm-integral, thm-borel-functional-calculus-for-bounded-normal-operators, def-borel-functional-calculus-for-a-bounded-normal-operator, thm-c-c-is-dense-in-l-p-for-radon-measures, thm-riesz-fischer-completeness-of-l-p, def-l-p-space-as-a-quotient-by-null-functions, thm-continuous-functional-calculus-for-bounded-normal-operators, lem-scalar-and-complex-measures-from-a-pvm, def-regular-borel-measure-on-an-lch-space, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.84, printed pp.294–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Chapter IX §10, printed pp.293–299"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
---

## Statement

Assume AC. Let $T$ be a bounded normal operator on a nonzero complex Hilbert
space $H$ with spectral projection valued measure $E$, let $x\in H$, and let
$H_x$ be the cyclic subspace of
[[def-cyclic-vector-and-cyclic-normal-operator]]. Then:

1. the formula $U[f]:=f(T)x$, initially defined for continuous $f$, extends
   uniquely to a unitary operator $U:L^2(\sigma(T),E_x)\to H_x$ satisfying
   $\|U[f]\|^2=\int|f|^2\,dE_x$, and the class $[f]$ of a continuous function
   is mapped to $f(T)x$;
2. $U$ intertwines multiplication by the coordinate function with the
   restriction of $T$: $U M_z=T U$ on $L^2(\sigma(T),E_x)$, where
   $(M_zf)(z)=zf(z)$;
3. more generally $U M_h=h(T)U$ for every bounded Borel function $h$ on
   $\sigma(T)$, where $M_h$ is multiplication by $h$;
4. if $x$ is cyclic, that is $H_x=H$, then $T$ is unitarily equivalent to
   multiplication by the coordinate on $L^2(\sigma(T),E_x)$.

## Facts & Assumptions

[A1] $E_x(B)=\langle E(B)x,x\rangle$ is a positive measure on the Borel $\sigma$-algebra of $\sigma(T)$ with $E_x(\sigma(T))=\|x\|^2<+\infty$, and for every bounded Borel $f$ one has $\|f(T)x\|^2=\int|f|^2\,dE_x$ ([[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-bounded-borel-pvm-integral]]).

[A2] $E$ is regular, $\sigma(T)\subseteq\mathbb C$ is compact and locally compact Hausdorff, $C(\sigma(T))$ is dense in $L^p(E_x)$ for $1\le p<\infty$, and $L^2(E_x)$ is complete ([[def-regular-borel-measure-on-an-lch-space]], [[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[thm-riesz-fischer-completeness-of-l-p]]).

[A3] Elements of $L^2(\sigma(T),E_x)$ are almost-everywhere classes of measurable functions, and a measurable function is unchanged as a class by modification on an $E_x$-null set ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[A4] The Borel calculus is multiplicative, $\Phi_E(fg)=f(T)g(T)$, and $T=\Phi_E(z)$; for continuous $f$ one has $Tf(T)x=(zf)(T)x$ and $T^*f(T)x=(\overline zf)(T)x$ ([[thm-borel-functional-calculus-for-bounded-normal-operators]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]], [[thm-continuous-functional-calculus-for-bounded-normal-operators]]).

[A5] $H_x$ is the closed span of $\{f(T)x:f\in C(\sigma(T))\}$; an isometry from a complete space has closed image, and a linear isometry with dense image into a Hilbert space is unitary onto its codomain ([[def-cyclic-vector-and-cyclic-normal-operator]]).

[A6] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$, a bounded normal operator $T$ with spectral PVM $E$, a vector $x\in H$ with cyclic subspace $H_x$, and the map $U_0[f]:=f(T)x$ on $C(\sigma(T))$.

1.1 Isometry of $U_0$: for $f\in C(\sigma(T))$ one has $\|U_0[f]\|^2=\|f(T)x\|^2=\int|f|^2\,dE_x$, so $U_0$ preserves norms and, by linearity of the calculus, is complex-linear; if $f$ and $g$ agree $E_x$-almost everywhere then $\|U_0[f]-U_0[g]\|^2=\int|f-g|^2\,dE_x=0$, so $U_0$ is well defined on classes. [A1, A3, A4]

2.1 $U_0$ extends uniquely to an isometry $U$ on the closure of the continuous classes, which is $L^2(\sigma(T),E_x)$: for any Cauchy sequence of continuous functions the images are Cauchy, and the limit is independent of the approximating sequence because two uniformly-$L^2$ equivalent choices differ by a sequence with vanishing norm. [step 1.1, A2, A3]

3.1 The image of $U$ is $H_x$: the continuous classes map onto the set $\{f(T)x:f\in C(\sigma(T))\}$, whose closed span is $H_x$ by definition, and an isometry with complete domain has closed image, so the image of the extension is exactly $H_x$; hence $U:L^2(\sigma(T),E_x)\to H_x$ is a unitary. [step 2.1, A2, A5]

3.2 Borel multipliers: first let $q$ be bounded Borel and choose continuous $q_n\to q$ in $L^2(E_x)$. Then $U[q]=\lim_n q_n(T)x=q(T)x$, because $\|(q_n(T)-q(T))x\|^2=\int|q_n-q|^2\,dE_x\to0$. Now, for bounded Borel $h$ and continuous $f$, the product $hf$ is bounded Borel, so $U(M_hf)=(hf)(T)x=h(T)f(T)x=h(T)U(f)$ by multiplicativity. Since $M_h$ and $h(T)$ are bounded, density extends this equality to all of $L^2(\sigma(T),E_x)$. [step 2.1, A1, A2, A4]

4.1 Intertwining with the coordinate: for continuous $f$ one has $U(M_zf)=(zf)(T)x=Tf(T)x=T\,U(f)$, because $T=\Phi_E(z)$ and the calculus is multiplicative; both $U M_z$ and $T U$ are bounded linear maps agreeing on the dense set of continuous classes, so $U M_z=T U$ on $L^2(\sigma(T),E_x)$. [step 2.1, step 3.1, A2, A4]

5.1 If $x$ is cyclic then $H_x=H$ and the unitary $U:L^2(\sigma(T),E_x)\to H$ satisfies $U M_zU^{-1}=T$, so $T$ is unitarily equivalent to multiplication by the coordinate. [step 4.1, A5]

6.1 The cyclic representation $U$ is a unitary onto the cyclic subspace, intertwines the coordinate multiplication with $T$, intertwines every bounded Borel multiplier with the Borel calculus, and is a unitary equivalence between $T$ and multiplication by the coordinate when $x$ is cyclic. [step 3.1, step 4.1, step 3.2, step 5.1, A6] ∎
