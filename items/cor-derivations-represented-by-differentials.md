---
id: "cor-derivations-represented-by-differentials"
kind: "corollary"
title: "Derivations are maps out of Ω"
status: draft
origin: "pipeline"
deps: ["thm-kahler-differentials-existence-presentation", "def-kahler-differentials-algebra", "def-derivation-algebra"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.131.3"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §22.2.17, p.582"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $A\to B$ be a homomorphism of commutative rings, let $(\Omega_{B/A},\mathrm{d})$
be a Kähler differential module for it ([[def-kahler-differentials-algebra]]),
which exists by [[thm-kahler-differentials-existence-presentation]], and let $M$
be a $B$-module. Then composition with $\mathrm{d}$ is an isomorphism of
$B$-modules

$$\operatorname{Hom}_B(\Omega_{B/A},M)\;\xrightarrow{\ \sim\ }\;\operatorname{Der}_A(B,M), \qquad g\longmapsto g\circ\mathrm{d},$$

natural in $M$: for every $B$-linear $t\colon M\to N$ the two composites
$\operatorname{Hom}_B(\Omega_{B/A},M)\to\operatorname{Der}_A(B,N)$ obtained by
applying $t$ before and after the isomorphism agree. Equivalently, $\Omega_{B/A}$
represents the covariant functor $M\mapsto\operatorname{Der}_A(B,M)$ on
$B$-modules.

## Facts & Assumptions

**Given:** A ring homomorphism $A\to B$, a Kähler differential module $(\Omega_{B/A},\mathrm{d})$ for it, and a $B$-module $M$.

[F1] [[thm-kahler-differentials-existence-presentation]]: for the module $\Omega_{B/A}=F/R$ presented by the free $B$-module on the symbols $[b]$ modulo the additive, Leibniz and $A$-constant relators, and for every $B$-module $M$, the assignment $g\mapsto g\circ\mathrm{d}$ is a bijection $\operatorname{Hom}_B(\Omega_{B/A},M)\to\operatorname{Der}_A(B,M)$, natural in $M$.

[F2] [[def-kahler-differentials-algebra]]: a Kähler differential module for $A\to B$ is a pair $(\Omega_{B/A},\mathrm{d})$ with $\mathrm{d}$ an $A$-derivation of $B$ into $\Omega_{B/A}$ such that $g\mapsto g\circ\mathrm{d}$ is a bijection $\operatorname{Hom}_B(\Omega_{B/A},M)\to\operatorname{Der}_A(B,M)$ for every $B$-module $M$, and such that these bijections are natural in $M$.

[F3] [[def-derivation-algebra]]: $\operatorname{Der}_A(B,M)$ is a $B$-module under pointwise addition and scalar multiplication, and for $B$-linear $t\colon M\to N$ composition $D\mapsto t\circ D$ is a $B$-module map $\operatorname{Der}_A(B,M)\to\operatorname{Der}_A(B,N)$.

## Proof

1.1 Bijectivity. By [F1] the pair $(\Omega_{B/A},\mathrm{d})$ is a Kähler differential module for $A\to B$, so [F2] gives, for every $B$-module $M$, that $g\mapsto g\circ\mathrm{d}$ is a bijection $\operatorname{Hom}_B(\Omega_{B/A},M)\to\operatorname{Der}_A(B,M)$; the same statement holds for any Kähler differential module, since any two are related by a unique compatible isomorphism identifying the two assignments. [F1, F2]

1.2 Additivity and $B$-linearity of the bijection. Both sides are $B$-modules: $\operatorname{Hom}_B(\Omega_{B/A},M)$ under pointwise operations, and $\operatorname{Der}_A(B,M)$ under the operations of [F3]. For $g,g'\in\operatorname{Hom}_B(\Omega_{B/A},M)$ and $c\in B$ one has $(g+g')\circ\mathrm{d}=g\circ\mathrm{d}+g'\circ\mathrm{d}$ and $(c\cdot g)\circ\mathrm{d}=c\cdot(g\circ\mathrm{d})$ as maps $B\to M$, because evaluation at any $b$ gives $c\,g(\mathrm{d}b)$ on both sides. Hence $g\mapsto g\circ\mathrm{d}$ is a homomorphism of $B$-modules. [F2, F3, algebra]

2.1 Naturality. Let $t\colon M\to N$ be $B$-linear. By [F3] the composite $t\circ D$ is a derivation for every $D\in\operatorname{Der}_A(B,M)$ and the assignment $D\mapsto t\circ D$ is $B$-linear; moreover $t\circ(g\circ\mathrm{d})=(t\circ g)\circ\mathrm{d}$ for every $B$-linear $g\colon\Omega_{B/A}\to M$, since both sides send $b$ to $t(g(\mathrm{d}b))$. Thus applying $t$ after the isomorphism agrees with applying $t$ before it, and the isomorphism of step 1.2 is natural in $M$: the $B$-module $\Omega_{B/A}$ represents the functor $M\mapsto\operatorname{Der}_A(B,M)$ by [F2]. [step 1.2, F2, F3] ∎
