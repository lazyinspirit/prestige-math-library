---
id: lem-ewald-certified-particle-mesh-evaluator-terminates
kind: lemma
title: "The certified particle-mesh Ewald evaluator terminates with finite
  outputs or an explicit status"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - alg-ewald-certified-particle-mesh-evaluator
  - alg-na-computed-fast-transforms-and-convolution
  - alg-na-certified-unit-circle-phase
  - alg-na-computed-unitary-radix-two-fft
  - alg-na-computed-fft-cyclic-and-linear-convolution
  - alg-certified-elementary-range-evaluation
  - alg-dyadic-square-root-bisection
  - def-outward-rounded-interval-and-ball-operations
  - def-dyadic-floating-point-format-and-directed-rounding
  - def-ewald-causal-cardinal-spline-window
  - def-ewald-three-dimensional-periodic-source-data
  - def-ewald-pme-cardinal-assignment-model
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-ewald-lattice-shell-gaussian-tail-controllers
  - lem-ewald-pme-spline-alias-and-dft-normalization
  - lem-ewald-pme-derivative-window-alias-bound
  - thm-ewald-total-pme-error-certificate
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Multi-Level Ewald: A hybrid multigrid / Fast Fourier Transform approach
        to the electrostatic particle-mesh problem (2011)"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3202610/"
    - title: "Markus Deserno and Christian Holm, How to mesh up Ewald sums (I): A
        theoretical and numerical comparison of various particle mesh routines
        (1998)"
      url: "https://arxiv.org/pdf/cond-mat/9807099"
dependency_level: 7
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and use the finite input data and arithmetic interface
of [[alg-ewald-certified-particle-mesh-evaluator]], with its finite positive
$B_{\mathrm{encl}}$, finite indices $J_R,J_K,J_A$, and transform controls
$\tau,e_{\min},e_{\max},p_0,p_{\max},J_{\mathrm{phase}},d_{\max}$.
Every execution terminates, either with a declared failure/inconclusive status
(including the potential-query collision status), or with finite computed
intervals and error radii labelled `certified` or
`certified-over-tolerance`. Missing or unresolved evidence cannot force an
unbounded refinement search and cannot yield an accuracy certificate.

Once Steps 1 and 6 have obtained their finite integer bounds $N_K,N_R$, the
reciprocal candidate list has at most $(2N_K+1)^3$ triples and each real-pair
candidate list has at most $(2N_R+1)^3$ triples. Each particle or query has at
most $(P+2)^3$ assignment-support tuples. There are at most four tensor
transforms, including mesh-self correction, each consisting of
$\sum_{r=1}^3 N_g/M_r$ one-dimensional calls. The optional correction uses at
most $n(P+2)^6$ support-pair terms. These finite bounds do not require the
requested tolerances to be achievable. On either valid final-output branch,
the error radii retain the guarantees of
[[thm-ewald-total-pme-error-certificate]] for the same potential, energy,
force, and optional mesh-self correction.

## Facts & Assumptions

**Given:** A finite source count $n\ge0$, a finite optional query, the input
controls and bounded enclosure programs specified by the evaluator. Countable
Choice is assumed for its Ewald error suppliers; the termination argument
uses only finite enumerations and integer induction.

[F1] [[alg-ewald-certified-particle-mesh-evaluator]]: every non-transform
validation/enclosure/comparison request is capped at $B_{\mathrm{encl}}$
counted program instructions, including control flow; failed or unresolved requests return their
specified status. Its integer boxes, support loops, tensor calls, correction
pairs, and fixed controller truncations are the displayed instructions.

[F2] [[alg-na-certified-unit-circle-phase]] tries only
$p_0,\ldots,p_{\max}$ and uses series through $J_{\mathrm{phase}}$ and two
fixed elementary expression DAGs in each attempt.
[[alg-certified-elementary-range-evaluation]] evaluates a finite DAG once in
topological order, with fixed series degree, finite domain pieces and finite
canonical trigonometric-cell lists, returning a status on an unresolved piece. Its square-root endpoints use
[[alg-dyadic-square-root-bisection]] with request $n=p$, and its arithmetic
and endpoint conversions follow
[[def-outward-rounded-interval-and-ball-operations]] and
[[def-dyadic-floating-point-format-and-directed-rounding]].

[F3] [[alg-na-computed-unitary-radix-two-fft]] decrements its nonnegative depth
cap on recursive calls and otherwise returns at the cap. The cyclic mode of
[[alg-na-computed-fft-cyclic-and-linear-convolution]] makes three such FFT
calls and finitely many pointwise operations. All rounded scalar arithmetic
has the success or range-failure behavior of
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].

[F4] [[alg-na-computed-fast-transforms-and-convolution]] has base length one,
power-of-two calls to [F3], composite calls at proper factor lengths, and a
prime branch padded to the least power of two at least $2N-1$, using only the
cyclic convolution in [F3] and the phases in [F2].

[F5] [[def-ewald-causal-cardinal-spline-window]] defines $W_P$ by a finite
sum of $P+1$ truncated-power terms. The assignment and derivative suppliers
provide the corresponding finite polynomial/one-sided derivatives and finite
alias controllers, including the separate $P=2$ branch
([[def-ewald-pme-cardinal-assignment-model]],
[[lem-ewald-pme-spline-alias-and-dft-normalization]],
[[lem-ewald-pme-derivative-window-alias-bound]]).

[F6] [[lem-ewald-lattice-shell-gaussian-tail-controllers]] defines
$U_3(\beta,M,J)$ by a sum from $M$ through $J$ and four integral-controller
terms $I_0,\ldots,I_3$, with $I_s$ depending only on $I_{s-2}$.
The finite alias remainders in [F5] are explicit formulas, not remaining
infinite-series evaluations.

[F7] [[thm-ewald-total-pme-error-certificate]] proves the potential, energy,
and force radii, for both self-correction branches, conditional on the actual
outward arithmetic enclosures. It is used here only after termination has
been proved, not to infer termination from a conditional work count.

## Proof

1.1 Each non-transform request [F1] either returns its supplied certified data or consumes at most the positive finite $B_{\mathrm{encl}}$ instruction budget and exits. Each counted instruction on finite rational data or fixed-format operands terminates, with the model's range-failure outcome when appropriate. Thus no request can perform unbounded precision refinement, wait for an undecided equality, or search until a valid radius appears. Initial validation uses finitely many particle pairs and scalar/integer conditions. It either exits with a declared status, or supplies the finite data needed by the first step. [given, F1, F3, algebra]


1.2 A phase call has at most $p_{\max}-p_0+1$ precision attempts by [F2]. At each attempt the Machin sums have $J_{\mathrm{phase}}+1$ terms and rational tails. Its elementary DAGs are finite. Topological sorting removes a node at each successful iteration or reports a cycle, so it finishes. For every finite positive-endpoint logarithm interval, only finitely many dyadic bins lie between its endpoints; arctangent uses at most seven fixed pieces. For sine/cosine the algorithm computes finite $K=\lceil2M_X/p_-\rceil+1$ when $p_->0$ and examines only $-K,\ldots,K$, otherwise returning a status. Every series has its fixed truncation degree; the exponential squaring count is the finite integer $\max(0,e_{\max}+2)$. Square-root endpoint bisection starts with integer gap $2^{p+1}$ and at each iteration replaces it by at most its ceiling half, so at most $p+1$ iterations suffice. Directed conversion of a rational endpoint searches a finite representable set using integer comparisons. All other rational endpoint arithmetic terminates, and unresolved domains or nonfinite conversions return statuses. Therefore each elementary call and each capped phase call terminates, including when its requested phase tolerance is unmet. [F2, given, algebra]


2.1 Induction on the integer $d_{\max}$ proves termination of each radix-two call: length one returns directly, depth zero at larger length returns inconclusive, and otherwise its two children have depth $d_{\max}-1$. Each finite butterfly list uses only scalar operations and the terminating phase calls of step 1.2. An inverse call adds only two finite conjugations around its forward call. Hence a radix-two call has a finite binary recursion tree, of at most $2^{d_{\max}+1}-1$ nodes. A cyclic convolution has just three such calls and a finite list of products/scalings, so it terminates too. [F2, F3, step 1.2, algebra]


2.2 In Step 1 of the evaluator, obtaining the finite bound $B_K$ either succeeds in bounded work or exits by step 1.1. Its outward endpoint has an exactly computable integer ceiling $N_K$. The box has $(2N_K+1)^3$ integer triples; each distance/cutoff decision uses a bounded request and either includes, excludes, or returns cutoff-inconclusive. Retained-mode restrictions are finite integer comparisons. Thus both the retained set and omitted-mode ledger are constructed in finite work. Their symmetry, strict mesh restrictions and injection modulo the mesh are preserved because successful comparisons certify the exact radial membership: two strictly interior signed representatives differing by a mesh multiple must coincide coordinatewise. [F1, step 1.1, algebra]


2.3 In Step 2, if an assignment-coordinate interval has width greater than one, the stated exit occurs. Otherwise its integer support endpoints are finite, and the interval from $a^- -P$ to $a^+$ has length at most $P+1$. Any interval of length at most $P+1$ contains at most $P+2$ integers, so the triple list has at most $(P+2)^3$ entries. The finite formula for $W_P$ in [F5] uses integer powers, factorials, binomial coefficients, and $P+1$ summands, all finite for the given integer $P$. Each arithmetic/enclosure request terminates by step 1.1. Reduction modulo each positive $M_r$ and accumulation keep duplicate wraps rather than starting another loop. The same proof applies to the optional query support and to the finite polynomial derivatives. If a $P=2$ selected right-hand box cannot be certified within its budget, the explicit arithmetic-inconclusive branch returns; an exact knot certificate selects the same one-sided derivative in both correction factors. [F1, F5, step 1.1, algebra]


2.4 In Step 6 the bounded request for $B_R$ either exits or gives a finite ceiling $N_R$. For each needed pair the box has $(2N_R+1)^3$ candidates. There are at most $n$ query/source pairs and $n^2$ particle pairs for each of the energy and force sums. For a true retained image, $|t_a-t_b|\le\sqrt3$ gives $|\ell|\le\|A^{-1}\|_2R+\sqrt3\le B_R$, so the box misses none. Each candidate uses a bounded include/exclude/cutoff-inconclusive test. The own zero-image term is omitted before singular kernel evaluation; every other kernel division requires a certified positive distance bound or exits. Its elementary values and finite derivative arithmetic use step 1.1. The real potential, energy, force and ordinary Ewald self constant thus finish, without differentiating the cutoff indicator. [F1, step 1.1, algebra]


3.1 For arbitrary transform length $N$, trial division can examine $2,\ldots,N-1$ and thus terminates. A composite non-power-of-two branch has factors $1<r,s<N$, makes $r$ length-$s$ calls and $s$ length-$r$ calls, and a finite twiddle list. Strong induction on $N$ proves these calls terminate, with length one the base case. A power of two uses step 2.1. At a prime, start at one and double until the padding length is at least $2N-1$. This search is finite since $2^j\ge j+1$ by integer induction, and its least resulting power $M$ satisfies $M<4N$. There are finitely many chirp phases, one cyclic convolution of length $M$, and finitely many final products; steps 1.2 and 2.1 finish them. Thus all transform calls terminate with their actual supplied caps; no sufficient-depth or phase-success assumption is needed. [F4, step 1.2, step 2.1, algebra]


3.2 Step 7's floor requests terminate or return cutoff-inconclusive. With determined floors, [F6] constructs the real controller using $J_R-M_R+1$ summands and the reciprocal controller using $J_K-M_K+1$ summands, plus four $I_s$ terms apiece. The $I_s$ recurrence reduces $s$ by two and stops at zero or one; no search for larger $J_R,J_K$ is performed. For each of finitely many retained modes, each one-dimensional source/derivative alias sum through $1\le|j|\le J_A$ has $2J_A$ terms, followed by the explicit p-series remainder. Their tensor products need no infinite summation; even a direct finite triple list would have at most $(2J_A+1)^3$ entries. For $P=2$, [F5] instead supplies the finite derivative-window bound. The omitted ledger is finite by step 2.2. All controller elementary values, arithmetic radii and final sums are bounded requests under step 1.1. This proves finite construction or an explicit arithmetic-inconclusive exit. [F1, F5, F6, step 1.1, step 2.2, algebra]


4.1 The full grid has finite size $N_g=M_1M_2M_3$. Each tensor transform has exactly $N_g/M_r$ coordinate fibers in direction $r$; every one-dimensional call terminates by step 3.1. Step 3 uses one tensor transform; Step 5 uses at most one potential transform, one force transform, and one optional kernel transform. Thus there are at most four tensor transforms, with finitely many normalizations. Failed calls/scales return transform-inconclusive; bounded denominator certification in Step 4 returns denominator-inconclusive before an unsafe division. Retained-mode and grid array construction are finite. All gathers visit the finite supports from step 2.3, and self correction visits at most $(P+2)^6$ ordered tuple pairs per particle. These polynomial products, derivatives and finite sums therefore terminate while retaining the same energy, force, and diagonal correction formulas. [F1, F4, F5, step 1.1, step 3.1, step 2.2, step 2.3, algebra]


5.1 Finally there are finitely many requested output radii and tolerance comparisons. Each is bounded by [F1]; proven satisfaction gives certified, proven excess gives certified-over-tolerance, and an unresolved decision returns arithmetic-inconclusive. Steps 1.1–3.2 prove that every preceding branch or subcall finishes; their finite concatenation therefore terminates with the stated record. Divisor, branch and enclosure checks prevent undefined successful outputs. On a valid final-output branch the unchanged arithmetic-enclosure assumptions and finite formulas meet [F7], so its potential, energy, force and optional self-correction error guarantees apply. No work-count premise was used to infer termination. [F1, F7, step 1.1, step 1.2, step 2.1, step 3.1, step 2.2, step 2.3, step 4.1, step 2.4, step 3.2, algebra] ∎

