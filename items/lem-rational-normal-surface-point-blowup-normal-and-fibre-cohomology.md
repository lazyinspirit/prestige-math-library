---
id: lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology
kind: lemma
title: "Normality and fibre cohomology of a rational surface point blowup"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
deps: [
          cor-regular-quotient-cohen-macaulay-equivalence, def-axiom-of-choice,
                    def-degree-invertible-sheaf-proper-dimension-one, def-dependent-choice,
                    def-embedding-dimension-and-regular-local-ring,
                    def-rational-normal-surface-singularity-and-bounded-modification-h1,
                    lem-eventual-global-generation-coherent-twists,
                    lem-finite-over-projective-noetherian-affine-base-is-projective,
                    lem-normal-domain-implies-s-two, lem-rational-surface-exceptional-ideal-powers-and-sections,
                    lem-surface-finite-type-normalization-finite, thm-pullback-center-ideal-invertible,
                    thm-serre-vanishing]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Sections 54.8\u201354.9: complete source arguments with local prerequisite replacements"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. For a rational permitted normal local surface domain $(A,\mathfrak m,\kappa)$, its ordinary point blowup $X$ is normal. Its exceptional fibre $E$ is a projective pure CM curve, its tautological conormal line $L=\mathcal O_E(1)$ is very ample, and $H^1(E,L^n)=0$, $H^0(E,L^n)=\mathfrak m^n/\mathfrak m^{n+1}$ for $n\ge0$. In particular $H^0(E,O)=\kappa$ and $\deg_\kappa L=\dim_\kappa(\mathfrak m/\mathfrak m^2)-1$, which is at least one and equals one only for regular $A$.

## Facts & Assumptions

**Given:** A rational permitted normal local surface domain $(A,\mathfrak m,\kappa)$, its ordinary point blowup $X_0$, and the exceptional fibre $E$ with tautological conormal line $L=\mathcal O_E(1)$.

[F1] *cor-regular-quotient-cohen-macaulay-equivalence.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Under the hypotheses of `lem-regular-quotient-preserves-depth-dimension-gap`, $M$ is Cohen--Macaulay if and only if $M/xM$ is Cohen--Macaulay. ([[cor-regular-quotient-cohen-macaulay-equivalence]])

[F2] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F3] *def-degree-invertible-sheaf-proper-dimension-one.* Assume the Axiom of Choice, inherited from the Euler-characteristic supplier below ([[def-axiom-of-choice]]). Let $k$ be a field (def-field) and let $C$ be a proper $k$-scheme (def-proper-morphism) whose underlying topological space is Noetherian of dimension at most one (def-dimension-noetherian-topological-space, def-locally-noetherian-and-noetherian-scheme). ([[def-degree-invertible-sheaf-proper-dimension-one]])

[F4] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F5] *def-embedding-dimension-and-regular-local-ring.* For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$. The cotangent space is intrinsic, and is finite-dimensional because $\mathfrak m$ is finitely generated. ([[def-embedding-dimension-and-regular-local-ring]])

[F6] *def-rational-normal-surface-singularity-and-bounded-modification-h1.* Assume AC and DC. A normal two-dimensional Noetherian local domain $A$ essentially of finite type over a field or complete equicharacteristic local base defines a rational singularity if $H^1(Y,\mathcal O_Y)=0$ for every normal integral proper modification $Y\to\operatorname{Spec}A$. Bounded modification H1 means these modules have uniformly bounded $A$-length. ([[def-rational-normal-surface-singularity-and-bounded-modification-h1]])

[F7] *lem-eventual-global-generation-coherent-twists.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a Noetherian commutative ring (def-noetherian-ring-and-module) and let $X$ be a scheme projective over $A$ in the finite-dimensional H-projective convention (def-projective-morphism-pre-proj): the structure morphism $X\to\operatorname{Spec}A$ (def-affine-scheme-spectrum) factors over  ([[lem-eventual-global-generation-coherent-twists]])

[F8] *lem-finite-over-projective-noetherian-affine-base-is-projective.* Assume AC. Let $R$ be Noetherian, let $X$ be projective over $R$, and let $Y\to X$ be finite. Then $Y\to X$ admits a closed immersion into one relative projective space over $X$, and $Y$ is projective over $R$. Finite compositions of projective morphisms between such schemes are projective. ([[lem-finite-over-projective-noetherian-affine-base-is-projective]])

[F9] *lem-normal-domain-implies-s-two.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every commutative Noetherian integrally closed domain satisfies $(S_2)$. ([[lem-normal-domain-implies-s-two]])

[F10] *lem-rational-surface-exceptional-ideal-powers-and-sections.* Assume AC and DC. Let $A$ be a rational permitted normal local surface domain and $X\to\operatorname{Spec}A$ a normal projective modification. A coherent globally generated sheaf $F$ on $X$ has $H^1(X,F)=0$. If the scheme-theoretic closed fibre is Cartier with ideal $I=\mathfrak m\mathcal O_X$, then $H^0(X,I^n)=\mathfrak m^n$ and $H^1(X,I^n)=0$ for all $n\ge0$. ([[lem-rational-surface-exceptional-ideal-powers-and-sections]])

[F11] *lem-surface-finite-type-normalization-finite.* Assume AC and DC. Every integral finite-type algebra over a field or a complete equicharacteristic Noetherian local base has finite normalization, and so do its localizations. Integral schemes of finite type over these bases consequently have finite scheme normalization. ([[lem-surface-finite-type-normalization-finite]])

[F12] *thm-pullback-center-ideal-invertible.* Assume the Axiom of Choice, inherited from the relative Proj construction ([[def-axiom-of-choice]]). Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type on a scheme $X$ (def-quasi-coherent-ideal-sheaf), let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be its blowup and let $E=\pi^{-1}(Z)$ be the exceptional subscheme, with the convention that $\mathcal O(1)$  ([[thm-pullback-center-ideal-invertible]])

[F13] *thm-serre-vanishing.* Assume the Axiom of Choice as inherited from the cited suppliers ([[def-axiom-of-choice]]). Let $A$ be a Noetherian commutative ring with $1$, let $X$ be a scheme projective over $A$ in the finite-dimensional H-projective convention (def-projective-morphism-pre-proj): the structure morphism $X\to\operatorname{Spec}A$ factors as a closed immersion  ([[thm-serre-vanishing]])

## Proof

1.1 Let $\nu\colon X\to X_0$ be the finite normalization of the blowup. The point ideal pulls back to an invertible ideal $I'=\mathcal O_{X_0}(1)$ with pullback $I$ on $X$, and the powers lemma gives $H^0(X,I^n)=\mathfrak m^n$; the natural injections $\mathfrak m^n\to H^0(X_0,I'^n)\to H^0(X,I^n)$ compose to the identity inclusion in the common function field, so both are equalities. [F9, F10, F12]

2.1 If $Q=\nu_*\mathcal O_X/\mathcal O_{X_0}$ were nonzero, then $Q(n)$ would be globally generated and nonzero for large $n$, hence have a nonzero global section; Serre vanishing makes $H^1(X_0,I'^n)=0$ and the projection formula makes $H^0$ of the middle term equal to $\mathfrak m^n$, so the long exact sequence would give $H^0(Q(n))=0$, a contradiction. Hence $\nu$ is an isomorphism and the blowup $X_0$ is normal. [F7, F8, F13, step 1.1]

3.1 Normal two-dimensional local rings are Cohen--Macaulay, and their quotients by nonzero nonzerodivisors are pure one-dimensional Cohen--Macaulay modules, so $E$ is a projective pure Cohen--Macaulay curve. [F1, F6, step 2.1]

4.1 Applying the powers lemma to $0\to I^{n+1}\to I^n\to\mathcal O_E(n)\to0$ with $H^1$ of both powers and $H^2$ of the kernel vanishing gives $H^1(E,L^n)=0$ and $H^0(E,L^n)=\mathfrak m^n/\mathfrak m^{n+1}$ for every $n\ge0$; in particular $H^0(E,\mathcal O)=\kappa$, the blowup embedding makes $L$ very ample, and the Euler-characteristic degree is $\mu-1$ with $\mu=\dim_\kappa\mathfrak m/\mathfrak m^2$, which is at least one and equals one exactly when $A$ is regular. [F3, F5, F10, F13, step 3.1]

5.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the normalization and vanishing suppliers; no smoothness of $A$ is assumed. [F2, F4, step 4.1, F11] ∎

## Remarks

- Normality of the blowup is proved by comparing the linear systems of the powers of the point ideal and its pullback.
- The fibre cohomology is read off from the same powers sequence.
