---
id: thm-additivity-of-hilbert-samuel-multiplicity
kind: theorem
title: "Hilbert-Samuel leading coefficients are additive at the top polynomial degree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hilbert-samuel-multiplicity, thm-artin-rees-lemma, cor-length-is-additive-in-short-exact-sequences]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.59.10"
      url: "https://stacks.math.columbia.edu/tag/00K4"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Proposition (20.20)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Statement

Let $(R,\mathfrak m)$ be a Noetherian local ring, let $I\subseteq\mathfrak m$
be an ideal of definition, and let
$$
0\to M'\to M\to M''\to0
$$
be a short exact sequence of finite $R$-modules. If $M=0$, put $d=0$;
otherwise put
$$d=\max\{\deg P_{I,M'},\deg P_{I,M},\deg P_{I,M''}\},$$
ignoring a zero module when taking the maximum, and let
$$e_I^{[d]}(N):=d!\,[n^d]P_{I,N}(n),$$
with value $0$ when $N=0$ or $\deg P_{I,N}<d$. Then
$$e_I^{[d]}(M)=e_I^{[d]}(M')+e_I^{[d]}(M'').$$
In particular, if all three nonzero modules have Hilbert-Samuel polynomial of degree $d$, then
$$
e_I(M)=e_I(M')+e_I(M'').
$$

## Facts & Assumptions

**Given:** A Noetherian local ring $(R,\mathfrak m)$, an ideal of definition
$I$, and a short exact sequence $0\to M'\to M\to M''\to0$ of finite modules.

[L1] Artin-Rees gives an exact eventual formula for the filtration induced on the submodule $M'$ ([[thm-artin-rees-lemma]]).

[L2] Length is additive on short exact sequences
([[cor-length-is-additive-in-short-exact-sequences]]).

## Proof

**Proof technique:** direct.


1.1 Artin-Rees as recorded in [L1] gives $c\ge0$ and $N:=M'\cap I^cM$ such that $I^cM'\subseteq N\subseteq M'$ and $$M'\cap I^{n+1}M=I^{n+1-c}N$$ for all large $n$. The exact sequence $$0\to M'/(M'\cap I^{n+1}M)\to M/I^{n+1}M\to M''/I^{n+1}M''\to0$$ and [L2] therefore give $$\chi_{I,M}(n)=\chi_{I,M''}(n)+\chi_{I,N}(n-c)+\ell_R(M'/N)$$ for all large $n$. [L1, L2, given, algebra]


2.1 Put $C:=\ell_R(M'/N)$. The inclusions $I^cM'\subseteq N\subseteq M'$ give $$I^{n+c+1}M'\subseteq I^{n+1}N\subseteq I^{n+1}M',$$ while [L2] gives $$\ell_R(M'/I^{n+1}N)=\chi_{I,N}(n)+C.$$ Consequently $$\chi_{I,M'}(n)\le\chi_{I,N}(n)+C\le\chi_{I,M'}(n+c)$$ for all large $n$. If $M'$ has positive Hilbert-Samuel degree, this squeeze shows that $P_{I,N}$ and $P_{I,M'}$ have the same degree and leading coefficient. If $P_{I,M'}$ has degree zero, the two outer terms in the squeeze are the same constant polynomial, so $P_{I,N}+C=P_{I,M'}$. The same conclusion is immediate when $M'=0$. [L2, step 1.1, algebra]


3.1 The eventual identity in step 1.1 is the polynomial identity $$P_{I,M}(n)=P_{I,M''}(n)+P_{I,N}(n-c)+C.$$ By step 2.1, the polynomial $P_{I,N}(n-c)+C$ has the same degree-$d$ coefficient as $P_{I,M'}$: for positive degree this is invariance of the leading coefficient under a shift, for degree zero it is the constant-polynomial equality, and below degree $d$ both coefficients vanish. Comparing degree-$d$ coefficients therefore gives $$e_I^{[d]}(M)=e_I^{[d]}(M')+e_I^{[d]}(M'').$$ This also covers the all-zero sequence by the convention $d=0$. When all three modules are nonzero of degree $d$, the displayed quantities are their ordinary Hilbert-Samuel multiplicities. [step 1.1, step 2.1, algebra]


4.1 Therefore Hilbert-Samuel leading coefficients are additive in the stated top-degree sense. [step 3.1] ∎
