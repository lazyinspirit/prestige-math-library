---
id: thm-howard-heegner-anticyclotomic-structure-theorem
kind: theorem
title: "Howard Rank-One Structure Theorem over the Anticyclotomic Z_p-Tower"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 41
deps:
  - def-classical-heegner-point-kolyvagin-data
  - def-p-primary-selmer-groups-for-an-elliptic-curve
  - thm-howard-cornut-heegner-nonvanishing-input
  - thm-howard-heegner-euler-system-kolyvagin-bound
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Benjamin Howard, The Heegner Point Kolyvagin System"
      url: "https://arxiv.org/pdf/1202.6340"
      locator: "§2.3 Theorem 2.3.7 and Theorem B, printed pp. 29–30."
verification: {}
---

## Statement

Retain Howard's hypotheses: $E/\mathbb Q$ has conductor $N$, $K$ is imaginary quadratic of discriminant $D\ne-3,-4$ with every prime dividing $N$ split in $K$, $p$ is odd and prime to $DN$, the Galois action on $T_p(E)$ is surjective, $E$ is ordinary at $p$, and $p$ does not divide the class number of $K$. Let $K_\infty/K$ be the anticyclotomic $\mathbb Z_p$-extension, meaning the unique $\mathbb Z_p$-extension on which complex conjugation acts by inversion, and put $\Gamma=\operatorname{Gal}(K_\infty/K)$ and $\Lambda=\mathbb Z_p\left[\!\left[\Gamma\right]\!\right]$. Let $\mathcal F_\Lambda$ be Howard's Selmer structure on the inverse-limit Galois representation, obtained by propagating the finite-layer local conditions. Let $\kappa_{\rm Hg,1}$ be the initial class of Howard's Heegner Kolyvagin system, which is nonzero by Cornut's nonvanishing theorem. Write $H=\Lambda\kappa_{\rm Hg,1}$ and let $X$ be the Pontryagin dual $\operatorname{Hom}_{\mathbb Z_p}(\varinjlim_n\operatorname{Sel}_{p^\infty}(E/K_n),\mathbb Q_p/\mathbb Z_p)$. Then $H^1_{\mathcal F_\Lambda}(K,T)$ is torsion-free of rank one over $\Lambda$, and there is a finitely generated torsion $\Lambda$-module $M$ such that
$$\operatorname{Char}_\Lambda(M)=\operatorname{Char}_\Lambda(M)^\iota,\qquad X\sim_\Lambda\Lambda\oplus M\oplus M,\qquad \operatorname{Char}_\Lambda(M)\mid\operatorname{Char}_\Lambda\bigl(H^1_{\mathcal F_\Lambda}(K,T)/H\bigr),$$
where $\iota$ is induced by $\gamma\mapsto\gamma^{-1}$ on $\Gamma$, $\sim_\Lambda$ means pseudo-isomorphic (there is a homomorphism with finite kernel and cokernel), and $\operatorname{Char}_\Lambda(M)=\prod_{\operatorname{ht}(\mathfrak q)=1}\mathfrak q^{\operatorname{length}_{\Lambda_{\mathfrak q}}(M_{\mathfrak q})}$ is the characteristic ideal of the torsion module $M$.

## Statement references

[Howard, *The Heegner Point Kolyvagin System*, §2.3 Theorem B](https://arxiv.org/pdf/1202.6340)

## Authoring status

The local anticyclotomic construction, Cornut nonvanishing proof, Kolyvagin bound and Iwasawa-module structure argument remain incomplete. The current Poitou–Tate carrier contains a local argument through its stated dependencies; that does not complete the missing Mazur–Rubin and Heegner arguments. This theorem remains escalated and retains the Statement's ordinary and class-number hypotheses.
