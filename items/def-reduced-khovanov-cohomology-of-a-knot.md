---
id: def-reduced-khovanov-cohomology-of-a-knot
kind: definition
title: "Reduced Khovanov cohomology of a knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - alg-khovanov-chain-complex-from-diagram
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - def-cochain-complex-in-an-abelian-category
  - lem-khovanov-cube-differential-squares-to-zero
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, arXiv:math/9908171v2, §§8.1–8.4"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §6.3.4"
      url: "https://arxiv.org/pdf/2501.03115v1"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, arXiv:1107.1524v2 (2022), §§4–5"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
---

## Definition

Let $(D,p)$ be a finite regular oriented diagram of a knot with a basepoint $p$ away from the crossings, and let $C(D)$ be its normalized integral Khovanov cochain complex. At each resolution state, let $X_p$ act by multiplication by $X$ on the tensor factor for the circle containing $p$, and by the identity on every other circle factor. The basepoint action is the direct sum of these statewise maps. Define the reduced cochain complex by
$$\widetilde C(D,p):=C(D)/\operatorname{im}(X_p),$$
with the same cohomological grading and with reduced quantum degree $\widetilde j=j-1$ for the class represented by a state whose basepoint circle is labelled $1$. Its cohomology is the reduced integral Khovanov cohomology $\widetilde{Kh}^{i,\widetilde j}(D,p)$. The unknot is normalized so that its reduced group lies in bidegree $(0,0)$.

Equivalently, cut the based knot at $p$ to a one-interval tangle. Put $M=\mathbb Z$ in quantum degree $0$ with $X\cdot1=0$. A resolution with $k$ closed circles and the distinguished interval is assigned $\mathcal A^{\otimes k}\otimes M$. An edge that merges a circle into the interval uses $m_M(1\otimes1)=1$ and $m_M(X\otimes1)=0$; an edge that splits the interval uses $\Delta_M(1)=X\otimes1$, where the circle factor is written first and the interval factor second. Edges not meeting the interval use $m$ or $\Delta$. This based tangle cube is the quotient complex above, with the stated quantum shift.

## Definition references

[[alg-khovanov-chain-complex-from-diagram|Normalized unreduced Khovanov complex]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Integral Frobenius algebra and edge maps]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§8.1–8.4](https://arxiv.org/pdf/math/9908171v2)

[Zhang, *Notes on Khovanov homology* (2025), §6.3.4](https://arxiv.org/pdf/2501.03115v1)

[Kauffman, *An Introduction to Khovanov Homology* (2022), §§4–5](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

## Facts & Assumptions
**Given:** A based knot diagram $(D,p)$ and the normalized integral Khovanov cochain complex defined in [[alg-khovanov-chain-complex-from-diagram]].

[F1] On a resolution circle, $X^2=0$, $\Delta(1)=1\otimes X+X\otimes1$, and $\Delta(X)=X\otimes X$; multiplication is the product in $\mathbb Z[X]/(X^2)$ ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]).

[F2] The differential is the signed sum of edge maps, each equal to multiplication or comultiplication on the factors meeting that edge and the identity on all other factors ([[alg-khovanov-chain-complex-from-diagram]]).

[F3] The signed cube differential squares to zero, so these state modules form a cochain complex ([[lem-khovanov-cube-differential-squares-to-zero]]).

## Proof

1.1 If an edge does not meet the basepoint circle, its map is the identity on the basepoint factor and hence commutes with $X_p$. If the edge merges the basepoint circle with another circle, associativity gives $m(Xa\otimes b)=X\,m(a\otimes b)$. If it splits the basepoint circle, the Frobenius identity gives $\Delta(Xa)=(X\otimes1)\Delta(a)=(1\otimes X)\Delta(a)$; on $a=1,X$ these are respectively $X\otimes X$ and $0$ on all three sides. Thus every edge map commutes with $X_p$, so $\operatorname{im}(X_p)$ is a subcomplex. [F1, F2, given, algebra]

2.1 By [F3], the unreduced differential already squares to zero, and by step 1.1 it preserves $\operatorname{im}(X_p)$; thus the induced quotient differential also squares to zero. In each state the based factor is $\mathcal A=\mathbb Z\{1,X\}$, and $X_p$ has image $\mathbb Z\{X\}$. Therefore the quotient factor is $\mathbb Z\{1\}$, with raw quantum degree $+1$; subtracting one gives reduced degree $0$. [F1, F2, F3, step 1.1, algebra]

3.1 After cutting the based circle, every state has one distinguished interval factor $M$. The quotient identification sends the surviving based label $1$ to $1\in M$. For a merge into that interval, $m(1\otimes1)=1$ and $m(X\otimes1)=0$ in the quotient, exactly the displayed $m_M$; for a split, $\Delta(1)=1\otimes X+X\otimes1$ and the term with $X$ on the distinguished interval is zero in $M$, leaving $X\otimes1$, exactly $\Delta_M(1)$. Edges away from the interval retain $m$ and $\Delta$. Hence this statewise identification commutes with every edge and gives the stated based tangle cube isomorphism. [F1, F2, step 2.1, construct, algebra] ∎
