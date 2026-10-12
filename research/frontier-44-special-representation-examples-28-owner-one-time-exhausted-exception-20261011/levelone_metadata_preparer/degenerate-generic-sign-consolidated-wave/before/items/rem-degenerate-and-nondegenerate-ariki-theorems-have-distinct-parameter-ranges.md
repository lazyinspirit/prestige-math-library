---
id: rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges
kind: remark
title: "The degenerate and nondegenerate Ariki theorems have distinct parameter ranges"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 42
deps: [thm-degenerate-ariki-categorification,
       def-degenerate-cyclotomic-hecke-algebra,
       def-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction, printed pp. 1-4: (1.2), Main Theorem, Corollaries 1-2 and the following generic-equivalence and cross-characteristic comparison paragraphs; recovered full-article text, these passages read by this constructor."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, arXiv:0901.0057v1"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Introduction, printed pp. 1-3: integral versus modular charges, generic gl-infinity setting, Corollary-2 comparison and intrinsic Specht prerequisite; recovered full-article text, this introduction read by this constructor."
verification:
  precheck: n/a
---

## Statement

The degenerate theorem [[thm-degenerate-ariki-categorification]] concerns
the tower over $\mathbb C$ with integral multicharge
$m_1\ge\cdots\ge m_l$, additive cyclotomic roots $m_j$, and the
$\mathfrak{gl}_{I^+}$ Fock/highest-weight data. Its Grothendieck-group,
projective/simple, standard-class and decomposition-number identifications
are ungraded at the basis parameter one. That parameter is independent of
the nondegenerate numerical Hecke parameter $\xi$.

There are two distinct nondegenerate comparisons. In the generic branch,
$\xi\in\mathbb C^\times$ has infinite multiplicative order,
$Q_j=\xi^{m_j}$, residues are integers and the quiver is type $A_\infty$
(quantum characteristic $e=0$). The characteristic-zero generic theorem is
equivalent to the degenerate theorem through the coherent comparison of
towers and standard classes described below. At a primitive $e$-th root of
unity $\xi\ne1$, residues are modulo $e$ and the datum is cyclic affine type
$A^{(1)}_{e-1}$, including the double edge at $e=2$. The latter theorem needs
its own comparison and categorification results; it does not follow by
specializing the generic algebra isomorphism.

## Generic comparison and preserved based claims

Brundan--Kleshchev's Corollary 2 in *Blocks of cyclotomic Hecke algebras*
states the characteristic-zero algebra isomorphism for $\xi$ not a root of
unity and integral charges. The following paragraph records equivalence of
the generic and degenerate categorification theorems. The introduction to
*The degenerate analogue* additionally names the intrinsic Specht structure
used in this comparison. These are statements of the sources; their complete
local implementation requires more than the existence of an arbitrary
algebra isomorphism at each rank.

The preserved generic based/tower branch has the following precise scope.
A coherent word-preserving comparison on full rank algebras and supported
central cuts identifies the integer residue projectors and the actual
induction/restriction bimodules. Its exact equivalences identify simple
classes and indecomposable projective classes and preserve the Cartan
pairing. Composing with the degenerate identifications gives the mutually
dual highest-weight lattices, the projective canonical family at parameter
one, the simple dual-canonical family and the Chevalley operators. With the
additional standard-class dictionary, the intrinsic nondegenerate Specht
classes have the same standard-vector images and hence the same
$d_{A,B}(1)$ decomposition coefficients. A match of these $G_0$ classes
does not assert an isomorphism of individual Specht modules or untwisted
same-shape simple labels.

For any admitted consecutive residue interval $I$, including $\mathbb Z$
and half-infinite intervals, this is a blockwise statement. Finite cuts must
contain all charges in the letter alphabet, the selected root supports and
the shifts needed for the chosen residue operations. Compatible lower and
upper cuts then glue these same blocks, labels and functors. No proper
supported cut is identified with the whole algebra. Level zero retains only
the ground block in rank zero. The same cuts, dual lattices and normalizations
of the degenerate theorem are retained in the generic branch.

**Proof prerequisite for this draft.** The preceding generic based/tower
clauses are retained as the intended comparison, conditional on the coherent
generic support/local-inverse/tower suppliers, the standard-class dictionary
and its actual degenerate projective-highest-weight, Schur-standard and
Ariki inputs. The companion construction receipt records their current
holds. No full generic based-equivalence acceptance is asserted here, and no
finite-$e$ supplier is instantiated at $e=0$.

## Root parameters and characteristics

For the level-one root-of-unity track the current regime is charge $0$,
$\Lambda_0$, $\xi\ne1$ and finite quantum characteristic
$e\ge2$. In characteristic zero, canonical/global-basis coefficients give
the characteristic-zero decomposition theorem with the track's fixed
partition and sign conventions. The graded version additionally requires
the KLR grading and graded categorification; an ungraded coefficient at
basis parameter one is not itself a graded decomposition polynomial. In
positive characteristic $p$, a primitive $e$-th root in a field requires
$p\nmid e$; the characteristic-zero generic equivalence supplies no assertion
that the positive-characteristic adjustment matrix is the identity.

The degenerate parameter $\xi=1$ in the Hecke/KLR dictionary has quantum
characteristic $0$ over $\mathbb C$, but quantum characteristic $p$ over a
field of characteristic $p$. Thus "degenerate" does not mean $e=0$ over all
fields. Brundan--Kleshchev also discuss comparisons between complex
root-of-unity blocks and degenerate blocks in characteristic $p$; those
additional results do not identify the two characteristic-zero algebras
in the witness below. No general positive-characteristic decomposition
formula is claimed.

## The local obstruction

At level one and rank two over $\mathbb C$, the degenerate quotient is
$\mathbb C[S_2]\cong\mathbb C\oplus\mathbb C$, whereas at $\xi=-1$ the
nondegenerate quotient is $\mathbb C[T]/((T+1)^2)$. The first has no nonzero
nilpotents and two simples; the second has a nonzero radical and one simple.
The complete presentation-level computation and an explicit rank-two
comparison whose inverse fails at $\xi=-1$ appear in
`cex-the-degenerate-ariki-theorem-does-not-imply-the-nondegenerate-one`.
This establishes failure of universal root-parameter algebra transport. It
does not establish that every root specialization is different or that
additional root-of-unity theorems are impossible.
