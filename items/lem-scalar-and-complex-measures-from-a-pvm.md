---
id: lem-scalar-and-complex-measures-from-a-pvm
kind: lemma
title: Scalar and complex measures from a pvm
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-projection-valued-measure, thm-cauchy-schwarz-in-an-inner-product-space, def-complex-measure, def-measure, def-total-variation-of-a-signed-or-complex-measure, def-real-and-complex-inner-product-space, thm-hilbert-adjoint-properties, lem-orthogonal-projection-is-linear-self-adjoint-contractive, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Lemma 5.76, printed pp.276–277"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Definition 5.1 and Proposition 5.3, pp.15–18"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume Countable Choice. Let $(X,\Sigma)$ be a measurable space, let $H$ be a
complex Hilbert space, let $E$ be a projection valued measure on $(X,\Sigma)$,
and for $x,y\in H$ define

$$E_x(B):=\langle E(B)x,x\rangle,\qquad E_{x,y}(B):=\langle E(B)x,y\rangle \qquad(B\in\Sigma).$$

Then:

1. $E_x$ is a positive measure on $(X,\Sigma)$ with $E_x(X)=\|x\|^2$ and
   $0\le E_x(B)\le\|x\|^2$ for every $B$;
2. $E_{x,y}$ is a finite complex measure on $(X,\Sigma)$, the map
   $(x,y)\mapsto E_{x,y}$ is linear in $x$ and conjugate-linear in $y$, and
   $E_{y,x}=\overline{E_{x,y}}$, meaning $E_{y,x}(B)=\overline{E_{x,y}(B)}$ for
   every $B$;
3. $|E_{x,y}|(X)\le\|x\|\,\|y\|$, so $|E_{x,y}(B)|\le\|x\|\,\|y\|$ for every
   $B$, and the polarization identity
   $$E_{x,y}=\frac14\sum_{k=0}^{3}i^kE_{x+i^ky}$$
   holds as an identity of complex measures, where $i^k$ are the fourth roots
   of unity $1,i,-1,-i$.

## Facts & Assumptions

[A1] Projection values satisfy $P^2=P=P^*$, $\langle Px,x\rangle=\|Px\|^2\ge0$ and $\|Px\|\le\|x\|$ ([[def-projection-valued-measure]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[A2] $E(\varnothing)=0$, $E(X)=I$, $E(B\cap C)=E(B)E(C)$, and for every pairwise disjoint sequence $(B_n)$ with union $B$ one has $E(B)x=\lim_{N}\sum_{n\le N}E(B_n)x$ in norm ([[def-projection-valued-measure]]).

[A3] $\langle Su,v\rangle=\langle u,S^*v\rangle$ for all $u,v$, and for self-adjoint $S$ one has $\langle Su,v\rangle=\langle u,Sv\rangle$ and $\langle Su,v\rangle=\overline{\langle Sv,u\rangle}$ ([[thm-hilbert-adjoint-properties]], [[def-real-and-complex-inner-product-space]]).

[A4] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A5] A measure is a $[0,+\infty]$-valued countably additive set function vanishing at $\varnothing$ ([[def-measure]]); a complex measure is a $\mathbb C$-valued countably additive set function vanishing at $\varnothing$ ([[def-complex-measure]]); its total variation is the supremum of $\sum_n|\nu(E_n)|$ over countable measurable partitions ([[def-total-variation-of-a-signed-or-complex-measure]]).

[A6] The pairing is linear in the first argument, conjugate-linear in the second, and $\|u\|^2=\langle u,u\rangle$ ([[def-real-and-complex-inner-product-space]]).

[A7] Countable Choice is the declared standing hypothesis of this block of the page ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A measurable space $(X,\Sigma)$, a complex Hilbert space $H$, a projection valued measure $E$ on it, vectors $x,y\in H$, and a pairwise disjoint sequence $(B_n)\subseteq\Sigma$ with union $B$.

1.1 $E_x$ is countably additive and vanishes at $\varnothing$: using strong additivity, $E_x(B)=\langle\lim_N\sum_{n\le N}E(B_n)x,x\rangle=\lim_N\sum_{n\le N}\langle E(B_n)x,x\rangle=\sum_nE_x(B_n)$, with the limit pulled through the continuous linear functional $\langle\cdot,x\rangle$, while $E_x(\varnothing)=\langle0,x\rangle=0$ and $E_x(X)=\langle x,x\rangle=\|x\|^2$. [A2, A6]

1.2 $E_x$ is nonnegative and bounded by its total mass: $E_x(B)=\langle E(B)x,E(B)x\rangle=\|E(B)x\|^2\ge0$ and $\|E(B)x\|\le\|x\|$, so $0\le E_x(B)\le\|x\|^2$; hence $E_x$ is a positive measure with $E_x(X)=\|x\|^2$. [A1, A6]

1.3 $E_{x,y}$ is a finite complex measure and the map is linear in $x$ and conjugate-linear in $y$: countable additivity holds by the same limit argument with the continuous functional $\langle\cdot,y\rangle$, $E_{x,y}(\varnothing)=0$, and $\langle E(B)(x+u),y\rangle=\langle E(B)x,y\rangle+\langle E(B)u,y\rangle$, $\langle E(B)(\lambda x),y\rangle=\lambda\langle E(B)x,y\rangle$, $\langle E(B)x,\lambda y\rangle=\overline\lambda\langle E(B)x,y\rangle$; finiteness follows from $|E_{x,y}(B)|=|\langle E(B)x,y\rangle|\le\|E(B)x\|\,\|y\|\le\|x\|\,\|y\|$. [A1, A2, A3, A4, A5, A6]

1.4 Conjugate symmetry: $\overline{E_{x,y}(B)}=\overline{\langle E(B)x,y\rangle}=\langle y,E(B)x\rangle=\langle E(B)y,x\rangle=E_{y,x}(B)$, using that $E(B)$ is self-adjoint. [A1, A3, A6]

1.5 Variation bound: let $(B_j)_{j\ge0}$ be a countable measurable partition of $X$. For every $N$, Cauchy--Schwarz gives $\sum_{j=0}^N|E_{x,y}(B_j)|=\sum_{j=0}^N|\langle E(B_j)x,E(B_j)y\rangle|\le\bigl(\sum_{j=0}^N\|E(B_j)x\|^2\bigr)^{1/2}\bigl(\sum_{j=0}^N\|E(B_j)y\|^2\bigr)^{1/2}\le\|x\|\,\|y\|$. Indeed, orthogonality and strong additivity give $\sum_{j\ge0}\|E(B_j)x\|^2=\sum_{j\ge0}\langle E(B_j)x,x\rangle=E_x(X)=\|x\|^2$, because $E(B_j)^2=E(B_j)=E(B_j)^*$ and the $B_j$ partition $X$; the same holds with $y$. Taking $N\to\infty$ yields $\sum_{j\ge0}|E_{x,y}(B_j)|\le\|x\|\,\|y\|$. [A1, A4]

1.6 Polarization: for fixed $B$ the form $\Lambda(u,v):=\langle E(B)u,v\rangle$ is sesquilinear, so expanding the four terms gives $\frac14\sum_{k=0}^{3}i^k\Lambda(u+i^kv,u+i^kv)=\Lambda(u,v)$ for all $u,v$ (the $|u|^2$ and $|v|^2$ coefficients cancel and the mixed terms add to $4\Lambda(u,v)$); reading the identity at $B$ and letting $B$ vary gives $E_{x,y}=\frac14\sum_{k=0}^{3}i^kE_{x+i^ky}$. [A6, algebra]

2.1 Hence every countable partition contributes at most $\|x\|\,\|y\|$ to the defining supremum of $|E_{x,y}|(X)$, so $|E_{x,y}|(X)\le\|x\|\,\|y\|$ and $|E_{x,y}(B)|\le|E_{x,y}|(X)\le\|x\|\,\|y\|$ for every $B$. [step 1.5, A5]

3.1 All asserted properties of $E_x$, $E_{x,y}$ hold for arbitrary $x,y$, so the scalar pairings of a projection valued measure are a positive measure of mass $\|x\|^2$ and a family of finite complex measures of variation at most $\|x\|\,\|y\|$, conjugate symmetric and recovered by polarization. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 1.6, A7] ∎
