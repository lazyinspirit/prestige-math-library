---
id: thm-thom-identity-for-stiefel-whitney-classes
kind: theorem
title: Thom identity for Stiefel–Whitney classes
status: draft
origin: pipeline
deps: ["def-total-steenrod-square", "thm-steenrod-squares-are-well-defined-and-natural", "prop-steenrod-square-normalization-instability-and-top-square", "thm-cartan-formula-for-steenrod-squares", "thm-thom-isomorphism-for-oriented-vector-bundles", "thm-naturality-and-uniqueness-of-thom-classes", "thm-external-product-and-whitney-sum-formulas-for-thom-classes", "def-thom-class-by-fiberwise-normalization", "def-euler-class-by-zero-section-pullback-of-the-thom-class", "thm-mod-two-euler-class-is-the-top-stiefel-whitney-class", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "thm-naturality-of-stiefel-whitney-classes", "thm-real-splitting-principle-with-mod-two-injective-pullback", "def-real-flag-bundle-and-stiefel-whitney-roots", "def-thom-euler-class-of-an-oriented-vector-bundle", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle", "thm-stable-stiefel-space-is-contractible", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§8 existence of Stiefel–Whitney classes by the Thom identity, printed pp.97–114"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Proposition 39.10, printed pp.151–152"
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§§3.1–3.2 Thom and Euler constructions, printed pp.77–94 (the Steenrod square itself is taken from the published prerequisite page)"
---

## Statement

Assume AC. Let $E\to B$ be a numerable real vector bundle of rank $n\geq0$
over an admissible base, with its canonical $\mathbb F_2$-orientation and
normalized mod-two Thom class
$u_E\in H^n(D(E),S(E);\mathbb F_2)$. Then
$$Sq(u_E)=w(E)\smile u_E,$$
equivalently
$$Sq^i(u_E)=w_i(E)\smile u_E\quad\text{for every }i\geq0,$$
with both sides vanishing for $i>n$.

## Facts & Assumptions

**Given:** AC, a numerable real rank-$n$ bundle $E\to B$ with $n\geq0$ over an admissible base, its canonical mod-two orientation, its normalized Thom class $u_E$, and the total square $Sq$ of [[def-total-steenrod-square]].

[F1] The total square is $Sq(x)=\sum_{i\geq0}Sq^i(x)$, with $Sq^0=\operatorname{id}$, $Sq^k x=0$ for $k>\deg x$, and $Sq^k x=x\smile x$ when $k=\deg x$; it is natural for maps of spaces and pairs and satisfies the Cartan formula $Sq(x\smile y)=Sq(x)\smile Sq(y)$ ([[prop-steenrod-square-normalization-instability-and-top-square]], [[thm-steenrod-squares-are-well-defined-and-natural]], [[thm-cartan-formula-for-steenrod-squares]], [[def-total-steenrod-square]]).

[F2] The Thom isomorphism $\pi^*(\cdot)\smile u_E:H^k(B;\mathbb F_2)\to H^{k+n}(D(E),S(E);\mathbb F_2)$ is an isomorphism; the normalized Thom class is unique for a supplied orientation and is natural for orientation-preserving pullbacks; note $j^*u_E=\pi^*(e_2(E))$, where $j^*$ is relative-to-absolute ([[thm-thom-isomorphism-for-oriented-vector-bundles]], [[thm-naturality-and-uniqueness-of-thom-classes]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[F3] For ordered oriented bundles over one base, $u_{E\oplus F}=u_E\smile u_F$ under the canonical identification of the disk-sphere pair of the sum ([[thm-external-product-and-whitney-sum-formulas-for-thom-classes]]).

[F4] For a real line bundle $L$, $e_2(L)=w_1(L)$ ([[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]]).

[F5] The Stiefel–Whitney classes satisfy naturality and the Whitney product formula, with $w_i=0$ above the rank ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[thm-naturality-of-stiefel-whitney-classes]]).

[F6] The flag bundle $q:\operatorname{Fl}(E)\to B$ is admissible, splits $q^*E\cong L_1\oplus\cdots\oplus L_n$ and has $q^*$ injective on $\mathbb F_2$-cohomology ([[def-real-flag-bundle-and-stiefel-whitney-roots]], [[thm-real-splitting-principle-with-mod-two-injective-pullback]]).

[F7] The universal line satisfies $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[a]$, $e_2(\gamma_1)=a=w_1(\gamma_1)$, and $S(\gamma_1)\cong S^\infty$ is contractible ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]], [[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]], [[thm-stable-stiefel-space-is-contractible]], [[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 The self-intersection identity. For a numerable real bundle $E$ in the Thom scope, let $\pi:D(E)\to B$ be the disk projection and $s$ the zero section, so $\pi s=\operatorname{id}_B$; the composite $s\pi:D(E)\to D(E)$ is homotopic to the identity through the radial deformation of each disk onto its centre, so $(s\pi)^*$ is the identity on $H^*(D(E);\mathbb F_2)$. Therefore $j^*u_E=\pi^*s^*j^*u_E=\pi^*e_2(E)$ by [F2], and the module structure of the relative cohomology over $H^*(D(E);\mathbb F_2)$ gives $$u_E\smile u_E=j^*(u_E)\smile u_E=\pi^*(e_2(E))\smile u_E=\Phi(e_2(E)),$$ where $\Phi$ is the Thom isomorphism. [F2]

2.1 The line case over an admissible base. Let $L\to B$ be a numerable real line bundle with a classifying map $c:B\to\mathbb{RP}^\infty$; then $L\cong c^*\gamma_1$ and $u_L=\widetilde c^{\,*}u_{\gamma_1}$ for the induced map of disk-sphere pairs by naturality and uniqueness of [F2]. Over $\mathbb{RP}^\infty$, [F1] gives $Sq(u_{\gamma_1})=u_{\gamma_1}+u_{\gamma_1}^2$ because $u_{\gamma_1}$ has degree one, $Sq^0$ is the identity, the top square is $Sq^1(v)=v\smile v$, and the higher squares vanish by instability. By step 1.1 and [F7], $u_{\gamma_1}^2=\Phi(e_2(\gamma_1))=\Phi(a)$, so $$Sq(u_{\gamma_1})=u_{\gamma_1}+\Phi(a)=u_{\gamma_1}+w_1(\gamma_1)\smile u_{\gamma_1}=(1+a)\smile u_{\gamma_1}=w(\gamma_1)\smile u_{\gamma_1}.$$ Pulling back along $\widetilde c$ using naturality of $Sq$ [F1], of the classes [F5] and of the Thom class [F2] gives $Sq(u_L)=w(L)\smile u_L$. [F1, F2, F4, F5, F7, step 1.1]

3.1 Sums of line bundles. Let $M_1,\ldots,M_r$ be numerable real line bundles over an admissible base. Applying [F3] repeatedly, $u_{\oplus_jM_j}=\prod_ju_{M_j}$ under the canonical product identification, and Cartan [F1] gives $$Sq\Bigl(\prod_ju_{M_j}\Bigr)=\prod_jSq(u_{M_j})=\prod_j\bigl(w(M_j)\smile u_{M_j}\bigr)=\Bigl(\prod_jw(M_j)\Bigr)\smile u_{\oplus_jM_j}=w(\oplus_jM_j)\smile u_{\oplus_jM_j},$$ where the last step is the Whitney formula [F5]. The products are finite and no choice is made. [F1, F3, F5, step 2.1]

4.1 Descent along the splitting. Let $E\to B$ have rank $n\geq1$ and let $q:\operatorname{Fl}(E)\to B$ be its flag bundle with $q^*E\cong L_1\oplus\cdots\oplus L_n$ and $q^*$ injective [F6]; the base $\operatorname{Fl}(E)$ is admissible and in the Thom scope, so the Thom class $u_{q^*E}$ is the normalized class of $q^*E$ and equals $\widetilde q^{\,*}u_E$ by naturality and uniqueness [F2], where $\widetilde q$ is the induced map of disk-sphere pairs. By step 3.1 applied over $\operatorname{Fl}(E)$ with the line bundles $L_j$, $$Sq(u_{q^*E})=w(q^*E)\smile u_{q^*E}.$$ Applying $\widetilde q^{\,*}$ to the difference $Sq(u_E)-w(E)\smile u_E$ and using naturality of $Sq$ [F1], of the Whitney classes [F5] and of the Thom class [F2] turns it into the zero class. The map $\widetilde q^{\,*}:H^*(D(E),S(E))\to H^*(D(q^*E),S(q^*E))$ is injective: under the Thom isomorphisms of [F2] it corresponds to $q^*:H^*(B;\mathbb F_2)\to H^*(\operatorname{Fl}(E);\mathbb F_2)$, which is injective by [F6]. Hence $Sq(u_E)=w(E)\smile u_E$. [F1, F2, F5, F6, step 3.1]

5.1 Degreewise form. The total square is the finite sum $\sum_iSq^i(u_E)$ by [F1], and $w(E)\smile u_E=\sum_iw_i(E)\smile u_E$ by [F5]; both sums are graded and finite. Comparing homogeneous components gives $Sq^i(u_E)=w_i(E)\smile u_E$ for every $i$, and both sides vanish for $i>n$ because $Sq^i$ vanishes above the degree of its input [F1] and $w_i(E)=0$ above the rank [F5]. [F1, F5, step 4.1]

6.1 Boundary cases. For $n=0$ we have $u=1$, $Sq(1)=1$ by [F1], and $w(0_B)=1$ by [F5], so the identity reads $1=1$; the disk bundle is $B$ and the relative group is $H^0(B)$. For $n=1$ step 4.1 reduces to the line case of step 2.1. Over the empty base every class is zero and the identity is the zero identity. The Steenrod squares are defined on relative classes without dimension hypotheses [F1], and the relative product of step 1.1 is the module action of the absolute class $j^*u_E$ on the relative class $u_E$. AC is used through the Thom theorem and the splitting principle, as recorded; the universal-line computations of step 2.1 are performed over the CW complex $\mathbb{RP}^\infty$. [F1, F2, F5, F6, A1, step 2.1, step 5.1] ∎
