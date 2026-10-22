---
id: lem-ip-smooth-whitney-extension-on-compact-sets
kind: lemma
title: Smooth Whitney extension on compact sets
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - thm-whitney-extension-for-finite-order-euclidean-jets
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Hassler Whitney, Analytic Extensions of Differentiable Functions Defined in Closed Sets
      url: https://www.jstor.org/stable/1989708
      locator: "Theorem I (1934). The full smooth extension is derived below from the library's proved finite-order construction, not assumed from this citation."
proof_strategy: direct
---

## Statement

Let $d,N\ge1$ and let $A\subset\mathbb R^d$ be compact. For every multi-index $\alpha$ prescribe a continuous function $f_\alpha:A\to\mathbb R^N$. Define $P_a^k(x)=\sum_{|\alpha|\le k}f_\alpha(a)(x-a)^\alpha/\alpha!$. Assume the full Whitney compatibility conditions: for every $k\ge0$ and $|\alpha|\le k$,
$$D^\alpha P_a^k(b)-f_\alpha(b)=o(|a-b|^{k-|\alpha|})\quad(a,b\in A,\ |a-b|\to0),$$
uniformly in $a,b$. Then a smooth $F:\mathbb R^d\to\mathbb R^N$ exists with $D^\alpha F|_A=f_\alpha$ for all $\alpha$. The construction uses no choice axiom. For a compact parameter family of jets on the same $A$, all choices of scales can be made common, and the resulting extensions have uniformly bounded seminorms on compact sets, provided all coefficient bounds and all the Whitney remainder moduli are uniform in that family.

## Statement references

[[thm-whitney-extension-for-finite-order-euclidean-jets]]

## Facts & Assumptions

**Given:** The compact set and all-order Whitney field in the statement, or a family on that fixed set with uniform coefficient bounds and remainder moduli.

[F1] [[thm-whitney-extension-for-finite-order-euclidean-jets]] gives a choice-free $C^k$ extension of each finite compatible jet by its explicit dyadic Whitney-cube partition and lexicographically selected nearest points.


## Proof

1.1 The empty-set case has the zero extension. Otherwise use the fixed Whitney cubes and partition $\psi_Q$ constructed in [F1]: outside $A$, their side lengths satisfy $\ell(Q)\asymp\operatorname{dist}(Q,A)$, enlarged cubes have bounded overlap and comparable sizes when they meet, and $|D^\alpha\psi_Q|\le C_\alpha\ell(Q)^{-|\alpha|}$. These facts follow from the fixed maximal dyadic retention test and rescaled bump quotient in that proof, independently of the jet order. Put $\sigma(z)=\sum_Q\ell(Q)\psi_Q(z)$. This is smooth and positive off $A$, and for $t=\operatorname{dist}(z,A)$ it satisfies $c t\le\sigma(z)\le C t$ and $|D^\alpha\sigma(z)|\le C_\alpha t^{1-|\alpha|}$. Each derivative estimate follows by bounded overlap and the side-length comparison. Fix $\chi\in C^\infty(\mathbb R)$ with $\chi=1$ on $(-\infty,1]$ and $\chi=0$ on $[2,\infty)$. Then $\eta_\delta(z)=\chi(\sigma(z)/\delta)$ equals one for $t\le\delta/C$, vanishes for $t\ge2\delta/c$, and obeys $|D^\alpha\eta_\delta|\le B_\alpha t^{-|\alpha|}$ on its transition, with constants independent of $\delta$. [F1, given, construct, algebra]

2.1 For each integer $k\ge1$, take the actual extension $H_k$ produced by [F1]'s fixed cube formula for $P_a^k$. It is $C^k$ everywhere and smooth off $A$, since there it is a locally finite sum of smooth partition functions times polynomials. All these extensions are thereby specified without selecting elements of unspecified nonempty sets. Put $\Delta_k=H_{k+1}-H_k$. It is $C^k$ and all its derivatives through order $k$ vanish on $A$. Taylor's formula at a nearest point of $A$, on a fixed compact neighborhood of $A$, gives for every $|\beta|\le k$ $$|D^\beta\Delta_k(z)|=o(t^{k-|\beta|})\qquad(t=\operatorname{dist}(z,A)\downarrow0),$$ uniformly near $A$. Indeed the top derivative is uniformly continuous and zero on $A$, and the lower estimates follow by Taylor's integral remainder along the segment from the nearest point. In the parameter-family case these remainders are uniform: the finite-order cube proof bounds $D^\alpha H_k-D^\alpha P_{a_z}^k$ by a constant times the specified Whitney remainder modulus; away from $A$ on a compact set its locally finite formula bounds every derivative by the coefficient bounds. Hence the $C^k$ moduli at $A$ used here are common to the family. [F1, step 1.1, given, algebra]

3.1 The product rule and step 1.1 show that, for $|\alpha|\le k$, $D^\alpha(\eta_\delta\Delta_k)$ is bounded by a constant $B_k$ times $\max_{|\beta|\le k}t^{|\beta|-|\alpha|}|D^\beta\Delta_k|$, wherever $\eta_\delta$ is nonzero. Choose $\delta_k$ as the largest dyadic number $2^{-j}$ satisfying $\delta_k\le2^{-k}$, $\delta_k\le\delta_{k-1}/2$ when $k>1$, and the finitely many uniform inequalities $$B_k|D^\beta\Delta_k(z)|\le2^{-k}t^{k-|\beta|}\quad(0<t\le2\delta_k/c,\ |\beta|\le k).$$ The set of admissible integers $j$ is nonempty by step 2.1 and has a least element, so these scales are deterministic. Enlarge $B_k$ to include the finitely many binomial constants. Then $$|D^\alpha(\eta_{\delta_k}\Delta_k)(z)|\le2^{-k}t^{k-|\alpha|}\qquad(|\alpha|\le k).$$ Uniform moduli in step 2.1 give the same scales for the parameter family. [step 1.1, step 2.1, construct, algebra]

4.1 Define off $A$ $$F=H_1+\sum_{k\ge1}\eta_{\delta_k}(H_{k+1}-H_k),$$ and set $F(a)=f_0(a)$ on $A$. At each point off $A$ the sum is locally finite because $\delta_k\to0$, so $F$ is smooth there. Fix $K\ge1$. Sufficiently near $A$, all factors $\eta_{\delta_k}$ with $k<K$ equal one, and telescoping gives $F-H_K=\sum_{k\ge K}\eta_{\delta_k}\Delta_k$. For $|\alpha|\le K$, the single $k=K$ term is $o(t^{K-|\alpha|})$ by step 2.1 and the product rule, while the sum over $k>K$ is $O(t^{K+1-|\alpha|})$ by step 3.1 and a geometric series, taking $t<1/2$. Thus every derivative through order $K$ of this difference off $A$ is $o(t^{K-|\alpha|})$. Extend the difference by zero on $A$. These estimates make its order-$K$ derivatives continuous and zero there; for lower orders the first-order difference quotient at any $a\in A$ tends to zero since $t\le|z-a|$, so induction verifies that the continuous derivative extensions are actual derivatives. Therefore $F-H_K$ is $C^K$ with zero $K$-jet on $A$. Since $H_K$ has the prescribed $K$-jet and $K$ is arbitrary, $F$ is smooth and realizes the entire field. The same estimates are uniform for the parameter family near $A$, and local finiteness gives uniform bounds on every compact set away from $A$. This proves the uniform assertion and completes the choice-free construction. [step 2.1, step 3.1, construct, algebra] ∎
