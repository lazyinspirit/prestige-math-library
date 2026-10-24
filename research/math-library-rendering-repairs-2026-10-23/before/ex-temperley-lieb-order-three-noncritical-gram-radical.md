---
id: ex-temperley-lieb-order-three-noncritical-gram-radical
kind: example
title: "An order-three noncritical link-state form with a one-dimensional radical"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-temperley-lieb-complex-critical-labels-and-reflection
  - def-temperley-lieb-link-state-standard-modules
  - lem-temperley-lieb-link-state-gram-form-is-invariant
  - lem-temperley-lieb-link-state-gram-determinant
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§3, link-state form, and §4, Theorem 4.7, PDF pp. 14 and 20: overlay form and determinant."
    - title: "Frederick M. Goodman and Hans Wenzl, The Temperley-Lieb Algebra at Roots of Unity"
      url: "https://msp.org/pjm/1993/161-2/pjm-v161-n2-p05-s.pdf"
      locator: "§§2–4, printed pp. 309–323: root-of-unity label conventions; order three is checked directly here."
---

## Example

Take $q=e^{\pi i/3}$, so $\delta=1$ and $\kappa=\operatorname{ord}(q^2)=3$. At rank $n=4$ with $p=2$ arcs and $t=0$ defects, the link-state Gram matrix has a one-dimensional radical even though this label is noncritical.

## Diagram

The sites are labeled from left to right. In each half-diagram, an arc joins its two labeled sites; the left panel is $x=(12)(34)$ and the right panel is $y=(14)(23)$. These are the two noncrossing perfect matchings on four sites; the picture records their basis labels, while the Gram entries below are computed from the overlay loop count.

~~~tikz
\begin{tikzpicture}[scale=0.9]
  \foreach \x in {0,1,2,3} { \fill (\x,0) circle (1.5pt); }
  \node[below] at (0,-0.05) {$1$};
  \node[below] at (1,-0.05) {$2$};
  \node[below] at (2,-0.05) {$3$};
  \node[below] at (3,-0.05) {$4$};
  \draw (0,0) .. controls (0,0.7) and (1,0.7) .. (1,0);
  \draw (2,0) .. controls (2,0.7) and (3,0.7) .. (3,0);
  \node at (1.5,1.0) {$x=(12)(34)$};

  \foreach \x in {5,6,7,8} { \fill (\x,0) circle (1.5pt); }
  \node[below] at (5,-0.05) {$1$};
  \node[below] at (6,-0.05) {$2$};
  \node[below] at (7,-0.05) {$3$};
  \node[below] at (8,-0.05) {$4$};
  \draw (5,0) .. controls (5,1.45) and (8,1.45) .. (8,0);
  \draw (6,0) .. controls (6,0.7) and (7,0.7) .. (7,0);
  \node at (6.5,1.7) {$y=(14)(23)$};
\end{tikzpicture}
~~~

## Facts & Assumptions

**Given:** $q=e^{\pi i/3}$, $n=4$, $p=2$, and the link-state capping form.

[F1] The standard-module basis is the set of noncrossing partial matchings with the indicated number of arcs and defects ([[def-temperley-lieb-link-state-standard-modules]]).

[F2] The form value on two basis states is $\delta^c$ when all defect paths propagate, with $c$ the number of overlay loops ([[lem-temperley-lieb-link-state-gram-form-is-invariant]]).

[F3] The Gram determinant is the product of quantum-integer ratios with polynomial continuation at removable zero-over-zero factors ([[lem-temperley-lieb-link-state-gram-determinant]]).

[F4] A label is critical exactly when $\kappa<\infty$ and $\kappa\mid(t+1)$ ([[def-temperley-lieb-complex-critical-labels-and-reflection]]).

## Verification

**Given:** $\delta=1$, $\kappa=3$, and the two perfect matchings $x,y$ shown above.

1.1 There are exactly two noncrossing perfect matchings on four ordered sites: $x=(12)(34)$ and $y=(14)(23)$. Overlaying either matching with itself gives two loops and hence Gram value $\delta^2=1$; overlaying $x$ with $y$ gives one loop and hence Gram value $\delta=1$. Thus the matrix in the ordered basis $(x,y)$ is $G_{4,2}=\begin{pmatrix}1&1\\1&1\end{pmatrix}.$ [F1, F2, given, construct]

2.1 A vector $a x+b y$ is orthogonal to both $x$ and $y$ exactly when $a+b=0$, by the two equal rows of $G_{4,2}$. Therefore $\operatorname{rad}\phi_{4,0}=\mathbb C(x-y)$, a one-dimensional subspace. [step 1.1, algebra]

3.1 Here $t=n-2p=0$, so $t+1=1$ is not divisible by $\kappa=3$; the label is noncritical by [F4]. The determinant formula [F3] gives $\det G_{4,2}=\left(\frac{[2]}{[1]}\right)^3\left(\frac{[3]}{[2]}\right)=0,$ because $[1]=[2]=1$ and $[3]=0$ at $q=e^{\pi i/3}$. This agrees with the explicitly computed radical. [F3, F4, given, step 1.1, algebra] ∎
