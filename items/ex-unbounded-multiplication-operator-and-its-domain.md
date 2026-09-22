---
id: ex-unbounded-multiplication-operator-and-its-domain
kind: example
title: "Multiplication operators: domain, spectral measure and spectrum"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, def-l-p-space-as-a-quotient-by-null-functions, def-projection-valued-measure, def-axiom-of-choice, thm-dominated-convergence, def-spectrum-and-resolvent-of-a-bounded-operator, thm-pvm-integral-is-a-star-homomorphism, thm-bounded-borel-pvm-integral, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, cor-second-countable-lch-locally-finite-borel-measures-are-regular, thm-heine-borel-r, thm-rationals-countable, lem-q-and-irrationals-dense-r, thm-monotone-convergence-for-the-integral, def-integral-of-a-simple-function-against-a-pvm, def-unbounded-integral-against-a-pvm, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Examples 7.5, 7.7 and 7.25, pp.29-34"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.2, multiplication-operator examples, pp.66-69"
---

## Example

Assume the Axiom of Choice. Let $(X,\Sigma,\mu)$ be a $\sigma$-finite measure
space, let $m:X\to\mathbb R$ be measurable and finite $\mu$-almost everywhere,
and on the Hilbert space $H=L^2(X,\mu;\mathbb C)$
([[def-l-p-space-as-a-quotient-by-null-functions]]) put
$$D(M_m)=\Bigl\{f\in L^2(X,\mu):\int_X|m|^2|f|^2\,d\mu<\infty\Bigr\},\qquad M_mf=mf .$$
Then $M_m$ is self-adjoint; its spectral projection valued measure is
$E(B)=M_{\mathbf 1_{m^{-1}(B)}}$; for every Borel $g:\mathbb R\to\mathbb C$ its functional calculus is
$g(M_m)=M_{g\circ m}$ on the natural domain; and
$\sigma(M_m)$ equals the essential range
$\{t\in\mathbb R:\mu(m^{-1}(t-\varepsilon,t+\varepsilon))>0$ for every
$\varepsilon>0\}$.

## Facts & Assumptions

[A1] Complex $L^2$ consists of almost-everywhere equivalence classes and is a Hilbert space under Countable Choice, with $\langle u,v\rangle=\int u\overline v\,d\mu$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]). AC is assumed, in particular for the spectral theorem and its Countable Choice suppliers ([[def-axiom-of-choice]]).

[A2] Dominated convergence holds under an integrable majorant, and nonnegative measurable functions may be integrated by monotone convergence of increasing simple approximations ([[thm-dominated-convergence]], [[thm-monotone-convergence-for-the-integral]], [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]).

[A3] A PVM has orthogonal projection values, multiplicative intersections, normalization and strong countable additivity. It is regular when every scalar measure is regular ([[def-projection-valued-measure]]). Every compact-finite Borel measure on a second-countable LCH space is regular ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]). The real line has a countable rational-interval base and compact closed bounded intervals ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]], [[thm-heine-borel-r]]).

[A4] For a PVM on nonzero $H$, the bounded integral is the operator-norm limit of integrals of uniformly approximating complex simple functions, is linear and multiplicative, and obeys the quadratic identity ([[thm-bounded-borel-pvm-integral]], [[thm-pvm-integral-is-a-star-homomorphism]]). A simple function in disjoint normal form integrates as the corresponding finite sum of projections ([[def-integral-of-a-simple-function-against-a-pvm]]). The unbounded integral is defined by squared-integrability and truncation, including an explicit zero-space case ([[def-unbounded-integral-against-a-pvm]]).

[A5] Under AC, a regular PVM on the real line represents a self-adjoint operator by the integral of the identity function, with its squared-integrability domain; for nonzero $H$ the spectral PVM of a self-adjoint operator is unique ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]). Its calculus is integration against that PVM and its spectrum is its essential range, with the zero-space case supplied directly ([[thm-unbounded-borel-functional-calculus]]).

## Verification

**Proof technique:** direct.

**Given:** The sigma-finite measure space and real-valued measurable multiplier in the example.

1.1 Multiplication by $m$ is well defined on null classes: two representatives that agree off a null set have products agreeing there, and the squared-integrability condition is unchanged. It is linear on its domain, since $|m(u+v)|^2\le2|mu|^2+2|mv|^2$. For $u\in H$, $u_n=u\mathbf1_{\{|m|\le n\}}$ belongs to the domain and tends to $u$ in $L^2$ by domination by $|u|^2$, so the domain is dense. All multiplications and norms below use the complex Hilbert structure in [A1]. [A1, A2]

1.2 A bounded measurable multiplier $a$ gives a bounded operator with $\|au\|_2\le(\sup|a|)\|u\|_2$. Define $E(B)u=\mathbf1_{m^{-1}(B)}u$ for Borel $B\subseteq\mathbb R$. It is idempotent and self-adjoint by the integral pairing in [A1]. Preimages show normalization and multiplicativity. For disjoint Borel $B_j$, the difference between $E(\bigcup_j B_j)u$ and its first $n$ summands has squared norm the integral of $|u|^2$ over the remaining preimages, tending to zero by dominated convergence. Thus $E$ is a PVM. [A1, A2, A3]

1.3 If $H=\{0\}$, sigma-finiteness forces $\mu=0$: otherwise some finite-measure set in a countable finite-measure cover would have positive measure, and its indicator would be a nonzero $L^2$ vector. All operators then have full zero-space domain and zero action, and the spectrum and essential range are empty; [A4] and [A5] give the direct zero-space conventions. All claims follow in this case. Henceforth assume $H\ne\{0\}$ before using the bounded calculus or spectral uniqueness in [A4]–[A5]. [A1, A4, A5]

2.1 Its scalar measure is $E_u(B)=\int_{m^{-1}(B)}|u|^2\,d\mu$, a finite Borel measure of mass $\|u\|_2^2$. The real line is Hausdorff (disjoint small intervals separate distinct points), locally compact by compact closed bounded intervals, and second-countable by the rational base in [A3]. Therefore the regularity theorem in [A3] applies to every $E_u$: $E$ is regular. Moreover, for any nonnegative Borel $q$, $\int q\,dE_u=\int(q\circ m)|u|^2\,d\mu$. This holds first for indicators by the displayed scalar measure, then finite nonnegative simple sums, then all nonnegative Borel functions by increasing simple approximation and monotone convergence. [A1, A2, A3, step 1.2]

2.2 For a complex Borel simple function $s$ on $\mathbb R$, complete its disjoint representation with the zero-coefficient complement. By [A4], its integral against $E$ is multiplication by $s\circ m$. Given bounded Borel $h$, partition a square containing its complex range into finitely many Borel cells of diameter tending to zero, taking a fixed corner as each coefficient; these give complex simple $s_n$ with $\sup|s_n-h|\to0$. The multiplier norm bound from step 1.2 and the operator-norm approximation in [A4] imply $\Phi_E(h)=M_{h\circ m}$. [A4, step 1.2]

3.1 For arbitrary Borel $g:\mathbb R\to\mathbb C$, step 2.1 with $q=|g|^2$ identifies the domain of $g(E)$ with $\{u\in H:\int|g\circ m|^2|u|^2\,d\mu<\infty\}$. Its bounded truncations act by $g(m)\mathbf1_{\{|g(m)|\le n\}}u$ by step 2.2, and these tend in $L^2$ to $(g\circ m)u$ by dominated convergence. In particular $\int\lambda\,dE$ equals $M_m$ with exactly the stated domain. Regularity proved in step 2.1 licenses the converse spectral theorem in [A5], so $M_m$ is self-adjoint and $E$ is its spectral PVM, unique among regular representing PVMs. Thus the calculation for general $g$ is indeed its functional calculus. [A2, A4, A5, step 2.1, step 2.2]

4.1 For any measurable set $A$, the indicator multiplier $M_{\mathbf1_A}$ vanishes if $\mu(A)=0$. Conversely, let $(X_n)$ be a countable cover by finite-measure sets. If $\mu(A)>0$, some $A\cap X_n$ has positive finite measure, since a countable union of null sets is null. Then $u=\mathbf1_{A\cap X_n}$ is a nonzero $L^2$ vector fixed by that multiplier. Therefore $E(B)=0$ exactly when $\mu(m^{-1}(B))=0$. Apply the spectral essential-range formula in [A5] to the identity function: this gives precisely the stated real essential range of $m$. Nonreal points are outside that range since the PVM is on the real line. This completes the domain, self-adjointness, spectral measure, calculus and spectrum claims. [A1, A5, step 1.2, step 3.1] ∎
