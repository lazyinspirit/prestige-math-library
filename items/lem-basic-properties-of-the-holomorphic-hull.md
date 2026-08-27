---
id: lem-basic-properties-of-the-holomorphic-hull
kind: lemma
title: "Basic properties of the holomorphic hull"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holomorphically-convex-hull-and-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.6"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.3"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ be a domain.

1. For every $E\subseteq\Omega$, one has $E\subseteq\widehat E_\Omega$.
2. If $K\subseteq\Omega$ is compact, then $\widehat K_\Omega$ is closed in
   $\Omega$ and is bounded in each coordinate.
3. For every $E\subseteq\Omega$, one has
   $$\widehat{\widehat E_\Omega}_\Omega=\widehat E_\Omega.$$

## Facts & Assumptions

**Given:** A domain $\Omega\subseteq\mathbb C^m$, a subset $E\subseteq\Omega$,
and a compact set $K\subseteq\Omega$.

[L1] The holomorphic hull is defined by the pointwise inequalities
$|f(a)|\le\sup_E|f|$ for every holomorphic $f$ on $\Omega$
([[def-holomorphically-convex-hull-and-domain]]).

## Proof

**Proof technique:** direct.

1.1 If $a\in E$ and $f\in\mathcal O(\Omega)$, then $|f(a)|\le\sup_E|f|$ by definition of the supremum. Hence [L1] gives $a\in\widehat E_\Omega$, so $E\subseteq\widehat E_\Omega$. [L1, given]

1.2 For compact $K$, [L1] gives $$\widehat K_\Omega=\bigcap_{f\in\mathcal O(\Omega)}\{a\in\Omega: |f(a)|\le\sup_K|f|\}.$$ Each set in the intersection is closed in $\Omega$ because $f$ is continuous, so $\widehat K_\Omega$ is closed in $\Omega$. The coordinate functions $z\mapsto z_j$ are holomorphic on $\Omega$, so [L1] also gives $|a_j|\le\sup_{z\in K}|z_j|$ for every $a\in\widehat K_\Omega$ and every coordinate $j$. Thus $\widehat K_\Omega$ is coordinate-bounded. [L1, given]

2.1 Step 1.1 applied to $E$ gives $\widehat E_\Omega\subseteq\widehat{\widehat E_\Omega}_\Omega$. For the reverse inclusion, let $a\in\widehat{\widehat E_\Omega}_\Omega$. Then [L1] gives $|f(a)|\le\sup_{\widehat E_\Omega}|f|$ for every $f\in\mathcal O(\Omega)$, while the definition of $\widehat E_\Omega$ itself gives $\sup_{\widehat E_\Omega}|f|\le\sup_E|f|$. So $|f(a)|\le\sup_E|f|$ for every holomorphic $f$, and another use of [L1] shows $a\in\widehat E_\Omega$. [L1, step 1.1, algebra] ∎
