---
id: thm-kojman-shelah-space-weight-and-character
kind: theorem
title: Weight and character of the Kojman-Shelah scale subspace
status: draft
origin: pipeline
deps: [def-kojman-shelah-scale-subspace, lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size, lem-rudin-box-space-basic-neighborhoods-and-p-space, def-weight-density-and-character, lem-weight-is-well-defined, lem-character-is-well-defined, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, lem-ordinal-sum-as-an-order-type, lem-cofinality-is-well-defined]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kojman and Shelah, A ZFC Dowker space in aleph omega plus one, Proc. Amer. Math. Soc. 126 (1998), statement after Theorem 3, printed p. 2465; local invariant calculations supplied here"
      url: https://shelah.logic.at/files/95569/609.pdf
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 7 section 2, printed pp. 40–41, scale-subspace framework"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. For the Kojman–Shelah scale subspace $X$,

$$w(X)=\aleph_{\omega+1},\qquad \chi(X)=\aleph_\omega.$$

The character uses the raw supremum convention $\chi(X)=\sup_{x\in X}\chi(x,X)$. In fact every point has local character strictly below $\aleph_\omega$, while $d(X)=\aleph_{\omega+1}$.

## Facts & Assumptions

**Given:** $X$ and its defining normalized scale $(f_\alpha)_{\alpha<\lambda}$, where $\mu=\aleph_\omega$ and $\lambda=\mu^+=\aleph_{\omega+1}$.

[F1] Points of $X$ have uncountable coordinate cofinalities bounded strictly by one finite aleph and are eventually equal to scale terms; admissible finite modifications preserve $X$ ([[def-kojman-shelah-scale-subspace]]).

[F2] $|X|=\lambda$, and every $g\in\prod_{n\in B}\aleph_n$ is strictly below a point of $X$ at every coordinate ([[lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size]]).

[F3] Half-open boxes give the local bases in the Rudin space and hence, upon intersection, in $X$ ([[lem-rudin-box-space-basic-neighborhoods-and-p-space]]).

[F4] Sets smaller than a cofinality are bounded, and infinite cofinalities are regular cardinals ([[thm-cofinality-basics]]); a strictly increasing cofinal map with domain the cofinality exists ([[lem-cofinality-is-well-defined]], (b)).

[F5] Under AC the finite positive alephs and $\lambda$ are regular ([[thm-regularity-of-the-alephs]]).

[F6] Weight and density are least sizes of global bases and dense subsets; local character is the least size of a neighborhood base, and character is their raw supremum ([[def-weight-density-and-character]]).

[F7] The weight minimum and the local-character minima and supremum exist under AC ([[lem-weight-is-well-defined]], [[lem-character-is-well-defined]]).

[F8] Injections give cardinal inequalities ([[lem-cardinal-arithmetic-basic-laws]], (a)).

[F9] Infinite cardinal sums and nonzero products absorb smaller cardinals ([[cor-cardinal-absorption]]).

[F10] $\delta+\omega_1$ is the order type of a copy of $\delta$ followed by a copy of $\omega_1$ ([[lem-ordinal-sum-as-an-order-type]]).

[A1] AC is assumed for cofinal-map choices, local-neighborhood choices and cardinal bounds for the resulting families ([[def-axiom-of-choice]]).

## Proof

1.1 Fix $x\in X$ and a finite $m$ with $\omega<\operatorname{cf}(x(n))<\aleph_m$ for every $n\in B$, as in F1. Necessarily $m\ge2$. Partition $B$ into $B_i=\{n:\operatorname{cf}(x(n))=\aleph_i\}$, $1\le i<m$, using F4. For every $n\in B_i$ choose by F4 and A1 a strictly increasing cofinal map $e_n:\aleph_i\longrightarrow x(n)$. For each tuple $\gamma=(\gamma_i)$ with $\gamma_i<\aleph_i$ at each nonempty stratum define $b_\gamma(n)=e_n(\gamma_i)$ for $n\in B_i$. Then $b_\gamma<x$, and $V_\gamma=(b_\gamma,x]\cap X$ is an open neighborhood of $x$ by F3. Given any $g<x$, for each $n\in B_i$ take the least $\eta_n<\aleph_i$ with $g(n)<e_n(\eta_n)$; this exists because $x(n)$ is a limit and $e_n$ is cofinal. Countability of $B_i$ and uncountable regularity F5 give $\gamma_i=\sup_{n\in B_i}\eta_n<\aleph_i$ by F4. Monotonicity yields $b_\gamma(n)\ge e_n(\eta_n)>g(n)$, so $V_\gamma\subseteq(g,x]\cap X$. F3 shows the $V_\gamma$ form an actual local base. Empty strata contribute no tuple coordinate. [F1, F3, F4, F5, A1]

1.2 By F2 choose $x_0\in X$, for example a point above the zero product function. For $n\in B$ let $x_n$ agree with $x_0$ except that $x_n(n)=\aleph_n$. F5 gives cofinality $\aleph_n$ at that coordinate, and a finite aleph bound greater than both this cardinal and the old uniform bound makes $x_n$ a Rudin point. Hence F1 gives $x_n\in X$. Suppose a neighborhood base $(U_j)_{j\in J}$ at $x_n$ had size $\rho<\aleph_n$. It is nonempty, since the neighborhood $X$ must contain a base member. By F3 and A1 choose $g_j<x_n$ with $(g_j,x_n]\cap X\subseteq U_j$. F4–F5 give $\delta=\sup_{j\in J}g_j(n)<\aleph_n$. Put $\zeta=\delta+\omega_1$. F10 and F9 show $|\zeta|\le\max(|\delta|,\aleph_1)<\aleph_n$, since $n\ge2$; therefore $\zeta<\aleph_n$. The final $\omega_1$ block is cofinal, and each smaller set is bounded in it by F4–F5, so $\operatorname{cf}(\zeta)=\omega_1$. Also $\zeta>\delta$, including when $\delta=0$. Let $y$ agree with $x_n$ except for $y(n)=\zeta$. The new cofinality is $\omega_1$, so it is an admissible finite modification and belongs to $X$ by F1. It lies in every chosen box: at $n$ its value exceeds $\delta\ge g_j(n)$ and is below the top, and elsewhere it equals $x_n$. Thus $y\in U_j$ for every $j$. But the open box at $x_n$ with lower value $\zeta$ at coordinate $n$ and zero elsewhere excludes $y$. No $U_j$ is contained in it, contradicting the base property. We conclude $\chi(x_n,X)\ge\aleph_n$. [F1, F2, F3, F4, F5, F6, F9, F10, A1]

1.3 Let $D\subseteq X$ have size less than $\lambda$. Each $d\in D$ has a unique index $\alpha(d)$ with $d=^*f_{\alpha(d)}$: existence follows from F1, and two different indices would force eventual strict self-inequality on infinite $B$. By F4–F5 there is $\beta<\lambda$ above all those indices; use $\beta=0$ if $D$ is empty. Consequently every $d\in D$ satisfies $d<^*f_\beta$. By F2 choose $y\in X$ with $f_\beta<y$ pointwise. F3 makes $O=(f_\beta,y]\cap X$ open, and it is nonempty since $y\in O$. It misses $D$: if $d\in O$, it would be strictly above $f_\beta$ everywhere and strictly below it at all but finitely many coordinates, impossible on the infinite $B$. Thus no set of size below $\lambda$ is dense. The whole $X$ is dense in itself and has size $\lambda$ by F2, so $d(X)=\lambda$ by F6 and F8. [F1, F2, F3, F4, F5, F6, F8, A1]

2.1 The tuple family of step 1.1 has cardinality at most the finite product of the $\aleph_i$ for nonempty strata. At least one stratum is nonempty, since $B$ is infinite. F9 bounds this product by $\aleph_{m-1}<\mu$. By F6–F8, $\chi(x,X)<\mu$ for every $x$, whence $\chi(X)\le\mu$. Choose these local bases for all points, using A1 on the proved nonempty sets of suitable choices. Their union is a global basis: for any open $O$ and $x\in O$, a member of the base at $x$ is contained in $O$. Its size is at most $|X|\cdot\mu=\lambda\cdot\mu=\lambda$ by F2 and F9. Therefore $w(X)\le\lambda$. [step 1.1, F2, F6, F7, F8, F9, A1]

3.1 The infinite $B\subseteq\omega$ is unbounded; hence $\sup_{n\in B}\aleph_n=\mu$. Step 1.2 and the raw-supremum convention F6 give $\chi(X)\ge\mu$. Combined with step 2.1, this proves $\chi(X)=\mu$, although each local character is strictly smaller. The lower bound uses the specially constructed top-coordinate points; it does not assert a coordinate-cofinality lower bound at an arbitrary point. [step 1.2, step 2.1, F6, F7]

4.1 If a global basis had size less than $\lambda$, choose one point from each nonempty member using A1. The resulting set has size less than $\lambda$ and is dense: each nonempty open set contains a nonempty basis member and hence its chosen point. This contradicts step 1.3. Therefore $w(X)\ge\lambda$ by F6–F8. Together with step 2.1 this proves $w(X)=\lambda$, while step 3.1 gives the asserted character and step 1.3 gives the density. QED. [step 1.3, step 2.1, step 3.1, F6, F7, F8, A1]
