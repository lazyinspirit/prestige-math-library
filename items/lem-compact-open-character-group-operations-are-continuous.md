---
id: lem-compact-open-character-group-operations-are-continuous
kind: lemma
title: "The compact-open character group is a Hausdorff topological abelian group"
deps:
- def-pontryagin-dual-and-compact-open-topology
- lem-unit-circle-is-a-compact-metrizable-topological-group
- def-compact-open-topology-for-topological-domains
- def-topological-group
- def-hausdorff-space
- def-group-homomorphism
- def-kernel-and-image-of-group-homomorphism
- def-subspace-topology-top
- def-compact-space
- thm-product-universal-property
- lem-continuity-is-local-and-pastes
- thm-metric-hausdorff-separation
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- lem-complex-conjugation-and-modulus-laws
- thm-compactness-under-continuous-maps
- thm-closed-subspace-of-a-compact-space-is-compact
- lem-compactness-of-a-subspace-is-ambient
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: "Dikran D. Dikranjan, Introduction to Topological Groups (author lecture notes, Universita di Udine / Universidad Complutense de Madrid, 2007)"
    url: "http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf"
    locator: "Section 7.1 (printed p. 47), Theorem 7.2(c)-(d): {W(K, Lambda_1)} is a base of the neighbourhoods of 0 and W(A,Lambda_s) + W(A,Lambda_s) is contained in W(A,Lambda_{s-1}); translated to multiplicative notation."
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand 1953, Chapter VII, Sections 34-35 (printed pp. 134-140)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
    locator: "Sections 34C-34D, printed pp. 137-138: compact uniform convergence and continuity of pointwise group operations. Compact-open equivalence for arbitrary domains is proved here."
status: published
origin: pipeline
proof_strategy: direct
---
## Statement

Let $G$ be an abelian topological group and let $\widehat G$ be its Pontryagin
dual ([[def-pontryagin-dual-and-compact-open-topology]]). With pointwise
multiplication and inversion, $\widehat G$ is a Hausdorff topological abelian
group ([[def-topological-group]], [[def-hausdorff-space]]). Explicitly, for
$f,g\in\widehat G$, compact $K\subseteq G$ and $\varepsilon>0$, writing
$U_K(f,r):=\{h\in\widehat G:|h(x)-f(x)|<r\text{ for every }x\in K\}$ for $r>0$,
these sets form a neighbourhood basis at $f$, and
$$U_K(f,\varepsilon/2)\cdot U_K(g,\varepsilon/2)\subseteq U_K(fg,\varepsilon),\qquad U_K(f,\varepsilon)^{-1}=U_K(f^{-1},\varepsilon).$$

## Facts & Assumptions

[F1] $\mathbb T$ is a compact metrizable topological abelian group; in particular multiplication and inversion are continuous and every element has modulus $1$. For all $z,w\in\mathbb T$ one has $|z^{-1}-w^{-1}|=|z-w|$ and $|zw-z|=|w-1|$. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]])

[F2] $\widehat G=\operatorname{Hom}_{cts}(G,\mathbb T)$ is the set of continuous homomorphisms $\gamma:G\to\mathbb T$, with pointwise multiplication and the compact-open topology with subbasis $S(K,V)=\{\gamma:\gamma[K]\subseteq V\}$ for compact $K\subseteq G$ and open $V\subseteq\mathbb T$. ([[def-pontryagin-dual-and-compact-open-topology]])

[F3] For all complex $z,w$: $|zw|=|z||w|$, $|z+w|\le|z|+|w|$, and $z\overline z=|z|^{2}$; also $|\exp(iy)|=1$ for real $y$. ([[lem-complex-conjugation-and-modulus-laws]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]])

[F4] A map into a product space is continuous exactly when all its components are, and composites of continuous maps are continuous. ([[thm-product-universal-property]], [[lem-continuity-is-local-and-pastes]])

[F5] Subbasic open sets on a subspace are the traces of subbasic open sets of the ambient space, and singletons are compact. ([[def-subspace-topology-top]], [[def-compact-open-topology-for-topological-domains]], [[def-compact-space]])

[F6] $\mathbb T$ is Hausdorff: distinct points of a metric space are separated by disjoint open balls. ([[thm-metric-hausdorff-separation]], [[def-hausdorff-space]])

[F7] Continuous images of compact sets are compact; continuous real-valued functions on nonempty compact spaces attain their maxima; closed subsets of compact spaces and finite unions of compact subsets are compact. Compact subsets admit finite subcovers from ambient open covers. ([[thm-compactness-under-continuous-maps]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[lem-compactness-of-a-subspace-is-ambient]])

## Proof

**Given:** An abelian topological group $G$ and its dual $\widehat G$ with the compact-open topology.

1.1 Pointwise multiplication and inversion are well defined on $\widehat G$ and give it the structure of an abelian group: for $f,g\in\widehat G$ the maps $fg$ and $f^{-1}$ are group homomorphisms because $(fg)(x+y)=f(x+y)g(x+y)=f(x)f(y)g(x)g(y)=f(x)g(x)f(y)g(y)=(fg)(x)(fg)(y)$ and $f^{-1}(x+y)=f(x+y)^{-1}=f(x)^{-1}f(y)^{-1}$ by [F2] and commutativity of $\mathbb T$; they are continuous because $x\mapsto(f(x),g(x))$ is continuous into the product by [F4], multiplication on $\mathbb T$ is continuous by [F1], and $fg$ is the composite of these two maps, while $f^{-1}$ is the composite of $f$ with the continuous inversion of $\mathbb T$ by [F1] and [F4]. The group axioms for $\widehat G$ hold pointwise because $\mathbb T$ is an abelian group by [F1], with pointwise constant $1$ as identity. [F1, F2, F4]

1.2 Each $U_K(f,r)$ is compact-open open. First, for any character $h$ and $a>0$, cover the compact image $h[K]$ by finitely many balls $B(z_j,a/3)$ with centres in $\mathbb T$, and put $L_j:=\{x\in K:|h(x)-z_j|\le a/3\}$. These closed subsets of $K$ are compact and cover $K$ by [F7]. The open set $W_h:=\bigcap_j S(L_j,B(z_j,2a/3))$ contains $h$ and lies in $U_K(h,a)$ by the triangle inequality. Now if $h\in U_K(f,r)$ and $K\ne\varnothing$, the continuous function $x\mapsto|h(x)-f(x)|$ attains a maximum $m<r$ by [F7]; its continuity follows from $\big||u-v|-|u'-v'|\big|\le|u-u'|+|v-v'|$. Choose $0<a<r-m$. The preceding $W_h$ is contained in $U_K(f,r)$, so every member of $U_K(f,r)$ has an open neighbourhood inside it. If $K=\varnothing$, $U_K(f,r)=\widehat G$. [F2, F3, F7]

1.3 The displayed estimates hold: for $f'\in U_K(f,\varepsilon/2)$, $g'\in U_K(g,\varepsilon/2)$ and $x\in K$, $|f'(x)g'(x)-f(x)g(x)|\le|f'(x)-f(x)|+|g'(x)-g(x)|<\varepsilon$, since all values have modulus $1$. Also $|f'(x)^{-1}-f(x)^{-1}|=|f'(x)-f(x)|$; inversion is involutive, so the second displayed equality follows. [F1, F3]

1.4 $\widehat G$ is Hausdorff: if $f\ne g$ in $\widehat G$, there is $x\in G$ with $f(x)\ne g(x)$; by [F6] choose disjoint open $V,W\subseteq\mathbb T$ with $f(x)\in V$, $g(x)\in W$; then $S(\{x\},V)$ and $S(\{x\},W)$ are open in $\widehat G$ by [F5], they contain $f$ and $g$ respectively, and they are disjoint because no function can take the same value in both $V$ and $W$. [F2, F5, F6]

2.1 These sets form a neighbourhood basis at $f$. If $f\in S(K,V)$, cover $f[K]$ by finitely many balls $B(z_j,a_j)$ with $a_j>0$ and $B(z_j,2a_j)\subseteq V$, using compactness of $f[K]$ and openness of $V$. For $r:=\min_j a_j>0$, the triangle inequality gives $U_K(f,r)\subseteq S(K,V)$. For empty $K$ take any $r>0$. Any finite intersection of such subbasic neighbourhoods contains $U_{\bigcup_jK_j}(f,\min_jr_j)$, and the union is compact by [F7]; an empty intersection is the whole dual. Together with step 1.2 this proves the basis assertion. [step 1.2, F2, F3, F7]

3.1 Multiplication and inversion on $\widehat G$ are continuous. By step 2.1 it suffices to test $U_K(fg,\varepsilon)$ and $U_K(f^{-1},\varepsilon)$ at arbitrary $f,g$. Step 1.3 maps the open rectangle $U_K(f,\varepsilon/2)\times U_K(g,\varepsilon/2)$ into the first set and maps the open neighbourhood $U_K(f,\varepsilon)$ into the second. [step 1.1, step 2.1, step 1.3, F4]

4.1 The pointwise group of step 1.1 is Hausdorff by step 1.4 and has continuous operations by step 3.1, so it is a Hausdorff topological abelian group. The asserted neighbourhood basis and estimates are steps 2.1 and 1.3. [step 1.1, step 2.1, step 1.3, step 1.4, step 3.1] ∎
