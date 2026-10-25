---
id: lem-a-p-distribution-decay-from-maximal-cubes
kind: lemma
title: Distribution decay from maximal cubes for A_p weights
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [lem-a-p-weighted-average-comparison-and-density-to-mass, lem-maximal-dyadic-subcubes-of-a-cube-at-a-height, def-muckenhoupt-a-p-and-a-one-weights, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, thm-differentiation-along-families-shrinking-nicely, def-countable-choice, lem-a-one-cube-average-and-maximal-function-forms-agree]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "The proof of Theorem 7.2.2 (the levels $\\alpha_k$, the sets $U_k$ and the properties (1)-(3)), printed pp. 514-517"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "The distribution estimate in the proof of Lemma 4.36 and its iteration, printed pp. 87-89"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$1\le p<\infty$, let $w\in A_p$
([[def-muckenhoupt-a-p-and-a-one-weights]]), let $Q_0$ be an axis-parallel cube
with $\alpha_0:=\langle w\rangle_{Q_0}>0$, and fix $0<\alpha<1$. Put
$\alpha_k:=(2^n\alpha^{-1})^k\alpha_0$ and let $U_k$ be the union of the maximal
dyadic subcubes $R\subseteq Q_0$ (in the sense of
[[lem-maximal-dyadic-subcubes-of-a-cube-at-a-height]]) with
$\langle w\rangle_R>\alpha_k$, with $U_k=\emptyset$ when there is none. Then
$U_{k+1}\subseteq U_k$, $|U_{k+1}|\le\alpha|U_k|$ and $|U_k|\le\alpha^k|Q_0|$,
and with
$$\beta:=1-\frac{(1-\alpha)^p}{K_p}$$
one has $w(U_{k+1})\le\beta w(U_k)$ and $w(U_k)\le\beta^kw(Q_0)$; moreover
$w\le\alpha_k$ almost everywhere on $Q_0\setminus U_k$.

Here $K_p=[w]_{A_p}$ for $p>1$, and
$K_1=\sup_Q\langle w\rangle_Q/(\operatorname{ess\,inf}_Qw)$; by
[[lem-a-one-cube-average-and-maximal-function-forms-agree]],
$1\le K_1\le c_n[w]_{A_1}$. Thus the constants remain controlled by the
stated $A_p$ data, including the ball-normalized endpoint characteristic.

## Facts & Assumptions

**Given:** Countable Choice, $1\le p<\infty$, $w\in A_p$, the cube $Q_0$ with $\alpha_0=\langle w\rangle_{Q_0}>0$, $0<\alpha<1$, the levels $\alpha_k$ and the sets $U_k$.

[F1] For every $k\ge0$ one has $\alpha_k\ge\alpha_0$ because $2^n\alpha^{-1}>1$, so the subcube lemma applies at the height $\alpha_k$: the maximal dyadic subcubes $R\subseteq Q_0$ with $\langle w\rangle_R>\alpha_k$ are pairwise disjoint, at most countable, their union equals $\{M_{d,Q_0}w>\alpha_k\}$ up to a null set, and each of them satisfies $\langle w\rangle_R\le2^n\alpha_k$ ([[lem-maximal-dyadic-subcubes-of-a-cube-at-a-height]]).

[F2] Since $w>0$ a.e. and $w(Q_0)>0$, all the sets $U_k$ and their intersections with the maximal cubes are measurable, and $w$ is finite on $Q_0$ ([[def-muckenhoupt-a-p-and-a-one-weights]]).

[F3] Density-to-mass: for $1\le p<\infty$, $w\in A_p$, a cube $Q$ and a measurable $S\subseteq Q$ with $|S|\le\alpha|Q|$ one has $w(S)\le\beta w(Q)$ with $\beta=1-(1-\alpha)^p/K_p$ for $p>1$; for $p=1$ use $w\ge\langle w\rangle_Q/K_1$ a.e. to get $w(Q\setminus S)\ge(1-\alpha)w(Q)/K_1$. ([[lem-a-p-weighted-average-comparison-and-density-to-mass]], [[lem-a-one-cube-average-and-maximal-function-forms-agree]]).

[F4] For a locally integrable function and almost every point, the averages over a family of sets shrinking nicely to the point converge to the value of the function ([[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]], [[thm-differentiation-along-families-shrinking-nicely]]); the dyadic subcubes of $Q_0$ containing a point of $Q_0$ contain cubes of arbitrarily small side length, and such a cube $R$ satisfies $R\subseteq B(x,\sqrt n\,\ell(R))$, so the family shrinks nicely.

## Proof

**Proof technique:** direct.

1.1 Since $\alpha_{k+1}>\alpha_k$, every dyadic subcube counted in step [F1] at level $\alpha_{k+1}$ has average exceeding $\alpha_k$ as well, so it is contained in a maximal subcube at level $\alpha_k$; hence $U_{k+1}\subseteq U_k$. For a maximal level-$\alpha_k$ cube $R$, the set $S:=R\cap U_{k+1}$ is contained in $R$ and measurable, and $\alpha_{k+1}|S|\le\int_Sw\,d\lambda\le\int_Rw\,d\lambda\le2^n\alpha_k|R|$ by [F1]; since $\alpha_{k+1}=2^n\alpha^{-1}\alpha_k$, this gives $|S|\le\alpha|R|$. Summing over the pairwise disjoint maximal level-$\alpha_k$ cubes gives $|U_{k+1}|\le\alpha|U_k|$, and iterating with $U_0\subseteq Q_0$ gives $|U_k|\le\alpha^k|Q_0|$. [F1, F2, given, algebra]

2.1 With the same set $S=R\cap U_{k+1}$ of step 1.1 we have $|S|\le\alpha|R|$, so the density-to-mass estimate [F3] applies: $w(S)\le\beta w(R)$ with $\beta=1-(1-\alpha)^p/K_p$. Summing over the pairwise disjoint maximal level-$\alpha_k$ cubes, whose union is $U_k$, gives $w(U_{k+1})\le\beta w(U_k)$; iterating with $U_0\subseteq Q_0$ gives $w(U_k)\le\beta^kw(Q_0)$. [F2, F3, step 1.1, given, algebra]

2.2 Almost everywhere bound. Fix $x\in Q_0\setminus U_k$ outside the null sets of [F4] and outside the null set on which the union of the maximal subcubes differs from $\{M_{d,Q_0}w>\alpha_k\}$. Then no dyadic subcube $R\subseteq Q_0$ containing $x$ has $\langle w\rangle_R>\alpha_k$, for such an $R$ would lie in a maximal subcube counted at level $\alpha_k$ and hence in $U_k$. The dyadic subcubes of $Q_0$ containing $x$ shrink nicely to $x$ by [F4], so their averages of $w$ converge to $w(x)$; since every such average is at most $\alpha_k$, the limit satisfies $w(x)\le\alpha_k$. Thus $w\le\alpha_k$ almost everywhere on $Q_0\setminus U_k$. [F1, F4, step 1.1, given, algebra]

3.1 Steps 1.1, 2.1 and 2.2 are exactly the assertions of the Statement, namely nesting and the two chains of measure bounds together with the almost everywhere bound. [step 1.1, step 2.1, step 2.2] ∎
