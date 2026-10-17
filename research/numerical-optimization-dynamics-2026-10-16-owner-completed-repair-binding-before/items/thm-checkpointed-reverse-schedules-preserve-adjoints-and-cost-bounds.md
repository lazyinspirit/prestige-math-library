---
id: thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds
kind: theorem
title: "Uniform-block and binomial checkpoint schedules preserve reverse adjoints with stated costs"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, alg-checkpointed-reverse-schedules, alg-reverse-mode-automatic-differentiation, thm-reverse-mode-computes-gradient]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Griewank, Achieving Logarithmic Growth of Temporal and Spatial Complexity in Reverse Automatic Differentiation, §§4–6 and Theorem 6.1"
      url: "https://web.archive.org/web/20210506204927/http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.455.4143&rep=rep1&type=pdf"
---

## Statement

For the finite-dimensional $C^1$ transition sequences on a fixed strict branch defined in [[alg-checkpointed-reverse-schedules]], provided every schedule replay remains in the declared domains, both schedules return the same terminal value and initial-state cotangent as an uncheckpointed reverse sweep. In uniform-block mode, if $T,m\ge1$, $q=\lceil T/m\rceil$, and the block lengths are $r_1,\ldots,r_s$, the number of additional unrecorded forward evaluations is exactly $\sum_{\ell=1}^s r_\ell(r_\ell-1)/2$, at most $m q(q-1)/2$. At most $m$ checkpoint states are saved, with one live replay state and one local step tape. In binomial mode, $C(d,t)=\binom{d+t}{d}$; any $T\le C(d,t)$ steps can be reversed with at most $d$ saved snapshots, one recorded forward evaluation and one reverse evaluation per step, at most $t$ additional unrecorded forward evaluations per step, total work at most $\widehat W+\overline W+tW$, and storage $G+(d+1)R_s$. Here $W$ is the total cost of one unrecorded full forward pass, $\widehat W$ the sum of recorded one-step forward costs, $\overline W$ the sum of local reverse costs, $R_s$ bounds scalar storage for one primal state, and $G$ bounds the largest one-step tape and local reverse scratch, the constant number of live cotangent/work vectors, and scalar recursion-frame records, excluding saved states and one live primal state.

## Facts & Assumptions

**Given:** The deterministic transitions, exact local reverse rules, and either schedule mode with its stated finite integer parameters.

[F1] [[alg-checkpointed-reverse-schedules]]: uniform mode restores a saved block start and replays to each step; binomial mode splits a block into a left and right interval and reverses the right interval before the left.

[F2] [[thm-reverse-mode-computes-gradient]]: applying each exact local reverse rule once in reverse transition order gives the derivative of the composed real-arithmetic map.

[F3] [[def-finite-straight-line-computational-program]]: replay is deterministic and a graph node's local reverse rule uses the primitive inputs on its tape.

## Proof

**Proof technique:** induction on replayed transitions and schedule capacity.

1.1 In uniform mode, for any block start $x_a$, deterministic replay reproduces the original $x_{a+1},\ldots,x_b$: the first replayed transition starts from the identical $x_a$, and induction applies each same map $F_j$ to the same preceding state. Thus the recorded local tape at step $\ell$ has the same primitive inputs as the original forward trajectory, so its reverse rule is the same one used by the full tape. Processing blocks and then their steps in decreasing order is exactly reverse transition order; [F2] gives the same terminal and initial cotangents. [F1, F2, F3, given, construct]

1.2 A block of length $r$ has replay prefix lengths $r-1,r-2,\ldots,0$ before its $r$ recorded local evaluations. Therefore its additional unrecorded evaluations total $\sum_{j=0}^{r-1}j=r(r-1)/2$. The number of blocks is $s=\lceil T/q\rceil\le m$, each $r_\ell\le q$, so the sum is at most $m q(q-1)/2$. The checkpoint indices are $0,q,\ldots,(s-1)q<T$; $T/q\le m$, so $s=\lceil T/q\rceil\le m$. Only those states, one live state, and one local tape are retained. [F1, given, algebra]

1.3 In binomial mode the recurrence and boundary values give $C(d,t)=\binom{d+t}{d}$: the binomial coefficients have the same boundary values and Pascal recurrence, so induction on $d+t$ identifies them. For $d,t\ge1$, write $A=C(d,t-1)$, $B=C(d-1,t)$, so $C(d,t)=A+B$. If $N\ge2$, $L=\min(N-1,A)$ satisfies $1\le L<N$; if $L=N-1$, then $R=1\le B$, and otherwise $L=A$ and $R=N-A\le B$. Thus both recursive capacities hold and both child lengths are strictly less than $N$; the recursion terminates at $N=1$ or $N=0$. [F1, given, algebra]

2.1 Induct on $N$. The base calls $N=0,1$ do no transition or apply one recorded transition's reverse rule. For $N\ge2$, the midpoint replay produces the exact $x_{a+L}$ by [F3]. The right child returns the exact cotangent at that midpoint by induction. The left child then applies the remaining earlier transitions to that cotangent, so the chain rule gives the exact cotangent at $x_a$. Every interval is split into disjoint left and right steps and each base step is recorded and reversed once. Therefore the terminal value and initial cotangent agree with the ordinary reverse sweep. [F1, F2, F3, step 1.3, construct]

3.1 During a right child, the saved midpoint occupies one slot and its child uses at most $d-1$ further snapshots; after that child returns, the midpoint is released and the left child uses at most $d$. Thus peak snapshot count is at most $d$. A step in a right child has at most $t$ replays by induction. A step in the left child is replayed once at the current split and then has at most $t-1$ replays in the left child, hence at most $t$ total. Each step also has one recorded forward and one reverse call, giving work $\widehat W+\overline W+tW$. Each recursive child decreases $d+t$ by one, so at most $d+t+1$ call frames are active; each frame stores a fixed number of scalar indices and flags. The algorithm reuses its cotangent buffer and has only the bounded one-step tape and local scratch included in $G$. The saved states and one live primal state use at most $(d+1)R_s$ scalar entries, giving storage at most $G+(d+1)R_s$. [F1, step 1.3, step 2.1, algebra] ∎
