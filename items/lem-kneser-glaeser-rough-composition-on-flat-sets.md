---
id: lem-kneser-glaeser-rough-composition-on-flat-sets
kind: lemma
title: Rough composition on a flat closed set
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-whitney-extension-for-finite-order-euclidean-jets, thm-multivariable-taylor-formula-with-lagrange-remainder]
proof_strategy: direct
sources:
  references:
    - title: "Azagra, Ferrera and Gómez-Gil, The Morse-Sard theorem revisited, Theorem 2.1, arXiv:1511.05822"
      url: "https://arxiv.org/pdf/1511.05822"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $0\le s<r$ be integers, $V\subseteq\mathbb R^m$ and
$W\subseteq\mathbb R^d$ open, $A\subseteq V$, and $A^*\subseteq W$
closed relative to $W$. Let $f:V\to\mathbb R^n$ be $C^r$ with
$D^jf=0$ on $A$ for $1\le j\le s$, and let $g:W\to V$ be
$C^{r-s}$ with $g(A^*)\subseteq A$. Then there is a $C^r$ map
$H:W\to\mathbb R^n$ such that $H=f\circ g$ on $A^*$ and
$D^jH=0$ on $A^*$ for $1\le j\le s$.

## Facts & Assumptions

**Given:** The integer orders, maps, and flat sets in the statement.

[F1] Compatible finite-order polynomial jets on a closed Euclidean set admit a $C^r$ extension ([[thm-whitney-extension-for-finite-order-euclidean-jets]]).

[F2] Taylor polynomials of $C^r$ maps and their derivatives have uniform little-$o$ remainders on compact subsets ([[thm-multivariable-taylor-formula-with-lagrange-remainder]]).

## Proof

**Proof technique:** construct the formal composition jets and verify Whitney compatibility by flatness.

1.1 Put $\theta=r-s\ge1$. Work first on a compact $K\subseteq A^*$ contained in a relatively compact ball of $W$. For $x\in K$ let $F_x$ be the order-$r$ Taylor polynomial of $f$ at $g(x)$ and $G_x$ the order-$\theta$ Taylor polynomial of $g$ at $x$. Define $P_x$ to be the degree-at-most-$r$ Taylor polynomial at $x$ of the polynomial composition $F_x\circ G_x$. Since $G_x(x)=g(x)$ and the derivatives of $f$ of orders $1,\ldots,s$ vanish at $g(x)\in A$, $$P_x(x)=f(g(x)),\qquad D^jP_x(x)=0\quad(1\le j\le s).$$ Although $g$ has only $\theta$ derivatives, $P_x$ has a well-defined order-$r$ jet: every nonconstant term uses at least $s+1$ factors from $G_x-g(x)$, so a coefficient of degree at most $r$ cannot use a derivative of $g$ above order $r-s=\theta$. [given, construct, algebra]

2.1 We verify the exact Whitney condition in [F1] using only function-value Taylor estimates. Uniformly for $x$ in a compact part of $A^*$ and small $h$, [F2] gives $g(x+h)-G_x(x+h)=o(|h|^\theta)$ and $G_x(x+h)-g(x)=O(|h|)$. Since $Df$ and its first $s-1$ derivatives vanish at $g(x)$, [F2] gives $|Df(v)|=O(|h|^s)$ on the segment joining $g(x+h)$ and $G_x(x+h)$. The mean-value integral therefore gives $$f(g(x+h))-f(G_x(x+h))=o(|h|^{s+\theta})=o(|h|^r).$$ Taylor expansion of $f$ at $g(x)$ gives $f(G_x(x+h))-F_x(G_x(x+h))=o(|h|^r)$, and truncating the polynomial composition to degree $r$ costs $O(|h|^{r+1})$. Consequently $$f(g(x+h))-P_x(x+h)=o(|h|^r)$$ uniformly on compact parts of $A^*$. The same estimate holds when $s=0$: then $Df$ is merely bounded and $\theta=r$. [F2, step 1.1, algebra]

3.1 Take $x,y\in K$, $d=|x-y|$, and let $z$ range over the ball $B(y,d)$. Then $|z-x|\le2d$ and $|z-y|\le d$, so step 2.1 gives $|P_x(z)-P_y(z)|=o(d^r)$ uniformly throughout that ball. The difference is a polynomial of degree at most $r$. Rescale $z=y+dw$: on the finite-dimensional space of degree-$r$ polynomials, each coefficient functional is bounded by a constant times the supremum on the unit ball. One can see this directly by evaluating on a fixed finite tensor-product grid of distinct points and inverting its fixed Vandermonde matrix. Thus for every multi-index $|\alpha|\le r$, $$D^\alpha P_x(y)-D^\alpha P_y(y) =o(d^{r-|\alpha|}).$$ This is the compatibility hypothesis of [F1], locally uniformly. [step 1.1, step 2.1, algebra]

4.1 To pass from compact $K$ to relatively closed $A^*$, choose a compact exhaustion $K_j\subset\operatorname{int}K_{j+1}$ of $W$, namely $K_j=\{x:|x|\le j,\ \operatorname{dist}(x,\mathbb R^d\setminus W)\ge1/j\}$ (with distance to the empty set interpreted as infinite). Choose smooth bumps $b_j$ supported in $\operatorname{int}K_{j+1}$, equal to one on $K_j$, by convolving distance cutoffs in the positive gap between $K_j$ and $\mathbb R^d\setminus\operatorname{int}K_{j+1}$. Set $\chi_j=1-\prod_{i\le j}(1-b_i)$, so $\chi_j$ is supported in $\operatorname{int}K_{j+1}$, equals one on $K_j$, and $0\le\chi_j\le\chi_{j+1}\le1$. Put $\rho_1=\chi_1$, $\rho_j=\chi_j-\chi_{j-1}$ for $j>1$. The nonnegative $\rho_j$ form a locally finite smooth partition of unity on $W$, and $\operatorname{supp}\rho_j\subseteq K_{j+1}$. Apply [F1] on the closed compact set $A^*\cap K_{j+1}$ to obtain an extension $H_j$ of its jets. The locally finite sum $H=\sum_j\rho_jH_j$ is $C^r$ on $W$. At any $x\in A^*$ with $\rho_j(x)\ne0$, the full order-$r$ jet of $H_j$ is $P_x$. Leibniz's rule and $\sum_j\rho_j=1$ show that the full jet of $H$ at $x$ is also $P_x$. Step 1.1 therefore gives $H=f\circ g$ and $D^jH=0$ for $1\le j\le s$ on $A^*$. [F1, step 1.1, step 3.1, algebra] ∎
