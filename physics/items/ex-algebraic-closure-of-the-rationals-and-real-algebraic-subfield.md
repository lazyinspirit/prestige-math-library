---
id: ex-algebraic-closure-of-the-rationals-and-real-algebraic-subfield
kind: example
title: "Assuming Choice, real algebraic numbers embed properly in an algebraic closure of $\\mathbb Q$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-existence-of-algebraic-closures, thm-algebraic-elements-form-a-subfield, thm-algebraic-embedding-extension, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Corollary 3.4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice. Let $A=\{r\in\mathbb R:r\text{ is algebraic over }\mathbb Q\}$. There is an
algebraic closure $\overline{\mathbb Q}$ containing a $\mathbb Q$-isomorphic
copy of $A$, and that copy is a proper subfield which is not algebraically
closed.

## Facts & Assumptions

**Given:** The Axiom of Choice, the rational subfield of the ordered field $\mathbb R$, and the set $A$ displayed above.

[L1] Assuming Choice, every field has an algebraic closure ([[thm-existence-of-algebraic-closures]]).

[L2] The elements of an extension algebraic over the base form a subfield ([[thm-algebraic-elements-form-a-subfield]]).

[L3] Assuming Choice, a base embedding extends across every algebraic extension into an algebraically closed field ([[thm-algebraic-embedding-extension]]).

[L4] The real numbers form an ordered field ([[thm-reals-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $A$ is a subfield of $\mathbb R$ containing $\mathbb Q$, and $A/\mathbb Q$ is algebraic. Choose an algebraic closure $\Omega/\mathbb Q$ by [L1]. [L1, L2, choose]

1.2 The polynomial $x^2+1$ has no root in the ordered field $A\subseteq\mathbb R$, since every square is nonnegative and $-1<0$ by [L4]. [L4, algebra]

2.1 The identity on $\mathbb Q$ extends by [L3] to an embedding $A\to\Omega$; denote its image by $A'$. [step 1.1, L3]

3.1 If $A'$ contained a root of $x^2+1$, its preimage under the isomorphism $A\to A'$ would be a root in $A$, contrary to step 1.2. The algebraically closed field $\Omega$ does contain such a root, so $A'$ is proper in $\Omega$ and is not algebraically closed. No use of $\mathbb C$ is required. [step 2.1, step 1.2, algebra] ∎
