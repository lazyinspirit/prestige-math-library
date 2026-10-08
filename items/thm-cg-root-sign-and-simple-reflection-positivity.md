---
id: thm-cg-root-sign-and-simple-reflection-positivity
kind: theorem
title: "Root sign coherence and the action of simple reflections on positive roots"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 8
deps: [lem-cg-rank-two-prefix-and-chamber-length-induction, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, def-cg-dual-chambers-and-reflection-hyperplanes, lem-cg-dual-action-and-chamber-faces-exist, def-algebraic-dual-and-linear-functional, def-linear-combination-and-span, def-linear-basis, def-hh-coxeter-matrix-word-group-and-length, def-group-homomorphism, def-group]
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press, 2008; author's complete institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "S4.8, printed pp. 54-57 (Property (P), Tits' Lemma 4.8.3); Appendix D.1, printed pp. 439-442 (Theorem D.1.1, Corollary D.1.2, Lemma D.1.5); read in the extracted full text; figures and exercises excluded"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted full PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "S4.2, printed pp. 93-97; S4.4, printed pp. 101-105 (Definition 4.4.1, Lemma 4.4.3, Proposition 4.4.4); read in the extracted full text; exercises excluded"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S$ be a finite set, $m$ a Coxeter matrix, $W$ the presented group ([[def-hh-coxeter-matrix-word-group-and-length]]), $V=\mathbb R^S$ with Coxeter form $B$, the reflections $r_a$ ([[def-cg-real-coxeter-form-and-reflection]]), the canonical reflection homomorphism $\rho:W\to\mathrm{GL}(V)$, the root system $\Phi=\{\rho(w)e_s\}$, the reflections $T$, and the positive cone $V_+=\{\sum_s\lambda_se_s:\lambda_s\ge0\}$ ([[def-cg-canonical-reflection-homomorphism]]); every root satisfies $B(\alpha,\alpha)=1$ ([[lem-cg-reflection-representation-descends-and-root-norms]] (3)). Let $C,C^\circ$ be the chamber and its interior of the dual action and put $B_s:=\{f\in V^*:f(e_s)>0\}$ ([[def-cg-dual-chambers-and-reflection-hyperplanes]]).

**(1) Sign criterion for the cone.** For $v\in V$: $v\in V_+\setminus\{0\}$ if and only if $f(v)>0$ for every $f\in C^\circ$.

**(2) Roots have a sign.** Every root $\alpha\in\Phi$ lies in $V_+\setminus\{0\}$ or in $-V_+\setminus\{0\}$, and not in both. Hence, with
$$\Phi_+:=\Phi\cap V_+,\qquad \Phi_-:=\Phi\cap(-V_+),$$
one has $\Phi=\Phi_+\sqcup\Phi_-$, $\Phi_-=-\Phi_+$, $e_s\in\Phi_+$ for every $s\in S$, and for every $w\in W$ and $s\in S$
$$\rho(w)e_s\in\Phi_+\iff w^{-1}C^\circ\subseteq B_s,\qquad \rho(w)e_s\in\Phi_-\iff w^{-1}C^\circ\subseteq sB_s.$$
In particular $f(\alpha)>0$ for all $f\in C^\circ$ when $\alpha\in\Phi_+$, and $f(\alpha)<0$ for all $f\in C^\circ$ when $\alpha\in\Phi_-$.

**(3) Simple reflections act on positive roots.** For every $s\in S$,
$$r_s(\Phi_+\setminus\{e_s\})=\Phi_+\setminus\{e_s\},\qquad r_se_s=-e_s,\qquad r_s\Phi=\Phi;$$
equivalently $r_s\Phi_+=(\Phi_+\setminus\{e_s\})\cup\{-e_s\}$.

## Facts & Assumptions

**Given:** a finite set $S$, a Coxeter matrix $m$, the presented group $W$ with its universal property, the space $V=\mathbb R^S$ with its canonical basis $(e_s)_{s\in S}$, the Coxeter form $B$, the canonical reflection homomorphism $\rho$ with root system $\Phi$ and reflection set $T$, the positive cone $V_+$ and the negative cone $-V_+$, and the dual action on $V^*$ with chamber $C$, interior $C^\circ$ and root hyperplanes $H_\alpha$.

[F1] For every $w\in W$ and $s\in S$, exactly one of $wC^\circ\subseteq B_s$ and $wC^\circ\subseteq sB_s$ holds, and in the second case $\ell(sw)=\ell(w)-1$; equivalently, $wC^\circ\subseteq sB_s$ if and only if $\ell(sw)<\ell(w)$ ([[lem-cg-rank-two-prefix-and-chamber-length-induction]]).

[F2] The reflections $r_a$ are defined for $B(a,a)\ne0$ by $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$; one has $B(e_s,e_s)=1$ and $r_s(e_s)=-e_s$, and the assignment $s\mapsto r_s$ induces the homomorphism $\rho:W\to\mathrm{GL}(V)$ ([[def-cg-real-coxeter-form-and-reflection]], [[lem-cg-reflection-form-invariance-and-rank-two-orders]]).

[F3] The root system is $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$, every root satisfies $B(\alpha,\alpha)=1$, the set $\Phi$ is invariant under every $\rho(w)$, and $\rho(w)e_s=-\rho(ws)e_s$ for all $w\in W$, $s\in S$ ([[def-cg-canonical-reflection-homomorphism]], [[lem-cg-reflection-representation-descends-and-root-norms]]).

[F4] The dual action is given by $(w\cdot f)(v)=f(\rho(w)^{-1}v)$; the closed chamber is $C=\{f\in V^*:f(e_s)\ge0\text{ for all }s\}$, its interior is $C^\circ=\{f\in V^*:f(e_s)>0\text{ for all }s\}$ and is nonempty, $B_s=\{f\in V^*:f(e_s)>0\}$ and $sB_s=\{f\in V^*:f(e_s)<0\}$ are disjoint open half-spaces, and the dual basis functionals $f_s\in V^*$ satisfy $f_s(e_t)=\delta_{st}$ and $f(e_s)\ge0$ for every $f\in C$ ([[def-cg-dual-chambers-and-reflection-hyperplanes]], [[lem-cg-dual-action-and-chamber-faces-exist]]).

[F5] On the finite-dimensional real vector space $V$ with basis $(e_s)$: every $v\in V$ has unique coordinates $v=\sum_s v(s)e_s$ with $v(s)\in\mathbb R$, evaluation $f\mapsto f(v)$ is linear in $v$ for fixed $f\in V^*$, and sums and nonnegative multiples of elements of $V_+$ lie in $V_+$ ([[def-linear-basis]], [[def-linear-combination-and-span]], [[def-algebraic-dual-and-linear-functional]]).

## Proof

**Proof technique:** direct.

1.1 **Set-up.** Every $f\in C^\circ$ satisfies $f(e_s)>0$ for all $s\in S$, so that $C^\circ\subseteq B_s$ and $C^\circ\subseteq B_s\cap B_t$ for all $s\ne t$; moreover $C^\circ\ne\emptyset$. Every root is of the form $\rho(w)e_s$ with $B(\rho(w)e_s,\rho(w)e_s)=1$, hence nonzero, and $-\rho(w)e_s=\rho(ws)e_s$ is again a root, so $\Phi=-\Phi$. [F2, F3, F4, given]

1.2 **The sign criterion, forward direction.** Let $v=\sum_s\lambda_se_s\in V_+\setminus\{0\}$, so all $\lambda_s\ge0$ and some $\lambda_r>0$. For $f\in C^\circ$ linearity gives $f(v)=\sum_s\lambda_sf(e_s)\ge\lambda_rf(e_r)>0$, since all summands are nonnegative and the summand at $r$ is positive. [F4, F5, given]

1.3 **The sign criterion, converse direction.** Let $v\notin V_+\setminus\{0\}$. If $v=0$ then $f(v)=0$ for every $f$, so assume $v\notin V_+$; then some coordinate $\lambda_r=v(r)$ is negative. Let $g:=f_r+\varepsilon\sum_sf_s$ with $\varepsilon>0$ so small that $\varepsilon\,|\sum_sv(s)|<|\lambda_r|$. Then $g(e_t)=\delta_{rt}+\varepsilon>0$ for every $t\in S$, so $g\in C^\circ$, and $g(v)=\lambda_r+\varepsilon\sum_sv(s)<0$. Hence some element of $C^\circ$ evaluates $v$ negatively, and the criterion of (1) holds in both directions. [F4, F5, algebra]

2.1 **The equivalence of the two criteria.** By 1.2 and 1.3, for every $v\in V$: $v\in V_+\setminus\{0\}$ if and only if $f(v)>0$ for every $f\in C^\circ$. [step 1.2, step 1.3]

3.1 **Roots have a sign.** Fix $w\in W$ and $s\in S$. For $f\in V^*$ one has $(w^{-1}\cdot f)(e_s)=f(\rho(w^{-1})^{-1}e_s)=f(\rho(w)e_s)$; by [F1] applied to the element $w^{-1}$ either $w^{-1}C^\circ\subseteq B_s$ or $w^{-1}C^\circ\subseteq sB_s$. In the first case $f(\rho(w)e_s)>0$ for every $f\in C^\circ$, so $\rho(w)e_s\in V_+\setminus\{0\}$ by 2.1 and hence in $\Phi_+$; in the second case $f(\rho(w)e_s)<0$ for every $f\in C^\circ$, so $-f(\rho(w)e_s)=f(-\rho(w)e_s)>0$ for every $f\in C^\circ$, whence $-\rho(w)e_s\in V_+\setminus\{0\}$ by 2.1 and $\rho(w)e_s\in-V_+\setminus\{0\}$, so it lies in $\Phi_-$. The two alternatives are exclusive because $V_+\cap(-V_+)=\{0\}$ while $\rho(w)e_s\ne0$ by 1.1. Since every root is some $\rho(w)e_s$ and $-\rho(w)e_s=\rho(ws)e_s$ is a root, this gives $\Phi=\Phi_+\sqcup\Phi_-$ and $\Phi_-=-\Phi_+$; taking $w=1$ gives $e_s=\rho(1)e_s\in V_+\setminus\{0\}$ and hence $e_s\in\Phi_+$. Reading the two cases displayed above as equivalences with 2.1 gives $\rho(w)e_s\in\Phi_+\iff w^{-1}C^\circ\subseteq B_s$ and $\rho(w)e_s\in\Phi_-\iff w^{-1}C^\circ\subseteq sB_s$, and with 2.1 the last sentence of (2) follows. [step 2.1, F1, F3, algebra]

4.1 **Simple reflections act on positive roots.** Fix $s\in S$. That $r_se_s=-e_s$ is [F2]. Let $\alpha\in\Phi_+\setminus\{e_s\}$. Since $r_s=\rho(s)$ and $\Phi$ is $\rho(W)$-invariant by [F3], $r_s\alpha\in\Phi$, so by 3.1 either $r_s\alpha\in\Phi_+$ or $r_s\alpha\in\Phi_-$. Suppose $r_s\alpha\in\Phi_-$, that is $r_s\alpha\in-V_+\setminus\{0\}$, and write $r_s\alpha=\alpha-2B(\alpha,e_s)e_s$ by [F2] with $B(e_s,e_s)=1$. In coordinates: $(r_s\alpha)(r)=\alpha(r)$ for $r\ne s$ and $(r_s\alpha)(s)=\alpha(s)-2B(\alpha,e_s)$. Since $\alpha\in V_+\setminus\{0\}$ all coordinates $\alpha(r)$ are nonnegative and not all vanish, and since $r_s\alpha\in-V_+\setminus\{0\}$ all its coordinates are nonpositive; for $r\ne s$ both statements apply to $\alpha(r)$, so $\alpha(r)=0$ for all $r\ne s$, that is $\alpha=\alpha(s)e_s$ with $\alpha(s)>0$. Then $1=B(\alpha,\alpha)=\alpha(s)^2B(e_s,e_s)=\alpha(s)^2$, so $\alpha(s)=1$ and $\alpha=e_s$, contradicting the choice of $\alpha$. Hence $r_s\alpha\in\Phi_+$; moreover $r_s\alpha\ne e_s$, because $r_s e_s=-e_s$ and $r_s$ is an involution, so $r_s\alpha=e_s$ would give $\alpha=-e_s\notin\Phi_+$. Thus $r_s(\Phi_+\setminus\{e_s\})\subseteq\Phi_+\setminus\{e_s\}$, and applying the involution $r_s$ once more gives equality. Finally $r_s\Phi=\Phi$: indeed $r_s=\rho(s)$ maps $\Phi$ into $\Phi$ by [F3], and $r_s^2=\mathrm{id}$ by [F2], so this map is a bijection of $\Phi$; consequently $r_s\Phi_+=(\Phi_+\setminus\{e_s\})\cup\{-e_s\}$. This is (3), while (1) is 2.1 and (2) is 3.1. [step 3.1, F2, F3, algebra] ∎
