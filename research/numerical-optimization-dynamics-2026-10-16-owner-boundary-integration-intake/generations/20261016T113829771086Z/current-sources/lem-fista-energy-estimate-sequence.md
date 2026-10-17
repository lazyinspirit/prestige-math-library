---
id: lem-fista-energy-estimate-sequence
kind: lemma
title: "FISTA energy estimate-sequence recurrence"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-proximal-gradient-and-fista
  - lem-proximal-gradient-one-step-estimate
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Amir Beck and Marc Teboulle, A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems, Lemma 4.1"
      url: "https://www.tau.ac.il/~becka/FISTA.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.3"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Statement

Let $F=f+g$ satisfy the exact FISTA hypotheses of [[alg-proximal-gradient-and-fista]], and suppose $x_*$ minimizes $F$. Use its iterates $x_k,y_k,t_k$ and set $t_0=0$, $u_0=x_0-x_*$, and
$$u_k=t_kx_k-(t_k-1)x_{k-1}-x_*\qquad(k\ge1).$$
Then for every $k\ge1$,
$$\frac{2t_k^2}{L}\bigl(F(x_k)-F(x_*)\bigr)+\|u_k\|_2^2\le\frac{2t_{k-1}^2}{L}\bigl(F(x_{k-1})-F(x_*)\bigr)+\|u_{k-1}\|_2^2,$$
where the $k=1$ right-hand objective term is interpreted as zero.

## Facts & Assumptions

**Given:** The exact FISTA recurrence, composite objective and minimizer in the Statement.

[F1] [[alg-proximal-gradient-and-fista]]: $t_1=1$, $y_1=x_0$, $x_k=T_L(y_k)$, $t_{k+1}=(1+\sqrt{1+4t_k^2})/2$, the consequent identity $t_{k+1}(t_{k+1}-1)=t_k^2$, and $y_k=x_{k-1}+((t_{k-1}-1)/t_k)(x_{k-1}-x_{k-2})$ for $k\ge2$.

[F2] [[lem-proximal-gradient-one-step-estimate]]: $F(z)\ge F(T_L(y))+(L/2)\|T_L(y)-y\|_2^2+L\langle y-z,T_L(y)-y\rangle$ for every $z$.

## Proof

1.1 The recurrence [F1] gives $t_k\ge1$ for every $k$: it starts at $1$ and $t_{k+1}\ge t_k+1/2$. Thus $z_k=(1-1/t_k)x_{k-1}+(1/t_k)x_*$ is a convex combination (and $z_1=x_*$). The same recurrence gives $t_k(y_k-z_k)=u_{k-1}$, where at $k=1$ this reads $y_1-x_*=u_0$. Also $u_k=t_k(x_k-z_k)=u_{k-1}+t_k(x_k-y_k)$. [F1, given, induction, algebra]

2.1 For $k\ge2$, convexity gives $F(z_k)\le(1-1/t_k)F(x_{k-1})+(1/t_k)F(x_*)$. Apply [F2] with $y=y_k$, $z=z_k$, and $x_k=T_L(y_k)$. The upper bound for $F(z_k)-F(x_k)$ and its lower bound from [F2], multiplied by $2t_k^2/L$, imply $$\frac{2t_k^2}{L}(F(x_k)-F(x_*))\le\frac{2t_k(t_k-1)}{L}(F(x_{k-1})-F(x_*))-t_k^2\|x_k-y_k\|_2^2-2t_k^2\langle y_k-z_k,x_k-y_k\rangle.$$ Using [F1] to replace $t_k(t_k-1)$ by $t_{k-1}^2$, and the two vector identities of step 1.1 to replace the last two terms by $\|u_{k-1}\|_2^2-\|u_k\|_2^2$, gives the claimed recurrence for $k\ge2$. At $k=1$, $z_1=x_*$ and [F2] directly gives $F(x_1)-F(x_*)\le(L/2)(\|x_0-x_*\|_2^2-\|x_1-x_*\|_2^2)$; since $t_1=1$ and $u_1=x_1-x_*$, this is the claimed base case without using $F(x_0)$. [F1, F2, step 1.1, given, algebra] ∎
