---
id: thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups
kind: theorem
title: "Rational Gorenstein normal surface singularities resolve by point blowups"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 18
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    lem-double-plus-simple-cubic-rational-surface-branch-terminates,
                    lem-nonsquare-tangent-conic-rational-surface-blowups-terminate,
                    lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function,
                    lem-rational-singular-point-blowup-canonical-pullback-surjective,
                    lem-rational-surface-local-rings-propagate-by-point-sequence-spreading,
                    lem-regular-base-dualizing-traces-compose-on-rational-modifications,
                    lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic,
                    lem-surface-regular-fibres-preserve-normality,
                    lem-triple-cubic-rational-surface-branch-reduces-in-two-steps]
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

Assume AC and DC. A rational Gorenstein normal local surface domain in the permitted canonical-module setting with normal completion is resolved by finitely many ordinary blowups at singular closed points. Every model is normal, its closed local rings are rational, and its canonical module is invertible; the terminal model is regular and projective over the local base. It is unchanged off the original closed point.

## Facts & Assumptions

**Given:** A rational Gorenstein normal local surface domain $A$ in the permitted canonical-module setting with normal completion.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-rational-singular-point-blowup-canonical-pullback-surjective.* Assume AC and DC. For a nonregular rational normal local surface domain in the permitted regular-base dualizing setting, let $f:X\to\operatorname{Spec}A$ be its ordinary point blowup, $E$ its exceptional divisor and $I=O_X(1)$. Then $H^1(X,\omega_X\otimes I^n)=0$ for $n\ge0$ and the canonical evaluation $f^*\omega_A\to\omega_X$ is surjective. ([[lem-rational-singular-point-blowup-canonical-pullback-surjective]])

[F4] *lem-rational-surface-local-rings-propagate-by-point-sequence-spreading.* Assume AC and DC. If a permitted normal local surface domain $A$ is rational and $A\subset B$ is a normal two-dimensional local domain with the same fraction field, essentially of finite type over $A$, then $B$ is rational. ([[lem-rational-surface-local-rings-propagate-by-point-sequence-spreading]])

[F5] *lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function.* Assume AC and DC. Let $A$ be a nonregular rational normal local surface domain in the permitted canonical-module setting, with $\omega_A\cong A$. Then its point blowup is normal with trivial canonical module. Its exceptional conormal $L$ has degree two and $\dim_\kappa\mathfrak m^n/\mathfrak m^{n+1}=2n+1$. ([[lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function]])

[F6] *lem-nonsquare-tangent-conic-rational-surface-blowups-terminate.* Assume AC and DC. For a nonregular rational normal local surface domain in the permitted class with invertible canonical module and normal completion, if its tangent-conic quadratic is not a scalar times a square, repeatedly blowing up its singular points terminates in a regular model. ([[lem-nonsquare-tangent-conic-rational-surface-blowups-terminate]])

[F7] *lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic.* Assume AC and DC. For a rational Gorenstein normal local surface singularity with square tangent conic, choose $\mathfrak m=(x_1,x_2,z)$ and a relation $z^2=\sum a_{ijk}x_ix_jx_k$. There is a nonzero homogeneous cubic $H\in\kappa[X_1,X_2]$ whose zero scheme on the reduced exceptional line contains all singular successors. ([[lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic]])

[F8] *lem-double-plus-simple-cubic-rational-surface-branch-terminates.* Assume AC and DC. Let $A$ be a rational Gorenstein normal local surface in the permitted canonical-module setting, with normal completion and generators $\mathfrak m=(x,y,z)$. If $z^2+a xy^2\in z\mathfrak m^2+(x,y)^4$ for a unit $a$, all its singular point-blowup branches terminate. ([[lem-double-plus-simple-cubic-rational-surface-branch-terminates]])

[F9] *lem-triple-cubic-rational-surface-branch-reduces-in-two-steps.* Assume AC and DC. For a rational Gorenstein normal local surface in the permitted setting with square tangent conic, if its nonzero controlling cubic is a scalar times a cube, its continuing branch enters the nonsquare case or the double-plus-simple cubic class after at most two successive square successors. This allows every characteristic and residue field. ([[lem-triple-cubic-rational-surface-branch-reduces-in-two-steps]])

[F10] *lem-surface-regular-fibres-preserve-normality.* Assume AC and DC. A flat map of Noetherian rings with regular fibres carries normality of the base to normality of the target. Consequently a normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, which is a domain. ([[lem-surface-regular-fibres-preserve-normality]])

[F11] *lem-regular-base-dualizing-traces-compose-on-rational-modifications.* Assume AC and DC. Let $R$ be regular local of dimension two, $A$ finite normal local over $R$, and let $g:X'\to X$ be a morphism of projective normal modifications over $A$. Their regular-base dualizing complexes are independent of the chosen projective embeddings up to the unique isomorphism preserving their duality pairings. ([[lem-regular-base-dualizing-traces-compose-on-rational-modifications]])

## Proof

1.1 At each ordinary rational point blowup the source is normal, rationality propagates to the closed local rings, canonical pullback from a local trivialization is a surjection onto a torsion-free rank-one module and hence an isomorphism, and normal completion persists; so all singular successors are again rational Gorenstein normal surface points in the permitted setting, and every model stays projective over the local base because each is a blowup of a projective modification at a closed point. [F3, F4, F10, F11, given]

2.1 At a nonregular point the Hilbert-function supplier exhibits a plane-conic tangent ring with nonzero quadratic; if that quadratic is not a scalar square, the nonsquare-conic lemma shows that the singular chain through it terminates, so only square-conic points can support a continuing branch. [F5, F6, step 1.1]

3.1 At a square-conic point the square-branching lemma produces a nonzero controlling cubic $H$ on the reduced exceptional line whose zero scheme contains all singular successors: simple closed zeros have nonsquare successor conic, and a triple-cubic point has at most one multiple closed zero, which has degree one; that successor is handled by the double-plus-simple lemma when the cubic is a double factor times a distinct simple factor, and by the triple-cubic reduction lemma when the cubic is a cube, which enters the nonsquare case or the stable double-plus-simple class after at most two successive square successors. [F7, F8, F9, step 2.1]

4.1 Hence no infinite chain of singular successors exists: a square point has at most three closed cubic zeros and at most one continuing square successor, while a nonsquare point has at most one singular successor and its chain terminates; the rooted tree of singular blowups is finitely branching, and if it were infinite, repeatedly choosing a child with infinitely many descendants would give an infinite path, so absence of infinite branches makes the tree finite. [F6, F7, F9, step 3.1]

5.1 Blowing up the finitely many nodes of that tree in ancestor order produces a finite sequence of ordinary point blowups at singular closed points; every model is normal with rational closed local rings and invertible canonical module, each morphism is projective and an isomorphism away from its centre, and the terminal model is regular. [F3, F4, step 4.1]

6.1 Since blowups of a projective modification at closed points are projective and the centres all lie over the original closed point, the terminal regular model is projective over the local base and the composite is an isomorphism off the original closed point; the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers, and no ADE classification diagrams or unproved square-persistence assertions are imported. [F1, F2, step 5.1] ∎

## Remarks

- The proof is a finite-tree argument: termination of every branch plus finite branching gives a finite resolution.
- All blowups are ordinary point blowups; no normalization occurs in this theorem.
