---
id: rem-general-type-a-decomposition-numbers-remain-unsolved
kind: remark
title: "General type-A decomposition numbers remain unsolved"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular, thm-q-schaper-virtual-radical-layer-formula]
justified_by: []
aliases: []
landmark: false
dependency_level: 13
proof_strategy: direct
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 5 Notes, printed pp. 63-65: the scope and limitations of the Jantzen/Schaper sum formula for decomposition numbers"
    - title: "Gordon James, The Representation Theory of the Symmetric Group, Encyclopedia of Mathematics and its Applications 16, Addison-Wesley (1981)"
      url: "https://doi.org/10.1017/CBO9781107340732"
      locator: "Chapter 8 and the final chapter: the classification of irreducible Specht modules in arbitrary positive characteristic is open"
---

## Statement

The two preceding constraints on the decomposition matrix of $H_{F,q}(S_n)$ are real but limited, and neither solves the general problem.

(i) Dominance unitriangularity ([[cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular]]) determines only the diagonal entries $d_{\mu\mu}=1$ and the vanishing region $d_{\lambda\mu}\ne0\Rightarrow\mu\unrhd\lambda$; it gives no value for an off-diagonal entry.

(ii) The q-Schaper/Jantzen sum formula ([[thm-q-schaper-virtual-radical-layer-formula]]) is an identity for the sum of the positive Jantzen filtration submodules. Its individual signed hook terms are not multiplicity bounds. After the whole virtual sum is expanded in simple classes and all cancellations are performed, its nonnegative simple coefficients bound the corresponding radical composition multiplicities from above; it neither determines a general multiplicity nor produces a positive combinatorial rule.

Special coefficient regimes and low-rank calculations determine additional entries (canonically based, weight-one, and small-$n$ cases), but the classification of irreducible Specht modules in arbitrary positive characteristic is a known open problem, and no general closed formula for the decomposition numbers of $S_n$ in a fixed positive characteristic is claimed anywhere on this page. This remark records the boundary; it carries no proof obligation and no choice principle.

## Remarks

The two cited results are the constraints proved on this page: unitriangularity is a vanishing statement about the dominance order, and the q-Schaper formula expresses the sum of the positive Jantzen filtration submodules as a virtual combination of Weyl symbols whose coefficients are $\pi$-adic valuations of hook q-integers. Neither statement computes an individual off-diagonal decomposition number in general, and the remark is not used as a supplier to prove any replacement claim.