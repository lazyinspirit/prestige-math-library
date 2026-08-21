---
id: thm-parametrized-implicit-function-theorem-with-higher-regularity
kind: theorem
title: "The parametrized implicit function theorem with $C^k$ regularity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, lem-matrix-inversion-preserves-ck-regularity, thm-higher-regularity-of-local-inverses, thm-euclidean-inverse-function-theorem, thm-euclidean-implicit-function-theorem]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.6 and Remark 8.5.8"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
    - title: "University of Toronto MAT237, §3.3"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter3/S3.3.html"
pipeline_run: null
---

## Statement

Let $k,m,n\ge1$ and $p\in\mathbb N$, let $U\subseteq\mathbb R^{m+n+p}$ be open, and let $F:U\to\mathbb R^n$ be $C^k$. Suppose $F(a,b,\lambda_0)=0$ and $D_yF(a,b,\lambda_0)$ is invertible. Then there are neighbourhoods and a unique $C^k$ map $\varphi$ solving $F(x,\varphi(x,\lambda),\lambda)=0$. More precisely, on suitable open neighbourhoods $P$ of $(a,\lambda_0)$ and $Q$ of $b$,

$$F(x,y,\lambda)=0\quad\Longleftrightarrow\quad y=\varphi(x,\lambda),$$

and

$$D\varphi(x,\lambda)=-D_yF(x,\varphi(x,\lambda),\lambda)^{-1}D_{(x,\lambda)}F(x,\varphi(x,\lambda),\lambda).$$

When no parameter block is present, this is the ordinary $C^k$ implicit function theorem.

## Facts & Assumptions

**Given:** The dimensions and hypotheses in the Statement. The block map used below is $C^k$ by [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], and matrix inversion has the regularity of [[lem-matrix-inversion-preserves-ck-regularity]].

[L1] With an invertible second-block derivative, the $C^1$ implicit theorem gives open neighbourhoods $P$ of $a$ and $Q$ of $b$, and a unique $C^1$ map solving the equation, together with its derivative formula ([[thm-euclidean-implicit-function-theorem]]).

[L2] If a map is $C^k$ for $k\ge1$, every local inverse supplied by the inverse function theorem is $C^k$ ([[thm-higher-regularity-of-local-inverses]]).

[L3] A $C^1$ map with invertible derivative has a local $C^1$ inverse ([[thm-euclidean-inverse-function-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Put $\widetilde U=\{(x,\lambda,y):(x,y,\lambda)\in U\}$ and $\widetilde F(x,\lambda,y)=F(x,y,\lambda)$. The coordinate permutation is linear, so $\widetilde U$ is open and $\widetilde F$ is $C^k$. Regard $u=(x,\lambda)$ as the first variable block and apply [L1] to $\widetilde F$. It gives neighbourhoods $P,Q$, a unique $C^1$ map $\varphi:P\to Q$, the equivalence $F(x,y,\lambda)=0$ if and only if $y=\varphi(x,\lambda)$, and the combined-block derivative formula. [L1, given, algebra]

2.1 On $\widetilde U$, the block map $H(x,\lambda,y)=(x,\lambda,F(x,y,\lambda))$ is $C^k$. Its derivative at the base point is block triangular with identity on the first block and invertible block $D_yF$ on the second, so [L3] supplies a local inverse $G$. By [L2], $G$ is $C^k$. The identity $H(G(u,z))=(u,z)$ forces $G(u,z)=(u,\psi(u,z))$; hence $u\mapsto\psi(u,0)$ is a $C^k$ solution of the equation. After intersecting the neighbourhoods, uniqueness in step 1.1 identifies this solution with $\varphi$. [step 1.1, L2, L3, given, algebra]

3.1 Step 1.1 already supplies the displayed derivative formula for the unique $C^1$ solution, while step 2.1 upgrades that same solution to $C^k$. Thus all regularity, equivalence, uniqueness, and derivative claims hold, including $p=0$. [step 1.1, step 2.1] ∎
