---
id: thm-qa-23-qsp-synthesis-correctness
kind: theorem
title: Correctness of QSP phase synthesis
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - lem-qa-23-exact-interval-boundedness-decision
  - thm-qa-23-bounded-height-root-arithmetic-cost
  - lem-qa-23-qsp-completion-peel-arithmetic-cost
  - alg-qa-23-qsp-phase-synthesis
  - def-qa-23-qsp-signal-sequence
  - def-qa-23-qsp-admissible-polynomial-pair
  - thm-qa-23-qsp-phase-factorization
  - thm-qa-23-real-polynomial-completion
  - thm-qa-23-qsp-phase-implementation-error
  - thm-qa-23-certified-phase-approximation-correctness
  - alg-qa-23-polynomial-root-isolation
  - thm-qa-23-polynomial-root-isolation-correctness
  - def-formal-derivative-of-a-polynomial
  - lem-derivative-of-a-power
  - thm-algebra-of-continuous-functions
  - thm-extreme-value-r
  - thm-fermat-interior-extremum
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-inner-product-norm
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-polynomial-ring-over-a-commutative-ring
  - thm-reals-ordered-field
proof_strategy: direct
axiom_use: "None; all polynomial, interval, and phase-generation arguments are choice-free."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Theorems 3–5, Lemma 6 and Corollary 10, PDF pp. 7–14."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 29 §29.2 and Lemma 29.1, PDF pp. 144–146."
---

## Statement

Let $p\in\mathbb R[x]$ be supplied exactly, with degree bound $d\ge0$, parity $d\bmod2$, $|p(x)|\le1$ on $[-1,1]$, and rational tolerance $\delta>0$. On a `SUCCESS` output of [[alg-qa-23-qsp-phase-synthesis]], the exact phase list has an ideal QSP matrix whose upper-left matrix entry $P$ satisfies $\operatorname{Re}P=p$ in exact mode and $|\operatorname{Re}P(x)-p(x)|\le\delta_0/8\le\delta/8$ in numerical mode, for every $x\in[-1,1]$, where $\delta_0=\min(\delta,8)$. If numerical phase gates are used, each compiled phase error is at most $\delta_0/(8(d+1))$ in operator norm, so the implemented upper-left matrix entry has real-part error at most $\delta_0/4\le\delta$. This is a matrix-entry accuracy claim; no measurement or scalar-extraction circuit is included. The algorithm terminates on every promised input when its optional compiler terminates with a certificate or an explicit failure result; failed exact checks return their declared non-success branch.

In `efficient-numerical` mode without a supplied complement or finite-basis compiler, the algorithm requires $\operatorname{poly}(d,1+\log_+(1/\delta))$ charged arithmetic operations, ideal exact algebraic field/equality/order tests, root-descriptor operations, and polynomially many written tower/DAG certificate bits. Here $\log_+(x)=\max(0,\log x)$. Input reading and conversion from an arbitrary original coefficient encoding, expanded minimal-polynomial conversion, operation implementation bit cost, and optional compiler work are separate resource coordinates. This is the explicit exact-algebraic arithmetic model of the algorithm; complete modes retain finite termination without the same height-independent bound.

## Facts & Assumptions

**Given:** An exact polynomial, degree/parity declaration, interval promise, rational $\delta>0$, and the optional terminating phase compiler allowed by the algorithm's input contract.

[F1] [[alg-qa-23-qsp-phase-synthesis]]: validates degree/parity and the interval bound; constructs or verifies $B,C$ with $1-p_0^2=B^2+(1-x^2)C^2$; sets $P=p_0+iB,Q=C$; peels a phase list; approximates each phase; and returns `SUCCESS`, `INVALID`, `CERTIFICATE_ERROR`, or `IMPLEMENTATION_ERROR` as specified.

[F2] [[alg-qa-23-polynomial-root-isolation]] and [[thm-qa-23-polynomial-root-isolation-correctness]]: `REALROOTS(p')` returns every real critical point in $[-1,1]$ and terminates; `ROOTS` returns a complete exact algebraic root list and terminates.

[F3] [[lem-derivative-of-a-power]] and [[def-formal-derivative-of-a-polynomial]]: the polynomial function is differentiable and its derivative is the displayed formal derivative.

[F4] [[thm-algebra-of-continuous-functions]] and [[thm-extreme-value-r]]: a real polynomial is continuous and attains its maximum and minimum on the nonempty compact interval $[-1,1]$.

[F5] [[thm-fermat-interior-extremum]]: a differentiable function at an interior local extremum has derivative zero.

[F6] [[thm-qa-23-real-polynomial-completion]]: the exact complement construction produces an admissible pair with real upper-left component $p_0$.

[F7] [[thm-qa-23-qsp-phase-factorization]]: every admissible pair has the stated exact phase factorization.

[F8] [[thm-qa-23-certified-phase-approximation-correctness]]: each returned rational phase approximates its exact unit-circle phase with its certified operator error.

[F9] [[thm-qa-23-qsp-phase-implementation-error]]: complete product error is at most the sum of the individual phase and signal errors.

[F10] [[def-qa-23-qsp-signal-sequence]] and [[def-qa-23-qsp-admissible-polynomial-pair]] fix the reflection signal, coefficient conjugation, and exact sequence matrix convention.

[F11] [[def-polynomial-ring-over-a-commutative-ring]]: the zero polynomial has every coefficient equal to zero.

[F12] [[thm-reals-ordered-field]]: $\mathbb R$ is a totally ordered field.

[F13] [[def-qc-register-and-computational-basis]] and [[thm-qc-computational-basis-orthonormal]]: the signal register's ordered computational basis is orthonormal and its coordinates use the declared standard basis.

[F14] [[def-inner-product-norm]]: vector length is the square root of the inner product with itself.

[F15] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm bounds the output norm on every unit input vector.

[F16] [[lem-qa-23-exact-interval-boundedness-decision]] decides the original interval promise exactly in $O((d+1)^4)$ field/order operations without isolating its critical points.

[F17] [[thm-qa-23-bounded-height-root-arithmetic-cost]] proves parity-preserving rounded-target error at most $5\delta_0/64$, strict interior bound $1-3\delta_0/64$, coefficient height $O(d\log(d+1)+\log_+(1/\delta)+1)$, and polynomial arithmetic cost of bounded-grid root isolation of the rounded complement.

[F18] [[lem-qa-23-qsp-completion-peel-arithmetic-cost]] proves the polynomial arithmetic and tower-descriptor costs of completion and peeling once that bounded-height exact root list is supplied, including the explicit unit-square-root choice.

## Proof

1.1 First verify the interval check. In efficient-numerical mode [F16] proves exact acceptance of the interval promise on the original unrounded target. For the complete modes the existing critical-point argument applies as follows. If the formal derivative is zero, write $p=\sum_{k=0}^n a_kx^k$. By [F3] and [F11], $ka_k=0$ for each $k\ge1$. In the ordered field [F12], $k\cdot1>0$ for each positive integer $k$, by repeated addition of $1>0$; therefore $k\cdot1$ is nonzero and invertible, so every $a_k=0$ for $k\ge1$ and $p$ is constant. Its endpoint value is then its value everywhere, so the algorithm's single endpoint check is sufficient. Otherwise $p$ is nonconstant. If $p(x)>1$ somewhere, its maximum on $[-1,1]$ is greater than $1$ by [F4]. Since both endpoints were checked and are at most $1$, this maximum is attained at an interior point $c$. By [F5], $p'(c)=0$, and by [F3] this is a root of the formal derivative used by the algorithm. The complete list from [F2] therefore includes $c$, where the algorithm would detect $p(c)>1$, contrary to a successful check. The same argument applied to a value $p(x)<-1$ and the attained minimum detects every lower-bound violation. Conversely, when $|p|\le1$ on the interval, every endpoint and critical-point comparison passes. Thus the validation branch accepts exactly the promised interval-bounded inputs. [F1, F2, F3, F4, F5, F10, F11, F12, algebra]

1.2 On a valid input, the generated or checked complement identity and the degree/parity checks make $P=p_0+iB,Q=C$ admissible by [F6] and [F10]. In the supplied-complement branch the same conclusion follows from the exact identity and parity certificate, which is checked before use. [F1, F6, F10, algebra]

1.3 By [F7], that admissible pair has an exact phase list whose sequence matrix has upper-left entry $P$. Its real part is $p_0$, since $B$ has real coefficients. Hence exact mode gives $\operatorname{Re}P=p$; complete-numerical mode gives $|\operatorname{Re}P-p|=|(1-\delta_0/8)p-p|\le\delta_0/8$ because $|p|\le1$. In efficient-numerical mode [F17] gives $|\operatorname{Re}P-p|=|p_0-p|\le5\delta_0/64<\delta_0/8$. Thus the stated ideal error holds in either numerical mode. The explicit alternative square root in its peel has square $r$ and unit modulus by [F18], so the cancellation and factorization in [F7] apply unchanged. [F1, F6, F7, F17, F18, given, algebra]

1.4 In numerical mode the angle approximation contributes at most $\delta_0/(16(d+1))$ per phase by [F8], and a supplied compiler contributes at most the same amount by its checked output certificate. Their sum is therefore at most $\delta_0/(8(d+1))$ per phase. With exact signal calls, [F9] bounds the full unitary error by $(d+1)\delta_0/(8(d+1))=\delta_0/8$. Let $A=\widetilde U-U$ and write $Ae_0=A_{00}e_0+A_{10}e_1$ in the orthonormal signal basis of [F13]. Then [F14] gives $\|Ae_0\|^2=|A_{00}|^2+|A_{10}|^2\ge|A_{00}|^2$, while [F15] and $\|e_0\|=1$ give $\|Ae_0\|\le\|A\|_{\rm op}$. Thus the upper-left entry error satisfies $|A_{00}|\le\|A\|_{\rm op}$, and its real-part error is no larger. It differs from $p$ by at most the shrink error $\delta_0/8$ plus phase error $\delta_0/8$, at most $\delta_0/4\le\delta$. Exact mode has zero shrink error. This identifies a matrix entry only and asserts no physical scalar-extraction procedure. [F1, F8, F9, F10, F13, F14, F15, algebra]

2.1 `ROOTS` and `REALROOTS` terminate by [F2], and their efficient-mode replacement terminates by [F17]. Root classification and multiplication process finite lists, the phase peel decreases nominal degree at every nonconstant step, and each phase approximation terminates by [F8]. The optional compiler either returns a certificate or its declared failure. Consequently every promised execution terminates or returns the explicit `IMPLEMENTATION_ERROR` branch, and no failed certificate is reported as `SUCCESS`. [F1, F2, F7, F8, F17, F18, given, induction]

3.1 Put $S=d+1+\log_+(1/\delta)$. Degree/parity validation scans at most $d+1$ coefficients on promised input. [F16] bounds its exact interval decision by $O((d+1)^4)$ operations, independent of original coefficient heights. [F17] bounds rounding by polynomially many charged coefficient operations/comparisons, gives a rounded rational target of polynomial coefficient height in $S$, and bounds its complete bounded-grid complement-root list at fixed isolator precision by $\operatorname{poly}(S)$ rational operations. Root classification, multiplicity grouping, descriptor sorting and symmetry checks use polynomially many exact equality/order tests on that finite list. No complete-mode root isolation of the original target or its critical points occurs in this branch. [F1, F16, F17, algebra]

3.2 [F18] bounds every positive-root descriptor in completion by a polynomial number of exact comparisons and rational operations using root-bound-based upper endpoints. In particular the norm-product leading coefficient has absolute value one, so the final scale has a known polynomial-height upper bound. Polynomial-array multiplication and full identity checks take polynomially many operations. Phase peeling, its identity checks, fixed convention conversion and padding require polynomially many field operations and at most $O(d+1)$ quadratic tower descriptors; no generic algebraic-coefficient ROOTS call occurs. The explicit half-angle formula divides only after checking that its positive root is nonzero. Its possible tiny numerical value does not alter a charged exact-field operation count. [F1, F6, F7, F18, algebra]

3.3 There are $d+1$ phases, each requested to precision $\eta=\delta_0/[16(d+1)]$. [F8] gives $O((1+\log(1/\min(\eta,1)))^2)$ rational operations and linear-in-that-log exact algebraic comparisons per phase, polynomial in $S$. Buffered comparisons contract the angular bracket in every case, including equality, so no hidden input-conditioned coordinate refinement is used. Each returned dyadic angle has polynomially many bits. Root isolators and their rational defining polynomials have polynomial height by [F17]; each completion/peel intermediate is a referenced field-operation or quadratic-extension node rather than an expanded minimal polynomial. The polynomial operation count thus gives polynomially many tower/DAG nodes and index bits. Angular bracket endpoints are obtained by fixed dyadic affine operations for polynomially many steps; Machin partial-sum denominators have polynomial bit length in the number of terms (multiplying their polynomially many integer denominators suffices as a common denominator). Their phase certificates also have polynomial size. The root, completion identity and peel certificates can reference these same nodes without duplicating expanded expressions. Together these bounds prove the resource assertion, while leaving the separately named encoding, implementation, conversion and optional compiler coordinates unclaimed. [F1, F8, F17, F18, step 3.1, step 3.2, algebra] ∎



