---
id: cor-holomorphic-functions-on-a-domain-form-an-integral-domain
kind: corollary
title: "The holomorphic functions on a domain in $\\mathbb{C}^m$ have no zero divisors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-identity-theorem-in-several-complex-variables, prop-algebra-of-holomorphic-functions-in-several-variables, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, def-zero-divisor-and-integral-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, Def. 1.2.9 and Ex. 1.2.19"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m \ge 1$ and let $U \subseteq \mathbb{C}^m$ be a nonempty connected open
set. Under pointwise addition and multiplication, the holomorphic functions
$U \to \mathbb{C}$ form an integral domain: if $f,g:U\to\mathbb C$ are
holomorphic and $fg\equiv0$, then $f\equiv0$ or $g\equiv0$.

## Facts & Assumptions

**Given:** A nonempty connected open set $U \subseteq \mathbb{C}^m$ and holomorphic functions $f,g : U \to \mathbb{C}$.

[L1] A holomorphic function vanishing on a nonempty open subset of a connected open set in $\mathbb{C}^m$ vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

[L2] Sums, products and nonvanishing quotients of holomorphic functions are holomorphic ([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[L3] A holomorphic function of several variables is continuous ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[L4] An integral domain is a commutative ring with $1\ne0$ and no zero divisors ([[def-zero-divisor-and-integral-domain]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the holomorphic functions on $U$ are closed under pointwise addition and multiplication, and pointwise operations are commutative and associative because they are so in $\mathbb{C}$; the constant functions $0$ and $1$ are holomorphic, and $1\ne0$, so this is a nonzero commutative ring. [given, L2]

1.2 Suppose $fg\equiv0$ and $f\not\equiv0$. Since $f$ is continuous by [L3], the set $V:=\{z\in U:f(z)\ne0\}$ is open in $U$; it is nonempty because $f$ is not identically zero; and for every $z\in V$ the equality $f(z)g(z)=0$ in $\mathbb{C}$ forces $g(z)=0$, so $g$ vanishes on the nonempty open set $V$. [given, L3]

2.1 Apply [L1] to $g$ and the open set $V$: then $g\equiv0$ on $U$. So $fg\equiv0$ implies $f\equiv0$ or $g\equiv0$, and with step 1.1 this is exactly the zero-divisor clause of [L4]; therefore the ring of holomorphic functions on $U$ is an integral domain. [step 1.1, step 1.2, L1, L4] ∎

## Remarks

- **Connectedness matters.** On a disconnected open set, a function may vanish on one component and not on another, so the product of two nonzero holomorphic functions can be zero. The corollary is therefore genuinely about domains, not arbitrary open sets.
