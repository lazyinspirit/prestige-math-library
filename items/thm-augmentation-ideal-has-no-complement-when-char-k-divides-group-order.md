---
id: thm-augmentation-ideal-has-no-complement-when-char-k-divides-group-order
kind: theorem
title: "If $\\operatorname{char} k \\mid |G|$, the augmentation ideal of $k[G]$ has no $k[G]$-module complement in the regular representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-augmentation-map-and-augmentation-ideal-of-a-group-ring, def-trivial-regular-and-permutation-representations]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 1.1.7"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Proposition 3.2"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $k$ be a field with
$\operatorname{char} k \mid |G|$. If $I_G=\ker \varepsilon$ is the augmentation
ideal of $k[G]$, then there is no left $k[G]$-submodule $J$ with

$$k[G]=I_G\oplus J.$$

## Facts & Assumptions

**Given:** A finite group $G$, a field $k$ with $\operatorname{char} k \mid |G|$, the augmentation map $\varepsilon:k[G] \to k$, and the augmentation ideal $I_G=\ker \varepsilon$.

[L1] The augmentation map satisfies $\varepsilon([g])=1_k$ for every $g \in G$, is a ring homomorphism, and has kernel $I_G$ ([[def-augmentation-map-and-augmentation-ideal-of-a-group-ring]]).

[L2] In the regular representation, $g \cdot x=[g]x$ for $g \in G$ and $x \in k[G]$ ([[def-trivial-regular-and-permutation-representations]]).

[A1] Because $\operatorname{char} k \mid |G|$, the scalar $|G|\cdot 1_k$ is $0$ in $k$.

## Proof

**Proof technique:** contradiction.

1.1 Assume, for contradiction, that $k[G]=I_G\oplus J$ for some left $k[G]$-submodule $J$. Since $\varepsilon([e])=1$ by [L1], one has $[e] \notin I_G$, so $J \ne 0$. The restriction $\varepsilon|_J$ is injective because $\ker(\varepsilon|_J)=J \cap I_G=0$. It is also nonzero, for otherwise $J \subseteq I_G$. Choose $x \in J$ with $\varepsilon(x) \ne 0$, and replace $x$ by $\varepsilon(x)^{-1}x$ so that $\varepsilon(x)=1$. [L1, given, assume-contra, choose, algebra]

2.1 For each $g \in G$, the element $gx=[g]x$ lies in $J$ because $J$ is a $k[G]$-submodule by [L2]. Also $$\varepsilon(gx)=\varepsilon([g])\varepsilon(x)=1 \cdot 1=1$$ by [L1], so $\varepsilon(gx-x)=0$ and therefore $gx-x \in I_G$. Since both $gx$ and $x$ lie in $J$, one also has $gx-x \in J$. Thus $gx-x \in I_G \cap J=0$, so $gx=x$ for every $g \in G$. [step 1.1, L1, L2, given, algebra]

3.1 Write $$x=\sum_{h \in G} a_h[h].$$ For any $g \in G$, step 2.1 gives $$\sum_{h \in G} a_h[h]=x=gx=\sum_{h \in G} a_h[gh]=\sum_{h \in G} a_{g^{-1}h}[h].$$ Comparing coefficients in the basis of $k[G]$ shows $a_h=a_{g^{-1}h}$ for all $g,h$, so all coefficients are equal to one scalar $a \in k$. Hence $$1=\varepsilon(x)=\sum_{h \in G} a=|G|a=0$$ by [L1] and [A1], a contradiction. Therefore no such complement $J$ exists. [step 2.1, L1, A1, given, discharge-contradiction] ∎
