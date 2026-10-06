---
id: def-homflypt-polynomial-from-the-hecke-markov-trace
kind: definition
title: "The HOMFLYPT polynomial from the Hecke Markov trace"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [def-the-homflypt-coefficient-ring, def-exponent-sum-of-a-braid,
       lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units,
       thm-the-ocneanu-markov-trace-exists-and-is-unique,
       def-closure-of-a-geometric-braid, def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice]
justified_by: [thm-the-hecke-trace-construction-is-an-oriented-link-invariant]
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Theo Johnson-Freyd, MATH 448 Reshetikhin-Turaev invariants, lecture notes 15 January 2016, Sections 1-3 (the Ocneanu trace normalization and the HOMFLYPT construction)"
      url: "https://categorified.net/RTinvariants/Jan15.pdf"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.3 (printed pp. 47-49): the HOMFLYPT normalization from the Hecke trace"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Definition

Assume AC for the arbitrary-braid closure convention. Let $R$ be the coefficient ring of [[def-the-homflypt-coefficient-ring]] with
its elements $v,z,s,u,l,m$ and the relations $s^2=v$,
$u^2=z_-/z$, $l=us$, $m=s-s^{-1}$, and let $\beta\in B_n$ with closure
$\widehat\beta$ ([[def-closure-of-a-geometric-braid]]). Write $e(\beta)$ for
the exponent sum of [[def-exponent-sum-of-a-braid]],
$\pi_n:B_n\to H(n)^{\times}$ for the homomorphism of
[[lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units]], and
$\operatorname{tr}_n$ for the Ocneanu trace of
[[thm-the-ocneanu-markov-trace-exists-and-is-unique]]. The **HOMFLYPT
polynomial from the Hecke Markov trace** is
$$P(\widehat\beta):=u^{e(\beta)}\,\alpha^{\,n-1}\, \operatorname{tr}_n\bigl(\pi_n(\beta)\bigr)\in R, \qquad \alpha:=(uz)^{-1},$$
for $n\ge1$. For the empty link, the closure of the unique braid in $B_0$, set $P(\varnothing):=\alpha^{-1}=uz$ separately; no $\operatorname{tr}_0$ is used. In the localization $R[m^{-1}]$, the identity
$l^{-1}-l=m\alpha$ from [[def-the-homflypt-coefficient-ring]] gives
$$\alpha=\frac{l^{-1}-l}{m},\qquad u=l\,s^{-1}.$$
Thus the image of $P(\widehat\beta)$ in $R[m^{-1}]$ is
$$u^{e(\beta)}\bigl(\frac{l^{-1}-l}{m}\bigr)^{n-1}\operatorname{tr}_n(\pi_n(\beta)).$$

**Well-formedness.** $e(\beta)$ and $\pi_n(\beta)$ depend only on the braid
element, not on the chosen Artin word, and $\operatorname{tr}_n(\pi_n(\beta))$
lies in $\Lambda$ and is mapped to $R$ by the coefficient-ring structure map; $u$ and $\alpha$ are elements of $R$, with
$u$ a unit, so the displayed product is a well-defined element of $R$.

**Caveats.** The construction as displayed is a function on braids on a fixed
number of strands; it depends on the braid representative a priori, and the
statement that it is independent of the representative of an oriented link
is the content of
[[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]], not of
this definition. The coefficient ring $R$ is the formal localised ring of
[[def-the-homflypt-coefficient-ring]]; the normalisation $\alpha=(uz)^{-1}$
is the one that makes the two Markov stabilisations scale by the same factor,
as proved in clauses (2)-(3) of that invariance theorem.

## Facts & Assumptions

**Given:** AC ([[def-axiom-of-choice]]), the coefficient ring $R$ of [[def-the-homflypt-coefficient-ring]], an integer $n\ge1$, a braid $\beta\in B_n$ and its closure $\widehat\beta$. AC implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]), the hypothesis used by the arbitrary-braid closure convention in [[def-closure-of-a-geometric-braid]]; the trace formula itself is algebraic.

[F1] $R$ is a commutative $\Lambda=\mathbb Z[v^{\pm1},z]$-algebra; $v,z,u,s,l$ are units, $s^2=v$, $u^2=z_-/z$ with $z_-=v^{-1}(z+1-v)$, $m=s-s^{-1}$, and $l^{-1}-l=m(uz)^{-1}$ ([[def-the-homflypt-coefficient-ring]]). In $R[m^{-1}]$ one may divide this identity by $m$.

[F2] The exponent sum $e:B_n\to\mathbb Z$ is the unique homomorphism with $e(\sigma_i)=1$, and for every Artin word $\beta=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_k}^{\varepsilon_k}$ one has $e(\beta)=\sum_r\varepsilon_r$ independently of the word ([[def-exponent-sum-of-a-braid]]).

[F3] The assignment $\sigma_i\mapsto T_i$ induces a group homomorphism $\pi_n:B_n\to H(n)^\times$ with $\pi_n(\sigma_{i_1}^{\varepsilon_1}\cdots \sigma_{i_k}^{\varepsilon_k})=T_{i_1}^{\varepsilon_1}\cdots T_{i_k}^{\varepsilon_k}$ for every Artin word ([[lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units]]).

[F4] The Ocneanu trace is a family of $\Lambda$-linear maps $\operatorname{tr}_n:H(n)\to\Lambda$ satisfying (M1)--(M4), and it satisfies $\operatorname{tr}_{n+1}(xT_ny)=z\operatorname{tr}_n(xy)$ for all $x,y\in H(n)$ ([[thm-the-ocneanu-markov-trace-exists-and-is-unique]]); in particular $\operatorname{tr}_n(\pi_n(\beta))\in\Lambda$, with its image used in $R$.

[F5] The closure $\widehat\beta$ of a braid $\beta\in B_n$ is an oriented link in $S^3$ ([[def-closure-of-a-geometric-braid]]).

## Proof

1.1 **Well-formedness of the factors.** By [F2] the integer $e(\beta)$ depends only on the element $\beta$; by [F3] the element $\pi_n(\beta)\in H(n)^\times$ depends only on $\beta$ and not on the Artin word; by [F4] the trace of that element lies in $\Lambda$ and has a specified image in $R$. The elements $u$ and $\alpha=(uz)^{-1}$ of $R$ exist because $u$ and $z$ are units of $R$ by [F1]. Hence the product $u^{e(\beta)}\alpha^{n-1}\operatorname{tr}_n(\pi_n(\beta))$ is a well-defined element of $R$, and it is computed from $\beta$ alone, not from a word. [F1, F2, F3, F4]

1.2 **The identities in the $(l,m)$ variables.** By [F1] one has $l^{-1}-l=m(uz)^{-1}=m\alpha$. In the localization $R[m^{-1}]$ this gives $\alpha=(l^{-1}-l)/m$. Also $l=us$ and $s$ is a unit, so $u=ls^{-1}$. Substituting these into the definition gives the displayed formula for the image of $P$ in that localization. [F1, algebra]

2.1 **Dependence on the representative.** The closure $\widehat\beta$ is defined for every braid $\beta\in B_n$ by [F5]; the definition produces an element $P(\widehat\beta)\in R$ for each braid, and no claim that two braids with isotopic closures give the same value is made here: that is exactly the statement proved in [[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]]. At $n=0$, the separate value $\alpha^{-1}$ exists because $u,z$ are units; no stabilization starts at $B_0$. [F1, F2, F3, F5, step 1.1] ∎

## Remarks

- The coefficient form in $R[m^{-1}]$ is used by [[thm-the-homflypt-skein-relation]]; the skein identity itself holds already in $R$.

- The normalisation $\alpha=(uz)^{-1}$ is forced by the two Markov moves: the positive stabilisation multiplies the trace by $z$ and the negative one by $z_-$, and the two relations $u\alpha z=1$ and $u^2=z_-/z$ of [[def-the-homflypt-coefficient-ring]] are precisely what make the two normalising factors $u\alpha z$ and $u^{-1}\alpha z_-$ equal to $1$; see [[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]].
- The unknot is the closure of $1\in B_1$ and has $P=1$ because $\operatorname{tr}_1(1)=1$ by (M1); the empty product $n-1=0$ contributes $\alpha^0=1$.
