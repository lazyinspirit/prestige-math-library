---
id: thm-john-nirenberg-exponential-inequality
kind: theorem
title: "John-Nirenberg exponential inequality"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-bmo-seminorm-and-quotient-by-constants, lem-john-nirenberg-stopping-cubes-have-geometric-decay, lem-dyadic-cubes-all-generations-partition-and-nesting, def-dyadic-cube-in-rn-all-generations, def-countable-choice]
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
      locator: "Theorem 3.15, printed p. 44"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Theorem 7.5 (take $b=e$ in (7.8)), printed pp. 29-31"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Proposition 3.5 for balls, printed pp. 12-13"
    - title: "Brooke Wilson, Math 581A Classical and Multilinear Harmonic Analysis (University of Washington, Fall 2024), lecture 18"
      url: "https://sites.math.washington.edu/~blwilson/581AFall2024/Lectures/lecture18.pdf"
      locator: "the dyadic John-Nirenberg inequality, scanned page 2"
---

## Statement

Assume Countable Choice. There are constants $c_n,C_n\in(0,\infty)$ such that
for every $b\in\mathrm{BMO}(\mathbb R^n)$, every cube $Q$ and every
$\lambda>0$,
$\bigl|\{x\in Q:|b(x)-b_Q|>\lambda\}\bigr|\le C_n|Q|\exp\bigl(-c_n\lambda/\|b\|_{\mathrm{BMO}}\bigr)$.
If $\|b\|_{\mathrm{BMO}}=0$ then $b$ is constant almost everywhere and the
left-hand side is $0$ for every $\lambda>0$, which is the interpretation used
throughout.

## Facts & Assumptions

**Given:** Countable Choice, $b\in\mathrm{BMO}(\mathbb R^n)$, a cube $Q$ and a level $\lambda>0$.

[F1] The seminorm is $\|b\|_{\mathrm{BMO}}=\sup_E|E|^{-1}\int_E|b-b_E|$ and it vanishes exactly on the almost-everywhere constants ([[def-bmo-seminorm-and-quotient-by-constants]]).

[F2] For every $s>\|b\|_{\mathrm{BMO}}$ and every all-generations dyadic cube $Q'$ there are pairwise disjoint dyadic subcubes $Q'^{(k)}_j$ such that $\sum_j|Q'^{(k)}_j|\le(\|b\|_{\mathrm{BMO}}/s)^k|Q'|$ and $|b-b_{Q'}|\le k2^ns$ almost everywhere on $Q'\setminus\bigcup_jQ'^{(k)}_j$ for every $k\ge1$ ([[lem-john-nirenberg-stopping-cubes-have-geometric-decay]]).

[F3] The all-generations dyadic cubes of [[def-dyadic-cube-in-rn-all-generations]] partition $\mathbb R^n$ at each generation, with parent and nesting as in [[lem-dyadic-cubes-all-generations-partition-and-nesting]]: every point lies in exactly one cube of each generation, and a dyadic cube of a coarser generation containing a point contains every finer dyadic cube through that point.



## Proof

**Proof technique:** direct.

1.1 If $\|b\|_{\mathrm{BMO}}=0$, then $b$ is constant almost everywhere by [F1], so $|b-b_Q|=0$ almost everywhere for every cube $Q$ and the asserted left-hand side vanishes for every $\lambda>0$; this is the interpretation required by the statement. [F1]

1.2 Covering by dyadic cubes. Let $m$ be the greatest integer with $2^{-m}\ge\ell(Q)$ and put $S:=2^{-m}$, so that $\ell(Q)\le S<2\ell(Q)$. Every coordinate interval of $Q$ has length at most $S$ and therefore meets at most two of the generation-$m$ dyadic intervals, so $Q$ is contained in the union of the $N\le2^n$ generation-$m$ dyadic cubes $Q_1,\dots,Q_N$ that meet it. Each $Q_j$ has side $S$, so $|Q|=\ell(Q)^n\le S^n=|Q_j|<2^n|Q|$. [F3, algebra]

1.3 Small levels. If $0<\lambda\le\Lambda_n\|b\|_{\mathrm{BMO}}$, then for every $\gamma>0$ one has $|\{x\in Q:|b-b_Q|>\lambda\}|\le|Q|=e^{\gamma\Lambda_n}|Q|e^{-\gamma\Lambda_n}\le e^{\gamma\Lambda_n}|Q|e^{-\gamma\lambda/\|b\|_{\mathrm{BMO}}}$, because $\lambda/\|b\|_{\mathrm{BMO}}\le\Lambda_n$. [algebra]

2.1 Comparison of the means. Fix $j$ and a point $p\in Q\cap Q_j$; both cubes lie in the cube $R_j$ centred at $p$ of side $4\sqrt n\,S$, because their diameters are $\sqrt n\,\ell(Q)\le\sqrt n\,S$ and $\sqrt n\,S$ respectively. By [F1], for cubes $E\subseteq R$ one has $|b_E-b_R|\le|E|^{-1}\int_E|b-b_R|\le(|R|/|E|)|R|^{-1}\int_R|b-b_R|\le(|R|/|E|)\|b\|_{\mathrm{BMO}}$. Since $|R_j|=(4\sqrt n)^n|Q_j|$ and $|R_j|=(4\sqrt n\,S/\ell(Q))^n|Q|<(8\sqrt n)^n|Q|$, applying this with $E=Q_j$ and with $E=Q$ gives $|b_{Q_j}-b_Q|\le2(8\sqrt n)^n\|b\|_{\mathrm{BMO}}=:B_n\|b\|_{\mathrm{BMO}}$. [step 1.2, F1, algebra]

3.1 Large levels. Suppose $\|b\|_{\mathrm{BMO}}>0$ and $\lambda>\Lambda_n\|b\|_{\mathrm{BMO}}$ with $\Lambda_n:=\max\{2B_n,2^{2n+3}\}$, and put $s:=2^{n+1}\|b\|_{\mathrm{BMO}}>\|b\|_{\mathrm{BMO}}$, $\lambda':=\lambda-B_n\|b\|_{\mathrm{BMO}}>\lambda/2$, and $k:=\lfloor\lambda'/(2^ns)\rfloor$, where $2^ns=2^{2n+1}\|b\|_{\mathrm{BMO}}$. Then $k\ge1$, $k2^ns\le\lambda'$, and $k>\lambda/(2^{2n+3}\|b\|_{\mathrm{BMO}})$ because $k>\lambda'/(2^{2n+1}\|b\|_{\mathrm{BMO}})-1>\lambda/(2^{2n+2}\|b\|_{\mathrm{BMO}})-1\ge\lambda/(2^{2n+3}\|b\|_{\mathrm{BMO}})$ as $\lambda>2^{2n+3}\|b\|_{\mathrm{BMO}}$. Apply [F2] on each dyadic cube $Q_j$ at height $s$: the level-$k$ stopping families are pairwise disjoint with $\sum_i|Q_{j,i}^{(k)}|\le(\|b\|_{\mathrm{BMO}}/s)^k|Q_j|=2^{-(n+1)k}|Q_j|$, and $|b-b_{Q_j}|\le k2^ns\le\lambda'$ almost everywhere off their union, so step 2.1 gives $|b-b_Q|\le\lambda$ there. Hence $\{x\in Q_j:|b-b_Q|>\lambda\}$ is contained in $\bigcup_iQ_{j,i}^{(k)}$ up to a Lebesgue-null set and has measure at most $2^{-(n+1)k}|Q_j|\le2^{-(n+1)k}2^n|Q|$. Summing over the $N\le2^n$ cubes of step 1.2 gives $|\{x\in Q:|b-b_Q|>\lambda\}|\le2^{2n}2^{-(n+1)k}|Q|\le2^{2n}|Q|e^{-k\ln2}\le2^{2n}|Q|e^{-\gamma\lambda/\|b\|_{\mathrm{BMO}}}$ with $\gamma:=\ln2/2^{2n+3}$. [step 1.2, step 2.1, F2, algebra]

4.1 Assembly. Take $\gamma:=\ln2/2^{2n+3}$, $B_n:=2(8\sqrt n)^n$, $\Lambda_n:=\max\{2B_n,2^{2n+3}\}$ and $C_n:=\max\{2^{2n},e^{\gamma\Lambda_n}\}$. Steps 3.1 and 1.3 give $|\{x\in Q:|b(x)-b_Q|>\lambda\}|\le C_n|Q|e^{-\gamma\lambda/\|b\|_{\mathrm{BMO}}}$ for every $\lambda>0$ when $\|b\|_{\mathrm{BMO}}>0$, covering the large levels and the small levels respectively, and step 1.1 gives the bound when $\|b\|_{\mathrm{BMO}}=0$. Both constants depend only on $n$, and the stopping construction inside [F2] is the only place Countable Choice is used. [step 1.1, step 3.1, step 1.3, F2] ∎
