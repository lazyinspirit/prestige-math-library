---
id: def-verma-type-of-a-module-with-a-standard-filtration
kind: definition
title: Type of a module with a Verma filtration
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-verma-module, def-bgg-category-o, def-composition-series-and-composition-factors-of-an-object, def-grothendieck-group-and-character-of-category-o, prop-the-grothendieck-group-of-o-has-simple-and-standard-bases, prop-tensoring-with-a-finite-dimensional-module-preserves-category-o, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 4.2.2, p. 22"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "P. Etingof, Representations of Lie Groups (18.757, Fall 2023), Corollary 20.5 and Exercise 20.6"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be an object of the category $\mathcal O$ of [[def-bgg-category-o]]. A **Verma filtration** of $M$ is a finite increasing filtration by $\mathfrak g$-submodules

$$0=M_0\subseteq M_1\subseteq\cdots\subseteq M_n=M$$

such that for every $j$ there is a weight $\psi_j$ with $M_j/M_{j-1}\cong M(\psi_j)$, the Verma module of [[def-verma-module]]. When such a filtration exists, $M$ is called **Verma-filtered** and one writes

$$\operatorname{Typ}M=\{\psi_1,\dots,\psi_n\},$$

a finite multiset of weights, its **type**. The multiset is independent of the chosen filtration: passing to classes in the Grothendieck group of [[def-grothendieck-group-and-character-of-category-o]] gives $[M]=\sum_j[M(\psi_j)]$, and by [[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]] the classes of the Verma modules involved have pairwise distinct characters and are linearly independent in the relevant block, so the multiset of weights is recovered from $[M]$. Consequently $\operatorname{Typ}$ is well defined. The standard example is a finite direct sum $M=\bigoplus_{r=1}^{n}M(\psi_r)$, which is Verma-filtered with type $\{\psi_1,\dots,\psi_n\}$ by taking the partial sums of the summands. Verma-filteredness is also preserved by tensoring with a finite-dimensional $\mathfrak g$-module: [[prop-tensoring-with-a-finite-dimensional-module-preserves-category-o]] keeps the module in $\mathcal O$, and the type of the tensor product is computed by the page's tensoring lemma. In particular the type of a Verma filtration is a coarser invariant than a composition series ([[def-composition-series-and-composition-factors-of-an-object]]): it records the successive Verma quotients, not the simple factors.
