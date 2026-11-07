---
dependency_level: 0
id: def-smooth-generic-local-gln-representation-and-mirabolic-induction
kind: definition
title: "Smooth Generic Local GL(n) Representations and Mirabolic Induction"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
sources:
  references:
    - title: "I. N. Bernstein and A. V. Zelevinsky, Induced Representations of Reductive p-adic Groups I, §§1.8 and 3.1–3.2"
      url: "https://www.numdam.org/item/ASENS_1977_4_10_4_441_0.pdf"
    - title: "J. W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 3, pp. 27–32"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $k$ be a nonarchimedean local field of characteristic zero, with ring of integers $\mathcal O$, maximal ideal $\mathfrak p$, and residue field of finite cardinality. A complex representation $(\rho,V)$ of a locally profinite group is smooth if every vector has an open stabilizer. It is irreducible if its only invariant linear subspaces are $0$ and $V$, and admissible if the fixed subspace of every compact open subgroup is finite dimensional.

Write $G_r=\mathrm{GL}_r(k)$, let $N_r$ be its upper-unitriangular subgroup, and let $P_r$ be the subgroup of matrices with bottom row $(0,\ldots,0,1)$. Thus $P_1=\{1\}$ and, for $r\ge2$, $P_r=G_{r-1}\ltimes U_r$, where $U_r$ is the additive group $k^{r-1}$ in the upper-right column. Fix a nontrivial smooth additive character $\psi:k\to S^1$ and put $\psi_{N_r}(u)=\psi(\sum_{i=1}^{r-1}u_{i,i+1})$. A smooth $G_r$-representation is generic if it admits a nonzero linear functional $\lambda:V\to\mathbb C$ with $\lambda(\rho(u)v)=\psi_{N_r}(u)\lambda(v)$. This condition does not require the functional to be continuous in a separate vector-space topology.

If $H$ is a closed subgroup of a locally profinite group $G$ and $\sigma$ a smooth representation of $H$ on $W$, the unnormalized compact induction $\mathrm{c\!\operatorname{-}Ind}_H^G\sigma$ consists of functions $f:G\to W$ such that $f(hg)=\sigma(h)f(g)$, the image of the support in $H\backslash G$ is compact, and $f$ is fixed by some open subgroup under right translation. The action is $(\rho(g)f)(x)=f(xg)$. If $U$ is abelian and $\chi:U\to S^1$ is a smooth character, the twisted coinvariant $V_{U,\chi}$ is the quotient by the linear span of $\rho(u)v-\chi(u)v$.

For $m\ge1$, let $K(\mathfrak p^m)=1+\mathfrak p^m M_r(\mathcal O)$ and let $K_1(\mathfrak p^m)$ be the subgroup of $\mathrm{GL}_r(\mathcal O)$ whose bottom row is congruent to $(0,\ldots,0,1)$ modulo $\mathfrak p^m$; put $K_1(\mathfrak p^0)=\mathrm{GL}_r(\mathcal O)$. A congruence newvector existence assertion here means existence of a nonzero vector fixed by at least one of these groups; it includes no uniqueness or identification of the least exponent with an epsilon factor.

## Definition references

[J. W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 3, pp. 27–32](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)
