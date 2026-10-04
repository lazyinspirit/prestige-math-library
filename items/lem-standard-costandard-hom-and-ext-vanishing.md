---
id: lem-standard-costandard-hom-and-ext-vanishing
kind: lemma
title: "Standard-costandard Hom and Ext-one orthogonality"
status: published
origin: pipeline
deps:
  - def-balanced-ext-bifunctor
  - thm-category-o-has-enough-projectives
  - def-axiom-of-choice
  - def-chevalley-contravariant-form
  - def-extension-of-an-object-by-an-object-in-an-abelian-category
  - def-restricted-dual-of-a-weight-module
  - def-standard-and-costandard-objects-in-category-o
  - def-verma-module
  - lem-finite-semisimple-pbw-and-highest-weight-construction
  - lem-simple-highest-weight-modules-are-restricted-self-dual
  - prop-restricted-duality-is-an-exact-involution-on-category-o
  - prop-weights-of-a-verma-module-lie-below-lambda
  - thm-universal-property-of-verma-modules
  - thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8, Lemmas 3.14 and 3.16 with proofs"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
      locator: "§3, Lemma 3.14 and Lemma 3.16 with proofs, printed pp. 5-6 (full text read at harvest; the pullback case split is read off the same argument with the root order corrected to $\\mu<\\nu$)"
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Sec. 20.1"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§20.1, Lemma 20.1 and Corollary 20.2, printed pp. 100-101 (full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For all weights $\mu$
and $\nu$ one has
$$\dim_{\mathbb C}\operatorname{Hom}_{\mathcal O}(\Delta(\mu),\nabla(\nu))=1\ \text{if }\mu=\nu,\qquad\dim_{\mathbb C}\operatorname{Hom}_{\mathcal O}(\Delta(\mu),\nabla(\nu))=0\ \text{if }\mu\ne\nu,$$
and
$$\operatorname{Ext}^1_{\mathcal O}(\Delta(\mu),\nabla(\nu))=0 .$$
Here $\Delta(\nu)=M(\nu)$ and $\nabla(\nu)=D(M(\nu))$ are the standard and
costandard objects of
[[def-standard-and-costandard-objects-in-category-o]], and
$\operatorname{Ext}^1$ is the derived Ext over the abelian category
$\mathcal O$, identified with classes of extensions by the Yoneda theorem.

## Facts & Assumptions

**Given:** The Axiom of Choice, weights $\mu,\nu$, and the standard and costandard objects $\Delta(\mu)=M(\mu)$, $\nabla(\nu)=D(M(\nu))$ of $\mathcal O$.

[F1] The negative-root ordered monomials on $v_\lambda$ form a basis of $M(\lambda)$, its weights are exactly $\lambda-Q^+$, its weight spaces are finite-dimensional and $M(\lambda)_\lambda=\mathbb Cv_\lambda$; consequently $M(\lambda)=\mathfrak n^-M(\lambda)\oplus\mathbb Cv_\lambda$, and a $\mathfrak b$-linear map $\mathbb C_\lambda\to V$ into a $\mathfrak g$-module $V$ sending $1$ to an $\mathfrak n^+$-fixed vector of weight $\lambda$ extends uniquely to a $\mathfrak g$-linear map $M(\lambda)\to V$ ([[lem-finite-semisimple-pbw-and-highest-weight-construction]], [[prop-weights-of-a-verma-module-lie-below-lambda]], [[thm-universal-property-of-verma-modules]], [[def-verma-module]]).

[F2] Restricted duality $D$ is an exact contravariant involution of $\mathcal O$ with $D(M(\lambda))=\nabla(\lambda)$ and $D(\nabla(\lambda))=M(\lambda)$, preserving weight-space dimensions and satisfying $D(M)_\mu=M_\mu^*$ with action $(x\varphi)(m)=\varphi(\tau(x)m)$ for the Chevalley anti-involution $\tau$ ([[def-restricted-dual-of-a-weight-module]], [[prop-restricted-duality-is-an-exact-involution-on-category-o]], [[def-chevalley-contravariant-form]]); $\tau(\mathfrak n^+)=\mathfrak n^-$ because $\tau$ exchanges the root spaces $\mathfrak g_\alpha$ and $\mathfrak g_{-\alpha}$ ([[lem-simple-highest-weight-modules-are-restricted-self-dual]]).

[F3] Category $\mathcal O$ has enough projectives ([[thm-category-o-has-enough-projectives]]). Applying [F2] to a projective epimorphism onto $D(X)$ gives a monomorphism $X\hookrightarrow D(P)$ with injective target, so it also has enough injectives. Finitely generated $U(\mathfrak g)$-modules have a set of representatives (quotients of the modules $U(\mathfrak g)^n$). Work on a set-sized skeleton of $\mathcal O$. Under AC, choose projective and injective resolutions on all its objects by successively covering kernels and embedding cokernels. Canonical comparison makes the resulting Ext independent of the chosen representatives. Thus the supplied resolution hypotheses of [[def-balanced-ext-bifunctor]] hold, and extensions form a set up to equivalence. AC also implies Dependent Choice by choosing successors of a serial relation. The Yoneda comparison therefore identifies $\operatorname{Ext}^1(\Delta(\mu),\nabla(\nu))$ with extensions $0\to\nabla(\nu)\to N\to\Delta(\mu)\to0$ ([[def-extension-of-an-object-by-an-object-in-an-abelian-category]], [[thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one]]).

[F4] For weights, $\mu\le\nu$ means $\nu-\mu\in Q^+$; this is a partial order, the strict part $\nu-\mu\in Q^+\setminus\{0\}$ is transitive, and a sum of the form $\mu<\gamma\le\nu$ therefore implies $\mu<\nu$.

## Proof

**Proof technique:** direct: count the $\mathfrak n^+$-fixed weight vectors of a costandard object, then split every extension by a weight argument, dualizing in the remaining case.

1.1 By [F1] a homomorphism $\Delta(\mu)\to\nabla(\nu)$ corresponds to an $\mathfrak n^+$-fixed vector of weight $\mu$ in $\nabla(\nu)$, and by [F2] the space $\nabla(\nu)_\mu$ is $(M(\nu)_\mu)^*$, a functional being extended by zero off weight $\mu$, with $(x\psi)(m)=\psi(\tau(x)m)$; the fixed condition therefore says exactly that $\psi$ annihilates $\tau(\mathfrak n^+)M(\nu)=\mathfrak n^-M(\nu)$. By [F1] one has $M(\nu)=\mathfrak n^-M(\nu)\oplus\mathbb Cv_\nu$, so a functional supported in weight $\mu$ and vanishing on $\mathfrak n^-M(\nu)$ is zero when $\mu\ne\nu$ (its weight space lies in $\mathfrak n^-M(\nu)$) and is determined by an arbitrary value on $\mathbb Cv_\nu$ when $\mu=\nu$; hence the Hom space has dimension $1$ for $\mu=\nu$ and $0$ otherwise. [F1, F2, given]

1.2 Let $0\to\nabla(\nu)\xrightarrow{}N\xrightarrow{}\Delta(\mu)\to0$ be an extension and assume $\nu-\mu\notin Q^+\setminus\{0\}$; pull the sequence back along the $\mathfrak b$-linear map $\mathbb C_\mu\to\Delta(\mu)$, $1\mapsto v_\mu$, to obtain the $\mathfrak b$-exact sequence $0\to\nabla(\nu)\to N'\to\mathbb C_\mu\to0$ with $N'=N\times_{\Delta(\mu)}\mathbb C_\mu$. A $\mathfrak g$-splitting of the original sequence restricts to a $\mathfrak b$-splitting of the pulled-back sequence, and conversely a $\mathfrak b$-splitting $\mathbb C_\mu\to N'$, composed with $N'\to N$, is a $\mathfrak b$-map $\mathbb C_\mu\to N$ whose image is an $\mathfrak n^+$-fixed vector of weight $\mu$, so it extends to a $\mathfrak g$-map $\Delta(\mu)\to N$ by [F1], and the composite $\Delta(\mu)\to N\to\Delta(\mu)$ is a $\mathfrak g$-endomorphism of $\Delta(\mu)$ sending $v_\mu$ to $v_\mu$, hence the identity; so the original sequence splits exactly when the pulled-back one does. The weights of $N'$ are those of $\nabla(\nu)$, namely $\nu-Q^+$, together with $\mu$; if a weight $\gamma$ of $\nabla(\nu)$ were strictly above $\mu$, then $\mu<\gamma\le\nu$, so $\mu<\nu$ by [F4], contrary to the case assumption, and no weight of $N'$ is strictly above $\mu$. The quotient map $N'\to\mathbb C_\mu$ is surjective in weight $\mu$, so choose a lift $v$ of its basis vector that is a $\mu$-weight vector. For $x\in\mathfrak n^+$ nonzero of weight $\alpha\in Q^+\setminus\{0\}$ the vector $xv$, if nonzero, would be a weight vector of weight $\mu+\alpha>\mu$ in $N'$, which is impossible; hence $v$ is $\mathfrak n^+$-fixed and the pulled-back sequence splits, so the original extension splits. [F1, F3, F4, algebra]

2.1 It remains to treat the case $\nu-\mu\in Q^+\setminus\{0\}$, i.e. $\mu<\nu$. Applying the exact contravariant involution $D$ of [F2] to the extension $0\to\nabla(\nu)\to N\to\Delta(\mu)\to0$ gives the extension $0\to D(\Delta(\mu))=\nabla(\mu)\to D(N)\to D(\nabla(\nu))=\Delta(\nu)\to0$, in which the pair of weights is $(\nu,\mu)$; since the strict order is transitive and $\mu<\nu$, antisymmetry gives $\mu-\nu\notin Q^+\setminus\{0\}$ for the reversed pair, so step 1.2 shows that the dual extension splits. Applying the involution $D$ again, and using $D^2\cong\operatorname{id}$ and exactness, the original extension splits. [F2, step 1.2, algebra]

3.1 Every pair of weights satisfies $\nu-\mu\notin Q^+\setminus\{0\}$ or $\mu<\nu$, so steps 1.2 and 2.1 show that every extension of $\Delta(\mu)$ by $\nabla(\nu)$ splits; by the Yoneda identification of [F3] this is exactly $\operatorname{Ext}^1_{\mathcal O}(\Delta(\mu),\nabla(\nu))=0$. Together with the Hom computation of step 1.1 this proves both assertions of the statement. [F3, step 1.1, step 1.2, step 2.1] ∎
