---
id: cex-vc-entropy-exponent-cannot-be-uniform-in-r
kind: counterexample
title: "Finite thresholds rule out an r-independent VC covering bound"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - cor-archimedean-reciprocal
  - def-covering-packing-bracketing-number-and-metric-entropy
  - def-binomial-coefficient
  - def-canonical-natural
  - def-integer-power
  - def-natural-numbers
  - def-probability-measure
  - def-rational-power
  - def-real-power
  - def-vc-class-of-sets-and-index
  - def-vc-subgraph-class-and-index
  - lem-rational-power-laws
  - thm-real-power-agrees-with-rational-exponent
  - thm-real-power-laws
  - thm-of-archimedean
  - thm-binomial-theorem
  - thm-induction-principle
  - thm-natural-logarithm-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, Theorem 8.1"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Probability Tools, Tricks, and Miracles, 2026 manuscript, Section 14.5"
      url: "http://www.stat.yale.edu/~pollard/Books/Pttm/Pttm26-06-22.pdf"
---

## Statement

For each positive integer $m$, let $N:=16^m$ be the natural number obtained by multiplying $16$ by itself $m$ times. Equip $\mathcal X_m:=\{1,\ldots,N\}$ with the uniform probability $Q_m(\{i\})=1/N$. For $k=0,\ldots,N$, define the threshold function $f_k:=\mathbf1_{\{1,\ldots,k\}}$, with $f_0\equiv0$. Put $\mathcal F_m:=\{f_0,\ldots,f_N\}$.

These are nested threshold indicators. Their VC-subgraph index is $V=2$, while for $r=m$ and $\epsilon=1/64$,

$$N(\epsilon,\mathcal F_m,L^m(Q_m))=N+1=16^m+1.$$

Thus a purported entropy bound whose right side has no dependence on $r$ is false even when the VC index is fixed.

## Facts & Assumptions

**Given:** A positive integer $m$, the finite uniform probability space, and the threshold class in the Counterexample.

[F1] A class of functions is VC-subgraph when its measurable strict subgraphs have finite VC index ([[def-vc-subgraph-class-and-index]]); for set classes, the index is one plus the VC dimension ([[def-vc-class-of-sets-and-index]]).

[F2] The $L^r(Q_m)$ distance is the $r$th-root of the integral of the absolute difference to power $r$, and covers use centers in the class ([[def-covering-packing-bracketing-number-and-metric-entropy]]).

[F3] Positive-base real powers satisfy $(a^u)^v=a^{uv}$, are defined by $a^u=\exp(u\log a)$, and agree with rational powers at rational exponents ([[def-real-power]], [[thm-real-power-laws]], [[def-rational-power]], [[lem-rational-power-laws]], [[thm-real-power-agrees-with-rational-exponent]], [[thm-natural-logarithm-laws]]).

[F4] A finite uniform law assigns mass $1/N$ to each of its $N$ points and is a probability measure by finite additivity ([[def-probability-measure]]).

[F5] The natural powers $16^m$ grow beyond every fixed real bound: $(1+15)^m\ge1+15m$ by the binomial theorem, and the Archimedean property supplies arbitrarily large $m$ ([[def-integer-power]], [[thm-binomial-theorem]], [[thm-of-archimedean]]).

## Proof

**Given:** The data in the Counterexample.

1.1 The real-power definition gives $16^1=\exp(\log16)=16$. Its exponent law gives $16^{j+1}=16^j16$ for every natural $j$, so induction identifies the real power $16^m$ with the natural product defining $N$. By [F3], $$N^{-1/m}=(16^m)^{-1/m}=16^{-1}=1/16.$$ [F3, given, algebra, induction]

1.2 The subgraphs $C_{f_k}=\{(i,t):t<f_k(i)\}$ are nested in increasing $k$. A point $(1,1/2)$ belongs to $C_{f_N}$ and not to $C_{f_0}$, so a singleton is shattered. No two-point set is shattered by a nested family, since shattering would require both opposite singleton traces, which nested sets cannot realize. Therefore the VC-subgraph dimension is exactly one and its index is $V=2$. [F1, given]

2.1 For $k\ne\ell$, the functions differ on exactly $|k-\ell|$ atoms. By [F2] and [F4], $$\|f_k-f_\ell\|_{Q_m,m}=\left(\frac{|k-\ell|}{N}\right)^{1/m}\ge N^{-1/m}=1/16.$$ [F2, F4, step 1.1, algebra]

3.1 Since $1/16>2\epsilon=1/32$, a closed $L^m(Q_m)$ ball of radius $\epsilon$ centered at a class member cannot contain two distinct class members: the triangle inequality would make their distance at most $2\epsilon$. Thus every cover needs at least $N+1$ centers; taking each member as its own center gives a cover with $N+1$. This proves the exact covering number. [F2, step 2.1, algebra]

4.1 Fix any proposed finite right side that depends only on $\epsilon$, the VC index, and constants independent of $r$. At $\epsilon=1/64$ and $V=2$ it is a fixed finite number. By [F5], choose $m$ so large that $16^m+1$ exceeds that number. Step 3.1 then contradicts the proposed bound, so this family rules out a VC covering bound whose right-hand side is independent of $r$. [F5, step 3.1] ∎
