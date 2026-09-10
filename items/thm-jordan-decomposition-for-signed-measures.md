---
id: thm-jordan-decomposition-for-signed-measures
kind: theorem
title: "Jordan decomposition of a signed measure into unique mutually singular positive parts"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure, def-mutually-singular-measures, thm-hahn-decomposition-for-signed-measures, def-positive-negative-and-null-sets-for-a-signed-measure, def-signed-measure, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 6.21"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 12.8"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\nu$ be a signed measure on $(X,\mathcal A)$. Then there exist positive
measures $\nu^+,\nu^-:(X,\mathcal A)\to[0,+\infty]$, at least one finite on $X$, such that
$$\nu=\nu^+-\nu^-,$$
and $\nu^+\perp \nu^-$.

These measures are unique: if $\nu=\mu-\eta$ with positive measures
$\mu\perp\eta$, then $\mu=\nu^+$ and $\eta=\nu^-$.

The following conditional assertion is choice-free: if a Hahn partition
$X=P\sqcup N$ is supplied, the formulas $\nu^+(E)=\nu(E\cap P)$ and
$\nu^-(E)=-\nu(E\cap N)$ construct these unique measures. Comparing
two supplied mutually singular positive decompositions also requires no AC.

## Facts & Assumptions

**Given:** A signed measure $\nu$ on $(X,\mathcal A)$ ([[def-signed-measure]]). Assume AC for the general existence assertion ([[def-axiom-of-choice]]); for the conditional assertion a Hahn partition is supplied.

[L1] Under AC, Hahn decomposition gives measurable sets $P,N$ with $P\sqcup N=X$, $P$
positive, and $N$ negative, unique up to null sets. ([[thm-hahn-decomposition-for-signed-measures]])

[L2] Mutual singularity means that the two set functions vanish on measurable
subsets of complementary measurable pieces. ([[def-mutually-singular-measures]])

[L3] A measure is a nonnegative countably additive set function on a
sigma-algebra. ([[def-measure]])

## Proof

**Proof technique:** direct.

1.1 For the general existence assertion, obtain a Hahn partition from [L1]; this invokes AC through the Hahn theorem's optimizing choices and its positive-subset lemma. For the conditional assertion start with the supplied partition instead. Define $\nu^+(E)=\nu(E\cap P)$ and $\nu^-(E)=-\nu(E\cap N)$. The signs follow from [[def-positive-negative-and-null-sets-for-a-signed-measure]], and countable additivity and the empty-set value follow from those of $\nu$, so these are positive measures by [L3]. [given, L1, L3]

2.1 At least one of $\nu^+(X)=\nu(P)$ and $\nu^-(X)=-\nu(N)$ is finite, since otherwise $\nu$ would take both infinite signs. By positivity the same side is finite on every measurable $E$. Thus the difference is always defined, and finite additivity gives $\nu(E)=\nu^+(E)-\nu^-(E)$. The defining formulas give $\nu^+(N)=\nu^-(P)=0$, hence mutual singularity by [L2]. [step 1.1, L2, algebra]

3.1 Suppose $\nu=\mu-\eta$ with positive mutually singular measures, with the displayed difference defined on every measurable set. Take one witnessing partition $P',N'$ from [L2]. On subsets of $P'$ one has $\nu=\mu\ge0$, and on subsets of $N'$ one has $\nu=-\eta\le0$. Thus this is another Hahn partition. A measurable subset of $P\setminus P'$ lies in positive $P$ and negative $N'$, so has value zero; the same holds on $P'\setminus P$. Splitting between these differences shows they are null sets. This comparison uses only the supplied partitions, not Hahn existence or further AC. [step 2.1, L2, algebra]

4.1 For every measurable $E$, $\mu(E)=\mu(E\cap P')=\nu(E\cap P')=\nu(E\cap P)=\nu^+(E)$: the first equality uses vanishing on $N'$, and the middle change of sets discards only the null differences from step 3.1. Similarly $\eta(E)=-\nu(E\cap N)=\nu^-(E)$. There is no subtraction of two infinite quantities. Hence the parts are unique; steps 1.1–4.1 also prove the choice-free conditional assertion because AC was used only to obtain the initial arbitrary Hahn partition. [step 1.1, step 3.1, algebra] ∎
