---
id: lem-finiteness-of-picard-group-of-s-integers
kind: lemma
title: Finiteness of the Picard group of a ring of S-integers
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-ring-of-integers-of-a-number-field
  - def-prime-ideal-valuations-on-fractional-ideals
  - thm-clearing-denominators-for-an-algebraic-number
  - def-ideal-class-group-of-a-domain
  - thm-lagrange
  - thm-finiteness-of-the-number-field-class-group
  - thm-unique-factorisation-of-ideals-in-dedekind-domains
  - cor-ring-of-integers-is-a-dedekind-domain
  - thm-localisation-of-a-dedekind-domain
  - thm-ideal-class-group-is-the-picard-group
  - thm-invertible-ideals-and-rank-one-projective-modules
  - thm-nonzero-ideals-in-dedekind-domains-are-invertible
  - thm-lying-over
  - cor-rational-algebraic-integers-are-integers
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Chapter I §§4.10–4.15, especially the finite class-group and S-unit inputs to Corollary 4.15."
    - title: "Brian Conrad, Abelian Varieties"
      url: "https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf"
      locator: "§9.3, exercises 9.3.9–9.3.10; the present item supplies the S-integer Picard finiteness step used in the complete local proof."
---

## Statement

Assume the Axiom of Choice. Let $L/\mathbb Q$ be a finite extension, let $S$ be a finite set of nonzero prime ideals of its ring of integers, and define


$$
\mathcal O_{L,S}=\{0\}\cup\{x\in L^\times:v_{\mathfrak p}(x)\ge0\text{ for every nonzero prime ideal }\mathfrak p\notin S\}.
$$


Here $v_{\mathfrak p}(x)$ is the exponent of $\mathfrak p$ in the principal fractional ideal $(x)$. The ring $\mathcal O_{L,S}$ is a Dedekind domain, meaning a Noetherian integrally closed domain of Krull dimension one, and the Picard group of $\operatorname{Spec}\mathcal O_{L,S}$, meaning the group of isomorphism classes of invertible sheaves under tensor product, is finite.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[def-number-field|number field]]

[[def-s-integers-and-s-units-of-a-number-field|ring of S-integers]]

[[def-ring-of-integers-of-a-number-field|ring of integers]]

[[def-prime-ideal-valuations-on-fractional-ideals|prime-ideal valuation]]

## Facts & Assumptions

**Given:** AC; a finite extension $L/\mathbb Q$; a finite set $S$ of finite prime ideals of $\mathcal O_L$; and the valuation-defined ring $\mathcal O_{L,S}$.

[A1] The Axiom of Choice is assumed as stated in [[def-axiom-of-choice]].

[F1] The ring $\mathcal O_{L,S}$ consists of the elements of $L$ integral at every finite prime outside $S$ ([[def-s-integers-and-s-units-of-a-number-field]]).

[F2] Under AC, the ring of integers $\mathcal O_L$ of a number field is Dedekind ([[cor-ring-of-integers-is-a-dedekind-domain]]).

[F3] The ideal class group $\operatorname{Cl}(\mathcal O_L)$ is finite ([[thm-finiteness-of-the-number-field-class-group]]).

[F4] $\operatorname{Cl}(\mathcal O_L)$ is the quotient of the group of nonzero fractional ideals by principal fractional ideals ([[def-ideal-class-group-of-a-domain]]).

[F5] In a finite group, the order of every subgroup divides the order of the group; in particular each element raised to the group order is the identity ([[thm-lagrange]]).

[F6] Every nonzero fractional ideal of a Dedekind domain has a unique finite prime-ideal factorization ([[thm-unique-factorisation-of-ideals-in-dedekind-domains]]).

[F7] A localization of a Dedekind domain is either Dedekind or a field ([[thm-localisation-of-a-dedekind-domain]]).

[F8] For a Dedekind domain, its ideal class group is canonically its Picard group ([[thm-ideal-class-group-is-the-picard-group]]).

[F9] An invertible fractional ideal of a domain is a finite projective module ([[thm-invertible-ideals-and-rank-one-projective-modules]]).

[F10] The value $v_{\mathfrak p}(x)$ is the exponent of the prime ideal $\mathfrak p$ in the factorization of the principal fractional ideal $(x)$ ([[def-prime-ideal-valuations-on-fractional-ideals]]).

[F11] Every nonzero fractional ideal of a Dedekind domain is invertible ([[thm-nonzero-ideals-in-dedekind-domains-are-invertible]]).

[F12] Every element of a number field is a quotient of an algebraic integer by a nonzero integer; in particular $L=\operatorname{Frac}(\mathcal O_L)$ ([[thm-clearing-denominators-for-an-algebraic-number]]).

[F13] The inclusion $\mathbb Z\hookrightarrow\mathcal O_L$ is an integral ring map because $\mathcal O_L$ is the integral closure of $\mathbb Z$ in $L$ ([[def-ring-of-integers-of-a-number-field]]).

[F14] For an integral ring map, every prime ideal of the base has a prime ideal above it ([[thm-lying-over]]).

[F15] A rational number integral over $\mathbb Z$ is an integer ([[cor-rational-algebraic-integers-are-integers]]).



## Proof

**Proof technique:** identify the valuation-defined S-integer ring as a localization of the number ring, then show its Picard group is a quotient of the finite number-field class group.

1.1 Put $R=\mathcal O_L$. By [F2] and [F3], under AC the ring $R$ is Dedekind and its class group is finite; set $h=|\operatorname{Cl}(R)|\ge1$. [A1, F2, F3, given]

1.2 Let $E$ be the set of rational primes contained in at least one ideal of $S$. This set is finite: a proper ideal cannot contain two distinct rational primes, because those primes generate the unit ideal in $\mathbb Z$. Let $N=\prod_{\ell\in E}\ell$, with empty product $1$. The integer $N+1>1$ has a prime divisor $\ell$, and $\ell\notin E$ since otherwise $\ell$ would divide both $N$ and $N+1$. Thus $\ell$ belongs to no prime ideal in $S$. [given, algebra, choose]

2.1 For each $\mathfrak p\in S$, Lagrange's theorem [F5] makes $[\mathfrak p]^h=1$ in the quotient group [F4]. Thus $\mathfrak p^h$ is principal; choose $\pi_{\mathfrak p}\in L^\times$ with $(\pi_{\mathfrak p})=\mathfrak p^h$. Since $\mathfrak p^h$ is integral, $\pi_{\mathfrak p}\in R$. This is a finite family of choices. [F4, F5, step 1.1, choose]

3.1 By unique factorization [F6], $v_{\mathfrak p}(\pi_{\mathfrak p})=h$ and $v_{\mathfrak q}(\pi_{\mathfrak p})=0$ for every prime $\mathfrak q\ne\mathfrak p$, where $v_{\mathfrak q}$ is the exponent in a principal fractional ideal [F10]. [F6, F10, step 2.1]

4.1 Define $T=\{t\in R\setminus\{0\}:v_{\mathfrak q}(t)=0\text{ for every }\mathfrak q\notin S\}$, a multiplicative subset by additivity of the valuations [F10]. Every nonzero $x=a/t\in T^{-1}R$ has $v_{\mathfrak q}(x)=v_{\mathfrak q}(a)\ge0$ outside $S$, so $x\in\mathcal O_{L,S}$ by [F1]; zero is in both rings. Conversely, zero is in $T^{-1}R$; for nonzero $x\in\mathcal O_{L,S}$, choose $m_{\mathfrak p}\ge0$ with $m_{\mathfrak p}h+v_{\mathfrak p}(x)\ge0$ for each $\mathfrak p\in S$, and put $t=\prod_{\mathfrak p\in S}\pi_{\mathfrak p}^{m_{\mathfrak p}}$. By step 3.1, $t\in T$, and $tx$ has nonnegative valuation at every prime; hence $tx\in R=\mathcal O_{L,\varnothing}$ by [F1] with the empty prime set. Therefore $\mathcal O_{L,S}=T^{-1}R$. [F1, F10, step 3.1, algebra]

5.1 By [F2], [F7], and step 4.1, $R_S:=\mathcal O_{L,S}$ is either Dedekind or a field. [A1, F2, F7, step 4.1]

5.2 If $\ell$ were a unit in $R$, then $1/\ell\in R$ would be a rational algebraic integer and hence an integer by [F15], which is impossible; so $(\ell)$ is a nonzero proper ideal. The ring map in [F13] is integral, so [F14] gives a prime ideal $\mathfrak q\subset R$ above $(\ell)$. Since $\ell$ lies in no member of $S$, $\mathfrak q\notin S$. Every $t\in T$ has $v_{\mathfrak q}(t)=0$, so $t\notin\mathfrak q$; thus $\mathfrak q$ survives the localization in step 4.1. By [F7], $R_S$ is Dedekind. [A1, F7, F10, F13, F14, F15, step 1.2]

6.1 By [F8], $\operatorname{Pic}(\operatorname{Spec}R_S)\cong\operatorname{Cl}(R_S)$. Let $J$ be a nonzero fractional $R_S$-ideal. By [F11] it is invertible and, by [F9], finitely generated; choose generators $x_1,\ldots,x_m\in L$. By [F12], clearing their finitely many denominators gives $0\ne d\in R$ such that $dx_i\in R$ for all $i$. If $I=(dx_1,\ldots,dx_m)_R$, then $I$ is an integral $R$-ideal and $J=d^{-1}I R_S$; since $d^{-1}$ is principal, [F4] makes the class of $J$ the image of the class of $I$. Thus the map $\operatorname{Cl}(R)\to\operatorname{Cl}(R_S)$ is surjective. [A1, F4, F8, F9, F11, F12, step 4.1, step 5.2, algebra]

7.1 By [F3], $\operatorname{Cl}(R)$ is finite, so its quotient $\operatorname{Cl}(R_S)$ and hence $\operatorname{Pic}(\operatorname{Spec}R_S)$ are finite. Step 5.2 showed $R_S$ is Dedekind; this proves both conclusions. [A1, F3, step 5.2, step 6.1] ∎
