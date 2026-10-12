---
id: def-sobolev-space-wkp-and-its-norm
kind: definition
title: Integer-order Sobolev spaces and their norms
status: published
origin: pipeline
deps: [def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivative-is-independent-of-lp-representatives, lem-weak-derivatives-are-unique-almost-everywhere, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-complex-holder-minkowski-and-the-quotient-norm, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 1 §1.2
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Definition 1.8 and norm/local-space conventions, printed pp. 4–5
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Definition 3.23, §3.5, printed pp. 58–59
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.2, Definition 1.8 and the
  accompanying norm and local-space conventions, printed pp. 4–5. The source
  gives the finite-$p$ sum, the $p=\infty$ sum and its equivalent maximum, and
  the convention $D^0u=u$. Its printed description of $U\Subset\Omega$ says
  that $U$ is compactly contained; this item uses the standard explicit form
  that $U$ is open and $\overline U$ is compact in $\Omega$.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3,
  §§3.1–3.5, for the Sobolev-space conventions recorded in PDE-11.

## Definition

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open with
$n\ge1$, $k\in\mathbb N_0$, $1\le p\le\infty$, and
$\mathbb K\in\{\mathbb R,\mathbb C\}$. Write
$$\mathcal A_k=\{\alpha\in\mathbb N_0^n:|\alpha|\le k\}.$$
This is a finite nonempty set: every coordinate of such an $\alpha$ lies in
$\{0,\ldots,k\}$, and it contains the zero multi-index.

The real and complex $L^p$ classes use the conventions in
[[def-l-p-space-as-a-quotient-by-null-functions]] and
[[def-complex-lp-and-euclidean-test-function-conventions]]. Their quotient
norm values are supplied by
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]
for real scalars and
[[thm-complex-holder-minkowski-and-the-quotient-norm]] for complex scalars.

Define $W^{k,p}(\Omega;\mathbb K)$ to be the set of classes
$u\in L^p(\Omega;\mathbb K)$ such that, for every $\alpha\in\mathcal A_k$,
there is an $L^p(\Omega;\mathbb K)$ class with a locally integrable
representative $v_\alpha$ satisfying
$$\int_\Omega u\,D^\alpha\varphi\,dx =(-1)^{|\alpha|}\int_\Omega v_\alpha\varphi\,dx \qquad\text{for every }\varphi\in C_c^\infty(\Omega).$$
Here the weak derivative is the one in
[[def-weak-derivative-of-a-locally-integrable-function]]. Under
[[def-countable-choice]], local integrability of $L^p$ representatives and
invariance under null-set changes follow from
[[lem-weak-derivative-is-independent-of-lp-representatives]], while
[[lem-weak-derivatives-are-unique-almost-everywhere]] gives uniqueness of each
locally integrable derivative class. Thus this condition is a condition on the
$L^p$ class $u$, and each resulting derivative determines one $L^p$ class,
denoted $D^\alpha u$. The test pairing is bilinear, without conjugation.

For the zero multi-index, set $D^0u=u$. Since $\mathcal A_0=\{0\}$,
$$W^{0,p}(\Omega;\mathbb K)=L^p(\Omega;\mathbb K).$$
The Sobolev norm expression is
$$\|u\|_{W^{k,p}(\Omega)}= \begin{cases} \left(\displaystyle\sum_{\alpha\in\mathcal A_k} \|D^\alpha u\|_{L^p(\Omega)}^p\right)^{1/p},&1\le p<\infty,\\[1ex] \displaystyle\max_{\alpha\in\mathcal A_k} \|D^\alpha u\|_{L^\infty(\Omega)},&p=\infty. \end{cases}$$
The formula is finite because each derivative class belongs to $L^p$ and
$\mathcal A_k$ is finite; at $k=0$ it reduces to the $L^p$ norm expression.
The finite maximum is defined because $\mathcal A_k$ is nonempty. The norm
axioms for this expression are a separate assertion from this definition.

For open $U\subseteq\Omega$ with $\overline U$ compact and contained in
$\Omega$, the notation $W^{k,p}_{\mathrm{loc}}(\Omega;\mathbb K)$ means that
the restriction of the class belongs to $W^{k,p}(U;\mathbb K)$ for every such
$U$.

If $\Omega=\varnothing$, the $L^p$ space and every $W^{k,p}$ space contain
only the zero class, and the displayed norm expression is zero.
