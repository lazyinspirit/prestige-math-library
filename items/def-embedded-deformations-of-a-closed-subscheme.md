---
id: "def-embedded-deformations-of-a-closed-subscheme"
kind: "definition"
title: "Embedded deformations of a closed subscheme"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 2
justified_by: []
aliases: []
deps:
  - "thm-differentials-smooth-locally-free"
  - "def-axiom-of-choice"
  - "def-closed-immersion-schemes"
  - "lem-base-change-open-closed-immersions"
  - "def-flat-morphism-schemes"
  - "def-square-zero-extension-and-small-extension"
  - "def-locally-finite-presentation-morphism"
  - "lem-flat-morphisms-stable-base-change"
  - "lem-base-change-locally-finite-type-presentation"
  - "def-fibre-product-schemes-universal-property"
  - "def-infinitesimal-deformation-functor-over-square-zero-extension"
  - "def-quasi-coherent-ideal-sheaf"
  - "def-sheaf-hom"
  - "def-internal-hom-qc-sheaves"
  - "def-effective-cartier-divisor"
  - "thm-conormal-sequence-closed-immersion"
  - "lem-smooth-closed-immersion-regular-conormal-sequence"
  - "def-smooth-morphism-schemes"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  precheck: "n/a"
sources:
  references:
    - title: "The Stacks Project, smooth-source conormal sequence"
      url: "https://stacks.math.columbia.edu/tag/06AA"
      locator: "Lemma 29.35.17, complete statement and proof; its algebraic input 10.139.2 (06A8) gives split exactness. Read 2026-10-06."
    - title: "Robin Hartshorne, Lectures on Deformation Theory (Berkeley Math 274 draft, 2004/2005)"
      url: "http://math.berkeley.edu/~robin/math274root.pdf"
      locator: "Chapter 1 Theorem 1.1(b),(c) (printed pages 1-3), and Section 2 Proposition 2.3 with proof and Theorem 2.4 (printed pages 6-8): fixed-ambient deformations and H^0(N). Read 2026-10-06."
    - title: "Edoardo Sernesi, An overview of classical deformation theory"
      url: "http://www.mat.uniroma3.it/users/sernesi/sernesioverviewdefth.pdf"
      locator: "Section 2 (pp. 4-7): first-order deformations of a closed subscheme inside a fixed ambient scheme and the normal-bundle description (read 2026-10-05)"
---

## Definition

Assume the Axiom of Choice as inherited from the cited scheme and
flat-base-change suppliers ([[def-axiom-of-choice]]).
Let $k$ be a field and let $X$ be a smooth projective $k$-scheme
([[def-smooth-morphism-schemes]]) with a closed subscheme $Y\subseteq X$
([[def-closed-immersion-schemes]]) that is flat over $k$
([[def-flat-morphism-schemes]]). For a local Artin $k$-algebra $R$ with residue
field $k$, fix the trivial ambient deformation $X_R=X\times_k\operatorname{Spec}R$.
An **embedded deformation of $Y$ in $X$ over $R$** is a closed subscheme
$Y_R\subseteq X_R$ that is flat and locally finitely presented over $R$, with
its special fibre identified with $Y\subseteq X$:
$$Y_R\times_{\operatorname{Spec}R}\operatorname{Spec}k\cong Y.$$
This is the embedded version of
[[def-infinitesimal-deformation-functor-over-square-zero-extension]].
An **isomorphism of embedded deformations** is an $X_R$-isomorphism inducing
the identity on the identified special fibre. These objects and isomorphisms
form the groupoid $\operatorname{ED}_{Y\subseteq X}(R)$; its set of
isomorphism classes is $\operatorname{ED}_{Y\subseteq X}(R)_{\mathrm{iso}}$.
An augmented $k$-algebra map $R\to R'$ induces base change of these closed
subschemes inside $X_{R'}$. Closed immersions, flatness and local finite
presentation persist under base change
([[lem-base-change-open-closed-immersions]], [[lem-flat-morphisms-stable-base-change]], [[lem-base-change-locally-finite-type-presentation]]),
and the identified special fibre
stays $Y$, so these groupoids and their isomorphism classes define the
**embedded deformation functor** on local Artin $k$-algebras with residue
field $k$. The **trivial embedded deformation** is
$Y\times_k\operatorname{Spec}R\subseteq X_R$.

For a small extension $A'\twoheadrightarrow A$
([[def-square-zero-extension-and-small-extension]]) and a fixed embedded
deformation $Y_A\subseteq X_A$, a **relative embedded lift** is a flat,
locally finitely presented closed subscheme $Y_{A'}\subseteq X_{A'}$ with
an identification
$$Y_{A'}\times_{\operatorname{Spec}A'}\operatorname{Spec}A\cong Y_A$$
as closed subschemes of $X_A=X\times_k\operatorname{Spec}A$
([[def-fibre-product-schemes-universal-property]]). Isomorphisms of relative
lifts induce the identity on $Y_A$. In particular, when $Y_A$ is the trivial
embedded deformation, the prescribed reduction is $Y\times_k\operatorname{Spec}A$;
when $A=k$, it is $Y$ itself.

When $Y=V(f)\subseteq\mathbb P^n_k$ is a hypersurface, this is the functor of
deformations of $Y$ inside the fixed projective space, whose tangent space is
computed by the normal sheaf; the **normal sheaf** of a closed immersion with
ideal sheaf $\mathcal I$ is
$$\mathcal N_{Y/X}=\mathcal Hom_{\mathcal O_Y}\bigl(\mathcal I/\mathcal I^2,\mathcal O_Y\bigr)$$
([[def-quasi-coherent-ideal-sheaf]], [[def-sheaf-hom]],
[[def-internal-hom-qc-sheaves]]), where $\mathcal I/\mathcal I^2$ is the
conormal sheaf of the immersion; for a closed immersion $i:Y\hookrightarrow X$ with both schemes smooth over
$k$, the conormal sheaf is locally free and the conormal sequence
$0\to\mathcal I/\mathcal I^2\to i^*\Omega^1_{X/k}\to\Omega^1_{Y/k}\to0$ is
exact: Stacks tag 06AA applies because $Y$ is smooth, and the sequence
locally splits since $\Omega^1_{Y/k}$ is finite locally free. Its kernel is
therefore a direct summand of the finite locally free $i^*\Omega^1_{X/k}$,
hence finite locally free ([[thm-differentials-smooth-locally-free]]). For the
projective-space case this also follows from
[[lem-smooth-closed-immersion-regular-conormal-sequence]]; the general
right-exact sequence is [[thm-conormal-sequence-closed-immersion]]. For a hypersurface $V(f)\subseteq\mathbb P^n$
with $f$ a nonzerodivisor the ideal sheaf is invertible with
$\mathcal I\cong\mathcal O(-d)$, so the conormal sheaf is a line bundle on $Y$
and the normal sheaf is its dual.

## Remarks

- **Reference conventions.** The definition is the fixed-ambient (Hilbert
  scheme) form of the embedded deformation problem, following Hartshorne,
  *Lectures on Deformation Theory*, Chapter 1 Theorem 1.1 and Chapter 1
  Section 2, Situation A, where closed subschemes of a fixed nonsingular
  projective $X$ are deformed inside $X$; the tangent space of that problem is
  $H^0(Y,\mathcal N_{Y/X})$. The same problem is described in Sernesi, *An
  overview of classical deformation theory*, Section 2.
- **Comparison with abstract deformations.** An embedded deformation of $Y$
  in $X$ is in particular a deformation of $Y$ as a $k$-scheme in the sense of
  [[def-infinitesimal-deformation-functor-over-square-zero-extension]], but
  the two functors are different in general: embedded deformations come with a
  closed immersion into the fixed thickening $X_{A'}$, which is additional
  structure not present in an abstract deformation. No injectivity or
  surjectivity of the comparison is asserted here.
- **Choice.** Choice is inherited from the flat-base-change and
  smooth-differential suppliers; the normal sheaf itself is given by its
  displayed internal Hom.
