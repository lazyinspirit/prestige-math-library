---
id: lem-sard-on-the-nonflat-critical-strata
kind: lemma
title: "Sard on the nonflat critical strata"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euclidean-inverse-function-theorem, lem-kneser-glaeser-rough-composition-on-flat-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Azagra, Ferrera and Gómez-Gil, The Morse-Sard theorem revisited, Claim 3.4, arXiv:1511.05822"
      url: "https://arxiv.org/pdf/1511.05822"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $m,n\ge 1$, let $U\subseteq\mathbb R^m$ be open, let $f:U\to\mathbb R^n$ be
$C^r$, and for $j\ge 1$ define

$$ C_j:=\{x\in U:D^\alpha f(x)=0\text{ for every multi-index }1\le |\alpha|\le j\}. $$

If $1\le j<r$, $K\subseteq C_j\setminus C_{j+1}$ is compact, and the
Morse-Sard conclusion is already known for $C^r$ maps from open subsets of
$\mathbb R^{m-1}$ to $\mathbb R^n$, then $f(K)$ is null.

## Facts & Assumptions

**Given:** An integer $n\ge 1$, a $C^r$ map $f:U\to\mathbb R^n$, an integer $1\le j<r$, and a compact set $K\subseteq C_j\setminus C_{j+1}$.

[L1] If a Euclidean map has invertible derivative at a point, it becomes a coordinate there after shrinking ([[thm-euclidean-inverse-function-theorem]]).

[L2] A $C^r$ map that is $j$-flat on a set has a $C^r$ rough-composition extension along a $C^{r-j}$ parametrization of that set ([[lem-kneser-glaeser-rough-composition-on-flat-sets]]).

## Proof
**Proof technique:** direct.

1.1 Fix $x\in K$. [L1, given, choose]
Because $x\notin C_{j+1}$, some partial derivative of order $j+1$ of some component of $f$ is nonzero at $x$. After reordering coordinates and components, choose a multi-index $\alpha$ with $|\alpha|=j$ and a component $f^\mu$ such that, for $$ g:=D^\alpha f^\mu, $$ one has $\partial g/\partial x^1(x)\neq 0$. Since $g$ is $C^{r-j}$, [L1] applied to $$ \Phi_x(y):=\bigl(g(y),y^2,\ldots,y^m\bigr) $$ gives a neighbourhood $W_x$ of $x$ and a $C^{r-j}$ diffeomorphism from $W_x$ onto an open set $I_x\times\Omega_x\subseteq\mathbb R\times\mathbb R^{m-1}$. [L1, given, choose]

2.1 Every point of $K\cap W_x$ lies in $C_j$, so $g$ vanishes there by definition of $C_j$. Hence $$ \Phi_x(K\cap W_x)\subseteq \{0\}\times\Omega_x. $$ If $m=1$, then $\Omega_x\subseteq\mathbb R^0$ has at most one point. Thus $K\cap W_x$ has at most one point, and its image is null in $\mathbb R^n$. Assume $m\ge2$. Define the $C^{r-j}$ graph parametrization $$ b_x:\Omega_x\to U,\qquad b_x(u):=\Phi_x^{-1}(0,u), $$ and the relatively closed set $A_x^*:=b_x^{-1}(C_j\cap W_x)$ in $\Omega_x$. The map $f$ is $j$-flat on $C_j$, and $b_x(A_x^*)\subseteq C_j$. By [L2] there is a $C^r$ map $H_x:\Omega_x\to\mathbb R^n$ agreeing with $f\circ b_x$ on $A_x^*$ and satisfying $DH_x=0$ there. Thus every $u\in b_x^{-1}(K\cap W_x)$ is a critical point of the **$C^r$** map $H_x$, and $$ f(K\cap W_x)=H_x\bigl(b_x^{-1}(K\cap W_x)\bigr)\subseteq H_x(\operatorname{Crit}H_x). $$ The induction hypothesis, at the unchanged differentiability order $r$, gives nullity of this image. [L2, step 1.1, algebra]

3.1 Finitely many neighbourhoods $W_x$ cover the compact set $K$, so $f(K)$ is a finite union of null sets and therefore null. [step 2.1, given, choose]
∎
