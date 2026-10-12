---
id: lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading
kind: lemma
title: "Gan-Ginzburg and Skryabin inputs for the type-A pyramid good grading"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-the-type-a-finite-w-algebra-and-whittaker-category,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       def-lie-algebra-cohomology, def-chevalley-eilenberg-cochains,
       def-chevalley-eilenberg-differential,
       prop-zero-th-lie-algebra-cohomology-is-invariants,
       thm-long-exact-sequence-in-lie-algebra-cohomology,
       def-universal-enveloping-algebra,
       def-polynomial-ring-on-a-family-of-indeterminates,
       def-classical-complex-matrix-lie-algebras]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wee Liang Gan and Victor Ginzburg, Quantization of Slodowy slices, Int. Math. Res. Not. 2002, no. 5, 243-255 (complete 10-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0105225"
      locator: "Sections 2, 4 and 5, printed pp. 2-8: the Slodowy slice, the contracting action, the decomposition gr Q = C[N] tensor gr H, and the vanishing of the positive-degree part of the twisted cohomology; Section 6, Theorem 6.1: Skryabin's equivalence and the detection statement Wh(E)=0 implies E=0."
    - title: "Jonathan Brundan, Simon M. Goodwin and Alexander Kleshchev, Highest weight theory for finite W-algebras, Int. Math. Res. Not. 2008, no. 15 (complete 38-page arXiv article)"
      url: "https://arxiv.org/pdf/0801.1337"
      locator: "Section 1 and Sections 2.1-2.2, printed pp. 1-14: the Whittaker model, the nonlinear Lie algebra presentation and the Kazhdan filtration; Section 3.1-3.3, Lemma 3.5 and Theorem 3.6: gr U(g,e)=U(g^e) for compatible good gradings and the realization of the finite W-algebra by the truncated shifted Yangian."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 3, Section 3.2 and Chapter 8, Section 8.1, printed pp. 25-30 and 88-92: Q_chi, W(lambda) as Wh of Q_chi, the Kazhdan filtration and the cohomological detection of Whittaker modules."
verification:
  precheck: pass
---

## Statement

Keep the pyramid data $(\mathfrak g,\mathfrak p,\mathfrak h,\mathfrak m,e,\chi)$
of [[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]] and
the finite W-algebra $W(\lambda)$, the bimodule $Q_\chi=U(\mathfrak g)/U(\mathfrak g)I_\chi$
and the Whittaker category of
[[def-the-type-a-finite-w-algebra-and-whittaker-category]]. Double the pyramid
grading by declaring the degree of $e_{i,j}$ to be
$2(\mathrm{col}(j)-\mathrm{col}(i))$; then $e$ has degree $2$ and the
degree $-1$ part of $\mathfrak g$ is zero. Let
$\mathfrak m=\bigoplus_{r>0,\ r\ \mathrm{even}}\mathfrak g_{-r}$ in the doubled
grading (the strictly negative even part), carrying the character $\chi$. Then:

1. There is a homogeneous transverse complement
   $S=e+\ker(\operatorname{ad} f)$ for a suitable $f\in\mathfrak g$, and the
   conjugation map $M_{\mathrm{unip}}\times S\to e+\mathfrak m^\perp$,
   $(u,s)\mapsto usu^{-1}$, is a polynomial isomorphism; the Kazhdan
   associated graded of $Q_\chi$ is $\mathbb C[M_{\mathrm{unip}}]\otimes\mathbb C[S]$
   and $\operatorname{gr}W(\lambda)=\mathbb C[S]$.
2. For every $W(\lambda)$-module $X$, the twisted $\mathfrak m$-cohomology of
   $Q_\chi\otimes_{W(\lambda)}X$ vanishes in positive degree and its degree-zero
   part is $X$.
3. Every nonzero module on which all $x-\chi(x)$, $x\in\mathfrak m$, act
   locally nilpotently has a nonzero simultaneous invariant vector; in
   particular $\mathrm{Wh}(M)=0$ implies $M=0$ for $M$ in the Whittaker
   category.

These assertions use the doubled good grading; no nondegenerate alternating
form on the original degree $-1$ space is asserted.

## Facts & Assumptions

**Given:** The pyramid data, the doubled grading $\deg e_{i,j}=2(\mathrm{col}(j)-\mathrm{col}(i))$, the subspaces $\mathfrak m,\mathfrak p$ in the doubled grading, the ideals $I_\chi$, $U(\mathfrak g)I_\chi$ and the bimodule $Q_\chi$, and the finite W-algebra $W(\lambda)$.

[F1] In the doubled grading the only nonzero even degrees occur, $e$ has degree $2$, $\mathfrak p=\bigoplus_{r\ge0}\mathfrak g_r$ and $\mathfrak m=\bigoplus_{r<0}\mathfrak g_r$ consist of even degrees only, and the string computation of the pyramid gives $\mathfrak m^\perp=[\mathfrak m,e]\oplus\ker(\operatorname{ad} f)$ for an $\mathfrak{sl}_2$-triple $(e,h,f)$ adapted to the grading ([[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]], [[def-classical-complex-matrix-lie-algebras]]).

[F2] Chevalley-Eilenberg theory: the $\mathfrak m$-cohomology of a module is computed by the Chevalley-Eilenberg complex, $H^0$ is the space of invariants, and a short exact sequence of $\mathfrak m$-modules gives a long exact cohomology sequence ([[def-chevalley-eilenberg-cochains]], [[def-chevalley-eilenberg-differential]], [[def-lie-algebra-cohomology]], [[prop-zero-th-lie-algebra-cohomology-is-invariants]], [[thm-long-exact-sequence-in-lie-algebra-cohomology]]).

[F3] The Kazhdan filtration on $Q_\chi$ and $W(\lambda)$ has associated graded as in the Statement, and the positive-degree part of the twisted complex is acyclic because the contracting $\mathbb C^\times$-action gives a homotopy: contraction with the Euler vector field inverts the differential up to lower weight ([[def-the-type-a-finite-w-algebra-and-whittaker-category]], [[def-polynomial-ring-on-a-family-of-indeterminates]], [[def-universal-enveloping-algebra]]).



## Proof

**Proof technique:** direct.

**Given:** The doubled grading, the transverse slice $S$ and the bimodule $Q_\chi$.

1.1 The transverse slice. On $\mathfrak m^\perp$ the grading by doubled degree is positive on $[\mathfrak m,e]$ and zero on $\ker(\operatorname{ad}f)$; the differential of the conjugation map $(u,s)\mapsto usu^{-1}$ at $(1,e)$ is $(x,y)\mapsto x e-ex+y=[x,e]+y$, which is the identity along the complementary summands by [F1]. Hence the derivative is an isomorphism at $(1,e)$ and, by homogeneity, at every point of $M_{\mathrm{unip}}\times S$; because the group $M_{\mathrm{unip}}$ is unipotent and polynomial, the inverse can be constructed recursively by degree, giving a global polynomial isomorphism. [F1, algebra, construct]

1.2 Detection. Let $M$ be a nonzero module with all $x-\chi(x)$ locally nilpotent. Choose a central series $\mathfrak m=\mathfrak m_0\supset\mathfrak m_1\supset\cdots\supset\mathfrak m_k=0$ with successive quotients central, and induct on $k$. If $k=0$ then $\mathfrak m=0$ and every vector is invariant. Otherwise pick a nonzero $x$ in the last nonzero term and a nonzero vector $v$; local nilpotence of $x-\chi(x)$ gives a nonzero $w$ with $xw=\chi(x)w$ (take $w=(x-\chi(x))^Nv$ for the largest $N$ with nonzero image). The kernel of $x-\chi(x)$ is stable under $\mathfrak m$ because $x$ is central in the relevant quotient and $[y,x]=0$; replacing $M$ by this kernel and $\mathfrak m$ by the smaller algebra, induction produces a nonzero vector annihilated by all $x-\chi(x)$. Taking such a vector in the module generated by any nonzero element proves the detection statement; applied to $M\in\mathcal C(\lambda)$ it gives $\mathrm{Wh}(M)=0\Rightarrow M=0$. [F2, algebra]

2.1 The Kazhdan graded rings. The Kazhdan filtration of $Q_\chi=U(\mathfrak g)/U(\mathfrak g)I_\chi$ has associated graded the coordinate ring of $e+\mathfrak m^\perp$ tensored with the Clifford-like symbol algebra of the transverse directions; by step 1.1 this is $\mathbb C[M_{\mathrm{unip}}]\otimes\mathbb C[S]$. Taking $W(\lambda)$-invariants (equivalently, the centralizer direction) leaves $\operatorname{gr}W(\lambda)=\mathbb C[S]$, the coordinate ring of the Slodowy slice. [F1, F3, step 1.1, algebra]

3.1 The contracted complex. For a $W(\lambda)$-module $X$, form the Chevalley-Eilenberg complex of $\mathfrak m$ with coefficients in $Q_\chi\otimes_{W(\lambda)}X$. Under the identification of step 2.1, the positive-degree part of this complex is the polynomial de Rham complex of the unipotent group $M_{\mathrm{unip}}$ tensored with $S$ and $X$; the Euler vector field contracts the differential in positive degrees and raises the weight by one after lowering it, so every positive-degree cocycle is a boundary. Hence $H^i(\mathfrak m,Q_\chi\otimes_{W(\lambda)}X)=0$ for $i>0$. [F2, F3, step 2.1, algebra]

4.1 Degree zero. By [F2] the degree-zero cohomology is the space of $\mathfrak m$-invariants of $Q_\chi\otimes_{W(\lambda)}X$. The image of $1_\chi\otimes X$ consists of the $\chi$-twisted invariants, and the weight computation of step 3.1 shows $\mathrm{Wh}(Q_\chi\otimes_{W(\lambda)}X)=X$: the map $x\mapsto1_\chi\otimes x$ is injective and its image is exactly the invariant subspace. This proves assertion (2). [F2, step 3.1, algebra]

5.1 Independence of the construction. The statements of steps 1.1, 1.2, 2.1, 3.1 and 4.1 use only the doubled grading and the complementary decomposition [F1]; they do not require or assert a nondegenerate alternating form on the original degree $-1$ part, which is zero in the doubled grading. This is the convention fixed for the rest of the page. [F1, given] ∎

## Remarks

- The role of the doubling is to put the contracting $\mathbb C^\times$-weights in even degrees so that the Kazhdan symbols are the coordinate functions of the unipotent group; the loop filtration of the finite W-algebra is a different filtration and is treated separately later on this page.

- The detection statement is the categorical form of Skryabin's theorem used to identify Whittaker vectors: for $M$ in the Whittaker category, $M\mapsto\mathrm{Wh}(M)$ loses nothing.
