---
id: lem-moore-no-cross-injection
kind: lemma
title: The Moore colouring forbids cross-injections
status: draft
origin: pipeline
deps:
  - def-moore-l-space-topology
  - thm-moore-oscillation-colouring-pattern
  - lem-uncountable-delta-system-for-finite-sets
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: contradiction
sources:
  references:
    - title: "Moore, A solution to the L space problem, Section 7, Theorem 7.7 and proof, printed pp. 23–24"
      url: https://arxiv.org/pdf/math/0501524
---

## Statement

In ZFC, if $X,Y\subseteq\omega_1$ have countable intersection, then no uncountable
subspace of $(X,\tau[X])$ admits a continuous injection into
$(Y,\tau[Y])$.

## Facts & Assumptions

**Given:** ZFC and $X,Y\subseteq\omega_1$ with $X\cap Y$ countable.

[F1] [[def-moore-l-space-topology]] gives a clopen finite-Boolean base and $x\in W_\eta$ iff either $x=\eta$ or $\eta<x$ and $c(\eta,x)=1$.

[F2] [[thm-moore-oscillation-colouring-pattern]] realizes every binary pattern on the graph of a finite coordinate map.

[F3] [[lem-uncountable-delta-system-for-finite-sets]] gives an uncountable $\Delta$-subfamily of any uncountable family of finite supports.

[F4] [[def-axiom-of-choice]] supports the simultaneous neighborhood choices and the finite/countable thinning steps.

## Proof

**Proof technique:** contradiction.

1.1 Suppose $f:X_0\to Y$ is continuous and injective for an uncountable $X_0\subseteq X$.  Delete the countable sets $X_0\cap(X\cap Y)$ and $f^{-1}(X\cap Y)$.  After this deletion, every remaining $\alpha$ and $f(\alpha)$ are distinct and lie on opposite sides of $X\setminus Y$ and $Y\setminus X$.  One of the two orientations $\alpha<f(\alpha)$ or $f(\alpha)<\alpha$ holds on an uncountable subfamily; retain it. [F4, given, assume-contra]

2.1 For each retained $\alpha$, continuity at $\alpha$ and the neighborhood $W_{f(\alpha)}\cap Y$ of $f(\alpha)$ give a basic clopen $U_\alpha\ni\alpha$ with $U_\alpha\subseteq f^{-1}(W_{f(\alpha)}\cap Y)$.  Encode $U_\alpha$ by a finite support $F_\alpha\subseteq X$ and its membership-bit function.  Add $\alpha$ to the support if necessary. [F1, F4, step 1.1]

3.1 Apply F3 and then finite/countable pigeonhole thinning so that the $F_\alpha$ form a $\Delta$-system with root $F$, all petals have one size $k>0$, the membership bits on the fixed root $F$ have one fixed vector, the membership bits on the increasingly enumerated petals have one fixed vector $\chi_0$, the root lies below every retained $\alpha$, and the order type of each petal together with $f(\alpha)$ is constant.  These are separate finite thinnings: agreement of the petal pattern alone would not control the root coordinates.  Because $X\cap Y$ is countable and the petals are disjoint, discard the countably many petals meeting $X\cap Y$.  The families $\mathcal A=\{(F_\alpha\setminus F)\cup\{f(\alpha)\}:\alpha\}$ and $\mathcal B=\{\{\beta,f(\beta)\}:\beta\}$ are therefore uncountable, fixed-size, and pairwise disjoint. [F3, F4, step 1.1, step 2.1]

4.1 Enumerate each member of $\mathcal A$ and $\mathcal B$ increasingly. The uniform order types give an insertion coordinate $r\leq k$ for $f(\alpha)$ in the first enumeration, a column $s<2$ occupied by $\beta$ in the second, and the other column $t<2$ occupied by $f(\beta)$.  Define $\pi:k+1\to2$ by $\pi(r)=t$ and $\pi(i)=s$ for $i\neq r$.  Define the desired bit at row $r$ to be $0$, and at every other row to be the corresponding petal bit from $\chi_0$. [step 3.1]

5.1 By [F2], choose $a\in\mathcal A$ and $b\in\mathcal B$ with $a<b$ that realize these bits.  Let $a=(F_\alpha\setminus F)\cup\{f(\alpha)\}$ and $b=\{\beta,f(\beta)\}$.  At the inserted row, $c(f(\alpha),f(\beta))=0$, and $a<b$ ensures $f(\alpha)<f(\beta)$; hence $f(\beta)\notin W_{f(\alpha)}$. [F1, F2, step 4.1]

6.1 At every petal row, the realized bit says that $\beta$ satisfies the corresponding petal literal in the finite Boolean condition defining $U_\alpha$.  At every root row, the separately stabilized root vector has the same value for $U_\alpha$ and $U_\beta$; since $\beta\in U_\beta$ and the root lies below $\beta$, F1 translates each root membership into precisely that fixed colouring bit.  Thus every root and petal literal defining $U_\alpha$ holds at $\beta$, so $\beta\in U_\alpha$. [F1, step 2.1, step 3.1, step 5.1]

7.1 The containment chosen in step 2.1 now gives $f(\beta)\in W_{f(\alpha)}$, contradicting step 5.1.  The construction used the orientation only to decide which column of the increasing pair is $\beta$; step 4.1 handles both orientations through $s,t$.  Hence no such continuous injection exists. [step 2.1, step 4.1, step 5.1, step 6.1, discharge-contradiction] ∎
