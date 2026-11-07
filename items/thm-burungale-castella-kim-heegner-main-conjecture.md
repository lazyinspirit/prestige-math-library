---
id: thm-burungale-castella-kim-heegner-main-conjecture
kind: theorem
title: "Perrin–Riou Heegner-Point Main Conjecture under Residual and Non-Anomalous Hypotheses"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 40
deps:
  - def-bipartite-heegner-euler-system
  - def-kolyvagin-system-for-a-selmer-triple
  - thm-bcdt-every-elliptic-curve-over-q-is-modular
  - thm-bck-bipartite-heegner-system-and-reciprocity-laws
  - thm-bck-howard-bipartite-euler-system-bound
  - thm-bck-level-raised-heegner-nonvanishing
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "A. Burungale, F. Castella, and C.-H. Kim, A Proof of Perrin-Riou’s Heegner Point Main Conjecture"
      url: "https://arxiv.org/pdf/1908.09512"
      locator: "Introduction Theorem A and §3 Theorem 3.2, printed pp. 2 and 7–12."
verification: {}
---

## Statement

Let $E/\mathbb Q$ have conductor $N$, let $p>3$ be a prime of good ordinary reduction, and let $K$ be imaginary quadratic with discriminant $D_K<0$ odd, $D_K\ne-3$, and $pN$ prime to $D_K$. Write $N=N^+N^-$, where primes of $N^+$ split in $K$ and primes of $N^-$ are inert, and assume $N^-$ is squarefree and has an even number of prime factors. Let $\rho:G_{\mathbb Q}\to\operatorname{Aut}_{\mathbb F_p}(E[p])$ be surjective. Assume Hypothesis $\spadesuit$: the residual representation is ramified at every $\ell\parallel N^+$ and at every $\ell\mid N^-$ with $\ell\equiv\pm1\pmod p$; if $N$ is not squarefree, it is also ramified at some prime dividing $N^-$ or at at least two primes $\ell\parallel N^+$. Assume $p$ is non-anomalous, meaning $p\nmid\#\widetilde E(\mathbb F_w)$ for every prime $w\mid p$ of $K$.

Let $K_\infty/K$ be the anticyclotomic $\mathbb Z_p$-extension, $K_n$ its degree-$p^n$ layer, $\Gamma=\operatorname{Gal}(K_\infty/K)$, $\Lambda=\mathbb Z_p\left[\!\left[\Gamma\right]\!\right]$, $S_\infty=\varprojlim_n S_p(E/K_n)$, and $X_\infty=\operatorname{Hom}_{\mathbb Z_p}(\varinjlim_n\operatorname{Sel}_{p^\infty}(E/K_n),\mathbb Q_p/\mathbb Z_p)$. Let $\kappa_\infty\in S_\infty$ be the compatible Heegner class and let $\iota$ be the involution of $\Lambda$ induced by $\gamma\mapsto\gamma^{-1}$. Then $S_\infty$ and $X_\infty$ have $\Lambda$-rank one, and there is a finitely generated torsion $\Lambda$-module $M_\infty$ such that
$$X_\infty\sim_\Lambda\Lambda\oplus M_\infty\oplus M_\infty,\qquad \operatorname{Char}_\Lambda(M_\infty)=\operatorname{Char}_\Lambda(M_\infty)^\iota,\qquad \operatorname{Char}_\Lambda(M_\infty)=\operatorname{Char}_\Lambda(S_\infty/\Lambda\kappa_\infty).$$
Here $S_p(E/L)$ is the compact Selmer group fitting into $0\to E(L)\otimes\mathbb Z_p\to S_p(E/L)\to\varprojlim_m\operatorname{Sha}(E/L)[p^m]\to0$, where $\operatorname{Sha}(E/L)=\ker(H^1(L,E)\to\prod_v H^1(L_v,E))$; the inverse-limit maps are corestrictions. The direct-limit maps in $X_\infty$ are restrictions. Also $\sim_\Lambda$ means pseudo-isomorphic (there is a homomorphism with finite kernel and cokernel), and the characteristic ideal of a finitely generated torsion $\Lambda$-module $M$ is $\operatorname{Char}_\Lambda(M)=\prod_{\operatorname{ht}(\mathfrak q)=1}\mathfrak q^{\operatorname{length}_{\Lambda_{\mathfrak q}}(M_{\mathfrak q})}$.

## Statement references

[[def-bipartite-heegner-euler-system]]

[Burungale–Castella–Kim, *A Proof of Perrin-Riou’s Heegner Point Main Conjecture*, Theorem A](https://arxiv.org/pdf/1908.09512)

## Authoring status

The source proof proceeds through level-raised bipartite systems, Howard's divisibility, and Zhang's level-raised nonvanishing. Those systems and nonvanishing inputs remain proof-open here. The current BCDT modularity supplier, needed for the parametrization for every $E/\mathbb Q$, is also proof-not-supplied. This theorem is escalated with the exact residual, CM, modularity, and global-duality dependencies retained.
