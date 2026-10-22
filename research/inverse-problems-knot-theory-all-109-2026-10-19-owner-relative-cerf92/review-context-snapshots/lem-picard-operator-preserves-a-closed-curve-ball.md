---
id: lem-picard-operator-preserves-a-closed-curve-ball
kind: lemma
title: "A bounded vector field makes the Picard operator preserve a sufficiently short closed curve ball"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-picard-operator-and-picard-iterates, thm-norm-inequality-for-the-vector-valued-integral, lem-continuity-is-local-and-pastes, cor-primitives-of-a-continuous-function, thm-componentwise-limits-and-continuity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $C=[t_0-h,t_0+h]\times\overline B(x_0,r)$ be contained in the domain of a continuous vector field $F$, with $h\ge0$ and $r>0$. If $\|F(t,x)\|_2\le M$ on $C$ and $hM\le r$, then the Picard operator maps the closed curve ball $\mathcal B_r$ into itself.

## Facts & Assumptions

**Given:** The cylinder, bound, and Picard operator in the Statement.

[L1] For $u\le v$, the norm of a vector integral is at most the integral of the Euclidean norm; for reversed limits the oriented convention gives the same estimate with absolute value on the scalar integral ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L2] Composites of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]]).

[L3] The integral function of a continuous real function on a nondegenerate interval is differentiable and hence continuous; a vector-valued map is continuous exactly when its coordinate maps are continuous ([[cor-primitives-of-a-continuous-function]], [[thm-componentwise-limits-and-continuity]]).

## Proof

**Proof technique:** direct.

1.1 If $h=0$, the domain is the singleton $\{t_0\}$, so $\mathcal Tx$ is automatically continuous and its displacement is zero. Assume $h>0$. For $x\in\mathcal B_r$, [L2] makes $t\mapsto F(t,x(t))$ continuous, and [L3] applied componentwise makes $\mathcal Tx$ continuous. The given bound and [L1], applied on the interval between $t_0$ and $t$, then give $\|(\mathcal Tx)(t)-x_0\|_2\le M|t-t_0|$ for every $t$, also when $M=0$. [given, L1, L2, L3]

2.1 Since $|t-t_0|\le h$ and $Mh\le r$, step 1.1 gives $\sup_t\|(\mathcal Tx)(t)-x_0\|_2\le r$, so $\mathcal Tx\in\mathcal B_r$. [step 1.1, algebra] ∎
