---
page: deferred-measure-and-integration
title: "Measure and Integration: Recorded, Not Proved Here"
status: published
items: [rem-lebesgue-measure-and-integral, rem-monotone-convergence-theorem,
        rem-fatou-lemma, rem-dominated-convergence-theorem,
        rem-vitali-covering-theorem, rem-mini-vitali-covering-theorem,
        rem-lebesgue-monotone-differentiation, rem-lebesgue-differentiation-theorem,
        rem-absolutely-continuous-function, rem-ftc-absolutely-continuous,
        rem-banach-zarecki, rem-egorov-theorem, rem-lusin-theorem,
        rem-holder-minkowski-integral, rem-riesz-fischer, rem-lp-separability,
        rem-fubini-tonelli, rem-fubini-counting-measure-diagonal,
        rem-sierpinski-iterated-integrals, rem-vitali-non-measurable-set,
        rem-sierpinski-ultrafilter-not-measurable,
        rem-banach-tarski, rem-henstock-kurzweil-vs-lebesgue,
        rem-du-bois-reymond-divergent-fourier, rem-kolmogorov-divergent-fourier,
        rem-riesz-markov-kakutani, rem-semicontinuous-not-ae-riemann,
        rem-null-set-not-discontinuity-set, rem-improper-riemann-not-lebesgue]
examples: []
---

**Objective.** This page records the results of Lebesgue measure and integration
that other pages of this library need to refer to, and it proves **none of them**.
Every item here is a remark with a citation, marked as not proved here, and every
result elsewhere in the library that rests on one of them is marked the same way.
Nothing on this page may be used as a step in any proof.

The reason is the rule this library is built on: rigor and non-circularity
outrank completeness. A measure track means Lebesgue outer measure, Caratheodory
measurability, the integral, the convergence theorems and $L^p$, and that track
has not been built. Until it is, a theorem whose proof needs it may not be
authored here with a borrowed or hand-waved argument. It is stated, cited, and
visibly quarantined instead, so that the gap is a matter of record rather than a
silent omission.

**What is recorded here.** The Lebesgue integral and its three convergence
theorems, monotone convergence, Fatou and dominated convergence. The Vitali and
mini-Vitali covering theorems, and the two differentiation theorems that rest on
them: monotone functions are differentiable almost everywhere, and almost every
point of an $L^1$ function is a Lebesgue point. The elementary definition of
absolute continuity, its place in the $C^1$–Lipschitz–$AC$–$BV$ hierarchy, and
strictness witnesses are now proved on the bounded-variation page. Luzin's
property (N), the sharp Lebesgue-integral fundamental theorem of calculus and the
Banach–Zarecki theorem remain recorded here. Egorov and Lusin, the two theorems that
say measurable behaviour is uniform and continuous off a small set. The $L^p$
spaces: Holder and Minkowski in integral form, Riesz-Fischer completeness,
separability for finite $p$ and its failure at $p = \infty$. Fubini-Tonelli with
its $\sigma$-finiteness hypothesis, together with the two counterexamples that
show why each hypothesis is there, the diagonal under Lebesgue times counting
measure and Sierpinski's construction under the continuum hypothesis.
Non-measurable sets: the Vitali set and the Banach-Tarski paradox, neither of
which ZF + DC proves, on the hypothesis that ZFC together with an inaccessible
cardinal is consistent, since on that hypothesis Solovay's model of ZF + DC makes
every set of reals measurable. The inaccessible is part of the claim: it is what
Solovay's construction consumes, and Shelah showed it cannot be dropped for the
measurability half. The comparison of the Henstock-Kurzweil
integral with the Lebesgue integral. Kolmogorov's everywhere divergent Fourier
series of an $L^1$ function, with du Bois-Reymond's continuous example beside it.
The Riesz-Markov-Kakutani representation theorem. And the genuinely
measure-flavoured counterexamples of Gelbaum and Olmsted's chapter 8.

**What is NOT deferred, and must not be confused with the above.** A good deal of
this library looks measure-theoretic and is not, and none of it waits on this
page.

- **Measure zero and almost everywhere in the elementary covering sense**: a set
  is null when for every $\varepsilon > 0$ it is covered by countably many
  intervals of total length below $\varepsilon$. No $\sigma$-algebra and no
  measure are involved. That is all that **Lebesgue's criterion for Riemann
  integrability** needs, and all that is needed to say that the Cantor function
  has derivative zero almost everywhere or that Volterra's function has a
  derivative discontinuous on a set of positive measure. These live on the
  topology of $\mathbb{R}$, Cantor set and Riemann integral pages, and they are
  proved there.
- **Content zero, Jordan content and Jordan measurability**, including the fact
  that Jordan measurability is strictly stronger than being null. Elementary and
  in scope.
- **The Baire category theorem** for complete metric spaces and for locally
  compact Hausdorff spaces, and the consequences that do not need a Banach space:
  no function is continuous exactly on $\mathbb{Q}$, the generic continuous
  function is nowhere differentiable, $\mathbb{Q}$ is not $G_\delta$. In scope,
  with each item stating which version of the theorem it uses and what that
  version costs in choice.
- **Riesz's lemma** and the non-compactness of the closed unit ball of an
  infinite-dimensional normed space. Elementary once norms are defined.
- **Arzela's bounded convergence theorem**, which is a Riemann-level theorem even
  though its natural home is next to dominated convergence.
- **The Henstock-Kurzweil integral itself**, which needs only tagged partitions,
  gauges and Cousin's lemma. Only its comparison with $L^1$ is recorded here.

So the library does not avoid measure-flavoured statements. It avoids exactly one
thing: proving a statement whose proof needs a measure, before a measure exists.

**How these items will be discharged.** When the measure track is built as its
own category to the same standard, each item here is replaced by a proof-bearing
one, the remark's id is kept as an alias if the statement moves, and the entry is
deleted from the deferral list. Two items on this page carry an explicit
candidate-for-undeferral note, the semicontinuous function equal almost
everywhere to no Riemann integrable function and the null set that is no
function's discontinuity set, since their proofs may fit inside the elementary
covering and Baire theory the library already has. A third, du Bois-Reymond's
continuous function with a divergent Fourier series, is probably reachable by
the uniform-boundedness route. The library already has the Baire theorem for
complete metric spaces and now has norms; what remains is the
Fourier/Dirichlet-kernel argument and the bounded-operator vocabulary needed to
package the evaluation functionals.
