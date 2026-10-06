# Batch 23 choice-free leaf/transversal countability audit

**Scope.** Research-only attempt to remove the maximal-leaf theorem's
\(\mathrm{AC}_\omega\) cost from the countability step in the
distinct-saddle-leaf perturbation. No item, manifest, receipt, coverage map,
or controller state was changed.

## Finding

Given a **fixed countable foliation-box atlas**, the leaf/transversal
intersection lemma has a choice-free proof. The proof explicitly codes every
plaque in a leaf by a finite chart chain and a least-index code for each
overlap component. It avoids both the second-countable-leaf theorem and the
countable-union-of-countable-sets principle. Consequently, with a fixed
countable atlas, the finite saddle-leaf perturbation itself uses no choice:
only finitely many charts, bumps, and transverse values are selected.

There is a separate issue for the current batch-23 hypotheses. The canonical
`def-regular-foliation-atlas` does not require the atlas to be countable. To
get a countable foliation-box atlas from only second countability of the
ambient manifold, the library invokes
`thm-second-countable-implies-lindelof`, whose proof uses \(\mathrm{AC}_\omega\)
to select a cover member for each eligible basis element. This is the exact
choice step in the present route. I have not shown that it is logically
indispensable for every individual foliation; the choice-free lemma is proved
conditional on the countable atlas being supplied as data. A proof using this
route must either make that atlas explicit in the hypotheses or retain the
\(\mathrm{AC}_\omega\) needed to obtain it.

## Choice-free coding from a fixed countable atlas

Assume the foliation is presented by a sequence of foliation boxes
\((Q_a,\phi_a)_{a\in\mathbb N}\). Write each chart as
\(\phi_a:Q_a\to O_a\subset\mathbb R^k\times\mathbb R^q\), where
\(k\) is the leaf dimension. Fix once and for all the usual countable basis
\((R_r)_{r\in\mathbb N}\) of connected rational boxes in \(\mathbb R^k\).
The atlas sequence and this basis are data; no subcover or family of bases is
selected.

Fix a point \(p\) and its leaf \(L\). Let \(a_0\) be the least index with
\(p\in Q_{a_0}\), and let \(P_0\) be the unique plaque of \(Q_{a_0}\)
containing \(p\). A **state** is a plaque \(P\) in a specified box \(Q_a\).

Suppose \(P\) is a state in \(Q_a\), and choose a next chart index \(b\).
In the intrinsic plaque coordinates of \(P\), the intersection
\(P\cap Q_b\) is an open subset of an open subset of \(\mathbb R^k\).
Its connected components are open. For each such component \(C\), define

\[
r(C)=\min\{r\in\mathbb N:R_r\subset\phi_a(C)\}.
\]

The minimum exists because \(\phi_a(C)\) is nonempty and open. Distinct
components receive distinct indices: one connected basis box cannot be
contained in two disjoint components. Conversely, for a proposed index \(r\),
if \(R_r\subset\phi_a(P\cap Q_b)\), connectedness of \(R_r\) puts it in a
unique component \(C\). Thus \((b,r)\) determines at most one component
\(C\), with no selection of a component.

The overlap maps preserve plaques. Equivalently, the new transverse
coordinate is locally constant on the connected set \(C\). It is therefore
constant on \(C\), which lies in a unique plaque \(P'\) of \(Q_b\). Define
the successor of \(P\) under code \((b,r)\) to be this unique \(P'\) when
the containment test is satisfied; otherwise the code is invalid. This gives
a deterministic partial decoding rule.

Now encode a finite chart chain by a finite word

\[
((b_1,r_1),\ldots,(b_n,r_n))\in(\mathbb N\times\mathbb N)^{<\omega}.
\]

Starting from \(P_0\), decode its successive states. Each code produces at
most one final plaque. Every plaque in \(L\) is produced by some code:
by the definition of a leaf, it is joined to \(P_0\) by a finite chain of
intersecting plaques. For a transition from \(P_{j-1}\) to \(P_j\), take
the connected component of \(P_{j-1}\cap Q_{b_j}\) containing an
intersection point with \(P_j\). Plaque preservation puts that component
inside \(P_j\); its least rational-box index \(r_j\) decodes exactly
\(P_j\).

The set \((\mathbb N\times\mathbb N)^{<\omega}\) has an explicit Gödel
coding into \(\mathbb N\), so it is countable in ZF. The valid codes ending
at any fixed chart \(Q_b\) form a subset of that countable set. Their
decoded plaques therefore form an at-most-countable family: assign each
plaque the least Gödel code that decodes to it. This is an injection into
$\mathbb N$, with no appeal to a countable union of countable families.

Let \(\tau:J\to Q_b\) be a vertical transverse interval in that box, with
its leafwise coordinate fixed. Each plaque of \(Q_b\) meets \(\tau(J)\) in
at most one point: its transverse coordinate is fixed on the plaque, and
the leafwise coordinate is fixed on \(\tau\). Every point of \(L\cap\tau(J)\)
belongs to one of the countably many decoded plaques in \(Q_b\). Hence
\(L\cap\tau(J)\) is at most countable. This proof uses the atlas topology
and finite plaque chains directly. It does not need to give \(L\) a global
second-countable manifold structure.

## Consequence for the saddle perturbation

At each saddle \(p_i\), use a target foliation box and a short vertical
transversal \(\tau_i\). For each of the finitely many previously assigned
saddle leaves \(L_j\), the forbidden set \(\tau_i^{-1}(L_j)\) is
countable by the preceding result. Their finite union is countable. Every
open transverse interval is uncountable, so its complement meets every
neighborhood of the old transverse coordinate.

Choose a transverse value in that complement. Add a small constant shift to
the transverse coordinate of the disk map on a neighborhood of \(p_i\), and
cut it off in a compact annulus containing no characteristic zero. The
derivative on that annulus has a positive lower bound, so a sufficiently
small shift creates no zero; near \(p_i\) the shift is constant, preserving
its critical point and Hessian. Use disjoint source disks for the finite
saddle set. The boundary collar and all centers remain untouched, and later
shifts do not move earlier saddle images. All choices here are finite. Thus,
conditional on the fixed countable box atlas, the full relative perturbation
is choice-free.

## Exact boundary of the conclusion

The fixed-atlas proof removes the maximal-leaf theorem's countable-union step:
it replaces “countably many successor plaques at each stage, then take a
countable union” with one explicit code for each finite chain. It also avoids
using the intrinsic leaf topology, which matters because leaves need not be
embedded and their subspace topology can differ from their manifold
topology.

It does **not** extract the fixed countable atlas from an arbitrary
uncountable atlas. The current library's exact AC\(_\omega\) use for that
extraction is visible in `thm-second-countable-implies-lindelof`, step 1.1:
for each eligible member of a countable ambient basis, choose one foliation
box containing it. The fixed-atlas coding proof starts only after this
countable sequence has been supplied. Therefore it removes AC\(_\omega\)
from the leaf/transversal countability and finite perturbation once a
countable foliated atlas is part of the data; by itself it does not remove
the need for AC\(_\omega\) from the general second-countable-manifold
formulation used in the current scaffold.
