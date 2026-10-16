---
id: lem-qc-logspace-uniform-iterated-multiplication-tc0
kind: lemma
title: "Logspace uniform iterated multiplication threshold circuits"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - cor-prime-number-theorem
  - cor-primitive-roots-modulo-prime
  - lem-qc-logspace-uniform-iterated-addition-tc0
justified_by: []
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
    - title: "Hesse, Allender, and Barrington, Uniform Constant-Depth Threshold Circuits for Division and Iterated Multiplication"
      url: https://www.cs.rutgers.edu/~allender/papers/division.pdf
proof_strategy: direct
---

## Statement

For $m,w\ge1$, let the input be an explicit array of $m$ nonnegative $w$-bit integers, with tuple-addressed bits $x_{i,j}$ and fixed dimensions supplied to the uniformity machine. Power-of-two padding of the array dimensions is permitted, with padded entries zero. Their exact product, zero-padded to $mw$ bits, is computed by constant-depth polynomial-size circuits over AND, OR, NOT and MAJ. Circuit descriptions and gate-predecessor predicates are computable in logarithmic space in the total input length. This item does not assert DLOGTIME-uniform multiplication, and its encoding convention does not include arbitrary effectively decodable encodings.

## Facts & Assumptions

**Given:** $m,w\ge1$ and the input representation in the Statement. Put $N=mw$. A short integer has $O(\log(N+2))$ bits, and a long word has $N^{O(1)}$ bits. All prime lists and their subsets below depend only on circuit dimensions, not input values.

[F1] [[cor-prime-number-theorem]] gives $\pi(x)\sim x/\log x$, and hence $\pi(x)\ge x/(2\log x)$ for all sufficiently large $x$.

[F2] Every prime modulus admits a primitive root ([[cor-primitive-roots-modulo-prime]]), that is, a generator of its nonzero residue group.

[F3] Exact sums of explicitly listed nonnegative binary integers have constant-depth polynomial-size DLOGTIME-uniform threshold circuits under the tuple-addressed array convention ([[lem-qc-logspace-uniform-iterated-addition-tc0]]).

## Proof


1.1 A function of a fixed number of short arguments has polynomially many argument tuples. If its table is logspace-computable, realize each output bit by an OR of equality conjunctions over the tuples yielding one. This is a constant-depth polynomial-size logspace-uniform Boolean lookup circuit. Short addition, multiplication, reduction, inverses modulo a prime, and the table $(a,e,p)\mapsto a^e\bmod p$ have this property. For the power table, use repeated squaring with a constant number of short residues and a short exponent counter; short multiplication uses grade-school arithmetic in logarithmic space. Find an inverse by trying every short candidate, and test primality by trial division. Enumerate the $j$-th prime by a counter and these primality tests whenever $j$ and that prime are polynomially bounded. We may also add polynomially many polynomial-width words by [F3], whose uniformity is stronger than required here. [F3, given, construct]

2.1 For a fixed short prime $p>2$, [F2] gives a generator $g$ of the nonzero residues. Find the least such $g$ by testing all candidates and all exponents below $p-1$ with step 1.1. The tables $a\mapsto\ell(a)$, where $g^{\ell(a)}\equiv a\pmod p$ and $0\le\ell(a)<p-1$, and $(g,e,p)\mapsto g^e\bmod p$ are logspace-computable by enumeration and modular powering with a constant number of short counters. For nonzero inputs $a_1,\ldots,a_d$ with polynomially bounded $d$, their product modulo $p$ is $g^{\sum_i\ell(a_i)}\bmod p$. The exponent sum is polynomially bounded, so compute it with [F3] and use a short power lookup. If any input is zero, select zero instead. For $p=2$, the product is one exactly when all inputs are one. This gives iterated multiplication in any fixed polynomial-size residue basis in logspace-uniform constant depth. It uses only short tables and addition, without assuming binary iterated multiplication. [F2, F3, step 1.1, construct, algebra]

2.2 Convert a long word $X=\sum_j x_j2^j$ to residues by computing $x_j(2^j\bmod p)$ for each bit position and modulus, summing these short contributions with [F3], and reducing the result modulo $p$ by step 1.1. The sum is polynomially bounded in $N$, because its number of contributions and $p$ are. Each constant $2^j\bmod p$ is logspace-computable. Thus binary-to-residue conversion has the required circuit bounds; for $X$ outside the basis range, its vector represents its remainder in that range. [F3, step 1.1, construct, algebra]

2.3 Fix a basis $T=\prod_{i=1}^k p_i$ of distinct short primes. Set $C_i=T/p_i$ and $h_i=(C_i\bmod p_i)^{-1}\bmod p_i$. The binary words $T,C_i$ need not be computed: their required short residues, and then $h_i$, are generated in logspace by scanning factors and multiplying modulo $p_i$. Since $C_i h_i$ is one modulo $p_i$ and zero modulo all other basis primes, for the residue vector $(x_i)$ of $0\le X<T$ we have $$\sum_i x_i h_i C_i=X+rT,\qquad S:=\sum_i\frac{x_i h_i}{p_i}=r+\frac XT$$ for a nonnegative integer $r$. Indeed a difference divisible by each of the distinct primes is divisible by their product, while two representatives in $[0,T)$ cannot differ by a nonzero multiple of $T$. Existence of a representative for every residue vector follows by taking the remainder modulo $T$ of the displayed nonnegative sum. [step 1.1, construct, algebra]

3.1 We give a comparison circuit with controlled rounding. Let $U$ bound the primes of the fixed basis, put $L=k\lceil\log_2U\rceil$, so $T\le2^L$, and choose $t=L+\lceil\log_2k\rceil+4$. Compute $F_i=\lfloor x_i h_i2^t/p_i\rfloor$ and $$Z=\frac{\sum_i F_i+k}{2^t},\qquad S\le Z\le S+\varepsilon,\qquad \varepsilon=k2^{-t}<\frac1{4T}.$$ Because $X/T$ is a multiple of $1/T$ in $[0,1)$, $\lfloor Z\rfloor=r$, including $X=0$ and $X=T-1$. The low $t$ bits of $\sum_i F_i+k$ therefore represent a dyadic fraction $f_X$ satisfying $X/T\le f_X\le X/T+\varepsilon$. Hence $X<Y$ if and only if $f_X<f_Y$: distinct representatives differ by at least $1/T$, and equal representatives give identical residue vectors and identical fractions. All bits of $F_i$ have the required circuits. Its integer part $\lfloor x_i h_i/p_i\rfloor$ is a short lookup. For odd $p_i$, bit $j\ge1$ after the binary point of $x_i h_i/p_i$ equals $(x_i h_i2^j\bmod p_i)\bmod2$: write $x_i h_i2^j=ap_i+b$; its even left side and odd $p_i$ imply that $a,b$ have the same parity. These residues are short lookups using modular-power constants. For $p_i=2$, only the first fractional bit can be nonzero. This computes precisely the truncation defining $F_i$. Sum with [F3] and compare the $t$-bit fractions by an OR over their highest differing position, with equality required at all higher positions. That comparator is constant-depth Boolean. Thus residue comparison is logspace-uniform constant depth. The upward offset is essential to handle an exact integer $S$ correctly. [F3, step 1.1, step 2.3, construct, algebra]

3.2 Put $k=N+5$ and let $M$ be the product of the first $k$ primes, including $2$. Then $M\ge2^k>2^{N+4}$. For each output index $1\le s<N$, take $s$ disjoint blocks of $k$ consecutive primes beyond those first $k$ primes, and let $A_i$ be the product of block $i$. Every $A_i$ is odd and exceeds $M$, since each of its factors exceeds the corresponding factor of $M$. The $A_i$ are pairwise relatively prime and relatively prime to $M$. Only $O(N^2)$ primes are needed. By [F1], their numerical values are polynomially bounded in $N$ for all sufficiently large $N$; the finitely many smaller dimensions have fixed circuits. Enumeration of each block and its residues modulo any short prime is logspace-computable by scanning its factors as in step 1.1 and step 2.3. No bit of a long prime product is requested from the uniformity machine. [F1, step 1.1, step 2.3, construct, algebra]

4.1 Extend the representation of $X\in[0,T)$ to a fixed short prime $q$ not in its basis by trying every possible residue $a\in[0,q)$. In basis $Tq$, each candidate has a unique representative $X_a$. The representatives with the old residues are exactly $X+jT$, $0\le j<q$, so exactly one is below $T$. The representation of $T$ in basis $Tq$ has zero on the old primes and the fixed short product $T\bmod q$ on the new prime. Compare each candidate with it using step 3.1 and select the unique successful $a$. This computes $X\bmod q$. Extend to any polynomial-size new basis in parallel, treating its new primes independently. Removing primes just discards coordinates. No binary value of $T$ is needed. [step 1.1, step 2.3, step 3.1, construct, algebra]

5.1 Fix a squarefree divisor $B$ of the basis product $T$ and put $P=T/B$. Restrict the representation of $X\in[0,T)$ to basis $B$ to obtain $R=X\bmod B$ in $[0,B)$, and extend $R$ back to basis $T$ by step 4.1. For each $p\mid P$, compute $(X-R)B^{-1}\bmod p$, where $B\bmod p$ and its inverse are fixed short constants from step 1.1. This is the representation of $Q=\lfloor X/B\rfloor$ modulo $P$; since $0\le Q<P$, it is the canonical one. Extend it from basis $P$ to basis $T$ by step 4.1. If $P=1$, output zero; if $B=1$, return $X$. All componentwise operations are short lookups. This proves constant-depth logspace-uniform division by these fixed squarefree products without assuming general binary division. [step 1.1, step 2.3, step 4.1, construct, algebra]

6.1 Let $X\in[0,M)$ be given in basis $M$ and fix $1\le s<N$. Put $A=\prod_{i=1}^s A_i$ and $P=MA$. Extend $X$ to basis $P$ by step 4.1. Compute each fixed $A_i$ modulo each basis prime and add one componentwise. This represents $A_i+1<P$. Since $2\mid P$ and $A_i$ is odd, step 5.1 computes $H_i=(A_i+1)/2$ in basis $P$. Using step 2.1, compute $Y=X\prod_i H_i$ in that basis. There is no wraparound, since $H_i<A_i$ and $X<M$ imply $Y<P$. Divide by $A$ with step 5.1 to obtain $Q=\lfloor Y/A\rfloor$ in basis $P$. [step 1.1, step 2.1, step 4.1, step 5.1, step 3.2, construct, algebra]

7.1 We have $Y/A=(X/2^s)\prod_i(1+1/A_i)$. Since $A_i>M$ and $M>2^{N+4}>s(s+1)$, the binomial coefficients bounded by powers of $s$ give $$\prod_i(1+1/A_i)<(1+1/M)^s\le\sum_{j\ge0}(s/M)^j=1+\frac{s}{M-s}<1+\frac{s+1}{M}.$$ Consequently $0\le Y/A-X/2^s<(s+1)/2^s\le1$. Thus $Q$ is either $\lfloor X/2^s\rfloor$ or that integer plus one. Retain $Q$ unless $Q2^s>X$, in which case subtract one. The comparison in basis $P$ is valid without wraparound: $Q2^s<X+2^s<M+2^N<2M<P$. Compute the residues of $2^s$ by step 1.1, multiply componentwise, and compare by step 3.1. Subtraction by one is componentwise and occurs only when $Q\ge1$. The selected vector represents $\lfloor X/2^s\rfloor$, whose residue modulo $2$ is bit $s$ of $X$. Bit zero is already the residue of $X$ modulo $2$. Thus all $N$ bits are recovered by parallel copies of a constant-depth circuit. [step 1.1, step 3.1, step 3.2, step 6.1, construct, algebra]

8.1 Convert the $m$ input words to basis $M$ by step 2.2 and multiply their residue vectors by step 2.1. Their exact product $Z$ satisfies $0\le Z<2^{mw}=2^N<M$, including zero factors, so this is its canonical residue vector. Apply step 3.2 and step 6.1 and step 7.1 in parallel at every index $s<N$. The result is its exact binary product, with precisely $mw$ output bits and leading zeros where required. [step 2.1, step 2.2, step 3.2, step 6.1, step 7.1, construct, algebra]

9.1 Every basis length, prime value, table argument, loop index and word width above is polynomially bounded in $N$. In step 3.1, the approximant width is $O(k'\log U)$ for its polynomial-size basis length $k'$, hence polynomial as well. Each table has a fixed number of short arguments and polynomially many rows. Each conversion, comparison, extension and division uses a fixed finite number of layers of tables, Boolean gates and [F3]; their nesting in step 1.1 and step 2.1 and step 2.2 and step 2.3 and step 3.1 and step 4.1 and step 5.1 and step 3.2 and step 6.1 and step 7.1 and step 8.1 has depth independent of all dimensions and prime counts. Trials over primes, residues, table rows and output bits are parallel copies. Thus the total size is polynomial and depth constant. Label gates by their stage and a fixed number of polynomially bounded coordinates. A logspace machine enumerates the fixed prime lists, computes needed residues by repeated modular multiplication, computes power and discrete-log table bits as in step 1.1 and step 2.1, and decides local wiring using short counters. The composition depth of subcircuit descriptions is fixed, so intermediate descriptions can be recomputed using $O(\log(N+2))$ workspace. The machine never stores $M,P,A_i$ or another long product. The addition circuits from [F3] are also logspace-uniform. This proves both logarithmic-space description generation and the gate-predecessor predicate, completing the Statement. [F3, step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, step 4.1, step 5.1, step 3.2, step 6.1, step 7.1, step 8.1, construct] ∎

