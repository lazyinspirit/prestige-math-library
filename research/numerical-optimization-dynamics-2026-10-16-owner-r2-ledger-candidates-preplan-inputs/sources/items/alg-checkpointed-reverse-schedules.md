---
id: alg-checkpointed-reverse-schedules
kind: algorithm
title: "Uniform-block and binomial checkpoint schedules for reverse sweeps"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, alg-reverse-mode-automatic-differentiation]
justified_by: []
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "A. Griewank, Achieving Logarithmic Growth of Temporal and Spatial Complexity in Reverse Automatic Differentiation, §§3–6 and Theorem 6.1"
      url: "https://web.archive.org/web/20210506204927/http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.455.4143&rep=rep1&type=pdf"
dependency_level: 2
---

## Definition

The input is a finite sequence of deterministic $C^1$ transitions $F_1,\ldots,F_T$ between open subsets of finite-dimensional Euclidean spaces, with starting state $x_0$. Every transition is evaluated on one fixed strict branch and has its exact local reverse rule. The last transition has scalar output and may be the terminal objective, so its scalar cotangent is $1$. A transition tape stores the local values needed by its exact reverse rule. A deterministic replay applies the same transition maps, in the same order, to the identical checkpoint state and therefore reproduces the same values and local derivative inputs. The procedure returns the terminal output and cotangent at $x_0$; an invalid domain evaluation returns DOMAIN_ERROR, and a branch boundary returns NONDIFFERENTIABLE. A checkpoint schedule is permitted only when its saved states and all deterministic replays lie in these declared domains.

**Uniform-block mode.** For $T=0$, return $x_0$ and the supplied cotangent without work. For $T\ge1$, require an integer slot budget $m\ge1$, set $q=\lceil T/m\rceil$, and during one forward pass save $x_{jq}$ for $j=0,\ldots,\lceil T/q\rceil-1$ (all indices are below $T$). This uses at most $m$ saved states. Partition the steps into blocks $[a,b]$ with $a=jq$ and $b=\min(a+q,T)$. Process the blocks from last to first. Within one block, for $\ell=b,b-1,\ldots,a+1$, restore $x_a$, replay $F_{a+1},\ldots,F_{\ell-1}$ without recording, evaluate $F_\ell$ once while recording its local tape, apply its reverse rule to the current cotangent, and discard the one-step tape and replay workspace. Retain only the checkpoint states, the live state/cotangent, and the ordinary one-step reverse tape. Do not infer any optimality property of this schedule.

**Binomial mode.** Define $C(d,0)=C(0,t)=1$, and $C(d,t)=C(d-1,t)+C(d,t-1)$ for integers $d,t\ge1$. The recursive procedure REVERSE$(a,N,d,t,x_a,\bar x_{a+N})$ requires $0\le N\le C(d,t)$ and a known starting state $x_a$. If $N=0$, return the unchanged cotangent. If $N=1$, evaluate and record the unique transition, apply its local reverse rule, and return its output and input cotangents. If $N\ge2$, then $d,t\ge1$. Put $L=\min(N-1,C(d,t-1))$, $R=N-L$; replay the first $L$ transitions from $x_a$ without recording and save the resulting midpoint state $x_{a+L}$. Call REVERSE$(a+L,R,d-1,t,x_{a+L},\bar x_{a+N})$ on the right block. Release the midpoint checkpoint, restore the caller's supplied $x_a$, and call REVERSE$(a,L,d,t-1,x_a,\bar x_{a+L})$ on the left block, where $\bar x_{a+L}$ is the cotangent returned by the right call. Return the right call's terminal value and the left call's cotangent at $x_a$. The top-level call uses $a=0,N=T$, with the specified terminal cotangent. A recursive call with $N>1$ and $d=0$ or $t=0$ is a schedule failure; the capacity condition makes that branch unreachable.

The parameter $d$ bounds the number of simultaneously saved state snapshots. The parameter $t$ bounds, for each transition, the number of additional unrecorded forward evaluations beyond its one recorded evaluation. Both are finite integer inputs. This mode gives a binomial capacity bound; it does not promise a numerical error estimate or an optimal schedule for arbitrary nonuniform primitive costs. For the storage count in the paired theorem, $R_s$ bounds scalar storage for one full primal state. The binomial recursion may reuse one mutable cotangent workspace: each call consumes its terminal cotangent and returns the cotangent at its start, reusing the same buffer through both children. Let $G$ bound the largest one-step tape and local reverse scratch, the constant number of live cotangent/work vectors, and the scalar call-frame records; it excludes the $d$ saved primal states and one live primal state.
