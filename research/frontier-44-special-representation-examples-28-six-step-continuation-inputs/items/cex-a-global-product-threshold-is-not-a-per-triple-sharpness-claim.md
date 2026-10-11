---
id: cex-a-global-product-threshold-is-not-a-per-triple-sharpness-claim
kind: counterexample
title: "A global product threshold is not a per-coefficient sharpness claim"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 15
deps: [def-reduced-kronecker-coefficient,
       ex-murnaghan-stability-for-alpha-beta-two,
       thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product,
       def-first-row-padding-of-a-partition,
       thm-murnaghan-expansion-for-all-admissible-ranks]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Introduction p. 2 (displayed products for alpha=beta=(2)) and section 3 pp. 8-9 (the sharp product threshold)"
      url: "https://arxiv.org/pdf/0907.4652"
---

## Statement refuted

**Refuted claim:** the exact global product threshold (the least rank from
which the whole product $s_{\alpha[n]}*s_{\beta[n]}$ is $V$-stable) is at the
same time the least rank from which each individual coefficient
$g^{\gamma[n]}_{\alpha[n],\beta[n]}$ is constant.

The witness is $\alpha=\beta=(2)$: for this pair the individual coefficient
$\bar g^{(2)}_{(2),(2)}=2$ is already attained and constant from rank $6$
onward, while the whole product is not even $V$-stable at rank $7$ and only
stabilizes at rank $8$
([[ex-murnaghan-stability-for-alpha-beta-two]],
[[thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product]]).
Thus a single coefficient can stabilize strictly before the global product
threshold, and the exact global threshold is not a per-coefficient sharpness
statement ([[def-reduced-kronecker-coefficient]]).

## Facts & Assumptions

**Given:** $\alpha=\beta=(2)$, so $\gamma[n]=(n-2,2)$ for $\gamma=(2)$ and $n\ge4$; the displayed products of [[ex-murnaghan-stability-for-alpha-beta-two]] at ranks $4,\dots,9$; the reduced coefficient $\bar g^{(2)}_{(2),(2)}=2$ of that example.

[F1] $\bar g^{(2)}_{(2),(2)}=2$, and for every $n\ge8$ the rank-$n$ product equals $\sum_\gamma\bar g^\gamma_{(2),(2)}s_{\gamma[n]}$, so the coefficient of $s_{(n-2,2)}$ equals $2$ ([[ex-murnaghan-stability-for-alpha-beta-two]], [[thm-murnaghan-expansion-for-all-admissible-ranks]]).

[F2] For $n\ge8$ the product $s_{(n-2,2)}*s_{(n-2,2)}$ is $V$-stable with least global index $8$; at rank $7$ it is not $V$-stable, since applying $V$ to the rank-$7$ product misses the term $s_{4,4}$ ([[thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product]], [[ex-murnaghan-stability-for-alpha-beta-two]]).

[F3] The coefficient of $s_{\delta}$ in $s_{\alpha[n]}*s_{\beta[n]}$ is $g^\delta_{\alpha[n],\beta[n]}$, and for $\delta=\gamma[n]$ with $n\ge|\gamma|+\gamma_1$ this is the coefficient of the padded label ([[def-first-row-padding-of-a-partition]], [[ex-murnaghan-stability-for-alpha-beta-two]]).

## Counterexample

**Proof technique:** direct.

1.1 *Ranks six, seven and eight.* In the displayed products of [F3]: $s_{4,2}*s_{4,2}$ contains $2s_{4,2}$ (rank $6$), $s_{5,2}*s_{5,2}$ contains $2s_{5,2}$ (rank $7$), and $s_{6,2}*s_{6,2}$ contains $2s_{6,2}$ (rank $8$). Hence the coefficient $g^{(4,2)}_{(4,2),(4,2)}=g^{(5,2)}_{(5,2),(5,2)}=g^{(6,2)}_{(6,2),(6,2)}=2$ equals the reduced value $\bar g^{(2)}_{(2),(2)}=2$ at ranks $6,7,8$. [F1, F3, given]

2.1 *Rank five is different.* The rank-five product $s_{3,2}*s_{3,2}$ contains $s_{3,2}$ with coefficient $1$, not $2$, so the coefficient $g^{(3,2)}_{(3,2),(3,2)}=1\ne\bar g^{(2)}_{(2),(2)}$; together with step 1.1 this shows that the least rank from which the coefficient equals the stable value for all later ranks is $6$. For $n\ge6$ this is indeed stable: ranks $6,7,8$ are displayed in step 1.1 and ranks $n\ge8$ follow from [F1] with the padded label $(n-2,2)=\gamma[n]$. [F1, F3, step 1.1]

3.1 *Comparison with the global threshold.* By [F2] the whole product is $V$-stable exactly from rank $8$ onward, and it is not $V$-stable at rank $7$; the single coefficient of steps 1.1 and 2.1 has already reached its stable value $2$ at rank $6$ and stays there. Since $6<8$, the global product threshold is strictly larger than the stabilization rank of this coefficient, so no statement of the form "each coefficient first becomes constant at the global threshold" can be true. This is a finite boundary witness; it uses the displayed products, the exact threshold theorem and the reduced value $2$, all established above. [F1, F2, step 2.1] ∎
