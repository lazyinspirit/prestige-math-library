---
id: lem-determinantal-grade-sufficient-exact-free-complex
kind: lemma
title: Expected ranks and determinantal regular sequences force a free complex to be exact
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-free-complex-unit-entry-splits-contractible-pair
  - lem-depth-acyclicity-highest-homology
  - thm-localisation-and-flat-base-change-of-regular-sequences
  - thm-support-and-annihilator-of-a-finite-module
  - cor-depth-of-a-finite-local-module-at-most-its-dimension
  - thm-krull-height-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebra, Proposition 10.102.9 (tag 00N1), sufficiency direction"
      url: https://stacks.math.columbia.edu/tag/00N1
---

## Statement

Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a
Noetherian local ring and let
$F_\bullet:0\to R^{n_e}\xrightarrow{d_e}\cdots
\xrightarrow{d_1}R^{n_0}$ be a finite free complex.
For $1\le i\le e$ put
$r_i=n_i-n_{i+1}+\cdots+(-1)^{e-i}n_e$, and let
$I_i$ be the ideal of $r_i$-minors of $d_i$, with the
$0$-minor ideal equal to $R$. Assume every $r_i$ is
nonnegative, all $(r_i+1)$-minors of $d_i$ vanish,
and for every $i$, either $I_i=R$ or $I_i$ contains
an $R$-regular sequence of length $i$.
Then $F_\bullet$ is exact in every positive degree.
The assumptions imply each $d_i$ has rank exactly $r_i$.

## Facts & Assumptions

**Given:** The local Noetherian ring, finite free complex, expected-rank bounds, and determinantal regular sequences.

[F1] A unit differential entry splits a contractible two-term pair. The resulting complement has ranks reduced by one in those two degrees ([[lem-free-complex-unit-entry-splits-contractible-pair]]).

[F2] A finite complex with $\operatorname{depth}F_j\ge j$ cannot have nonzero finite-length highest positive homology ([[lem-depth-acyclicity-highest-homology]]).

[F3] A regular sequence localizes to a regular sequence when its terminal quotient stays nonzero. Depth is at most local dimension, and the maximal ideal of a Noetherian local ring has finite height ([[thm-localisation-and-flat-base-change-of-regular-sequences]], [[cor-depth-of-a-finite-local-module-at-most-its-dimension]], [[thm-krull-height-theorem]]).

[F4] The support of a finite module is the vanishing set of its annihilator. If such a module over a Noetherian local ring is supported only at the maximal ideal, a power of the maximal ideal kills it ([[thm-support-and-annihilator-of-a-finite-module]]).

## Proof

**Proof technique:** split unit entries, localize the minimal complex and induct on local dimension, then use the depth acyclicity lemma to kill closed-point homology.

1.1 First verify that $I_i\ne0$ for every $i$. If $I_i=R$ this is clear, including the $r_i=0$ convention where the $0$-minor is $1$. Otherwise it contains a regular sequence of positive length, whose first member is a nonzerodivisor on the nonzero ring $R$. Thus an $r_i$-minor is nonzero. Since all larger minors vanish, $d_i$ has rank exactly $r_i$. [F3]

1.2 If a matrix entry of some $d_k$ is a unit, [F1]
splits an identity pair in degrees $k,k-1$. In the complement the expected rank at $k$ is $r_k-1$ and all other expected ranks remain $r_i$. The determinant identity for a block $1\oplus D$ gives $I_{r_k}(1\oplus D)=I_{r_k-1}(D)$ and $I_{r_k+1}(1\oplus D)=I_{r_k}(D)$; minors at other differentials are unchanged because the removed rows or columns there are zero. Therefore the complement satisfies the same hypotheses. Repeat finitely many times, since each split reduces the sum of all ranks. It suffices to prove exactness for a complex whose differential entries all lie in $\mathfrak m$; call this the minimal complex. [F1, step 1.1]

2.1 If the minimal complex has no positive-degree term, it is exact there. Otherwise let $t>0$ be its highest nonzero degree. Its expected rank is $r_t=n_t>0$, and $I_t\subseteq\mathfrak m$ because all entries of $d_t$ lie in $\mathfrak m$. By hypothesis $I_t$ contains a regular sequence of length $t$, so $\operatorname{depth}R\ge t$. Every nonzero free term of the minimal complex has this same depth; therefore $\operatorname{depth}F_j\ge j$ for every $j$. By [F3], $\dim R\ge t$. In particular if $\dim R=0$, there is no positive term and the complex is exact. [F3, step 1.2]

3.1 Induct on the finite integer $d=\dim R$; finiteness follows from the Noetherian maximal ideal and the height theorem [F3]. Assume $d>0$ and exactness for complexes with the stated hypotheses over all Noetherian local rings of dimension less than $d$. Let $\mathfrak p\subsetneq\mathfrak m$. The localized complex over $R_{\mathfrak p}$ retains vanishing of all larger minors. If $(I_i)_{\mathfrak p}$ is unit, its alternative holds. Otherwise every element of a chosen regular sequence in $I_i$ belongs to $\mathfrak p$, and [F3] preserves its regularity after localization, including a nonzero terminal quotient. Thus each localized determinantal ideal satisfies the alternative. The ideal is nonzero by the localized regular sequence or unit condition, so the expected-rank equality persists. Because $\mathfrak p\subsetneq\mathfrak m$, $\dim R_{\mathfrak p}<d$; the induction hypothesis makes the localized complex exact in positive degrees. [F3, step 1.1, step 2.1]

4.1 Each positive homology module $H_i$ of the minimal complex is finite over $R$ and vanishes after localization at every nonmaximal prime by step 3.1. Thus its support is contained in $\{\mathfrak m\}$. By [F4], $\sqrt{\operatorname{Ann}H_i}=\mathfrak m$ when $H_i\ne0$. If $\mathfrak m=(x_1,\ldots,x_s)$, powers of all $x_a$ kill $H_i$; a sufficiently large power $\mathfrak m^N$ therefore kills it. The finite filtration by $\mathfrak m^jH_i$ has quotients finite-dimensional over $R/\mathfrak m$, so $H_i$ has finite length. If any positive $H_i$ were nonzero, choose the largest such $i$. Step 2.1 supplies the depth bounds for the complex, while [F2] says this highest homology has depth at least one. A nonzero finite-length module has depth zero, contradiction. Hence the minimal complex is positively exact, and reattaching the contractible pairs from step 1.2 proves the original complex exact. [F2, F4, step 1.2, step 2.1, step 3.1]

5.1 The dimension-zero base and positive-dimension induction complete the proof. AC is inherited by the regular-sequence, depth, and support suppliers; the unit-pair splitting itself is finite and choice-free. [F1, F2, F3, F4, step 2.1, step 3.1, step 4.1] ∎
