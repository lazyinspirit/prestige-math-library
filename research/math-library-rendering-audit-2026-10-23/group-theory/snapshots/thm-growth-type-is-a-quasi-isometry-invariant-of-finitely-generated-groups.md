---
id: thm-growth-type-is-a-quasi-isometry-invariant-of-finitely-generated-groups
kind: theorem
title: "Growth type is a quasi-isometry invariant of finitely generated groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coarsely-dense-subset-and-quasi-isometry, def-growth-comparison-and-growth-type, def-growth-function-of-a-finitely-generated-group, prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz, prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite, thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Statement

If finitely generated groups $G$ and $H$ are quasi-isometric, then they have
the same growth type.

## Facts & Assumptions

**Given:** Finitely generated groups $G$ and $H$, finite generating sets $S$ and $T$, and a quasi-isometry $f : (G,d_S) \to (H,d_T)$.

[L1] A quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L2] A coarse Lipschitz map between finitely generated groups with word metrics is Lipschitz ([[prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz]]).

[L3] Word-metric balls are finite for finite generating sets ([[prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite]]).

[L4] The word metric is left invariant, so left translation by any group element is an isometry ([[thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]]).

[L5] The relation $\simeq$ is the growth-type equivalence relation ([[def-growth-comparison-and-growth-type]], [[def-growth-function-of-a-finitely-generated-group]]).

## Proof

**Proof technique:** direct.

1.1 By composing $f$ with left translation by $f(e)^{-1}$ in $H$, which is an isometry by [L4], we may assume $f(e)=e$ without changing any fiber cardinalities or quasi-isometry constants up to harmless enlargement. [L1, L4]

1.2 By [L1], choose a coarse Lipschitz quasi-inverse $q : H \to G$ and a real $c \ge 0$ with $d_S(q(f(g)),g) \le c$ for all $g \in G$. By [L2], enlarge constants so that both $f$ and $q$ are Lipschitz, say $d_T(f(g),f(h)) \le L\, d_S(g,h)$ and $d_S(q(u),q(v)) \le L'\, d_T(u,v)$. [L1, L2, choose]

2.1 Let $A := \lceil L \rceil$, $B := \lceil L' \rceil$, $m_G := \beta_{G,S}(\lceil 2c \rceil)$, and $m_H := \beta_{H,T}(\lceil 2c \rceil)$. Then $A,B,m_G,m_H$ are natural numbers, and the Lipschitz bound on $f$ gives $f(B_S(e,n)) \subseteq B_T(e,An)$ for every $n$. If $f(g_1)=f(g_2)$, then step 1.2 gives $d_S(g_1,g_2) \le 2c \le \lceil 2c \rceil$, so every fiber of $f$ has size at most $m_G$, finite by [L3]. Therefore $\beta_{G,S}(n) \le m_G\, \beta_{H,T}(An)$. [L3, step 1.2, algebra]

2.2 Applying the same argument to the quasi-inverse $q$ gives $\beta_{H,T}(n) \le m_H\, \beta_{G,S}(Bn)$ for all $n$. [step 1.2, algebra]

3.1 Let $K$ be a natural number with $K \ge A,B,m_G,m_H$. Growth functions are nondecreasing and every radius-$n$ word-metric ball contains the identity, so step 2.1 gives $$\beta_{G,S}(n) \le m_G\, \beta_{H,T}(An) \le K\, \beta_{H,T}(Kn+K)+K,$$ and step 2.2 similarly gives $$\beta_{H,T}(n) \le K\, \beta_{G,S}(Kn+K)+K.$$ These are the two comparison directions of [L5]. Hence $\beta_{G,S} \simeq \beta_{H,T}$, so $G$ and $H$ have the same growth type. [L5, step 2.1, step 2.2] ∎
