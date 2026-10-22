---
id: ex-vanishing-angular-approximation-can-have-nonmanifold-fiber-closure
kind: example
title: Vanishing angular approximation can have nonmanifold fiber closure
status: draft
origin: session
deps: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

In the smooth local model $M=\mathbb R^2\times\mathbb C$, let $S=\mathbb R^2\times\{0\}$ and let $a(x,z)=z/|z|$ on $M\setminus S$. There is a smooth map $g:M\setminus S\to S^1$, homotopic to $a$, such that $|g(x,z)-a(x,z)|\to0$ uniformly as $|z|\to0$, the value $1$ is regular for $g$, and the closure of $g^{-1}(1)$ in $M$ is not locally connected at the origin. Thus even smooth approximation with angular error tending to zero and unchanged meridian degrees does not justify a locally flat fiber closure.

## Facts & Assumptions

**Given:** The stated smooth product model and its angular map $a$.

## Verification

1.1 For integers $n\ge4$, set $r_n=a_n=2^{-n}$, $c_n=(0,r_ne^{ia_n})\in\mathbb R^2\times\mathbb C$ and $\rho_n=r_na_n/100$. Let $B_n$ be the Euclidean ball of radius $\rho_n$ centered at $c_n$. The closures of these balls are pairwise disjoint, are disjoint from $S$ and from the positive real normal ray $\mathbb R^2\times\mathbb R_{>0}$, and accumulate only at the origin. On $B_n$ choose the smooth argument $\theta_n$ centered at $a_n$. Its values lie in $(a_n/2,3a_n/2)$: the argument varies from its central value by at most $\arcsin(\rho_n/r_n)<a_n/2$. Thus $a=e^{i\theta_n}$ there. [given, construct, algebra]

2.1 Choose a smooth radial cutoff $\eta:[0,\infty)\to[0,1]$, equal to $1$ on $[0,1/2]$ and to $0$ on $[3/4,\infty)$. For $y\in B_n$, put $t=|y-c_n|/\rho_n$ and $\phi_n(y)=\eta(t)a_n(8t^2-1)+(1-\eta(t))\theta_n(y)$. This is smooth, including at the center because the cutoff is constant there. It equals $\theta_n$ near the boundary. Define $g=e^{i\phi_n}$ on $B_n$ and $g=a$ elsewhere. The balls are locally finite in $M\setminus S$, so this defines a smooth map. Interpolating $\phi_n$ linearly to $\theta_n$ on each ball gives a homotopy to $a$; the formulas match on all boundary collars. [step 1.1, construct]

3.1 On $t\le1/2$, the zero set of $\phi_n$ is the round three-sphere $C_n$ of radius $\rho_n/\sqrt8$ about $c_n$, and its differential is nonzero there. On $t\ge1/2$, both terms used in the convex combination are strictly positive. Moreover $-a_n\le\phi_n\le(7/2)a_n<\pi$: the polynomial term is used only for $t<3/4$. Hence the only points of $B_n$ mapped to $1$ are $C_n$. Off the balls the fiber is the positive real normal ray times $\mathbb R^2$, where the argument has nonzero differential. Consequently $1$ is a regular value and the entire fiber is the disjoint union of that ray product with the spheres $C_n$. [step 1.1, step 2.1, algebra]

3.2 The argument modification has magnitude at most $5a_n$ on $B_n$ and vanishes off the balls. Since $|z|$ on $B_n$ lies between $r_n-\rho_n$ and $r_n+\rho_n$, only balls with $n\to\infty$ can meet $|z|\to0$. The bound $|e^{iu}-e^{iv}|\le|u-v|$ therefore gives the asserted uniform vanishing of $|g-a|$ as $|z|\to0$. [step 1.1, step 2.1, algebra]

4.1 Let $L$ be the closure of the fiber. It is the union of $\mathbb R^2\times\mathbb R_{\ge0}$ and the spheres $C_n$. Each $C_n$ is open and closed in $L$, since it is compact and isolated from the rest of $L$ by its ball. Every neighborhood of the origin in $L$ contains $C_n$ for all sufficiently large $n$. It is therefore disconnected: any such $C_n$ and its complement in the neighborhood give a separation, and the complement contains the origin. Thus the origin has no connected open neighborhood in $L$; in particular $L$ is not locally connected and cannot be a topological three-manifold with boundary. [step 3.1, step 3.2, construct] ∎

## Remarks

This is a local smooth counterexample to the approximation inference, not a counterexample to the existence of a suitable Seifert hypersurface. Exact angular agreement on an entire product end excludes these additional sphere components; arbitrary regular fibers need not have that agreement.
