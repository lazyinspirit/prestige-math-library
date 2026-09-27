---
id: lem-fusion-control-and-centralizer-transitivity
kind: lemma
title: "Fusion control and centralizer transitivity are equivalent"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-sylow-p-subgroup, thm-sylow-second-theorem, def-centralizer-of-a-subgroup, def-normalizer-of-a-subgroup, lem-centralizers-and-normalizers-are-subgroups, thm-conjugation-is-an-automorphism, lem-group-inverse-laws, def-subgroup, def-conjugacy-class-and-centralizer]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Paul Flavell, An Introduction to Transfer and Fusion in Finite Groups, §§2–5"
      url: "https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf"
      locator: "§§2.1–2.5, 3.1–3.8, 4.1–4.3, 5.5–5.10, PDF pp. 1–15"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $H$ be a finite group, $p$ a prime, and $P\in\operatorname{Syl}_p(H)$
([[def-sylow-p-subgroup]]). The following are equivalent.

(i) $N_H(P)$ controls fusion in $P$ with respect to $H$: whenever $x,y\in P$ and
$y=hxh^{-1}$ for some $h\in H$, there is $u\in N_H(P)$ with $y=uxu^{-1}$.
(ii) For every $x\in P$ with $x\ne e$, the centralizer
$C_H(x)=\{h\in H:hx=xh\}$ acts by conjugation transitively on the set
$\operatorname{Syl}_p(H;x):=\{T\in\operatorname{Syl}_p(H):x\in T\}$ of Sylow
$p$-subgroups of $H$ containing $x$; that is, for any $T_1,T_2\in
\operatorname{Syl}_p(H;x)$ there is $c\in C_H(x)$ with $T_2=T_1^{c}=cT_1c^{-1}$.

## Facts & Assumptions

**Given:** A finite group $H$, a prime $p$, a Sylow $p$-subgroup $P\le H$, and the notation $x^{h}=hxh^{-1}$ of [[def-conjugacy-class-and-centralizer]].

[F1] Sylow $p$-subgroups of $H$ are conjugate, and the conjugate of a Sylow $p$-subgroup by any element of $H$ is again a Sylow $p$-subgroup ([[thm-sylow-second-theorem]], [[def-sylow-p-subgroup]]).

[F2] Conjugation $z\mapsto hzh^{-1}$ is an automorphism, and $(z^{a})^{b}=z^{ba}$, equivalently $z^{ab}=(z^{b})^{a}$; also $(z^{-1})^{a}=(z^{a})^{-1}$ ([[thm-conjugation-is-an-automorphism]], [[lem-group-inverse-laws]], [[def-conjugacy-class-and-centralizer]]).

[F3] $C_H(x)$ and $N_H(P)$ are subgroups of $H$; $z\in C_H(x)$ satisfies $x^{z}=x$, and $u\in N_H(P)$ satisfies $P^{u}=P$ ([[lem-centralizers-and-normalizers-are-subgroups]], [[def-centralizer-of-a-subgroup]], [[def-normalizer-of-a-subgroup]], [[def-subgroup]]).

[F4] If $T\in\operatorname{Syl}_p(H)$, $x\in T$ and $h\in H$, then $T^{h}\in\operatorname{Syl}_p(H)$ and $x^{h}\in T^{h}$; hence conjugation by $h$ carries $\operatorname{Syl}_p(H;x)$ into $\operatorname{Syl}_p(H;x^{h})$, and if $c\in C_H(x)$ then $T^{c}\in\operatorname{Syl}_p(H;x)$ for every $T\in\operatorname{Syl}_p(H;x)$ ([[thm-sylow-second-theorem]], [[def-sylow-p-subgroup]], [[thm-conjugation-is-an-automorphism]]).



## Proof

**Proof technique:** direct.

1.1 (ii) implies (i). Assume (ii), and let $x,y\in P$, $h\in H$ with $y=x^{h}=hxh^{-1}$. If $x=e$ then $y=e=e^{e}$ with $e\in N_H(P)$, so assume $x\ne e$. Then $x=y^{h^{-1}}$ by [F2], so $x\in P\cap P^{h^{-1}}$; by [F1] and [F4] both $P$ and $P^{h^{-1}}$ lie in $\operatorname{Syl}_p(H;x)$, so (ii) provides $c\in C_H(x)$ with $P^{h^{-1}}=P^{c}$. [F1, F2, F4, assume-hyp]

1.2 (i) implies (ii). Assume (i). Let $x\in P$ with $x\ne e$ and let $T\in\operatorname{Syl}_p(H;x)$. By [F1] there is $g\in H$ with $T=P^{g}$; then $x\in P^{g}$ gives $a:=x^{g^{-1}}=g^{-1}xg\in P$, and $a^{g}=x$ by [F2], so $a$ and $x$ are $H$-conjugate elements of $P$ and (i) provides $u\in N_H(P)$ with $a^{u}=x$. [F1, F2, assume-hyp]

2.1 The equality $P^{h^{-1}}=P^{c}$ says $h^{-1}Ph=cPc^{-1}$. Multiplying on the left by $h$ and on the right by $h^{-1}$ gives $P=(hc)P(hc)^{-1}$, so $n:=hc$ satisfies $P^{n}=P$, that is $n\in N_H(P)$. [F2, F3, step 1.1]

3.1 Moreover $x^{n}=(hc)x(hc)^{-1}=h(cxc^{-1})h^{-1}=hxh^{-1}=y$, since $c$ centralizes $x$. So $y$ is conjugate to $x$ by the element $n\in N_H(P)$, which proves (i). [F3, step 2.1]

4.1 Put $v:=ug^{-1}$, so that $v^{-1}=gu^{-1}$ and $g=v^{-1}u$. The identity $a^{u}=x$ reads $u(g^{-1}xg)u^{-1}=x$, that is $x^{v}=x$ by [F2]; hence $v\in C_H(x)$. Moreover $T=P^{g}=P^{v^{-1}u}=(P^{u})^{v^{-1}}=P^{v^{-1}}$ by [F2], since $u\in N_H(P)$; and $v^{-1}\in C_H(x)$. So every member $T$ of $\operatorname{Syl}_p(H;x)$ equals $P^{c}$ for the element $c:=v^{-1}\in C_H(x)$, which is (ii). ∎ [F2, F3, step 1.2]
