---
id: thm-every-borel-probability-on-a-polish-space-is-tight
kind: theorem
title: Every borel probability on a polish space is tight
deps: ["def-borel-probability-law-on-a-polish-space", "def-tight-family-of-probability-measures", "thm-borel-probability-measures-on-polish-spaces-are-inner-regular", "def-axiom-of-choice", "thm-continuity-from-below-for-measures", "thm-finite-and-countable-subadditivity-of-measures", "thm-complete-and-totally-bounded-implies-compact"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Theorem 2.6, pp. 5–6
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. Every Borel probability on a Polish space S is tight.

## Facts & Assumptions

[F1] [[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]]: Assume countable choice. If $P$ is Polish and $\mu$ is a Borel probability measure on $P$, then for every Borel $A\subseteq P$ and $\varepsilon>0$ there is a compact $K\subseteq A$ with $\mu(A\setminus K)<\varepsilon$.

[F2] [[def-tight-family-of-probability-measures]]: A family $\mathcal A$ of Borel probabilities on a metric space S is **tight** if, for every $\varepsilon>0$, there is a compact $K\subseteq S$ such that $\mu(S\setminus K)<\varepsilon$ for every $\mu\in\mathcal A$. One K must work for the whole family. Compactness is def-metric-compactness. The empty family is tight, witnessed by the empty compact set.

[F3] [[thm-continuity-from-below-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$, so $E_n\subseteq E_{n+1}$. Then

$$\mu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sup_{n\in\mathbb N}\mu(E_n).$$

No finiteness hypothesis is required.

[F4] [[thm-finite-and-countable-subadditivity-of-measures]]: Let $\mu$ be a measure and let $(E_k)_{k\in\mathbb N}$ be measurable. Then

$$\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k).$$

For every $m\in\mathbb N$ one also has

$$\mu\left(\bigcup_{k<m}E_k\right)\le\sum_{k<m}\mu(E_k),$$

including $m=0$, where both sides are $0$.

[F5] [[thm-complete-and-totally-bounded-implies-compact]]: **Assume the Axiom of Countable Choice** (def-countable-choice). Let $(X,d)$
be a metric space (def-metric-space) that is complete
(def-complete-metric-space) and totally bounded (def-totally-bounded).
Then $(X,d)$ is compact (def-metric-compactness).

**Where the axiom is spent, and why the weaker principle suffices.**
$\mathrm{AC}_\omega$ is used exactly once, at step 3.1, to fix one finite
$1/(n+1)$-net **together with a listing of it** for every $n \in \mathbb{N}$ at
once. The family of sets being chosen from is written down before any selection
is made and does not depend on the earlier selections, which is precisely the
situation countable choice covers and dependent choice
(def-dependent-choice) is not needed for. Everything after step 3.1 is
canonical: at each stage the construction takes the **least** admissible index in
the listing already fixed.

As always on this page, the claim is an upper bound on the cost of the proof
given here, not an assertion that $\mathrm{AC}_\omega$ is necessary for the
theorem.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 AC restricted to any countable nonempty family gives countable choice. Thus F1 applies to the given Polish S and its probability $\mu$. Take the Borel set A=S; for each $\varepsilon$>0 it supplies compact K with $\mu(S\setminus K)<\varepsilon$. This is F2 for the one-law family. [F1, F2]

2.1 The complete totally bounded criterion F5 applies under countable choice, already supplied by AC in step 1.1. Use F4 on the countably many omitted sets. Use F3 on the increasing finite unions below. The compact-set construction behind this application can be made explicit. Fix a compatible complete metric and a countable dense sequence $(a_i)$. For each $m\ge1$, finite initial unions of open balls $B(a_i,2^{-m})$ increase to S; choose their least length with loss below $\varepsilon2^{-m-1}$. Let $C_m$ be the corresponding finite union of closed balls, and $K=\bigcap_m C_m$. Subadditivity gives $\mu(S\setminus K)\le\sum_m\mu(S\setminus C_m)<\varepsilon$. K is closed and hence complete. For any $\eta$>0 choose m with $2^{1-m}<\eta$; each selected ball meeting K contributes one point of K, and those finitely many points form an $\eta$-net in K. Thus K is totally bounded and complete, hence compact, which realizes the bound in step 1.1. [step 1.1, F3, F4, F5] ∎
