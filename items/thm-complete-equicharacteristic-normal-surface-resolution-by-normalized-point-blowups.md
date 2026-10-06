---
id: thm-complete-equicharacteristic-normal-surface-resolution-by-normalized-point-blowups
kind: theorem
title: "Complete equicharacteristic normal surfaces resolve by normalized point blowups"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 20
deps: [
          cor-complete-local-domain-finite-over-a-regular-power-series-ring, def-axiom-of-choice,
                    def-dependent-choice,
                    lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups,
                    lem-complete-regular-surface-degree-p-extension-has-bounded-h1,
                    lem-finite-normal-surface-cover-completed-local-degree-bound,
                    lem-finite-over-projective-noetherian-affine-base-is-projective,
                    lem-finite-separable-normal-surface-extension-preserves-bounded-h1,
                    lem-local-normalized-point-blowup-sequences-spread-at-closed-points,
                    lem-normalized-surface-point-blowup-resolution-descends-from-completion,
                    lem-rational-normal-surface-reduced-to-invertible-canonical-module,
                    lem-rational-surface-local-rings-propagate-by-point-sequence-spreading,
                    lem-regular-local-surface-is-rational-by-point-blowup-domination,
                    lem-surface-complete-equicharacteristic-finite-integral-closure,
                    lem-surface-finite-completion-factors, lem-surface-finite-type-normalization-finite,
                    lem-surface-open-regular-locus,
                    thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups,
                    lem-surface-regular-fibres-preserve-normality]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Lipman, Rational singularities (1969), \u00a724, pp.264\u2013268, relations (5)/(5\u2032): full text read; omitted chart details proved locally"
      url: "https://www.math.purdue.edu/~jlipman/papers-older/%5b1969%5d%20Rational%20singularities%20with%20applications%20to%20algebraic%20surfaces%20and%20unique%20factorization.pdf"
    - title: "Joseph Lipman, Desingularization of two-dimensional schemes (1978), pp.171\u2013174, (1.29) and fixed-coordinate termination"
      url: "https://www.math.purdue.edu/~jlipman/papers-older/%5b1978%5d%20Desingularization%20of%20two-dimensional%20schemes.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC and DC. Every complete equicharacteristic Noetherian normal local domain $A$ of dimension two admits a regular resolution by finitely many normalized point blowups at singular closed points. All normalizations are finite and the resulting morphism is projective, birational, and an isomorphism off the original closed point.

## Facts & Assumptions

**Given:** A complete equicharacteristic Noetherian normal local domain $A$ of dimension two.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *cor-complete-local-domain-finite-over-a-regular-power-series-ring.* Assume the Axiom of Choice. Let $(A,\mathfrak m)$ be a complete equicharacteristic Noetherian local domain of dimension $d$. Then there exists a coefficient field $k \subseteq A$ and an injective local homomorphism $k\llbracket X_1,\ldots,X_d\rrbracket \hookrightarrow A$ whose image is a regular complete local subring over which $A$ is module-finite. ([[cor-complete-local-domain-finite-over-a-regular-power-series-ring]])

[F4] *lem-surface-finite-completion-factors.* Assume AC. For a finite map $R\to S$ of Noetherian rings and $\mathfrak p\in\operatorname{Spec}R$, $\widehat{R_{\mathfrak p}}\otimes_RS\cong\prod_{\mathfrak q\cap R=\mathfrak p}\widehat{S_{\mathfrak q}}$. The finitely many factors use their maximal-adic completions. Thus formal fibres for finite extensions are factors of residue-field base changes of the original formal fibres. ([[lem-surface-finite-completion-factors]])

[F5] *lem-finite-normal-surface-cover-completed-local-degree-bound.* Assume AC and DC. Let $X\to Y$ be finite dominant of degree $n$ between integral normal surfaces in the permitted class, with $Y$ regular. At a closed $x\in X$ over a point $y\in Y$ with $\dim O_{Y,y}=2$, the complete normal local domain $\widehat{O_{X,x}}$ is finite over the complete regular local ring $\widehat{O_{Y,y}}$, and its fraction-field degree is at most $n$. ([[lem-finite-normal-surface-cover-completed-local-degree-bound]])

[F6] *lem-normalized-surface-point-blowup-resolution-descends-from-completion.* Assume AC and DC. For $A$ as in the preceding normalization-completion lemma, every finite sequence of normalized point blowups over $\operatorname{Spec}\widehat A$ has a uniquely corresponding finite sequence over $\operatorname{Spec}A$ with isomorphic base-changed models. Each centre lies over the closed point. ([[lem-normalized-surface-point-blowup-resolution-descends-from-completion]])

[F7] *lem-local-normalized-point-blowup-sequences-spread-at-closed-points.* Assume AC and DC. Let $X$ be a normal integral surface locally of finite type over a permitted base and $x\in X$ a closed point with two-dimensional local ring $B$. Any finite normalized point-blowup sequence over $\operatorname{Spec}B$ spreads to the same finite sequence of normalized blowups at closed points of $X$, unchanged off $x$. ([[lem-local-normalized-point-blowup-sequences-spread-at-closed-points]])

[F8] *lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups.* Assume AC and DC. If a complete equicharacteristic normal local surface domain $A$ admits a proper birational regular model, then it admits a regular terminal model obtained by finitely many normalized point blowups. The centres can all be chosen singular; the normalizations are finite. ([[lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups]])

[F9] *lem-complete-regular-surface-degree-p-extension-has-bounded-h1.* Assume AC and DC. Let $A=k[\![u,v]\!]$ have characteristic $p>0$, let $L/K$ be a purely inseparable degree-$p$ extension of its fraction field, and let $B$ be the finite normalization of $A$ in $L$. Then normal modification H1 over $B$ is uniformly bounded. ([[lem-complete-regular-surface-degree-p-extension-has-bounded-h1]])

[F10] *lem-finite-separable-normal-surface-extension-preserves-bounded-h1.* Assume AC and DC. Let $A\subset B$ be a finite injective local extension of permitted normal local surface domains with separable fraction-field extension. If modification H1 over $A$ is uniformly bounded, so is modification H1 over $B$. ([[lem-finite-separable-normal-surface-extension-preserves-bounded-h1]])

[F11] *lem-rational-surface-local-rings-propagate-by-point-sequence-spreading.* Assume AC and DC. If a permitted normal local surface domain $A$ is rational and $A\subset B$ is a normal two-dimensional local domain with the same fraction field, essentially of finite type over $A$, then $B$ is rational. If modification $H^1$ over $A$ is uniformly bounded, a finite normalized point-blowup sequence has rational local rings at every closed point of its terminal surface. ([[lem-rational-surface-local-rings-propagate-by-point-sequence-spreading]])

[F12] *lem-rational-normal-surface-reduced-to-invertible-canonical-module.* Assume AC and DC. A rational normal local surface domain in the permitted regular-base dualizing setting admits a finite sequence of ordinary point blowups at singular closed points, with each model normal and projective, whose terminal canonical module is invertible. ([[lem-rational-normal-surface-reduced-to-invertible-canonical-module]])

[F13] *thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups.* Assume AC and DC. A rational Gorenstein normal local surface domain in the permitted canonical-module setting with normal completion is resolved by finitely many ordinary blowups at singular closed points. Every model is normal, its closed local rings are rational, and its canonical module is invertible; the terminal model is regular and projective over the local base. ([[thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups]])

[F14] *lem-surface-complete-equicharacteristic-finite-integral-closure.* Assume AC. The integral closure of a complete equicharacteristic Noetherian local domain in every finite extension of its fraction field is a finite module. ([[lem-surface-complete-equicharacteristic-finite-integral-closure]])

[F15] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

[F16] *lem-finite-over-projective-noetherian-affine-base-is-projective.* Assume AC. Let $R$ be Noetherian, let $X$ be projective over $R$, and let $Y\to X$ be finite. Then $Y\to X$ admits a closed immersion into one relative projective space over $X$, and $Y$ is projective over $R$. Finite compositions of projective morphisms between such schemes are projective. ([[lem-finite-over-projective-noetherian-affine-base-is-projective]])

[F17] *lem-surface-open-regular-locus.* Assume AC and DC. Every finite-type algebra over a field or a complete equicharacteristic Noetherian local ring has open regular locus. Thus the regular locus of any scheme locally of finite type over one of these bases is open. ([[lem-surface-open-regular-locus]])

[F18] *lem-regular-local-surface-is-rational-by-point-blowup-domination.* Assume AC and DC. A regular two-dimensional local domain in the permitted finite-type class defines a rational singularity. ([[lem-regular-local-surface-is-rational-by-point-blowup-domination]])

[F19] A normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, a domain. ([[lem-surface-regular-fibres-preserve-normality]])

## Proof

1.1 Choose a finite injective regular complete power-series subring $R\subseteq A$ and argue by strong induction on the fraction-field degree $D=[\operatorname{Frac}A:\operatorname{Frac}R]$, uniformly over all such finite pairs; if $D=1$, then $A=R$ because $R$ is normal, and the trivial model is already regular. [F3, given]

1.2 Every normal model constructed below is of finite type over the complete equicharacteristic Noetherian base $A$: blowups are of finite type, and their normalizations are finite by [F15]. Its local rings are therefore essentially of finite type over $A$. Applying [F19] gives normal maximal-adic completions at those local rings. This supplies the normal-completion hypothesis before each later invocation of [F13], including after canonical principalization. [F15, F19, given]

2.1 If there is a proper intermediate field $\operatorname{Frac}R\subsetneq L\subsetneq\operatorname{Frac}A$, let $B$ be the normalization of $R$ in $L$; it is finite and normal in $L$, and being a domain finite over the complete local ring $R$ its finite-completion-factor decomposition has exactly one factor, so $B$ is local and complete of degree strictly smaller than $D$; the induction hypothesis gives a regular projective normalized-point model $Y$ over $B$. [F4, F14, step 1.1]

3.1 Normalizing the dominant component of $Y\times_B\operatorname{Spec}A$ yields a normal scheme finite over $Y$ (the fibre product is finite and its normalization is finite in the permitted class) and projective over $R$ and $A$ and birational over $A$ of finite cover degree $[\operatorname{Frac}A:L]<D$; its singular set is a finite set of closed points. [F15, F16, F17, step 2.1]

4.1 At a singular point $x$ of that model lying over $y\in Y$, the point $y$ is closed because the cover is finite and the local ring of $Y$ at $y$ is regular of dimension two; the completed-local degree bound makes the completed local ring at $x$ finite over a regular completed power-series ring of degree at most $[\operatorname{Frac}A:L]<D$, so the induction hypothesis applies to it; completion descent gives a local normalized-point resolution and spreading the finitely many local sequences produces a regular proper birational model over $A$, to which the conversion lemma applies to give a regular normalized-point sequence over $A$. [F5, F6, F7, F8, step 3.1]

5.1 If no proper intermediate field exists and the fraction-field extension $K/K_0$ is not separable, choose an element $\alpha\in K$ inseparable over $K_0$, so $K=K_0(\alpha)$. In characteristic $p>0$ its irreducible polynomial is $g(T^p)$ with $g$ irreducible. Consequently $[K_0(\alpha):K_0(\alpha^p)]=p$, so $K_0(\alpha^p)$ is proper in $K$ and must equal $K_0$. Thus $K/K_0$ is purely inseparable of degree $p$. The only other case is separability. [F3, step 1.1, step 4.1, algebra]

6.1 In the separable case the separable transfer helper promotes bounded modification H1 from the regular rational base $R$ to $A$, and in the degree-$p$ inseparable case the differential-trace boundedness theorem does the same. [F9, F10, F18, step 5.1]

7.1 The maximal-H1 reduction of the propagation helper therefore produces a finite normalized point-blowup model over $A$ whose closed local rings are rational. [F11, step 6.1]

8.1 Canonical principalization reduces the finite singular set of that model to points with invertible canonical module by ordinary singular-point blowups, and the rational-Gorenstein resolution theorem resolves the remaining points by further ordinary singular-point blowups; spreading those finite sequences gives a regular normalized-point model over $A$. [F7, F12, F13, step 1.2, step 7.1]

9.1 Every model used has finite normalization and open regular locus by [F15] and [F17], and normal local completion by [F19] and step 1.2, so no general excellence theorem is substituted; deleting regular-centre subtrees as in the conversion lemma preserves a regular terminal model whose centres are all singular, and all models remain projective by finite-normalization projectivity, the resulting morphism being birational and an isomorphism off the original closed point. [F8, F15, F16, F17, F19, step 1.2, step 8.1]

10.1 The induction is well founded because every completed local cover in the intermediate case has strictly smaller degree, and the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, step 9.1] ∎

## Remarks

- The argument is a strong induction on the fraction-field degree, with the intermediate-field case reduced to a strictly smaller completed local cover.
- The inseparable cases are handled by the separable transfer and the differential-trace bound rather than by an ordinary field trace.
