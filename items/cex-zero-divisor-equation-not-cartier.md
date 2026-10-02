---
id: cex-zero-divisor-equation-not-cartier
kind: counterexample
title: "A locally principal subscheme need not be an effective Cartier divisor"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-dual-numbers-scheme
  - def-effective-cartier-divisor
  - def-sheaf-total-quotient-rings
  - thm-affine-closed-immersions-quotient-rings
  - thm-effective-cartier-divisor-closed-immersion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Definition 31.14.1 and Lemma 31.14.2"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §15.1"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
---

## Statement refuted

The claim refuted is: *every closed subscheme that is locally cut out by
principal ideals is an effective Cartier divisor.* Let $k$ be a field and let
$X=\operatorname{Spec}A$ with $A=k[\epsilon]/(\epsilon^2)$ be the
dual-numbers scheme. The closed subscheme $Z=V(\epsilon)$ is cut out on the
single affine chart $X$ by the principal ideal $(\epsilon)$, but $\epsilon$
is a zero divisor, $\epsilon\cdot\epsilon=0$ with $\epsilon\neq0$; every
generator of $(\epsilon)$ is such a multiple, hence a zero divisor, so the
ideal has no regular generator and $Z$ is not an effective Cartier divisor.

## Facts & Assumptions

**Given:** A field $k$, the ring $A=k[\epsilon]/(\epsilon^2)$ with
$\epsilon^2=0$ and $\epsilon\neq0$, the affine scheme
$X=\operatorname{Spec}A$, and the closed subscheme $Z=V(\epsilon)$ cut out by
the principal ideal $(\epsilon)\subseteq A$.

[F1] $X=\operatorname{Spec}A$ is the dual-numbers scheme of $k$
([[def-dual-numbers-scheme]]); its global sections are $\mathcal O_X(X)=A$,
whose elements are the classes $a+b\epsilon$ with $a,b\in k$ and with
$\epsilon^2=0$ and $\epsilon\neq0$.

[F2] Closed subschemes of $X=\operatorname{Spec}A$ are, up to unique
isomorphism over $X$, exactly the morphisms
$\operatorname{Spec}(A/I)\hookrightarrow\operatorname{Spec}A$ for ideals
$I\subseteq A$; in particular $Z=V(\epsilon)$ is the closed subscheme
$\operatorname{Spec}(A/(\epsilon))$ cut out by the principal ideal
$(\epsilon)$ ([[thm-affine-closed-immersions-quotient-rings]]).

[F3] A Cartier divisor on $X$ is a section of the quotient sheaf
$\mathcal K_X^{\times}/\mathcal O_X^{\times}$ of [[def-sheaf-total-quotient-rings]];
an effective Cartier divisor admits a local-equation representation
$(U_i,f_i)$ with $f_i\in\mathcal O_X(U_i)$ whose germs are regular sections,
that is, multiplication by each germ $(f_i)_x$ is injective on
$\mathcal O_{X,x}$. In particular, on the affine chart $X$ a local equation
is an element $f\in A$ such that multiplication by $f$ on $A$ is injective
([[def-effective-cartier-divisor]]).

[F4] Part 1 of [[thm-effective-cartier-divisor-closed-immersion]] attaches to
every effective Cartier divisor $D$ on $X$ a closed subscheme $Z_D$ whose
ideal sheaf $I_D$ is the kernel of $\mathcal O_X\to(i_D)_*\mathcal O_{Z_D}$,
and for every local-equation datum $\{(U_i,f_i)\}$ of $D$ one has
$I_D|_{U_i}=f_i\mathcal O_{U_i}$. Part 2 states the converse: a closed
subscheme locally cut out by nonzerodivisors is of the form $Z_D$ for an
effective Cartier divisor $D$.

## Counterexample

1.1 The ring $A=k[\epsilon]/(\epsilon^2)$ is local with maximal ideal $(\epsilon)$, and its units are exactly the elements $a+b\epsilon$ with $a\neq0$. Indeed $A/(\epsilon)\cong k$ is a field, so $(\epsilon)$ is maximal; if $a\neq0$ then $(a+b\epsilon)(a^{-1}-ba^{-2}\epsilon)=1+b a^{-1}\epsilon-b a^{-1}\epsilon=1$, so $a+b\epsilon$ is a unit; conversely an element $b\epsilon$ of $(\epsilon)$ is not a unit because $A/(\epsilon)\cong k$ kills it. [F1]

1.2 The element $\epsilon$ is a zero divisor of $A$: $\epsilon\neq0$ by hypothesis and $\epsilon\cdot\epsilon=\epsilon^2=0$, so multiplication by $\epsilon$ on $A$ sends the nonzero element $\epsilon$ to $0$ and is not injective. The same computation gives $a\epsilon\cdot\epsilon=0$ for every $a\in k$. [F1]

2.1 The generators of the ideal $(\epsilon)$ are exactly the elements $a\epsilon$ with $a\neq0$: an element of $(\epsilon)$ is $c+d\epsilon$ times $\epsilon$, which equals $c\epsilon$ because $\epsilon^2=0$; if $a\neq0$ then $\epsilon=a^{-1}(a\epsilon)$ lies in $(a\epsilon)$, so $(a\epsilon)=(\epsilon)$, and conversely a generator $f=(c+d\epsilon)\epsilon=c\epsilon$ of $(\epsilon)$ satisfies $\epsilon\in(f)=(c\epsilon)$ only if $c\neq0$. By step 1.2 every such generator is a zero divisor. [step 1.1, step 1.2]

3.1 The closed subscheme $Z=V(\epsilon)$ is not an effective Cartier divisor on $X$. Suppose it were, say $Z=Z_D$ for an effective Cartier divisor $D$. By [F4] the ideal sheaf $I_D$ equals the ideal sheaf of $Z$, which on the single chart $X$ is $(\epsilon)$; since $X$ has only one point, its only nonempty open is $X$, so an effective datum supplies an equation $f\in A=\mathcal O_X(X)$; by [F4] we have $I_D|_X=fA$, so $f$ generates $(\epsilon)$. By step 2.1 the element $f$ is a zero divisor, so multiplication by $f$ on $A$ is not injective and $f$ is not a regular section; this contradicts the effectiveness requirement of [F3]. [F2, F3, F4, step 2.1]

4.1 Therefore $Z=V(\epsilon)$ is locally principal, being cut out on its unique affine chart by the principal ideal $(\epsilon)$, yet it is not an effective Cartier divisor, because no generator of that ideal is a nonzerodivisor. This refutes the claim that local principality alone makes a closed subscheme an effective Cartier divisor. [step 1.1, step 1.2, step 2.1, step 3.1] ∎

The obstruction is the nilpotent structure of $A$: the vanishing scheme
$Z=\operatorname{Spec}k$ is a single reduced point, but the scheme $X$ is
non-reduced and the equation of the point is a zero divisor. On an integral
scheme a nonzero regular function on a nonempty open has a nonzero germ in
every local domain, so it is a nonzerodivisor
([[def-effective-cartier-divisor]]). The example shows that the nonzerodivisor hypothesis cannot be dropped
in the converse construction of an effective Cartier divisor from a locally
principal closed subscheme ([[thm-effective-cartier-divisor-closed-immersion]]).
It does not test dropping effectiveness for an existing Cartier divisor:
on this $X$ every nonzerodivisor is a unit, so $\mathcal K_X=\mathcal O_X$
and every Cartier divisor is zero.
