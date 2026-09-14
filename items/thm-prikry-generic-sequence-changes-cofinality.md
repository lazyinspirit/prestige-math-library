---
id: thm-prikry-generic-sequence-changes-cofinality
kind: theorem
title: The Prikry generic sequence changes cofinality to omega
status: published
origin: pipeline
deps:
  - def-prikry-forcing-and-direct-extension
  - def-lc-complete-ultrafilters-and-measurable-cardinals
  - def-dense-open-sets-and-model-generic-filters
  - thm-forcing-theorem
  - def-cofinality
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing lecture notes, Section 9.2, Theorem 9.10(1)"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

Let $M$ be a transitive model of ZFC containing a normal measure $U$ on
$\kappa$, let $\mathbb P_U$ be Prikry forcing as computed in $M$, and let $G$
be $M$-generic. Then in $M[G]$ the union of the stems in $G$ is a strictly
increasing sequence of order type $\omega$ cofinal in $\kappa$. Consequently
$M[G]\models\operatorname{cf}(\kappa)=\omega$.

## Facts & Assumptions

**Given:** $M,U,\kappa,\mathbb P_U,G$ as in the statement. Conditions are
ordered stronger-below.

[F1] [[def-prikry-forcing-and-direct-extension]]: A condition has a finite
strictly increasing stem, extensions end-extend stems, and new entries come
from the old measure-one upper part.

[F2] [[def-lc-complete-ultrafilters-and-measurable-cardinals]]: A normal
measure is a nonprincipal $\kappa$-complete ultrafilter on $\kappa$.

[F3] [[def-dense-open-sets-and-model-generic-filters]]: An $M$-generic filter
meets every dense subset of the forcing which belongs to $M$.

[F4] [[thm-forcing-theorem]]: The forcing theorem supplies the truth lemma for
every $M$-generic filter.

[F5] [[def-cofinality]]: $\operatorname{cf}(\kappa)$ is the least ordinal
length of a map into $\kappa$ with cofinal range.

## Proof

1.1 Any two conditions in $G$ have a common stronger condition because $G$ is a filter. Their stems are therefore both initial segments of the common stem and hence are comparable by end-extension. Thus $g=\bigcup\{s_p:p\in G\}$ is a function whose domain is an initial segment of $\omega$, and F1 makes it strictly increasing. [F1, F3]

2.1 For each $n<\omega$, let $D_n$ consist of conditions whose stems have length at least $n$. It is dense: from $(s,A)$ add finitely many increasing points from the nonempty successive measure-one tails of $A$. The definition of $D_n$ and this density proof are in $M$. By F3, $G$ meets $D_n$ for every ground-model natural number $n$; transitivity makes these all actual natural numbers. Hence $\operatorname{dom}(g)=\omega$. [F1, F2, F3, step 1.1]

2.2 A measure-one set is unbounded in $\kappa$. Otherwise it would be contained in some $\alpha<\kappa$, while $\kappa\setminus\alpha$ belongs to $U$ because it is the intersection of fewer than $\kappa$ complements of singleton sets; this contradicts properness. For each $\alpha<\kappa$, the set $E_\alpha$ of conditions with a nonempty stem whose last entry exceeds $\alpha$ is consequently dense: extend once using a point of the upper part above $\alpha$. Since $E_\alpha\in M$, F3 gives $p\in G\cap E_\alpha$, and an entry of $g$ exceeds $\alpha$. Thus $g$ is cofinal in $\kappa$. [F1, F2, F3, step 1.1]

3.1 The canonical name for the union of generic stems evaluates to $g$, and the truth lemma places the preceding statements in $M[G]$. By F5, $g:\omega\to\kappa$ cofinal gives $\operatorname{cf}(\kappa)\le\omega$. No finite sequence is cofinal in the infinite limit ordinal $\kappa$, since its finite range has a maximum below $\kappa$; therefore $\operatorname{cf}(\kappa)$ is not finite and equals $\omega$. [F4, F5, step 2.1, step 2.2] $\square$
