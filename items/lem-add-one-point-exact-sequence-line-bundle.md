---
id: lem-add-one-point-exact-sequence-line-bundle
kind: lemma
title: "The exact sequence for adding one point to a divisor"
status: draft
origin: pipeline
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-degree-divisor-proper-curve
  - def-dependent-choice
  - def-dimension
  - def-direct-image-sheaf
  - def-divisor-smooth-proper-curve
  - def-divisor-support-positive-negative-parts
  - def-exact-sequence-sheaves
  - def-invertible-sheaf-of-cartier-divisor
  - def-kernel-cokernel-image-sheaves
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-order-codimension-one-rational-function
  - def-riemann-roch-space-of-divisor
  - def-residue-field-scheme-point
  - def-stalk-of-presheaf
  - def-sheaf-cohomology-derived-global-sections
  - def-sheaf-total-quotient-rings
  - def-skyscraper-sheaf-abelian-group
  - def-subspace-topology-top
  - def-the-quotient-of-an-object-by-a-subobject
  - lem-cartier-divisor-sheaf-invertible
  - lem-closed-immersion-preserves-sheaf-cohomology
  - lem-degree-effective-divisor-nonnegative
  - lem-divisor-order-monotonicity-sections
  - lem-field-is-noetherian
  - lem-filtered-colimits-of-abelian-groups-are-exact
  - lem-quotient-basis-lifts-to-an-adapted-basis
  - lem-riemann-roch-space-finite-dimensional
  - thm-abelian-sheaves-form-abelian-category
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-cohomology-one-point-space
  - thm-exactness-of-sheaves-stalkwise
  - thm-first-isomorphism-theorem-for-vector-spaces
  - thm-first-isomorphism-theorem-in-an-abelian-category
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-local-ring-smooth-curve-dvr
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-rank-nullity
  - thm-sheafification-preserves-stalks
  - thm-third-isomorphism-theorem-in-an-abelian-category
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Divisors, Sections 31.14-31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, inherited through the sheaf-cohomology and
Cartier-divisor suppliers of this page. Let $k$ be a field, let $C$ be a
smooth proper geometrically integral curve over $k$
([[def-algebraic-curve-over-field]]), let $D$ be a divisor on $C$
([[def-divisor-smooth-proper-curve]]), let $p\in C$ be a closed point with
residue field $\kappa(p)$ and residue degree $d:=[\kappa(p):k]$
([[def-residue-field-scheme-point]], [[def-degree-divisor-proper-curve]]), and
let $i_{p,*}\kappa(p)$ be the skyscraper sheaf at $p$ with value $\kappa(p)$
([[def-skyscraper-sheaf-abelian-group]]).

1. The natural morphism $\mathcal O_C(D)\to\mathcal O_C(D+p)$ of invertible
   subsheaves of the constant sheaf of rational functions is injective
   ([[lem-divisor-order-monotonicity-sections]]), and it fits into a short
   exact sequence of coherent $\mathcal O_C$-modules
   $$0\to\mathcal O_C(D)\to\mathcal O_C(D+p)\to i_{p,*}\kappa(p)\to0;$$
   thus the cokernel of the inclusion is the skyscraper sheaf at $p$ with value
   $\kappa(p)$ ([[def-coherent-module-scheme]]). This realises the promised
   third term $i_*\bigl(\mathcal O_C(D+p)|_p\bigr)$: the restriction of the
   invertible sheaf $\mathcal O_C(D+p)$ to the closed point $p$ is a
   one-dimensional $\kappa(p)$-vector space, and the pushforward of that value
   is the skyscraper sheaf of the exact sequence.
2. $H^0\bigl(C,i_{p,*}\kappa(p)\bigr)\cong\kappa(p)$, so
   $\dim_kH^0\bigl(C,i_{p,*}\kappa(p)\bigr)=d$, and
   $H^q\bigl(C,i_{p,*}\kappa(p)\bigr)=0$ for every $q\ge1$
   ([[def-sheaf-cohomology-derived-global-sections]]).
3. Iterating: for every effective divisor $E\ge0$ on $C$ the inclusion
   $\mathcal O_C(D)\to\mathcal O_C(D+E)$ has cokernel $Q_E$ fitting into a
   short exact sequence of coherent $\mathcal O_C$-modules
   $$0\to\mathcal O_C(D)\to\mathcal O_C(D+E)\to Q_E\to0$$
   with $(Q_E)_x=0$ for every closed point $x\notin\operatorname{Supp}(E)$;
   moreover $H^q(C,Q_E)=0$ for every $q\ge1$ and
   $$\dim_kH^0(C,Q_E)=\deg_k(E),$$
   so in particular $0\le\dim_kH^0(C,Q_E)\le\deg_k(E)$, the upper bound being
   the one promised
   ([[def-divisor-support-positive-negative-parts]],
   [[lem-degree-effective-divisor-nonnegative]]).

The sheaves $\mathcal O_C(D')$ used here are constructed from the actual
Weil-to-Cartier and Cartier-sheaf interfaces in [F2]. Under the stated Axiom
of Choice, [F12] supplies the Dependent Choice premise of the curve
Cartier-to-Weil result. The open-set order description in [F2] is stated for
nonempty opens; the section group on the empty open is zero.

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$, a divisor $D$ on $C$, a closed point $p\in C$, and, for part (3), an effective divisor $E$ on $C$.

[F1] Divisors and degrees. A divisor on $C$ is a finite formal sum $D=\sum_xn_x[x]$ over the closed points, $\operatorname{Supp}(E)$ is the finite set of closed points with nonzero coefficient, $D$ is effective when all coefficients are $\ge0$, the residue field $\kappa(x)$ of a closed point is a finite extension of $k$ with $[\kappa(x):k]=\dim_k\kappa(x)\ge1$, and $\deg_k(E)=\sum_xn_x[\kappa(x):k]$; $C$ is geometrically integral, separated and of finite type over $k$, and it is nonempty ([[def-divisor-smooth-proper-curve]], [[def-divisor-support-positive-negative-parts]], [[def-degree-divisor-proper-curve]], [[def-residue-field-scheme-point]], [[def-algebraic-curve-over-field]]). Moreover $\deg_k(E)\ge0$ for effective $E$, with $\deg_k(E)=0$ exactly for $E=0$ ([[lem-degree-effective-divisor-nonnegative]]).

[F2] Weil divisors, their Cartier sheaves, and the order description. In order inequalities below, use the convention $\operatorname{ord}_x(0)=+\infty$; this is notation for the zero section, not an extension of the valuation homomorphism domain. The divisor $D'$ on the smooth curve is a Weil divisor. By [[thm-cartier-weil-divisors-curves-agree]] it is represented by a Cartier divisor whose cycle is $D'$. The local-equation construction of [[def-invertible-sheaf-of-cartier-divisor]] gives the subsheaf $\mathcal O_C(D')\subseteq\mathcal K_C$, and [[lem-cartier-divisor-sheaf-invertible]] proves it invertible. The generic sheaf $\mathcal K_C$ is constant with value $k(C)$ ([[def-sheaf-total-quotient-rings]]). For a nonempty open $U\subseteq C$, its sections identify with $k(C)$; a rational function $f$ is a section of $\mathcal O_C(D')$ on $U$ exactly when it belongs to the stalk at every point of $U$. At the generic point the stalk is $k(C)$ and imposes no condition. At each closed point $x$, the local equation has order $n_x(D')$ by the cycle identification, so the DVR stalk condition is $\operatorname{ord}_x(f)+n_x(D')\ge0$ ([[thm-local-ring-smooth-curve-dvr]], [[def-order-codimension-one-rational-function]]). Locality of the subsheaf then gives
$$\mathcal O_C(D')(U)=\{f\in k(C):\operatorname{ord}_x(f)+n_x(D')\ge0\text{ for every closed point }x\in U\}.$$
For $U=\varnothing$, $\mathcal O_C(D')(U)=0$. Thus $D'\le D''$ gives the inclusion of these subsheaves and the stated closed-point stalk descriptions. The global-section instance is also the identification of [[def-riemann-roch-space-of-divisor]] using the rational-section dictionary [[thm-line-bundle-rational-section-cartier-divisor]].

[F3] Local structure at $p$. The local ring $\mathcal O_{C,p}$ is a discrete valuation ring with maximal ideal generated by a uniformizer $t$, so that $\kappa(p)=\mathcal O_{C,p}/(t)$ and every nonzero element of $\mathcal O_{C,p}$ is a unit times a power of $t$ ([[thm-local-ring-smooth-curve-dvr]]). For $f\in k(C)^\times$ the order $\operatorname{ord}_p(f)$ is additive, $\operatorname{ord}_p(f)\ge0$ if and only if $f\in\mathcal O_{C,p}$, and $\operatorname{ord}_p(f)=0$ if and only if $f$ is a unit of $\mathcal O_{C,p}$ ([[def-order-codimension-one-rational-function]]); consequently $t^{m}f\in\mathcal O_{C,p}$ if and only if $\operatorname{ord}_p(f)\ge-m$, and $t^{m}f\in t\mathcal O_{C,p}$ if and only if $\operatorname{ord}_p(f)\ge-m+1$, for every $m\in\mathbb Z$.

[F4] Monotonicity supplier. For divisors $D\le E$ the natural morphism of invertible subsheaves $\mathcal O_C(D)\to\mathcal O_C(E)$ is injective, and $L(D)\subseteq L(E)$; for $E=D+p$ the quotient $L(D+p)/L(D)$ embeds in $\kappa(p)$ with dimension at most $[\kappa(p):k]$ ([[lem-divisor-order-monotonicity-sections]]). Only the injectivity assertion is used below.

[F5] Exactness and stalks of sheaves. A sequence of sheaves of $\mathcal O_C$-modules is exact exactly when it is exact in the abelian category of sheaves of abelian groups, in the sense of [[def-exact-sequence-sheaves]]; the kernel sheaf of a morphism is computed objectwise while the cokernel sheaf is the sheafification of the objectwise cokernel, with the same formulas taken in the module categories on each open set, so cokernels and exactness of $\mathcal O_C$-module morphisms are computed on underlying sheaves of abelian groups ([[def-kernel-cokernel-image-sheaves]]). Since kernels are objectwise, stalks are filtered colimits of section groups ([[def-stalk-of-presheaf]]) and filtered colimits of abelian groups are exact ([[lem-filtered-colimits-of-abelian-groups-are-exact]]), the stalk of the kernel of a morphism is the kernel of the stalk map, and by the same exactness and [[thm-sheafification-preserves-stalks]] the stalk of the cokernel is the cokernel of the stalk map. Consequently a sequence of sheaves of abelian groups is exact if and only if it is exact on every stalk ([[thm-exactness-of-sheaves-stalkwise]]), and the category of sheaves of abelian groups is abelian ([[thm-abelian-sheaves-form-abelian-category]]).

[F6] Abelian-category algebra. For a morphism $f:A\to B$ of an abelian category there is a canonical isomorphism $A/\ker(f)\cong\operatorname{im}(f)$ ([[thm-first-isomorphism-theorem-in-an-abelian-category]]), and for subobjects $C\le B\le A$ there is a canonical isomorphism $(A/C)/(B/C)\cong A/B$ ([[thm-third-isomorphism-theorem-in-an-abelian-category]]); the quotient $A/B$ is the cokernel of the representing monomorphism $B\rightarrowtail A$ ([[def-the-quotient-of-an-object-by-a-subobject]]).

[F7] Skyscraper sheaves. For a point $x\in X$ of a topological space and an abelian group $A$, the skyscraper sheaf $i_{x,*}A$ has $(i_{x,*}A)(V)=A$ for $x\in V$ with identity restrictions and value $0$ for $x\notin V$ ([[def-skyscraper-sheaf-abelian-group]]). For a closed subset $Z\subseteq X$ with the subspace topology and inclusion $i:Z\hookrightarrow X$, the direct image $i_*\mathcal F$ of a sheaf $\mathcal F$ of abelian groups on $Z$ is given by $(i_*\mathcal F)(V)=\mathcal F(i^{-1}V)$ ([[def-direct-image-sheaf]], [[def-subspace-topology-top]]), and $H^q(Z,\mathcal F)\cong H^q(X,i_*\mathcal F)$ for every $q\ge0$ ([[lem-closed-immersion-preserves-sheaf-cohomology]]). On the one-point space $Z=\{\ast\}$ one has $H^0(Z,\mathcal F)\cong\mathcal F(Z)$ and $H^q(Z,\mathcal F)=0$ for every $q>0$ ([[thm-cohomology-one-point-space]]).

[F8] Long exact sequence. For every short exact sequence of abelian sheaves on $C$ there is a natural long exact sequence of sheaf cohomology groups $\cdots\to H^q(C,\mathcal F')\to H^q(C,\mathcal F)\to H^q(C,\mathcal F'')\to H^{q+1}(C,\mathcal F')\to\cdots$ ([[thm-long-exact-sequence-sheaf-cohomology]], [[def-sheaf-cohomology-derived-global-sections]]).

[F9] Coherence. A curve is of finite type over the field $k$ ([[def-algebraic-curve-over-field]]); a morphism of finite type provides affine charts $\operatorname{Spec}B$ with $B$ a finitely generated algebra over the coordinate ring of an affine open of the target ([[def-locally-finite-type-and-finite-type-morphism]]), a field is Noetherian ([[lem-field-is-noetherian]]) and a finitely generated algebra over a Noetherian ring is Noetherian ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]), so $C$ is locally Noetherian: it has an affine open cover by spectra of Noetherian rings ([[def-locally-noetherian-and-noetherian-scheme]]). For every divisor $D'$ the sheaf $\mathcal O_C(D')$ is a coherent $\mathcal O_C$-module ([[lem-riemann-roch-space-finite-dimensional]]), and on a locally Noetherian scheme the kernel, image and cokernel of a morphism of coherent $\mathcal O_C$-modules are coherent ([[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-coherent-module-scheme]]).

[F10] Linear algebra over $k$. For a linear map $T:V\to W$ with $V$ finite-dimensional, $\dim_kV=\dim_k\ker T+\dim_k\operatorname{im}T$ ([[thm-rank-nullity]]); the formula $\widetilde T(v+\ker T)=T(v)$ defines an isomorphism $V/\ker T\to\operatorname{im}T$ ([[thm-first-isomorphism-theorem-for-vector-spaces]]); for $W\le V$ with $V$ finite-dimensional, $\dim_k(V/W)=\dim_kV-\dim_kW$ ([[lem-quotient-basis-lifts-to-an-adapted-basis]]); and $\dim_k$ of a finite-dimensional $k$-vector space is a nonnegative integer ([[def-dimension]]). Hence for an exact sequence of $k$-vector spaces $0\to A\to B\to C\to 0$ with $A$ and $C$ finite-dimensional one has $\dim_kB=\dim_kA+\dim_kC$.

[F11] The Axiom of Choice enters through the sheaf-cohomology suppliers of [F7] and [F8], the coherence supplier [F9], the curve Cartier-to-Weil supplier in [F2], and the local-DVR supplier [F3]. The only additional premise needed there is Dependent Choice, which follows from the stated Axiom of Choice by [F12]; the argument below makes no further selection ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F12] In ZF, the Axiom of Choice implies Dependent Choice ([[thm-choice-implies-dependent-implies-countable-choice]]). Hence the stated Choice assumption supplies the Dependent Choice premise of [[thm-cartier-weil-divisors-curves-agree]].

## Proof

**Proof technique:** direct; construct the evaluation morphism carrying $\mathcal O_C(D+p)$ onto the skyscraper at $p$ with kernel $\mathcal O_C(D)$, verify the resulting sequence stalkwise, compute the cohomology of the skyscraper by pushing forward from the one-point space, and iterate the single-point sequence along the finite support of an effective divisor.

1.1 Setup and local structure at $p$. Write $D=\sum_xn_x[x]$, put $a:=n_p(D)$, and recall $d=[\kappa(p):k]=\dim_k\kappa(p)$ by [F1]; the divisor $D+p$ has coefficient $a+1$ at $p$ and the same coefficient as $D$ at every other closed point. By [F3], $\mathcal O_{C,p}$ is a discrete valuation ring with maximal ideal $(t)$ for a uniformizer $t$, the residue field is $\kappa(p)=\mathcal O_{C,p}/(t)$, $\operatorname{ord}_p$ is additive with $\operatorname{ord}_p(f)\ge0$ if and only if $f\in\mathcal O_{C,p}$, and $t^mf\in\mathcal O_{C,p}$ if and only if $\operatorname{ord}_p(f)\ge-m$ for $m\in\mathbb Z$. [F1, F3]

1.2 The curve is locally Noetherian. By [F9] the structure morphism $C\to\operatorname{Spec}k$ is of finite type, so every point of $C$ has an affine open neighbourhood $\operatorname{Spec}B$ with $B$ a finitely generated $k$-algebra; $k$ is Noetherian and a finitely generated algebra over a Noetherian ring is Noetherian, so each such $B$ is Noetherian, and $C$ is locally Noetherian by [F9]. [F9]

1.3 The two subsheaves and their order conditions. By [F2] the divisors $D$ and $D+p$ carry inclusions of invertible subsheaves $\mathcal O_C(D)\subseteq\mathcal O_C(D+p)\subseteq K_C$ of the constant sheaf of rational functions such that, for every nonempty open $U$, $\mathcal O_C(D)(U)$ consists of the $f\in k(C)$ with $\operatorname{ord}_x(f)+n_x\ge0$ for every closed point $x\in U$, and likewise for $\mathcal O_C(D+p)$ with the coefficient at $p$ raised by one; their section groups on the empty open are zero. In particular, if $p\in U$ and $f\in\mathcal O_C(D+p)(U)$, then $\operatorname{ord}_p(f)\ge-a-1$. By [F4] the natural morphism $\mathcal O_C(D)\to\mathcal O_C(D+p)$ of $\mathcal O_C$-modules is injective, given by the inclusion of subsheaves of $K_C$. [F2, F4]

2.1 Definition of the evaluation morphism $\psi$. Define for every open $U\subseteq C$ a map $\psi_U:\mathcal O_C(D+p)(U)\to(i_{p,*}\kappa(p))(U)$ by $\psi_U:=0$ when $p\notin U$, and by $\psi_U(f):=t^{a+1}f\bmod(t)\in\kappa(p)$ when $p\in U$, where $t$ is the uniformizer of step 1.1. This is well defined: for $f\in\mathcal O_C(D+p)(U)$ with $p\in U$, step 1.3 gives $\operatorname{ord}_p(f)\ge-a-1$, hence $\operatorname{ord}_p(t^{a+1}f)\ge0$, so $t^{a+1}f\in\mathcal O_{C,p}$ by step 1.1 and its class in $\kappa(p)=\mathcal O_{C,p}/(t)$ is defined. [F7, step 1.1, step 1.3]

2.2 Cohomology of the skyscraper. Let $Z=\{p\}$ be the one-point space with the subspace topology, with inclusion $i:Z\hookrightarrow C$, and let $\mathcal F$ be the sheaf of abelian groups on $Z$ with $\mathcal F(Z)=\kappa(p)$; by [F7] the direct image is $(i_*\mathcal F)(V)=\mathcal F(i^{-1}V)$, which equals $\kappa(p)=(i_{p,*}\kappa(p))(V)$ for opens $V$ containing $p$ and $0$ otherwise, so $i_*\mathcal F=i_{p,*}\kappa(p)$ and $H^q(C,i_{p,*}\kappa(p))\cong H^q(Z,\mathcal F)$ for every $q\ge0$ by [F7]. By [F7] again $H^0(Z,\mathcal F)\cong\mathcal F(Z)=\kappa(p)$ and $H^q(Z,\mathcal F)=0$ for $q>0$; hence $H^0(C,i_{p,*}\kappa(p))\cong\kappa(p)$, of $k$-dimension $\dim_k\kappa(p)=d$ by step 1.1, and $H^q(C,i_{p,*}\kappa(p))=0$ for every $q\ge1$. This is part (2) of the Statement. [F7, step 1.1]

3.1 $\psi$ is a morphism of sheaves of $\mathcal O_C$-modules. For every open $U$ the map $\psi_U$ is additive, because multiplication by $t^{a+1}$ and reduction modulo $(t)$ are additive on the groups involved; it is $\mathcal O_C(U)$-linear, because for $g\in\mathcal O_C(U)$ the germ of $g$ at $p$ lies in $\mathcal O_{C,p}$ with class $\bar g\in\kappa(p)$ and $t^{a+1}(gf)=g\cdot t^{a+1}f$ holds in $\mathcal O_{C,p}$, so $\psi_U(gf)=\bar g\,\psi_U(f)$; and the maps are compatible with restrictions: for $V\subseteq U$ with $p\notin U$ both maps are zero, for $p\in V\subseteq U$ the two subsheaves of $K_C$ have the same element $f$ and $i_{p,*}\kappa(p)$ has identity restrictions on opens containing $p$, while for $p\in U$, $p\notin V$ the target $(i_{p,*}\kappa(p))(V)$ is the zero group. Hence $\psi$ is a morphism of sheaves of $\mathcal O_C$-modules. [F5, F7, step 1.1, step 2.1]

3.2 The kernel of $\psi$ is $\mathcal O_C(D)$. At an open $U$ with $p\notin U$, step 1.3 gives $\mathcal O_C(D)(U)=\mathcal O_C(D+p)(U)$ and $\psi_U=0$, so $\ker\psi_U=\mathcal O_C(D)(U)$. At an open $U$ with $p\in U$, step 1.1 shows that $f\in\ker\psi_U$ is equivalent to $t^{a+1}f\in t\mathcal O_{C,p}$, equivalently to $\operatorname{ord}_p(f)\ge-a$, and together with the order conditions at the other points of $U$, which are the same for $D$ and $D+p$, this is exactly the condition $f\in\mathcal O_C(D)(U)$; the converse is immediate. Therefore $\ker\psi=\mathcal O_C(D)$ as subsheaves of $\mathcal O_C(D+p)$. [F2, F5, step 1.1, step 1.3, step 2.1]

3.3 Stalks of the skyscraper and surjectivity of $\psi$. By [F7] the skyscraper $i_{p,*}\kappa(p)$ has value $\kappa(p)$ on the opens containing $p$, with identity restrictions, and value $0$ on the opens not containing $p$; hence its stalk at $p$ is $\kappa(p)$, while at a point $x\ne p$ every section over an open containing $x$ restricts to zero on the open complement of the closed set $\{p\}$, which still contains $x$, so the stalk at $x$ is $0$. The map $\psi_x$ is a map into the zero group for $x\ne p$, and at $p$ the map $\psi_p$ is surjective: for $u\in\mathcal O_{C,p}$ the rational function $t^{-a-1}u$ satisfies $\operatorname{ord}_p(t^{-a-1}u)\ge-a-1$, hence lies in $\mathcal O_C(D+p)_p$ by the stalk description of [F2], so it is the germ of a section of $\mathcal O_C(D+p)$ near $p$, and $\psi_p(t^{-a-1}u)=u\bmod(t)$ because $\psi$ is defined by $f\mapsto t^{a+1}f\bmod(t)$ on sections over opens containing $p$ as in step 2.1. [F2, F3, F7, step 2.1]

4.1 Exactness of the single-point sequence. Consider the sequence of sheaves of $\mathcal O_C$-modules $0\to\mathcal O_C(D)\to\mathcal O_C(D+p)\xrightarrow{\psi}i_{p,*}\kappa(p)\to0$. At a point $x\ne p$ the stalk sequence is $0\to A_x\to A_x\to0\to0$, exact because the two subsheaves agree away from $p$ by step 1.3 and the target stalk is $0$; at $p$ the stalk sequence is $0\to t^{-a}\mathcal O_{C,p}\to t^{-a-1}\mathcal O_{C,p}\to\kappa(p)\to0$ by steps 1.1 and 3.3, and it is exact: the first map is the inclusion of the subgroup $t^{-a}\mathcal O_{C,p}$, so its kernel vanishes; the kernel of $\psi_p$ is the image of that inclusion, because the kernel sheaf of $\psi$ is $\mathcal O_C(D)$ by step 3.2 and the stalk of a kernel is the kernel of the stalk map by [F5]; and $\psi_p$ is surjective by step 3.3. By the stalkwise criterion for exactness [F5] the sequence is a short exact sequence, so the cokernel of the inclusion $\mathcal O_C(D)\to\mathcal O_C(D+p)$ is its third term $i_{p,*}\kappa(p)$. [F5, step 1.3, step 3.2, step 3.3]

5.1 Coherence of the third term. By [F9] the curve $C$ is locally Noetherian, and by [F9] the invertible sheaves $\mathcal O_C(D)$ and $\mathcal O_C(D+p)$ are coherent $\mathcal O_C$-modules; the present sequence is a short exact sequence of $\mathcal O_C$-modules whose left-hand map is a morphism of coherent modules with cokernel $i_{p,*}\kappa(p)$, so the cokernel is a coherent $\mathcal O_C$-module by [F9]. This and step 4.1 give part (1) of the Statement, with the cokernel identified as the skyscraper at $p$ with value $\kappa(p)$. [F5, F6, F9, step 1.2, step 4.1]

5.2 The extension step for the iteration. Let $p$ be a closed point with $E\ge p$ and put $E':=E-p$; set $A:=\mathcal O_C(D)$, $B:=\mathcal O_C(D+E')$ and $C':=\mathcal O_C(D+E)=\mathcal O_C(D+E'+p)$, so that $A\subseteq B\subseteq C'$ are nested subsheaves of $K_C$ by steps 1.3 with injective inclusion morphisms by [F4]. Define $Q_{E'}:=\operatorname{coker}(A\to B)$ and $Q_E:=\operatorname{coker}(A\to C')$. By the third isomorphism theorem in an abelian category [F6], applied to the subobjects $A\le B\le C'$, the quotient $Q_E/Q_{E'}$ is canonically isomorphic to $C'/B=\operatorname{coker}(B\to C')$, and by step 4.1 applied to the divisor $D+E'$ and the point $p$ the latter is $i_{p,*}\kappa(p)$; hence $0\to Q_{E'}\to Q_E\to i_{p,*}\kappa(p)\to0$ is a short exact sequence of sheaves of $\mathcal O_C$-modules. [F5, F6, step 1.3, step 4.1]

6.1 Support of $Q_E$. Let $x$ be a closed point with $x\notin\operatorname{Supp}(E)$; then the coefficients of $D$ and $D+E$ at $x$ coincide, so over an open neighbourhood of $x$ the order conditions defining the two subsheaves of step 1.3 are the same and the inclusion $A\subseteq C'$ induces an isomorphism of stalks at $x$; since the stalk of a cokernel is the cokernel of the stalk map by [F5], the stalk $(Q_E)_x$ is the cokernel of an isomorphism and hence $0$. Therefore $Q_E$ is supported on the finite set $\operatorname{Supp}(E)$. [F5, step 1.3, step 5.2]

6.2 Coherence of $Q_E$. The sheaves $\mathcal O_C(D)$ and $\mathcal O_C(D+E)$ are coherent $\mathcal O_C$-modules by [F9], the curve is locally Noetherian by step 1.2, and $Q_E$ is their cokernel by step 5.2; hence $Q_E$ is a coherent $\mathcal O_C$-module by [F9]. [F9, step 1.2, step 5.2]

6.3 The induction on $\deg_kE$. We prove by induction on the nonnegative integer $\deg_kE$ that $\dim_kH^0(C,Q_E)=\deg_k(E)$ and $H^q(C,Q_E)=0$ for every $q\ge1$, for every effective divisor $E$. If $\deg_kE=0$ then $E=0$ by [F1] and $Q_E$ is the cokernel of the identity of $\mathcal O_C(D)$, hence the zero sheaf, so both assertions hold. If $E\ne0$, choose a closed point $p\in\operatorname{Supp}(E)$ and put $E':=E-p$, an effective divisor with $\deg_kE'=\deg_kE-[\kappa(p):k]<\deg_kE$ by [F1]; by step 5.2 there is a short exact sequence $0\to Q_{E'}\to Q_E\to i_{p,*}\kappa(p)\to0$, whose long exact sequence [F8] contains the exact segment $H^0(Q_{E'})\to H^0(Q_E)\to\kappa(p)\to H^1(Q_{E'})\to H^1(Q_E)\to H^1(i_{p,*}\kappa(p))=0$, where $H^q(i_{p,*}\kappa(p))=0$ for $q\ge1$ by step 2.2. Since $H^1(Q_{E'})=0$ by the induction hypothesis, the segment collapses to the exact sequence $0\to H^0(Q_{E'})\to H^0(Q_E)\to\kappa(p)\to0$, so [F10] gives $\dim_kH^0(Q_E)=\dim_kH^0(Q_{E'})+\dim_k\kappa(p)=\deg_kE'+[\kappa(p):k]=\deg_kE$; and for $q\ge1$ the exactness of $H^q(Q_{E'})\to H^q(Q_E)\to H^q(i_{p,*}\kappa(p))$, with both outer groups zero by the induction hypothesis and step 2.2, gives $H^q(Q_E)=0$. [F1, F8, F10, step 2.2, step 5.2]

7.1 Conclusion and choice accounting. Step 4.1 gives the short exact sequence of part (1) with its cokernel identified, and step 5.1 the coherence of its terms; step 2.2 gives part (2); and steps 6.1, 6.2 and 6.3 give, for every effective divisor $E$, the short exact sequence with cokernel $Q_E$, its support on $\operatorname{Supp}(E)$, its coherence and the dimension formula $\dim_kH^0(C,Q_E)=\deg_k(E)$, hence the promised bounds $0\le\dim_kH^0(C,Q_E)\le\deg_k(E)$. The Axiom of Choice is used only through the suppliers recorded in [F11], namely the sheaf-cohomology results of [F7] and [F8], the coherence supplier of [F9], the flagged Cartier-divisor suppliers of [F2], and the local-DVR supplier of [F3]; the only selections made above are the uniformizer $t$ supplied by [F3] and the point $p$ chosen in the finite set $\operatorname{Supp}(E)$. [F2, F3, F7, F8, F9, F11, F12, step 4.1, step 5.1, step 2.2, step 6.1, step 6.2, step 6.3] ∎
