---
id: lem-dual-homomorphisms-are-continuous-and-functorial
kind: lemma
title: 'Dual homomorphisms: continuity, and the annihilator of a closed subgroup'
deps:
- def-pontryagin-dual-and-compact-open-topology
- lem-compact-open-character-group-operations-are-continuous
- lem-unit-circle-is-a-compact-metrizable-topological-group
- thm-quotient-universal-property
- def-quotient-topology
- def-quotient-group
- lem-open-or-closed-surjection-is-quotient
- cor-quotient-of-an-abelian-group-is-abelian
- def-kernel-and-image-of-group-homomorphism
- def-subspace-topology-top
- def-homeomorphism-and-open-maps
- def-group-homomorphism
- def-axiom-of-choice
- def-compact-space
- lem-compactness-of-a-subspace-is-ambient
- lem-finite-choice
- lem-continuity-is-local-and-pastes
- thm-compactness-under-continuous-maps
- def-locally-compact-space
- def-neighbourhood-top
- thm-compact-subset-of-a-hausdorff-space-is-closed
- def-hausdorff-space
- def-topological-group
- lem-topological-group-translations-and-inversion
- def-product-topology
- thm-product-universal-property
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Dikran D. Dikranjan, Introduction to Topological Groups (author lecture
      notes, Universita di Udine / Universidad Complutense de Madrid, 2007)
    url: http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf
    locator: "Section 7.3, Lemma 7.16, printed p. 52: continuous dual pullbacks and compact-lift embeddings; Section 7.4, Corollary 7.29, printed p. 56: the quotient dual is the annihilator."
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand
      1953, Chapter VII, Sections 34-35 (printed pp. 134-140)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Section 35B: the dual of a quotient group is the annihilator of the
      subgroup, and the pullback along a continuous homomorphism is continuous.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards
      Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, Theorem C.13: (G/H)^ is the annihilator of H under the
      dual of the quotient map.'
status: draft
origin: pipeline
proof_strategy: direct
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), used only in part (b),
through the compact-lift theorem for closed subgroup quotients.

(a) If $\varphi:G\to H$ is a continuous homomorphism of abelian topological
groups, the pullback $\widehat\varphi:\widehat H\to\widehat G$,
$\widehat\varphi(\gamma):=\gamma\circ\varphi$, is a continuous group
homomorphism.

(b) If $H$ is a closed subgroup of a locally compact Hausdorff abelian group
$G$ and $q:G\to G/H$ is the quotient homomorphism, then
$\widehat q:\widehat{G/H}\to\widehat G$ is a topological group isomorphism onto
the annihilator $H^{\perp}=\{\gamma\in\widehat G:\gamma(h)=1\text{ for all }h\in H\}$,
a closed subgroup of $\widehat G$. No stronger claim is made for pullbacks along
non-proper maps.

## Facts & Assumptions

[F1] Characters are the continuous homomorphisms into $\mathbb T$; $\widehat G$ carries pointwise multiplication and the compact-open topology with subbasis $S(K,V)=\{\gamma:\gamma[K]\subseteq V\}$ for compact $K\subseteq G$ and open $V\subseteq\mathbb T$. ([[def-pontryagin-dual-and-compact-open-topology]])

[F2] $\widehat G$ is a Hausdorff topological abelian group; translations $\gamma\mapsto\gamma_{0}\gamma$ are homeomorphisms. ([[lem-compact-open-character-group-operations-are-continuous]], [[def-homeomorphism-and-open-maps]])

[F3] Composites of continuous maps are continuous, and continuous images of compact sets are compact. ([[lem-continuity-is-local-and-pastes]], [[thm-compactness-under-continuous-maps]], [[def-compact-space]])

[F4] Quotient universal property: a continuous map on $G$ constant on the fibres of the quotient map $q$ factors uniquely through $G/H$, and continuity of a map out of $G/H$ is equivalent to continuity after composition with $q$. ([[thm-quotient-universal-property]], [[def-quotient-topology]])

[F5] If $H$ is a subgroup of an abelian group $G$, its cosets form the abelian quotient group $G/H$ with $(x+H)+(y+H)=x+y+H$. The quotient topology makes $q$ a continuous quotient surjection. ([[def-quotient-group]], [[cor-quotient-of-an-abelian-group-is-abelian]], [[def-quotient-topology]])

[F6] An open continuous surjection is a quotient map. ([[lem-open-or-closed-surjection-is-quotient]])

[F7] Multiplication on $\mathbb T$ is continuous and $1$ is closed in the metric space $\mathbb T$. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]])

[F8] A locally compact space gives each point a compact neighbourhood containing an open neighbourhood. Compact subsets of a Hausdorff space are closed; finite unions of compact subsets are compact (combine the finitely many finite subcovers). In a topological group, translations and inversion are homeomorphisms and group operations are continuous. Products have the basis of finite open-coordinate constraints and maps into products are continuous coordinatewise. ([[def-locally-compact-space]], [[def-neighbourhood-top]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-compact-space]], [[lem-compactness-of-a-subspace-is-ambient]], [[def-hausdorff-space]], [[def-topological-group]], [[lem-topological-group-translations-and-inversion]], [[def-product-topology]], [[thm-product-universal-property]])

[F9] A compact subset has a finite subcover from every family of ambient open sets covering it, also in indexed form; choosing from finitely many listed nonempty sets requires no Axiom of Choice. ([[lem-compactness-of-a-subspace-is-ambient]], [[lem-finite-choice]])

[A1] The Axiom of Choice supplies a choice from each member of an arbitrary family of nonempty sets. ([[def-axiom-of-choice]])

## Proof

**Given:** Continuous homomorphisms of abelian topological groups as in (a) and (b), and the Axiom of Choice for the compact-lift theorem.

1.1 Part (a): for $\gamma\in\widehat H$ the composite $\gamma\circ\varphi$ is continuous by [F3] and is a homomorphism, so $\widehat\varphi(\gamma)\in\widehat G$; $\widehat\varphi$ is a group homomorphism because $\widehat\varphi(\gamma_{1}\gamma_{2})(x)=\gamma_{1}(\varphi(x))\gamma_{2}(\varphi(x))=(\widehat\varphi\gamma_{1})(x)(\widehat\varphi\gamma_{2})(x)$. For compact $K\subseteq G$ and open $V\subseteq\mathbb T$ the preimage satisfies $\widehat\varphi^{-1}\big(S_{G}(K,V)\big)=\{\gamma\in\widehat H:\gamma[\varphi[K]]\subseteq V\}=S_{H}(\varphi[K],V)$, and $\varphi[K]$ is compact by [F3]; this set is subbasic open in $\widehat H$ by [F1], so $\widehat\varphi$ is continuous. Pullback preserves the identity map and reverses composition: for $\psi:H\to J$, associativity gives $\gamma\circ(\psi\circ\varphi)=(\gamma\circ\psi)\circ\varphi$, hence $\widehat{\psi\circ\varphi}=\widehat\varphi\circ\widehat\psi$. [F1, F2, F3]

1.2 Part (b), quotient topology. For every open $O\subseteq G$, $q^{-1}(q(O))=O+H=\bigcup_{h\in H}(O+h)$ is open by translations, hence $q(O)$ is open by the quotient topology. Thus $q$ is open. Distinct cosets $q(x),q(y)$ have $x-y\notin H$. Closedness of $H$ gives an open neighbourhood $W$ of $x-y$ disjoint from $H$. By continuity of subtraction choose identity neighbourhoods $U,V$ with $(x-y)+U-V\subseteq W$. The open sets $q(x+U)$ and $q(y+V)$ are disjoint: an intersection would give $x+u-y-v\in H\cap W$. Therefore $G/H$ is Hausdorff. For any $x\in G$, choose a compact neighbourhood $N$ of $x$ and open $U$ with $x\in U\subseteq N$. Then $q(N)$ is compact by continuity, closed because the quotient is Hausdorff, and contains the open neighbourhood $q(U)$ of $q(x)$. Thus the quotient is locally compact. The product $q\times q$ is a continuous open surjection: images of basic open rectangles are open rectangles, and arbitrary opens are unions of those rectangles. It is therefore quotient by [F6]. The quotient multiplication is continuous since its composite with $q\times q$ is the continuous map $q\circ m_G$, and the quotient universal property [F4] applies; similarly inversion descends through $q$. Hence $G/H$ is an abelian topological group. [F3, F4, F5, F6, F8]

1.3 $H^{\perp}$ is closed in $\widehat G$: it is the intersection over $h\in H$ of the sets $\{\gamma:\gamma(h)=1\}$, each of which is the preimage of the closed set $\{1\}\subseteq\mathbb T$ under the evaluation map $\gamma\mapsto\gamma(h)$, and that evaluation is continuous because $\{\gamma:\gamma(h)\in V\}=S(\{h\},V)$ is subbasic open for every open $V\subseteq\mathbb T$. [F1, F7]

2.1 Compact lifts, proved locally. Let $L\subseteq G/H$ be compact. If $L=\varnothing$, take $K=\varnothing$. Otherwise, for every $l\in L$ the set of triples $(x,N,U)$ with $q(x)=l$, $N$ a compact neighbourhood of $x$, and $U$ open with $x\in U\subseteq N$ is nonempty by surjectivity and [F8]. Use [A1] to choose such a triple $(x_l,N_l,U_l)$ for each $l$; this is the only invocation of Choice in this argument. By step 1.2 the sets $q(U_l)$ form an open cover of $L$. The indexed ambient-cover criterion [F9] gives finitely many indices whose sets cover $L$. Take their associated triples, and let $K$ be the union of the corresponding $N_l$. Finite unions of compact subsets are compact by [F8], and $L\subseteq\bigcup_l q(U_l)\subseteq q(K)$. This proves the compact-lift theorem needed below from earlier topology alone. [A1, F5, F8, F9, step 1.2]

2.2 The pullback $\widehat q:\widehat{G/H}\to\widehat G$ is a continuous group homomorphism by step 1.1 applied to the continuous homomorphism $q$; its image lies in $H^{\perp}$ because $\widehat q(\gamma)(h)=\gamma(q(h))=\gamma(0)=1$ for $h\in H$, and $\widehat q$ is injective because $\gamma\circ q=1$ forces $\gamma=1$, the quotient map $q$ being surjective. [step 1.1, step 1.2, F1, F5]

3.1 The image of $\widehat q$ equals $H^{\perp}$: if $\gamma\in\widehat G$ satisfies $\gamma[H]=\{1\}$, then $\gamma$ is constant on the fibres of $q$, for $q(x)=q(x')$ means $x-x'\in H$ and then $\gamma(x)=\gamma(x')\gamma(x-x')=\gamma(x')$; the quotient universal property [F4] factors $\gamma=\gamma'\circ q$ with $\gamma'$ continuous, and $\gamma'$ is a homomorphism because for cosets $a=q(x)$, $b=q(y)$ one has $\gamma'(a+b)=\gamma'(q(x+y))=\gamma(x+y)=\gamma(x)\gamma(y)=\gamma'(a)\gamma'(b)$. Hence $\gamma=\widehat q(\gamma')\in\widehat q[\widehat{G/H}]$. [step 2.2, F1, F4, F5]

4.1 The inverse $\widehat q^{-1}:H^{\perp}\to\widehat{G/H}$ is continuous: fix $\gamma_{0}\in H^{\perp}$ and put $\delta_{0}:=\widehat q^{-1}(\gamma_{0})$, and let $S(L,V)=\{\delta:\delta[L]\subseteq V\}$ be a subbasic open set containing $\delta_{0}$, with $L\subseteq G/H$ compact and $V\subseteq\mathbb T$ open. Since $L$ is compact and $\delta_{0}$ is continuous, $\delta_{0}[L]$ is compact by [F3]; consider all pairs $(A,B)$ of open subsets of $\mathbb T$ with $1\in B$ and $AB\subseteq V$. The first coordinates $A$ of these pairs cover $\delta_0[L]$: for every $t\in\delta_0[L]\subseteq V$, continuity of multiplication at $(t,1)$ provides such a pair with $t\in A$. The ambient-cover criterion [F9] selects finitely many first coordinates $A_1,\ldots,A_n$ covering $\delta_0[L]$, and finite choice [F9] selects their associated $B_i$. Set $W=\bigcap_{i=1}^n B_i$, an open neighbourhood of $1$ with $\delta_0(l)W\subseteq V$ for every $l\in L$; for empty $L$, use $W=\mathbb T$. This construction uses no arbitrary-index choice. By the compact-lift theorem in step 2.1 choose compact $K\subseteq G$ with $L\subseteq q[K]$; then $N:=\big(\gamma_{0}\cdot S_{G}(K,W)\big)\cap H^{\perp}$ is a neighbourhood of $\gamma_{0}$ in $H^{\perp}$, because $S_{G}(K,W)$ is a subbasic open neighbourhood of $1$ in $\widehat G$ and translation by $\gamma_{0}$ is a homeomorphism by [F2]. For $\gamma=\gamma_{0}\eta\in N$ with $\eta\in S_{G}(K,W)$ and $l=q(k)\in L$ with $k\in K$ one has $\widehat q^{-1}(\gamma)(l)=\gamma(k)=\gamma_{0}(k)\eta(k)=\delta_{0}(l)\eta(k)\in\delta_{0}(l)W\subseteq V$; hence $\widehat q^{-1}[N]\subseteq S(L,V)$ and $\widehat q^{-1}$ is continuous at the arbitrary point $\gamma_{0}$. [step 2.1, step 2.2, step 3.1, F2, F3, F5, F7, F9]

5.1 Conclusion of (b): by steps 2.2, 3.1 and 4.1 the map $\widehat q$ is a group isomorphism of $\widehat{G/H}$ onto $H^{\perp}$ that is continuous and has continuous inverse, hence a topological group isomorphism onto $H^{\perp}$; $H^{\perp}$ is closed in $\widehat G$ by step 1.3, and it is a subgroup because it is the kernel of the homomorphism $\gamma\mapsto(\gamma(h))_{h\in H}$ restricted to the abelian group $\widehat G$. Together with part (a), proved in step 1.1, this is the statement. [step 1.1, step 2.2, step 3.1, step 1.3, step 4.1] ∎