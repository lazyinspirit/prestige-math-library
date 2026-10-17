---
id: lem-qsm-local-spin-inclusions-isometric
kind: lemma
title: Local spin factor inclusions preserve the operator norm
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [def-qsm-local-spin-algebras]
dependency_roles:
  def-qsm-local-spin-algebras: mathematical-premise
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.2.2, pp. 55–56
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 3 §1, p. 25
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Fix $d\ge1$, $q\ge1$, and finite regions $\Lambda\subseteq\Lambda'\subseteq\mathbb Z^d$ as in [[def-qsm-local-spin-algebras]]. Then the factor inclusion $\iota_{\Lambda,\Lambda'}(T)=T\otimes I$ is an isometric unital $*$-homomorphism:

$$\|\iota_{\Lambda,\Lambda'}(T)\|=\|T\|\qquad(T\in\mathcal A_\Lambda).$$

For nested finite regions $\Lambda\subseteq\Lambda'\subseteq\Lambda''$, the inclusions compose: $\iota_{\Lambda',\Lambda''}\circ\iota_{\Lambda,\Lambda'}=\iota_{\Lambda,\Lambda''}$.

## Facts & Assumptions

**Given:** $d\ge1$, $q\ge1$, finite $\Lambda\subseteq\Lambda'\subseteq\Lambda''\subseteq\mathbb Z^d$, and the configuration Hilbert spaces and inclusions of [[def-qsm-local-spin-algebras]].

[F1] For finite $\Lambda$, $\mathcal H_\Lambda=\ell^2(\{1,\ldots,q\}^\Lambda)$; for $\Lambda\subseteq\Lambda'$, restriction of configurations identifies $\mathcal H_{\Lambda'}$ with $\mathcal H_\Lambda\otimes\mathcal H_{\Lambda'\setminus\Lambda}$, and $\iota_{\Lambda,\Lambda'}(T)=T\otimes I$ ([[def-qsm-local-spin-algebras]]).

[F2] Each finite configuration Hilbert space has a finite orthonormal configuration basis, and $\|T\|=\sup_{\|u\|=1}\|Tu\|$ is its induced operator norm ([[def-qsm-local-spin-algebras]]).

## Proof

**Proof technique:** direct.

**Given:** $d\ge1$, $q\ge1$, the finite regions and configuration Hilbert spaces of the Statement.

1.1 Under [F1], $T\mapsto T\otimes I$ preserves products and adjoints because $(T\otimes I)(S\otimes I)=TS\otimes I$ and $(T\otimes I)^*=T^*\otimes I$; it sends $I_\Lambda$ to $I_{\Lambda'}$. The configuration-basis factorization is associative, so for nested regions the two successive inclusions and the direct inclusion act identically on every configuration basis vector and hence are equal operators. [given, F1, algebra]

1.2 Let $K=\mathcal H_{\Lambda'\setminus\Lambda}$, and choose its finite orthonormal configuration basis $e_1,\ldots,e_s$. Every $\xi\in\mathcal H_\Lambda\otimes K$ has a unique expansion $\xi=\sum_{j=1}^s \xi_j\otimes e_j$, with $\|\xi\|^2=\sum_j\|\xi_j\|^2$. Therefore $\|(T\otimes I)\xi\|^2=\sum_j\|T\xi_j\|^2\le\|T\|^2\|\xi\|^2$, so $\|T\otimes I\|\le\|T\|$. [given, F1, F2, algebra]

1.3 If $T=0$, both norms are zero. Otherwise, for every $\varepsilon>0$ the supremum definition in [F2] gives a unit vector $u\in\mathcal H_\Lambda$ with $\|Tu\|>\|T\|-\varepsilon$. Since $q\ge1$, $K$ is nonzero; choose a unit configuration vector $v\in K$. Then $\|(T\otimes I)(u\otimes v)\|=\|Tu\|\|v\|>\|T\|-\varepsilon$, so $\|T\otimes I\|\ge\|T\|-\varepsilon$ for every $\varepsilon>0$. [given, F1, F2, construct, algebra]

2.1 Letting $\varepsilon\downarrow0$ in step 1.3 and combining with step 1.2 gives $\|\iota_{\Lambda,\Lambda'}(T)\|=\|T\|$. Step 1.1 supplies the unital $*$-homomorphism and composition identities, completing the claim. [step 1.1, step 1.2, step 1.3] ∎

