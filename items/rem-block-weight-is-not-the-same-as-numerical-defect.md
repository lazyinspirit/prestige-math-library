---
id: rem-block-weight-is-not-the-same-as-numerical-defect
kind: remark
title: "Block weight is not the same as numerical defect"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [prop-core-quotient-size-and-weight-formula, def-defect-group-and-numerical-defect-of-a-block, prop-weight-zero-symmetric-group-blocks-are-defect-zero, cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Stacey Law (lecturer), notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Cambridge Part III Michaelmas 2022 lecture notes, complete 76-page PDF"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
      locator: "Section 4.1, printed pp. 62-63: the e-weight as the number of e-hooks removed to reach the e-core, and Proposition 4.12"
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "the e-weight before Proposition 5.38 and Corollary 5.37, printed pp. 61-63; the p-core classification of the modular block theory is used only through the published library items"
---

## Remark

**Weight is combinatorial.** For finite $e\ge2$, the $e$-weight $w_e(\lambda)$ of a label $\lambda\vdash n$ is the
number of $e$-hooks that have to be removed from $\lambda$ to reach its
$e$-core, it equals the size $|Q_e(\lambda)|$ of the $e$-quotient, and it
satisfies $n=|\lambda|=|C_e(\lambda)|+e\,w_e(\lambda)$
([[prop-core-quotient-size-and-weight-formula]]). In particular,
$w_e(\lambda)=(n-|C_e(\lambda)|)/e$ is determined by $n$ and the $e$-core.
Thus, for a fixed algebra $H_{F,q}(S_n)$, by [[cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core]]
it is an invariant of the block of $S^{\lambda}$; for $e=p$ it is the
combinatorial $p$-weight of the block.

**Numerical defect is block-theoretic.** The numerical defect of a block is
defined from its defect group: for the block bimodule $kGb$ a defect group is
a $p$-subgroup $D\le G$ for which the diagonal $\Delta D$ is a vertex, its
order $p^d$ defines the numerical defect $d$, and defect zero means $D=1$
([[def-defect-group-and-numerical-defect-of-a-block]]). It is a $p$-adic order
invariant of the block algebra in the fixed splitting modular system and is
defined by a vertex computation, not by hook combinatorics.

**The two invariants must not be identified without a theorem and an explicit
range.** The weight records how many hooks of length divisible by $e$ the
label carries, while the numerical defect records the order of a vertex of the
block bimodule; nothing on this page proves that the two numbers agree, and
they are defined from entirely different data. The only case settled here is
weight zero: if $w_p(\lambda)=0$ then $\lambda$ is a $p$-core, and the
classification forces the block to have a single Specht label, Cartan matrix
$(1)$, a projective simple module, a full matrix algebra structure and trivial
defect group, so the numerical defect is also zero
([[prop-weight-zero-symmetric-group-blocks-are-defect-zero]]). For $w>0$ no
assertion about the defect group of a weight-$w$ symmetric-group block, and no
identification of $w$ with the numerical defect, is made on this page. The
printed defect-group computation for weight-$w$ blocks (defect $\nu_p((pw)!)$,
with defect group a Sylow $p$-subgroup of $S_{pw}$) is deliberately not
asserted here, because no counted proof source for it is registered with this
batch; supplying it is outside this page's proof route and remains an open
obligation for a later page of the track.

No choice principle is used in the statements recorded above.
