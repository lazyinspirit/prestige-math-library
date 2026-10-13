---
page: modular-branching-and-the-good-node-crystal-examples
title: "Modular Branching and the Good-Node Crystal — Examples"
status: published
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

[[ex-normal-and-good-nodes-for-a-large-partition]] computes Brundan's
normal and good rows for $(6,4,4,3,2)$ at quantum characteristics $3$ and
$4$, with a trailing zero included in the lattice tests. At $\ell=3$ the
normal rows are $1,4,5$ and the good rows are $1,5$; at $\ell=4$ the normal
rows are $1,3,5$ and the sole good row is $1$. In each case, removable nodes
of the same residue have the same normality. Good rows are the least normal
rows in each residue class. The example records the corresponding source
socle labels and the decomposability conclusions that require the branching
theorem. Quantum characteristic $4$ is not a field characteristic.

The small path uses $c-r$ residues directly. The large example uses
Brundan's $r-c$ residues and transpose-labelled ordinary Dipper–James
simples; its convention must be translated explicitly when compared with
the parent page. Both examples are dependency leaves.
