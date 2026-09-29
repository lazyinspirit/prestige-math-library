---
id: cor-weak-derivative-operator-is-closed-between-lp-spaces
kind: corollary
title: "Weak differentiation has a closed graph on its natural domains"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-countable-choice, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, lem-weak-stability-of-sobolev-derivatives, lem-weak-derivative-linearity-locality-and-commutation, lem-weak-derivatives-are-unique-almost-everywhere, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-complex-holder-minkowski-and-the-quotient-norm, thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one, def-graph-of-a-linear-operator, def-product-norms-on-finitely-many-normed-spaces, def-norm-and-normed-space, rem-real-and-complex-normed-space-convention, thm-metric-sequential-closure, thm-holder-inequality-for-integrals, thm-lebesgue-measure-of-a-box-of-every-kind, thm-dominated-convergence, def-the-standard-smooth-step-function, thm-heine-borel-rn, thm-extreme-value-metric, lem-smooth-bump-between-concentric-euclidean-balls, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-tonelli-and-fubini-for-completed-product-measures, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-absolute-continuity-of-the-integral, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-over-a-measurable-set, lem-classical-derivatives-are-weak-derivatives, thm-real-power-continuity-and-derivatives, thm-chain-rule, def-test-function-space-d-of-an-open-set]
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 1 §1.4, Theorem 1.15 (completeness), printed pp. 11–13; endpoint passage for p=1 and p=∞ is left as an exercise"
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.4, Theorem 3.20, printed p. 56; local L1 weak-derivative limit criterion"
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.4, Theorem 1.15,
  printed pp. 11–13. Its completeness proof takes limits of the functions and
  all weak derivatives in Lp, then passes each test identity to the limit by
  Hölder's inequality for 1<p<∞. The text leaves the p=1 and p=∞ estimates as
  exercises. This item instead invokes the library's completed local
  weak-stability lemma, whose proof covers both endpoints.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.4,
  Theorem 3.20, printed p. 56. Its full proof characterizes a locally
  integrable weak derivative through local L1 limits of smooth functions and
  their derivatives. It does not state the global Lp closed-graph result or
  the failure for a single-coordinate restriction; those claims are derived
  here from the earlier local stability lemma and explicit sequences.

## Statement

Assume the Axiom of Choice. Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be
open, let $1\le p\le\infty$, and let $\mathbb K\in\{\mathbb R,\mathbb C\}$.
For $1\le i\le n$, define the maximal domain
$$V_i(\Omega):=\{u\in L^p(\Omega;\mathbb K):D_i u\text{ exists weakly and its value class belongs to }L^p(\Omega;\mathbb K)\}.$$
Give finite products of $L^p$ the maximum product norm. Then:

1. The full weak gradient
   $$D:W^{1,p}(\Omega;\mathbb K)\subseteq L^p(\Omega;\mathbb K)\longrightarrow (L^p(\Omega;\mathbb K))^n$$
   has a closed graph.
2. Each maximal partial-derivative operator
   $$D_i:V_i(\Omega)\subseteq L^p(\Omega;\mathbb K)\longrightarrow L^p(\Omega;\mathbb K)$$
   has a closed graph.
3. If $n\ge2$, then for every $p$ and every coordinate $i$, the restriction
   $$D_i\big|_{W^{1,p}(Q;\mathbb K)},\qquad Q=(-1,1)^n,$$
   need not have a closed graph. The proof gives a sequence witnessing this
   failure for every $1\le p\le\infty$.

Here the full Axiom of Choice is used only through its consequence
$\mathrm{AC}_\omega$; no stronger choice principle is spent.

## Facts & Assumptions

**Given:** The Axiom of Choice, an open $\Omega\subseteq\mathbb R^n$, $n\ge1$, $1\le p\le\infty$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, and the coordinate weak derivatives on $\Omega$.

[F1] The Axiom of Choice implies Countable Choice, $\mathrm{AC}_\omega$ ([[def-axiom-of-choice]], [[def-countable-choice]]). The latter is the stated hypothesis of the Sobolev-space and weak-stability interfaces below.

[F2] $W^{1,p}$ consists of $L^p$ classes whose first weak derivatives are in $L^p$; the weak-derivative identity uses locally integrable representatives and gives a unique value class under $\mathrm{AC}_\omega$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-weak-derivative-of-a-locally-integrable-function]], [[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F3] If $u_j\to u$ in $L^p_{\mathrm{loc}}$ and weak derivatives $D^\alpha u_j\to v$ in $L^p_{\mathrm{loc}}$, then $D^\alpha u=v$ weakly; this stability statement includes $p=1$ and $p=\infty$ under $\mathrm{AC}_\omega$ ([[lem-weak-stability-of-sobolev-derivatives]]).

[F4] Weak differentiation is linear and restricts to open subsets, and its locally integrable value class is unique under $\mathrm{AC}_\omega$ ([[lem-weak-derivative-linearity-locality-and-commutation]], [[lem-weak-derivatives-are-unique-almost-everywhere]]). Real and complex $L^p$ classes are vector spaces with their quotient norms ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]], [[thm-complex-holder-minkowski-and-the-quotient-norm]], [[thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one]]).

[F5] A linear operator between normed spaces is closed when its graph is closed in the maximum product norm; normed spaces are metric spaces, and a set is closed exactly when it contains limits of all its convergent sequences under $\mathrm{AC}_\omega$ ([[def-graph-of-a-linear-operator]], [[def-product-norms-on-finitely-many-normed-spaces]], [[def-norm-and-normed-space]], [[rem-real-and-complex-normed-space-convention]], [[thm-metric-sequential-closure]]).

[F6] The box $Q=(-1,1)^n$ has finite measure under $\mathrm{AC}_\omega$; Hölder therefore sends each $L^p(Q)$ function to $L^1(Q)$ for every $1\le p\le\infty$. Integrals over measurable sets are monotone, and an $L^1$ integral is absolutely continuous with respect to measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-holder-inequality-for-integrals]], [[thm-absolute-continuity-of-the-integral]], [[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F7] The standard smooth step $\sigma$ is smooth, lies in $[0,1]$, equals $0$ on $(-\infty,0]$, and equals $1$ on $[1,\infty)$; its derivative is bounded because it vanishes off a compact interval ([[def-the-standard-smooth-step-function]], [[thm-heine-borel-rn]], [[thm-extreme-value-metric]]). For finite $p$, the dominated-convergence theorem gives convergence in $L^p$ from bounded pointwise-a.e. convergence on $Q$ ([[thm-dominated-convergence]]).

[F8] Smooth bumps exist that equal $1$ on a smaller closed ball and have compact support in a larger ball; Euclidean balls have positive finite measure under $\mathrm{AC}_\omega$ ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]). Completed-product Fubini factors integrals of the bounded product tests below, and the one-dimensional integral of a smooth derivative is given by Newton–Leibniz ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]], [[def-test-function-space-d-of-an-open-set]]).

[F9] On an open set where a function is $C^1$, its classical derivative is its weak derivative under $\mathrm{AC}_\omega$; weak derivatives are unique almost everywhere. For $t>0$, $(\sqrt t)'=1/(2\sqrt t)$ ([[lem-classical-derivatives-are-weak-derivatives]], [[lem-weak-derivatives-are-unique-almost-everywhere]], [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule]]).

**Choice accounting:** The statement assumes full AC, which is used only to obtain $\mathrm{AC}_\omega$. That consequence is used by [F2]–[F6] and [F8]–[F9], including the sequential characterization of closed sets. The explicitly constructed sequences and fixed bump witnesses require no further choice.

## Proof

**Proof technique:** apply local weak stability to graph limits, then exhibit single-coordinate failures on a cube.

1.1 By [F2] and [F4], weak-derivative value classes are unique and weak differentiation is linear. Thus $W^{1,p}(\Omega;\mathbb K)$ and each maximal domain $V_i(\Omega)$ are linear subspaces of $L^p(\Omega;\mathbb K)$, and the full-gradient and partial-derivative graphs are well-defined linear graphs in the stated normed spaces [F1, F2, F4, F5, given]

1.2 Suppose $(u_j,Du_j)$ in the full-gradient graph converges to $(u,v)$ in $L^p(\Omega;\mathbb K)\times (L^p(\Omega;\mathbb K))^n$ with the maximum product norm. Each coordinate derivative converges in $L^p$, hence locally in $L^p$; applying [F3] with $\alpha=e_i$ and $q=p$ gives $D_i u=v_i$ for every $i$. Therefore $u\in W^{1,p}$ and $Du=v$, so the graph contains every convergent limit [F1, F2, F3, F5, given]

1.3 Fix $i$ and suppose $(u_j,D_i u_j)$ in the maximal graph converges to $(u,v)$ in $L^p(\Omega;\mathbb K)^2$. The same local convergence and [F3] give $D_i u=v$ weakly; because $u,v\in L^p$, $u\in V_i$ and the limit pair is $(u,D_i u)$. Thus this graph is sequentially closed [F1, F3, F5, given]

1.4 If $\Omega=\varnothing$, the spaces in both graph assertions contain only the zero class; for any $\Omega$, the zero class has zero weak derivatives by the test identity. Hence both graphs contain their zero pairs and, on the empty domain, are closed [F1, F2, F4]

1.5 Suppose $n\ge2$, choose distinct coordinates $i,k$, and set $Q=(-1,1)^n$ [given]

2.1 For finite $p$, define $u(x)=\mathbf1_{(0,1)}(x_k)$ and $u_j(x)=\sigma(jx_k)$, using the coordinates and cube fixed in step 1.5. Each $u_j$ is smooth and bounded with bounded first partials for fixed $j$, so it belongs to $W^{1,p}(Q)$ and $D_i u_j=0$. It converges pointwise to $u$ and is bounded by $1$, so [F6] and [F7] give $u_j\to u$ in $L^p(Q)$; consequently $(u_j,D_i u_j)\to(u,0)$ in the ambient graph space [F1, F6, F7, given, step 1.5]

2.2 For $p=\infty$, put $w(x)=|x_k|^{1/2}$ and $w_j(x)=(x_k^2+1/(j+1))^{1/4}$ for $j\in\mathbb N$, using step 1.5. Each $w_j$ is smooth with bounded first partials for fixed $j$ and $D_iw_j=0$. Since $0\le(x_k^2+1/(j+1))^{1/4}-|x_k|^{1/2}\le (j+1)^{-1/4}$, $w_j\to w$ in $L^\infty(Q)$ and $(w_j,D_iw_j)\to(w,0)$. If $w\in W^{1,\infty}(Q)$, then on the half-cube $x_k>0$, [F4] and [F9] identify its weak $k$th derivative with $1/(2\sqrt{x_k})$. For every $M>0$, choose $0<\delta<\min\{1,1/(4M^2)\}$; this derivative exceeds $M$ on the positive-measure box $0<x_k<\delta$, $x_{\widehat k}\in(-1/2,1/2)^{n-1}$ by [F6]. Thus $w\notin W^{1,\infty}(Q)$ and the displayed limit point lies outside the restricted graph [F1, F2, F4, F6, F9, given, step 1.5]

3.1 For finite $p$, the limit $u$ of step 2.1 is not in $W^{1,p}(Q)$. If it had weak derivative $D_k u=h\in L^p(Q)$, then [F6] gives $h\in L^1(Q)$. Choose a nonnegative smooth bump $\rho\in C_c^\infty((-1/2,1/2)^{n-1})$ equal to $1$ on a smaller ball, with $m=\int\rho>0$ by [F8], and choose a smooth bump $\eta\in C_c^\infty((-1/2,1/2))$ with $0\le\eta\le1$ and $\eta(0)=1$. The test $\varphi_\varepsilon(x)=\eta(x_k/\varepsilon)\rho(x_{\widehat k})$ is supported in $Q$ for $0<\varepsilon<1/2$. Fubini and Newton–Leibniz [F8] give $\int_Q u\,\partial_k\varphi_\varepsilon\,dx=m(\eta(1/\varepsilon)-\eta(0))=-m$, so the weak identity forces $|\int_Q h\varphi_\varepsilon\,dx|=m$. Its support lies in $A_\varepsilon=\{|x_k|<\varepsilon/2\}\cap((-1/2,1/2)^{n-1})$, whose measure tends to zero; [F6] gives $\int_{A_\varepsilon}|h|\to0$, while $|\varphi_\varepsilon|\le\|\rho\|_\infty$. This contradiction proves $u\notin W^{1,p}(Q)$ and, with step 2.1, that the restricted graph is not closed for finite $p$ [F1, F2, F6, F8, given, step 2.1]

4.1 The finite-p counterexample is established by steps 2.1 and 3.1, and the $p=\infty$ counterexample by step 2.2: for each $n\ge2$ and coordinate $i$, the distinct $k$ fixed in step 1.5 gives a limit point outside $W^{1,p}(Q)$, so the restricted graph is not closed. Steps 1.2 and 1.3 prove closedness of the full-gradient and maximal partial-derivative graphs. When $n=1$, $W^{1,p}$ requires only the sole derivative $D_1u\in L^p$, hence $V_1=W^{1,p}$ and the restricted graph is the maximal closed graph from step 1.3. Step 1.4 handles the zero pairs and empty domain; step 2.1 includes $p=1$, and step 2.2 treats $p=\infty$. There is no biconditional assertion. [F1, F2, F5, given, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 2.2, step 3.1] ∎
