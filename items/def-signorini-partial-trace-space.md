---
id: def-signorini-partial-trace-space
kind: definition
title: "Partial-trace displacement space on a polygon"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [thm-lp-trace-operator-on-a-bounded-c-one-domain, def-sobolev-extension-domain-and-extension-operator, def-sobolev-space-wkp-and-its-norm, def-bounded-c-k-domain-and-boundary-charts]
justified_by: [lem-signorini-partial-trace-space-bounded]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part XI Chapter 53: Stokes equations: Basic ideas"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf"
      locator: "§§53.1–53.2.1, printed pp. 391–394: the symmetric-gradient stress form, componentwise trace space, and positive-measure Dirichlet velocity boundary."
    - title: "Walter Zulehner, Numerical Methods for Continuum Mechanics 1, complete 80-page lecture notes"
      url: "https://www.numa.uni-linz.ac.at/Teaching/Lectures/numkont1_en.pdf"
      locator: "Chapter 2 §2.1, printed pp. 20–25: partial Dirichlet displacement spaces and mixed-boundary Korn coercivity."
---

## Definition

Assume the Axiom of Choice. A **bounded connected Lipschitz polygon** $Ω\subset\mathbb R^2$ is a bounded connected open set whose boundary is a simple closed polygonal curve and, near every boundary point after a rigid coordinate change, is the graph of a Lipschitz function with $Ω$ on one side. Assume $Ω$ is a $W^{1,2}$-extension domain in the sense of [[def-sobolev-extension-domain-and-extension-operator]]. Fix two disjoint closed straight segments $Γ_D,Γ_C\subset\partialΩ$, each of positive length and each lying strictly inside a straight side of $∂Ω$.

As part of the geometry data, fix bounded $C^1$ subdomains $U_D,U_C\subsetΩ$ (in the sense of [[def-bounded-c-k-domain-and-boundary-charts]]) whose boundaries have relatively open flat patches containing $Γ_D,Γ_C$, respectively. Such collars can be chosen as sufficiently thin stadium-shaped domains along slightly longer segments of the same polygon sides, with their rounded ends outside the prescribed segments. Let $T_D,T_C$ be the restrictions to these segments of the bounded trace operators on $U_D,U_C$ supplied by [[thm-lp-trace-operator-on-a-bounded-c-one-domain]], applied componentwise to the restrictions of functions in $H^1(Ω;\mathbb R^2)$. For $j\in\{D,C\}$, if $v\in H^1(Ω;\mathbb R^2)$ has a representative on $U_j$ extending continuously to $\overline{U_j}$, then $T_jv$ agrees in $L^2(Γ_j;\mathbb R^2)$ with that extension's restriction to $Γ_j$, by the trace theorem's agreement clause. In particular, this holds for $v\in H^1(Ω;\mathbb R^2)\cap C(\overlineΩ;\mathbb R^2)$.

Define
$$V:=\{v\in H^1(Ω;\mathbb R^2):T_Dv=0\text{ in }L^2(Γ_D;\mathbb R^2)\},\qquad \|v\|_V:=\|v\|_{H^1(Ω)}.$$
The contact normal $n\in\mathbb R^2$ is a fixed unit vector on $Γ_C$, oriented so that a positive value of $T_Cv\cdot n$ opens the contact gap. No pointwise value of a general $H^1$ class is used in this definition.

## Remarks

The trace maps use fixed collars so their meaning is independent of pointwise representatives. The polygon and segment hypotheses here are the geometric branch used by the contact items; the collars are part of the fixed data.
