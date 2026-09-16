---
id: cex-finite-bit-flips-cannot-defeat-a-free-ultrafilter
kind: counterexample
title: Finite bit flips cannot defeat a free ultrafilter
status: published
origin: pipeline
deps: [def-ultrafilter, thm-ultrafilter-characterisation, def-set-difference-and-symmetric-difference]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Solomon Feferman, Some applications of the notions of forcing and generic sets, Theorem 4.12 uses an infinite tail complement, printed pp. 343–344", url: "https://bibliotekanauki.pl/articles/1381977.pdf"}
---

## Statement

Let $U$ be a free ultrafilter on $\omega$. If
$X\mathbin\triangle Y$ is finite, then

$$X\in U\quad\Longleftrightarrow\quad Y\in U.$$

Consequently a finite-bit flip cannot produce Feferman's ultrafilter
contradiction; the infinite tail-complement flip is essential.

## Facts & Assumptions

**Given:** A free ultrafilter $U$ on $\omega$ and subsets $X,Y\subseteq\omega$ with finite symmetric difference.

[F1] [[def-ultrafilter]] defines freeness as failure to be principal at every point and includes the proper-filter intersection and upward-closure laws.

[F2] [[thm-ultrafilter-characterisation]] says an ultrafilter contains exactly one member of every complementary pair.

[F3] [[def-set-difference-and-symmetric-difference]] defines $X\mathbin\triangle Y$ as the set of points at which membership differs.

## Proof

**Proof technique:** direct calculation on the cofinite agreement set.

1.1 No finite set $F$ belongs to $U$. Otherwise, since $U$ is not principal, no singleton $\{n\}$ belongs to $U$; F2 then puts every $\omega\setminus\{n\}$ in $U$. Intersecting these complements for the finitely many $n\in F$ puts $\omega\setminus F$ in $U$, so propriety is contradicted by $F\cap(\omega\setminus F)=\varnothing$. This includes $F=\varnothing$, which is excluded directly by propriety. By F2, every cofinite set therefore belongs to $U$. [F1, F2]

2.1 Put $D=\omega\setminus(X\mathbin\triangle Y)$. By F3 this is exactly the set on which $X$ and $Y$ agree, and it is cofinite by the Given hypothesis; hence $D\in U$ by step 1.1. If $X\in U$, then $X\cap D\in U$, while agreement gives $X\cap D\subseteq Y$, so upward closure gives $Y\in U$. Exchanging $X$ and $Y$ proves the reverse implication. Thus the displayed equivalence holds, including $X=Y$, $X=\varnothing$, and $X=\omega$. [F1, F3, step 1.1]

3.1 A flip of only finitely many bits replaces $X$ by some $Y$ with finite $X\mathbin\triangle Y$, so step 2.1 preserves its membership status in $U$ and supplies no contradiction. Feferman's automorphism instead sends the selected real to a finite modification of $\omega\setminus X$: invariance then transfers its membership to the complement, which conflicts with F2. The distinction is between a finite flip and an infinite tail flip, not between two descriptions of the same automorphism. [F2, F3, step 2.1] ∎
