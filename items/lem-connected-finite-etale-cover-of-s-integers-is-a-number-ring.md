---
id: lem-connected-finite-etale-cover-of-s-integers-is-a-number-ring
kind: lemma
title: A connected finite étale cover of an S-integer spectrum is an S-integer spectrum
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-prime-ideal-valuations-on-fractional-ideals
  - def-ideal-class-group-of-a-domain
  - thm-lagrange
  - thm-finiteness-of-the-number-field-class-group
  - thm-unique-factorisation-of-ideals-in-dedekind-domains
  - cor-ring-of-integers-is-a-dedekind-domain
  - thm-integrality-commutes-with-localisation
  - lem-integral-closure-commutes-etale-base-change
  - thm-finite-integral-closure-in-a-finite-separable-extension
  - cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension
  - thm-etale-locally-standard-etale
  - def-etale-morphism-schemes
  - def-finite-morphism-schemes
  - lem-etale-residue-extensions-finite-separable
  - thm-structure-theorem-for-artinian-rings
  - cor-spectrum-connected-iff-no-nontrivial-idempotents
  - thm-clearing-denominators-for-an-algebraic-number
  - thm-prime-spectrum-of-a-localisation-bijection
  - thm-transitivity-of-integrality
  - lem-finiteness-of-picard-group-of-s-integers
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Fundamental Groups of Schemes, Lemma 58.11.2"
      url: "https://stacks.math.columbia.edu/tag/0BQJ"
      locator: "Section 58.11, Lemma 58.11.2; connected finite étale covers of normal integral schemes are their generic-field normalizations."
    - title: "J. S. Milne, Algebraic Number Theory, third edition"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "§3, Propositions 3.4–3.5, and §5, S-integers, pp. 49 and 90–91; localization and the valuation-defined S-integer ring."
---

## Statement

Assume the Axiom of Choice. Let $K/\mathbb Q$ be a finite extension, let $S$ be a finite set of nonzero prime ideals of the ring of integers $\mathcal O_K$, and put $U=\operatorname{Spec}\mathcal O_{K,S}$, where $\operatorname{Spec}R$ denotes the affine scheme of prime ideals of $R$. If $V\to U$ is a nonempty connected finite étale cover, then there is a finite separable field extension $L/K$ such that, for the finite set $S_L=\{\mathfrak q\subset\mathcal O_L:\mathfrak q\ne0,\ \mathfrak q\cap\mathcal O_K\in S\}$, there is an isomorphism of $U$-schemes $V\cong\operatorname{Spec}\mathcal O_{L,S_L}$.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[def-number-field|number field]]

[[def-ring-of-integers-of-a-number-field|ring of integers]]

[[def-s-integers-and-s-units-of-a-number-field|ring of S-integers]]

[[def-etale-morphism-schemes|étale morphism]]

[[def-finite-morphism-schemes|finite morphism]]

[[def-separable-elements-and-separable-extensions|separable field extension]]

## Facts & Assumptions

**Given:** AC; a number field $K$; a finite set $S$ of finite primes of $\mathcal O_K$; and a nonempty connected finite étale cover $V\to\operatorname{Spec}\mathcal O_{K,S}$.

[A1] AC is the stated choice-function axiom ([[def-axiom-of-choice]]).

[F1] The ring $R=\mathcal O_K$ is a Dedekind domain with finite ideal class group; a nonzero fractional ideal has a unique finite prime-ideal factorization, and the class group is the quotient of nonzero fractional ideals by principal fractional ideals ([[cor-ring-of-integers-is-a-dedekind-domain]], [[thm-finiteness-of-the-number-field-class-group]], [[thm-unique-factorisation-of-ideals-in-dedekind-domains]], [[def-ideal-class-group-of-a-domain]]).

[F2] In a finite group of order $h$, the $h$-th power of each element is the identity ([[thm-lagrange]]).

[F3] For nonzero $x\in K$, $v_{\mathfrak p}(x)$ is the exponent of $\mathfrak p$ in $(x)$; all these exponents are nonnegative exactly when $(x)$ is an integral ideal ([[def-prime-ideal-valuations-on-fractional-ideals]], [[thm-unique-factorisation-of-ideals-in-dedekind-domains]]).

[F4] The integral closure of $\mathcal O_K$ in a finite separable extension $L/K$ is $\mathcal O_L$; it is finite over $\mathcal O_K$ and is Dedekind ([[def-ring-of-integers-of-a-number-field]], [[thm-transitivity-of-integrality]], [[thm-finite-integral-closure-in-a-finite-separable-extension]], [[cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension]]).

[F5] Integral closure commutes with localization, and primes of $T^{-1}R$ correspond exactly to primes of $R$ disjoint from $T$ ([[thm-integrality-commutes-with-localisation]], [[thm-prime-spectrum-of-a-localisation-bijection]]).

[F6] A finite étale algebra over a field is a finite product of finite separable field extensions; this follows from the finite-dimensional Artinian decomposition and the separability of étale residue fields ([[thm-etale-locally-standard-etale]], [[thm-structure-theorem-for-artinian-rings]], [[lem-etale-residue-extensions-finite-separable]]).

[F7] If $R$ is normal and $E$ is étale over $R$, then the image of $E$ in its generic algebra after base change is its integral closure there ([[lem-integral-closure-commutes-etale-base-change]]).

[F8] A finite étale algebra over a domain is finite and flat, so its map into its generic fibre is injective; an affine spectrum is connected exactly when its ring has no nontrivial idempotents ([[def-finite-morphism-schemes]], [[def-etale-morphism-schemes]], [[cor-spectrum-connected-iff-no-nontrivial-idempotents]]).

[F9] The valuation-defined ring of $S$-integers is $\mathcal O_{K,S}=\{0\}\cup\{x\in K^\times:v_{\mathfrak p}(x)\ge0\text{ for all }\mathfrak p\notin S\}$ ([[def-s-integers-and-s-units-of-a-number-field]]).

[F10] The ring $\mathcal O_{K,S}$ is Dedekind ([[lem-finiteness-of-picard-group-of-s-integers]]).

[F11] Every element of a number field is a quotient of an algebraic integer by a nonzero rational integer; in particular $\operatorname{Frac}\mathcal O_L=L$ ([[thm-clearing-denominators-for-an-algebraic-number]]).

## Proof

**Proof technique:** express the valuation-defined base as a localization, then use the normality of a connected finite étale cover to identify it with the integral closure in its generic field.

1.1 Put $R=\mathcal O_K$ and $A=\mathcal O_{K,S}$. By [F1], let $h=|\operatorname{Cl}(R)|\ge1$. For each $\mathfrak p\in S$, [F2] gives $[\mathfrak p]^h=1$, so choose $\pi_{\mathfrak p}\in K^\times$ with $(\pi_{\mathfrak p})=\mathfrak p^h$. This is a finite family of choices, and $\pi_{\mathfrak p}\in R$ because its principal ideal is integral. Define $T=\{t\in R\setminus\{0\}:v_{\mathfrak q}(t)=0\text{ for every }\mathfrak q\notin S\}$. Additivity of the valuations makes $T$ multiplicative. [A1, F1, F2, F3, given, choose]

2.1 If $x=a/t\in T^{-1}R$ is nonzero, then $v_{\mathfrak q}(x)=v_{\mathfrak q}(a)\ge0$ for every $\mathfrak q\notin S$, so [F9] gives $x\in A$; zero is in both rings. Conversely, let $0\ne x\in A$. For each $\mathfrak p\in S$ choose $m_{\mathfrak p}\ge0$ with $v_{\mathfrak p}(x)+hm_{\mathfrak p}\ge0$, and set $t=\prod_{\mathfrak p\in S}\pi_{\mathfrak p}^{m_{\mathfrak p}}$. Unique factorization gives $v_{\mathfrak p}(\pi_{\mathfrak p})=h$ and $v_{\mathfrak q}(\pi_{\mathfrak p})=0$ for $\mathfrak q\ne\mathfrak p$, so $t\in T$ and every prime valuation of $tx$ is nonnegative. By [F3], $tx\in R$. Thus $x\in T^{-1}R$ and $A=T^{-1}R$. [A1, F1, F3, F9, step 1.1, given, choose, algebra]

3.1 Since $A$ is Dedekind by [F10], it is a normal domain; write $V=\operatorname{Spec}B$. The finite étale map makes $B$ finite and flat over $A$, so $B$ injects into $C=B\otimes_AK$, where $K=\operatorname{Frac}(A)=\operatorname{Frac}(R)$. By [F6], $C$ is a finite product of finite separable field extensions of $K$. Apply [F7] with the normal base $A$, its fraction field $K$, and the étale algebra $B$. The image of $B$ in $C$ is the integral closure of $A$ in $C$: one inclusion holds because $B$ is finite over $A$, and if $z\in C$ is integral over $A$, the same monic equation makes it integral over $B$, so [F7] gives $z\in B$. If $C$ had more than one field factor, a nontrivial factor idempotent would satisfy $e^2-e=0$, hence be integral over $A$ and belong to $B$; this contradicts connectedness and [F8]. Therefore $C=L$ is one finite separable field extension of $K$, and $B$ is the integral closure of $A$ in $L$. [A1, F6, F7, F8, F10, given, step 2.1, algebra]

4.1 By [F4], $R_L:=\mathcal O_L$ is the integral closure of $R$ in $L$. Since $A=T^{-1}R$ by step 2.1, [F5] says its integral closure in $L$ is $T^{-1}R_L$. Step 3.1 therefore identifies $B=T^{-1}R_L$. [A1, F4, F5, step 2.1, step 3.1]

5.1 Every nonzero prime $\mathfrak q$ of $R_L$ contracts to a nonzero prime of $R$: the localization $(R\setminus\{0\})^{-1}R_L$ is a finite-dimensional domain over $K$, hence a field, and it equals $L$ by [F11]. The prime correspondence in [F5] therefore leaves only the zero prime above $(0)$. For a nonzero prime $\mathfrak q\subset R_L$ with contraction $\mathfrak p\in S$, the element $\pi_{\mathfrak p}$ chosen in step 1.1 lies in $\mathfrak p\subseteq\mathfrak q$ and also in $T$, so $\mathfrak q$ meets $T$. If instead $\mathfrak p\notin S$, every $t\in T$ has $v_{\mathfrak p}(t)=0$, so $t\notin\mathfrak p$ and hence $t\notin\mathfrak q$; thus $\mathfrak q$ is disjoint from $T$. This proves that the nonzero primes of $T^{-1}R_L$ correspond exactly to the primes of $R_L$ lying over primes outside $S$. [F1, F3, F5, F11, step 1.1, step 4.1, algebra]

6.1 For $x\in L^\times$, membership in $T^{-1}R_L$ implies $v_{\mathfrak q}(x)\ge0$ at every prime of $R_L$ disjoint from $T$. Conversely, if these valuations are all nonnegative, factor the principal fractional ideal $(x)$ in the Dedekind domain $R_L$. Every negative exponent is then at a prime meeting $T$, which becomes the unit ideal upon localization; all surviving exponents are nonnegative, so $(x)T^{-1}R_L$ is an integral ideal and $x\in T^{-1}R_L$. By step 5.1, the primes disjoint from $T$ are precisely those not lying above $S$. Hence $T^{-1}R_L=\{0\}\cup\{x\in L^\times:v_{\mathfrak q}(x)\ge0\text{ for all }\mathfrak q\notin S_L\}=\mathcal O_{L,S_L}$ by the S-integer definition [F9]. The set $S_L$ is finite because each $\mathfrak pR_L$ has a finite prime factorization. Together with step 3.1 this yields $V\cong\operatorname{Spec}\mathcal O_{L,S_L}$. [A1, F1, F3, F4, F9, step 5.1, algebra] ∎
