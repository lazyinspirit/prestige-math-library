---
id: def-sign-representation-and-restriction-of-a-representation
kind: definition
title: "The sign representation of $S_n$ and the restriction $\\operatorname{Res}^G_H(V)$ of a representation to a subgroup"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, def-subgroup, def-symmetric-group, thm-sign-is-a-homomorphism]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 4 Section 4.3"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Definition

Let $k$ be a field.

For the symmetric group $S_n$ ([[def-symmetric-group]]), the **sign
representation** over $k$ is the one-dimensional representation on $k$ in which
$$\sigma \cdot a:=\operatorname{sgn}(\sigma)a.$$
This is a representation because $\operatorname{sgn}:S_n \to \{\pm 1\}$ is a
group homomorphism ([[thm-sign-is-a-homomorphism]]).

Now let $\rho:G \to \operatorname{GL}(V)$ be a representation of a group $G$
over $k$, and let $H \le G$ be a subgroup ([[def-subgroup]]). The
**restriction** of $\rho$ to $H$ is the representation
$$\operatorname{Res}^G_H(V):=\rho|_H:H \longrightarrow \operatorname{GL}(V),\qquad h \longmapsto \rho(h).$$
It has the same underlying vector space $V$ and only forgets the action of the
elements outside $H$.

## Remarks

- In characteristic $2$, the sign representation coincides with the trivial
  representation because $-1=1$ in the field.

- Restriction changes the acting group, not the underlying vector space.
