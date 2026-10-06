---
id: lem-schwartz-dilations-preserve-schwartz-space
kind: lemma
title: "Dilations and their normalisations preserve Schwartz space, with scaling identities"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, def-ck-and-multi-index-notation-in-several-variables, lem-schwartz-functions-and-all-derivatives-are-integrable, cor-c-one-change-of-variables-for-l-one-functions, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "section 1.1, printed p. 60 (PDF p. 2): the normalised dilation $\\varphi_t(x):=t^{-n}\\varphi(t^{-1}x)$ used throughout"
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "ch. I, section 1.1.1, printed p. 3 (PDF p. 11): isotropic dilation and the normalisation $\\varphi_t$"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$, $\varphi\in\mathcal S(\mathbb R^n)$ and $t>0$, and write
$$(D_t\varphi)(x)=\varphi(x/t),\qquad \varphi_t(x)=t^{-n}\varphi(x/t).$$
Then $D_t\varphi,\varphi_t\in\mathcal S(\mathbb R^n)$, with the seminorm
identities
$$p_{\alpha\beta}(D_t\varphi)=t^{|\alpha|-|\beta|}p_{\alpha\beta}(\varphi), \qquad p_{\alpha\beta}(\varphi_t)=t^{|\alpha|-|\beta|-n}p_{\alpha\beta}(\varphi)$$
for all multi-indices $\alpha,\beta$
([[def-schwartz-space-and-its-seminorms]],
[[def-ck-and-multi-index-notation-in-several-variables]]). Consequently each
$D_t$ maps $\mathcal S$ continuously into itself for the Schwartz topology
([[def-schwartz-topology-and-convergence]]).

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Then
$$\int_{\mathbb R^n}\varphi_t(x)\,dx=\int_{\mathbb R^n}\varphi(x)\,dx, \qquad \int_{\mathbb R^n}|x|^m|\varphi_t(x)|\,dx =t^m\int_{\mathbb R^n}|x|^m|\varphi(x)|\,dx$$
for every integer $m\ge0$, both sides finite
([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).

The identities are stated for $t>0$; the normalisation is chosen so that the
$L^1$ mass and the first moments scale by the powers $t^m$, which is what the
later approximate-identity argument consumes. The unnormalised dilation satisfies $D_t\varphi=t^n\varphi_t$, and the factor $t^{-n}$ does not affect
membership in $\mathcal S$, which is closed under nonzero scalar multiples.

## Facts & Assumptions

**Given:** $n\ge1$, $\varphi\in\mathcal S(\mathbb R^n)$, $t>0$, and the seminorms, topology and partial derivatives of [[def-schwartz-space-and-its-seminorms]], [[def-schwartz-topology-and-convergence]] and [[def-ck-and-multi-index-notation-in-several-variables]]. Under countable choice, [[cor-c-one-change-of-variables-for-l-one-functions]] gives the substitution formula for the $C^1$ diffeomorphism $T(y)=ty$ of $\mathbb R^n$ with $|\det DT(y)|=t^n$, and [[lem-schwartz-functions-and-all-derivatives-are-integrable]] gives $x^\alpha\partial^\beta\varphi\in L^1$ for all multi-indices.

[L1] The $j$-th partial derivative of a function $f$ at $x$ is $\partial_jf(x)=\lim_{h\to0}\bigl(f(x+he_j)-f(x)\bigr)/h$, and partial derivatives of a Schwartz function exist and are continuous ([[def-ck-and-multi-index-notation-in-several-variables]], [[def-schwartz-space-and-its-seminorms]]).

[F1] $|x|^m\le(1+|x|^2)^{m/2}\le\sum_{|\alpha|\le m}c_\alpha|x^\alpha|$ with finite constants $c_\alpha$, and a nonnegative measurable function dominated by a finite sum of $L^1$ functions lies in $L^1$ ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).



**Proof technique:** direct computation with the chain rule along coordinate axes, then the change-of-variables formula.

## Proof

**Proof technique:** direct.

1.1 Differentiation of a dilation. Let $f=\varphi\circ A$ with $A(x)=x/t$, and fix $j\le n$ and $x\in\mathbb R^n$. Writing $z=x/t$ and $s=h/t$, the one-variable difference quotient of the map $h\mapsto f(x+he_j)$ equals $t^{-1}\bigl(\varphi(z+se_j)-\varphi(z)\bigr)/s$, and $s\to0$ exactly when $h\to0$, so the limit exists and equals $t^{-1}\partial_j\varphi(z)$ by [L1]; there is no division by a vanishing quantity because $t>0$. Induction on $|\beta|$, applying the same computation to the $C^1$ function $\partial^\gamma\varphi$ at the point $x$ with $\gamma$ the predecessor of $\beta$, gives $$\partial^\beta(D_t\varphi)(x)=t^{-|\beta|}(\partial^\beta\varphi)(x/t).$$ [L1, given, algebra]

1.2 The scaling identities. By [F1] and [L1] the functions $\varphi$, $|\varphi|$, $x^\alpha\partial^\beta\varphi$ and $|x|^m|\varphi|$ are integrable, so the change-of-variables formula applies to them. Applying it to $\varphi$ with $T(y)=ty$ and $|\det DT|=t^n$ gives $$\int\varphi_t(x)\,dx=t^{-n}\int\varphi(x/t)\,dx=\int\varphi(y)\,dy,$$ and applying it to the nonnegative integrable function $|x|^m|\varphi(x)|$ gives $\int|x|^m|\varphi(x/t)|\,dx=t^{n+m}\int|y|^m|\varphi(y)|\,dy$, whence the moment identity after multiplying by $t^{-n}$. The factor $t^{-n}t^{n+m}= t^m$ is finite for every $m\ge0$ and $t>0$. [F1, given]

2.1 Membership and the seminorm identities. Substituting $y=x/t$ in $|x^\alpha\partial^\beta(D_t\varphi)(x)|=t^{-|\beta|}|x^\alpha (\partial^\beta\varphi)(x/t)|$ gives $t^{|\alpha|-|\beta|}|y^\alpha\partial^\beta\varphi(y)|$, valid for every $x\in\mathbb R^n$; taking suprema over $x$ is taking suprema over $y$ and proves $p_{\alpha\beta}(D_t\varphi)=t^{|\alpha|-|\beta|}p_{\alpha\beta} (\varphi)<\infty$. Multiplying by the scalar $t^{-n}$ proves the second identity and makes $D_t\varphi,\varphi_t$ elements of $\mathcal S$, since these are finite for all $\alpha,\beta$ by [L1] and the given. For fixed $t$ the constants $t^{|\alpha|-|\beta|-n}$ are finite, so for every basic neighbourhood the finitely many relevant input seminorms of $\varphi$ control the output seminorms; this is continuity of $D_t$ at zero, hence everywhere by linearity. [L1, step 1.1, given, algebra]

3.1 Conclusion. Step 2.1 gives membership, the two seminorm identities, and continuity of $D_t$ on $\mathcal S$; step 1.2 gives the integral and moment identities under countable choice, which is inherited from the substitution theorem. This proves the lemma. [step 2.1, step 1.2] ∎
