---
id: lem-qc-encoded-error-instrument-and-cptp-distinction
kind: lemma
title: Encoded error instruments and full-space CPTP error maps
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-qc-code-deviation-and-spread
  - lem-qc-concatenated-steane-distance-and-transversal-cliffords
  - def-qc-exact-recovery-of-a-quantum-code
dependency_level: 19
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: "https://arxiv.org/pdf/quant-ph/0504189"
---

## Statement

Let $V:H_L\to H_P$ be an encoding isometry into a finite tensor register and let $\mathcal E_s$ be the finite operator error span of [[def-qc-code-deviation-and-spread]]. A full-space CPTP map with Kraus operators in $\mathcal E_s$, restricted after $V$, gives a trace-preserving encoded error instrument. The converse is false even for the explicit $[\![49,1,9]\!]$ code and $s=1$: the encoded isometry

$$A=2^{-1/2}(I+X_1)V$$

has range in the weight-one error sector but no full-space CPTP extension whose Kraus operators all lie in $\mathcal E_1$. Thus neither an encoded error instrument nor one of its normalized conditional outputs can in general be identified with a full-space CPTP error map.

Nevertheless, a fixed decoded recovery which corrects the normalized mixed channel of all weight-at-most-$s$ Pauli errors corrects every trace-preserving encoded error instrument with Kraus operators $A_j=E_jV$, $E_j\in\mathcal E_s$. This conclusion also holds for joint per-block error spans and arbitrary finite external references. If coefficients act on auxiliary memory, the recovery preserves the logical/reference marginal after summing the instrument outcomes and tracing that memory; a retained memory need not have identity output action.

## Facts & Assumptions

**Given:** The finite error spans, an encoding isometry, the actual fixed recovery in the last assertion, and, for the counterexample, the explicit twice-concatenated Steane code.

[F1] [[def-qc-code-deviation-and-spread]] supplies the supported operator span and the stronger full-space CPTP deviation relation.

[F2] [[lem-qc-concatenated-steane-distance-and-transversal-cliffords]] proves the $[\![49,1,9]\!]$ code, describes its inner and outer stabilizers, and supplies a uniform recovery through weight four.

[F3] [[def-qc-exact-recovery-of-a-quantum-code]] defines exact decoded recovery as an equality of logical channels, including arbitrary finite reference identities.

## Proof


1.1 If $K_j\in\mathcal E_s$ are Kraus operators of a full-space channel, their restrictions $A_j=K_jV$ satisfy $\sum_jA_j^*A_j=V^*(\sum_jK_j^*K_j)V=I_{H_L}$. Partitioning a finite Kraus family into recorded outcomes gives an encoded instrument; each branch is completely positive and the sum is trace preserving on the logical input. No assertion that each branch has trace one is needed. [given, F1, algebra]

1.2 In the code [F2], no nonidentity scalar-phase stabilizer has weight one or two. Indeed, an inner-block stabilizer has binary $X,Z$ labels in the row code $D$; every nonzero word of $D$ has weight four, so a nonidentity inner stabilizer has support at least four. If a full stabilizer has a nontrivial outer stabilizer label modulo the inner groups, that outer label has at least four occupied inner blocks, and each nontrivial inner logical restriction has weight at least three, giving weight at least twelve. Thus distinct phase-free Paulis $E_a,E_b$ of weight at most one have $V^*E_a^*E_bV=0$: their product has weight at most two, is not a scalar-phase stabilizer, and is detected by some check. Also $V^*E_a^*E_aV=I$. Hence the maps $E_aV$ have pairwise orthogonal ranges and the restriction $E\mapsto EV$ is injective on $\mathcal E_1$. [F2, algebra]

1.3 List the phase-free weight-at-most-$s$ Pauli operators as $F_1,\ldots,F_M$. Their normalized mixed channel has Kraus operators $F_a/\sqrt M$. Let $R_l$ be Kraus operators of a fixed decoded recovery correcting it. Then $R_lF_aV/\sqrt M$ form a Kraus representation of the identity logical channel. Every Kraus operator of the identity channel is a scalar multiple of $I_{H_L}$: its output on every pure input must lie in that input's one-dimensional span, and linearity on basis vectors and their sums makes the scalar independent of the input. Thus $R_lF_aV=c_{la}I_{H_L}$ for scalars $c_{la}$. [given, F3, algebra]

2.1 Put $B=(I+X_1)/\sqrt2$. Step 1.2 gives $V^*X_1V=0$, so $(BV)^*(BV)=V^*(I+X_1)V=I$. Therefore $A=BV$ is an isometry and its encoded channel is trace preserving. Suppose a full-space channel with Kraus operators $K_j\in\mathcal E_1$ agreed with this channel on the code. For any logical vector $\psi$, positivity of the rank-one output sum forces every $K_jV\psi$ to be proportional to $BV\psi$. Since $BV$ is an isometry, linearity on a basis and its pairwise sums gives scalars $c_j$, independent of $\psi$, with $K_jV=c_jBV$. The injectivity from step 1.2 then gives $K_j=c_jB$. [F1, step 1.2, algebra]

2.2 For any encoded instrument write $A_{bj}=\sum_a\alpha_{bja}F_aV$. Step 1.3 gives $R_lA_{bj}=\gamma_{lbj}I_{H_L}$, where $\gamma_{lbj}=\sum_a\alpha_{bja}c_{la}$. Complete trace preservation on the encoded input gives $\sum_{l,b,j}|\gamma_{lbj}|^2=1$. Hence recovery of the full instrument is the identity logical channel; each recorded branch is a nonnegative scalar multiple of that channel, without requiring a normalized physical error map. Tensoring every displayed equality with an external reference identity proves its reference-preserving version. For several blocks use tensor Pauli labels and the product recovery; tensoring the scalar identities from step 1.3 yields the same proof for their joint span. [F3, step 1.3, algebra]

3.1 Trace preservation of the supposed extension would require $I=\sum_jK_j^*K_j=(\sum_j|c_j|^2)(I+X_1)$. This is impossible: $I+X_1$ annihilates the nonzero $-1$ eigenspace of $X_1$. Thus no such extension exists. The encoded map can also occur as a normalized measured branch: prepare a control in $|+\rangle$, apply controlled $X_1$, and measure that control in the $X$ basis. The plus branch has physical Kraus operator $(I+X_1)/2$; on code inputs its probability is $1/2$ by step 1.2, so its normalized output is exactly $\operatorname{Ad}_{BV}$. The full two-branch instrument is trace preserving. [step 1.2, step 2.1, algebra]

4.1 If coefficients in these expansions are operators on fault memory, the corrected Kraus operators instead have the form $I_{H_L}\otimes M_{lbj}$. Trace preservation makes their full sum a channel acting on that memory alone. It leaves the logical/reference marginal unchanged even for correlations with memory, since a local trace-preserving operation does not change a remote marginal. Its individual outcomes may have subnormalized probabilities and may condition correlations; its memory output need not equal its input. This proves the stated interpretation with memory and completes all assertions. [F3, step 1.3, step 2.2, algebra] ∎

