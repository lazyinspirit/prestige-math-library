---
id: def-geometric-genus-singular-curve
kind: definition
title: "Geometric genus of a singular curve"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-finite-morphism-proper
  - cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian
  - def-algebraic-curve-over-field
  - def-arithmetic-genus-proper-curve
  - def-axiom-of-choice
  - def-dimension-noetherian-topological-space
  - def-finite-morphism-schemes
  - def-finite-type-and-module-finite-algebras
  - def-geometric-fibre
  - def-geometrically-reduced-integral-connected-fibre
  - def-integral-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-perfect-field
  - def-prime-spectrum-and-vanishing-sets
  - def-principal-ideal-domain
  - def-proper-morphism
  - def-weil-divisor-normal-noetherian-scheme
  - lem-base-extension-field-coordinate-ring
  - lem-composite-finite-proper-morphism-proper
  - lem-finite-morphism-affine
  - lem-integral-finite-type-scheme-function-field
  - lem-irreducibility-criteria-and-open-subspaces
  - prop-modules-over-a-field-are-projective-flat-and-injective
  - thm-affine-domain-dimension-transcendence-degree
  - thm-equivalent-characterisations-of-a-dvr
  - thm-noetherian-ring-quotients-and-localisations
  - thm-normalization-glues-integral-finite-type-curves
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-regular-equals-smooth-over-perfect-field
  - thm-regular-local-rings-are-normal
  - thm-separatedness-gluing-overlap-criterion
  - thm-subspace-closure-and-interior
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $k$ be a perfect
field ([[def-perfect-field]]). Let $X$ be a curve over $k$ ([[def-algebraic-curve-over-field]])
that is proper over $k$. Write $\nu:X^{\mathrm{nu}}\to X$ for its normalization
from [[thm-normalization-glues-integral-finite-type-curves]]. We first verify
that this normalization is itself a proper geometrically integral curve of
chain dimension one, and then verify its smoothness before using the
curve-genus definition.

First, $X$ is integral, separated, finite type, and has chain dimension one
because it is a curve. Choose a finite affine cover $U_i=\operatorname{Spec}A_i$
of $X$. Since $\nu$ is finite, $\nu^{-1}(U_i)=\operatorname{Spec}B_i$ and
$B_i$ is module-finite over $A_i$
([[def-finite-morphism-schemes]], [[lem-finite-morphism-affine]]). Each $A_i$
is a finite-type $k$-domain, so a finite set of algebra generators for $A_i$
together with a finite $A_i$-module generating set for $B_i$ generates $B_i$ as
a $k$-algebra ([[def-finite-type-and-module-finite-algebras]]). Thus
$X^{\mathrm{nu}}$ is finite type over $k$.

Its chain dimension is one as well. The chain-dimension hypothesis on $X$
gives a strict chain $Z_0\subsetneq Z_1$ of nonempty irreducible closed
subsets. Since $X$ is irreducible, $Z_1=X$: otherwise adjoining $X$ would give
a chain of length two. Choose a point of $Z_0$ and an affine neighborhood
$U=\operatorname{Spec}A$ of it. The nonempty open $U$ contains the generic
point of $X$, so $Z_0\cap U$ is a nonempty proper irreducible closed subset of
$U$. No chain in $U$ can have length two: if two closed subsets of $U$ had
equal closures in $X$, intersecting the common closure with $U$ would make the
original subsets equal ([[thm-subspace-closure-and-interior]]). The chain
$Z_0\cap U\subsetneq U$ therefore shows that $U$ has dimension one. Closed
irreducible subsets $V(\mathfrak p)$ of $\operatorname{Spec}A$ correspond in
reverse order to prime ideals ([[def-prime-spectrum-and-vanishing-sets]]), so
this is the ring dimension used in
[[thm-affine-domain-dimension-transcendence-degree]]. Since
$\operatorname{Frac}(A)=k(X)$, that theorem gives
$\operatorname{trdeg}_k k(X)=1$. Every nonempty affine chart
$V=\operatorname{Spec}B$ of $X^{\mathrm{nu}}$ is a finite-type domain with
$\operatorname{Frac}(B)=k(X)$ by the normalization theorem and the function
field lemma [[lem-integral-finite-type-scheme-function-field]]. Hence
$\dim B=1$. To compare with chain dimension, any chain of irreducible closed
subsets of $X^{\mathrm{nu}}$ can be restricted to an affine neighborhood
meeting its smallest member. Each trace is a nonempty irreducible closed subset
of that affine open. Strictness is preserved: for nested irreducible closed
subsets $Z\subsetneq Z'$, both the chosen affine neighborhood's intersection
with $Z'$ and $Z'\setminus Z$ are nonempty open subsets of the irreducible
space $Z'$, so they intersect ([[lem-irreducibility-criteria-and-open-subspaces]]).
Conversely, a strict chain of closed subsets in an affine open remains strict
after taking closures in the whole scheme, by
[[thm-subspace-closure-and-interior]].
Thus the affine-chart dimensions give chain dimension one for
$X^{\mathrm{nu}}$.

The map $\nu$ is finite, hence proper
([[cor-finite-morphism-proper]]); composing it with the proper structure map
$X\to\operatorname{Spec}k$ shows that $X^{\mathrm{nu}}$ is proper
([[lem-composite-finite-proper-morphism-proper]]). In particular its structure
map is separated, since proper means separated, finite type and universally
closed ([[def-proper-morphism]]).

It remains to check geometric integrality. Fix an algebraic closure $\bar k$
of $k$, and put $K=k(X)=k(X^{\mathrm{nu}})$. Since $X$ is geometrically
integral, [[lem-integral-finite-type-scheme-function-field]] gives that
$K\otimes_k\bar k$ is a domain (under the stated Choice premise). For each
nonempty affine chart $V_i=\operatorname{Spec}B_i$ of $X^{\mathrm{nu}}$, the
function-field identification embeds $B_i$ into $K$. The $k$-module $\bar k$
is flat by [[prop-modules-over-a-field-are-projective-flat-and-injective]],
so tensoring this injection gives
$B_i\otimes_k\bar k\hookrightarrow K\otimes_k\bar k$. Thus each chart ring
$B_i\otimes_k\bar k$ is a nonzero domain. For any pair of these charts their
intersection is nonempty because it contains the generic point; it is affine
because $X^{\mathrm{nu}}$ is separated, by
[[thm-separatedness-gluing-overlap-criterion]]. Write it as
$W_{ij}=\operatorname{Spec}D_{ij}$. The same function-field identification
embeds $D_{ij}$ into $K$, so flatness gives
$D_{ij}\otimes_k\bar k\hookrightarrow K\otimes_k\bar k$. This is a nonzero
domain. By [[lem-base-extension-field-coordinate-ring]], these tensor-product
charts and overlaps are exactly the charts and intersections after extension
to $\bar k$. Nonzero affine rings have points under Choice, by
[[thm-proper-ideal-contained-in-maximal-ideal]], so the base-changed charts
cover a nonempty scheme and remain pairwise intersecting. A cover by integral
affine opens with pairwise nonempty intersections is reduced and irreducible;
therefore $X^{\mathrm{nu}}_{\bar k}$ is integral. This proves geometric
integrality by [[def-geometric-fibre]] and
[[def-geometrically-reduced-integral-connected-fibre]].

We have now established that $X^{\mathrm{nu}}$ is a proper geometrically
integral separated finite-type curve of chain dimension one. Its finite affine
cover above has Noetherian coordinate rings by the finite-type-over-a-field
case of
[[cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian]], so
$X^{\mathrm{nu}}$ is Noetherian by
[[def-locally-noetherian-and-noetherian-scheme]]. Its normality means that its
local rings are integrally closed domains
([[def-weil-divisor-normal-noetherian-scheme]]). The localizations of the chart
rings are Noetherian by
[[thm-noetherian-ring-quotients-and-localisations]]. At a non-generic point
$x$, an affine chart $\operatorname{Spec}B$ identifies $x$ with a nonzero
prime $\mathfrak p$. The chain $0\subsetneq\mathfrak p$ and the dimension-one
bound give $\dim B_{\mathfrak p}=1$. Thus $\mathcal O_{X^{\mathrm{nu}},x}$ is a
one-dimensional Noetherian local integrally closed domain, hence a discrete
valuation ring by [[thm-equivalent-characterisations-of-a-dvr]] and therefore
regular. The generic local ring is the field $K$, also regular. So
$X^{\mathrm{nu}}$ is regular; since $k$ is perfect, it is smooth by
[[thm-regular-equals-smooth-over-perfect-field]].

The **geometric genus** of $X$ is
$$ g(X):=g(X^{\mathrm{nu}})=h^1(X^{\mathrm{nu}},\mathcal O_{X^{\mathrm{nu}}}), $$
the genus [[def-arithmetic-genus-proper-curve]] of the smooth proper curve
$X^{\mathrm{nu}}$. It is a nonnegative integer, finite-dimensionality of the
cohomology being part of that definition. If $X$ is itself smooth, then $X$ is
regular by [[thm-regular-equals-smooth-over-perfect-field]] and therefore
normal ([[thm-regular-local-rings-are-normal]]). The normalization's initiality
then identifies $\nu$ with an isomorphism, so $g(X)$ is the genus of $X$.

The definition is independent of all choices: the normalization is unique up
to unique isomorphism over $X$
([[thm-normalization-glues-integral-finite-type-curves]]), and the genus of a
smooth proper curve is an isomorphism invariant of the curve together with its
structure morphism to $k$. We do not call $g(X)$ the genus of $X$ without
qualification, reserving the unqualified word for the smooth case; the
geometric genus is an invariant of the singular curve $X$ and is insensitive
to the singularities, in contrast with the arithmetic genus
$p_a(X)=1-\chi(\mathcal O_X)$.
