---
id: def-cg-standard-affine-diagrams
kind: definition
title: "The standard affine diagrams A-tilde, B-tilde, C-tilde, D-tilde, E-tilde, F-tilde and G-tilde"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [def-cg-coxeter-diagram-components-and-finite-type, def-graph-adjacency-incidence-neighbourhood-and-degree, def-graph-isomorphism-and-complement, def-connected-graph-and-connected-component, def-graph-walk-trail-path-and-cycle, thm-cg-finite-coxeter-classification-including-h-and-dihedral]
justified_by: [lem-cg-affine-type-crystallographic-alcove-diagrams, thm-cg-affine-gram-classification-and-euclidean-realization]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, Princeton University Press, 2008; 600 PDF pages)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Section 6.9, Table 6.1 (right-hand column: the irreducible Euclidean diagrams $\\tilde A_1$ with label $\\omega$, $\\tilde A_n$, $\\tilde B_n$, $\\tilde C_n$, $\\tilde D_n$, $\\tilde E_6,\\tilde E_7,\\tilde E_8$, $\\tilde F_4$, $\\tilde G_2$ and the separate row $\\tilde B_2$), printed p. 104, read together with the textual descriptions in Appendix B (the only infinite straight-line Euclidean family is $\\tilde C_n$, with $\\tilde G_2$ and $\\tilde F_4$ as the two exceptional straight-line cases) and Appendix C.3 (the arm enumerations for the $\\tilde E$ diagrams)"
    - title: "R. Xiong, Lectures on Affine Weyl Groups (complete lecture notes, October 2024; 77 PDF pages)"
      url: "https://cubicbear.github.io/doc/affineNotes.pdf"
      locator: "Chapter 2, Section 2.12 (list of untwisted affine Dynkin diagrams), PDF pp. 14-15"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

With the Coxeter-diagram conventions of [[def-cg-coxeter-diagram-components-and-finite-type]] (a finite simple graph with edge labels in $\{3,4,5,\dots\}\cup\{\infty\}$, label $3$ omitted), the **standard affine diagrams** are the following labelled graphs. Within each clause, distinct vertex symbols denote distinct vertices; pairs not listed as edges are nonedges and have Coxeter label $2$.

**(1) The A family.** $\tilde A_1$ is the graph with two vertices joined by one edge labelled $\infty$. For $n\ge2$, $\tilde A_n$ is the cycle $v_0,v_1,\dots,v_n$ on $n+1$ vertices, with edges $\{v_i,v_{i+1}\}$ for $0\le i<n$ and $\{v_n,v_0\}$, all labelled $3$ ([[def-graph-walk-trail-path-and-cycle]]). Thus the family "$\tilde A_n$, $n\ge1$" is $\tilde A_1$ for $n=1$ and the $(n+1)$-cycle for $n\ge2$.

**(2) The B family.** For $n\ge3$, $\tilde B_n$ has vertices $v_0,v_1,\dots,v_n$ and edges $\{v_0,v_2\}$ and $\{v_1,v_2\}$ with label $3$, together with the path edges $\{v_i,v_{i+1}\}$ for $2\le i\le n-1$, where $\{v_{n-1},v_n\}$ carries the label $4$ and every other edge the label $3$. Thus $\tilde B_n$ is the path $v_1-\dots-v_n$ with the $B_n$ labels $3,\dots,3,4$, with one extra vertex $v_0$ attached to $v_2$ by a $3$-edge. (The recipe is stated for $n\ge3$; for $n=2$ the family is defined by the convention $\tilde B_2:=\tilde C_2$ of (7), the three-vertex path with both edges labelled $4$.)

**(3) The C family.** For $n\ge2$, $\tilde C_n$ is the path on $n+1$ vertices $v_0-v_1-\dots-v_n$ with label $4$ on the two end edges $\{v_0,v_1\}$ and $\{v_{n-1},v_n\}$ and label $3$ on all other edges.

**(4) The D family.** $\tilde D_4$ is the star with one centre and four leaves (four arms of length $1$), all labels $3$. For $n\ge5$, $\tilde D_n$ has two branch vertices $a,b$ joined by a chain $a=w_0,w_1,\dots,w_{n-4}=b$ with exactly $n-4$ edges, with two leaves attached to $a$ and two leaves attached to $b$; all labels $3$. (The chain has $n-3$ vertices, so the total number of vertices is $(n-3)+4=n+1$.)

**(5) The E family.** A **star with arms** $(p,q,r)$ is a tree with one vertex of degree $3$ and three paths (arms) of $p$, $q$, $r$ edges from it ([[def-graph-adjacency-incidence-neighbourhood-and-degree]], [[def-connected-graph-and-connected-component]]). Then $\tilde E_6$ is the star with arms $(2,2,2)$ (seven vertices), $\tilde E_7$ the star with arms $(1,3,3)$ (eight vertices), and $\tilde E_8$ the star with arms $(1,2,5)$ (nine vertices); all labels are $3$.

**(6) The F and G families.** $\tilde F_4$ is the path on five vertices with labels $(3,3,4,3)$; $\tilde G_2$ is the path on three vertices with labels $(3,6)$.

**(7) Coincidences.** The convention $\tilde B_2:=\tilde C_2$ gives the three-vertex path with both edges labelled $4$. The finite diagrams $B_2$, $C_2$ and $I_2(4)$ are each the two-vertex graph with one edge labelled $4$; their coincidence as finite Coxeter systems is [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (4). With the naming conventions $\tilde C_1:=\tilde A_1$, $D_3:=A_3$ (the finite coincidence $A_3=D_3$ of (4) of that theorem), $E_4:=A_4$ and $E_5:=D_5$, one has $\tilde D_3=\tilde A_3$, $\tilde E_4=\tilde A_4$ and $\tilde E_5=\tilde D_5$. Apart from these identifications the diagrams (1)-(6) are pairwise non-isomorphic as labelled graphs ([[def-graph-isomorphism-and-complement]]); the verification is clause (7) of [[lem-cg-affine-type-crystallographic-alcove-diagrams]]. $\tilde A_1$ is the only diagram of the list with a label $\infty$, and every other label in the list lies in $\{3,4,6\}$.

## Remarks

Each recipe gives a finite labelled simple graph. The bounds $n\ge3$ in the $\tilde B_n$ recipe and $n\ge2$ in the $\tilde C_n$ recipe make the terminal $4$-edge distinct from the branch edges and make the two $\tilde C_n$ end edges distinct, respectively. The low-rank aliases in (7) complete the family naming. Every vertex and edge is explicitly specified, so no choice principle is used.

## Remarks

The list is presented once, here, so that every later item, the classification theorem and the companion examples page use the same names and the same low-rank conventions. The identifications of (7) are conventions about *which family member* a diagram belongs to; they are not claims that the corresponding Coxeter *systems* are isomorphic as abstract Coxeter groups, and no such claim is used on this page.
