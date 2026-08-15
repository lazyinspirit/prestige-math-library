---
id: thm-character-duals-of-flat-modules-are-injective
kind: theorem
title: "The character dual of a flat module is injective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, thm-universal-property-of-module-tensor-products, def-injective-module, def-hom-groups-and-induced-hom-maps]
aliases: []
landmark: true
short: "Flat character duals are injective"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Barr, Acyclic Models, Proposition 5.17"
      url: "https://math.mit.edu/~hrm/palestine/barr-acyclic-models.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $P$ be a flat $R$-module, and let $D$ be an injective $\mathbb Z$-module. Define the **character dual**

$$P^+:=\operatorname{Hom}_{\mathbb Z}(P,D)$$

with $R$-action

$$(r\phi)(p):=\phi(rp).$$

Then $P^+$ is an injective $R$-module.

## Facts & Assumptions

**Given:** A commutative ring $R$, a flat $R$-module $P$, and an injective $\mathbb Z$-module $D$.

[L1] Flatness makes $u\otimes1_P$ injective whenever $u$ is an injection of $R$-modules ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[L2] Balanced maps into an abelian group correspond uniquely to group homomorphisms from a tensor product ([[thm-universal-property-of-module-tensor-products]]).

[L3] An injective module has the extension property along every injective module homomorphism ([[def-injective-module]]).

[L4] $\operatorname{Hom}_{\mathbb Z}(P,D)$ is an abelian group under pointwise addition ([[def-hom-groups-and-induced-hom-maps]]).

## Proof

**Proof technique:** direct.

1.1 The displayed formula makes $P^+$ an $R$-module: $(rs)\phi$ and $r(s\phi)$ agree at every $p$, and all other module laws hold pointwise in the abelian group [L4]. [given, L4, algebra]

1.2 Let $u:A\to B$ be an injective $R$-module homomorphism and let $v:A\to P^+$ be $R$-linear. By [L1], $u\otimes1_P:A\otimes_RP\to B\otimes_RP$ is injective. [given, L1]

2.1 For every $R$-module $M$, an $R$-linear map $v:M\to P^+$ determines the balanced map $(m,p)\mapsto v(m)(p)$, and [L2] gives a group homomorphism $\widehat v:M\otimes_RP\to D$. Conversely a group homomorphism $h:M\otimes_RP\to D$ gives $m\mapsto[p\mapsto h(m\otimes p)]$; the balance relation makes this map $R$-linear. These constructions are inverse. [step 1.1, L2]

3.1 A group homomorphism between abelian groups is automatically $\mathbb Z$-linear because additivity gives compatibility with positive integer multiples and with negatives. Thus the group homomorphisms in step 2.1 are precisely the $\mathbb Z$-module homomorphisms to which injectivity of $D$ applies. [algebra]

4.1 Transpose $v$ by step 2.1 to $\widehat v:A\otimes_RP\to D$. By step 3.1 and injectivity [L3] at the ring $\mathbb Z$, extend it along $u\otimes1_P$ to a homomorphism $\widehat w:B\otimes_RP\to D$. [step 2.1, step 3.1, step 1.2, L3, choose]

5.1 Transpose $\widehat w$ back by step 2.1 to an $R$-linear map $w:B\to P^+$. Naturality of the evaluation formulas gives $w\circ u=v$. [step 2.1, step 4.1]

6.1 Every $R$-linear map into $P^+$ therefore extends along every injection, so [L3] makes $P^+$ injective. [step 5.1, L3] ∎
