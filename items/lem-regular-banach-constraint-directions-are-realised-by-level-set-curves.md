---
id: "lem-regular-banach-constraint-directions-are-realised-by-level-set-curves"
kind: "lemma"
title: "Regular constraint directions are realised by level-set curves"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 1
deps:
  - "def-axiom-of-choice"
  - "def-c-k-map-between-banach-spaces"
  - "def-frechet-derivative-between-banach-spaces"
  - "thm-banach-implicit-function-theorem-for-a-split-surjective-derivative"
  - "thm-chain-sum-product-and-composition-rules-for-banach-derivatives"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Thomas C. Sideris, Ordinary Differential Equations and Dynamical Systems (complete author-hosted book text)"
      url: "https://web.math.ucsb.edu/~sideris/pdffiles/BookPublishedComplete.pdf"
      locator: "Chapter 5 Section 5.4, Theorem 5.7 and its proof, printed pp. 82-85 (Banach-space implicit function theorem by the contraction argument; the level-set parametrisation used here)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a real Banach space, $U\subseteq X$ open, $G:U\to\mathbb R^m$ of class $C^1$ ([[def-c-k-map-between-banach-spaces]], [[def-frechet-derivative-between-banach-spaces]]), $u\in U$, and suppose $DG(u)$ is surjective, with $Y$, $A\subseteq\ker DG(u)$, $B\subseteq Y$ and $\varphi:A\to B$ as in [[thm-banach-implicit-function-theorem-for-a-split-surjective-derivative]]. Then for every $h\in\ker DG(u)$ there are $\varepsilon>0$ and a $C^1$ curve $c:(-\varepsilon,\varepsilon)\to X$ with $c(0)=u$, $c'(0)=h$ and $G(c(t))=G(u)$ for every $t\in(-\varepsilon,\varepsilon)$; explicitly $c(t)=u+th+\varphi(th)$.

## Facts & Assumptions

**Given:** The setting of [[thm-banach-implicit-function-theorem-for-a-split-surjective-derivative]]: a split surjective derivative $DG(u)$ at $u\in U$, and the open sets $A\subseteq\ker DG(u)$ with $0\in A$ and the $C^1$ map $\varphi:A\to B$ with $\varphi(0)=0$, $D\varphi(0)=0$ of that theorem.

[F1] [[thm-banach-implicit-function-theorem-for-a-split-surjective-derivative]]: $\ker DG(u)$ is a closed subspace of $X$, and the level set is parametrised as $\{z\in u+(A+B):G(z)=G(u)\}=\{u+a+\varphi(a):a\in A\}$ with $A$ open, $0\in A$, and $\varphi$ of class $C^1$ with $\varphi(0)=0$ and $D\varphi(0)=0$.

[F2] [[def-c-k-map-between-banach-spaces]], [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: sums and scalar multiples of $C^1$ maps are $C^1$ with the sum rule for derivatives, the derivative of a bounded linear map is the map itself, and composites of $C^1$ maps are $C^1$ with the chain rule; in particular $t\mapsto th$ and $a\mapsto u+a+\varphi(a)$ are $C^1$.

[A1] [[def-axiom-of-choice]]: the hypothesis under which the parametrisation of [F1] is available.

## Proof

**Proof technique:** direct.

**Given:** The setting of [F1] and a vector $h\in\ker DG(u)$.

1.1 Since $A$ is open and $0\in A$ there is $r>0$ with $B(0,r)\subseteq A$; if $h\ne0$, set $\varepsilon:=r/(2\|h\|)$, and if $h=0$ take $\varepsilon:=1$. For $|t|<\varepsilon$ one has $\|th\|<r$, so $th\in A$, and $c(t):=u+th+\varphi(th)$ is a well-defined element of $u+(A+B)\subseteq U$ with $G(c(t))=G(u)$ by the parametrisation identity of [F1]; moreover $c(0)=u+0+\varphi(0)=u$. [given, A1, F1, algebra]

2.1 The curve $c$ is $C^1$ on $(-\varepsilon,\varepsilon)$ and $c'(t)=h+D\varphi(th)h$ for every $t$, by the sum and chain rules applied to $t\mapsto th$ and $\varphi$ [F2]; at $t=0$ this gives $c'(0)=h+D\varphi(0)h=h$ because $D\varphi(0)=0$ [F1]. [step 1.1, F1, F2]

2.2 In particular $c$ is a $C^1$ curve on $(-\varepsilon,\varepsilon)$ with values in $X$, $c(0)=u$, and $G(c(t))=G(u)$ for every $t$ by step 1.1, which is the asserted realisation of $h$ by a level-set curve. [step 1.1]

3.1 Steps 1.1, 2.1 and 2.2 prove the claim for an arbitrary $h\in\ker DG(u)$; no convexity of the constraint was used, and the Axiom of Choice enters only through the parametrisation supplied by [F1] [A1]. [step 2.1, step 2.2, A1] ∎

