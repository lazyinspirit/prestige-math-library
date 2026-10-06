---
id: lem-hopf-ideal-kernels-and-quotients
kind: lemma
title: Hopf ideals, kernels and quotients of commutative Hopf algebras
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 1
deps:
  - def-commutative-hopf-algebra-over-a-field
  - def-field
  - def-left-right-and-two-sided-ideal
  - def-linear-basis
  - def-linear-combination-and-span
  - def-linear-independence
  - def-linear-subspace
  - def-quotient-ring
  - def-tensor-product-of-modules-by-generators-and-relations
  - thm-first-isomorphism-theorem-rings
  - thm-right-exactness-of-tensor-products
  - thm-universal-property-of-module-tensor-products
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Ch. 3 §3(d), Definitions 3.8 and 3.10 and Propositions 3.9 and 3.11-3.14, printed pp. 67-68 (PDF 78-79)."
    - title: J. Swanson (notes), J. Pevtsova (lecturer), Algebraic Groups Lecture Notes, University of Washington, Fall 2014
      url: https://www.jpswanson.org/notes/alggroups.pdf
      locator: "October 1st lecture, Definition 35, printed p. 11; October 3rd lecture, Remark 40, printed p. 12."
proof_strategy: direct
---

## Statement

Let $k$ be a field. (a) If $f\colon A\to B$ is a morphism of commutative Hopf algebras over $k$ ([[def-commutative-hopf-algebra-over-a-field]]), then $\ker f$ is a Hopf ideal of $A$, that is, an ideal $\mathfrak a$ ([[def-left-right-and-two-sided-ideal]]) with $\Delta(\mathfrak a)\subseteq A\otimes\mathfrak a+\mathfrak a\otimes A$, $\varepsilon(\mathfrak a)=0$ and $S(\mathfrak a)\subseteq\mathfrak a$; and $f(A)$ is a Hopf subalgebra of $B$. (b) Conversely, for every Hopf ideal $\mathfrak a\subseteq A$ the quotient ring $A/\mathfrak a$ ([[def-quotient-ring]]) carries a unique commutative Hopf algebra structure for which $A\to A/\mathfrak a$ is a morphism of Hopf algebras, and every Hopf algebra morphism $A\to C$ whose kernel contains $\mathfrak a$ factors uniquely through $A/\mathfrak a$. (c) Every morphism $f\colon A\to B$ of Hopf algebras factors as $A\twoheadrightarrow A/\ker f\cong f(A)\hookrightarrow B$, uniquely up to a unique isomorphism. No choice principle is used.

## Facts & Assumptions

[F1] A morphism of commutative Hopf algebras preserves $\Delta$, $\varepsilon$ and $S$, and a Hopf ideal is an ideal $\mathfrak a$ with $\Delta(\mathfrak a)\subseteq A\otimes\mathfrak a+\mathfrak a\otimes A$, $\varepsilon(\mathfrak a)=0$ and $S(\mathfrak a)\subseteq\mathfrak a$. ([[def-commutative-hopf-algebra-over-a-field]], [[def-left-right-and-two-sided-ideal]])

[F2] Quotient rings, their universal property, and the first isomorphism theorem for rings. ([[def-quotient-ring]], [[thm-first-isomorphism-theorem-rings]])

[F3] The tensor universal property also gives the following $k$-linear presentation: quotient the free $k$-module on $X\times Y$ by the $k$-span of the two additivity relations and $e_{(cx,y)}-c e_{(x,y)}$, $e_{(x,cy)}-c e_{(x,y)}$. This quotient has the same bilinear universal property as $X\otimes_kY$: a bilinear map extends by finite linear sums and kills precisely these generators. The maps in both directions sending generators to elementary tensors are inverse because generators span. ([[def-tensor-product-of-modules-by-generators-and-relations]], [[thm-universal-property-of-module-tensor-products]])

[F4] A finite spanning list can be reduced to a basis by deleting a vector whenever a nontrivial dependence relation expresses it as a combination of the others (divide by its nonzero coefficient). The length decreases at each deletion, so the process terminates with an independent spanning list. To extend a given independent list in such a span, append vectors from the spanning list only when they are not in the current span. ([[def-linear-basis]], [[def-linear-combination-and-span]], [[def-linear-independence]], [[def-linear-subspace]])

[F5] Tensoring the surjection $A\to f(A)$ with $k$-vector spaces is right exact, so $A\otimes\mathfrak a+\mathfrak a\otimes A$ is contained in $\ker(f\otimes f)$. ([[thm-right-exactness-of-tensor-products]])

## Proof

**Given:** A field $k$, commutative Hopf algebras $A,B,C$ over $k$, and a morphism $f\colon A\to B$ of commutative Hopf algebras, with $K=\ker f$.

1.1 (Coefficient criterion.) Let $X,H$ be $k$-vector spaces, let $h_1,\dots,h_n\in H$ be linearly independent and let $x_1,\dots,x_n\in X$ satisfy $\sum_ix_i\otimes h_i=0$ in $X\otimes_kH$. Then $x_1=\cdots=x_n=0$. Indeed, by [F3] the element $\sum_ie_{(x_i,h_i)}$ of the free module on $X\times H$ is a finite $k$-linear combination of finitely many bilinearity generators; let $X_0\subseteq X$ and $H_0\subseteq H$ be the spans of the initial $x_i,h_i$ together with all vectors occurring in that finite witness, so that $X_0,H_0$ are finite-dimensional and the same combination exhibits $\sum_ix_i\otimes h_i=0$ already in $X_0\otimes_kH_0$. By [F4] the independent list $h_1,\dots,h_n$ extends to a finite basis $v_1,\dots,v_N$ of $H_0$ with $v_i=h_i$ for $i\le n$, and $X_0$ has a finite basis $u_1,\dots,u_M$; the universal property [F3] gives an isomorphism $X_0\otimes_kH_0\to k^{M\times N}$ with $u_a\otimes v_b\mapsto E_{ab}$ (both composites with the canonical maps are the identity on spanning sets). The image of $\sum_ix_i\otimes h_i$ is the matrix whose $i$-th column is the coordinate vector of $x_i$ for $i\le n$ and whose other columns vanish, so this matrix is zero by the assumed relation, and each $x_i$ is zero. [F3, F4]

1.2 (Part (b).) Let $\mathfrak a\subseteq A$ be a Hopf ideal and let $q\colon A\to A/\mathfrak a$ be the quotient map. Since $\Delta(\mathfrak a)\subseteq\ker(A\otimes_kA\to A/\mathfrak a\otimes_kA/\mathfrak a)$, there are unique $k$-algebra homomorphisms $\bar\Delta\colon A/\mathfrak a\to A/\mathfrak a\otimes_kA/\mathfrak a$, $\bar\varepsilon\colon A/\mathfrak a\to k$ and $\bar S\colon A/\mathfrak a\to A/\mathfrak a$ with $\bar\Delta q=(q\otimes q)\Delta$, $\bar\varepsilon q=\varepsilon$ and $\bar Sq=qS$, by the universal property of the quotient ring [F2] and because $q\otimes q$, $\varepsilon$ and $qS$ kill $\mathfrak a$. The three Hopf identities for $(\bar\Delta,\bar\varepsilon,\bar S)$ hold because they hold for $(\Delta,\varepsilon,S)$ and $q,q\otimes q,q\otimes q\otimes q$ are surjective; this makes $A/\mathfrak a$ a Hopf algebra with $q$ a morphism, and any Hopf structure with that property must satisfy the three displayed identities, so it is unique. If $g\colon A\to C$ is a Hopf morphism with $\mathfrak a\subseteq\ker g$, then $g$ induces $\bar g\colon A/\mathfrak a\to C$ with $\bar gq=g$ by [F2]; since $q$ is surjective and $g$ preserves $\Delta,\varepsilon,S$, so does $\bar g$, and $\bar g$ is the unique such map. [F1, F2]

2.1 (Kernel of $f\otimes f$.) One has $\ker(f\otimes f)=A\otimes K+K\otimes A$. The inclusion $\supseteq$ is [F5]. For $\subseteq$, write an element of $A\otimes_kA$ as $x=\sum_{i=1}^{n}a_i\otimes b_i$ and suppose $(f\otimes f)(x)=0$. Choose a maximal linearly independent subfamily $(f(a_j))_{j\in J}$ of the finite list $(f(a_1),\dots,f(a_n))$; by [F4] every remaining $f(a_i)$ is a finite linear combination $\sum_{j\in J}c_{ij}f(a_j)$ with $c_{ij}\in k$. Then $\sum_{j\in J}f(a_j)\otimes\bigl(f(b_j)+\sum_{i\notin J}c_{ij}f(b_i)\bigr)=0$ in $B\otimes_kB$, so step 1.1 gives $w_j:=b_j+\sum_{i\notin J}c_{ij}b_i\in K$ for every $j\in J$. Moreover $a_i':=a_i-\sum_{j\in J}c_{ij}a_j\in K$ for $i\notin J$, and the identity $x=\sum_{j\in J}a_j\otimes w_j+\sum_{i\notin J}a_i'\otimes b_i$ shows $x\in A\otimes K+K\otimes A$. [F5, step 1.1, algebra]

3.1 (Part (a).) If $x\in K$, then $(f\otimes f)\Delta_A(x)=\Delta_Bf(x)=0$, so $\Delta_A(x)\in\ker(f\otimes f)=A\otimes K+K\otimes A$ by step 2.1; further $\varepsilon_A(x)=\varepsilon_B(f(x))=0$ and $f(S_A(x))=S_B(f(x))=0$, so $S_A(x)\in K$. Hence $K$ is a Hopf ideal of $A$. The same finite-relation argument identifies $U\otimes_kH$ with its image in $X\otimes_kH$ for every inclusion $U\subseteq X$: a zero relation has a finite witness; in the resulting finite-dimensional spaces extend a basis of the span of the first factors in $U$ to a basis of the ambient first-factor space, and use the coordinate tensor matrices of step 1.1. Applying this in both factors makes $f(A)\otimes f(A)\to B\otimes B$ injective. For $y=f(x)\in f(A)$ one has $\Delta_B(y)=(f\otimes f)\Delta_A(x)\in f(A)\otimes f(A)$, $\varepsilon_B(y)=\varepsilon_A(x)$ and $S_B(y)=f(S_A(x))\in f(A)$, so $f(A)$ is a Hopf subalgebra of $B$ with the induced structure maps. [F1, step 2.1, algebra]

4.1 (Part (c).) By step 3.1 the image $f(A)$ is a Hopf subalgebra of $B$ and $K$ is a Hopf ideal, so by step 1.2 the quotient $A/K$ is a Hopf algebra; the map $\bar\iota\colon A/K\to f(A)$, $a+K\mapsto f(a)$, given by the first isomorphism theorem [F2], is a $k$-algebra isomorphism preserving the three structure maps, since $f$ does and $q$ is surjective. Composing this isomorphism with the inclusion $f(A)\hookrightarrow B$ factors $f$ as a surjection followed by an injection of Hopf algebras; any such factorization is unique because the quotient map is an epimorphism and the inclusion is a monomorphism, which also forces the middle isomorphism to be unique. [F1, F2, step 1.2, step 3.1] ∎
