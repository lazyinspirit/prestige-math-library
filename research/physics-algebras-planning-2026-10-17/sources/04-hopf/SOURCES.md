# Source manifest — Hopf and quantum-group lane

This manifest records the sources actually consulted for dossier 04. Extracting a PDF is not a claim that its entire text was read. Page numbers below are printed pagination where identifiable; section locators are included to make selected reading auditable. Frontier versions are arXiv versions visible by 17 October 2026 and are cited as preprints unless publication status has separately been confirmed.

## Core references

### Etingof–Gelaki–Nikshych–Ostrik, *Tensor Categories*

- Authors: Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, Victor Ostrik.
- Edition: AMS Mathematical Surveys and Monographs 205 (2015), final author copy hosted by MIT with publisher permission.
- URL: https://math.mit.edu/~etingof/egnobookfinal.pdf
- Artifacts: etingof-gelaki-nikshych-ostrik-tensor-categories-author-copy.pdf and extracted egnobook.txt.
- Read selected printed pages/sections, not the entire book:
  - §§1.9–1.13, pp. 12–18: coalgebras/coends/reconstruction, finite dual, pointed coalgebras and coradical filtration.
  - §§2.1–2.3, pp. 21–29; §§2.8–2.10, pp. 36–42: monoidal structure/coherence and left/right duals, rigidity.
  - §4.7, pp. 73–76: pivotal/spherical structures and quantum traces.
  - §§5.1–5.8, pp. 91–106: reconstruction, antipode hypotheses, generic and root-of-unity Uq(sl₂), Uq(g), quantum Frobenius and finite representations.
  - §§5.12–5.14, pp. 110–115: quasi-bialgebras, quasi-Hopf algebras and twisting.
  - §§6.4–6.5, pp. 126–129: distinguished invertible objects and quasi-Hopf integrals/unimodularity. Other portions of Chapter 6 were not read.
  - §§7.13–7.15, pp. 162–166: centers, finite-dimensional doubles and Yetter–Drinfeld modules.
  - §7.23, pp. 186–189: weak Hopf algebras, source/target bases, relative tensor product and multifusion representation categories.
  - §§8.1–8.6, pp. 195–208: braiding, quasitriangular Hopf algebras, centers and factorizability.
  - §§8.9–8.11, pp. 214–221: Drinfeld morphism, ribbon categories/Hopf algebras and framed Reshetikhin–Turaev invariants.
  - §§8.13–8.14, pp. 224–229: premodular/modular definition, S-matrix and Verlinde formula.
  - §8.18.2, pp. 235–237: a specified root-of-unity tilting quotient/Verlinde category, with simply-laced and sufficiently large odd-order assumptions in the setup; sl₂ level details.
  - §8.20, pp. 239–245: centralizers and nondegeneracy.
  - §§8.23–8.24, pp. 249–256: de-equivariantization and braided G-crossed categories.
  - §8.25, pp. 256–261: braided Hopf/Nichols algebras, bosonization and pointed Hopf algebras.
  - §§9.1–9.2, pp. 275–279: Ocneanu rigidity and induction to the center.
- Evidence and convention limits: §5.3 notes that some authors do not assume antipodes bijective; the local Hopf definition likewise does not. §5.4 distinguishes infinite reconstruction, with completed tensor products, from finite-dimensional reconstruction. Generic Uq universal R is not an element of H⊗H; its sum terminates on finite-dimensional type-I modules in the stated example. Root-of-unity forms and order restrictions are not interchangeable. The finite double and YD conventions must be translated against the local H^{*op}⊗H normal order.
- This is selected textbook reading, not a complete proof audit of all cited chapters.

### Etingof–Semenyakin, *A Brief Introduction to Quantum Groups*

- Authors: Pavel Etingof and Andrey Semenyakin.
- Source: arXiv:2106.05252v3, 6 November 2024.
- URL: https://arxiv.org/abs/2106.05252
- Artifacts: etingof-semenyakin-quantum-groups-arxiv-2106.05252.pdf and extracted etingof-semenyakin-quantum-groups.txt.
- Read all of lecture-note §§2–5, printed pp. 3–42. Topics include Hopf/module tensor categories and antipode conventions; finite doubles, centers and YD modules; generic/root Uq(sl₂), Frobenius and universal R; formal hbar quantum groups/Poisson–Lie groups; affine Uq(sl₂), evaluation modules, Drinfeld polynomials, spectral-parameter R, Yangians/FRT/q-characters.
- Hypotheses/limits read: notes warn that antipode bijectivity is conventional in much literature rather than automatic. The generic R-matrix is completed and acts on the specified locally E-nilpotent modules. The evaluation representation is not generally a Hopf morphism; the affine finite-dimensional category is not genuinely braided because spectral R-matrices can have poles and tensor products can be nonsplit. This is a focused reading of the complete lecture-note portion, not an independent audit of every cited result.

### Michael Müger, *Tensor Categories: A Selective Guided Tour*

- Source: arXiv:0804.3587v3, 18 June 2010 (the text itself says updated 26 November 2024; the source identifier/version is as above).
- URL: https://arxiv.org/abs/0804.3587
- Artifacts: muger-tensor-categories-arxiv-0804.3587.pdf and muger-tensor-categories.txt.
- Read selected portions: §§1.1–1.6 on strict/non-strict tensor categories, coherence, duality, linear and *-structure; §2 on symmetric tensor categories and fiber functors; §3 on pivotal data, left/right traces, dimensions and fusion/FP dimension; §§4.1–4.3 on braided categories, tangles, doubles/centers and deformation; selected §5 modular-category and C*-tensor/Tannaka passages.
- Limits: this is a short, selective course/tour and expressly does not treat quantum groups or low-dimensional topology deeply. It is used for conceptual orientation, not as a substitute for EGNO or a full modular-category proof source. I do not claim every paragraph or every section was read.

### L. D. Faddeev, *How Algebraic Bethe Ansatz Works for Integrable Model*

- Source: arXiv:hep-th/9605187v1, 26 May 1996 (paper proceedings dated 1995).
- URL: https://arxiv.org/abs/hep-th/9605187
- Artifacts: faddeev-algebraic-bethe-ansatz-hep-th-9605187.pdf and faddeev-algebraic-bethe-ansatz.txt.
- Read: introduction and course outline; §§2–4 and associated XXX spin-½ passages on ultralocal lattice algebras, a periodic N-site chain, Lax and R matrices, FCR/RTT and monodromy, transfer-matrix commutativity, logarithmic derivative of the transfer matrix for the Hamiltonian, ABA pseudovacuum, Bethe vectors and Bethe equations. The full paper was not read.
- Physical/model limit: a concrete finite periodic spin chain. The paper presents continuum field models as limits, not as proved consequences of the finite-chain algebra. Hermiticity and real-spectrum conditions are separate from RTT commutativity.

### Olivier Schiffmann, *Lectures on Hall Algebras*

- Source: arXiv:math/0611617v2, 23 October 2009.
- URL: https://arxiv.org/abs/math/0611617
- Artifact already held in the other-algebras lane: research/physics-algebras-planning-2026-10-17/sources/06-other-physics-algebras/schiffmann-2006-hall-algebras.pdf and .txt. I read the extracted text locally from those artifacts; no duplicate PDF was added to sources/04-hopf.
- Read actual passages: introduction, printed pp. 2–4; §§1.1–1.5, printed pp. 6–16, including finitary conditions, Euler forms, Hall multiplication/associativity, Green coproduct, finite-subobject criterion and Green compatibility proof; §3.3, printed pp. 37–41, for quiver Hall algebras and quantum groups; §5.2, printed pp. 92–93, for the Drinfeld double. I did not read the whole 128-page survey, the complete Lecture 3 proof details, or the rest of Lecture 5.
- Limits stated by Schiffmann: geometric Hall theory, much of derived/cluster Hall theory, and DT counting applications are largely absent. The lecture-note source gives a foundational finite-field route but does not establish the contemporary frontier.
- Important checked hypotheses: finite Hom and Ext¹ for finitary Hall multiplication; finite global dimension and all Extᶦ finite for the displayed Euler form; hereditary abelian category for Green’s bialgebra theorem. The coproduct generally lands in a completed tensor product; finite subobjects is the distinct criterion for an ordinary tensor target. The tensor-product multiplication is twisted, and completion products are coefficientwise locally finite only on the stated domain.

## Contemporary 2026 frontier sources

All entries below were checked against the listed arXiv version and date. Local artifact names end in .pdf and .txt under this directory. The checked reading spans are intentionally partial.

### He, Kong and Li, *The Quantum Double of Hopf Algebras Realized via Partial Dualization and the Tensor Category of Its Representations*

- arXiv:2504.06066v4, posted 28 September 2026.
- URL: https://arxiv.org/abs/2504.06066
- Artifacts: 2026-hopf-doubles-partial-dualization-2504.06066.pdf / .txt.
- Read: introduction; §§2.1–2.2 definitions of Hopf pairing and relative YD; Theorem 3.3; Proposition 3.10; Theorem 4.5.
- Checked scope: finite-dimensional Hopf algebras H,K and a Hopf pairing σ:K*⊗H→k. The partial dual K*cop⋈σH is related to relative Yetter–Drinfeld and two-sided two-cosided relative Hopf-module categories by the stated tensor equivalences.
- Open/limit: the introduction asks for a categorical relative-center interpretation when the right pairing map is not surjective. This paper does not remove finite-dimensionality or supply an arbitrary topological double.

### Yu and Zhen, *Quasi-Quantum Groups Arising from Cotensor Coquasi-Hopf Algebras*

- arXiv:2610.08361v2, posted 8 October 2026.
- URL: https://arxiv.org/abs/2610.08361
- Artifacts: 2026-quasi-quantum-groups-2610.08361.pdf / .txt.
- Read: introduction; definitions of cotensor/coquasi-Hopf and Majid bimodules; standard-filtration setup; Theorems 3.7 and 3.10; Proposition 3.13; coquasitriangular/coribbon extensions; Theorem 5.8.
- Checked scope: H coquasi-Hopf, M an H-Majid bimodule, cotensor coalgebra graded coquasi-Hopf structure. Their standard filtration uses Majid coradical H[0] containing the coradical, S(H[0])⊆H[0], and an embedding of the associated graded object which is the identity in degrees 0 and 1. Dual Chevalley and antipode-bijectivity conditions are stated where used; coquasitriangular/coribbon structures and pairings have separate propagation criteria.
- Limit: very recent preprint, not peer-reviewed verification. Do not collapse associator data into ordinary Hopf theory or omit the filtration and antipode assumptions.

### Yeral, *Open Modular Functors from Non-Finite Tensor Categories*

- arXiv:2602.03519v2, posted 23 February 2026.
- URL: https://arxiv.org/abs/2602.03519
- Artifacts: 2026-open-modular-functors-nonfinite-categories-2602.03519.pdf / .txt.
- Read: §§1–4 and the main theorem.
- Checked scope: presentable k-linear category, cocontinuous balanced braided tensor product, compact monoidal unit, enough compact projectives, compact rigidity and compatible duals; constructs an open modular functor by factorization homology for open surfaces with nonempty boundary and marked intervals. Modules of generic restricted-dual Uq(g) and βγ ghosts are examples.
- Limit: open modular functor is not a modular tensor category or a full open-closed theory, and the theorem concerns open surfaces rather than closed surfaces. The compact-unit/compactness/projectivity/rigidity hypotheses are essential to the statement.

### Song and Zhang, *Strong-to-Weak Spontaneous Symmetry Breaking of Higher-Form Non-Invertible Symmetries in Kitaev’s Quantum Double Model*

- arXiv:2509.24179v3, posted 20 September 2026.
- URL: https://arxiv.org/abs/2509.24179
- Artifacts: 2026-kitaev-quantum-double-symmetry-breaking-2509.24179.pdf / .txt.
- Read: introduction, strong/weak symmetry and model definitions, model evidence, Theorems 1–2 and conclusion.
- Checked scope: untwisted Kitaev D(G) for finite nonabelian G on a cellulation with specified decoherence channels; strong/weak 1-form non-invertible symmetries and information-convex extrema related to conjugacy orbits of Hom(π₁(Σ),G).
- Limit: model- and channel-specific; open noise-threshold/string-net questions remain. It is not a theorem about general Hopf symmetries.

### Kobayashi, Prem and Yu, *Realizing Braided Fusion 2-Categories as (3+1)D Mixed-State Topological Orders*

- arXiv:2610.03864v1, posted 6 October 2026.
- URL: https://arxiv.org/abs/2610.03864
- Artifacts: 2026-braided-fusion-2cat-topological-order-2610.03864.pdf / .txt.
- Read: abstract/introduction, main construction, Theorems 1–2, conclusion and Appendix A definitions.
- Checked scope: under the ansatz that strong topological operators form a braided fusion 2-category, bosonic/emergent-fermion theories with finite E, anomaly data, crossed extensions and actions.
- Limit: the full two-way finite-depth-channel classification equivalence and general lattice realization remain open in the paper; intrinsically fermionic spin theories are excluded. This is a higher-categorical frontier.

### Santaniello, Valandro and Zorzenon, *Non-Invertible SPT Phases from Fusion Rings via Tannaka Duality*

- arXiv:2610.07165v1, posted 5 October 2026.
- URL: https://arxiv.org/abs/2610.07165
- Artifacts: 2026-noninvertible-spt-fusion-rings-2610.07165.pdf / .txt.
- Read: abstract, introduction, selected definitions/algorithm in §§2–3 and conclusion.
- Checked scope: a fusion ring plus candidate monoidal-structure maps and tensor automorphisms can be used to search possible fiber functors; examples include TY Z₂×Z₂ and an extraspecial-group fusion ring of rank 11.
- Limit: fusion-ring data alone does not determine a categorification/fiber functor. Some extraspecial branches, p>3 parameterization and microscopic lattice/MPO realization are future work.

## Extraction and audit method

The PDFs and extracted text are retained side by side in sources/04-hopf. Text extraction was used for search and locator checks; each source claim above is restricted to passages actually read. The EGNO author copy, the lecture-note versions, and the 2026 arXiv versions have not been silently updated to different editions. Hall artifacts remain in the other-algebras source directory to avoid unnecessary duplication; their path and my own read spans are recorded above.
