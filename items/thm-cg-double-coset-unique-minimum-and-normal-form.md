---
id: thm-cg-double-coset-unique-minimum-and-normal-form
kind: theorem
title: "Unique minimal double coset representatives and the additive normal form u-d-v"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: [def-cg-parabolic-quotient-and-two-sided-minima,
       lem-cg-double-coset-descent-reduction-and-minimality,
       lem-cg-double-coset-intersection-parabolic,
       def-hh-coxeter-matrix-word-group-and-length,
       thm-hh-parabolic-minimal-representatives-and-length-additivity, def-group]
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
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
---

## Statement

Let $I,J\subseteq S$, let $d\in{}^IW^J$, and put

$$K:=I\cap dJd^{-1}=\{s\in I:d^{-1}sd\in J\},$$

so that $W_I\cap dW_Jd^{-1}=W_K$ by
[[lem-cg-double-coset-intersection-parabolic]]. Write

$$W_I^K:=\{u\in W_I:\ell(us)>\ell(u)\text{ for all }s\in K\}$$

for the set of elements of $W_I$ with no right descent in $K$ --- the same
construction as in [[def-cg-parabolic-quotient-and-two-sided-minima]] (2),
applied inside the Coxeter system $(W_I,I)$ with its standard parabolic subgroup
$W_K$.

**(1) Unique minimum.** Two elements of ${}^IW^J$ lie in a common double coset
$W_IwW_J$ only if they are equal. Hence, by
[[lem-cg-double-coset-descent-reduction-and-minimality]] (1),(2), every double
coset $W_IwW_J$ contains exactly one element of ${}^IW^J$, namely its unique
element of minimum length; in particular $d$ is uniquely determined by the
double coset $W_IdW_J$.

**(2) The additive normal form.** Every $x\in W_IdW_J$ has a unique
representation

$$x=u\,d\,v\qquad\text{with }u\in W_I^K,\ v\in W_J,$$

and every product $udv$ with $u\in W_I^K$, $v\in W_J$ lies in $W_IdW_J$. Thus

$$W_I^K\times W_J\to W_IdW_J,\qquad (u,v)\mapsto udv$$

is a bijection, and for all $u\in W_I^K$ and $v\in W_J$

$$\ell(udv)=\ell(u)+\ell(d)+\ell(v).$$

**(3) The size of a double coset.** $|W_IdW_J|=|W_I^K|\cdot|W_J|$; and if $W_I$
is finite then $|W_IdW_J|=(|W_I|/|W_K|)\cdot|W_J|$, with the quotient a finite integer and the product interpreted as cardinal multiplication.

**(4) The restriction to $W_I^K$ is necessary.** For arbitrary $u\in W_I$ the
representation $x=udv$ is not unique in general: if $u=u_0z$ is the
factorization of $u$ with $u_0\in W_I^K$ and $z\in W_K$, and
$z':=d^{-1}zd\in W_J$, then

$$udv=u_0\,d\,(z'v),\qquad u_0\in W_I^K,\ z'v\in W_J,$$

and $z'\neq1$ whenever $z\neq1$; so the same $x$ has two representations of the
form $udv$ with different first factors unless $u\in W_I^K$ already. This is why
the transversal restriction in (2) is recorded explicitly and may not be
dropped.

## Facts & Assumptions

**Given:** a finite Coxeter matrix $(S,m)$ with presented group $W$ and length $\ell$, subsets $I,J\subseteq S$, an element $d\in{}^IW^J$, the subset $K=\{s\in I:d^{-1}sd\in J\}$ and the transversal $W_I^K$ of the statement.

[F1] Inside the Coxeter system $(W_I,I)$ with standard parabolic subgroup $W_K$: $W_I^K=\{u\in W_I:\ell(us)>\ell(u)\text{ for all }s\in K\}$ is the set of minimal-length representatives of the left cosets $uW_K$ in $W_I$; every $u\in W_I$ has a unique factorization $u=u_0z$ with $u_0\in W_I^K$, $z\in W_K$, and then $\ell(u)=\ell(u_0)+\ell(z)$, while $\ell(u_0z')=\ell(u_0)+\ell(z')$ for all $z'\in W_K$; more generally $W_J=\{w:S(w)\subseteq J\}$ for $J\subseteq S$, every left coset $aW_J$ has a unique minimal element, and $\ell(du)=\ell(d)+\ell(u)$ for a minimal representative $d\in W^J$ of $aW_J$ and $u\in W_J$, with the mirrored statement for right cosets: for the minimal representative $d$ of a right coset $W_Ja$ one has $\ell(ud)=\ell(u)+\ell(d)$ for all $u\in W_J$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]]).

[F2] The element $x=d^{-1}zd$ of the statement lies in $W_J$: indeed $W_I\cap dW_Jd^{-1}=W_K$ and $d^{-1}W_Kd=W_{d^{-1}Kd}\subseteq W_J$ ([[lem-cg-double-coset-intersection-parabolic]]).

[F3] Every double coset $W_IwW_J$ contains an element of ${}^IW^J$; for $d\in{}^IW^J$ one has $\ell(d)\le\ell(x)$ for all $x\in W_IdW_J$ with equality if and only if $x=d$; and every $x\in W_IdW_J$ has the form $x=adc$ with $a\in W_I$, $c\in W_J$ and $\ell(x)=\ell(a)+\ell(d)+\ell(c)$ ([[lem-cg-double-coset-descent-reduction-and-minimality]]).

[F4] For $w=s_1\cdots s_k$ one has $\ell(w)\le k$, so $\ell(uv)\le\ell(u)+\ell(v)$ for all $u,v\in W$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F5] Multiplication in $W$ is associative and equalities in $W$ may be multiplied and cancelled; in particular conjugation $w\mapsto cwc^{-1}$ is injective ([[def-group]]).

## Proof

**Proof technique:** direct; existence by factoring inside $W_I$ and $W_J$, uniqueness by the intercoset intersection $W_K$, then the cardinality and necessity clauses.

1.1 *Existence of the normal form.* Let $x\in W_IdW_J$. By [F3] write $x=adc$ with $a\in W_I$, $c\in W_J$ and $\ell(x)=\ell(a)+\ell(d)+\ell(c)$; by [F1] factor $a=u_0z$ with $u_0\in W_I^K$, $z\in W_K$ and $\ell(a)=\ell(u_0)+\ell(z)$. Put $z':=d^{-1}zd\in W_J$ by [F2], which satisfies $zd=dz'$ because $z=d z' d^{-1}$, and put $v:=z'c\in W_J$. Then $x=u_0zdc=u_0 d z'c=u_0dv$ with $u_0\in W_I^K$, $v\in W_J$, so every element of the double coset has a representation of the required form. [F1, F2, F3, F5]

1.2 *Uniqueness of the first factor I: the intersection.* Suppose $udv=u'dv'$ with $u,u'\in W_I^K$ and $v,v'\in W_J$. Left-multiplying by $u^{-1}$ and right-multiplying by $(v')^{-1}d^{-1}$ and cancelling gives $u^{-1}u'=d\,v\,(v')^{-1}d^{-1}\in W_I\cap dW_Jd^{-1}$, which equals $W_K$ by [F2]; hence $u'=u\,z$ for some $z\in W_K$. Since $u,u'\in W_I^K$ and $W_I^K$ consists of the minimal representatives of the left cosets $uW_K$ in $W_I$ by [F1], $u=u'$; substituting back gives $dv=dv'$ and hence $v=v'$ by cancellation, so the representation has at most one pair of factors and the map of (2) is injective. [F1, F2, F5]

2.1 *Additivity along the representation.* Let $x\in W_IdW_J$ and write $x=adc$ with $a\in W_I$, $c\in W_J$ as in [F3], and factor $a=u_0z$, $z'=d^{-1}zd$, $v=z'c$ as in step 1.1. First $\ell(z)=\ell(z')$: indeed $zd=dz'$, while $\ell(zd)=\ell(z)+\ell(d)$ because $z\in W_K\subseteq W_I$ and $d\in{}^IW$, and $\ell(dz')=\ell(d)+\ell(z')$ because $d\in W^J$ and $z'\in W_J$, both by [F1]. Estimating with subadditivity [F4], $\ell(x)\le\ell(u_0)+\ell(d)+\ell(v)\le\ell(u_0)+\ell(d)+\ell(z')+\ell(c)=\ell(u_0)+\ell(z)+\ell(d)+\ell(c)=\ell(a)+\ell(d)+\ell(c)=\ell(x)$, where the last equality is [F3]; hence every inequality is an equality, so $\ell(u_0dv)=\ell(u_0)+\ell(d)+\ell(v)$ for the representation of step 1.1, and also $\ell(v)=\ell(z')+\ell(c)$. For any prescribed $u\in W_I^K$, $v\in W_J$, apply this construction to $x=udv$; uniqueness in step 1.2 identifies the constructed pair with $(u,v)$, proving additivity for every such pair. [F1, F3, F4, step 1.1, step 1.2]

2.2 *The size formulas.* The map $W_I^K\times W_J\to W_IdW_J$, $(u,v)\mapsto udv$, is surjective by step 1.1 and injective by step 1.2, hence a bijection, so $|W_IdW_J|=|W_I^K|\cdot|W_J|$. If $W_I$ is finite, the factorization $u=u_0z$ of [F1] is a bijection $W_I^K\times W_K\to W_I$, so $|W_I^K|=|W_I|/|W_K|$ and therefore $|W_IdW_J|=(|W_I|/|W_K|)\cdot|W_J|$, also when $W_J$ is infinite. [F1, step 1.1, step 1.2]

3.1 *Uniqueness of the minimum.* Suppose $d,d'\in{}^IW^J$ lie in a common double coset $\Omega:=W_IdW_J=W_Id'W_J$. By [F3] each of $d,d'$ is a minimum-length element of $\Omega$, so $\ell(d)=\ell(d')$; applying the representation of steps 1.1 and 2.1 with $x:=d'$ and base point $d$ gives $d'=udv$ with $u\in W_I^K$, $v\in W_J$ and $\ell(d')=\ell(u)+\ell(d)+\ell(v)$. Hence $\ell(u)+\ell(v)=0$, so $u=v=1$ and $d'=d$. Consequently each double coset contains at most one element of ${}^IW^J$; by [F3] (or its part (1)) it contains at least one, namely its unique minimum. [F3, step 1.1, step 2.1]

4.1 *The normal form and the necessity of the restriction.* By steps 1.1, 1.2 and 2.1 every $x\in W_IdW_J$ has a unique representation $x=udv$ with $u\in W_I^K$, $v\in W_J$, and then $\ell(x)=\ell(u)+\ell(d)+\ell(v)$; conversely every product $udv$ with $u\in W_I^K\subseteq W_I$ and $v\in W_J$ lies in $W_IdW_J$ by the definition of the double coset, so the displayed map is a bijection and (2) holds. For (4) let $u\in W_I$ and $v\in W_J$ be arbitrary and factor $u=u_0z$ with $u_0\in W_I^K$, $z\in W_K$ by [F1]; put $z':=d^{-1}zd\in W_J$ by [F2]. Then $udv=u_0zdv=u_0dz'v=u_0d(z'v)$ with $u_0\in W_I^K$ and $z'v\in W_J$, so $x=udv$ has two representations with first factors $u$ and $u_0$; and $z'\neq1$ whenever $z\neq1$, because $z=d z'd^{-1}$ and conjugation by $d$ is injective by [F5], so $u\neq u_0$ whenever $z\neq1$, that is, whenever $u\notin W_I^K$. This is (4) and completes the proof of (1)-(4); no Axiom of Choice is used. [F1, F2, F5, step 1.1, step 1.2, step 2.1] ∎

## Remarks

- The theorem is the algebraic heart of the double coset calculus: (1) and (3) say that the double cosets $W_IwW_J$ are parameterized by ${}^IW^J$, and (2) upgrades the transversal to a normal form with exact length additivity. The counterexample in (4) is the classical failure of uniqueness once the transversal condition on the first factor is dropped.
- The finite formula of (3) is the parabolic analogue of $|W_IwW_J|=|W_I||W_J|/|W_I\cap wW_Jw^{-1}|$; the intersection is written $W_K$ by [[lem-cg-double-coset-intersection-parabolic]].
