---
id: lem-cg-reflection-representation-descends-and-root-norms
kind: lemma
title: "Descent of the reflection representation, unit root norms, and conjugation of reflections"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 4
deps: [def-cg-canonical-reflection-homomorphism, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-real-coxeter-form-and-reflection, def-hh-coxeter-matrix-word-group-and-length, def-group-homomorphism, def-generated-subgroup, def-group, def-linear-isomorphism-and-invertible-linear-map, def-linear-map, def-vector-space-of-linear-maps, lem-composition-and-identity-linear-maps, lem-monoid-units-form-a-group]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press; author's full institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "\u00a76.12, printed p. 117: Corollary 6.12.4, relator verification and extension of $s_i\\mapsto\\rho_i$ to $\\rho:W\\to\\mathrm{GL}(\\mathbb R^I)$"
    - title: "Anders Bj\u00f6rner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "\u00a74.2, printed pp. 93\u201394: Proposition 4.2.1 and Theorem 4.2.2 (relators and the unique extension); (4.14) for the fixed hyperplane of $\\sigma_s$"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised 2014 text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "\u00a71.3, printed p. 11, and Appendix A.1, printed p. 131: Proposition 1.3(a)\u2013(b) and the invariance of the form $(\\,,\\,)$ under $\\sigma(w)$"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S$, $m$, $V$, $B$, $W$, $r_s$, $\rho$, $\Phi$, $T$ be as in [[def-cg-canonical-reflection-homomorphism]].

**(1) Relators and descent.** For every $s\in S$ one has $r_s^2=\mathrm{id}_V$, and for all $s\ne t$ with $m(s,t)<\infty$ one has $(r_sr_t)^{m(s,t)}=\mathrm{id}_V$. Consequently the assignment $s\mapsto r_s$ sends every relator of the presentation to the identity, and by the universal property of [[def-hh-coxeter-matrix-word-group-and-length]] there is a **unique** group homomorphism $\rho:W\to\mathrm{GL}(V)$ with $\rho(s)=r_s$ for all $s\in S$.

**(2) $\rho$ preserves the form.** For every $w\in W$ and all $u,w'\in V$, $B(\rho(w)u,\rho(w)w')=B(u,w')$.

**(3) Roots have unit norm.** For every $w\in W$ and $s\in S$, $B(\rho(w)e_s,\rho(w)e_s)=1$; hence every root $\alpha\in\Phi$ satisfies $B(\alpha,\alpha)=1\ne0$ and $r_\alpha$ is defined.

**(4) Conjugation of reflections.** Let $g\in\mathrm{GL}(V)$ be $B$-preserving and let $a\in V$ with $B(a,a)\ne0$. Then $gr_ag^{-1}=r_{ga}$. In particular, for every $w\in W$ and $s\in S$, $$\rho(wsw^{-1})=\rho(w)r_s\rho(w)^{-1}=r_{\rho(w)e_s},$$ so every $t=wsw^{-1}\in T$ acts on $V$ as the reflection in the root $\rho(w)e_s\in\Phi$.

## Facts & Assumptions

**Given:** a finite set $S$, a Coxeter matrix $m$, the space $V=\mathbb R^S$, the Coxeter form $B$, the reflections $r_a$ and the presented Coxeter group $W$ with its universal property, all as in the Statement of [[def-cg-canonical-reflection-homomorphism]]; here $r_s:=r_{e_s}$ for $s\in S$.

[F1] For $a\in V$ with $B(a,a)\ne0$ the map $r_a$ is linear, satisfies $r_a^2=\mathrm{id}_V$ and $B(r_au,r_aw)=B(u,w)$ for all $u,w\in V$; and for distinct $s,t\in S$ with $m(s,t)<\infty$ the product $A=r_sr_t$ satisfies $A^{m(s,t)}=\mathrm{id}_V$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]], clauses (2) and (3)(iv)).

[F2] The Coxeter form satisfies $B(e_s,e_s)=1$ for every $s\in S$, the symbol $r_s$ abbreviates $r_{e_s}$, and a linear map $g$ is $B$-preserving when $B(gu,gw)=B(u,w)$ for all $u,w\in V$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F3] A subset $H$ of a group $W$ that is closed under the group operation and under inverses and contains a generating set $S$ equals $W$, because $W=\langle S\rangle$ is the smallest subgroup containing $S$; a group homomorphism satisfies $\varphi(gh)=\varphi(g)\varphi(h)$ and $\varphi(g^{-1})=\varphi(g)^{-1}$ ([[def-generated-subgroup]], [[def-group]], [[def-group-homomorphism]]).

[F4] For a vector space $V$ the set of linear maps $V\to V$ is a monoid under composition with identity $\mathrm{id}_V$, its unit group is the group $\mathrm{GL}(V)$ of invertible linear maps, and composition is associative ([[def-vector-space-of-linear-maps]], [[lem-composition-and-identity-linear-maps]], [[lem-monoid-units-form-a-group]], [[def-linear-isomorphism-and-invertible-linear-map]], [[def-linear-map]]).

## Proof

**Proof technique:** verify the relators, descend through the presentation's universal property, and propagate the form preservation along the subgroup generated by the images of the generators.

1.1 For every $s\in S$ the map $r_s=r_{e_s}$ is linear, $B$-preserving and satisfies $r_s^2=\mathrm{id}_V$: these are the identities of [F1] for $a=e_s$, whose hypothesis $B(e_s,e_s)\ne0$ holds by [F2]. Since $r_s^2=\mathrm{id}_V$, the map $r_s$ is invertible with $r_s^{-1}=r_s$, so $r_s\in\mathrm{GL}(V)$. [given, F1, F2, F4]

1.2 For all distinct $s,t\in S$ with $m(s,t)<\infty$ one has $(r_sr_t)^{m(s,t)}=\mathrm{id}_V$, directly from the exact order statement of [F1] applied to the plane spanned by $e_s$ and $e_t$: the product $r_sr_t$ acts there with exact order $m(s,t)$, so its $m(s,t)$-th power is the identity on $V$. [given, F1, F2]

1.3 Conjugation formula. Let $g\in\mathrm{GL}(V)$ be $B$-preserving and let $a\in V$ with $B(a,a)\ne0$. Then $B(ga,ga)=B(a,a)\ne0$, and for every $v\in V$ the $B$-preservation of $g$ gives $B(g^{-1}v,a)=B(g(g^{-1}v),ga)=B(v,ga)$. Substituting into the definition of $r_{ga}$ and writing $v=g(g^{-1}v)$, $$r_{ga}(v)=g(g^{-1}v)-\frac{2B(g^{-1}v,a)}{B(a,a)}ga=g\Bigl(g^{-1}v-\frac{2B(g^{-1}v,a)}{B(a,a)}a\Bigr)=gr_ag^{-1}(v),$$ so $gr_ag^{-1}=r_{ga}$. [given, F1, F2, algebra]

2.1 Descent. The assignment $s\mapsto r_s$ sends the relator $s^2$ to $r_s^2=\mathrm{id}_V$ by 1.1 and the relator $(st)^{m(s,t)}$ to $(r_sr_t)^{m(s,t)}=\mathrm{id}_V$ by 1.2; these are exactly the relators of the presented Coxeter group $W$ of [[def-hh-coxeter-matrix-word-group-and-length]], and the images $r_s$ lie in the group $\mathrm{GL}(V)$. So the universal property of that presentation gives a unique group homomorphism $\rho:W\to\mathrm{GL}(V)$ with $\rho(s)=r_s$ for every $s\in S$. [given, F4, step 1.1, step 1.2]

3.1 $\rho$ preserves the form, and roots have unit norm. Let $H:=\{w\in W:B(\rho(w)u,\rho(w)w')=B(u,w')\text{ for all }u,w'\in V\}$. Every $s\in S$ lies in $H$ by 1.1, since $\rho(s)=r_s$. If $g,h\in H$ then $B(\rho(gh)u,\rho(gh)w')=B(\rho(g)\rho(h)u,\rho(g)\rho(h)w')=B(\rho(h)u,\rho(h)w')=B(u,w')$, using the homomorphism property of 2.1 and the $B$-preservation of $\rho(g)$ and then of $\rho(h)$, so $gh\in H$; and if $g\in H$, then $B(\rho(g^{-1})u,\rho(g^{-1})w')=B(\rho(g)\rho(g^{-1})u,\rho(g)\rho(g^{-1})w')=B(u,w')$, so $g^{-1}\in H$. Thus $H$ is a subgroup containing $S$, and since every element of $W$ is the value of a finite word in $S$ ([[def-hh-coxeter-matrix-word-group-and-length]]), so that the images of the elements of $S$ generate $W$, [F3] gives $H=W$. In particular $B(\rho(w)e_s,\rho(w)e_s)=B(e_s,e_s)=1$ for all $w\in W$ and $s\in S$ by [F2], so every root $\alpha\in\Phi$ has $B(\alpha,\alpha)=1\ne0$ and the reflection $r_\alpha$ is defined. [given, F2, F3, step 1.1, step 2.1]

4.1 Conjugation of reflections by $\rho$. Let $w\in W$ and $s\in S$. By 3.1 the map $\rho(w)$ is $B$-preserving, and $r_s=\rho(s)$ by 2.1; applying the conjugation formula 1.3 with $g=\rho(w)$ and $a=e_s$ therefore gives $\rho(w)\,r_s\,\rho(w)^{-1}=r_{\rho(w)e_s}$. Since $\rho$ is a homomorphism, $\rho(w)^{-1}=\rho(w^{-1})$ and $\rho(w)\rho(s)\rho(w)^{-1}=\rho(wsw^{-1})$, so $$\rho(wsw^{-1})=r_{\rho(w)e_s}.$$ Hence for every $t=wsw^{-1}\in T$ the element $\rho(t)$ is the reflection in the root $\rho(w)e_s\in\Phi$, as asserted. [given, step 1.3, step 2.1, step 3.1] ∎
