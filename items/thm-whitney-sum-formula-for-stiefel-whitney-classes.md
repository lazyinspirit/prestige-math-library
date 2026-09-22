---
id: thm-whitney-sum-formula-for-stiefel-whitney-classes
kind: theorem
title: Whitney sum formula for Stiefel–Whitney classes
status: draft
origin: pipeline
deps: ["def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-mod-two-real-projective-bundle-theorem", "def-real-projective-bundle-and-tautological-line", "thm-naturality-of-stiefel-whitney-classes", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "thm-long-exact-sequence-of-a-pair-in-singular-cohomology", "thm-naturality-of-the-singular-cohomology-pair-sequence", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "def-relative-cup-product", "prop-relative-cup-products-are-natural-and-compatible-with-connectors", "prop-cup-product-is-natural-unital-and-associative", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Whitney product formula in the proof of Theorem 3.1, printed pp.79–81"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lectures 34–36 Whitney sum and symmetric-polynomial calculation, printed pp.125–134"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§8 Whitney product theorem, printed pp.97–114"
---

## Statement

Assume AC. Let $E\to B$ and $F\to B$ be numerable real vector bundles of ranks
$m,n\geq0$ over a paracompact Hausdorff CGWH base of CW homotopy type. Then the total Stiefel–Whitney classes
satisfy
$$w(E\oplus F)=w(E)w(F),\qquad\text{equivalently}\qquad w_k(E\oplus F)=\sum_{i+j=k}w_i(E)w_j(F)\quad(k\geq0).$$
In particular $w(0_B)=1$, and adjoining a trivial summand does not change the
positive classes: $w(E\oplus\varepsilon_B^r)=w(E)$ for $r\geq0$.

## Facts & Assumptions

**Given:** AC, numerable real bundles $E,F\to B$ of ranks $m,n\geq0$ over a paracompact Hausdorff CGWH base of CW homotopy type, and the projective bundle $X:=P(E\oplus F)$ of their Whitney sum.

[F1] The bundles $E$ and $F$ are subbundles of $E\oplus F$ in the first and second summand, and over a trivializing chart $U$ the projective bundle is $X|_U\cong U\times\mathbb P^{m+n-1}$ with $P(E)|_U=U\times\mathbb P^{m-1}$ and $P(F)|_U=U\times\mathbb P^{n-1}$; the tautological line of $E\oplus F$ over $P(E)$ is the tautological line of $E$, and symmetrically ([[def-real-projective-bundle-and-tautological-line]], [[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F2] The pair sequence is exact and natural: for $A\subseteq X$, $\cdots\to H^k(X,A;R)\to H^k(X;R)\to H^k(A;R)\xrightarrow{\partial}H^{k+1}(X,A;R)\to\cdots$, and a continuous map of pairs induces a map of sequences with commuting squares ([[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]], [[thm-naturality-of-the-singular-cohomology-pair-sequence]]).

[F3] Homotopic maps induce the same singular cohomology map; consequently a homotopy equivalence induces isomorphisms on cohomology ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F4] Relative cup products exist for subspaces $A,B$ that are open in $A\cup B$, take values in $H^{p+q}(X,A\cup B;R)$, and are natural: for $f:X'\to X$ with $f(A')\subseteq A$ and $f(B')\subseteq B$ one has $f^*(u\smile v)=f^*u\smile f^*v$; with $A'=B'=\varnothing$ this says that the relative-to-absolute map carries $u\smile v$ to the absolute product ([[def-relative-cup-product]], [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]]).

[F5] When $m+n\geq1$, the projective-bundle theorem applies to
$X=P(E\oplus F)$ over $B$: with $x=x_{E\oplus F}$, the classes
$1,x,\ldots,x^{m+n-1}$ are an $H^*(B;\mathbb F_2)$-basis and the unique monic
degree-$(m+n)$ relation determines the classes of $E\oplus F$
([[thm-mod-two-real-projective-bundle-theorem]],
[[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]). When
$m+n=0$, $P(E\oplus F)=\varnothing$ and the rank-zero convention is used
instead; no tautological class or projective-bundle basis is asserted.

[F6] Under the inclusion $i_E:P(E)\hookrightarrow P(E\oplus F)$, the bundle projection satisfies $p i_E=p_E$ and the tautological line pulls back to the tautological line of $E$; hence naturality gives $i_E^*x_{E\oplus F}=x_E$, while $i_E^*p^*w_j(E)=p_E^*w_j(E)$ ([[def-real-projective-bundle-and-tautological-line]], [[thm-naturality-of-stiefel-whitney-classes]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 Suppose first $m,n\geq1$ and put $A=P(E)$, $C=P(F)$ inside $X=P(E\oplus F)$, and $U_2=X\setminus A$, $U_1=X\setminus C$. Both $A$ and $C$ are closed subbundles and they are disjoint, since a line contained in both $E_b$ and $F_b$ would lie in $E_b\cap F_b=0$. In a chart $U\subseteq B$ write a line as $[v:w]$ with $v\in\mathbb R^m$, $w\in\mathbb R^n$, not both zero; then $A|_U=\{[v:0]\}$, $C|_U=\{[0:w]\}$. The formula $H_t[v:w]=[v:(1-t)w]$ for $0\leq t\leq1$ is well defined and independent of the local chart because it is induced by the canonical linear map $E\oplus F\to E\oplus F$, $(v,w)\mapsto(v,(1-t)w)$ on the complement of $C$; it is continuous there, fixes $A$ pointwise, and satisfies $H_0=\operatorname{id}$, $H_1(X\setminus C)\subseteq A$. Hence $U_1=X\setminus C$ deformation retracts onto $A$, and symmetrically $U_2=X\setminus A$ deformation retracts onto $C$. Both are open, and $U_1\cup U_2=X\setminus(A\cap C)=X$. [F1, algebra]

1.2 The class $\omega_E:=\sum_{i=0}^{m}p^*w_i(E)\smile x^{m-i}$ restricts to zero on $A$, and $\omega_F:=\sum_{j=0}^{n}p^*w_j(F)\smile x^{n-j}$ restricts to zero on $C$. Indeed $A=P(E)\subseteq X$ and [F6] gives $i_E^*x=x_E$ and $i_E^*p^*w_i(E)=p_E^*w_i(E)$, so the restricted expression is exactly the defining projective-bundle relation of $E$. The argument for $C$ is symmetric. [F5, F6]

2.1 Each class lifts to the relative group of the corresponding complement. Since $\omega_E$ restricts to zero on $A$, exactness of the pair sequence [F2] exhibits $\omega_E$ as the image of a class $\widetilde\omega_E\in H^m(X,A;\mathbb F_2)$. The inclusion of pairs $(X,A)\to(X,U_1)$ is an isomorphism on relative cohomology: by step 1.1 the inclusion $A\hookrightarrow U_1$ is a homotopy equivalence, so in the map of pair sequences [F2] the two vertical maps $H^*(X)\to H^*(X)$ and $H^*(U_1)\to H^*(A)$ are isomorphisms, and the five lemma (equivalently, the long exact sequences split into commuting exact pieces with two isomorphisms out of three) gives that $H^*(X,U_1)\to H^*(X,A)$ is an isomorphism; [F3] supplies the homotopy invariance of the restriction. Thus $\omega_E$ has a preimage $\widetilde\omega_E\in H^m(X,U_1;\mathbb F_2)$. Symmetrically $\omega_F$ has a preimage $\widetilde\omega_F\in H^n(X,U_2;\mathbb F_2)$. [F2, F3, step 1.1, step 1.2]

3.1 The relative product vanishes. Both $U_1$ and $U_2$ are open in $X$ and open in their union $X$, so [F4] applies to $A=U_1$, $B=U_2$ and defines $$\widetilde\omega_E\smile\widetilde\omega_F\in H^{m+n}(X,U_1\cup U_2;\mathbb F_2)=H^{m+n}(X,X;\mathbb F_2)=0.$$ Under the relative-to-absolute map, which by the naturality clause of [F4] with $A'=B'=\varnothing$ sends the product to the absolute cup product of the images, this class maps to $\omega_E\smile\omega_F\in H^{m+n}(X;\mathbb F_2)$. Hence $\omega_E\omega_F=0$. [F4, step 1.1, step 2.1]

4.1 Expand the vanishing product: $$\omega_E\omega_F=\sum_{k=0}^{m+n}\Bigl(\sum_{i+j=k}w_i(E)w_j(F)\Bigr)x^{m+n-k}=0,$$ with $x^{m+n}$-coefficient $w_0(E)w_0(F)=1$, so this is a monic relation of degree $m+n$ for $x$ on $X=P(E\oplus F)$. By the uniqueness clause of [F5] it is the defining relation of $E\oplus F$, so $$w_k(E\oplus F)=\sum_{i+j=k}w_i(E)w_j(F)\quad(0\leq k\leq m+n),$$ and for $k>m+n$ both sides vanish by the rank conventions. Summing gives $w(E\oplus F)=w(E)w(F)$. [F5, step 3.1, algebra]

5.1 Degenerate ranks and trivial summands. If $m=0$ then $E=0_B$, $E\oplus F\cong F$, and $w(E)=1$, so the formula holds; symmetrically for $n=0$. Taking $F=\varepsilon_B^r$ trivial of rank $r$: its classifying map is the constant map, so $w(\varepsilon_B^r)=1$ by naturality [F6] and the rank conventions, and the formula gives $w(E\oplus\varepsilon_B^r)=w(E)$. For $r=1$ this says the positive classes are unchanged by adding a trivial line. If $m=n=1$ then $X=P(E\oplus F)$ is a $\mathbb P^1$-bundle, $A$ and $C$ are two disjoint sections, and the argument reduces to the displayed computation with $k\leq2$. The empty base gives zero groups and the zero relation, and the formulas hold in the zero ring with unit $1$. [F5, F6, step 1.1, step 4.1]

6.1 Axiom audit. The argument uses AC only through the projective-bundle theorem [F5] for $E\oplus F$; the pair sequences, the relative cup product and the deformation retraction of step 1.1 are choice-free, and the only geometry used is the canonical linear homotopy inside each fiber. [F5, A1, step 1.2, step 2.1, step 3.1] ∎
