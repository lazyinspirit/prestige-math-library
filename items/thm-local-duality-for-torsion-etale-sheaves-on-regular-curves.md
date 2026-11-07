---
id: thm-local-duality-for-torsion-etale-sheaves-on-regular-curves
kind: theorem
title: "Purity and local duality for torsion étale sheaves on regular curves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-etale-sheaf-of-finite-modules
  - def-constructible-etale-sheaf-of-finite-modules
  - def-locally-noetherian-and-noetherian-scheme
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Grothendieck et al., SGA 5, Exposé I, §5, Theorem 5.1"
      url: "https://grothendiecksga.com/read/sga5/en/I-5.html"
---

## Statement

Let $X$ be a Noetherian regular scheme of pure dimension one, let $n\ge1$ be invertible on $X$, and put $\Lambda=\mathbb Z/n\mathbb Z$. Write $\Lambda_X$ for the constant étale sheaf, $\mu_n$ for the sheaf of $n$th roots of unity, and $D_c^b(X,\Lambda)$ for the bounded derived category of sheaves of $\Lambda$-modules whose cohomology sheaves are constructible and whose geometric stalk complexes are perfect over $\Lambda$. For $E\in D_c^b(X,\Lambda)$ define $D_XE=R\underline{\operatorname{Hom}}(E,\Lambda_X(1)[2])$, where $R\underline{\operatorname{Hom}}$ is derived sheaf-Hom and $\Lambda_X(1)=\mu_n$. A complex is **dualizing** here if $D_X$ preserves $D_c^b(X,\Lambda)$ and the canonical biduality morphism $E\to D_XD_XE$ is an isomorphism for every $E$ in that category. Then $\Lambda_X(1)[2]$ is dualizing, and for every closed-point immersion $i:x\hookrightarrow X$ the extraordinary inverse image (the right adjoint of $i_*$) satisfies the purity isomorphism
$$
i^!\Lambda_X\cong\Lambda_x(-1)[-2],
$$
where $\Lambda_x(-1)=\underline{\operatorname{Hom}}(\mu_n,\Lambda_x)$.

## Statement references

[SGA 5, Exposé I, §5, Theorem 5.1 and its proof](https://grothendiecksga.com/read/sga5/en/I-5.html)

[SGA 5, Exposé I, §3, n°3.1.4 (absolute cohomological purity)](https://grothendiecksga.com/read/sga5/en/I-3.html)
