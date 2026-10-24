---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets.json
  precheck: pass
id: thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets
kind: theorem
title: "Inducing the trivial representation gives the permutation representation on $G/H$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coset, def-induced-r-linear-g-module-by-h-covariant-functions, def-trivial-regular-and-permutation-representations]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 4.3.4"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 4.8"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"

---

## Statement

Let $G$ be a finite group and let $H\le G$. Inducing the trivial complex
representation of $H$ to $G$ gives the permutation representation of $G$ on the
left coset set $G/H$.

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $H\le G$, and the trivial complex representation $\mathbf 1_H$ of $H$.

[F1] The induced module consists of the functions $f:G\to\mathbb C$ satisfying $f(gh)=h^{-1}\cdot f(g)$, with $G$ acting by $(x\cdot f)(g)=f(x^{-1}g)$ ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F2] The left cosets of $H$ are the subsets $gH$, and the permutation representation on a finite $G$-set has basis vectors indexed by that set ([[def-coset]], [[def-trivial-regular-and-permutation-representations]]).

## Proof

**Proof technique:** direct.

1.1 In the trivial representation of $H$, every $h\in H$ acts as the identity on $\mathbb C$. So the covariance condition of [F1] becomes $f(gh)=f(g)$ for all $g\in G$ and $h\in H$. Therefore $f$ is constant on each left coset $gH$. [F1, given]

2.1 Define $\Phi:\operatorname{Ind}_H^G\mathbf 1_H\longrightarrow \mathbb C^{(G/H)}$ by $\Phi(f)(gH):=f(g)$. Step 1.1 makes this well defined, and every function on $G/H$ pulls back uniquely to an $H$-covariant function on $G$, so $\Phi$ is a linear bijection. [F2, step 1.1, construct]

3.1 For $x\in G$, one has $\Phi(x\cdot f)(gH)=(x\cdot f)(g)=f(x^{-1}g)=\Phi(f)(x^{-1}gH)$, which is exactly the left permutation action of $G$ on the coset set $G/H$ from [F2]. Hence $\Phi$ is $G$-equivariant. [F1, F2, step 2.1, algebra]

4.1 The bijection of step 2.1 and the equivariance of step 3.1 identify $\operatorname{Ind}_H^G\mathbf 1_H$ with the permutation representation of $G$ on $G/H$. [step 2.1, step 3.1] ∎

## Remarks

The square below displays the equivariance in step 3.1. For $x\in G$, write
$L_xf(g)=f(x^{-1}g)$ on $\operatorname{Ind}_H^G\mathbf 1_H$ and
$P_xF(gH)=F(x^{-1}gH)$ on $\mathbb C^{(G/H)}$.

```tikzcd
\mathrm{Ind}_H^G\mathbf 1_H \arrow[r, "\Phi"] \arrow[d, "L_x"'] & \mathbb C^{(G/H)} \arrow[d, "P_x"] \\
\mathrm{Ind}_H^G\mathbf 1_H \arrow[r, "\Phi"'] & \mathbb C^{(G/H)}
```

Here $\Phi(f)(gH)=f(g)$, and its inverse is pullback along
$q:G\to G/H$, $q(g)=gH$. In particular, if $\mathbf 1_{gH}:G\to\mathbb C$
is the indicator of the subset $gH$, then $\Phi(\mathbf 1_{gH})=e_{gH}$,
where $e_{gH}$ is the delta function at the coset $gH$. Thus the left action
sends corresponding basis vectors to $\mathbf 1_{xgH}$ and $e_{xgH}$,
respectively. The square commutes because both routes send $f$, evaluated
at $gH$, to $f(x^{-1}g)$. The proof above is independent of this illustration.
