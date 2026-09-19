---
id: lem-the-ahss-first-differential-is-the-cellular-coboundary
kind: lemma
title: The AHSS first differential is the cellular coboundary
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients, prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory, thm-cellular-boundary-is-the-incidence-degree-matrix, def-incidence-number-of-two-cw-cells, def-oriented-cellular-chain-group, thm-cellular-cochains-compute-cohomology-with-local-coefficients, def-exact-couple, thm-an-exact-couple-generates-a-spectral-sequence]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yiannis Loizides, The Atiyah–Hirzebruch Spectral Sequence, Theorem 3.2 and its diagram, printed pp. 5–6"
      url: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
      locator: "Theorem 3.2 and its component diagram, printed pp. 5–6"
---

## Statement

Let $X$ be a finite CW complex with chosen cells and orientations, and let
$h$ be the CW-pair theory of a reduced generalized cohomology theory. Under the
identification $E_1^{p,q}\cong C^p_{\mathrm{cell}}(X;h^q(*))$ of
[[lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients]], the first
differential of the skeletal exact couple is the cellular coboundary
$$\delta:C^p_{\mathrm{cell}}(X;h^q(*))\longrightarrow C^{p+1}_{\mathrm{cell}}(X;h^q(*))$$
of the cellular cochain complex with coefficients in the abelian group $h^q(*)$.
Consequently
$$E_2^{p,q}\cong H^p\bigl(X;h^q(*)\bigr).$$

## Facts & Assumptions

[F1] The first page is identified with cellular cochains by $E_1^{p,q}\cong\operatorname{Hom}(C_p^{\mathrm{cell}}(X),h^q(*))$, via the wedge decomposition of $X^p/X^{p-1}$ and the suspension isomorphisms ([[lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients]]).

[F2] In the homological indexing of [[def-exact-couple]] and [[thm-an-exact-couple-generates-a-spectral-sequence]], the initial differential is $jk:E^1_{a,b}\to E^1_{a-1,b}$ and has bidegree $(-1,0)$. Under the cohomological reindexing $(p,q)=(-a,-b)$ used for the skeletal AHSS, it becomes $d_1:E_1^{p,q}\to E_1^{p+1,q}$. Concretely it sends a class on $(X^p,X^{p-1})$ first by the pair map to $h^{p+q}(X^p)$ and then by the connecting map of $(X^{p+1},X^p)$ to $h^{p+q+1}(X^{p+1},X^p)$.

[F3] A based map $S^p\to S^p$ of degree $d$ acts by multiplication by $d$ on any reduced generalized cohomology group of $S^p$ ([[prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory]]).

[F4] For an oriented $(p+1)$-cell $e^{p+1}_\tau$ and an oriented $p$-cell $e^p_\sigma$, the incidence number $[e^{p+1}_\tau:e^p_\sigma]$ is the degree of the composite of the attaching map of $e^{p+1}_\tau$ with the collapse of $X^p/X^{p-1}$ onto the sphere $e^p_\sigma/\partial e^p_\sigma$ ([[def-incidence-number-of-two-cw-cells]]), and the cellular boundary is the incidence-degree matrix ([[thm-cellular-boundary-is-the-incidence-degree-matrix]]).

[F5] The cellular cochain complex of $X$ with coefficients in an abelian group $G$ has coboundary the dual of the cellular boundary, with matrix entries $[e^{p+1}_\tau:e^p_\sigma]$ in the dual bases, and its cohomology computes singular cohomology with coefficients $G$ ([[def-oriented-cellular-chain-group]], [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

## Proof

**Proof technique:** direct.

**Given:** A finite CW complex $X$ with chosen cells and orientations, integers $p,q$, and the skeletal exact couple whose first page is identified in [F1].

1.1 The differential is $d_1=j\circ k=jk$ in the exact-couple indexing: a class in $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$ is first sent by the pair map $k$ to $h^{p+q}(X^p)$, and then by the connecting map $j$ of the next pair to $h^{p+q+1}(X^{p+1},X^p)=E_1^{p+1,q}$. [F2, given]

1.2 Restricting along the characteristic map $\varphi_\tau:(D^{p+1},\partial D^{p+1})\to(X^{p+1},X^p)$ of a $(p+1)$-cell and then collapsing the complement of a $p$-cell $\sigma$ exhibits the $(\tau,\sigma)$ component of $d_1$ as the map induced by the composite based map $c_\sigma\circ\pi\circ\varphi_\tau|_{\partial D^{p+1}}:S^p\to S^p$, namely the attaching sphere of $e^{p+1}_\tau$ followed by the collapse onto the $\sigma$-sphere; this is the component computation of the cited diagram, using naturality of the pair sequences and the component description of maps between finite wedges. [F1, F2, given]

1.3 The cellular coboundary with coefficients $h^q(*)$ has, in the dual bases, the same matrix entries $[e^{p+1}_\tau:e^p_\sigma]$, by duality of the cellular boundary and its incidence-degree description. [F4, F5]

2.1 By the degree action [F3], the $(\tau,\sigma)$ component of $d_1$ is multiplication by the degree of the composite in step 1.2, which is the incidence number $[e^{p+1}_\tau:e^p_\sigma]$ by [F4]. [F3, F4, step 1.2]

3.1 Since the two matrices agree and the identifications of [F1] are compatible with the cellwise decompositions, $d_1$ is the cellular coboundary; therefore $E_2^{p,q}\cong H^p(X;h^q(*))$ by the definition of the second page as the homology of the first page and the cellular-cohomology comparison of [F5]. [F1, F5, step 1.3, step 2.1]

4.1 This proves the stated identification of $d_1$ and the resulting formula for the second page. [step 3.1] ∎

## Source notes

Compare [Loizides](https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf), Theorem 3.2 and its component diagram, printed pp. 5–6, where the same matrix computation identifies $d_1$ with the coboundary of cellular cohomology with coefficients $h^q$.
