---
id: thm-cohomology-and-base-change
kind: theorem
title: "Cohomology and base change for proper flat coherent families"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-nakayama-generators-modulo-an-ideal
  - cor-residue-field-of-a-localisation-at-a-prime
  - def-affine-open-subscheme
  - def-affine-scheme-spectrum
  - def-associated-sheaf-module-affine-scheme
  - def-axiom-of-choice
  - def-base-change-map-cohomology
  - def-base-change-morphism-schemes
  - def-coherent-module-scheme
  - def-cohomology-object-of-a-cochain-complex
  - def-dependent-choice
  - def-fibre-of-module-at-point
  - def-finite-type-finite-presentation-module-sheaf
  - def-finitely-presented-module-and-algebra
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-generated-cyclic-finitely-generated-and-free-modules
  - def-higher-direct-image-sheaf
  - def-jacobson-radical-of-a-ring
  - def-kernel-cokernel-image-sheaves
  - def-locally-finite-presentation-morphism
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-free-sheaf-finite-rank
  - def-local-ring
  - def-localisation-at-a-prime-ideal
  - def-multiplicative-subset-and-localisation
  - def-projective-module
  - def-proper-morphism
  - def-pullback-module-ringed-spaces
  - def-quasi-coherent-module-scheme
  - def-quasi-compact-and-quasi-separated-morphism
  - def-residue-field-scheme-point
  - def-scheme
  - lem-associated-sheaf-stalk-localization
  - lem-base-change-composition
  - lem-cohomology-base-change-finite-free-criterion
  - lem-cohomology-functoriality-sheaf-and-space
  - lem-fibre-product-open-restriction
  - lem-higher-direct-image-affine-localization
  - lem-proper-flat-fp-cohomology-perfect-complex
  - lem-proper-stable-base-change
  - prop-extension-of-scalars-preserves-flat-modules
  - prop-transitivity-of-flatness-under-change-of-rings
  - thm-affine-fibre-product-tensor-ring
  - thm-affine-quasi-coherent-equivalence
  - thm-associativity-of-balanced-tensor-products
  - thm-flatness-is-local
  - thm-localisations-are-flat
  - thm-locally-free-locus-finite-presentation-open
  - thm-sheaf-morphism-isomorphism-stalkwise
  - thm-nakayama-lemma
  - thm-projective-module-characterizations
  - thm-right-exactness-of-tensor-products
  - thm-splitting-lemma-for-modules
  - thm-unit-isomorphisms-for-module-tensor-products
  - thm-universal-property-of-module-direct-sums
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, §§30.2–30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), §§19.1, 19.6, 19.9, 28.1–28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Derived Categories of Schemes, §§36.26–36.32"
      url: "https://stacks.math.columbia.edu/download/perfect.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice
([[def-axiom-of-choice]], [[def-dependent-choice]]), inherited from the
Noetherian approximation and the finite-free criterion cited below. Let
$f:X\to S$ be a proper morphism of finite presentation
([[def-proper-morphism]], [[def-locally-finite-presentation-morphism]]) with
$S$ an arbitrary scheme, and let $\mathcal F$ be a coherent $\mathcal
O_X$-module ([[def-coherent-module-scheme]]) that is flat over $S$
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]); by [F1] $\mathcal F$
is then finitely presented.

Fix $s\in S$ and an integer $q\ge0$, write $\kappa(s)$ for the residue field
([[def-residue-field-scheme-point]]), put $X_s:=X\times_S\operatorname{Spec}
\kappa(s)$ with projection $g_s:X_s\to X$ and $\mathcal F_s:=g_s^*\mathcal F$
([[def-pullback-module-ringed-spaces]]), and let
$$\varphi^q_s:(R^qf_*\mathcal F)(s)\longrightarrow H^q(X_s,\mathcal F_s)$$
be the cohomology and base-change map at $s$
([[def-base-change-map-cohomology]], [[def-higher-direct-image-sheaf]]).

**(a)** If $\varphi^q_s$ is surjective, then there is an affine open
neighbourhood $U\subseteq S$ of $s$ such that for every morphism $h:T\to U$,
with $X_T:=X\times_ST$ and projection $g_T:X_T\to X$
([[def-base-change-morphism-schemes]]), the base-change map
$$h^*\bigl(R^qf_*\mathcal F|_U\bigr)\longrightarrow R^qf_{T*}(g_T^*\mathcal F)$$
of [[def-base-change-map-cohomology]] is an isomorphism of $\mathcal
O_T$-modules.

**(b)** Assume moreover that $\varphi^q_s$ is surjective. Then $R^qf_*\mathcal
F$ is locally free of finite rank in a neighbourhood of $s$
([[def-locally-free-sheaf-finite-rank]]) if and only if $\varphi^{q-1}_s$ is
surjective; for $q=0$ the condition on $\varphi^{-1}_s$ is automatic, so
$f_*\mathcal F$ is then finite locally free near $s$.

**(c)** Under the hypothesis of (a), $\varphi^q_s$ itself is an isomorphism.

The empty source $X=\varnothing$, the zero sheaf $\mathcal F=0$, the degrees
$q=0$ and $q>0$ with $X_s=\varnothing$, and an arbitrary (not necessarily
Noetherian) base $S$ are included. No flatness or finite-presentation
hypothesis is imposed on $f$ beyond the stated ones, and no projectivity,
Noetherianness or Krull-dimension hypothesis is imposed on $S$.

## Facts & Assumptions
**Given:** The Axiom of Choice and the Axiom of Dependent Choice, a proper morphism of finite presentation $f:X\to S$, a coherent $\mathcal O_X$-module $\mathcal F$ flat over $S$, a point $s\in S$ and an integer $q\ge0$.

[F1] Coherence unpacked and finite presentation: a coherent $\mathcal O_X$-module is quasi-coherent of finite type, and for every open $U\subseteq X$ and every morphism $\mathcal O_U^n\to\mathcal F|_U$ with finite $n\ge0$ its kernel is of finite type; consequently, on an affine open $U=\operatorname{Spec}A$ with $\mathcal F|_U\cong\widetilde M$ and $M$ finitely generated, a surjection $A^n\to M$ has finitely generated kernel, so $M$ is finitely presented and $\mathcal F$ is finitely presented; restrictions of coherent modules to open subschemes are coherent. ([[def-coherent-module-scheme]], [[def-finite-type-finite-presentation-module-sheaf]], [[def-quasi-coherent-module-scheme]], [[def-kernel-cokernel-image-sheaves]], [[thm-affine-quasi-coherent-equivalence]], [[def-finitely-presented-module-and-algebra]])

[F2] Flatness and localisation: $\mathcal F$ is flat over $S$ meaning that each stalk $\mathcal F_x$ is flat over the local ring $\mathcal O_{S,f(x)}$; flatness is preserved by restriction to open subschemes and by base change, a localisation $A\to S^{-1}A$ is a flat ring map, and flatness of a module is local on the base ring. ([[def-flat-and-faithfully-flat-modules-and-ring-maps]], [[thm-localisations-are-flat]], [[prop-transitivity-of-flatness-under-change-of-rings]], [[thm-flatness-is-local]], [[prop-extension-of-scalars-preserves-flat-modules]])

[F3] Properness, affine bases and fibres: a proper morphism is separated, of finite type and universally closed, and a morphism of finite type is quasi-compact; affine opens form a basis of every scheme, so there is an affine open $U=\operatorname{Spec}A\subseteq S$ containing $s$, with corresponding prime $\mathfrak m\subseteq A$; the restriction $X_U:=f^{-1}U\to U=\operatorname{Spec}A$ is proper and of finite presentation, and $X_U$ is quasi-compact and separated; the canonical morphism $\operatorname{Spec}\kappa(s)\to S$ factors through $U$, so the fibre $X_s=X\times_S\operatorname{Spec}\kappa(s)$ is canonically identified with $X_U\times_{\operatorname{Spec}A}\operatorname{Spec}\kappa(s)$, and $\kappa(s)$ is the residue field of the local ring $A_{\mathfrak m}$. ([[def-proper-morphism]], [[def-locally-finite-presentation-morphism]], [[def-locally-finite-type-and-finite-type-morphism]], [[def-quasi-compact-and-quasi-separated-morphism]], [[def-scheme]], [[def-affine-open-subscheme]], [[def-affine-scheme-spectrum]], [[def-residue-field-scheme-point]], [[def-base-change-morphism-schemes]], [[lem-base-change-composition]], [[lem-proper-stable-base-change]], [[def-localisation-at-a-prime-ideal]])

[F4] The perfect complex over an affine base: for the ring $A$, the proper morphism of finite presentation $X_U\to\operatorname{Spec}A$ and the coherent, hence finitely presented [F1], module $\mathcal F_U:=\mathcal F|_{X_U}$ flat over $\operatorname{Spec}A$ by [F2], the cited lemma provides an integer $r\ge0$ and a bounded complex $K^\bullet$ of finite projective $A$-modules, concentrated in degrees $0,\dots,r$ and finite free in all positive degrees, with canonical isomorphisms $\theta_{A'}:H^q(K^\bullet\otimes_AA')\cong H^q(X_{A'},\mathcal F_{A'})$ for every $A$-algebra $A'$, natural in $A'$ and compatible with composition of $A$-algebra maps, where $X_{A'}:=X_U\times_{\operatorname{Spec}A}\operatorname{Spec}A'$ and $\mathcal F_{A'}$ is the pullback of $\mathcal F_U$; moreover $K^\bullet$ becomes a bounded complex of finite free modules after restricting to the members of an open cover of $\operatorname{Spec}A$ by affine opens. ([[lem-proper-flat-fp-cohomology-perfect-complex]], [[def-axiom-of-choice]], [[def-dependent-choice]])

[F5] Naturality of the comparison with base-change maps: the naturality clause of [F4] says that for $A$-algebras $A'\to A''$ the square with the maps $\theta_{A'}\otimes\operatorname{id}$ and $\theta_{A''}$ commutes, where the algebraic horizontal arrow $H^q(K^\bullet\otimes_AA')\otimes_{A'}A''\to H^q(K^\bullet\otimes_AA'')$ is induced by tensoring representatives of cohomology classes, and the geometric horizontal arrow $A''\otimes_{A'}H^q(X_{A'},\mathcal F_{A'})\to H^q(X_{A''},\mathcal F_{A''})$ is the extension of scalars of the pullback of cohomology classes along $X_{A''}\to X_{A'}$ composed with the canonical map $g^{-1}\mathcal F_{A'}\to\mathcal F_{A''}$, that is, the map on global sections induced by the base-change map of the cohomology-and-base-change definition for the Cartesian square over $\operatorname{Spec}A'\to\operatorname{Spec}A''$; the pullback of classes is the map supplied by the contravariance of sheaf cohomology in the space. ([[lem-proper-flat-fp-cohomology-perfect-complex]], [[def-base-change-map-cohomology]], [[lem-cohomology-functoriality-sheaf-and-space]], [[thm-associativity-of-balanced-tensor-products]], [[thm-unit-isomorphisms-for-module-tensor-products]])

[F6] The finite-free criterion: for a ring $B$ with maximal ideal $\mathfrak n\subseteq B$ and residue field $\lambda=B/\mathfrak n$ and a bounded complex $L^\bullet$ of finite free $B$-modules with differentials $d^q$, the map $\varphi^q_L:H^q(L)\otimes_B\lambda\to H^q(L\otimes_B\lambda)$ induced by tensoring representatives satisfies: (1) it is surjective if and only if there is $t\in B\setminus\mathfrak n$ such that over $B_t$ there are bases of $L^q_t$ and $L^{q+1}_t$ in which $d^q$ is $\begin{pmatrix}I_r&0\\0&0\end{pmatrix}$; (2) if so, then $H^q(L)_t$ is a finitely generated $B_t$-module and the natural map $H^q(L)_t\otimes_{B_t}B''\to H^q(L\otimes_BB'')$ is an isomorphism for every $B_t$-algebra $B''$; (3) given (1), $H^q(L)_t$ is a finite projective $B_t$-module for some $t\in B\setminus\mathfrak n$ if and only if, after shrinking further, the analogous map $\varphi^{q-1}_L$ is also surjective, and if $L^{q-1}=0$ this surjectivity is automatic. The Axiom of Choice enters only through the Nakayama lemma and its corollary. ([[lem-cohomology-base-change-finite-free-criterion]], [[thm-nakayama-lemma]], [[cor-nakayama-generators-modulo-an-ideal]], [[def-cohomology-object-of-a-cochain-complex]], [[def-axiom-of-choice]])

[F7] Higher direct images and the fibre map: for $f$ quasi-compact and separated and $\mathcal F$ quasi-coherent, each $R^qf_*\mathcal F$ is quasi-coherent, $R^qf_*\mathcal F=0$ for $q<0$, and for an affine open $V=\operatorname{Spec}B\subseteq S$ there is a canonical isomorphism $(R^qf_*\mathcal F)|_V\cong\widetilde{H^q(f^{-1}V,\mathcal F)}$ with the associated sheaf of the $B$-module $H^q(f^{-1}V,\mathcal F)$; hence $(R^qf_*\mathcal F)(V)=H^q(f^{-1}V,\mathcal F)$, the fibre at $s$ is $(R^qf_*\mathcal F)(s)=H^q(f^{-1}V,\mathcal F)\otimes_B\kappa(s)$ for every affine open $V\ni s$, and the fibre map $\varphi^q_s$ of the cohomology-and-base-change definition is the extension of scalars of the pullback-of-classes map $H^q(f^{-1}V,\mathcal F)\to H^q(X_s,\mathcal F_s)$, its colimit description being independent of the chosen affine neighbourhood of $s$. ([[def-higher-direct-image-sheaf]], [[lem-higher-direct-image-affine-localization]], [[def-base-change-map-cohomology]], [[def-fibre-of-module-at-point]], [[def-associated-sheaf-module-affine-scheme]], [[lem-associated-sheaf-stalk-localization]], [[def-pullback-module-ringed-spaces]])

[F8] Finite locally free modules on affine schemes: for a ring $B$ and a finitely presented $B$-module $P$, the associated sheaf $\widetilde P$ is locally free of finite rank near $\mathfrak p\in\operatorname{Spec}B$ if and only if $P_{\mathfrak p}$ is free over $B_{\mathfrak p}$; the locus of primes at which a finitely presented module is free of a fixed rank is open, and the module is free of that rank on an open neighbourhood of any such prime. ([[def-locally-free-sheaf-finite-rank]], [[thm-locally-free-locus-finite-presentation-open]], [[thm-affine-quasi-coherent-equivalence]], [[def-associated-sheaf-module-affine-scheme]], [[lem-associated-sheaf-stalk-localization]])

[F9] Finitely generated projective modules: a finitely generated module is a quotient of a finite free module; a surjection onto a projective module splits, exhibiting the projective module as a direct summand of a free module under the Axiom of Choice; over a local ring $(R,\mathfrak n)$ a finitely generated module $N$ generated by elements whose classes generate $N/\mathfrak nN$ is generated by them; passing to the residue field is right exact; and a direct summand of a finitely generated free module is finitely generated, while a finitely presented module has finitely generated syzygies. ([[def-generated-cyclic-finitely-generated-and-free-modules]], [[thm-splitting-lemma-for-modules]], [[thm-projective-module-characterizations]], [[def-projective-module]], [[thm-nakayama-lemma]], [[cor-nakayama-generators-modulo-an-ideal]], [[def-jacobson-radical-of-a-ring]], [[def-local-ring]], [[thm-right-exactness-of-tensor-products]], [[thm-universal-property-of-module-direct-sums]], [[def-finitely-presented-module-and-algebra]], [[def-axiom-of-choice]])

[F10] The Axiom of Choice and the Axiom of Dependent Choice are the choice principles named in the statement. ([[def-axiom-of-choice]], [[def-dependent-choice]])

## Proof

**Proof technique:** direct: choose an affine neighbourhood and a finite free model complex for the cohomology over it, apply the finite-free matrix criterion over the local ring of the point, and transport the algebraic conclusions to the geometry through the naturality of the comparison isomorphisms with the base-change maps.

1.1 Affine setup. By [F3] fix an affine open $U=\operatorname{Spec}A\subseteq S$ containing $s$, with prime $\mathfrak m\subseteq A$ and residue field $\kappa(s)=A_{\mathfrak m}/\mathfrak mA_{\mathfrak m}$. By [F4], $K^\bullet$ is finite free on an affine neighbourhood of $s$; shrink to a principal open $\operatorname{Spec}C=D(f)$ with $C=A_f$ and $f\notin\mathfrak m$. The ideal $\mathfrak n=\mathfrak mC$ is prime, and $B=C_{\mathfrak n}=A_{\mathfrak m}$ is the local ring at $s$ with maximal ideal $\mathfrak nB$ and residue field $\kappa(s)$. The ring $C$ is the coordinate ring of an actual affine open of $S$; the local ring $B$ is used only for the finite-free criterion. [F2, F3, F4]

1.2 Put $L^\bullet=K^\bullet\otimes_A C$, a bounded finite-free complex by 1.1, and $M^\bullet=L^\bullet\otimes_C B$. By [F1] the coherent module $\mathcal F_U$ is finitely presented and by [F2] it is flat over $A$, so [F4] applies to $K^\bullet$ and every $A$-algebra. Apply [F6] to $M^\bullet$ over the local ring $(B,\mathfrak nB)$, whose residue field is $\kappa(s)$: its maps $\varphi^q_M:H^q(M)\otimes_B\kappa(s)\to H^q(M\otimes_B\kappa(s))$ and $\varphi^{q-1}_M$ are defined. Flat localisation gives $H^i(M)=H^i(L)\otimes_C B$, so these fibre maps agree with the corresponding tensoring-representatives maps for $L$ at $s$. [F1, F2, F3, F4, F6, algebra]

2.1 The comparison $\theta_C$ of [F4] identifies $H^q(L)$ with $H^q(X_C,\mathcal F_C)$, and $\theta_{\kappa(s)}$ identifies $H^q(L\otimes_C\kappa(s))$ with $H^q(X_s,\mathcal F_s)$. By [F5], the natural tensoring-representatives map $H^q(L)\otimes_C\kappa(s)\to H^q(L\otimes_C\kappa(s))$ becomes the geometric fibre map $\varphi^q_s$ on the affine neighbourhood $\operatorname{Spec}C$ of $s$ [F7]. The localisation identities in step 1.2 identify that algebraic map with $\varphi^q_M$ over $B$, and likewise in degree $q-1$. Thus $\varphi^q_s$ is surjective exactly when $\varphi^q_M$ is, and the same holds in degree $q-1$. [F3, F4, F5, F6, F7, step 1.2]

3.1 Part (a). If $\varphi^q_s$ is surjective, then so is $\varphi^q_M$ by step 2.1. By [F6](1), $d^q$ has a split matrix $\operatorname{diag}(I_r,0)$ in bases of $M^q$ and $M^{q+1}$ over $B$. The finitely many entries of the bases, their inverses, and the matrix identities descend from $B=C_{\mathfrak n}$ to some $C_t$ with $t\notin\mathfrak n$; hence $d^q$ has that split form in bases of $L^q_t,L^{q+1}_t$. Writing $L^q_t=F'\oplus F''$ in this form, $H^q(L_t)=F''/\operatorname{im}(d^{q-1})$ is finitely presented, and right exactness of tensor gives $H^q(L_t)\otimes_{C_t}A''\cong H^q(L\otimes_C A'')$ for every $C_t$-algebra $A''$, exactly the split-matrix calculation in [F6](2). Put $U'=\operatorname{Spec}C_t\subseteq S$, an affine open containing $s$. For any $T\to U'$ and any affine chart $\operatorname{Spec}A''\subseteq T$, the comparison and naturality in [F4,F5] identify the section map of $g^*R^qf_*\mathcal F\to R^qf_{T*}\mathcal F_T$ with this algebraic isomorphism. Such charts cover $T$, so the sheaf morphism is an isomorphism by [[thm-sheaf-morphism-isomorphism-stalkwise]]. [F4, F5, F6, F7, step 2.1, algebra]

4.1 Part (c). Apply (a) with $T=\operatorname{Spec}\kappa(s)\to U'$. On global sections the isomorphism is $H^q(X_{C_t},\mathcal F_{C_t})\otimes_{C_t}\kappa(s)\to H^q(X_s,\mathcal F_s)$, which is the fibre map $\varphi^q_s$ computed on the affine neighbourhood $\operatorname{Spec}C_t$ by [F7]. Thus $\varphi^q_s$ is an isomorphism. [F7, step 3.1]

4.2 Part (b), first direction. Assume $\varphi^q_s$ and $\varphi^{q-1}_s$ are surjective. By step 2.1 both maps for $M$ are surjective, so [F6](3) makes $H^q(M)$ finite projective over the local ring $B$, hence finite free by [F9]. By step 3.1, after a principal shrinking $C_t$ the module $H^q(L_t)$ is finitely presented, and its localisation at $\mathfrak n$ is $H^q(M)$. The openness of the finite-free locus [F8] therefore supplies a further principal neighbourhood $\operatorname{Spec}C_{tt'}$ of $s$ on which $\widetilde{H^q(L_t)}$ is finite locally free. Comparison [F4] and the affine direct-image formula [F7] identify this sheaf with $R^qf_*\mathcal F$ there. [F4, F6, F7, F8, F9, step 2.1, step 3.1]

5.1 Part (b), second direction. Assume $\varphi^q_s$ is surjective and $R^qf_*\mathcal F$ is finite locally free near $s$. By step 3.1 shrink to $C_t$ where the split differential makes $H^q(L_t)$ finitely presented, and then shrink so [F7] identifies this module with the sections of a free sheaf. Its localisation $H^q(M)$ at $\mathfrak n$ is finite free over $B$. By [F6](3), $\varphi^{q-1}_M$ is surjective; step 2.1 transports this to surjectivity of $\varphi^{q-1}_s$. For $q=0$, $M^{-1}=0$ because [F4] concentrates the model in nonnegative degrees, so $\varphi^{-1}_M$ is automatically surjective by [F6](3); the first direction then gives finite local freeness of $f_*\mathcal F$ near $s$. [F4, F6, F7, F8, step 2.1, step 3.1, step 4.2]

6.1 Boundaries and choice. If $X=\varnothing$ or $\mathcal F=0$, all cohomology modules are zero, all fibre and base-change maps are isomorphisms, and $R^qf_*\mathcal F=0$ is finite locally free. If $q=0$, the fibre map evaluates local sections on the fibre as in [[def-base-change-map-cohomology]], and the automatic $\varphi^{-1}_s$ condition is covered in step 5.1. If $X_s=\varnothing$ or $\mathcal F_s=0$, then $H^q(X_s,\mathcal F_s)=0$, so $\varphi^q_s$ is surjective and parts (a)–(c) apply without any separate neighbourhood-vanishing claim. If $S=\varnothing$ there is no point $s$ and the statement is vacuous. The two directions of (b) are steps 4.2–5.1 and (c) is step 4.1. AC and DC enter through the cited perfect-complex and finite-free suppliers [F4,F6,F9,F10]; only finitely many bases, matrix entries and affine neighbourhoods are selected locally. [F4, F6, F9, F10, step 4.1, step 4.2, step 5.1] ∎
