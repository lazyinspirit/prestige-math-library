---
id: ex-the-affine-a-one-double-edge-serre-cancellation-on-partitions
kind: example
title: "The double-edge Serre cancellation in affine $A_1$ on partitions"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations, def-the-node-order-and-n-i-exponents-for-fock-space, def-cyclic-affine-type-a-cartan-datum,
       ex-level-one-fock-node-actions-for-partitions-up-to-three, lem-integrable-rank-one-actions-force-the-quantum-serre-relations, def-level-one-partition-fock-space-and-node-residues]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.1, printed pp. 1-3: the $n=2$ Serre relations (9)-(10) with the double edge and the evaluation module (16)-(23)."
    - title: "Bernard Leclerc and Jean-Yves Thibon, Canonical bases of q-deformed Fock spaces, arXiv:q-alg/9602025"
      url: "https://arxiv.org/pdf/q-alg/9602025"
      locator: "sec. 2, printed pp. 2-3: node action and the $n=2$ examples."
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 5.2, printed pp. 35-36 and Appendix B, printed pp. 68-69: $A_1^{(1)}$ data and the rank-one Serre proof."
---

## Example

At $e=2$ one has $[3]=q^2+1+q^{-2}$ and the cubic relation
$S_X=X_0^3X_1-[3]X_0^2X_1X_0+[3]X_0X_1X_0^2-X_1X_0^3=0$ for $X=E,F$, products
acting right to left. The four $E$ compositions all vanish on
$\varnothing,1,2,11$ by size, so only size $\ge4$ inputs test the identity. The
four $F$ compositions all vanish on $\varnothing,1,3,111$. On $2$ the ordered
four outputs are $([3]A,A,0,0)$ with $A=(q^{-2}+1)|321\rangle$; on $11$ they are
$([3]B,B,0,0)$ with $B=(q^{-1}+q)|321\rangle$, giving cancellation. On $21$ they
are $(0,C,D,[3](D-C))$ with
$C=[2]\bigl(|52\rangle+q|511\rangle+q^2|421\rangle+q|3211\rangle+q^2|31111\rangle+q^3|22111\rangle\bigr)$
and $D-C=[2]\bigl(|421\rangle+q|331\rangle+q^3|3211\rangle+q^2|322\rangle\bigr)$.
A nontrivial $E$ check on $321$ has four outputs $(0,0,Z,[3]Z)$ with
$Z=(1+q^2)|11\rangle+(q^{-1}+q)|2\rangle$. All displayed Serre sums vanish,
whereas $F_0F_1|1\rangle=|3\rangle+q|111\rangle$ and $F_1F_0|1\rangle=0$ show
the colors do not commute.

## Facts & Assumptions

**Given:** The $e=2$ partition Fock space with its node formulas, the ordinary generators $E_0,E_1,F_0,F_1$, and the value $[3]=q^2+1+q^{-2}$.

[F1] The $E_i,F_i$ actions are the node formulas of [[ex-level-one-fock-node-actions-for-partitions-up-to-three]] and [[def-the-node-order-and-n-i-exponents-for-fock-space]], including on shapes of size $4$ and $5$.

[F2] The general cubic Serre sum holds on every partition vector by [[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]], independently proved by [[lem-integrable-rank-one-actions-force-the-quantum-serre-relations]]; the computations below are finite corroborations, not the universal proof.



## Verification

1.1 The vanishing cases. On $\varnothing,1,2,11$ every monomial of the four $E$-compositions contains at least three removals while the input has size at most $2$, so all outputs vanish; on $\varnothing,1,3,111$ every monomial of the four $F$-compositions contains at least three additions and the third power of $F_0$ or $F_1$ dies on these small inputs where the addable corners are too few. [F1, given, algebra]

2.1 The size-$2$ cancellations. Starting from $|2\rangle$ and applying the four ordered compositions via [F1] gives the first output as $[3](q^{-2}+1)|3,2,1\rangle$, the second as $(q^{-2}+1)|3,2,1\rangle$, and the last two $0$: indeed the coefficient of $|321\rangle$ in the leading output is $q^{-4}+2q^{-2}+2+q^2=[3](q^{-2}+1)$ and the other outputs contribute the same multiple of the middle term; cancelling gives $0$. The same computation from $|1,1\rangle$ gives outputs $([3]B,B,0,0)$ with $B=(q^{-1}+q)|321\rangle$ because the coefficient is $q^{-3}+2q^{-1}+2q+q^3=[3](q^{-1}+q)$. [step 1.1, F1, algebra]

2.2 Noncommutation. Direct evaluation gives $F_0F_1|1\rangle=|3\rangle+q|1,1,1\rangle$ and $F_1F_0|1\rangle=0$, since $F_0|1\rangle=0$; hence the ordinary generators do not commute. [step 1.1, F1, algebra]

3.1 The size-$3$ cancellations. From $|2,1\rangle$ the second composition yields the common term $C$, the third yields $D$, and the fourth yields $[3](D-C)$, so the sum contributes $-C+D-(D-C)=0$ coefficientwise; from $|3,2,1\rangle$, applying the $E$-compositions gives the last output $[3]Z$ with the stated $Z$, and the first two outputs vanish, while the third output is $Z$; the sum vanishes. [step 2.1, F1, algebra]

4.1 Conclusion. The displayed finite chains exhibit the double-edge Serre cancellation on $2,11,21$ and the $E$ cancellation on $321$, with the $[3]$ coefficients $q^2+1+q^{-2}$; the general relation including the colour swap is proved by the independent rank-one Serre lemma, so no finite diagnostic is promoted to a universal proof. [step 2.1, step 3.1, step 2.2, F2] ∎
