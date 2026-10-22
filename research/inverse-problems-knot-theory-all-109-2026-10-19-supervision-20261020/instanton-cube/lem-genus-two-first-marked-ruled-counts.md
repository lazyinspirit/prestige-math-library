---
id: lem-genus-two-first-marked-ruled-counts
kind: lemma
title: Genus-two first marked ruled counts
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-genus-two-ruled-surface-wall-has-fifth-surface-count-minus-two
  - lem-relative-surface-insertions-use-marked-loop-cutdowns
  - lem-genus-two-marked-cap-classes-exhaust-the-even-completion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vicente Munoz, Gluing formulae for Donaldson invariants for connected sums along surfaces, Proposition18 and Lemma21
      url: https://arxiv.org/abs/dg-ga/9702002
---

## Statement

Assume full AC and the actual ordinary wall-family and marked-cap constructions below. Let $S=C\times\mathbb{CP}^1$, with $C$ of genus two, denote its factor classes by $\Sigma=C\times\{z\}$ and $B=\{q\}\times\mathbb{CP}^1$, and use the signed sum of determinant extensions $w=B,w+\Sigma$. In the long-neck chamber of the product-cap gluing, the entire expected-dimension-ten mixed insertion counts are
$$D_S^{(B,\Sigma)}(\Sigma^aB^{5-a})=\frac{(-1)^{6-a}}2(a-1)(a-4),\qquad0\le a\le5.$$
In increasing order of $a$ the values are $2,0,-1,1,0,-2$. These are actual closed counts computing marked cap-pairing coefficients. They do not include the next charge family, in particular the expected-dimension-fourteen count $D_S^{(B,\Sigma)}(\Sigma^6B)$.

## Facts & Assumptions

**Given:** Rational universal normalization $\mu=-p_1(\operatorname{ad}\mathbb E)/4$ and the signed quotient orientation.

[F1] The actual regular compact dimension-ten ASD moduli is $P(V)\to J=\operatorname{Pic}^0(C)$, where $V=W\oplus W$, $\operatorname{ch}(W)=2+4\theta$, $\int_J\theta^2=2$, and $\zeta=c_1(O_{P(V)}(1))$. Its universal extension has lines $L=O_{\mathbb{CP}^1}(1)\otimes M\otimes O_{P(V)}(1)$ and $Q=N\otimes M^{-1}$, with $\deg N=1$. Its actual determinant orientation is minus its complex orientation. The family exhausts the chamber and continues to the required neck without another wall. [[lem-genus-two-ruled-surface-wall-has-fifth-surface-count-minus-two]]

[F2] The relative disk $\Delta=\{q\}\times D^2$ gives the actual marked-cap cycles, and gluing two such disks gives the insertion $B$ in the closed ruled surface. [[lem-relative-surface-insertions-use-marked-loop-cutdowns]] [[lem-genus-two-marked-cap-classes-exhaust-the-even-completion]]

[F3] Full AC and the universal rational incidence convention are inherited from these actual count constructions. [[def-axiom-of-choice]]

## Proof

1.1 **The additional class is computed on the actual universal family.** Use the universal Poincare class $\eta=c_1(M)$ on $C\times J$, with $\int_C\eta^2=-2\theta$. The difference of the two extension line classes is
$$c_1(L)-c_1(Q)=\Sigma-B+2\eta+\zeta.$$
For an extension of two lines the universal adjoint Pontryagin class is the square of this difference, independent of the extension's off-diagonal part. Slanting with $\Sigma$ gives $-2\zeta-8\theta$ and hence $\mu(\Sigma)=\zeta/2+2\theta$, as in [F1]. Slanting with $B$ instead fixes the $C$ coordinate. Both $B$'s own cohomology class and $\eta$ then restrict trivially in the fibre integration; the only term is $2\Sigma\zeta$. Therefore
$$\mu(B)=-\zeta/2.$$
A change of Poincare normalization tensors the universal rank-two bundle by a line and does not change its adjoint class. Thus this is a universal-adjoint computation, not a choice-dependent rank-two normalization. [F1, F3, given, construct, algebra]

2.1 **These classes are represented by the required geometric cutdowns.** Choose the $\Sigma$ representatives at distinct points of the ruling and the $B$ representatives at distinct points of $C$. Their compact supports can be chosen away from the eventual gluing necks before stretching. Restrict the generic resolved universal incidences from [F3] to the compact regular family $P(V)$. They represent exactly the classes computed in step 1.1. The expected real dimension is ten and each insertion has codimension two; five such insertions give a zero-dimensional oriented cutdown. This family has energy $4\pi^2$, below the ordinary bubble quantum, so there is no lost ideal stratum. It is the whole ASD moduli by [F1], not just a wall-crossing contribution. Its complex orientation must be multiplied by minus one, exactly as for the already supplied fifth-surface count. [F1, F3, step 1.1, construct]

3.1 **Fibre integration evaluates every degree-ten mixed count.** The actual projective bundle has rank four. The Chern classes in [F1] give
$$\pi_*\zeta^3=1,\qquad\pi_*\zeta^4=-8\theta,\qquad\pi_*\zeta^5=32\theta^2.$$
Put $b=5-a$. Expanding the actual cutdown class and retaining only base degree four gives
$$\begin{aligned}
\pi_*\bigl[(\zeta/2+2\theta)^a(-\zeta/2)^b\bigr]
&=\frac{(-1)^b}{32}\bigl(32-32a+16\tbinom a2\bigr)\theta^2\\
&=\frac{(-1)^b}{4}(a-1)(a-4)\theta^2.
\end{aligned}$$
Integrating $\theta^2$ gives two, and applying the actual orientation minus sign gives $(-1)^{b+1}(a-1)(a-4)/2$, the claimed values. In particular the two different mixed counts with $(a,b)=(2,3)$ and $(3,2)$ are minus one and plus one; their signs come from the universal class and the determinant orientation, not from a formal specialization of the ordinary pairing. [F1, step 1.1, step 2.1, algebra]

4.1 **The marked coefficients and the remaining next charge are distinguished.** By actual marked gluing [F2], the cap pairing entry with $a=i+j$ is
$$N_{ij}(t)=\sum_{r\ge0}\frac{t^r}{r!}D_S^{(B,\Sigma)}(\Sigma^aB^r).$$
The zero-energy flat family contributes only $a=3,r=0$, with value $-1/2$: its universal bundle is pulled from $C$ and the moduli, so $\mu(B)=0$ on that family. Negative energy gives no smaller-degree terms. The calculation above therefore supplies, for $a=0,1,2,3,4,5$, respectively the dimension-ten terms
$$\frac{t^5}{60},\quad0\cdot t^4,\quad-\frac{t^3}{6},\quad\frac{t^2}{2},\quad0\cdot t,\quad-2.$$
For $a=3$ the displayed term is additional to the flat constant $-1/2$. These formulas compute all terms through total insertion number five. They do not compute a term of total insertion number seven. In particular $N_{33}'(0)$ is the distinct dimension-fourteen ordinary determinant-$B$ count $D_S^B(\Sigma^6B)$, whose charge is one ordinary bubble quantum, not the half-quantum family $P(V)$. No continuation or dimension exclusion in this proof identifies that different moduli space with the present wall family. [F1, F2, step 2.1, step 3.1, algebra]
