---
id: def-delta-invariant-curve-singularity
kind: definition
title: "Delta invariant of a curve singularity"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-contraction-of-maximal-ideals-integral-extension
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-algebraic-curve-over-field
  - def-annihilator-and-torsion-of-a-module
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-dimension
  - def-dimension-noetherian-topological-space
  - def-finite-type-finite-presentation-module-sheaf
  - def-integral-closure-and-integrally-closed-domain
  - def-perfect-field
  - def-locally-noetherian-and-noetherian-scheme
  - def-noetherian-module
  - def-noetherian-ring
  - def-quasi-coherent-module-scheme
  - def-singular-and-regular-loci-variety
  - def-vector-space
  - lem-affine-morphism-structure-sheaf-pushforward-localizes
  - lem-associated-sheaf-stalk-localization
  - lem-curve-closed-subsets-finite
  - lem-field-is-noetherian
  - lem-finite-morphism-affine
  - cor-field-finite-type-over-a-field-is-a-finite-extension
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-equivalent-characterisations-of-a-dvr
  - thm-integrality-commutes-with-localisation
  - thm-localisation-of-modules-is-exact
  - thm-localisation-of-modules-is-tensor-product
  - thm-normalization-glues-integral-finite-type-curves
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-prime-spectrum-of-a-quotient-bijection
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-radical-as-intersection-of-primes
  - thm-regular-locus-is-open-variety
  - thm-stalk-structure-sheaf-prime-localization
  - thm-support-and-annihilator-of-a-finite-module
  - thm-noetherian-ring-quotients-and-localisations
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be an
algebraically closed field and let $X$ be an integral proper finite-type curve
over $k$ ([[def-algebraic-curve-over-field]]). Let
$\nu:X^{\mathrm{nu}}\to X$ be its normalization
([[thm-normalization-glues-integral-finite-type-curves]]), and let $x\in X$ be
a closed point. Write $\mathcal O_{X,x}$ for the local ring at $x$ and
$(\nu_*\mathcal O_{X^{\mathrm{nu}}})_x$ for the stalk of the direct image of
the normalization's structure sheaf. The **delta invariant of $X$ at $x$** is
$$ \delta_x(X):=\dim_k\bigl((\nu_*\mathcal O_{X^{\mathrm{nu}}})_x/\mathcal O_{X,x}\bigr), $$
the $k$-dimension ([[def-vector-space]], [[def-dimension]]) of this quotient
$\mathcal O_{X,x}$-module. The **total delta invariant** is
$$ \delta(X):=\sum_{x\in X_{\mathrm{sing}}}\delta_x(X), $$
where $X_{\mathrm{sing}}$ is the singular (non-regular) locus
([[def-singular-and-regular-loci-variety]]), and the sum is over its closed
points. The Axiom of Choice is inherited from the cited normalization,
coherence, one-dimensional regular-local, regular-locus and curve-topology
interfaces; $k$ may be any algebraically closed field in any characteristic.

Each $\delta_x(X)$ is a finite nonnegative integer, and $\delta_x(X)=0$ if
and only if $x$ is regular. The singular locus $X_{\mathrm{sing}}$ is a finite
set of closed points, so the total invariant $\delta(X)$ is a finite sum.

## Well-posedness and finiteness

The normalization theorem supplies, on each affine open $U=\operatorname{Spec}A$
of $X$, a chart $\nu^{-1}(U)=\operatorname{Spec}B$ in which $A\subseteq B\subseteq
k(X)$ and $B$ is the integral closure of $A$ in $k(X)$
([[def-integral-closure-and-integrally-closed-domain]]); $B$ is a finite
$A$-module. The finite morphism $\nu$ is affine
([[lem-finite-morphism-affine]]). On this chart the direct image has sections
$B_f$ on every principal open $D(f)\subseteq U$, with localization as
restriction ([[lem-affine-morphism-structure-sheaf-pushforward-localizes]]).
Thus $(\nu_*\mathcal O_{X^{\mathrm{nu}}})|_U\cong\widetilde B$ is
quasi-coherent ([[def-quasi-coherent-module-scheme]]) and of finite type as an
$\mathcal O_X$-module ([[def-finite-type-finite-presentation-module-sheaf]]).

The scheme $X$ is locally Noetherian: its affine coordinate rings are finite-
type algebras over the Noetherian field $k$
([[lem-field-is-noetherian]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[def-locally-noetherian-and-noetherian-scheme]]), and their localizations
are Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]). The
structure sheaf and
$\nu_*\mathcal O_{X^{\mathrm{nu}}}$ are therefore coherent by the
quasi-coherent finite-type criterion, and their cokernel
$$\mathcal Q:=\operatorname{coker}(\mathcal O_X\longrightarrow\nu_*\mathcal O_{X^{\mathrm{nu}}})$$
is coherent as well ([[thm-coherent-sheaves-abelian-noetherian-scheme]],
[[def-coherent-module-scheme]]). The map is injective: on each such chart it
is the inclusion $A\hookrightarrow B$ inside the common function field.
Consequently, if $x$ corresponds to the maximal ideal $\mathfrak m$ of $A$,
then
$$\mathcal Q_x\cong(B/A)_{\mathfrak m}\cong B_{\mathfrak m}/A_{\mathfrak m},$$
using the stalk-localization identification for associated sheaves and the
exactness of module localization
([[lem-associated-sheaf-stalk-localization]],
[[thm-stalk-structure-sheaf-prime-localization]],
[[thm-localisation-of-modules-is-exact]]).

This stalk description retains every branch over $x$. Indeed, with
$S=A\setminus\mathfrak m$, the algebra $B_{\mathfrak m}=S^{-1}B$ is
canonically $B\otimes_A A_{\mathfrak m}$ by localization-as-tensor
([[thm-localisation-of-modules-is-tensor-product]]). Integral closure commutes
with localization for this multiplicative set, so $B_{\mathfrak m}$ is the
integral closure of $A_{\mathfrak m}$ in $k(X)$; it is finite over
$A_{\mathfrak m}$ ([[thm-integrality-commutes-with-localisation]]). The
residue field $\kappa(x)$ is $k$: since $x$ is closed, it is a field finitely
generated as a $k$-algebra. Zariski's lemma makes $\kappa(x)/k$ finite, and
algebraic closedness makes it trivial
([[cor-field-finite-type-over-a-field-is-a-finite-extension]]). Thus
$C:=B_{\mathfrak m}/\mathfrak mB_{\mathfrak m}$ is a finite-dimensional
$k$-algebra. The algebra $B_{\mathfrak m}$ is integral over the local ring
$A_{\mathfrak m}$, so each maximal ideal contracts to $\mathfrak m$
([[cor-contraction-of-maximal-ideals-integral-extension]]); these ideals
correspond to the maximal ideals of $C$
([[thm-prime-spectrum-of-a-quotient-bijection]]). There are only finitely
many: for any finite list of $r$ distinct maximal ideals of $C$, the Chinese
remainder map onto the product of their nonzero residue fields is surjective,
so $r\leq\dim_k C$
([[thm-chinese-remainder-theorem-for-comaximal-ideals]]). Thus
$B_{\mathfrak m}$ has finitely many maximal ideals. It is a nonzero domain,
so AC and the proper-ideal/maximal-ideal theorem give it at least one maximal
ideal; it is therefore semilocal and can have several branches over $x$
without selecting one ([[thm-proper-ideal-contained-in-maximal-ideal]]).

The generic stalk of $\mathcal Q$ is zero: localizing $A\subseteq B\subseteq
k(X)$ at the generic point gives $k(X)$ on both sides. At a closed point the
local ring $A_{\mathfrak m}=\mathcal O_{X,x}$ is a one-dimensional Noetherian
local domain. The curve has chain dimension one
([[def-dimension-noetherian-topological-space]]). The affine open $U$ contains
both the generic point and $x$, so in $A$ the generic prime $(0)$ is strictly
contained in the maximal ideal $\mathfrak m$; no longer prime chain is possible
in $A$ because $U$ is an open subspace of this one-dimensional integral curve.
Thus the only primes of $A_{\mathfrak m}$ are $(0)$ and
$\mathfrak mA_{\mathfrak m}$, and the support of $\mathcal Q_x$ is contained
in the maximal ideal: its localization at $(0)$ is zero. If $x$ is regular,
the one-dimensional regular-local/DVR theorem makes $A_{\mathfrak m}$ a DVR,
and the DVR characterization makes it integrally closed
([[thm-one-dimensional-regular-local-rings-are-dvrs]],
[[thm-equivalent-characterisations-of-a-dvr]]). Localization of integral
closure then gives $B_{\mathfrak m}=A_{\mathfrak m}$, so $\mathcal Q_x=0$.

For every closed $x$, the module $M:=\mathcal Q_x$ is finite over the
Noetherian local ring $R:=A_{\mathfrak m}$. Its support is contained in
$\{\mathfrak mR\}$. The support-annihilator theorem and the radical-as-prime-
intersection theorem imply
$\sqrt{\operatorname{Ann}_R(M)}\supseteq\mathfrak mR$; if $M=0$ this is
immediate, and otherwise $\mathfrak mR$ belongs to the support since
$M_{\mathfrak mR}=M$, so it is the only prime containing the annihilator
([[thm-support-and-annihilator-of-a-finite-module]],
[[thm-radical-as-intersection-of-primes]],
[[def-annihilator-and-torsion-of-a-module]]). Choose finite generators
$u_1,\ldots,u_r$ of $\mathfrak mR$: $R$ is Noetherian, so its maximal ideal
is a submodule of its Noetherian regular module and is finitely generated
([[def-noetherian-ring]], [[def-noetherian-module]]). For each $i$, some
$e_i\geq1$ has
$u_i^{e_i}M=0$. Therefore, with
$N=1+\sum_i(e_i-1)$, every degree-$N$ monomial in these generators contains
some $u_i^{e_i}$, so $(\mathfrak mR)^NM=0$. The resulting finite filtration
$$M\supseteq\mathfrak mRM\supseteq\cdots\supseteq(\mathfrak mR)^NM=0$$
has finite-dimensional $k$-vector-space quotients: if generators of $M$ and
$\mathfrak mR$ are fixed, the finitely many products of $j$ maximal-ideal
generators with generators of $M$ generate $(\mathfrak mR)^jM$, so each layer
is finitely generated; it is killed by $\mathfrak mR$ and its residue field
is $k$. Thus each $\delta_x(X)$ is a finite nonnegative integer.

Finally, $\delta_x(X)=0$ exactly when $\mathcal O_{X,x}$ equals its integral
closure in $k(X)$, which is exactly when this one-dimensional Noetherian local
domain is integrally closed. By the DVR characterization this is equivalent
to being a DVR, and by the one-dimensional regular-local/DVR theorem this is
equivalent to regularity. Hence $\delta_x(X)=0$ if and only if $x$ is regular.
Because $k$ is algebraically closed it is perfect (every irreducible
polynomial over $k$ is linear; [[def-perfect-field]]), the regular-locus-open
theorem makes $X_{\mathrm{sing}}$ closed
([[thm-regular-locus-is-open-variety]]). The generic point has local ring
$k(X)$, a field and hence regular, so $X_{\mathrm{sing}}$ is proper. Every
proper closed subset of a finite-type integral curve is finite and consists
of closed points ([[lem-curve-closed-subsets-finite]]). Therefore the sum
defining $\delta(X)$ is finite and is supported precisely on the singular
closed points.
