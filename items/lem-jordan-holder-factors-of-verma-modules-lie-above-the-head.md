---
id: lem-jordan-holder-factors-of-verma-modules-lie-above-the-head
kind: lemma
title: Jordan-Holder factors of Verma modules dominate the head (BGG 8.12)
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-bgg-verma-homomorphism-criterion, thm-strong-linkage-principle-for-verma-modules, lem-a-verma-composition-factor-has-the-same-central-character, thm-simple-objects-of-category-o-are-highest-weight-modules, prop-verma-composition-multiplicities-are-finite, thm-verma-module-has-a-unique-simple-quotient, def-composition-series-and-composition-factors-of-an-object, thm-every-category-o-object-has-finite-length, def-bruhat-order-on-a-finite-weyl-group, def-axiom-of-choice, lem-positive-root-pairings-of-a-dominant-integral-weight, def-strong-linkage-order-on-weights, cor-central-characters-are-dot-weyl-orbits, lem-finite-weyl-strong-exchange-and-deletion]
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
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 4.2.2, Theorem 8.12, p. 22"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "P. Etingof, Representations of Lie Groups (18.757, Fall 2023), Theorem 20.13, p. 104"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in\Lambda^+$ and $w\in W$. If a simple module $L(\mu)$ occurs in a composition series of $M(w\circ\lambda)$, then $\mu=u\circ\lambda$ for some $u\ge w$ in Bruhat order; moreover $L(w\circ\lambda)$ occurs exactly once. Consequently every composition factor of $M(w\circ\lambda)$ has length at least $\ell(w)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\lambda\in\Lambda^+$, an element $w\in W$, and the Verma module $M(w\circ\lambda)$.

[F1] If $[M(\eta):L(\mu)]\ne0$, then $\mu\uparrow\eta$ in the strong linkage order ([[thm-strong-linkage-principle-for-verma-modules]], [[def-strong-linkage-order-on-weights]]) and the central characters agree, $\chi_\mu=\chi_\eta$ ([[lem-a-verma-composition-factor-has-the-same-central-character]]); central characters of highest weight modules agree exactly on dot-Weyl orbits, $\chi_\mu=\chi_\eta$ if and only if $\mu=u\circ\eta$ for some $u\in W$ ([[cor-central-characters-are-dot-weyl-orbits]]).

[F2] $\mu\uparrow\eta$ means that there are weights $\eta=\eta_0\succ\eta_1\succ\cdots\succ\eta_r=\mu$ and positive roots $\alpha_j$ with $\eta_j=s_{\alpha_j}\circ\eta_{j-1}$ and $\langle\eta_{j-1}+\rho,\alpha_j^\vee\rangle\in\mathbb Z_{>0}$; equivalently, by [[thm-bgg-verma-homomorphism-criterion]], each consecutive pair is joined by a nonzero (hence injective) homomorphism $M(\eta_j)\to M(\eta_{j-1})$ ([[def-strong-linkage-order-on-weights]]).

[F3] Strong exchange deletes one letter from a reduced expression for $v$ to represent $tv$ when $t$ is a root reflection and $\ell(tv)<\ell(v)$; deletion of pairs of letters reduces any nonreduced expression to a reduced one ([[lem-finite-weyl-strong-exchange-and-deletion]]). The reduced-subword criterion then gives $tv<v$ ([[def-bruhat-order-on-a-finite-weyl-group]]). Thus every increasing reflection chain, even with length jumps greater than one, witnesses Bruhat comparison.

[F4] For a dominant integral weight $\eta$ and a positive root $\beta$ one has $\langle\eta+\rho,\beta^\vee\rangle\in\mathbb Z_{>0}$, and $\eta+\rho$ is regular ([[lem-positive-root-pairings-of-a-dominant-integral-weight]]).

[F5] $L(w\circ\lambda)$ is the unique simple quotient (head) of $M(w\circ\lambda)$ ([[thm-verma-module-has-a-unique-simple-quotient]]); the simple objects of $\mathcal O$ are exactly the $L(\mu)$, and $L(\mu)\cong L(\mu')$ forces $\mu=\mu'$ ([[thm-simple-objects-of-category-o-are-highest-weight-modules]]); objects of $\mathcal O$ have finite length ([[thm-every-category-o-object-has-finite-length]]).

[F6] The weight space $M(\eta)_{\eta}$ is one dimensional, spanned by the highest weight vector $v_\eta$, and $v_\eta$ generates $M(\eta)$; the sum of all proper submodules of $M(\eta)$ is the unique maximal submodule and does not contain $v_\eta$ ([[thm-verma-module-has-a-unique-simple-quotient]]).

## Proof

1.1 Let $L(\mu)$ be a composition factor of $M(w\circ\lambda)$. By [F1] $\mu\uparrow(w\circ\lambda)$ and $\chi_\mu=\chi_{w\circ\lambda}$; by the orbit description of central characters, $\mu=u\circ(w\circ\lambda)$ for some $u\in W$. Since $u\circ(w\circ\lambda)=u(w(\lambda+\rho))-\rho=(uw)\circ\lambda$, we may write $\mu=u'\circ\lambda$ with $u'=uw\in W$. [F1, algebra]

1.2 For the multiplicity of the head, write $J$ for the sum of all proper submodules of $M(w\circ\lambda)$, the unique maximal submodule, so $M/J\cong L(w\circ\lambda)$ is simple by [F5]. The highest weight vector $v$ of $M(w\circ\lambda)$ spans the one-dimensional weight space $M(w\circ\lambda)_{w\circ\lambda}$ and generates the module, so $v\notin J$ and hence $J_{w\circ\lambda}=0$. Refine the filtration $0\subset J\subset M(w\circ\lambda)$ to a composition series; its top factor is $M/J\cong L(w\circ\lambda)$, and any further factor isomorphic to $L(w\circ\lambda)$ would be a subquotient $X/Y$ of $J$ with $(X/Y)_{w\circ\lambda}\ne0$, hence would force $X_{w\circ\lambda}\ne0$ and so $J_{w\circ\lambda}\ne0$, a contradiction. Therefore $[M(w\circ\lambda):L(w\circ\lambda)]=1$. [F5, F6, algebra]

2.1 Use the witnessing linkage chain of [F2]: $w\circ\lambda=\eta_0\succ\eta_1\succ\cdots\succ\eta_r=\mu$ with $\eta_j=s_{\alpha_j}\circ\eta_{j-1}$ and positive integral pairings. By step 1.1 and induction each $\eta_j$ lies in $W\circ\lambda$; write $\eta_j=v_j\circ\lambda$. Then $v_j\circ\lambda=s_{\alpha_j}\circ(v_{j-1}\circ\lambda)=(s_{\alpha_j}v_{j-1})\circ\lambda$, so $v_j=s_{\alpha_j}v_{j-1}$, with $v_0=w$ and $v_r=u'$. Moreover $\eta_{j-1}+\rho=v_{j-1}(\lambda+\rho)$, so the pairing condition reads $\langle\lambda+\rho,v_{j-1}^{-1}\alpha_j^\vee\rangle=\langle v_{j-1}(\lambda+\rho),\alpha_j^\vee\rangle\in\mathbb Z_{>0}$. If $v_{j-1}^{-1}\alpha_j$ were a negative root $-\beta$ with $\beta>0$, then $\langle\lambda+\rho,(-\beta)^\vee\rangle=-\langle\lambda+\rho,\beta^\vee\rangle<0$ by [F4], contradiction; hence $v_{j-1}^{-1}\alpha_j>0$ and the length criterion of [[lem-finite-weyl-strong-exchange-and-deletion]] gives $\ell(s_{\alpha_j}v_{j-1})>\ell(v_{j-1})$. [F2, F3, F4, step 1.1, algebra]

3.1 Thus $w=v_0,\dots,v_r=u'$ is an increasing reflection chain, so $w\le u'$ in Bruhat order by [F3] and $\ell(u')\ge\ell(w)$. This proves the domination and length assertions. [F3, step 2.1]

4.1 Combining steps: every composition factor of $M(w\circ\lambda)$ is $L(u\circ\lambda)$ with $u\ge w$ in Bruhat order, $\ell(u)\ge\ell(w)$, and the factor $L(w\circ\lambda)$ occurs exactly once. [step 3.1, step 1.2] ∎
