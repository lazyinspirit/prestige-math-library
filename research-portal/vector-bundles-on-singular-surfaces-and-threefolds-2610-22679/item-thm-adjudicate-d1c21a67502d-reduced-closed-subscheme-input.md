---
title: Reduced induced closed subscheme construction
status: published
research_item: thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input
dependency_level: 0
sources:
  references:
    - title: The Stacks Project, reduced induced closed subschemes
      url: https://stacks.math.columbia.edu/tag/01J3
      locator: Lemma 26.12.4, statement and displayed proof; reduced schemes in
        Definition 26.12.1 and terminology in Definition 26.12.5 (Section 26.12)
      statement: Every closed subset T of a scheme X supports a unique reduced closed
        subscheme of X.
      hypotheses: X is any scheme and T is a closed subset of its underlying space; no
        finiteness assumption.
      reading_limits: Read the lemma statement and displayed proof, and Definitions
        26.12.1 and 26.12.5 at https://stacks.math.columbia.edu/tag/01IZ. The
        proof constructs the vanishing ideal sheaf and affine radical-ideal
        quotients; its earlier cited algebra and scheme lemmas were not
        independently reviewed. No residue-field or base-change theorem is
        imported from this lemma.
external_input: true
---

## Prerequisites

- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)
- [` The Stacks Project, reduced induced closed subschemes · Lemma 26.12.4, statement and displayed proof; reduced schemes in Definition 26.12.1 and terminology in Definition 26.12.5 (Section 26.12) `](https://stacks.math.columbia.edu/tag/01J3)


## Statement
Let $X$ be a scheme and $T\subseteq |X|$ a closed subset. There is a unique closed subscheme $Z\hookrightarrow X$ supported on $T$ whose local rings have no nonzero nilpotent elements. This is the reduced induced scheme structure on $T$.

## Statement references
[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)

## External input
Import the existence and uniqueness assertion of Stacks Lemma 26.12.4, with the terminology of Definition 26.12.5. The hypotheses are exactly a scheme and a closed subset. The displayed construction proof was read; its cited foundations were not re-proved here. The residue-field argument needed by the Nisnevich definition is supplied locally there.
