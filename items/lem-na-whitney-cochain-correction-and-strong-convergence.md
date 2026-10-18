---
id: lem-na-whitney-cochain-correction-and-strong-convergence
kind: lemma
title: Finite element correction and strong convergence of Whitney cochain projections
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  [
    lem-na-whitney-averaged-pullback-moment-bounds,
    def-countable-choice,
    lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element
        exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Under the hypotheses and notation of the averaged-pullback lemma, choose one $\epsilon>0$ so small that $\|(Q_h^{\pm,k}-I)|_{E_{h,\pm}^k}\|_{2\to2}\le1/2$ for every mesh and degree; here $E_{h,+}^k=E_h^k$ and $E_{h,-}^k=E_{h,0}^k$. Set
$$A_h^{\pm,k}=Q_h^{\pm,k}|_{E_{h,\pm}^k},\qquad J_h^{\pm,k}=(A_h^{\pm,k})^{-1},\qquad \pi_h^{\pm,k}=J_h^{\pm,k}Q_h^{\pm,k}.$$
These are uniformly $L^2$-bounded projections onto their indicated spaces. They commute with $d$ in degrees $k=0,1,2$ on respectively $H\Lambda^k$ and $H_0\Lambda^k$; the degree-three differential is zero. They are uniformly bounded in their graph norms. If $h_{\max}\to0$, then $\pi_h^{\pm,k}u\to u$ in $L^2$ for every $L^2$ form, uniformly for $u$ in any compact $L^2$ subset. They converge in the graph norm on the corresponding graph domains.

## Facts & Assumptions


**Given:** Countable Choice and the uniform bounds, commutation identities and relative-space conformity of [[lem-na-whitney-averaged-pullback-moment-bounds]].

[F1] Compactly supported smooth coefficient vectors are dense in $L^2$ of any open set under Countable Choice ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]). All other completeness and smoothing inputs, with their choice hypothesis, are already included in the preceding supplier. The inverse series below is on a finite-dimensional space; it introduces no new choice principle.

## Proof


1.1 On each indicated finite element space the Neumann series $J_h=\sum_{j=0}^{\infty}(I-A_h)^j$ converges in operator norm, has norm at most two, and telescopes to both inverse identities. Therefore $\pi_h$ has norm at most $2C\epsilon^{-3/2}$ and equals the identity on its target. Its range is precisely that target, so $\pi_h^2=\pi_h$. For $k=0,1,2$, the restriction of commutation to the subcomplex gives $dA_h^k=A_h^{k+1}d$; applying this identity to $J_h^k v_h$ and multiplying by $J_h^{k+1}$ gives $dJ_h^k v_h=J_h^{k+1}dv_h$. Consequently $d\pi_h^k u=\pi_h^{k+1}du$ on the stated full or relative domain in those degrees. In degree three, $d=0$, so the terminal commutation identity is automatic and needs no degree-four operator. The two $L^2$ bounds give the graph-norm bound directly. [given, construct, algebra]

2.1 The projection identity yields $\|u-\pi_hu\|_2\le(1+\|\pi_h\|)\inf_{v_h}\|u-v_h\|_2$. For a globally smooth form $u$ on a neighborhood of $\overline\Omega$, canonical Whitney interpolation converges in $L^2$: subtract a constant-coefficient form on each cell, which is reproduced in every degree; the remaining coefficient has supremum at most $C h_K\sup_K|\nabla u|$. Its simplex moments are at most $C h_K^{k+1}\sup_K|\nabla u|$, so the scaled moment norm gives $\|u-I_hu\|_{L^2(K)}\le C h_K |K|^{1/2}\sup_K|\nabla u|$. Summing proves convergence. Relative spaces have the same approximation property for compactly supported smooth inputs, whose boundary moments vanish once the mesh is sufficiently fine. By [F1], smooth restrictions are dense in full $L^2$, and compactly supported smooth forms are dense in relative $L^2$, which is the same ambient $L^2$ space. A three-term approximation and the uniform projection bound prove strong $L^2$ convergence for every $u$ in either case. [F1, given, step 1.1, construct, algebra]

3.1 If $\mathcal C$ is compact in $L^2$, choose a finite $\delta$-net $\{u_1,\ldots,u_N\}$ in it. For $u$ within $\delta$ of $u_j$, $\|(I-\pi_h)u\|_2\le(1+C)\delta+\|(I-\pi_h)u_j\|_2$. The finite maximum tends to zero by step 2.1, and then $\delta\downarrow0$ proves uniform convergence on $\mathcal C$. For $u$ in a graph domain of degree $k<3$, commutation and strong convergence in degrees $k,k+1$ give $\|u-\pi_hu\|_2+\|du-d\pi_hu\|_2\to0$. In degree three the graph norm is the $L^2$ norm, so step 2.1 gives graph convergence. [step 1.1, step 2.1, algebra] ∎
