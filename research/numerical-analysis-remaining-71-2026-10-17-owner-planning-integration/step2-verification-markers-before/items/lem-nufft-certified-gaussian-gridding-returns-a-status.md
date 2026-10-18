---
id: lem-nufft-certified-gaussian-gridding-returns-a-status
kind: lemma
title: Certified Gaussian gridding terminates with a defined status
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms
deps:
  - alg-nufft-certified-gaussian-gridding-type1-type2
  - def-nufft-transform-types-and-mode-conventions
  - def-nufft-finite-array-norms
  - alg-certified-elementary-range-evaluation
  - alg-na-computed-unitary-radix-two-fft
  - alg-na-certified-unit-circle-phase
  - alg-dyadic-square-root-bisection
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
  - thm-na-computed-unitary-radix-two-fft-error-bound
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Leslie Greengard and June-Yub Lee, Accelerating the Nonuniform Fast Fourier Transform
      url: https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf
      locator: Gaussian gridding context; the finite-status property of the specified local certified procedure is proved here.
dependency_level: 5
---

## Statement

For finite exact dyadic data and finite encoded controls, the procedure
[[alg-nufft-certified-gaussian-gridding-type1-type2]] terminates with a defined
status. Malformed global controls or structurally invalid candidates return
`invalid-input` as specified. On admissible controls, the empty-source branch
returns its exact zero or empty output; otherwise the procedure returns the
first candidate whose complete finite outward bound meets the exact positive
requested tolerance with status `certified`, or returns `inconclusive` with
the first recorded non-success reason in candidate order after the finite
list is exhausted. This includes `requested-tolerance-not-met` when all
candidates have finite valid bounds exceeding the requested tolerance.

Every performed interval division has its prescribed nonzero divisor guard,
FFT inputs and twiddle certificates pass the declared checks before use, and
every returned finite interval contains the exact value of its evaluated
DAG. A candidate with a range failure or unresolved interval, denominator, phase, FFT,
radius or tolerance check is not itself returned as certified; a later candidate
may still succeed. These are termination
and well-defined-status assertions for the specified procedure; its complete
transform-error estimates are separate mathematical claims.

## Facts & Assumptions

**Given:** Finite exact dyadic type-1 or type-2 data, a finite nonempty candidate list satisfying the displayed integer/rational hypotheses, the selected operationwise model and its valid unit-roundoff bound $u$, positive requested tolerance $\varepsilon_{\rm req}$, phase controls $\delta_\phi,p_{\phi,0},p_{\phi,\max},d_{\rm FFT},\epsilon_{\rm tw}$, common range truncation index $J$, and the interval and FFT routines named in the Definition.

[F1] [[def-nufft-transform-types-and-mode-conventions]]: the source, mode and output lists are finite, and the type-1/type-2 formulas use the stated mode set.

[F2] [[alg-certified-elementary-range-evaluation]]: each elementary range call uses a finite truncation index $N$ and format, and returns either a finite enclosure or a named failure status; the Definition fixes these to $N=J$ and $(p,e_{\min},e_{\max})$.

[F3] [[alg-na-computed-unitary-radix-two-fft]] and [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each FFT call requires input coordinates in its selected model's representable set, uses a positive phase tolerance, finite phase-precision range and recursion cap, and returns a certificate for every used twiddle or a failure status; $u$ is a valid bound for that same model instance.

[F4] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite interval operation encloses its exact range; invalid or unbounded operations return a non-finite status.

[F5] [[def-nufft-finite-array-norms]]: the finite $\ell_2$ norms used for grid and mode error radii are defined by finite sums, with value zero on an empty array.

[F6] [[thm-na-computed-unitary-radix-two-fft-error-bound]]: a successful unitary FFT with the selected model's $u\le1/16$ and all used twiddle certificates at most $\epsilon_{\rm tw}\le1/4$ has Euclidean error factor $(1+10u+\epsilon_{\rm tw})^q-1$ at length $2^q$, in either direction. The type-1 radius construction uses the actual center-grid bound $U$ and these checked factors; its scaling by $P^{-1/2}$ and positive mode divisions are included explicitly.

## Proof

1.1 The elementary evaluator in [F2] visits a finite typed DAG in topological order. Its series have the fixed finite index $J$; its exponential scaling uses a finite integer number of squarings; logarithm bins are a finite integer range determined by positive finite endpoints; and trigonometric reduction examines a finite cell list determined by finite endpoints and a positive certified pi lower bound, returning a named failure if that bound or a branch is unresolved. Square-root endpoint bisection starts with finite integer indices and strictly decreases their positive gap until it is at most one ([[alg-dyadic-square-root-bisection]]). Thus these child calls terminate. The phase routine examines only the integer precisions from $p_{\phi,0}$ to $p_{\phi,\max}$ and calls those finite evaluators ([[alg-na-certified-unit-circle-phase]]). Each FFT recursion either returns at length one, returns when its depth cap is zero, or makes two calls with the cap reduced by one and a finite twiddle loop. Induction on the finite depth cap therefore proves termination of every forward call; inverse mode adds only finite conjugations. A failed child call propagates its named status. Consequently no child in [F2]–[F3] is an unbounded evaluation oracle. [given, F2, F3, F4, induction, algebra]


1.2 Every loop in a candidate is finite: the dimension, source and mode lists, grid-cell lists, image ranges $[-L_r,L_r]$, expression DAGs, range truncation index $J$, phase precision interval $[p_{\phi,0},p_{\phi,\max}]$, and recursion cap $d_{\rm FFT}$ are finite by [F1]–[F3], while every FFT length is a finite power of two by [F3]. The finite norm sums used in the radius construction are defined by [F5]. Thus a candidate either returns a result or reaches one of its explicitly named failure branches after finitely many operations. [given, F1, F2, F3, F5, algebra]


1.3 Every division in step 1 is preceded by the denominator, $s_r<1$, and $d_{\min}^->0$ checks; every type-1 or type-2 mode division is preceded by its own positive-lower-endpoint test in steps 3–4. Hence all performed divisions have divisor intervals excluding zero. The FFT is called only on inputs in its model's representable set; its statuses are checked and no FFT output is used unless every returned twiddle certificate is at most $\epsilon_{\rm tw}$. The type-1 FFT-error radius uses the same checked call bounds [F6]; its normalization divisor is checked to have a strictly positive enclosure before division, and its finite upward radius sum is checked for overflow. A failed interval, range, FFT, denominator, mode-positivity, radius or twiddle check rejects the candidate. Sound containment of every returned finite interval follows from [F2] and [F4]. [given, F2, F3, F4, F6, algebra]


2.1 The ordered candidate list is finite, and processing terminates for each candidate by step 1.2. The procedure returns the first successful candidate whose outward absolute-error bound meets $\varepsilon_{\rm req}$; if none does so, it returns inconclusive with the first recorded non-success reason, including `requested-tolerance-not-met` when all computed bounds exceed tolerance. Therefore every certified return has passed its finite checks, and the inconclusive branch returns no approximation certified to the requested tolerance. [given, F1, step 1.2, step 1.3, algebra] ∎

