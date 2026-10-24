---
id: lem-residue-exact-differential-zero
kind: lemma
title: "Residues of exact differentials vanish"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-derivations-represented-by-differentials
  - def-axiom-of-choice
  - def-field-norm-and-trace
  - def-formal-laurent-series-and-residue
  - def-residue-rational-differential-curve-point
  - lem-residue-independent-uniformizer
  - lem-uniformizer-differential-is-a-basis
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
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the completion and
coefficient-field/residue suppliers. Let $k$ be a field, $C$ a smooth integral
curve over $k$, and $p$ a closed point whose residue field $\kappa(p)$ is finite
separable over $k$. For every
$f\in k(C)$, the exact differential $\mathrm df$ has residue zero at $p$:
$$\operatorname{res}_p(\mathrm df)=0.$$
Consequently the residue functional kills the image of
$\mathrm d\colon k(C)\to\Omega^1_{k(C)/k}$, and adding an exact differential
does not change the residue at any point where the coefficient-trace residue
is defined. This holds in every characteristic.

## Facts & Assumptions

**Given:** a field $k$, a smooth integral curve $C$ over $k$, a closed point
$p$ with $\kappa(p)$ finite separable over $k$, the local coefficient-trace
residue of [[def-residue-rational-differential-curve-point]] at $p$, and a
rational function $f\in K=k(C)$.

[F1] The local construction of
[[def-residue-rational-differential-curve-point]] applies at $p$ and uses
only the local ring $\mathcal O_{C,p}$: choosing a uniformizer $t$ of the
discrete valuation ring $\mathcal O_{C,p}$ gives a $k$-compatible coefficient
field $\kappa(p)\hookrightarrow\widehat{\mathcal O}_{C,p}$ and an isomorphism
$\widehat{\mathcal O}_{C,p}\cong\kappa(p)[\![t]\!]$, so that
$K=\operatorname{Frac}(\mathcal O_{C,p})$ embeds in $\kappa(p)((t))$ and every
rational differential $\omega$ is written $\omega=a\,\mathrm dt$ with
$a\in K$ whose Laurent expansion in $\kappa(p)((t))$ has a residue of its
$-1$-coefficient; the residue is
$$\operatorname{res}_p(\omega)=\operatorname{Tr}_{\kappa(p)/k}([t^{-1}]a)\in k,$$
it is $k$-linear in $\omega$, and it depends only on the local data at $p$
([[def-residue-rational-differential-curve-point]],
[[thm-local-ring-smooth-curve-dvr]]).

[F2] The differential $\mathrm dt$ is a $K$-basis of
$\Omega^1_{K/k}=\Omega^1_{k(C)/k}$, so every rational differential has a
unique expression $\omega=a\,\mathrm dt$ with $a\in K$
([[lem-uniformizer-differential-is-a-basis]]).

[F3] Formal calculus in $\kappa(p)((t))$
([[def-formal-laurent-series-and-residue]]): the formal derivative $D$ is
defined coefficientwise by $D(t^n)=nt^{n-1}$, so
$D\bigl(\sum_na_nt^n\bigr)=\sum_nna_nt^{n-1}$ with no division by integers;
the formal residue is $\operatorname{res}_t(g)=[t^{-1}]g$. The coefficient
field $\kappa(p)$ is embedded compatibly with $k$ by
[[def-residue-rational-differential-curve-point]], so $D$ kills the image of
$k$ and the composition $D\circ j_t$ is a $k$-derivation of $K$ into
$\kappa(p)((t))$, where $j_t:K\hookrightarrow\kappa(p)((t))$ is the
completion embedding. This is the derivation passed through the universal
property in [F6]; no differential-module identification for the completed
field is asserted.

[F4] The residue $\operatorname{res}_p(\omega)$ of [F1] does not depend on
the choice of uniformizer $t$
([[lem-residue-independent-uniformizer]]).

[F5] For the finite extension $\kappa(p)/k$ the field trace
$\operatorname{Tr}_{\kappa(p)/k}\colon\kappa(p)\to k$ is $k$-linear and
$\operatorname{Tr}_{\kappa(p)/k}(0)=0$ ([[def-field-norm-and-trace]]).

[F6] The universal property of algebraic Kähler differentials
([[cor-derivations-represented-by-differentials]]): for a ring map $k\to K$
and a $K$-module $M$, every $k$-derivation $\delta:K\to M$ is uniquely of
the form $\Delta\circ\mathrm d$ for a $K$-linear map
$\Delta:\Omega^1_{K/k}\to M$.

[F7] The Axiom of Choice is [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct; expand $f$ as a formal Laurent series in a
uniformizer and compute the $-1$-coefficient of its formal derivative.

1.1 (Set-up.) Let $t$ be a uniformizer of $\mathcal O_{C,p}$, let $j_t:K\hookrightarrow\kappa(p)((t))$ be the completion embedding, and write $j_t(f)=\sum_{n\ge N}a_nt^n$. By [F2] the exact differential is $\mathrm df=a\,\mathrm dt$ for a unique $a\in K$, and by [F1] its residue is $\operatorname{res}_p(\mathrm df)=\operatorname{Tr}_{\kappa(p)/k}([t^{-1}]j_t(a))$. [F1, F2, given]

2.1 (The derivative is formal through the universal property.) Give $M=\kappa(p)((t))$ its $K$-module structure through $j_t$. By [F3], $\delta_t:=D\circ j_t:K\to M$ is a $k$-derivation; [F6] therefore gives a unique $K$-linear map $\Delta_t:\Omega^1_{K/k}\to M$ with $\Delta_t(\mathrm dg)=D(j_t(g))$ for every $g\in K$. Since $j_t(t)=t$, one has $\Delta_t(\mathrm dt)=1$. By [F2], $\mathrm df=a\,\mathrm dt$, so $\Delta_t(\mathrm df)=j_t(a)$ and also $\Delta_t(\mathrm df)=D(j_t(f))$. Thus the Laurent expansion of the algebraic coefficient $a$ is exactly $D(j_t(f))$. This comparison uses only the universal property for $\Omega^1_{K/k}$ and makes no claim that $\Omega^1_{\kappa(p)((t))/k}=\kappa(p)((t))\,\mathrm dt$. [F2, F3, F6, step 1.1]

3.1 (The critical coefficient.) The coefficient of $t^{-1}$ in $D(j_t(f))=\sum_n n a_n t^{n-1}$ receives a contribution only from $n=0$, and that contribution is $0\cdot a_0=0$; every other index contributes to a different power. By step 2.1, $[t^{-1}]j_t(a)=0$. [F3, step 2.1, algebra]

4.1 (Residue of the exact differential.) Applying the trace of [F1] to the vanishing coefficient just found and using [F5], $\operatorname{res}_p(\mathrm df)=\operatorname{Tr}_{\kappa(p)/k}(0)=0$; this is the asserted vanishing at $p$. [F1, F5, step 1.1, step 3.1]

5.1 (Independence of the uniformizer, all characteristics.) The vanishing just proved was computed in the uniformizer $t$, and by [F4] the residue does not depend on that choice, so $\operatorname{res}_p(\mathrm df)=0$ for every uniformizer of $\mathcal O_{C,p}$; the computation of the formal derivative used the integer coefficients $n$ literally, with no division by an integer at any point, so it is valid in every characteristic, including characteristics dividing an exponent occurring in $f$. [F3, F4, step 4.1]

6.1 (Consequences.) Since $f\in K$ was arbitrary, the residue functional kills the image of $\mathrm d\colon K\to\Omega^1_{K/k}$; if a rational differential is changed by an exact differential, $\omega'=\omega+\mathrm df$, then $\operatorname{res}_p(\omega')=\operatorname{res}_p(\omega)+\operatorname{res}_p(\mathrm df)=\operatorname{res}_p(\omega)$ by the $k$-linearity of $\operatorname{res}_p$ in [F1]. This includes $f=0$ and $f\in k$, for which $\mathrm df=0$. The Axiom of Choice [F7] is inherited from the completion and power-series suppliers used in [F1] and [F3]. [F1, F7, step 4.1, step 5.1] ∎
