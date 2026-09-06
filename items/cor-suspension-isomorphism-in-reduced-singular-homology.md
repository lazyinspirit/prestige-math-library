---
id: cor-suspension-isomorphism-in-reduced-singular-homology
kind: corollary
title: "Suspension isomorphism in reduced singular homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-mayer-vietoris-sequence-in-singular-homology, def-zero-simplex-augmentation-and-reduced-singular-homology, cor-contractible-nonempty-spaces-have-the-homology-of-a-point, def-adjunction-cone-suspension, thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "J. P. May, A Concise Course in Algebraic Topology, §14.3"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: frontier-31a
---

## Statement

Let $G$ be an abelian group. For a based well-pointed space $X$—meaning that the basepoint inclusion
$\{x_0\}\hookrightarrow X$ is a cofibration—reduced singular homology has
natural isomorphisms
$\widetilde H_{n+1}(\Sigma X;G)\cong\widetilde H_n(X;G)$ for all integers $n$. Here $\Sigma X$ is the suspension with two distinct
apices, as in [[def-adjunction-cone-suspension]].

## Facts & Assumptions

**Given:** A based space $X$ whose basepoint inclusion is a cofibration, and its suspension covered by two cone neighborhoods.

## Proof

**Proof technique:** direct.

1.1 Write $q:X\times[0,1]\to\Sigma X$ for the quotient. The sets $U=q(X\times[0,2/3))$ and $V=q(X\times(1/3,1])$ are open, cover $\Sigma X$, and contract to their respective apices by moving the height coordinate linearly to $0$ or $1$. Their intersection is $W\cong X\times(1/3,2/3)$; projection $p:W\to X$ is a homotopy equivalence, with section at height $1/2$. Since $X$ has its specified basepoint, these spaces are nonempty. [given, construct]

2.1 A point has $H_0(\ast;G)=G$ and $H_j(\ast;G)=0$ for $j>0$: its singular complex has one copy of $G$ in each degree, with boundary alternately zero and identity. Thus [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] gives the same groups for $U,V$, with the degree-zero isomorphism induced by augmentation. For $n\ge1$, ordinary exactness in [[thm-mayer-vietoris-sequence-in-singular-homology]] gives $H_{n+1}(\Sigma X;G)\cong H_n(W;G)\cong H_n(X;G)$, the last isomorphism by [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]. These degrees are positive, so the groups are also reduced groups. [step 1.1, algebra]

3.1 For $n=0$, the same exact sequence gives $0\to H_1(\Sigma X;G)\xrightarrow{\delta}H_0(W;G)\xrightarrow{(\varepsilon,-\varepsilon)}G\oplus G$. Its last kernel is exactly $\widetilde H_0(W;G)$. Projection to $X$ preserves augmentation and is an ordinary homology isomorphism, so it identifies this kernel with $\widetilde H_0(X;G)$ under [[def-zero-simplex-augmentation-and-reduced-singular-homology]]. [step 2.1, algebra]

4.1 Every point of $\Sigma X$ has a height path to an apex, and the height path through $x_0$ joins the two apices. Hence $\Sigma X$ is path connected: differences of singular points bound paths, so augmentation identifies its $H_0$ with $G$ and its reduced $H_0$ is zero. This proves the shift for $n=-1$; for $n<-1$ both sides are zero by the stated reduced-complex convention. The arguments include the one-point space and $G=0$. [step 1.1, step 3.1, algebra]

5.1 A based map $f:X\to Y$ induces $[x,t]\mapsto[f(x),t]$ and preserves these covers and their projections. At chain level the connecting map takes a small cycle $z=u+v$ to $[\partial u]$; applying $f_\#$ gives $[\partial f_\#u]=[f_\#\partial u]$. Thus the connecting maps commute with $f$, and so do their degree-zero kernel restrictions and the projection isomorphisms. This proves naturality in every degree. [step 2.1, step 3.1, step 4.1, algebra] ∎
