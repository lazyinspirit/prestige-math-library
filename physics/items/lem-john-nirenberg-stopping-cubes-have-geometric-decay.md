---
id: lem-john-nirenberg-stopping-cubes-have-geometric-decay
kind: lemma
title: "John-Nirenberg stopping cubes have geometric decay"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-bmo-seminorm-and-quotient-by-constants, lem-maximal-dyadic-cubes-at-height-lambda, lem-calderon-zygmund-decomposition-at-height-lambda, lem-dyadic-cubes-all-generations-partition-and-nesting, def-dyadic-cube-in-rn-all-generations, thm-almost-every-point-is-a-lebesgue-point, def-countable-choice, thm-countable-union-of-countable, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 3.15 and its proof (recursive Calderon-Zygmund decomposition, bounded overlap and the $2^{nk}$ level bound), printed pp. 44-48"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Theorem 7.5, proof steps 1-4 ((A-k)-(E-k) and (7.8)), printed pp. 29-31"
    - title: "Brooke Wilson, Math 581A Classical and Multilinear Harmonic Analysis (University of Washington, Fall 2024), lecture 18"
      url: "https://sites.math.washington.edu/~blwilson/581AFall2024/Lectures/lecture18.pdf"
      locator: "the dyadic John-Nirenberg induction, scanned pages 1-3"
---

## Statement

Assume Countable Choice. Let $b\in\mathrm{BMO}(\mathbb R^n)$, let $Q$ be an
all-generations dyadic cube and let $s>\|b\|_{\mathrm{BMO}}$. Then there are
families of dyadic subcubes $Q^{(k)}_j\subseteq Q$, $k\ge1$, pairwise
disjoint for each fixed $k$, such that, with $Q^{(0)}_1:=Q$:
(i) each $Q^{(k)}_j$ is contained in a unique level-$(k-1)$ stopping cube.
Its immediate dyadic parent is contained in that stopping cube but need not
belong to the preceding stopping family; (ii) for every $k$,
$\sum_j|Q^{(k)}_j|\le(\|b\|_{\mathrm{BMO}}/s)^k|Q|$; and (iii) for every
$k\ge1$, $|b-b_Q|\le k2^ns$ almost everywhere on
$Q\setminus\bigcup_jQ^{(k)}_j$, and a fortiori $|b-b_Q|\le2^{nk}s$ there, so
$\{x\in Q:|b-b_Q|>2^{nk}s\}\subseteq\bigcup_jQ^{(k)}_j$ up to a Lebesgue-null
set.

## Facts & Assumptions

**Given:** Countable Choice, $b\in\mathrm{BMO}(\mathbb R^n)$, an all-generations dyadic cube $Q$ and a real number $s>\|b\|_{\mathrm{BMO}}$.

[F1] The all-generations dyadic cubes partition $\mathbb R^n$ at each generation, have volumes $2^{-kn}$, and for two dyadic cubes one contains the other or they are disjoint; the parent of a cube of generation $k$ is its unique ancestor of generation $k-1$, with volume $2^n$ times that of the cube ([[def-dyadic-cube-in-rn-all-generations]], [[lem-dyadic-cubes-all-generations-partition-and-nesting]]).

[F2] For $f\in L^1(\mathbb R^n)$ and $\lambda>0$, the dyadic cubes $E$ with $|E|^{-1}\int_E|f|>\lambda$ that are maximal under inclusion form a countable family of pairwise disjoint cubes; their union is exactly the dyadic maximal superlevel set $\{M_df>\lambda\}$; each such $E$ satisfies $|E|^{-1}\int_E|f|\le2^n\lambda$; and $\sum_E|E|\le\lambda^{-1}\|f\|_1$ ([[lem-maximal-dyadic-cubes-at-height-lambda]]).

[F3] In the Calderon-Zygmund decomposition of $f\in L^1$ at height $\lambda>0$, the good part $g$ equals $f$ outside the union of those maximal cubes and satisfies $|g|\le2^n\lambda$ almost everywhere ([[lem-calderon-zygmund-decomposition-at-height-lambda]]).

[F4] Almost every point of $\mathbb R^n$ is a Lebesgue point of a given $L^1_{\mathrm{loc}}$ function ([[thm-almost-every-point-is-a-lebesgue-point]]).

[F5] A countable union of at most countable sets is at most countable, and a countable union of Lebesgue-null subsets of $\mathbb R^n$ is Lebesgue-null ([[thm-countable-union-of-countable]], [[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

[F6] For every cube $E$, $|E|^{-1}\int_E|b-b_E|\le\|b\|_{\mathrm{BMO}}$ ([[def-bmo-seminorm-and-quotient-by-constants]]).

## Proof

**Proof technique:** direct.

1.1 Put $F=(b-b_Q)\mathbf 1_Q$. Then $F\in L^1(\mathbb R^n)$ with $\int_{\mathbb R^n}|F|=\int_Q|b-b_Q|\le|Q|\,\|b\|_{\mathrm{BMO}}<s|Q|$ by [F6] and the hypothesis on $s$. Let $\mathcal Q^{(1)}$ be the family of dyadic cubes $E$ with $|E|^{-1}\int_E|F|>s$ maximal under inclusion. By [F2] applied to $F$ and $s$, the family $\mathcal Q^{(1)}$ is countable and pairwise disjoint, each $E\in\mathcal Q^{(1)}$ satisfies $s<|E|^{-1}\int_E|F|\le2^ns$, and $\sum_{E\in\mathcal Q^{(1)}}|E|\le s^{-1}\int_{\mathbb R^n}|F|\le(\|b\|_{\mathrm{BMO}}/s)|Q|$. Every $E\in\mathcal Q^{(1)}$ is a proper dyadic subcube of $Q$: it meets $Q$ because its average of $|F|$ is positive, and if $Q\subsetneq E$ then $|E|^{-1}\int_E|F|\le(|Q|/|E|)\|b\|_{\mathrm{BMO}}<s$, a contradiction, while $E=Q$ is excluded by the same average bound. By [F3] the good part of the decomposition of $F$ equals $F$ off $\bigcup_{E\in\mathcal Q^{(1)}}E$, so $|F|\le2^ns$ almost everywhere there. [F2, F3, F6, algebra]

2.1 Recursion. Let $\mathcal Q^{(k)}$ be a countable pairwise disjoint family of proper dyadic subcubes of $Q$, and for each $P\in\mathcal Q^{(k)}$ put $F_P=(b-b_P)\mathbf 1_P$ and let $\mathcal Q_P$ be the family of maximal dyadic cubes $E$ with $|E|^{-1}\int_E|F_P|>s$. The argument of step 1.1, with $Q$ replaced by $P$ and $F$ by $F_P$, shows that every $E\in\mathcal Q_P$ is a proper dyadic subcube of $P$, that $\mathcal Q_P$ is countable and pairwise disjoint, that $s<|E|^{-1}\int_E|F_P|\le2^ns$ and $\sum_{E\in\mathcal Q_P}|E|\le(\|b\|_{\mathrm{BMO}}/s)|P|$, and that the good part of the decomposition of $F_P$ satisfies $|F_P|\le2^ns$ almost everywhere off $\bigcup_{E\in\mathcal Q_P}E$. Each selected $E$ has a unique stopping parent $P\in\mathcal Q^{(k)}$. Its immediate dyadic parent $R$ is contained in $P$: since $R$ and $P$ both contain $E$, [F1] makes them nested; if $P\subsetneq R$, the generations of $R$ and $E$ differ by one and $E\subsetneq P\subsetneq R$ is impossible, so $R\subseteq P$. The dyadic parent has the exact volume ratio $|R|=2^n|E|$ by [F1]. Maximality gives $|R|^{-1}\int_R|F_P|\le s$, and hence $|E|^{-1}\int_E|F_P|\le2^ns$. Thus the stopping parent is $P$, while the immediate dyadic parent $R$ need only be contained in $P$ and need not itself belong to the preceding stopping family. Define $\mathcal Q^{(k+1)}=\bigcup_{P\in\mathcal Q^{(k)}}\mathcal Q_P$; indexed by pairs it is countable by [F5], its members are pairwise disjoint because distinct cubes $P$ are disjoint and each $\mathcal Q_P$ is a pairwise disjoint family of subcubes of its $P$, and each member is a proper dyadic subcube of a unique $P\in\mathcal Q^{(k)}$, so its interior is contained in that cube. [step 1.1, F1, F2, F3, F5, algebra]

3.1 By induction on $k\ge1$, $\sum_{E\in\mathcal Q^{(k)}}|E|\le(\|b\|_{\mathrm{BMO}}/s)^k|Q|$: step 1.1 is the case $k=1$, and the ratio estimate of step 2.1 gives $\sum_{E\in\mathcal Q^{(k+1)}}|E|=\sum_{P\in\mathcal Q^{(k)}}\sum_{E\in\mathcal Q_P}|E|\le(\|b\|_{\mathrm{BMO}}/s)\sum_{P\in\mathcal Q^{(k)}}|P|$, which is the induction step. [step 1.1, step 2.1]

3.2 Fix $k\ge1$ and discard the exceptional Lebesgue-null sets of steps 1.1 and 2.1 together with the null sets of non-Lebesgue points of the countably many functions $F_P$ for $P$ of level at most $k-1$; by [F4] and [F5] the discarded set is Lebesgue-null. Let $x\in Q\setminus\bigcup_{E\in\mathcal Q^{(k)}}E$ lie outside it, and let $0\le l\le k-1$ be the largest integer such that $x$ lies in some cube $P_l$ of level $l$, where $P_0:=Q$; such an $l$ exists because $x\in Q$, and $P_l$ is unique because the families at each level are pairwise disjoint. Since $x$ lies in no cube of level $l+1$, the good-part bound of [F3] for the ambient cube $P_l$ gives $|b(x)-b_{P_l}|=|F_{P_l}(x)|\le2^ns$; moreover, because $x$ is a Lebesgue point of $F_{P_l}$, the dyadic cubes of generation $m$ containing $x$ lie in $B(x,\sqrt n\,2^{-m})$ with volume comparable to $2^{-mn}$, so their averages of $F_{P_l}$ converge to $F_{P_l}(x)$, giving $|F_{P_l}(x)|\le M_dF_{P_l}(x)\le s$ by [F2] and [F4]. For $l\ge1$, $|b_{P_l}-b_Q|\le\sum_{i=1}^{l}|b_{P_i}-b_{P_{i-1}}|$ with $|b_{P_i}-b_{P_{i-1}}|\le|P_i|^{-1}\int_{P_i}|b-b_{P_{i-1}}|=|P_i|^{-1}\int_{P_i}|F_{P_{i-1}}|\le2^ns$, because $P_i$ was selected inside the ambient cube $P_{i-1}$. Hence $|b(x)-b_Q|\le s+l2^ns\le(l+1)2^ns\le k2^ns\le2^{nk}s$, using $l+1\le k$ and $k\le2^{n(k-1)}$ for $k\ge1$, $n\ge1$. The complement of $\bigcup_{E\in\mathcal Q^{(k)}}E$ inside $Q$ therefore satisfies the asserted almost-everywhere bound, its exceptional set being a countable union of Lebesgue-null sets by [F5]. [step 1.1, step 2.1, F2, F3, F4, F5, algebra]

4.1 Steps 1.1 and 2.1 construct, for every $k\ge1$, a countable pairwise disjoint family $\mathcal Q^{(k)}$ of proper dyadic subcubes of $Q$, each with a unique stopping parent in the preceding family and with its immediate dyadic parent contained in that stopping parent, which is (i); step 3.1 is the geometric-decay estimate (ii); and step 3.2 is the level bound (iii). The construction applies the published maximal-cube and decomposition lemmas countably many times, which is exactly where Countable Choice is used, together with the countable-union facts in [F5]. [step 1.1, step 2.1, step 3.1, step 3.2] ∎
