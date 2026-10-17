---
id: alg-pade-denominator-solve-by-householder-qr
kind: algorithm
title: "Finite Householder QR solve for a Padé denominator with explicit statuses"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - alg-complex-scaled-householder-reflector-step
  - alg-scaled-complex-householder-and-givens-updates
  - thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts
  - def-forward-and-back-substitution-for-triangular-systems
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, A New Scaling and Squaring Algorithm for the Matrix Exponential"
      url: "https://eprints.maths.manchester.ac.uk/1217/1/paper9.pdf"
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
---

## Definition

Input exact complex matrices $M\in\mathbb C^{n\times n}$, $C\in\mathbb C^{n\times r}$, $n,r\ge1$, and a nonnegative integer candidate-operation budget $K$. Retain their exact real/imaginary values for the final audit. Rational complex inputs $M,C\in\mathbb Q(i)$ are included.

The verification/controller model is an exact real-RAM: its scalar field operations $+,-,\times,/$, zero/order comparisons, finite indices and copies act on the exact input/stored real values. Complex controller operations mean their real-component field formulas. The final audit uses the fixed row-major loops for $M\widehat X-C$, with inner products summed in increasing index order, and tests all real/imaginary components for zero. These are prescribed finite expression trees/loops, not an unprovided certification oracle. No implementation or bit-cost claim for arbitrary real encodings is made. In a rational adapter, exact rational inputs and a supplied finite format codebook give every stored real code its exact rational value; decoding is finite table lookup. When all required codes/values are supplied, the same audit is finite exact rational arithmetic (binary formats give dyadic values). Missing/invalid adapter data return `representation-inconclusive`; they are not silently assumed. The default exact real-RAM route requires no rational/dyadic decoder.

Candidate operations use
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]. Charge one budget unit BEFORE each rounded real primitive, including each component conversion and every primitive inside a called norm, reflector, complex product, subtraction or division. On exhaustion return `budget-exhausted` with any available partial candidate. Successful exact controller operations, index loops, comparisons, conjugations and copies are separate from this rounded-operation budget; their loops are finite and no total cubic or bit-cost assertion is made here. Each excluded rounded intermediate returns `range-failure` with its index and partial values. Required stored scalar constants must be admissible, or the candidate route returns `candidate-failure`.

**Instrumented kernel execution.** The calls in steps2–3 are macros, not opaque subroutine calls: expand the actual finite loops and scalar expressions of the two named Householder definitions, including the scaled real-component norm, phase-modulus norm, stored-vector squared norm, all sequential real dot operations, real-scalar component multiplication, six-real-operation complex products, additions/subtractions, divisions and square roots. Replace each requested rounded real primitive or component conversion by the following dispatcher. With counter $b$ initially zero, first test $b=K$; if equal, return `budget-exhausted` immediately without evaluating that primitive. Otherwise increase $b$ by one and execute exactly that one primitive in the source arithmetic model; propagate its first failure. No macro, norm or reflector is executed before its primitives are dispatched, and no budget count is guessed after a completed call. Keep all source loop indices, zero branches, target overwrites, success/failure labels and operation order; a zero-column marker represents the identity and skips reflector denominators and RHS arithmetic. Exact control comparisons/copies remain separate. This is a budgeted execution of the same kernels, not a replacement numerical method. A fully funded execution is identical to the source operation trace. A partial candidate includes an explicit completed-entry mask and is never presented as a complete solution matrix. The exact audit in step4 is reached only after every one of the $nr$ solution entries is successfully computed.

1. Round each real/imaginary component of $M,C$ to form stored candidates $R,D$. A failed conversion returns `range-failure` (or `budget-exhausted` before an unaffordable conversion).
2. For $k=1,\ldots,n$, call
[[alg-complex-scaled-householder-reflector-step]] with target $R_{k:n,k}$ and trailing block $R_{k:n,k+1:n}$. Retain its target overwrite and trailing update, and store $v,\widehat\tau$ and the represented factor. Propagate `breakdown`, `range-failure` and budget exhaustion. A zero-column identity branch copies the blocks. Replay this SAME stored reflector on the active RHS panel $D_{k:n,:}$ in formation order, without any target overwrite, using the separate-block kernel of
[[alg-scaled-complex-householder-and-givens-updates]]: for each RHS column $j$ compute
$$d_j=\operatorname{fl}\!\left(\sum_{i=k}^n\overline v_iD_{ij}\right),\quad p_i=\operatorname{fl}(\widehat\tau v_i),\quad z_{ij}=\operatorname{fl}(p_id_j),\quad D_{ij}\leftarrow\operatorname{fl}(D_{ij}-z_{ij}).$$
Use increasing indices, sequential dots, componentwise real-coefficient multiplication and the declared complex products; reuse $p_i$ if already stored. Identity reflectors copy $D$. Do not feed nonstored normalized reflector entries to floating operations. After the column step, if $R_{kk}=0$, return `zero-pivot`.
3. For each RHS $j$ in increasing order and each row $i=n,\ldots,1$, start $s=D_{ij}$ and for $\ell=i+1,\ldots,n$ set $s\leftarrow\operatorname{fl}(s-\operatorname{fl}(R_{i\ell}\widehat X_{\ell j}))$. This is the rounded backward recurrence of
[[def-forward-and-back-substitution-for-triangular-systems]]. To divide $s=a+ib$ by the nonzero stored pivot $R_{ii}=c+id$, use ONLY the following rounded real primitives in the displayed order:
$$t=\operatorname{fl}(\operatorname{fl}(c c)+\operatorname{fl}(d d)),\quad p=\operatorname{fl}(\operatorname{fl}(a c)+\operatorname{fl}(b d)),\quad q=\operatorname{fl}(\operatorname{fl}(b c)-\operatorname{fl}(a d)),$$
$$\widehat X_{ij}=\operatorname{fl}(p/t)+i\operatorname{fl}(q/t).$$
Reject $t\le0$ as `range-failure`; every other nonzero excluded intermediate also fails under the scalar model. This deliberately conservative routine can fail on range even for a nonzero pivot; it is not a new complex-division primitive. Other invalid candidate data return `candidate-failure`.
4. Compute $M\widehat X-C$ in the declared exact controller on the original inputs and exact stored values. If it is exactly zero, return `verified-solution` with $\widehat X$; otherwise return `candidate-unverified` with $\widehat X$ and the exact nonzero residual. Use the rational adapter only when its actual encoded-data preconditions hold.

Every candidate loop has finite dimensions and budget; every exact audit loop has a fixed finite index set. No accuracy, stability or uniqueness is inferred from the candidate generation. A verified solution need not be unique unless the caller separately knows $M$ invertible. All original rational-input/decoded-format instances remain available through the explicit adapter.
