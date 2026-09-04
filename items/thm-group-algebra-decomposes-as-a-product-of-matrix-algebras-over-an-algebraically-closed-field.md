---
id: thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field
kind: theorem
title: "If $k$ is algebraically closed and $\\operatorname{char} k \\nmid |G|$, then $k[G]\\cong\\prod_{i=1}^r M_{n_i}(k)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order, thm-wedderburn-artin-theorem, cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, thm-simple-modules-over-semisimple-rings, cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity, thm-group-actions-and-group-ring-modules-correspond]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 2.1.3"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Proposition 2.16"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $k$ be an algebraically closed field with
$\operatorname{char} k \nmid |G|$. Then there are positive integers
$n_1,\ldots,n_r$ such that

$$ k[G]\cong\prod_{i=1}^r M_{n_i}(k) $$

as $k$-algebras.

## Facts & Assumptions

**Given:** A finite group $G$ and an algebraically closed field $k$ with $\operatorname{char} k \nmid |G|$.

[L1] Under the characteristic hypothesis, the group algebra $k[G]$ is a semisimple ring ([[cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order]]).

[L2] A nonzero semisimple ring is a finite product of matrix rings over division rings ([[thm-wedderburn-artin-theorem]]).

[L3] For a product $\prod_{i=1}^r M_{n_i}(D_i)$ with $r\ge1$, the simple left modules are exactly the factor column modules $D_i^{n_i}$, one isomorphism class for each factor ([[thm-simple-modules-over-semisimple-rings]]).

[L4] Under the dictionary, irreducible representations are exactly simple left $k[G]$-modules ([[cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity]]).

[L5] Under the same dictionary, $G$-equivariant maps are exactly $k[G]$-module homomorphisms ([[thm-group-actions-and-group-ring-modules-correspond]]).

[L6] Over an algebraically closed field, every endomorphism of an irreducible representation is scalar ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the ring $k[G]$ is semisimple. It is also nonzero because the basis element $[e]$ is its identity, so [L2] gives $$k[G]\cong\prod_{i=1}^r M_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. [L1, L2, given]

2.1 For each factor, let $S_i$ be the simple module supplied by [L3]; under the ring isomorphism of step 1.1 it becomes a simple left $k[G]$-module, and then [L4] turns it into an irreducible representation of $G$ over $k$. By [L5] and [L6], every $k[G]$-module endomorphism of $S_i$ is scalar multiplication by an element of $k$. [L3, L4, L5, L6, step 1.1, given, algebra]

3.1 Identify $S_i$ with the column module $D_i^{n_i}$. If $f:S_i \to S_i$ is $M_{n_i}(D_i)$-linear, write $e_1,\ldots,e_{n_i}$ for the standard column basis and let $d \in D_i$ be the first entry of $f(e_1)$. Since the matrix units $E_{aa}$ kill every coordinate except the $a$-th and $E_{a1}e_1=e_a$, linearity forces $f(e_a)=e_a d$ for every $a$. Hence $f(x)=xd$ for every column $x$, and composition corresponds to multiplication in the opposite order. So $\operatorname{End}_{k[G]}(S_i)\cong D_i^{\mathrm{op}}$. Step 2.1 therefore gives $D_i^{\mathrm{op}}\cong k$, hence $D_i\cong k$ because a field is canonically isomorphic to its opposite ring. Replacing each $D_i$ in step 1.1 by $k$ yields the claimed decomposition. [step 1.1, step 2.1, L3, given, algebra] ∎
