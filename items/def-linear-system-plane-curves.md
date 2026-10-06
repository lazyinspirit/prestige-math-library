---
id: def-linear-system-plane-curves
kind: definition
title: Linear systems of plane curves and their base loci
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraically-closed-field, def-binomial-coefficient, def-degree-projective-hypersurface, def-dimension, def-homogeneous-polynomial-and-homogeneous-ideal, def-linear-subspace, def-monomials-multidegree-and-total-degree, def-projective-algebraic-set, def-projective-space-points, def-vector-space, thm-projective-zariski-topology]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Definition

Work over an algebraically closed field $k$ and fix $d\ge1$. The space $k[x_0,x_1,x_2]_d$ of homogeneous degree-$d$ forms has as a basis the monomials $x_0^ix_1^jx_2^{d-i-j}$ with $i,j\ge0$, $i+j\le d$ [[def-homogeneous-polynomial-and-homogeneous-ideal]], [[def-monomials-multidegree-and-total-degree]]. The bijection $(i,j)\mapsto\{i,i+j+1\}\subseteq\{0,\ldots,d+1\}$ shows that its dimension is $\binom{d+2}{2}$ [[def-binomial-coefficient]], [[def-dimension]].

A **linear system of plane curves of degree $d$** is a linear subspace $W\subseteq k[x_0,x_1,x_2]_d$ [[def-linear-subspace]], [[def-vector-space]]. Its elements are the nonzero forms modulo nonzero scalar multiplication, each equipped with its projective zero set:

$$ [F]\longmapsto V_+((F))\subseteq\mathbf P^2_k,\qquad 0\ne F\in W. $$

Here $[F]$ denotes its scalar-equivalence class; scaling does not change its zero set [[def-projective-space-points]], [[def-projective-algebraic-set]]. The **dimension** of the system is $\dim_kW-1$. The zero subspace is allowed as the empty system, assigned dimension $-1$ by convention. A **pencil** has dimension one, equivalently $\dim_kW=2$.

The **base locus** is

$$ \operatorname{Bs}W=\bigcap_{0\ne F\in W}V(F). $$

It is closed as an intersection of projective closed sets [[thm-projective-zariski-topology]]; the empty system has base locus all of $\mathbf P^2_k$. For a finite set $S\subseteq\mathbf P^2_k$, the **subsystem through $S$** is

$$ W(-S)=\{F\in W:F(q)=0\text{ for every }q\in S\}. $$

The condition is independent of the chosen nonzero representatives of $q$, since $F(\lambda q)=\lambda^dF(q)$, and is linear in $F$, so $W(-S)$ is a subspace. For the full space $W=k[x_0,x_1,x_2]_d$, the dimension is $\binom{d+2}{2}-1$ and the base locus is empty: at any projective point some $x_i\ne0$, so $x_i^d$ does not vanish there. For $d=1$, a subsystem through three noncollinear points is empty, since the zero set of any nonzero linear form is a line and cannot contain all three.

## Remarks

- This definition retains multiplicities in degree-$d$ equations. A square-free member has reduced degree $d$ in the plane-curve convention [[def-degree-projective-hypersurface]]. A nonsquarefree form defines the same zero set as its square-free part, whose reduced degree may be smaller. For example $W=\langle x_0^2\rangle$ is a degree-two equation system supported on a reduced line of degree one.
- All constructions use explicit finite-dimensional linear algebra and scalar equivalence; no choice principle is used.
