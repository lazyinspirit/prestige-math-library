---
id: ex-hypersurface-structure-sheaf-cohomology
kind: example
title: "Plane cubic structure-sheaf cohomology"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-sheaf-cohomology-derived-global-sections
  - lem-projective-hypersurface-cohomology-sequence
  - thm-cohomology-projective-space-twisting-sheaves
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Example

Let $k$ be a field, let $f\in k[x_0,x_1,x_2]$ be a nonzero homogeneous cubic,
and let $C=V_+(f)\subseteq\mathbb P^2_k$ be the closed subscheme cut out by
$f$, with closed immersion $i:C\hookrightarrow\mathbb P^2_k$ and structure
sheaf $\mathcal O_C$ ([[lem-projective-hypersurface-cohomology-sequence]]).
Then
$$H^0(C,\mathcal O_C)\cong k,\qquad H^1(C,\mathcal O_C)\cong k,\qquad H^q(C,\mathcal O_C)=0\ \ (q\ge2),$$
with sheaf cohomology as in
[[def-sheaf-cohomology-derived-global-sections]]. Neither smoothness nor
irreducibility nor reducedness of $C$ is required, the field $k$ is arbitrary,
and the groups do not depend on $f$ beyond $f\neq0$.

## Facts & Assumptions
**Given:** A field $k$, a nonzero homogeneous cubic
$f\in k[x_0,x_1,x_2]$, the closed subscheme
$C=V_+(f)\subseteq\mathbb P^2_k$ with its structure sheaf $\mathcal O_C$, and
the Axiom of Choice inherited from the cited suppliers.

[F1] The hypersurface sequence
([[lem-projective-hypersurface-cohomology-sequence]]): for a commutative ring
$A$ with $1$, $n\ge0$, a homogeneous $f$ of degree $d>0$ and
$X=V_+(f)\subseteq\mathbb P^n_A$ with closed immersion $i$, such that each
dehomogenisation $f/x_i^d$ is a nonzerodivisor of the chart ring
$B_{(x_i)}$, $B=A[x_0,\dots,x_n]$ (automatic for $A=k$ a field and $f\neq0$),
the sequence
$0\to\mathcal O_{\mathbb P^n}(-d)\xrightarrow{\cdot f}\mathcal O_{\mathbb P^n}\xrightarrow{i^{\sharp}}i_*\mathcal O_X\to0$
is exact, the long exact sequence of sheaf cohomology reads
$\cdots\to H^q(\mathbb P^n,\mathcal O(-d))\to H^q(\mathbb P^n,\mathcal O)\to H^q(X,\mathcal O_X)\to H^{q+1}(\mathbb P^n,\mathcal O(-d))\to\cdots$
with $H^q(\mathbb P^n,i_*\mathcal O_X)\cong H^q(X,\mathcal O_X)$, the connecting
maps give $H^q(X,\mathcal O_X)\cong H^{q+1}(\mathbb P^n,\mathcal O(-d))$ for
every $q\ge1$, and in degree zero the sequence
$0\to H^0(\mathbb P^n,\mathcal O(-d))\to A\to H^0(X,\mathcal O_X)\to H^1(\mathbb P^n,\mathcal O(-d))\to0$
is exact, with $H^0(\mathbb P^n,\mathcal O(-d))=0$ for $n\ge1$ and
$H^1(\mathbb P^n,\mathcal O(-d))=0$ for $n\ne1$.

[F2] Cohomology of twists on $\mathbb P^2$
([[thm-cohomology-projective-space-twisting-sheaves]]): for every commutative
ring $A$, every $n\ge0$ and every $d\in\mathbb Z$ one has
$H^q(\mathbb P^n_A,\mathcal O(d))=0$ unless $q=0$ or $q=n$; for $n=2$ and
$A=k$ a field, $H^0(\mathbb P^2,\mathcal O)\cong k$,
$H^2(\mathbb P^2,\mathcal O(-3))$ is free on the negative triples summing to
$-3$, namely on the single monomial $x_0^{-1}x_1^{-1}x_2^{-1}$, and
$H^2(\mathbb P^2,\mathcal O)=0$ because $0>-n-1=-3$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]): every family of nonempty
sets has a choice function, inherited here from [F1] and [F2].



## Verification

**Proof technique:** direct: specialise the hypersurface short exact sequence
to a plane cubic and read the cohomology of the structure sheaf off the long
exact sequence and the known groups of the twists on $\mathbb P^2$.

1.1 Specialising [F1] to $n=2$, $d=3$, $A=k$ and the nonzero cubic $f$ meets its hypotheses, since over the field $k$ each dehomogenisation $f/x_i^3$ is a nonzero element of the domain $B_{(x_i)}$ and hence a nonzerodivisor; so $0\to\mathcal O_{\mathbb P^2}(-3)\xrightarrow{\cdot f}\mathcal O_{\mathbb P^2}\xrightarrow{i^{\sharp}}i_*\mathcal O_C\to0$ is exact and its long exact sequence is $\cdots\to H^q(\mathbb P^2,\mathcal O(-3))\to H^q(\mathbb P^2,\mathcal O)\to H^q(C,\mathcal O_C)\to H^{q+1}(\mathbb P^2,\mathcal O(-3))\to\cdots$, with $H^q(\mathbb P^2,i_*\mathcal O_C)\cong H^q(C,\mathcal O_C)$. [F1]

2.1 By [F2] with $n=2$ the relevant groups are $H^0(\mathbb P^2,\mathcal O(-3))=0$ and $H^0(\mathbb P^2,\mathcal O)\cong k$, the intermediate groups $H^1(\mathbb P^2,\mathcal O(-3))=H^1(\mathbb P^2,\mathcal O)=0$, the top groups $H^2(\mathbb P^2,\mathcal O(-3))\cong k$ on the unique negative monomial $x_0^{-1}x_1^{-1}x_2^{-1}$ and $H^2(\mathbb P^2,\mathcal O)=0$, and all $H^q$ with $q>2$ vanish. [F2, step 1.1]

3.1 The degree-zero part of the sequence of step 1.1 is $0\to H^0(\mathbb P^2,\mathcal O(-3))\to H^0(\mathbb P^2,\mathcal O)\to H^0(C,\mathcal O_C)\to H^1(\mathbb P^2,\mathcal O(-3))\to0$, which by step 2.1 reads $0\to0\to k\to H^0(C,\mathcal O_C)\to0$; exactness gives $H^0(C,\mathcal O_C)\cong k$. [F1, step 1.1, step 2.1]

3.2 For $q=1\ge1$ the connecting map of step 1.1 is an isomorphism $H^1(C,\mathcal O_C)\cong H^2(\mathbb P^2,\mathcal O(-3))$, and step 2.1 identifies the target with $k$; hence $H^1(C,\mathcal O_C)\cong k$. [F1, step 1.1, step 2.1]

3.3 For every $q\ge2$ the isomorphism of step 1.1 gives $H^q(C,\mathcal O_C)\cong H^{q+1}(\mathbb P^2,\mathcal O(-3))$ with $q+1\ge3>2$, so the group vanishes by step 2.1; in particular $H^2(C,\mathcal O_C)=0$ and all higher groups vanish. [F1, step 1.1, step 2.1]

4.1 Boundary and degenerate cases: the field $k$ is arbitrary, including $\mathbb F_2$; the only hypothesis on $f$ is $f\neq0$, so $C$ may be smooth, nodal, cuspidal, a union of three lines or nonreduced, and the answer is independent of the choice of nonzero cubic; the zero polynomial would give $C=\mathbb P^2_k$ and is excluded; the degree $d=3=n+1$ is the endpoint at which the middle group has rank $\binom{d-1}{n}=\binom{2}{2}=1$, matching the single negative monomial $x_0^{-1}x_1^{-1}x_2^{-1}$; degrees $q\ge2$ are killed by the dimension bound $q+1>2$; and no choice is made beyond the inherited Axiom of Choice [A1]. [A1, F1, F2, step 3.3] ∎
