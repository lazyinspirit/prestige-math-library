---
page: non-measurable-sets-and-the-cost-of-choice
title: "Non Measurable Sets and the Cost of Choice"
status: draft
items: [def-lebesgue-inner-measure-on-r,
        thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree,
        def-vitali-set-on-the-unit-interval,
        thm-vitali-sets-exist-under-choice-on-r-over-q,
        thm-a-vitali-set-is-not-lebesgue-measurable,
        thm-no-translation-invariant-measure-on-all-subsets-of-r-is-finite-and-nonzero-on-unit-interval,
        cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset,
        lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two,
        lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one,
        cor-a-continuous-image-of-a-lebesgue-measurable-set-can-be-nonmeasurable,
        cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable,
        cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel,
        def-bernstein-set-on-r,
        thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum,
        thm-bernstein-sets-exist-under-a-well-ordering-of-r,
        lem-compact-subsets-of-a-bernstein-set-are-countable,
        thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval,
        cor-a-bernstein-set-is-not-lebesgue-measurable,
        lem-finite-binary-digit-changes-do-not-alter-zero-one-measure,
        thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable,
        rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters]
examples: [ex-cosets-of-q-in-r-and-the-vitali-translates-on-unit-interval,
           ex-the-homeomorphism-x-plus-cx-carries-the-cantor-set-to-a-measure-one-compact-set,
           cex-a-vitali-set,
           cex-a-bernstein-set,
           cex-two-disjoint-nonmeasurable-sets-can-have-a-measurable-union,
           cex-a-proper-subgroup-of-r-can-be-nonmeasurable,
           fs-every-subset-of-r-is-lebesgue-measurable,
           fs-continuous-images-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable,
           fs-continuous-preimages-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable,
           fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist,
           fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice]
---

Lebesgue outer measure, translation invariance, Steinhaus's theorem, the Cantor
function, perfect sets, and the published choice ledger are the background of
this page. They let the development pass from measurable approximation to inner
measure, from rational cosets to Vitali selectors, from the Cantor set to a
measure-one compact witness, and from perfect sets to Bernstein constructions,
while keeping the exact choice assumptions visible at each step.

The page begins with inner measure and the bounded criterion
$\lambda_*=\lambda^*$, then builds the Vitali obstruction and its translation
invariant measure corollary. It next turns the Cantor function into a concrete
homeomorphism witness for continuous-image, continuous-preimage, and measurable
non-Borel pathologies. The last third introduces Bernstein sets, proves their
extremal inner and outer measure behaviour, and closes with a finite-digit
zero-one principle, the free-ultrafilter nonmeasurability theorem, and a final
remark separating the three different costs in choice.
