---
id: thm-james-reflexivity-theorem
kind: theorem
title: James reflexivity theorem
status: published
origin: pipeline
deps: [def-reflexive-banach-space, lem-james-norm-attainment-compactness-criterion, thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, def-dependent-choice, def-hahn-banach-extension-principle-relative, thm-relative-hahn-banach-norm-preserving-extension, cor-relative-hahn-banach-bidual-isometry, def-dual-space-of-a-normed-space, def-banach-space]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "Prove the reflexive direction by one norm-preserving Hahn–Banach extension; prove the real converse by the preceding James lemma and the complex converse by an explicit real-dual/complex-dual correspondence."
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Robert E. Megginson, An Introduction to Banach Space Theory (1998)"
      url: "https://ebooks.karbust.me/Mathematics/Robert%20E.%20Megginson%20-%20An%20Introduction%20to%20Banach%20Space%20Theory%20%281998%29%20%5B978-1-4612-0603-3%5D.pdf"
      locator: "§1.13, Theorems 1.13.14–1.13.15, printed pp. 132–134"
---

## Statement

Assume the ultrafilter lemma, the Axiom of Dependent Choice (DC), and the
relative Hahn–Banach principle HB.  A real or complex Banach space $X$ is
reflexive if and only if every $f\in X^*$ attains its norm on the closed unit
ball: there is $x\in B_X$ with $|f(x)|=\|f\|$.  This includes $X=\{0\}$.

## Facts & Assumptions

**Given:** the ultrafilter lemma, DC, HB, and a real or complex Banach space
$X$.

[F1] Reflexivity is surjectivity of the canonical map $J_X:X\to X^{**}$;
under HB the canonical map is an isometry
([[def-reflexive-banach-space]],
[[cor-relative-hahn-banach-bidual-isometry]]).

[F2] Under HB, every bounded scalar-linear functional on a scalar-linear
subspace of a normed space has a norm-preserving extension
([[thm-relative-hahn-banach-norm-preserving-extension]],
[[def-hahn-banach-extension-principle-relative]]).

[F3] Under DC and HB, and under the ultrafilter lemma for its nonreflexive
consequence, the James convex-block criterion says that every nonreflexive real
Banach space has a bounded real functional that does not attain its norm
([[lem-james-norm-attainment-compactness-criterion]],
[[def-dependent-choice]],
[[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]).

[F4] The continuous dual consists of bounded scalar-linear functionals and its
norm is the supremum on the closed unit ball; a Banach space is complete for
its norm ([[def-dual-space-of-a-normed-space]], [[def-banach-space]]).

## Proof

**Proof technique:** Hahn–Banach representation for the forward implication,
then contrapositive and realification for the reverse implication.

1.1 Suppose $X$ is reflexive and let $f\in X^*$.  If $f=0$, then $x=0\in B_X$ attains its norm.  If $f\ne0$, define $g$ on the one-dimensional scalar-linear subspace $\operatorname{span}_{\mathbb K}\{f\}\subseteq X^*$ by $g(cf)=c\|f\|$.  Then $|g(cf)|=\|cf\|$, so $\|g\|=1$.  By [F2] it extends to $G\in X^{**}$ with $\|G\|=1$.  Reflexivity and [F1] give $x\in X$ with $G=J_Xx$ and $\|x\|=\|G\|=1$.  Hence $f(x)=G(f)=\|f\|$, so $f$ attains its norm on $B_X$. [F1, F2, F4, given]

1.2 For the reverse implication, first suppose that $X$ is real and every member of $X^*$ attains its norm.  If $X$ were nonreflexive, [F3] would supply $z^*\in X^*$ that attains its norm nowhere on $B_X$, a contradiction.  Thus $X$ is reflexive. [F3, given, assume-contra, discharge-contradiction]

1.3 Now suppose $X$ is complex and every complex-linear member of $X^*$ attains its norm.  Let $X_{\mathbb R}$ be the same additive normed space with scalars restricted to $\mathbb R$.  It remains a real Banach space because its norm and Cauchy sequences are unchanged.  For $u\in(X_{\mathbb R})^*$ define $$f_u(x)=u(x)-i u(ix).$$ Real linearity gives $f_u(ix)=if_u(x)$, hence $f_u$ is complex linear, and $\operatorname{Re}f_u=u$.  The inequalities $\|u\|\le\|f_u\|$ and $\|f_u\|\le\|u\|$ follow respectively from $u=\operatorname{Re}f_u$ and, for each $x$, choosing a unit scalar $a$ with $a f_u(x)=|f_u(x)|$ and observing $|f_u(x)|=u(ax)$.  Thus $\|f_u\|=\|u\|$. [F4, construct, algebra]

2.1 By hypothesis, $f_u$ attains its norm at some $x\in B_X$.  Choose a unit scalar $a$ with $a f_u(x)=|f_u(x)|$ (take $a=1$ if the value is zero).  Then $ax\in B_X$ and $$u(ax)=\operatorname{Re}f_u(ax)=\operatorname{Re}(a f_u(x))=\|f_u\|=\|u\|.$$ Hence every member of $(X_{\mathbb R})^*$ attains its norm.  The real implication in step 1.2 shows that $X_{\mathbb R}$ is reflexive. [step 1.2, step 1.3, given, algebra]

3.1 To pass back to the complex space without an unproved slogan, let $H\in X^{**}$ be complex linear.  For $u\in(X_{\mathbb R})^*$ put $U(u)=\operatorname{Re}H(f_u)$.  Step 1.3 makes $U$ a bounded real-linear functional on $(X_{\mathbb R})^*$, with $|U(u)|\le\|H\|\|u\|$.  Real reflexivity from step 2.1 supplies $x\in X_{\mathbb R}$ such that $U(u)=u(x)$ for every real-dual $u$.  If $f\in X^*$ and $u=\operatorname{Re}f$, then the formula in step 1.3 gives $f_u=f$, so $\operatorname{Re}H(f)=\operatorname{Re}f(x)$.  Apply the same equality to the complex functional $if$: complex linearity gives $\operatorname{Re}H(if)=-\operatorname{Im}H(f)$ and $\operatorname{Re}(if(x))=-\operatorname{Im}f(x)$.  Thus $H(f)=f(x)=J_Xx(f)$ for every $f\in X^*$.  Therefore $J_X$ is onto and $X$ is complex-reflexive. [F1, step 1.3, step 2.1, algebra]

4.1 Steps 1.1 and 1.2 prove both implications over the reals; steps 1.3–3.1 prove the complex reverse implication, while step 1.1 already covers the complex forward implication.  If $X=\{0\}$, its dual and bidual are zero and the unique functional attains norm zero at zero.  The forward implication uses only HB; UL and DC enter the reverse implication exactly through [F3]. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, F1, F2, F3] ∎

## Source notes

Megginson's Theorem 1.13.14 proves the real contrapositive through the full
convex-block argument.  Theorem 1.13.15, printed p. 134, passes from complex
norm attainment to real norm attainment using
$f_u(x)=u(x)-iu(ix)$ and a unit-modulus rotation.  The final passage from
real reflexivity to complex reflexivity is expanded here by representing an
arbitrary complex bidual functional and recovering both of its scalar parts.
