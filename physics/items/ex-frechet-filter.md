---
id: ex-frechet-filter
kind: example
title: "The subsets of $\\mathbb{N}$ containing a tail form the Fréchet filter, and it is proper and not an ultrafilter"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-filter, def-filter-base, lem-filter-base-generates, thm-ultrafilter-characterisation, def-natural-numbers, def-nat-order, def-nat-addition, thm-induction-principle, thm-nat-linear-order, lem-nat-order-add-compatible, lem-nat-add-commutative, lem-nat-discrete]
aliases: [ex-cofinite-filter-on-naturals]
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Cofinite subset (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Cofinite_subset"
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
    - title: "B. Kaya, Ultrafilters and How to Use Them"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf"
pipeline_run: null
---

## Example

For $k\in\mathbb N$, let

$$T_k:=\{n\in\mathbb N:k\le n\}.$$

The tails $\mathcal B_{\mathrm{tail}}:=\{T_k:k\in\mathbb N\}$ form a filter
base on $\mathbb N$. Its generated filter is

$$\mathcal F_{\mathrm{Fr}}:=\{A\subseteq\mathbb N:T_k\subseteq A\text{ for some }k\in\mathbb N\}.$$

This is the **Fréchet filter**, also called the **cofinite filter**, on
$\mathbb N$: a set belongs to it exactly when its complement is finite. Here
finiteness is used in its finite-list form, meaning that the set is contained
in the range of some list $s:r\to\mathbb N$ with $r\in\mathbb N$. The filter is
proper, but it is not an ultrafilter.

For every $k$, the complement $\mathbb N\setminus\{k\}$ contains the tail
$T_{\sigma(k)}$ and therefore belongs to $\mathcal F_{\mathrm{Fr}}$.

## Facts & Assumptions

**Given:** The tails $T_k$, the family $\mathcal B_{\mathrm{tail}}$, and $\mathcal F_{\mathrm{Fr}}$ displayed above.

[F2] A filter base is nonempty, omits $\emptyset$, and is downward directed ([[def-filter-base]]).

[L1] The upward closure of a filter base is a filter and is the smallest filter containing that base ([[lem-filter-base-generates]]).

[L2] A filter $\mathcal U$ is an ultrafilter exactly when, for every $A$, exactly one of $A$ and its complement belongs to $\mathcal U$ ([[thm-ultrafilter-characterisation]]).

[F3] The natural numbers have $0=\emptyset$ and successor $\sigma(n)=n\cup\{n\}$; their order is $m\le n$ exactly when $m+j=n$ for some $j\in\mathbb N$, and addition satisfies $m+0=m$ and $m+\sigma(n)=\sigma(m+n)$ ([[def-natural-numbers]], [[def-nat-order]], [[def-nat-addition]]).

[L3] Induction on $\mathbb N$ is valid, and $\le$ is a reflexive, transitive, total order ([[thm-induction-principle]], [[thm-nat-linear-order]]).

[L4] Addition preserves both $\le$ and $<$, addition is commutative, and $m<n$ exactly when $\sigma(m)\le n$, so no natural lies strictly between $m$ and $\sigma(m)$ ([[lem-nat-order-add-compatible]], [[lem-nat-add-commutative]], [[lem-nat-discrete]]).

## Verification

**Proof technique:** direct.

1.1 The family $\mathcal B_{\mathrm{tail}}$ is nonempty because it contains $T_0=\mathbb N$, and every $T_k$ is nonempty because $k\in T_k$ by reflexivity of $\le$. [given, L3]

1.2 For $k,\ell\in\mathbb N$, totality gives $k\le\ell$ or $\ell\le k$; in the first case $T_\ell\subseteq T_k\cap T_\ell$, and in the second $T_k\subseteq T_k\cap T_\ell$. Thus the tails are downward directed and none is empty. [given, L3]

1.3 Every finite list of natural numbers has a strict upper bound: the empty list is bounded by $0$, and if $b$ strictly bounds the first $r$ entries, totality compares $b$ with the last entry $s(r)$, after which the successor of the larger one strictly bounds all $\sigma(r)$ entries; induction proves the assertion for every length $r$. [L3, L4]

1.4 If $T_k\subseteq A$, then $\mathbb N\setminus A\subseteq k=\{0,\ldots,k-1\}$, so the complement is contained in the range of the finite identity list $i\mapsto i$ on $k$. [given, F3]

1.5 Let $E:=\{r+r:r\in\mathbb N\}$. For every $k$, the natural $k+k$ belongs to $E\cap T_k$, because $k\le k+k$ by the order definition with gap $k$. [given, F3]

1.6 For every $k$, the successor $\sigma(k+k)=k+k+1$ does not belong to $E$: if $r+r=\sigma(k+k)$, then totality gives $r\le k$ or $k<r$ after separating the equality case; in the first case addition compatibility gives $r+r\le k+k$, contradicting $k+k<\sigma(k+k)$, while in the second it gives $k+k<k+r<r+r=\sigma(k+k)$, contradicting the immediacy of the successor. [F3, L3, L4]

1.7 For each $k$, if $n\in T_{\sigma(k)}$ then $k<n$ by [L4], so $n\neq k$; hence $T_{\sigma(k)}\subseteq\mathbb N\setminus\{k\}$ and $\mathbb N\setminus\{k\}\in\mathcal F_{\mathrm{Fr}}$. [given, L4]

2.1 For every $k$, one has $k\le k+k<\sigma(k+k)$, so step 1.6 gives an element of $T_k\setminus E$. [step 1.6, F3, L3, L4]

2.2 By steps 1.1 and 1.2, $\mathcal B_{\mathrm{tail}}$ is a filter base, and [L1] makes its upward closure $\mathcal F_{\mathrm{Fr}}$ a proper filter. [step 1.1, step 1.2, F2, L1]

2.3 Conversely, if $\mathbb N\setminus A$ is contained in the range of a finite list, choose a strict upper bound $k$ for that list by step 1.3. Then no $n\ge k$ lies in $\mathbb N\setminus A$, so $T_k\subseteq A$ and $A\in\mathcal F_{\mathrm{Fr}}$. [step 1.3, given]

3.1 Steps 1.4 and 2.3 show that $A\in\mathcal F_{\mathrm{Fr}}$ exactly when $\mathbb N\setminus A$ is finite, so the tail and cofinite descriptions agree. [step 1.4, step 2.3]

3.2 Steps 1.5 and 2.1 show that every tail meets both $E$ and $\mathbb N\setminus E$. Therefore neither $E$ nor its complement contains a tail, so neither belongs to $\mathcal F_{\mathrm{Fr}}$. [step 1.5, step 2.1, given]

4.1 Since $\mathcal F_{\mathrm{Fr}}$ contains neither member of the complementary pair $E,\mathbb N\setminus E$, [L2] shows that it is not an ultrafilter. Together with step 2.2, this proves that the Fréchet filter is proper but not ultra. [step 2.2, step 3.2, L2] ∎
