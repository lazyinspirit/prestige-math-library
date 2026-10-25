---
page: constrained-variational-problems-and-variational-inequalities-examples
title: "Constrained Variational Problems and Variational Inequalities — Examples"
status: published
items: []
examples: ["ex-rayleigh-quotient-on-an-interval", "ex-isoperimetric-integral-constraint-and-its-multiplier", "cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space", "ex-one-dimensional-obstacle-problem-and-contact-set", "cex-obstacle-complementarity-product-needs-extra-regularity", "cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible", "cex-dependent-equality-constraints-have-nonunique-multiplier-vectors", "ex-one-dimensional-obstacle-reaction-is-supported-on-the-contact-set"]
---

These companions compute the page's two constraint mechanisms on explicit
problems and show by witness that each hypothesis is load-bearing.

On the equality-constraint side, the isoperimetric problem on an interval
minimises the Dirichlet energy subject to a prescribed integral: the minimiser
is the parabola $6Ax(1-x)$ and its Lagrange multiplier is the constant
$24A$, computed from a complete weak integration-by-parts argument. The
finite-dimensional counterexample with the dependent constraints $G_1=x$ and
$G_2=2x$ shows that without independence of the constraint gradients the
stationarity equation is satisfied by a whole line of multiplier vectors, so
the uniqueness clause of the multiplier lemma genuinely needs surjectivity.

On the convex-constraint side, the one-dimensional obstacle problem with the
parabolic obstacle $\psi(x)=\varepsilon-\tfrac12x^2$ is solved in closed form:
the contact set is the interval $[-t,t]$ with
$t=1-\sqrt{1-2\varepsilon}$, the solution is the parabola on the contact set
and the linear function $t(1-|x|)$ off it, and the reaction is the density
$\mathbf 1_{[-t,t]}$ of mass $2t$, carried by the contact set and with no atom
at the free boundary. Two counterexamples surround it: the admissible set can
be empty when the trace of the obstacle is incompatible with zero boundary
values, and the complementarity product $u\cdot\mu$ is not well defined for an
$H^1$ class alone, because the value of $\log\log(1/|x|)$ at a point charged
by a Dirac measure depends on the chosen representative.

Finally, the interval computation makes the constrained eigenvalue problem
explicit: on $(0,1)$ the energy minimiser on the $L^2$-unit sphere is
$\sqrt2\sin(\pi x)$, the minimum is $\pi^2$, and the weak eigenvalue equation
$-u''=\pi^2u$ holds with zero boundary values. The infinite-dimensional
counterexample that the unit sphere of a Hilbert space is not weakly
sequentially closed explains why the norm constraint in these minimisations is
recovered in the limit from strong $L^2$ compactness rather than from weak
closedness of the sphere. Choice principles are inherited from the main page's
suppliers and declared per item. The explicit Rayleigh computation uses only
Countable Choice through the sharp interval inequality. The integral-constraint
and obstacle computations inherit AC from the trace and representative
interfaces; AC also supplies the Countable and Dependent Choice required by
integration by parts. The sphere and Sobolev-product counterexamples assume
AC through their orthonormal-family and ACL suppliers, respectively, while
the dependent-constraint calculation uses no choice principle.
