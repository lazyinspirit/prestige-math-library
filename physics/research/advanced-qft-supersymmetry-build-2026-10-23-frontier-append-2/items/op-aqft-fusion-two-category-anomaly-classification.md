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

Use natural units $c=\hbar=1$. Fix an oriented bosonic $2+1$-dimensional theory and an exact all-boson finite semisimple fusion 2-category symmetry $\mathcal C$ over $\mathbb C$, using the earlier Gray-monoid convention, adjoints, tensor duals and split separable monads. Objects, 1-morphisms and 2-morphisms label surface defects, line junctions and point junctions respectively. All-boson type here means the class obtainable by generalized gauging from a finite ordinary group $G$, possibly with anomaly $[\omega]\in H^4(BG;U(1))$: stack an $H$-symmetric three-dimensional topological theory for a finite subgroup $H\leq G$ and gauge diagonal $H$, with its anomaly canceled in the stacked system. Retain the full stacked theory, including nonminimal choices; it need not be an invertible phase. Fix a particular symmetry-boundary realization $B_{\mathcal C}$ in the $3+1$-dimensional symmetry topological field theory $Z(\mathcal C)$. Different boundaries realizing an equivalent abstract symmetry category are not silently identified.

Consider marked diagrams $\mathcal N\xrightarrow{I}\mathcal C\xrightarrow{P}\mathcal S$ of finite semisimple monoidal 2-categories and linear monoidal 2-functors, together with chosen symmetry boundaries $B_{\mathcal N},B_{\mathcal S}$, gapped interfaces $\mathcal I_I,\mathcal I_P$ between their SymTFTs, and specified identifications of each transported source symmetry boundary with the corresponding target symmetry boundary (the source's Matching Equation). The marking includes the object, junction and point-junction transport, their composition and tensor coherences, and all endpoint spaces and composition maps of bulk defects on the boundaries and interfaces. An endpoint is an allowed boundary or interface junction terminating a bulk topological defect. Two such marked diagrams are equivalent when monoidal 2-equivalences of $\mathcal N$ and $\mathcal S$, the identity of the fixed marked $\mathcal C$, invertible monoidal transformations of the two functors, and equivalences of the interfaces and endpoint data intertwine all these markings and coherences. This is not equality merely of lists of defect labels.

Classify the equivalence classes of such diagrams that realize higher anomaly-matching sequences in the following operational sense suggested by the SymTFT construction: every defect endable on $B_{\mathcal C}$ is endable on $\mathcal I_I$; the only sectors endable both on $B_{\mathcal C}$ and on $\mathcal I_P$ are sums of the vacuum sector; and transport through both interfaces identifies the defects from $Z(\mathcal N)$ with the defects endable on $B_{\mathcal S}$, including their junction endpoint data. A required part of the problem is to give the coherent categorical version of these endability conditions and prove that it is invariant under the stated equivalence. Determine its intrinsic formulation in monoidal 2-functor language, including which notions of kernel, normality, embedding, dominance and exactness it actually induces. Do not assume the ordinary fusion-category definitions extend unchanged, or assume that a unique maximal anomaly-free full sub-2-category exists.

Seek a description in the finite-group, degree-four cocycle and fusion-category data of the all-boson classification. It must include the finite-group extension benchmark $2\mathrm{Vec}_N\to2\mathrm{Vec}^{p^*\omega}_G\to2\mathrm{Vec}^{\omega}_{G/N}$ and determine the validity and precise hypotheses of the proposed analogous finite-2-group extension, retaining nonsplit Postnikov data. Is the full marked endability/transport invariant complete for the interface equivalence above? If not, exhibit inequivalent finite semisimple marked interfaces with identical proposed invariant and identify the additional junction/coherence datum needed. Classifying gapped phases or abstract fusion 2-categories alone is not this question; neither is a finite enumeration of boundary choices assumed.

As an additional compatibility target, construct the categorical background and relative bulk response data carried by these interfaces and identify their invertible subsector. General SymTFTs can be noninvertible and require categorical state and junction spaces, so scalar local variations, line holonomies and invertible inflow are not asserted to be complete invariants of the full problem. On ordinary backgrounds where the earlier suppliers' hypotheses actually apply, the invertible restriction should reproduce their four-dimensional local BRST class, even-dimensional spin Dirac determinant holonomy, and spin relative-line inflow respectively. Those earlier interfaces neither construct oriented $2+1$-dimensional categorical backgrounds nor prove this extension. No classification, physical realization of an arbitrary abstract diagram, or anomaly-matching theorem is asserted here.

## Open problem references

[Antinucci, Copetti, Gai, and Schäfer-Nameki, *Categorical Anomaly Matching*, §IV.A, §VII, and Appendix A.6](https://arxiv.org/pdf/2508.00982)

[Bhardwaj, Pajer, Schäfer-Nameki, Tiwari, Warman, and Wu, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part I*, §2.1 and §3.3](https://arxiv.org/pdf/2408.05266)

[Bhardwaj, Schäfer-Nameki, Tiwari, and Warman, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part II*, Abstract and §2.1](https://arxiv.org/pdf/2502.20440)

[Inamura, Huang, Tiwari, and Schäfer-Nameki, *Lattice Models and Tensor Networks for Gapped Phases with Categorical Symmetry*, Abstract, Introduction, and §2.1](https://arxiv.org/pdf/2506.09177)

[Robbins and Roy, *SymTFT Actions, Condensable Algebras and Categorical Anomaly Resolutions*, §3.3, §4.3, and §5](https://arxiv.org/pdf/2509.05408)

[Balasubramanian, Buican, Delcamp, and Radhakrishnan, *Gauging Non-Invertible Symmetries in (2+1)d Topological Orders*, Abstract, §§4.2–4.3, and §7](https://arxiv.org/pdf/2507.01142)

## Status

This is an owner-adopted frontier open problem, with adoption and independent bounded source reading recorded in `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/batch43-root-open-problem-adoption.json`. Adoption approves the precise research question; it does not assert a solution or independent proof acceptance. A bounded source/status review was performed on 2026-10-23. Antinucci et al., Appendix A.6, pp.46–47, explicitly distinguish already classified bosonic fusion 2-categories and SymTFT boundaries from the proposed higher anomaly-matching sequences: they formulate embedding/dominance/exactness through defect endability, give the finite-group example (A.64), propose the finite-2-group analogue (A.66), and identify classification of the higher anomalous symmetry structures as future work. The marked coherent formulation above sharpens that research direction; its full classification or completeness is not claimed to be a published conjecture verbatim.

The present review actually read that appendix through (A.66), Part II's abstract and introduction through §2.1 (PDF1–8), and the lattice paper's introduction and §2.1 (PDF6–11). Part II treats all-boson and emergent-fermion types separately. The lattice paper explicitly allows nonminimal stacked topological theories, multiple symmetry boundaries and infinitely many gapped phases; its construction of all-boson nonchiral gapped phases does not by itself settle the marked anomaly-matching-interface problem. These limitations prevent mislabeling ordinary gapped-phase classification as open or claiming invertible lines capture every categorical anomaly. The other listed papers retain the original author's source leads; their full texts were not newly reviewed in this repair.

A current bounded arXiv Atom search for fusion-2-category anomaly, categorical anomaly matching, ASCies, and higher exact-sequence/tensor-2-functor terms found the matching paper and neighboring work, including higher-dimensional and mixed-state results. This is evidence of the review performed, not an exhaustive literature theorem or a proof that no solution exists. Exact queries, retrieval hashes, titles and reading limits are recorded in the accompanying owner-resolution evidence. The root owner adopted this formulation after reading Appendix A.6 through (A.66), the Part II abstract and selected lattice introduction/classification passages. This item is never a logical prerequisite for an established result. Workflow readiness and declared dependency levels are recorded outside this mathematical question.

## Status references

[Córdova, Hsin, and Zhang, *Anomalies of Non-Invertible Symmetries in (3+1)d*, Abstract, Introduction, and §5](https://arxiv.org/pdf/2308.11706)

[Santaniello, Valandro, and Zorzenon, *Non-Invertible SPT Phases from Fusion Rings via Tannaka Duality*, Abstract and §7](https://arxiv.org/pdf/2610.07165)

[Bhardwaj, Pajer, Schäfer-Nameki, Tiwari, Warman, and Wu, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part I*, §§2.1–2.3 and 3.3](https://arxiv.org/pdf/2408.05266)

[Bhardwaj, Schäfer-Nameki, Tiwari, and Warman, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part II*, §2 and the S3/D8 examples](https://arxiv.org/pdf/2502.20440)
