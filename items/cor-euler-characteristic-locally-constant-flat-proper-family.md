---
id: cor-euler-characteristic-locally-constant-flat-proper-family
kind: corollary
title: "Euler characteristic in a proper flat family is locally constant"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-nakayama-generators-modulo-an-ideal
  - def-affine-open-subscheme
  - def-affine-scheme-spectrum
  - def-associated-sheaf-module-affine-scheme
  - def-axiom-of-choice
  - def-base-change-morphism-schemes
  - def-coherent-module-scheme
  - def-cohomology-object-of-a-cochain-complex
  - def-dependent-choice
  - def-dimension
  - def-euler-characteristic-coherent-sheaf
  - def-fibre-of-module-at-point
  - def-fibre-product-schemes-universal-property
  - def-finite-type-finite-presentation-module-sheaf
  - def-finitely-presented-module-and-algebra
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-generated-cyclic-finitely-generated-and-free-modules
  - def-jacobson-radical-of-a-ring
  - def-kernel-cokernel-image-sheaves
  - def-locally-finite-presentation-morphism
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-local-ring
  - def-projective-module
  - def-proper-morphism
  - def-pullback-module-ringed-spaces
  - def-quasi-coherent-module-scheme
  - def-quasi-compact-and-quasi-separated-morphism
  - def-rank-and-nullity
  - def-residue-field-scheme-point
  - def-scheme
  - def-sheaf-cohomology-derived-global-sections
  - def-tensor-product-total-complex-of-chain-complexes
  - lem-associated-sheaf-stalk-localization
  - lem-base-change-composition
  - lem-base-change-locally-finite-type-presentation
  - lem-cohomology-functoriality-sheaf-and-space
  - lem-field-is-noetherian
  - lem-fibre-product-open-restriction
  - lem-proper-flat-fp-cohomology-perfect-complex
  - lem-proper-stable-base-change
  - lem-pullback-qc-module-quasi-coherent
  - thm-affine-quasi-coherent-equivalence
  - thm-associativity-of-balanced-tensor-products
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-localisation-of-modules-is-tensor-product
  - thm-locally-free-locus-finite-presentation-open
  - thm-nakayama-lemma
  - thm-projective-module-characterizations
  - thm-rank-nullity
  - thm-right-exactness-of-tensor-products
  - thm-splitting-lemma-for-modules
  - thm-tensor-products-commute-with-arbitrary-direct-sums
  - thm-unit-isomorphisms-for-module-tensor-products
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Derived Categories of Schemes, Lemma 36.32.2 (Tag 0B9T)"
      url: "https://stacks.math.columbia.edu/tag/0B9T"
    - title: "The Stacks Project, Derived Categories of Schemes, Section 36.30 (Remark 30.2, Tag 0A1I, and Lemma 30.4, Tag 0A1K)"
      url: "https://stacks.math.columbia.edu/download/perfect.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice
([[def-axiom-of-choice]], [[def-dependent-choice]]), inherited from the
perfect-complex construction cited below. Let $f:X\to S$ be a proper morphism
of finite presentation ([[def-proper-morphism]],
[[def-locally-finite-presentation-morphism]]) with $S$ an arbitrary scheme,
and let $\mathcal F$ be an $\mathcal O_X$-module of finite presentation
([[def-finite-type-finite-presentation-module-sheaf]]) that is flat over $S$:
for every $x\in X$ the stalk $\mathcal F_x$ is a flat module over the local
ring $\mathcal O_{S,f(x)}$
([[def-flat-and-faithfully-flat-modules-and-ring-maps]], [[def-local-ring]]).

For a point $s\in S$ let $\kappa(s)$ be its residue field
([[def-residue-field-scheme-point]]), let
$$X_s:=X\times_S\operatorname{Spec}\kappa(s)$$
be the fibre of $f$ over $s$ with projection $g_s:X_s\to X$
([[def-base-change-morphism-schemes]],
[[def-fibre-product-schemes-universal-property]]), and let
$\mathcal F_s:=g_s^*\mathcal F$ ([[def-pullback-module-ringed-spaces]]). Then
$X_s$ is proper over $\kappa(s)$ and $\mathcal F_s$ is coherent, so the Euler
characteristic
$$\chi(X_s,\mathcal F_s)=\sum_{q\ge0}(-1)^q\dim_{\kappa(s)}H^q(X_s,\mathcal F_s)$$
is a well-defined integer ([[def-euler-characteristic-coherent-sheaf]],
[[def-dimension]]), and the function $s\mapsto\chi(X_s,\mathcal F_s)$ is
**locally constant** on $S$: every point $s_0\in S$ has an open neighbourhood
$V\subseteq S$ and a constant $c\in\mathbb Z$ with
$\chi(X_s,\mathcal F_s)=c$ for all $s\in V$.

In particular the conclusion holds when $\mathcal F$ is coherent and flat over
$S$, since a coherent module is finitely presented ([F2]). If $f$ is flat, the
conclusion holds for $\mathcal F=\mathcal O_X$: the structure sheaf is the free
$\mathcal O_X$-module of rank one, hence finitely presented, and it is flat
over $S$ by flatness of $f$. That clause uses finite presentation and not
coherence; over a non-Noetherian base the structure sheaf $\mathcal O_X$ need
not be coherent ([[def-coherent-module-scheme]]).

The empty source $X=\varnothing$, the zero sheaf $\mathcal F=0$, the empty base
$S=\varnothing$, an affine or non-Noetherian base $S$ and the flat
structure-sheaf case are included; no Noetherian, projectivity, flatness of
$f$ or finite-dimensionality hypothesis beyond the stated ones is imposed
anywhere.

## Facts & Assumptions
**Given:** The Axiom of Choice and the Axiom of Dependent Choice, a proper morphism of finite presentation $f:X\to S$ with $S$ arbitrary, an $\mathcal O_X$-module $\mathcal F$ of finite presentation that is flat over $S$, and a point $s_0\in S$.

[F1] Properness, finite presentation and affine charts: a proper morphism is separated, of finite type and universally closed; a morphism of finite type is quasi-compact; every point of a scheme has an affine open neighbourhood, so there is an affine open $U=\operatorname{Spec}A\subseteq S$ containing $s_0$; the points of $U$ are the primes $\mathfrak m\subseteq A$, with $\kappa(\mathfrak m)\cong A_{\mathfrak m}/\mathfrak m A_{\mathfrak m}$; the open subscheme $X_U:=f^{-1}U$ represents the fibre product $X\times_SU$, its structure morphism $X_U\to U$ is proper, and base change of a locally finitely presented morphism is again locally of finite presentation, so $X_U\to U$ is proper of finite presentation. ([[def-proper-morphism]], [[def-locally-finite-type-and-finite-type-morphism]], [[def-quasi-compact-and-quasi-separated-morphism]], [[def-locally-finite-presentation-morphism]], [[def-scheme]], [[def-affine-scheme-spectrum]], [[def-residue-field-scheme-point]], [[def-affine-open-subscheme]], [[lem-fibre-product-open-restriction]], [[lem-proper-stable-base-change]], [[lem-base-change-locally-finite-type-presentation]])

[F2] Coherence implies finite presentation: a coherent $\mathcal O_X$-module is quasi-coherent of finite type, and the kernel of every morphism $\mathcal O_U^n\to\mathcal F|_U$ is of finite type; hence on an affine open $\operatorname{Spec}B$ with $\mathcal F|_{\operatorname{Spec}B}\cong\widetilde M$ and $M$ finitely generated, the kernel of a surjection $B^n\to M$ is finitely generated and $M$ is finitely presented, so $\mathcal F$ is finitely presented; restrictions of coherent modules to open subschemes are coherent. ([[def-coherent-module-scheme]], [[def-finite-type-finite-presentation-module-sheaf]], [[def-quasi-coherent-module-scheme]], [[def-kernel-cokernel-image-sheaves]], [[def-finitely-presented-module-and-algebra]], [[thm-affine-quasi-coherent-equivalence]])

[F3] The universal perfect complex: for the commutative ring $A$, the proper morphism of finite presentation $X_U\to\operatorname{Spec}A$ and the finitely presented module $\mathcal F_U:=\mathcal F|_{X_U}$ that is flat over $A$ (each stalk flat over the corresponding base local ring), there are an integer $r\ge0$ and a bounded complex $K^\bullet$ of finitely generated projective $A$-modules, concentrated in degrees $0,\dots,r$ and finite free in positive degrees, with canonical isomorphisms $\theta_{A'}:H^q(K^\bullet\otimes_AA')\cong H^q((X_U)_{A'},(\mathcal F_U)_{A'})$ for every $A$-algebra $A'$ and every $q\in\mathbb Z$, natural in $A'$; here $K^\bullet\otimes_AA'$ is the termwise tensor complex and $H^q$ is the cohomology object of a cochain complex. The Axiom of Choice and the Axiom of Dependent Choice are inherited from this supplier. ([[lem-proper-flat-fp-cohomology-perfect-complex]], [[def-tensor-product-total-complex-of-chain-complexes]], [[def-cohomology-object-of-a-cochain-complex]], [[def-base-change-morphism-schemes]], [[def-pullback-module-ringed-spaces]], [[def-axiom-of-choice]], [[def-dependent-choice]])

[F4] Open restriction commutes with base change: for a morphism $f:X\to S$, an open $U\subseteq S$ and the open subscheme $X_U=f^{-1}U$ representing $X\times_SU$, and for every $S$-scheme $T$ whose structure morphism to $S$ factors through $U$, there is a canonical identification $X\times_ST\cong X_U\times_UT$ compatible with the projections; consequently, for $s\in U$ the fibre of $f$ at $s$ is canonically identified with the fibre of $f_U:X_U\to U$ at $s$, and under this identification the pullback of $\mathcal F$ to the fibre of $f$ corresponds to the pullback of $\mathcal F_U$ to the fibre of $f_U$, by the composition rule $f^*g^*\cong(g\circ f)^*$ for pullbacks of modules. ([[lem-fibre-product-open-restriction]], [[lem-base-change-composition]], [[def-base-change-morphism-schemes]], [[def-pullback-module-ringed-spaces]])

[F5] Cohomology is invariant under isomorphism: if a morphism of schemes is an isomorphism and the coefficient sheaves on source and target correspond under the pullback along it, then the pullback maps of sheaf cohomology along the isomorphism and along an inverse are mutually inverse, by the compatibility with composition and the identity clause of the variance of sheaf cohomology. ([[lem-cohomology-functoriality-sheaf-and-space]], [[def-sheaf-cohomology-derived-global-sections]])

[F6] The fibres are proper over their residue fields and the pulled-back sheaves are coherent: for $s\in S$ the base change $X_s\to\operatorname{Spec}\kappa(s)$ of the proper morphism $f$ is proper, hence of finite type and quasi-compact, so $X_s$ is covered by affine charts $\operatorname{Spec}B$ with $B$ a finitely generated $\kappa(s)$-algebra; a field is Noetherian and a finitely generated algebra over a Noetherian ring is Noetherian, so each such $B$ is Noetherian and $X_s$ is locally Noetherian. The pullback $\mathcal F_s$ is quasi-coherent, and it is of finite type: over an affine chart $\operatorname{Spec}B$ of $X_s$ mapping into an affine chart $\operatorname{Spec}B_0$ of $X$ on which $\mathcal F\cong\widetilde M$ with $M$ finitely generated, the pullback is the associated sheaf of $B\otimes_{B_0}M$, which is finitely generated because extension of scalars is right exact; on the locally Noetherian scheme $X_s$ a quasi-coherent module of finite type is coherent. ([[lem-proper-stable-base-change]], [[def-proper-morphism]], [[def-locally-finite-type-and-finite-type-morphism]], [[lem-field-is-noetherian]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[def-locally-noetherian-and-noetherian-scheme]], [[lem-pullback-qc-module-quasi-coherent]], [[thm-affine-quasi-coherent-equivalence]], [[def-associated-sheaf-module-affine-scheme]], [[thm-right-exactness-of-tensor-products]], [[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-finite-type-finite-presentation-module-sheaf]])

[F7] Rank-nullity: for a linear map $T:V\to W$ of vector spaces over a field whose domain $V$ is finite-dimensional, $\dim V=\dim\ker T+\dim\operatorname{im}T$, both summands being natural numbers; in particular the image of a surjection from a finite-dimensional vector space is finite-dimensional. ([[thm-rank-nullity]], [[def-rank-and-nullity]], [[def-dimension]])

[F8] Finitely generated projective modules: a finitely generated module is a quotient of a finite free module; a surjection onto a projective module splits, so a finitely generated projective module is a direct summand of a finite free module, hence finitely generated and finitely presented; over a local ring $(R,\mathfrak n)$, a finitely generated module $N$ whose residue classes generate $N/\mathfrak nN$ is generated by lifts of those classes, for a finitely generated projective $N$, choose lifts of a basis of the finite-dimensional residue vector space $N/\mathfrak nN$. Nakayama makes the resulting map $R^m\to N$ surjective, and projectivity splits it. Its kernel $N'$ is a direct summand of $R^m$, hence finitely generated. After reducing this split sequence modulo $\mathfrak n$, the map on the chosen basis is an isomorphism, so $N'/\mathfrak nN'=0$. Nakayama now gives $N'=0$, hence $N\cong R^m$ is free. The implication from projectivity to the splitting uses the Axiom of Choice. ([[def-generated-cyclic-finitely-generated-and-free-modules]], [[thm-splitting-lemma-for-modules]], [[thm-projective-module-characterizations]], [[def-projective-module]], [[thm-nakayama-lemma]], [[cor-nakayama-generators-modulo-an-ideal]], [[def-jacobson-radical-of-a-ring]], [[def-local-ring]], [[def-finitely-presented-module-and-algebra]], [[def-axiom-of-choice]])

[F9] The free locus and the fibre dimension: let $P$ be a finitely generated projective $A$-module with associated sheaf $\widetilde P$ on $\operatorname{Spec}A$; for $r\ge0$ the locus $Z_r=\{x\in\operatorname{Spec}A:\widetilde P_x\cong\mathcal O_{\operatorname{Spec}A,x}^{\,r}\}$ is open and $\widetilde P$ is locally free of rank $r$ on it. For the prime $\mathfrak p\subseteq A$ corresponding to $x$, the stalk is $\widetilde P_x\cong P_{\mathfrak p}$ and the fibre is $\widetilde P(x)=P_{\mathfrak p}\otimes_{A_{\mathfrak p}}\kappa(\mathfrak p)\cong P\otimes_A\kappa(\mathfrak p)$; on the free locus of rank $r$ this fibre is $\kappa(\mathfrak p)^r$, so the function $\mathfrak p\mapsto\dim_{\kappa(\mathfrak p)}(P\otimes_A\kappa(\mathfrak p))$ is constant with value $r$ on $Z_r$. ([[thm-locally-free-locus-finite-presentation-open]], [[def-locally-free-sheaf-finite-rank]], [[def-fibre-of-module-at-point]], [[lem-associated-sheaf-stalk-localization]], [[thm-affine-quasi-coherent-equivalence]], [[def-associated-sheaf-module-affine-scheme]], [[thm-localisation-of-modules-is-tensor-product]], [[thm-associativity-of-balanced-tensor-products]], [[thm-unit-isomorphisms-for-module-tensor-products]], [[thm-tensor-products-commute-with-arbitrary-direct-sums]])

[F10] The Axiom of Choice and the Axiom of Dependent Choice are the choice principles named in the statement. ([[def-axiom-of-choice]], [[def-dependent-choice]])

## Proof

**Proof technique:** direct: restrict to an affine chart of the base, use the universal perfect complex on that chart to express every fibre's cohomology as the cohomology of a bounded complex of vector spaces, compute the Euler characteristic as the alternating sum of the dimensions of the complex terms by rank-nullity, and observe that the fibre dimensions of the finitely generated projective terms are locally constant.

1.1 The affine chart and its data. Fix $s_0\in S$ and choose by [F1] an affine open $U=\operatorname{Spec}A\subseteq S$ containing $s_0$; write $\mathfrak m_0\subseteq A$ for the corresponding prime and put $X_U:=f^{-1}U\cong X\times_SU$ and $\mathcal F_U:=\mathcal F|_{X_U}$. By [F1] the morphism $f_U:X_U\to U$ is proper of finite presentation. The restriction $\mathcal F_U$ is finitely presented, because finite presentation is local on $X$ and restrictions to open subschemes of a finitely presented module are finitely presented; and $\mathcal F_U$ is flat over $A$, because for $x\in X_U$ the open subscheme $X_U\subseteq X$ has $(\mathcal F_U)_x=\mathcal F_x$ and the local rings $\mathcal O_{U,f_U(x)}=\mathcal O_{S,f(x)}$ agree, over which $\mathcal F_x$ is flat by hypothesis. [F1, given]

1.2 The universal complex on the chart. By 1.1 the hypotheses of [F3] hold for the proper finitely presented morphism $f_U$ and the finitely presented module $\mathcal F_U$ flat over $A$, so there are an integer $r\ge0$ and a bounded complex $K^\bullet$ of finitely generated projective $A$-modules, concentrated in degrees $0,\dots,r$ and finite free in positive degrees, such that for every $A$-algebra $A'$ and every $q$ there is a canonical isomorphism $\theta_{A'}:H^q(K^\bullet\otimes_AA')\cong H^q((X_U)_{A'},(\mathcal F_U)_{A'})$. [F3, 1.1]

1.3 The fibre of $f$ and the fibre of $f_U$ agree. Let $s\in U$, with corresponding prime $\mathfrak m\subseteq A$ and residue field $\kappa(s)=A_{\mathfrak m}/\mathfrak m A_{\mathfrak m}$, which is an $A$-algebra. By [F4] the fibre $X_s$ of $f$ at $s$ is canonically identified with the fibre $(X_U)_{\kappa(s)}=X_U\times_{\operatorname{Spec}A}\operatorname{Spec}\kappa(s)$ of $f_U$ at $\mathfrak m$, compatibly with the projections, and under this identification the pullback $\mathcal F_s$ of $\mathcal F$ corresponds to the pullback $(\mathcal F_U)_{\kappa(s)}$ of $\mathcal F_U$. By [F5] the cohomology groups are correspondingly identified, so $H^q(X_s,\mathcal F_s)\cong H^q((X_U)_{\kappa(s)},(\mathcal F_U)_{\kappa(s)})$ as $\kappa(s)$-vector spaces for every $q$. [F4, F5]

1.4 The Euler characteristic via the complex. By [F6] the scheme $X_s$ is proper over $\kappa(s)$ and $\mathcal F_s$ is coherent, so the Euler characteristic of the statement is defined; combining 1.3 with [F3] applied to the $A$-algebra $A'=\kappa(s)$ gives, for every $q\ge0$, $$\dim_{\kappa(s)}H^q(X_s,\mathcal F_s)=\dim_{\kappa(s)}H^q(K^\bullet\otimes_A\kappa(s)).$$ The complex $C^\bullet:=K^\bullet\otimes_A\kappa(s)$ is a bounded complex of $\kappa(s)$-vector spaces concentrated in degrees $0,\dots,r$. Each term is finite-dimensional: the finitely generated projective module $K^q$ is a direct summand of a finite free $A$-module and hence a quotient of one by [F8], so $C^q$ is a quotient of a finite free $\kappa(s)$-module, and [F7] gives $\dim_{\kappa(s)}C^q<\infty$. [F3, F6, F7, F8, 1.3]

1.5 Euler-Poincare for the fibre complex. Write $d^q:C^q\to C^{q+1}$ for the differentials, $Z^q=\ker d^q$ and $B^q=\operatorname{im}d^{q-1}$, so that $H^q(C^\bullet)=Z^q/B^q$ and $B^q=0$ for $q\le0$, $B^{q+1}=0$ for $q\ge r$ because $C^\bullet$ vanishes outside degrees $0,\dots,r$. Applying [F7] to $d^q$, whose domain $C^q$ is finite-dimensional by 1.4, gives $\dim C^q=\dim Z^q+\dim B^{q+1}$, so $Z^q$ is finite-dimensional; applying [F7] to the quotient map $Z^q\to Z^q/B^q=H^q(C^\bullet)$, whose kernel is $B^q$, gives $\dim Z^q=\dim B^q+\dim H^q(C^\bullet)$. Substituting, $\dim C^q=\dim B^q+\dim H^q(C^\bullet)+\dim B^{q+1}$ for every $q$. Multiplying by $(-1)^q$ and summing over all $q\in\mathbb Z$ -- a finite sum, since $C^q=0$ for $q\notin\{0,\dots,r\}$ -- the boundary terms cancel by the index shift $q\mapsto q+1$, including the endpoint terms $B^0=0$ and $B^{r+1}=0$, so $$\sum_{q\ge0}(-1)^q\dim_{\kappa(s)}H^q(C^\bullet)=\sum_{q=0}^{r}(-1)^q\dim_{\kappa(s)}C^q .$$ [F7, 1.4, algebra]

1.6 Local constancy of the term dimensions. Fix $q\in\{0,\dots,r\}$. By [F8] the module $K^q$ is finitely generated projective, hence finitely presented, and by [F9] the loci $Z_q(\rho)=\{x\in\operatorname{Spec}A:\widetilde{K^q}_x\cong\mathcal O_{\operatorname{Spec}A,x}^{\,\rho}\}$ are open in $\operatorname{Spec}A$ and the fibre dimension of $K^q\otimes_A\kappa(\mathfrak p)$ equals $\rho$ at every $\mathfrak p\in Z_q(\rho)$. Since $K^q_{\mathfrak m_0}$ is free over the local ring $A_{\mathfrak m_0}$ by [F8], put $e_q:=\dim_{\kappa(\mathfrak m_0)}(K^q\otimes_A\kappa(\mathfrak m_0))$, so that $\mathfrak m_0\in Z_q(e_q)$ and $e_q$ is the rank of $K^q_{\mathfrak m_0}$. Then $$V:=\bigcap_{q=0}^{r}Z_q(e_q)$$ is an open neighbourhood of $\mathfrak m_0$ in $U$, and for every $\mathfrak p\in V$ and every $q\in\{0,\dots,r\}$ one has $\dim_{\kappa(\mathfrak p)}(K^q\otimes_A\kappa(\mathfrak p))=e_q$, while for $q<0$ and $q>r$ the module $K^q$ is zero and the dimension is $0$. [F8, F9]

1.7 Conclusion. Let $\mathfrak p\in V\subseteq U\subseteq S$ and apply the identity of 1.5 at the point $s=\mathfrak p$, using 1.4 to replace the cohomology of $C^\bullet=K^\bullet\otimes_A\kappa(\mathfrak p)$ by the cohomology of $\mathcal F_{\mathfrak p}$ on $X_{\mathfrak p}$: $$\chi(X_{\mathfrak p},\mathcal F_{\mathfrak p})=\sum_{q=0}^{r}(-1)^q\dim_{\kappa(\mathfrak p)}(K^q\otimes_A\kappa(\mathfrak p))=\sum_{q=0}^{r}(-1)^q e_q .$$ The right-hand side is an integer independent of $\mathfrak p\in V$. Hence the function $s\mapsto\chi(X_s,\mathcal F_s)$ is constant on the open neighbourhood $V$ of the arbitrary point $s_0\in S$; that is, it is locally constant on $S$. [1.4, 1.5, 1.6]

2.1 Boundaries, the coherent and structure-sheaf clauses, and choice. If $X=\varnothing$ then every fibre $X_s$ is empty and $\chi(X_s,\mathcal F_s)=0$ for every $s$ by the empty-sum convention of [[def-euler-characteristic-coherent-sheaf]], so the function is constant and the conclusion is 1.7 with every $e_q=0$; if $\mathcal F=0$ all cohomology vanishes and again $\chi=0$; if $S=\varnothing$ there is no point and local constancy is vacuous. The general local-constancy proof above used only that $\mathcal F$ is finitely presented and flat, so the coherent case of the statement follows from [F2] and the flat structure-sheaf case follows because $\mathcal O_X$ is the free $\mathcal O_X$-module of rank one, hence finitely presented, and flat over $S$ exactly when $f$ is flat; over a non-Noetherian base $\mathcal O_X$ need not be coherent, which is why the statement uses finite presentation. The Axiom of Choice is consumed through [F3] in 1.2 and through [F8] and [F9] in 1.4 and 1.6, and the Axiom of Dependent Choice is inherited from [F3]; the finite intersections and ranks of 1.6 are determined by the given data and involve no further selection. [F2, F3, F8, F9, F10, 1.2, 1.4, 1.6] ∎
