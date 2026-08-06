---
id: def-set-difference-and-symmetric-difference
kind: definition
title: "The difference $a \\setminus b$, the symmetric difference $a \\triangle b$, and the complement $X \\setminus a$ relative to a set $X$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-schema-of-separation, def-union-of-a-set-and-binary-union, def-axiom-of-extensionality, def-subset-and-proper-subset]
justified_by: []
aliases: [def-set-difference, def-symmetric-difference, def-relative-complement]
landmark: false
short: "difference, symmetric difference"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 4 and Def. 5"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Complement (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complement_(set_theory)"
    - title: "Symmetric difference (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Symmetric_difference"
pipeline_run: null
---

## Definition

Let $a$ and $b$ be sets. The **difference** of $a$ and $b$ is

$$a \setminus b := \{\, z \in a : z \notin b \,\},$$

a set by [[def-axiom-schema-of-separation]] and the only one with those elements
by [[def-axiom-of-extensionality]]; so $z \in a \setminus b$ holds exactly when
$z \in a$ and $z \notin b$. The **symmetric difference** is

$$a \triangle b := (a \setminus b) \cup (b \setminus a),$$

formed with the binary union of [[def-union-of-a-set-and-binary-union]].

When $a \subseteq X$ ([[def-subset-and-proper-subset]]), the difference
$X \setminus a$ is called the **complement of $a$ relative to $X$**. The
qualification is not optional: there is no set of all sets
([[cor-there-is-no-set-of-all-sets]]), so an absolute complement, the class of
all sets not in $a$, is never a set.

## Remarks

- **Difference needs no hypothesis.** $a \setminus b$ is defined for all sets
  $a$ and $b$, with no assumption that $b \subseteq a$ or that the two meet.
  When they are disjoint, $a \setminus b = a$.

- **Symmetric difference collects what lies in exactly one of the two sets.**
  Unfolding the definition, $z \in a \triangle b$ holds exactly when $z$ belongs
  to $a$ or to $b$ but not to both.
