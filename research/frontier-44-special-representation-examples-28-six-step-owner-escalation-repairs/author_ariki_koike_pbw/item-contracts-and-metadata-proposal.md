# HH-16 exact item contracts and metadata proposals

These are the seven exact HH-16 supplier contracts from the shared plan, preserved here as owner evidence. The metadata blocks are the proposed current frontmatter for the corresponding draft items. Root retains ownership of canonical plan, manifest, and contract integration.

## def-hh-multiplicative-cyclotomic-hecke-algebra

Path: items/def-hh-multiplicative-cyclotomic-hecke-algebra.md

**Exact planned contract:** Fix r≥1 and R=Z[Q^±1,u_1^±1,…,u_r^±1]; quotient the type-A affine algebra by ∏(X1−u_a). Unit parameters make X1 invertible in the quotient via the constant coefficient; this is the traditional multiplicative Ariki–Koike convention, not the additive degenerate presentation.

**Metadata proposal:**

---
id: def-hh-multiplicative-cyclotomic-hecke-algebra
kind: definition
title: "The multiplicative cyclotomic Hecke algebra"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 0
deps: [def-algebra-over-a-commutative-ring, lem-hh-free-associative-ring-and-relations-descent, lem-hh-finite-polynomial-and-localization-constructions, thm-int-comm-ring]
justified_by: [thm-hh-ariki-koike-basis-and-generic-splitness]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Georges Neaime, Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n), arXiv:1810.12053v1"
      url: "https://arxiv.org/pdf/1810.12053v1"
      locator: "§6, PDF pp. 32–38: the traditional multiplicative G(r,1,n) generator and cyclotomic-polynomial convention; the universal quotient and its properties are proved here"
---

The item body contains the locally authored proof for this contract. Status remains draft; no audit or publication stamp is proposed.

## lem-hh-cyclotomic-commuting-jucys-murphy-generators

Path: items/lem-hh-cyclotomic-commuting-jucys-murphy-generators.md

**Exact planned contract:** Define Li=Q^(1−i)Ti−1⋯T1 X1 T1⋯Ti−1, identify them with Xi by affine relations, and prove commutation. Do not claim each Li satisfies the same cyclotomic polynomial; give the actual transport identities needed for straightening.

**Metadata proposal:**

---
id: lem-hh-cyclotomic-commuting-jucys-murphy-generators
kind: lemma
title: "Cyclotomic Jucys–Murphy generators and their transport relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 1
deps: [def-hh-multiplicative-cyclotomic-hecke-algebra, thm-hh-generic-coxeter-hecke-standard-basis]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Georges Neaime, Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n), arXiv:1810.12053v1"
      url: "https://arxiv.org/pdf/1810.12053v1"
      locator: "§6, PDF pp. 32–38: the multiplicative G(r,1,n) generators and the normalized rank-two affine relations; all transport formulas below are derived from the universal presentation"
---

The item body contains the locally authored proof for this contract. Status remains draft; no audit or publication stamp is proposed.

## lem-hh-cyclotomic-straightening-spanning

Path: items/lem-hh-cyclotomic-straightening-spanning.md

**Exact planned contract:** Prove integral spanning by the explicit normal-word supplier below, not by asserting identical cyclotomic polynomials for L_i. Extend coefficients to the finite free faithful ring R′=R[v,w]/(v²−Q,w^r−(−1)^(r+1)∏u_a); v,w are units. Put s_j=v^−1T_(j−1), z=w^−1X_1. Reproduce Neaime §6 Lemmas6.2–6.15 with a=v−v^−1 and the expanded cyclotomic coefficients, correcting z s_j commutation to j≥3 and retaining all quadratic coefficients. The span of Λ_1⋯Λ_n is closed under every generator by the rank-two reductions and the nine final-letter cases; it contains 1. Each Λ_n word has nonnegative total X-degree k<r. HH-15 Bernstein rewriting preserves nonnegative exponents and this total degree; finite Hecke parabolic factorization then puts it in Σ_(0≤a<r,d∈D) H_(n−1)X_n^aT_d. Induction gives the promised bounded PBW span over R′. Prove faithful-free descent locally: tensor a cokernel with a free module containing the basis element 1; if that tensor is zero, the cokernel was zero. Negative powers are polynomial expressions because the cyclotomic constant and each Hecke generator are units. Exact reduction contracts and source corrections appear in §8 below.

**Metadata proposal:**

---
id: lem-hh-cyclotomic-straightening-spanning
kind: lemma
title: "Integral cyclotomic straightening and bounded PBW spanning"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 2
deps: [def-hh-multiplicative-cyclotomic-hecke-algebra, lem-hh-cyclotomic-commuting-jucys-murphy-generators, thm-hh-generic-coxeter-hecke-standard-basis]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Georges Neaime, Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n), arXiv:1810.12053v1"
      url: "https://arxiv.org/pdf/1810.12053v1"
      locator: "§6, PDF pp. 32–38, Lemmas 6.2–6.15; §5, PDF pp. 24–31, braid sweeps used there; the coefficient and commutation-index corrections are incorporated and every reduction is written here"
---

The item body contains the locally authored proof for this contract. Status remains draft; no audit or publication stamp is proposed.

## def-hh-multipartitions-standard-tableaux-and-generic-contents

Path: items/def-hh-multipartitions-standard-tableaux-and-generic-contents.md

**Exact planned contract:** Define r-multipartitions, standard multitableaux and res_t(i)=u_component Q^(column−row). Finite tableaux, their row/column orders and addable boxes are defined explicitly. Generic parameter separation and all denominators are checked in the universal fraction field. Prove the elementary finite-poset facts used later: connect two linear extensions by moving the first differing minimal available element left across incomparable neighbors; make a cover pair consecutive by contracting that cover before choosing an extension. Standard tableaux are linear extensions of row/column box order. Distinct addable boxes of a component have distinct diagonal contents. For equal-content boxes on one diagonal, the right and lower intermediary boxes are both required between their labels; therefore endpoints of three consecutive labels cannot have equal contents. These proofs justify admissible-swap connectivity and all three-content denominators.

**Metadata proposal:**

---
id: def-hh-multipartitions-standard-tableaux-and-generic-contents
kind: definition
title: "Multipartitions, standard multitableaux, and generic contents"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 0
deps: [def-hh-multiplicative-cyclotomic-hecke-algebra, lem-hh-finite-polynomial-and-localization-constructions]
justified_by: [thm-hh-generic-cyclotomic-seminormal-models]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3"
      url: "https://arxiv.org/pdf/1304.0906v3"
      locator: "§3.1–3.2, PDF pp. 14–20: multitableau content sequences, addable-node separation, axial-distance notation, and local seminormal calculations; the finite-poset facts below are proved here"
---

The item body contains the locally authored proof for this contract. Status remains draft; no audit or publication stamp is proposed.

## thm-hh-generic-cyclotomic-seminormal-models

Path: items/thm-hh-generic-cyclotomic-seminormal-models.md

**Exact planned contract:** For a=res_t(i), b=res_t(i+1), set T_i v_t=((Q−1)b/(b−a))v_t+((Qb−a)/(b−a))v_(s_i t), where a nonstandard tableau is interpreted as zero. Prove consecutive contents differ. Diagonal Li acts by res_t(i). For same-row and same-column consecutive entries the diagonal coefficient is Q or −1 respectively. Verify quadratic, affine and cyclotomic equations; for braid, enumerate all six reorderings of the three consecutive entries subject to their row/column partial order, include every nonstandard term, and clear the three pairwise-content denominators. Prove that endpoints of three consecutive entries cannot have equal contents. This finite local calculation must be written, not replaced by an exercise citation. Prove irreducibility using connected adjacent swaps and joint spectral projectors.

**Metadata proposal:**

---
id: thm-hh-generic-cyclotomic-seminormal-models
kind: theorem
title: "Generic seminormal models for cyclotomic Hecke algebras"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 1
deps: [def-hh-multiplicative-cyclotomic-hecke-algebra, lem-hh-cyclotomic-commuting-jucys-murphy-generators, def-hh-multipartitions-standard-tableaux-and-generic-contents]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3"
      url: "https://arxiv.org/pdf/1304.0906v3"
      locator: "§3.2, PDF pp. 15–18: axial distances, generic seminormal coefficients, and the six reorderings in the braid calculation; the multiplicative-content matrices and all boundary terms are verified here"
    - title: "Georges Neaime, Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n), arXiv:1810.12053v1"
      url: "https://arxiv.org/pdf/1810.12053v1"
      locator: "§6, PDF pp. 32–38: multiplicative G(r,1,n) normalization; the generic module relations are proved here"
---

The item body contains the locally authored proof for this contract. Status remains draft; no audit or publication stamp is proposed.

## lem-hh-colored-permutation-rsk-and-tableau-square-count

Path: items/lem-hh-colored-permutation-rsk-and-tableau-square-count.md

**Exact planned contract:** Prove a bijection between r-colored permutations and pairs of standard multitableaux of one shape by componentwise insertion with an explicit reverse algorithm. Deduce Σλ fλ²=r^n n!. The ordinary RSK theorem is proved here if no proved earlier supplier is used.

**Metadata proposal:**

---
id: lem-hh-colored-permutation-rsk-and-tableau-square-count
kind: lemma
title: "Colored RSK and the multipartition square count"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 1
deps: [def-hh-multipartitions-standard-tableaux-and-generic-contents, thm-robinson-schensted-correspondence]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Spring Term 2013 lecture notes"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.5: ordinary row insertion and reverse deletion; the componentwise colored bijection and its count are proved here"
---

The item body contains the locally authored proof for this contract. Status remains draft; no audit or publication stamp is proposed.

## thm-hh-ariki-koike-basis-and-generic-splitness

Path: items/thm-hh-ariki-koike-basis-and-generic-splitness.md

**Exact planned contract:** The spanning bound is r^n n!. Proved generic models and the square count give at least that dimension using a proved finite-algebra density lemma/matrix units constructed from joint-eigenvalue projectors and swaps. Hence spanning monomials are independent over the fraction field and over universal R. Base-change the resulting free-basis isomorphism for all fields/rings with unit parameters.

**Metadata proposal:**

---
id: thm-hh-ariki-koike-basis-and-generic-splitness
kind: theorem
title: "The Ariki–Koike PBW basis and generic splitness"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 3
deps: [def-hh-multiplicative-cyclotomic-hecke-algebra, lem-hh-cyclotomic-commuting-jucys-murphy-generators, lem-hh-cyclotomic-straightening-spanning, def-hh-multipartitions-standard-tableaux-and-generic-contents, thm-hh-generic-cyclotomic-seminormal-models, lem-hh-colored-permutation-rsk-and-tableau-square-count, thm-hh-generic-coxeter-hecke-standard-basis, lem-hh-universal-presentations-and-base-change, lem-hh-finite-polynomial-and-localization-constructions]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Georges Neaime, Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n), arXiv:1810.12053v1"
      url: "https://arxiv.org/pdf/1810.12053v1"
      locator: "§6, PDF pp. 32–38: integral spanning route for the multiplicative G(r,1,n) algebra; independence, matrix units, and base change are proved here"
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3"
      url: "https://arxiv.org/pdf/1304.0906v3"
      locator: "§3.1–3.2, PDF pp. 14–20: content separation and generic seminormal context; the density and dimension argument is proved here"
---

The item body contains the locally authored proof for this contract. Status remains draft; no audit or publication stamp is proposed.
