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
       def-classical-complex-matrix-lie-algebras, def-axiom-of-choice]
axiom_use: "AC is assumed for assertion (2): choosing right-W-linear splittings in the bounded exact augmented Chevalley-Eilenberg complex. Assertions (1) and (3) are choice-free; ordered PBW lifts are explicit U(p) representatives."
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
2. Assuming the Axiom of Choice [[def-axiom-of-choice]], for every $W(\lambda)$-module $X$, the twisted $\mathfrak m$-cohomology of
   $Q_\chi\otimes_{W(\lambda)}X$ vanishes in positive degree and its degree-zero
   part is $X$.
3. Every nonzero module on which all $x-\chi(x)$, $x\in\mathfrak m$, act
   locally nilpotently has a nonzero simultaneous invariant vector; in
   particular $\mathrm{Wh}(M)=0$ implies $M=0$ for $M$ in the Whittaker
   category.

These assertions use the doubled good grading; no nondegenerate alternating
form on the original degree $-1$ space is asserted.

## Facts & Assumptions

**Given:** The pyramid data, the doubled grading $\deg e_{i,j}=2(\mathrm{col}(j)-\mathrm{col}(i))$, the subspaces $\mathfrak m,\mathfrak p$ in the doubled grading, the ideals $I_\chi$, $U(\mathfrak g)I_\chi$ and the bimodule $Q_\chi$, and the finite W-algebra $W(\lambda)$. For assertion (2), assume the Axiom of Choice [[def-axiom-of-choice]]; assertions (1) and (3) do not require it.

[F1] In the doubled grading the only nonzero even degrees occur, $e$ has degree $2$, $\mathfrak p=\bigoplus_{r\ge0}\mathfrak g_r$ and $\mathfrak m=\bigoplus_{r<0}\mathfrak g_r$ consist of even degrees only, and the string computation of the pyramid gives $\mathfrak m^\perp=[\mathfrak m,e]\oplus\ker(\operatorname{ad} f)$ for an $\mathfrak{sl}_2$-triple $(e,h,f)$ adapted to the grading ([[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]], [[def-classical-complex-matrix-lie-algebras]]).

[F2] Chevalley-Eilenberg theory: the $\mathfrak m$-cohomology of a module is computed by the Chevalley-Eilenberg complex, $H^0$ is the space of invariants, and a short exact sequence of $\mathfrak m$-modules gives a long exact cohomology sequence ([[def-chevalley-eilenberg-cochains]], [[def-chevalley-eilenberg-differential]], [[def-lie-algebra-cohomology]], [[prop-zero-th-lie-algebra-cohomology-is-invariants]], [[thm-long-exact-sequence-in-lie-algebra-cohomology]]).

[F3] PBW orders the nonnegative-degree algebra $\mathfrak p$ before $\mathfrak m$ and replaces the rightmost $\mathfrak m$ generators by their character in $Q_\chi$. The resulting Kazhdan filtration is exhaustive, separated and bounded below; its symbols are polynomial functions on $e+\mathfrak m^\perp$. The twisted $\mathfrak m$ action has as symbol the infinitesimal conjugation action. These assertions follow by reordering the enveloping-algebra relations and the character quotient; no transverse Clifford factor is present in this even grading ([[def-the-type-a-finite-w-algebra-and-whittaker-category]], [[def-universal-enveloping-algebra]], [[def-polynomial-ring-on-a-family-of-indeterminates]]).


[F4] The Axiom of Choice permits the right-module splittings used in the bounded augmented complex for assertion (2) ([[def-axiom-of-choice]]). No choice principle is invoked in assertions (1) and (3).

## Proof

**Proof technique:** direct.

**Given:** The doubled grading, the transverse slice $S$ and the bimodule $Q_\chi$; assume AC for assertion (2), as in [F4].

1.1 **Positive-weight transverse product.** Choose the usual rowwise $\mathfrak{sl}_2$ triple. On $\operatorname{Hom}(R_b,R_a)$ the strings have highest $h$-weight $p_a+p_b-2k$, $1\le k\le\min(p_a,p_b)$. Since the pyramid grading element differs from $h$ by row scalars, their highest and lowest grading weights are $2(p_b-k)\ge0$ and $-2(p_a-k)\le0$. Thus the negative-degree part is injected by $\operatorname{ad}e$ and gives the direct-sum complement of [F1]. The differential of $\alpha(u,z)=uzu^{-1}$ at $(1,e)$ is $(x,y)\mapsto[x,e]+y$, an isomorphism. Use weight $-H$ on $\mathfrak m$ and weight $2-H$ on the translated slice and target coordinates; these are positive. In homogeneous coordinates of increasing weight, each component of $\alpha$ is an invertible linear block in the variables of that weight plus a polynomial in lower-weight variables. Successive substitution constructs its polynomial inverse. In particular derivative invertibility alone is not being used as a global inverse theorem. [F1, F3, construct, algebra]

1.2 **Detection.** The shifted operators $x-\chi(x)$ form a representation of the nilpotent Lie algebra $\mathfrak m$, because $\chi$ kills brackets. A nonzero central element has a nonzero kernel on any nonzero locally nilpotent module: apply its largest nonvanishing power to a nonzero vector. That kernel is stable, and the quotient Lie algebra acts on it with the same local nilpotence. Induction on $\dim\mathfrak m$ therefore gives a common nonzero invariant. The case $\mathfrak m=0$ is immediate. [F1, F2, algebra]

2.1 **The actual graded complex.** PBW and [F3] give $\operatorname{gr}Q_\chi=\mathbb C[e+\mathfrak m^\perp]$, with no additional symbol factor. Step 1.1 identifies this with $\mathbb C[M_{\mathrm{unip}}]\otimes\mathbb C[S]$. Infinitesimal conjugation acts by invariant vector fields on the first factor and trivially on the slice factor. Giving the exterior dual of a grading-degree $-2r$ vector weight $2r$ makes the twisted Chevalley–Eilenberg differential filtration preserving. Its graded complex is the polynomial de Rham complex of $M_{\mathrm{unip}}$, tensored with $\mathbb C[S]$: invariant vector fields trivialize the tangent bundle and the bracket terms are precisely the de Rham differential. Polynomial exponential coordinates identify this unipotent group with affine space. On a polynomial form of positive total degree $t$, $t^{-1}\iota_{\mathrm{Euler}}$ is a contracting homotopy; constants are the only surviving degree-zero classes. [F1, F2, F3, step 1.1, construct, algebra]

3.1 **Filtered lifting and right freeness.** A positive-degree cocycle in the actual complex has a graded leading term which is a boundary by step 2.1. Lift that boundary and subtract it, strictly lowering the integer filtration degree; boundedness below terminates this process. The same procedure lifts every graded invariant, using vanishing of graded degree-one cohomology to remove its differential. Hence $H^{>0}(\mathfrak m,Q_\chi)=0$ and $\operatorname{gr}W=\mathbb C[S]$, since $H^0(\mathfrak m,Q_\chi)=W$ by the defining invariant realization. Using the fixed PBW vector-space identification $U(\mathfrak p)\to Q_\chi$, take homogeneous coordinate representatives in $U(\mathfrak p)$ and form their ordered products there before projecting to $Q_\chi$. This never multiplies abstract classes in a left-ideal quotient. Their projected ordered monomials, acted on by the right $W$ bimodule action, span $Q_\chi$ by finite descending leading-term subtraction. A finite relation among them would give a relation between distinct monomials over $\operatorname{gr}W$; independence of polynomial monomials rules this out. Thus $Q_\chi$ is right $W$-free. All statements include the independent scalar coordinate of $\mathfrak{gl}_N$. [F2, F3, step 2.1, construct, algebra]

4.1 **Transfer to every module without graded-flatness assumptions.** The finite augmented cochain complex $0\to W\to C^0\to\cdots\to C^{\dim\mathfrak m}\to0$, where $C^j=Q_\chi\otimes\bigwedge^j\mathfrak m^*$, is exact by step 3.1 and is a complex of right $W$-modules. Its differentials are right $W$-linear because the right action commutes with the twisted left $\mathfrak m$ action. Each term is right $W$-free. Starting at the last term, split each surjection onto the already-projective boundary module; descending induction makes every boundary projective and splits every short exact sequence, including $W\hookrightarrow C^0$. These splittings supply a right $W$-linear contraction of the augmented complex. Tensor the contraction with an arbitrary left $W$-module $X$. This remains a contraction, and the resulting complex is exactly the twisted Chevalley–Eilenberg complex of $Q_\chi\otimes_W X$. Consequently its positive cohomology vanishes and its degree-zero cohomology is $X$ via $x\mapsto1_\chi\otimes x$. No filtration or flatness of $X$ is assumed. The splittings use exactly [F4]. [F2, F4, step 3.1, choose, construct, algebra]

5.1 The preceding steps prove the three assertions with the doubled even grading. In particular there is no degree $-1$ symplectic or Clifford contribution. If $e=0$, then $\mathfrak m=0$ and the product, augmentation and all cohomology identities reduce to their degree-zero identities. [F1, step 1.1, step 1.2, step 3.1, step 4.1] ∎

## Remarks

- The role of the doubling is to put the contracting $\mathbb C^\times$-weights in even degrees so that the Kazhdan symbols are the coordinate functions of the unipotent group; the loop filtration of the finite W-algebra is a different filtration and is treated separately later on this page.

- The detection statement is the categorical form of Skryabin's theorem used to identify Whittaker vectors: for $M$ in the Whittaker category, $M\mapsto\mathrm{Wh}(M)$ loses nothing.
