---
id: def-bgg-bruhat-verma-sum-in-degree-k
kind: definition
title: The Bruhat graph and the BGG Verma sum in degree k
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-verma-module, def-bruhat-order-on-a-finite-weyl-group, def-integral-dominant-and-strictly-dominant-weights, def-finite-weyl-root-system-lattice-and-chamber-conventions, def-weyl-vector-rho-for-a-chosen-positive-system, def-bgg-category-o, def-integral-weyl-group-of-a-weight, thm-the-root-set-is-a-reduced-crystallographic-root-system, lem-finite-weyl-positive-roots-and-simple-reflections, lem-bruhat-covers-are-reflection-covers, lem-positive-root-pairings-of-a-dominant-integral-weight, lem-finite-weyl-closed-chambers-and-stabilizers]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-8.md"
      - "research/frontier-38-owner-30-alpha-batch-8-5a.md"
      - "research/frontier-38-owner-30-step5-hash-8-post-5a.json"
    content_sha256: "f46602f5b70b63e8fc167ae9e85ff444b72e8646b47de542240711d3ddaf6bc2"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 3.1-3.2, pp. 9-11"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "N. Hemelsoet and R. Voorhaar, A computer algorithm for the BGG resolution, arXiv:1911.00871, Sec. 2.1-2.2, pp. 3-5"
      url: "https://arxiv.org/pdf/1911.00871"
---

## Definition

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Cartan subalgebra $\mathfrak h$, positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$, positive system $\Phi^+$, simple roots $\alpha_1,\dots,\alpha_r$, Weyl group $W$ and Weyl vector $\rho$, as in [[def-finite-weyl-root-system-lattice-and-chamber-conventions]] and [[thm-the-root-set-is-a-reduced-crystallographic-root-system]]. Let $\Lambda^+$ be the dominant integral weights ([[def-integral-dominant-and-strictly-dominant-weights]]) and let $\lambda\in\Lambda^+$. Write $w\circ\lambda=w(\lambda+\rho)-\rho$ for the dot action of [[def-weyl-vector-rho-for-a-chosen-positive-system]].

The **Bruhat graph** has vertex set $W$; an arrow $x\to y$ means that $y\lhd x$ is a cover in Bruhat order, i.e. $y<x$ and $\ell(x)=\ell(y)+1$ ([[def-bruhat-order-on-a-finite-weyl-group]]). Equivalently, $\ell(x)=\ell(y)+1$ and $x=y s_\beta$ for a unique positive root $\beta\in\Phi^+$ ([[lem-bruhat-covers-are-reflection-covers]]). A **square** is a quadruple $(x,m_1,m_2,y)$ with $x\rhd m_1$, $x\rhd m_2$, $m_1\rhd y$, $m_2\rhd y$ and $m_1\ne m_2$.

For $0\le k\le|\Phi^+|$ put

$$C_k(\lambda)=\bigoplus_{\ell(w)=k}M(w\circ\lambda),$$

the direct sum of Verma modules ([[def-verma-module]]) over the elements of $W$ of length $k$, with its fixed direct-sum decomposition indexed by those elements. Each $C_k(\lambda)$ is an object of $\mathcal O$ ([[def-bgg-category-o]]), being a finite direct sum of Verma modules. The endpoints are $C_0(\lambda)=M(\lambda)$ and $C_{|\Phi^+|}(\lambda)=M(w_0\circ\lambda)$, where $w_0\in W$ is the longest element ([[lem-finite-weyl-closed-chambers-and-stabilizers]]); moreover $C_k(\lambda)=0$ for $k>|\Phi^+|$. Because $\lambda+\rho$ is regular ([[lem-positive-root-pairings-of-a-dominant-integral-weight]]), the weights $w\circ\lambda$ are pairwise distinct: $w\circ\lambda=w'\circ\lambda$ forces $w=w'$. The integral Weyl group of [[def-integral-weyl-group-of-a-weight]] therefore acts by the regular dot orbit $W\circ\lambda$ on the indexing set.
