---
id: lem-signorini-nodal-contact-set-conforming
kind: lemma
title: "The convex-obstacle nodal set is conforming"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  [
    def-signorini-nodal-p1-contact-scheme,
    def-signorini-contact-variational-inequality,
    lem-signorini-contact-set-closed-convex-nonempty,
    def-matching-affine-simplicial-meshes,
    def-broken-and-conforming-polynomial-spaces,
    def-signorini-partial-trace-space,
    thm-lp-trace-operator-on-a-bounded-c-one-domain,
    def-convex-concave-and-midpoint-convex-functions
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Falk, Error Estimates for the Approximation of a Class of
        Variational Inequalities, complete 10-page paper"
      url: "https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf"
      locator: "§3, Lemma 3, printed pp. 969–970: vertex interpolation preserves
        obstacle feasibility and gives an admissible comparison."
    - title: "John Andersson, The Obstacle Problem, complete 52-page KTH lecture
        notes"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacl\
        e_Problem.pdf"
      locator: "Chapter 3 §3.1, printed pp. 26–28: continuous obstacle feasible sets
        and their minimizers."
verification:
  precheck: pass
---

## Statement

Under [[def-signorini-nodal-p1-contact-scheme]], $K_h$ is a nonempty closed convex subset of the finite-dimensional space $V_h$ and $K_h\subseteq K$. If $v\in K\cap H^2(\Omega;\mathbb R^2)\cap C(\overline\Omega;\mathbb R^2)$, its global P1 nodal interpolant $I_hv$ is well defined, belongs to $V_h$, and lies in $K_h$.

## Facts & Assumptions

**Given:** A boundary-conforming matching triangular mesh, the continuous P1 space $V_h$, a continuous convex obstacle $\psi\le0$ on the straight segment $\Gamma_C$, and the nodal set $K_h$ of [[def-signorini-nodal-p1-contact-scheme]].

[F1] The contact set is $K=\{v\in V:T_Cv\cdot n\ge\psi\text{ a.e. on }\Gamma_C\}$ and contains zero when $\psi\le0$. ([[def-signorini-contact-variational-inequality]], [[lem-signorini-contact-set-closed-convex-nonempty]])

[F2] A matching mesh has nondegenerate triangles with shared facets equal to whole facets, and conforming P1 traces are affine on each facet. ([[def-matching-affine-simplicial-meshes]], [[def-broken-and-conforming-polynomial-spaces]])

[F3] $I_h\psi$ is the affine interpolant of the endpoint values on each contact edge, and $K_h$ imposes $v_h(a)\cdot n\ge I_h\psi(a)$ at every contact vertex. ([[def-signorini-nodal-p1-contact-scheme]])

[F4] If an $H^1$ function has a representative extending continuously to each closed collar, $T_D$ and $T_C$ agree with its boundary restriction to the corresponding segments. In particular, this holds for $H^1\cap C(\overline\Omega)$ functions. ([[def-signorini-partial-trace-space]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]])

[F5] Convexity on an interval means $\psi((1-t)a+tb)\le(1-t)\psi(a)+t\psi(b)$ for every $a,b$ in the interval and $t\in[0,1]$. ([[def-convex-concave-and-midpoint-convex-functions]])

## Proof

**Proof technique:** direct.

**Given:** The hypotheses above, with $V_h$ the matching continuous piecewise-affine vector space.

1.1 The set $V_h$ is finite dimensional. By [F3], $K_h$ is the intersection of finitely many closed affine halfspaces in $V_h$, so it is closed and convex. The zero field is in $V_h$, and $0\ge I_h\psi(a)=\psi(a)$ at every contact vertex since $\psi\le0$; hence $0\in K_h$ and $K_h$ is nonempty. [F2, F3, given, algebra]

1.2 Fix a contact edge $e=[a,b]$. For $v_h\in K_h$, the function $q_h:=v_h\cdot n-I_h\psi$ is affine on $e$ and is nonnegative at $a,b$ by [F3]. Thus $q_h((1-t)a+tb)=(1-t)q_h(a)+tq_h(b)\ge0$ throughout $e$. Convexity [F5] gives $I_h\psi((1-t)a+tb)\ge\psi((1-t)a+tb)$, so $v_h\cdot n\ge\psi$ on every contact edge. Since $v_h\in C(\overline\Omega)$, [F4] identifies its contact trace with this restriction. Therefore $v_h\in K$ and $K_h\subseteq K$. [F1, F2, F3, F4, F5, given, algebra]

2.1 Let $v\in K\cap H^2\cap C(\overline\Omega)$. Its continuous gap $T_Cv\cdot n-\psi$ is nonnegative almost everywhere by [F1], hence everywhere: if it were negative at one point, continuity would make it negative on a subsegment of positive length. Define $I_hv$ cell by cell as the affine polynomial matching $v$ at the three vertices. On a shared edge the two affine traces agree at both endpoints, so they agree along the whole edge. For every test function compactly supported in $\Omega$, integration by parts on each triangle cancels the internal-edge boundary terms because these traces agree; the remaining piecewise constant gradients are in $L^2(\Omega)$. Hence $I_hv\in H^1(\Omega;\mathbb R^2)$ and is globally continuous. Its boundary values on $\Gamma_D$ are zero: $v\in V$ means $T_Dv=0$ almost everywhere, and [F4] identifies this trace with the continuous boundary restriction, which therefore vanishes everywhere on the segment. Since the mesh resolves $\Gamma_D$, the affine boundary traces of $I_hv$ vanish there, so $I_hv\in V_h$. At every contact node, $I_hv(a)=v(a)$ and [F4] identifies the contact trace with the continuous restriction; the continuous gap is nonnegative, so the nodal constraints hold and $I_hv\in K_h$. [F1, F2, F3, F4, given, construct, algebra] ∎
