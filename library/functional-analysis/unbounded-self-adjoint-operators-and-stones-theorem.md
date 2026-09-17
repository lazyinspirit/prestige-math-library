---
page: unbounded-self-adjoint-operators-and-stones-theorem
title: Unbounded Self Adjoint Operators and Stones Theorem
status: draft
items: [def-unbounded-linear-operator-domain-and-graph, def-densely-defined-closed-and-closable-operator, thm-closure-of-a-closable-operator, def-adjoint-of-a-densely-defined-unbounded-operator, lem-unbounded-adjoint-is-well-defined-and-closed, thm-closable-iff-adjoint-domain-is-dense, def-symmetric-self-adjoint-and-essentially-self-adjoint, cex-symmetric-need-not-be-self-adjoint, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, thm-self-adjoint-resolvent-estimate, thm-self-adjointness-range-criterion, def-cayley-transform-of-a-self-adjoint-operator, thm-cayley-correspondence, def-unbounded-integral-against-a-pvm, lem-unbounded-pvm-integral-is-well-defined-and-closed, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, def-strongly-continuous-one-parameter-unitary-group, def-infinitesimal-generator-of-a-unitary-group, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, lem-laplace-resolvents-of-a-unitary-group, lem-generator-of-a-unitary-group-is-skew-adjoint, thm-stone-one-parameter-unitary-groups, def-deficiency-subspaces-and-deficiency-indices, thm-von-neumann-self-adjoint-extension-parameterization, cor-self-adjoint-extension-exists-iff-deficiency-indices-agree, def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces, thm-canonical-spectral-type-decomposition, def-relative-boundedness-with-respect-to-an-operator, lem-second-resolvent-identity-for-closed-operator-perturbations, thm-kato-rellich, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, thm-weyl-criterion-for-essential-spectrum, def-relative-compactness-with-respect-to-an-operator, thm-weyl-essential-spectrum-invariance, def-norm-and-strong-resolvent-convergence, lem-resolvent-star-algebra-is-dense-in-c-zero, thm-continuous-functional-calculus-under-resolvent-convergence, cor-unitary-groups-converge-under-strong-resolvent-convergence, lem-spectral-form-domain-and-core-of-a-semibounded-operator, thm-min-max-principle-below-essential-spectrum]
examples: []
---

This page extends the bounded PVM calculus of the preceding pair to unbounded
self-adjoint operators and ends with Stone's theorem and the min-max principle.
It fixes at the outset that a linear operator carries its domain as part of its
data, that $S\subseteq T$ means containment of graphs, and that closedness is
closedness of the graph in $H\oplus H$; the graph norm makes closedness a
completeness statement. The adjoint is defined only for densely defined
operators, by representability of $x\mapsto\langle Tx,y\rangle$ through Hilbert
space Riesz representation, and is proved closed with
$\operatorname{ran}(T-z)^\perp=\ker(T^*-z^*)$; a graph rotation identifies
closability with density of $D(T^*)$ and yields $\overline T=T^{**}$. Symmetric,
self-adjoint and essentially self-adjoint operators are then defined by
$T\subseteq T^*$, $T=T^*$ and self-adjointness of $\overline T$, and the minimal
derivative $-i\,d/dx$ with vanishing endpoint conditions is proved closed and
symmetric but not self-adjoint, with the periodic operator in between.

The resolvent $R_T(z)=(z-T)^{-1}$ is used in the library's sign convention. For
self-adjoint $T$ the identity
$\|(T-z)x\|^2=\|(T-a)x\|^2+b^2\|x\|^2$ off the real axis gives
$\mathbb C\setminus\mathbb R\subseteq\rho(T)$ with
$\|R_T(z)\|\le1/|\operatorname{Im}z|$, and the resulting range criterion
characterises self-adjointness by $\operatorname{ran}(T\pm i)=H$. The Cayley
transform $C_T=(T-i)(T+i)^{-1}$ is unitary with $\ker(I-C_T)=\{0\}$ and is
proved to be a bijection from self-adjoint operators onto such unitaries, the
inverse recovering $T$ from $\operatorname{ran}(I-U)$. The unbounded PVM
integral $f(E)$ has domain $\{x:\int|f|^2\,dE_x<\infty\}$ and is closed, with
adjoint $\overline f(E)$; the spectral theorem is proved by transporting the
bounded normal spectral theorem along
$\lambda\mapsto(\lambda-i)(\lambda+i)^{-1}$, and completeness of the calculus
is recorded as the product, sum and spectral-mapping rules on the correct
domains.

Stone's theorem is proved in both directions: a self-adjoint $T$ generates
$U(t)=e^{itT}$ by the Borel calculus, with derivative domain exactly $D(T)$,
while the generator of a strongly continuous unitary group is reconstructed
from the Laplace resolvents $\int_0^\infty e^{-\lambda t}U(\pm t)x\,dt$, proved
to be bounded inverses of $\lambda\mp G$; the generator is closed, symmetric
and skew-adjoint, and a group is determined by its generator, so
$T\mapsto e^{itT}$ is a bijection. The deficiency subspaces
$K_\pm=\ker(T^*\mp i)$ and the von Neumann parameterization of self-adjoint
extensions by unitaries $K_+\to K_-$ are proved, with the explicit domain
$D(T)\oplus\{u+Vu\}$ and action, and equal deficiency indices are equivalent to
existence of a self-adjoint extension. The page closes with the canonical
decomposition $H=H_{\mathrm{pp}}\oplus H_{\mathrm{ac}}\oplus H_{\mathrm{sc}}$
by spectral type, with relative boundedness, the second resolvent identity,
the Kato-Rellich theorem, the discrete and essential spectrum with the Weyl
criterion and Weyl's invariance theorem, norm and strong resolvent convergence
with the continuous calculus and unitary-group corollary, and the form domain
and min-max principle below the essential spectrum.
