---
id: def-cartier-divisor
kind: definition
title: "Cartier divisor"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-sheaf-total-quotient-rings
  - def-invertible-sheaf
  - def-sheafification
  - def-sheaf-on-topological-space
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §§31.14–31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
    - title: "The Stacks Project, Exercises, Definition 111.49.1(6)–(8)"
      url: "https://stacks.math.columbia.edu/tag/02AR"
---

## Definition

Let $X$ be a scheme and let $K_X$ be its sheaf of meromorphic functions, with
the injective structure map $\mathcal O_X\to K_X$
([[def-sheaf-total-quotient-rings]], [[def-sheaf-on-topological-space]]). The
presheaf
$$U\ \longmapsto\ K_X(U)^{\times}/\mathcal O_X(U)^{\times}$$
of abelian groups (units of the two sheaves of rings, the second embedded in
the first through the injective structure map) has a sheafification in the
sense of [[def-sheafification]]; the resulting sheaf of abelian groups is
denoted
$$K_X^{\times}/\mathcal O_X^{\times}.$$

A **Cartier divisor** on $X$ is a global section of $K_X^{\times}/\mathcal
O_X^{\times}$. The group of Cartier divisors is denoted
$\operatorname{CaDiv}(X)$; its law is induced by the group law of the quotient
sheaf, so that the sum of two Cartier divisors is represented by the product
of their local meromorphic equations, the zero element $0$ is the class of the
constant equation $1$, and the inverse of a divisor is represented by the
inverted local equations.

Concretely, a Cartier divisor can be described as follows. Let
$\mathcal U=\{U_i\}_{i\in I}$ be an open cover of $X$ and let
$f_i\in K_X(U_i)^{\times}$ be a meromorphic unit on $U_i$ for each $i$, with
$$f_i/f_j\ \in\ \mathcal O_X(U_i\cap U_j)^{\times}\qquad\text{for all }i,j.$$
The images of the $f_i$ in
$(K_X^{\times}/\mathcal O_X^{\times})(U_i)$ agree on the overlaps
$U_i\cap U_j$ (their quotient becomes $1$ in the quotient group), so the sheaf
axiom glues them to a global section, and a different choice of cover or of
representatives $f_i$ (that is, passing to a refinement and multiplying $f_i$
by units of $\mathcal O_X$ over the pieces) yields the same class. Conversely
every global section of the quotient sheaf is locally represented in this way,
as the local-equation description of Cartier divisors on this page records.

The **principal** Cartier divisors are the Cartier divisors that are the
images of a global meromorphic unit under the canonical map
$\Gamma(X,K_X^{\times})\to\Gamma(X,K_X^{\times}/\mathcal
O_X^{\times})$. They form a subgroup of $\operatorname{CaDiv}(X)$; a Cartier
divisor is principal exactly when it admits a representation by a single
global equation on $X$. The sign convention used on this page is that a
Cartier divisor with local equation $f$ records a zero of $f$ with positive
coefficient and a pole with negative coefficient; the convention is fixed
once and for all in the definition of the principal Cartier divisor of a
meromorphic unit.

If $X=\varnothing$ then $\mathcal O_X=K_X=0$, the quotient sheaf is the zero
sheaf and $\operatorname{CaDiv}(\varnothing)=0$; if $X$ is the spectrum of a
field, then $K_X=\mathcal O_X=\kappa$ and again
$\operatorname{CaDiv}(X)=0$, consistently with the fact that a Cartier divisor
measures the failure of a meromorphic unit to be a global unit.
