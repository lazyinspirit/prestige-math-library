---
id: fs-every-compact-path-connected-planar-set-has-a-universal-cover
kind: false-statement
title: 'FALSE: every compact path-connected subset of $\mathbb R^2$ has a universal cover'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-hawaiian-earring-is-compact-and-path-connected, ex-hawaiian-earring-retracts-onto-each-circle, def-semilocally-simply-connected-space, thm-universal-covering-spaces-force-semilocal-simple-connectedness, cor-geometric-unit-circle-has-fundamental-group-z, thm-induced-fundamental-group-map-functoriality, def-neighbourhood-top, def-subspace-topology-top, def-metric-topology, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Example 1.25 and §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

Every compact path-connected subset of $\mathbb R^2$ admits a universal covering space.

## Facts & Assumptions

**Given:** The Hawaiian earring $\mathbb H=\bigcup_{n\ge1}C_n\subseteq\mathbb R^2$, based at the common point $0$.

[F1] The Hawaiian earring is a compact and path-connected subset of $\mathbb R^2$ ([[prop-hawaiian-earring-is-compact-and-path-connected]]).

[F2] For every $n\ge1$, the Hawaiian earring admits a retraction onto its circle $C_n$ ([[ex-hawaiian-earring-retracts-onto-each-circle]]).

[F3] A space is semilocally simply connected at $x$ when some neighbourhood $U$ of $x$ has inclusion-induced homomorphism $\pi_1(U,x)\to\pi_1(X,x)$ trivial ([[def-semilocally-simply-connected-space]]).

[L1] If a space admits a universal covering, then it is semilocally simply connected ([[thm-universal-covering-spaces-force-semilocal-simple-connectedness]]).

[L2] Under the isomorphism from the geometric unit circle's fundamental group to $\mathbb Z$, the once-around loop $t\mapsto(\cos 2\pi t,\sin 2\pi t)$ corresponds to $1$ and is therefore nontrivial ([[cor-geometric-unit-circle-has-fundamental-group-z]]).

[L3] Induced maps on fundamental groups are functorial, so a homomorphism with a left inverse is injective ([[thm-induced-fundamental-group-map-functoriality]]).

[F4] A neighbourhood contains an open set containing the point, and open subsets of a subspace are traces of ambient open sets ([[def-neighbourhood-top]], [[def-subspace-topology-top]]).

[F5] In a metric topology, every open set contains a metric ball about each of its points ([[def-metric-topology]]).

[L4] For every real $\varepsilon>0$ there is an integer $N\ge1$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).

## Refutation

**Proof technique:** direct.

1.1 By [F1], $\mathbb H$ satisfies the compactness and path-connectedness hypotheses of the proposed statement. [F1]

1.2 Let $U$ be any neighbourhood of $0$ in $\mathbb H$. By [F4], there is an ambient open set $O\subseteq\mathbb R^2$ with $0\in O$ and $O\cap\mathbb H\subseteq U$. By [F5], choose $\varepsilon>0$ with $B(0,\varepsilon)\subseteq O$, so $\mathbb H\cap B(0,\varepsilon)\subseteq U$. Since $C_n\subseteq\overline B_2(0,2/n)$, [L4] gives an $n\ge1$ with $C_n\subseteq U$. [F1, F4, F5, L4, algebra]

2.1 Let $j:C_n\hookrightarrow\mathbb H$ be inclusion and $r_n:\mathbb H\to C_n$ the retraction of [F2]. Functoriality gives $(r_n)_*\circ j_*=\operatorname{id}$, so $j_*$ is injective. The pointed affine homeomorphism $z\mapsto(1/n,0)-(1/n)z$ carries the geometric unit circle based at $(1,0)$ onto $C_n$ based at $0$ and carries the once-around loop of [L2] to a loop $\ell_n$ in $C_n$. By [L2] and [L3], $[\ell_n]\ne1$ in $\pi_1(C_n,0)$; injectivity of $j_*$ therefore makes its image nontrivial in $\pi_1(\mathbb H,0)$. Since $C_n\subseteq U$, the same $\ell_n$ is a loop in $U$. [step 1.2, F2, L2, L3]

3.1 Since every neighbourhood $U$ of $0$ contains such a loop, no inclusion-induced map $\pi_1(U,0)\to\pi_1(\mathbb H,0)$ is trivial. Thus $\mathbb H$ is not semilocally simply connected at $0$. [step 1.2, step 2.1, F3]

4.1 By [L1], the Hawaiian earring has no universal cover. Together with step 1.1, it is a compact path-connected planar counterexample to the proposed universal claim. [step 1.1, step 3.1, L1] ∎
