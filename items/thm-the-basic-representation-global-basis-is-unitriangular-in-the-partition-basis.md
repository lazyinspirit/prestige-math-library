---
id: thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis
kind: theorem
title: "The basic representation global basis is unitriangular in the partition basis"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
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
      locator: "sec. 3-4, printed pp. 4-5: Theorems 3.2-3.3, Theorem 4.1 and the small-rank matrices; the symmetry in Theorem 3.3(iv) concerns the bar matrix."
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

[F1] The finite quotient is presented by the complete local straightening relations, including equal and distinct residues, and its normal words form a basis ([[def-finite-q-wedge-space-and-normal-ordering-relations]], [[thm-normally-ordered-q-wedges-form-a-basis]]). The normalized reversal bar and its relation preservation are proved in step 1.1, not supplied by these citations.

[F2] Finite straightening preserves the total index sum, keeps indices between their input extremes, and has normal words with strictly decreasing indices ([[def-finite-q-wedge-space-and-normal-ordering-relations]], [[thm-normally-ordered-q-wedges-form-a-basis]]). The truncation-independence argument is supplied locally in step 2.2.

[F3] The divided node matrices are Laurent-integral, the lower global basis of $M$ exists and is unique, and its crystal residues are the regular labels ([[lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices]], [[def-lower-global-basis-of-a-quantum-highest-weight-module]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]], [[thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero]]).

[F4] Dominance and conjugation are the published prefix-sum order and the transpose map; the abacus description of $e$-cores and the residue-count implication are proved in step 3.1 ([[def-dominance-order-on-partitions]], [[def-partition-young-diagram-and-conjugate-partition]], [[def-regular-partition-label-convention-and-mullineux-crystal-involution]]).



## Proof

**Proof technique:** solve the triangular bar equations degree by degree, prove prefix independence, then identify the regular part with the module lower basis and compare the two matrix symmetries.

1.1 The normalized finite reversal bar. For a length-$r$ tuple $I$, put $t(I)$ equal to its number of unequal-residue pairs and define $\psi_r(u_I)=(-1)^{r(r-1)/2}q^{t(I)}u_{\operatorname{reverse}I}$, extended by $q\mapsto q^{-1}$. This descends through the finite straightening relations: an equal-residue swap relation reverses to itself, whereas every distinct-residue two-factor relation reverses, after coefficient bar, to $q$ times that relation. For the recursive relation its four terms are $u_l\wedge u_m+q^{-1}u_m\wedge u_l+u_{m-b}\wedge u_{l+b}+q^{-1}u_{l+b}\wedge u_{m-b}$; reversal and coefficient bar give precisely $q$ times these same four terms. All terms preserve the residue multiset, so the global factor $q^{t(I)}$ is identical on the terms of a relation in a longer word. Thus the relation ideal is preserved. Applying reversal twice cancels the barred scalar and gives $\psi_r^2=1$. For the finite action the residue-count difference under a lowering move is $t(I^+)-t(I)=n_i-n_{i+1}-1$, and under its raising reverse it is $-(n_i-n_{i+1})-1$; substituting these identities into the fixed prefix coproduct converts its coefficient bar to the reversed suffix coproduct. Hence $\psi_r$ intertwines the generator bar, and its toral compatibility follows from weight preservation. These are finite computations in the relations of [F1]. [F1, given, algebra]

2.1 Integral dominance triangularity. Straighten the reversed tuple of a normal wedge. The leading swap scalars cancel $(-1)^{r(r-1)/2}q^{t(I)}$, leaving the original wedge with coefficient $1$. Every other branch replaces an unequal pair by strictly more balanced interior indices with the same sum and residues. The sorted prefix sums therefore strictly decrease, so the corresponding partition is strictly dominated by the original one. All coefficients are Laurent integral and residues are preserved. Consequently on a finite degree the matrix of $\psi$ is dominance-unitriangular over $\mathbb Z[q,q^{-1}]$. This conclusion is obtained from the finite relations, rather than assumed for the bar-correction equations. [step 1.1, F1, F4, algebra]

2.2 Prefix independence. Take a charge-zero prefix of length $m$ with $m>|\lambda|$ and append $u_{-m}$. In straightening this new minimum past the reversed prefix, a secondary correction replaces it and another index by indices strictly greater than $-m$. No later branch recreates $-m$, since balancing and swapping stay inside the current extremes. Such a branch would have $m+1$ distinct indices at least $-m+1$, whose minimum total is the ground sum $-m(m+1)/2$ plus $m+1$. The actual preserved total is $-m(m+1)/2+|\lambda|$, which is smaller, so every secondary branch is zero. Only the leading factor $(-1)^mq^{-a}$ remains, where $a$ counts the prefix indices with residue different from $-m$; it cancels the change in the reversal normalization. This proves prefix independence on every finite partition combination. The coefficient calculation in step 1.1 gives compatibility with stabilized $F_i$. For each $E_i$, choose a sufficiently deep cutoff with $-m\not\equiv i$; its boundary scalar is then $1$, so the same finite calculation gives compatibility with $E_i$. Prefix independence makes this compatible with every other cutoff. Weight preservation gives the toral bar identity, and the vacuum-fixed bar therefore restricts on $M$ to the normalized highest-module bar. [step 1.1, F1, F2, algebra]

3.1 The positive-$q$ correction. Proceed down a finite dominance refinement and suppose the already constructed lower vectors $G(\mu)$ are bar-fixed. The residual in $\psi(|\lambda\rangle)-|\lambda\rangle$, after prior corrections, is $\sum_\mu r_\mu(q)G(\mu)$. Since $\psi^2=1$, each coefficient satisfies $r_\mu+\overline{r_\mu}=0$. Writing a finite antisymmetric Laurent polynomial as $r=\sum_{k>0}a_k(q^k-q^{-k})$ gives the unique $c=\sum_{k>0}a_kq^k\in q\mathbb Z[q]$ with $c-\bar c=r$. Adding $cG(\mu)$ therefore kills that residual. Induction constructs the unique bar-fixed $G(\lambda)$ with leading standard vector and remainder in $q\mathbb Z[q]$ on strictly dominated shapes. For completeness define the abacus of $\lambda$ as $S_\lambda=\{\lambda_r-r+1:r\ge1\}$. Runner $i$ consists of the indices congruent to $i$; its charge $\kappa_i$ is the number of occupied positive indices minus the number of missing nonpositive indices on that runner. Adding a residue-$k$ cell moves an occupied index from $k$ to $k+1$, so induction from the vacuum gives $\kappa_i=m_{i-1}-m_i$. Packing each runner downward fills it up to its uniquely determined top index $j-e+e\kappa_i$, where $1\le j\le e$ represents $i$. An elementary downward bead move by $e$ to an empty position deletes a boundary rim strip of $e$ cells (the boundary path between those positions has length $e$); conversely every removable rim strip gives this bead move. Thus the packed abacus is the usual $e$-core and is uniquely determined by the charges. Since all corrections preserve the occupied residue multiset at a common cutoff, they preserve these charges and hence the core. At each degree the triangular correction matrix and its inverse are integral polynomial matrices. [step 1.1, step 2.1, F4, algebra]

4.1 Ambient charts and identification of the basic lower basis. On each finite label component, step 3.1 gives a unitriangular matrix $D$ over $\mathbb Z[q]$ with inverse over the same ring. Hence the $G(\lambda)$ form bases of $F_A$ over $A$ and of $F_0$ over $A_0$. Since they are bar fixed, they also form an $A_\infty$-basis of $\psi(F_0)$, where $A_\infty=\overline{A_0}$. Expressing a vector in this common basis shows $F_A\cap F_0\cap\psi(F_0)=\bigoplus_\lambda\mathbb ZG(\lambda)$: its coefficients are integral Laurent polynomials regular at zero and infinity, hence integers. In particular the only bar-fixed element of $F_A\cap qF_0$ is zero. On $M$, the divided-node lattice maps into $F_A$ by [F3], and its canonical lower lattice maps into $F_0$ because its Kashiwara lowering words start at the vacuum and the ambient normalized operators preserve $F_0$. Its lower global lift of the regular residue $\lambda$ therefore has image $H\in F_A\cap F_0$, with $\psi H=H$ and $H\equiv|\lambda\rangle\pmod{qF_0}$. The ambient $G(\lambda)$ has these same properties, so their difference is a bar-fixed element of $F_A\cap qF_0$ and is zero. This proves that precisely the regular $G$'s form the lower global basis of $M$; the other ambient $G$'s are excluded by field independence. No integral saturation or compatibility with other irreducible summands is assumed. [step 1.1, step 2.2, step 3.1, F3, algebra]

5.1 The false transpose symmetry. The equality $d_{\lambda,\mu}=d_{\mu',\lambda'}$ fails at $e=2$ and degree $4$: the recursion gives $d_{(2,1,1),(4)}=q$ while $d_{(1,1,1,1),(3,1)}=0$, since $(2,1,1)'=(3,1)$ and $4'=(1,1,1,1)$; the source symmetry statement concerns the bar transition matrix, not the lower matrix $D$. Ambient natural-form dual coefficients use $(D^{-1})^{\mathsf T}$, and basic upper coefficients need the restricted Gram inverse, which may have rational entries. [step 1.1, step 4.1, F4, algebra]

6.1 Conclusion. The explicit wedge bar is involutive, prefix-independent and integral; the global basis $G(\lambda)$ is dominance-unitriangular with $q\mathbb Z[q]$ off-diagonal coefficients and same-core support, the $A$-and $A_0$-bases and the balanced intersection are as displayed, exactly the regular family is the lower global basis of $M=V(\Lambda_0)$, and the naive transpose symmetry of $D$ is false while the correct inverse/Gram rules hold. [step 1.1, step 2.2, step 4.1, step 5.1] ∎
