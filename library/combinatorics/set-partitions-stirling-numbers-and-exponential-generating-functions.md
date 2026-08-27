---
page: set-partitions-stirling-numbers-and-exponential-generating-functions
title: "Set Partitions, Stirling Numbers and Exponential Generating Functions"
status: draft
items: [rem-stirling-number-and-egf-conventions,
        def-set-partition-and-block,
        lem-set-partitions-of-a-finite-set-are-finite,
        def-stirling-second-kind-and-bell-number,
        def-signed-and-signless-stirling-first-kind,
        def-rising-factorial,
        def-exponential-generating-function-over-a-q-algebra,
        def-labelled-classes-and-basic-labelled-constructions,
        thm-stirling-second-kind-recurrence,
        cor-bell-number-binomial-recurrence,
        thm-stirling-second-kind-inclusion-exclusion-formula,
        thm-powers-expand-in-the-falling-factorial-basis,
        thm-signless-first-kind-recurrence-and-rising-factorial-expansion,
        thm-signed-stirling-inversion,
        thm-labelled-symbolic-method-rules-for-exponential-generating-functions,
        thm-vertical-egfs-for-the-stirling-triangles,
        thm-exponential-formula-for-set-partitions-and-bell-numbers,
        cor-dobinski-formula-for-bell-numbers,
        cor-standard-specializations-of-the-labelled-symbolic-method,
        thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials,
        cor-touchards-congruence-for-bell-numbers]
examples: []
---

This page fixes the Stirling-number notation once, proves the finite
recurrences and change-of-basis formulas that connect powers, falling
factorials, and cycle counts, and then turns to the labelled symbolic method.
The labelled half is the point of the page: it explains why the vertical
Stirling triangles, the Bell exponential formula, involution numbers, ordered
Bell numbers, and the no-singleton partition count all have the expected
exponential generating functions.

Only one item here is deliberately analytic: [[cor-dobinski-formula-for-bell-numbers]].
Everything before it is formal or finite. The Bell and Stirling identities come
from counting functions, surjections, partitions, and permutations; the EGF
rules live in a commutative $\mathbb{Q}$-algebra and use the library's formal
power-series calculus rather than analytic convergence. That separation is
deliberate, and [[rem-stirling-number-and-egf-conventions]] records it so the
page does not blur the formal and analytic arguments.
