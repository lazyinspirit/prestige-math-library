---
id: thm-qa-finite-cyclic-discrete-logarithm-correctness-success-cost
kind: theorem
title: Finite cyclic discrete-log correctness, success and costs
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-finite-cyclic-discrete-logarithm
  - thm-qa-cyclic-group-power-evaluation-correctness
  - def-qa-finite-cyclic-discrete-logarithm-problem
  - lem-qa-cyclic-dlp-annihilator-equation
  - alg-qa-finite-abelian-hidden-subgroup-sample
  - thm-qa-finite-abelian-hidden-subgroup-sample-law
  - lem-qa-totient-ratio-logarithmic-lower-bound
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - def-qc-circuit-cost-model
  - thm-qa-euclidean-modular-inverse-correctness-cost
  - lem-group-power-laws
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; all samples and all arithmetic procedures are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
---

## Statement

Let $G=\langle g\rangle$ have known exact order $q\ge2$, let $x=g^a$, and let $\delta=p/v$ be supplied as binary positive integers $p<v$. Write $K$ for the sum of their bit lengths. For an access profile of [[alg-qa-finite-cyclic-discrete-logarithm]] supplying either the direct coherent $f$ oracle or the complete supported power-evaluation fallback, every returned exponent is verified and equals the unique $a\in\{0,\ldots,q-1\}$. If neither is supplied, the procedure returns `UNSUPPORTED_ACCESS` before sampling; the following sampling, success and cost guarantees concern the supported profiles. Each independent Fourier sample succeeds with probability $\varphi(q)/q\ge1/(1+\log_2q)$. Put $L=\lceil\log_2q\rceil$, let $D$ be the least integer $d\ge0$ with $2^d\delta\ge1$, and set $t=(1+L)D$. With $t$ samples, the probability of returning the exact answer is at least $1-\delta$.

Let $w$ be the supplied group-element encoding width. A direct coherent function-oracle profile uses at most $O(L(1+\ln(1/\delta)))$ function queries and separately uses $O(L(1+\ln(1/\delta)))$ ordinary multiplication/equality operations for classical verification. If $f$ is implemented by controlled group multiplications, there are $O(L^2(1+\ln(1/\delta)))$ controlled-multiplication calls and the same order of ordinary multiplication/equality calls for verification. If the explicitly supplied reversible multiplication, equality, and both forward and inverse-constant controlled-multiplication circuits each cost at most $C_G$ gates and the supplied exact uniform preparation and product QFT cost $O(L^2)$ ideal gates, the total ideal gate count is
$$
O\!\left((L^2C_G+Lw+L^3)(1+\ln(1/\delta))\right).
$$
If one classical multiplication or equality operation on the encoding costs at most $T_G$ bit operations and modular inverses use the schoolbook extended-Euclidean algorithm, the classical bit cost of confidence preprocessing, arithmetic and verification is
$$
O\!\left(K^2+(L^2T_G+L^4)(1+\ln(1/\delta))\right).
$$
All query, gate, and classical bit bounds are conditional on the stated supplied interfaces. The exact binary QFT is counted in the ideal-gate model; no finite-set compilation cost or generic efficient group encoding is asserted.

## Facts & Assumptions

**Given:** A cyclic discrete-log instance with $q\ge2$, $x=g^a$, confidence target $\delta=p/v$ supplied as binary positive integers $p<v$ of total bit length $K$, and the exact sampling and operation interfaces specified above.

[F1] On a supported profile, the procedure performs at most $t$ independent exact finite-abelian Fourier samples until a candidate is verified, discards nonunit first coordinates, computes an inverse, verifies the candidate, and returns FAIL if none is verified ([[alg-qa-finite-cyclic-discrete-logarithm]]).

[F2] The sample law is uniform on the annihilator of the hidden subgroup ([[thm-qa-finite-abelian-hidden-subgroup-sample-law]]).

[F3] For the cyclic DLP subgroup, annihilator labels satisfy $d\equiv ac\pmod q$, and a uniform annihilator label has uniform $c\in\mathbb Z_q$ ([[lem-qa-cyclic-dlp-annihilator-equation]]).

[F4] The unit group modulo $q$ has $\varphi(q)$ residue classes; a residue is a unit exactly when its gcd with $q$ is one, and $\varphi(q)/q\ge1/(1+\log_2q)$ ([[def-unit-group-modulo-n-and-euler-totient]], [[thm-unit-criterion-modulo-n]], [[lem-qa-totient-ratio-logarithmic-lower-bound]]).

[F5] If $\gcd(c,q)=1$, [[thm-qa-euclidean-modular-inverse-correctness-cost]] returns the inverse of $c$ modulo $q$ using $O(L^3)$ bit operations.

[F6] The group operation and gate/query costs are separate coordinates, and no oracle call or controlled operation is free unless explicitly supplied ([[def-qc-circuit-cost-model]], [[def-qa-finite-cyclic-discrete-logarithm-problem]]).

[F7] The power-evaluation circuit returns $g^ux^v$ with all clean work restored; its full XOR wrapper uses $O(L)$ separately supplied forward/inverse-constant controlled multiplications and $O(w)$ additional elementary gates ([[thm-qa-cyclic-group-power-evaluation-correctness]]).

[F8] Integer powers satisfy the product and exponent laws ([[lem-group-power-laws]]).

## Proof


1.1 By [F2], each sample is uniform on $H^\perp$. The bijection in [F3] makes $c$ uniform on $\mathbb Z_q$ and forces $d\equiv ac\pmod q$. Exactly $\varphi(q)$ of the $q$ residues are units by [F4], so the probability of a unit is $\varphi(q)/q$. [F2, F3, F4]

1.2 If $c$ is a unit, [F5] supplies $c^{-1}$ modulo $q$. Then $d c^{-1}\equiv a c c^{-1}\equiv a\pmod q$. The algorithm returns only after testing $g^{\widetilde a}=x$, so every returned residue is the required exponent; rejecting a failed equality cannot produce an incorrect output. [F1, F3, F5, algebra]

2.1 Since $L\ge1$, $D\le\log_2(1/\delta)+1<2\ln(1/\delta)+1$, so $t=(1+L)D\le4L(1+\ln(1/\delta))$. Each sample calls the finite-abelian sampler once, which uses one direct $f$ query by [F1], so this bounds direct function queries. By [F7], one explicit $f$ evaluation uses $O(L)$ controlled group multiplications. Binary repeated squaring computes the verification power with at most $2L$ ordinary multiplications: square successive powers of $g$ and multiply the accumulator by each power whose exponent bit is one; [F8] proves the resulting accumulator is $g^{\widetilde a}$. The constant precomputation takes $O(L)$ further group operations once. Thus the explicit-$f$ implementation uses $O(L^2(1+\ln(1/\delta)))$ group-operation queries; with a direct $f$ oracle, step 1.2 shows that the first unit-coordinate sample verifies and terminates. Hence verification occurs at most once and needs $O(L)$ classical group multiplications, which also satisfies the stated looser $O(L(1+\ln(1/\delta)))$ bound. [given, F1, F6, F7, F8, algebra]

2.2 Put $p=\varphi(q)/q$. Extend the independent sample list to $t$ draws for this probability calculation, even when the procedure stops earlier. The probability that all $t$ independent samples have nonunit first coordinate is $(1-p)^t\le e^{-pt}$. By [F4], $p\ge(1+\log_2q)^{-1}$. Since $D\ge\log_2(1/\delta)>\ln(1/\delta)$, we have $t=(1+L)D\ge(1+\log_2q)\ln(1/\delta)$. Therefore $pt\ge\ln(1/\delta)$ and $(1-p)^t\le\delta$. Whenever at least one sample has a unit coordinate, step 1.2 returns $a$; hence success probability is at least $1-\delta$. [F1, F4, step 1.1, algebra]

3.1 In the explicit circuit profile, each sample's full XOR function evaluation and verification use $O(LC_G+w)$ gates, while the supplied uniform preparation and product QFT use $O(L^2)$ ideal gates. The modular inverse on $O(L)$-bit residues uses $O(L^3)$ bit operations by [F5], and each classical group operation uses at most $T_G$ bits. Multiplying these per-sample costs by $t=O(L(1+\ln(1/\delta)))$ gives the sampling, arithmetic and verification terms in the displayed bounds. In the direct-$f$-oracle profile, verification and inverse steps have $O(LT_G+L^3)$ bit work per sample, while one $f$ query costs one query and has no implicit gate bound. Precomputation contributes only $O(LT_G)$ additional bit operations and is absorbed because $L\ge1$ and $1+\ln(1/\delta)\ge1$. [F1, F5, F6, F7, F8, step 2.1, algebra]

4.1 To compute $D$, compare $2^d p$ with $v$ for successive $d$ until the first successful comparison. Since $p\ge1$ and $v<2^K$, $D\le K$; all tested integers have $O(K)$ bits. Binary shifts and comparisons therefore cost $O(K^2)$ in total. Computing $L$ from $q-1$ and multiplying $(1+L)D$ cost at most $O((L+K)^2)$ by schoolbook arithmetic, absorbed by $O(K^2+L^4)$ since $L\ge1$. Adding this preprocessing gives the stated classical bit bound. The access coordinates remain separate by [F6]. [given, F1, F6, step 3.1, algebra] ∎

