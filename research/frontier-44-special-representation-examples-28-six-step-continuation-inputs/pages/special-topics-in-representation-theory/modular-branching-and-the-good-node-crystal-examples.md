---
page: modular-branching-and-the-good-node-crystal-examples
title: "Modular Branching and the Good-Node Crystal — Examples"
status: draft
requires: [modular-branching-and-the-good-node-crystal]
items: []
examples: [ex-good-node-path-from-empty-to-a-p-restricted-partition,
           ex-normal-and-good-nodes-for-a-large-partition]
---

**Objective.** This companion makes the good-node calculus of
[[modular-branching-and-the-good-node-crystal]] concrete on the smallest
nontrivial instances and stresses the conventions. Both entries are
dependency leaves: they consume the parent page's residue, signature and
good-node definitions and the branching theorems, and nothing outside this
page depends on anything homed here.

[[ex-good-node-path-from-empty-to-a-p-restricted-partition]] runs the
cogood-addition algorithm from the empty partition to a small
$p$-restricted partition, computing every node, residue, signature word and
reduced signature by hand, and checking both directions of the
good/cogood inverse property along the chosen path; it verifies the
reachability theorem on the instance rather than assuming it.

[[ex-normal-and-good-nodes-for-a-large-partition]] audits the
normal/good labelling on a large partition taken from Brundan's manuscript,
in both of the characteristics in which the shape is restricted. The
calculation shows that the residue list alone does not determine normality:
two removable nodes of the same residue can differ in the lattice test, so
only one of them is normal, and the good node is the topmost normal node of
its residue, not the removable node whose residue occurs once. The two
conclusions drawn from the branching theorems, decomposability of the
restriction in one characteristic and indecomposability in the other, are
spelled out with the exact socle labels, including the corrected label
$D^{(5,4,4,3,2)}=D^{\lambda(1)}$ in the even case.

Both items work in the source's transposed convention and translate the
results back to the $c-r$ residue convention of the parent page, so they
also serve as a check on the dictionary. No new prerequisites are
introduced, and no item on this page is used by another page.
