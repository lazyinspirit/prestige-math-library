---
id: lem-reduced-khovanov-over-f2-basepoint-independence
kind: lemma
title: "Reduced Khovanov homology over F2 is independent of the chosen link component"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-reduced-khovanov-cohomology-of-a-based-link-over-f2
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - alg-khovanov-chain-complex-from-diagram
  - lem-khovanov-cube-differential-squares-to-zero
  - thm-khovanov-chain-complex-from-diagram-procedure-properties
proof_strategy: direct
axiom_use: "Choice-free: the proof uses only the finite cube, basis calculations over F2, and finite-dimensional linear algebra."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shumakovitch, Torsion of the Khovanov homology, §§3.1–3.2"
      url: "https://arxiv.org/pdf/math/0405474v2"
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §5"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Turner, A hitchhiker’s guide to Khovanov homology, §1.2"
      url: "https://www.i2m.univ-amu.fr/perso/luisa.paoluzzi/Turner1.pdf"
---

## Statement

Let $D$ be a finite regular diagram of an oriented link and let $p,q$ be any two points of $D$ away from crossings, possibly on different link components. Over $\mathbb F_2$, the reduced Khovanov cohomology groups defined using $p$ and $q$ are isomorphic as bigraded vector spaces. The isomorphism need not be canonical; no diagram-change invariance is asserted here.

## Statement references

[[def-reduced-khovanov-cohomology-of-a-based-link-over-f2|Based reduced complex over F2]]

[Shumakovitch, *Torsion of the Khovanov homology*, §§3.1–3.2](https://arxiv.org/pdf/math/0405474v2)

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §5](https://arxiv.org/pdf/math/0309170v1)

[Turner, *A hitchhiker’s guide to Khovanov homology*, §1.2](https://www.i2m.univ-amu.fr/perso/luisa.paoluzzi/Turner1.pdf)

## Facts & Assumptions

**Given:** The finite Khovanov cube $C(D;\mathbb F_2)$ and two basepoints $p,q$ away from its crossings.

[F1] The circle algebra and all edge maps are the Frobenius multiplication and comultiplication specified in [[def-khovanov-frobenius-algebra-and-cube-of-resolutions]] and [[alg-khovanov-chain-complex-from-diagram]].

[F2] The cube is a finite cochain complex with $d^2=0$ ([[lem-khovanov-cube-differential-squares-to-zero]], [[thm-khovanov-chain-complex-from-diagram-procedure-properties]]).

[F3] The based reduced complex is the quotient by $\operatorname{im}X_p$ with the stated one-degree shift ([[def-reduced-khovanov-cohomology-of-a-based-link-over-f2]]).

## Proof

1.1 On $\mathcal A=\mathbb F_2\{1,X\}$ define $N(1)=0$ and $N(X)=1$, and on a state tensor define $N$ as the sum of this operation over its circle factors. For multiplication, direct evaluation on $(1,1),(1,X),(X,1),(X,X)$ gives $N m=m(N\otimes\mathrm{id}+\mathrm{id}\otimes N)$. For comultiplication, evaluation at $1$ gives $(N\otimes\mathrm{id}+\mathrm{id}\otimes N)\Delta(1)=0=\Delta N(1)$, and evaluation at $X$ gives $(N\otimes\mathrm{id}+\mathrm{id}\otimes N)\Delta(X)=1\otimes X+X\otimes1=\Delta N(X)$. Thus $N$ commutes with each saddle map and hence with $d$. Also $N^2=0$: applying $N$ twice to one circle gives zero, and every pair of distinct circles occurs twice, hence cancels over $\mathbb F_2$. [F1, F2, given, algebra]

2.1 For a basepoint $p$, multiplication $X_p$ is a chain map and $X_p^2=0$. The local operators on the circle containing $p$ satisfy $NX_p+X_pN=\mathrm{id}$ on that factor; terms of $N$ on all other circles commute with $X_p$ and occur twice in the sum, so the identity holds on every state tensor. [F1, step 1.1, algebra]

3.1 Put $P=X_pN$ and $Q=NX_p$. The identity in step 2.1 and $X_p^2=N^2=0$ imply $P+Q=\mathrm{id}$, $P^2=P$, $Q^2=Q$, and $PQ=QP=0$. Both maps commute with $d$ by step 1.1. Moreover $\operatorname{im}P=\operatorname{im}X_p$: one inclusion follows from $P=X_pN$, and $PX_p=X_pNX_p=X_p$ gives the reverse inclusion. Hence the chain module splits as $\operatorname{im}X_p\oplus\operatorname{im}Q$. [step 1.1, step 2.1, algebra]

4.1 The quotient map identifies $C/\operatorname{im}X_p$ with $\operatorname{im}Q$. The restriction $X_p:\operatorname{im}Q\to\operatorname{im}P$ is an isomorphism with inverse $N$, since $NX_p$ is the identity on $\operatorname{im}Q$ and $X_pN$ is the identity on $\operatorname{im}P$. The map $X_p$ lowers raw quantum degree by two, while [F3] lowers the quotient grading by one. Thus, for each cohomological degree $i$, if $h_{i,j}$ is the dimension of unreduced cohomology in raw degree $j$ and $r_{i,j}(p)$ the dimension of reduced cohomology in reduced degree $j$, then $h_{i,j}=r_{i,j-1}(p)+r_{i,j+1}(p)$. [F3, step 3.1, algebra]

5.1 The diagram has finitely many cube generators, so the sequences $j\mapsto h_{i,j}$ and $j\mapsto r_{i,j}(p)$ have finite support. Rewrite step 4.1 as $r_{i,k}(p)=h_{i,k+1}-r_{i,k+2}(p)$. For each parity of $k$, start above the largest supported reduced degree, where the latter term is zero, and recurse downward by two; this uniquely determines all reduced dimensions from the unreduced dimensions. Therefore $r_{i,j}(p)=r_{i,j}(q)$ in every bidegree. Finite-dimensional vector spaces with equal dimensions are isomorphic in each bidegree; only finitely many bidegrees occur, so these isomorphisms assemble without an infinite choice principle. [F2, step 4.1, algebra] ∎
