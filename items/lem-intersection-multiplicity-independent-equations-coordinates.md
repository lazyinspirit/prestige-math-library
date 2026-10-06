---
id: lem-intersection-multiplicity-independent-equations-coordinates
kind: lemma
title: Invariance of the local intersection multiplicity
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-length-is-additive-in-short-exact-sequences, cor-localisation-is-unique-up-to-unique-isomorphism, def-axiom-of-choice, def-composition-series-and-length-of-a-module, def-local-intersection-multiplicity-plane-curves, def-morphism-to-projective-space-homogeneous-coordinates, def-multiplicity-plane-curve-point, def-plane-projective-curve, lem-local-intersection-length-finite, lem-projective-coordinate-morphisms-well-defined, lem-standard-projective-opens-are-affine-spaces, prop-iterated-localisation, thm-affine-morphisms-coordinate-ring-anti-equivalence, thm-local-ring-affine-variety-localization, thm-localisation-commutes-with-quotients, thm-universal-property-of-localisation]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement

Assume the Axiom of Choice. In the situation of the definition, $I_p(C,D)$ is unchanged when

(a) the defining forms $F,G$ are multiplied by nonzero constants;
(b) the local equations $f,g$ are replaced by any other generating pair of the ideal $(f,g)\mathcal O_{\mathbf P^2,p}$, in particular by $f+ag$ and $g$ or by units times $f,g$;
(c) a different standard chart containing $p$, or an affine change of coordinates at $p$, is used for both curves;
(d) a projective change of coordinates $A\in\mathrm{PGL}_3(k)$ is applied to $C$ and $D$ and $p$ is replaced by $A(p)$, so that $I_p(C,D)=I_{A(p)}(A(C),A(D))$.

## Facts & Assumptions

**Given:** AC, plane curves $C=V(F)$, $D=V(G)$ over the algebraically closed field $k$, a point $p$ with no common local component, and local equations $f,g$ of $C,D$ at $p$ in $O=\mathcal O_{\mathbf P^2,p}$; $I_p(C,D)=\ell_O(O/(f,g))$ [[def-local-intersection-multiplicity-plane-curves]].

[F1] Length of a module depends only on the isomorphism class of the module, and is additive over direct sums of quotients; quotienting a ring by an ideal depends only on the ideal [[def-composition-series-and-length-of-a-module]], [[cor-length-is-additive-in-short-exact-sequences]].

[F2] Localising at corresponding primes is unique up to a unique isomorphism: chart transition maps and affine and projective coordinate changes induce isomorphisms of the local rings at corresponding points, carrying one local equation to a unit multiple of the other [[cor-localisation-is-unique-up-to-unique-isomorphism]], [[prop-iterated-localisation]], [[thm-universal-property-of-localisation]], [[thm-affine-morphisms-coordinate-ring-anti-equivalence]], [[thm-local-ring-affine-variety-localization]].

[F3] The dehomogenisations of $F$ in different charts containing $p$ are related by multiplication by a unit of $O$; a projective change of coordinates $A$ maps the local ring at $p$ isomorphically onto the local ring at $A(p)$ and the local equations of $A(C),A(D)$ accordingly [[lem-standard-projective-opens-are-affine-spaces]], [[lem-projective-coordinate-morphisms-well-defined]], [[def-morphism-to-projective-space-homogeneous-coordinates]], [[def-plane-projective-curve]].

[F4] In the local ring $O$ at a point of the plane, a local equation of $C$ is well defined up to a unit, the local ring is independent of the chart containing $p$, and the quotient $O/(f,g)$ has finite length when there is no common local component [[def-multiplicity-plane-curve-point]], [[lem-local-intersection-length-finite]], [[thm-localisation-commutes-with-quotients]].

[F5] AC is assumed; it enters only through the cited localisation and length suppliers [[def-axiom-of-choice]].

## Proof

1.1 For (a): multiplying $F$ by $\lambda\in k^\times$ multiplies the local equation $f$ by the unit $\lambda$ of $O$, and similarly for $G$; the ideal $(f,g)$ is therefore unchanged, and $I_p=\ell_O(O/(f,g))$ is unchanged. [F1, F4, given]

1.2 For (b): if $f',g'$ generate the same ideal as $f,g$, then the ideals $(f,g)$ and $(f',g')$ are equal, so the quotients $O/(f,g)$ and $O/(f',g')$ are equal rings and have the same length. In particular $f+ag$ with $g$ generates the same ideal because $f=(f+ag)-ag$, and multiplying $f$ or $g$ by a unit does not change the ideal. [F1, given, algebra]

2.1 For (c): let $O'$ be the local ring computed in another chart containing $p$, or after an affine change of coordinates at $p$. The chart transition and coordinate changes induce ring isomorphisms $O\to O'$ carrying the local equations of $C$ and $D$ to local equations, hence carrying the ideal $(f,g)$ to the corresponding ideal $(f',g')$; length is invariant under ring isomorphism, so the two computations agree. [step 1.1, F2, F3, F4, given]

2.2 For (d): a projective change of coordinates $A$ induces an isomorphism of the local ring at $p$ with the local ring at $A(p)$ and carries local equations of $C,D$ at $p$ to local equations of $A(C),A(D)$ at $A(p)$ [F3]; since length is invariant under isomorphism, $I_p(C,D)=I_{A(p)}(A(C),A(D))$, with finiteness preserved on both sides by [F4]. [step 1.1, F3, F4, given]

3.1 Statements (a)–(d) are proved in steps 1.1, 1.2, 2.1 and 2.2, so $I_p(C,D)$ depends only on the curves and the point, not on the chosen defining forms, local equations, chart, affine coordinates or projective coordinates. [step 1.1, step 1.2, step 2.1, step 2.2, given, F5] ∎ 