---
id: lem-facet-tensor-weight-exclusion
kind: lemma
title: "The facet tensor-weight exclusion lemma"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-singular-integral-category-o-block-and-stabilizer,
       lem-single-wall-tensor-weight-exclusion,
       def-dot-action-facets-and-single-wall-translation-data,
       def-integral-dominant-and-strictly-dominant-weights,
       lem-dominant-norm-distance-comparison,
       lem-weight-norm-bound-for-finite-dimensional-simple-modules,
       lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags,
       cor-central-characters-are-dot-weyl-orbits,
       lem-finite-weyl-closed-chambers-and-stabilizers,
       thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights,
       lem-finite-semisimple-pbw-and-highest-weight-construction,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9: standard filtrations, BGG reciprocity and translation functors (complete 7-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf"
      locator: "Theorem 3.12 and its sketch (printed p. 6): the tensor (T_lambda^mu)(M_{w.lambda}) has a standard filtration whose only factor with central character chi_mu is M_{w.mu}, by the combinatorial exclusion; complete passage read."
    - title: "James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O, AMS Graduate Studies in Mathematics 94"
      url: null
      locator: "Section 7.5 (title-only locator): the Key Lemma on the single surviving standard factor under wall translation; the argument is reproduced from the fetched treatments."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda$ be an
integral dot-antidominant dot-regular weight and let $\mu$ be an integral
dot-antidominant weight such that the facet $F_\mu$ lies in the closure of the
chamber $F_\lambda$, i.e.
$\langle\mu+\rho,\alpha^\vee\rangle=0$ for the positive roots
$\alpha\in\Phi_J^+$ of the parabolic subsystem $\Phi_J$ of
$J=J(\mu)$ defined in
[[def-singular-integral-category-o-block-and-stabilizer]], and
$\langle\mu+\rho,\alpha^\vee\rangle$ has the same sign as
$\langle\lambda+\rho,\alpha^\vee\rangle$ for every remaining positive root
([[def-dot-action-facets-and-single-wall-translation-data]]). Let $\nu$ be the
unique dominant weight of the linear orbit $W(\mu-\lambda)$
([[lem-finite-weyl-closed-chambers-and-stabilizers]]) and let
$E=L(\nu)$
([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]]).
Then for all $w,w'\in W$ and every weight $\gamma$ of $E$: if
$w'\cdot\mu=w\cdot\lambda+\gamma$, then $w'\cdot\mu=w\cdot\mu$ and
$\gamma=w(\mu-\lambda)$.

Consequently, for every $w$ the tensor $E\otimes\Delta(w\cdot\lambda)$ has
exactly one Verma factor whose central character is that of $\mu$, namely
$\Delta(w\cdot\mu)$, and its multiplicity in the Verma flag computed by
[[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]] is
one.

## Facts & Assumptions

**Given:** The Axiom of Choice; integral dot-antidominant weights $\lambda$
and $\mu$ with $\lambda$ dot-regular and $F_\mu$ in the closure of $F_\lambda$
in the sense of the statement, $J=J(\mu)$, the dot stabilizer $W_J$, the
unique dominant weight $\nu$ of $W(\mu-\lambda)$, and $E=L(\nu)$; write
$\lambda_\bullet=\lambda+\rho$ and $\mu_\bullet=\mu+\rho$.

[F1] The set $J=J(\mu)=\{i:\langle\mu+\rho,\alpha_i^\vee\rangle=0\}$ is the
set of simple indices vanishing on $\mu_\bullet$; the dot stabilizer
$\{v\in W:v\mathbin\cdot\mu=\mu\}$ equals $W_J=\langle s_i:i\in J\rangle$, the
positive roots vanishing on $\mu_\bullet$ are exactly $\Phi_J^+$, and
$\operatorname{Stab}_W(\mu_\bullet)=\operatorname{Stab}_W(-\mu_\bullet)=W_J$
([[def-singular-integral-category-o-block-and-stabilizer]],
[[lem-finite-weyl-closed-chambers-and-stabilizers]],
[[def-dot-action-facets-and-single-wall-translation-data]]). Also
$\lambda_\bullet$ is regular, $-\lambda_\bullet$ is dominant regular and
$-\mu_\bullet$ is dominant.

[F2] Every weight $\gamma$ of $L(\nu)$ satisfies
$\lvert\gamma\rvert\le\lvert\nu\rvert$, with equality exactly when
$\gamma\in W\nu$, and every weight of $W\nu$ occurs in $L(\nu)$ with
multiplicity one
([[lem-weight-norm-bound-for-finite-dimensional-simple-modules]]); moreover
$\lvert\nu\rvert=\lvert\mu_\bullet-\lambda_\bullet\rvert$ because
$\nu\in W(\mu-\lambda)=W(\mu_\bullet-\lambda_\bullet)$ and the form is
$W$-invariant ([[lem-finite-weyl-closed-chambers-and-stabilizers]]).

[F3] For dominant $\xi,\eta$ in the real span of the roots one has
$\lvert\xi-w\eta\rvert\ge\lvert\xi-\eta\rvert$ for every $w\in W$, with
equality exactly when $w\eta\in\operatorname{Stab}_W(\xi)\eta$
([[lem-dominant-norm-distance-comparison]]).

[F4] The tensor $E\otimes\Delta(\lambda')$ has a finite Verma flag with
multiplicities $\dim E_{\eta-\lambda'}$
([[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]],
[[lem-finite-semisimple-pbw-and-highest-weight-construction]]).

[F5] Two weights have the same central character exactly when they lie in one
dot-Weyl orbit ([[cor-central-characters-are-dot-weyl-orbits]]).

## Proof

**Proof technique:** transport the tensor-weight identity into a norm
comparison, squeeze it to equality, and read off the surviving factor; this is
the single-wall proof of [[lem-single-wall-tensor-weight-exclusion]] with the
stabilizer $\{1,s\}$ replaced by the full dot stabilizer $W_J$.

1.1 Let $w,w'\in W$ and let $\gamma$ be a weight of $E$ with $w'\mathbin\cdot\mu=w\mathbin\cdot\lambda+\gamma$. Since $w'\mathbin\cdot\mu-[w\mathbin\cdot\lambda]=w'(\mu_\bullet)-w(\lambda_\bullet)$, setting $x=(w')^{-1}w$ gives $x\lambda_\bullet=\mu_\bullet-(w')^{-1}\gamma$, that is, $(w')^{-1}\gamma=\mu_\bullet-x\lambda_\bullet$. [given, algebra]

2.1 By [F2] one has $\lvert\gamma\rvert\le\lvert\nu\rvert=\lvert\mu_\bullet-\lambda_\bullet\rvert$, and $W$-invariance of the form gives $\lvert(w')^{-1}\gamma\rvert=\lvert\gamma\rvert$, so the identity of step 1.1 yields $\lvert\mu_\bullet-x\lambda_\bullet\rvert\le\lvert\mu_\bullet-\lambda_\bullet\rvert$. On the other hand [F3] applied to the dominant vectors $\xi=-\mu_\bullet$ and $\eta=-\lambda_\bullet$ (dominant and regular by [F1]) gives $\lvert\mu_\bullet-\lambda_\bullet\rvert=\lvert\xi-\eta\rvert\le\lvert\xi-x\eta\rvert=\lvert\mu_\bullet-x\lambda_\bullet\rvert$. [F1, F2, F3, step 1.1]

3.1 The two inequalities of step 2.1 are equalities, so the equality case of [F3] applies: $x\eta\in\operatorname{Stab}_W(\xi)\eta$, and $\operatorname{Stab}_W(\xi)=W_J$ by [F1], that is, $x(-\lambda_\bullet)\in W_J(-\lambda_\bullet)$. Choose $u\in W_J$ with $x\lambda_\bullet=u\lambda_\bullet$; then $u^{-1}x$ fixes the regular vector $\lambda_\bullet$, so $u^{-1}x=1$ and $x=u\in W_J$. Since $W_J$ is the dot stabilizer of $\mu$ by [F1], $x\mathbin\cdot\mu=\mu$, and therefore $w'\mathbin\cdot\mu=w\mathbin\cdot(x\mathbin\cdot\mu)=w\mathbin\cdot\mu$. Moreover $\gamma=w'\mathbin\cdot\mu-w\mathbin\cdot\lambda=w\mathbin\cdot\mu-w\mathbin\cdot\lambda=w(\mu-\lambda)$. Finally $\lvert\gamma\rvert=\lvert\mu_\bullet-\lambda_\bullet\rvert=\lvert\nu\rvert$ and $\gamma=w(\mu-\lambda)\in W(\mu-\lambda)=W\nu$, so by [F2] the weight $\gamma$ occurs in $E$ with multiplicity one. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 For the reformulation, fix $w$ and let $\eta$ be a weight in the dot orbit of $\mu$, so $\eta=w'\mathbin\cdot\mu$ for some $w'$ and $\eta$ has the central character of $\mu$ by [F5]. If $\dim E_{\eta-w\mathbin\cdot\lambda}\ne0$, then $\gamma:=\eta-w\mathbin\cdot\lambda$ is a weight of $E$ with $w'\mathbin\cdot\mu=w\mathbin\cdot\lambda+\gamma$, so step 3.1 gives $\eta=w'\mathbin\cdot\mu=w\mathbin\cdot\mu$ and $\gamma=w(\mu-\lambda)$; conversely $\dim E_{w(\mu-\lambda)}=1$ by step 3.1. Hence among labels with the central character of $\mu$ only $\Delta(w\mathbin\cdot\mu)$ occurs, with multiplicity one, in the Verma flag of $E\otimes\Delta(w\mathbin\cdot\lambda)$ supplied by [F4]. [F4, F5, step 3.1, algebra]

5.1 Steps 3.1 and 4.1 prove both formulations: the tensor-weight identity forces $w'\mathbin\cdot\mu=w\mathbin\cdot\mu$ and $\gamma=w(\mu-\lambda)$ with multiplicity one, and the only Verma factor of $E\otimes\Delta(w\mathbin\cdot\lambda)$ with central character $\chi_\mu$ is $\Delta(w\mathbin\cdot\mu)$, once. [step 3.1, step 4.1] ∎

## Remarks

The Choice assumption is inherited from the published translation and norm
items; no new choice principle is used. The lemma is the facet form of the
single-wall exclusion: for a parabolic stabilizer $W_J$ the equality case of
the dominant norm comparison selects the full stabilizer orbit
$W_J(-\lambda_\bullet)$ instead of the two-element wall orbit, and
regularity of $\lambda_\bullet$ then pins $x$ inside $W_J$.
