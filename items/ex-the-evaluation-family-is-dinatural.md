---
id: ex-the-evaluation-family-is-dinatural
kind: example
title: "Evaluation of functions is dinatural in its argument set"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dinatural-transformation, thm-currying-is-an-adjunction-in-set, def-the-set-of-functions-from-one-set-to-another, prop-sets-and-functions-form-category-set, def-cartesian-product, def-wedge-and-cowedge]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Remark 1.1.3"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Examples 4.4.3"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Example

Fix a set $Y$ and let
$S:\mathbf{Set}^{\mathrm{op}}\times\mathbf{Set}\to\mathbf{Set}$ be

$$S(B_1,B_2):=Y^{B_1}\times B_2,$$

contravariant in $B_1$ by precomposition and covariant in $B_2$
([[def-the-set-of-functions-from-one-set-to-another]],
[[def-cartesian-product]], [[prop-sets-and-functions-form-category-set]]). The
**evaluation family**

$$\operatorname{ev}_B:Y^{B}\times B\longrightarrow Y,\qquad \operatorname{ev}_B(g,b)=g(b),$$

is a dinatural transformation from $S$ to the constant functor at $Y$
([[def-dinatural-transformation]]), that is, a cowedge under $S$ with vertex
$Y$ ([[def-wedge-and-cowedge]]).

## Facts & Assumptions

**Given:** A set $Y$, the functor $S$ displayed above, and the family of evaluation functions.

[F3] The functions $A\to B$ form the set $B^{A}$, and Thus $f \in B^{A}$ holds if and only if $f : A \to B$. ([[def-the-set-of-functions-from-one-set-to-another]]).

[F5] The elements of $A\times B$ are exactly the ordered pairs: Thus $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$. ([[def-cartesian-product]]).

[F4] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[L1] For every set $A$ the product functor $-\times A$ is left adjoint to $(-)^A$, with $\mathbf{Set}(X\times A,Y)\cong\mathbf{Set}(X,Y^A)$ naturally in $X$ and $Y$; the bijection sends $k$ to $\check k(x,a)=k(x)(a)$ ([[thm-currying-is-an-adjunction-in-set]]).

[F1] A dinatural transformation $\alpha:P\to Q$ is a family $\alpha_c:P(c,c)\to Q(c,c)$ such that every $f:c\to c'$ satisfies $Q(1_c,f)\circ\alpha_c\circ P(f,1_c)=Q(f,1_{c'})\circ\alpha_{c'}\circ P(1_{c'},f)$, the equation displayed by the hexagon ([[def-dinatural-transformation]]).

[F2] A cowedge from $T$ to $d$ is a dinatural transformation from $T$ to a constant functor: a family $\rho_c:T(c,c)\to d$ with $\rho_c\circ T(f,1_c)=\rho_{c'}\circ T(1_{c'},f)$ for every $f:c\to c'$ ([[def-wedge-and-cowedge]]).

## Verification

**Proof technique:** direct.

1.1 The assignment $S$ is a functor: for $f:B\to B'$ the contravariant slot acts by $g\mapsto g\circ f$ from $Y^{B'}$ to $Y^{B}$ and the covariant slot by $f$ itself, and both actions preserve identities and composites because composition of functions does. The family $\operatorname{ev}_B$ is the transpose $\check k$ of the identity of $Y^{B}$ under the bijection of [L1] with $A=B$ and $X=Y^{B}$, so it is the counit of that adjunction at $Y$. [F3, F4, F5, L1]

2.1 Fix $f:B\to B'$ and chase an arbitrary element $(g,b)$ of $S(B',B)=Y^{B'}\times B$ through both legs of the hexagon. Since the target is the constant functor at $Y$, both outer actions on the target side are identities, and the two legs are $\operatorname{ev}_B\circ S(f,1_B)$ and $\operatorname{ev}_{B'}\circ S(1_{B'},f)$. The first sends $(g,b)$ to $\operatorname{ev}_B(g\circ f,b)=g(f(b))$ and the second sends it to $\operatorname{ev}_{B'}(g,f(b))=g(f(b))$. The two values agree for every $(g,b)$, so the two legs are equal. [F1, F5, step 1.1]

3.1 Since the target is the constant functor at $Y$, the equation verified in step 2.1 is exactly the cowedge equation of [F2], so the evaluation family is a cowedge under $S$ with vertex $Y$, and in particular a dinatural transformation. [F2, step 2.1] ∎

## Remarks

The displayed evaluation family supplies only diagonal components. There is no
canonical evaluation map $Y^{B_1}\times B_2\to Y$ for unrelated $B_1,B_2$, and
no natural family of such maps extending evaluation in general; special cases
such as singleton $Y$ may admit constant maps. What the family always has is
one component per object on the diagonal, tied together by the equation checked
above, which is precisely the shape dinaturality was defined to capture.

The chase uses nothing about $Y$. If $Y$ is empty then $Y^{B}$ is empty unless $B$ is, and the two legs are then functions with empty domain, which are equal for that reason; the computation above covers that case without a separate argument, since it verifies the two legs agree at every element of the domain.
