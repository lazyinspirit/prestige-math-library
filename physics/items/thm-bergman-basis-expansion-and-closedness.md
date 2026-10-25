---
id: thm-bergman-basis-expansion-and-closedness
kind: theorem
title: "$A^2(\\Omega)$ is closed, and the Bergman kernel is the sum over any complete orthonormal system"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 3
proof_strategy: direct
deps:
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - def-banach-space
  - def-bergman-space-and-kernel
  - def-countable
  - def-countable-choice
  - def-holomorphic-function-in-several-complex-variables
  - def-metric-ball
  - def-metric-compactness
  - def-metric-space
  - def-metric-topology
  - def-norm-and-normed-space
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-real-and-complex-inner-product-space
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-total-derivative-in-euclidean-space
  - lem-bergman-evaluation-bound-on-compact-subsets
  - lem-mean-value-inequality-for-a-differentiable-banach-valued-curve
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
  - prop-algebra-of-holomorphic-functions-in-several-variables
  - prop-holomorphic-functions-are-continuous-and-separately-holomorphic
  - rem-complex-euclidean-space-dictionary
  - thm-chain-rule-for-total-derivatives
  - thm-complex-plane-is-complete
  - thm-compactness-under-continuous-maps
  - thm-hilbert-space-fourier-expansion
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
  - thm-riesz-representation-for-hilbert-space
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, Lemma 5.2.1 (printed p. 161), Proposition 5.2.2 (printed p. 162), and Proposition 5.2.5 with its complete proof (printed pp. 163–164): compact evaluation, the Bergman kernel's symmetry/holomorphy, and the complete-orthonormal-system expansion with compact-uniform absolute convergence.
    - title: Zbigniew Błocki, The Bergman Kernel and Metric
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed pp. 1–3: compact evaluation, the Riesz kernel sections and expansion formula. On printed p. 3 the phrase “orthonormal system” is not explicitly qualified as complete; the local proof uses the published complete-system Fourier theorem and the item's statement makes completeness explicit.
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]), let $m\ge1$, and let
$\Omega\subseteq\mathbb C^m$ be a nonempty open set. The Bergman space
$A^2(\Omega)$ of [[def-bergman-space-and-kernel]] is a closed complex linear
subspace of $L^2(\Omega)$.

Let $(e_j)_{j\in J}$ be any complete orthonormal system of $A^2(\Omega)$,
when one exists. For arbitrary $J$, interpret each sum as the net of finite
subsum values ordered by inclusion. Then for all $z,w\in\Omega$,
$$K_\Omega(z,w)=\sum_{j\in J}e_j(z)\overline{e_j(w)}.$$
For every pair of nonempty compact sets $K,L\subseteq\Omega$ and every $\varepsilon>0$,
there is a finite $F_0\subseteq J$ such that for every finite
$G\subseteq J\setminus F_0$,
$$\sup_{(z,w)\in K\times L}\sum_{j\in G}|e_j(z)\overline{e_j(w)}|<\varepsilon.$$
Thus the series converges absolutely and uniformly on compact subsets of
$\Omega\times\Omega$ with its Euclidean product metric and is independent of the
chosen complete orthonormal system; an empty compact set gives a vacuous
uniform-convergence claim. The kernel is holomorphic in $z$, antiholomorphic in $w$, and
$K_\Omega(w,z)=\overline{K_\Omega(z,w)}$.

## Facts & Assumptions

[A1] The only choice principle is $\mathrm{AC}_\omega$. It is inherited through
the preceding Bergman-space closure argument, the arbitrary-index Fourier
expansion, and Riesz representation; this proof uses no full Axiom of Choice
([[def-countable-choice]]).

[F1] $A^2(\Omega)$ is a closed complex Hilbert subspace of $L^2(\Omega)$ for the
first-variable-linear integral pairing ([[def-bergman-space-and-kernel]]).

[F2] For every nonempty compact $K\subseteq\Omega$, point evaluation and all
first complex partials are bounded by constants times the $L^2$ norm
([[lem-bergman-evaluation-bound-on-compact-subsets]]).

[F3] For a complete orthonormal family $(e_j)_{j\in J}$ in a Hilbert space,
the finite-subset Fourier net converges in norm to each vector
([[thm-hilbert-space-fourier-expansion]]).

[F4] For a finite orthonormal projection $P_F$, both $P_F$ and the residual
$I-P_F$ are contractions by Pythagoras; for finite $G\subseteq J\setminus F$,
$P_Gx=P_G(I-P_F)x$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]],
[[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

[F5] For finite scalar lists, Cauchy–Schwarz bounds the sum of products by the
product of the $\ell^2$ norms
([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F6] For holomorphic $f$, $Df(a)h=\sum_{j<m}(\partial_{z_j}f(a))h_j$; holomorphic
functions are continuous and finite linear combinations remain holomorphic
([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]],
[[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[F7] Holomorphicity gives total differentiability through the real coordinate
dictionary, and the total-derivative chain rule gives the derivative along an
affine line ([[def-holomorphic-function-in-several-complex-variables]],
[[def-total-derivative-in-euclidean-space]],
[[thm-chain-rule-for-total-derivatives]],
[[rem-complex-euclidean-space-dictionary]]).

[F8] A continuous differentiable curve in the Banach space $\mathbb C$ whose
derivative has norm at most $M$ varies by at most $M$ times the parameter
distance; $\mathbb C$ is Banach for its usual modulus norm
([[def-banach-space]], [[thm-complex-plane-is-complete]],
[[lem-mean-value-inequality-for-a-differentiable-banach-valued-curve]]).

[F9] Every point of an open metric set has a ball inside it; positive-radius
Euclidean closed balls are compact, and continuous images of compact spaces are
compact. A norm induces the metric $d(x,y)=\|x-y\|$
([[def-metric-space]], [[def-norm-and-normed-space]],
[[def-metric-topology]], [[def-metric-ball]],
[[rem-complex-euclidean-space-dictionary]],
[[cor-euclidean-closed-balls-and-spheres-are-compact]],
[[thm-compactness-under-continuous-maps]]).

[F10] Every at most countable infinite set is in bijection with $\mathbb N$;
finite support is handled by a finite sum ([[def-countable]]).

[F11] A locally uniform limit of holomorphic functions on an open set is
holomorphic ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[F12] Riesz representation is isometric: the representing vector has norm
equal to the functional norm ([[thm-riesz-representation-for-hilbert-space]]);
the Hilbert pairing is conjugate symmetric
([[def-real-and-complex-inner-product-space]]).

[F13] A compact metric space has a finite subcover for every open cover, and a
compact subset is compact in the restricted metric ([[def-metric-compactness]]).

[F14] With the Euclidean product metric
$d((z,w),(z',w'))=(\|z-z'\|^2+\|w-w'\|^2)^{1/2}$, each coordinate projection
is $1$-Lipschitz. Hence the coordinate projections of a compact subset are
compact and contain it in their product ([[rem-complex-euclidean-space-dictionary]],
[[thm-compactness-under-continuous-maps]]).

[F15] Each evaluation $E_w$ is bounded and has a unique Riesz representer $k_w$
with $f(w)=\langle f,k_w\rangle$, and $K_\Omega(z,w)=k_w(z)$
([[def-bergman-space-and-kernel]]).

[F16] The coefficient support of each vector for a complete orthonormal family
is at most countable ([[thm-hilbert-space-fourier-expansion]]).

[F17] For an arbitrary index set, a scalar sum is the limit of its finite-subset
net ([[def-square-summable-family-on-an-arbitrary-index-set]]).

## Proof

**Proof technique:** direct, using Fourier projections, compact evaluation estimates, and Riesz representation.

**Given:** $\mathrm{AC}_\omega$, $m\ge1$, a nonempty open $\Omega\subseteq\mathbb C^m$, and a complete orthonormal system $(e_j)_{j\in J}$ of $A^2(\Omega)$.

1.1 The closedness assertion is the closed-subspace conclusion already proved in [[def-bergman-space-and-kernel]]; the inner product and pointwise representatives are those fixed there. [A1, F1, given]

1.2 Fix $w\in\Omega$ and let $P_Fk_w:=\sum_{j\in F}\langle k_w,e_j\rangle e_j$ for finite $F\subseteq J$. By [F3], $P_Fk_w\to k_w$ in $A^2(\Omega)$. For each $j$, the reproducing identity in [F15] and conjugate symmetry [F12] give $\langle k_w,e_j\rangle=\overline{e_j(w)}$, so $P_Fk_w(z)=\sum_{j\in F}e_j(z)\overline{e_j(w)}$. For every nonempty compact $K\subseteq\Omega$, the compact evaluation bound [F2] gives $\sup_{z\in K}|P_Fk_w(z)-K_\Omega(z,w)|\le C_K\|P_Fk_w-k_w\|_{L^2(\Omega)}\to0$; the empty case is vacuous. [A1, F2, F3, F12, F15, given]

1.3 Fix $w_0\in\Omega$. By [F9] choose $r>0$ with $B(w_0,r)\subseteq\Omega$, and put $Q=\overline B(w_0,r/2)$, a compact subset of $\Omega$. For $w,w'\in B(w_0,r/4)$ the segment $\gamma(t)=w+t(w'-w)$, $0\le t\le1$, stays in $Q$ by the triangle inequality. Write $\epsilon_\ell$ for the multi-index with a $1$ in coordinate $\ell$ and zeros elsewhere. For $f\in A^2(\Omega)$ with $\|f\|_2\le1$, [F7] gives $\frac{d}{dt}f(\gamma(t))=\sum_{\ell<m}\partial_{z_\ell}f(\gamma(t))(w'_\ell-w_\ell)$; by [F2] and finite Cauchy–Schwarz [F5], its modulus is at most $M_Q\|w'-w\|$, where $M_Q=(\sum_{\ell<m}C_{Q,\epsilon_\ell}^2)^{1/2}$. The curve is continuous by [F6], so [F8] yields $|f(w')-f(w)|\le M_Q\|w'-w\|$. Taking the supremum over the unit ball of $A^2$ proves $\|E_{w'}-E_w\|\le M_Q\|w'-w\|$; by the isometry in [F12], $\|k_{w'}-k_w\|_2\le M_Q\|w'-w\|$. Thus $w\mapsto k_w$ is locally Lipschitz and continuous. [A1, F2, F5, F6, F7, F8, F9, F12, F15]

2.1 If $C$ is a compact subset of $A^2(\Omega)$ in its norm metric, the net $(P_Fx)$ converges to $x$ uniformly for $x\in C$; the empty case is vacuous. For $\varepsilon>0$, the norm balls of radius $\varepsilon/3$ centered at points of $C$ are open by the triangle inequality and form a cover in that metric, so [F13] gives a finite subcover with centers $x_1,\ldots,x_N$. For each center choose a finite $F_i$ with $\|P_Fx_i-x_i\|<\varepsilon/3$ whenever $F\supseteq F_i$, using [F3]. For $F_0=\bigcup_iF_i$ and $F\supseteq F_0$, contraction of $I-P_F$ from [F4] gives $\sup_{x\in C}\|P_Fx-x\|<2\varepsilon/3$. By [F9] and step 1.3, $k(K)$ and $k(L)$ are compact for compact $K,L\subseteq\Omega$, so this uniform convergence applies to both section families. [F3, F4, F9, F13, step 1.3, given]

2.2 Fix $w\in\Omega$. By [F16], the support of $(\langle k_w,e_j\rangle)_{j\in J}$ is at most countable; if it is finite the expansion is finite, and otherwise [F10] enumerates it by a sequence. The corresponding finite partial sums converge to $k_w$ in norm by [F3] and uniformly on every compact subset in the variable $z$ by [F2]. Each partial sum is holomorphic in $z$ by [F6], so [F11] makes $z\mapsto K_\Omega(z,w)$ holomorphic. [A1, F2, F3, F6, F10, F11, F16, step 1.2]

3.1 Let $S_F(z,w):=\sum_{j\in F}e_j(z)\overline{e_j(w)}=P_Fk_w(z)$ as in step 1.2. Step 2.1 and [F2] show $S_F\to K_\Omega$ uniformly on each $K\times L$ with $K,L\subseteq\Omega$ compact. For $\varepsilon>0$, apply step 2.1 to the compact sets $k(K)$ and $k(L)$ with tolerance $\sqrt\varepsilon$, and take the union $F_0$ of the resulting finite index sets. For every finite $G\subseteq J\setminus F_0$, finite Cauchy–Schwarz [F5] and the orthogonal projections [F4], with $F=F_0$, give $\sum_{j\in G}|e_j(z)\overline{e_j(w)}|\le\|P_Gk_z\|_2\|P_Gk_w\|_2\le\|k_z-P_{F_0}k_z\|_2\|k_w-P_{F_0}k_w\|_2<\varepsilon$ uniformly on $K\times L$. Thus the series converges absolutely and uniformly there. Any compact subset of $\Omega\times\Omega$ is contained in the product of its compact coordinate projections by [F14], so the convergence holds on every such compact subset. [F2, F4, F5, F9, F14, F17, step 1.2, step 2.1]

4.1 For $z,w\in\Omega$, $K_\Omega(z,w)=\langle k_w,k_z\rangle$ by the reproducing identity [F15], so conjugate symmetry [F12] gives $K_\Omega(w,z)=\overline{K_\Omega(z,w)}$. Thus the kernel is antiholomorphic in $w$ as well as holomorphic in $z$ by step 2.2. Since step 3.1 identifies every complete orthonormal system's sum with the kernel defined in [F15], the expansion is basis-independent. [F12, F15, step 3.1, step 2.2] ∎
