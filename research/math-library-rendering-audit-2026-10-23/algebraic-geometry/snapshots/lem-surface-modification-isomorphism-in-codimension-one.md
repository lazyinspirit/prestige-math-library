---
id: lem-surface-modification-isomorphism-in-codimension-one
kind: lemma
title: "A normal-surface modification is an isomorphism in codimension one"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [
          def-normal-surface-modification-and-normalized-point-blowup, def-axiom-of-choice,
                    lem-normal-domain-implies-r-one, thm-one-dimensional-regular-local-rings-are-dvrs,
                    thm-valuative-criterion-properness, cor-quasi-finite-locus-open-finite-type-algebra,
                    thm-proper-quasi-finite-is-finite, thm-integrality-and-finite-module-equivalences,
                    lem-proper-stable-base-change, thm-proper-morphism-closed-image]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Definitions 54.5.1/54.14.1\u20132 and Lemma 54.5.3"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $f:X\to S$ be a modification of integral Noetherian schemes and let $S$ be normal of dimension two. Then $f$ is an isomorphism over an open subset containing every point of codimension at most one in $S$. The complement is a finite set of closed points. If every fibre is zero-dimensional, $f$ is an isomorphism. The union of curves contracted by $f$ is contained in the fibres over that finite set and is finite when $\dim X=2$.

## Facts & Assumptions

**Given:** A modification $f\colon X\to S$ of integral Noetherian schemes with $S$ normal of dimension two.

[F1] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. ([[def-normal-surface-modification-and-normalized-point-blowup]])

[F2] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F3] *lem-normal-domain-implies-r-one.* Every commutative Noetherian integrally closed domain satisfies $(R_1)$. ([[lem-normal-domain-implies-r-one]])

[F4] *thm-one-dimensional-regular-local-rings-are-dvrs.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR. ([[thm-one-dimensional-regular-local-rings-are-dvrs]])

[F5] *thm-valuative-criterion-properness.* Assume the Axiom of Choice. Let $f:X\to S$ be a morphism of schemes that is of finite type and quasi-separated. Then $f$ is proper if and only if every valuative diagram for $f$ over an arbitrary valuation ring has exactly one lift. ([[thm-valuative-criterion-properness]])

[F6] *cor-quasi-finite-locus-open-finite-type-algebra.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R\to S$ be a ring map of finite type (def-finite-type-and-module-finite-algebras). ([[cor-quasi-finite-locus-open-finite-type-algebra]])

[F7] *thm-proper-quasi-finite-is-finite.* Assume the Axiom of Choice. Every proper quasi-finite morphism of schemes $f:X\to S$ is finite (def-proper-morphism, def-quasi-finite-morphism-schemes, def-finite-morphism-schemes). No Noetherian or nonemptiness hypothesis is imposed, and the assertion is local on the base. ([[thm-proper-quasi-finite-is-finite]])

[F8] *thm-integrality-and-finite-module-equivalences.* Let $A\subseteq B$ be commutative rings with $A\ne0$, and let $b\in B$. The following are equivalent: $b$ is integral over $A$; $A[b]$ is finitely generated as an $A$-module; and there exists a faithful $A[b]$-module that is finitely generated over $A$, where faithful means that $rM=0$ implies $r=0$ for $r\in A[b]$. See def-integral-element-and-algebraic-integer. ([[thm-integrality-and-finite-module-equivalences]])

[F9] *lem-proper-stable-base-change.* Assume the Axiom of Choice (AC). For every proper morphism $f:X\to S$ and every morphism $S'\to S$, the base-changed morphism $f_{S'}:X\times_S S'\longrightarrow S'$ is proper. ([[lem-proper-stable-base-change]])

[F10] *thm-proper-morphism-closed-image.* Let $f:X\to S$ be a proper morphism of schemes. Then $f$ is a closed map of topological spaces: for every closed subset $Z\subseteq|X|$ its image $f(Z)$ is closed in $|S|$. In particular $f(X)$ is closed. ([[thm-proper-morphism-closed-image]])

## Proof

1.1 At a point $s\in S$ of codimension zero the claim is immediate: the generic point of the integral scheme $X$ maps to the generic point of $S$ and $f$ is an isomorphism there by birationality. At a point of codimension one the normal Noetherian local ring $\mathcal O_{S,s}$ has dimension one and is regular by the $R_1$ consequence of normality, hence is a discrete valuation ring. [F1, F3, F4, given]

2.1 Base change to $\operatorname{Spec}\mathcal O_{S,s}$: properness and integrality are preserved, the generic inverse is defined on the punctured spectrum and extends by the valuative criterion of properness to a section of the base-changed morphism. A section of a separated morphism is a closed immersion, being a base change of the closed diagonal; its image contains the generic point of the integral source, so it is the whole source, and since the source is reduced its defining ideal is zero. Hence the base change of $f$ over $\mathcal O_{S,s}$ is an isomorphism. [F5, F9, step 1.1]

3.1 Around the fibre over $s$: the quasi-finite locus of $f$ is open, and the complement of that locus is proper over $S$ by closedness of proper maps and does not contain $s$, because $f$ is an isomorphism over $s$; restricting the base to the complement of its image gives a proper quasi-finite morphism, which is finite. [F6, F7, F10, step 2.1]

4.1 On an affine neighbourhood of $s$ the finite morphism corresponds to a finite extension of normal domains inside the common fraction field; integral closedness of the target forces the domain algebra to equal the target algebra, so the finite morphism is an isomorphism over a neighbourhood of $s$. This gives an open subset of $S$ containing every point of codimension at most one over which $f$ is an isomorphism; its complement is a proper closed subset of the two-dimensional Noetherian space $S$, hence zero-dimensional, so it consists of finitely many closed points. [F8, step 3.1]

5.1 If every fibre of $f$ is zero-dimensional, then $f$ is proper and quasi-finite, hence finite, and the same affine argument shows that $f$ is an isomorphism. If $\dim X=2$, every fibre that is not finite is a closed subset of the integral two-dimensional scheme $X$ of dimension at most one, hence has finitely many irreducible components, and each contracted integral curve is one of these components. The Axiom of Choice is inherited from the cited suppliers. [F7, F10, step 3.1, step 4.1, F2] ∎

## Remarks

- The codimension-one argument is the valuative criterion applied over discrete valuation rings; the openness statement then spreads the isomorphism to a neighbourhood of each codimension-one point.
- The finite exceptional set is the complement of the open locus; it is not assumed empty.
