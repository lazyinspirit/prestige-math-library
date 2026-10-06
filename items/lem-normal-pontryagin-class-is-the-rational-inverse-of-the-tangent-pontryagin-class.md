---
id: lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class
kind: lemma
title: "The normal Pontryagin class is the rational inverse of the tangent Pontryagin class"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-stable-normal-inverse-of-the-tangent-bundle", "def-pontryagin-classes-by-complexification", "thm-pontryagin-whitney-product-away-from-two", "thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes", "lem-second-countable-smooth-manifolds-have-cw-homotopy-type", "def-singular-cohomology-ring", "def-axiom-of-choice", cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex, thm-homotopy-invariance-of-vector-bundle-pullback, thm-naturality-normalization-and-whitney-sum-for-chern-classes, thm-singular-cohomology-is-graded-commutative]
justified_by: []
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045)"
      url: "https://arxiv.org/pdf/math/0604045"
      locator: "SS1-2, article pp. 1-13; the subsection 'The Whitney obstruction' on article pp. 11-12 (modulo 2 and integral Whitney obstructions, normal Stiefel-Whitney classes, Pontryagin classes p_i as embedding obstructions), and the knotting boundary in SS2-3 and SS5"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
---

## Statement

Assume AC. Let $M$ be a closed connected smooth $m$-manifold, let $(\nu,\varphi)$ be a stable normal inverse of $M$ with $\varphi:TM\oplus\nu\to\varepsilon^N$, and let $p(E)=\sum_ip_i(E)$ denote the total Pontryagin class in the AT normalization $p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})$ ([[def-pontryagin-classes-by-complexification]]). Then $$p(TM)\,p(\nu)=1\qquad\text{in }H^*(M;\mathbb Q).$$ Hence $p(\nu)$ is the unique inverse of $p(TM)$ in $H^*(M;\mathbb Q)$, and the classes $p_i(\nu)$ depend only on $M$, not on the chosen stable normal inverse. All assertions in this item are over $\mathbb Q$. The integral Pontryagin Whitney product holds only modulo elements of order two, so no integral multiplicativity is asserted here. Orientation of $M$ is not needed, since $p_i$ is defined for every real bundle by complexification; connectedness is exactly the hypothesis of the AT Whitney-product item.

## Facts & Assumptions

**Given:** A closed connected smooth $m$-manifold $M$, a stable normal inverse $(\nu,\varphi)$ with $\varphi:TM\oplus\nu\to\varepsilon^N$ an isomorphism, and AC ([[def-stable-normal-inverse-of-the-tangent-bundle]], [[def-axiom-of-choice]]).

[F1] Pontryagin classes are defined by $p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})\in H^{4i}(B;\mathbb Z)$, with $p_0=1$, $p_i=0$ whenever $2i>\operatorname{rank}E$, and total class $p(E)=\sum_ip_i(E)$; the complexification is determined by $E$ up to canonical isomorphism, so the classes depend only on the isomorphism class of $E$, and no orientation of $E$ is used ([[def-pontryagin-classes-by-complexification]]).

[F2] Over $\mathbb Z[1/2]$, or any coefficient ring in which $2$ is invertible, the Whitney product $p(E\oplus F)=p(E)p(F)$ holds for numerable real bundles over a path-connected paracompact Hausdorff CW base ([[thm-pontryagin-whitney-product-away-from-two]]); over such a ring the two-torsion cross terms drop out. Integrally this multiplicativity is not asserted.

[F3] For a numerable real bundle over a nonempty path-connected paracompact Hausdorff CW base one has the stability $p_i(E\oplus\varepsilon^r)=p_i(E)$ and the rank vanishing $p_i(E)=0$ when $2i>\operatorname{rank}E$ ([[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]], [[def-pontryagin-classes-by-complexification]]).

[F4] Under AC, $M$ is paracompact Hausdorff CGWH of CW homotopy type and its smooth bundles are numerable ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]). A continuous image of compact $M$ in a CW complex lies in a finite subcomplex ([[cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex]]). Homotopic maps from a paracompact Hausdorff base give isomorphic pullback bundles ([[thm-homotopy-invariance-of-vector-bundle-pullback]]). Chern naturality permits a CW-type source and a CW target ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]); since complexification commutes with pullback in bundle charts, the same pullback formula holds for $p_i=(-1)^ic_{2i}$. These facts allow transfer of [F2] and [F3] from a finite CW model to $M$, as shown below.

[F5] Singular cohomology is a graded-commutative unital ring ([[def-singular-cohomology-ring]], [[thm-singular-cohomology-is-graded-commutative]]). Pontryagin classes have degrees divisible by four, so their total classes commute. If $uv=1=uw$ for commuting classes, then $v=v(uw)=(vu)w=w$.

## Proof

1.1 If $M$ is empty, its cohomology is the zero ring and the identity and inverse assertions hold with $0=1$. Otherwise choose a CW complex $K$ and maps $a:M\to K$, $b:K\to M$ with $ba\simeq\operatorname{id}_M$ by [F4]. The compact image $a(M)$ lies in a finite subcomplex; take its connected component $L$ containing $a(M)$, and restrict $b$ to $L$. A finite CW complex is compact Hausdorff (it is a finite union of characteristic-disk images), hence paracompact (every open cover has a finite, thus locally finite, subcover); its connected components are path connected. For each bundle $E$ among $TM,\nu,TM\oplus\nu,\varepsilon^N$, put $E_L=b^*E$. Pullback numerations make these bundles numerable. Then $a^*E_L\cong E$ by homotopy invariance, and Chern naturality in [F4] gives $p_i(E)=a^*p_i(E_L)$. Pullback preserves sums and trivial bundles in their charts. Thus the Whitney identity and stability of [F2] and [F3], applied on $L$ and pulled back along $a$, hold for the given bundles on $M$. Finally $\varphi$ gives $p(TM\oplus\nu)=p(\varepsilon^N)$ by isomorphism invariance [F1]. [F1, F2, F3, F4, construct]

2.1 Over $\mathbb Q$, where $2$ is invertible, [F2] gives $p(TM\oplus\nu)=p(TM)p(\nu)$ in $H^*(M;\mathbb Q)$. For the trivial bundle, apply the stability clause of [F3] with the rank-zero bundle $0_M$: $p_i(\varepsilon^N)=p_i(0_M\oplus\varepsilon^N)=p_i(0_M)$ for every $i$, and the rank convention $p_i(0_M)=0$ for $i\ge1$ together with $p_0=1$ gives $p(\varepsilon^N)=1$. Combining with step 1.1, $$p(TM)p(\nu)=p(TM\oplus\nu)=p(\varepsilon^N)=1\qquad\text{in }H^*(M;\mathbb Q).$$ [F2, F3, step 1.1]

3.1 By [F5] the inverse of the unit $p(TM)$ in the unital ring $H^*(M;\mathbb Q)$ is unique, so $p(\nu)=p(TM)^{-1}$ and the classes $p_i(\nu)$ do not depend on the chosen stable normal inverse $(\nu,\varphi)$. This is the rational form of the Pontryagin normal-class identity; no integral multiplicativity is obtained, because [F2] carries the two-torsion caveat and the odd Chern cross terms of a complexified real bundle can be nonzero two-torsion by [F1]. For a disconnected closed $M$ the same computation applies to each component, and the identity then holds componentwise. AC is inherited through [F2] and [F3]; no orientation of $M$ is used anywhere. [F1, F2, F5, step 2.1] ∎
