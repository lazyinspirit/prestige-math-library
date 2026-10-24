---
id: prop-cartan-commutator-identities
kind: proposition
title: "Cartan commutator identities"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cartans-magic-formula, cor-lie-derivative-commutes-with-the-exterior-derivative, prop-interior-product-on-forms-is-a-graded-antiderivation, thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket, thm-lie-derivative-is-a-derivation-of-the-tensor-algebra]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

With $[A,B]=AB-(-1)^{|A||B|}BA$ for homogeneous graded operators, $$[\mathcal L_X,\iota_Y]=\iota_{[X,Y]},\qquad [\mathcal L_X,\mathcal L_Y]=\mathcal L_{[X,Y]},\qquad \iota_X\iota_Y+\iota_Y\iota_X=0.$$

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For every vector field $X$ and differential form $\omega$, $$\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega).$$ ([[thm-cartans-magic-formula]]).

[F2] The Lie derivative is a derivation of the tensor algebra, and its action on vector fields is $\mathcal L_XY=[X,Y]$ ([[thm-lie-derivative-is-a-derivation-of-the-tensor-algebra]], [[thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket]]).

[F3] Interior product is insertion into the first alternating slot and is a degree-$-1$ graded antiderivation ([[prop-interior-product-on-forms-is-a-graded-antiderivation]]).

## Proof

**Proof technique:** direct.

1.1 Both $[\mathcal L_X,\iota_Y]$ and $\iota_{[X,Y]}$ are degree-$-1$ graded derivations, so it suffices to compare them on functions and one-forms. They vanish on functions. For a one-form $\alpha$, the tensor derivation rule gives $(\mathcal L_X\alpha)(Y)=X(\alpha(Y))-\alpha(\mathcal L_XY)=X(\alpha(Y))-\alpha([X,Y])$. Hence $[\mathcal L_X,\iota_Y]\alpha=\mathcal L_X(\alpha(Y))-(\mathcal L_X\alpha)(Y)=\alpha([X,Y])=\iota_{[X,Y]}\alpha$. The equality extends to all forms by the derivation rules. [F2, F3]

2.1 The commutator $[\mathcal L_X,\mathcal L_Y]$ is a degree-zero derivation. On a function $f$ it is $X(Yf)-Y(Xf)=[X,Y]f$. On a one-form $\alpha$, evaluate the commutator at a vector field $Z$ and use the one-form formula from step 1.1 twice. The terms where $X$ and $Y$ differentiate $\alpha(Z)$ combine to $[X,Y](\alpha(Z))$; the remaining terms combine by the Jacobi identity to $-\alpha(\bigl[\,[X,Y],Z\bigr])$. This is $(\mathcal L_{[X,Y]}\alpha)(Z)$, proving the second identity on all forms. Finally, for any alternating form $\omega$, $(\iota_X\iota_Y\omega)(Z_1,\ldots)=\omega(Y,X,Z_1,\ldots)=-\omega(X,Y,Z_1,\ldots)=-(\iota_Y\iota_X\omega)(Z_1,\ldots)$. This proves the third identity, including degrees zero and one. [F2, F3, step 1.1] ∎
