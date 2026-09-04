---
id: def-presheaf-plus-construction
kind: definition
title: "The plus construction for a presheaf"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-on-topological-space, def-stalk-of-presheaf, def-germ-of-section]
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 17"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3, Section 4.7"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Definition

Let $\mathcal F$ be a presheaf on a topological space $X$, and let $U\subseteq X$
be open.

A **germ-compatible local presentation** of a section over $U$ consists of:

- an open cover $U=\bigcup_{i\in I}U_i$;
- sections $s_i\in\mathcal F(U_i)$;

such that for every $x\in U_i\cap U_j$ the germs agree:
$$\left(s_i\right)_x=\left(s_j\right)_x\text{ in }\mathcal F_x.$$

Two germ-compatible local presentations $(U_i,s_i)$ and $(V_j,t_j)$ over $U$
are called **equivalent** if for every $x\in U$ and every choice of indices
$i,j$ with $x\in U_i\cap V_j$, one has
$$\left(s_i\right)_x=\left(t_j\right)_x\text{ in }\mathcal F_x.$$

The **plus construction** $\mathcal F^+$ is the presheaf defined by letting
$\mathcal F^+(U)$ be the set of equivalence classes of germ-compatible local
presentations over $U$. Restriction to an open subset $V\subseteq U$ is obtained
by replacing the cover $U_i$ with $U_i\cap V$ and restricting each section
$s_i$ to $U_i\cap V$.

There is a canonical morphism of presheaves
$$\eta:\mathcal F\longrightarrow\mathcal F^+$$
whose component on $U$ sends a section $s\in\mathcal F(U)$ to the class of the
single-chart presentation $(U,s)$.
