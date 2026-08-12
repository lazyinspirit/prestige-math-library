---
id: thm-snake-lemma-for-modules
kind: theorem
title: "The Snake Lemma for modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-and-short-exact-sequences-of-modules, lem-endpoints-in-a-short-exact-sequence, def-module-homomorphism-kernel-image-and-cokernel, thm-quotient-module-universal-property]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

Given a commutative diagram of short exact sequences

```tikzcd
0 \arrow[r] & A \arrow[r, "i"] \arrow[d, "a"'] & B \arrow[r, "p"] \arrow[d, "b"'] & C \arrow[r] \arrow[d, "c"'] & 0 \\
0 \arrow[r] & A' \arrow[r, "i'"'] & B' \arrow[r, "p'"'] & C' \arrow[r] & 0
```

there is a connecting homomorphism $\delta:\ker c\to\operatorname{coker}a$ for which
$$0\to\ker a\to\ker b\to\ker c\xrightarrow{\delta}\operatorname{coker}a\to\operatorname{coker}b\to\operatorname{coker}c\to0$$
is exact. The unnamed maps are the restrictions and quotient maps induced by $i,p,i',p'$.

## Facts & Assumptions

**Given:** The commutative diagram in the statement, with both rows short exact.

**Diagram:** $i\colon A\to B$, $p\colon B\to C$, $i'\colon A'\to B'$, $p'\colon B'\to C'$, $a\colon A\to A'$, $b\colon B\to B'$, $c\colon C\to C'$.

[C1] $b\circ i=i'\circ a$ (given).

[C2] $c\circ p=p'\circ b$ (given).

[F1] Short exactness says $i,i'$ are injective, $p,p'$ are surjective, $\operatorname{im}i=\ker p$, and $\operatorname{im}i'=\ker p'$ ([[def-exact-and-short-exact-sequences-of-modules]], [[lem-endpoints-in-a-short-exact-sequence]]).

[F2] $\operatorname{coker}f$ is the quotient of the codomain by $\operatorname{im}f$ ([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L1] A homomorphism that vanishes on a submodule factors uniquely through the quotient by that submodule ([[thm-quotient-module-universal-property]]).

## Proof

**Proof technique:** constructive.

1.1 The restrictions $\ker a\to\ker b$ and $\ker b\to\ker c$ are induced by $i$ and $p$ using [C1] and [C2]. The formulas $[x']\mapsto[i'(x')]$ and $[y']\mapsto[p'(y')]$ define maps $\operatorname{coker}a\to\operatorname{coker}b$ and $\operatorname{coker}b\to\operatorname{coker}c$: [C1] and [C2] make the relevant images vanish in the target quotients, so [L1] applies. [C1, C2, F2, L1, construct]

1.2 For $z\in\ker c$, choose $y\in B$ with $p(y)=z$. Then [C2] gives $p'(b(y))=c(z)=0$, so [F1] gives a unique $x'\in A'$ with $i'(x')=b(y)$. Define $\delta(z):=[x']\in\operatorname{coker}a$. [C2, F1, F2, choose, construct]

2.1 If $\tilde y$ is another lift of $z$, then $\tilde y-y=i(x)$ for some $x\in A$ by [F1]. If $i'(\tilde x')=b(\tilde y)$, then [C1] and injectivity of $i'$ give $\tilde x'-x'=a(x)$, so $[\tilde x']=[x']$ in $\operatorname{coker}a$. Thus $\delta$ is well defined. [step 1.2, C1, F1, F2]

2.2 Exactness at $\ker a$ holds because its map is the restriction of the injective map $i$. At $\ker b$, the composite induced by $p\circ i$ is zero; if $y\in\ker b$ maps to zero in $\ker c$, then $p(y)=0$, so $y=i(x)$ by [F1], and [C1] with injectivity of $i'$ gives $a(x)=0$, hence $x\in\ker a$. [step 1.1, C1, F1]

2.3 If $y\in\ker b$, the construction of step 1.2 applied to $z=p(y)$ has $x'=0$, so $\delta(z)=0$. Conversely, if $z\in\ker c$ has $\delta(z)=0$, choose $y,x'$ as in step 1.2; then $x'=a(x)$ for some $x$, so [C1] gives $b(y-i(x))=0$ and $p(y-i(x))=z$. Thus exactness holds at $\ker c$. [step 1.2, C1, F1, F2]

2.4 The map $\operatorname{coker}a\to\operatorname{coker}b$ kills $\delta(z)$ because $i'(x')=b(y)$. Conversely, if $[x']$ maps to zero, write $i'(x')=b(y)$; then [C2] gives $c(p(y))=0$, and the construction with lift $y$ gives $\delta(p(y))=[x']$. Thus exactness holds at $\operatorname{coker}a$. [step 1.1, step 1.2, C2, F2]

2.5 The next composite is zero because $p'i'=0$. If $[y']\in\operatorname{coker}b$ maps to zero in $\operatorname{coker}c$, write $p'(y')=c(z)$, choose $y\in B$ with $p(y)=z$, and use [C2] to obtain $y'-b(y)\in\ker p'=\operatorname{im}i'$. Hence $[y']$ comes from $\operatorname{coker}a$, proving exactness at $\operatorname{coker}b$. [step 1.1, C2, F1, F2, choose]

2.6 The map $\operatorname{coker}b\to\operatorname{coker}c$ is surjective: for a class $[z']$, choose $y'\in B'$ with $p'(y')=z'$ using [F1], and $[y']$ maps to $[z']$. [step 1.1, F1, F2, choose]

3.1 For $z_1,z_2\in\ker c$ and $r\in R$, the choices $y_1+y_2$ and $ry_1$ in step 1.2 lead to $x_1'+x_2'$ and $rx_1'$; uniqueness through the injective map $i'$ then gives $\delta(z_1+z_2)=\delta(z_1)+\delta(z_2)$ and $\delta(rz_1)=r\delta(z_1)$. [step 1.2, step 2.1, F1]

4.1 Steps 2.2 through 2.6 establish exactness at every displayed term. Steps 1.2, 2.1, and 3.1 construct a well-defined linear connecting homomorphism. [step 2.1, step 3.1, step 2.2, step 2.3, step 2.4, step 2.5, step 2.6, discharge-construct] ∎
