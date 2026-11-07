---
id: lem-menon-typical-set-complement-estimate
kind: lemma
title: Menon typical-set complement estimate with real interval endpoints
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
proof_strategy: direct
axiom_use: Countable Choice is retained for the repository Lebesgue-measure construction; all subsequent sums and partitions are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-selberg-sieve-for-one-or-two-forbidden-residues
  - lem-short-interval-prime-sum-calculus
  - def-short-interval-mean-square-average
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
sources:
  references:
    - title: Siddarth Menon, Improved bounds for multiplicative functions in almost all short intervals
      url: https://arxiv.org/pdf/2607.15574v1
      locator: Definition 2.12 and Proposition 2.13, printed pp. 11–12; Section 5, deduction of Theorem 1.4, pp. 47–48. Local quantitative adaptation using a small-prime Selberg supplier.
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), and use Lebesgue integration on real intervals. Let $X\ge h\ge10$, let $J\ge1$ be an integer, and let real prime-range endpoints satisfy
$$3\le P_j<Q_j\le(2X)^{1/1000}\quad(1\le j\le J).$$
Define the prime-factor criterion on all positive integers by
$$S^*=\{n\ge1:\text{for each }1\le j\le J\text{ some prime }p\in[P_j,Q_j]\text{ divides }n\}.$$
For arbitrary complex numbers $b_n$ with $|b_n|\le1$, define
$$E_S(b)=\frac1{hX}\int_0^X\left|\sum_{\substack{n\ge1\\x\le n\le x+h\\n\notin S^*}}b_n\right|\,dx.$$
There is an absolute constant $C$ such that
$$E_S(b)\le \frac{\#\{1\le n\le X+h:n\notin S^*\}}X \le C\sum_{j=1}^J\frac{\log P_j}{\log Q_j}.$$
In particular, if
$$P_j=\exp\big(j^{4j}(\log Q_1)^{j-1}\log P_1\big),\qquad Q_j=\exp\big(j^{4j+2}(\log Q_1)^j\big),$$
then $E_S(b)\ll\log P_1/\log Q_1$, independently of $J$.

For the following specialization fix an absolute constant $K\ge1$ (Menon's choice is $K=10^{10}$). Put
$$X_0=\sqrt X,\quad h_0=\exp\left(\frac{\log X_0}{\log\log X_0}\right),\quad W=(\log h)^5,\quad P_1=W^K,\quad Q_1=\frac{\min(h,h_0)}{W^3}.$$
For all sufficiently large $X$ and $h$ (thresholds depending only on $K$), one has $3\le P_1<Q_1\le h_0\le(2X)^{1/1000}$. Let $J$ be the largest index with $Q_J\le h_0$, using the displayed prime ranges. Then
$$E_S(b)\ll_K\frac{\log\log h}{\log h}+\frac{(\log\log X)^2}{\log X}.$$
The implied constant is absolute when $K=10^{10}$ is fixed. In the omitted bounded-$h$ or bounded-$X$ ranges the same upper bound holds for every set $S^*$ by the trivial bound $E_S(b)\le2$ with an enlarged constant; no inadmissible prime ranges are defined there.

## Facts & Assumptions

**Given:** The real parameters, finite prime ranges, criterion $S^*$ and 1-bounded coefficients in the Statement. Countable Choice is assumed as in the Statement. All logarithms are natural.

[F1] For any selected primes $3\le p\le L^{1/1000}$ and one forbidden residue at each, the number of integers in a real interval of length $L\ge2$ avoiding those residues is at most $CL\prod_p(1-1/p)$, with absolute $C$. [[lem-selberg-sieve-for-one-or-two-forbidden-residues]]

[F2] For $v\ge u\ge3$, $\sum_{u<p\le v}1/p=\log(\log v/\log u)+O(1/\log u)$, uniformly with an absolute constant. [[lem-short-interval-prime-sum-calculus]]

[F3] Under Countable Choice, bounded intervals are Lebesgue measurable with measure equal to length and singleton measure zero, with the same interval integration convention as [[def-short-interval-mean-square-average]]. On disjoint measurable cells the integral of a nonnegative simple function is the sum of its values times cell measures ([[def-integral-of-a-nonnegative-simple-function]]); this equals its nonnegative Lebesgue integral ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

## Proof

1.1 Put $B=\{n\in\mathbb Z_{>0}:n\le X+h,\ n\notin S^*\}$. At every real $x\in[0,X]$, the triangle inequality bounds the integrand by $\sum_{n\in B}\mathbf1_{[n-h,n]}(x)$. Partition $[0,X]$ at its endpoints and the finitely many points $n-h,n$ into open interval cells and singleton cells. Both the integrand and its majorant are nonnegative simple functions constant on these cells. Applying [F3] cell by cell preserves their inequality; expanding the resulting finite double sum gives for the majorant the exact expression $\sum_{n\in B}\ell_n$, where $\ell_n=\max(0,\min(X,n)-\max(0,n-h))\le h$. Consequently $E_S(b)\le\#B/X$. This proves the first inequality with literal closed endpoints and real $X,h$, without invoking an infinite-sum interchange. [given, F3, algebra]

1.2 For each $j$ let $B_j$ be the positive integers at most $2X$ with no prime divisor in $[P_j,Q_j]$. Apply [F1] to $I=(0,2X]$, length $L=2X$, selected primes in $[P_j,Q_j]$, and forbidden residue zero. It gives $\#B_j\ll X\prod_{P_j\le p\le Q_j}(1-1/p)$. Since $P_j\ge3$, deleting the possible lower-end prime only increases this product. The inequality $\log(1-u)\le-u$ and [F2] therefore give $\prod_{P_j\le p\le Q_j}(1-1/p)\le\exp(-\sum_{P_j<p\le Q_j}1/p)\ll\log P_j/\log Q_j$. The constant is uniform, including prime-free ranges. [given, F1, F2, algebra]

2.1 Because $X+h\le2X$, failure of the criterion puts every member of $B$ in some $B_j$. The union bound and steps 1.1–1.2 prove the second inequality. For the displayed ranges, direct division gives $\log P_j/\log Q_j=j^{-2}\log P_1/\log Q_1$. Finally $\sum_{j=1}^Jj^{-2}\le1+\int_1^\infty t^{-2}dt=2$, proving the bound independent of $J$. [step 1.1, step 1.2, given, algebra]

3.1 To check the specialization, put $L=\log X$, $t=\log h$, and $u=L/(2\log(L/2))=\log h_0$. For sufficiently large $X$, $u\le L/1000$ and $u\ge(10K+30)\log L$. Fix a sufficiently large constant $T_K$ so that $t>(10K+30)\log t$ whenever $t\ge T_K$. If $t\le u$, then $\log Q_1=t-15\log t>5K\log t=\log P_1$ and $\log Q_1\ge t/2$. If $t>u$, then $t\le L$ and $\log Q_1=u-15\log t\ge u-15\log L\ge u/2$, while $u>(5K+15)\log L$ ensures $\log Q_1>5K\log t$. Thus $P_1<Q_1\le h_0\le X^{1/1000}\le(2X)^{1/1000}$; also $P_1\ge3$. The sequence $Q_j$ strictly increases to infinity, and $Q_1\le h_0$, so its largest admissible index $J$ exists and is finite. The identity in step 2.1 shows $P_j<Q_j$ for all these indices, and the formula for $P_j$ shows $P_j\ge P_1\ge3$. All hypotheses of step 2.1 hold. [given, step 2.1, algebra]

4.1 The same inequalities give $\log P_1/\log Q_1\le10K\log t/\min(t,u)$. When $t\le u$ this is $10K\log\log h/\log h$. When $t>u$ it is at most $10K\log L/u\le20K(\log L)^2/L$. Substitution into step 2.1 proves the claimed two-error bound. To cover the omitted ranges, step 1.1 gives $E_S(b)\le\lfloor X+h\rfloor/X\le2$ for any set. On $\log 10\le t\le T_K$, $\log t/t$ has a positive minimum. On $\log 10\le L\le L_K$, for any fixed large threshold $L_K$, $(\log L)^2/L$ has a positive minimum. Enlarging the constant covers the union of the bounded ranges, completing the proof. [given, step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

The criterion may equivalently be truncated at any real cutoff at least $X+h$; the complement bound is unchanged. Truncating it at $X$ generally invalidates this argument. The source's Section 5 cutoff wording must therefore be reconciled when assembling the parent proof. This lemma supplies neither the restricted exponential-sum estimate nor its analytic major-arc or minor-arc inputs. For application take $b_n=\lambda(n)e(\alpha n)$, whose modulus is one; the bound is uniform in $\alpha$ and needs no multiplicativity. This is a proposed local prerequisite, without independent proof review or registration.
