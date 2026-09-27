---
id: lem-integral-closure-unchanged-across-an-integral-intermediate-domain
kind: lemma
title: "Integral closure is unchanged across an integral intermediate domain"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-integral-closure-and-integrally-closed-domain, thm-transitivity-of-integrality, def-integral-element-and-algebraic-integer, def-integral-ring-extension, cor-integral-elements-form-a-subring, def-zero-divisor-and-integral-domain]
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
      locator: "§6, Proposition 6.4 and the integral closure definition"
    - title: "Stacks Project, Lemma 10.161.12 (Japanese rings)"
      url: "https://stacks.math.columbia.edu/tag/032N"
---

## Statement

Let $A\subseteq B\subseteq L$ be domains and suppose that $B$ is integral over
$A$. Then for every $z\in L$,

$$ z\text{ is integral over }A \quad\Longleftrightarrow\quad z\text{ is integral over }B . $$

## Facts & Assumptions

**Given:** domains $A\subseteq B\subseteq L$ with $B$ integral over $A$, and an element $z\in L$.

[L1] An element $b$ of a commutative ring $B$ is integral over a subring $A$ exactly when $b$ is a root of a monic polynomial in $A[X]$ ([[def-integral-element-and-algebraic-integer]]).

[L2] $B$ is integral over $A$ when every element of $B$ is integral over $A$, that is, when the inclusion $A\hookrightarrow B$ is an integral ring map ([[def-integral-ring-extension]]).

[L3] Let $A\subseteq C$ be commutative rings with $A\ne0$. Then the elements of $C$ integral over $A$ form a subring of $C$ ([[cor-integral-elements-form-a-subring]]).

[L4] If $A\to B$ and $B\to C$ are integral ring maps of commutative rings, then the composite $A\to C$ is integral ([[thm-transitivity-of-integrality]]).

[L5] The rings $A,B,L$ are nonzero: an integral domain satisfies $1\ne0$ ([[def-zero-divisor-and-integral-domain]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $z$ is integral over $A$. By [L1] there is a monic polynomial $f\in A[X]$ with $f(z)=0$. Since $A\subseteq B$, the same polynomial, viewed in $B[X]$, is monic and has the same root $z$; by [L1] again, $z$ is integral over $B$. [L1, given]

1.2 Conversely assume that $z$ is integral over $B$. By [L1] there are an integer $n\ge1$ and coefficients $b_0,\ldots,b_{n-1}\in B$ with
$$ z^n+b_{n-1}z^{n-1}+\cdots+b_1z+b_0=0 . $$
[L1, assume-hyp]

2.1 Each $b_i$ lies in $B$, and $B$ is integral over $A$, so every $b_i$ is integral over $A$ by [L2]. Let $C:=A[b_0,\ldots,b_{n-1}]$ be the subring of $L$ generated over $A$ by these coefficients. By [L3], applied to the ring extension $A\subseteq L$ (legitimate by [L5]), the elements of $L$ integral over $A$ form a subring of $L$; it contains $A$ and every $b_i$, hence contains the subring $C$ these elements generate. Therefore the inclusion $A\to C$ is an integral ring map. [L2, L3, L5, step 1.2, construct]

3.1 The equation of step 1.2 has all its coefficients in $C$, so by [L1] the element $z$ is integral over $C$. Applying [L3] to the ring extension $C\subseteq C[z]$ (again $C\ne0$ by [L5]) shows that the elements of $C[z]$ integral over $C$ form a subring containing $C$ and $z$, hence containing the subring $C[z]$ that they generate; therefore the inclusion $C\to C[z]$ is an integral ring map. [L1, L3, L5, step 1.2, step 2.1]

4.1 By steps 2.1 and 3.1 the maps $A\to C$ and $C\to C[z]$ are both integral, so the composite inclusion $A\to C[z]$ is integral by [L4]; every element of $C[z]$ is thus integral over $A$ by [L2], and in particular $z$ is integral over $A$. Together with step 1.1 this proves both directions of the equivalence. [L2, L4, step 1.1, step 2.1, step 3.1] ∎
