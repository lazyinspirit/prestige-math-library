---
id: thm-hh-fundamental-theorem-of-hopf-modules
kind: theorem
title: "The fundamental theorem of right-right Hopf modules"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 6
deps:
  - def-hh-right-right-hopf-module-and-coinvariants
  - lem-hh-coinvariants-form-a-subspace
  - lem-hh-free-right-right-hopf-module
  - lem-hh-hopf-module-coinvariant-projection
  - def-hh-hopf-algebra-and-antipode
  - thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hans-Juergen Schneider, Lectures on Hopf Algebras, notes by Sonia Natale, Trabajos de Matematica 31/95"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "Section 2, printed pp. 22-23: Theorem 2.1 and the full inverse-map proof."
    - title: "D. S. Drogalski, Chapter 3: Hopf Algebras, UC San Diego 207A lecture notes"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Section 3.6, printed pp. 43-44: Theorem 3.38 proof Steps 1-4."
---

## Statement

Let $H$ be a Hopf algebra over a field $k$ and $M$ a right-right Hopf module over $H$. Equip $M^{\operatorname{co}H}\otimes H$ with the free right-right Hopf-module structure. The map
$$
\alpha:M^{\operatorname{co}H}\otimes H\to M,\qquad n\otimes h\mapsto nh,
$$
is an isomorphism of right-right Hopf modules, with inverse
$$
\beta:M\to M^{\operatorname{co}H}\otimes H,\qquad \beta(m)=\sum P(m_0)\otimes m_1,
$$
where $P(m)=\sum m_0S(m_1)$. No bijectivity assumption on $S$ is used.

## Facts & Assumptions

**Given:** A field $k$, a Hopf algebra $H$ over $k$, and a right-right Hopf module $M$ over $H$.

[F1] The action is associative and unital, the coaction is coassociative and counital, and $\rho(mh)=\sum m_0h_1\otimes m_1h_2$ ([[def-hh-right-right-hopf-module-and-coinvariants]]).

[F2] $M^{\operatorname{co}H}$ is a $k$-subspace ([[lem-hh-coinvariants-form-a-subspace]]).

[F3] $P(m)=\sum m_0S(m_1)$ is linear, has image in $M^{\operatorname{co}H}$, and fixes each coinvariant ([[lem-hh-hopf-module-coinvariant-projection]]).

[F4] For each vector space $V$, the module $V\otimes H$ has action $(v\otimes h)g=v\otimes hg$ and coaction $\rho(v\otimes h)=\sum(v\otimes h_1)\otimes h_2$ ([[lem-hh-free-right-right-hopf-module]]).

[F5] The antipode is anti-multiplicative: $S(hg)=S(g)S(h)$ ([[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]).

[F6] The antipode equations are $\sum h_1S(h_2)=\varepsilon(h)1_H=\sum S(h_1)h_2$ ([[def-hh-hopf-algebra-and-antipode]]).

## Proof

1.1 The function $(n,h)\mapsto nh$ is bilinear on $M^{\operatorname{co}H}\times H$, since the action is bilinear and the coinvariants form a subspace [F2]. The tensor-product universal property therefore gives a unique linear map $\alpha:M^{\operatorname{co}H}\otimes H\to M$ with $\alpha(n\otimes h)=nh$. [given, F1, F2, construct]

1.2 Define $\beta:=(P\otimes\operatorname{id}_H)\rho$. Since $P$ has range in $M^{\operatorname{co}H}$ by [F3], the tensor map has codomain $M^{\operatorname{co}H}\otimes H$; thus $\beta$ is well defined and is exactly $\sum P(m_0)\otimes m_1$. This range argument uses the map $P$, not a claim that each individual Sweedler summand is coinvariant. [F3, construct]

1.3 By coassociativity of the coaction and the definition of $P$, $(\alpha\beta)(m)=\sum P(m_0)m_1=\sum (m_0S(m_1))m_2=\sum m_0\varepsilon(m_1)=m$. The third expression uses the right antipode identity in [F6] and the right-module associativity; the last uses the counit identity. Hence $\alpha\beta=\operatorname{id}_M$. [F1, F3, F6, algebra]

2.1 For $n\in M^{\operatorname{co}H}$ and $h\in H$, apply compatibility twice and anti-multiplicativity in [F5] to obtain $\beta(nh)=\sum n_0h_1S(n_1h_2)\otimes n_2h_3=\sum n_0h_1S(h_2)S(n_1)\otimes n_2h_3$. Coassociativity and $\rho(n)=n\otimes1_H$ give $\sum n_0\otimes n_1\otimes n_2=n\otimes1_H\otimes1_H$, so this reduces to $\sum nh_1S(h_2)\otimes h_3$. The identity $\sum h_1S(h_2)\otimes h_3=1_H\otimes h$, derived from [F6] followed by the counit equation, makes this $n\otimes h$. Pure tensors span, so $\beta\alpha=\operatorname{id}_{M^{\operatorname{co}H}\otimes H}$. [F1, F5, F6, step 1.1, algebra]

2.2 The map $\alpha$ is right $H$-linear: $\alpha((n\otimes h)g)=n(hg)=(nh)g=\alpha(n\otimes h)g$. It is right $H$-colinear because $(\alpha\otimes\operatorname{id})\rho(n\otimes h)=\sum nh_1\otimes h_2=\rho(nh)$, where the final equality is compatibility and $\rho(n)=n\otimes1_H$. These equalities hold on pure tensors and therefore on the full tensor product. [F1, F4, step 1.1, algebra]

3.1 Steps 1.3 and 2.1 show that $\alpha$ and $\beta$ are inverse linear maps. Since $\alpha$ preserves action and coaction by step 2.2, its inverse preserves them too: apply $\alpha^{-1}$ to the action identity, and apply $\alpha^{-1}\otimes\operatorname{id}_H$ to the coaction identity. Thus both maps are Hopf-module morphisms and $\alpha$ is the asserted isomorphism. The proof uses $S$ but nowhere uses $S^{-1}$. [step 1.3, step 2.1, step 2.2, algebra] ∎


## Remarks

The isomorphism and its inverse can be displayed as follows; the left object has the free right-right Hopf-module structure of [F4].

```tikzcd
M^{\mathrm{co}H}\otimes H \arrow[r, shift left=1.2ex, "\alpha"] & M \arrow[l, shift left=1.2ex, "\beta"]
```

Here $\alpha(n\otimes h)=nh$ and $\beta=(P\otimes\operatorname{id}_H)\rho$, with $P:M\to M^{\operatorname{co}H}$ given by $P(m)=\sum m_0S(m_1)$. Thus $\beta(m)=\sum P(m_0)\otimes m_1$. The inverse identities are $\beta\alpha=\operatorname{id}_{M^{\operatorname{co}H}\otimes H}$ and $\alpha\beta=\operatorname{id}_M$, proved in steps 2.1 and 1.3 respectively. Both arrows preserve the action and coaction by steps 2.2 and 3.1; the proof above is independent of the picture.
