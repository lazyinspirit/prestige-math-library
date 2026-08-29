---
id: fs-a-short-exact-sequence-splits-whenever-its-middle-object-is-isomorphic-to-the-biproduct-of-the-outer-two
kind: false-statement
title: "FALSE: a short exact sequence splits whenever its middle object is isomorphic to the biproduct of the outer two"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-split-short-exact-sequence-in-an-abelian-category,
       thm-splitting-lemma-in-an-abelian-category,
       thm-modules-over-a-ring-form-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Definition 12.5.9 and Lemma 12.5.10"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Appendix A.4"
      url: "https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf"
pipeline_run: frontier-23
---

## Statement

If
$$0\to A\to B\to C\to 0$$
is a short exact sequence in an abelian category and $B$ is merely isomorphic as
an object to $A \oplus C$, then the sequence splits.

## Facts & Assumptions

**Given:** The ring $R = k[\varepsilon]/(\varepsilon^2)$, the quotient
$q:R \to k = R/(\varepsilon)$, and the inclusion $i:k \to R$ with image
$(\varepsilon)$.

[L1] Module categories are abelian
([[thm-modules-over-a-ring-form-an-abelian-category]]).

[L2] A short exact sequence splits exactly when the epimorphism has a section
([[thm-splitting-lemma-in-an-abelian-category]],
[[def-split-short-exact-sequence-in-an-abelian-category]]).

## Refutation

**Proof technique:** direct.

1.1 In $R\text{-}\mathbf{Mod}$, the sequence $0 \to k \xrightarrow{i} R \xrightarrow{q} k \to 0$ is short exact: $q$ is the quotient by $(\varepsilon)$ and $i$ identifies $k$ with that ideal. By [L1], this is a short exact sequence in an abelian category. [L1, given, algebra]

2.1 If this sequence split, a section $s:k \to R$ of $q$ would satisfy $q(s(1)) = 1$ while $R$-linearity would force $\varepsilon s(1) = s(\varepsilon \cdot 1) = 0$, so $s(1)$ would lie in $(\varepsilon)$, contradiction. Hence [L2] says the sequence is nonsplit. [L2, step 1.1, assume-hyp, algebra]

3.1 Let $T := R^{(\mathbb N)} \oplus k^{(\mathbb N)}$. Direct-summing step 1.1 with $0 \to T \xrightarrow{1_T} T \to 0 \to 0$ gives $0 \to k \oplus T \to R \oplus T \xrightarrow{q \oplus 0} k \to 0$. Any section of $q \oplus 0$ would project to a section of $q$, so this stabilized sequence is still nonsplit by step 2.1. [L2, step 2.1, construct, algebra]

4.1 Countable shifts give $R \oplus T \cong T$, $k \oplus T \cong T$, and $(k \oplus T) \oplus k \cong T$, because adding finitely many $R$- or $k$-summands does not change $R^{(\mathbb N)} \oplus k^{(\mathbb N)}$. Hence $R \oplus T \cong (k \oplus T) \oplus k$. [step 3.1, algebra]

5.1 Step 3.1 gives a nonsplit short exact sequence, while step 4.1 shows that its middle object is abstractly isomorphic to the biproduct of its outer objects. Therefore the statement is false. [step 3.1, step 4.1] ∎
