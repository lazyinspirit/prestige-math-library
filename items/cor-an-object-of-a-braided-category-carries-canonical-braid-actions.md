---
id: cor-an-object-of-a-braided-category-carries-canonical-braid-actions
kind: corollary
title: "An object of a braided category carries canonical braid actions"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps: [thm-a-yang-baxter-operator-gives-braid-group-representations, def-yang-baxter-operator-on-an-object, def-braided-monoidal-category, thm-braided-coherence-via-underlying-braids, def-braid-group-by-the-artin-presentation, thm-von-dyck]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.2 Example 8.2.4, Remark 8.2.5 and Exercise 8.2.7, printed pp. 197--198"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\mathcal C$ be a braided monoidal category with braiding $c$ and let
$X\in\mathcal C$. For every $n\ge2$ there is a canonical group homomorphism

$$\rho_n\colon B_n\longrightarrow\operatorname{Aut}_{\mathcal C}(X^{\otimes n})$$

characterized by the property that $\rho_n(\sigma_i)$ is the local braiding of
the $i$-th and $(i+1)$-st tensor factors: in a strict model
$\rho_n(\sigma_i)=1_X^{\otimes(i-1)}\otimes c_{X,X}\otimes1_X^{\otimes(n-i-1)}$,
while in general $c_{X,X}$ is transported by the associativity isomorphisms and
the result is independent of those choices by braided coherence
([[thm-braided-coherence-via-underlying-braids]]). The actions are compatible
with the standard inclusions $\iota_n\colon B_n\to B_{n+1}$ for $n\ge1$:

$$\rho_{n+1}(\iota_n(\beta))=\rho_n(\beta)\otimes1_X .$$

For $n=0,1$, define $\rho_n$ to be the unique homomorphism from the
trivial group $B_n$ to $\operatorname{Aut}(X^{\otimes n})$, with
$X^{\otimes0}=\mathbf 1$. There are no local generators in these cases.
At $n=0$, let $\lambda_X:\mathbf 1\otimes X\to X$ be the left unitor. Compatibility means

$$\rho_1(\iota_0(e))=\lambda_X(\rho_0(e)\otimes1_X)\lambda_X^{-1}=1_X .$$

For $n=1$ the preceding compatibility formula is literal because both sides
are the identity of $X\otimes X$.

The statement holds for the braiding of [[def-braided-monoidal-category]] with
no choice principle.

## Facts & Assumptions

**Given:** a braided monoidal category $\mathcal C$ with braiding $c$, an object $X$, and an integer $n\ge0$.

[L1] In a strict braided monoidal category the braiding gives a Yang–Baxter operator $R=c_{X,X}$ on $X$: it is invertible and satisfies the cubic equation ([[def-yang-baxter-operator-on-an-object]]).

[L2] A Yang–Baxter operator $R$ on $X$ yields, for every $n\ge2$, a unique homomorphism $\rho_n\colon B_n\to\operatorname{Aut}(X^{\otimes n})$ with $\rho_n(\sigma_i)$ the local operator of $R$ at position $i$, and these are compatible with the inclusions $\iota_n$ ([[thm-a-yang-baxter-operator-gives-braid-group-representations]]).

[L3] Canonical composites built from associators, unitors, braidings and their inverses are determined by their underlying braid: if two such composites on $X^{\otimes n}$ have the same underlying element of $B_n$, they are equal ([[thm-braided-coherence-via-underlying-braids]]).

[L4] The braid group is presented by the Artin generators and relations ([[def-braid-group-by-the-artin-presentation]]), and von Dyck's theorem extends a generator assignment that respects the relators, uniquely ([[thm-von-dyck]]).

## Proof

**Proof technique:** direct.

1.1 **The strict case.** For $n\ge2$, assume first that $\mathcal C$ is strict. By [L1], $R:=c_{X,X}$ is a Yang–Baxter operator on $X$, so [L2] produces the homomorphism $\rho_n\colon B_n\to\operatorname{Aut}(X^{\otimes n})$ with $\rho_n(\sigma_i)=1_X^{\otimes(i-1)}\otimes R\otimes1_X^{\otimes(n-i-1)}=1_X^{\otimes(i-1)}\otimes c_{X,X}\otimes1_X^{\otimes(n-i-1)}$, and it is compatible with the inclusions. This gives the corollary in the strict case, together with the uniqueness of $\rho_n$. [L1, L2, given, construct]

1.2 **The general case.** For $n\ge2$ in a general braided monoidal category, define $\check c_i$ on the fixed left-nested tensor power $X^{\otimes n}$ by conjugating the strict-model local braiding with the canonical associativity isomorphisms, as in [L3]. Each $\check c_i^{\pm1}$ is a canonical composite built from associators, unitors and braidings, so [L3] shows that the composite does not depend on the chosen canonical isomorphisms and that the braid relations and the distant-commutativity relations between the $\check c_i$ hold, because the underlying braids of the two sides agree. The assignment $\sigma_i\mapsto\check c_i$ therefore satisfies the Artin relators of $B_n$ [L4], and [L4] gives a unique homomorphism $\rho_n\colon B_n\to\operatorname{Aut}(X^{\otimes n})$ with these values; it is canonical because each $\check c_i$ is independent of the choices. [L3, L4, given, construct]

1.3 **Zero and one strand.** By [L4], $B_0$ and $B_1$ are trivial, so their unique group actions send $e$ to the identity. For $n=1$ both sides of the compatibility formula are $1_{X\otimes X}$. For $n=0$, tensor functoriality gives $\rho_0(e)\otimes1_X=1_{\mathbf 1\otimes X}$; conjugating by $\lambda_X$ gives $1_X=\rho_1(\iota_0(e))$, the stated compatibility. [L4, given, algebra]

2.1 **Compatibility with the inclusions.** For $n\ge2$, in the strict model the compatibility is step 1.1. In general, both $\beta\mapsto\rho_{n+1}(\iota_n(\beta))$ and $\beta\mapsto\rho_n(\beta)\otimes1_X$ are canonical composite assignments on braid words with the same underlying braid $\iota_n(\beta)$ in $B_{n+1}$; by [L3] they agree on every word, hence on every $\beta$ by [L4]. Thus $\rho_{n+1}(\iota_n(\beta))=\rho_n(\beta)\otimes1_X$. [L3, L4, step 1.2, algebra]



3.1 **Conclusion.** Steps 1.1--1.2 construct the canonical homomorphisms in the strict and general case, and steps 1.3 and 2.1 give the compatibility with the standard inclusions. The construction uses only the braiding, its coherence and von Dyck's theorem; no choice principle is used, since all composites are finite and the canonical isomorphisms are explicitly determined. [step 1.1, step 1.2, step 2.1, step 1.3] ∎ 