---
id: thm-primes-contain-arbitrarily-long-arithmetic-progressions
kind: theorem
title: "The primes contain infinitely many k-term arithmetic progressions for every fixed k"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - alg-green-tao-prime-progression-transfer
  - thm-szemeredi-relative-to-a-pseudorandom-measure
  - thm-w-trick-all-residue-window-majorants
  - thm-choice-free-siegel-walfisz-from-mobius-cancellation
  - lem-positive-count-yields-nondegenerate-progression
  - lem-unwrap-w-tricked-progression-to-primes
  - thm-logarithm-slower-than-every-positive-power
  - def-unit-group-modulo-n-and-euler-totient
  - thm-euclid-infinitude-of-primes
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "Theorem 1.1 and complete proof through §§3, 9–10 and Appendix A, printed pp. 482–545"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, The Green–Tao theorem: an exposition"
      url: "https://arxiv.org/pdf/1403.2957"
      locator: "Theorem 1.1 and complete proof through §§1, 4–9, printed pp. 1–26"
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics, MIT OpenCourseWare full lecture notes"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
      locator: "Chapter 9.1, Theorem 9.1.3 and Remark 9.1.4, printed pp. 283–285; high-level proof outline only"
---
## Statement

Let $\mathbb P$ be the set of positive integers $q>1$ whose positive divisors are exactly $1$ and $q$. For every fixed integer $k\ge3$, there are infinitely many distinct pairs of positive integers $(a,d)$ with $d>0$ such that $a,a+d,\ldots,a+(k-1)d$ all belong to $\mathbb P$.

## Statement references

[Green and Tao, Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Conlon, Fox, and Zhao, Theorem 1.1](https://arxiv.org/pdf/1403.2957)

[Zhao, Chapter 9.1, Theorem 9.1.3](https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf)

## Facts & Assumptions

**Given:** Fix an integer $k\ge3$. All suppliers below are used at their displayed unqualified scopes; the displayed normalization hypothesis in [F2] will be discharged explicitly by [F3].

[F1] [[thm-szemeredi-relative-to-a-pseudorandom-measure]] gives a positive limiting normalized $k$-progression count for a global prime-indexed $k$-pseudorandom family and functions between zero and its majorant with mean at least a fixed positive density. The average includes $r=0$.

[F2] [[thm-w-trick-all-residue-window-majorants]] supplies the unqualified $k$-pseudorandom majorant on every admissible window, including the original window $I_P=[\epsilon_kP,2\epsilon_kP]\cap\mathbb Z$, where $\epsilon_k=1/[2^k(k+4)!]$, at every prescribed slow cutoff with $w\log w=o(\log\log\log P)$. For $b=1,T=1$ it dominates the prime-supported weight by the exact coefficient $c_k=1/(k2^{k+5})$. Its prime-weight mean is $|I_P|/P+o(1)$ under its explicitly displayed full von Mangoldt discrepancy estimate.

[F3] [[thm-choice-free-siegel-walfisz-from-mobius-cancellation]] supplies that displayed discrepancy estimate for every fixed logarithmic modulus range and saving, all reduced residues and all real endpoints, with full prime-power weight and no choice hypothesis.

[F4] [[lem-positive-count-yields-nondegenerate-progression]] applies to a family supported on $I_P$ at every prime, bounded pointwise by $C\log P$, and having a positive limiting normalized progression count. Its finite extraction procedure returns a nonzero-difference cyclic progression whose standard representatives form a nonconstant integer progression, in increasing or decreasing order.

[F5] [[lem-unwrap-w-tricked-progression-to-primes]] sends a positive-difference supported index progression with prime values $Wn+1$ to a prime progression of common difference multiplied by $W$.

[F6] [[thm-logarithm-slower-than-every-positive-power]] gives $\log x=o(x^\alpha)$ for every fixed $\alpha>0$.

[F7] [[def-unit-group-modulo-n-and-euler-totient]] defines $\varphi(W)$ as the number of unit residues modulo $W$, so $0<\varphi(W)\le W$.

[F8] [[thm-euclid-infinitude-of-primes]] says the primes are not finite; since every bounded set of positive integers is finite, there are arbitrarily large positive primes.

## Proof

1.1 Put $\epsilon=\epsilon_k$, $c_k=1/(k2^{k+5})$, and $\delta_k=c_k\epsilon/2\in(0,1)$. For large prime $P$, set $t=\log\log\log P$, $w(P)=\max(2,\lfloor\sqrt t\rfloor)$, and $W=\prod_{q\le w(P),\ q\text{ prime}}q$. Then $w\to\infty$, and $w\log w\le\sqrt t\log t=o(t)$ by [F6]. There are at most $w$ factors in $W$, each at most $w$, so $\log W\le w\log w=o(t)$ and $W=(\log\log P)^{o(1)}\le\log P$ eventually. In particular $w\le\log\log P$. The interval endpoints $A=\lceil\epsilon P\rceil$, $B=\lfloor2\epsilon P\rfloor$ satisfy $A\ge M_k\sqrt P$, $P-B\ge M_k\sqrt P$ and $B-A\le P/4$ eventually, where $M_k$ is the fixed constant in [F2]. Thus [F2] applies with $C_0=1$, $\rho=1/4$, $b=1$ and $T=1$ in its indexed-list notation. [given, F2, F6, algebra]

2.1 Let $\nu_P$ be the resulting explicit measure and put $g_P(n)=c_k\widetilde\Lambda_{1,W}(n)1_{I_P}(n)$. By [F2], $0\le g_P\le\nu_P$ and the measure family is $k$-pseudorandom. For every fixed pair of exponents in the additional normalization hypothesis of [F2], [F3] supplies precisely its full-weight discrepancy estimate, so that hypothesis is fulfilled without a choice premise. Therefore $\mathbb E g_P=c_k(|I_P|/P+o(1))=c_k\epsilon+o(1)\ge\delta_k$ eventually. The given-estimate mean clause is used only after its premise has been established. [F2, F3, step 1.1, algebra]

3.1 Choose one integer $P_*$ above all thresholds needed in steps 1.1 and 2.1. On every prime $P\ge P_*$ use the preceding explicit $\nu_P$ and set $F_P=g_P$; on every earlier prime set $\nu_P=F_P=1$. This defines a global family without selecting witnesses over infinitely many indices. Finite alteration preserves all asymptotic pseudorandomness conditions, and $0\le F_P\le\nu_P$, $\mathbb E F_P\ge\delta_k$ now hold at every prime. By [F1], $\Lambda_{k,P}(F_P)\ge c(k,\delta_k)-o(1)$ with $c(k,\delta_k)>0$. [F1, step 1.1, step 2.1, construct, algebra]

4.1 For the separate extraction family, set $G_P=F_P=g_P$ at $P\ge P_*$ and $G_P=0$ at earlier primes. It is supported on $I_P$ at every index and has the same positive limiting progression bound as $F_P$. By [F7] and step 1.1, for large $P$ one has $G_P(n)\le c_k\log(WP+1)\le C_k\log P$; the earlier zero functions satisfy the same bound. The explicit factorial gives $0<\epsilon<1/(8k)$. Hence every hypothesis of [F4], including its all-primes support quantifier, holds for this family. [F4, F7, step 1.1, step 3.1, algebra]

5.1 Apply [F4]. For every sufficiently large prime $P$, its finite procedure produces $k$ standard representatives in $I_P$ forming a nonconstant integer progression on which $G_P$ is positive. If its integer difference is negative, reverse the $k$ terms; the resulting index progression has a positive integer difference $d$ and the same positive weights. Since $G_P=c_k\widetilde\Lambda_{1,W}1_{I_P}$ at these indices, every $Wn+1$ is prime. [F4, step 2.1, step 4.1, algebra]

6.1 By [F5], these indices give a prime progression with first term $a\ge W\lceil\epsilon P\rceil+1\ge\epsilon P$ and positive common difference $Wd$. By [F8], primes $P$ are arbitrarily large. Thus for every integer bound $B$ there exists such a prime progression with $a>B$: choose one sufficiently large prime and use its finite extraction procedure. A finite set of pairs $(a,d)$ would have bounded first coordinates, so there are infinitely many distinct pairs. This argument requires no sequence of selected witnesses and no choice axiom, and proves the original Statement. [F5, F8, step 1.1, step 5.1, algebra] ∎

## Proof status

The full original unqualified Statement follows from the displayed relative-Szemerédi and unqualified all-residue/window interfaces. The normalization estimate is explicitly supplied by the choice-free Siegel–Walfisz theorem. The global relative family and separate supported extraction family meet their literal quantifiers, and no choice principle is assumed. The original conditional W-tricked majorant theorem retains its own stated hypotheses and is not used in this deduction.
