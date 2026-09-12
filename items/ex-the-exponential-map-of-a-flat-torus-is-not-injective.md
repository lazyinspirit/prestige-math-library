---
id: ex-the-exponential-map-of-a-flat-torus-is-not-injective
kind: example
title: The exponential map of a flat torus is not injective
status: draft
origin: pipeline
pipeline_run: phase-2-next-17
deps: [def-domain-and-exponential-map-of-a-connection, def-countable-choice, def-quotient-topology, def-linear-isomorphism-and-invertible-linear-map, lem-euclidean-linear-maps-have-matrices-and-are-bounded, lem-standard-basis-of-f-n, thm-dimension-of-a-linear-subspace, prop-coordinate-criterion-for-a-riemannian-metric, prop-coordinate-geodesic-equation, prop-christoffel-formula-for-the-levi-civita-connection]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Definition 17.1.2, pp. 127–128
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. Let $n\ge1$, let $\Lambda=\mathbb Z\lambda_0+\cdots+\mathbb Z\lambda_{n-1}\subset\mathbb R^n$ for linearly independent $\lambda_i$ indexed by $i<n$ (a full-rank lattice), and give $T=\mathbb R^n/\Lambda$ its flat metric descended from the Euclidean metric. Identifying $T_{[x]}T$ with $\mathbb R^n$ by the quotient chart, every fibrewise exponential map has domain all of $T_{[x]}T$ and satisfies
$$\exp_{[x]}(v)=[x+v].$$
It is $\Lambda$-periodic and noninjective: for every $0\ne\lambda\in\Lambda$, the distinct vectors $v$ and $v+\lambda$ have the same image. In dimension zero, where $\Lambda=\{0\}$, the noninjectivity conclusion does not hold.

## Facts & Assumptions

**Given:** A positive-dimensional full-rank Euclidean lattice $\Lambda$, its quotient $T$, and $\mathrm{AC}_\omega$ as explicitly assumed.

[F1] [[def-countable-choice]] names the assumption $\mathrm{AC}_\omega$. Under that assumption, [[def-domain-and-exponential-map-of-a-connection]] defines $\exp_{[x]}(v)=\gamma_{[x],v}(1)$ whenever the maximal geodesic is defined at time $1$.

[F2] [[prop-coordinate-criterion-for-a-riemannian-metric]] makes the constant identity matrix a Riemannian metric in any smooth quotient chart; the proof below constructs those charts directly for the supplied full-rank lattice and checks their translation overlaps.

[F3] [[prop-christoffel-formula-for-the-levi-civita-connection]] gives the symbols from metric derivatives; [[prop-coordinate-geodesic-equation]] says a curve is geodesic exactly when its coordinate acceleration plus the Christoffel term vanishes.

[F4] [[lem-standard-basis-of-f-n]] gives $\dim_{\mathbb R}\mathbb R^n=n$, and [[thm-dimension-of-a-linear-subspace]] says that an independent subset of a finite-dimensional space extends to a basis without choice and that no independent subset has more than the ambient dimension. [[def-linear-isomorphism-and-invertible-linear-map]] identifies an invertible linear map and its inverse, and [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]] bounds both by a constant multiple of the Euclidean norm. [[def-quotient-topology]] tests openness through the quotient projection.

## Verification

1.1 By [F4], the standard list $(e_i)_{i<n}$ is a basis of $\mathbb R^n$, so this space has dimension $n$. The independent set $\{\lambda_i:i<n\}$ extends to a basis, again by [F4], but an independent subset has at most $n$ elements; the extension therefore adds no vector, and the supplied set is already a basis. Hence the linear map $A$ with $A(e_i)=\lambda_i$ for every $i<n$ is invertible and sends $\mathbb Z^n$ onto $\Lambda$. Apply the bound in [F4] to $A^{-1}$, obtaining $K_0\geq0$, and put $K=K_0+1>0$; then $|A^{-1}z|\leq K|z|$ for every $z$. A nonzero integer vector has Euclidean norm at least $1$, so every nonzero $\lambda=Am\in\Lambda$ satisfies $|\lambda|\geq1/K$. In particular $\Lambda$ is uniformly discrete. The maps $A,A^{-1}$ are continuous by the same bound. They induce inverse bijections $\overline A:\mathbb R^n/\mathbb Z^n\to\mathbb R^n/\Lambda$, $[x]\mapsto[Ax]$, and $\overline{A^{-1}}$. If $V$ is open in $\mathbb R^n/\Lambda$, then $$q_{\mathbb Z}^{-1}[\overline A^{-1}[V]]=A^{-1}[q_{\Lambda}^{-1}[V]]$$ is open; the quotient-topology definition in [F4] therefore makes $\overline A^{-1}[V]$ open. The identical calculation for $A^{-1}$ proves continuity of the inverse. We verify the quotient manifold properties directly. For distinct orbits $[x]\ne[y]$, write $d_\lambda=|x-y-\lambda|>0$. Only finitely many $\lambda=Am$ can have $d_\lambda\le1$: such an $m$ satisfies $|m|\le K(|x-y|+1)$, leaving finitely many integer vectors. Thus the minimum of $1$ and these finitely many positive distances is a number $d>0$. The quotient images of $B(x,d/3)$ and $B(y,d/3)$ are disjoint, proving Hausdorffness. The images of rational Euclidean balls form a countable basis because the quotient map is open. Take $0<2\varepsilon<1/K$. The quotient map $q:\mathbb R^n\to T$ is injective on each $B(x,\varepsilon)$: two points there differ by a lattice vector of norm less than $2\varepsilon$, hence by zero. It is open because $q^{-1}q(U)=\bigcup_{\lambda\in\Lambda}(U+\lambda)$ is open. Thus these restrictions are smooth quotient charts. Their transitions on overlap components are translations by lattice vectors, so they are smooth with identity derivative; the local Euclidean tensors agree and define the flat metric by [F2], with matrix $I_n$ in every such chart. [F2, F4, given, algebra]

2.1 Since the local metric matrix is constant, [F3] gives zero Levi–Civita symbols. For any $x,v\in\mathbb R^n$ the curve $\gamma(t)=q(x+tv)$, $t\in\mathbb R$, is smooth and, within every quotient chart, has coordinate velocity $v$ and acceleration zero. Hence [F3] makes it a geodesic for every real $t$. Its initial point is $[x]$ and its initial tangent is the vector identified with $v$. [F3, step 1.1]

3.1 By the uniqueness in [F1], the geodesic of step 2.1 is the maximal geodesic with that initial data: it already has domain $\mathbb R$. Therefore $1$ belongs to the domain for every $v$ and $\exp_{[x]}(v)=\gamma(1)=[x+v]$. The result is independent of the representative $x$, since replacing $x$ by $x+\mu$ with $\mu\in\Lambda$ leaves $[x+v]$ unchanged and translations have identity derivative on tangent coordinates. [F1, step 1.1, step 2.1]

4.1 Full rank and $n\ge1$ provide a nonzero lattice vector $\lambda$. The tangent-coordinate vectors $v$ and $v+\lambda$ are distinct, but $[x+v+\lambda]=[x+v]$; thus the formula of step 3.1 proves periodicity and noninjectivity. For $n=0$, there is only the zero tangent vector and the fibrewise map is injective, so the positive-dimensional hypothesis is necessary. The only choice assumption inherited by this example is the declared $\mathrm{AC}_\omega$ used in [F1]; constructing the displayed geodesic itself uses no choice. [F1, step 3.1, given] ∎

## Source locator

Datar, Definition 17.1.2, pp. 127–128, defines the exponential map at time $1$. The lattice quotient and noninjectivity calculation are carried out locally above; Datar is not claimed as a source for those particular formulas.
