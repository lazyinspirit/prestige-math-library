---
id: cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero
kind: corollary
title: "Over an algebraically closed field of characteristic $0$, every element of finite order acts diagonalisably in a finite-dimensional representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, def-splitting-field-for-a-finite-group, cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 2.1.7"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Corollary 1.18"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $k$ be an algebraically closed field of characteristic $0$, let
$\rho:G \to \operatorname{GL}(V)$ be a finite-dimensional representation of a
group $G$ over $k$, and let $g \in G$ have finite order. Then $\rho(g)$ is
diagonalisable over $k$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ of characteristic $0$, a finite-dimensional representation $\rho:G \to \operatorname{GL}(V)$ over $k$, and an element $g \in G$ of finite order.

[L1] If a finite group has order invertible in $k$, then every finite-dimensional representation over $k$ is completely reducible ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[L2] A splitting field for a finite group is one over which every irreducible representation has scalar endomorphism ring ([[def-splitting-field-for-a-finite-group]]).

[L3] Over an algebraically closed field, every endomorphism of an irreducible representation is scalar ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

[L4] Every irreducible representation of a finite abelian group over a splitting field is one-dimensional ([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]]).

## Proof

**Proof technique:** direct.

1.1 Let $m=\operatorname{ord}(g)$ and let $H=\langle g\rangle$, so $H$ is a finite cyclic group of order $m$. Restrict $\rho$ to $H$. Since $\operatorname{char} k=0$, the integer $m$ is nonzero in $k$, so [L1] makes the restricted representation completely reducible. Also [L3] and [L2] show that $k$ is a splitting field for the finite group $H$, and $H$ is abelian. Therefore [L4] makes every irreducible $H$-summand one-dimensional. [L1, L2, L3, L4, given, algebra]

2.1 Choose a basis of each one-dimensional $H$-summand and concatenate these bases. Each summand is invariant under $\rho(g)$ and one-dimensional, so $\rho(g)$ acts on it by a scalar. Hence the matrix of $\rho(g)$ in the concatenated basis is diagonal. Therefore $\rho(g)$ is diagonalisable over $k$. [step 1.1, given, choose] ∎
