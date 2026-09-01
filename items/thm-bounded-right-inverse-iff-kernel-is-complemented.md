---
id: thm-bounded-right-inverse-iff-kernel-is-complemented
kind: theorem
title: "Under Dependent Choice, a surjective bounded operator between Banach spaces has a bounded right inverse exactly when its kernel is complemented"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-left-and-right-inverses, def-complemented-subspace,
       def-dependent-choice,
       def-bounded-linear-operator,
       thm-complemented-subspace-iff-range-of-a-bounded-projection,
       thm-bounded-below-iff-injective-with-closed-range,
       lem-closed-subspace-of-a-banach-space-is-banach]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://math.jhu.edu/~sire/brezis.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]).

Let $X$ and $Y$ be Banach spaces over the same scalar field, and let
$T:X\to Y$ be a surjective bounded linear operator. Then $T$ has a bounded right
inverse if and only if $\ker T$ is complemented in $X$.

## Facts & Assumptions

**Given:** Banach spaces $X$ and $Y$, a surjective bounded linear operator $T:X\to Y$, and a bounded linear operator $S:Y\to X$.

[L0] Dependent Choice is assumed ([[def-dependent-choice]]).

[L1] A bounded right inverse means $TS=I_Y$ ([[def-bounded-left-and-right-inverses]]).

[L2] Complemented subspaces are exactly the ranges of bounded projections ([[thm-complemented-subspace-iff-range-of-a-bounded-projection]]).

[L3] For bounded operators between Banach spaces, injective with closed range is equivalent to bounded below ([[thm-bounded-below-iff-injective-with-closed-range]]).

[L4] A closed subspace of a Banach space is Banach ([[lem-closed-subspace-of-a-banach-space-is-banach]]).

## Proof

**Proof technique:** direct.

1.1 Assume $S$ is a bounded right inverse of $T$, so $TS=I_Y$ by [L1]. Define $P:=I_X-ST$. Then $P^2 = I_X - 2ST + STST = I_X-ST = P$, because $TST=T$. Also, if $\|Sy\| \le C_S\|y\|$ and $\|Tx\| \le C_T\|x\|$, then $\|STx\| \le C_SC_T\|x\|$ and therefore $\|Px\| \le (1+C_SC_T)\|x\|$ for every $x \in X$; so $P$ is a bounded projection. Finally, $TP = T-TST = 0$, so $\operatorname{ran}(P) \subseteq \ker T$. [L1, given, algebra]

1.2 Conversely, assume $\ker T$ is complemented. Then there is a closed subspace $L \le X$ with $X=\ker T \oplus L$. The restriction $T|_L:L\to Y$ is injective, because $L \cap \ker T = \{0\}$, and it is surjective because every $x \in X$ decomposes as $k+\ell$ with $Tx=T\ell$. Since $L$ is closed in the Banach space $X$, [L4] makes $L$ Banach. [L4, given]

2.1 If $x \in \ker T$, then $Px = x-STx = x$. Hence $\ker T \subseteq \operatorname{ran}(P)$, and step 1.1 gives $\operatorname{ran}(P)=\ker T$. Therefore [L2] makes $\ker T$ complemented. [step 1.1, L2]

2.2 The map $T|_L$ is a bounded bijection from the Banach space $L$ onto the Banach space $Y$, so [L0] and [L3] make it bounded below. Hence its inverse $R:Y\to L$ is bounded, because $\|R(y)\| \le c^{-1}\|y\|$ when $\|T\ell\| \ge c\|\ell\|$. The inclusion $L \hookrightarrow X$ now gives a bounded linear map $S:Y\to X$ with $TS=I_Y$. Thus $S$ is a bounded right inverse. [step 1.2, L0, L3]

3.1 Steps 2.1 and 2.2 prove the equivalence. [step 2.1, step 2.2] ∎
