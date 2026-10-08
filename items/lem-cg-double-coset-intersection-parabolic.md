---
id: lem-cg-double-coset-intersection-parabolic
kind: lemma
title: "The parabolic intersection W_I cap dW_Jd inverse for d in ^IW^J"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 13
deps: [def-cg-parabolic-quotient-and-two-sided-minima,
       thm-cg-parabolic-intersections-and-coset-factorization,
       lem-cg-double-coset-descent-reduction-and-minimality,
       def-hh-coxeter-matrix-word-group-and-length,
       thm-hh-coxeter-exchange-deletion-and-faithfulness,
       thm-hh-parabolic-minimal-representatives-and-length-additivity,
       def-cg-canonical-reflection-homomorphism,
       thm-cg-root-length-criterion-and-faithfulness,
       thm-cg-root-inversion-formulas-and-strong-exchange, def-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  scraped: []
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised arXiv edition of the CRM monograph, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154v2"
    - title: "Sara Billey, Matjaz Konvalinka, T. Kyle Petersen, William Slofstra and Bridget Tenner, Parabolic double cosets in Coxeter groups (arXiv:1612.00736v2)"
      url: "https://arxiv.org/pdf/1612.00736v2"
    - title: "Dongwen Qi, A Note on Parabolic Subgroups of a Coxeter Group (arXiv:math/0512408)"
      url: "https://arxiv.org/pdf/math/0512408"
---

## Statement

Let $(S,m)$, $W$, $\ell$ be as in
[[def-cg-parabolic-quotient-and-two-sided-minima]], let $I,J\subseteq S$, and
let $d\in{}^IW^J$. Put

$$K:=I\cap dJd^{-1}=\{s\in I:d^{-1}sd\in J\},$$

where $dJd^{-1}=\{djd^{-1}:j\in J\}\subseteq T$. Let $V_I$, $\Phi_I$ be as in
[[thm-cg-parabolic-intersections-and-coset-factorization]] (2) and let
$\alpha\mapsto t_\alpha$ be the root-reflection dictionary of
[[thm-cg-root-inversion-formulas-and-strong-exchange]] (1).

**(1) The intersection.** $W_I\cap dW_Jd^{-1}=W_K$. Conjugating by $d^{-1}$ gives

$$d^{-1}W_Kd=W_{d^{-1}Kd},\qquad d^{-1}Kd=\{d^{-1}sd:s\in K\}\subseteq J,$$

and equivalently $W_J\cap d^{-1}W_Id=W_{d^{-1}Kd}$.

**(2) The descent form.** If $y\in W_I\cap dW_Jd^{-1}$ and $y=s_1\cdots s_p$ is
a reduced expression of $y$ with letters $s_1,\dots,s_p\in I$, then

$$d^{-1}s_id\in J\qquad\text{for every }i=1,\dots,p.$$

**(3) The conjugated positive root is simple.** Let $s\in I$. Then
$z:=d^{-1}sd$ is a reflection of $W$ (that is, $z\in T$), its root is
$\rho(d)^{-1}e_s\in\Phi_+$, and $z\in J$ if and only if this root is one of the
simple roots $e_j$, $j\in J$. Moreover, if $z\in W_J$ then already $z\in J$: a
reflection of the form $d^{-1}sd$ with $s\in I$ that lies in $W_J$ is
necessarily a *simple* reflection of the parabolic root system
$\Phi_J=\Phi\cap V_J$ of
[[thm-cg-parabolic-intersections-and-coset-factorization]] (2), never a
non-simple positive combination such as $e_j+e_{j'}$.

## Facts & Assumptions

**Given:** a finite Coxeter matrix $(S,m)$ with presented group $W$ and length $\ell$, subsets $I,J\subseteq S$, an element $d\in{}^IW^J$ and the subset $K=\{s\in I:d^{-1}sd\in J\}$.

[F1] $W_I=\langle s:s\in I\rangle$, ${}^IW=\{w:\ell(sw)>\ell(w)\text{ for all }s\in I\}$, $W^J=\{w:\ell(ws)>\ell(w)\text{ for all }s\in J\}$ and ${}^IW^J={}^IW\cap W^J$; in particular $d\in{}^IW^J$ satisfies $\ell(sd)>\ell(d)$ for $s\in I$ and $\ell(ds)>\ell(d)$ for $s\in J$ ([[def-cg-parabolic-quotient-and-two-sided-minima]]).

[F2] $W_J=\langle J\rangle=\{w:S(w)\subseteq J\}$, $W_J\cap S=J$, $(W_J,J)$ is a Coxeter system with intrinsic length $\ell|_{W_J}$, every left coset $aW_J$ has a unique minimal element $d$, characterized by $\ell(ds)>\ell(d)$ for $s\in J$ and satisfying $\ell(du)=\ell(d)+\ell(u)$ for all $u\in W_J$, and dually $\ell(ud)=\ell(u)+\ell(d)$ for the minimal representative $d\in{}^JW$ of a right coset and all $u\in W_J$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]]).

[F3] For $d\in{}^IW^J$, every $x\in W_IdW_J$ admits some factorization $x=udv$ with $u\in W_I$, $v\in W_J$ and $\ell(x)=\ell(u)+\ell(d)+\ell(v)$; moreover $\ell(d)\le\ell(x)$ for all $x\in W_IdW_J$ ([[lem-cg-double-coset-descent-reduction-and-minimality]]).

[F4] Strong exchange: if $w=w_1\cdots w_n$ is a reduced expression and $t\in T$ satisfies $\ell(tw)<\ell(w)$, then there is a unique index $i$ with $tw=w_1\cdots\widehat{w_i}\cdots w_n$ and $t=w_1\cdots w_{i-1}w_iw_{i-1}\cdots w_1$ ([[thm-cg-root-inversion-formulas-and-strong-exchange]]).

[F5] The root-reflection dictionary: for $\alpha\in\Phi$ and $w\in W$, $s\in S$ with $\alpha=\rho(w)e_s$ the element $t_\alpha:=wsw^{-1}$ is well defined, $t_{\rho(w)\alpha}=wt_\alpha w^{-1}$, the map $\Phi_+\to T$, $\alpha\mapsto t_\alpha$, is a bijection and $t_\alpha=t_\beta$ if and only if $\alpha=\pm\beta$ ([[thm-cg-root-inversion-formulas-and-strong-exchange]]).

[F6] For all $w\in W$ and $s\in S$: $\ell(ws)>\ell(w)\iff\rho(w)e_s\in\Phi_+$ and $\ell(ws)<\ell(w)\iff\rho(w)e_s\in\Phi_-$ ([[thm-cg-root-length-criterion-and-faithfulness]]).

[F7] $T=\{wsw^{-1}:w\in W,\ s\in S\}$, so every conjugate $d^{-1}sd$ of a simple reflection is a reflection ([[def-cg-canonical-reflection-homomorphism]]).

[F8] $\Phi_J=\Phi\cap V_J$, and the reflections lying in $W_J$ are exactly the $t_\alpha$ with $\alpha\in\Phi_J^+$; in particular the simple roots $e_j$, $j\in J$, correspond to the simple reflections of $W_J$, and a reflection of $W_J$ whose positive root is not any $e_j$ ($j\in J$) cannot have length one: by [F2] a length-one element lies in $J$, and [F5] then identifies its positive root with $e_j$ ([[thm-cg-parabolic-intersections-and-coset-factorization]]).

[F9] For $w=s_1\cdots s_k$ one has $\ell(w)\le k$, so $\ell(uv)\le\ell(u)+\ell(v)$, and $\ell(w^{-1})=\ell(w)$ with $(ab)^{-1}=b^{-1}a^{-1}$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-group]]).

## Proof

**Proof technique:** direct; strong exchange at the first letter of a reduced expression, then iteration along the expression.

1.1 *The easy inclusion and the conjugation identities.* If $s\in K$, then $s\in I\subseteq W_I$ and $d^{-1}sd\in J$, so $s=d(d^{-1}sd)d^{-1}\in dW_Jd^{-1}$; hence $W_K\subseteq W_I\cap dW_Jd^{-1}$. Conjugation by $d^{-1}$ is an isomorphism of groups carrying the generating set $K$ to $d^{-1}Kd$, so $d^{-1}W_Kd=W_{d^{-1}Kd}$, and $d^{-1}Kd\subseteq J$ holds by the definition of $K$. Conjugating the coming equality $W_I\cap dW_Jd^{-1}=W_K$ by $d^{-1}$ will give $W_J\cap d^{-1}W_Id=W_{d^{-1}Kd}$. [F1, F7]

1.2 *The key step: the first letter conjugated lies in $W_J$.* Let $y\in W_I\cap dW_Jd^{-1}$ and let $y=s_1\cdots s_p$ be a reduced expression with $p\ge1$ and all $s_i\in I$ by [F2]; put $\tilde y:=d^{-1}yd\in W_J$ and write $\tilde y=\tilde y_1\cdots\tilde y_p$ for a reduced expression of $\tilde y$. Then $\ell(y)=\ell(\tilde y)=p$: indeed $yd=d\tilde y$, while $\ell(yd)=\ell(y)+\ell(d)$ because $y\in W_I$, $d\in{}^IW$, and $\ell(d\tilde y)=\ell(d)+\ell(\tilde y)$ because $d\in W^J$, $\tilde y\in W_J$, both by [F2]. Consequently the word $s_1\cdots s_p$ followed by a reduced word $a_1\cdots a_q$ of $d$, and the word $a_1\cdots a_q$ followed by $\tilde y_1\cdots\tilde y_p$, are two reduced expressions of the same element $yd=d\tilde y$ of length $\ell(d)+p$, where $q=\ell(d)$. The element $s_1$ is a left descent of $yd$: $s_1y=s_2\cdots s_p$, so $\ell(s_1\cdot yd)=\ell(s_1y)+\ell(d)=(p-1)+\ell(d)<\ell(yd)$, using the additivity of [F2] and [F9] for $\ell(s_1y)=p-1$. Applying strong exchange [F4] to the reduced expression $a_1\cdots a_q\tilde y_1\cdots\tilde y_p$ of $yd$ and the reflection $s_1$ gives a unique index $i$ with $s_1(yd)$ equal to that word with its $i$-th letter deleted, and $s_1=a_1\cdots a_{i-1}a_ia_{i-1}\cdots a_1$ if $i\le q$, while $s_1=X\tilde y_jX^{-1}$ with $X:=d\tilde y_1\cdots\tilde y_{j-1}$ if $i=q+j$. The first case is impossible: then the deleted word exhibits $d_i:=a_1\cdots a_{i-1}a_{i+1}\cdots a_q$ with $d_i\tilde y=(s_2\cdots s_p)d$, hence $d_i=(s_2\cdots s_p)\,d\,\tilde y^{-1}\in W_IdW_J$, while $\ell(d_i)\le q-1<q=\ell(d)$ by [F9], contradicting the minimality of $d$ in $W_IdW_J$ given by [F3]. Hence $i=q+j$ for some $j$, and substituting $X=d\tilde y_1\cdots\tilde y_{j-1}$ gives $d^{-1}s_1d=\tilde y_1\cdots\tilde y_{j-1}\tilde y_j\tilde y_{j-1}\cdots\tilde y_1\in W_J$, a conjugate in $W_J$ of the letter $\tilde y_j\in J$. [F1, F2, F3, F4, F9]

1.3 *The conjugated root is positive.* Let $s\in I$ and $z:=d^{-1}sd$. Then $z\in T$ by [F7], and $z=t_{\rho(d)^{-1}e_s}$ by the dictionary [F5], since $d^{-1}sd=d^{-1}t_{e_s}d=t_{\rho(d^{-1})e_s}$. The root $\rho(d)^{-1}e_s$ lies in $\Phi_+$: because $d\in{}^IW$ we have $\ell(sd)>\ell(d)$ by [F1], and $\ell(sd)=\ell(d^{-1}s)$ and $\ell(d)=\ell(d^{-1})$ by [F9], so the root-length criterion [F6] applied to $w:=d^{-1}$, $s$ gives $\rho(d^{-1})e_s=\rho(d)^{-1}e_s\in\Phi_+$. [F1, F5, F6, F7, F9]

2.1 *Length one forces simplicity.* Let $s\in I$ and suppose $z:=d^{-1}sd\in W_J$. Repeating the length computation of step 1.2 with $(y,\tilde y)$ replaced by $(s,z)$ is legitimate because $s\in W_I$, $z\in W_J$ and $sd=dz$: it gives $\ell(z)=\ell(s)=1$. An element of $W_J$ of length one is a product of one generator, hence lies in $W_J\cap S=J$ by [F2]. Applying this to the first letter of step 1.2, $s_1\in K$; indeed $d^{-1}s_1d\in W_J$ there, so $d^{-1}s_1d\in J$ and $s_1\in I$. [F1, F2, F9, step 1.2]

2.2 *The root of a conjugate that lies in $J$.* Let $s\in I$ and let $\varphi:=\rho(d)^{-1}e_s\in\Phi_+$ be the root of $z=d^{-1}sd$ from step 1.3, so that $z=t_\varphi$. If $z\in J$, then $z=j=t_{e_j}$ for an element $j\in J$, so $t_\varphi=t_{e_j}$; by [F5] $\varphi=\pm e_j$, and since both $\varphi$ and $e_j$ lie in $\Phi_+$ while $\Phi_+$ and $\Phi_-=-\Phi_+$ are disjoint, $\varphi=e_j$. Conversely, if $\varphi=e_j$ with $j\in J$, then $z=t_{e_j}=j\in J$. [F5, step 1.3]

3.1 *The intersection.* Let $y\in W_I\cap dW_Jd^{-1}$ with reduced expression $y=s_1\cdots s_p$, letters in $I$, and write $y=d\tilde yd^{-1}$ with $\tilde y\in W_J$. If $p=0$, then $y=1\in W_K$ and there is nothing to prove, so assume $p\ge1$. By step 2.1 the first letter $s_1$ lies in $K$, i.e. $d^{-1}s_1d\in J$; then $y':=s_1y=s_2\cdots s_p$ satisfies $y'\in W_I$ and $y'=d\,(d^{-1}s_1d)\,\tilde y\,d^{-1}\in dW_Jd^{-1}$, and it has length $p-1$, because $\ell(y')\le p-1$ by [F9] and $p=\ell(y)=\ell(s_1y')\le1+\ell(y')$. Iterating this argument through the suffixes shows $d^{-1}s_id\in J$, hence $s_i\in K$, for every $i=1,\dots,p$. Thus $y\in W_K$, which proves (2) and, together with the inclusion of step 1.1, gives $W_I\cap dW_Jd^{-1}=W_K$, that is (1) and its conjugation identities. [F1, F2, F9, step 1.1, step 2.1]

4.1 *Conclusion of (3).* Let $s\in I$. By step 1.3 the element $z=d^{-1}sd$ lies in $T$ with root $\varphi=\rho(d)^{-1}e_s\in\Phi_+$; by step 2.2 one has $z\in J$ if and only if $\varphi=e_j$ for some $j\in J$. If instead $z\in W_J$, then by step 2.1 (applied to this $s$) $\ell(z)=1$ and $z\in W_J\cap S=J$ by [F2], so here too $\varphi=e_j$ for some $j\in J$: the conjugated positive root is then a simple root of $\Phi_J=\Phi\cap V_J$ and never a non-simple positive combination such as $e_j+e_{j'}$, because [F8] shows that every reflection with a non-simple positive root has length $>1$, whereas $\ell(z)=1$. The illustrative sum $e_j+e_{j'}$ need not itself be a root; when it is a root for distinct $j,j'$, it is non-simple. This proves (3) for every $s\in I$. [F2, F5, F8, step 1.3, step 2.1, step 2.2] ∎

## Remarks

- The key step is Lusztig's argument for the intersection of parabolic subgroups: strong exchange at the first letter of a reduced expression of $y\in W_I\cap dW_Jd^{-1}$ either deletes a letter of the middle representative $d$ (impossible by minimality) or exhibits $d^{-1}s_1d$ as a conjugate inside $W_J$ of a letter of $J$.
- The warning in (3) is not vacuous: in a parabolic subsystem of type $A_2$ the sum $e_j+e_{j'}$ *is* a positive root whose reflection $t_{e_j+e_{j'}}$ lies in $W_J$ with length $3$, so "lying in $W_J$" alone would not make the conjugated root simple; it is the length-one conclusion $\ell(d^{-1}sd)=\ell(s)=1$ that forces $z\in J$ and hence $\varphi=e_j$.
