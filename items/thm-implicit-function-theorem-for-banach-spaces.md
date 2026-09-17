---
id: thm-implicit-function-theorem-for-banach-spaces
kind: theorem
title: Implicit function theorem for Banach spaces
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-inverse-function-theorem-for-banach-spaces, thm-chain-sum-product-and-composition-rules-for-banach-derivatives, def-product-norms-on-finitely-many-normed-spaces, def-axiom-of-choice, def-c-k-map-between-banach-spaces, def-frechet-derivative-between-banach-spaces, def-banach-space, def-metric-ball, thm-complete-subspace-iff-closed, def-space-of-bounded-linear-operators, def-operator-norm, lem-neumann-series-and-small-perturbations-of-bounded-inverses]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Zuoqin Wang, Lecture 6 — §3.3 (implicit theorem via the map (x,y) ↦ (x,F(x,y)))"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$, $Y$, $Z$ be real
Banach spaces, let $U \subseteq X \times Y$ be open for the product metric, let
$F : U \to Z$ be of class $C^k$ with $k \ge 1$
([[def-c-k-map-between-banach-spaces]]), and let $(a,b) \in U$ with
$F(a,b) = 0$. Let $D_XF(a,b) := DF(a,b)\circ i_X$ and
$D_YF(a,b) := DF(a,b)\circ i_Y$ be the partial derivatives, where
$i_X(x) := (x,0)$ and $i_Y(y) := (0,y)$. If $D_YF(a,b) : Y \to Z$ is a bounded
linear isomorphism, then there are open neighbourhoods $A \subseteq X$ of $a$
and $B \subseteq Y$ of $b$ and a unique map $g : A \to B$ of class $C^k$ such
that

$$\{\,(x,y) \in A \times B : F(x,y) = 0\,\} = \{\,(x,g(x)) : x \in A\,\},$$

and along the graph $Dg$ satisfies
$$Dg(x) = -\,D_YF\bigl(x,g(x)\bigr)^{-1}\,D_XF\bigl(x,g(x)\bigr) \qquad (x \in A).$$
In particular $g(a) = b$.

## Facts & Assumptions

**Given:** AC, real Banach spaces $X,Y,Z$, an open $U \subseteq X\times Y$, a $C^k$ map $F : U \to Z$ with $k \ge 1$, a point $(a,b) \in U$ with $F(a,b)=0$, and a bounded linear isomorphism $L := D_YF(a,b) : Y \to Z$.

[L1] Fréchet derivative, partial derivatives as restrictions of $DF$ to the coordinate axes, and the derivative of a bounded linear map ([[def-frechet-derivative-between-banach-spaces]]); the product norm $\|(x,y)\|_{\max} = \max\{\|x\|,\|y\|\}$ is a norm on $X\times Y$ ([[def-product-norms-on-finitely-many-normed-spaces]]).

[L2] Chain rule and sum rule ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]).

[L3] Inverse function theorem: a $C^k$ map ($k \ge 1$) between real Banach spaces whose derivative at a point is a bounded linear isomorphism restricts to a $C^k$ diffeomorphism between open neighbourhoods of that point and its image ([[thm-inverse-function-theorem-for-banach-spaces]]); AC is assumed there and here.

[L4] Neumann perturbation: an operator close enough to an invertible one is invertible with a norm bound on its inverse ([[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]).

[L5] $C^k$ for $k \ge 1$ includes differentiability and continuity of the derivative ([[def-c-k-map-between-banach-spaces]]).

[L6] A closed subset of a complete metric space is complete; a Banach space is complete ([[thm-complete-subspace-iff-closed]], [[def-banach-space]]).

[L7] The operator norm satisfies $\|Tu\| \le \|T\|\,\|u\|$ and $\|ST\| \le \|S\|\,\|T\|$ ([[def-operator-norm]], [[def-space-of-bounded-linear-operators]]).

## Proof

**Proof technique:** direct.

1.1 The product $X\times Y$ with the max norm is complete: a Cauchy sequence in $X\times Y$ has Cauchy coordinate sequences, which converge in the Banach spaces $X$ and $Y$, and the coordinatewise limit is a limit in the product metric; similarly $X\times Z$ is complete. Hence these products are real Banach spaces, and $U$ is an open subset of the Banach space $X\times Y$. [L1, L6, algebra]

1.2 Define $\Phi : U \to X\times Z$ by $\Phi(x,y) := (x,\,F(x,y))$. Its first component is the (bounded, linear) projection $(x,y)\mapsto x$, and its second is $F$; the derivative of a bounded linear map is the map itself by [L1], so $D\Phi(a,b)(h,k) = (h,\, D_XF(a,b)h + D_YF(a,b)k)$, and $D\Phi(a,b)$ is a bounded linear isomorphism with inverse $(u,w) \mapsto (u,\,L^{-1}(w-D_XF(a,b)u))$. [L1, L7, algebra]

2.1 Since $F$ is of class $C^k$, so is $\Phi$: for $k=1$ this is the chain rule applied to the two components $x$ and $F$, and for higher $k$ the same computation differentiates each component, the components of $D^j\Phi$ being those of $D^jx$ and $D^jF$ for $j \le k$; continuity of the top derivative is inherited from that of $D^kF$ together with the constant derivatives of the linear first component. Also $\Phi(a,b) = (a,0)$. [step 1.2, L2, L5, algebra]

3.1 By [L3] applied to the $C^k$ map $\Phi$ at $(a,b)$, whose derivative is the isomorphism of [step 1.2], there are open sets $U_0 \ni (a,b)$ and $V_0 \ni (a,0)$ such that $\Phi|_{U_0} : U_0 \to V_0$ is a bijection with $C^k$ inverse $\Psi : V_0 \to U_0$. [step 1.2, step 2.1, L3]

4.1 Because $\Phi$ preserves the first coordinate, so does $\Psi$: if $(x,z) = \Phi(x',y')$ then $x = x'$, hence $\Psi(x,z) = (x,\,H(x,z))$ for the $C^k$ map $H := \mathrm{pr}_2 \circ \Psi$; and $\Psi$ being an inverse of $\Phi$ means $F\bigl(x,H(x,z)\bigr) = z$ for all $(x,z) \in V_0$. [step 3.1, algebra]

5.1 Choose open $A \subseteq X$ and $B \subseteq Y$ with $A\times B \subseteq U_0$ and such that $(a,0) \in A\times\{0\} \subseteq V_0$: possible because $U_0$ and $V_0$ are open and contain $(a,b)$ respectively $(a,0)$, and the set $\{x : (x,0) \in V_0\}$ is an open neighbourhood of $a$. Shrinking $A$ if necessary we may also assume $g(A) \subseteq B$: $g$ is continuous at $a$ with $g(a) = b \in B$ and $B$ is open, so some neighbourhood $A_0$ of $a$ satisfies $H(A_0 \times \{0\}) \subseteq B$, and we replace $A$ by $A \cap A_0$. Define $g(x) := H(x,0)$ for $x \in A$, so $g$ is of class $C^k$ with values in $B$, $g(a) = b$, and $F(x,g(x)) = 0$ for every $x \in A$ by [step 4.1]. [step 4.1, algebra]

6.1 Conversely, if $(x,y) \in A\times B$ has $F(x,y) = 0$, then $\Phi(x,y) = (x,0) \in V_0$, so $(x,y) = \Psi(x,0) = (x,g(x))$ by [step 4.1] and [step 5.1], and hence $y = g(x)$. Thus the zero set of $F$ in $A\times B$ is exactly the graph of $g$, which proves existence and uniqueness of $g$ on $A$. [step 5.1, step 4.1, algebra]

7.1 For $x \in A$, differentiate the identity $F(x,g(x)) = 0$ using the chain rule [L2]: $D_XF(x,g(x)) + D_YF(x,g(x))\,Dg(x) = 0$; the operator $D_YF(x,g(x))$ is invertible for $x$ close to $a$ by continuity of $D_YF$ at $(a,b)$ (from [L5]) and [L4], and shrinking $A$ if necessary we may assume this holds for all $x \in A$; then $Dg(x) = -D_YF(x,g(x))^{-1}D_XF(x,g(x))$, which with [step 6.1] is the displayed formula. [step 5.1, step 6.1, L2, L4, L5, algebra] ∎
