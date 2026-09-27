---
id: thm-integral-closure-finite-finite-type-domain-over-field
kind: theorem
title: "A finite-type domain over a field has finite normalization"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-noether-normalisation-module-finiteness, def-finite-type-and-module-finite-algebras, thm-integrality-and-finite-module-equivalences, def-integral-element-and-algebraic-integer, def-integral-ring-extension, thm-polynomial-algebras-over-fields-have-finite-integral-closures, lem-integral-closure-unchanged-across-an-integral-intermediate-domain, thm-transitivity-of-integrality, def-integral-closure-and-integrally-closed-domain, cor-integral-elements-form-a-subring, def-field-of-fractions, def-zero-divisor-and-integral-domain, def-field, thm-finitely-generated-algebraic-extensions-are-finite, def-finitely-generated-field-extension, def-extension-degree-and-finite-extension, def-algebraic-and-transcendental-elements, def-multivariate-polynomial-ring-by-iteration]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemmas 10.161.12–13 (Japanese rings)"
      url: "https://stacks.math.columbia.edu/tag/032N"
      locator: "Lemma 10.161.13 and the Noether-normalisation reduction"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §6, §17"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
      locator: "§6 (integrality, Noether normalisation) and §17 (finiteness of normalisation)"
---

## Statement

Let $k$ be a field and let $A$ be a finite-type integral domain over $k$. Then
the integral closure of $A$ in $\operatorname{Frac}(A)$ is a finite $A$-module.
The proof is a Noether-normalisation reduction to the polynomial theorem and
uses no choice principle.

## Facts & Assumptions

**Given:** a field $k$ and a finite-type integral domain $A$ over $k$.

[L1] Let $k$ be a field and $A$ a nonzero finite-type $k$-algebra; then there are algebraically independent elements $z_1,\ldots,z_d\in A$ such that $A$ is a module-finite algebra over the polynomial ring $k[z_1,\ldots,z_d]$, that is, $A$ is generated as a $k[z_1,\ldots,z_d]$-module by finitely many elements ([[cor-noether-normalisation-module-finiteness]], [[def-finite-type-and-module-finite-algebras]]).

[L2] For commutative rings $A\subseteq B$ with $A\ne0$ and $b\in B$, the element $b$ is integral over $A$ if and only if there exists a faithful $A[b]$-module that is finitely generated over $A$; in particular a finite-module generation statement of this shape certifies integrality ([[thm-integrality-and-finite-module-equivalences]], [[def-integral-element-and-algebraic-integer]], [[def-integral-ring-extension]]).

[L3] Let $K$ be a field and $d\ge0$, and let $L/K(x_1,\ldots,x_d)$ be a finite extension of the rational function field; then the integral closure of $K[x_1,\ldots,x_d]$ in $L$ is a finite module over $K[x_1,\ldots,x_d]$ ([[thm-polynomial-algebras-over-fields-have-finite-integral-closures]]).

[L4] If $A\subseteq B\subseteq N$ are domains with $B$ integral over $A$, then an element of $N$ is integral over $A$ if and only if it is integral over $B$; the integral closure of $A$ in a field extension of $\operatorname{Frac}(A)$ is a subring containing $A$ ([[lem-integral-closure-unchanged-across-an-integral-intermediate-domain]], [[thm-transitivity-of-integrality]], [[def-integral-closure-and-integrally-closed-domain]], [[cor-integral-elements-form-a-subring]]).

[L5] A domain is a nonzero commutative ring without zero divisors, and $\operatorname{Frac}(A)$ is its field of fractions, the smallest field containing $A$ ([[def-field-of-fractions]], [[def-zero-divisor-and-integral-domain]], [[def-field]]).

[L6] If $a_1,\ldots,a_r$ are algebraic over a field $F$, then $F(a_1,\ldots,a_r)/F$ is finite, where $F(a_1,\ldots,a_r)$ is the smallest subfield containing $F$ and the $a_i$ ([[thm-finitely-generated-algebraic-extensions-are-finite]], [[def-finitely-generated-field-extension]], [[def-extension-degree-and-finite-extension]], [[def-algebraic-and-transcendental-elements]]).



## Proof

**Proof technique:** direct.

1.1 By [L5] the finite-type domain $A$ over $k$ is nonzero, so [L1] applies: fix algebraically independent elements $z_1,\ldots,z_d\in A$ such that $A$ is module-finite over $R:=k[z_1,\ldots,z_d]$. Every $a\in A$ is integral over $R$: the ring $A$ is a faithful $R[a]$-module, because $r\cdot1_A=r\ne0$ for every nonzero $r\in R[a]\subseteq A$ (evaluate at $1_A$ in the domain $A$), and it is a finite $R$-module, so [L2] applies to $b=a$ inside $R\subseteq A$. Hence $R\subseteq A\subseteq\operatorname{Frac}(A)$ with $A$ integral over $R$. [L1, L2, L5, given]

2.1 The extension $F:=\operatorname{Frac}(R)$ is a rational function field and $\operatorname{Frac}(A)/F$ is finite. Write $A=Ra_1+\cdots+Ra_n$ with $a_i\in A$, using the module finiteness of step 1.1. Every element of $A$ lies in $F[a_1,\ldots,a_n]\subseteq F(a_1,\ldots,a_n)$, and $F(a_1,\ldots,a_n)$ is a field containing $A$, so $\operatorname{Frac}(A)=F(a_1,\ldots,a_n)$ by [L5]; each $a_i$ is integral over $R$ by step 1.1, hence algebraic over $F$; therefore $\operatorname{Frac}(A)/F$ is finite by [L6]. [L1, L5, L6, step 1.1]

3.1 Apply [L3] with the base field $k$, the algebraically independent elements $z_1,\ldots,z_d$ (so that $R=k[z_1,\ldots,z_d]$ and $F=k(z_1,\ldots,z_d)$) and the finite extension $L:=\operatorname{Frac}(A)$ of step 2.1: the integral closure $B$ of $R$ in $\operatorname{Frac}(A)$ is a finite $R$-module. [L3, step 1.1, step 2.1]

4.1 Since $A$ is integral over $R$ by step 1.1 and $R\subseteq A\subseteq\operatorname{Frac}(A)$, [L4] shows that an element of $\operatorname{Frac}(A)$ is integral over $R$ exactly when it is integral over $A$; hence $B$ is exactly the integral closure of $A$ in $\operatorname{Frac}(A)$, and $B$ is a ring with $R\subseteq A\subseteq B$. If $B=Rb_1+\cdots+Rb_r$, then every $Ab_i$ lies in $B$, and every $Rb_i$ lies in $Ab_i$ because $R\subseteq A$; hence $B=Ab_1+\cdots+Ab_r$ is generated as an $A$-module by the same finitely many elements. Therefore the integral closure of $A$ in $\operatorname{Frac}(A)$ is a finite $A$-module. [L4, step 1.1, step 3.1] ∎
