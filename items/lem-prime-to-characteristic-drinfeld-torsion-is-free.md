---
id: lem-prime-to-characteristic-drinfeld-torsion-is-free
kind: lemma
title: "Prime-to-characteristic torsion and Tate module of a Drinfeld module are free"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-function-field-coefficient-ring
  - def-dedekind-domain
  - def-drinfeld-module-over-an-a-field
  - def-rank-of-a-drinfeld-module
  - lem-function-field-coefficient-ring-has-finite-ideal-class-group
  - thm-principal-divisor-exact-sequence
  - thm-unique-factorisation-of-ideals-in-dedekind-domains
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - lem-divisible-adic-torsion-and-tate-module-is-free
  - lem-adic-completion-of-dedekind-domain-at-prime-is-a-dvr
  - def-separable-closure-in-an-algebraic-extension
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Introduction to Drinfeld Modules, §3.7, Lemma 3.12, Proposition 3.13, Corollary 3.14"
      url: "https://math.mit.edu/~poonen/papers/drinfeld.pdf"
    - title: "Mihran Papikian, An Overview of the Theory of Drinfeld Modules, §3.2"
      url: "https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $(A,\mathfrak l)$ be a function-field coefficient datum, let $L$ be an A-field with A-characteristic $\mathfrak p$, fix a separable closure $L^{\mathrm{sep}}$ inside an algebraic closure $\overline L$, and let $\phi$ be a Drinfeld A-module over $L$ of rank $r$. Let $\mathfrak l$ be a nonzero prime ideal of $A$ with $\mathfrak l\ne\mathfrak p$ when $\mathfrak p\ne0$. For $n\ge1$, define $\phi[\mathfrak l^n](L^{\mathrm{sep}})=\{x\in L^{\mathrm{sep}}:\phi_a(x)=0\text{ for every }a\in\mathfrak l^n\}$ and let $D_{\mathfrak l}=\bigcup_{n\ge1}\phi[\mathfrak l^n](L^{\mathrm{sep}})$, with the $A_{\mathfrak l}$-action induced on each level through $A_{\mathfrak l}/\mathfrak l^nA_{\mathfrak l}\cong A/\mathfrak l^n$. Define the Tate module by
$$T_{\mathfrak l}(\phi)=\operatorname{Hom}_{A_{\mathfrak l}}(K_{\mathfrak l}/A_{\mathfrak l},D_{\mathfrak l}).$$
Then $\phi[\mathfrak l^n](L^{\mathrm{sep}})$ is a free $A/\mathfrak l^n$-module of rank $r$ for every $n\ge1$, and $T_{\mathfrak l}(\phi)$ is a free $A_{\mathfrak l}$-module of rank $r$.

## Statement references

[[def-function-field-coefficient-ring]]

[[def-drinfeld-module-over-an-a-field]]

[[def-rank-of-a-drinfeld-module]]

[[def-separable-closure-in-an-algebraic-extension]]

[[lem-function-field-coefficient-ring-has-finite-ideal-class-group]]

[[lem-divisible-adic-torsion-and-tate-module-is-free]]

Bjorn Poonen, *Introduction to Drinfeld Modules*, §3.7: https://math.mit.edu/~poonen/papers/drinfeld.pdf

Mihran Papikian, *An Overview of the Theory of Drinfeld Modules*, §3.2: https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf

## Facts & Assumptions

**Given:** AC; a function-field coefficient datum $(A,\mathfrak l)$; an A-field $L$ of A-characteristic $\mathfrak p$; and a rank-$r$ Drinfeld A-module $\phi$ over $L$, with $\mathfrak l\ne\mathfrak p$ when $\mathfrak p\ne0$.

[A1] [[def-axiom-of-choice]]: AC selects from every family of nonempty sets.

[F1] [[def-function-field-coefficient-ring]] and [[lem-adic-completion-of-dedekind-domain-at-prime-is-a-dvr]]: $A$ is Dedekind, $A_{\mathfrak l}$ is a complete DVR with finite residue field $A/\mathfrak l$, and $A_{\mathfrak l}/\mathfrak l^nA_{\mathfrak l}\cong A/\mathfrak l^n$.

[F2] [[def-drinfeld-module-over-an-a-field]]: $\phi$ is an injective $\mathbb F_q$-algebra map and the derivative of the additive polynomial $\phi_a(X)$ is $\gamma(a)$.

[F3] [[def-rank-of-a-drinfeld-module]]: $\deg_\tau(\phi_a)=r\deg_A(a)$, so $\deg_X(\phi_a)=|a|^r$ for every nonzero $a\in A$.

[F4] [[lem-function-field-coefficient-ring-has-finite-ideal-class-group]]: under AC, the ideal class group of $A$ is finite.

[F5] [[lem-divisible-adic-torsion-and-tate-module-is-free]]: if a $\pi$-primary torsion module over a complete DVR has finite first level and surjective multiplication maps between successive levels, then its finite levels and Tate module are free of a common rank under DC.

[F6] [[def-separable-closure-in-an-algebraic-extension]]: $L^{\mathrm{sep}}$ contains every element separable algebraic over $L$.

[F7] [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies the prescribed-start form of DC required in [F5].

[F8] [[thm-principal-divisor-exact-sequence]]: under AC, the divisor class of a nonzero prime ideal is its fractional ideal class, so finite order of that class means some positive power of the ideal is principal.

[F9] [[thm-unique-factorisation-of-ideals-in-dedekind-domains]]: under AC, every nonzero ideal factors uniquely into finitely many prime-ideal powers.

[F10] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]: for comaximal ideals $I,J$, there exist $s\in I$ and $t\in J$ with $s+t=1$.



**Given:** [A1], [F1]–[F7], and the hypotheses in the Statement.

## Proof

1.1 The class of $\mathfrak l$ in the finite divisor class group [F4] has finite order. By [F8], this is its fractional ideal class, so for some $e\ge1$ the ideal $\mathfrak l^e$ is principal, say $(a)$ with $a\in K^\times$. Since $(a)=\mathfrak l^e\subseteq A$, its generator $a$ belongs to $A$ and is nonzero. [A1, F4, F8, given, choose]

1.2 For every $n\ge1$, choose $b_n\in\mathfrak l^n\setminus\mathfrak p$ when $\mathfrak p\ne0$, which is possible since distinct nonzero primes are maximal; if $\mathfrak p=0$, choose any nonzero $b_n\in\mathfrak l^n$. Then $\gamma(b_n)\ne0$, and $\phi[\mathfrak l^n](\overline L)\subseteq\ker\phi_{b_n}$. The polynomial $\phi_{b_n}$ is separable of finite degree, so every level is finite and all its points lie in $L^{\mathrm{sep}}$ by [F6]. [F1, F2, F6, given, choose]

2.1 Put $f=\dim_{\mathbb F_q}(A/\mathfrak l)>0$. Each quotient $\mathfrak l^j/\mathfrak l^{j+1}$ is annihilated by $\mathfrak l$, so every $s\notin\mathfrak l$ acts invertibly on it and localization at $\mathfrak l$ does not change it. In the DVR $A_{\mathfrak l}$ the quotient is $\pi^jA_{\mathfrak l}/\pi^{j+1}A_{\mathfrak l}\cong A/\mathfrak l$, hence has $\mathbb F_q$-dimension $f$. The filtration of $A/\mathfrak l^e$ therefore has $e$ such quotients, so $\deg_A(a)=\dim_{\mathbb F_q}(A/\mathfrak l^e)=ef$ and $|A/\mathfrak l^e|=q^{ef}$. [F1, F5, step 1.1, algebra]

2.2 Let $\pi$ be a uniformizer of $A_{\mathfrak l}$. Choose $c\in\mathfrak l\setminus\mathfrak l^2$; if $\mathfrak p\ne0$, choose it outside $\mathfrak p$ using the comaximality of $\mathfrak l^2$ and $\mathfrak p$. By [F9], $(c)=\mathfrak l J$ for an integral ideal $J$ coprime to $\mathfrak l$. The image of $c$ in $A_{\mathfrak l}$ is $u\pi$ for a unit $u$. Given $x\in\phi[\mathfrak l^n](\overline L)$, the nonzero additive polynomial $\phi_c$ is surjective on $\overline L$, so choose $y$ with $\phi_c(y)=u x$. Since every $b\in\mathfrak l^n$ kills $u x$, every element of $\mathfrak l^n(c)=\mathfrak l^{n+1}J$ kills $y$. The ideals $J$ and $\mathfrak l^{n+1}$ are comaximal, so [F10] gives $s\in J$ and $t\in\mathfrak l^{n+1}$ with $s+t=1$. Put $y_{\mathfrak l}=s y$ and $y_J=t y$. Then $\mathfrak l^{n+1}y_{\mathfrak l}=0$, $Jy_J=0$, and $y=y_{\mathfrak l}+y_J$. Since $c\in J$, $\phi_c(y_J)=0$, so $\phi_c(y_{\mathfrak l})=u x$; as $c=u\pi$ on the $\mathfrak l$-primary module, $\pi y_{\mathfrak l}=x$. By step 1.2, $y_{\mathfrak l}\in L^{\mathrm{sep}}$. Thus multiplication by $\pi$ is surjective between successive torsion levels. [F1, F2, F5, F9, F10, step 1.2, given, choose, construct, algebra]

3.1 The element $a$ is outside $\mathfrak p$: otherwise $\mathfrak l^e=(a)\subseteq\mathfrak p$, impossible for distinct nonzero prime ideals in a Dedekind domain, and if $\mathfrak p=0$ this follows from $a\ne0$. Hence $\gamma(a)\ne0$ by [F2], so $\phi_a(X)$ is separable. Since $\mathfrak l^e=(a)$ and $\phi_{ac}=\phi_a\circ\phi_c=\phi_c\circ\phi_a$, its ideal torsion is $\ker\phi_a$; [F3] and step 2.1 give polynomial degree $q^{r\deg_A(a)}=q^{ref}$. Its distinct roots therefore give $\#\phi[\mathfrak l^e](\overline L)=q^{ref}$, with all these roots in $L^{\mathrm{sep}}$ by [F6]. [F1, F2, F3, F6, step 1.1, step 2.1, algebra]

3.2 The module $D_{\mathfrak l}$ is $\pi$-primary over $A_{\mathfrak l}$, its finite levels are those in step 1.2, and the transition maps are surjective by step 2.2. By [F5] and [F7], there is an integer $d\ge0$ such that each level is free of rank $d$ over $A/\mathfrak l^n$, and $T_{\mathfrak l}(\phi)$ is free of rank $d$ over $A_{\mathfrak l}$. [F1, F5, F7, step 1.2, step 2.2]

4.1 Step 3.2 gives $\#\phi[\mathfrak l^e](L^{\mathrm{sep}})=q^{edf}$, while step 3.1 gives $q^{ref}$. Since $q^{ef}>1$, $d=r$. Hence every finite torsion level and $T_{\mathfrak l}(\phi)$ have the ranks claimed. [step 3.1, step 3.2, algebra] ∎

## Remarks

AC is used through the finite ideal class group supplier; DC, implied by AC, is used only to choose a compatible sequence of finite-level bases in [F5]. The separability and root-count calculation in steps 1.2–1.4 is choice-free once the curve and separable-closure data are given.
