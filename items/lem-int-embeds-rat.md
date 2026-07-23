---
id: lem-int-embeds-rat
kind: lemma
title: "The integers embed in the rationals"
status: draft
origin: session
deps: [def-rat-operations, def-rat-order, thm-int-comm-ring]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication,
and order. Composing with [[lem-nat-embeds-int]] embeds $\mathbb{N}$ in
$\mathbb{Q}$; we write $k$ for $j(k)$ throughout.

## Facts & Assumptions

**Given:** The map $j : \mathbb{Z} \to \mathbb{Q}$, $j(k) = [(k,1)]$.

[L1] Ring arithmetic in $\mathbb{Z}$ ([[thm-int-comm-ring]]).

[L2] The orders on $\mathbb{Z}$ and $\mathbb{Q}$ ([[def-rat-order]]).

## Proof

**Proof technique:** direct.

1.1 Injectivity: $(k,1) \sim (m,1)$ means $k \cdot 1 = m \cdot 1$, i.e. $k = m$. [L1]

1.2 Addition: $j(k) + j(m) = [(k \cdot 1 + m \cdot 1,\; 1)] = j(k+m)$. [L1]

1.3 Multiplication: $j(k)\,j(m) = [(km,\, 1)] = j(km)$. [L1]

1.4 Order: denominators are $1 > 0$, so $j(k) \le j(m)$ reads $k \cdot 1 \le m \cdot 1$, i.e. $k \le m$. [L1, L2]

2.1 $j$ embeds $\mathbb{Z}$ into $\mathbb{Q}$, preserving arithmetic and order. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
