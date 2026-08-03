---
id: thm-order-of-element-in-direct-product
kind: theorem
title: "If $g$ and $h$ have finite orders $m$ and $n$, then $\\iota(\\operatorname{ord}(g,h))=\\operatorname{lcm}(\\iota(m),\\iota(n))$ in $G\\times H$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-external-direct-product-is-a-group, def-order-in-a-group, lem-order-characterisation, def-lcm, thm-gcd-lcm-product, lem-nat-embeds-int, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, direct products"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Statement

Let $\iota:\mathbb N\to\mathbb Z$ be the canonical embedding. If $g\in G$
and $h\in H$ have finite orders $m,n\ge1$, then in the external direct product

$$\iota(\operatorname{ord}(g,h))=\operatorname{lcm}(\iota(m),\iota(n)).$$

## Facts & Assumptions

**Given:** Groups $G,H$, elements $g\in G,h\in H$, and positive natural
numbers $m,n$ with $\operatorname{ord}(g)=m$ and $\operatorname{ord}(h)=n$.

[L1] The direct product is a group with componentwise multiplication
([[thm-external-direct-product-is-a-group]]).

[L2] If an element has finite order $r$, then for every natural $k$ its $k$th
power is the identity exactly when $\iota(r)\mid\iota(k)$; equivalently, $r$ is
the least positive natural exponent taking it to the identity
([[def-order-in-a-group]], [[lem-order-characterisation]]).

[L3] For positive $m,n$, the integer
$L=\operatorname{lcm}(\iota(m),\iota(n))$ is a positive common multiple of
$\iota(m)$ and $\iota(n)$, and it divides every common multiple. Thus
$L=\iota(\ell)$ for a unique natural $\ell\ge1$
([[def-lcm]], [[thm-gcd-lcm-product]], [[lem-nat-embeds-int]]).

[L4] Induction is valid for natural-number powers ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 For every natural $k$, $(g,h)^k=(g^k,h^k)$: it holds at $k=0$, and the successor step follows by componentwise multiplication. [L1, L4, given]

2.1 Let $\ell$ be the natural from [L3]. Since $\iota(m)\mid\iota(\ell)$ and $\iota(n)\mid\iota(\ell)$, [L2] and step 1.1 give $(g,h)^\ell=(e_G,e_H)$. [step 1.1, L2, L3, given]

2.2 If $(g,h)^k=(e_G,e_H)$ for a positive natural $k$, then step 1.1 gives $g^k=e_G$ and $h^k=e_H$. Hence $\iota(m)\mid\iota(k)$ and $\iota(n)\mid\iota(k)$. [step 1.1, L2, given]

3.1 By [L3], the two divisibilities of step 2.2 imply $\iota(\ell)\mid\iota(k)$. As $\ell,k\ge1$, this forces $\ell\le k$: an integer quotient $q$ with $\iota(k)=q\iota(\ell)$ is positive and hence at least $1$. Thus $\ell$ is the least positive exponent sending $(g,h)$ to the identity. [step 2.1, step 2.2, L3, algebra]

4.1 The definition of element order gives $\operatorname{ord}(g,h)=\ell$. Applying $\iota$ and using [L3] gives the displayed equality. [step 3.1, L2, L3] ∎
