---
id: prop-fundamental-groups-of-punctured-euclidean-spaces
kind: proposition
title: 'The punctured plane has fundamental group $\mathbb Z$, while punctured $\mathbb R^n$ is simply connected for $n\ge3$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-punctured-rn-deformation-retracts-onto-the-sphere, prop-retracts-inject-fundamental-groups, cor-geometric-unit-circle-has-fundamental-group-z, thm-higher-dimensional-spheres-are-simply-connected, lem-standard-basis-of-f-n, thm-fundamental-group-laws]
justified_by: []
aliases: []
landmark: true
short: '$\pi_1(\mathbb R^n\setminus\{0\})$'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.14 and Corollary 1.16"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

For $n\ge2$, put $P_n=\mathbb R^n\setminus\{0\}$ and let $e_0=(1,0,\ldots,0)$.

1. The punctured plane satisfies $\pi_1(P_2,e_0)\cong\mathbb Z$.
2. For every $n\ge3$, the space $P_n$ is path-connected and $\pi_1(P_n,x)$ is trivial for every $x\in P_n$; hence $P_n$ is simply connected.

## Facts & Assumptions

**Given:** A natural number $n\ge2$, the punctured Euclidean space $P_n$, its unit sphere $S^{n-1}$, and the standard point $e_0\in S^{n-1}$.

[L1] For $n\ge1$, radial normalization $r(x)=x/\lVert x\rVert_2$ is a retraction $P_n\to S^{n-1}$, and $H(x,t)=((1-t)+t/\lVert x\rVert_2)x$ is a deformation retraction of $P_n$ onto $S^{n-1}$ ([[thm-punctured-rn-deformation-retracts-onto-the-sphere]]).

[L2] If $A$ is a deformation retract of $X$, the inclusion and retraction induce mutually inverse fundamental-group isomorphisms at every basepoint of $A$ ([[prop-retracts-inject-fundamental-groups]]).

[L3] The geometric unit circle based at $e_0=(1,0)$ has fundamental group isomorphic to $\mathbb Z$ ([[cor-geometric-unit-circle-has-fundamental-group-z]]).

[L4] For every $m\ge2$, the sphere $S^m$ is simply connected ([[thm-higher-dimensional-spheres-are-simply-connected]]).

[L5] Loop concatenation makes each fundamental group a group, with constant-loop identity and path reversal representing inverses ([[thm-fundamental-group-laws]]).

[F1] For $n\ge1$, the first standard unit vector $e_0\in\mathbb R^n$ has first coordinate $1$ and all other coordinates $0$ ([[lem-standard-basis-of-f-n]]).

## Proof

**Proof technique:** direct.

1.1 For $n=2$, [L1] and [L2] identify $\pi_1(P_2,e_0)$ with $\pi_1(S^1,e_0)$, and [L3] identifies the latter with $\mathbb Z$. [L1, L2, L3, F1]

1.2 Let $n\ge3$ and $y\in S^{n-1}$. Since $n-1\ge2$, [L4] says that $S^{n-1}$ is simply connected, so $\pi_1(S^{n-1},y)$ is trivial; [L1] and [L2] therefore make $\pi_1(P_n,y)$ trivial. [given, L1, L2, L4]

2.1 For an arbitrary $x\in P_n$, the path $\gamma_x(t)=((1-t)+t/\lVert x\rVert_2)x$ runs in $P_n$ from $x$ to $r(x)$. Concatenating an endpoint-fixed homotopy with the fixed paths $\overline\gamma_x$ and $\gamma_x$ preserves it, so $$\Phi_x([\alpha])=[\overline\gamma_x*\alpha*\gamma_x]$$ is well defined. The piecewise formula $K(s,t)=\gamma_x(2s(1-t))$ for $s\le1/2$ and $K(s,t)=\gamma_x(2(1-s)(1-t))$ for $s\ge1/2$ contracts $\gamma_x*\overline\gamma_x$ to the constant path at $x$; applying the same formula to $\overline\gamma_x$ contracts $\overline\gamma_x*\gamma_x$ at $r(x)$. Hence the product of $\Phi_x([\alpha])$ and $\Phi_x([\beta])$ cancels its middle $\gamma_x*\overline\gamma_x$ and equals $\Phi_x([\alpha*\beta])$, while $[\delta]\mapsto[\gamma_x*\delta*\overline\gamma_x]$ is a two-sided inverse. Thus $\Phi_x:\pi_1(P_n,x)\to\pi_1(P_n,r(x))$ is an isomorphism, and step 1.2 makes $\pi_1(P_n,x)$ trivial. [step 1.2, L1, L5, construct]

3.1 Given $x,z\in P_n$, follow $\gamma_x$ to $r(x)$, a sphere path from $r(x)$ to $r(z)$ supplied by the path-connectedness in [L4], and the reverse of $\gamma_z$. This gives a path from $x$ to $z$, so $P_n$ is path-connected. Together with step 2.1, this proves simple connectedness and completes both clauses. [step 2.1, L1, L4, construct] ∎
