---
id: thm-antiunitary-az-classes-are-clifford-extensions
kind: theorem
title: Antiunitary AZ symmetry classes give Clifford extension problems
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 7
deps:
- def-finite-dimensional-gapped-free-hamiltonian-and-stable-equivalence
- lem-spectral-flattening-preserves-gap-and-symmetries
- thm-real-complex-clifford-algebra-classification
- thm-clifford-pbw-basis-and-associated-graded
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

In the finite-dimensional stable gapped free model, use the normalized AZ relation algebra: antiunitaries $T,C$ have $T^2=t$, $C^2=c$, with $t,c\in\{1,-1\}$, $TH=HT$, $CH=-HC$, and $TC=CT$ when both are present. A lone chiral symmetry is a self-adjoint unitary involution anticommuting with $H$. The real extension indices are $\mathrm{AI},\mathrm{BDI},\mathrm D,\mathrm{DIII},\mathrm{AII},\mathrm{CII},\mathrm C,\mathrm{CI}$ at $q=0,1,2,3,4,5,6,7$, respectively. The complex classes A and AIII have indices $0,1$ modulo two. They are obtained by the explicit realification and mass generators below. Adding $d$ fixed negative-square Dirac generators decreases the real index to $q-d$. Individual $T,C$ squares without the specified mutual relation do not define this normalized tenfold algebra; additional unitary symmetries remain extra model data.

## Facts & Assumptions

**Given:** A finite-dimensional complex Hilbert space $W$, its real-linear complex structure $I$, and the exact displayed symmetry relations, with $T$ or $C$ omitted in the appropriate classes.

[F1] Spectral flattening preserves the gap and exact symmetry relations and gives a self-adjoint involution $H$ ([[lem-spectral-flattening-preserves-gap-and-symmetries]]).

[F2] Plus-square Clifford algebras use the positive-first signature convention and have their square-free monomial dimensions and matrix classification ([[thm-clifford-pbw-basis-and-associated-graded]], [[thm-real-complex-clifford-algebra-classification]]).

[F3] Mixed-pair Clifford cancellation is $\mathrm{Cl}_{a+1,b+1}\cong\mathrm{Cl}_{a,b}\otimes M_2(\mathbb R)$ with the explicit generator map of [[lem-real-clifford-signature-recurrences-and-periodicity]].



**Proof technique:** exact real-linear generator dictionaries and matrix units.

## Proof

**Proof technique:** direct construction.

1.1 Apply [F1]. On the underlying real inner-product space, $I^2=-1$, $I^*=-I$ and $IH=HI$. Each antiunitary is orthogonal and anticommutes with $I$. An orthogonal generator of square $\epsilon\in\{1,-1\}$ has adjoint $\epsilon$ times itself. Thus positive generators are symmetric and negative generators skew-symmetric in this same metric. In the simultaneous case $TC$ is unitary and anticommutes with $H$; its square is $tc$, so the chiral involution is $TC$ for $tc=1$ and $iTC$ for $tc=-1$. [given, F1, algebra]


1.2 Put $r=\operatorname{diag}(1,-1)$, $s=\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$ and $J=rs$. Then $r^2=s^2=1$, $J^2=-1$, and $J$ anticommutes with $r,s$. Send sign-reversed old generators to $x\otimes J$ and two new positive generators to $1\otimes r,1\otimes s$. Their squares and anticommutators prove a homomorphism $\mathrm{Cl}_{b+2,a}\to\mathrm{Cl}_{a,b}\otimes M_2(\mathbb R)$. Its image contains $1\otimes J$, hence all $x\otimes1$ and both tensor factors. Equal PBW dimensions [F2] make it an isomorphism. An old negative added mass becomes a positive added mass under this map. Together with [F3], this reduces a positive-mass problem with fixed signature $(a,b)$ to index $a-b$, and a negative-mass problem to index $b+2-a$. The matrix-unit functors extracting $E_{11}W$ and reconstructing $W$ preserve metrics, fixed representation identifications, continuous homotopies and direct-sum reference stabilization. Therefore this is equivalence of mass problems, not only an equality of algebra dimensions. [F2, F3, construct, algebra]


2.1 If only $C$ is present use positive mass $M=H$ and fixed generators $e_1=C,e_2=IC$. Their squares are both $c$, they anticommute, and both anticommute with $M$. Conversely $I=c e_2e_1$ is an orthogonal complex structure, $C=e_1$ is antiunitary for it, and a positive symmetric mass anticommuting with both fixed generators commutes with $I$ and anticommutes with $C$. Thus this is an exact invertible dictionary: class D has fixed signature $(2,0)$ and class C has fixed signature $(0,2)$, both with positive mass. [given, step 1.1, construct, algebra]


2.2 If only $T$ is present use negative mass $M=IH$ and fixed generators $e_1=T,e_2=IT$. Their squares are both $t$, they anticommute with one another and with $M$. Conversely $I=t e_2e_1$ and $H=-IM$ recover a complex-linear self-adjoint involution commuting with the antiunitary $T=e_1$. The matrix $M$ is skew-symmetric and has square $-1$, so these formulas recover all adjoint conditions too. Thus AI has fixed signature $(2,0)$ and AII fixed signature $(0,2)$, with a negative mass. [given, step 1.1, construct, algebra]


3.1 When both antiunitaries occur use positive mass $M=H$ and $e_1=C,e_2=IC,e_3=ITC$. The fixed squares are $(c,c,-tc)$. They pairwise anticommute: the first pair was checked in step 2.1, $e_3C=cIT$ while $Ce_3=-cIT$, and $e_3$ commutes with $I$, so it also anticommutes with $IC$. Each anticommutes with $H$. Conversely set $C=e_1$, $I=c e_2e_1$ and $T=-c I e_3C$. Multiplying these formulas using the three Clifford relations gives $I^2=-1$, $CI=-IC$, $TI=-IT$, $C^2=c$, $T^2=t$, $TC=CT$; the mass commutes with $I,T$ and anticommutes with $C$. This recovers the exact normalized input algebra. The fixed signatures are BDI $(2,1)$, DIII $(3,0)$, CII $(0,3)$ and CI $(1,2)$. [given, step 2.1, construct, algebra]


4.1 Substituting the signatures of step 2.1, step 2.2 and step 3.1 gives exactly the eight indices in the Statement, with the eightfold identification of [F2]. Each additional fixed negative Dirac generator increases $b$ by one in the positive-mass model and therefore decreases its index by one. These are fixed anticommuting matrices, not suspension coordinates of an arbitrary parameter family. For the complex classes, A has no fixed generator and a positive Hermitian mass, while AIII has the fixed chiral involution and a positive anticommuting mass. The same Pauli construction over $\mathbb C$ gives twofold matrix periodicity; multiplication of a generator by $i$ changes its square, so the complex index is modulo two. This proves all class labels and the dimension shift with their declared signs. [F2, F3, step 2.1, step 2.2, step 3.1, step 1.2, algebra] ∎
