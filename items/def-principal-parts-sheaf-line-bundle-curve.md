---
id: def-principal-parts-sheaf-line-bundle-curve
kind: definition
title: "Principal parts of an invertible sheaf on a curve"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-associated-sheaf-module-affine-scheme
  - def-discrete-valuation-ring
  - def-field
  - def-generic-point-irreducible-closed-subset
  - def-invertible-sheaf
  - def-kernel-cokernel-image-sheaves
  - def-locally-noetherian-and-noetherian-scheme
  - def-module-on-ringed-space
  - def-order-codimension-one-rational-function
  - def-proper-morphism
  - def-quasi-coherent-module-scheme
  - def-rational-section-line-bundle
  - def-sheafification
  - def-skyscraper-sheaf-abelian-group
  - def-sheaf-on-topological-space
  - def-sheaf-total-quotient-rings
  - def-weil-divisor-normal-noetherian-scheme
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions
  - lem-integral-finite-type-scheme-function-field
  - lem-principal-weil-divisor-locally-finite
  - lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-dvr-element-normal-form
  - thm-dvr-ideal-and-module-length
  - thm-exactness-of-sheaves-stalkwise
  - thm-kernels-cokernels-qc-modules
  - thm-local-ring-smooth-curve-dvr
  - thm-sections-basic-open-affine-scheme
  - thm-sheaf-morphism-isomorphism-stalkwise
  - thm-valuation-ring-is-integrally-closed
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Definition

Assume the Axiom of Choice as inherited from the curve and sheaf suppliers
([[def-axiom-of-choice]]); AC implies Dependent Choice by
[[thm-choice-implies-dependent-implies-countable-choice]], which supplies the
choice hypothesis of the finite-support lemma below. Let $k$ be a field and
let $C$ be a smooth proper
geometrically integral curve over $k$ ([[def-algebraic-curve-over-field]]),
with generic point $\eta$ ([[def-generic-point-irreducible-closed-subset]]) and
function field $K=\mathcal O_{C,\eta}=k(C)$
([[lem-integral-finite-type-scheme-function-field]]). Let $\mathcal L$ be an invertible
$\mathcal O_C$-module ([[def-invertible-sheaf]],
[[def-module-on-ringed-space]]).

**Sheaf of meromorphic sections.** Write $\mathcal L_\eta$ also for the constant sheaf with value the generic stalk $\mathcal L_\eta$, a one-dimensional $K$-vector space. This is the sheaf of meromorphic sections of $\mathcal L$; its global sections include zero. In the convention of [[def-rational-section-line-bundle]], a **rational section** is a nonzero element of this space ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]], [[def-sheaf-on-topological-space]]).

The
natural map $\mathcal L\to\mathcal L_\eta$ is injective: on an affine
trivializing open $U=\operatorname{Spec}A$ it is the map $A\to K$ in a
frame, and $A$ is a domain because $C$ is integral
([[def-invertible-sheaf]], [[def-algebraic-curve-over-field]]).

**Sheaf of principal parts.** Define
$$\mathcal P(\mathcal L):=\operatorname{coker}(\mathcal L\longrightarrow\mathcal L_\eta)=\mathcal L_\eta/\mathcal L.$$
The stalk sequence is exact by
[[thm-exactness-of-sheaves-stalkwise]]. At the generic point the two stalks
are both $\mathcal L_\eta$, so $\mathcal P(\mathcal L)_\eta=0$. At a
closed point $p$, exactness gives
$$\mathcal P(\mathcal L)_p=\mathcal L_\eta/\mathcal L_p.$$
Trivializing $\mathcal L_p=A_pe_{\mathcal L}$ identifies this quotient
with $K/A_p$, where $A_p=\mathcal O_{C,p}$ is a DVR with uniformizer
$t_p$ ([[thm-local-ring-smooth-curve-dvr]]). It is a torsion $A_p$-module:
if a class is represented by $a/b$ with $a,b\in A_p$ and $b\ne0$, then
multiplication by $b$ kills it. By the published DVR normal-form theorem
[[thm-dvr-element-normal-form]], every class belongs to some submodule
$t_p^{-n}A_p/A_p$ with $n\ge0$: if its representative has valuation $m<0$,
take $n=-m$; if $m\ge0$, its class is zero. Multiplication by $t_p^n$ identifies
that submodule with $A_p/(t_p^n)$, which has length $n$ by
[[thm-dvr-ideal-and-module-length]]. Thus $K/A_p$ is the union of these
finite-length torsion submodules. A **local principal part** at $p$ is an
element of $\mathcal L_\eta/\mathcal L_p$.

**Quasi-coherence.** On an affine trivializing open $U=\operatorname{Spec}A$
with fraction field $K$, the restriction of $\mathcal L_\eta$ is the
associated sheaf $\widetilde K$: on a distinguished open $D(f)$ with
$f\ne0$, the constant sheaf has sections $K$ and
$\widetilde K(D(f))=K_f=K$; on $D(0)=\varnothing$ both have zero sections.
The restriction of $\mathcal L$ is $\widetilde A$. Therefore both are
quasi-coherent, and their quotient is quasi-coherent by the published
[[thm-kernels-cokernels-qc-modules]]. The principal-parts sheaf is torsion,
not coherent; its stalk $K/A_p$ is not finitely generated over the DVR.
([[def-associated-sheaf-module-affine-scheme]],
[[thm-sections-basic-open-affine-scheme]],
[[def-quasi-coherent-module-scheme]])

**Finite support of rational sections.** First verify the hypotheses of
[[lem-principal-weil-divisor-locally-finite]]. The affine coordinate rings of
$C$ are finite-type algebras over the Noetherian field $k$ ([[def-field]]), hence Noetherian
by [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]; thus $C$ is
locally Noetherian. It is quasi-compact because its structure morphism is
proper ([[def-proper-morphism]]), so $C$ is Noetherian in the sense of
[[def-locally-noetherian-and-noetherian-scheme]]. Every point is either the
generic point or closed, since $C$ is integral of dimension one. The generic
local ring is the field $K$; every closed-point local ring is a DVR by
[[thm-local-ring-smooth-curve-dvr]]. A field is integrally closed; a DVR is a
valuation ring by [[def-discrete-valuation-ring]] and therefore integrally closed by
[[thm-valuation-ring-is-integrally-closed]]. Thus all local rings are
integrally closed domains, so $C$ is normal in the sense required by
[[def-weil-divisor-normal-noetherian-scheme]]. In particular, each closed
point is a prime divisor.

Now choose a finite affine cover by opens trivializing $\mathcal L$ for a
nonzero global rational section $s$. On each such open $U_i$, write
$s|_{U_i}=f_i e_i$ with $f_i\in K^\times$, viewed as a global section of the
constant sheaf of meromorphic functions $\mathcal K_C$
([[def-sheaf-total-quotient-rings]],
[[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]). Every closed point of the
smooth integral curve is a prime divisor. The support where
$\operatorname{ord}_p(f_i)\ne0$ is locally finite by
[[lem-principal-weil-divisor-locally-finite]], hence finite on $C$ by
quasi-compactness. Taking the finite union over the cover shows that $s$ is
regular at all but finitely many closed points; indeed, outside this union
each $f_i$ is a unit in the local DVR, so $s$ is a local generator. The zero
meromorphic section is regular everywhere. This uses only the local coefficient
of a rational section and the stated principal-Weil-divisor supplier; it does
not require a Cartier-divisor identification.

**The direct sum of skyscrapers.** For each closed point $p$, let
$\mathcal S_p$ be the skyscraper sheaf with value
$\mathcal L_\eta/\mathcal L_p$ at $p$ and zero stalks elsewhere, with
$\mathcal O_C$ acting through $\mathcal O_{C,p}$ at $p$
([[def-skyscraper-sheaf-abelian-group]], [[def-module-on-ringed-space]]). Put
$$\mathcal S:=\bigoplus_{p\in C_{\mathrm{closed}}}\mathcal S_p.$$
By [[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]], this
coproduct is the sheafification of the presheaf direct sum and its stalk at
any point is the direct sum of the summand stalks. By the sheafification
property [[def-sheafification]], a section of this sheafification is locally
represented by finite-support families, so its
support is locally finite.

For any open $U$ and $q\in\mathcal P(\mathcal L)(U)$, the quotient map
locally lifts $q$ to a meromorphic section $r$
([[def-kernel-cokernel-image-sheaves]], [[def-sheafification]]). Around each $x\in U$, shrink
to an affine trivializing neighborhood on which a lift exists and write
$r=f e$ (or $r=0$); here $f\in K$ gives a global rational coefficient, so
the preceding finite-support argument applies. The nonzero stalks of $q$
there are contained in the finite pole support of $r$. Hence
the family of germs $(q_p)_{p\in U\cap C_{\mathrm{closed}}}$ is locally
finite and defines a section of $\mathcal S(U)$. This assignment gives a
natural $\mathcal O_C$-linear sheaf morphism
$$\gamma:\mathcal P(\mathcal L)\longrightarrow\mathcal S.$$
At a closed point $p$, the stalk map is the identity on
$\mathcal L_\eta/\mathcal L_p$: the $p$-summand is the only summand with
nonzero stalk there. At the generic point both stalks vanish, since every
closed point has a neighborhood of $\eta$ avoiding it and coproduct stalks
are direct sums. Thus $\gamma$ is an isomorphism by the published
[[thm-sheaf-morphism-isomorphism-stalkwise]]. This proves that
$\mathcal P(\mathcal L)$ is the direct sum of the closed-point skyscraper
sheaves with the stated fibers.

Because $C$ is quasi-compact, a locally finite support subset of $C$ is
finite. Consequently
$$H^0(C,\mathcal P(\mathcal L))=\bigoplus_{p\in C_{\mathrm{closed}}}\mathcal L_\eta/\mathcal L_p$$
is the vector space of finite-support families of local principal parts.
For every global meromorphic section $s\in\mathcal L_\eta$, its diagonal
family $(s+\mathcal L_p)_p$ has finite support by the preceding argument,
so the diagonal map
$$\mathcal L_\eta\longrightarrow H^0(C,\mathcal P(\mathcal L)),\qquad s\longmapsto(s+\mathcal L_p)_p$$
is well-defined. Its image consists of the principal parts of global
meromorphic sections. A global regular section maps to zero because each of its
germs lies in $\mathcal L_p$. The quotient of finite-support principal
parts by this diagonal image is the cohomology space computed in the next
item of this development.
