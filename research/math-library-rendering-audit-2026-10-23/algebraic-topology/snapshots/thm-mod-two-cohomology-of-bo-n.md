---
id: thm-mod-two-cohomology-of-bo-n
kind: theorem
title: Mod-two cohomology of BO(n)
status: published
origin: pipeline
deps: ["def-stiefel-space-grassmannian-and-tautological-bundle", "def-tautological-degree-one-class-on-a-real-projective-bundle", "lem-tautological-degree-one-class-is-well-defined-and-fiber-generating", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "thm-naturality-of-stiefel-whitney-classes", "thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle", "thm-cohomological-serre-spectral-sequence", "thm-stable-stiefel-space-is-contractible", "thm-schubert-cells-give-the-stable-grassmannian-cw-structure", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "def-r-oriented-vector-bundle-and-orientation-local-system", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Theorem 3.9, second proof by the Gysin sequence, printed pp.84–90"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lectures 34–37, printed pp.125–138"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. For every $n\geq0$,
$$H^*(B\operatorname O(n);\mathbb F_2)=\mathbb F_2[w_1,\ldots,w_n],\qquad |w_i|=i,$$
where $B\operatorname O(n)=\operatorname{Gr}_n(\mathbb R^\infty)$ is the
stable real Grassmannian and $w_i=w_i(\gamma_n)$ are the Stiefel–Whitney
classes of its tautological bundle. For $n=0$ the right side is $\mathbb F_2$.

## Facts & Assumptions

**Given:** AC and an integer $n\geq0$, with $\gamma_n\to B\operatorname O(n)$ the tautological rank-$n$ real bundle.

[F1] The stable real Grassmannian $B\operatorname O(n)=\operatorname{Gr}_n(\mathbb R^\infty)$ is a path-connected CW complex, and for $n=0$ it is a point; the tautological bundle over it is numerable ([[def-stiefel-space-grassmannian-and-tautological-bundle]], [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]).

[F2] Every real vector bundle is canonically $\mathbb F_2$-oriented; in particular $\gamma_n$ and all its pullbacks carry canonical mod-two orientations ([[def-r-oriented-vector-bundle-and-orientation-local-system]]).

[F3] The mod-two Gysin sequence of an $\mathbb F_2$-oriented rank-$r$ numerable bundle $\xi$ over a base in the scope of the general Thom theorem reads $\cdots\to H^{k-r}(B;\mathbb F_2)\xrightarrow{\smile e_2(\xi)}H^k(B;\mathbb F_2)\xrightarrow{\pi^*}H^k(S(\xi);\mathbb F_2)\xrightarrow{\partial_G}H^{k-r+1}(B;\mathbb F_2)\to\cdots$, exactly and naturally ([[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]]).

[F4] For a Serre fibration over a path-connected CW complex, the cohomological Serre spectral sequence has $E_2^{a,b}\cong H^a(B;\mathcal H^b)$ and converges to $H^{a+b}$ of the total space, naturally ([[thm-cohomological-serre-spectral-sequence]]).

[F5] The stable Stiefel space $V_1(\mathbb R^\infty)=S^\infty$ is contractible, and a contractible space has vanishing reduced cohomology in every degree by homotopy invariance ([[thm-stable-stiefel-space-is-contractible]]).

[F6] $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[a]$ with $|a|=1$. The tautological class $x_{\gamma_1}$ is the pullback of $a$ along a classifying map of the universal line; independence of that map permits the identity map, which classifies $\gamma_1$, and hence $x_{\gamma_1}=a$. The rank-one projective-bundle relation then gives $w(\gamma_1)=1+x_{\gamma_1}=1+a$ ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]], [[def-tautological-degree-one-class-on-a-real-projective-bundle]], [[lem-tautological-degree-one-class-is-well-defined-and-fiber-generating]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[F7] The Whitney product formula, naturality of the classes, and the vanishing $w(G)=1$ for a trivial bundle hold over admissible bases ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[thm-naturality-of-stiefel-whitney-classes]]).

[F8] Under AC pullback of the tautological $\mathbb F$-bundle gives a natural bijection $[X,\operatorname{Gr}_n(\mathbb F^\infty)]\cong\operatorname{Vect}^{\mathbb F}_n(X)$ on paracompact Hausdorff CGWH spaces, in particular on CW complexes, so every numerable real rank-$n$ bundle over a CW complex has a classifying map into $B\operatorname O(n)$ ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 The cases $n=0$ and $n=1$. For $n=0$ the Grassmannian is a point and $H^*=\mathbb F_2$ by [F1], with no positive classes. For $n=1$ the Grassmannian is $\mathbb{RP}^\infty$, so [F6] gives $H^*=\mathbb F_2[a]=\mathbb F_2[w_1(\gamma_1)]$ because $w_1(\gamma_1)=a$; this is the assertion for $n=1$. [F1, F6]

1.2 The sphere bundle and its total space. For $n\geq2$ let $\pi:S(\gamma_n)\to B\operatorname O(n)$ be the unit sphere bundle of $\gamma_n$, a numerable fiber bundle with fiber $S^{n-1}$, and consider $p:S(\gamma_n)\to B\operatorname O(n-1)=\operatorname{Gr}_{n-1}(\mathbb R^\infty)$, $(W,v)\mapsto W\cap v^{\perp}$, the orthogonal complement of $v$ in the $n$-plane $W$. In a local frame of $\gamma_n$ this is the map $U\times S^{n-1}\to\operatorname{Gr}_{n-1}(\mathbb R^\infty)$ obtained by orthogonally completing the frame; it is a numerable fiber bundle whose fiber over an $(n-1)$-plane $P$ is the unit sphere in $P^{\perp}\cong\mathbb R^\infty$, that is $S^\infty$. Since $B\operatorname O(n-1)$ is a path-connected CW complex by [F1], the spectral sequence [F4] has $E_2^{a,b}=H^a(B\operatorname O(n-1);\mathcal H^b)$ with $\mathcal H^b=0$ for $b>0$ and $\mathcal H^0=\mathbb F_2$ constant by [F5], so the sequence is concentrated in the row $b=0$ and the edge map $p^*:H^k(B\operatorname O(n-1);\mathbb F_2)\to H^k(S(\gamma_n);\mathbb F_2)$ is an isomorphism for every $k$. [F1, F4, F5]

2.1 The pullback of the tautological bundle splits. Let $L\subseteq\pi^*\gamma_n$ be the vertical line bundle, whose fiber over $(W,v)$ is the line $\mathbb R v$; it is trivialized by the section $(W,v)\mapsto(W,v,v)$. Orthogonal projection with respect to a metric on $\pi^*\gamma_n$ splits $\pi^*\gamma_n\cong L\oplus p^*\gamma_{n-1}$, because the fiber of $p^*\gamma_{n-1}$ over $(W,v)$ is $W\cap v^{\perp}$. Therefore, by [F7], the total class is multiplicative, $$w(\pi^*\gamma_n)=w(L)\,w(p^*\gamma_{n-1})=w(p^*\gamma_{n-1}),$$ since the trivial line bundle $L$ has total class $1$; comparing components of this identity gives $w_j(\pi^*\gamma_n)=w_j(p^*\gamma_{n-1})=p^*w_j(\gamma_{n-1})$ for every $j$. [F7, step 1.2]

3.1 The map $\eta$ and surjectivity. Define $\eta:H^*(B\operatorname O(n);\mathbb F_2)\to H^*(B\operatorname O(n-1);\mathbb F_2)$ as the composite of $\pi^*$ with the inverse of the isomorphism $p^*$ of step 1.2. Then step 2.1 gives $\eta(w_j(\gamma_n))=w_j(\gamma_{n-1})$ for every $j$, with the convention $w_n(\gamma_{n-1})=0$. Assume now, as induction hypothesis, that $H^*(B\operatorname O(n-1);\mathbb F_2)=\mathbb F_2[w_1,\ldots,w_{n-1}]$ with $w_j=w_j(\gamma_{n-1})$. Then the image of $\eta$ contains all polynomial generators of $H^*(B\operatorname O(n-1);\mathbb F_2)$ and hence is everything: $\eta$ is surjective. [step 1.2, step 2.1]

4.1 The Gysin sequence breaks into short exact sequences. The mod-two Gysin sequence of [F3] for $\xi=\gamma_n$ is $$\cdots\to H^{k-n}(B\operatorname O(n))\xrightarrow{\smile e_2}H^k(B\operatorname O(n))\xrightarrow{\pi^*}H^k(S(\gamma_n))\xrightarrow{\partial_G}H^{k-n+1}(B\operatorname O(n))\to\cdots,$$ and identifying the middle term with $H^k(B\operatorname O(n-1))$ through step 1.2 turns $\pi^*$ into $\eta$. Since $\eta$ is surjective by step 3.1, exactness gives short exact sequences $$0\to H^{i}(B\operatorname O(n))\xrightarrow{\smile e_2}H^{i+n}(B\operatorname O(n))\xrightarrow{\eta}H^{i+n}(B\operatorname O(n-1))\to0$$ for every $i$. In particular $\smile e_2:H^i\to H^{i+n}$ is injective for every $i$. [F3, step 1.2, step 3.1, F2]

5.1 Identification of the Euler class with $w_n$. Take $k=n$ and $i=0$ in step 4.1: the image of $\smile e_2:H^0(B\operatorname O(n))\to H^n(B\operatorname O(n))$ is a one-dimensional $\mathbb F_2$-space generated by $e_2(\gamma_n)$, and it equals the kernel of $\eta$ in degree $n$. That kernel contains $w_n(\gamma_n)$, since $\eta(w_n(\gamma_n))=w_n(\gamma_{n-1})=0$ by step 3.1. Moreover $w_n(\gamma_n)\neq0$: let $f:\mathbb{RP}^\infty\to B\operatorname O(n)$ be a classifying map of the $n$-fold sum $\gamma_1\oplus\cdots\oplus\gamma_1$ of the universal line, which exists by [F8]; then $f^*w_n(\gamma_n)=w_n(f^*\gamma_n)=(w_1(\gamma_1))^n=a^n\neq0$ by the Whitney formula [F7] and [F6]. Hence both $e_2(\gamma_n)$ and $w_n(\gamma_n)$ are nonzero elements of the one-dimensional $\mathbb F_2$-space $\ker\eta\cap H^n$, so $e_2(\gamma_n)=w_n(\gamma_n)$. [F3, F6, F7, F8, step 4.1]

6.1 Polynomial generation and uniqueness. Let $\varphi:\mathbb F_2[w_1,\ldots,w_n]\to H^*(B\operatorname O(n);\mathbb F_2)$ send $w_j$ to $w_j(\gamma_n)$; it is a graded ring homomorphism. Surjectivity is proved by induction on the total degree: for $\xi\in H^k(B\operatorname O(n))$, the class $\eta(\xi)\in H^k(B\operatorname O(n-1))$ is, by the induction hypothesis on $n$, the image of a unique polynomial $f$ in $w_1,\ldots,w_{n-1}$; then $\xi-\varphi(f)$ lies in $\ker\eta$, which by step 4.1 is the image of $\smile w_n$ (using step 5.1), say $\xi-\varphi(f)=\zeta\smile w_n$ for a unique $\zeta\in H^{k-n}(B\operatorname O(n))$; by induction on $k$ the class $\zeta$ is the image of a unique polynomial $g$ in $w_1,\ldots,w_n$, so $\xi$ is the image of $f+w_ng$. Injectivity is proved by the same decomposition: if $\varphi(P)=0$, write $P=f+w_ng$ with $f\in\mathbb F_2[w_1,\ldots,w_{n-1}]$ uniquely; applying $\eta$ gives $0=\eta(\varphi(P))$ in $H^*(B\operatorname O(n-1))$, and by step 3.1 and the induction hypothesis on $n$ this is the image of $f$, so $f=0$; then $w_n\smile\varphi(g)=0$ and injectivity of $\smile w_n$ from step 4.1 gives $\varphi(g)=0$, whence $g=0$ by induction on the degree of $P$. Hence $\varphi$ is an isomorphism. [step 3.1, step 4.1, step 5.1]

7.1 Boundary cases. The case $n=0$ is step 1.1, the case $n=1$ is also step 1.1 and serves as the base of the induction; for $n=1$ the sphere bundle argument is replaced by the published computation $H^*(\mathbb{RP}^\infty)=\mathbb F_2[w_1]$. In degree zero both sides are $\mathbb F_2$, spanned by the unit, and the class $w_0=1$ is the unit by convention. Higher classes above the rank vanish on both sides: $w_j=0$ for $j>n$ by the rank convention and there are no polynomial generators beyond $w_n$. AC is used through [F3] and [F4] and the metric used to split in step 2.1. [F3, F4, F6, A1, step 5.1, step 6.1] ∎
