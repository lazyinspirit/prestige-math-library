---
id: lem-qc-countable-compact-null-union
kind: lemma
title: Countable Union of Compact Null Sets Is Null
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-null-and-content-zero-in-rn
  - thm-heine-borel-rn
  - def-multidimensional-rectangle-and-volume
  - thm-rationals-countable
  - thm-n-cross-n-countable
  - thm-well-ordering-principle
  - def-finite-sum
  - def-series
  - lem-finite-sum-laws
  - thm-nonnegative-series-bounded-partial-sums
  - thm-recursion
  - def-nat-addition
  - def-nat-order
  - thm-nat-linear-order
  - lem-rat-embeds-dense
  - def-integer-power
  - thm-binomial-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Jiří Lebl, Basic Analysis II, Section 10.3, Outer Measure and Null Sets
      url: https://www.jirka.org/ra/html/sec_outermeasure.html
---

## Statement

Let $m\ge1$ and let $(K_i)_{i\ge0}$ be a sequence of compact null subsets of $\mathbb R^m$, where nullity is in the closed-cube-cover sense of [[def-null-and-content-zero-in-rn]]. Then $\bigcup_{i\ge0}K_i$ is null. The proof selects finite rational-cube covers by their least codes and uses no choice principle.

## Facts & Assumptions

**Given:** An integer $m\ge1$ and a sequence $(K_i)_{i\ge0}$ of compact null subsets of $\mathbb R^m$.

[F1] A null set has a countable closed-cube cover of arbitrarily small total volume; nullity passes to subsets ([[def-null-and-content-zero-in-rn]]).

[F2] A compact subset of Euclidean space has a finite subcover from every open cover ([[thm-heine-borel-rn]]).

[F3] The rationals admit a fixed enumeration and $\mathbb N^2$ has a fixed pairing enumeration ([[thm-rationals-countable]], [[thm-n-cross-n-countable]]).

[F4] Between any two distinct real numbers there is a rational number ([[lem-rat-embeds-dense]]).

[F5] A closed cube of side $\ell\ge0$ has volume $\ell^m$ ([[def-multidimensional-rectangle-and-volume]]).

[F6] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[F7] A series of nonnegative reals whose partial sums are bounded by $B$ converges with sum at most $B$ ([[thm-nonnegative-series-bounded-partial-sums]]).

[F8] Recursion defines the cumulative block lengths from $N_0=0$, $N_{i+1}=N_i+t_i$; natural order is linear and $N_i\le N_{i+1}$ because $t_i\ge0$ ([[thm-recursion]], [[def-nat-addition]], [[def-nat-order]], [[thm-nat-linear-order]]).

[F9] The finite-sum recursion is $\sum_{j<N+1}a_j=\sum_{j<N}a_j+a_N$; equivalently, an inclusive sum $S_r=\sum_{j=0}^{r}a_j$ satisfies $S_{r+1}=S_r+a_{r+1}$ ([[def-finite-sum]]).

[F10] Finite sums are additive and monotone; termwise inequalities between nonnegative sequences give the same inequality for each finite partial sum ([[lem-finite-sum-laws]]).

[F11] For reals $x,y$ and natural $m$, $(x+y)^m=\sum_{r=0}^{m}\iota\binom mr x^r y^{m-r}$ where $\iota$ is the canonical embedding of naturals into $\mathbb R$ ([[thm-binomial-theorem]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 Let $K\subseteq\mathbb R^m$ be compact and null, and let $\eta>0$. If $K=\varnothing$, the empty family covers it. Otherwise [F1] gives a countable closed-cube cover $(C_j)$ with total volume at most $\eta/8$. Write $C_j=\prod_{r<m}[a_{jr},a_{jr}+\ell_j]$ and let $x_{jr}=a_{jr}+\ell_j/2$ be its center coordinates. Set $\delta_j=\min\{1,\eta2^{-j-5}/(3^m(1+\ell_j)^{m-1})\}$ and let $C'_j=\prod_{r<m}(x_{jr}-(\ell_j+2\delta_j)/2,x_{jr}+(\ell_j+2\delta_j)/2)$, an open concentric enlargement. By [F11], $(\ell_j+2\delta_j)^m-\ell_j^m=\sum_{r=1}^{m}\iota\binom mr\ell_j^{m-r}(2\delta_j)^r\le\delta_j(1+\ell_j)^{m-1}\sum_{r=1}^{m}\iota\binom mr2^r<3^m\delta_j(1+\ell_j)^{m-1}\le\eta2^{-j-5}$, because $\delta_j^r\le\delta_j$, $\ell_j^{m-r}\le(1+\ell_j)^{m-1}$ and $\sum_{r=1}^m\iota\binom mr2^r=3^m-1$. Define the covering cost of an open cube of side $s$ to be $s^m$; this agrees with [F5] for its closed counterpart. Put $d_j=\eta2^{-j-5}$ and $b_j=(\ell_j+2\delta_j)^m=\ell_j^m+\Delta_j$, where $0\le\Delta_j\le d_j$. For every $N\ge0$, induction using [F9] gives $\sum_{j<N}d_j=\eta(1-2^{-N})/16\le\eta/16$: the formula is $0$ at $N=0$, and the successor step adds $\eta2^{-N-5}$. By [F7], the original nonnegative volume series has every partial sum at most $\eta/8$. Finite-sum additivity and monotonicity [F10] therefore give $\sum_{j<N}b_j\le\eta/8+\sum_{j<N}d_j\le3\eta/16$ for every $N$. Since $b_j\ge0$, [F7] gives a convergent total covering-cost series with sum at most $3\eta/16<\eta/4$. The open cubes cover $K$, and compactness [F2] gives a finite subcover. [F1, F2, F5, F7, F9, F10, F11, given, construct, algebra, induction]

2.1 Order the finite subcover by its original indices and write $L_r$ and $x_r$ for the side and center of its $r$th open cube. Its finite total cost is at most the partial sum of $(b_j)$ through its largest original index, hence at most $3\eta/16<\eta/4$ by [F7, F10, step 1.1]. The finite polynomial sum $\sum_r(L_r+\zeta)^m$ is continuous at $\zeta=0$, so choose $\zeta>0$ for which it is less than $\sum_rL_r^m+\eta/8<3\eta/8$. By [F4], choose rational $q_r$ with $L_r<q_r<L_r+\zeta$ and a rational center $y_r\in\mathbb Q^m$ whose coordinates differ from $x_r$ by less than $(q_r-L_r)/4$. The closed rational cube of side $q_r$ centered at $y_r$ contains the open cube of side $L_r$ centered at $x_r$, since each coordinate displacement is less than $L_r/2+(q_r-L_r)/4<q_r/2$. These finitely many rational cubes cover $K$, and their total volume is less than $3\eta/8<\eta/2$ by [F5]. [F4, F5, F7, F10, step 1.1, choose, algebra]

3.1 Fix a bijection $\nu:\mathbb N\to\mathbb Q$ and a pairing bijection $\pi:\mathbb N^2\to\mathbb N$ from [F3]. A list of $t$ rational cubes is determined by $(m+1)t$ rationals: its side and its $m$ center coordinates for each cube. Encode a tuple $(a_0,\ldots,a_{r-1})\in\mathbb N^r$ recursively by $c_0=0$ and $c_{r+1}(a_0,\ldots,a_r)=\pi(a_0,c_r(a_1,\ldots,a_r))$. Since $\pi$ and $\nu$ are injective, pairing the list length $t$ with the code of its $(m+1)t$ rational coordinates gives an injection from all finite rational cube lists into $\mathbb N$. For each natural code, use its unique list preimage if it has one, and otherwise use the empty list; this defines an enumeration $(\mathcal C_s)_{s\ge0}$ that includes every list. By step 2.1, every compact null $K$ has at least one enumerated list covering it with total volume less than $\eta/2$. The set of qualifying codes is nonempty, so it has a least member by [F6]. The least-code rule assigns a unique cover to each pair $(K,\eta)$ without choosing from an arbitrary family. [F3, F6, step 2.1, given, construct]

4.1 Fix $\varepsilon>0$. For each $i\ge0$, apply the unique rule of step 3.1 to $(K_i,\eta_i)$ with $\eta_i=\varepsilon2^{-i-1}$. Let $t_i$ be the finite length of its selected list, whose total volume is less than $\varepsilon2^{-i-2}$. Define $N_0=0$ and $N_{i+1}=N_i+t_i$ recursively as in [F8]. For each $n\in\mathbb N$, if $N_i\le n<N_{i+1}$ for some $i$, take the cube at position $n-N_i$ in the $i$th list; otherwise take the degenerate zero-side cube at the origin. The half-open index intervals are disjoint: if $i<j$, then $N_{i+1}\le N_j$, so no $n$ lies in both. Each cube of the $i$th list, at position $j<t_i$, occurs at index $N_i+j$; thus every selected list occurs in the sequence. [F5, F6, F8, step 3.1, given, construct, algebra]

5.1 Any finite initial segment meets only finitely many blocks. If it meets none, its total volume is zero. Otherwise, its finite set of block indices has a largest member $r$: scan the finite list and retain the larger at each comparison using the linear order in [F8]. Each partial block costs at most its full-list bound from step 4.1. By [F9], the budget sum $B_r=\sum_{i=0}^{r}\varepsilon2^{-i-2}$ satisfies $B_0=\varepsilon/4=\frac{\varepsilon}{2}(1-2^{-1})$ and $B_{r+1}=B_r+\varepsilon2^{-r-3}=\frac{\varepsilon}{2}(1-2^{-r-1})+\varepsilon2^{-r-3}=\frac{\varepsilon}{2}(1-2^{-r-2})$. So induction gives $B_r=\frac{\varepsilon}{2}(1-2^{-r-1})<\varepsilon/2$. Thus every partial sum of the nonnegative volume series is at most $\varepsilon/2$, and [F7] gives convergence with total at most $\varepsilon/2<\varepsilon$. The sequence covers $\bigcup_iK_i$, so [F1] shows that this union is null. Since every selected list is assigned by the unique least-code rule of step 3.1, the proof uses no choice principle. [F1, F7, F8, F9, step 3.1, step 4.1, algebra, induction] ∎
