---
id: def-hh-right-right-hopf-module-and-coinvariants
kind: definition
title: "Right-right Hopf modules and coinvariants"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps:
  - def-hh-scalar-and-tensor-conventions
  - def-hh-right-comodule-and-comodule-morphism
  - def-hh-hopf-algebra-and-antipode
  - def-left-and-right-modules
justified_by:
  - lem-hh-coinvariants-form-a-subspace
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Hans-Juergen Schneider, Lectures on Hopf Algebras, notes by Sonia Natale, Trabajos de Matematica 31/95"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "Section 2, printed pp. 22-23: right Hopf-module definition, compatibility, and coinvariants."
    - title: "D. S. Drogalski, Chapter 3: Hopf Algebras, UC San Diego 207A lecture notes"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Section 3.6, printed pp. 42-43: Definition 3.34 and Definition 3.37."
---

## Definition

Let $k$ be a field, $H$ a Hopf algebra over $k$, and $M$ a $k$-vector space. A **right $H$-module structure** on $M$ is a bilinear map $(m,h)\mapsto mh$ satisfying $(mh)g=m(hg)$ and $m1_H=m$. A **right $H$-comodule structure** is a linear map $\rho:M\to M\otimes H$ satisfying
$$
(\rho\otimes\operatorname{id}_H)\rho=(\operatorname{id}_M\otimes\Delta)\rho,\qquad (\operatorname{id}_M\otimes\varepsilon)\rho=\operatorname{id}_M.
$$
Write $\rho(m)=\sum m_0\otimes m_1$ and $\Delta(h)=\sum h_1\otimes h_2$, where each expression denotes a finite tensor sum. The pair of structures makes $M$ a **right-right Hopf module** if it satisfies
$$
\rho(mh)=\sum m_0h_1\otimes m_1h_2\qquad(m\in M,\ h\in H).
$$
A **morphism of right-right Hopf modules** is a linear map preserving both the right action and right coaction. The **coinvariants** are the subset
$$
M^{\operatorname{co}H}:=\{m\in M:\rho(m)=m\otimes1_H\}.
$$
The next lemma proves that this subset is a $k$-subspace. No finite-dimensionality of $H$ or $M$, and no bijectivity of the antipode, is part of the definition.
