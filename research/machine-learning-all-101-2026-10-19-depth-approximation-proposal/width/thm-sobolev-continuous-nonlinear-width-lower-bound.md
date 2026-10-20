---
id: thm-sobolev-continuous-nonlinear-width-lower-bound
kind: theorem
title: "Sobolev lower bound for continuous parameter selection"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-axiom-of-choice, def-sobolev-space-wkp-and-its-norm, thm-borsuk-ulam-general]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald DeVore, Ralph Howard, Charles Micchelli, Optimal nonlinear approximation"
      url: https://gwern.net/doc/cs/algorithm/1989-devore.pdf
      locator: "Theorem 3.1 and its complete antipodal proof, pp.473–474; disjoint bump construction, Lemma 4.1 and Theorem 4.2, pp.474–476."
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks"
      url: https://arxiv.org/pdf/1610.01145
      locator: "Theorem 3, continuous-selection lower bound."
---

## Statement

Assume the Axiom of Choice. Let $d,n\ge1$ be integers, $Q=[0,1]^d$, and let $F_{d,n}\subset C(Q;\mathbb R)$ consist of the continuous functions whose restrictions represent members of $W^{n,\infty}((0,1)^d)$ satisfying
$$\max_{|\alpha|\le n}\|D^\alpha f\|_{L^\infty((0,1)^d)}\le1.$$
There exists $c_{d,n}>0$ such that, for every integer $W\ge1$, every map $\eta:\mathbb R^W\to C(Q;\mathbb R)$, and every map $M:F_{d,n}\to\mathbb R^W$ continuous for the uniform norm on $F_{d,n}$,
$$\sup_{f\in F_{d,n}}\|f-\eta(M(f))\|_\infty\ge c_{d,n}(W+1)^{-n/d}.$$
No continuity or measurability assumption is imposed on $\eta$. In particular, if this supremum is at most $\varepsilon>0$, then $W\ge C_{d,n}\varepsilon^{-d/n}$ for some $C_{d,n}>0$ depending only on $d,n$.

## Statement references

[[def-sobolev-space-wkp-and-its-norm]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** AC, $d,n,W\ge1$, $F_{d,n}$, arbitrary $\eta$, and selection $M$ continuous for the uniform-norm topology as in the statement.

[F1] A function is in the indicated Sobolev ball exactly when its weak derivatives through order $n$, including the function itself, have $L^\infty$ norms at most one ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] Every continuous map $S^W\to\mathbb R^W$ takes the same value at some antipodal pair, under AC ([[thm-borsuk-ulam-general]]).

## Proof

1.1 Define $p(t)=(4t(1-t))^{n+1}$ for $0\le t\le1$ and $p(t)=0$ otherwise, and put $\psi(x)=\prod_{r=1}^d p(x_r)$. The one-sided derivatives of $p$ of orders $0,\ldots,n$ vanish at each endpoint because the polynomial has a zero of multiplicity $n+1$ there. Hence the zero extension is $C^n(\mathbb R)$, and $\psi\in C^n(\mathbb R^d)$ is supported in $[0,1]^d$, is one at its center, and lies between zero and one. Set $$B=\max_{|\alpha|\le n}\|D^\alpha\psi\|_\infty\ge1.$$ This is finite since the derivatives are continuous polynomials on the compact cube and zero outside it. Their classical derivatives are weak derivatives: integrate by parts successively in each coordinate against a compactly supported smooth test function; endpoint terms vanish because the derivatives below order $n$ match their zero extensions. This also verifies the weak derivative identity after every scaling and finite sum used below. [F1, construct, algebra]

1.2 Set $N=W+1$ and $k=\lceil N^{1/d}\rceil$. Partition $Q$ into $k^d$ closed coordinate cubes of side $1/k$, and take the first $N$ in lexicographic order. Write $v_j$ for their lower vertices and put $$\phi_j(x)=B^{-1}k^{-n}\psi(k(x-v_j)),\qquad j=1,\ldots,N.$$ Distinct supports have disjoint interiors; all derivatives of orders at most $n$ vanish on their boundaries. Thus, for $u=(u_1,\ldots,u_N)\in[-1,1]^N$, the sum $T(u)=\sum_j u_j\phi_j$ satisfies $\|D^\alpha T(u)\|_\infty\le B^{-1}k^{|\alpha|-n}\|D^\alpha\psi\|_\infty\le1$. The weak derivative verification in step 1.1 proves $T(u)\in F_{d,n}$. Disjoint interiors, and evaluation at the centers, give the exact identity $$\|T(u)\|_\infty=B^{-1}k^{-n}\max_j|u_j|.$$ In particular $T$ is linear, odd and continuous into $C(Q)$ with its uniform norm. [F1, step 1.1, construct, algebra]

2.1 For $z\in S^{N-1}=S^W$, put $R(z)=z/\|z\|_\infty$. Its denominator is nonzero, and $R$ is continuous and odd with $\|R(z)\|_\infty=1$. Therefore $z\mapsto M(T(R(z)))$ is continuous into $\mathbb R^W$. By [F2], some antipodal pair has equal images. Setting $f=T(R(z))$, we obtain $M(f)=M(-f)$ and $\|f\|_\infty=B^{-1}k^{-n}$. [F2, step 1.2, construct]

2.2 Let $q=\eta(M(f))=\eta(M(-f))$. The triangle inequality yields $$2B^{-1}k^{-n}=\|f-(-f)\|_\infty\le\|f-q\|_\infty+\|-f-q\|_\infty.$$ At least one of the two errors is at least $B^{-1}k^{-n}$. Because $k\le2N^{1/d}$, this is at least $c_{d,n}N^{-n/d}$ with $c_{d,n}=2^{-n}B^{-1}>0$. This proves the asserted supremum bound without any regularity of $\eta$. [step 2.1, algebra]

3.1 If every error is at most $\varepsilon$, step 2.2 gives $W+1\ge(c_{d,n}/\varepsilon)^{d/n}$. Since $W\ge1$ implies $W+1\le2W$, we obtain $W\ge\tfrac12 c_{d,n}^{d/n}\varepsilon^{-d/n}$. The construction works at $W=1$, $d=1$, $n=1$, on cubes touching the boundary and when $N=k^d$, with exactly the same vanishing-derivative argument. AC is inherited from [F2] and subsumes the countable choice in [F1]; choosing finitely many indexed cubes or derivatives introduces no new choice principle. [F1, F2, step 2.2, algebra] ∎
