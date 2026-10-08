---
id: thm-cg-root-length-criterion-and-faithfulness
kind: theorem
title: "The root-length criterion and faithfulness of the canonical reflection representation"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 9
deps: [lem-cg-rank-two-prefix-and-chamber-length-induction, thm-cg-root-sign-and-simple-reflection-positivity, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, def-cg-dual-chambers-and-reflection-hyperplanes, lem-cg-dual-action-and-chamber-faces-exist, def-hh-coxeter-matrix-word-group-and-length, thm-hh-coxeter-exchange-deletion-and-faithfulness, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-group-homomorphism, def-algebraic-dual-and-linear-functional, def-group]
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press, 2008; author's complete institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix D.1, printed pp. 439-442 (Theorem D.1.1 with its proof, Corollary D.1.2, Lemma D.1.5); S4.8, printed pp. 54-57; read in the extracted full text; figures and exercises excluded"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted full PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "S4.2, printed pp. 93-97 (Propositions 4.2.1 and 4.2.5, Theorem 4.2.7); S4.4, printed pp. 101-105 (Lemma 4.4.3, Proposition 4.4.4); read in the extracted full text; exercises excluded"
verification:
  precheck: pass
---

## Statement

Let $S$ be a finite set, $m$ a Coxeter matrix, $W$ the presented group with length function $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]), $V=\mathbb R^S$ with Coxeter form $B$ and canonical reflection homomorphism $\rho:W\to\mathrm{GL}(V)$ with root system $\Phi$ ([[def-cg-canonical-reflection-homomorphism]]), and let $\Phi_+,\Phi_-$ be the positive and negative roots and $C^\circ$ the open chamber of the dual action ([[thm-cg-root-sign-and-simple-reflection-positivity]]).

**(1) Root-length criterion.** For all $w\in W$ and $s\in S$,
$$\ell(ws)>\ell(w)\iff\rho(w)e_s\in\Phi_+,\qquad \ell(ws)<\ell(w)\iff\rho(w)e_s\in\Phi_-.$$

**(2) Disjoint chambers.** If $wC^\circ\cap C^\circ\ne\emptyset$ for some $w\in W$, then $w=1$. Equivalently, the chambers $wC^\circ$ ($w\in W$) are pairwise disjoint, that is, $C^\circ$ is prefundamental for the $W$-action on $V^*$ in the sense that $wC^\circ\cap C^\circ\ne\emptyset$ forces $w=1$ for every $w\in W$.

**(3) Faithfulness.** The homomorphism $\rho$ is injective, the dual action $W\to\mathrm{GL}(V^*)$ is injective, and for every $w\ne1$ there is $s\in S$ with $\rho(w)e_s\in\Phi_-$.

## Facts & Assumptions

**Given:** a finite set $S$, a Coxeter matrix $m$, the presented group $W$ with length function $\ell$, the space $V=\mathbb R^S$ with Coxeter form $B$, the canonical reflection homomorphism $\rho$ with root system $\Phi=\Phi_+\sqcup\Phi_-$, and the dual action on $V^*$ with open chamber $C^\circ$ and half-spaces $B_s=\{f\in V^*:f(e_s)>0\}$, $sB_s=\{f\in V^*:f(e_s)<0\}$.

[F1] For every $w\in W$ and $s\in S$: the chamber $wC^\circ$ satisfies $wC^\circ\subseteq B_s$ or $wC^\circ\subseteq sB_s$, and $wC^\circ\subseteq sB_s$ if and only if $\ell(sw)<\ell(w)$; for $s\ne t$ the rank-two half-space alternative and the induction $(\mathrm P_n)$, $(\mathrm Q_n)$ hold ([[lem-cg-rank-two-prefix-and-chamber-length-induction]]).

[F2] For every $w\in W$ and $s\in S$: $\rho(w)e_s\in\Phi_-\iff w^{-1}C^\circ\subseteq sB_s$ and $\rho(w)e_s\in\Phi_+\iff w^{-1}C^\circ\subseteq B_s$; moreover $C^\circ\subseteq B_s$ and $B_s\cap sB_s=\emptyset$ for every $s$, and $C^\circ\ne\emptyset$ ([[thm-cg-root-sign-and-simple-reflection-positivity]], [[def-cg-dual-chambers-and-reflection-hyperplanes]]).

[F3] For all $w\in W$ and $s\in S$ one has $\ell(ws)=\ell(w)\pm1$, and $\ell$ is invariant under inversion: $\ell(w^{-1})=\ell(w)$; every element $w\ne1$ has a reduced expression $w=s_1\cdots s_n$ with $n=\ell(w)\ge1$, and then $w=(s_1\cdots s_{n-1})s_n$ has $\ell(w s_n)=\ell(w)-1$ ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]], [[thm-hh-parabolic-minimal-representatives-and-length-additivity]]).

[F4] The dual action $(w\cdot f)(v)=f(\rho(w)^{-1}v)$ is a left action of $W$ on $V^*$ by linear bijections, with $\rho(w)^{-1}=\rho(w^{-1})$ for every $w$ ([[def-cg-dual-chambers-and-reflection-hyperplanes]], [[lem-cg-dual-action-and-chamber-faces-exist]]).

## Proof

**Proof technique:** direct.

1.1 **Set-up.** Recall from [F2] that $C^\circ\subseteq B_s$ and $B_s\cap sB_s=\emptyset$ for every $s\in S$, and that the two sign equivalences of the root system hold; from [F4] that every $w$ acts on $V^*$ as a bijection with inverse the action of $w^{-1}$; and from [F1] that for every $x\in W$ and every generator $s$ exactly one of $xC^\circ\subseteq B_s$, $xC^\circ\subseteq sB_s$ holds. [F1, F2, F4, given]

1.2 **The two-sided root-length criterion.** Fix $w\in W$ and $s\in S$. By [F2], $\rho(w)e_s\in\Phi_-$ if and only if $w^{-1}C^\circ\subseteq sB_s$; by [F1] applied to the element $w^{-1}$ this holds if and only if $\ell(sw^{-1})<\ell(w^{-1})$. Since $(sw^{-1})^{-1}=ws$ and $\ell$ is inversion invariant, [F3] gives $\ell(sw^{-1})=\ell(ws)$ and $\ell(w^{-1})=\ell(w)$, so $\rho(w)e_s\in\Phi_-\iff\ell(ws)<\ell(w)$. Finally $\ell(ws)=\ell(w)\pm1$ by [F3] and $\Phi=\Phi_+\sqcup\Phi_-$ by [F2], so this is equivalent to the statement that $\ell(ws)>\ell(w)$ if and only if $\rho(w)e_s\in\Phi_+$; both claims of (1) follow. [F1, F2, F3, algebra]

1.3 **Disjoint chambers.** Suppose $wC^\circ\cap C^\circ\ne\emptyset$ and $w\ne1$. Choose a reduced expression of $w$ and let $s$ be its first letter, so that $w=sw'$ with $\ell(w')=\ell(w)-1$ by [F3]. The intersection point lies in $C^\circ\subseteq B_s$, so $wC^\circ$ meets $B_s$, whence $wC^\circ\not\subseteq sB_s$ because $B_s\cap sB_s=\emptyset$; applying the bijection $f\mapsto s\cdot f$ from [F4] and using that its square is the identity gives $w'C^\circ\not\subseteq B_s$. By [F1] applied to $w'$, therefore $w'C^\circ\subseteq sB_s$ and $\ell(sw')=\ell(w')-1$; but $sw'=w$, so $\ell(w)=\ell(w')-1=\ell(w)-2$, a contradiction. Hence $w=1$; and the stated equivalence holds because $vC^\circ\cap wC^\circ\ne\emptyset$ if and only if $(w^{-1}v)C^\circ\cap C^\circ\ne\emptyset$ by [F4]. [F1, F2, F3, F4, algebra]

2.1 **Faithfulness.** If $\rho(w)=\mathrm{id}_V$, then $\rho(w)^{-1}=\mathrm{id}_V$ as well, so $(w\cdot f)(v)=f(\rho(w)^{-1}v)=f(v)$ for all $f\in V^*$ and $v\in V$ by [F4]; hence $w\cdot f=f$ for every $f$ and $wC^\circ=C^\circ$ meets $C^\circ$, so 1.3 gives $w=1$. If the dual action of $w$ is the identity, then for any $f\in C^\circ$ one has $f=w\cdot f\in wC^\circ\cap C^\circ$, which is nonempty, and 1.3 again gives $w=1$. Finally let $w\ne1$ and let $s$ be the last letter of a reduced expression of $w$, so that $\ell(ws)=\ell(w)-1$ by [F3]; by the criterion of 1.2, $\rho(w)e_s\in\Phi_-$. [step 1.2, step 1.3, F3, F4] ∎
