---
id: thm-jordan-decomposition-for-signed-measures
kind: theorem
title: "Jordan decomposition of a signed measure into unique mutually singular positive parts"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-measure, def-mutually-singular-measures, thm-hahn-decomposition-for-signed-measures]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 6.21"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 12.8"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Let $\nu$ be a signed measure on $(X,\mathcal A)$. Then there exist positive
measures $\nu^+,\nu^-:(X,\mathcal A)\to[0,+\infty]$ such that
$$\nu=\nu^+-\nu^-,$$
and $\nu^+\perp \nu^-$.

These measures are unique: if $\nu=\mu-\eta$ with positive measures
$\mu\perp\eta$, then $\mu=\nu^+$ and $\eta=\nu^-$.

## Facts & Assumptions

**Given:** A signed measure $\nu$ on $(X,\mathcal A)$.

[L1] Hahn decomposition gives measurable sets $P,N$ with $P\sqcup N=X$, $P$
positive, and $N$ negative, unique up to null sets. ([[thm-hahn-decomposition-for-signed-measures]])

[L2] Mutual singularity means that the two set functions vanish on measurable
subsets of complementary measurable pieces. ([[def-mutually-singular-measures]])

[L3] A measure is a nonnegative countably additive set function on a
sigma-algebra. ([[def-measure]])

## Proof

**Proof technique:** direct.

1.1 Choose a Hahn decomposition $X=P\sqcup N$ from [L1]. Define [L1, L3]
$$\nu^+(A):=\nu(A\cap P),\qquad \nu^-(A):=-\nu(A\cap N)\qquad(A\in\mathcal A).$$
Because $P$ is positive and $N$ is negative, these values lie in
$[0,+\infty]$. Their countable additivity is inherited from that of $\nu$, so
[L3] makes $\nu^+$ and $\nu^-$ positive measures. Also
$$\nu(A)=\nu(A\cap P)+\nu(A\cap N)=\nu^+(A)-\nu^-(A)$$
for every measurable $A$.

2.1 The defining pieces in step 1.1 also show mutual singularity: every [L1, L2, step 1.1]
measurable subset of $N$ has $\nu^+$-value $0$, and every measurable subset of
$P$ has $\nu^-$-value $0$. Thus [L2] gives $\nu^+\perp\nu^-$.

2.2 Suppose $\nu=\mu-\eta$ with positive measures $\mu\perp\eta$. By [L2], [L1, L2, step 1.1]
choose $P',N'$ with $P'\sqcup N'=X$, $\mu$ vanishing on subsets of $N'$, and
$\eta$ vanishing on subsets of $P'$. Then every measurable subset of $P'$ has
$\nu$-value $\mu(E)\ge0$, so $P'$ is positive, and every measurable subset of
$N'$ has $\nu$-value $-\eta(E)\le0$, so $N'$ is negative. Hence $(P',N')$ is a
Hahn decomposition, so [L1] makes $P\triangle P'$ null.

3.1 Because $\mu$ vanishes on subsets of $N'$ and null subsets of $P'$ have [L1, L2, step 1.1, step 2.2]
$\mu$-value $0$ as well, step 2.2 gives
$$\mu(A)=\mu(A\cap P')=\nu(A\cap P')=\nu(A\cap P)=\nu^+(A).$$
The same argument on $N'$ gives $\eta(A)=-\nu(A\cap N)=\nu^-(A)$. Thus the
Jordan decomposition is unique.

4.1 Steps 1.1, 2.1, and 3.1 prove existence, mutual singularity, and [step 1.1, step 2.1, step 3.1] ∎
uniqueness.
