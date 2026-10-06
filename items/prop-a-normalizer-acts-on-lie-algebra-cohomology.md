---
id: prop-a-normalizer-acts-on-lie-algebra-cohomology
kind: proposition
title: "The normalizer acts on Lie algebra cohomology"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-lie-algebra-over-a-field, def-lie-subalgebra-ideal-and-center, def-quotient-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-representation-of-a-lie-algebra, def-chevalley-eilenberg-cochains, def-chevalley-eilenberg-differential, thm-the-chevalley-eilenberg-differential-squares-to-zero, def-lie-algebra-cohomology, thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra, thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra, def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.2 printed pp.64–70"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.2.3, printed p.69, Lie derivative for an ideal and Proposition 3.2.7 on the quotient action; Cartan identities in §3.2.1, pp.65–68"
    - title: "Peter Woit, Lie Algebra Cohomology and the Borel–Weil–Bott Theorem (Math G4344, Spring 2012), printed pp.1–7"
      url: "https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf"
      locator: "printed pp.1–2, cochains and derived invariants as background; the normalizer and Cartan identities are proved locally, not in these notes"
---

## Statement

Let $\mathfrak a$ be an ideal of a Lie algebra $\mathfrak p$ and let $V$ be a
$\mathfrak p$-module, restricted to $\mathfrak a$. This covers
$\mathfrak a=\mathfrak n^+\triangleleft\mathfrak b=\mathfrak h\oplus\mathfrak n^+$
and, with $\mathfrak p=N_{\mathfrak g}(\mathfrak a)$ the normalizer of
[[def-normalizer-of-a-lie-subalgebra]], every subalgebra whose normalizer is to
act. For $x\in\mathfrak p$ define the Lie derivative on cochains by
$$(\theta_x\omega)(x_1,\dots,x_q)=x\cdot\omega(x_1,\dots,x_q)-\sum_{j=1}^q\omega(x_1,\dots,[x,x_j],\dots,x_q),\qquad \omega\in C^q(\mathfrak a,V),$$
and for $x\in\mathfrak a$ let $i_x:C^q(\mathfrak a,V)\to C^{q-1}(\mathfrak a,V)$
be the contraction $(i_x\omega)(x_1,\dots,x_{q-1})=\omega(x,x_1,\dots,x_{q-1})$.
Then $\theta$ is a representation of $\mathfrak p$ on $C^\bullet(\mathfrak a,V)$,
each $\theta_x$ commutes with the differential $d$ of
[[def-chevalley-eilenberg-differential]], and for $x\in\mathfrak a$ one has
$\theta_x=di_x+i_xd$ (Cartan's formula), so $\theta_x$ acts as zero on
cohomology. Consequently $\theta$ descends to a representation of the quotient
Lie algebra $\mathfrak p/\mathfrak a$ on $H^\bullet(\mathfrak a,V)$, making it a
$U(\mathfrak p/\mathfrak a)$-module; in particular $H^\bullet(\mathfrak n^+,V)$
is an $\mathfrak h$-module for every $\mathfrak b$-module or $\mathfrak g$-module
$V$.

## Facts & Assumptions

**Given:** An ideal $\mathfrak a$ of a Lie algebra $\mathfrak p$, a $\mathfrak p$-module $V$, elements $x,y\in\mathfrak p$, and a cochain $\omega\in C^q(\mathfrak a,V)$.

[F1] The differential is $(d\omega)(x_0,\dots,x_q)=\sum_{i=0}^q(-1)^ix_i\cdot\omega(x_0,\dots,\widehat{x_i},\dots,x_q)+\sum_{0\le i<j\le q}(-1)^{i+j}\omega([x_i,x_j],x_0,\dots,\widehat{x_i},\dots,\widehat{x_j},\dots,x_q)$, with the bracket inserted as the first argument, and $d^2=0$ ([[def-chevalley-eilenberg-differential]], [[thm-the-chevalley-eilenberg-differential-squares-to-zero]]).

[F2] The module identity is $[x,y]v=x(yv)-y(xv)$ for all $v\in V$ ([[def-representation-of-a-lie-algebra]]).

[F3] The bracket satisfies the Jacobi identity $[x,[y,z]]+[y,[z,x]]+[z,[x,y]]=0$, and is alternating ([[def-lie-algebra-over-a-field]]).

[F4] Since $\mathfrak a$ is an ideal, $[x,\mathfrak a]\subseteq\mathfrak a$ for $x\in\mathfrak p$ ([[def-lie-subalgebra-ideal-and-center]]); the quotient $\mathfrak p/\mathfrak a$ is a Lie algebra and the projection is a Lie algebra homomorphism ([[def-quotient-lie-algebra]]); a Lie algebra action on a vector space is the same as a unital module structure over its universal enveloping algebra ([[thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra]]).

[F5] For the Borel subalgebra, $\mathfrak n^+\triangleleft\mathfrak b$ and $\mathfrak b/\mathfrak n^+\cong\mathfrak h$, so that every $\mathfrak b$-module restricts to an $\mathfrak h$-module ([[def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]], [[thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra]]).

[F6] The cohomology is $H^q=\ker d^q/\operatorname{im}d^{q-1}$ ([[def-lie-algebra-cohomology]]), and the cochain spaces carry the alternating multilinear maps described in [[def-chevalley-eilenberg-cochains]].

## Proof

**Proof technique:** verify the representation identity, commutation with $d$, and the Cartan homotopy formula by explicit expansion, then descend to the quotient.

1.1 For fixed $x\in\mathfrak p$ the formula of the Statement defines a $k$-linear map $\theta_x:C^q(\mathfrak a,V)\to C^q(\mathfrak a,V)$: both displayed terms are $k$-linear in $\omega$, and they are alternating in the arguments because $\omega$ is and because the substitution $x_j\mapsto[x,x_j]$ is linear in the slot; the bracket lies in $\mathfrak a$ by [F4], so the expression is a legitimate cochain. Moreover $x\mapsto\theta_x$ is $k$-linear, since both the action on $V$ and the bracket are. [F4, F6, algebra]

2.1 Write $A_x\omega=x\cdot\omega$ for action on values and $B_x\omega=\sum_j\omega(\dots,[x,x_j],\dots)$ for action on argument slots, so $\theta_x=A_x-B_x$. Value and slot operators commute. By [F2], $[A_x,A_y]=A_{[x,y]}$. In $[B_x,B_y]$, substitutions in distinct slots cancel pairwise; the same-slot difference is $\omega(\dots,[y,[x,x_j]]-[x,[y,x_j]],\dots)=-\omega(\dots,\bigl[ [x,y],x_j\bigr],\dots)$ by [F3]. Thus $[B_x,B_y]=-B_{[x,y]}$, and $[\theta_x,\theta_y]=A_{[x,y]}-B_{[x,y]}=\theta_{[x,y]}$. [F2, F3, step 1.1, algebra]

2.2 Each $\theta_x$ commutes with $d$. Evaluate $\theta_xd\omega-d\theta_x\omega$ on $y_0,\dots,y_q\in\mathfrak a$, using the zero-based formula [F1]. Write $\rho(x)$ for the action on $V$. The action terms, after cancelling substitutions in the unacted slots, are $\sum_i(-1)^i\bigl([\rho(x),\rho(y_i)]-\rho([x,y_i])\bigr)\omega(y_0,\dots,\widehat{y_i},\dots,y_q)$, which vanish by [F2]. The remaining bracket terms are $\sum_{i<j}(-1)^{i+j}\omega\bigl([x,[y_i,y_j]]-\bigl[ [x,y_i],y_j\bigr]-[y_i,[x,y_j]],y_0,\dots,\widehat{y_i},\dots,\widehat{y_j},\dots,y_q\bigr)$, which vanish by Jacobi [F3]. Thus $\theta_xd=d\theta_x$. [F1, F2, F3, step 1.1, algebra]

2.3 For $x\in\mathfrak a$ the Cartan formula $\theta_x=di_x+i_xd$ holds. Evaluate at $(x_1,\dots,x_q)$. In $i_xd$, the terms of $d\omega$ in which the leading argument $x$ acts give $x\omega(x_1,\dots,x_q)$, and the terms in which $x$ is the bracket argument give $\sum_j(-1)^j\omega([x,x_j],x_1,\dots,\widehat{x_j},\dots,x_q)$; all terms in which one of the $x_i$ acts, and all bracket terms with two entries among the $x_i$, cancel against the corresponding terms of $di_x$, because $\omega$ is alternating: $\omega(x,[x_i,x_j],\dots)=-\omega([x_i,x_j],x,\dots)$ and the two appear with the same coefficient $(-1)^{i+j}$, while $x_i\omega(x,\dots)$ and $x_i\omega(x,\dots)$ appear with opposite coefficients $(-1)^i$ and $(-1)^{i-1}$. Since moving the bracket $[x,x_j]$ from the first slot into the $j$-th slot costs the sign $(-1)^{j-1}$, the surviving sum equals $-\sum_j\omega(x_1,\dots,[x,x_j],\dots,x_q)$, so $di_x\omega+i_xd\omega=x\omega-\sum_j\omega(\dots,[x,x_j],\dots)=\theta_x\omega$. [F1, F3, step 1.1, algebra]

3.1 For $x\in\mathfrak a$, $\theta_x$ induces the zero map on every cohomology group. If $\omega$ is a cocycle, then by step 2.3 $\theta_x\omega=d(i_x\omega)+i_x(d\omega)=d(i_x\omega)$ is a coboundary; and by step 2.2 $\theta_x$ maps coboundaries to coboundaries, since $\theta_x(d\alpha)=d(\theta_x\alpha)$. Hence the induced endomorphism of $H^q(\mathfrak a,V)=\ker d^q/\operatorname{im}d^{q-1}$ is zero for every $q$. [F1, F6, step 2.2, step 2.3]

4.1 The action descends. By steps 2.1 and 2.2, $\theta:\mathfrak p\to\operatorname{End}_k(C^\bullet(\mathfrak a,V))$ is a representation preserving the differential, so it induces a representation of $\mathfrak p$ on each cohomology space $H^q(\mathfrak a,V)$; by step 3.1 this induced representation kills $\mathfrak a$. Since $\mathfrak a$ is an ideal [F4] and the quotient map $q:\mathfrak p\twoheadrightarrow\mathfrak p/\mathfrak a$ is a surjective Lie algebra homomorphism, there is a unique Lie algebra homomorphism $\bar\theta:\mathfrak p/\mathfrak a\to\operatorname{End}_k(H^q)$ with $\bar\theta\circ q=\theta$: it is well defined because $\theta$ vanishes on $\mathfrak a$, and it is a homomorphism because $\theta$ is and $q$ is surjective. By [F4] the representation $\bar\theta$ makes $H^q(\mathfrak a,V)$ a unital $U(\mathfrak p/\mathfrak a)$-module. For $\mathfrak a=\mathfrak n^+\triangleleft\mathfrak b$ the quotient is $\mathfrak h$ by [F5], so $H^\bullet(\mathfrak n^+,V)$ is an $\mathfrak h$-module for every $\mathfrak b$-module $V$; and every $\mathfrak g$-module is a $\mathfrak b$-module by restriction. The same conclusion holds for $\mathfrak p=N_{\mathfrak g}(\mathfrak a)$, which makes $\mathfrak a$ an ideal by [F4] applied to the normalizer definition, so the statement covers every subalgebra whose normalizer acts. [F4, F5, step 2.1, step 3.1] ∎ 