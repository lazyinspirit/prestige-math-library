---
id: cor-sum-of-squares-formula-for-irreducible-degrees
kind: corollary
title: "If $k$ is algebraically closed and $\\operatorname{char} k \\nmid |G|$, then $\\sum_i (\\dim_k V_i)^2=|G|$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree, cor-dimension-of-a-finite-group-algebra]
justified_by: []
aliases: []
landmark: true
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
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 2.1.5"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.1(ii)"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $k$ be an algebraically closed field with
$\operatorname{char} k \nmid |G|$. If $V_1,\ldots,V_r$ is a complete list of the
irreducible representations of $G$ over $k$, up to equivalence, then

$$
\sum_{i=1}^r (\dim_k V_i)^2=|G|.
$$

## Facts & Assumptions

**Given:** A finite group $G$ and an algebraically closed field $k$ with $\operatorname{char} k \nmid |G|$.

[L1] The regular representation decomposes as $$k[G]\cong V_1^{\oplus \dim_k V_1}\oplus\cdots\oplus V_r^{\oplus \dim_k V_r},$$ where $V_1,\ldots,V_r$ are the irreducible representations of $G$ ([[thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree]]).

[L2] For a finite group, $\dim_k k[G]=|G|$ ([[cor-dimension-of-a-finite-group-algebra]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the regular representation is a direct sum of $\dim_k V_i$ copies of each $V_i$, and [L2] says its total dimension is $|G|$. [L1, L2, given]

2.1 Taking dimensions in step 1.1 gives $$|G|=\dim_k k[G]=\sum_{i=1}^r \dim_k(V_i^{\oplus \dim_k V_i})=\sum_{i=1}^r (\dim_k V_i)^2.$$ This is the required identity. [step 1.1, given, algebra] ∎
