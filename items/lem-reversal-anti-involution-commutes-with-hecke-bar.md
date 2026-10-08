---
id: lem-reversal-anti-involution-commutes-with-hecke-bar
kind: lemma
title: Reversal anti-involution commutes with the Hecke bar
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-normalized-type-a-hecke-algebra-and-its-bar-involution, lem-the-hecke-bar-involution-is-well-defined]
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules, arXiv:1212.0791 (45 pp.) — §3.2 (printed pp. 15–16): the Hecke algebra in the normalization $H_xH_s=H_{xs}$ or $(v^{-1}-v)H_x+H_{xs}$, the bar involution $\\overline{H_x}=H_{x^{-1}}^{-1}$, the Kazhdan–Lusztig basis $\\{\\underline H_x\\}$ characterized by bar-invariance and $\\underline H_x\\in H_x+\\sum_{y<x}v\\mathbb Z[v]H_y$, the example $\\underline H_s=H_s+vH_{\\mathrm{id}}$, and Remark 3.2: $v=q^{-1/2}$, $H_x=v^{\\ell(x)}T_x$, $\\underline H_x=C'_x$, $h_{y,x}=v^{\\ell(x)-\\ell(y)}P_{y,x}(v^{-2})$"
      url: "https://arxiv.org/pdf/1212.0791"
      locator: "§3.2, printed pp. 15–16: the anti-involution fixing v and sending H_x to H_{x^{-1}}, alongside the bar formula; complete section read."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Facts & Assumptions

**Given:** The presented normalized Hecke algebra $H_v(n)$ and its bar involution $\iota$ from [[def-normalized-type-a-hecke-algebra-and-its-bar-involution]] and [[lem-the-hecke-bar-involution-is-well-defined]].

[F1] The algebra is presented by the quadratic, adjacent braid, and distant commutation relations, with standard basis $H_w$ defined from reduced expressions ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]).

[F2] The bar is a semilinear ring involution with $\overline v=v^{-1}$ and $\overline{H_{s_i}}=H_{s_i}^{-1}=H_{s_i}-(v^{-1}-v)$ ([[lem-the-hecke-bar-involution-is-well-defined]]).

## Statement

The presented normalized Hecke algebra $H_v(n)$ has an involutive $A$-linear anti-automorphism $\flat$ defined by $\flat(H_{s_i})=H_{s_i}$. It satisfies $\flat(H_w)=H_{w^{-1}}$ for every $w\in S_n$ and commutes with the bar involution: $\flat\circ\iota=\iota\circ\flat$.

## Proof

**Proof technique:** define reversal on the presentation and compare the two compositions on generators.

1.1 **The reversal map descends.** On the free associative $A$-algebra, fix every coefficient and generator and reverse each word; this defines an $A$-linear anti-homomorphism. It sends each quadratic relator to itself, each adjacent braid relator to itself because both sides are palindromes, and each distant commutation relator to its negative. Hence it preserves the defining ideal and descends to an $A$-linear anti-homomorphism $\flat$ of $H_v(n)$. [F1, algebra]

2.1 **It is an involution with the required formula.** Reversing twice fixes every word, so $\flat^2=\mathrm{id}$ and $\flat$ is an anti-automorphism. If $w=s_{i_1}\cdots s_{i_k}$ is reduced, then $w^{-1}=s_{i_k}\cdots s_{i_1}$ is reduced and $\flat(H_w)=H_{s_{i_k}}\cdots H_{s_{i_1}}=H_{w^{-1}}$. The empty word gives $\flat(H_{\mathrm{id}})=H_{\mathrm{id}}$. [F1, step 1.1, algebra]

3.1 **It commutes with bar.** Put $\lambda=v^{-1}-v$. On coefficients, $\flat(\overline v)=\flat(v^{-1})=v^{-1}=\overline{\flat(v)}$. On a generator, $\flat(\overline{H_{s_i}})=\flat(H_{s_i}-\lambda)=H_{s_i}-\lambda=H_{s_i}^{-1}=\overline{\flat(H_{s_i})}$. Both composites of $\flat$ and bar are semilinear anti-homomorphisms, so agreement on coefficients and generators from the presentation proves that $\flat$ and bar commute on all of $H_v(n)$. No choice principle is used. [F1, F2, step 1.1, step 2.1, algebra] ∎
