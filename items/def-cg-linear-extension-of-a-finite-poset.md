---
id: def-cg-linear-extension-of-a-finite-poset
kind: definition
title: "Linear extensions of a finite poset"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 0
deps: [def-partial-order, def-chain]
justified_by: [lem-cg-finite-poset-linear-extensions-and-connectivity]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. R. Stembridge, On the Fully Commutative Elements of Coxeter Groups, author manuscript (March 1995, minor revisions September 1995); published in J. Algebraic Combin. 5 (1996), 353-385"
      url: "https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf"
      locator: "§1.2, PDF pp. 4-5: the heap of a word is a poset on its positions, and its linear extensions are the listings used to read off words"
    - title: "C. Krattenthaler, The theory of heaps and the Cartier-Foata monoid, appendix to the electronic reedition of P. Cartier and D. Foata, Problemes combinatoires de commutation et rearrangements (2006)"
      url: "https://www.mat.univie.ac.at/~kratt/artikel/heaps.pdf"
      locator: "§3 'Equivalence with the Cartier-Foata monoid', PDF pp. 4-5: words are read from the linear extensions of a heap"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $(P,\preceq)$ be a finite poset and write $x\prec y$ for $x\preceq y$ with $x\ne y$, the strict order of [[def-partial-order]]. A **linear extension** of $P$ is a tuple $\pi=(x_1,\dots,x_n)$ that lists every element of $P$ exactly once and is such that $x\prec y$ implies that $x$ occurs before $y$ in $\pi$: that is, $x=x_i$ and $y=x_j$ with $i<j$.

Equivalently, a linear extension is the strict total order $x_1\sqsubset x_2\sqsubset\cdots\sqsubset x_n$ on the underlying set of $P$ determined by the listing, which extends $\prec$; with respect to it the whole set $P$ is a chain ([[def-chain]]). For $x\in P$ the index $i$ with $x=x_i$ is the **position** of $x$ in $\pi$. Since a linear extension is a listing without repetitions, it has exactly $n$ entries and every element of $P$ occurs exactly once; the empty poset has the empty linear extension $()$.

Nothing else is asserted here: in particular it is not part of the definition that a linear extension exists. For every finite poset existence is proved in [[lem-cg-finite-poset-linear-extensions-and-connectivity]], which also shows that a prescribed order ideal can be made the initial segment of a linear extension and that any two linear extensions are connected by adjacent interchanges of incomparable elements.
