---
id: lem-normalized-point-blowups-dominate-local-normal-surface-modifications
kind: lemma
title: "Normalized point blowups dominate local normal surface modifications"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    def-normal-surface-modification-and-normalized-point-blowup,
                    lem-local-normal-surface-modification-dimension-and-projective-cohomology,
                    lem-surface-modification-isomorphism-in-codimension-one,
                    lem-surface-finite-type-normalization-finite, thm-one-dimensional-regular-local-rings-are-dvrs,
                    lem-normal-domain-implies-r-one, thm-blowup-projective, thm-pullback-center-ideal-invertible,
                    lem-finite-over-projective-noetherian-affine-base-is-projective,
                    thm-dimension-formula-for-affine-domains,
                    lem-blowup-of-closed-point-of-regular-surface-is-regular,
                    lem-eventual-global-generation-coherent-twists]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Lemma 54.5.3 and Situation 54.7.1 (complete arguments read and refined)"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC and DC. Let $A$ be a normal two-dimensional Noetherian local domain essentially of finite type over a field or a complete equicharacteristic Noetherian local ring. Let $S$ be a normal integral modification of $\operatorname{Spec}A$, and let $Y\to S$ be an integral modification with normal $Y$. There is a finite sequence of proper normalized point blowups $S_n\to\cdots\to S_0=S$, with centers above the finite set where $Y\to S$ fails to be an isomorphism, such that $S_n$ dominates $Y$. If $S$ is projective over $A$, so is $S_n$. For regular $S$, all these are ordinary regular point blowups.

## Facts & Assumptions

**Given:** A normal two-dimensional Noetherian local domain $A$ essentially of finite type over a field or complete equicharacteristic local ring, a normal integral modification $S\to\operatorname{Spec}A$, and an integral modification $Y\to S$ with $Y$ normal.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. ([[def-normal-surface-modification-and-normalized-point-blowup]])

[F4] *lem-local-normal-surface-modification-dimension-and-projective-cohomology.* Assume AC and DC. Let $(A,\mathfrak m)$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ an integral modification. Then $X$ has dimension two, all closed points have local dimension two, $f$ is an isomorphism off the closed point, $f_*\mathcal O_X=\mathcal O_{\operatorname{Spec}A}$, and its special fibre has dimension at most one. ([[lem-local-normal-surface-modification-dimension-and-projective-cohomology]])

[F5] *lem-surface-modification-isomorphism-in-codimension-one.* Assume AC. Let $f:X\to S$ be a modification of integral Noetherian schemes and let $S$ be normal of dimension two. Then $f$ is an isomorphism over an open subset containing every point of codimension at most one in $S$. The complement is a finite set of closed points. If every fibre is zero-dimensional, $f$ is an isomorphism. ([[lem-surface-modification-isomorphism-in-codimension-one]])

[F6] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

[F7] *thm-one-dimensional-regular-local-rings-are-dvrs.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR. ([[thm-one-dimensional-regular-local-rings-are-dvrs]])

[F8] *thm-blowup-projective.* Assume the Axiom of Choice, inherited from the relative Proj construction ([[def-axiom-of-choice]]). Let $X$ be a scheme, let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type on $X$ (def-quasi-coherent-ideal-sheaf) and let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup of def-blowup-scheme-along-ideal. Then: 1. ([[thm-blowup-projective]])

[F9] *thm-pullback-center-ideal-invertible.* Assume the Axiom of Choice, inherited from the relative Proj construction ([[def-axiom-of-choice]]). Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type on a scheme $X$ (def-quasi-coherent-ideal-sheaf), let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be its blowup and let $E=\pi^{-1}(Z)$ be the exceptional subscheme, with the convention that $\mathcal O(1)$  ([[thm-pullback-center-ideal-invertible]])

[F10] *lem-finite-over-projective-noetherian-affine-base-is-projective.* Assume AC. Let $R$ be Noetherian, let $X$ be projective over $R$, and let $Y\to X$ be finite. Then $Y\to X$ admits a closed immersion into one relative projective space over $X$, and $Y$ is projective over $R$. Finite compositions of projective morphisms between such schemes are projective. ([[lem-finite-over-projective-noetherian-affine-base-is-projective]])

[F11] *thm-dimension-formula-for-affine-domains.* Assume the Axiom of Choice. Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $\mathfrak p\in\operatorname{Spec}(A)$. Then $ \operatorname{ht}(\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}(A). $ ([[thm-dimension-formula-for-affine-domains]])

[F12] *lem-blowup-of-closed-point-of-regular-surface-is-regular.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $S$ be a **regular surface**: a locally Noetherian scheme of pure dimension two all of whose local rings are regular (def-embedding-dimension-and-regular-local-ring). ([[lem-blowup-of-closed-point-of-regular-surface-is-regular]])

[F13] *lem-eventual-global-generation-coherent-twists.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a Noetherian commutative ring (def-noetherian-ring-and-module) and let $X$ be a scheme projective over $A$ in the finite-dimensional H-projective convention (def-projective-morphism-pre-proj): the structure morphism $X\to\operatorname{Spec}A$ (def-affine-scheme-spectrum) factors over  ([[lem-eventual-global-generation-coherent-twists]])

[F14] A normal Noetherian domain satisfies $(R_1)$, so its height-one local rings are regular. ([[lem-normal-domain-implies-r-one]])

## Proof

1.1 All normalizations used are finite by the finite-type normalization helper, every integral modification over $A$ is two-dimensional by the dimension and cohomology helper, and the codimension-one helper makes $Y\to S$ an isomorphism off finitely many closed points; the contracted curves of $Y\to S$ form a finite set, each being a one-dimensional component of a fibre over that finite set. [F4, F5, F6, given]

2.1 If there are no contracted curves, every fibre is finite and [F5] gives an isomorphism. Otherwise choose a contracted curve $C$ over $x$. Its generic local ring $V=\mathcal O_{Y,\eta_C}$ is a DVR by normality, [F14] and [F7]; its residue field $\kappa(C)$ has transcendence degree one over $\kappa(x)$ by [F11] applied to the integral curve over that field. Choose $u\in V$ with transcendental residue, and write $u=a/b$ with nonzero $a,b\in\mathcal O_{S,x}$, using the common function field. Since $u$ has nonzero residue, $v(a)=v(b)$. The local map $\mathcal O_{S,x}\to V$ has inverse image of its maximal ideal equal to $\mathfrak m_x$. If their common valuation were zero, $a,b$ would both be units of $\mathcal O_{S,x}$, forcing the residue of $u$ to lie in $\kappa(x)$. Thus $a,b\in\mathfrak m_x$ and $N=v(a)=v(b)>0$. [F5, F7, F11, F14, step 1.1]

3.1 Let $S'\to S$ be the normalized blowup at $x$, and let $Y'$ be the normalization of the closure of the common generic open in $Y\times_SS'$. More precisely, first take that open's reduced scheme-theoretic closure, then its finite normalization by [F6]. A curve contracted by $Y'\to S'$ cannot also map to a point of $Y$: its image in the fibre product would then be zero-dimensional, contradicting finiteness of the normalization. It therefore maps to a contracted curve of $Y\to S$. The proper birational map $Y'\to Y$ is an isomorphism at every height-one point by [F5], so each old curve has at most one such strict transform, with the same DVR. Consequently the new contracted-curve set injects into the old one. [F3, F5, F6, step 2.1]

4.1 Suppose the chosen curve has a contracted strict transform over $x'$. The point $x'$ is closed over $x$, so $\kappa(x')/\kappa(x)$ is finite, and the residue of $u$ remains transcendental over $\kappa(x')$. By [F9], the pullback of $\mathfrak m_x$ has a local generator $d\in\mathfrak m_{x'}$, so $a=da'$, $b=db'$ for regular $a',b'\in\mathcal O_{S',x'}$. In the unchanged curve DVR, $v(d)>0$ and $v(a')=v(b')=N-v(d)<N$. Applying the unit/residue argument of step 2.1 at $x'$ shows that this common valuation is still positive and $a',b'\in\mathfrak m_{x'}$. Repeat while the curve remains contracted. The positive integer $N$ strictly decreases, so the curve is removed after finitely many steps. Induction on the finite contracted-curve count finishes with $Y_n\to S_n$ having no contracted curves, hence an isomorphism by [F5]. Its inverse followed by $Y_n\to Y$ gives $S_n\to Y$. All chosen centres lie above the original finite exceptional set. [F5, F9, step 2.1, step 3.1]

5.1 Each blowup is proper and locally projective; when $S$ is projective over $A$ the center ideal is twisted by a high ample power to make it globally generated, which does not change its relative Proj, so the blowup embeds into a relative projective space, and finite normalization over a projective model is projective by the finite-projective helper, so the whole sequence is projective over $A$. For regular $S$ a point blowup stays regular and its normalization is the identity; the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F8, F9, F10, F12, F13, step 4.1] ∎

## Remarks

- The decreasing invariant is the common positive valuation of the numerator and denominator at the chosen curve, which decreases strictly whenever the curve survives a blowup at its image.
- Taking the normalization of the closure of the common generic open avoids extraneous vertical components of the fibre product.
