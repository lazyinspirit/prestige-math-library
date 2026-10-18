---
id: lem-signorini-partial-trace-space-bounded
kind: lemma
title: "The partial-trace displacement space is a Hilbert space"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  [
    def-signorini-partial-trace-space,
    thm-lp-trace-operator-on-a-bounded-c-one-domain,
    def-sobolev-extension-domain-and-extension-operator,
    def-sobolev-space-wkp-and-its-norm,
    thm-sobolev-spaces-are-banach-spaces,
    thm-complete-subspace-iff-closed,
    def-axiom-of-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part XI Chapter 53: Stokes
        equations: Basic ideas"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf"
      locator: "§53.2.1, printed pp. 393–394: the trace space with a positive-measure
        Dirichlet portion."
    - title: "Walter Zulehner, Numerical Methods for Continuum Mechanics 1, complete
        80-page lecture notes"
      url: "https://www.numa.uni-linz.ac.at/Teaching/Lectures/numkont1_en.pdf"
      locator: "Chapter 2 §2.1, printed pp. 20–25: partial Dirichlet displacement
        spaces and trace conditions."
verification:
  precheck: pass
---

## Statement

Assume the geometry and trace conventions of [[def-signorini-partial-trace-space]]. Then the maps $T_D,T_C:H^1(Ω;\mathbb R^2)\to L^2(Γ_D;\mathbb R^2),L^2(Γ_C;\mathbb R^2)$ are bounded and linear, and $V=\ker T_D$ is a Hilbert space with the inherited $H^1$ inner product.

## Facts & Assumptions

**Given:** The bounded connected polygon, its fixed bounded $C^1$ collars $U_D,U_C$, and the trace maps defined in [[def-signorini-partial-trace-space]].

[A1] The Axiom of Choice is assumed by the bounded C1 trace theorem and its smooth-density interface. ([[def-axiom-of-choice]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]])

[F1] On a bounded $C^1$ domain $U$, $T_U:H^1(U;\mathbb R^2)\to L^2(\partial U;\mathbb R^2)$ is bounded and linear, agrees with boundary restriction for Sobolev functions having a representative continuous on $\overline U$, and satisfies $\|T_Uw\|_{L^2(\partial U)}\le C_U\|w\|_{H^1(U)}$. ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]])

[F2] Restriction from $H^1(\Omega)$ to $H^1(U_j)$ is well defined and does not increase the $H^1$ norm when $U_j\subset\Omega$. ([[def-sobolev-extension-domain-and-extension-operator]], [[def-sobolev-space-wkp-and-its-norm]])

[F3] $H^1(\Omega;\mathbb R^2)$ is complete, and a closed subspace of a complete inner-product space is complete. ([[thm-sobolev-spaces-are-banach-spaces]], [[thm-complete-subspace-iff-closed]])

## Proof

**Proof technique:** direct.

**Given:** The fixed collars and the trace maps $T_D,T_C$ on the bounded connected polygon $\Omega$.

1.1 For $j\in\{D,C\}$, restriction [F2] followed by the bounded trace map [F1] and restriction from $\partial U_j$ to its segment $\Gamma_j$ gives $\|T_jv\|_{L^2(\Gamma_j)}\le C_j\|v|_{U_j}\|_{H^1(U_j)}\le C_j\|v\|_{H^1(\Omega)}$ for every $v\in H^1(\Omega;\mathbb R^2)$. Both maps are compositions of linear maps, so they are bounded and linear. [A1, F1, F2, given]

2.1 The space $V$ is the kernel of the bounded linear map $T_D$, hence is closed in $H^1(\Omega;\mathbb R^2)$; by [F3] the inherited inner product is complete on $V$, so $V$ is Hilbert. [F1, F3, step 1.1] ∎
