---
id: ex-unitriangular-global-basis-elements-in-small-rank
kind: example
title: "Unitriangular global basis elements at small rank"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 22
deps: [thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis,
       def-regular-partition-label-convention-and-mullineux-crystal-involution,
       def-dominance-order-on-partitions,
       ex-level-one-fock-node-actions-for-partitions-up-to-three,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Bernard Leclerc, Fock space representations (complete author-hosted 38-page body)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.13, printed pp. 25-26: Exercise 17 and the small-degree transition matrices."
    - title: "Bernard Leclerc and Jean-Yves Thibon, Canonical bases of q-deformed Fock spaces, arXiv:q-alg/9602025"
      url: "https://arxiv.org/pdf/q-alg/9602025"
      locator: "sec. 3-4, printed pp. 4-5: Theorem 3.3(iv) and the displayed bar matrices; Theorem 4.1 and the $n=2$ lower transition matrices through degree six."
---

## Example

At $e=2$ the ambient lower basis in degrees $\le3$ is
$\varnothing\mapsto|\varnothing\rangle$, $1\mapsto|1\rangle$,
$11\mapsto|11\rangle$, $2\mapsto|2\rangle+q|11\rangle$,
$111\mapsto|111\rangle$, $3\mapsto|3\rangle+q|111\rangle$,
$21\mapsto|21\rangle$. The basic labels in these degrees are
$\varnothing,1,2,3,21$ (not $11$ or $111$). In degree $4$, rows and columns
ordered $4,31,22,211,1111$, the full lower transition matrix
$D$ (column $=G$-label, row $=$ standard shape) is

$$\begin{pmatrix}1&0&0&0&0\\q&1&0&0&0\\0&q&1&0&0\\q&q^2&q&1&0\\q^2&0&0&q&1\end{pmatrix}.$$

Its basic columns are $4$ and $31$. All entries lie in $\mathbb Z[q]$, the
diagonal is $1$, and off-diagonal entries lie in $q\mathbb Z[q]$, with the
proved dominance and core bounds. The apparent transpose-conjugation identity
holds accidentally for the displayed degrees $\le3$ but is **false** generally:
$d_{(211),(4)}=q$ whereas $d_{(1111),(31)}=0$. The source symmetry concerns the
bar transition matrix, not $D$. The ambient bar-fixed $G(111)$ lies outside the
basic module; no arbitrary bar-fixed combination need lie in one isotypic
summand.

## Facts & Assumptions

**Given:** The $e=2$ partition Fock space with its lower global basis, dominance order, and the node actions of the small shapes.

[F1] The lower global basis is dominance-unitriangular with $q\mathbb Z[q]$ off-diagonal coefficients, same-core support and diagonal $1$; the regular labels are the lower global basis of $M$ ([[thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis]]).

[F2] Dominance is the prefix-sum order, conjugation reverses it, and the regular labels are those with part multiplicities $<2$ ([[def-dominance-order-on-partitions]], [[def-regular-partition-label-convention-and-mullineux-crystal-involution]]).

[F3] The ordinary node actions on shapes of size $\le3$ are the $e=2$ table of [[ex-level-one-fock-node-actions-for-partitions-up-to-three]].

## Verification

1.1 The degrees $\le3$. Solving the triangular bar equations degree by degree with the reversal bar: in degree $2$ the only correction of $2$ is $q\,11$; in degree $3$ the partition $21$ is the only shape whose residue multiset forces no correction and $3$ receives the correction $q\,111$; the remaining shapes are bar-fixed. This gives the displayed degree-$\le3$ elements, and the basic labels are the $2$-regular ones, namely $\varnothing,1,2,3,21$, with $11$ and $111$ non-regular. [F1, F2, F3, algebra]

2.1 The degree-four bar calculation. The finite reversal formula of [F1], at any cutoff longer than four, and straightening give $\psi|4\rangle=|4\rangle+(q-q^{-1})|31\rangle+(q^{-2}-1)|22\rangle+(q^2-1)|1111\rangle$, $\psi|31\rangle=|31\rangle+(q-q^{-1})|22\rangle+(q^2-1)|211\rangle$, $\psi|22\rangle=|22\rangle+(q-q^{-1})|211\rangle+(q^{-2}-1)|1111\rangle$, $\psi|211\rangle=|211\rangle+(q-q^{-1})|1111\rangle$ and $\psi|1111\rangle=|1111\rangle$. Substituting these five formulas, with coefficient bar, verifies the displayed columns $G(4)=|4\rangle+q|31\rangle+q|211\rangle+q^2|1111\rangle$, $G(31)=|31\rangle+q|22\rangle+q^2|211\rangle$, $G(22)=|22\rangle+q|211\rangle$, $G(211)=|211\rangle+q|1111\rangle$ and $G(1111)=|1111\rangle$: each is bar fixed with its stated leading residue and coefficients in $q\mathbb Z[q]$. Uniqueness in [F1] therefore identifies them with the lower lifts. The basic labels are the regular shapes $4,31$, and the nonzero positions visibly respect dominance. [step 1.1, F1, F2, algebra]

3.1 The false transpose symmetry. Conjugation of partitions sends $211\mapsto31$ and $4\mapsto1111$, so the transpose-conjugation equality would require $d_{(211),(4)}=d_{(1111),(31)}$; but the degree-$4$ matrix gives $d_{(211),(4)}=q$ and $d_{(1111),(31)}=0$. Hence the equality fails in general; the source's symmetry statement concerns the bar transition matrix $A$, not the lower matrix $D$. [step 2.1, F2, algebra]

4.1 Conclusion. The displayed elements are the actual lower global basis elements in degrees $\le4$, their coefficients are integral and dominance-triangular, the basic columns are the regular labels, and the naive transpose symmetry of $D$ is refuted by the explicit pair. [step 1.1, step 2.1, step 3.1] ∎
