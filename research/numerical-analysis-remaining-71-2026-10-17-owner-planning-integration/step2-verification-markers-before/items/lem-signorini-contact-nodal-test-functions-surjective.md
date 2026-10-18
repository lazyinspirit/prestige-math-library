---
id: lem-signorini-contact-nodal-test-functions-surjective
kind: lemma
title: "Contact nodal coordinates are independently attainable"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-signorini-nodal-p1-contact-scheme, def-signorini-partial-trace-space, thm-lp-trace-operator-on-a-bounded-c-one-domain, def-matching-affine-simplicial-meshes, def-broken-and-conforming-polynomial-spaces, thm-matching-continuous-piecewise-polynomials-are-wkp, def-countable-choice, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Falk, Error Estimates for the Approximation of a Class of Variational Inequalities, complete 10-page paper"
      url: "https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf"
      locator: "§3, printed pp. 966–970: conforming P1 spaces and vertex degrees of freedom."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11: Local interpolation on affine meshes"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf"
      locator: "§§11.1 and 11.5.1, printed pp. 118–128: affine triangles and the Lagrange nodal basis."
---

## Statement

Under [[def-signorini-nodal-p1-contact-scheme]], let the contact vertices be $a_0,\ldots,a_N$ and define $B:V_h\to\mathbb R^{N+1}$ by $B_i(v_h)=v_h(a_i)\cdot n$. Then $B$ is onto. In particular, for each $i$ there is $w_i\in V_h$ with $B_j(w_i)=\delta_{ij}$ for every contact vertex $a_j$.

## Facts & Assumptions

**Given:** The finite matching, boundary-conforming triangular mesh from [[def-signorini-nodal-p1-contact-scheme]], with both disjoint boundary segments resolved by boundary edges.

[A1] The Axiom of Choice is inherited through the partial-trace space that defines $V_h$. ([[def-axiom-of-choice]], [[def-signorini-partial-trace-space]])

[A2] Countable Choice is assumed by the matching piecewise-polynomial inclusion theorem. ([[def-countable-choice]], [[thm-matching-continuous-piecewise-polynomials-are-wkp]])

[F1] Each mesh cell is a finite nondegenerate affine triangle, and two cells meet in a whole common face or not at all. ([[def-matching-affine-simplicial-meshes]])

[F2] $V_h$ consists of continuous piecewise-affine vector fields in $V$, and both $\Gamma_D$ and $\Gamma_C$ are unions of boundary edges. ([[def-signorini-nodal-p1-contact-scheme]])

[F3] For a continuous $H^1$ field, $T_D$ agrees with its boundary restriction on $\Gamma_D$. ([[def-signorini-partial-trace-space]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]])

[F4] A scalar function that is polynomial on every cell and has matching traces on all common facets is in the conforming piecewise-polynomial space. ([[def-broken-and-conforming-polynomial-spaces]])

[F5] A continuous scalar member of that conforming piecewise-polynomial space belongs to $H^1(\Omega)$, with weak gradient equal almost everywhere to its cellwise gradient. ([[thm-matching-continuous-piecewise-polynomials-are-wkp]])

[F6] The contact normal $n$ is a unit vector and $\Gamma_D\cap\Gamma_C=\varnothing$. ([[def-signorini-partial-trace-space]])

## Proof

**Proof technique:** direct.

**Given:** The matching triangular mesh, its continuous P1 vector space $V_h$, its contact vertices, and the fixed unit normal $n$.

1.1 Fix a contact vertex $a_i$. On a nondegenerate triangle $K$ with vertices $b_0,b_1,b_2$, the matrix with columns $b_1-b_0$ and $b_2-b_0$ is invertible by [F1]. For $x\in K$, write $(s,t)$ for its image under the inverse affine coordinate map $x=b_0+s(b_1-b_0)+t(b_2-b_0)$, and define $\lambda_0=1-s-t$, $\lambda_1=s$, $\lambda_2=t$. These affine functions take the Kronecker values at the three vertices. Define $\phi_i|_K=\lambda_j$ if $a_i=b_j$, and $\phi_i|_K=0$ if $a_i$ is not a vertex of $K$. This finite cellwise construction gives a piecewise-affine scalar function with value $1$ at $a_i$ and $0$ at every other mesh vertex. [F1, given, construct, algebra]

2.1 On any common facet, the two affine restrictions of $\phi_i$ agree at every facet vertex: the value is $1$ exactly at $a_i$ if that vertex lies on the facet, and is $0$ at the other vertices. Affine functions on an edge are determined by their two endpoint values, so the restrictions agree on every common edge; at a shared vertex they both have the same prescribed nodal value. Thus $\phi_i$ is globally continuous and belongs to the conforming piecewise-affine space [F4]. By [F5], $\phi_i\in H^1(\Omega)$. [A2, F1, F4, F5, step 1.1, algebra]

3.1 No contact vertex lies on $\Gamma_D$ by [F6]. Since $\Gamma_D$ is a union of boundary edges, $\phi_i$ vanishes at both endpoints of each such edge and, being affine on the edge, vanishes on the entire segment. The vector field $w_i:=\phi_i n$ is continuous and belongs to $H^1(\Omega;\mathbb R^2)$ because $\phi_i\in H^1(\Omega)$ by step 2.1. Its ordinary boundary restriction vanishes on $\Gamma_D$, so the vector-valued trace agreement in [F3] gives $T_Dw_i=0$; hence $w_i\in V_h$ by [F2]. At each contact vertex, $B_j(w_i)=\phi_i(a_j)(n\cdot n)=\delta_{ij}$ by [F6]. For any $y=(y_0,\ldots,y_N)\in\mathbb R^{N+1}$, the finite sum $w=\sum_i y_iw_i$ lies in $V_h$ and satisfies $B_j(w)=y_j$ for every $j$. Hence $B$ is onto. [A1, F2, F3, F6, step 1.1, step 2.1, construct, algebra] ∎
