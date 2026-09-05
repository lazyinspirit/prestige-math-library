---
page: acceptable-numberings-smn-and-the-recursion-theorem
title: "Acceptable Numberings, the s-m-n Theorem, and Recursion"
status: draft
items:
  - def-numbering-of-partial-computable-functions
  - def-universal-and-acceptable-numbering
  - prop-fixed-machine-coding-is-acceptable
  - def-parameter-specialization-function
  - thm-smn-parameter-theorem
  - cor-effective-program-specialization
  - def-computable-program-transformer
  - lem-self-reference-construction-from-smn
  - thm-kleenes-second-recursion-theorem
  - thm-recursion-theorem-with-parameters
  - def-productive-and-creative-set
  - thm-nonhalting-is-productive-and-halting-is-creative
  - thm-myhill-isomorphism-theorem-for-creative-sets
  - prop-acceptable-numberings-are-computably-intertranslatable
examples:
  - fs-recursion-theorem-needs-source-file-access
  - fs-program-indices-are-unique
---

This page fixes the standard numbering viewpoint on partial computable
functions, isolates the single hard-wiring operation that makes a numbering
acceptable, and then derives the full `s_m^n` family from it. The recursion
theorem is presented as an explicit index construction rather than as a black
box: the diagonal map from `s-m-n` is written first, and the fixed-point
theorem is read off from it.

The final cluster keeps three ideas separate that are often conflated. A
program transformer is a total computable map on indices, a fixed point is an
index whose computed partial function agrees with its transformed image, and a
creative set is a c.e. set whose complement admits an effective diagonal escape.
