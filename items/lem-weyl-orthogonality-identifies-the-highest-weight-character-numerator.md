---
id: lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator
kind: lemma
title: Orthogonality identifies the Weyl numerator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-weyl-integration-formula, cor-irreducible-characters-are-orthonormal-class-functions, thm-highest-weight-classification-for-a-compact-connected-lie-group, lem-weyl-denominator-and-anti-invariant-orbit-sum-basis, prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one, def-axiom-of-choice, prop-weyl-jacobian-is-well-defined-and-weyl-invariant, cor-normalized-haar-measure-on-a-compact-lie-group, thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable, lem-highest-weight-modules-have-weights-below-the-top-weight, thm-compact-connected-lie-groups-are-classified-by-root-data]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §3, orthogonality and the numerator identity"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§15 and Appendix Z"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact connected Lie group with
maximal torus $T$, and let $T_p$ be the maximal torus of the finite central
cover $Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}$. For every dominant
$\lambda\in X^*(T)$, viewed as a character of $T_p$, one has
$$A_\rho\,\chi_\lambda=A_{\lambda+\rho}$$
as functions on $T_p$, where $\chi_\lambda$ is the character of the irreducible
representation of highest weight $\lambda$ and $A_\nu=\sum_{w\in W}\det(w)e^{w\nu}$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, the compact connected $G$, the finite central cover with torus $T_p$, the Weyl group $W$, the Weyl vector $\rho$, and dominant weights $\lambda,\mu\in X^*(T)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Haar integration and covering theory cited.

[L1] On the covering torus, $\rho$ is a character, $A_\rho=e^\rho\prod_{\alpha>0}(1-e^{-\alpha})$, and the $A_\eta$ indexed by strictly dominant characters form a $\mathbb Z$-basis of the anti-invariant integral group algebra. Its proof establishes that regular orbits have trivial stabilizers and a unique strictly dominant representative, and that distinct characters are independent as functions ([[lem-weyl-denominator-and-anti-invariant-orbit-sum-basis]]).

[L2] Compact-group irreducibles are classified by dominant actual characters, and a semisimple highest-weight module has a one-dimensional top and all other weights below it in root order ([[thm-highest-weight-classification-for-a-compact-connected-lie-group]], [[lem-highest-weight-modules-have-weights-below-the-top-weight]], [[prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one]]). The finite central cover is a surjective homomorphism $Z(G)^0\times G_{\mathrm{der}}^{sc}\to G$ ([[thm-compact-connected-lie-groups-are-classified-by-root-data]]).

[L3] Weyl integration holds on every compact connected group, in particular on the cover, and irreducible unitary characters have squared norm one for normalized Haar measure. Every finite-dimensional continuous compact-group representation is unitarizable ([[thm-weyl-integration-formula]], [[cor-irreducible-characters-are-orthonormal-class-functions]], [[thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable]]).

[L4] The Jacobian appearing in that formula is $J(t)=\prod_{\alpha>0}|1-\alpha(t)^{-1}|^2$ ([[prop-weyl-jacobian-is-well-defined-and-weyl-invariant]]). Normalized Haar measures have total mass one and are translation invariant ([[cor-normalized-haar-measure-on-a-compact-lie-group]]).

## Proof

**Proof technique:** finite orbit expansion and its squared norm.

1.1 Pull the irreducible representation of highest character $\lambda$ to the cover. Surjectivity [L2] makes the pullback irreducible, since it has exactly the same invariant subspaces, and its character is the pullback of $\chi_\lambda$. Every central-factor operator commutes with the pulled-back representation; over $\mathbb C$ it has an eigenvalue, and its eigenspace is invariant, so irreducibility makes that operator scalar. If a subspace is invariant under the semisimple factor, it is therefore also invariant under the scalar central factor and hence under the whole product; thus the restriction to $G_{\mathrm{der}}^{sc}$ is irreducible. Applying the compact highest-weight classification in [L2] to that factor and the highest-weight bounds there, the torus expansion is a finite sum of weight characters with nonnegative integer multiplicities,
$$\chi_\lambda=e^\lambda+\sum_{\mu<\lambda}m_\mu e^\mu,$$
with top multiplicity one. This expansion is W-invariant: conjugation by a normalizer representative acts on the representation by an invertible matrix and does not change its trace, and character independence from [L1] gives equality also in the formal algebra. [L1, L2, algebra]

1.2 For any nontrivial torus character $e^\gamma$, choose t with $e^\gamma(t)\ne1$. Translation invariance [L4] gives $I:=\int e^\gamma=e^\gamma(t)I$, hence I=0. The trivial character has integral one. Thus $\int_{T_p}e^\eta\overline{e^\zeta}\,dt=\delta_{\eta\zeta}$. Using the regular-orbit statements in [L1], finite expansion consequently gives $$\int_{T_p}A_\eta\overline{A_\zeta}\,dt=|W|\delta_{\eta\zeta}$$ for strictly dominant $\eta,\zeta$: distinct representatives have disjoint orbits and the same representative has exactly the $|W|$ equal-index matches, each with sign squared one. This uses only finite orthogonality, not completeness of a Fourier basis. [L1, L4, algebra]

1.3 Since $e^\rho$ is a circle character, it has modulus one. Taking the squared absolute value of the product identity [L1] and using [L4] proves pointwise on $T_p$ that $|A_\rho|^2=J$. This is valid also at zeros and for the empty product. After unitarizing the pulled-back irreducible without changing its trace, [L3] and Weyl integration on the cover applied to the continuous class function $|\chi_\lambda|^2$ give $$\int_{T_p}|A_\rho\chi_\lambda|^2\,dt=|W|.$$ [L1, L2, L3, L4]

2.1 Put $F=A_\rho\chi_\lambda$. It is a finite anti-invariant integral sum by [L1] and step 1.1. Expand $A_\rho$ using its product expression. Every exponent of F is $\lambda+\rho-\sigma$ with $\sigma$ in the nonnegative simple-root cone; the coefficient at $\lambda+\rho$ is one, because achieving it requires both the top weight and the empty subset of positive roots. A nonzero sum in that cone cannot cancel another such sum. Since $\lambda$ is dominant and rho pairs to one with each simple coroot as in [L1], $\lambda+\rho$ is strictly dominant. In the orbit basis [L1] its coefficient is therefore one: that basis element contains $e^{\lambda+\rho}$ once, and no other indexed orbit contains it. Hence $$F=A_{\lambda+\rho}+\sum_{\eta\ne\lambda+\rho}c_\eta A_\eta,$$ a finite sum over strictly dominant characters $\eta$ with $c_\eta\in\mathbb Z$. No condition that $\eta-\rho$ be strictly dominant is imposed. [L1, step 1.1]

3.1 By step 1.2, the squared norm of the finite expansion in step 2.1 is $|W|(1+\sum_\eta|c_\eta|^2)$. Step 1.3 says the same squared norm is $|W|$. As $|W|>0$, every term $|c_\eta|^2$ is zero, proving $A_\rho\chi_\lambda=A_{\lambda+\rho}$ in the formal algebra and hence as functions. There is no infinite matrix, least element of a global dominance order, or induction to justify. When the roots are empty, W is trivial, rho=0 and the compact-group classification gives $\chi_\lambda=e^\lambda$, the same identity; for $\lambda=0$ it is $A_\rho=A_\rho$. Choice supplies the assumptions of the cited classification, cover and integration interfaces. [A1, L1, L2, step 1.2, step 1.3, step 2.1] ∎
