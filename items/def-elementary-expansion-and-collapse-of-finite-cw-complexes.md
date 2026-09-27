---
id: def-elementary-expansion-and-collapse-of-finite-cw-complexes
kind: definition
title: "Elementary expansions and collapses of finite CW complexes"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-skeleta-cw-subcomplex-and-relative-cw-complex, prop-relative-cw-inclusions-are-cofibrations, lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts, def-cw-complex-with-closure-finiteness-and-weak-topology, def-cell-attachment-by-a-characteristic-map]
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Lück, §2.3, pp.34–35"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "§2.3, pp.34–35"
    - title: "Cohen, §7, pp.24–26"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§7, pp.24–26"
    - title: "Casson, Simple Homotopy Theory, §4, p.30"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassonsimp.pdf"
      locator: "§4, printed p.30, elementary expansion by two cells"
---
## Definition

Let $X$ be a finite CW complex and let $n\ge1$. Write
$D^n=\{x\in\mathbb R^n:|x|\le1\}$ for the closed unit ball, $S^{n-1}=\partial D^n$
for its boundary sphere, and $D^{n-1}_+=\{(x,t)\in S^{n-1}:t\ge0\}$ for a closed
upper hemisphere of $S^{n-1}$.

An **elementary expansion** of $X$ of dimension $n$ is an inclusion
$X\hookrightarrow Y$ of CW complexes together with a homeomorphism
$\Phi:(D^n,D^{n-1}_+)\to(Q^n,Q^{n-1})$ of ball pairs and a continuous map
$\varphi:Q^n\to Y$ such that

- $\varphi$ is a characteristic map for a new $n$-cell $e^n=\varphi(Q^n\setminus\partial Q^n)$,
- $\varphi|_{Q^{n-1}}$ is a characteristic map for a new $(n-1)$-cell
  $e^{n-1}=\varphi(Q^{n-1}\setminus\partial Q^{n-1})$,
- the remaining boundary is old: $\varphi\bigl(\partial Q^n\setminus
  \operatorname{int}Q^{n-1}\bigr)\subseteq X$, and
- $Y=X\cup e^{n-1}\cup e^n$ as a CW complex, with $X$ a subcomplex.

The new $(n-1)$-cell is called the **free face** of the new $n$-cell.
The restriction of $\varphi$ to $Q^{n-1}$ maps its interior homeomorphically
onto $e^{n-1}$ and maps its boundary into $X$; it need not be a homeomorphism
onto the closed cell, whose attaching map may identify boundary points.
The complementary boundary of $Q^n$ maps into $X$. In particular, an
attachment of only one $n$-cell to a complex already containing the alleged
free face is not an elementary expansion under this definition.

We say that $Y$ **collapses** to $X$ by an **elementary collapse** and write
$Y\searrow X$ when $X\hookrightarrow Y$ is an elementary expansion; the
elementary collapse is the inverse formal operation removing the pair
$(e^{n-1},e^n)$. A finite sequence of elementary expansions and elementary
collapses, each performed relative to the cells retained by the previous steps,
is a **formal deformation**; when every cell of a subcomplex $X_0$ is retained
throughout, the deformation is written relative to $X_0$, and the operations are
then said to fix the retained subcomplex. The one-cell case $n=1$ attaches a new
vertex and a new edge joining it to an old vertex, the new vertex
being the free face.
