---
id: ex-the-group-action-monad-and-its-algebras
kind: example
title: "For a group $G$ the monad $G\\times(-)$ on sets has the $G$-sets as its algebras"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-monad, def-t-algebra-and-algebra-homomorphism, def-eilenberg-moore-category, def-group, def-group-action, def-equivariant-map-of-group-actions, prop-sets-and-functions-form-category-set]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., §VI.2, Group actions"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Example

Let $G$ be a group with identity $u$. On $\mathbf{Set}$ put

$$T(X)=G\times X,\qquad T(f)=1_G\times f,\qquad \eta_X(x)=(u,x),\qquad \mu_X\bigl(g_1,(g_2,x)\bigr)=(g_1g_2,x).$$

Then $(T,\eta,\mu)$ is a monad, and its $T$-algebras are exactly the $G$-sets:
a structure map $h:G\times X\to X$ is the same thing as a left action of $G$ on
$X$, and a $T$-algebra homomorphism is the same thing as a $G$-equivariant map.

## Facts & Assumptions

**Given:** A group $G$ with identity $u$.

[L1] A monad on $\mathcal C$ is an endofunctor $T$ with natural transformations $\eta:1_{\mathcal C}\Rightarrow T$ and $\mu:T^2\Rightarrow T$ such that componentwise $\mu_A\circ T(\mu_A)=\mu_A\circ\mu_{TA}$ and $\mu_A\circ T(\eta_A)=1_{TA}=\mu_A\circ\eta_{TA}$ ([[def-monad]]).

[L2] A $T$-algebra is an object $A$ with a morphism $a:TA\to A$ satisfying $a\circ\eta_A=1_A$ and $a\circ T(a)=a\circ\mu_A$; a $T$-algebra homomorphism $f:(A,a)\to(B,b)$ is a morphism $f:A\to B$ with $f\circ a=b\circ T(f)$ ([[def-t-algebra-and-algebra-homomorphism]]).

[L3] A left action of $G$ on a set $X$ is a function $G\times X\to X$, written $(g,x)\mapsto g\cdot x$, such that $u\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$ for all $g,h\in G$ and $x\in X$; then $X$ is a $G$-set ([[def-group-action]]).

[L4] A function $f:X\to Y$ between $G$-sets is $G$-equivariant when $f(g\cdot x)=g\cdot f(x)$ for every $g\in G$ and $x\in X$ ([[def-equivariant-map-of-group-actions]]).

[L5] Sets and functions form the category $\mathbf{Set}$, with composition of functions and identity functions ([[prop-sets-and-functions-form-category-set]]).

[L6] The Eilenberg–Moore category $\mathcal C^T$ has the $T$-algebras as objects and the $T$-algebra homomorphisms as morphisms ([[def-eilenberg-moore-category]]).

## Verification

**Proof technique:** direct.

1.1 $T$ is an endofunctor of $\mathbf{Set}$: $T(1_X)=1_G\times1_X=1_{G\times X}$, and $T(f'\circ f)=1_G\times(f'\circ f)=(1_G\times f')\circ(1_G\times f)=T(f')\circ T(f)$, since both sides send $(g,x)$ to $(g,f'(f(x)))$. [L1, L5, given]

1.2 $\eta$ is natural: for $f:X\to Y$, both $T(f)\circ\eta_X$ and $\eta_Y\circ f$ send $x$ to $(u,f(x))$. And $\mu$ is natural: for $f:X\to Y$, both $T(f)\circ\mu_X$ and $\mu_Y\circ T(T(f))$ send $\bigl(g_1,(g_2,x)\bigr)$ to $(g_1g_2,f(x))$. [L1, given]

2.1 Associativity holds componentwise: on $\bigl(g_1,(g_2,(g_3,x))\bigr)$ the composite $\mu_X\circ T(\mu_X)$ gives $(g_1(g_2g_3),x)$ and $\mu_X\circ\mu_{TX}$ gives $((g_1g_2)g_3,x)$, and these agree because multiplication in $G$ is associative. [L1, given, step 1.1, step 1.2]

2.2 The unit laws hold componentwise: on $(g,x)$ the composite $\mu_X\circ T(\eta_X)$ gives $(gu,x)$ and $\mu_X\circ\eta_{TX}$ gives $(ug,x)$, and both equal $(g,x)$ because $u$ is a two-sided identity of $G$. Hence $(T,\eta,\mu)$ is a monad by [L1]. [L1, given, step 1.1, step 1.2]

3.1 Let $h:G\times X\to X$ be a structure map. By [L2] the unit law $h\circ\eta_X=1_X$ says $h(u,x)=x$ for every $x$, and the associativity law $h\circ T(h)=h\circ\mu_X$ evaluated at $\bigl(g_1,(g_2,x)\bigr)$ says $h(g_1,h(g_2,x))=h(g_1g_2,x)$. Writing $g\cdot x:=h(g,x)$, these are exactly the two clauses of [L3], so $h$ is a left action of $G$ on $X$. [L2, L3, step 2.1, step 2.2]

4.1 Conversely, a left action of $G$ on $X$ is a function $h:G\times X\to X$ with $h(u,x)=x$ and $h(g_1g_2,x)=h(g_1,h(g_2,x))$ by [L3], which are the two $T$-algebra laws of [L2] read backwards. So the $T$-algebras with underlying set $X$ are precisely the left actions of $G$ on $X$. [L2, L3, step 3.1]

5.1 For algebras $(X,h)$ and $(Y,k)$ and a function $f:X\to Y$, the homomorphism condition $f\circ h=k\circ T(f)$ of [L2] evaluated at $(g,x)$ reads $f(h(g,x))=k(g,f(x))$, that is $f(g\cdot x)=g\cdot f(x)$, which is $G$-equivariance in the sense of [L4]. [L2, L4, step 3.1, step 4.1]

6.1 By [L6] the Eilenberg–Moore category of this monad therefore has the $G$-sets as objects and the $G$-equivariant maps as morphisms. This proves the stated claim. [L6, step 4.1, step 5.1] ∎
