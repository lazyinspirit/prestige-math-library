---
page: spectral-measures-and-borel-functional-calculus
title: Spectral Measures and Borel Functional Calculus
status: published
items: [def-projection-valued-measure, lem-weak-and-strong-additivity-of-orthogonal-projections, lem-scalar-and-complex-measures-from-a-pvm, def-integral-of-a-simple-function-against-a-pvm, lem-simple-pvm-integral-is-representation-independent, thm-bounded-borel-pvm-integral, thm-pvm-integral-is-a-star-homomorphism, lem-continuous-functional-calculus-produces-a-regular-pvm, thm-spectral-theorem-for-bounded-normal-operators-pvm-form, def-borel-functional-calculus-for-a-bounded-normal-operator, thm-borel-functional-calculus-for-bounded-normal-operators, cor-spectral-projections-and-resolution-of-the-identity, thm-support-and-uniqueness-of-the-spectral-measure, def-cyclic-vector-and-cyclic-normal-operator, thm-cyclic-spectral-representation, lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces, thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem, def-spectral-multiplicity-function-in-the-separable-case, lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension, thm-unitary-equivalence-classified-by-measure-class-and-multiplicity, thm-stone-resolvent-formula-for-spectral-projections]
examples: []
---

This page refines the continuous functional calculus of the preceding pair into
the measurable calculus of a bounded normal operator. The route is the
projection valued measure: a PVM assigns an orthogonal projection to every
measurable set, multiplicatively on intersections and strongly countably
additively, and its scalar pairings $E_{x,y}(B)=\langle E(B)x,y\rangle$ are
finite complex measures of total variation at most $\|x\|\,\|y\|$. The page
first fixes those conventions, proves that weak and strong countable additivity
coincide for projection values, and constructs the integral of a simple
function as a finite sum of projection values, which is shown to be independent
of the disjoint presentation. Uniform approximation by simple functions then
extends the integral to every bounded measurable function, with
$\|\Phi_E(f)\|\le\|f\|_\infty$, the scalar pairing identity, the quadratic
identity $\|\Phi_E(f)x\|^2=\int|f|^2\,dE_x$, and exact norm the
$E$-essential supremum, the supremum over unit vectors of the
$E_x$-essential supremum of $f$. The measurable integral is a unital
$\ast$-homomorphism, and uniformly bounded pointwise $E$-almost everywhere
convergence of functions implies strong convergence of operators.

The spectral theorem is proved rather than assumed. For a compact space $K$ and
a unital star-homomorphism $\pi:C(K)\to\mathcal B(H)$, the scalar functionals
$f\mapsto\langle\pi(f)x,y\rangle$ are represented by unique finite regular
complex measures $\mu_{x,y}$ with $|\mu_{x,y}|(K)\le\|x\|\,\|y\|$, the
polarised family is sesquilinear, and the Hilbert space Riesz representation
theorem builds bounded operators $E(h)$ with
$\langle E(h)x,y\rangle=\int h\,d\mu_{x,y}$. Multiplicativity is obtained by
testing the densities $f\mu_{x,y}$ against continuous functions and invoking
uniqueness of the representing measure; consequently $B\mapsto E(\mathbf 1_B)$
is a regular PVM with $\pi(f)=\int f\,dE$, and it is unique because two regular
PVMs with the same continuous integrals have the same scalar measures. Applied
to the continuous calculus of $T$ on $\sigma(T)$, this yields the unique
regular spectral PVM with $\int z\,dE(z)=T$; conversely the coordinate integral
of any regular PVM on a compact set is a bounded normal operator whose spectrum
lies in that set. The Borel functional calculus $f(T)=\Phi_E(f)$ therefore
extends the continuous calculus, is a unital $\ast$-homomorphism with
$E$-essential-supremum norm and strong limits, and every operator commuting
with $T$ and $T^*$ commutes with all of it. The spectral projections reduce
$T$, the eigenspace at $\lambda$ is exactly $E(\{\lambda\})H$, and for
self-adjoint $T$ the half-line projections form an increasing strongly right
continuous family with limits $0$ and $I$ at the two infinities. The support of
the spectral measure is all of $\sigma(T)$, and the PVM is determined by $T$
among regular PVMs on compact sets.

The second half develops the cyclic and multiplicity theory that makes the
multiplication model canonical. A vector is cyclic when the closed span of
$\{f(T)x\}$ is everything; the map $f\mapsto f(T)x$ extends from continuous
functions to a unitary $L^2(\sigma(T),E_x)\to H_x$ intertwining multiplication
by $z$ with $T$ and every bounded Borel multiplier with the Borel calculus.
Zorn's lemma produces a maximal orthogonal family of cyclic reducing
subspaces, and in the separable case a dense sequence produces a finite or
countable one, so every bounded normal operator is unitarily equivalent to
multiplication by the coordinate on an orthogonal sum
$\bigoplus_jL^2(\sigma(T),\mu_j)$ of cyclic summands. Choosing a common
dominating measure $\mu$ and writing $\mu_j=h_j\mu$ gives the multiplicity
function $m(z)=\#\{j:h_j(z)>0\}$, the fibre dimension of the standard
measurable-field model with fibres
$\operatorname{span}\{e_1,\dots,e_{m(z)}\}$; the model is unitarily equivalent
to the sum of the cyclic $L^2$-spaces through the rank enumeration of the
active coordinates. Unitary intertwiners are shown to preserve both the class
of $\mu$ and the fibre dimension almost everywhere: they commute with every
bounded Borel multiplier, so the two scalar measures have the same null sets,
and after localising to a set on which both multiplicities are constant the
constant-fibre commutant argument forces the two constants to be equal. Hence
two bounded normal operators on nonzero separable spaces are unitarily
equivalent exactly when their spectra agree, their scalar spectral measure
classes agree on that common set, and their multiplicity functions agree
almost everywhere; there is no change of spectral coordinate, and the zero
space is the separate trivial class. The page closes with Stone's resolvent
formula: the strong limit of $(2\pi i)^{-1}\int_a^b[(T-(t+i\varepsilon))^{-1}-(T-(t-i\varepsilon))^{-1}]dt$
as $\varepsilon\downarrow0$ is $E((a,b))+\tfrac12(E(\{a\})+E(\{b\}))$, with the
half-masses at the endpoints stated explicitly.

The declared choice strength is uniform and explicit: the early PVM
infrastructure inherits Countable Choice through the Hilbert projection and
adjoint suppliers, while the construction of the spectral PVM, the Borel
calculus and the whole multiplicity classification assume AC, the general
cyclic decomposition using it through Zorn's lemma and the regular-measure
representation theorem. The separable alternative to the Zorn decomposition is
stated separately, and the nonseparable multiplicity theory is orientation
only and is not used as a supplier.
