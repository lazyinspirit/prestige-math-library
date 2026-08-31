---
id: thm-mac-lane-coherence-in-the-canonical-map-form
kind: theorem
title: "Mac Lane coherence in canonical-map form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-canonical-morphism-between-parenthesised-words, thm-mac-lane-strictification, thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.2, Corollary"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Theorem 2.9.2"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

Let $u$ and $v$ be parenthesised tensor words on the same ordered letters
$x_1,\dots,x_n$. Then there exists a unique canonical natural isomorphism
$E_u\Rightarrow E_v$. Equivalently, any two canonical morphisms from $u$ to $v$
are equal.

## Facts & Assumptions

**Given:** Parenthesised tensor words $u$ and $v$ on the same ordered letters.

[L1] Canonical morphisms are built from identities, associators, unitors, inverses, tensoring with identities, and composition ([[def-canonical-morphism-between-parenthesised-words]]).

[L2] Every monoidal category is monoidally equivalent to a strict one ([[thm-mac-lane-strictification]]).

[L3] A monoidal category equivalent to a strict one satisfies uniqueness of canonical morphisms between fixed source and target ([[thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence]]).

## Proof

**Proof technique:** direct.

1.1 For a consecutive block $x_i,\dots,x_{i+m-1}$, let $r_{i,0}:=\mathbf 1$, $r_{i,1}:=x_i$, and, for $m\ge1$, let $r_{i,m+1}:=(r_{i,m}\otimes x_{i+m})$. We claim that every parenthesised tensor word $w$ whose ordered letters are exactly this block admits a canonical natural isomorphism $\kappa_w:E_w\Rightarrow E_{r_{i,m}}$. [given, construct]

2.1 The claim is proved recursively. For a word containing no letters, repeated unitors give a canonical map to $r_{i,0}=\mathbf 1$; for a one-letter word, repeated unitors give a canonical map to that actual letter $r_{i,1}=x_i$. For $w=(a\otimes b)$, suppose $a$ contains the first $p$ letters $x_i,\dots,x_{i+p-1}$ and $b$ contains the next $q$ letters $x_{i+p},\dots,x_{i+p+q-1}$. Recursion gives $\kappa_a:E_a\Rightarrow E_{r_{i,p}}$ and $\kappa_b:E_b\Rightarrow E_{r_{i+p,q}}$. Their tensor is canonical, and repeated associators and unitors give a canonical isomorphism $E_{r_{i,p}\otimes r_{i+p,q}}\Rightarrow E_{r_{i,p+q}}$. The composite is $\kappa_w$, and every step uses only the generators allowed in [L1]. [L1, step 1.1, construct]

3.1 For the given words $u$ and $v$, define $\theta_{u,v}:=\kappa_v^{-1}\circ\kappa_u:E_u\Rightarrow E_v$. This is a canonical natural isomorphism. [step 2.1, L1]

4.1 By [L2], the ambient monoidal category is equivalent to a strict one, so [L3] applies. Hence any two canonical morphisms from $u$ to $v$ are equal. Since step 3.1 produced one such morphism, it is the unique canonical natural isomorphism $E_u\Rightarrow E_v$. [L2, L3, step 3.1] ∎
