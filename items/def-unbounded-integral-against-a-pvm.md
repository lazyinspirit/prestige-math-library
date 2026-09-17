---
id: def-unbounded-integral-against-a-pvm
kind: definition
title: "Integral of a Borel function against a projection-valued measure"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-projection-valued-measure, thm-pvm-integral-is-a-star-homomorphism, def-unbounded-linear-operator-domain-and-graph, def-countable-choice, lem-scalar-and-complex-measures-from-a-pvm, thm-bounded-borel-pvm-integral]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 3.1, (3.26)-(3.30), pp.103-104"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Theorem 6.38 (functional calculus), Sec. 6.4"
---

## Definition

Assume Countable Choice. Let $E$ be a projection valued measure on the
measurable space $(X,\Sigma)$ acting on the complex Hilbert space $H$
([[def-projection-valued-measure]]), and let $f:X\to\mathbb C$ be a Borel
function. Put
$$D(f(E)):=\Bigl\{x\in H:\int_X|f|^2\,dE_x<\infty\Bigr\},\qquad E_x(B)=\langle E(B)x,x\rangle,$$
where the scalar measures $E_x$ are those of
[[lem-scalar-and-complex-measures-from-a-pvm]], and for $x\in D(f(E))$ set
$$f(E)x:=\lim_{n\to\infty}\Phi_E\bigl(f\,\mathbf 1_{\{|f|\le n\}}\bigr)x,$$
the bounded integrals $\Phi_E$ being those of [[thm-bounded-borel-pvm-integral]]
and the limit being taken in the norm of $H$.

**Well-definedness.** $D(f(E))$ is a linear subspace: the estimate
$E_{x+y}\le2E_x+2E_y$ for scalar measures and $E_{\alpha x}=|\alpha|^2E_x$
follow from $\|E(B)(x+y)\|^2\le2\|E(B)x\|^2+2\|E(B)y\|^2$ and
$\|E(B)\alpha x\|^2=|\alpha|^2\|E(B)x\|^2$. Writing $f_n:=f\mathbf 1_{\{|f|\le n\}}$
one has $\int|f_n-f_m|^2\,dE_x\to0$ for $x\in D(f(E))$ by dominated convergence
on the finite measure $E_x$, since $|f_n-f_m|^2\le4|f|^2$ and the truncations
converge pointwise to $f$; the isometry clause
$\|\Phi_E(f_n)x-\Phi_E(f_m)x\|^2=\int|f_n-f_m|^2dE_x$ of the bounded calculus
shows that $(\Phi_E(f_n)x)$ is Cauchy in $H$, so the displayed limit exists and
is unique; the limit is linear in $x$ because each $\Phi_E(f_n)$ is. Finally a
Borel function that vanishes $E$-almost everywhere, meaning off a set $N$ with
$E(N)=0$, satisfies $E_x(N)=\|E(N)x\|^2=0$ for every $x$, so it changes neither
$D(f(E))$ nor the truncations up to $E_x$-null sets, and the domain and the
values of $f(E)$ therefore depend only on the class of $f$ modulo $E$-null
sets.
