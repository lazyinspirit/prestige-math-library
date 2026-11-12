---
title: Pointed spectrum lifts through a discrete target are unique
status: published
research_item: lem-adjudicate-fd6358d333ef-spectrum-lifts-to-discrete-target
dependency_level: 1
sources:
  references:
    - title: Jacob Lurie, Higher Algebra (September 18, 2017)
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 1.4.2.1 and Remark 1.4.2.3, printed p.141; Definition
        1.4.2.8 and Lemma 1.4.2.10, p.142; Notation 1.4.2.20, p.146 (zero-based
        PDF indices 140,141,145).
      statement: Spectrum objects are reduced excisive functors on finite pointed
        spaces. These functors are closed under existing finite limits; their
        zero object is the constant terminal functor. Omega-infinity is
        evaluation at the pointed zero-sphere.
      hypotheses: An infinity-category admitting finite limits; all functor categories
        and finite pointed spaces use the fixed compatible universes. No
        presentability, connectivity or site hypothesis is needed for these
        assertions.
      reading_limits: Freshly read the named definitions, Remark 1.4.2.3, the
        statement and displayed proof of Lemma 1.4.2.10, and Notation 1.4.2.20
        in primary PDF text returned by the web tool. General infinity-category
        foundations and the cited Kan-extension justification are imported, not
        reconstructed. The lift-space calculation is a local application.
        Screenshot calls supplied no inspectable images in this sandbox; no
        visual reading is claimed.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Corollary 5.1.2.3, printed p.319, applied dually; Lemma 5.5.5.12,
        pp.489–490; Definition 5.5.6.1, p.493; Remark 5.5.6.4 and Proposition
        5.5.6.5, p.494 (zero-based PDF indices 336,506–507,510–511).
      statement: Functor-category limits are pointwise. Mapping spaces in an
        undercategory are homotopy fibers of precomposition. A zero-truncated
        object has discrete mapping spaces from every object; this agrees with
        the usual notion for spaces, and truncated objects are closed under
        existing limits.
      hypotheses: Infinity-categories and diagrams in the chosen universes. For the
        dual pointwise-limit assertion the target admits the indicated limits.
        The undercategory assertion applies to two arrows with a common source.
        Only zero-truncation and finite limits are used here.
      reading_limits: Freshly read Corollary 5.1.2.3 and its short proof (used
        dually), Lemma 5.5.5.12 with its displayed proof, Definition 5.5.6.1,
        Remark 5.5.6.4, and Proposition 5.5.6.5 with its displayed proof in
        primary PDF text returned by the web tool. Proposition 5.1.2.2 and the
        fibration, rigidification and general topos foundations cited there are
        imported, not reconstructed. Only finite limits and zero-truncation are
        applied.
---

## Prerequisites

- [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [` Jacob Lurie, Higher Algebra (September 18, 2017) · Definition 1.4.2.1 and Remark 1.4.2.3, printed p.141; Definition 1.4.2.8 and Lemma 1.4.2.10, p.142; Notation 1.4.2.20, p.146 (zero-based PDF indices 140,141,145). `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Jacob Lurie, Higher Topos Theory · Corollary 5.1.2.3, printed p.319, applied dually; Lemma 5.5.5.12, pp.489–490; Definition 5.5.6.1, p.493; Remark 5.5.6.4 and Proposition 5.5.6.5, p.494 (zero-based PDF indices 336,506–507,510–511). `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)


## Statement
Assume the Axiom of Choice and the compatible universe bounds for spaces and coherent functor categories. Let $\mathcal X$ be an infinity-category with finite limits and small mapping spaces, and write $*$ for its terminal object and $\mathcal X_*=\mathcal X_{*/}$ for its pointed objects. Define $\mathrm{Sp}(\mathcal X)=\operatorname{Exc}_*(S_*^{\mathrm{fin}},\mathcal X)$, the full category of reduced excisive functors, and let $\Omega^\infty$ be evaluation at $S^0$, with its canonical pointing. Reduced means taking the point to a terminal object; excisive means taking pushout squares to pullback squares. A zero-truncated object $T$ means that $\operatorname{Map}_{\mathcal X}(B,T)$ is a discrete space for every $B$.

Let $F\to E\xrightarrow{q}D$ be a fiber sequence of spectrum objects, including its defining pullback $F=E\times_D0$, and set $T=\Omega^\infty D$. Then $\Omega^\infty F\simeq\Omega^\infty E\times_T*$ as pointed objects. For a pointed $A$ and fixed pointed map $f:A\to\Omega^\infty E$, define its lift space as the homotopy fiber over $f$ of $\operatorname{Map}_*(A,\Omega^\infty F)\to\operatorname{Map}_*(A,\Omega^\infty E)$; thus a lift includes its homotopy over $\Omega^\infty E$. This space is the path space from $qf$ to zero in $\operatorname{Map}_*(A,T)$. If $T$ is zero-truncated and $qf$ is pointed nullhomotopic, the lift space is contractible. 

## Facts & Assumptions
**Given:** The universe bounds, finite limits, spectrum objects, pointed map and specified fiber sequence in the Statement. All pullbacks and fibers are homotopy pullbacks and homotopy fibers.

**Goal:** Identify the full space of lifts, including its homotopies, and deduce uniqueness when the target is discrete.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed nested universes $U\in V\in W$ with $\omega\in U$, using [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). Universe existence is a separate assumption. Use the compatible bounds of [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input), enlarging the ambient universe for the stated locally small category and its functor categories as necessary. They support the imported categorical formalism and spectrum construction; the local universal-property calculations introduce no additional choice principle.

[F1] [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) supplies infinity-categories, coherent mapping spaces, their limit universal properties, and the category $S_*^{\mathrm{fin}}$ of finite pointed spaces. Pointed objects are arrows from the terminal object, and pointed maps include the compatible homotopy at that arrow.

[F2] Reference 0 supplies the reduced excisive spectrum-object definition, closure under finite limits, the constant-terminal zero object and the evaluation description of $\Omega^\infty$.

[F3] Reference 1 supplies pointwise functor limits, the undercategory mapping-space fiber formula, the mapping-space definition of zero-truncation and closure of discrete spaces under finite limits.

## External input
Import exactly [F2] and [F3] from [Higher Algebra](https://www.math.ias.edu/~lurie/papers/HA.pdf) and [Higher Topos Theory](https://www.math.ias.edu/~lurie/papers/HTT.pdf), at the locators and hypotheses recorded in references 0 and 1. These foundational premises are imported; the following preservation, lift-space and uniqueness deductions are local.

## Proof
1.1 By [F2], the full spectrum-object category is closed under finite limits in its functor category, and by [F3] those limits are pointwise. Evaluation at $S^0$ therefore carries the defining square for $F$ to the pullback $\Omega^\infty E\times_T*$; the zero functor evaluates to $*$. The canonical pointings are obtained from the value at the point. The same square is a pullback among pointed objects: a cone of maps from a pointed object into it is a cone in $\mathcal X$ together with the compatible pointing, and its universal property is the limit universal property of [F1] with that pointing retained. Applying this property to maps from $A$ gives $\operatorname{Map}_*(A,\Omega^\infty F)\simeq\operatorname{Map}_*(A,\Omega^\infty E)\times_{\operatorname{Map}_*(A,T)}*$. Its homotopy fiber over $f$ consists precisely of paths from $qf$ to the zero map, with all their higher homotopies. [A1, F1, F2, F3, given]

2.1 Suppose $T$ is zero-truncated. By the undercategory formula in [F3], $\operatorname{Map}_*(A,T)$ is the homotopy fiber of $\operatorname{Map}_{\mathcal X}(A,T)\to\operatorname{Map}_{\mathcal X}(*,T)$ over the chosen point of $T$. Both spaces are discrete by the definition in [F3], so their homotopy fiber is discrete by its finite-limit assertion. A pointed nullhomotopy of $qf$ puts the two endpoints in the same component of this discrete space. Its path space between those endpoints is therefore contractible: after equivalence with a set it is the singleton of the constant path. The description in step 1.1 proves the asserted contractibility of the lift space and the claimed uniqueness of pointed lifts over the fixed map. [F1, F3, step 1.1, given] ∎
