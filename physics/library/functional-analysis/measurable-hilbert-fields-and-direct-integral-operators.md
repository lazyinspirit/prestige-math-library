---
page: measurable-hilbert-fields-and-direct-integral-operators
title: Measurable Hilbert Fields and Direct-Integral Operators
status: published
items: [def-von-neumann-algebra-and-commutant, def-measurable-hilbert-field-from-a-countable-fundamental-family, lem-measurable-sections-have-measurable-pointwise-inner-products, lem-separable-abelian-von-neumann-algebras-have-a-self-adjoint-generator, def-direct-integral-of-a-measurable-hilbert-field, thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces, def-measurable-and-decomposable-operator-fields, thm-measurable-essentially-bounded-operator-fields-act-decomposably, thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication, lem-diagonal-multipliers-form-a-von-neumann-algebra, thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras]
examples: []
---

This page builds the measurable bookkeeping that lets a family of Hilbert
spaces be integrated along a measure space, together with the operators that
respect the family. A **measurable complex Hilbert field** over a sigma-finite
standard-Borel measure space $(X,\mathcal B,\mu)$ consists of separable
complex fibres $H_x$ and a countable fundamental sequence $e_n(x)$ whose
Gram coefficients $x\mapsto\langle e_n(x),e_m(x)\rangle$ are all Borel, with
$\{e_n(x):n\in\mathbb N\}$ complex-linearly dense in every fibre. A section
$\xi$ is measurable exactly when every coefficient
$x\mapsto\langle\xi(x),e_n(x)\rangle$ is Borel. Inner products are linear in
the first variable, zero fibres are allowed, the measure is not assumed
complete, and sections are identified only when they agree off a Borel null
set; nothing in the definition presumes a measurable raw field or a completed
base.

The first structural result is
[[lem-measurable-sections-have-measurable-pointwise-inner-products]]: the
coefficient test is equivalent to testing against every measurable section,
the pointwise norm $x\mapsto\|\xi(x)\|$ and every pairing
$x\mapsto\langle\xi(x),\eta(x)\rangle$ of measurable sections are measurable,
and measurable sections are closed under measurable scalar combinations and
pointwise norm limits. The proof codes every finite rational-complex
combination of the fundamental family by one fixed finite-sequence code, uses
rational density to obtain a countable pointwise-dense family, recovers the
fibre norm as a countable supremum, and replaces arbitrary witnesses by
least-index approximants; the argument is choice-free, and the zero fibre and
the dependent fundamental vectors are handled without division by zero.

The **direct integral** $\int_X^\oplus H_x\,d\mu(x)$ is then defined as the
sections of finite integrated squared norm modulo agreement off a measurable
null set, with
$\langle[\xi],[\eta]\rangle=\int_X\langle\xi(x),\eta(x)\rangle\,d\mu(x)$. The
definition [[def-direct-integral-of-a-measurable-hilbert-field]] proves that
square-integrable sections form a vector space, that the quotient operations
respect almost-everywhere classes, that the pairing is finite by fibrewise
Cauchy--Schwarz followed by the scalar $L^2$ Cauchy--Schwarz inequality, and
that the result is a genuine inner-product space: representative independence
uses the almost-everywhere invariance of the integral, linearity uses
linearity of the $L^1$ integral, and positive definiteness uses the
zero-integral criterion. Completeness is deliberately not part of the
definition.

[[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]
supplies it. A Cauchy sequence is thinned to a summable one, representatives
are chosen for the countably many classes, and the resulting series of fibre
increments converges outside the measurable set where its norm sum is
infinite; dominated convergence identifies the limit and completes the
Cauchy sequence. Separability is obtained from the AC-qualified countable
Borel generating algebra, a finite-measure exhaustion and a local
pi--lambda approximation for scalar complex $L^2$, a measurable fibrewise
Gram--Schmidt frame whose zero remainders are assigned the zero vector, and
Parseval together with dominated convergence for the coordinate truncations;
the final density estimate is taken over the measurable sets where the frame
vector is nonzero. The theorem states its exact use of the axiom of choice:
choosing the countable family of representatives, the standard-Borel coding
and generating algebra, and the countable-choice hypothesis of the published
Parseval theorem.

Operator fields are handled next.
[[def-measurable-and-decomposable-operator-fields]] defines a field
$(T_x)$ with $T_x\in\mathcal B(H_x)$ to be weakly measurable when every
fundamental matrix coefficient
$x\mapsto\langle T_xe_n(x),e_m(x)\rangle$ is measurable, shows this is
equivalent to measurability of $x\mapsto\langle T_x\xi(x),\eta(x)\rangle$ for
all measurable sections, and proves the fibre norm $x\mapsto\|T_x\|$ is
measurable, so essential boundedness is meaningful. A bounded operator is
decomposable when it is induced by such a field.
[[thm-measurable-essentially-bounded-operator-fields-act-decomposably]]
proves that every weakly measurable essentially bounded field acts on the
direct integral by $[\xi]\mapsto[x\mapsto T_x\xi(x)]$, with
$\|T\|=\operatorname*{ess\,sup}_x\|T_x\|$ exactly. The upper bound follows
from the pointwise operator inequality; the lower bound localizes a
superlevel set to a finite positive-measure set, tests with an indicator
section, and lets a rational level approach the essential supremum. The
adjoint field $(T_x^*)$ and the product field $(T_xS_x)$ are again weakly
measurable and essentially bounded, and they induce $T^*$ and $TS$; the
adjoint claim uses the Hilbert adjoint theorem with its countable-choice
hypothesis supplied by AC.

The diagonal algebra of a direct integral is
$\mathcal D=\{M_f:f\in L^\infty(X,\mu)\}$, with $M_f$ acting by scalar
multiplication.
[[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]]
identifies its commutant exactly with the decomposable operators. The
inclusion that decomposable operators commute with every $M_f$ is pointwise;
the converse reconstructs an arbitrary $S\in\mathcal D'$ from its images of
normalized fundamental sections localized to the members of a finite-measure
exhaustion, using commutation with the corresponding characteristic
multipliers to glue the local representatives into a measurable field,
establishing the pointwise bound on a dense rational-complex test family on
one common conull set, extending fibrewise by density, and finally recovering
$S$ from the induced operator on a dense span of localizations. The theorem
also proves that a weakly measurable essentially bounded field inducing a
fixed operator is unique up to a null set.
[[lem-diagonal-multipliers-form-a-von-neumann-algebra]] then shows
$\mathcal D$ is a unital abelian $\ast$-subalgebra with
$\mathcal D''=\mathcal D$, hence a concrete von Neumann algebra, even when
zero fibres make $f\mapsto M_f$ noninjective: countably many measurable
rank-one fields $R_{n,m}(x)\xi=\langle\xi,u_n(x)\rangle u_m(x)$ lie in
$\mathcal D'$, and fibrewise commutation with them forces every
$T\in\mathcal D''$ to be scalar on each fibre, with the scalar recovered
measurably on the least-index partition of the nonzero fibers.

The spectral model closes the page. A first tool is
[[lem-separable-abelian-von-neumann-algebras-have-a-self-adjoint-generator]]:
on a nonzero separable complex Hilbert space, every abelian concrete von
Neumann algebra is $W^*(S)$ for one bounded self-adjoint $S$. The argument
makes the weak operator topology on the unit ball of $\mathcal A$ countably
based, builds a weakly dense sequence by AC, splits it into self-adjoint
contractions, enumerates their dyadic threshold projections, and encodes the
whole enumeration in one norm-convergent ternary series whose spectral
projections are decoded by explicit continuous digit functions.
[[thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras]]
then decomposes $H$ into cyclic reducing summands, forms the weighted common
measure $\mu=\sum_j a_j\mu_j$ with Radon--Nikodym densities $h_j$, builds the
measurable field $H_t=\mathbb C^{m(t)}$ with multiplicity
$m(t)=\sum_j\mathbf 1_{\{h_j>0\}}(t)$ and a unitary $U$ with $USU^{-1}=M_t$
and $U\mathcal A U^{-1}=\{M_f:f\in L^\infty(K,\mu)\}$, and proves that for a
fixed generator the measure class and the almost-everywhere multiplicity are
unique: measure classes are detected by the common spectral scalar measure,
equivalent measures are bridged by the Radon--Nikodym square-root unitary,
and an off-diagonal block of the direct sum of two models is decomposable, so
its fibres are unitaries and the dimensions agree. Changing the generator is
not covered by the uniqueness clause.

Alongside these items the page fixes the surrounding vocabulary it uses:
[[def-von-neumann-algebra-and-commutant]] states the concrete unital
weak-operator-closed convention, the commutant and double commutant, and the
generated algebra $W^*(\mathcal S)$, with no bicommutant theorem assumed, and
the adjoint convention on $\mathcal B(H)$ is invoked under the exact
countable-choice hypothesis of the published adjoint theorem. The axiom of
choice is assumed exactly where the items state it; the field, section,
direct-integral and operator-field definitions are choice-free.
