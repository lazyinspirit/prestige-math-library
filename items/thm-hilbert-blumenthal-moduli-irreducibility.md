---


id: thm-hilbert-blumenthal-moduli-irreducibility
kind: theorem
title: "Geometric irreducibility of corrected Hilbert–Blumenthal moduli"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-hilbert-blumenthal-moduli-data-and-polarization
  - def-deligne-pappas-hilbert-blumenthal-moduli-problem
  - def-axiom-of-choice
  - def-etale-fundamental-group-and-fibre-functor
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
  - lem-deligne-pappas-truncated-dvr-lagrangian-strata
  - lem-deligne-pappas-polynomial-lagrangian-model-flat-normal-fibre
  - lem-deligne-pappas-arithmetic-local-model-reduction
dependency_level: 2
justified_by: []
axiom_use: >-
  AC is used in the étale fundamental-group and finite-cover suppliers for the geometric component argument.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne and K. A. Ribet"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "\u00a72.11\u20132.12, pp. 241\u2013242; \u00a7\u00a74\u20136, pp. 254\u2013273; \u00a78, pp. 277\u2013285."
    - title: "P. Deligne and G. Pappas"
      url: "https://www.numdam.org/item/CM_1994__90_1_59_0.pdf"
      locator: "Introduction pp. 59\u201360; \u00a7\u00a72.1\u20132.4, 3.1\u20133.5, 4.1\u20134.5."
    - title: "O. Venjakob"
      url: "https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf"
      locator: "pp. 10\u201318: moduli, all-cusp q-expansion and integrality discussion."
    - title: "E. Goren"
      url: "https://www.wstein.org/people/goren/hilbert_modular_forms_book.pdf"
      locator: "Ch. 5 \u00a75.1, pp. 65\u201367; \u00a75.2, pp. 147\u2013151."
verification: {}
---
## Statement

Assume AC. Let $K\ne\mathbb Q$ be totally real, let $\mathfrak c$ be a positive polarization module, and let $N\ge3$ be sufficiently large and prime to the discriminant of $K$. Let $\mathscr M_{\mathfrak c,N}$ be the corrected Deligne–Pappas full-level moduli algebraic space over $\mathbb Z[1/N]$. For its proper toroidal compactification, let $T$ be the finite étale Stein component base; the fixed-pairing model is taken on its corresponding component base, as in the source convention. For every geometric point $t\in T(\overline{\mathbb F}_p)$ with $p\nmid N$, the fibre $(\mathscr M_{\mathfrak c,N})_t$ is geometrically irreducible. This includes primes $p$ dividing the discriminant. The full special fibre is the disjoint union of the components indexed by the geometric fibre of $T$; no assertion identifies distinct level-pairing components.

## Facts & Assumptions

**Given:** $K,\mathfrak c,N,p$ as in the statement, and the corrected moduli space.

[F1] The Deligne–Pappas functor includes the polarization isomorphism condition without imposing Rapoport Lie-freeness, and keeps the fixed level-pairing component base; the Rapoport compactification is not a proper smooth substitute at discriminant primes. [[def-deligne-pappas-hilbert-blumenthal-moduli-problem]]

[F2] For prime-to-$p$ level, the torsion of a Hilbert–Blumenthal abelian variety is finite étale; its geometric fibres are free rank-two $\mathcal O_K/N\mathcal O_K$-modules. [[def-hilbert-blumenthal-moduli-data-and-polarization]]

[F3] Finite étale covers of a connected locally noetherian scheme are classified by finite continuous sets for its étale fundamental group, after a geometric base point is chosen. [[def-etale-fundamental-group-and-fibre-functor]] [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]

[L1] For $R_e=k[t]/(t^e)$, the self-orthogonal rank-$e$ submodule space has explicit strata with two affine charts of dimension $e-2i$ (or a reduced point when $e=2i$). The complement of the largest stratum has dimension at most $e-2$. This finite linear-algebra input is now proved locally. [[lem-deligne-pappas-truncated-dvr-lagrangian-strata]]

[L2] Under AC, the explicit complete-DVR polynomial Lagrangian model is now proved flat and a relative complete intersection, with normal geometrically irreducible special fibre, when its polynomial reduces to $t^e$ and the residue field is perfect. This is a local algebraic model result, not an identification of the abelian moduli deformation functor. [[lem-deligne-pappas-polynomial-lagrangian-model-flat-normal-fibre]]

[L3] The arithmetic ring $\mathcal O_K\otimes\mathbb Z_p$ is now locally reduced, after an explicit finite unramified base extension, to products of the Eisenstein-polynomial models in [L2]. Their flat complete-intersection charts and normal geometric special fibres are supplied locally; no abelian deformation comparison is part of this reduction. [[lem-deligne-pappas-arithmetic-local-model-reduction]]

[A1] The source uses a proper compactification and a finite étale Stein component base, together with normality of the local Deligne–Pappas model; the arithmetic module-model calculations are now supplied by [L1]–[L3], but the abelian deformation comparison and the global compactification/component proof are not supplied by [F1]–[F3].

[A2] AC is used by the finite étale fundamental-group and finite-cover classification suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** The data in the statement.

1.1 Work over the specified geometric point of the component base, with $p\nmid N$. After increasing the prime-to-$p$ level if needed, the level structure defines a finite étale cover of the lower-level moduli problem. By [F3], geometric connected components of that cover are the orbits of the étale fundamental group on its fibre. [F2, F3, A2, given]

2.1 The equal-characteristic truncated-DVR strata and their dimensions are supplied by [L1], and the complete-DVR polynomial charts, flatness and normal special fibre by [L2]. The exact unramified/Eisenstein reduction to these models is supplied by [L3]. To identify them with the arithmetic moduli space, one still needs the étale/crystalline deformation comparison of the abelian moduli functor. The proper compactification, fibrewise density and Stein-component argument must then connect this local geometry to the stated global fibre. These arguments have not been reconstructed here, so the theorem remains escalated on those precise obligations. [F1, L1, L2, L3, A1]

## Source and base correction

Deligne–Pappas §2.4 states irreducibility over the finite étale Stein base, and §2.13 records the pairing-invariant component. Their base in §2.1 is $\mathbb Z[1/N]$, so there is no level-$N$ special fibre in characteristic dividing $N$. The original unqualified full-fibre wording omitted these component and base distinctions. The full corrected componentwise claim, including discriminant primes prime to $N$, remains held until the local normality and deformation argument is supplied.

## Statement references

[[def-deligne-pappas-hilbert-blumenthal-moduli-problem]]

[[def-etale-fundamental-group-and-fibre-functor]]

[[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]

[P. Deligne and K. A. Ribet, §4, pp. 254–258](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)

[P. Deligne and G. Pappas, §§2–4](https://www.numdam.org/item/CM_1994__90_1_59_0.pdf)
