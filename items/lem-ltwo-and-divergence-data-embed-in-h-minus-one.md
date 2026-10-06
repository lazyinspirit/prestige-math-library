---
id: "lem-ltwo-and-divergence-data-embed-in-h-minus-one"
kind: "lemma"
title: "$L^2$ forcing and divergence data embed in $H^{-1}$ with a quantitative bound"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 1
deps:
  - "def-distributional-derivative"
  - "def-regular-distribution-from-a-locally-integrable-function"
  - "thm-locally-integrable-functions-embed-in-distributions"
  - "lem-l-two-with-the-integral-pairing-is-a-hilbert-space"
  - "def-axiom-of-choice"
  - "def-bounded-linear-operator"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-operator-norm"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-weak-derivative-of-a-locally-integrable-function"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "thm-holder-inequality-for-integrals"
  - "thm-poincare-inequality-for-w-one-p-zero"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.3, Theorem 4.7: distributions $f=f_0+\\sum\\partial_if_i$ act boundedly on $H^1_0$ and the norm is given by (4.9), printed pp. 95–98"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.4, Theorem 4.9 (Poincar'e inequality for $H^1_0$) used for the constant $C_P$, printed pp. 98–99"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, the weak form $(f,v)_{L^2}$ of the generalized Poisson equation, printed p. 101"
---

## Statement

Assume the Axiom of Choice, inherited through the Poincar\'e supplier named below, together with Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, nonempty, bounded in one direction (so the Poincar\'e inequality of [[thm-poincare-inequality-for-w-one-p-zero]] holds; every bounded open set qualifies), and let $f_0,f_1,\dots,f_n\in L^2(\Omega;\mathbb K)$. Define
$$F(v):=(f_0,v)_{L^2}+\sum_{i=1}^n(f_i,D_iv)_{L^2},\qquad v\in H^1_0(\Omega),$$
with the $L^2$ inner product of [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]. Then $F$ is a well-defined conjugate-linear functional on $H^1_0(\Omega)$, independent of the $L^2$ classes chosen only through those classes, and bounded: with the Poincar\'e constant $C_P$ of $\Omega$ for $W^{1,2}_0$,
$$|F(v)|\le\Big(C_P\|f_0\|_{L^2}+\sum_{i=1}^n\|f_i\|_{L^2}\Big)\|v\|_{H^1_0},\qquad \|F\|_{H^{-1}}\le C_P\|f_0\|_{L^2}+\sum_{i=1}^n\|f_i\|_{L^2}.$$
In particular $F\in H^{-1}(\Omega)$ in the sense of [[def-h-minus-one-as-the-dual-of-h-one-zero]], and if $\Omega$ is bounded then every $f\in L^2(\Omega)$ defines an $H^{-1}$ element by $v\mapsto(f,v)_{L^2}$. The functional is the weak form of $f_0-\sum_iD_if_i$; no claim that every $H^{-1}$ element arises this way is made here.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; an open, nonempty $\Omega\subseteq\mathbb R^n$ bounded in one direction, with a unit vector $e$ and reals $a<b$ such that $a<x\cdot e<b$ for all $x\in\Omega$; classes $f_0,f_1,\dots,f_n\in L^2(\Omega;\mathbb K)$; and the functional $F(v)=(f_0,v)_{L^2}+\sum_{i=1}^n(f_i,D_iv)_{L^2}$ on $H^1_0(\Omega)$.

[F1] $H^{-1}(\Omega)$ is the space of bounded conjugate-linear functionals on $H^1_0(\Omega)$ with $\|F\|_{H^{-1}}=\sup_{\|v\|_{H^1_0}\le1}|F(v)|$; the pairing $\langle F,v\rangle=F(v)$ is linear in $F$ and conjugate-linear in $v$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]], [[def-operator-norm]]).

[F2] $H^1_0(\Omega)=W^{1,2}_0(\Omega;\mathbb K)$ carries the $W^{1,2}$ norm, for which $\|v\|_{L^2}\le\|v\|_{H^1_0}$, $\|D_iv\|_{L^2}\le\|v\|_{H^1_0}$, and $\|Dv\|_{L^2}=\bigl(\sum_{i=1}^n\|D_iv\|_{L^2}^2\bigr)^{1/2}$ satisfies $\|Dv\|_{L^2}\le\|v\|_{H^1_0}$; the weak derivatives are class operators in the sense of [[def-weak-derivative-of-a-locally-integrable-function]] ([[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] Poincar\'e inequality: with $C_P:=C(2)(b-a)$ for the constant of the cited theorem, $\|v\|_{L^2(\Omega)}\le C_P\|Dv\|_{L^2(\Omega)}$ for every $v\in H^1_0(\Omega)$. This is the claim of [[thm-poincare-inequality-for-w-one-p-zero]] at $p=2$, stated there for $W^{1,p}_0$ classes.

[F4] H\"older and the $L^2$ pairing: $|(f,v)_{L^2}|\le\|f\|_{L^2}\|v\|_{L^2}$ for classes, the pairing is conjugate-linear in its second argument, and it depends only on the two classes ([[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F5] The Axiom of Choice supplies Countable Choice for the Sobolev and $L^2$ interfaces ([[def-axiom-of-choice]], [[def-countable-choice]]).







[F6] $L^2$ functions are locally integrable by H\"older on compact sets; they define regular distributions, whose coordinate derivatives satisfy $\langle\partial_i u_f,\varphi\rangle=-\int fD_i\varphi$ ([[thm-locally-integrable-functions-embed-in-distributions]], [[def-regular-distribution-from-a-locally-integrable-function]], [[def-distributional-derivative]]).

## Proof

1.1 $F$ is well defined and conjugate-linear. Each summand $v\mapsto(f_i,D_iv)_{L^2}$ is a composition of the class map $v\mapsto D_iv$, which is linear on Sobolev classes, with the $L^2$ pairing, which is conjugate-linear in its second argument; hence each summand is conjugate-linear and depends only on the class of $v$ and the class of $f_i$. A finite sum of conjugate-linear functionals is conjugate-linear, so $F$ is a well-defined conjugate-linear functional on $H^1_0(\Omega)$. [F2, F4]

2.1 Bound. For every $v\in H^1_0(\Omega)$, H\"older gives $|(f_0,v)_{L^2}|\le\|f_0\|_{L^2}\|v\|_{L^2}\le C_P\|f_0\|_{L^2}\|Dv\|_{L^2}$ and $|(f_i,D_iv)_{L^2}|\le\|f_i\|_{L^2}\|D_iv\|_{L^2}$ for each $i$; summing and using $\|Dv\|_{L^2}\le\|v\|_{H^1_0}$ and $\|D_iv\|_{L^2}\le\|v\|_{H^1_0}$ gives $$|F(v)|\le\Bigl(C_P\|f_0\|_{L^2}+\sum_{i=1}^n\|f_i\|_{L^2}\Bigr)\|v\|_{H^1_0}.$$ Consequently $F$ is bounded with $\|F\|_{H^{-1}}\le C_P\|f_0\|_{L^2}+\sum_i\|f_i\|_{L^2}$, so $F\in H^{-1}(\Omega)$. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 The pure $L^2$ case: if $\Omega$ is bounded, then it is bounded in one direction --- for any unit vector $e$ and any $r$ with $\Omega\subseteq B(0,r)$ one has $-r<x\cdot e<r$ --- so the hypothesis holds and $F(v):=(f_0,v)_{L^2}$ with $f_1=\dots=f_n=0$ is an element of $H^{-1}(\Omega)$ with $\|F\|_{H^{-1}}\le C_P\|f_0\|_{L^2}$. [F3, step 2.1]

4.1 Identification with the divergence-form datum: let $u_{f_i}$ be the regular distribution associated to $f_i\in L^2\subset L^1_{\mathrm{loc}}$ and put $T:=u_{f_0}-\sum_i\partial_i u_{f_i}$. For $v\in C_c^\infty(\Omega)$, the definition of the distributional derivative gives $\langle T,\overline v\rangle=\int f_0\overline v+\sum_i\int f_i\overline{D_iv}=F(v)$. Thus $F$ extends this conjugated test pairing boundedly to $H^1_0(\Omega)$; no function-valued derivative of any $f_i$ is assumed. The representation by data $(f_0,\dots,f_n)$ is not asserted to be unique and no surjectivity onto $H^{-1}(\Omega)$ is claimed. [F2, F4, F6, step 2.1] ∎ 

## Remarks

The converse representation is proved in [[thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form]].
