---
id: lem-the-fork-noodle-pairing-detects-essential-intersections
kind: lemma
title: The fork-noodle pairing detects essential intersections
status: published
origin: pipeline
deps: [lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel, lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions, def-axiom-of-choice, lem-the-fork-noodle-pairing-is-well-defined-and-equivariant, def-lexicographic-order-on-fork-noodle-deck-monomials, def-forks-noodles-and-their-lkb-intersection-pairing]
justified_by: []
aliases: []
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 3.1, printed pp. 480-481: Lemma 3.2 (the Key Lemma), proved from the minimal-position hypothesis, Claim 3.4 and equation (9)"
    - title: "Farb and Margalit, A Primer on Mapping Class Groups, version 5.0 author draft"
      url: "https://www.math.utah.edu/~margalit/primer/"
      locator: "Chapter 1, Proposition 1.7 (bigon criterion), printed pp. 30-34"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-16.md"
      - "research/frontier-38-owner-30-alpha-batch-16-5a.md"
      - "research/frontier-38-owner-30-step5-hash-16-post-5a.json"
    content_sha256: "303badcb8b4a083929bc577445150035c0e6566022575a832f328c67e4c03b00"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement

Assume AC. Let $N$ be a noodle and $F$ a fork of
[[def-forks-noodles-and-their-lkb-intersection-pairing]]. Then
$$\langle N,F\rangle=0 \quad\Longleftrightarrow\quad T(F)\ \text{can be isotoped relative to } \partial D\cup P \text{ to an arc disjoint from } N .$$

## Facts & Assumptions

**Given:** a noodle $N$ and a fork $F$ in the disk $D$ with puncture set $P$,
with the conventions of [[def-forks-noodles-and-their-lkb-intersection-pairing]]
and [[def-lexicographic-order-on-fork-noodle-deck-monomials]].

[F1] For $T(F)$ and $N$ in transverse position with $l$ intersection points,
the pairing equals the finite geometric sum
$\langle N,F\rangle=\sum_{i,j=1}^{l}\epsilon_{i,j}m_{i,j}$ of the labelled
intersections, and its value depends only on the isotopy classes of $N$ and
$F$ relative to $\partial D\cup P$; in particular any isotopic choice of
representative of the tine edge gives the same pairing. This is
[[def-lexicographic-order-on-fork-noodle-deck-monomials]] together with the
representative-independence and equivariance proved in
[[lem-the-fork-noodle-pairing-is-well-defined-and-equivariant]].

[F2] [[lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel]]:
if $T(F)$ and $N$ are in minimal position with $l\ge1$ intersection points,
then every term of $\langle N,F\rangle$ carrying a maximal monomial has one
sign and the maximal coefficient is nonzero, so $\langle N,F\rangle\ne0$.

[F3] [[lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions]]:
$T(F)$ admits a minimal-position representative, and $T(F)$ is isotopic
relative to its endpoints to an arc disjoint from $N$ if and only if every
minimal-position representative is disjoint from $N$.

## Proof

1.1 Assume first that $T(F)$ is isotopic relative to $\partial D\cup P$ to an arc disjoint from $N$. Choose such a representative $F'$ of the isotopy class of $F$ with $T(F')\cap N=\varnothing$; the finitely many intersection points of $T(F')$ with $N$ number $l=0$. Then the geometric sum of [F1] is empty, so $\langle N,F'\rangle=0$, and representative-independence in [F1] gives $\langle N,F\rangle=0$. This proves the implication from disjointness to vanishing. [F1, given]

2.1 For the converse, suppose $T(F)$ cannot be isotoped relative to $\partial D\cup P$ to an arc disjoint from $N$. By [F3] every minimal-position representative of $T(F)$ meets $N$; choose such a representative $T^*$ and let $l\ge1$ be its number of intersection points with $N$; the corresponding fork is isotopic to $F$ relative to $\partial D\cup P$. The minimal position hypothesis of [F2] is satisfied, so the maximal monomial of the geometric sum occurs with a single sign and nonzero coefficient, whence $\langle N,F^*\rangle\ne0$. By representative-independence in [F1] again, $\langle N,F\rangle =\langle N,F^*\rangle\ne0$. This proves the contrapositive. [F1, F2, F3, given, algebra] ∎