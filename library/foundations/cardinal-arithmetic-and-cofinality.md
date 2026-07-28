---
page: cardinal-arithmetic-and-cofinality
title: "Cardinal Arithmetic, Cofinality and the Alephs"
status: draft
items: [lem-cardinality-of-a-well-orderable-set,
        lem-cardinal-operations-are-well-defined,
        def-cardinal-arithmetic,
        lem-cardinal-arithmetic-basic-laws,
        thm-cardinal-arithmetic-agrees-with-finite-counting,
        thm-cardinal-power-set-and-cantor,
        thm-hessenberg,
        cor-cardinal-absorption,
        lem-successor-cardinal-exists,
        cor-the-aleph-and-beth-hierarchies-are-well-defined,
        def-aleph-and-beth-hierarchies,
        thm-every-infinite-cardinal-is-an-aleph,
        thm-cardinal-comparability-iff-ac,
        thm-tarski-square,
        lem-cofinality-is-well-defined,
        def-cofinality,
        thm-cofinality-basics,
        thm-regularity-of-the-alephs,
        def-infinite-cardinal-sum-and-product,
        thm-konig,
        cor-cofinality-of-a-cardinal-power,
        rem-cardinal-arithmetic-choice-ledger]
examples: [fs-cardinal-addition-is-cancellative,
           fs-every-aleph-is-regular,
           fs-cardinal-exponentiation-is-strictly-monotone-in-the-base,
           fs-the-continuum-has-cardinality-aleph-omega]
---

**Objective.** A cardinal is an ordinal not equinumerous with any smaller ordinal
([[def-cardinal]]), and that much is already in place. This page turns the
cardinals into an arithmetic: it defines $\kappa \oplus \lambda$,
$\kappa \otimes \lambda$ and $\kappa^{\lambda}$, proves the laws they satisfy and
the laws they do not, builds the aleph and beth hierarchies, shows that the
alephs exhaust the infinite cardinals, defines the cofinality
$\operatorname{cf}(\alpha)$ with the regular and singular vocabulary, and proves
König's inequality and the constraint it puts on $2^{\aleph_0}$. Throughout, each
result carries its own choice hypothesis, and
[[rem-cardinal-arithmetic-choice-ledger]] keeps the ledger.

**A choice-free notion of cardinality has to come first.** [[def-cardinal]]
attaches $\lvert X\rvert$ to a set under the hypothesis "Assume the Axiom of
Choice", and it needs that hypothesis only to know that $X$ carries a well-order
at all. [[lem-cardinality-of-a-well-orderable-set]] isolates the rest: for a
**well-orderable** $X$ there is a least ordinal equinumerous with it, that ordinal
is a cardinal, and equinumerous sets receive the same one, all in ZF. Without
this item Hessenberg's theorem could not be stated as the theorem of ZF that it
is, and Tarski's theorem — which is precisely about the gap between ZF and ZFC —
could not be stated at all.

**Sum and product are free; exponentiation is not.** The disjoint union and the cartesian
product of two ordinals carry well-orders written down from the ordinal order
([[lem-cardinal-operations-are-well-defined]]), so $\oplus$ and $\otimes$ are ZF
operations. A set of *functions* between well-ordered sets has no canonical
order, so $\kappa^{\lambda}$ is defined under the Axiom of Choice, and every
statement here that writes an infinite exponential says so in its own hypotheses.

**The symbols are deliberately not $+$ and $\cdot$.** Ordinal addition and
multiplication are defined on the same objects and give different values, so the
cardinal operations are written $\oplus$ and $\otimes$
([[def-cardinal-arithmetic]]). Exponentiation keeps its notation under an
explicit rule stated where it is defined: base and exponent are always alephs or
one of $\kappa, \lambda, \mu$, never $\omega$ and never an ordinal letter. That
rule is the answer to the warning already recorded in
[[rem-ordinal-versus-cardinal-exponentiation]]. A second collision is handled the
same way: $\kappa^{+}$ on a cardinal letter is the successor cardinal, while
$\alpha^{+}$ on an ordinal letter keeps its published meaning, and the two are
never the same on an infinite cardinal.

**One notation, one meaning, on the finite numbers.**
[[def-finite-cardinality]] already writes $\lvert A\rvert$ for a finite set, with
a natural number as its value. [[thm-cardinal-arithmetic-agrees-with-finite-counting]]
proves that this is the same $\lvert A\rvert$, and that on $\omega$ the cardinal
operations are the published counting operations. It also settles the small facts
the rest of the page leans on constantly: every natural number and $\omega$ are
cardinals, and every infinite cardinal is a limit ordinal.

**Hessenberg's theorem is the engine.** $\kappa \otimes \kappa = \kappa$ for
every infinite cardinal, proved from a single well-order of $\kappa \times \kappa$
that orders pairs by their maximum first ([[thm-hessenberg]]). Nothing is chosen:
the order is defined, not selected, so the theorem is ZF. Everything about
$\oplus$ and $\otimes$ on infinite cardinals collapses out of it —
[[cor-cardinal-absorption]] says the larger argument simply swallows the smaller
— and the collapse is what makes cancellation fail, which section 5 records.

**The hierarchy, and its exhaustiveness.** The Hartogs number gives a successor
cardinal in ZF ([[lem-successor-cardinal-exists]]); transfinite recursion along
the ordinals turns the successor clause into the alephs, and the power clause
into the beths ([[cor-the-aleph-and-beth-hierarchies-are-well-defined]],
[[def-aleph-and-beth-hierarchies]]). That the alephs are not merely a supply of
infinite cardinals but **all** of them is a separate theorem, proved by a least
counterexample rather than by the recursion, and its second clause — that every
infinite *set* is equinumerous with an aleph — is where the Axiom of Choice
enters ([[thm-every-infinite-cardinal-is-an-aleph]]).

**Where choice is measured exactly.** Comparability of arbitrary sets is
equivalent to the Axiom of Choice ([[thm-cardinal-comparability-iff-ac]]), so the
trichotomy this page uses freely for cardinals is *not* available for sets. And
Tarski's square law, $A \times A \approx A$ for every infinite set, is also
equivalent to it ([[thm-tarski-square]]): extending Hessenberg's theorem from the
alephs to arbitrary sets is not a mild strengthening but choice itself.

**Cofinality.** [[def-cofinal-subset-of-an-ordinal]] supplies cofinal subsets and
stops there. Here the cofinality function is defined:
$\operatorname{cf}(\alpha)$ is the least length of a family reaching $\alpha$ from
below ([[lem-cofinality-is-well-defined]], [[def-cofinality]]), and for a limit
ordinal it is an infinite cardinal which is its own cofinality
([[thm-cofinality-basics]]). Regularity of $\aleph_0$ and singularity of
$\aleph_\omega$ are theorems of ZF; regularity of the successor alephs is not,
and [[thm-regularity-of-the-alephs]] carries the hypothesis in its statement and
names where it is spent.

**König, and what ZFC decides about the continuum.** With sums and
products of indexed families in place ([[def-infinite-cardinal-sum-and-product]]),
[[thm-konig]] gives $\sum_i \kappa_i < \prod_i \lambda_i$ whenever
$\kappa_i < \lambda_i$ throughout — Cantor's diagonal argument over an arbitrary
index set. Its consequence is $\kappa < \kappa^{\operatorname{cf}(\kappa)}$ and
hence $\operatorname{cf}(2^{\kappa}) > \kappa$
([[cor-cofinality-of-a-cardinal-power]]). At $\kappa = \aleph_0$ that says the
continuum has uncountable cofinality, which excludes candidate values without
selecting one.

**What is refuted, and what is left open.** Section 5 refutes, each time with a
proof rather than an appeal to independence: cancellation of $\oplus$, regularity
of every aleph, strict monotonicity of exponentiation in the base, and the value
$2^{\aleph_0} = \aleph_\omega$. What is *not* settled here is
which aleph the continuum is; that is the continuum hypothesis, and
[[rem-cardinal-arithmetic-choice-ledger]] records it, along with the cost in
choice of every result on this page, as a statement not decided by anything among
this page's declared prerequisites.
