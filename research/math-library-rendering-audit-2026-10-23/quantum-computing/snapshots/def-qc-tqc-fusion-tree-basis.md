---
id: def-qc-tqc-fusion-tree-basis
kind: definition
title: Multiplicity-aware fusion-tree basis
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [ def-qc-tqc-unitary-fusion-category, def-qc-tqc-fusion-multiplicity-space, thm-qc-tqc-fusion-multiplicity-space-is-hilbert ]
justified_by: [ lem-qc-tqc-fusion-tree-dimension ]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, Exercise 3.5.16, PDF pp. 14–15: orthogonal tree bases and F-matrices."
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "§II.A, PDF pp. 4–6: fusion trees and multiplicity-channel bases."
---

## Definition

Let $\mathcal C$ be a unitary fusion category and fix a set
$\operatorname{Irr}(\mathcal C)$ of representatives for the simple
isomorphism classes, with the tensor unit $\mathbf1$ itself representing its
class. Throughout this definition, the ordered input charges
$a_1,\ldots,a_n$, total charge $d$, and all internal edge charges are labels
in $\operatorname{Irr}(\mathcal C)$. Also fix a parenthesized binary fusion
tree. At each internal vertex with incoming charges $x,y$ and outgoing charge
$z$, choose one vector from an orthonormal basis of $V_{xy}^z$. An
**admissible labeling** assigns a representative charge to each internal edge
so that each chosen vertex basis is nonempty; a separate multiplicity-basis
index is retained at every vertex. Compose the vertex morphisms, inserting the
associators required by the chosen tree, to obtain a morphism from the
parenthesized input tensor to $d$. These composite morphisms are the
**fusion-tree vectors**. The family is called a **fusion-tree basis** when it
is an orthonormal basis of the fixed-input, fixed-total fusion space. For the
empty input list the tensor is $\mathbf1$ and its empty tree vector is
$\operatorname{id}_{\mathbf1}$ when $d=\mathbf1$; for one input $a_1$, the
only tree vector is $\operatorname{id}_{a_1}$ when $d=a_1$. The next local
lemma proves the basis property for every finite input list and includes the
dimension recursion ([[lem-qc-tqc-fusion-tree-dimension]]).

## Tree convention

The left-associated three-input tree has leaves $a,b,c$ in that order, internal
charge $e$ after fusing $a,b$, and output $d$ after fusing $e,c$:

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center)]
  \coordinate (a) at (0,0);
  \coordinate (b) at (2,0);
  \coordinate (c) at (4,0);
  \coordinate (e) at (1,1.2);
  \coordinate (r) at (2.5,2.2);
  \coordinate (d) at (2.5,3.2);
  \draw (a) -- (e) -- (r) -- (d);
  \draw (b) -- (e);
  \draw (c) -- (r);
  \node at (0,-0.35) {$a$};
  \node at (2,-0.35) {$b$};
  \node at (4,-0.35) {$c$};
  \node at (0.75,0.75) {$e$};
  \node at (2.5,3.55) {$d$};
\end{tikzpicture}
```

The drawing records only the parenthesization and edge labels. The basis vector
is the composite morphism specified above; no proof depends on the diagram.

