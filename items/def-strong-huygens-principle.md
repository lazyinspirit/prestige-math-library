---
id: def-strong-huygens-principle
kind: definition
title: "The strong Huygens principle in the homogeneous Cauchy setting"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-countable-choice, cor-energy-uniqueness-for-the-wave-cauchy-problem, def-wave-equation-cauchy-data-and-wave-speed, def-spherical-mean-of-space-dependent-data, thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, thm-finite-propagation-speed-for-the-wave-equation, lem-smooth-bump-between-concentric-euclidean-balls, lem-wave-formulas-attain-the-cauchy-data, thm-dalembert-formula, thm-odd-dimensional-wave-formula-by-spherical-means, thm-even-dimensional-wave-formula-by-descent]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1, printed pp. 281-289, remarks (c) and (e): dependence on data with $|x-y|\\le ct$ in all dimensions; for odd $n\\ge3$ no dependence on data with $|x-y|<ct$"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed p. 172: the informal shorthand 'depends only on the values of the initial data on $\\partial B_t(x)$' whose precise reading is fixed here"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #12: Kirchhoff's Formula and Minkowskian Geometry (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/940561a138578640826f762b5a57bcad_MIT18_152F11_lec_12.pdf"
      locator: "Remark 1.0.1: the sharp Huygens principle in odd dimensions $n\\ge3$ and its failure for $n=1$ and even $n$"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$
and $c>0$, and fix the homogeneous Cauchy setting of this page. **Admissible
data** for dimension $n$ is a pair $(u_0,u_1)$ in the regularity class of the
dimension-$n$ representation formula of the preceding pair
`wave-equation-representation-formulas` ([[def-wave-equation-cauchy-data-and-wave-speed]],
[[def-spherical-mean-of-space-dependent-data]]), and **the solution** is the
$C^2$ solution on $\mathbb R^n\times(0,\infty)$ defined by that formula and
attaining the data at $t=0$ ([[lem-wave-formulas-attain-the-cauchy-data]] for $n\ge2$ and [[thm-dalembert-formula]] for $n=1$); in a class closed under differences with sharp energy conservation it is the unique such
solution by [[cor-energy-uniqueness-for-the-wave-cauchy-problem]].

Fix $x_0\in\mathbb R^n$, $t_0>0$ and put

$$S:=\partial B_{ct_0}(x_0)=\{y\in\mathbb R^n:|y-x_0|=ct_0\}.$$

The homogeneous Cauchy problem with speed $c$ satisfies the **strong Huygens
principle** in dimension $n$ when, for every $(x_0,t_0)$ and every admissible
data pair $(u_0,u_1)$, the value $u(x_0,t_0)$ is unchanged when $(u_0,u_1)$ is
replaced by an admissible pair that agrees with $(u_0,u_1)$ on a
**neighbourhood of $S$**; equivalently, the data-to-value functional is carried
by the sphere $S$: admissible perturbations of the data that vanish on a
neighbourhood of $S$ do not change the value $u(x_0,t_0)$.

The following formulations are equivalent for these linear representation formulas, which have base-ball locality: data vanishing on a neighbourhood of the closed base ball contribute zero. To check equivalence, choose a smooth radial cutoff equal to one on the closed base ball and supported in a slightly larger ball ([[lem-smooth-bump-between-concentric-euclidean-balls]]). Multiplying a perturbation by this cutoff does not change its value in the formula, since the data and all derivatives read at radius $ct_0$ are unchanged; for the even formula this follows by writing its weighted ball integral on the fixed unit ball and differentiating the smooth data there. A compactly supported perturbation vanishing near $S$ splits into an interior part, supported compactly in $B_{ct_0}(x_0)$, and an exterior part, vanishing near the closed base ball; the split is smooth because the perturbation is zero on a collar of $S$. Thus (i) implies neighbourhood invariance, while the reverse follows because a closed support contained in the open base ball is compact and separated from $S$. Neighbourhood invariance implies (ii) by comparing with zero data; conversely (ii), applied to the cutoff perturbation whose compact support misses $S$, implies neighbourhood invariance. This proves the equivalence of (i), (ii) and (iii).

(i) **Strictly-inside form.** The value does not depend on the data at points
$y$ with $|y-x_0|<ct_0$: changes supported in the open base ball
$B_{ct_0}(x_0)$ do not affect $u(x_0,t_0)$.

(ii) **Shell form for compactly supported data.** If the data are supported in
the compact set $K$, then $u(x_0,t_0)=0$ whenever
$S\cap K=\varnothing$, that is, the value at $(x_0,t_0)$ is carried by the
$ct_0$-sphere shell of $K$; this is the classical sharp-Huygens picture.

(iii) **Germ form.** Data agreeing on a neighbourhood of $S$ give the same value. In odd dimensions, the finite radial jets that suffice are identified in [[thm-strong-huygens-principle-in-odd-spatial-dimensions]].

**Caution.** The value may involve finitely many transverse (radial)
derivatives of the data, so agreement of the bare restrictions to $S$ is not in
general enough. For $n=3$, $c=1$, the radial datum
$u_0(y)=(1-|y|)\psi(|y|)$ with $\psi$ smooth, $\psi\equiv1$ near $|y|=1$ and
$\psi\equiv0$ near $0$, and $u_1=0$ vanishes on $S=\partial B_1(0)$, yet
Kirchhoff's formula ([[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]])
gives $u(0,1)=u_0(1)+u_0'(1)=0-1=-1\ne0$; the data-to-value functional reads the first radial derivative of $u_0$ along $S$, as well as its values, and cannot be represented by integrating only the bare restriction. The precise positive statement is
[[thm-strong-huygens-principle-in-odd-spatial-dimensions]] and the failures are
[[thm-wave-tails-in-one-and-even-spatial-dimensions]]. This definition asserts
no existence or uniqueness beyond the classical class above, and it does not
imply that the principle holds; whether it holds is exactly the content of
those theorems.
