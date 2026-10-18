---
id: alg-certified-erfcx-evaluation
kind: algorithm
title: Finite certified evaluation of the scaled complementary error function
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-certified-evaluation-result-contract, def-erfcx-moment-sequence, lem-erfcx-moment-recurrence, lem-erfcx-continued-fraction-enclosure, lem-erfcx-asymptotic-remainder, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, alg-certified-elementary-range-evaluation, thm-real-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction, def-factorial-and-falling-factorial]
justified_by: [thm-certified-erfcx-enclosures]
forward_refs: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: DLMF, §7.9, continued fractions
      url: https://dlmf.nist.gov/7.9
    - title: DLMF, §7.12(i), equation 7.12.1
      url: https://dlmf.nist.gov/7.12
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§3 and 5
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 4
---

## Definition

Input an exact dyadic real \(x\), positive rational absolute tolerance
\(\varepsilon_a\), optional positive rational relative tolerance
\(\varepsilon_r\), a fixed exponent range \((e_{\min},e_{\max})\), and finite
positive integer caps \(S_{\max},D_{\max},N_{\max},p_{\max},W\), with
\(p_{\max}\ge2\). Here
\(S_{\max}\) bounds stages, \(D_{\max}\) the continued-fraction depth,
\(N_{\max}\) the asymptotic truncation, \(p_{\max}\) the dyadic precision, and
\(W\) the exact interval operations, terms, and subroutine calls performed by
this procedure. Reject nonpositive tolerances, invalid caps,
\(e_{\min}>e_{\max}\), or \(x\le0\) with domain. At stage \(q\), use
\(D=\min(q,D_{\max})\), \(N=\min(q,N_{\max})\), precision
\(p=\max(2,\min(q,p_{\max}))\), and truncation index \(q\) for elementary-range calls.
Outputs and status meanings are those of
[[def-certified-evaluation-result-contract]].

All rational and interval arithmetic uses
[[def-outward-rounded-interval-and-ball-operations]]. Charge every exact
arithmetic operation, range-evaluator node operation, term, rounding, and
loop update to the shared counter \(W\). Interrupt any nested elementary-range
call with inconclusive before its next operation would exceed the remaining
budget. Return inconclusive before any local operation would exceed \(W\). A
final endpoint overflow
returns range. A non-finite elementary-range subcall makes the current stage
inconclusive; later stages may still be tried.

For each stage \(q=1,\ldots,S_{\max}\), compute \(P_q\), a finite dyadic
interval containing \(\pi\), as follows. For \(r\in\{1/5,1/239\}\), form
\(A_q(r)=\sum_{j=0}^{q-1}(-1)^jr^{2j+1}/(2j+1)\) and
\(E_q(r)=r^{2q+1}/((2q+1)(1-r^2))\) exactly; the arctangent-tail lemma gives
\(\arctan r\in[A_q(r)-E_q(r),A_q(r)+E_q(r)]\). Combine these intervals by
\(\pi=16\arctan(1/5)-4\arctan(1/239)\) and round outward to the selected
format at precision \(p\). The Machin identity and tails are supplied by
[[lem-trigonometric-identities-machin-and-range-reduction]]. If the interval
conversion is non-finite, skip the stage. Call
[[alg-certified-elementary-range-evaluation]] on the real one-node DAG
\(\sqrt{P_q}\), using exponent range \((e_{\min},e_{\max})\), precision \(p\),
and truncation \(q\). If this call is not finite or its output \(R_q\) does
not have positive lower endpoint, skip this stage. Otherwise \(R_q\) encloses
\(\sqrt\pi\) by [[thm-real-elementary-range-enclosures]].

Form the continued-fraction candidate as follows. Set
\(I_D=[0,(D+1)/(2x)]\). For \(k=D-1,\ldots,0\), set
\[
I_k=\left[\frac{k+1}{2(x+\sup I_{k+1})},
          \frac{k+1}{2(x+\inf I_{k+1})}\right]
\]
by outward interval operations. Apply the decreasing map
\(r\mapsto1/(\sqrt\pi(x+r))\) to \(I_0\), evaluating \(\sqrt\pi\) with
\(R_q\), to obtain a candidate interval \(C_q\). The finite-depth
containment lemma [[lem-erfcx-continued-fraction-enclosure]] makes \(C_q\)
a valid enclosure for every \(D\ge0\).

If \(N\ge1\), also form the asymptotic candidate. Evaluate
\[
S_N(x)=\frac1{x\sqrt\pi}\sum_{k=0}^{N-1}(-1)^k\frac{(1/2)_k}{x^{2k}},
\qquad
B_N(x)=\frac1{x\sqrt\pi}\frac{(2N)!}{4^NN!x^{2N}}
\]
with \(R_q\) and exact factorial/rational interval arithmetic. Set
\(A_q=[S_N,S_N+B_N]\) when \(N\) is even and
\(A_q=[S_N-B_N,S_N]\) when \(N\) is odd. The signed remainder lemma
[[lem-erfcx-asymptotic-remainder]] makes \(A_q\) a valid enclosure.

If both candidates are finite, intersect them when the intersection is
nonempty; if it is empty, discard the stage. If only one is finite, use that
candidate. Round the selected final endpoints outward to precision \(p\).
Return success at the first stage whose radius is at most
\(\varepsilon_a\). Set relative_certified to true exactly when relative
tolerance was requested, the interval excludes zero, and the contract's
relative-radius test passes; a failed relative test does not prevent absolute
success. If no stage passes before the finite caps, return inconclusive.
