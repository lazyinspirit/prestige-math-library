---
id: prop-primitive-vectors-of-the-induced-coordinate-module
kind: proposition
title: "Primitive vectors of the induced coordinate module"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 31
deps: [cor-morphisms-equal-on-dense-open-reduced-source, def-axiom-of-choice, def-induced-coordinate-module-e-lambda, def-primitive-vector-of-a-rational-representation, def-unipotent-algebraic-group, lem-representations-of-affine-group-schemes-are-comodules, thm-bruhat-decomposition-for-split-reductive-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22, Proposition 22.22, printed pp. 469-470"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Theorem 40 and Lemma 74"
---
## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $E(\lambda)$
be the induced coordinate module of a split reductive group $(G,T)$ with Borel
$B$ and unipotent radical $U=B_u$
([[def-induced-coordinate-module-e-lambda]]). If $E(\lambda)\ne0$, then the
space $E(\lambda)^U$ of $U$-fixed elements is one-dimensional, its nonzero
elements are primitive vectors of weight $\lambda$
([[def-primitive-vector-of-a-rational-representation]]), and evaluation at the
identity $f\mapsto f(1)$ is an isomorphism $E(\lambda)^U\to k$. In particular
$E(\lambda)\ne0$ if and only if $E(\lambda)$ contains a primitive vector of
weight $\lambda$, unique up to scalar.

## Facts & Assumptions

**Given:** A split reductive group $(G,T)$ with Borel $B\supseteq T$, unipotent
radical $U=B_u$, opposite Borel $B^0=B^-$, and an element
$\lambda\in X(T)$ with $E(\lambda)\subseteq O(G)$ as in the cited definition.

[F1] *Big cell.* $U\times B^0\to G$, $(u,b)\mapsto ub$, is an open immersion
onto a dense open subscheme of $G$, and $G$ is smooth, hence reduced
([[thm-bruhat-decomposition-for-split-reductive-group]]).

[F2] *Determination on the big cell.* Two elements of $E(\lambda)$ agreeing on
the image of $U\times B^0$ agree on $G$: morphisms from the reduced scheme $G$
equal on a dense open are equal
([[cor-morphisms-equal-on-dense-open-reduced-source]]).

[F3] *The action on $U$.* For $f\in E(\lambda)$ put $f_U(u)=f(u^{-1})$. For
$u_0\in U(R)$ one has $(u_0f)_U(u)=f((u u_0)^{-1})=f_U(u u_0)$; in particular
$f\in E(\lambda)^U$ is fixed by every $U(R)$ exactly when $f_U$ is invariant
under right translation by $U(R)$
([[def-induced-coordinate-module-e-lambda]],
[[lem-representations-of-affine-group-schemes-are-comodules]]).

[F4] *Unipotent fixed vectors.* A nonzero rational representation of the
unipotent group $U$ has a nonzero $U$-fixed vector; and a $U$-invariant regular
function on $U$ is constant, since right-translation invariance gives $f_U(u)=f_U(e)$ by translating the identity by $u$
([[def-unipotent-algebraic-group]]).

[F5] *Translation law.* $f(ub)=f(u)\lambda(b^{-1})$ for $u\in U(R)$,
$b\in B^0(R)$, and $f(t)=f(1)\lambda(t^{-1})$ for $t\in T(R)$
([[def-induced-coordinate-module-e-lambda]]).

## Proof

**Proof technique:** direct.

1.1 If $f\in E(\lambda)$ vanishes on $U$, then $f=0$: by [F5] $f$ vanishes on the whole big cell $U\cdot B^0$ [F1], and [F2] applies. [F1, F2, F5, given]

1.2 If $E(\lambda)\ne0$, then $E(\lambda)^U\ne0$: $E(\lambda)$ is a nonzero rational representation of the unipotent group $U$, so it has a nonzero fixed vector by [F4]. [F4, given]

2.1 For $f\in E(\lambda)^U$ the function $f_U$ is invariant under right translation by $U(R)$ for every $R$ by [F3], hence constant by [F4]; its constant value is $f_U(1)=f(1)$, so $f$ is determined by the scalar $f(1)$. Consequently the $k$-linear evaluation map $E(\lambda)^U\to k$, $f\mapsto f(1)$, is injective; by step 1.2 it is nonzero (a nonzero fixed vector has $f(1)\ne0$ by step 1.1), so $E(\lambda)^U$ is one-dimensional and evaluation is an isomorphism onto $k$. [F3, F4, step 1.1, step 1.2]

3.1 Let $0\ne f\in E(\lambda)^U$. For $t\in T(R)$ one has $(tf)(1)=f(t^{-1})=f(1)\lambda(t)$ by [F5], so $t\cdot f=\lambda(t)f$ and $f$ is a $T$-eigenvector of weight $\lambda$. Since $f$ is $U$-fixed, it is primitive of weight $\lambda$ by the definition. [F5, step 2.1]

4.1 Conversely, a primitive vector of weight $\lambda$ in $E(\lambda)$ is $U$-fixed, hence lies in the one-dimensional space $E(\lambda)^U$ of step 2.1; so it is unique up to a nonzero scalar, and its existence forces $E(\lambda)\ne0$. Together with steps 1.2, 2.1 and 3.1 this proves all assertions. [step 1.2, step 2.1, step 3.1] ∎

## Remarks

- The statement is the source's Proposition 22.22 in the conventions of this
  page: the fixed space is $E(\lambda)^U$ for the unipotent radical of the
  Borel $B$ used to define primitive vectors, and the big cell is
  $U\cdot B^0=U\cdot B^-$. The earlier scaffold's formulation with
  $E(\lambda)^{U^-}$ was corrected here; the computations for
  $\operatorname{SL}_2$ in the example show that $E(\lambda)^{U^-}$ is not the
  one-dimensional space of primitive vectors.
- The one-dimensionality of $E(\lambda)^U$ is what makes the primitive vector
  "unique up to scalar" and underlies the classification.
