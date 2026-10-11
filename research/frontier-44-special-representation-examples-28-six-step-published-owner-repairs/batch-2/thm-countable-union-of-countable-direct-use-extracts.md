## cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold

[L5] Under $\mathrm{AC}_\omega$, a countable union of countable sets is countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]).

## cex-measurable-sections-do-not-imply-product-measurability

[L1] A sigma-algebra is closed under complements and countable unions ([[def-sigma-algebra]]), and under countable choice a countable union of countable sets is countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]). Hence the countable-cocountable family on an uncountable set is a sigma-algebra.

## cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality

[L1] Under countable choice, a countable union of at most countable sets is at most countable, and every subset of an at most countable set is at most countable ([[thm-countable-union-of-countable]], [[lem-subset-of-countable]]).

## cex-weakly-measurable-need-not-be-strongly-measurable

[L1] Under Countable Choice, the Lebesgue sigma-algebra is complete, the unit interval has measure one, countable subsets of the line are null, and a countable union of countable sets is countable ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-countable-subsets-of-rn-are-lebesgue-null]], [[thm-countable-union-of-countable]]).

## cor-c0-is-not-isomorphic-to-a-dual-space

[L2] Rational finite spans are countable under Countable Choice ([[lem-countable-iff-surjection-from-n]], [[thm-rationals-countable]], [[thm-product-of-countable]], [[thm-countable-union-of-countable]]), the rationals are dense in the reals ([[lem-q-and-irrationals-dense-r]]), and a space with a countable dense subset is separable ([[def-separable-space]]).

## cor-countable-choice-and-omega-one-cofinality

[F1] [[thm-countable-union-of-countable]]: Under countable choice, a countable union of at most countable sets is at most countable.

## cor-indexed-omega-one-delta-system

[F2] Under countable choice a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

## cor-solovay-model-has-no-vitali-or-bernstein-set

[F5] [[thm-solovay-inner-model-satisfies-dependent-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-countable-union-of-countable]], and [[thm-r-uncountable]]: internal DC supplies countable choice, so the union of two countable sets is countable, whereas $\mathbb R$ is uncountable.

## cor-spectrum-of-a-compact-operator-is-countable-with-only-zero-as-possible-accumulation

[A3] Under $\mathrm{AC}_\omega$, an at most countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]], [[def-countable]]), and every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]); $\mathrm{AC}$ implies $\mathrm{AC}_\omega$ ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-axiom-of-choice]]).

## cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras

[F4] Under countable choice a countable union of finite sets is countable. ([[thm-countable-union-of-countable]])

## def-mackey-borel-structure-and-countable-separation

[F4] Under the standard identification $\mathbb C\cong\mathbb R^2$, $\mathbb Q+i\mathbb Q$ is countable and dense; finite powers of countable sets are countable, and countable unions of countable sets are countable under $\mathrm{AC}_\omega$ ([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]], [[def-complex-metric-convergence-and-continuity]], [[thm-rational-points-and-boxes-in-rn]], [[lem-finite-powers-of-countable-sets-are-countable]], [[thm-countable-union-of-countable]], [[lem-finite-choice]]).

## def-small-dowker-ladder-topology

[F2] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## def-standard-topologies

*Cocountable.* Identical to the cofinite case with "at most countable" in place of
"finite": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the
statement that a union of two at most countable sets is at most countable, which
is the two-set instance of [[thm-countable-union-of-countable]] applied to the
family $A_0 := U, A_1 := V, A_k := \varnothing$ for $k \ge 2$.

- **No choice principle is needed for any of the six, despite the citation.**
  The only appeal above that carries a choice hypothesis is
  [[thm-countable-union-of-countable]], whose statement assumes
  $\mathrm{AC}_\omega$, and it is used for a union of **two** sets only, padded
  with copies of $\varnothing$. That instance is provable in ZF alone, by
  interleaving two *given* enumerations, exactly as
  [[cor-irrationals-uncountable]] records for the union of the rationals and the
  irrationals; the general theorem is cited because it is the form in which this
  library states the union result, not because the strength is needed. Nothing
  about the cocountable topology depends on countable choice.

## def-suspension-foliation-of-a-group-action

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $B$
be a connected smooth manifold with base point $b_0$
([[def-smooth-manifold]]), let $F$ be a smooth manifold, let
$p:\widetilde B\to B$ be a universal cover with a fixed point
$\tilde b_0$ over $b_0$
([[def-universal-covering-space]]), and let
$\rho:\pi_1(B,b_0)\to\operatorname{Diff}(F)$ be a homomorphism into the
diffeomorphism group of $F$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).
The universal cover has a canonical smooth manifold structure with $p$ a
local diffeomorphism. To include the second-countability prerequisite, choose
a countable cover of $B$ by coordinate balls: for each nonempty member of
an enumerated basis that is contained in some coordinate ball, use
$\mathrm{AC}_\omega$ to select one such ball. These selected balls cover $B$
because its coordinate balls form a neighborhood basis. Each is simply connected by its
convex coordinates ([[cor-convex-subsets-of-rn-are-contractible]]; a
zero-dimensional connected base is a single point). Each pairwise intersection
has at most countably many connected components, and they are path connected
([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]]).
Using $\mathrm{AC}_\omega$, choose a point in each nonempty overlap component
and a path from it to a chosen center in each of the two balls. A subdivided
loop can move every junction to the selected overlap point along a path in
that component; paths with the resulting fixed endpoints inside a ball are
homotopic by simple connectivity. Thus each loop class is represented by a
finite word in countably many selected connecting paths. This proves that
$\pi_1(B,b_0)$ is at most countable (finite words over a countable set are
countable under [[thm-countable-union-of-countable]]). The sheets over each
ball are indexed by this countable fibre. Lifting the countable coordinate
cover gives a countable smooth atlas on $\widetilde B$: transitions are
restrictions of base-chart transitions. The total space is Hausdorff, since
points over different base points are separated downstairs, and points in
one fibre lie in disjoint sheets. The lifted atlas also makes every deck
transformation smooth with smooth inverse. The cover exists because $B$ is
path connected, locally path connected and semilocally simply connected
([[thm-universal-cover-existence]]).

## ex-antichain-sealing-in-countable-tree-forcing

[F8] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

## ex-countable-choice-spent-on-enumerations

[F3] [[thm-countable-union-of-countable]]: Under countable choice the union is at most countable.

## ex-countable-cocountable-sigma-algebra

[L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]]).

## ex-countable-cocountable-zero-infinity-measure

[L2] Countable means finite or countably infinite ([[def-countable]]), and under countable choice a countable union of at most countable sets is at most countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]).

## ex-counting-measure-and-sigma-finiteness

[L3] Under countable choice, a countable union of at most countable sets is at most countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]).

## ex-diamond-seals-a-maximal-antichain-in-l

[F4] [[thm-countable-union-of-countable]] makes a countable union of countable levels countable under countable choice.

## ex-integral-operator-trace-under-a-valid-diagonal-hypothesis

[A4] **A finite or countable orthonormal basis of $H_k$.** By compactness $X$ is totally bounded, so for each integer $n\ge1$ there is a finite $(1/n)$-net of $X$ ([[thm-compact-implies-complete-and-totally-bounded]]); AC chooses one net for each $n\ge1$, their union $D$ is at most countable and dense, and the $\mathbb Q(i)$-span of $\{k_d:d\in D\}$ is an at most countable dense subset of $H_k$, because $\|k_x-k_y\|^2=k(x,x)-k(x,y)-k(y,x)+k(y,y)\to0$ as $y\to x$ by continuity and Hermitian symmetry. The separable-basis theorem therefore provides a Hilbert basis $(e_i)_{i\in I}$ of $H_k$, where $I$ is empty, finite, or countably infinite ([[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[def-dense-top]], [[def-countable]], [[lem-subset-of-countable]], [[thm-countable-union-of-countable]], [[def-metric-convergence]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). Using its canonical order, write the basis as $(e_1,\ldots,e_r)$ when it is finite and as $(e_j)_{j\ge1}$ when it is infinite, and define a positive-integer-indexed family $(h_j)_{j\ge1}$ by $h_j=e_j$ on the existing indices and $h_j=0$ after $r$ in the finite case (all terms are zero when $I=\varnothing$).

## ex-normal-function-fixed-points-at-omega-one

[F6] [[thm-countable-union-of-countable]]: Assuming countable choice, a countable union of at most countable sets is at most countable.

## ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals

Claims 1, 2 and 4 are theorems of ZF. Claim 3 spends countable choice twice: once to
name a finite subcover for each of countably many pieces, and once more through
[[thm-countable-union-of-countable]], which is what makes the union of those
countably many finite families at most countable.

[L10] Assuming the Axiom of Countable Choice, a union $\bigcup_{n \in \mathbb{N}} A_n$ of at most countable sets indexed by $\mathbb{N}$ is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]]).

## ex-specialization-generic-kills-a-tree

[F5] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

## ex-stationary-cofinality-strata

[F3] [[thm-countable-union-of-countable]]: Countable choice makes every countable union of at most countable sets at most countable.

## ex-the-cocountable-topology-in-the-separation-hierarchy

[L3] A union of two at most countable sets is at most countable: this is the two-set instance of [[thm-countable-union-of-countable]] padded with copies of $\varnothing$, and it needs no choice principle, as [[def-standard-topologies]] records.

## ex-uncountable-cantor-cube-uniformizable-not-first-countable

[L6] Under countable choice, a countable union of finite sets is at most countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]).

## fs-ccc-and-proper-are-equivalent

[F4] A countable union of at most countable sets is at most countable, using the Axiom of Countable Choice. [[thm-countable-union-of-countable]]

## fs-ergodicity-forces-only-empty-and-full-invariant-sets

[F4] Countable unions of finite sets are countable under countable choice. [[thm-countable-union-of-countable]].

## fs-every-baire-space-is-completely-metrizable

[F4] **Assume the Axiom of Countable Choice**. Let $(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets indexed by $\mathbb{N}$. Then $$U = \bigcup_{n \in \mathbb{N}} A_n$$ is at most countable ([[thm-countable-union-of-countable]]).

## fs-measurable-sections-imply-product-measurability

[L2] A sigma-algebra is closed under complements and countable unions, and under countable choice a countable union of countable sets is countable. ([[def-sigma-algebra]], [[def-countable-choice]], [[thm-countable-union-of-countable]])

## fs-the-compact-open-topology-is-always-metrizable

**The Axiom of Countable Choice is used once and is flagged where it is spent**,
at step 5.1, through [[thm-countable-union-of-countable]]
([[def-countable-choice]]).

[L8] Assuming the Axiom of Countable Choice, a union over $\mathbb{N}$ of at most countable sets is at most countable; a subset of an at most countable set is at most countable; and $\mathbb{R}$ is uncountable ([[thm-countable-union-of-countable]], [[def-countable-choice]], [[lem-subset-of-countable]], [[thm-r-uncountable]], [[def-countable]]).

## fs-unique-sequential-limits-imply-hausdorff

[L2] A union of two at most countable sets is at most countable; this is the two-set instance of [[thm-countable-union-of-countable]], padded with copies of $\varnothing$, and it needs no choice principle, exactly as [[def-standard-topologies]] records for the cocountable topology itself.

## fs-zero-on-singletons-implies-zero-measure

[L2] Countable means finite or in bijection with $\mathbb N$ ([[def-countable]]), and under countable choice a countable union of at most countable sets is at most countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]).

## lem-aronszajn-finite-petals-incomparability

[F5] Countable unions of countable sets are countable under countable choice. [[thm-countable-union-of-countable]]

## lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints

[F3] A countable union of countable sets is countable under countable choice ([[thm-countable-union-of-countable]]), and a countable subset of $\mathbb R$ is Lebesgue null ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

## lem-borel-subspaces-admit-polish-presentations

[F7] Under countable choice, a countable union of countable sets is countable. ([[thm-countable-union-of-countable]])

## lem-brunner-choice-and-urysohn-obstructions

[F3] Ground AC permits simultaneous witness choices and countable unions of countable sets are countable there ([[def-axiom-of-choice]], [[thm-countable-union-of-countable]]). A compact real set is closed and bounded, and conversely ([[thm-heine-borel-characterisation-r]]). Every nondegenerate real interval is uncountable ([[cor-interval-uncountable]]); the rationals are dense and countable ([[lem-q-and-irrationals-dense-r]], [[thm-rationals-countable]]).

## lem-closed-witness-codings-and-measured-projections

[F2] Each finite power of the naturals is at most countable, and under Countable Choice their countable union is at most countable; hence finite words admit a sequence enumeration and, by taking least preimages, an injective natural-number index; every nonempty at-most-countable set has a sequence enumeration; every nonempty subset of $\mathbb N$ has a least element; the rationals are countable and dense in $\mathbb R$, $1/(n+1)\to0$, and natural-number recursion is valid ([[lem-finite-powers-of-countable-sets-are-countable]], [[thm-countable-union-of-countable]], [[def-countable]], [[lem-countable-iff-surjection-from-n]], [[thm-well-ordering-principle]], [[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]], [[cor-archimedean-reciprocal]], [[thm-recursion]]).

## lem-cocountable-ultrafilter-on-uncountable-set

[F3] A countable union of countable sets is countable under countable choice. [[thm-countable-union-of-countable]]

## lem-compact-metric-space-has-a-countable-dense-subset

**Where the axiom is spent.** Once at step 2.1, to fix a finite $1/(n+1)$-net for
every $n \in \mathbb{N}$ at the same time; the family of sets chosen from is
written down before any selection and does not depend on the earlier ones. The
appeal to [[thm-countable-union-of-countable]] at step 4.1 carries the same
hypothesis $\mathrm{AC}_\omega$ and no more, so nothing further is spent there.
As always on this page the claim is an upper bound on the cost of this proof, not
an assertion that $\mathrm{AC}_\omega$ is necessary.

[L3] Finite sets are at most countable, and, assuming countable choice, a union $\bigcup_{n \in \mathbb{N}} A_n$ of at most countable sets is at most countable ([[def-countable]], [[thm-countable-union-of-countable]], [[lem-countable-iff-surjection-from-n]]).

## lem-compact-subsets-of-a-bernstein-set-are-countable

[L5] Rational open intervals form a countable family, and assuming countable choice, a countable union of countable sets is countable ([[thm-rationals-countable]], [[thm-product-of-countable]], [[thm-countable-union-of-countable]]).

## lem-complex-flag-splitting-over-smooth-bases-with-injective-real-pullback

[F5] Under AC$_\omega$, every second-countable space is Lindelöf, and a
countable union of countable sets is countable
([[thm-second-countable-implies-lindelof]],
[[thm-countable-union-of-countable]]).

## lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family

[F5] Under $\mathrm{AC}_\omega$, a countable union of at most countable sets is at most countable. [[thm-countable-union-of-countable]].

## lem-continuous-path-space-is-polish

[F6] Finite products of countable sets are countable, and under $\mathrm{AC}_\omega$ a countable union of countable sets is countable. [[thm-product-of-countable]] [[thm-countable-union-of-countable]] [[def-countable-choice]]

## lem-countable-generators-yield-countable-set-algebras

[L2] Countable sets are closed under finite products and countable unions ([[def-countable]], [[thm-product-of-countable]], [[thm-countable-union-of-countable]]).

## lem-countably-compact-paracompact-hausdorff-is-compact

[L2] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable]]).

## lem-cylinder-sigma-events-depend-on-countably-many-coordinates

[F2] Under countable choice, a countable union of countable sets is countable. ([[thm-countable-union-of-countable]])

## lem-finite-knaster-poset-products

[F2] A countable union of countable sets is countable under countable choice. [[thm-countable-union-of-countable]]

## lem-john-nirenberg-stopping-cubes-have-geometric-decay

[F5] A countable union of at most countable sets is at most countable, and a countable union of Lebesgue-null subsets of $\mathbb R^n$ is Lebesgue-null ([[thm-countable-union-of-countable]], [[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

## lem-l-one-of-a-second-countable-group-is-separable

[F4] Finite powers of at most countable sets are at most countable; under Countable Choice, countable unions, subsets, and consequently finite sequences over countable sets are at most countable; a countable family of sets is contained in a countable algebra ([[def-countable]], [[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]], [[thm-countable-union-of-countable]], [[thm-product-of-countable]], [[lem-finite-powers-of-countable-sets-are-countable]], [[lem-countable-generators-yield-countable-set-algebras]], [[def-algebra-of-subsets]], [[def-countable-choice]]).

## lem-nowhere-separable-suslin-line-nested-interval-tree

[F4] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

## lem-only-countably-many-fourier-coefficients-are-nonzero

[A4] Under the Axiom of Countable Choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]]).

## lem-oriented-real-two-plane-splitting-with-injective-real-pullback

[F3] Smooth manifolds with or without boundary have the indicated Euclidean or
half-space charts. Under AC$_\omega$, their open covers admit smooth partitions
of unity; a locally trivial fiber bundle is numerable when such a subordinate
partition is supplied. Under AC$_\omega$, second-countable spaces are Lindelöf
and a countable union of countable sets is countable
([[thm-second-countable-implies-lindelof]],
[[thm-countable-union-of-countable]], [[def-smooth-manifold]],
[[def-locally-trivial-fiber-bundle]],
[[thm-smooth-partitions-of-unity-exist-on-manifolds]],
[[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]).

## lem-positive-square-root-of-a-compact-positive-operator



## lem-proper-iteration-master-condition

[F6] A countable union of countable sets is countable under countable Choice. [[thm-countable-union-of-countable]]

## lem-quotient-by-c-zero-has-no-countable-separating-family

[F3] Assuming $\mathrm{AC}_\omega$, a countable union of countable sets is countable ([[thm-countable-union-of-countable]]).

## lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra

[F5] Every finite power of an at most countable set is at most countable; under Countable Choice, a countable union of at most countable sets is at most countable. AC implies Countable Choice ([[lem-finite-powers-of-countable-sets-are-countable]], [[thm-countable-union-of-countable]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## lem-shelah-continuous-unions-of-sweetness-models

[F2] Under [[def-countable-choice]], a natural-number-indexed union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## lem-small-dowker-ch-gives-luzin-set

[F2] Countable unions of at most countable sets are at most countable under countable choice ([[thm-countable-union-of-countable]]).

## lem-small-dowker-coloring-gives-ad-guessing

[F3] Countable unions of countable sets are countable under countable choice ([[thm-countable-union-of-countable]]).

## lem-small-dowker-ladder-shrinking-obstruction

[F3] Under countable choice, countable unions of countable sets are countable and countable subsets of $\omega_1$ are bounded; $\omega_1$ is the least uncountable ordinal and is a cardinal ([[thm-countable-union-of-countable]], [[thm-countable-subsets-of-omega-one-are-bounded]], [[thm-omega-one-is-the-least-uncountable-ordinal]]).

## lem-small-dowker-luzin-gives-tight-coloring

[F3] Under countable choice a countable union of countable sets is countable ([[thm-countable-union-of-countable]]).

## lem-small-dowker-stick-gives-ad-guessing

[F2] A countable union of countable sets is countable under the countable-choice consequence of A1 ([[thm-countable-union-of-countable]]).

## lem-suslin-algebra-refining-antichain-tree

[F5] A countable union of at most countable sets is at most countable under countable choice. [[thm-countable-union-of-countable]]

## lem-suslin-line-nowhere-separable-quotient

[F3] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

## lem-suslin-tree-branch-first-difference-order

[F6] A countable union of countable sets is countable under countable choice. [[thm-countable-union-of-countable]]

## lem-suslin-tree-normal-splitting-refinement

[F4] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

## lem-uncountable-delta-system-for-finite-sets

[L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable]]).
## Proof

## lem-weyl-eigenvalue-singular-value-inequalities

[A12] Under Countable Choice, a countable union of at most countable sets is
at most countable; in particular this applies to a sequence of finite sets
([[thm-countable-union-of-countable]]).

## rem-l-one-sequence-versus-l-one-nonatomic-rnp

[L1] Finite truncations are dense in $\ell^1$, while rational numbers are countable and dense in the reals; finite products and countable unions of countable sets are countable under Countable Choice ([[lem-finite-truncations-are-dense-in-c0-and-ell-one]], [[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]], [[thm-product-of-countable]], [[thm-countable-union-of-countable]], [[lem-countable-iff-surjection-from-n]], [[def-separable-space]]).

## rem-omega-one-and-the-cost-of-choice

**Not free: boundedness of at most countable subsets of $\omega_1$.**
[[thm-countable-subsets-of-omega-one-are-bounded]] takes the Axiom of Countable
Choice ([[def-countable-choice]]) as a standing hypothesis, and spends it at
exactly one step: the appeal to [[thm-countable-union-of-countable]], which
selects one enumeration of each of countably many at most countable sets at
once. Every consequence of the boundedness theorem inherits that cost, including
the statement that no at most countable subset of $\omega_1$ is cofinal in it.
The exact $\mathrm{AC}_\omega$ hypothesis is therefore part of those results
and may not be silently replaced by “choice-free” or by full AC. The local
ledger [[rem-choice-ledger]] makes no unproved reverse-implication claim.

## thm-all-sets-of-reals-in-solovay-l-of-the-reals-have-regularity

[F6] [[def-vitali-set-on-the-unit-interval]], [[def-bernstein-set-on-r]], [[thm-choice-bernstein-set-pathology]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-countable-union-of-countable]], [[thm-r-uncountable]], [[thm-finite-and-countable-subadditivity-of-measures]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-rationals-countable]], and [[def-axiom-of-choice]]: these are the exact ZF, countable-choice, measure, and reductio inputs for the Vitali/Bernstein and failure-of-AC consequences.

## thm-aronszajn-specialization-poset-ccc

[F4] A countable union of countable sets is countable under countable choice. [[thm-countable-union-of-countable]]

## thm-baire-sequence-space-is-polish

[F4] **Assume the Axiom of Countable Choice**. Let $(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets indexed by $\mathbb{N}$. Then $$U = \bigcup_{n \in \mathbb{N}} A_n$$ is at most countable ([[thm-countable-union-of-countable]]).

## thm-countable-products-of-first-countable-spaces

[L1] A product of two at most countable sets is at most countable, and under countable choice a countable union of at most countable sets is at most countable ([[thm-product-of-countable]], [[thm-countable-union-of-countable]]).

## thm-countable-products-of-second-countable-spaces

[L1] A product of two at most countable sets is at most countable, and under countable choice a countable union of at most countable sets is at most countable ([[thm-product-of-countable]], [[thm-countable-union-of-countable]]).

## thm-countable-subsets-of-omega-one-are-bounded

**The hypothesis is not decoration.** $\mathrm{AC}_\omega$ is spent at exactly
one step, step 1.2 below, and it is spent there only through
[[thm-countable-union-of-countable]], whose own statement carries the same
hypothesis. Everything else on this page, including the existence of $\omega_1$
and all of [[thm-omega-one-is-the-least-uncountable-ordinal]], is a theorem of
ZF. The ledger is the choice-ledger remark at the end of this page.

[L5] **Assuming $\mathrm{AC}_\omega$:** if $(A_n)_{n \in \mathbb{N}}$ is a family of at most countable sets then $\bigcup_{n \in \mathbb{N}} A_n$ is at most countable ([[thm-countable-union-of-countable]]).

**Where exactly the choice is spent, and why it cannot be avoided here.** Step 1.2 hands an $\mathbb{N}$-indexed family of at most countable sets to [[thm-countable-union-of-countable]], and that theorem selects one enumeration of each member at once. Each ordinal $\alpha < \omega_1$ has enumerations by $\mathbb{N}$, in general many, and countability alone gives no rule for singling one out. Note that the family $(A_n)$ itself is produced without choice: it is $n \mapsto s(n)$ for a surjection $s$ that [[lem-countable-iff-surjection-from-n]] hands over, and that lemma is choice free.

## thm-countably-closed-forcing-adds-a-normal-suslin-tree

[F6] Under countable choice, countable unions of countable sets are countable, including the countable fusion unions used below. [[thm-countable-union-of-countable]]

## thm-dc-iff-products-compact-hausdorff-are-baire

[F7] Finite choice and finite unions: a function with finite domain all of whose values are nonempty has a choice function, a subset of a finite set is finite, and a countable union of at most countable sets is at most countable under countable choice ([[lem-finite-choice]], [[thm-subset-of-a-finite-set]], [[thm-countable-union-of-countable]], [[def-countable]]).

## thm-diamond-constructs-normal-suslin-tree

[F6] Countable unions of countable sets are countable under countable choice. [[thm-countable-union-of-countable]]

## thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds

[L8] Under $\mathrm{AC}_\omega$, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## thm-existence-of-regular-conditional-distributions-for-standard-borel-targets

[F8] Under countable choice, a countable union of finite sets is countable. [[thm-countable-union-of-countable]], [[def-countable-choice]].

## thm-finite-support-iteration-kills-all-named-suslin-trees

[F12] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

## thm-gitik-intermediate-model-makes-every-set-countable

[F6] [[thm-countable-union-of-countable]]: Under $\mathrm{AC}_\omega$, a countable union of at most countable sets is at most countable.

## thm-harmonic-hardy-one-measure-representation

[L6] $C(\mathbb T,\mathbb R)$ has a countable dense family $(f_j)_{j\ge1}$, namely rational polynomials in finitely many distance functions to an enumerated dense subset; passing to the double family $f_j+if_k$ over the countable set $\mathbb N\times\mathbb N$ exhibits a countable dense family in $C(\mathbb T,\mathbb C)$, so that space is separable ([[lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family]], [[thm-countable-union-of-countable]]).

## thm-harnack-convergence-positive-harmonic-functions

[L13] Assume countable choice. Every nonempty compact metric space $K$ admits a sequence in $C(K,\mathbb R)$ dense for the supremum norm; $\mathbb N\times\mathbb N$ is at most countable; a space is separable when it has an at most countable dense subset ([[lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family]], [[thm-countable-union-of-countable]], [[def-separable-space]]).

## thm-infinite-sigma-algebra-has-continuum-many-members

[L6] Under $\mathrm{AC}_\omega$, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures

[L4] Assuming Countable Choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## thm-ma-aleph-one-eliminates-suslin-trees

[F6] A countable union of countable sets is countable under countable choice. [[thm-countable-union-of-countable]]

## thm-metric-countability-equivalences

[L2] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## thm-nevanlinna-defect-relation

[F4] Countable unions: under Countable Choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## thm-pfa-implies-the-simple-ideal-dichotomy

[F6] Under AC, every uncountable family of finite sets has an uncountable $\Delta$-system ([[lem-uncountable-delta-system-for-finite-sets]]), a countable union of countable sets is countable ([[thm-countable-union-of-countable]]), and $\aleph_1\cdot\aleph_0=\aleph_1$ by infinite-cardinal absorption ([[cor-cardinal-absorption]]).

## thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn

[L4] Countable sets are closed under finite products and countable unions, and subsets of countable sets are countable ([[def-countable]], [[thm-countable-union-of-countable]], [[thm-product-of-countable]], [[lem-subset-of-countable]]).

## thm-schauder-compact-adjoint-theorem

[A4] A compact metric space has a finite subcover of every open cover; the balls centred at points of a nonempty compact set cover it, and choosing one index per member of a finite subcover is choice-free ([[def-metric-compactness]], [[def-metric-ball]], [[lem-finite-choice]]). An at most countable union of finite sets is at most countable under $\mathrm{AC}_\omega$ ([[thm-countable-union-of-countable]]).

## thm-semifinite-and-zero-infinity-decomposition

[L4] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## thm-separable-dual-implies-separable-primal

[F4] The rationals are countable and dense in the reals.  Products of two at most countable sets are at most countable, and under $\mathrm{AC}_\omega$ a countable union of at most countable sets is at most countable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-product-of-countable]], [[thm-countable-union-of-countable]], [[def-countable-choice]]).

## thm-separable-dual-spaces-have-rnp

[L8] Nonempty at most countable sets can be enumerated; rational and Gaussian rational finite spans are countable under Countable Choice ([[lem-countable-iff-surjection-from-n]], [[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]], [[thm-product-of-countable]], [[thm-countable-union-of-countable]], [[def-separable-space]]).

## thm-small-dowker-conditional-aleph-one-constructions

[F8] Below $\omega_1$ every ordinal is countable; countable unions of countable sets are countable and countable subsets of $\omega_1$ are bounded under countable choice ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[thm-countable-union-of-countable]], [[thm-countable-subsets-of-omega-one-are-bounded]]).

## thm-special-aronszajn-tree-construction

[F3] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

## thm-specializing-forcing-kills-a-suslin-tree

[F7] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

## thm-spectral-theorem-for-compact-self-adjoint-operators

[A7] **Cardinality and Archimedes.** Under $\mathrm{AC}_\omega$ a countable union of at most countable sets is at most countable, and subsets of at most countable sets are at most countable ([[thm-countable-union-of-countable]], [[lem-subset-of-countable]], [[def-countable]], [[def-countable-choice]]); for every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

## thm-unordered-summability-of-real-families

[L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]]).
