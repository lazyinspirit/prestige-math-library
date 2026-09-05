---
id: lem-dominant-map-pullback-function-fields
kind: lemma
title: "Dominant maps pull back function fields functorially"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-domain-of-definition-rational-map, def-dominant-morphism-and-rational-map, def-function-field-variety, def-principal-open-classical-variety, thm-affine-morphisms-coordinate-ring-anti-equivalence, thm-affine-variety-prime-coordinate-ring, thm-function-field-independent-affine-open, lem-density-nonempty-open-affine-variety]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 5k-l"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §3.1-§3.2"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $\eta:X \dashrightarrow Y$ be a dominant rational map between classical
affine varieties. Then pullback along any representative induces an injective
$k$-algebra homomorphism
$$ \eta^*:k(Y)\hookrightarrow k(X). $$
This construction is independent of the representative and is functorial under
composition of dominant rational maps.

## Facts & Assumptions

**Given:** Classical affine varieties $X$ and $Y$ and a dominant rational map $\eta:X \dashrightarrow Y$.

[L1] The function field of a classical affine variety is the fraction field of its coordinate ring ([[def-function-field-variety]]).

[L2] The domain of definition of $\eta$ is the union of the affine opens on which it has representatives ([[def-domain-of-definition-rational-map]]).

[L3] A dominant rational map is one whose representative on $\operatorname{Dom}(\eta)$ has dense image in $Y$ ([[def-dominant-morphism-and-rational-map]]).

[L4] A morphism between affine varieties corresponds to a pullback homomorphism on coordinate rings ([[thm-affine-morphisms-coordinate-ring-anti-equivalence]]).

[L5] The coordinate ring of a classical affine variety is an integral domain ([[thm-affine-variety-prime-coordinate-ring]]).

[L6] Every nonempty affine open has the same function field as the ambient variety ([[thm-function-field-independent-affine-open]]).

[L7] The principal open $D_Y(h)$ is the set where $h$ is nonzero ([[def-principal-open-classical-variety]]).

[L8] Every nonempty open subset of a classical affine variety is dense ([[lem-density-nonempty-open-affine-variety]]).

## Proof

**Proof technique:** direct.

1.1 Choose a representative morphism $\varphi:U \to Y$ of $\eta$ on a nonempty affine open $U \subseteq X$, guaranteed by [L2]. By [L4], $\varphi$ induces a $k$-algebra homomorphism $\varphi^*:k[Y]\to k[U]$. Using [L6] and [L1], regard $k[U]$ as a subring of $k(X)$. [L1, L2, L4, L6, given]

2.1 The map $\varphi^*$ is injective. Let $0 \ne h \in k[Y]$. By [L5], the ring $k[Y]$ is a domain, so [L7] makes $D_Y(h)$ a nonempty open subset of $Y$. Let $\psi:\operatorname{Dom}(\eta)\to Y$ be the representative from [L3] whose image is dense in $Y$. By the definition of rational map, $\psi$ and $\varphi$ agree on some nonempty open subset $W\subseteq U$. Since $W$ is a nonempty open subset of the classical affine variety $X$, [L8] makes $W$ dense in $X$, hence dense in the open subspace $\operatorname{Dom}(\eta)$. Therefore $\psi(W)$ is dense in $\psi(\operatorname{Dom}(\eta))$, which is dense in $Y$. Because $\varphi(W)=\psi(W)\subseteq\varphi(U)$, the image $\varphi(U)$ is dense in $Y$. It follows that $\varphi(U)$ meets $D_Y(h)$, so for some $u\in U$ one has $\varphi^*(h)(u)=h(\varphi(u))\ne0$. Hence $\varphi^*(h)\ne0$. [L3, L5, L7, L8, step 1.1]

3.1 For $a/b \in k(Y)=\operatorname{Frac}(k[Y])$, define $\eta^*(a/b):=\varphi^*(a)/\varphi^*(b) \in \operatorname{Frac}(k[U])=k(X)$. This is well defined because step 2.1 makes $\varphi^*(b)$ nonzero whenever $b \ne 0$. [L1, L6, step 1.1, step 2.1]

4.1 If $\psi:V \to Y$ is another representative of $\eta$, then by the definition of rational map the two representatives agree on some nonempty affine open $W \subseteq U \cap V$. Their coordinate-ring pullbacks therefore agree on $k[Y]$, and after passing to fraction fields and using [L6] for $W$, the two constructions of step 3.1 agree in $k(X)$. Thus $\eta^*$ is independent of the chosen representative. [L1, L6, step 1.1, step 3.1]

5.1 Let $\theta:Y \dashrightarrow Z$ be another dominant rational map, represented on some nonempty affine open of $Y$. On a common domain where both pullbacks are defined, pullback of regular functions satisfies $(\theta\circ\eta)^*(h)=\eta^*(\theta^*(h))$ for every $h \in k[Z]$. By fraction-field arithmetic the same identity holds for every element of $k(Z)$. Therefore pullback on function fields is functorial. [step 3.1, step 4.1, algebra] ∎
