---
id: lem-fas-second-derivative-of-composed-cycle-map
kind: lemma
title: "Second derivative formula for a composed cycle map"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [cor-finite-dimensional-normed-spaces-are-banach, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Chin-Lung Wang, Banach Calculus, §§2.1.1–2.1.4 and §2.3"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
---

## Statement

Let $X_0,X_1,X_2,X_3$ be finite-dimensional real Euclidean spaces and let
$U_i\subseteq X_i$ be open for $i=0,1,2$. Suppose $S:U_0\to U_1$, $C:U_1\to U_2$, and
$T:U_2\to X_3$ are $C^2$, meaning that each is totally differentiable with
continuous derivative and that its derivative map is itself totally
differentiable. Write $\mathcal L(X,Y)$ for the finite-dimensional space of
linear maps $X\to Y$ with the induced Euclidean operator norm. Put
$E=T\circ C\circ S$. For a $C^2$ map $f$, define
$D^2f(x)[h,k]:=(D(Df)(x)h)k$. At $x\in U_0$, set $y=S(x)$ and
$z=C(y)$. Then for all $h,k\in X_0$,
$$D^2E(x)[h,k]=D^2T(z)[DC(y)DS(x)h,DC(y)DS(x)k]+DT(z)\bigl(D^2C(y)[DS(x)h,DS(x)k]+DC(y)D^2S(x)[h,k]\bigr).$$

## Facts & Assumptions

**Given:** The finite-dimensional Euclidean spaces, compatible open domains, $C^2$ maps $S,C,T$, and the stated definition of $D^2f$.

[F1] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: Fréchet derivatives obey the composition rule and the product rule for bounded bilinear maps.

[F2] [[cor-finite-dimensional-normed-spaces-are-banach]]: a finite-dimensional normed space with a finite basis is complete, hence Banach.

## Proof

**Proof technique:** direct.

1.1 The spaces $X_i$ and their matrix spaces $\mathcal L(X_i,X_j)$ have finite bases, so [F2] makes them Banach and [F1] applies. Put $G=C\circ S$. The composition rule gives $DG(x)=DC(y)DS(x)$. Composition of bounded linear maps is the bounded bilinear map $(A,B)\mapsto A\circ B$, since $\|A\circ B\|_{\rm op}\le\|A\|_{\rm op}\|B\|_{\rm op}$. Applying its product rule and the composition rule in [F1] to this derivative identity, then evaluating on $k$, gives $D^2G(x)[h,k]=D^2C(y)[DS(x)h,DS(x)k]+DC(y)D^2S(x)[h,k]$. [given, F1, F2, algebra]

2.1 Since $E=T\circ G$, [F1] gives $DE(x)=DT(G(x))DG(x)$. Differentiate this bounded-operator product in direction $h$ and evaluate on $k$: the derivative of $DT\circ G$ contributes $D^2T(z)[DG(x)h,DG(x)k]$, and the derivative of $DG$ contributes $DT(z)D^2G(x)[h,k]$. Substituting $DG(x)=DC(y)DS(x)$ and step 1.1 yields the stated formula. [given, F1, step 1.1, algebra] ∎
