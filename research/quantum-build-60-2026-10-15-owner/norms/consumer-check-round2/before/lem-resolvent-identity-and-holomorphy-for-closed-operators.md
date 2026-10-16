---
id: lem-resolvent-identity-and-holomorphy-for-closed-operators
kind: lemma
title: Resolvent identity and holomorphy for a closed operator
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-resolvent-of-a-closed-operator, lem-neumann-series-and-small-perturbations-of-bounded-inverses, lem-composition-operator-norm-inequality, def-bounded-linear-operator, def-operator-norm, def-banach-space, rem-real-and-complex-normed-space-convention, def-complex-differentiability-holomorphic-and-entire, thm-complex-exponential-is-entire-with-derivative-itself, def-complex-exponential, lem-canonical-banach-complexification-of-a-real-banach-space]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 1, resolvent intermezzo, equations (1.5)-(1.8), printed p. 10'
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, the resolvent equation and Taylor expansion quoted in the proof of Theorem 4.6, printed pp. 101-104'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $X$ be a Banach space over $\mathbb K\in\{\mathbb R,\mathbb C\}$
([[def-banach-space]], [[rem-real-and-complex-normed-space-convention]]) and let
$A:D(A)\subseteq X\to X$ be a closed linear operator with resolvent
$R(\lambda,A)=(\lambda I-A)^{-1}\in\mathcal B(X)$ for $\lambda\in\rho(A)$
([[def-resolvent-of-a-closed-operator]]). Then:

1. $\rho(A)$ is open: if $\lambda_0\in\rho(A)$ and
   $|\lambda-\lambda_0|\,\|R(\lambda_0,A)\|<1$, then $\lambda\in\rho(A)$ and
   $$R(\lambda,A)=\sum_{n\ge0}(\lambda_0-\lambda)^nR(\lambda_0,A)^{n+1},$$
   the series converging in the operator norm;
2. the resolvent identity
   $$R(\lambda,A)-R(\mu,A)=(\mu-\lambda)R(\lambda,A)R(\mu,A)=(\mu-\lambda)R(\mu,A)R(\lambda,A)$$
   holds for all $\lambda,\mu\in\rho(A)$;
3. $\lambda\mapsto R(\lambda,A)$ is differentiable on $\rho(A)$ in the operator
   norm with derivative $R'(\lambda,A)=-R(\lambda,A)^2$; when $\mathbb K=\mathbb C$
   this is norm-holomorphy ([[def-complex-differentiability-holomorphic-and-entire]]);
4. for every $z\in\mathbb C$ the map
   $\lambda\mapsto e^{\lambda z}R(\lambda,A)$ is differentiable on $\rho(A)$ in
   the operator norm with derivative
   $ze^{\lambda z}R(\lambda,A)-e^{\lambda z}R(\lambda,A)^2$, and norm-holomorphic
   when $\mathbb K=\mathbb C$; for $\mathbb K=\mathbb R$ the complex scalar
   $e^{\lambda z}$ acts through the canonical complexification of $X$
   ([[lem-canonical-banach-complexification-of-a-real-banach-space]]).

No choice principle is used.

## Facts & Assumptions

**Given:** A Banach space $X$ over $\mathbb K\in\{\mathbb R,\mathbb C\}$, a closed linear operator $A:D(A)\subseteq X\to X$, its resolvent set $\rho(A)$, the resolvents $R(\lambda,A)=(\lambda I-A)^{-1}$ for $\lambda\in\rho(A)$, and the operator $T:=(\lambda_0-\lambda)R(\lambda_0,A)$ attached to a fixed $\lambda_0\in\rho(A)$ and $\lambda\in\mathbb K$.

[L1] For $\sigma\in\rho(A)$ one has $R(\sigma,A)\in\mathcal B(X)$, $R(\sigma,A)X=D(A)$, $R(\sigma,A)(\sigma I-A)y=y$ for $y\in D(A)$, $(\sigma I-A)R(\sigma,A)x=x$ for $x\in X$, and $AR(\sigma,A)=\sigma R(\sigma,A)-I\in\mathcal B(X)$ ([[def-resolvent-of-a-closed-operator]]).

[L2] If $R\in\mathcal B(X)$ satisfies $\|R\|<1$, then $I-R$ is invertible with inverse the operator-norm limit $\sum_{n\ge0}R^n$, and $\|\sum_{n\ge0}R^n\|\le(1-\|R\|)^{-1}$ ([[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]); moreover $\|ST\|\le\|S\|\,\|T\|$ for the operator norm ([[lem-composition-operator-norm-inequality]]).

[L3] The complex exponential is entire with $\exp'(z)=\exp(z)$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]), and its defining series gives $\exp(0)=1$ ([[def-complex-exponential]]); hence for every fixed $z\in\mathbb C$ the difference quotient $h^{-1}(e^{hz}-1)\to z$ as $h\to0$ in $\mathbb C$, because $e^{hz}=O(1)$-bounded near $0$ and $h^{-1}(e^{hz}-1)=z\cdot(hz)^{-1}(\exp(hz)-\exp(0))\to z\exp'(0)$.

## Proof

**Proof technique:** direct.

1.1 Factorization. Fix $\lambda_0\in\rho(A)$ and set $T:=(\lambda_0-\lambda)R(\lambda_0,A)\in\mathcal B(X)$. For every $y\in D(A)$, writing $z:=(\lambda_0I-A)y$ gives $y=R(\lambda_0,A)z$ by [L1] and $$(\lambda I-A)y=(\lambda_0I-A)y+(\lambda-\lambda_0)y=z+(\lambda-\lambda_0)R(\lambda_0,A)z=(I-T)(\lambda_0I-A)y,$$ so $\lambda I-A=(I-T)(\lambda_0I-A)$ as maps $D(A)\to X$. [L1, given, algebra]

1.2 Resolvent identity. For $\lambda,\mu\in\rho(A)$ the identity $(\mu-\lambda)R(\mu,A)=(\mu I-A)R(\mu,A)-(\lambda I-A)R(\mu,A)=I-(\lambda I-A)R(\mu,A)$ holds on $X$, because both resolvents are everywhere defined and $(\mu I-A)R(\mu,A)=I$ by [L1]. Hence, using $R(\mu,A)X\subseteq D(A)$ and $R(\lambda,A)(\lambda I-A)z=z$ for $z\in D(A)$, $$(\mu-\lambda)R(\lambda,A)R(\mu,A)=R(\lambda,A)\bigl(I-(\lambda I-A)R(\mu,A)\bigr)=R(\lambda,A)-R(\mu,A).$$ Exchanging $\lambda$ and $\mu$ gives $(\lambda-\mu)R(\mu,A)R(\lambda,A)=R(\mu,A)-R(\lambda,A)$; combining the two displays yields the second form $(\mu-\lambda)R(\lambda,A)R(\mu,A)=(\mu-\lambda)R(\mu,A)R(\lambda,A)$ for $\mu\ne\lambda$, while for $\mu=\lambda$ both sides vanish. [L1, given, algebra]

2.1 Openness and the expansion. If $\|T\|=|\lambda-\lambda_0|\,\|R(\lambda_0,A)\|<1$, then [L2] makes $I-T$ invertible with inverse $S:=\sum_{n\ge0}T^n$. For $x\in X$ put $y:=R(\lambda_0,A)Sx\in D(A)$; by [step 1.1] and [L1], $$(\lambda I-A)y=(I-T)(\lambda_0I-A)R(\lambda_0,A)Sx=(I-T)Sx=x,$$ so $\lambda I-A$ is surjective; it is injective because $(\lambda I-A)y=0$ and [step 1.1] give $(I-T)(\lambda_0I-A)y=0$, hence $(\lambda_0I-A)y=0$ and $y=R(\lambda_0,A)0=0$. Thus $\lambda\in\rho(A)$ and $$R(\lambda,A)=R(\lambda_0,A)(I-T)^{-1}=R(\lambda_0,A)\sum_{n\ge0}\bigl((\lambda_0-\lambda)R(\lambda_0,A)\bigr)^n=\sum_{n\ge0}(\lambda_0-\lambda)^nR(\lambda_0,A)^{n+1},$$ the series converging in operator norm because $\bigl\|(\lambda_0-\lambda)^nR(\lambda_0,A)^{n+1}\bigr\|\le\|R(\lambda_0,A)\|\,\|T\|^n$ and $\|T\|<1$. [step 1.1, L1, L2, algebra]

3.1 Differentiability of the resolvent. Let $\lambda_0\in\rho(A)$ and let $h\in\mathbb K$ with $|h|\,\|R\|<1$, where $R:=R(\lambda_0,A)$. By [step 2.1] applied to the pair $\lambda_0+h,\lambda_0$, $$R(\lambda_0+h,A)-R(\lambda_0,A)=\sum_{n\ge1}(-h)^nR^{n+1}=-hR^2+h^2\sum_{n\ge2}(-h)^{n-2}R^{n+1},$$ and the norm of the second summand is at most $|h|^2\|R\|^3(1-|h|\,\|R\|)^{-1}$, so $\|h^{-1}(R(\lambda_0+h,A)-R(\lambda_0,A))+R^2\|\le|h|\|R\|^3(1-|h|\,\|R\|)^{-1}\to0$. Hence $\lambda\mapsto R(\lambda,A)$ is differentiable at $\lambda_0$ with derivative $-R(\lambda_0,A)^2$; when $\mathbb K=\mathbb C$ this is complex differentiability in operator norm, that is, norm-holomorphy. [step 2.1, L2, algebra]

3.2 Local boundedness and continuity. With $R:=R(\lambda_0,A)$ and $|h|\,\|R\|<1$, the expansion of [step 2.1] gives $$\|R(\lambda_0+h,A)-R(\lambda_0,A)\|\le\sum_{n\ge1}|h|^n\|R\|^{n+1}=\frac{|h|\,\|R\|^2}{1-|h|\,\|R\|}\longrightarrow0$$ and $\|R(\lambda_0+h,A)\|\le\|R\|(1-|h|\,\|R\|)^{-1}$; thus $\lambda\mapsto R(\lambda,A)$ is continuous at every point of $\rho(A)$ and locally bounded in operator norm. [step 2.1, L2, algebra]

4.1 The exponential factor. Fix $\lambda_0\in\rho(A)$ and $z\in\mathbb C$, write $R=R(\lambda_0,A)$, and let $h\ne0$ with $|h|\,\|R\|<1$. Then $$\frac{e^{(\lambda_0+h)z}R(\lambda_0+h,A)-e^{\lambda_0z}R(\lambda_0,A)}{h}=e^{\lambda_0z}\frac{e^{hz}-1}{h}R(\lambda_0+h,A)+e^{\lambda_0z}\frac{R(\lambda_0+h,A)-R(\lambda_0,A)}{h}.$$ As $h\to0$ the first factor $\frac{e^{hz}-1}{h}\to z$ by [L3], the second factor $R(\lambda_0+h,A)\to R(\lambda_0,A)$ in operator norm by [step 3.2], and the last difference quotient tends to $-R^2$ by [step 3.1]; multiplying by the bounded scalars $e^{\lambda_0z}$ gives convergence in operator norm to $ze^{\lambda_0z}R(\lambda_0,A)-e^{\lambda_0z}R(\lambda_0,A)^2$. [step 3.1, step 3.2, L3, algebra]

5.1 Collecting [step 2.1] (openness and the displayed expansion, claim 1), [step 1.2] (the resolvent identity, claim 2), [step 3.1] (norm differentiability with derivative $-R^2$, and norm-holomorphy over $\mathbb C$, claim 3) and [step 4.1] (the exponential factor, claim 4) proves the four claims; every step used only the resolvent identities, the Neumann expansion and the scalar exponential, so no choice principle was used. [step 1.2, step 2.1, step 3.1, step 4.1, given] ∎ 