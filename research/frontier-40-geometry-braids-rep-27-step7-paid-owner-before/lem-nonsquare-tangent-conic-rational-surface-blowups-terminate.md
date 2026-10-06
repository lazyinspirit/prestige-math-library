---
id: lem-nonsquare-tangent-conic-rational-surface-blowups-terminate
kind: lemma
title: Nonsquare tangent-conic surface singularities terminate under point blowups
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 14
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-equicharacteristic-fixed-coordinate-blowup-chain-defines-formal-arc
- lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate
- lem-quadratic-in-a-square-ideal-with-nontrivial-colength-is-a-square
- lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function
- lem-rational-surface-local-rings-propagate-by-point-sequence-spreading
- lem-surface-completion-base-change-preserves-closed-fibre-local-completions
- lem-surface-regular-fibres-preserve-normality
- thm-blowup-base-change-flat
- thm-completion-preserves-regular-local-rings
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project, Resolution of Surfaces, Sections 54.8–54.9: complete source arguments with local
      prerequisite replacements'
    url: https://stacks.math.columbia.edu/download/resolve.pdf
verification:
  precheck: pass
---

## Statement

Assume AC and DC. For a nonregular rational normal local surface domain in the permitted class with invertible canonical module and normal completion, if its tangent-conic quadratic is not a scalar times a square, repeatedly blowing up its singular points terminates in a regular model. Each blowup has at most one singular successor; that successor is residue-field rational and again has nonsquare tangent conic.

## Facts & Assumptions

**Given:** A nonregular rational normal local surface domain $A$ in the permitted class with invertible canonical module and normal completion, whose tangent-conic quadratic is not a scalar multiple of a square.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function.* Assume AC and DC. Let $A$ be a nonregular rational normal local surface domain in the permitted canonical-module setting, with $\omega_A\cong A$. Then its point blowup is normal with trivial canonical module. Its exceptional conormal $L$ has degree two and $\dim_\kappa\mathfrak m^n/\mathfrak m^{n+1}=2n+1$. ([[lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function]])

[F4] *lem-quadratic-in-a-square-ideal-with-nontrivial-colength-is-a-square.* Assume AC and DC. If $I\subset\kappa[x,y]$ has colength greater than one and contains a nonzero polynomial $q$ of total degree at most two in $I^2$, then $q$ is a scalar times the square of an affine linear polynomial. Infinite colength is allowed. ([[lem-quadratic-in-a-square-ideal-with-nontrivial-colength-is-a-square]])

[F5] *lem-equicharacteristic-fixed-coordinate-blowup-chain-defines-formal-arc.* Assume the Axiom of Choice and the Axiom of Dependent Choice ([[def-axiom-of-choice]], [[def-dependent-choice]]). Let $(B,\mathfrak m,\kappa)$ be an equicharacteristic Noetherian local domain, and let $(B_n,\mathfrak m_n)$, $n\ge0$, be the local rings at a successive infinite chain of point blowups, $B_0=B$, all with residue field $\kappa$: for every $n$ the ring $B_{n+1}$ is t ([[lem-equicharacteristic-fixed-coordinate-blowup-chain-defines-formal-arc]])

[F6] *lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate.* Assume AC and DC. Let $A$ be a normal Noetherian local domain of dimension two with a surjection onto a complete DVR $V$ inducing its residue-field identification. The successive point blowups along this nonsingular arc become regular at the arc centre after finitely many steps. ([[lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate]])

[F7] *thm-blowup-base-change-flat.* Assume the Axiom of Choice as inherited from the relative Proj construction. Let $g\colon X'\to X$ be a flat morphism of schemes and $\mathcal I$ a quasi-coherent ideal sheaf of finite type on $X$. ([[thm-blowup-base-change-flat]])

[F8] *lem-surface-completion-base-change-preserves-closed-fibre-local-completions.* Assume AC. Let $(A,\mathfrak m)$ be a Noetherian local ring, $\widehat A$ its maximal-adic completion, and $X$ a scheme locally of finite type over $A$. Put $Y=X\times_{\operatorname{Spec}A}\operatorname{Spec}\widehat A$. The closed fibres of $X$ and $Y$ are canonically isomorphic. ([[lem-surface-completion-base-change-preserves-closed-fibre-local-completions]])

[F9] *thm-completion-preserves-regular-local-rings.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonzero Noetherian local ring $R$ is regular if and only if its maximal-adic completion $\widehat R$ is regular. ([[thm-completion-preserves-regular-local-rings]])

[F10] *lem-rational-surface-local-rings-propagate-by-point-sequence-spreading.* Assume AC and DC. If a permitted normal local surface domain $A$ is rational and $A\subset B$ is a normal two-dimensional local domain with the same fraction field, essentially of finite type over $A$, then $B$ is rational. ([[lem-rational-surface-local-rings-propagate-by-point-sequence-spreading]])

[F11] *lem-surface-regular-fibres-preserve-normality.* Assume AC and DC. A flat map of Noetherian rings with regular fibres carries normality of the base to normality of the target. Consequently a normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, which is a domain. ([[lem-surface-regular-fibres-preserve-normality]])

## Proof

1.1 Choose generators $x_1,x_2,x_3$ of $\mathfrak m$ with $\operatorname{gr}_{\mathfrak m}A=\kappa[T_1,T_2,T_3]/(q)$, $q$ a nonzero quadratic, and lift the unique quadratic relation to $\sum a_{ij}x_ix_j=\sum a_{ijk}x_ix_jx_k$ modulo terms of order at least four; on the $x_1$-chart, with $y_i=x_i/x_1$, dividing by $x_1^2$ exhibits the exceptional conic as $q(1,y_2,y_3)=0$. [F3, given]

2.1 At a closed point $p$ of that conic, if the fibre equation were not in the square of the plane maximal ideal, then the local maximal ideal of the surface would be generated by $x_1$ and two lifts and have embedding dimension at most two, making the local ring regular; so every singular point has the fibre quadratic in $I_p^2$, and if the residue degree of $p$ exceeded one, the quadratic square-ideal lemma would make $q$ a scalar times a square, contrary to hypothesis; hence every singular point is $\kappa$-rational. [F4, step 1.1]

3.1 Changing the triple so that $p=(1,0,0)$, the original conic equation is a nonsquare binary quadratic in the two coordinates transverse to $p$: if it has a $\kappa$-root it splits into two distinct $\kappa$-lines meeting at the unique singular point of the conic, and otherwise the conic has only the rational vertex; in either case there is at most one singular successor. [F3, step 2.1]

4.1 Absorbing into the cubic part the coefficients of the three monomials $x_1x_i$ with zero residue, the chart relation forces the remaining cubic coefficient $a_{111}$ to lie in $\mathfrak m$, since otherwise it would express $x_1$ in the square of the chart maximal ideal and eliminate it as a cotangent generator; writing that coefficient modulo $(x_2,x_3)$ as $bx_1$, the successor quadratic relation restricts on the plane $x_1=0$ to exactly the same nonsquare binary quadratic, with all other terms carrying a factor of $x_1$; hence a singular successor again has nonsquare tangent conic and a singular successor again has $\kappa$-rational singular points by the argument of step 2.1. On $x_1=0$, a $\kappa$-root of the nonsquare binary quadratic is simple (and if it has no $\kappa$-root there is no such point), so the local fibre equation is not in the square of the plane maximal ideal. Such a point is regular by step 2.1. Thus every singular successor point lies off $x_1=0$, justifying continued use of the same coordinate chart. [F3, step 3.1]

5.1 If an infinite chain of singular point blowups existed, its centres would be $\kappa$-rational with residue field $\kappa$ and the fixed element $x_1$ would generate the pullback of every centre ideal, so the fixed-coordinate helper would construct a nonsingular formal arc, namely a surjection from the completion of $A$ onto a complete discrete valuation ring with uniformizer the image of $x_1$ whose point-blowup centres are the given ones; $\kappa$-rationality and rationality of the local rings propagate along the chain, and normal completion persists by the regular-fibre normality result. [F5, F10, F11, step 4.1]

6.1 Since $A$ has normal completion, the kernel of the arc surjection is a regular height-one prime, so the formal-arc termination helper makes the completed point blowups regular at the arc centre after finitely many steps. [F6, step 5.1]

7.1 Blowup flat base change identifies the completed blowups with the blowups of the completion, and completion base change preserves the closed-fibre local completions; regularity is preserved and reflected by completion, so those finitely many completed steps give a regular local ring on the original chain, contradicting the existence of infinitely many singular successors; the chain of singular blowups is therefore finite and ends in a regular model. [F7, F8, F9, step 6.1]

8.1 Thus each blowup has at most one singular successor, that successor is residue-field rational and again has nonsquare tangent conic, and the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers; no square-conic case is asserted. [F1, F2, step 7.1] ∎

## Remarks

- The fixed-coordinate hypothesis is exactly what converts an infinite singular branch into a nonsingular formal arc on the completion.
- Rationality and normality are preserved at each step, so the argument applies to every successor.
