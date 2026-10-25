---
id: thm-qc-bounded-error-amplification-correct
kind: theorem
title: "Bounded-error repetition amplification is correct and uniform"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - alg-qc-bounded-error-amplification
  - def-qc-oracle-full-list-circuit-family
  - def-qc-promise-computation-model
  - def-qc-circuit-cost-model
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-clean-and-dirty-ancillas
  - def-qc-clifford-t-gate-library
  - def-finite-probability-space-and-event
  - lem-chernoff-bound-for-independent-bernoulli-trials
  - thm-qc-output-acceptance-law-normalizes
  - lem-qc-uniform-family-size-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Section IV.2"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2 and Appendix B.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Assume the input family, rational threshold functions, gap polynomial, and clocks satisfy the valid-input conditions of [[alg-qc-bounded-error-amplification]]. Assume also that the base acceptance satisfies $p_{C_n}(x)\ge\alpha(n)$ for every length-$n$ YES input and $p_{C_n}(x)\le\beta(n)$ for every length-$n$ NO input, where $0\le\beta(n)<\alpha(n)\le1$ and $\alpha(n)-\beta(n)\ge1/s(n)$. On every input in the YES promise set, the amplified acceptance probability is at least $1-\delta(n)$; on every input in the NO promise set, it is at most $\delta(n)$. If $g(C_n)$ and $w(C_n)$ are the base gate count and total wire count, the repeated family has gate count $r(n)g(C_n)+n(r(n)-1)$ and width $r(n)w(C_n)$. Its depth, complete-description length, generator time, and classical predicate time and space are polynomial in $n$. Ordinary mode retains the exact original fixed gate library and full-list code. In oracle mode its ordinary gate count is $r(n)g_{\rm ord}(C_n)+n(r(n)-1)$, every port/variant count satisfies $N_{j,v}(C_n^{\rm rep})=r(n)N_{j,v}(C_n)$, and both raw query counts $q_j$ and charged query costs $Q_j$ are multiplied by $r(n)$ with the same granted access. Raw query counts are polynomial; charged query costs are polynomial whenever the base charged costs are polynomial. For a base clean or dirty interface whose declared ancillary register is disjoint from the first $n$ input wires, the input-copy stage acts only on data, and the corresponding exact contract is preserved with its declared register count multiplied by $r(n)$; the extra input-copy wires remain in total width and are not counted as returned clean ancillas.

## Facts & Assumptions

**Given:** An ordinary or oracle-aware finite promise computation in the corresponding mode of [[alg-qc-bounded-error-amplification]], with a fixed oracle instance in oracle mode, and acceptance probability $p_C(x)$ satisfying $p_C(x)\ge\alpha(n)$ on YES inputs and $p_C(x)\le\beta(n)$ on NO inputs, rational thresholds $\alpha(n),\beta(n)$, gap $\alpha(n)-\beta(n)\ge1/s(n)$, target $0<\delta(n)\le1/2$, and the procedure in [[alg-qc-bounded-error-amplification]].

[F1] [[alg-qc-bounded-error-amplification]]: for $\delta=u/v$, the procedure uses $r=2s(n)^2(\ell(v)+1)$ repetitions, copies only classical-basis input bits, and accepts iff $2S\ge r(\alpha+\beta)$.

[F2] [[def-finite-probability-space-and-event]]: probabilities on a finite space are nonnegative weights summing to one, and probabilities of events are finite sums of their outcome weights.

[F3] [[lem-chernoff-bound-for-independent-bernoulli-trials]]: for mutually independent Bernoulli variables with sum $S$ and mean $\mu$, $\mathbb P(|S-\mu|\ge t)\le2\exp(-2t^2/r)$ for $r>0$ and $t\ge0$.

[F4] [[thm-qc-output-acceptance-law-normalizes]]: for a finite promise computation, each run's output weights form a finite probability law and its acceptance event has probability $p_C(x)$.

[F5] [[def-qc-circuit-cost-model]]: gate count, width, depth, description length, generator time, query count, and classical bit costs are separate coordinates.

[F6] [[lem-qc-uniform-family-size-bound]]: in ordinary mode a polynomial-time full-list generator emits polynomial description length, gate count, and total wire count. In oracle mode [[def-qc-oracle-full-list-circuit-family]] requires a polynomial-time complete output with unary width and explicit ordinary/query records, and distinguishes $g$, $g_{\rm ord}$, $N_{j,v}$, $q_j$, and $Q_j$.

[F7] [[def-qc-clifford-t-gate-library]]: on computational-basis inputs, CNOT maps $|a,b\rangle$ to $|a,b\oplus a\rangle$ with the first wire as control.

[A1] [[def-qc-circuit-syntax-and-register-order]] uses distinct ordered gate wires and disjoint-support layers. [[def-qc-circuit-denotational-semantics]] embeds each local gate as its action on the named wires tensored with identity on the complement, and composes chronological layers with the later operator on the left. In oracle mode [[def-qc-oracle-full-list-circuit-family]] supplies fixed unitary ports acting only on their listed wires, so their instantiated occurrences have these same semantics. Consequently gates confined to disjoint full blocks act factorwise on product-basis vectors; the terminal measurement probabilities used below are the finite coordinate sums in [F4].

## Proof


1.1 Fix a promised input $x$. For each input bit $x_i\in\{0,1\}$, the basis action of CNOT maps $|x_i\rangle|0\rangle^{\otimes(r-1)}$ to $|x_i\rangle^{\otimes r}$; applying this independently to each position produces $r$ exact copies of $|x\rangle$. This uses only a computational-basis input and asserts no cloning of arbitrary superpositions. By [F7], CNOT has the required basis action. The $r$ base circuits then act on disjoint full wire blocks, so by [A1] the prepared joint state is $\psi_x^{\otimes r}$, where $\psi_x$ is the single-run output state. For any output strings $z_1,\ldots,z_r$, its joint probability is $$\sum_{w_1,\ldots,w_r}\prod_{i=1}^r|\langle P_O\psi_x,e_{z_i,w_i}\rangle_{\rm root}|^2=\prod_{i=1}^r p_C(z_i\mid x),$$ by finite distributivity and [F4]. Hence the measured output strings are mutually independent with the single-run law, and $X_i=\mathbf1_{\{A_n(x,z_i)=1\}}$ are independent Bernoulli variables with common parameter $p=p_C(x)$. [given, F1, F4, F7, A1, construct, algebra]

1.2 In ordinary mode [F6] bounds the base description length, operation count, and width polynomially. In oracle mode the same bounds follow directly from the explicit code: a machine started on $n$ input cells and run for $T(n)$ transitions can print at most $n+T(n)+1$ bits, each record occupies at least one bit, and the width is unary. The clocks and bit lengths of $\alpha,\beta,\delta,s$ are polynomial, so $r$ is polynomial. In either mode the repeated circuit uses exactly $r g(C_n)+n(r-1)$ operations and $r w(C_n)$ wires. Copying a record changes each wire index by a block offset with $O(\log(rw(C_n)+2))$ bits; the unary total-wire header has length $r w(C_n)$, and the extra CNOT list has $n(r-1)$ records. In oracle mode each original record's explicit list of wires is copied in full, its port/variant identifier is unchanged, and the entire descriptor table is copied once. Hence the complete repeated description has polynomial length and is produced in polynomial time by running the supplied machines, scanning and copying the base list, and adding offsets by binary arithmetic. These are polynomially many operations on polynomially many bits, implementable by repeated scans on the one-tape machine. A serial layering gives depth at most the total operation count. [F1, F5, F6, F7, algebra]

2.1 Put $S=\sum_{i=1}^rX_i$ and $\mu=rp$. The output predicate accepts exactly when $S\ge r(\alpha+\beta)/2$. If $x$ is YES, then $p\ge\alpha$ and $$\mu-r(\alpha+\beta)/2=r(p-\alpha)+r(\alpha-\beta)/2\ge r/(2s).$$ Thus a false rejection is contained in $\{|S-\mu|\ge r/(2s)\}$. [given, step 1.1, F1, algebra]

2.2 If $x$ is NO, then $p\le\beta$ and $$r(\alpha+\beta)/2-\mu=r(\alpha-\beta)/2+r(\beta-p)\ge r/(2s).$$ Thus a false acceptance is contained in the same two-sided deviation event $\{|S-\mu|\ge r/(2s)\}$. [given, step 1.1, F1, algebra]

2.3 In oracle mode no added CNOT record is a query slot, while each original slot occurs exactly once per block. Therefore $g_{\rm ord}(C_n^{\rm rep})=r g_{\rm ord}(C_n)+n(r-1)$ and $N_{j,v}(C_n^{\rm rep})=rN_{j,v}(C_n)$. Summing over variants gives $q_j(C_n^{\rm rep})=rq_j(C_n)$; multiplying each variant count by its unchanged declared charge and summing gives $Q_j(C_n^{\rm rep})=rQ_j(C_n)$. Raw call counts are at most the total operation count; large binary-encoded charges do not justify an unconditional polynomial charged-cost bound. The construction uses no new inverse or controlled access. The same instantiated unitary ports act independently on the disjoint blocks, so the factorization in step 1.1 remains valid, and [F4] applies to each instantiated finite unitary circuit. Ordinary mode contains no oracle slots and remains a circuit over exactly the original library. [step 1.1, step 1.2, F1, F4, F5, F6, algebra]

3.1 Finite event probabilities are sums of nonnegative weights by [F2], so containment makes the probability of either error event in step 2.1 and step 2.2 at most that of the deviation event. Apply [F3] with $t=r/(2s)$; its probability is at most $2\exp(-r/(2s^2))$. Since $\delta=u/v$ with $u\ge1$, $\delta\ge1/v$ and $v\ge2$. Therefore $$\ln(2/\delta)\le\ln(2v)=\ln2+\ln v<1+\ell(v),$$ because $\ln2<1$ and $\ln v=(\ln2)\log_2v<\log_2v<\ell(v)$. Substituting $r=2s^2(\ell(v)+1)$ gives $2\exp(-r/(2s^2))<2\exp(-\ln(2/\delta))=\delta$. This proves both promised error bounds without evaluating an irrational logarithm. [step 2.1, step 2.2, F1, F2, F3, algebra]

4.1 For the declared interfaces covered by the Statement, the input-copy CNOTs act only on the repeated data registers. On the declared ancillary registers the copy unitary is the identity; composing it with the $r$ blockwise exact contracts therefore preserves the clean or dirty return condition, with data target equal to the product of the base targets composed after that copy unitary. Their declared counts are multiplied by $r$; the $n(r-1)$ additional zero-start input-copy wires remain included in total width, with no claim that they return clean. The output predicate runs $A_n$ on each of the $r$ strings, counts successes, computes the rational threshold by exact integer additions and multiplications, and compares the two integers. These operations use polynomial time and space in the polynomially many input bits. Together with step 1.2 and step 2.3, this proves the claimed separate resource bounds and exact query scaling. [step 1.2, step 2.3, F1, F5, algebra] ∎

