---
page: deferred-functional-analysis
title: "Functional Analysis: Recorded, Not Proved Here"
status: draft
items: [rem-hahn-banach-theorem, rem-hahn-banach-choice-strength,
        rem-discontinuous-functional-choice-strength, rem-open-mapping-theorem,
        rem-closed-graph-theorem, rem-uniform-boundedness,
        rem-weak-and-weak-star-topologies, rem-banach-alaoglu, rem-mazur-lemma,
        rem-eberlein-smulian, rem-schur-property-l1,
        rem-riesz-representation-hilbert, rem-separable-hilbert-isometric-l2,
        rem-banach-limits, rem-dual-of-l-infinity,
        rem-radon-nikodym-property, rem-c0-not-a-dual-space,
        rem-spectral-theory-bounded-operators, rem-compact-operators,
        rem-fredholm-theory, rem-banach-stone, rem-gelfand-naimark-commutative,
        rem-gelfand-kolmogorov, rem-stone-duality,
        rem-banach-no-countable-hamel-basis, rem-enflo-space, rem-james-space,
        rem-james-theorem, rem-bishop-phelps, rem-nagata-theorem-cp,
        rem-gerlits-nagy, rem-dugundji-extension-linear,
        rem-kuratowski-wojdyslawski]
examples: []
---

**Objective.** This page records the results of functional analysis that the rest of the
library needs to be able to refer to, and states them precisely, with citations. **Nothing
on this page is proved here.** Every item carries `proved_here: false`, has no proof
section, and is rendered with the "not proved here" marker; so is anything elsewhere in
the library that comes to depend on one. The page exists so that the library can be honest
about a gap instead of hiding it, and so that a reader who meets one of these names in a
remark can find out exactly what was assumed and where it is proved in the literature.

The reason for the gap is a policy, not a judgement about difficulty. Rigor and
non-circularity outrank completeness here: a result whose proof needs machinery the library
has not built may not be authored with a borrowed or hand-waved proof. Functional analysis
needs a track this library does not yet have, namely normed and Banach spaces, bounded
operators, dual spaces, weak topologies, Hilbert space and Banach algebras. Until that
track is built to the same standard as everything else, these statements are records.

The page opens with **Hahn-Banach** and with what it costs. That is the one theorem of the
subject whose set-theoretic price is a real one: it follows from the Boolean prime ideal
theorem, is strictly weaker than the axiom of choice if ZF is consistent, and yet already
implies that some set of reals is not Lebesgue measurable. Attached to it is the sharpest
choice question in the area, whether an infinite-dimensional **Banach** space must carry a
discontinuous linear functional. If ZF is consistent, that statement is not provable in
ZF + DC. The elementary, explicit, choice-free
discontinuous functional on the incomplete space of finitely supported sequences is *not*
deferred and belongs in the library proper; the item says so, and says what is still open.

Then come the three consequences of the Baire category theorem, the **open mapping**,
**closed graph** and **uniform boundedness** theorems. The third of these is flagged as
borderline: its proof is Baire plus linearity, both of which the library can already afford,
so it is deferred only for want of the vocabulary to state it in, and it should be pulled
forward as soon as normed spaces exist.

The middle of the page is duality: **weak and weak-star topologies**, which are not first
countable and therefore not seen correctly by sequences, with **Mazur's lemma** as the repair
for convex sets, **Banach-Alaoglu**, **Eberlein-Smulian** and the Schur property of
$\ell^{1}$ as the two surprises about sequences and weak compactness, then the **Riesz
representation theorem** for Hilbert space, the identification of $(\ell^{\infty})^{*}$
with the finitely additive charges, **Banach limits**, the Radon-Nikodym property and the
fact that $c_{0}$ is not a dual space. The companion representation theorem of Riesz,
Markov and Kakutani, which identifies $C(X)^{*}$ with a space of regular Borel measures,
needs the measure track as well and is recorded on the measure and integration page.

The operator theory section records spectra, the **spectral theorem**, compact operators
and **Fredholm theory**. After it comes the dictionary the library's topology track is
built toward: **Banach-Stone**, the **commutative Gelfand-Naimark theorem** with
**Gelfand-Kolmogorov**, and **Stone duality**. Read together these say that compact
Hausdorff topology and commutative operator algebra are one subject in two languages.

The page closes with structural facts and counterexamples that students meet as folklore
and that deserve a precise statement: that a Banach space cannot have countably infinite
Hamel dimension, that every separable infinite-dimensional Hilbert space is $\ell^{2}$,
**Enflo's** separable reflexive space with no Schauder basis, the **James space** that is
isometric to its bidual without being reflexive, **James's theorem** with **Bishop-Phelps**
as its counterweight, **Nagata's theorem** and **Gerlits-Nagy** for $C_p(X)$, the linear
form of **Dugundji's extension theorem**, and the **Kuratowski-Wojdyslawski** embedding.

A result is listed here only when the library cannot reach it. Several statements that look
functional-analytic are elementary once norms are defined, and those are not on this page:
they will be proved in the ordinary way, with a full proof, where they belong.
