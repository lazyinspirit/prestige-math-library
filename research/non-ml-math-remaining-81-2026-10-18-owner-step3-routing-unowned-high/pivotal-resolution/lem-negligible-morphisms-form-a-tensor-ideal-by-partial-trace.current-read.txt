---
id: lem-negligible-morphisms-form-a-tensor-ideal-by-partial-trace
kind: lemma
title: "Negligible morphisms form a tensor ideal by partial trace"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-negligible-morphism-in-a-pivotal-category
  - def-pivotal-structure
  - def-rigid-object-and-rigid-monoidal-category
  - def-temperley-lieb-closure-trace-and-partial-trace
  - lem-temperley-lieb-closure-trace-component-identities
  - thm-basic-properties-of-the-categorical-trace
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§5.2, Lemma 5.2.2, PDF pp. 47–48: negligible morphisms form a tensor ideal." 
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Exercise 8.18.9(ii), printed p. 237: composition and tensor closure; the local proof below supplies the partial-trace argument." 
---

## Statement

In the pivotal setting of [[def-negligible-morphism-in-a-pivotal-category]], the negligible morphisms are closed under addition, scalar multiplication, arbitrary composition on either side, and tensor product on either side. Thus they form a two-sided tensor ideal. The proof uses an explicit partial-trace identity and does not assume that an arbitrary intertwiner of a tensor product factors as a tensor product of intertwiners.

## Facts & Assumptions

**Given:** A $\mathbb C$-linear rigid monoidal category with pivotal structure $j$, and a negligible morphism $f:X\to Y$.

[F1] Negligibility means $\operatorname{Tr}_L(j_Xgf)=0$ for all $g:Y\to X$ ([[def-negligible-morphism-in-a-pivotal-category]]).

[F2] The pivotal structure is a monoidal natural isomorphism, and the categorical trace is cyclic, including the typed different-object identity ([[def-pivotal-structure]], [[thm-basic-properties-of-the-categorical-trace]]).

[F3] Evaluation and coevaluation satisfy the two zig-zag identities ([[def-rigid-object-and-rigid-monoidal-category]]).

[L1] For the Temperley–Lieb specialization, the partial trace is the cap/cup closure of [[def-temperley-lieb-closure-trace-and-partial-trace]], and the component-counting identity is proved in [[lem-temperley-lieb-closure-trace-component-identities]].

## Proof

**Proof technique:** direct.

1.1 For any $a:Y\to Z$ and any $h:Z\to X$, the trace of $h(af)$ is $\operatorname{Tr}_L(j_Xhaf)$. By the different-object cyclicity in [F2] and naturality $j_Yf=f^{\vee\vee}j_X$, this equals $\operatorname{Tr}_L(j_Yfha)$. Since $ha:Y\to X$, [F1] makes this zero. The same argument with a map $b:W\to X$ and a test map $g:Y\to W$ gives $\operatorname{Tr}_L(j_Xbgf)=0$; hence post- and pre-composition preserve negligibility. Closure under sums and scalar multiples follows from linearity of trace. [F1, F2, algebra]

2.1 Let $Z$ be any object and $h:Y\otimes Z\to X\otimes Z$. Write $\widetilde{\operatorname{ev}}_Z=\operatorname{ev}_{Z^\vee}(j_Z\otimes1_{Z^\vee}):Z\otimes Z^\vee\to\mathbf1$, the right evaluation determined by the pivotal structure, and define $\operatorname{ptr}_Z(h)=(1_X\otimes\widetilde{\operatorname{ev}}_Z)(h\otimes1_{Z^\vee})(1_Y\otimes\operatorname{coev}_Z):Y\to X$. Expanding the trace of $j_{X\otimes Z}h(f\otimes1_Z)$ gives $\operatorname{ev}_{Z^\vee\otimes X^\vee}(((j_X\otimes j_Z)h(f\otimes1_Z))\otimes1_{Z^\vee\otimes X^\vee})(1_X\otimes\operatorname{coev}_Z\otimes1_{X^\vee})\operatorname{coev}_X$. The tensor-evaluation formula factors $\operatorname{ev}_{Z^\vee\otimes X^\vee}$ by first evaluating the middle $Z^{\vee\vee}\otimes Z^\vee$ pair and then the outer $X^{\vee\vee}\otimes X^\vee$ pair; substituting $\widetilde{\operatorname{ev}}_Z$ leaves exactly $\operatorname{Tr}_L(j_X\operatorname{ptr}_Z(h)f)$. This regrouping uses monoidality of $j$ and the dual zig-zags [F2,F3]. Since $\operatorname{ptr}_Z(h):Y\to X$ is an allowed test map in [F1], the value is zero, so $f\otimes1_Z$ is negligible. [F1, F2, F3, step 1.1, construct]

2.2 For $h:Z\otimes Y\to Z\otimes X$ define $\widetilde{\operatorname{coev}}_Z=(1_{Z^\vee}\otimes j_Z^{-1})\operatorname{coev}_{Z^\vee}:\mathbf1\to Z^\vee\otimes Z$ and $\operatorname{ptr}^{L}_Z(h)=(\operatorname{ev}_Z\otimes1_X)(1_{Z^\vee}\otimes h)(\widetilde{\operatorname{coev}}_Z\otimes1_Y):Y\to X$. Expanding the trace gives $\operatorname{ev}_{X^\vee\otimes Z^\vee}(((j_Z\otimes j_X)h(1_Z\otimes f))\otimes1_{X^\vee\otimes Z^\vee})(1_Z\otimes\operatorname{coev}_X\otimes1_{Z^\vee})\operatorname{coev}_Z$. The tensor-evaluation formula first evaluates the adjacent $X^{\vee\vee}\otimes X^\vee$ pair; naturality of $j$ moves $f$ to the $X$ input, and the pivotal zig-zag [F3] identifies the remaining $Z$ cup with $\widetilde{\operatorname{coev}}_Z$. The resulting composite is exactly $\operatorname{Tr}_L(j_X\operatorname{ptr}^{L}_Z(h)f)$. It vanishes by [F1] since $\operatorname{ptr}^{L}_Z(h):Y\to X$ is an allowed test map, proving $1_Z\otimes f$ negligible without interchanging tensor factors. [F1, F2, F3, step 1.1, construct]

3.1 For any $g:Z\to W$, $f\otimes g=(1_Y\otimes g)(f\otimes1_Z)$ and $g\otimes f=(g\otimes1_Y)(1_Z\otimes f)$. Composition closure from step 1.1 and the two partial-trace arguments in steps 2.1 and 2.2 therefore give closure under tensoring on either side by arbitrary morphisms. In the Temperley–Lieb category, [L1] also verifies the partial-trace identities by counting components of the closed finite stacked graph. Together with linearity this proves tensor-ideal closure. [F1, F2, L1, step 1.1, step 2.1, step 2.2, algebra] ∎
