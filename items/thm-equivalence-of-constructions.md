---
id: thm-equivalence-of-constructions
kind: theorem
title: "Equivalence of the Cauchy and Dedekind constructions of $\\mathbb{R}$"
status: published
origin: session
deps: [thm-uniqueness-complete-ordered-field, cor-cauchy-reals-lub-complete, thm-reals-ordered-field, thm-dedekind-complete, thm-reals-dedekind-ordered-field, def-complete-ordered-field]
aliases: []
landmark: true
short: "Cauchy ≅ Dedekind"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 30 (Epilogue: uniqueness of ℝ)"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
pipeline_run: null
---

## Statement

The Cauchy-sequence reals $\mathbb{R}_C$ and the Dedekind-cut reals
$\mathbb{R}_D$ are **isomorphic as ordered fields via a unique isomorphism**
$\varphi : \mathbb{R}_C \to \mathbb{R}_D$ that preserves all arithmetic ($+$,
$\cdot$, $0$, $1$, inverses) and the order ($<$, hence $\le$, $|\cdot|$, and
suprema), and restricts to the identity on the common rationals $\mathbb{Q}$.
This is the precise sense in which the two constructions build the same
$\mathbb{R}$.

## Facts & Assumptions

**Given:** The Cauchy-sequence reals $\mathbb{R}_C$ and the Dedekind-cut reals $\mathbb{R}_D$.

[L1] $\mathbb{R}_C$ is a totally ordered field ([[thm-reals-ordered-field]]).

[L2] $\mathbb{R}_C$ has the least-upper-bound property, hence is complete ([[cor-cauchy-reals-lub-complete]], [[def-complete-ordered-field]]).

[L3] $\mathbb{R}_D$ is a totally ordered field ([[thm-reals-dedekind-ordered-field]]).

[L4] $\mathbb{R}_D$ has the least-upper-bound property, hence is complete ([[thm-dedekind-complete]], [[def-complete-ordered-field]]).

[L5] Any two complete ordered fields are isomorphic via a unique ordered-field isomorphism, which fixes $\mathbb{Q}$ ([[thm-uniqueness-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{R}_C$ is a complete ordered field: a totally ordered field ([L1]) with the least-upper-bound property ([L2]). [L1, L2]

1.2 $\mathbb{R}_D$ is a complete ordered field: a totally ordered field ([L3]) with the least-upper-bound property ([L4]). [L3, L4]

2.1 By [L5] applied to $F = \mathbb{R}_C$ and $G = \mathbb{R}_D$ there is a unique ordered-field isomorphism $\varphi : \mathbb{R}_C \to \mathbb{R}_D$, and it fixes the common rationals $\mathbb{Q}$. [step 1.1, step 1.2, L5]

3.1 As a field isomorphism $\varphi$ preserves $+$, $\cdot$, $0$, $1$ and inverses; as an ordered-field isomorphism it satisfies $x < y \iff \varphi x < \varphi y$, hence preserves $\le$ and $|\cdot|$; and it preserves suprema, in the sense that for any nonempty $S \subseteq \mathbb{R}_C$ bounded above with $s = \sup S$, its image $\varphi[S] = \{\varphi(t) : t \in S\}$ has $\varphi(s) = \sup \varphi[S]$, since $\varphi(s)$ is an upper bound of $\varphi[S]$ and, $\varphi^{-1}$ being order-preserving, every upper bound of $\varphi[S]$ is $\ge \varphi(s)$. [step 2.1, L5]

4.1 Therefore $\mathbb{R}_C$ and $\mathbb{R}_D$ are the same complete ordered field presented two ways, joined by the unique isomorphism $\varphi$ that restricts to the identity on $\mathbb{Q}$ and preserves all arithmetic and order: the Cauchy and Dedekind constructions give the same $\mathbb{R}$. [step 2.1, step 3.1, L5] ∎
