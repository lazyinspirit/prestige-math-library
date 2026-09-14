---
id: thm-ch-implies-an-s-space-exists
kind: theorem
title: CH implies that an S-space exists
status: draft
origin: pipeline
deps:
  - def-set-theoretic-l-and-s-spaces
  - def-ordered-fundamental-space-and-nice-refinement
  - lem-cantor-and-baire-sequence-coding
  - rem-continuum-hypothesis
  - lem-nice-refinement-exists-and-is-not-lindelof
  - lem-ch-nice-refinement-is-strongly-hereditarily-separable
  - def-product-topology
  - lem-products-preserve-regularity
  - lem-products-preserve-t0-t1-and-hausdorff
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hart–Kunen, Ultra Strong S-Spaces, Definition 4.1 discussion and Corollary 4.18, printed pp. 95 and 103"
      url: https://www.uwosh.edu/faculty_staff/hartj/ultra.pdf
---

## Statement

ZFC plus the continuum hypothesis proves that there is a strong S-space.

## Facts & Assumptions

**Given:** ZFC and CH.

[F1] [[lem-cantor-and-baire-sequence-coding]] gives Cantor space $\mathcal C=2^\omega$ its clopen cylinder topology; it is separable, has no isolated points, and the finite words form a countable cylinder base.

[F2] Over ZFC, [[rem-continuum-hypothesis]] identifies the cardinality of $\mathcal P(\omega)$, and hence of its characteristic-function copy $2^\omega$, with $\aleph_1$.

[F3] [[def-ordered-fundamental-space-and-nice-refinement]] defines ordered fundamental spaces, their strict clopen local bases, nice refinements, and the condition $(\star_\alpha)$.

[F4] [[lem-nice-refinement-exists-and-is-not-lindelof]] gives every ordered fundamental space a star-satisfying nice refinement that is regular and Hausdorff but not Lindelöf.

[F5] Under CH, [[lem-ch-nice-refinement-is-strongly-hereditarily-separable]] makes every nonempty finite power of such a refinement hereditarily separable.

[F6] Product projections are continuous for the product topology ([[def-product-topology]]); products of regular spaces are regular ([[lem-products-preserve-regularity]]), and products of Hausdorff spaces are Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]]).

[F7] [[def-set-theoretic-l-and-s-spaces]] defines an S-space and a strong S-space and excludes the zeroth power from the latter definition.

[F8] [[def-axiom-of-choice]] supplies the ZFC well-orderings and bijections in the initial reindexing and propagates all choices made in [F4] and [F5].

## Proof

**Proof technique:** direct construction and assembly.

1.1 Let $D\subseteq\mathcal C$ consist of the binary sequences of finite support.  Sending a finite support $a$ to $\sum_{k\in a}2^k$ enumerates $D$ bijectively by $\omega$, and $D$ meets every cylinder: extend the prescribed finite word by zeros.  The map $x\mapsto y_x$, where $y_x(2k)=x(k)$ and $y_x(2k+1)=1$, injects $\mathcal C$ into $\mathcal C\setminus D$.  Inclusion gives the reverse injection, so Cantor--Bernstein and [F2] give $|\mathcal C\setminus D|=|\mathcal C|=\aleph_1$. [F1, F2]

2.1 Choose a bijection $b:\omega_1\to\mathcal C$ with $b[\omega]=D$: use the enumeration from step 1.1 on $\omega$ and a bijection $\omega_1\setminus\omega\to\mathcal C\setminus D$ on the complements.  Pull the cylinder topology back along $b$.  It is Hausdorff, zero-dimensional, separable, and second countable, with $\omega$ dense.  Every nonempty open set contains a cylinder.  For a word $s$, prefixing $s$ defines a bijection from $\mathcal C$ onto its cylinder $N_s$, so every nonempty open set has size $\aleph_1$. [F1, F2, F8, step 1.1]

3.1 For $\alpha<\omega_1$ and $n<\omega$, put $W_n^\alpha=b^{-1}[N_{b(\alpha)\restriction n}]$.  Then $W_0^\alpha=\omega_1$, each $W_n^\alpha$ is clopen, and these sets form a local base at $\alpha$.  They are strictly decreasing because the next unrestricted bit can be changed, and their intersection is $\{\alpha\}$. Consequently step 2.1 with these bases is a second-countable ordered fundamental space in the exact sense of [F3]. [F1, F3, step 2.1]

4.1 Apply [F4] to obtain a nice refinement $X=(\omega_1,\widetilde{\mathcal T})$ satisfying every $(\star_\alpha)$.  The space $X$ is regular and Hausdorff and is not Lindelöf. [F4, step 3.1]

5.1 Fix $0<n<\omega$.  By [F5], $X^n$ is hereditarily separable.  By [F6], $X^n$ is regular and Hausdorff. [F5, F6, step 4.1]

5.2 The power $X^n$ is not Lindelöf.  Otherwise let $\mathcal U$ be an open cover of $X$ with no countable subcover, supplied by step 4.1.  The inverse images $\{\pi_0^{-1}[U]:U\in\mathcal U\}$ form an open cover of $X^n$. Lindelöfness would give countably many of them covering $X^n$.  The projection $\pi_0:X^n\to X$ is onto: fill all coordinates other than $0$ with the fixed point $0\in\omega_1$.  Hence the corresponding countable members of $\mathcal U$ would cover $X$, a contradiction. [F4, F6, step 4.1, contradiction]

6.1 Steps 5.1 and 5.2 show that every positive finite power of $X$ is regular, Hausdorff, hereditarily separable, and not Lindelöf.  Thus every such power is an S-space, and [F7] says exactly that $X$ is a strong S-space.  The case $n=1$ is included, while $n=0$ is deliberately excluded.  The construction is nonempty because its underlying set is $\omega_1$.  Step 2.1 is the only new choice in this assembly; [F8] also propagates the ZFC choices in the two refinement suppliers. [F7, F8, step 2.1, step 5.1, step 5.2] ∎
