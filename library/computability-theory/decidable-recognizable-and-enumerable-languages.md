---
page: decidable-recognizable-and-enumerable-languages
title: "Decidable, Recognizable, and Enumerable Languages"
status: draft
items:
  - def-computable-and-partial-computable-function
  - def-decidable-and-recognizable-language
  - def-computably-enumerable-set
  - thm-recognizable-iff-enumerable
  - thm-decidable-iff-language-and-complement-are-recognizable
  - thm-recognizable-languages-are-closed-under-union-and-intersection
  - thm-decidable-languages-are-closed-under-boolean-operations
  - def-dovetailing-schedule
  - lem-dovetailing-reaches-every-finite-stage
  - thm-domains-and-ranges-of-partial-computable-functions-are-ce
  - thm-every-ce-set-is-a-domain
  - thm-infinite-ce-sets-have-computable-injective-enumerations
  - prop-machine-descriptions-form-a-decidable-language
  - fs-recognizable-means-total
  - fs-every-countable-language-is-decidable
examples: []
---

This page separates three notions that are often conflated on first exposure:
computability of total functions, recognizability of languages by machines that
may diverge on nonmembers, and computable enumerability as effective listing.
The main equivalences show that recognizable languages are exactly the
computably enumerable ones and that decidability is the same as simultaneous
recognizability of a language and its complement.

The rest of the page packages the basic closure properties, fixes one concrete
dovetailing schedule for later use, and records two standard consequences about
domains, ranges, and injective enumerations of c.e. sets. The final false
statements separate recognizability from total halting and countability from
decidability.
