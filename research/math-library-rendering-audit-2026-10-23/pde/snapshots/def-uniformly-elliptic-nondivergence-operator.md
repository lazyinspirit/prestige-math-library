---
id: def-uniformly-elliptic-nondivergence-operator
kind: definition
title: Uniformly elliptic nondivergence-form operators and their frozen coefficients
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: direct
dependency_level: 1
deps: [def-holder-spaces-c-k-alpha-and-their-scaled-norms, def-ck-and-multi-index-notation-in-several-variables]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8, the standing assumptions on $L=A^{\\alpha\\beta}\\partial_{\\alpha\\beta}+b^\\alpha\\partial_\\alpha+c$ in nondivergence form, printed pp. 139-140 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§1, equation (1.3) and the uniform ellipticity condition $\\lambda|\\xi|^2\\le a^{ij}\\xi_i\\xi_j\\le\\Lambda|\\xi|^2$, printed pp. 3-4 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, equations (L) and (L') and the ellipticity condition (E)', printed p. 125 (read in full)"
---

## Definition

Let $n\ge1$ and let $\Omega\subseteq\mathbb R^n$ be open. A **second-order nondivergence-form operator** on $\Omega$ is an expression
$$Lu=a^{ij}\partial_i\partial_ju+b^i\partial_iu+cu,$$
with real-valued bounded measurable coefficients $a^{ij},b^i,c$ on $\Omega$ and summation over the repeated indices $i,j\in\{1,\dots,n\}$. In this operator notation, coordinates and coordinate partials are relabelled from [[def-ck-and-multi-index-notation-in-several-variables]]: coordinate $i$ and $\partial_i$ here mean coordinate $i-1$ and $\partial_{i-1}$ there, and likewise $\xi_i$ means component $i-1$ of $\xi$. Multi-index derivatives $D^\beta$ retain that dependency's zero-based canonical order. The expression acts on functions for which the displayed classical derivatives exist. The matrix field $A=(a^{ij})_{i,j=1}^{n}$ is the **principal coefficient matrix**, and $(b^i)$ and $c$ are the **lower-order coefficients**.

The operator is **uniformly elliptic** on $\Omega$ with constants $0<\lambda\le\Lambda<\infty$ when $A(x)$ is symmetric for almost every $x\in\Omega$ and
$$\lambda|\xi|^2\le a^{ij}(x)\xi_i\xi_j\le\Lambda|\xi|^2$$
for every $\xi\in\mathbb R^n$ and almost every $x\in\Omega$. The number $\Lambda/\lambda\ge1$ is the **ellipticity ratio**; uniform ellipticity is a condition on the pointwise spectrum of $A$.

For $x_0\in\Omega$ the **frozen operator** at $x_0$ is the constant-coefficient operator $L_{x_0}:=a^{ij}(x_0)\partial_i\partial_j$ built from the principal matrix at the single point $x_0$; when the coefficients are continuous at $x_0$ the frozen operator is to be regarded as the constant-coefficient model of $L$ near $x_0$. When the principal coefficients are of class $C^{0,\alpha}$ with respect to [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]] on a ball $B\subseteq\Omega$, one writes $[A]_{0,\alpha;B}\le K$ for the maximum over $i,j$ of the Hölder seminorms $[a^{ij}]_{0,\alpha;B}$, and when $\|b\|_\infty+\|c\|_\infty\le M$ on $B$ one says that the lower-order coefficients of $L$ are bounded by $M$ on $B$.

## Remarks

- **What is asserted.** The definition fixes the coefficient classes, the sign-free ellipticity condition, the frozen-coefficient notation and the quantitative coefficient bounds. It asserts **no** solvability of $Lu=f$, no weak or distributional formulation, no continuity, Hölder or VMO regularity of the coefficients beyond what is explicitly stated, and no symmetry of the lower-order coefficients. Every estimate or solvability statement on this page states its own hypotheses on the coefficient regularity and on the data.
- **Two regimes.** The Schauder theory on this page uses bounded principal coefficients with finite full-ball Hölder seminorm, quantitatively $[A]_{0,\alpha;B}\le K<\infty$ (membership in $C^{0,\alpha}(B)$ under the finite-norm convention). Local membership in $C^{0,\alpha}_{\mathrm{loc}}(B)$ alone does not imply this bound; the $W^{2,p}$ theory uses only the continuity of the principal coefficients on the closed ball. Both hypotheses appear separately in the statements below, and no estimate silently upgrades one to the other or to a VMO/measurable regime.
- **Frozen coefficients.** If $A$ is continuous at $x_0$, its almost-everywhere symmetry and ellipticity extend to $x_0$: choose points outside the common null exceptional set tending to $x_0$ and pass to the limit in the matrix identities and quadratic inequalities. Then $L_{x_0}$ has the same ellipticity constants. For merely measurable coefficients, the value at an exceptional point can be changed arbitrarily, so this conclusion is unavailable there. If $A$ is continuous at $x_0$ then $A(x)\to A(x_0)$ as $x\to x_0$, which is the small-scale input used to absorb the oscillation of $A(x)-A(x_0)$.
- **Scale-normalized bounds.** For a ball $B_R(x_0)$ and a coefficient matrix in $C^{0,\alpha}$, the dimensionless quantities appearing in the estimates of this page are $R^\alpha K$, $R\|b\|_\infty$, $R^{1+\alpha}[b]_{0,\alpha}$, $R^2\|c\|_\infty$ and $R^{2+\alpha}[c]_{0,\alpha}$; the powers are those of the scaling of the corresponding derivative orders. No choice principle is used in this definition.
