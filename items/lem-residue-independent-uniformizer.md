---
id: lem-residue-independent-uniformizer
kind: lemma
title: "The residue is independent of the uniformizer"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-derivations-represented-by-differentials
  - def-axiom-of-choice
  - def-field-norm-and-trace
  - def-formal-laurent-series-and-residue
  - def-residue-rational-differential-curve-point
  - lem-formal-residue-identities
  - lem-uniformizer-differential-is-a-basis
  - thm-formal-power-laurent-dictionary
  - thm-local-ring-smooth-curve-dvr
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "Joseph Lipman, Residues, duality, and the fundamental class of a scheme-map (2011)"
      url: "https://www.math.purdue.edu/~lipman/papers/Algecom.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the completion and
power-series suppliers. Let $k$ be a field, let $C$ be a smooth integral curve
over $k$, and let $p$ be a closed point whose residue field $\kappa(p)$ is
finite separable over $k$. Use the $k$-compatible coefficient field
$\kappa(p)\hookrightarrow\widehat{\mathcal O}_{C,p}$ of
[[def-residue-rational-differential-curve-point]], and let $t$ and $t'$ be
uniformizers of $\mathcal O_{C,p}$. Write $t'=\theta(t)=t\,u(t)$ with
$u(t)$ a unit of $\kappa(p)[\![t]\!]$. For a rational differential $\omega$ write
$$\omega=a\,\mathrm dt=a'\,\mathrm dt',\qquad a,a'\in k(C),$$
using [[lem-uniformizer-differential-is-a-basis]], and expand $a$ in
$\kappa(p)((t))$ and $a'$ in $\kappa(p)((t'))$. Then
$$[t^{-1}]\,a=[t'^{-1}]\,a',$$
so the coefficient traces agree,
$\operatorname{Tr}_{\kappa(p)/k}([t^{-1}]a)=\operatorname{Tr}_{\kappa(p)/k}([t'^{-1}]a')$,
and the residue $\operatorname{res}_p(\omega)$ of
[[def-residue-rational-differential-curve-point]] does not depend on the
choice of uniformizer. The formal change-of-parameter identity holds in every
characteristic.

## Facts & Assumptions

**Given:** a field $k$, a smooth integral curve $C$ over $k$, a closed point
$p$ with $\kappa(p)$ finite separable over $k$, uniformizers $t,t'$ of
$\mathcal O_{C,p}$, the coefficient field $\kappa=\kappa(p)$ of
[[def-residue-rational-differential-curve-point]], and a rational
differential $\omega\in\Omega^1_{k(C)/k}$.

[F1] The local construction of [[def-residue-rational-differential-curve-point]]
applies at $p$: the maximal-adic completion $\widehat{\mathcal O}_{C,p}$
receives a unique $k$-compatible coefficient field $\kappa=\kappa(p)$, and
for every uniformizer $s$ there is an isomorphism
$\widehat{\mathcal O}_{C,p}\cong\kappa[\![s]\!]$ compatible with the coefficient
field, so the function field $K=k(C)=\operatorname{Frac}(\mathcal O_{C,p})$
embeds in $\kappa((s))$; the construction uses only the local ring at $p$
([[def-residue-rational-differential-curve-point]], [[thm-local-ring-smooth-curve-dvr]]).

[F2] Every uniformizer of the discrete valuation ring $\mathcal O_{C,p}$
generates its maximal ideal; hence $t'=\theta(t)$ for some
$\theta\in\kappa[\![t]\!]$ with $\theta=t\,u(t)$, $u\in\kappa[\![t]\!]^{\times}$, and
$\theta$ has nonzero linear coefficient $u(0)$; conversely every such series
defines a uniformizer of the completed DVR $\kappa[\![t]\!]$. The given $t'$
is an actual uniformizer of $\mathcal O_{C,p}$, while the converse here is only
about the completed DVR ([[thm-local-ring-smooth-curve-dvr]],
[[thm-formal-power-laurent-dictionary]]).

[F3] Formal calculus in $\kappa((t))$
([[def-formal-laurent-series-and-residue]]): the formal derivative $D$ acts
coefficientwise by $D(t^n)=nt^{n-1}$ and the formal residue is
$\operatorname{res}_t(f)=[t^{-1}]f$. For all $f,g\in\kappa((t))$ one has
$\operatorname{res}_t(Df)=0$, and if the field contains $\mathbb Q$ and
$g\in t\kappa[\![t]\!]$ has nonzero linear coefficient then
$\operatorname{res}_t\bigl((F\circ g)Dg\bigr)=\operatorname{res}_t(F)$ for
every Laurent series $F$ for which the substitution is defined
([[lem-formal-residue-identities]]). Every nonzero $h\in\kappa((t))$ factors
as $t^{v}h_0$ with $h_0$ a unit of $\kappa[\![t]\!]$
([[thm-formal-power-laurent-dictionary]]).

[F4] The differential $\mathrm dt$ is a $K$-basis of $\Omega^1_{K/k}$, and
likewise $\mathrm dt'$ is a $K$-basis, so $\omega$ has unique expressions
$\omega=a\,\mathrm dt=a'\,\mathrm dt'$ with $a,a'\in K$
([[lem-uniformizer-differential-is-a-basis]]).

[F5] Let $j_t:K\hookrightarrow\kappa((t))$ be the completion embedding and
give $\kappa((t))$ its $K$-module structure through $j_t$. Since the
coefficient field is $k$-compatible, the formal derivative $D_t$ kills $k$,
so $D_t\circ j_t$ is a $k$-derivation of $K$ into this $K$-module. By the
universal property of algebraic Kähler differentials
([[cor-derivations-represented-by-differentials]]) it is represented by a
unique $K$-linear map $\Delta_t:\Omega^1_{K/k}\to\kappa((t))$ satisfying
$\Delta_t(\mathrm dg)=D_t(j_t(g))$. This does not assert a description of
$\Omega^1_{\kappa((t))/k}$.

[F6] For the finite extension $\kappa/k$ the field trace
$\operatorname{Tr}_{\kappa/k}:\kappa\to k$ is $k$-linear
([[def-field-norm-and-trace]]).

[F7] The Axiom of Choice is [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct; type the change of parameter through algebraic differentials, then prove the Laurent coefficient identity by a universal integral-polynomial argument.

1.1 (Set-up.) With $K=k(C)$ and $\kappa=\kappa(p)$, [F1] identifies the completion with $\kappa[\![t]\!]$ and embeds $K$ in $\kappa((t))$; [F2] gives $t'=\theta(t)=t\,u(t)$ with $u$ a unit and $\theta$ of order one. Write $\omega=a\,\mathrm dt=a'\,\mathrm dt'$ by [F4], and let $a'=\psi(t')=\sum_{n\ge N}c_nt'^n$ be its $t'$-expansion, so $[t'^{-1}]a'=c_{-1}$. [F1, F2, F4, given]

2.1 (Change of variables for the coefficient.) Since $j_t(t')=\theta(t)$, [F5] gives $\Delta_t(\mathrm dt')=D_t(j_t(t'))=\theta'(t)$, while $\Delta_t(\mathrm dt)=1$; applying the same $K$-linear map to $a\,\mathrm dt=a'\,\mathrm dt'$ yields $j_t(a)=j_t(a')\theta'(t)$. The $t$-expansion of $a'$ is $\psi(\theta(t))$, so $j_t(a)=\psi(\theta(t))\theta'(t)$; this derives the comparison through the universal property without differentiating a formal-series identity in $\Omega^1_{K/k}$. [F3, F5, step 1.1, algebra]

2.2 (Monomials with exponent at least $-1$.) For $n\ge0$, $\theta^n\theta'$ has no negative powers; for $n=-1$, $\theta'/\theta=(tu)'/(tu)=t^{-1}+u'/u$ and $u'/u\in\kappa[\![t]\!]$, so $[t^{-1}](\theta^n\theta')$ is $0$ for $n\ge0$ and $1$ for $n=-1$, in every characteristic. [F2, F3, step 1.1, algebra]

3.1 (Negative exponents in every characteristic.) For $n\le-2$, write $\theta^n\theta'=t^n u^n(u+t u')$; only the coefficient of $t^{-n-1}$ in the latter power series contributes, so $d_n:=[t^{-1}](\theta^n\theta')$ is a Laurent polynomial over $\mathbb Z$ in finitely many coefficients $u_0,u_0^{-1},u_1,\dots$, where $u_0\ne0$. Let $U_0,U_1,\dots$ be algebraically independent over $\mathbb Q$, put $R=\mathbb Q(U_0,U_1,\dots)$, and use $u(t)=\sum_{j\ge0}U_jt^j$ in $R[\![t]\!]$; [F3] applies over $R$ to $F(U)=U^n$ and $g=\theta=t u$, giving $d_n=\operatorname{res}_t(\theta^n\theta')=\operatorname{res}_t(t^n)=0$. The Laurent polynomial therefore vanishes in $R$ and, since $\mathbb Z[U_0,U_0^{-1},U_1,\dots]\hookrightarrow R$ is injective, is identically zero over $\mathbb Z$; specializing the $U_j$ to coefficients of any unit in $\kappa[\![t]\!]$ proves $[t^{-1}](\theta^n\theta')=0$ over every field, including positive characteristic. [F2, F3, step 2.2, algebra]

4.1 (Laurent series.) The negative-power tail $\sum_{N\le n<0}c_n\theta^n\theta'$ is finite, and steps 2.2–3.1 show that its $t^{-1}$ coefficient is exactly $c_{-1}$; each term with $n\ge0$ has no negative powers, so $[t^{-1}](\psi(\theta(t))\theta'(t))=c_{-1}=[t'^{-1}]a'$. By step 2.1 this is $[t^{-1}]a=[t'^{-1}]a'$. [F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 (Traces and conclusion.) Applying the $k$-linear trace $\operatorname{Tr}_{\kappa/k}$ of [F6] to step 4.1 gives equality of the coefficient-trace residues defined by [[def-residue-rational-differential-curve-point]] for $t$ and $t'$; since $t'$ was arbitrary, the residue is uniformizer-independent at every closed point with finite separable residue field, and the proof divided by no integers, so the identity holds in every characteristic. The Axiom of Choice [F7] is inherited from the completion and power-series suppliers. [F6, F7, step 4.1] ∎
