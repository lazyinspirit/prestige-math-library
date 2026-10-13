---
page: modular-branching-and-the-good-node-crystal
title: "Modular Branching and the Good-Node Crystal"
status: published
requires: [integral-specht-modules-and-modular-simple-modules,
           cores-quotients-and-blocks-of-symmetric-groups,
           type-a-hecke-specht-modules-and-cellular-bases,
           the-branching-rule-and-the-young-graph,
           jucys-murphy-elements-and-seminormal-forms,
           group-cohomology-as-a-derived-functor]
items: [       lem-integral-jucys-murphy-symmetric-polynomials-span-the-center,
       def-generalized-jm-primary-idempotents-and-residue-summand-functors,
       def-residue-signature-normal-good-conormal-and-cogood-nodes,
       lem-finite-group-induction-is-coinduction-and-thus-biadjoint,
       def-good-node-and-cogood-node-crystal-operators,
       lem-type-a-modular-root-interval-essential-subset-basis-and-count,
       thm-kleshchev-first-level-branching-multiplicity,
       thm-normal-node-composition-multiplicities-under-residue-restriction,
       thm-conormal-node-composition-multiplicities-under-residue-induction,
       thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction,
       cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues,
       prop-every-p-restricted-partition-is-reached-by-cogood-node-additions,
       thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction,
       lem-general-hecke-residue-branching-endpoints-from-normalized-schur-cells,
       rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels,
       prop-schur-functor-compares-first-level-branching-with-hecke-restriction]
examples: []
---

This page develops the modular branching theory of the symmetric groups in
the residue convention $\operatorname{res}(r,c)=c-r\bmod p$ and in the
$p$-restricted labelling of the simple modules, and isolates the
good-node combinatorics as a self-contained crystal. The first layer fixes
the objects that make the branching computable inside $kS_n$: the
Jucys-Murphy elements $L_1,\dots,L_n$ of
[[def-jucys-murphy-elements-of-the-symmetric-group-algebra]] are used to
split the regular representation into simultaneous primary components, and
the resulting central content idempotents cut the restriction and induction
functors into residue summands $E_i$ and $F_i$. These functors are the
algebro-group-free form of the residue decomposition of the branching
problem; they are exact, additive, duality-compatible and available over an
arbitrary field of characteristic $p$, with no splitting hypothesis beyond
the fact that symmetric groups are split over their prime field. On the
combinatorial side, [[def-residue-signature-normal-good-conormal-and-cogood-nodes]]
fixes the residue signature of the $i$-nodes of a $p$-restricted partition,
the cancellation of $(-,+)$ pairs and the resulting notions of normal,
good, conormal and cogood nodes, together with the counts
$\varepsilon_i,\varphi_i$, and it records the same-shape normal/good-node dictionary
with negated residue names for Brundan's $\ell$-residue $r-c$.
[[def-good-node-and-cogood-node-crystal-operators]] turns the good and
cogood nodes into partial operators $\tilde e_i,\tilde f_i$ on
$p$-restricted partitions and proves, purely combinatorially, that they are
mutually inverse and change the rank by one.

The second layer connects the functors with the nodes.
[[lem-finite-group-induction-is-coinduction-and-thus-biadjoint]] records the
relative Frobenius isomorphism $\operatorname{Ind}\cong\operatorname{Coind}$
for a subgroup of a finite group, so that induction is both a left and a
right adjoint of restriction in the modular setting.
[[cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues]]
states the residue-refined socle theorem for $D(\mu)\downarrow_{S_{d-1}}$:
the socle is the multiplicity-free sum of the simples $D(\mu\setminus A_i)$
over the good nodes, one for each residue with $\varepsilon_i(\mu)>0$. From
this, [[prop-every-p-restricted-partition-is-reached-by-cogood-node-additions]]
derives the connectivity of the modular branching graph: every
$p$-restricted partition is reached from the empty partition by cogood-node
additions, equivalently by good-node deletions. A remark draws the boundary
of what is proved here: the level-one inductive labels agree with the cellular labels by the
proved branching endpoints and induction on rank. Identifying this graph
with the canonical Fock-space crystal is a separate theorem, and the broader
cyclotomic labelling theorem requires its own argument.

The third layer compares the branching multiplicities with the first-level
multiplicities over the algebraic group and with the Hecke algebra.
[[prop-schur-functor-compares-first-level-branching-with-hecke-restriction]]
uses the type-A $q$-Schur algebra and its Schur functor to identify the
Schur image of the first level of a simple module with the restriction of the corresponding
Hecke simple module, and transfers composition multiplicities between the
first level and the Hecke restriction; the comparison is stated at general
quantum characteristic and specialized to $q=1$.
[[thm-kleshchev-first-level-branching-multiplicity]] records Kleshchev's
first-level branching multiplicity: for a removable node $A$ of a
$p$-regular partition the multiplicity of $D^{\lambda(j)}$ in the
restriction is zero when $A$ is not normal and is one plus the number of
normal nodes strictly above $A$ in the same residue class when $A$ is
normal. The next two theorems give the residue-restriction and
residue-induction multiplicities: the multiplicity of $D(\mu\setminus A)$
in $E_iD(\mu)$ for a normal node $A$ counts the normal nodes weakly below
$A$ when $A$ is normal (and is zero otherwise), and, dually, the multiplicity of $D(\mu\cup B)$ in $F_iD(\mu)$ for a
conormal node $B$ counts the conormal nodes weakly above $B$. The layer
closes with the socle and head theorems for the extreme nodes: if $A$ is
the good node then $E_iD(\mu)$ has simple socle and head $D(\mu\setminus A)$
occurring with multiplicity $\varepsilon_i(\mu)$, and if $B$ is the cogood
node then $F_iD(\mu)$ has simple socle and head $D(\mu\cup B)$ occurring
with multiplicity $\varphi_i(\mu)$.

Throughout, $k$ is a field of characteristic $p>0$, all partitions in the
crystal statements are $p$-restricted unless stated otherwise, all
residues are read as $c-r\bmod p$ with nodes ordered top to bottom, and
every item is finite-dimensional and choice-free, with the characteristic
$2$ case included. The page records the source theorems it uses (Kleshchev's
survey and 1997 paper, and Brundan's 1998 paper) by exact locators; the
local proofs and their declared suppliers carry the mathematical arguments.
