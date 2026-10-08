---
id: lem-cg-full-descent-element-characterizes-finite-type
kind: lemma
title: "An element with full left descent makes the Coxeter group finite and is the longest element"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 17
deps:
  - lem-cg-weak-order-is-a-graded-partial-order
  - def-hh-coxeter-matrix-word-group-and-length
  - def-cg-canonical-reflection-homomorphism
  - def-cg-real-coxeter-form-and-reflection
  - thm-cg-root-sign-and-simple-reflection-positivity
  - thm-cg-root-length-criterion-and-faithfulness
  - def-cg-geometric-inversion-set
  - thm-cg-root-inversion-formulas-and-strong-exchange
  - thm-cg-finite-parabolic-longest-element-and-opposition
  - def-cg-parabolic-quotient-and-two-sided-minima
  - thm-cg-parabolic-intersections-and-coset-factorization
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
justified_by: []
proof_strategy: "root signs, linearity and faithfulness identify a full-descent element with the longest element"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Proposition 2.3.1(ii) with proof, Proposition 2.3.2 and Corollary 2.3.3, printed pp. 36-37 (full-descent criterion and finite longest-element length properties; the local proof replaces the source proof's Bruhat-lifting step)"
    - title: "Nathan Reading and David E. Speyer, Cambrian fans (J. Eur. Math. Soc. 11 (2009) 407-447; arXiv:math/0606201v2)"
      url: "https://arxiv.org/pdf/math/0606201v2"
      locator: "Section 2, arXiv p. 6 (finite-Coxeter-group inversion/descent context; corroborative only for finite cases)"
---

## Statement

Let $(S,m)$ be a finite Coxeter matrix, $W$ the presented group with length
$\ell$, $V=\mathbb R^S$ with Coxeter form $B$, the canonical reflection
homomorphism $\rho$, the signed root system $\Phi=\Phi_+\sqcup\Phi_-$, the
positive cone $V_+=\{\sum_s\lambda_se_s:\lambda_s\ge0\}$ and the reflection
set $T$ ([[def-cg-real-coxeter-form-and-reflection]],
[[def-cg-canonical-reflection-homomorphism]],
[[thm-cg-root-sign-and-simple-reflection-positivity]]), with inversion sets
$N(w)$ ([[def-cg-geometric-inversion-set]]) and descent sets $D_L,D_R$
([[def-cg-parabolic-quotient-and-two-sided-minima]] (2)).

**(1) Full left descent forces finiteness.** Suppose $x\in W$ satisfies
$D_L(x)=S$, i.e. $\ell(sx)<\ell(x)$ for every $s\in S$. Then:

(i) $\rho(x^{-1})\Phi_+=\Phi_-$ and $N(x^{-1})=\Phi_+$;

(ii) $\Phi$ is finite, $|\Phi_+|=\ell(x)=|T|$, and $W$ is finite;

(iii) $x$ is the longest element $w_0$ of $W$; equivalently $x$ is the unique
element of $W$ with $N(x^{-1})=\Phi_+$; and $x^{-1}=x$ as well as
$\ell(w_0w)=\ell(w_0)-\ell(w)$ for all $w\in W$.

**(2) Parabolic form.** Let $J\subseteq S$, let $W_J=\langle s:s\in J\rangle$
be the standard parabolic subgroup, $V_J=\mathrm{span}\{e_s:s\in J\}$,
$\Phi_J=\Phi\cap V_J=\Phi_J^+\sqcup\Phi_J^-$ the parabolic root subsystem of
[[thm-cg-parabolic-intersections-and-coset-factorization]] (2), and put
$N_J(y):=\{\alpha\in\Phi_J^+:\rho(y)\alpha\in\Phi_J^-\}$ for $y\in W_J$. If
$w\in W_J$ satisfies $\ell(sw)<\ell(w)$ for every $s\in J$, then $W_J$ is
finite, $N_J(w^{-1})=\Phi_J^+$, and $w=w_0(J)$ is the longest element of the
Coxeter system $(W_J,J)$. No Choice is used.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$ with presented group $W$, length $\ell$, canonical reflection homomorphism $\rho:W\to\mathrm{GL}(V)$ on $V=\mathbb R^S$ with basis $(e_s)_{s\in S}$, signed root system $\Phi=\Phi_+\sqcup\Phi_-$, positive cone $V_+$, reflection set $T$, inversion sets $N(w)$ and descent sets $D_L,D_R$ as in the cited items; $w,x\in W$, $J\subseteq S$ and $s\in S$ as specified in each clause.

[F1] [[def-cg-real-coxeter-form-and-reflection]]: $V=\mathbb R^S$ has the basis $(e_s)_{s\in S}$, and each $u\in V$ is the finite sum $u=\sum_su(s)e_s$.

[F2] [[def-cg-canonical-reflection-homomorphism]]: $\rho$ is a homomorphism with $\rho(s)=r_{e_s}$; $\Phi=\{\rho(u)e_s:u\in W,\ s\in S\}$ is the root system, so $\rho(v)\Phi=\Phi$ for every $v\in W$; $T=\{usu^{-1}:u\in W,\ s\in S\}$; and $V_+=\{\sum_s\lambda_se_s:\lambda_s\ge0\}$.

[F3] [[thm-cg-root-sign-and-simple-reflection-positivity]] (2): $\Phi=\Phi_+\sqcup\Phi_-$ with $\Phi_+=\Phi\cap V_+$, $\Phi_-=\Phi\cap(-V_+)$ and $\Phi_-=-\Phi_+$; every positive root is a nonnegative combination of the $e_s$, and $e_s\in\Phi_+$ for every $s$.

[F4] [[lem-cg-weak-order-is-a-graded-partial-order]] (5): for all $y$ and $s$, $s\in D_L(y)\iff e_s\in N(y^{-1})\iff\rho(y^{-1})e_s\in\Phi_-$.

[F5] [[def-cg-geometric-inversion-set]] (1): $N(y)=\{\alpha\in\Phi_+:\rho(y)\alpha\in\Phi_-\}$.

[F6] [[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)(iv): the map $\Phi_+\to T$, $\alpha\mapsto t_\alpha$, is a bijection; (2): $|N(y)|=\ell(y)$ for every $y$.

[F7] [[thm-cg-root-length-criterion-and-faithfulness]] (3): $\rho$ is injective, so $W$ embeds in $\mathrm{Sym}(\Phi)$, and for every $y\ne1$ there is $s$ with $\rho(y)e_s\in\Phi_-$.

[F8] [[def-cg-parabolic-quotient-and-two-sided-minima]]: $W_J=\langle s:s\in J\rangle$ is the standard parabolic subgroup of type $J$.

[F9] [[thm-cg-parabolic-intersections-and-coset-factorization]] (2): $\rho(u)V_J=V_J$ for $u\in W_J$, $\Phi_J=\Phi\cap V_J$, and $\Phi_J=\Phi_J^+\sqcup\Phi_J^-$ with $\Phi_J^\pm=\Phi_J\cap\Phi^\pm$.

[F10] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2): $(W_J,J)$ is a Coxeter system whose intrinsic length function agrees with $\ell$ on $W_J$.

[F11] [[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(i)-(iv): if $W$ is finite, there is a unique $w_0\in W$ with $N(w_0^{-1})=\Phi_+$; $\ell(w_0)=|N(w_0)|=|\Phi_+|=|T|$, $\rho(w_0)\Phi_+=\Phi_-$, $\ell(w_0w)=\ell(w_0)-\ell(w)$ for every $w$, and $w_0^2=1$.

[F12] [[def-cg-real-coxeter-form-and-reflection]] (2): $B(e_s,e_s)=1$ for all $s\in S$.

[F13] [[def-cg-real-coxeter-form-and-reflection]] (3): for $B(a,a)\ne0$, $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$.

[F14] [[def-hh-coxeter-matrix-word-group-and-length]] (Universal property): any assignment of the generators of a Coxeter presentation to elements of a group satisfying the Coxeter relators extends uniquely to a group homomorphism.

[F15] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3): $\ell(y)=\ell(y^{-1})$ for every $y\in W$.

[A1] Consequences of [F1] and [F2] used throughout: $\rho(v)$ is a linear bijection with $\rho(v)^{-1}=\rho(v^{-1})$, and $V_+$ is a cone, so a nonnegative combination of elements of $-V_+$ lies in $-V_+$, because every coordinate of such a combination is nonpositive; a nonzero element of $\Phi_+$ stays nonzero under the linear bijection $\rho(v)$.

## Proof

1.1 Assume $D_L(x)=S$. Then $\rho(x^{-1})\Phi_+=\Phi_-$: for every $s\in S$ the hypothesis and [F4] give $\rho(x^{-1})e_s\in\Phi_-$. Every $\alpha\in\Phi_+$ has the form $\alpha=\sum_s\lambda_se_s$ with all $\lambda_s\ge0$ by [F3], so by linearity of $\rho(x^{-1})$ the image $\rho(x^{-1})\alpha=\sum_s\lambda_s\rho(x^{-1})e_s$ is a nonnegative combination of elements of $\Phi_-\subseteq-V_+$, hence lies in $-V_+$, and it is nonzero because $\rho(x^{-1})$ is injective and $\alpha\ne0$; thus $\rho(x^{-1})\alpha\in\Phi\cap(-V_+\setminus\{0\})=\Phi_-$, giving $\rho(x^{-1})\Phi_+\subseteq\Phi_-$. Replacing $\alpha$ by $-\alpha$ shows $\rho(x^{-1})\Phi_-\subseteq\Phi_+$, using $\Phi_-=-\Phi_+$ and linearity; since $\rho(x^{-1})$ permutes $\Phi$ by [F2], these two inclusions force $\rho(x^{-1})\Phi_+=\Phi_-$. [F1, F2, F3, F4, A1, given, algebra]

2.1 Under the hypothesis of step 1.1, $N(x^{-1})=\Phi_+$: by definition $N(x^{-1})=\{\alpha\in\Phi_+:\rho(x^{-1})\alpha\in\Phi_-\}$, and step 1.1 maps all of $\Phi_+$ into $\Phi_-$. [F5, step 1.1, given, algebra]

3.1 Under the hypothesis of step 1.1, $\Phi$ is finite and $|\Phi_+|=\ell(x)=|T|$, and $W$ is finite. By [F15], $\ell(x^{-1})=\ell(x)$, and [F6] gives $|N(x^{-1})|=\ell(x^{-1})$, so step 2.1 gives $|\Phi_+|=\ell(x)$; as $\Phi=\Phi_+\sqcup\Phi_-$ with $\Phi_-=-\Phi_+$, the root system $\Phi$ is finite, the map $\Phi_+\to T$ is a bijection, and $\rho$ embeds $W$ into the finite symmetric group $\mathrm{Sym}(\Phi)$, so $W$ is finite. [F2, F3, F6, F7, F15, step 1.1, step 2.1, given, algebra]

4.1 Under the hypothesis of step 1.1, $x$ is the longest element $w_0$ of $W$, and $x^{-1}=x$ and $\ell(w_0w)=\ell(w_0)-\ell(w)$ for all $w$. Since $W$ is finite by step 3.1, [F11] gives a unique $w_0$ with $N(w_0^{-1})=\Phi_+$; step 2.1 says $N(x^{-1})=\Phi_+$, so $x=w_0$; the remaining properties are the listed clauses of [F11] (1). [F11, step 2.1, step 3.1, given, algebra]

5.1 Now let $J\subseteq S$ and let $w\in W_J$ satisfy $\ell(sw)<\ell(w)$ for every $s\in J$; then $W_J$ is finite, $N_J(w^{-1})=\Phi_J^+$ and $w=w_0(J)$. For each $s\in J$, [F4] turns the hypothesis into $\rho(w^{-1})e_s\in\Phi_-$; since $\rho(w^{-1})$ preserves $V_J$ by [F9] and $e_s\in V_J$, this image lies in $\Phi\cap V_J\cap\Phi_- = \Phi_J^-$, so $\rho(w^{-1})e_s\in\Phi_J^-$ for every $s\in J$. Every $\alpha\in\Phi_J^+$ is a nonnegative combination of the $e_s$ by [F3]; because $\alpha\in V_J$ and the $e_s$ form a basis by [F1], its coordinates outside $J$ are zero, so it is a nonnegative combination $\sum_{s\in J}\lambda_se_s$. Thus the computation of step 1.1, carried out inside the invariant subspace $V_J$ and using that $\rho(w^{-1})$ permutes $\Phi_J$ (it sends $\rho(u)e_s$ to $\rho(w^{-1}u)e_s$ with $w^{-1}u\in W_J$), yields $\rho(w^{-1})\Phi_J^+=\Phi_J^-$, that is $N_J(w^{-1})=\Phi_J^+$. The pair $(W_J,J)$ is a Coxeter system whose intrinsic length is the restriction of $\ell$ by [F10]. For $s\in J$ and $v\in V_J$, [F2], [F12] and [F13] give $\rho(s)v=r_{e_s}(v)=v-2B(v,e_s)e_s$; this lies in $V_J$ and is the simple reflection for the restricted Coxeter form. Since [F9] makes $V_J$ invariant under every $\rho(u)$ with $u\in W_J$, the restriction $\rho|_{W_J}$ is a homomorphism to $\mathrm{GL}(V_J)$. It agrees on generators with the canonical reflection representation of $(W_J,J)$; uniqueness from the presented-group universal property [F14] makes the two representations equal, and their root system is exactly $\Phi_J$ by the definition in the statement. Applying [F6] inside this subsystem gives $|\Phi_J^+|=|N_J(w^{-1})|=\ell_J(w^{-1})=\ell(w^{-1})=\ell(w)$, using [F10] for intrinsic length and [F15] for inversion invariance. Since $\Phi_J=\Phi_J^+\sqcup(-\Phi_J^+)$, the subsystem root set is finite. Its canonical representation is faithful by [F7] applied to the restricted matrix, so $W_J$ embeds in $\mathrm{Sym}(\Phi_J)$ and is finite. Since $W_J$ is finite, clause (1) of this lemma, whose proof consists of steps 1.1, 2.1, 3.1 and 4.1 and applies to any finite Coxeter system, gives on the subsystem a unique element $w_0(J)$ with $N_J(w_0(J)^{-1})=\Phi_J^+$; since $w$ has this property, $w=w_0(J)$, the longest element of $(W_J,J)$. No Choice was used anywhere in this proof. [F1, F2, F3, F4, F6, F7, F8, F9, F10, F12, F13, F14, F15, step 1.1, step 3.1, step 4.1, given, algebra] ∎
