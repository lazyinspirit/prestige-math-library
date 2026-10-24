---
id: op-aqft-fusion-two-category-anomaly-classification
kind: open-problem
title: "Anomaly matching structures for fusion 2-categories"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-anomaly-matching-and-frontier
dependency_level: 6
deps:
  - def-aqft-noninvertible-defect-fusion
  - def-aqft-thooft-anomaly
  - def-aqft-global-anomaly-holonomy
  - def-aqft-anomaly-inflow-relative-theory
dependency_roles:
  def-aqft-noninvertible-defect-fusion: mathematical-premise
  def-aqft-thooft-anomaly: formulation-prerequisite
  def-aqft-global-anomaly-holonomy: formulation-prerequisite
  def-aqft-anomaly-inflow-relative-theory: formulation-prerequisite
physical_scope: "Open classification question for a fixed all-boson finite semisimple fusion 2-category symmetry in an oriented 2+1-dimensional QFT; no solution or general physical realization is claimed."
provenance:
  statement: ai-generated
  proof: not-applicable
generation:
  role: open-problem
sources:
  references:
    - title: "Andrea Antinucci, Christian Copetti, Yuhan Gai, and Sakura Schäfer-Nameki, Categorical Anomaly Matching"
      url: "https://arxiv.org/pdf/2508.00982"
      locator: "§IV.A, §VII, and Appendix A.6: anomaly categories, higher-categorical extensions, and fusion 2-categories in (2+1)d."
    - title: "Lakshya Bhardwaj, Daniel Pajer, Sakura Schäfer-Nameki, Apoorv Tiwari, Alison Warman, and Jingxiang Wu, Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part I"
      url: "https://arxiv.org/pdf/2408.05266"
      locator: "§2.1 and §3.3: bosonic-type fusion 2-category symmetries and the explicit classification of topological boundaries for the selected Z2 Dijkgraaf–Witten theory."
    - title: "Lakshya Bhardwaj, Sakura Schäfer-Nameki, Apoorv Tiwari, and Alison Warman, Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part II"
      url: "https://arxiv.org/pdf/2502.20440"
      locator: "Abstract and §2.1: the all-boson fusion 2-category SymTFT framework and its gapped-boundary description."
    - title: "Kansei Inamura, Sheng-Jie Huang, Apoorv Tiwari, and Sakura Schäfer-Nameki, (2+1)d Lattice Models and Tensor Networks for Gapped Phases with Categorical Symmetry"
      url: "https://arxiv.org/pdf/2506.09177"
      locator: "Abstract, Introduction, and summary §2.1: all-boson fusion 2-category symmetries, generalized gauging, and lattice construction of non-chiral gapped phases."
    - title: "Daniel Robbins and Subham Roy, SymTFT Actions, Condensable Algebras and Categorical Anomaly Resolutions"
      url: "https://arxiv.org/pdf/2509.05408"
      locator: "§3.3, §4.3, and §5: the Rep(D4) and Rep(Q8) anomaly-resolution sequences and the Rep(H8) case identified for further work."
    - title: "Mahesh K. N. Balasubramanian, Matthew Buican, Clement Delcamp, and Rajath Radhakrishnan, Gauging Non-Invertible Symmetries in (2+1)d Topological Orders"
      url: "https://arxiv.org/pdf/2507.01142"
      locator: "Abstract, §4.2–§4.3, and §7: constraints on gaugeable non-invertible symmetries in bosonic (2+1)d TQFTs, with spin and non-topological extensions left open."
verification:
  precheck: n/a
---

## Open problem

Use natural units $c=\hbar=1$. Fix a bosonic quantum field theory in $2+1$ spacetime dimensions on closed oriented three-manifolds, with no spin-dependent data. Fix its exact symmetry category $\mathcal C$ as a finite semisimple fusion 2-category over $\mathbb C$ in the earlier finite semisimple fusion 2-category definition: its Hom categories are finite semisimple, it is additive, every 1-morphism has left and right adjoints, separable monads split, it has finitely many equivalence classes of simple objects, every object has left and right tensor duals, and its monoidal unit is simple. Use the semistrict Gray-monoid convention, with tensor product, unit, associator, interchanger, duality maps, and coherence data specified. The objects of $\mathcal C$ are topological codimension-one surface defects; its 1-morphisms are line junctions and its 2-morphisms are point junctions. Fix the groupoid of admitted background surface and junction data and their invertible gauge-equivalence arrows, the associated space of backgrounds modulo those transformations and its admitted loops, the allowed three-dimensional local counterterms, and the class of permitted relative bulk theories. These are data of the selected QFT; the abstract category alone does not construct a physical realization.
Use natural units $c=\hbar=1$. Fix a bosonic quantum field theory in $2+1$ spacetime dimensions on closed oriented three-manifolds, with no spin-dependent data. Fix its exact symmetry category $\mathcal C$ as an all-boson finite semisimple fusion 2-category over $\mathbb C$ in the earlier finite semisimple fusion 2-category definition: its Hom categories are finite semisimple, it is additive, every 1-morphism has left and right adjoints, separable monads split, it has finitely many equivalence classes of simple objects, every object has left and right tensor duals, and its monoidal unit is simple. Use the semistrict Gray-monoid convention, with tensor product, unit, associator, interchanger, duality maps, and coherence data specified. Here all-boson type means that the symmetry can be obtained by generalized gauging from a finite ordinary 0-form group symmetry, possibly anomalous, after stacking a three-dimensional symmetry-preserving topological field theory and gauging a finite diagonal subgroup. Fix a finite group $G$ whose action on local fields is the ordinary 0-form symmetry, its anomaly class $\omega\in H^4(BG;U(1))$, the subgroup $H\leq G$ being gauged, and the stacked three-dimensional $H$-symmetric topological field theory, whose $H$ anomaly cancels the restriction $\omega|_H$. Generalized gauging means summing over the diagonal $H$-backgrounds in this stacked theory. The objects of $\mathcal C$ are topological codimension-one surface defects; its 1-morphisms are line junctions and its 2-morphisms are point junctions. Fix the groupoid of admitted background surface and junction data and their invertible gauge-equivalence arrows, the associated space of backgrounds modulo those transformations and its admitted loops, the allowed three-dimensional local counterterms, and the class of permitted relative bulk theories. These are data of the selected QFT; the abstract category alone does not construct a physical realization.

A symmetry topological field theory (SymTFT) is a $3+1$-dimensional topological field theory with a chosen symmetry boundary whose defect data realize $\mathcal C$. A relative inflow datum consists of a $3+1$-dimensional invertible bulk theory and a boundary theory whose anomaly line pairs with the inverse bulk line, so their combined background and junction phases cancel.

The current ordinary-background interfaces have bounded domains: the local perturbative anomaly is a four-dimensional infinitesimal BRST class; determinant-line holonomy is defined for a smooth family of even-dimensional Fredholm chiral Dirac operators on compact spin manifolds; and the relative boundary/bulk line interface is defined for spin bordisms. These definitions do not yet define anomaly data for the full surface-and-junction background groupoid of this oriented $2+1$-dimensional all-boson theory. The problem therefore includes constructing categorical local-variation, loop-holonomy, and oriented bulk-inflow interfaces that restrict to those ordinary definitions whenever their hypotheses apply.

For this fixed $\mathcal C$, background groupoid and quotient space, counterterm space, and class of bulk theories, define and classify up to a stated equivalence the anomaly-matching structures $\mathcal N\to\mathcal C\to\mathcal S$ and their corresponding SymTFT interfaces. Here $\mathcal N$ is intended to be a maximal anomaly-free normal full sub-2-category and $\mathcal S$ the residual symmetry; anomaly-free means that its admitted background and junction phases can be removed by allowed local counterterms with trivial residual holonomy and trivial relative bulk. Specifying the meanings of normality, maximality, quotient, injectivity, surjectivity, and exactness in this semisimple monoidal 2-category setting is part of the problem. Determine whether the resulting equivalence classes form a complete invariant of the background-transformation phases and global holonomies of $\mathcal C$, modulo the specified local counterterms, together with the compatible relative inflow data. If completeness fails, exhibit a finite semisimple counterexample and identify the missing invariant.

## Open problem references

[Antinucci, Copetti, Gai, and Schäfer-Nameki, *Categorical Anomaly Matching*, §IV.A, §VII, and Appendix A.6](https://arxiv.org/pdf/2508.00982)

[Bhardwaj, Pajer, Schäfer-Nameki, Tiwari, Warman, and Wu, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part I*, §2.1 and §3.3](https://arxiv.org/pdf/2408.05266)

[Bhardwaj, Schäfer-Nameki, Tiwari, and Warman, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part II*, Abstract and §2.1](https://arxiv.org/pdf/2502.20440)

[Inamura, Huang, Tiwari, and Schäfer-Nameki, *Lattice Models and Tensor Networks for Gapped Phases with Categorical Symmetry*, Abstract, Introduction, and §2.1](https://arxiv.org/pdf/2506.09177)

[Robbins and Roy, *SymTFT Actions, Condensable Algebras and Categorical Anomaly Resolutions*, §3.3, §4.3, and §5](https://arxiv.org/pdf/2509.05408)

[Balasubramanian, Buican, Delcamp, and Radhakrishnan, *Gauging Non-Invertible Symmetries in (2+1)d Topological Orders*, Abstract, §§4.2–4.3, and §7](https://arxiv.org/pdf/2507.01142)

## Status

The formulation and source status were reviewed on 2026-10-23. Antinucci et al. establish tensor-functor and SymTFT-interface methods for categorical anomaly matching in fusion categories, then describe a fusion-2-category extension for $2+1$d systems. They note that injective and surjective 2-functors lack established definitions and identify classification of the corresponding anomalous symmetry categories as future work. Bhardwaj et al. Parts I and II classify bosonic-type fusion-2-category SymTFT boundaries and associated $2+1$d gapped phases in abelian and non-Abelian settings. Inamura et al. give lattice constructions for all-boson non-chiral gapped phases in that framework. These are substantial phase-classification results; the fixed-$\mathcal C$ anomaly-matching sequence/interface equivalence and its completeness for local phases, global holonomies, and relative inflow remain distinct questions. The current local-anomaly, determinant-line, and relative-inflow carriers exist, but their actual interfaces cover four-dimensional infinitesimal BRST data, even-dimensional spin Dirac families, and spin bordisms respectively. The local-anomaly carrier currently has a ready Step 1 record but a stale declared dependency level; the determinant-line and relative-inflow carriers have owner-escalated Step 1 records whose stored hashes are stale. None supplies the categorical $2+1$d surface/junction extension stated in the Open problem. Robbins and Roy analyze selected Rep(D4) and Rep(Q8) categorical anomaly-resolution examples, and identify the Rep(H8) case as further work. Balasubramanian et al. derive gauging constraints and examples for bosonic $(2+1)$d topological orders, with spin-TQFT extensions left open.

The source note's older lead placed fusion 2-categories in a $3+1$d theory. The reviewed categorical sources place fusion-2-category symmetry defects in $2+1$d, so the question is scoped to oriented $2+1$d systems. Córdova, Hsin, and Zhang study specific $3+1$d non-invertible anomaly models using $4+1$d Abelian two-form bulk theories; that work supplies a separate dimensional comparison. Santaniello, Valandro, and Zorzenon study selected $1+1$d fusion-category and fiber-functor SPT cases. Neither neighboring result settles the fixed-$\mathcal C$ question stated here.

## Status references

[Córdova, Hsin, and Zhang, *Anomalies of Non-Invertible Symmetries in (3+1)d*, Abstract, Introduction, and §5](https://arxiv.org/pdf/2308.11706)

[Santaniello, Valandro, and Zorzenon, *Non-Invertible SPT Phases from Fusion Rings via Tannaka Duality*, Abstract and §7](https://arxiv.org/pdf/2610.07165)

[Bhardwaj, Pajer, Schäfer-Nameki, Tiwari, Warman, and Wu, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part I*, §§2.1–2.3 and 3.3](https://arxiv.org/pdf/2408.05266)

[Bhardwaj, Schäfer-Nameki, Tiwari, and Warman, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part II*, §2 and the S3/D8 examples](https://arxiv.org/pdf/2502.20440)
