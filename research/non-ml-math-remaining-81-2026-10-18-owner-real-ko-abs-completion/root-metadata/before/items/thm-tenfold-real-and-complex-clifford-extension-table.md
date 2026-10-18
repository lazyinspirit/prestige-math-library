---
id: thm-tenfold-real-and-complex-clifford-extension-table
kind: theorem
title: Tenfold real and complex Clifford-extension table
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 13
deps:
- def-axiom-of-choice
- thm-antiunitary-az-classes-are-clifford-extensions
- lem-positive-clifford-mass-difference-clutching-comparison
- thm-ko-coefficient-table-and-eightfold-periodicity
- thm-complex-bott-periodicity
- def-complex-topological-k-zero-by-grothendieck-completion
- lem-real-clifford-signature-recurrences-and-periodicity
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Alexei Kitaev, Periodic table for topological insulators and superconductors
      (2009)
    url: https://arxiv.org/pdf/0901.2686
  - title: M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement
      1 (1964)
    url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf
  - title: M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with
      K-Theory and Reality reprint
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf
proof_strategy: direct
---

## Statement

Assume AC. For the normalized finite-dimensional stable free Dirac-mass extension problem with $d\ge0$ fixed negative-square Dirac generators, the strong difference group at real symmetry index $q$ is $KO^{-(q-d)}(\mathrm{pt})$. The complex analogue at indices $q=0,1$ is $KU^{-(q-d)}(\mathrm{pt})$. With columns indexed by $d$ modulo eight, the real table is

| class ($q$) | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
|---|---|---|---|---|---|---|---|---|
| AI ($0$) | $\mathbb Z$ | $0$ | $0$ | $0$ | $\mathbb Z$ | $0$ | $\mathbb Z/2$ | $\mathbb Z/2$ |
| BDI ($1$) | $\mathbb Z/2$ | $\mathbb Z$ | $0$ | $0$ | $0$ | $\mathbb Z$ | $0$ | $\mathbb Z/2$ |
| D ($2$) | $\mathbb Z/2$ | $\mathbb Z/2$ | $\mathbb Z$ | $0$ | $0$ | $0$ | $\mathbb Z$ | $0$ |
| DIII ($3$) | $0$ | $\mathbb Z/2$ | $\mathbb Z/2$ | $\mathbb Z$ | $0$ | $0$ | $0$ | $\mathbb Z$ |
| AII ($4$) | $\mathbb Z$ | $0$ | $\mathbb Z/2$ | $\mathbb Z/2$ | $\mathbb Z$ | $0$ | $0$ | $0$ |
| CII ($5$) | $0$ | $\mathbb Z$ | $0$ | $\mathbb Z/2$ | $\mathbb Z/2$ | $\mathbb Z$ | $0$ | $0$ |
| C ($6$) | $0$ | $0$ | $\mathbb Z$ | $0$ | $\mathbb Z/2$ | $\mathbb Z/2$ | $\mathbb Z$ | $0$ |
| CI ($7$) | $0$ | $0$ | $0$ | $\mathbb Z$ | $0$ | $\mathbb Z/2$ | $\mathbb Z/2$ | $\mathbb Z$ |

For the two complex rows, A is $\mathbb Z$ in even $d$ and zero in odd $d$; AIII is zero in even $d$ and $\mathbb Z$ in odd $d$. Integer units count negative real multiplicity rank at real index zero, negative quaternionic multiplicity rank at index four, and negative complex rank in class A. The result concerns only the specified stable free mass problem; it gives no weak lattice, arbitrary-disorder or interaction-stable classification.

## Facts & Assumptions

**Given:** AC, the normalized AZ symmetry algebra, fixed Clifford representations and reference identifications, stable mass differences and $d$ fixed negative Dirac generators.

[F1] The actual real-linear generator dictionaries give ordered indices $q=0,\ldots,7$ and shift $q-d$, with the two complex indices modulo two ([[thm-antiunitary-az-classes-are-clifford-extensions]]).

[F2] For $q\ge0$, fixed positive Clifford mass differences map isomorphically to $KO^{-q}(\mathrm{pt})$ by a reference-preserving hemisphere clutching map. Its explicit eightfold matrix stabilization maps to product by the same $\beta$; its low-row orbit computations give $O/(O\times O)$, $O$, $O/U$, $U/Sp$, $Sp/(Sp\times Sp)$, $Sp$, $Sp/U$, $U/O$ in order ([[lem-positive-clifford-mass-difference-clutching-comparison]]).

[F3] The real coefficient list is $\mathbb Z,\mathbb Z/2,\mathbb Z/2,0,\mathbb Z,0,0,0$, with all integer degrees extended by multiplication by $\beta$ ([[thm-ko-coefficient-table-and-eightfold-periodicity]]).

[F4] Complex bundle $K^0$ is Grothendieck completion, and product by its specified Bott class gives twofold periodicity on finite pairs ([[def-complex-topological-k-zero-by-grothendieck-completion]], [[thm-complex-bott-periodicity]]).

[F5] Mixed positive/negative pair cancellation is the explicit isomorphism $\mathrm{Cl}_{p+1,q+1}\cong M_2(\mathrm{Cl}_{p,q})$ ([[lem-real-clifford-signature-recurrences-and-periodicity]]).



**Proof technique:** fixed-generator Morita equivalence followed by the actual clutching comparison.

## Proof

**Proof technique:** direct construction.

1.1 For clarity, the mixed-pair map [F5] uses mixed generators $u^2=1,v^2=-1$, $uv=-vu$, and $\tau=uv$, so $\tau^2=1$ and $\tau$ anticommutes with $u,v$. Send each old generator $x$ to $x\otimes\tau$ and the two new generators to $1\otimes u,1\otimes v$. Their squares, old anticommutators and cross anticommutators give exactly the required relations; multiplying by $1\otimes\tau$ recovers each $x\otimes1$, proving surjectivity, and PBW dimensions prove injectivity. Extracting a multiplicity space by a diagonal matrix unit and reconstructing it by off-diagonal units preserves masses, the specified reference identification and homotopy. Thus cancelling pairs genuinely preserves the stable difference problem. [F5, construct, algebra]


1.2 In complex index zero a Hermitian involution is classified by its positive and negative eigenspaces. The fixed-rank orbit is $U(k+m)/(U(k)\times U(m))$, connected because $U(k+m)$ is connected; stable differences are exactly negative complex-rank differences. In complex index one the fixed chiral involution splits $W=W^+\oplus W^-$, and a mass is an off-diagonal unitary isomorphism $W^+\to W^-$. Admissibility requires equal ranks, and its space is $U(n)$, connected by diagonalizing a unitary and varying its eigenvalue angles. Thus its component difference group is zero. Class A's negative line maps to the complex unit; the other row maps uniquely to zero. The twofold matrix equivalence of [F1] reduces every complex index to one of these two models; using the fixed Bott generator of [F4] transports their groups to all degrees. Since $q+d\equiv q-d\pmod2$, $d$ negative generators yield exactly $KU^{-(q-d)}$ and the stated even/odd rows. This is a complex-rank count, without replacing it by twice that rank on realification. [F1, F4, construct, algebra]


2.1 Apply the exact AZ dictionaries [F1] and cancel fixed opposite-sign pairs by step 1.1. The remaining index is $q-d$. If it is negative, add enough eightfold positive matrix blocks to obtain a nonnegative index. The map [F2] then supplies the actual KO class, not just a group of matching cardinality. Its compatibility with eightfold stabilization identifies different choices by multiplication by $\beta$; [F3] makes those maps invertible. Therefore the final group is canonically the coefficient in degree $-(q-d)$ with the stated reference and symbol conventions. Fixed representation changes act through matrix-unit isomorphisms, so reference data are not discarded. [F1, F2, F3, step 1.1, algebra]


3.1 The low mass spaces used by [F2] have component difference groups $\mathbb Z,\mathbb Z/2,\mathbb Z/2,0,\mathbb Z,0,0,0$: the first and fifth are real and quaternionic involution-rank differences, the second is orthogonal determinant parity, and the third is the two-component orthogonal-complex-structure orbit. The other four are quotients of connected unitary or symplectic groups. The reference-preserving clutching proof [F2] sends the two parity generators to the actual Möbius and real Hopf classes and the integer generators to their actual line and quaternionic Hopf classes, and identifies eightfold stabilization with the fixed $\beta$. Substituting each $q-d$ modulo eight in [F3] yields every entry of the displayed table. No equality of abstract coefficient lists is used in place of the clutching map. [F2, F3, step 2.1, algebra]


4.1 Every construction above uses finite matrix representations, homotopies through invertible flattened masses and common reference stabilization. Neither spatial disorder nor an interacting Hilbert-space model occurs in these relations; weak lattice invariants would require extra parameter-space data. Thus the claims are exactly those of the specified stable Dirac-mass problem, with all ten symmetry classes and the full dimension table preserved. [given, step 2.1, step 3.1, step 1.2] ∎
