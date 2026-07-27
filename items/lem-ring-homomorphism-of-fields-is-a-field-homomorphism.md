---
id: lem-ring-homomorphism-of-fields-is-a-field-homomorphism
kind: lemma
title: "A ring homomorphism between fields is a field homomorphism in the published sense, and every such map is injective"
status: published
origin: session
deps: [def-ring-homomorphism, def-field-homomorphism, lem-field-is-a-commutative-ring, lem-ring-homomorphism-basic-properties, lem-ring-elementary-consequences, def-field, def-injection-surjection-bijection, def-ring]
justified_by: []
aliases: []
landmark: false
short: "ring hom of fields = field hom"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Ring homomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ring_homomorphism"
    - title: "Field (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_(mathematics)"
pipeline_run: null
---

## Statement

Let $F$ and $G$ be fields ([[def-field]]), regarded as rings by
[[lem-field-is-a-commutative-ring]], and let $f : F \to G$ be a function. Then:

1. $f$ is a ring homomorphism ([[def-ring-homomorphism]]) if and only if $f$ is
   a field homomorphism ([[def-field-homomorphism]]); the two definitions impose
   the same three conditions;
2. every such $f$ is injective ([[def-injection-surjection-bijection]]).

So "ring homomorphism between fields" and "field homomorphism" name the same
maps, and no second notion of homomorphism of fields is introduced.

## Facts & Assumptions

**Given:** Fields $F$ and $G$, with zeros $0_F, 0_G$ and identities $1_F, 1_G$, and a function $f : F \to G$ ([[def-field]]).

[L1] $F$ and $G$ are commutative rings with $1 \ne 0$, their ring operations, zeros and identities being the field ones ([[lem-field-is-a-commutative-ring]], [[def-ring]]).

[L2] A ring homomorphism is a map satisfying (RH1) $f(x+y) = f(x)+f(y)$, (RH2) $f(xy) = f(x)f(y)$ and (RH3) $f(1_F) = 1_G$ ([[def-ring-homomorphism]]).

[L3] A field homomorphism is a map satisfying $\varphi(x+y) = \varphi(x)+\varphi(y)$, $\varphi(xy) = \varphi(x)\varphi(y)$ and $\varphi(1_F) = 1_G$ ([[def-field-homomorphism]]).

[L4] A ring homomorphism satisfies $f(a-b) = f(a) - f(b)$ ([[lem-ring-homomorphism-basic-properties]]).

[L5] In a ring, $0 \cdot x = x \cdot 0 = 0$ ([[lem-ring-elementary-consequences]]).

[L6] In a field, every $x \ne 0$ has an inverse $x^{-1}$ with $x^{-1}x = 1$, and $1_G \ne 0_G$ ([[def-field]]).

[L7] A map is injective when $f(a) = f(b)$ forces $a = b$ ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the ring structures on $F$ and $G$ are the field structures, so the expressions $f(x)+f(y)$, $f(x)f(y)$, $1_F$ and $1_G$ mean the same thing in [L2] and in [L3]. [L1]

2.1 Claim 1: the three conditions of [L2] and the three conditions of [L3] are the same three equations, so $f$ satisfies one triple exactly when it satisfies the other. [step 1.1, L2, L3]

3.1 Let $f$ be such a map and suppose $f(a) = f(b)$ with $a \ne b$. Then $a - b \ne 0_F$, and $f(a-b) = f(a) - f(b) = 0_G$ by [L4]. [step 2.1, L4]

4.1 Put $c := (a-b)^{-1}$, which exists by [L6]. Then $1_G = f(1_F) = f(c(a-b)) = f(c)f(a-b) = f(c) \cdot 0_G = 0_G$, using (RH3), (RH2) and [L5]. This contradicts $1_G \ne 0_G$. [step 3.1, L2, L5, L6]

5.1 Hence $f(a) = f(b)$ forces $a = b$, so $f$ is injective; with step 2.1 this proves both claims. [step 2.1, step 4.1, L7] ∎

## Remarks

- **This is one of the page's bridges to the published vocabulary.** Together
  with [[lem-field-is-a-commutative-ring]] and
  [[lem-commutative-division-ring-is-a-field]], it means that everything proved
  on this page about rings, subrings and ring homomorphisms applies to the
  library's fields with no translation, and that a reader meeting
  [[def-field-homomorphism]] and [[def-ring-homomorphism]] is meeting one notion
  twice, not two notions.

- **The injectivity proof here uses no ideals.** The Remarks of
  [[def-field-homomorphism]] sketch the standard kernel-is-an-ideal argument;
  ideals are not defined on this page, and the argument above needs only an
  inverse and $0 \cdot x = 0$.

- **Injectivity really does need $1_G \ne 0_G$**, that is, it needs the target
  to be a field rather than an arbitrary ring. The zero map from a field to the
  one-element ring satisfies (RH1), (RH2) and (RH3) there, since $1 = 0$ in that
  ring, and it is not injective.
