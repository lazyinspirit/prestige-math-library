---
id: def-reduced-khovanov-cohomology-of-a-based-link-over-f2
kind: definition
title: "Reduced Khovanov cohomology of a based link over F2"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-khovanov-chain-complex-from-diagram
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - def-cochain-complex-in-an-abelian-category
  - lem-khovanov-cube-differential-squares-to-zero
  - thm-khovanov-chain-complex-from-diagram-procedure-properties
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §5"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Shumakovitch, Torsion of the Khovanov homology, §2.2"
      url: "https://arxiv.org/pdf/math/0405474v2"
    - title: "Turner, A hitchhiker’s guide to Khovanov homology, §1.2"
      url: "https://www.i2m.univ-amu.fr/perso/luisa.paoluzzi/Turner1.pdf"
---

## Definition

Let $(D,p)$ be a finite regular oriented link diagram with a marked point $p$ away from crossings, and let $C(D;\mathbb F_2)$ be its normalized Khovanov cochain complex over $\mathbb F_2$ obtained from the algebra $\mathcal A=\mathbb F_2[X]/(X^2)$ with $\deg_q(1)=1$ and $\deg_q(X)=-1$. On each resolution state, let $X_p$ multiply by $X$ on the circle containing $p$ and act as the identity on the other circle factors. Define the reduced complex by $\widetilde C(D,p)=C(D;\mathbb F_2)/\operatorname{im}X_p$, with the surviving based-circle label $1$ assigned reduced quantum degree $0$ by the shift $\widetilde j=j-1$. Its cohomology is $\widetilde{Kh}^{i,\widetilde j}(D,p;\mathbb F_2)$. The basepoint may lie on any component; for a link, independence of the chosen component is a separate theorem.

## Definition references

[[alg-khovanov-chain-complex-from-diagram|Normalized Khovanov cube and edge signs]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|The Frobenius algebra and merge/split maps]]

[[lem-khovanov-cube-differential-squares-to-zero|Square-zero of the unreduced cube differential]]

[[def-reduced-khovanov-cohomology-of-a-knot|Integral based-knot reduction convention]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §5](https://arxiv.org/pdf/math/0309170v1)

[Shumakovitch, *Torsion of the Khovanov homology*, §2.2](https://arxiv.org/pdf/math/0405474v2)

[Turner, *A hitchhiker’s guide to Khovanov homology*, §1.2](https://www.i2m.univ-amu.fr/perso/luisa.paoluzzi/Turner1.pdf)

## Facts & Assumptions

**Given:** A finite regular oriented link diagram $(D,p)$ and its normalized Khovanov cube over $\mathbb F_2$.

[F1] The circle algebra is $\mathcal A=\mathbb F_2[X]/(X^2)$, with multiplication $m$ and comultiplication $\Delta(1)=1\otimes X+X\otimes1$, $\Delta(X)=X\otimes X$ ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]).

[F2] Every cube edge is the corresponding merge map $m$ or split map $\Delta$, tensored with identities on unaffected circles ([[alg-khovanov-chain-complex-from-diagram]]).

[F3] The signed Khovanov differential squares to zero over the integral algebra, and hence its reduction modulo two also squares to zero ([[lem-khovanov-cube-differential-squares-to-zero]]).

[F4] Each diagram produces a finite normalized cochain complex ([[thm-khovanov-chain-complex-from-diagram-procedure-properties]]).

## Proof

1.1 If an edge avoids the marked circle, its map acts as the identity on that factor and commutes with $X_p$. For a merge involving the marked circle, associativity gives $m(Xa\otimes b)=X\,m(a\otimes b)$, with the marked factor placed on the appropriate input. For a split of that circle, the Frobenius identity gives $\Delta(Xa)=(X\otimes\mathrm{id})\Delta(a)=(\mathrm{id}\otimes X)\Delta(a)$; for $a=1$ both sides equal $X\otimes X$, and for $a=X$ both sides vanish. Thus every edge map commutes with $X_p$, so $\operatorname{im}X_p$ is a subcomplex. [F1, F2, given, algebra]

2.1 The quotient differential is well-defined by step 1.1 and squares to zero by [F3]. In each state the marked-circle factor has basis $1,X$, and multiplication by $X$ has image the one-dimensional span of $X$. The quotient therefore replaces that factor by $\mathbb F_2\{1\}$; the shift $j-1$ assigns the surviving label degree zero. This gives the stated reduced cochain complex and its cohomology. [F1, F3, F4, step 1.1] ∎
