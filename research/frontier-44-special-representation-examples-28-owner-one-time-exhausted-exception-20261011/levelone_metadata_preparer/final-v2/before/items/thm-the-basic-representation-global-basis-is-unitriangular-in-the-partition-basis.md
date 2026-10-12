---
id: thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis
kind: theorem
title: "The basic representation global basis is unitriangular in the partition basis"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero,
       def-regular-partition-label-convention-and-mullineux-crystal-involution,
       lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas,
       def-partition-young-diagram-and-conjugate-partition,
       def-lower-global-basis-of-a-quantum-highest-weight-module,
       thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis,
       def-dominance-order-on-partitions,
       def-axiom-of-choice,
       def-finite-q-wedge-space-and-normal-ordering-relations,
       thm-normally-ordered-q-wedges-form-a-basis,
       lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness,
       lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices]
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
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.12-3.14, printed pp. 25-26: the bar involution, the canonical basis, the unitriangularity Prop. 11 and Prop. 14."
    - title: "Bernard Leclerc and Jean-Yves Thibon, Canonical bases of q-deformed Fock spaces, arXiv:q-alg/9602025"
      url: "https://arxiv.org/pdf/q-alg/9602025"
      locator: "sec. 3-4, printed pp. 3-5: Theorems 3.2-3.3, Theorem 4.1 and the small-rank matrices; the symmmetry statement there concerns the bar matrix."
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.3-1.4, printed pp. 5-11: the bar involution of wedges and the truncation independence."
---

## Statement

There is an explicit semi-infinite wedge bar $\psi$ with the vacuum fixed,
coefficient bar $q\mapsto q^{-1}$ and $U_q$/bar compatibility, whose restriction
to $M=V(\Lambda_0)$ is the normalized highest module bar. On **all** partitions
its integral triangular correction is

$$G(\lambda)=|\lambda\rangle+\sum_{\mu\ \text{strictly dominated by}\ \lambda}d_{\mu,\lambda}(q)|\mu\rangle, \qquad d_{\mu,\lambda}\in q\mathbb Z[q],$$

with diagonal $1$ and same $e$-core support; the family $\{G(\lambda)\}$ is an
$A$-basis of $F_A$ and an $A_0$-basis of $F_0$, with the actual infinity chart
and balanced $\mathbb Z$-intersection. Exactly the $e$-regular $G(\lambda)$ form
the lower global basis of $M$, identified by the two lower-global-basis
suppliers. The ambient basis is not automatically compatible with the other
field irreducible summands. The transpose equality
$d_{\lambda,\mu}=d_{\mu',\lambda'}$ is **false** in general; the source symmetry
concerns the bar matrix, not $D$. Ambient natural-form dual coefficients use
$(D^{-1})^{\mathsf T}$, and basic upper coefficients require the restricted Gram
inverse and need not be Laurent polynomials.

## Facts & Assumptions

**Given:** The Fock space with its partition basis, the wedge bar, the dominance order, and the lower global basis of the highest weight module $M$.

[F1] Finite normalized bar on a raw length-$r$ wedge is $\psi_r(u_I)=(-1)^{r(r-1)/2}q^{t(I)}u_{\mathrm{reverse}\,I}$ with $t(I)$ the number of unequal-residue pairs of the actual indices; it preserves the full two-factor kernel and is an involution, and its exponent identities $\psi F_i\psi^{-1}$ match the reversed suffix exponents ([[def-finite-q-wedge-space-and-normal-ordering-relations]], [[thm-normally-ordered-q-wedges-form-a-basis]]).

[F2] Truncation independence: moving a new minimum through a prefix kills every secondary branch by the index-sum bound, so the bar and the corrections are prefix-independent ([[lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness]]).

[F3] The divided node matrices are Laurent-integral, the lower global basis of $M$ exists and is unique, and its crystal residues are the regular labels ([[lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices]], [[def-lower-global-basis-of-a-quantum-highest-weight-module]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]], [[thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero]]).

[F4] Dominance and conjugation are the published prefix-sum order and the transpose map; the $e$-core of a partition is determined by the residue counts ([[def-dominance-order-on-partitions]], [[def-partition-young-diagram-and-conjugate-partition]], [[def-regular-partition-label-convention-and-mullineux-crystal-involution]]).

## Proof

**Proof technique:** solve the triangular bar equations degree by degree, prove prefix independence, then identify the regular part with the module lower basis and compare the two matrix symmetries.

1.1 Integral dominance triangularity. On each finite degree the equations $\psi(G(\lambda))=G(\lambda)$ form a finite triangular semilinear system with diagonal $1$; solving from the leading term downwards, the residual $f+\bar f$ is antisymmetric under the bar and its unique positive-$q$ part gives the next correction, so $d_{\mu,\lambda}\in q\mathbb Z[q]$, vanishes unless $\mu$ is strictly dominated by $\lambda$, and preserves the residue multiset (same $e$-core) because every straightening step preserves residues. [F1, F4, given, algebra]

2.1 Prefix independence and the charts. Let $m$ exceed the partition size and move a new minimum $u_{-m}$ through the prefix. Every secondary correction removes that minimum and leaves $m+1$ indices above $-m$ with total sum bounded by the ground sum plus size minus $m$, which is smaller than the minimum possible sum of $m+1$ distinct integers above $-m$; hence all secondary branches vanish by [F2], only the leading factor $(-1)^mq^{-\#\text{unequal}}$ survives, and it cancels the new normalization. Therefore $\psi$ and the corrections are prefix-independent, giving the actual infinity chart and the balanced $\mathbb Z$-intersection; $F_A,F_0$ and the integral chart are kept separate. [step 1.1, F2, algebra]

3.1 The basic lower basis. On $M$ the $A$-lattice of divided node actions maps into the partition $A$-lattice because the cube matrices are Laurent-integral; its lower lattice maps into $F_0$, and the lower global basis of [F3] is bar-fixed with regular crystal residues. By the balanced-triple uniqueness of [F3] the images agree with the unique ambient $G$'s of the regular degree, so every $e$-regular $G(\lambda)$ lies in $M$ and the regular family is the lower global basis of $M$; no integral splitting or saturation is assumed, and the ambient basis is not claimed component-compatible. [step 1.1, step 2.1, F3, algebra]

4.1 The false transpose symmetry. The equality $d_{\lambda,\mu}=d_{\mu',\lambda'}$ fails at $e=2$ and degree $4$: the recursion gives $d_{(2,1,1),(4)}=q$ while $d_{(1,1,1,1),(3,1)}=0$, since $(2,1,1)'=(3,1)$ and $4'=(1,1,1,1)$; the source symmetry statement concerns the bar transition matrix, not the lower matrix $D$. Ambient natural-form dual coefficients use $(D^{-1})^{\mathsf T}$, and basic upper coefficients need the restricted Gram inverse, which may have rational entries. [step 1.1, step 3.1, F4, algebra]

5.1 Conclusion. The explicit wedge bar is involutive, prefix-independent and integral; the global basis $G(\lambda)$ is dominance-unitriangular with $q\mathbb Z[q]$ off-diagonal coefficients and same-core support, the $A$-and $A_0$-bases and the balanced intersection are as displayed, exactly the regular family is the lower global basis of $M=V(\Lambda_0)$, and the naive transpose symmetry of $D$ is false while the correct inverse/Gram rules hold. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
