---
id: thm-net-cluster-point-iff-convergent-subnet
kind: theorem
title: "A point is a cluster point of a net if and only if some subnet converges to it"
status: published
origin: session
deps: [def-subnet, def-net-convergence-and-cluster-point, def-neighbourhood-top]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Schlumprecht, Math 655 notes"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
pipeline_run: null
---

## Statement

For a net $x:D\to X$ and $p\in X$, $p$ is a cluster point of $x$ if and only if $x$ has a subnet converging to $p$.

## Facts & Assumptions

**Given:** A net $x:D\to X$ in a topological space and a point $p\in X$.

[A1] A cluster point is one for which every neighbourhood is visited frequently, and convergence means eventual membership in every neighbourhood ([[def-net-convergence-and-cluster-point]]).

[A2] Intersections of finitely many neighbourhoods of $p$ are neighbourhoods of $p$ ([[def-neighbourhood-top]]).

[A3] A subnet is given by an eventually cofinal index map ([[def-subnet]]).



## Proof

**Proof technique:** constructive.

1.1 Suppose $p$ is a cluster point. Let $E=\{(d,N):N\in\mathcal N(p),\ d\in D,\ x_d\in N\}$, ordered by $(d,N)\preceq(e,M)$ when $d\le e$ and $M\subseteq N$. [A1, construct]

1.2 Conversely, suppose a subnet $y_e=x_{\phi(e)}$ converges to $p$. Given a neighbourhood $N$ and $d\in D$, choose $e_0$ after which $y$ lies in $N$ and choose $e_1$ after which $\phi(e)\ge d$; a common upper bound $e$ of $e_0,e_1$ gives $\phi(e)\ge d$ and $x_{\phi(e)}=y_e\in N$. Hence $x$ is frequently in $N$. [A1, A3]

2.1 The set $E$ is directed: for $(d,N),(e,M)\in E$, take $h\ge d,e$ in $D$; frequent membership in $N\cap M$ gives $k\ge h$ with $x_k\in N\cap M$, and $(k,N\cap M)$ is above both pairs. [step 1.1, A1, A2]

2.2 Put $y_{(d,N)}=x_d$ and $\phi(d,N)=d$. For every $d_0\in D$, the pair $(d_0,X)$ lies in $E$, and every later pair has first coordinate at least $d_0$. Thus $\phi$ is eventually cofinal and $y$ is a subnet of $x$. [step 1.1, A3]

2.3 For a neighbourhood $N$ of $p$, choose $(d,N)\in E$ using frequent membership in $N$. Every pair later than it has second coordinate contained in $N$, hence its $y$-value lies in $N$. Thus $y\to p$. [step 1.1, A1]

3.1 Steps 1.1 and 2.1--2.3 construct a convergent subnet from a cluster point, and step 1.2 gives the converse. [step 2.2, step 2.3, step 1.2, discharge-construct] ∎
