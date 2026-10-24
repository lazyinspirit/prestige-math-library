---
id: lem-riemann-roch-space-finite-dimensional
kind: lemma
title: Finite-dimensionality of the Riemann-Roch space
status: published
origin: pipeline
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-projective-cohomology-finite-dimensional-field
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-dependent-choice
  - def-dimension
  - def-dimension-noetherian-topological-space
  - def-euler-characteristic-coherent-sheaf
  - def-finite-type-finite-presentation-module-sheaf
  - def-integral-scheme
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-quasi-coherent-module-scheme
  - def-riemann-roch-space-of-divisor
  - def-sheaf-cohomology-derived-global-sections
  - lem-curve-closed-subsets-finite
  - lem-cartier-divisor-sheaf-invertible
  - lem-field-is-noetherian
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-noetherian-topological-space-dimension-vanishing
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the proper finiteness theorem.
Let $k$ be a field, let $C$ be a smooth proper geometrically integral curve
over $k$ ([[def-algebraic-curve-over-field]]) and let $D$ be a divisor on $C$.
Then:

1. the invertible sheaf $\mathcal O_C(D)$ is a coherent
   $\mathcal O_C$-module ([[def-coherent-module-scheme]]);
2. $L(D)=H^0(C,\mathcal O_C(D))$ is a finite-dimensional $k$-vector space;
3. $H^q(C,\mathcal O_C(D))$ is a finite-dimensional $k$-vector space
   ([[def-dimension]]) for every $q\ge0$, and vanishes for every $q\ge2$;
4. the Euler characteristic
   $\chi(C,\mathcal O_C(D))=h^0(D)-h^1(D)$ is defined
   ([[def-euler-characteristic-coherent-sheaf]]);
5. consequently $l(D):=\dim_kL(D)=h^0(D)$ is a nonnegative integer.

The divisor $D$ is first identified as a Cartier divisor by
[[thm-cartier-weil-divisors-curves-agree]]. The associated sheaf is constructed
by [[def-invertible-sheaf-of-cartier-divisor]] and proved invertible by
[[lem-cartier-divisor-sheaf-invertible]]. The Riemann-Roch space and its
identification with $H^0(C,\mathcal O_C(D))$ are supplied by
[[def-riemann-roch-space-of-divisor]], using the rational-section dictionary
[[thm-line-bundle-rational-section-cartier-divisor]]; these are the inputs
used in [F8]. The stated Axiom of Choice supplies the Dependent Choice
premise of the curve Cartier-to-Weil result through
[[thm-choice-implies-dependent-implies-countable-choice]].

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$, and a divisor $D$ on $C$.

[F1] A curve over $k$ is geometrically integral, separated and of finite type over $k$, and its underlying topological space has chain dimension one; being geometrically integral, $C$ is an integral $k$-scheme, so it is nonempty, reduced and irreducible, and the adjectives smooth and proper mean that the structure morphism $C\to\operatorname{Spec}k$ is smooth and proper ([[def-algebraic-curve-over-field]], [[def-integral-scheme]]).

[F2] For an integral $k$-scheme of finite type with underlying space of chain dimension one, the underlying space is Noetherian, and every proper closed subset is a finite set of closed points; the chain dimension is the Krull dimension of [[def-dimension-noetherian-topological-space]], so a curve has dimension at most one in the sense required for vanishing theorems ([[lem-curve-closed-subsets-finite]], [[def-dimension-noetherian-topological-space]]).

[F3] If $X$ is a Noetherian topological space with $\dim X\le d$ for an integer $d\ge0$, then $H^q(X,\mathcal F)=0$ for every sheaf of abelian groups $\mathcal F$ on $X$ and every integer $q>d$ ([[thm-noetherian-topological-space-dimension-vanishing]]).

[F4] If $X$ is a scheme proper over a field $k$ and $\mathcal F$ a coherent $\mathcal O_X$-module, then $H^q(X,\mathcal F)$ is a finite-dimensional $k$-vector space for every $q\ge0$, and only finitely many of the groups are nonzero: for a finite affine open cover of $X$ with $n$ members, $H^q(X,\mathcal F)=0$ for every $q\ge n$ ([[cor-projective-cohomology-finite-dimensional-field]]).

[F5] An invertible $\mathcal O_X$-module is locally free of rank one, and a locally free module is quasi-coherent; a locally free module of rank $r$ is of finite type, since on a chart $\mathcal E|_U\cong\mathcal O_U^r=\widetilde{A^r}$ with $A^r$ a finitely generated module; on a locally Noetherian scheme a quasi-coherent module is coherent if and only if it is of finite type ([[def-invertible-sheaf]], [[def-locally-free-sheaf-finite-rank]], [[def-quasi-coherent-module-scheme]], [[def-finite-type-finite-presentation-module-sheaf]], [[thm-coherent-sheaves-abelian-noetherian-scheme]]).

[F6] A scheme is locally Noetherian if it has an affine open cover by spectra of Noetherian rings; a morphism locally of finite type provides, around every point, an affine chart $\operatorname{Spec}B$ with $B$ a finitely generated algebra over the coordinate ring of an affine open of the target; a field is a Noetherian ring, and a finitely generated algebra over a Noetherian ring is Noetherian ([[def-locally-finite-type-and-finite-type-morphism]], [[def-locally-noetherian-and-noetherian-scheme]], [[lem-field-is-noetherian]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]).

[F7] For a coherent module $\mathcal F$ on a scheme proper over $k$ whose cohomology is finite-dimensional with only finitely many nonzero groups, the Euler characteristic $\chi(X,\mathcal F)=\sum_{q\ge0}(-1)^q\dim_kH^q(X,\mathcal F)$ is an integer; the dimension $\dim_k$ of a finite-dimensional $k$-vector space is a nonnegative integer, and $H^q$ denotes sheaf cohomology of the underlying sheaf of abelian groups ([[def-euler-characteristic-coherent-sheaf]], [[def-dimension]], [[def-sheaf-cohomology-derived-global-sections]]).

[F8] Weil-to-Cartier, invertibility, and the Riemann-Roch space. The divisor $D$ is a Weil divisor on the smooth curve, so [[thm-cartier-weil-divisors-curves-agree]] identifies it with a Cartier divisor. The local-equation construction of [[def-invertible-sheaf-of-cartier-divisor]] defines $\mathcal O_C(D)$, and [[lem-cartier-divisor-sheaf-invertible]] proves it is invertible. The actual definition [[def-riemann-roch-space-of-divisor]] identifies $L(D)=\{f\in k(C)^\times:\operatorname{div}(f)+D\ge0\}\cup\{0\}$ with the image of $H^0(C,\mathcal O_C(D))$ in $k(C)$, using [[thm-line-bundle-rational-section-cartier-divisor]]. These interfaces supply the uses at steps 1.3 and 5.1.

[F9] The Axiom of Choice enters through the proper finiteness theorem [F4], the coherence and Noetherian suppliers [F5] and [F6], and the choice premises of the curve Cartier-to-Weil route [F8]. In ZF, AC implies DC by [[thm-choice-implies-dependent-implies-countable-choice]], so the DC premise of [F8] is available from the stated assumption ([[def-axiom-of-choice]], [[def-dependent-choice]]); no further selection is made below.

## Proof

**Proof technique:** direct; combine the coherence of $\mathcal O_C(D)$ on the locally Noetherian curve with the proper finiteness theorem for all $q$ and the Noetherian-dimension vanishing theorem for $q\ge2$.

1.1 The curve has the required global shape. By [F1] the curve $C$ is an integral $k$-scheme of finite type whose structure morphism is proper, and by [F2] its underlying space is Noetherian of dimension at most one; in particular $C$ is nonempty. [F1, F2]

1.2 The curve is locally Noetherian. Let $x\in C$ be a point. Since $C\to\operatorname{Spec}k$ is of finite type, [F6] gives an affine open neighbourhood $U=\operatorname{Spec}B$ of $x$ with $B$ a finitely generated $k$-algebra; the field $k$ is Noetherian and a finitely generated algebra over a Noetherian ring is Noetherian, so $B$ is Noetherian by [F6]. Therefore $C$ has an affine open cover by spectra of Noetherian rings, i.e. $C$ is locally Noetherian. [F1, F6]

1.3 The associated sheaf is invertible. The given divisor is a Weil divisor; by [F8] the curve Cartier-to-Weil result first realizes it as a Cartier divisor. The local-equation construction then gives $\mathcal O_C(D)$, and [F8] supplies its invertibility; by [F5] it is locally free of rank one. [F5, F8]

2.1 The associated sheaf is quasi-coherent of finite type. By [F5] a locally free module is quasi-coherent, and of finite type because its charts are free modules of finite rank; hence $\mathcal O_C(D)$ is a quasi-coherent $\mathcal O_C$-module of finite type. [F5, step 1.3]

2.2 Vanishing above degree one. By step 1.1 the underlying space of $C$ is Noetherian of dimension at most one, so [F3] with $d=1$ gives $H^q(C,\mathcal O_C(D))=0$ for every integer $q>1$, that is, for every $q\ge2$. [F3, step 1.1]

3.1 The associated sheaf is coherent. By step 1.2 the curve $C$ is locally Noetherian, so [F5] applies in the form: a quasi-coherent module of finite type on a locally Noetherian scheme is coherent. With step 2.1, $\mathcal O_C(D)$ is a coherent $\mathcal O_C$-module. [F5, step 1.2, step 2.1]

4.1 Finite-dimensionality in every degree. Apply [F4] to the scheme $C$ proper over the field $k$ and the coherent $\mathcal O_C$-module $\mathcal O_C(D)$ of step 3.1: for every $q\ge0$ the $k$-vector space $H^q(C,\mathcal O_C(D))$ is finite-dimensional, and only finitely many of these groups are nonzero. [F4, step 1.1, step 3.1]

5.1 The Riemann-Roch space is the space of global sections. By [F8], the divisor space $L(D)$ is identified with $H^0(C,\mathcal O_C(D))$ as $k$-subspaces of $k(C)$; hence $L(D)$ is a finite-dimensional $k$-vector space by step 4.1, and $l(D)=\dim_kL(D)=h^0(D)$ with $h^0(D)=\dim_kH^0(C,\mathcal O_C(D))$. [F8, step 4.1]

5.2 The Euler characteristic. By [F7] the Euler characteristic of the coherent module $\mathcal O_C(D)$ on the proper $k$-scheme $C$ is the alternating sum $\sum_{q\ge0}(-1)^q\dim_kH^q(C,\mathcal O_C(D))$ of finite dimensions, an integer; by step 2.2 only $q=0$ and $q=1$ contribute, so $\chi(C,\mathcal O_C(D))=h^0(D)-h^1(D)$ with both terms finite-dimensional by step 4.1. [F7, step 4.1, step 2.2]

6.1 The integer $l(D)$. By step 5.1 $l(D)=\dim_kL(D)=\dim_kH^0(C,\mathcal O_C(D))=h^0(D)$; this is the dimension of the finite-dimensional $k$-vector space $H^0(C,\mathcal O_C(D))$ of step 4.1, hence a nonnegative integer by [F7]. [F7, step 4.1, step 5.1]

7.1 Conclusion and choice accounting. Step 3.1 establishes (1), steps 4.1 and 2.2 establish (3), step 5.1 establishes (2), step 5.2 establishes (4) and step 6.1 establishes (5). The Axiom of Choice is used only through the proper finiteness theorem [F4], the suppliers of [F5] and [F6], and the flagged suppliers of [F8], as recorded in [F9]; the argument above makes no further selection. [F4, F5, F6, F8, F9, step 3.1, step 4.1, step 2.2, step 5.1, step 5.2, step 6.1] ∎
