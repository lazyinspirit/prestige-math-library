---
id: thm-separable-dual-spaces-have-rnp
kind: theorem
title: "Separable dual spaces have the Radon--Nikodym property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-hahn-banach-dominated-extension, def-radon-nikodym-property, def-separable-space, lem-countable-iff-surjection-from-n, thm-rationals-countable, lem-q-and-irrationals-dense-r, thm-product-of-countable, thm-countable-union-of-countable, lem-bounded-variation-of-a-vector-measure-is-a-finite-measure, thm-separable-dual-implies-separable-primal, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, cor-finite-complex-measures-admit-integrable-radon-nikodym-densities, thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, thm-bounded-linear-maps-commute-with-bochner-integration, thm-bochner-integrability-criterion]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Corollary 2.11 and complete separable-dual proof, printed pp. 41--42"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. If $Y$ is a real or complex normed space and its
continuous dual $X=Y^*$ is norm separable, then the Banach space $X$ has the
Radon--Nikodym property.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] AC implies Countable Choice and the relative Hahn--Banach principle: the
former follows from the preceding local choice lemma, while the latter is
realized by the AC form of dominated Hahn--Banach
([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]],
[[thm-hahn-banach-dominated-extension]]).

[L2] Under Countable Choice and relative Hahn--Banach, norm separability of
$Y^*$ implies norm separability of $Y$
([[thm-separable-dual-implies-separable-primal]]).

[L3] RNP is the Bochner-density assertion for every absolutely continuous
bounded-variation vector measure over a finite measure
([[def-radon-nikodym-property]]), and the variation of such a vector measure is
a finite positive measure
([[lem-bounded-variation-of-a-vector-measure-is-a-finite-measure]]).

[L4] On the finite measure spaces fixed in [L3], hence on sigma-finite
reference spaces, AC gives integrable scalar densities for finite absolutely
continuous signed and complex measures
([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]],
[[cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]]).

[L5] The variation of a scalar measure with density $h$ has density $|h|$
([[thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]]).

[L6] Countable scalar suprema and pointwise limits preserve measurability
([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[L7] A strongly measurable Banach-valued function is Bochner integrable when
its norm is integrable ([[thm-bochner-integrability-criterion]]), and bounded
linear maps commute with its integral
([[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[L8] Nonempty at most countable sets can be enumerated; rational and Gaussian
rational finite spans are countable under Countable Choice
([[lem-countable-iff-surjection-from-n]], [[thm-rationals-countable]],
[[lem-q-and-irrationals-dense-r]],
[[thm-product-of-countable]], [[thm-countable-union-of-countable]],
[[def-separable-space]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a normed space $Y$, and a norm-separable dual $X=Y^*$.

1.1 Obtain the needed separability and choice interfaces. By [L1], AC supplies Countable Choice and proves every instance of the relative Hahn--Banach principle. Thus [L2] applies and makes $Y$ norm separable. Adjoin zero to chosen countable dense subsets of $Y$ and $X$ so that [L8] enumerates both even in the zero-space case. [given, A1, L1, L2]

1.2 Fix a vector measure and dominate it by one scalar density. Let $(\Omega,\mathcal A,\mu)$ be a finite measure space and let $\nu:\mathcal A\to Y^*$ have bounded variation with $\nu\ll\mu$. If $\mu(E)=0$, every cell in a finite partition of $E$ has zero $\nu$-value, so $|\nu|(E)=0$. Hence $|\nu|\ll\mu$. By [L3] it is a finite positive measure, and [L4] gives an integrable real density $g$ with $|\nu|(E)=\int_Eg\,d\mu$. Positivity, tested on $\{g\leq-1/m\}$, permits replacing $g$ on a null set so that $g\geq0$ everywhere. [given, A1, L3, L4]

2.1 Choose a countable linear test space and all its scalar densities. Let $\mathbb K_0=\mathbb Q$ in the real case and $\mathbb K_0=\mathbb Q+i\mathbb Q$ in the complex case. The $\mathbb K_0$-linear span $D$ of a countable dense subset of $Y$ is countable and norm dense by [L8]. For $d\in D$ define the finite signed or complex measure $\nu_d(E)=\nu(E)(d)$. Its partition sums satisfy $|\nu_d|(E)\leq\|d\|\,|\nu|(E)$, and $\nu_d\ll\mu$. Apply [L4], using AC to choose simultaneously for all $d\in D$, measurable $h_d\in L^1(\mu)$ such that $\nu_d(E)=\int_Eh_d\,d\mu$. [A1, L4, L8, step 1.1, step 1.2, choose]

3.1 Make the scalar representatives pointwise linear and bounded. Uniqueness of scalar densities says, for every $a,b\in\mathbb K_0$ and $d,e\in D$, that $h_{ad+be}=ah_d+bh_e$ almost everywhere. There are only countably many such relations. Moreover [L5] and the variation estimate in step 2.1 give [L3, L5, step 1.2, step 2.1]

$$\int_E|h_d|\,d\mu=|\nu_d|(E)\leq\|d\|\int_Eg\,d\mu.$$

Testing this inequality on
$\{|h_d|>\|d\|g+1/m\}$ shows
$|h_d|\leq\|d\|g$ almost everywhere, for every $d\in D$. The union of the
exceptional sets for all relations, bounds, and $d$ is null by countable
additivity. Replace every $h_d$ by zero there. Off this one null set, the map
$d\mapsto h_d(\omega)$ is $\mathbb K_0$-linear and bounded by
$g(\omega)\|d\|$.

4.1 Extend the pointwise functionals to $Y^*$. For every remaining $\omega$, continuity and density of $D$ extend $d\mapsto h_d(\omega)$ uniquely to a scalar-linear functional $f(\omega)\in Y^*$ with $\|f(\omega)\|\leq g(\omega)$. In the complex case, $\mathbb Q+i\mathbb Q$-linearity and continuity give full complex linearity. Set $f=0$ on the common null set. Then $f(\omega)(d)=h_d(\omega)$ for all $d\in D$ off that set. [step 3.1, construct]

5.1 Prove strong measurability rather than merely coordinate measurability. Fix $y\in Y$. Using an enumeration of $D$, for every integer $m\geq1$ take the least indexed $d_m\in D$ with $\|d_m-y\|<1/m$. Step 3.1 gives $h_{d_m}(\omega)\to f(\omega)(y)$ off the common null set, so [L6] makes every coordinate $\omega\mapsto f(\omega)(y)$ measurable. Let $(u_j)_{j\geq1}$ enumerate a countable dense subset of the unit ball of $Y$ obtained from $D$ by rational rescaling. For each $x^*\in X$, [L6, L8, step 1.1, step 3.1, step 4.1, construct]

$$\|f(\omega)-x^*\|=\sup_{j\geq1}|f(\omega)(u_j)-x^*(u_j)|,$$

so [L6] makes this distance measurable. Finally enumerate a norm-dense
positively indexed sequence $(x_k^*)_{k\geq1}$ in the separable space $X$.
For each integer $m\geq1$, assign to $\omega$ the least indexed nearest point among
$x_1^*,\ldots,x_m^*$. The measurable distance functions make its finitely
many tie-broken cells measurable, and density makes these simple functions
converge in norm to $f(\omega)$. Thus $f$ is strongly measurable.

6.1 Integrate the extension and identify the vector measure. The bound $\|f\|\leq g$ and [L7] make $f$ Bochner integrable. For $d\in D$, boundedness of evaluation at $d$, commutation in [L7], and step 2.1 give [L7, step 2.1, step 4.1, step 5.1]

$$\left(\int_Ef\,d\mu\right)(d)=\int_Ef(\omega)(d)\,d\mu=\int_Eh_d\,d\mu=\nu(E)(d).$$

Both $\int_Ef$ and $\nu(E)$ are continuous functionals on $Y$ and agree on
the norm-dense subspace $D$, so they agree on all of $Y$. Hence
$\nu(E)=\int_Ef\,d\mu$ for every measurable $E$.

7.1 Conclude RNP and close the degenerate cases. [A1, L3, step 1.1, step 6.1] The measure space and $\nu$ were arbitrary, so step 6.1 proves the RNP condition in [L3]. If $Y^*=\{0\}$, every scalar measure and every density above is zero; if $\mu(\Omega)=0$ or $\nu=0$, take $g=f=0$. A one-point dense set and a one-element rational span are covered by the same construction. AC is used for Hahn--Banach and Countable Choice in step 1.1, scalar RN and simultaneous representatives in steps 1.2--2.1, and the common countable family of a.e. relations; no stronger unstated choice is used. [A1, L3, step 1.1, step 6.1] ∎