---
id: lem-local-normal-surface-modification-dimension-and-projective-cohomology
kind: lemma
title: Dimension and cohomology of local normal surface modifications
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-normal-surface-modification-and-normalized-point-blowup
- lem-surface-modification-isomorphism-in-codimension-one
- lem-cm-local-codimension-and-regular-quotient-ext-concentration
- lem-normal-domain-implies-s-two
- cor-flat-local-depth-additivity
- cor-field-finite-type-over-a-field-is-a-finite-extension
- thm-proper-pushforward-coherent
- thm-serre-vanishing
- lem-eventual-global-generation-coherent-twists
- thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
- thm-integrality-and-finite-module-equivalences
- thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: The Stacks Project, Resolution of Surfaces, Lemma 54.5.3 and Situation 54.7.1 (complete arguments read
      and refined)
    url: https://stacks.math.columbia.edu/download/resolve.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $(A,\mathfrak m)$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ an integral modification. Then $X$ has dimension two, all closed points have local dimension two, $f$ is an isomorphism off the closed point, $f_*\mathcal O_X=\mathcal O_{\operatorname{Spec}A}$, and its special fibre has dimension at most one. If $X$ is projective over $A$, it has a cover by two affine opens, hence $H^q(X,F)=0$ for $q>1$ for every quasi-coherent $F$. In particular $H^1(X,\mathcal O_X)$ has finite length over $A$.

## Facts & Assumptions

**Given:** A normal Noetherian local domain $(A,\mathfrak m)$ of dimension two, an integral modification $f\colon X\to\operatorname{Spec}A$ (with $X$ projective over $A$ in the cohomological part), and a quasi-coherent sheaf $F$ on $X$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-normal-surface-modification-and-normalized-point-blowup.* **Normal schemes.** A locally Noetherian scheme is *normal* if every local ring $\mathcal O_{X,x}$ is an integrally closed domain (def-normal-noetherian-ring). This is a local condition on the local rings and is checked on an affine open cover; it does not require the global section ring to be a domain. The empty scheme is normal vacuously. (def-normal-surface-modification-and-normalized-point-blowup)

[F4] *lem-surface-modification-isomorphism-in-codimension-one.* Assume AC. Let $f:X\to S$ be a modification of integral Noetherian schemes and let $S$ be normal of dimension two. Then $f$ is an isomorphism over an open subset containing every point of codimension at most one in $S$. The complement is a finite set of closed points. If every fibre is zero-dimensional, $f$ is an isomorphism. ([[lem-surface-modification-isomorphism-in-codimension-one]])

[F5] *lem-cm-local-codimension-and-regular-quotient-ext-concentration.* Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from the resolution and Ext suppliers below ([[def-axiom-of-choice]], [[def-dependent-choice]]). Let $(R,\mathfrak m)$ be a Noetherian Cohen--Macaulay local ring of dimension $D$. ([[lem-cm-local-codimension-and-regular-quotient-ext-concentration]])

[F6] *lem-normal-domain-implies-s-two.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every commutative Noetherian integrally closed domain satisfies $(S_2)$. ([[lem-normal-domain-implies-s-two]])

[F7] *cor-flat-local-depth-additivity.* Assume the Axiom of Choice. For a flat local homomorphism $(R,\mathfrak m)\to(S,\mathfrak n)$ of Noetherian local rings, $\operatorname{depth}(S)=\operatorname{depth}(R) +\operatorname{depth}(S/\mathfrak mS).$ ([[cor-flat-local-depth-additivity]])

[F8] *cor-field-finite-type-over-a-field-is-a-finite-extension.* Let $k\subseteq K$ be a field extension. If $K$ is finitely generated as a $k$-algebra, then $K$ is a finite field extension of $k$. ([[cor-field-finite-type-over-a-field-is-a-finite-extension]])

[F9] *thm-proper-pushforward-coherent.* Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from the affine localization theorem, the Čech comparison and the dévissage lemma cited below ([[def-axiom-of-choice]], [[def-dependent-choice]]). ([[thm-proper-pushforward-coherent]])

[F10] *thm-serre-vanishing.* Assume the Axiom of Choice as inherited from the cited suppliers ([[def-axiom-of-choice]]). Let $A$ be a Noetherian commutative ring with $1$, let $X$ be a scheme projective over $A$ in the finite-dimensional H-projective convention (def-projective-morphism-pre-proj): the structure morphism $X\to\operatorname{Spec}A$ factors as a closed immersion  ([[thm-serre-vanishing]])

[F11] *lem-eventual-global-generation-coherent-twists.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a Noetherian commutative ring (def-noetherian-ring-and-module) and let $X$ be a scheme projective over $A$ in the finite-dimensional H-projective convention (def-projective-morphism-pre-proj): the structure morphism $X\to\operatorname{Spec}A$ (def-affine-scheme-spectrum) factors over  ([[lem-eventual-global-generation-coherent-twists]])

[F12] *thm-cech-computes-qc-cohomology-separated-scheme-affine-cover.* Assume the Axiom of Choice, inherited from sheaf cohomology. Let $X$ be a quasi-compact separated scheme (def-separated-morphism-schemes), let $U_0,\dots,U_r$ be a finite affine open cover of $X$ and let $\mathcal F$ be a quasi-coherent $\mathcal O_X$-module (def-quasi-coherent-module-scheme). ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]])

[F13] *thm-integrality-and-finite-module-equivalences.* Let $A\subseteq B$ be commutative rings with $A\ne0$, and let $b\in B$. The following are equivalent: $b$ is integral over $A$; $A[b]$ is finitely generated as an $A$-module; and there exists a faithful $A[b]$-module that is finitely generated over $A$, where faithful means that $rM=0$ implies $r=0$ for $r\in A[b]$. See def-integral-element-and-algebraic-integer. ([[thm-integrality-and-finite-module-equivalences]])

[F14] Polynomial extension increases finite Noetherian dimension by the number of variables. ([[thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring]])

## Proof

1.1 Normality makes $A$ Cohen--Macaulay of dimension two. At a closed point $x$ properness puts $x$ over the closed point with finite residue extension. Write an affine chart as $C=A[t_1,\ldots,t_N]/I$, with $I$ prime and $I\cap A=0$ by birationality. The ambient polynomial local ring $T$ at $x$ has depth $N+2$ by flat-local depth additivity, because its closed fibre is a polynomial local ring of dimension $N$; its dimension is at most $N+2$ by the polynomial dimension formula, hence equals $N+2$ and it is CM. Every prime below $I$ avoids $A\setminus\{0\}$, so localization preserves its height; over $K=\operatorname{Frac}A$, the chart algebra is $K$, giving $\operatorname{ht}I=N$. The CM codimension formula in $T$ therefore gives $\dim\mathcal O_{X,x}=2$. [F5, F7, F8, F14, given]

2.1 Every point of the Noetherian scheme $X$ specializes to a closed point and dimension is monotone under localization, so all local rings of $X$ have dimension at most two and the scheme has dimension two; the codimension-one modification lemma gives that $f$ is an isomorphism off the closed point of $\operatorname{Spec}A$. [F4, F7, step 1.1]

3.1 For an affine open of the target, the pushforward of the structure sheaf is finite by proper coherent finiteness, and its algebra embeds into the common function field and is integral over the normal target ring; integral closedness forces equality, whence $f_*\mathcal O_X=\mathcal O_{\operatorname{Spec}A}$. [F9, F13, F6, step 2.1]

4.1 A two-dimensional component of the special fibre would be the whole integral surface $X$, contradicting the generic isomorphism of step 2.1, so the special fibre has dimension at most one. [F4, step 3.1]

5.1 Assume $X$ projective over $A$, and fix an embedding bundle $L$. On the closed fibre choose one closed point on each irreducible component. Serre vanishing for the ideals of this finite set and of the fibre lets one prescribe nonzero values and lift them to a section $s$ of a high $L$-power on $X$. Its zero set $D$ on the fibre is finite, since $s$ is not identically zero on any component. The same restriction-and-lifting argument gives a section $t$ of a further high power nonvanishing at every point of $D$; replace $s$ by a power to equalize the twists. Their common zero locus is proper with empty closed fibre, hence empty, since any nonempty closed image in the local base contains its closed point. The twists may also be chosen high enough that the sections extend to homogeneous polynomials of the ambient projective space, by Serre vanishing for its embedding ideal. Their nonvanishing opens are then affine standard Proj opens, giving a two-affine cover of $X$. [F10, F11, given, step 4.1]

6.1 Since $X$ is separated, the intersection of the two affine members of this cover is affine, so the Cech complex of the cover has length one and vanishes above degree one; hence $H^q(X,F)=0$ for $q>1$ for every quasi-coherent $F$, and proper coherent finiteness together with the isomorphism off the special point makes $H^1(X,\mathcal O_X)$ finite supported at the maximal ideal, hence of finite length. [F9, F12, step 5.1]

7.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the coherent-finiteness and vanishing suppliers; the argument does not assume that the special fibre is zero-dimensional. [F1, F2, step 6.1] ∎

## Remarks

- The two-cover argument is the reason only $H^1$ can be nonzero, and it is available exactly because the projective modification can be covered by two affine charts.
- The dimension computation uses the Cohen-Macaulay codimension formula for the local ring of a point of the chart; this is where the normal two-dimensional hypothesis on the base is used.
