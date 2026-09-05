---
id: thm-weak-enriched-yoneda-lemma
kind: theorem
title: "Weak enriched Yoneda lemma"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-representable-enriched-functor, def-enriched-natural-transformation, thm-the-compact-square-form-of-enriched-naturality, def-the-internal-hom-and-its-evaluation-morphism, thm-the-unit-is-an-internal-hom-unit]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (1.46) and (1.47)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 7.3"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

Assume $\mathcal V$ is symmetric monoidal right closed and locally small. Let
$\mathcal A$ be a $\mathcal V$-category, let $K\in\mathcal A$, and let
$F:\mathcal A\to\mathcal V$ be a $\mathcal V$-functor. Then evaluation at the
enriched identity of $K$ gives a natural bijection

$$\operatorname{Nat}_{\mathcal V}(\mathcal A(K,-),F)\xrightarrow{\cong}\mathcal V(\mathbf 1,FK).$$

Equivalently, $\mathcal V$-natural transformations from the representable
enriched functor $\mathcal A(K,-)$ to $F$ are in bijection with global elements
of $FK$.

## Facts & Assumptions

**Given:** A symmetric monoidal right-closed locally small base $\mathcal V$, a
$\mathcal V$-category $\mathcal A$, an object $K$ of $\mathcal A$, and a
$\mathcal V$-functor $F:\mathcal A\to\mathcal V$.

[L1] The representable enriched functor $\mathcal A(K,-)$ has value
$\mathcal A(K,A)$ at $A$, and its structure maps are induced from enriched
composition ([[def-representable-enriched-functor]]).

[L2] A $\mathcal V$-natural transformation may be checked by the compact square
form of enriched naturality
([[def-enriched-natural-transformation]], [[thm-the-compact-square-form-of-enriched-naturality]]).

[L3] Right closedness supplies internal homs and evaluation morphisms
([[def-the-internal-hom-and-its-evaluation-morphism]]).

[L4] Global elements of an internal hom are ordinary morphisms:
$\mathcal V(\mathbf 1,[X,Y])\cong\mathcal V(X,Y)$
([[thm-the-unit-is-an-internal-hom-unit]]).

## Proof

**Proof technique:** direct.

1.1 Let $\alpha:\mathcal A(K,-)\Rightarrow F$ be $\mathcal V$-natural. By [L4], its component at $K$ corresponds to an ordinary morphism $\bar\alpha_K:\mathcal A(K,K)\to FK$. Define $x_\alpha:=\bar\alpha_K\circ j_K:\mathbf 1\to FK$, where $j_K$ is the enriched identity of $K$. This is the evaluation map from the statement. [L2, L4, given]

1.2 Conversely, let $x:\mathbf 1\to FK$. For each object $A$, the functor structure of $F$ gives a morphism $F_{K,A}:\mathcal A(K,A)\to[FK,FA]$, and [L3] turns it into $F_{K,A}^\sharp:\mathcal A(K,A)\otimes FK\to FA$. Compose with $1\otimes x$ and the right unitor to obtain $\bar\alpha^x_A:\mathcal A(K,A)\to FA$. By [L4], this determines a unique component $\alpha^x_A:\mathbf 1\to[\mathcal A(K,A),FA]$. [L1, L3, L4, construct]

2.1 The square criterion of [L2] for $\alpha^x$ is exactly the compatibility of $F_{K,-}$ with enriched composition: both sides become the same composite $\mathcal A(A,B)\otimes\mathcal A(K,A)\otimes FK\to FB$ after evaluating the internal homs and inserting $x$. So $\alpha^x$ is $\mathcal V$-natural. [L1, L2, L3, step 1.2, algebra]

3.1 Starting from $\alpha$, step 1.2 applied to $x_\alpha$ reconstructs the same family of components because the naturality square at $(K,A)$ sends the identity element $j_K$ to the value of $\alpha_A$ on $x_\alpha$. Starting from $x$, step 1.1 evaluates $\alpha^x_K$ at $j_K$ and recovers $x$ by definition. Hence the two constructions are inverse bijections. [step 1.1, step 1.2, step 2.1]

4.1 Therefore evaluation at the enriched identity yields the stated bijection. [step 3.1] ∎
