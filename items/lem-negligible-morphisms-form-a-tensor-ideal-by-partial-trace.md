---
id: lem-negligible-morphisms-form-a-tensor-ideal-by-partial-trace
kind: lemma
title: "Partial-trace closure of negligible morphisms"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-negligible-morphism-in-a-pivotal-category
  - def-pivotal-structure
  - def-braiding
  - lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series
  - def-rigid-object-and-rigid-monoidal-category
  - def-temperley-lieb-closure-trace-and-partial-trace
  - lem-temperley-lieb-closure-trace-component-identities
  - thm-basic-properties-of-the-categorical-trace
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§5.2, Lemma 5.2.2, PDF pp. 47–48: negligible morphisms form a tensor ideal." 
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Exercise 8.18.9(ii), printed p. 236: composition and tensor closure; the local proof below supplies the partial-trace argument." 
---

## Statement

In the pivotal setting of [[def-negligible-morphism-in-a-pivotal-category]], negligible morphisms are closed under addition, scalar multiplication, arbitrary composition on either side, and tensor product on the right by arbitrary morphisms. They are also closed under tensor product on the left, hence form a two-sided tensor ideal, under either of these sufficient hypotheses: the two pivotal traces agree on every endomorphism, or the category admits a braiding. In particular the conclusion applies to the planar Temperley–Lieb category and to the braided full tilting category used below. No factorization of an arbitrary tensor-product intertwiner is assumed.

## Facts & Assumptions

**Given:** A $\mathbb C$-linear rigid monoidal category with pivotal structure $j$, and a negligible morphism $f:X\to Y$.

[F1] Negligibility means $\operatorname{Tr}_L(j_Xgf)=0$ for all $g:Y\to X$ ([[def-negligible-morphism-in-a-pivotal-category]]).

[F2] The pivotal structure is a monoidal natural isomorphism, and the categorical trace is cyclic, including the typed different-object identity ([[def-pivotal-structure]], [[thm-basic-properties-of-the-categorical-trace]]).

[F3] Evaluation and coevaluation satisfy the two zig-zag identities ([[def-rigid-object-and-rigid-monoidal-category]]). Write $t_X(u)=\operatorname{Tr}_L(j_Xu)$ and $r_X(u)=\operatorname{Tr}_R(uj_X^{-1})$ for the two pivotal traces.

[F4] When the braided alternative is used, [[def-braiding]] supplies natural isomorphisms $c_{Z,X}:Z\otimes X\to X\otimes Z$. In the other alternative assume explicitly $t_X(u)=r_X(u)$ for every object and every endomorphism.

[F5] [[lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series]] constructs a natural invertible braiding on the full prequotient rank-one tilting category for every $\ell\ge3$, including even $\ell$, by the finite integral $R$ series; its Proofs 3.1 and 4.1 extend the construction from tensor powers to all tilting summands.

[L1] For the Temperley–Lieb specialization, the partial trace is the cap/cup closure of [[def-temperley-lieb-closure-trace-and-partial-trace]], and the component-counting identity is proved in [[lem-temperley-lieb-closure-trace-component-identities]].

## Proof

**Proof technique:** direct.

1.1 For any $a:Y\to Z$ and any $h:Z\to X$, the trace of $h(af)$ is $\operatorname{Tr}_L(j_Xhaf)$. By the different-object cyclicity in [F2] and naturality $j_Yf=f^{\vee\vee}j_X$, this equals $\operatorname{Tr}_L(j_Yfha)$. Since $ha:Y\to X$, [F1] makes this zero. The same argument with a map $b:W\to X$ and a test map $g:Y\to W$ gives $\operatorname{Tr}_L(j_Xbgf)=0$; hence post- and pre-composition preserve negligibility. Closure under sums and scalar multiples follows from linearity of trace. [F1, F2, algebra]

2.1 Let $Z$ be any object and $h:Y\otimes Z\to X\otimes Z$. Write $\widetilde{\operatorname{ev}}_Z=\operatorname{ev}_{Z^\vee}(j_Z\otimes1_{Z^\vee}):Z\otimes Z^\vee\to\mathbf1$, the right evaluation determined by the pivotal structure, and define $\operatorname{ptr}_Z(h)=(1_X\otimes\widetilde{\operatorname{ev}}_Z)(h\otimes1_{Z^\vee})(1_Y\otimes\operatorname{coev}_Z):Y\to X$. Expanding the trace of $j_{X\otimes Z}h(f\otimes1_Z)$ gives $\operatorname{ev}_{Z^\vee\otimes X^\vee}(((j_X\otimes j_Z)h(f\otimes1_Z))\otimes1_{Z^\vee\otimes X^\vee})(1_X\otimes\operatorname{coev}_Z\otimes1_{X^\vee})\operatorname{coev}_X$. The tensor-evaluation formula factors $\operatorname{ev}_{Z^\vee\otimes X^\vee}$ by first evaluating the middle $Z^{\vee\vee}\otimes Z^\vee$ pair and then the outer $X^{\vee\vee}\otimes X^\vee$ pair; substituting $\widetilde{\operatorname{ev}}_Z$ leaves exactly $\operatorname{Tr}_L(j_X\operatorname{ptr}_Z(h)f)$. This regrouping uses monoidality of $j$ and the dual zig-zags [F2,F3]. Since $\operatorname{ptr}_Z(h):Y\to X$ is an allowed test map in [F1], the value is zero, so $f\otimes1_Z$ is negligible. [F1, F2, F3, step 1.1, construct]

3.1 Suppose first that the two pivotal traces agree on all endomorphisms. For $h:Z\otimes Y\to Z\otimes X$ set $\widetilde{\operatorname{coev}}_Z=(1_{Z^\vee}\otimes j_Z^{-1})\operatorname{coev}_{Z^\vee}$ and $q=(\operatorname{ev}_Z\otimes1_X)(1_{Z^\vee}\otimes h)(\widetilde{\operatorname{coev}}_Z\otimes1_Y):Y\to X$. Expand the right pivotal trace $r_{Z\otimes X}(h(1_Z\otimes f))$ using the tensor evaluation and coevaluation formulas. Its inner closure is the $Z$-closure defining $q$; the remaining outer closure is $r_X(qf)$. This is the mirror of the nested calculation in step 2.1 and uses only the two snakes and monoidality of $j$. Thus $t_{Z\otimes X}(h(1_Z\otimes f))=r_{Z\otimes X}(h(1_Z\otimes f))=r_X(qf)=t_X(qf)=0$, by the trace-agreement hypothesis and negligibility of $f$. This proves left tensor closure in this alternative; the two changes of trace are essential. [F1, F2, F3, F4, step 2.1, construct]

3.2 Suppose instead that a braiding is given. Step 2.1 makes $f\otimes1_Z$ negligible. Naturality gives $1_Z\otimes f=c_{Z,Y}^{-1}(f\otimes1_Z)c_{Z,X}$. The two outside factors have the displayed compatible types, and composition closure from step 1.1 therefore proves $1_Z\otimes f$ negligible. This alternative does not require equality of the two pivotal traces. [F1, F4, step 1.1, step 2.1, algebra]

4.1 For any $g:Z\to W$, $f\otimes g=(1_Y\otimes g)(f\otimes1_Z)$ and $g\otimes f=(g\otimes1_Y)(1_Z\otimes f)$. Composition closure from step 1.1 and step 2.1 give right tensor closure for every pivotal category. Under either stated additional hypothesis, step 3.1 or step 3.2 also gives left tensor closure. In the Temperley–Lieb category, [L1] also verifies the partial-trace identities by counting components of the closed finite stacked graph. For the full rank-one tilting category, [F5] supplies the prequotient braiding required in step 3.2, so its negligible morphisms also form a two-sided tensor ideal for every $\ell\ge3$. Together with linearity this proves every stated closure assertion. [F1, F2, F5, L1, step 1.1, step 2.1, step 3.1, step 3.2, algebra] ∎


## Remarks

The extra hypothesis for left tensor closure cannot simply be omitted. Consider the $\mathbb C$-linear category of orientation-compatible noncrossing pairings of boundary words in $X,X^\vee$. Composition joins pairings; each resulting oriented circle contributes $0$ in the orientation defining $t_X(1_X)$ and $1$ in the opposite orientation. A closed component remains closed in every further composition, so the total component decomposition proves associativity and tensor interchange. Cups and caps satisfy the snakes, rotation gives duals, and two rotations give the identity pivotal comparison. Taking the additive envelope gives the setting of the Definition, with $\operatorname{End}(\mathbf1)=\mathbb C$ and $\operatorname{End}(X)=\mathbb C1_X$. Thus $t_X(1_X)=0$ makes $1_X$ negligible. However, for $a=\operatorname{coev}_{X^\vee}:\mathbf1\to X^\vee\otimes X$ and $b=\operatorname{ev}_X:X^\vee\otimes X\to\mathbf1$, cyclicity gives $t_{X^\vee\otimes X}(ab)=ba=1$. Hence $1_{X^\vee}\otimes1_X$ is not negligible. This is a counterexample to the unqualified generality, not an open problem.
