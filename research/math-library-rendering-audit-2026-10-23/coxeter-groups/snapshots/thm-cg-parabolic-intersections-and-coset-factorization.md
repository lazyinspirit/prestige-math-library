---
id: thm-cg-parabolic-intersections-and-coset-factorization
kind: theorem
title: "Intersections of standard parabolics, the parabolic root subsystem, and global minimality of coset representatives"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 12
deps: [def-cg-parabolic-quotient-and-two-sided-minima, def-hh-coxeter-matrix-word-group-and-length,
       thm-hh-coxeter-exchange-deletion-and-faithfulness,
       thm-hh-parabolic-minimal-representatives-and-length-additivity,
       def-cg-real-coxeter-form-and-reflection, def-cg-canonical-reflection-homomorphism,
       lem-cg-reflection-representation-descends-and-root-norms,
       thm-cg-root-sign-and-simple-reflection-positivity,
       thm-cg-root-length-criterion-and-faithfulness,
       thm-cg-root-inversion-formulas-and-strong-exchange,
       def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-generated-subgroup, def-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  scraped: []
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
    - title: "Dongwen Qi, A Note on Parabolic Subgroups of a Coxeter Group (arXiv:math/0512408)"
      url: "https://arxiv.org/pdf/math/0512408"
---

## Statement

Let $(S,m)$, $W$, $\ell$ and $I,J\subseteq S$ be as in
[[def-cg-parabolic-quotient-and-two-sided-minima]], so that $W_I$, $W^I$,
${}^IW$ and the descents $D_L,D_R$ have the meaning fixed there. Let
$V=\mathbb R^S$ with its Coxeter form $B$ and positive cone
$V_+=\{\sum_{s\in S}\lambda_se_s:\lambda_s\ge0\}$
([[def-cg-real-coxeter-form-and-reflection]]), let
$\rho:W\to\mathrm{GL}(V)$ be the canonical reflection homomorphism with root
system $\Phi=\Phi_+\sqcup\Phi_-$
([[def-cg-canonical-reflection-homomorphism]],
[[thm-cg-root-sign-and-simple-reflection-positivity]] (2)), and for
$I\subseteq S$ put

$$V_I:=\operatorname{span}\{e_s:s\in I\},\qquad \Phi_I:=\{\rho(w)e_s:w\in W_I,\ s\in I\}$$

([[def-linear-combination-and-span]]); here $V_\emptyset=\{0\}$ and
$\Phi_\emptyset=\emptyset$.

**(1) Intersections.** For all $I,J\subseteq S$,

$$W_I\cap W_J=W_{I\cap J}.$$

**(2) Parabolic root subsystems.** For every $I\subseteq S$ one has
$\rho(w)V_I=V_I$ for all $w\in W_I$; consequently

$$\Phi_I=\Phi\cap V_I=\{\alpha\in\Phi:\alpha\text{ is a real linear combination of the simple roots }e_s,\ s\in I\}.$$

Moreover $\Phi_I=\Phi_I^+\sqcup\Phi_I^-$ with
$\Phi_I^\pm:=\Phi_I\cap\Phi^\pm=\Phi^\pm\cap V_I$, and the reflections lying in
$W_I$ are exactly the elements $t_\alpha\in T$ with $\alpha\in\Phi_I^+$ in the
root-reflection dictionary of
[[thm-cg-root-inversion-formulas-and-strong-exchange]] (1).

**(3) Coset minima are global minima.** Let $I\subseteq S$, $w\in W$, and let
$d\in W^I$ be the unique element of $W^I\cap wW_I$, i.e. the unique $d\in W^I$
with $w\in dW_I$
([[def-cg-parabolic-quotient-and-two-sided-minima]] (2)). Then

$$\ell(d)\le\ell(x)\quad\text{for every }x\in wW_I,\qquad\text{and}\qquad \ell(d)=\ell(x)\iff x=d;$$

equivalently

$$W^I=\{d\in W:\ell(d)\le\ell(dv)\text{ for all }v\in W_I\},\qquad {}^IW=\{d\in W:\ell(d)\le\ell(vd)\text{ for all }v\in W_I\}.$$

Thus each set $wW_I$ contains exactly one element of $W^I$, namely its unique
element of minimum length, and symmetrically each right coset $W_Iw$ contains
exactly one element of ${}^IW$, namely its unique element of minimum length.

## Facts & Assumptions

**Given:** a finite Coxeter matrix $(S,m)$ with presented group $W$ and length $\ell$, subsets $I,J\subseteq S$, the space $V=\mathbb R^S$ with its Coxeter form $B$, and the canonical reflection homomorphism $\rho$ with root system $\Phi$ and reflection set $T$.

[F1] For $J\subseteq S$: $W_J=\langle J\rangle=\{w\in W:S(w)\subseteq J\}$, $(W_J,J)$ is a Coxeter system with intrinsic length $\ell|_{W_J}$, and $W_J\cap S=J$; every right coset $W_J a$ has a unique element $d$ of minimal length, characterized by $\ell(sd)>\ell(d)$ for all $s\in J$, satisfying $\ell(ud)=\ell(u)+\ell(d)$ for all $u\in W_J$; by inversion every left coset $aW_J$ has a unique minimal element $d$, characterized by $\ell(ds)>\ell(d)$ for all $s\in J$ and satisfying $\ell(du)=\ell(d)+\ell(u)$ for all $u\in W_J$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]]).

[F2] $W_I=\langle s:s\in I\rangle$, $W^I=\{w:\ell(ws)>\ell(w)\text{ for all }s\in I\}$ and ${}^IW=\{w:\ell(sw)>\ell(w)\text{ for all }s\in I\}$, and $W^I=({}^IW)^{-1}$ ([[def-cg-parabolic-quotient-and-two-sided-minima]]).

[F3] $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for $s\ne t$ with $m(s,t)<\infty$, $B(e_s,e_t)=-1$ when $m(s,t)=\infty$; for $a$ with $B(a,a)\ne0$ the reflection with normal $a$ is $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F4] $\rho(s)=r_{e_s}$ for every $s\in S$, so $\rho(s)e_s=-e_s$ and $\rho(s)e_t=e_t-2B(e_t,e_s)e_s$ for $t\ne s$ ([[def-cg-canonical-reflection-homomorphism]], [[def-cg-real-coxeter-form-and-reflection]]); $\rho$ preserves $B$, every root $\alpha$ satisfies $B(\alpha,\alpha)=1$, and $\rho(wsw^{-1})=r_{\rho(w)e_s}$ for all $w\in W$, $s\in S$ ([[lem-cg-reflection-representation-descends-and-root-norms]]).

[F5] Every root lies in $V_+\setminus\{0\}$ or in $-V_+\setminus\{0\}$, but not in both; hence with $\Phi_+=\Phi\cap V_+$ and $\Phi_-=\Phi\cap(-V_+)$ one has $\Phi=\Phi_+\sqcup\Phi_-$, and every $\alpha\in\Phi_+$ has all its coefficients $\ge0$ while every $\alpha\in\Phi_-$ has all its coefficients $\le0$ ([[thm-cg-root-sign-and-simple-reflection-positivity]]).

[F6] For all $w\in W$ and $s\in S$: $\ell(ws)>\ell(w)\iff\rho(w)e_s\in\Phi_+$, and $\ell(ws)<\ell(w)\iff\rho(w)e_s\in\Phi_-$ ([[thm-cg-root-length-criterion-and-faithfulness]]).

[F7] The root-reflection dictionary: $t_\alpha:=wsw^{-1}$ for any $w\in W$, $s\in S$ with $\alpha=\rho(w)e_s$ is well defined, satisfies $\rho(t_\alpha)=r_\alpha$ and $t_{\rho(w)\alpha}=wt_\alpha w^{-1}$, and restricts to a bijection $\Phi_+\to T$, $\alpha\mapsto t_\alpha$, with $t_\alpha=t_\beta$ if and only if $\alpha=\pm\beta$. Strong exchange: if $w=s_1\cdots s_n$ is reduced and $\ell(tw)<\ell(w)$ for a reflection $t$, then there is a unique $i$ with $tw=s_1\cdots\widehat{s_i}\cdots s_n$ and $t=s_1\cdots s_{i-1}s_is_{i-1}\cdots s_1$, and the positive root $\alpha$ with $t=t_\alpha$ is $\rho(s_1\cdots s_{i-1})e_{s_i}$ ([[thm-cg-root-inversion-formulas-and-strong-exchange]]).

[F8] For all $w\in W$ and $s\in S$ one has $\ell(ws)=\ell(w)\pm1$ ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]]).

[F9] For $w=s_1\cdots s_k$ one has $w^{-1}=s_k\cdots s_1$, because every generator satisfies $s^2=1$; hence $\ell(w^{-1})=\ell(w)$ and $(ab)^{-1}=b^{-1}a^{-1}$ for all $a,b\in W$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-group]]).

[F10] $W_I$ is the smallest subgroup containing $I$ ([[def-generated-subgroup]]). The set of finite products of elements of $I$ and their inverses is a subgroup containing $I$ (concatenate words and reverse and invert a word), and is contained in $W_I$; thus it equals $W_I$.

[F11] $V_I=\operatorname{span}\{e_s:s\in I\}$ is the set of all real linear combinations $\sum_{s\in I}\lambda_se_s$; in particular $V_\emptyset=\{0\}$ and the coefficients of a vector of $V_I$ in the basis $(e_s)_{s\in S}$ vanish outside $I$ ([[lem-span-is-the-set-of-linear-combinations]]); the coordinate assertion follows by evaluating the finite combinations at each $s\notin I$.

## Proof

**Proof technique:** direct, with a strong induction on the length of a reflection for the converse containment of (2).

1.1 *Intersections of standard parabolics.* By [F1], $w\in W_I$ if and only if $S(w)\subseteq I$, and $w\in W_J$ if and only if $S(w)\subseteq J$; hence $w\in W_I\cap W_J$ if and only if $S(w)\subseteq I\cap J$, if and only if $w\in W_{I\cap J}$. This proves (1) for all subsets $I,J$, including $I\cap J=\emptyset$, where $W_\emptyset=\{1\}$ by [F1] and [F2]. [F1, F2]

1.2 *Invariance of $V_I$ and one containment.* Let $s\in I$. By [F4], $\rho(s)e_s=-e_s$ and $\rho(s)e_t=e_t-2B(e_t,e_s)e_s$ for $t\in I$, $t\ne s$; every vector of $V_I$ is a linear combination of the $e_t$, $t\in I$, so $\rho(s)V_I\subseteq V_I$, and since $\rho(s)$ is invertible with $\rho(s)^{-1}=\rho(s)$, also $\rho(s)V_I=V_I$. Every $w\in W_I$ is a product of elements of $I$ and their inverses by [F10], and the latter are again elements of $I$ because $s^2=1$; multiplying the identities $\rho(s)V_I=V_I$ along such a product gives $\rho(w)V_I=V_I$. Consequently, for $w\in W_I$ and $s\in I$ the root $\rho(w)e_s$ lies in $\Phi\cap V_I$, so $\Phi_I\subseteq\Phi\cap V_I$; for $I=\emptyset$ this says $\Phi_\emptyset=\emptyset=\Phi\cap\{0\}$, since $0\notin\Phi$ by [F5] and $V_\emptyset=\{0\}$ by [F11]. [F3, F4, F5, F10, F11]

1.3 *Setup of the converse containment.* Let $\varphi\in\Phi\cap V_I$. By [F5] the root $\varphi$ lies in $\Phi_+$ or in $\Phi_-$; replacing $\varphi$ by $-\varphi$, which is again a root in $\Phi\cap V_I$ because $\Phi$ and $V_I$ are stable under negation, we may assume $\varphi\in\Phi_+$, so by [F5] and [F11] we have $\varphi=\sum_{r\in I}\lambda_re_r$ with $\lambda_r>0$ for every $r\in\operatorname{supp}\varphi$, and $\varphi\neq0$. Let $t:=t_\varphi\in T$ be the reflection of the dictionary [F7], so that $\rho(t)=r_\varphi$ and $B(\varphi,\varphi)=1$ by [F4]. We prove $t\in W_I$ by strong induction on $n:=\ell(t)\ge1$. If $n=1$, then $t$ is a word of length one, hence $t=r$ for some $r\in S$; the dictionary gives $t_{e_r}=r$, so $t=t_\varphi=t_{e_r}$ and the clause "$t_\alpha=t_\beta$ if and only if $\alpha=\pm\beta$" of [F7] yields $\varphi=\pm e_r$; since $\varphi$ and $e_r$ both lie in $\Phi_+$ while $\Phi_+$ and $\Phi_-=-\Phi_+$ are disjoint by [F5], $\varphi=e_r$, and then $r\in\operatorname{supp}\varphi\subseteq I$ by [F11], so $t=r\in W_I$. [F1, F4, F5, F7, F11]

1.4 *Additivity on the left coset.* Let $d\in W^I$. By [F2] one has $\ell(ds)>\ell(d)$ for all $s\in I$, so $d$ is the minimal representative of the left coset $dW_I$ characterized in [F1], and therefore $\ell(du)=\ell(d)+\ell(u)$ for all $u\in W_I$. [F1, F2]

2.1 *The induction step.* Assume $n:=\ell(t)\ge2$ in the situation of step 1.3 and that the claim holds for all roots in $\Phi_+\cap V_I$ whose reflection has length $<n$. Since $1=B(\varphi,\varphi)=\sum_{r\in I}\lambda_rB(\varphi,e_r)$ by [F3] and [F4], and $\lambda_r>0$ for $r\in\operatorname{supp}\varphi$, there is $r\in\operatorname{supp}\varphi\subseteq I$ with $B(\varphi,e_r)>0$; fix such an $r$. If $|\operatorname{supp}\varphi|=1$, then $\varphi=\lambda_re_r$ with $\lambda_r>0$, and $1=B(\varphi,\varphi)=\lambda_r^2B(e_r,e_r)=\lambda_r^2$ gives $\lambda_r=1$, that is $\varphi=e_r$ and $t=t_{e_r}=r$; then $\ell(t)=1$, against $n\ge2$, so necessarily $|\operatorname{supp}\varphi|\ge2$. Put $\varphi':=\rho(t)e_r=r_\varphi(e_r)=e_r-2B(\varphi,e_r)\varphi$; its coefficient at each $r'\in\operatorname{supp}\varphi\setminus\{r\}$ equals $-2B(\varphi,e_r)\lambda_{r'}<0$, and this set is nonempty, so $\varphi'\in\Phi_-$ by [F5]. Put $\psi:=\rho(r)\varphi=\varphi-2B(\varphi,e_r)e_r\in\Phi\cap V_I$; its coefficient at each $r'\in\operatorname{supp}\varphi\setminus\{r\}$ is $\lambda_{r'}>0$, so $\psi\notin\Phi_-$ and hence $\psi\in\Phi_+$ by [F5], while $\psi\in V_I$ because $\varphi,e_r\in V_I$. By the dictionary [F7], $t_\psi=rtr$. Since $\rho(t)e_r=\varphi'\in\Phi_-$, the root-length criterion [F6] gives $\ell(tr)<\ell(t)$ and then $\ell(tr)=\ell(t)-1$ by [F8]; by [F9], $\ell(rt)=\ell(tr)=\ell(t)-1$. Moreover $\rho(rt)e_r=\rho(r)\varphi'$ has at each $r'\in\operatorname{supp}\varphi\setminus\{r\}$ the coefficient $-2B(\varphi,e_r)\lambda_{r'}<0$ of $\varphi'$, because $\rho(r)$ alters only the coefficient of $e_r$; hence $\rho(rt)e_r\in\Phi_-$ by [F5], and the criterion [F6] with $w:=rt$ gives $\ell(t_\psi)=\ell(rtr)<\ell(rt)$, that is $\ell(t_\psi)=\ell(t)-2$ by [F8]. Since $\psi\in\Phi_+\cap V_I$ and $\ell(t_\psi)<n$, the induction hypothesis applies and yields $t_\psi\in W_I$; then $t=rt_\psi r\in W_I$ because $r\in I$. [F3, F4, F5, F6, F7, F8, F9, step 1.3]

2.2 *The two descriptions of the quotients.* Let $d\in W$. If $d\in W^I$, then by step 1.4 $\ell(dv)=\ell(d)+\ell(v)\ge\ell(d)$ for every $v\in W_I$, with equality if and only if $\ell(v)=0$, that is $v=1$. Conversely, if $\ell(d)\le\ell(dv)$ for all $v\in W_I$, take $v=s\in I$: then $\ell(ds)\ge\ell(d)$, and $\ell(ds)\ne\ell(d)$ by [F8], so $\ell(ds)>\ell(d)$ for all $s\in I$, that is $d\in W^I$ by [F2]; hence $W^I=\{d:\ell(d)\le\ell(dv)\text{ for all }v\in W_I\}$. Applying this to $d^{-1}$ and using $W^I=({}^IW)^{-1}$ from [F2] and the identities $(d^{-1}v)^{-1}=v^{-1}d$ and $\ell(x^{-1})=\ell(x)$ from [F9], we get $d\in{}^IW$ if and only if $\ell(d)\le\ell(v^{-1}d)$ for all $v\in W_I$; as $v$ runs over $W_I$ so does $v^{-1}$, so this is the second displayed description. [F2, F8, F9, step 1.4]

3.1 *The converse containment.* We prove by strong induction on $n$ that every $\varphi\in\Phi_+\cap V_I$ satisfies $t_\varphi\in W_I$, the cases $n=1$ and $n\ge2$ being steps 1.3 and 2.1; the induction is well founded because the length values are natural numbers. First let $\varphi\in\Phi_+\cap V_I$. Then $t_\varphi\in W_I$, and its positive root is $\varphi$. Strong exchange furnishes a representation with letters in $I$: choosing a reduced expression $t_\varphi=s_1\cdots s_m$ of $t_\varphi$ inside $W_I$ with all $s_i\in I$ by [F1] and applying strong exchange [F7] to $w:=t_\varphi$ and the reflection $t_\varphi$, whose square is $1$ and has length $0<m$, produces an index $i$ with $t_\varphi=s_1\cdots s_{i-1}s_is_{i-1}\cdots s_1$ and $\varphi=\rho(s_1\cdots s_{i-1})e_{s_i}$ with $s_1\cdots s_{i-1}\in W_I$ and $s_i\in I$. Hence $\varphi\in\Phi_I$ for positive $\varphi$. If instead $\varphi\in\Phi_-\cap V_I$, apply this argument to $-\varphi=\rho(w)e_s$ with $w\in W_I$, $s\in I$; then $\varphi=\rho(ws)e_s\in\Phi_I$, since $\rho(s)e_s=-e_s$ and $ws\in W_I$ by [F4]. Therefore $\Phi\cap V_I\subseteq\Phi_I$. [F1, F4, F5, F7, step 1.3, step 2.1]

3.2 *Every coset has a unique minimum.* Let $w\in W$ and let $d\in W^I$ be the unique element of $W^I\cap wW_I$, so that $w=dv$ with $v\in W_I$ by [F1] and $wW_I=dW_I$. Every $x\in dW_I$ has the form $x=du$ with $u\in W_I$, and by step 1.4, $\ell(x)=\ell(d)+\ell(u)\ge\ell(d)$, with equality if and only if $\ell(u)=0$, that is $u=1$ and $x=d$. If $d'\in W^I\cap dW_I$ is a second such element, write $d'=du'$ and $d=d'u$ with $u,u'\in W_I$ (possible since $d'W_I=dW_I$); step 1.4 gives $\ell(d')=\ell(d)+\ell(u')$ and $\ell(d)=\ell(d')+\ell(u)$, so $\ell(u)=\ell(u')=0$, $u=u'=1$ and $d=d'$. Thus $dW_I=wW_I$ contains exactly one element of $W^I$, namely its unique element of minimum length, which proves the right-handed assertions of (3). The left-handed assertions follow by the same argument applied to the inverses, using the description of ${}^IW$ in step 2.2 and the identities $\ell(x^{-1})=\ell(x)$ of [F9]. [F1, F2, F9, step 1.4, step 2.2]

4.1 *Conclusion of (2).* Combining steps 1.2 and 3.1 gives $\Phi_I=\Phi\cap V_I$, which by [F11] is the displayed set of roots that are real linear combinations of the $e_s$, $s\in I$. Since $\Phi=\Phi_+\sqcup\Phi_-$ by [F5], intersecting with $V_I$ gives $\Phi_I=\Phi_I^+\sqcup\Phi_I^-$ for $\Phi_I^\pm=\Phi_I\cap\Phi^\pm=\Phi^\pm\cap V_I$. For the reflection identification: if $\alpha\in\Phi_I^+$, say $\alpha=\rho(w)e_s$ with $w\in W_I$, $s\in I$, then $t_\alpha=wsw^{-1}\in W_I$ by [F7]; conversely, if $t\in W_I\cap T$, then $t=t_\alpha$ for the unique $\alpha\in\Phi_+$ by [F7], and choosing a reduced expression $t=s_1\cdots s_m$ inside $W_I$ with letters in $I$ by [F1] and applying strong exchange [F7] to $w:=t$ and the reflection $t$ exhibits $t=s_1\cdots s_{i-1}s_is_{i-1}\cdots s_1$ and $\alpha=\rho(s_1\cdots s_{i-1})e_{s_i}$, a root in $\Phi_I$ because $s_1\cdots s_{i-1}\in W_I$ and $s_i\in I$. Hence the reflections of $W_I$ are exactly the $t_\alpha$ with $\alpha\in\Phi_I^+$. Together with steps 1.1 and 3.2 this proves (1), (2) and (3); no Axiom of Choice is used: each proof fixes finitely many witnesses, and no simultaneous selection from an arbitrary family is required. [F1, F5, F7, F11, step 1.2, step 3.1] ∎

## Remarks

- The induction of steps 1.3-2.1 is Qi's proof of $\Phi_I=\Phi\cap V_I$ in [[def-cg-real-coxeter-form-and-reflection]]'s notation: the descended root $\rho(r)\varphi$ stays positive and shortens the reflection by two, which is why the criterion of [[thm-cg-root-length-criterion-and-faithfulness]] is invoked twice with opposite roles of the two factors.
- The argument nowhere inverts $B$: only the unit-norm property of roots $B(\alpha,\alpha)=1$ is used, so degenerate and indefinite Coxeter forms are covered. The selection of $r$ with $B(\varphi,e_r)>0$ is from the fixed finite set $I$; no ordering on $S$ is assumed. Strong exchange then supplies its unique exchange index.
