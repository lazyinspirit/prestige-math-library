---
id: cor-cellular-decomposition-matrices-are-dominance-unitriangular
kind: corollary
title: "Cellular decomposition matrices are unitriangular for the cell order"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cellular-algebra-basis-and-cell-module, def-composition-series-and-length-of-a-module, lem-cell-form-is-associative-and-its-radical-is-a-submodule, thm-jordan-holder-theorem-for-modules, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, Theorem 2.13 and Corollary 2.14 with Proposition 2.9, printed pp. 9-16, and Chapter 3, Theorem 3.18 and Corollary 3.19 region, printed pp. 20-31: the unitriangularity of the decomposition matrix for the cell order"
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, complete 66-page survey"
      url: "https://arxiv.org/abs/0909.4844"
      locator: "Theorem 5.2(iii), printed p. 23: the multiplicity d_{mu nu} = [S(mu) : D(nu)] is 0 unless nu <= mu, and d_{mu mu}=1"
    - title: "Andrew Mathas and Marcos Soriano, Seminormal forms and Gram determinants for cellular algebras, arXiv:math/0604108; J. reine angew. Math. 619 (2008) 141-173; complete 29-page author-hosted preprint, SHA-256 a2cd21ced7f35dee695388304c26804ef8ac9c54b661a5d624501c80864698a1"
      url: "https://arxiv.org/pdf/math/0604108"
      locator: "Section 2, the paragraph after (2.3), pp. 2-4, citing [6, Proposition 3.6]: D(mu) is a composition factor of C(lambda) only if lambda dominates mu"
---

## Statement

Let $F$ be a field, $A$ a finite-dimensional cellular $F$-algebra with cellular
basis $(C,\Lambda)$ and cell modules $C^{\lambda}$,
$D^{\lambda}=C^{\lambda}/\mathrm{rad}\,C^{\lambda}$
([[def-cellular-algebra-basis-and-cell-module]],
[[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]).
For $\lambda,\mu\in\Lambda$ with $D^{\mu}\ne0$ let
$d_{\lambda\mu}:=[C^{\lambda}:D^{\mu}]$ be the multiplicity of $D^{\mu}$ as a
composition factor of $C^{\lambda}$ (well defined by
[[thm-jordan-holder-theorem-for-modules]] and
[[def-composition-series-and-length-of-a-module]]). Then
$$d_{\mu\mu}=1\qquad\text{and}\qquad d_{\lambda\mu}\ne0\ \Longrightarrow\ \lambda\unrhd\mu,$$
i.e. a nonzero off-diagonal entry can occur only in the allowed direction of the
cell order $\unrhd$ (larger cell first). Order the labels by a linear extension from smaller to larger. The square
submatrix whose rows and columns both have nonzero $D$ is lower
unitriangular; the full rectangular matrix has the same labelled diagonal
and the stated vanishing region. This
determines only the diagonal and the vanishing region: no off-diagonal entry is
computed by cellularity.

## Facts & Assumptions

**Given:** A field $F$, a finite-dimensional unital cellular $F$-algebra $A$ with cellular basis $(C,\Lambda)$, cell modules $C^{\lambda}$ and cell forms $\langle\ ,\ \rangle_\lambda$ ([[def-cellular-algebra-basis-and-cell-module]]).

[F1] Classification ([[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]): $D^{\lambda}\ne0$ if and only if $\mathrm{rad}\,C^{\lambda}\ne C^{\lambda}$ if and only if $\langle-,-\rangle_\lambda$ is not identically zero; in that case $D^{\lambda}$ is simple and $\mathrm{rad}\,C^{\lambda}$ is its unique maximal submodule, and $\{D^{\lambda}:D^{\lambda}\ne0\}$ is a complete set of pairwise non-isomorphic simple $A$-modules.

[F2] Cell-form calculus ([[lem-cell-form-is-associative-and-its-radical-is-a-submodule]]): $c^{\kappa}_{us}c^{\kappa}_{tv}\equiv\langle c^{\kappa}_s,c^{\kappa}_t\rangle_\kappa c^{\kappa}_{uv}\pmod{A^{\rhd\kappa}}$ for a fixed label $\kappa$; $x\,c^{\kappa}_{uv}=\langle x,c^{\kappa}_u\rangle_\kappa c^{\kappa}_v$ for $x\in C^{\kappa}$; and $\mathrm{rad}\,C^{\kappa}=\{x:\langle x,-\rangle_\kappa=0\}$ is the kernel of $x\mapsto\langle x,-\rangle_\kappa$.

[F3] Cellular axioms ([[def-cellular-algebra-basis-and-cell-module]]): $A^{\rhd\lambda}$ is the span of the $c^{\mu}_{uv}$ with $\mu\rhd\lambda$, $A^{\unrhd\lambda}$ is the span with $\mu\unrhd\lambda$; condition (ii) reads $c^{\lambda}_{st}a\equiv\sum_vr_vc^{\lambda}_{sv}\pmod{A^{\rhd\lambda}}$ and its $i$-image reads $ac^{\lambda}_{st}\equiv\sum_ur'_uc^{\lambda}_{ut}\pmod{A^{\rhd\lambda}}$.

[F4] Composition multiplicities are additive in short exact sequences and well defined by Jordan-Hölder ([[def-composition-series-and-length-of-a-module]], [[thm-jordan-holder-theorem-for-modules]]).

## Proof

**Proof technique:** direct.

1.1 Annihilation: if $\lambda,\nu\in\Lambda$ with $\lambda\not\unrhd\nu$, then $A^{\unrhd\nu}\cdot C^{\lambda}=0$. Indeed $A^{\unrhd\nu}$ and $A^{\unrhd\lambda}$ are two-sided ideals by [F3], and their intersection is spanned by the $c^{\gamma}$ with $\gamma\unrhd\nu$ and $\gamma\unrhd\lambda$; no such $\gamma$ equals $\lambda$, since $\gamma=\lambda$ would give $\lambda\unrhd\nu$, so the intersection lies in $A^{\rhd\lambda}$. Hence $A^{\unrhd\nu}A^{\unrhd\lambda}\subseteq A^{\unrhd\nu}\cap A^{\unrhd\lambda}\subseteq A^{\rhd\lambda}$ and, since $c^{\lambda}_{tt}\in A^{\unrhd\lambda}$, every product $c^{\lambda}_{tt}b$ with $b\in A^{\unrhd\nu}$ lies in $A^{\rhd\lambda}$; the right action of $b$ on $C^{\lambda}$ is read off from $c^{\lambda}_{tt}b\equiv\sum_vr_vc^{\lambda}_{tv}\pmod{A^{\rhd\lambda}}$ with unique coefficients, so $b$ acts as the zero operator on $C^{\lambda}$. [given, F2, F3, algebra]

1.2 Nontrivial action: if $D^{\mu}\ne0$ then some element of $A^{\unrhd\mu}$ acts nontrivially on $D^{\mu}$. Since $\mathrm{rad}\,C^{\mu}\ne C^{\mu}$ by [F1], there is $t\in T(\mu)$ with $c^{\mu}_t\notin\mathrm{rad}\,C^{\mu}$, and by [F2] there is $u\in T(\mu)$ with $\langle c^{\mu}_t,c^{\mu}_u\rangle_\mu\ne0$; then the element $c^{\mu}_{ut}\in A^{\unrhd\mu}$ satisfies $c^{\mu}_t\cdot c^{\mu}_{ut}=\langle c^{\mu}_t,c^{\mu}_u\rangle_\mu c^{\mu}_t$ by [F2], so on $D^{\mu}$ it sends the nonzero class of $c^{\mu}_t$ to its nonzero multiple $\langle c^{\mu}_t,c^{\mu}_u\rangle_\mu[c^{\mu}_t]\ne0$. [given, F1, F2, algebra]

2.1 Off-diagonal vanishing: suppose $d_{\lambda\mu}\ne0$ with $D^{\mu}\ne0$. If $\lambda\not\unrhd\mu$, then step 1.1 gives $A^{\unrhd\mu}\cdot C^{\lambda}=0$; an element of $A$ acting as zero on a module acts as zero on each of its submodules and quotients, hence on every subquotient of $C^{\lambda}$, so $A^{\unrhd\mu}$ annihilates the composition factor $D^{\mu}$ of $C^{\lambda}$. This contradicts step 1.2. Hence $\lambda\unrhd\mu$. [step 1.1, step 1.2, F4]

2.2 Diagonal: $d_{\mu\mu}=1$ for every $\mu$ with $D^{\mu}\ne0$. The form radical gives the subquotient $D^{\mu}=C^{\mu}/\mathrm{rad}\,C^{\mu}$, and additivity of composition multiplicities [F4] gives $d_{\mu\mu}=[C^{\mu}:D^{\mu}]=[C^{\mu}/\mathrm{rad}\,C^{\mu}:D^{\mu}]+[\mathrm{rad}\,C^{\mu}:D^{\mu}]=1+[\mathrm{rad}\,C^{\mu}:D^{\mu}]$, because $C^{\mu}/\mathrm{rad}\,C^{\mu}=D^{\mu}$ is simple by [F1]. The span of the $c^{\mu}_{uv}$ annihilates $\mathrm{rad}\,C^{\mu}$: for $x\in\mathrm{rad}\,C^{\mu}$ and all $u,v$ one has $x\,c^{\mu}_{uv}=\langle x,c^{\mu}_u\rangle_\mu c^{\mu}_v=0$ by [F2]. Hence every element of this span acts as zero on $\mathrm{rad}\,C^{\mu}$ and on all its subquotients, so $D^{\mu}$ is not a composition factor of $\mathrm{rad}\,C^{\mu}$; otherwise step 1.2 would produce an element of $\mathrm{span}\{c^{\mu}_{uv}\}\subseteq A^{\unrhd\mu}$ acting nontrivially on it. Therefore $[\mathrm{rad}\,C^{\mu}:D^{\mu}]=0$ and $d_{\mu\mu}=1$. [step 1.2, F1, F2, F4]

3.1 Assembly: order the labels by a linear extension from smaller to larger, and restrict both rows and columns to labels with nonzero form quotient. Step 2.1 puts every nonzero entry on or below the diagonal of this square submatrix, and step 2.2 gives diagonal entries $1$. For the full rectangular matrix retain the label comparison $\lambda\unrhd\mu$; deleting zero-quotient columns need not leave the labelled diagonal on the numerical matrix diagonal. These statements determine only the diagonal and the vanishing region. [step 2.1, step 2.2] ∎
