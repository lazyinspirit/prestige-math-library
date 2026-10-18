---
id: def-na-second-order-elliptic-semijets-and-closure
kind: definition
title: Second-order elliptic semijets and their value-sensitive closures
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: []
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_base: Definition only; no choice principle is used.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "Sections 2–3 and Appendix A, printed pp. 9–18 and 56–63."
---

## Definition

Let $U\subseteq\mathbb R^m$ be open, $u:U\to\mathbb R$, and $z\in U$. Write $\mathbb S^m$ for the real symmetric $m$ by $m$ matrices. The second-order elliptic superjet consists of pairs $(p,X)\in\mathbb R^m\times\mathbb S^m$ such that
$$u(z+h)\le u(z)+p\cdot h+\tfrac12 h^{\mathsf T}Xh+o(|h|^2)\quad(h\to0).$$
Here the inequality means that its positive remainder divided by $|h|^2$ has limit zero. Denote this set by $J^{2,+}u(z)$. Define
$$J^{2,-}u(z)=-J^{2,+}(-u)(z).$$
The closed superjet $\overline J^{2,+}u(z)$ consists of all limits $(p,X)$ for which there are $z_n\in U$ and $(p_n,X_n)\in J^{2,+}u(z_n)$ satisfying
$$(z_n,u(z_n),p_n,X_n)\longrightarrow(z,u(z),p,X).$$
Define $\overline J^{2,-}u(z)=-\overline J^{2,+}(-u)(z)$. The value convergence is part of the definition. The same definitions work for functions allowed to equal $-\infty$ away from the finite base point, with all approximating base values finite. A two-sided quadratic expansion means that both the upper and lower inequalities hold with the same $(p,X)$; it is also called a second-order Peano expansion. Matrix order means $X\le Y$ iff $h^{\mathsf T}Xh\le h^{\mathsf T}Yh$ for every $h$.

For space-time $z=(t,x)$ this is the full Euclidean jet, whose matrix also has time and mixed entries. No assertion about parabolic jets is included in this definition.
