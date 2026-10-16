---
id: thm-qc-knill-laflamme-necessity
kind: theorem
title: Exact recovery implies the Knill–Laflamme condition
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-qc-exact-recovery-of-a-quantum-code, def-qc-kraus-representation, def-qc-quantum-channel, def-qc-quantum-code-isometry-and-code-projector, lem-qc-kraus-operators-of-the-identity-channel-are-scalars, prop-adjoint-algebra, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-qc-kraus-choi-equivalence, thm-qc-trace-preserving-kraus-normalization]
provenance:
  statement: literature-derived
  proof: ai-altered
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Statement

Let $\mathcal N(X)=\sum_{a=1}^mE_aXE_a^*$ be a finite Kraus
representation of a channel from $\mathcal B(H_P)$ to $\mathcal B(H_O)$,
and let $V:H_L\to H_P$ be an isometry with $H_L\ne\{0\}$ and $P=VV^*$.
If the code is exactly correctable in the sense of
[[def-qc-exact-recovery-of-a-quantum-code]], then there are scalars
$C_{ab}$ such that
$PE_a^*E_bP=C_{ab}P$ for all $a,b$.

## Facts & Assumptions

**Given:** The finite-dimensional encoding, Kraus channel, and an exact
decoded recovery channel $\mathcal R:\mathcal B(H_O)\to\mathcal B(H_L)$.

[A1] [[def-qc-exact-recovery-of-a-quantum-code]]: exactness means
$\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V$ is the identity channel
on $\mathcal B(H_L)$.

[A2] [[def-qc-quantum-channel]] and [[def-qc-kraus-representation]] specify
the CPTP channel and finite operator-sum conventions.

[A3] [[thm-qc-kraus-choi-equivalence]]: every finite-dimensional completely
positive map has a finite Kraus representation.

[A4] [[thm-qc-trace-preserving-kraus-normalization]]: a trace-preserving
finite Kraus map satisfies $\sum_jR_j^*R_j=I$.

[F1] [[lem-qc-kraus-operators-of-the-identity-channel-are-scalars]]: every
operator in a finite Kraus representation of the identity channel is a
scalar multiple of the identity.

[F2] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and
[[prop-adjoint-algebra]]: adjoints satisfy the pairing identity and reverse
compatible compositions.

## Proof


1.1 By [A3], choose a finite Kraus representation $\mathcal R(X)=\sum_jR_jXR_j^*$. Composing its Kraus operators with the errors $E_a$ and the encoding $V$ gives the Kraus family $R_jE_aV:H_L\to H_L$ for $\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V$. By exactness [A1], this family represents the identity channel. [given, A1, A2, A3, algebra, choose]

2.1 Apply [F1] to the finite Kraus family in step 1.1. For each $j,a$ there is a scalar $c_{ja}$ with $R_jE_aV=c_{ja}I_{H_L}$. [step 1.1, F1]

3.1 Trace preservation of $\mathcal R$ gives $\sum_jR_j^*R_j=I_{H_O}$ by [A4]. Therefore, for every $a,b$, $$V^*E_a^*E_bV =V^*E_a^*\left(\sum_jR_j^*R_j\right)E_bV =\sum_j(R_jE_aV)^*(R_jE_bV) =\left(\sum_j\overline{c_{ja}}c_{jb}\right)I_{H_L}.$$ [A4, F2, step 2.1, algebra]

4.1 Put $C_{ab}=\sum_j\overline{c_{ja}}c_{jb}$. Since $P=VV^*$, $PE_a^*E_bP=V(V^*E_a^*E_bV)V^*=C_{ab}P$ by step 3.1. This is the Knill–Laflamme condition for every pair of errors. [given, step 3.1, algebra] ∎

