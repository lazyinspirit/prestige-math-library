---
id: cor-affine-normalization-is-finite
kind: corollary
title: "The normalization of an irreducible affine variety is finite"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-integral-closure-finite-finite-type-domain-over-field, def-finite-type-and-module-finite-algebras, thm-affine-algebraic-sets-coordinate-duality, def-reduced-affine-algebra, def-coordinate-ring-affine-algebraic-set, thm-affine-variety-prime-coordinate-ring, def-affine-variety-classical, def-affine-algebraic-set, thm-affine-nullstellensatz-correspondence, thm-affine-morphisms-coordinate-ring-anti-equivalence, def-morphism-classical-varieties, thm-global-regular-functions-affine-variety-coordinate-ring, def-regular-function-classical-variety, def-function-field-variety, thm-birational-equivalence-function-fields, lem-dominant-map-pullback-function-fields, thm-rational-maps-to-affine-variety-function-field, def-dominant-morphism-and-rational-map, def-birational-equivalence-varieties, def-integral-closure-and-integrally-closed-domain, thm-integral-closure-is-integrally-closed, def-zero-divisor-and-integral-domain, def-field-of-fractions, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 8.3 and Example 8.6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "§8.3 (finite normalization of an affine variety)"
    - title: "Stacks Project, Lemmas 10.161.12–13 (Japanese rings)"
      url: "https://stacks.math.columbia.edu/tag/032N"
      locator: "Lemma 10.161.13"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §6, §17"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
      locator: "§17 (normalisation)"
---

## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let $X$
be an irreducible affine variety over $k$, with coordinate ring $A=k[X]$ and
function field $k(X)=\operatorname{Frac}(A)$. Let $B$ be the integral closure of
$A$ in $k(X)$, and let $Y$ be an affine variety over $k$ with $k[Y]\cong B$ as
$k$-algebras, as supplied by the published object-level dictionary. Then:

1. the inclusion $A\hookrightarrow B$ corresponds to a unique morphism
   $\nu:Y\to X$ whose pullback on coordinate rings $\nu^{*}:k[X]\to k[Y]$ is that
   inclusion;
2. $Y$ is normal, in the concrete sense that its coordinate ring $k[Y]$ is an
   integrally closed domain;
3. $\nu$ is birational: its pullback on function fields
   $\nu^{*}:k(X)\to k(Y)$ is an isomorphism of $k$-extensions;
4. $\nu$ is finite in the concrete sense that $k[Y]$ is a finite $k[X]$-module
   under the structure induced by $\nu^{*}$.

No smoothness or projectivity is asserted. The Axiom of Choice is used only in
the published classical affine dictionary, never in the module-finiteness
theorem that produces $B$ from $A$.

## Facts & Assumptions

**Given:** an algebraically closed field $k$, an irreducible affine variety $X$ over $k$ with coordinate ring $A=k[X]$, the integral closure $B$ of $A$ in $k(X)=\operatorname{Frac}(A)$, and an affine variety $Y$ with a $k$-algebra isomorphism $B\cong k[Y]$.

[L1] The integral closure of a finite-type domain over a field $k$ in its fraction field is a finite module over that domain, and the proof is choice-free ([[thm-integral-closure-finite-finite-type-domain-over-field]], [[def-finite-type-and-module-finite-algebras]]).

[L2] A reduced affine $k$-algebra is a finite-type and reduced commutative $k$-algebra; the coordinate ring of an affine algebraic set is a reduced affine $k$-algebra, and conversely every reduced affine $k$-algebra is $k$-isomorphic to $k[Z]$ for some affine algebraic set $Z\subseteq\mathbf A_k^n$, $n\ge0$ ([[thm-affine-algebraic-sets-coordinate-duality]], [[def-reduced-affine-algebra]], [[def-coordinate-ring-affine-algebraic-set]]).

[L3] A nonempty affine algebraic set $X$ is a classical affine variety exactly when its coordinate ring $k[X]$ is an integral domain; $V(1)=\varnothing$ while $V(\varnothing)=\mathbf A_k^n$; and, assuming the Axiom of Choice, vanishing ideals and zero loci are mutually inverse bijections between affine algebraic sets and radical ideals, so the unit ideal corresponds to the empty set ([[thm-affine-variety-prime-coordinate-ring]], [[def-affine-variety-classical]], [[def-affine-algebraic-set]], [[thm-affine-nullstellensatz-correspondence]]).

[L4] For classical affine varieties $X,Y$ over an algebraically closed field there is a canonical bijection $\operatorname{Mor}(Y,X)\cong\operatorname{Hom}_{k\text{-alg}}(k[X],k[Y])$ implemented by pullback, compatible with composition; global regular functions on an affine variety are exactly the elements of its coordinate ring ([[thm-affine-morphisms-coordinate-ring-anti-equivalence]], [[def-morphism-classical-varieties]], [[thm-global-regular-functions-affine-variety-coordinate-ring]], [[def-regular-function-classical-variety]]).

[L5] The function field of a classical affine variety $Z$ is $k(Z)=\operatorname{Frac}(k[Z])$; two classical affine varieties are birationally equivalent exactly when their function fields are isomorphic as extensions of $k$; for a dominant rational map $\eta:Z\dashrightarrow W$ the pullback is an injective $k$-algebra homomorphism $k(W)\hookrightarrow k(Z)$, and sending a dominant rational map to its pullback is a bijection onto the injective $k$-algebra homomorphisms, functorially under composition ([[def-function-field-variety]], [[thm-birational-equivalence-function-fields]], [[lem-dominant-map-pullback-function-fields]], [[thm-rational-maps-to-affine-variety-function-field]], [[def-dominant-morphism-and-rational-map]], [[def-birational-equivalence-varieties]]).

[L6] The integral closure of a domain in a field extension is an integrally closed domain, and an integral element is one satisfying a monic polynomial equation over the base ring ([[def-integral-closure-and-integrally-closed-domain]], [[thm-integral-closure-is-integrally-closed]], [[def-zero-divisor-and-integral-domain]], [[def-field-of-fractions]]).

[L7] The Axiom of Choice is the published choice principle assumed by the classical Nullstellensatz dictionary; every item of [L2] to [L5] that mentions coordinate duality, the Nullstellensatz, the variety/prime correspondence, the morphism anti-equivalence or the function-field correspondence reaches it ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The coordinate ring $A=k[X]$ of the irreducible affine variety $X$ is a finite-type $k$-algebra and, by [L3] (applied to the nonempty variety $X$), an integral domain; hence $A$ is a finite-type domain over $k$. By [L1] the integral closure $B$ of $A$ in $\operatorname{Frac}(A)=k(X)$ is a finite $A$-module, and by [L6] $B$ is an integrally closed domain with $A\subseteq B\subseteq k(X)$ and $\operatorname{Frac}(B)=\operatorname{Frac}(A)=k(X)$ because $B$ was formed inside $k(X)$. [L1, L3, L6, given]

2.1 $B$ is a reduced affine $k$-algebra: it is a finite module over the finite-type $k$-algebra $A$, hence a finite-type $k$-algebra by [L2], and it is a domain by [L6], hence reduced. By [L2] there are $n\ge0$ and an affine algebraic set $Y_0\subseteq\mathbf A_k^n$ with a $k$-algebra isomorphism $B\cong k[Y_0]$; the given variety $Y$ is one such, with $k[Y]\cong B$. Moreover $Y$ is nonempty: if $Y$ were empty, then by [L3] its vanishing ideal would be the unit ideal, so $k[Y]=0$, contradicting $B\cong k[Y]\ne0$. Since $k[Y]$ is a domain, [L3] makes $Y$ a classical affine variety; and $k[Y]\cong B$ is integrally closed by [L6], so $Y$ is normal in the stated sense. [L2, L3, L6, step 1.1]

3.1 By [L4] the canonical bijection $\operatorname{Mor}(Y,X)\cong\operatorname{Hom}_{k\text{-alg}}(k[X],k[Y])$ implemented by pullback attaches to the composition $k[X]=A\hookrightarrow B\cong k[Y]$ a unique morphism $\nu:Y\to X$ with $\nu^{*}:k[X]\to k[Y]$ equal to that inclusion. This is clause 1, and it is the map induced by the inclusion of the coordinate ring in its integral closure. [L4, step 1.1, step 2.1]

4.1 $\nu$ is finite: $k[Y]\cong B$ is a finite $A=k[X]$-module by step 1.1, and the $k[X]$-module structure transported to $k[Y]$ along $\nu^{*}$ is the same structure, so $k[Y]$ is a finite $k[X]$-module. This is clause 4. [L1, step 1.1, step 3.1]

4.2 $\nu$ is birational and $k(X)\cong k(Y)$ as $k$-extensions: by [L5] the pullback $\nu^{*}:k(X)\to k(Y)$ is the homomorphism of function fields induced by the coordinate-ring pullback $\nu^{*}:A\to k[Y]$, that is, by the inclusion $A\hookrightarrow B$ followed by $B\cong k[Y]$. Under the identifications $k(X)=\operatorname{Frac}(A)$ and $k(Y)=\operatorname{Frac}(k[Y])\cong\operatorname{Frac}(B)=\operatorname{Frac}(A)$ of [L5] and step 1.1, this is the identity, an isomorphism of $k$-extensions. Hence $X$ and $Y$ are birationally equivalent by [L5]; and since the inverse isomorphism $k(Y)\to k(X)$ corresponds by [L5] to a dominant rational map $\theta:X\dashrightarrow Y$, while the pullback of $\nu$ is invertible, the functoriality in [L5] gives $\theta\circ\nu=\operatorname{id}_Y$ and $\nu\circ\theta=\operatorname{id}_X$ as rational maps: the pullbacks of both sides agree, and the correspondence is injective. So $\nu$ is birational. This is clauses 2 (normality was settled in step 2.1) and 3. [L5, step 1.1, step 2.1, step 3.1]

5.1 The Axiom of Choice is used exactly through the published classical dictionary: as [L7] records, the object-level duality [L2], the variety/prime correspondence and Nullstellensatz [L3], the morphism anti-equivalence [L4] and the function-field correspondence [L5] that supply $Y$, the normality transport, birationality and the finiteness translation all reach the published axiom of choice (declared in the dependency list of this item). The module-finiteness theorem [L1] that makes $B$ a finite $A$-module is choice-free, so passing to the classical variety is the only place where choice is spent. Consequently the corollary holds under AC and states it explicitly; no smoothness or projectivity of $X$ or $Y$ is asserted or used. [L1, L2, L3, L4, L5, L7, step 2.1, step 3.1, step 4.1, step 4.2] ∎
