---
id: def-unbounded-integral-against-a-pvm
kind: definition
title: "Integral of a measurable function against a projection-valued measure"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-projection-valued-measure, thm-pvm-integral-is-a-star-homomorphism, def-unbounded-linear-operator-domain-and-graph, def-countable-choice, lem-scalar-and-complex-measures-from-a-pvm, thm-bounded-borel-pvm-integral, thm-dominated-convergence, def-hilbert-space]
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
([[def-projection-valued-measure]]), and let $f:X\to\mathbb C$ be
$\Sigma$-measurable. Put
$$D(f(E)):=\Bigl\{x\in H:\int_X|f|^2\,dE_x<\infty\Bigr\},\qquad E_x(B)=\langle E(B)x,x\rangle,$$
where the scalar measures $E_x$ are those of
[[lem-scalar-and-complex-measures-from-a-pvm]], and for $x\in D(f(E))$ set
$$f(E)x:=\lim_{n\to\infty}\Phi_E\bigl(f\,\mathbf 1_{\{|f|\le n\}}\bigr)x,$$
For $H\ne\{0\}$, the bounded integrals $\Phi_E$ are those of
[[thm-bounded-borel-pvm-integral]], and the limit is taken in the norm of $H$.
For $H=\{0\}$, define $\Phi_E(g)$ to be the unique operator on $H$ for every bounded measurable $g$. Then $E_0$ is the zero measure, $D(f(E))=H$, and $f(E)0=0$. Thus this case is defined directly without applying a theorem requiring a nonzero space.

**Well-definedness.** $D(f(E))$ is a linear subspace: the estimate
$E_{x+y}\le2E_x+2E_y$ for scalar measures and $E_{\alpha x}=|\alpha|^2E_x$
follow from $\|E(B)(x+y)\|^2\le2\|E(B)x\|^2+2\|E(B)y\|^2$ and
$\|E(B)\alpha x\|^2=|\alpha|^2\|E(B)x\|^2$. Writing $f_n:=f\mathbf 1_{\{|f|\le n\}}$
the sets $\{|f|\le n\}$ are measurable, so $f_n$ is bounded and measurable.
For $m,n\ge N$,
$$|f_n-f_m|^2\le |f|^2\mathbf1_{\{|f|>N\}}.$$
The integral of the right side against $E_x$ tends to zero by
[[thm-dominated-convergence]], with the integrable majorant $|f|^2$ and
pointwise limit zero since $f$ is finite-valued. Linearity of the bounded
calculus ([[thm-pvm-integral-is-a-star-homomorphism]]) and its quadratic identity give
$$\|\Phi_E(f_n)x-\Phi_E(f_m)x\|^2=\int|f_n-f_m|^2\,dE_x.$$
These clauses hold directly on the zero space as well. Hence the truncation
vectors are Cauchy and converge uniquely by Hilbert-space completeness
([[def-hilbert-space]]). The limit is linear in $x$ because every truncation
operator is linear and addition and scalar multiplication are norm-continuous.
Countable Choice is inherited from the bounded PVM suppliers; no further
choice is needed to take these specified limits.

Finally, if two $\Sigma$-measurable functions $f,g$ agree outside a measurable
set $N$ with $E(N)=0$, then $E_x(N)=\|E(N)x\|^2=0$ for every $x$. Thus the
integrals of $|f|^2$ and $|g|^2$ agree, so their domains agree. At every
truncation level their bounded truncations agree outside $N$; the quadratic
identity applied to the difference gives equal truncation vectors for every
$x$. Taking limits gives $f(E)x=g(E)x$ on their common domain.
