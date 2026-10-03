---
id: ex-elliptic-curve-as-nonaffine-algebraic-group
kind: example
title: "A smooth Weierstrass elliptic cubic is a nonaffine algebraic group"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-nonaffine-holomorphic-rational-map-product-curves-algebraic, lem-proper-geometrically-integral-affine-scheme-is-point, thm-elliptic-cubic-chord-tangent-group-law, thm-complex-torus-weierstrass-cubic-isomorphism, thm-weierstrass-lattice-discriminant-is-nonzero, thm-projective-space-proper-over-base, thm-jacobian-criterion-smooth-morphism]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Modular Functions and Modular Forms, Chapter 3, Proposition 3.12, p.47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
    - title: "Milne, Algebraic Groups (2022), Chapter 8, abelian variety examples"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Example

Assume the Axiom of Choice. For a full complex lattice $\Lambda$, let $g_2,g_3$ be its Weierstrass invariants. The projective plane cubic
$$E:\quad Y^2Z=4X^3-g_2XZ^2-g_3Z^3,$$
with identity $O=[0:1:0]$ and the chord-tangent group law, is an abelian variety over $\mathbf C$ and is not affine. Thus proper nonaffine algebraic groups already occur in dimension one.

## Verification

**Given:** AC, $\Lambda$, its invariants $g_2,g_3$, $E$, and $O$.

[F1] The Weierstrass discriminant is nonzero, the displayed cubic is nonsingular, and $\Phi:\mathbf C/\Lambda\to E(\mathbf C)$ is a biholomorphism. Transported addition is the chord-tangent law. ([[thm-weierstrass-lattice-discriminant-is-nonzero]], [[thm-complex-torus-weierstrass-cubic-isomorphism]], [[thm-elliptic-cubic-chord-tangent-group-law]])

[F2] An everywhere holomorphic extension of a rational map from a product of smooth complex curves is algebraic. ([[lem-nonaffine-holomorphic-rational-map-product-curves-algebraic]])

[F3] Projective space is proper, and the Jacobian criterion gives smoothness of the cubic scheme from nonsingularity. ([[thm-projective-space-proper-over-base]], [[thm-jacobian-criterion-smooth-morphism]])

[F4] An abelian variety is a proper smooth geometrically connected algebraic group; a positive-dimensional abelian variety cannot be affine. ([[def-abelian-variety-over-a-field]], [[lem-proper-geometrically-integral-affine-scheme-is-point]])

1.1 By [F1] and [F3], $E$ is a smooth projective one-dimensional scheme over $\mathbf C$, hence proper: a closed subscheme of proper projective space is finite type and separated, and its projection remains closed after arbitrary base change. Its complex manifold is connected by the biholomorphism with the connected torus. The irreducible components of a smooth algebraic scheme cannot meet, since its regular local rings are domains; the finitely many components are therefore both algebraically and analytically open and closed. Connectedness leaves exactly one, so $E$ is integral and, over the algebraically closed field $\mathbf C$, geometrically integral. [F1, F3, given, algebra]

2.1 Transported addition on $E(\mathbf C)$ is jointly holomorphic: around any two points lift to torus coordinates $z,w$, use the holomorphic map $(z,w)\mapsto z+w$, and compose with the biholomorphism $\Phi$ and its inverse from [F1]. On the dense algebraic open where $P=(x_1,y_1)$ and $Q=(x_2,y_2)$ are affine and $x_1\ne x_2$, set $m=(y_2-y_1)/(x_2-x_1)$. The chord meets the cubic at a third point with $x$-coordinate $m^2/4-x_1-x_2$, by comparison of the cubic's quadratic coefficient. Negating its $y$-coordinate gives the rational formulas $x(P+Q)=m^2/4-x_1-x_2$ and $y(P+Q)=-y_1+m(x_1-x(P+Q))$. They agree with the holomorphic group law by [F1]. Apply [F2] to get a regular algebraic multiplication $E\times E\to E$. Inverse is the regular projective map $[X:Y:Z]\mapsto[X:-Y:Z]$, and the identity is the rational point $O$. [F1, F2, step 1.1, algebra]

3.1 Associativity, inverse, and identity hold on every complex point by transport from the torus. They hold as scheme morphism identities: the relevant product schemes are reduced, their complex closed points are Zariski dense, and equality is a closed condition because the target is separated. Consequently $E$ is a group variety, and properness and geometric connectedness from step 1.1 make it an abelian variety by [F4]. Since $\dim E=1$, the nonaffineness criterion in [F4] proves that $E$ is not affine. This verification explicitly establishes regularity of the algebraic law; analytic uniformization alone was not treated as that supplier. AC is carried through [F2]–[F4]. [F1, F3, F4, step 1.1, step 2.1, algebra] ∎
