---
page: positive-definite-binary-quadratic-forms-and-reduction
title: "Positive Definite Binary Quadratic Forms and Reduction"
status: published
items: [def-binary-quadratic-form-over-integers,
        def-integer-represented-by-binary-quadratic-form,
        def-primitive-binary-quadratic-form,
        def-discriminant-of-binary-quadratic-form,
        prop-binary-quadratic-form-discriminants-modulo-four,
        def-principal-binary-quadratic-form,
        def-proper-equivalence-of-binary-quadratic-forms,
        lem-binary-quadratic-form-substitution-is-a-right-action,
        thm-proper-equivalence-preserves-representations,
        prop-proper-equivalence-preserves-discriminant-and-primitivity,
        prop-discriminant-square-mod-four-n-criterion-for-primitive-representation,
        def-positive-definite-binary-quadratic-form,
        prop-positive-definite-binary-form-criterion,
        def-reduced-positive-definite-binary-quadratic-form,
        lem-gauss-reduction-step-improves-a-positive-definite-form,
        thm-reduction-of-positive-definite-binary-quadratic-forms,
        lem-leading-coefficient-is-minimal-in-a-reduced-class,
        lem-reduced-forms-with-the-same-leading-coefficient-are-equal,
        thm-unique-reduced-positive-definite-binary-quadratic-form,
        lem-leading-coefficient-bound-for-a-reduced-form,
        cor-finiteness-of-positive-definite-binary-form-classes,
        def-binary-quadratic-form-class-number,
        cor-binary-quadratic-form-equivalence-is-decidable]
examples: []
---

Integral binary quadratic forms are the ternary coefficient data $(a,b,c)$ behind $ax^2+bxy+cy^2$, and this page studies how much of that data survives unimodular change of variables. The background actually used here is arithmetic rather than geometry: gcd language separates primitive forms from primitive representations, congruences modulo an integer classify discriminants and encode the discriminant-square criterion, and basic matrix multiplication makes substitution by $\mathrm{SL}_2(\mathbb Z)$ a genuine right action.

The page defines discriminant, principal form, proper equivalence, positive definiteness, reduced form, and form class number. It proves that proper equivalence preserves represented integers and discriminant, identifies positive-definite forms by the sign conditions $a>0$ and $\Delta<0$, and shows that every positive-definite class has one reduced representative and no more. From there it bounds the leading coefficient of a reduced form in terms of the discriminant, deduces that each negative discriminant has only finitely many positive-definite classes, and turns reduction plus uniqueness into a decision procedure for proper equivalence.
