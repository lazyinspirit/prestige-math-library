---
id: lem-maximal-dyadic-subcubes-of-a-cube-at-a-height
kind: lemma
title: Maximal dyadic subcubes of a cube at a height
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-dyadic-cube-in-rn-all-generations, lem-dyadic-cubes-all-generations-partition-and-nesting, lem-maximal-dyadic-cubes-at-height-lambda, thm-lebesgue-measure-under-dilations-and-reflections, thm-linear-change-of-variables-for-lebesgue-measure, thm-lebesgue-measure-of-a-box-of-every-kind, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, prop-measure-monotonicity, def-countable-choice, thm-rational-points-and-boxes-in-rn, lem-subset-of-countable]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§7.2.1, the Calderón-Zygmund selection of dyadic subcubes of a fixed cube $Q$ at the heights $\\alpha_k$ (properties (1)-(3) of the selected family $\\{Q_{k,j}\\}_j$), printed pp. 514-515"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "ch. 1 §§1.1-1.2, dyadic subcubes of a cube and the stopping-time selection, printed pp. 1-13"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$,
let $Q_0$ be an axis-parallel cube with side length $\ell>0$ and centre $x_0$,
and let
$$\Phi(y):=x_0+\ell\Bigl(y-\tfrac12(1,\dots,1)\Bigr)$$
be the unique translation-dilation carrying $(0,1]^n$ onto the half-open box
$R_0$ with the same centre and side length as $Q_0$; $R_0$ and $Q_0$ differ by a
Lebesgue-null set. **The dyadic subcubes of $Q_0$** are the images $\Phi(D)$ of
the dyadic cubes $D\subseteq(0,1]^n$ of the all-generations grid
([[def-dyadic-cube-in-rn-all-generations]]).

When forming averages over half-open descendants, extend functions on $Q_0$ by zero on $R_0\setminus Q_0$; all such boundary changes are null. Here a dyadic subcube of $Q_0$ means a descendant of $R_0$, rather than literal inclusion in the open cube.

Let $f\ge0$ satisfy $f\in L^1(Q_0)$, and let $\alpha\ge\langle
f\rangle_{Q_0}$ with $\alpha>0$. Then the dyadic subcubes $R\subseteq Q_0$ with
$\langle f\rangle_R>\alpha$ that are maximal under inclusion are pairwise
disjoint and at most countable, their union equals
$$\{M_{d,Q_0}f>\alpha\}=\Bigl\{x\in R_0:\sup_{R\ni x}\langle f\rangle_R>\alpha\Bigr\}$$
up to a Lebesgue-null set, where the supremum is over the dyadic subcubes of
$Q_0$ containing $x$ and $R_0$ is the half-open box above; since $Q_0\setminus
R_0$ is Lebesgue null, this is the same as the corresponding set with $Q_0$ in
place of $R_0$, up to a null set. Each such maximal $R$ satisfies $\langle
f\rangle_R\le2^n\alpha$; and $\sum_R|R|\le\alpha^{-1}\int_{Q_0}f\,d\lambda$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, the cube $Q_0$ and its dyadic subcubes via $\Phi$, a nonnegative $f\in L^1(Q_0)$, and $\alpha\ge\langle f\rangle_{Q_0}$ and $\alpha>0$.

[F1] For dyadic cubes $D,D'$ of generations $k\le k'$ with $D\cap D'\ne\emptyset$ one has $D'\subseteq D$; every dyadic cube of generation $k$ has a unique parent of generation $k-1$ containing it, of volume $2^n$ times its own; and two dyadic cubes are disjoint or one contains the other ([[lem-dyadic-cubes-all-generations-partition-and-nesting]], [[def-dyadic-cube-in-rn-all-generations]]).

[F2] A generation-$k$ dyadic cube $D\subseteq(0,1]^n$ has centre $c_D$ and side $2^{-k}$. Its image $\Phi(D)$ is the half-open box with centre $\Phi(c_D)$ and side $2^{-k}\ell$, hence $|\Phi(D)|=\ell^n|D|$ by [[thm-lebesgue-measure-of-a-box-of-every-kind]]. The map $\Phi$ is bijective, so it preserves inclusion and disjointness; the images of the generation-$k$ descendants partition $R_0$ for each $k\ge0$.

[F3] The set of all dyadic cubes is at most countable: the parameters $(k,m)$ inject into $\mathbb Q^{n+1}$, which is at most countable ([[thm-rational-points-and-boxes-in-rn]], [[lem-subset-of-countable]]).

[F4] For nonnegative measurable functions and measurable sets, integrals are monotone in the set ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[prop-measure-monotonicity]]) and finite on $Q_0$ by the hypothesis $f\in L^1(Q_0)$.

## Proof

**Proof technique:** direct.

1.1 Call a dyadic subcube $R$ of $Q_0$ **bad** when $\langle f\rangle_R>\alpha$. Every bad $R$ satisfies $\alpha|R|<\int_Rf\,d\lambda\le\int_{Q_0}f\,d\lambda<\infty$ by [F4], so $|R|<\alpha^{-1}\int_{Q_0}f$; since the ancestors of a subcube have volumes $\ell^n2^{-kn}$ growing by the factor $2^n$ from generation to generation, only finitely many ancestors of a given bad cube can be bad. The top cube $Q_0$ is not bad because $\alpha\ge\langle f\rangle_{Q_0}$, and its subcube family is identified with the all-generations dyadic cubes inside $(0,1]^n$, so the ancestors of any bad subcube that lie inside $(0,1]^n$ form a finite chain starting at the bad cube; a maximal bad subcube containing it is therefore obtained by taking the last bad member of that chain. [F1, F2, F4, given, algebra]

2.1 The maximal bad subcubes are pairwise disjoint: if two of them meet, [F1] and injectivity of $\Phi$ make one contain the other, and maximality forces equality. They are at most countable because they are images under the fixed map $\Phi$ of a subfamily of the at most countable dyadic grid [F3]. [F1, F2, F3, step 1.1]

3.1 The union of the maximal bad subcubes is exactly $\{M_{d,Q_0}f>\alpha\}$: if $x$ lies in a maximal bad $R$, then $M_{d,Q_0}f(x)\ge\langle f\rangle_R>\alpha$; conversely, if $M_{d,Q_0}f(x)>\alpha$ then some dyadic subcube $R\ni x$ is bad, and step 1.1 contains it in a maximal bad subcube $R'$, which also contains $x$ since $R\cap R'\ne\emptyset$ and dyadic subcubes are nested [F1]. This is an equality of sets, hence a fortiori equality up to a null set. [F1, step 1.1, step 2.1]

4.1 For a maximal bad subcube $R$: if $R\ne Q_0$ its parent $P=\Phi(D')$ exists with $\Phi^{-1}(R)\subsetneq D'\subseteq(0,1]^n$ and $|P|=2^n|R|$ by [F1] and [F2]; maximality makes $P$ good, so $\int_Rf\le\int_Pf\le\alpha|P|=2^n\alpha|R|$ by [F4], and hence $\langle f\rangle_R\le2^n\alpha$. If $R=Q_0$ then $\langle f\rangle_{Q_0}\le\alpha\le2^n\alpha$ as well. Finally, pairwise disjointness gives $\sum_R|R|=\bigl|\bigcup_RR\bigr|\le\bigl|\{M_{d,Q_0}f>\alpha\}\bigr|$, and on each bad $R$ one has $\alpha|R|<\int_Rf$, so summing over the at most countable disjoint family and using $f\ge0$ yields $\sum_R|R|\le\alpha^{-1}\sum_R\int_Rf\le\alpha^{-1}\int_{Q_0}f$. [F1, F2, F4, step 3.1, algebra] ∎
