---
id: def-the-local-ring-at-q-zero
kind: definition
title: "The local ring $A_0$ of rational functions regular at $q=0$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-symmetrizable-cartan-datum-for-a-quantum-group, def-localisation-at-a-prime-ideal, def-local-ring, def-principal-ideal-domain, def-discrete-valuation-ring, def-the-laurent-polynomial-ring, ex-the-local-ring-of-polynomials-at-x, thm-localisation-at-a-prime-is-local, cor-polynomial-ring-over-a-field-is-a-pid, thm-equivalent-characterisations-of-a-dvr, cor-dvr-is-a-pid, cor-rational-function-field-as-a-fraction-field]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§4, printed p. 15, the paragraph preceding Definition 4.4 and its residue-field and tensor-limit displays."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "§13.3, printed p. 328, the paragraph defining K and its local subring A."
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§2.3, printed p. 473, Definition 2.3.1: the coefficient ring of functions regular at q=0."
---

## Definition

Let $q$ be transcendental over $\mathbb Q$ ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]) and let
$$A_0:=\mathbb Q[q]_{(q)}=\Big\{\frac fg\ :\ f,g\in\mathbb Q[q],\ g(0)\neq0\Big\}\subseteq\mathbb Q(q)$$
be the localisation of the polynomial ring $\mathbb Q[q]$ at the prime ideal $(q)$ ([[def-localisation-at-a-prime-ideal]]). By [[ex-the-local-ring-of-polynomials-at-x]] with $F=\mathbb Q$, the ring $A_0$ is exactly the ring of rational functions regular at $q=0$, it is a local ring ([[def-local-ring]]) with unique maximal ideal $qA_0$, and evaluation at $0$ induces an isomorphism $A_0/qA_0\cong\mathbb Q$. Since $\mathbb Q[q]$ is a principal ideal domain ([[cor-polynomial-ring-over-a-field-is-a-pid]]) with nonzero prime ideal $(q)$, the ring $A_0$ is a local principal ideal domain with nonzero maximal ideal; by the discrete valuation ring characterisations it is a discrete valuation ring with uniformiser $q/1$ ([[thm-equivalent-characterisations-of-a-dvr]], [[def-discrete-valuation-ring]]), and in particular a principal ideal domain ([[cor-dvr-is-a-pid]], [[def-principal-ideal-domain]]), with field of fractions $\mathbb Q(q)$ ([[cor-rational-function-field-as-a-fraction-field]]).

By [[def-discrete-valuation-ring]] a discrete valuation ring is the valuation ring $V_v=\{x:v(x)\ge0\}$ of a discrete valuation $v$ on its fraction field. The discrete valuation of $\mathbb Q(q)$ with $V_v=A_0$ and $v(q)=1$ is the **$q$-adic valuation**; write it $\operatorname{ord}_q$, so that
$$\operatorname{ord}_q:\mathbb Q(q)\longrightarrow\mathbb Z\cup\{\infty\},\qquad A_0=\{h\in\mathbb Q(q):\operatorname{ord}_q(h)\ge0\},\qquad \operatorname{ord}_q(q)=1 .$$
Equivalently, $\operatorname{ord}_q$ is the vanishing order at $q=0$. The units of $A_0$ are exactly the fractions $f/g$ with $f(0)\neq0$ and $g(0)\neq0$, and $qA_0$ is the maximal ideal, so $q$ is a uniformiser of $A_0$ ([[thm-localisation-at-a-prime-is-local]]).

This ring $A_0$ is the **crystal limiting ring** of the crystal development below, and it is different from the Laurent ring $A=\mathbb Z[q,q^{-1}]$ of [[def-the-laurent-polynomial-ring]]: $q^{-1}\in A\setminus A_0$, while $(1+q)^{-1}\in A_0\setminus A$; neither ring contains the other, and both are subrings of $\mathbb Q(q)$. For every free $A_0$-module $L$ the canonical map
$$\mathbb Q\otimes_{A_0}L\longrightarrow L/qL,\qquad c\otimes\ell\mapsto c\,\ell+qL,$$
is an isomorphism, and for every $\lambda\in\mathbb Q(q)^\times$ one has $\lambda L/q\lambda L\cong L/qL$; passing from $L$ to $L/qL$ is the **crystal limit**. No freeness of any further module, no lattice and no choice principle is asserted here.

## Facts & Assumptions

**Given:** The transcendental element $q$ over $\mathbb Q$ and the ring $A_0=\mathbb Q[q]_{(q)}$.

[F1] The polynomial ring $\mathbb Q[q]$ is a principal ideal domain, and evaluation at $0$, $\mathrm{ev}_0:\mathbb Q[q]\to\mathbb Q$, $f\mapsto f(0)$, has kernel $(q)$ and induces $\mathbb Q[q]/(q)\cong\mathbb Q$; hence $(q)$ is a maximal, nonzero ideal and $A_0$ is realised as the fractions $f/g$ with $g(0)\neq0$ ([[cor-polynomial-ring-over-a-field-is-a-pid]], [[ex-the-local-ring-of-polynomials-at-x]]).

[F2] Localising at a prime $\mathfrak p$ yields a local ring whose maximal ideal is $\mathfrak pR_{\mathfrak p}$, whose units are the fractions $r/s$ with $r\notin\mathfrak p$ ([[thm-localisation-at-a-prime-is-local]], [[def-localisation-at-a-prime-ideal]]).

[L1] A nonfield domain $R$ is a discrete valuation ring exactly when it is a local principal ideal domain with nonzero maximal ideal ([[thm-equivalent-characterisations-of-a-dvr]]).

[L2] Every discrete valuation ring is a principal ideal domain, and every discrete valuation ring is the valuation ring $V_v$ of a discrete valuation $v$ ([[cor-dvr-is-a-pid]], [[def-discrete-valuation-ring]]).

[L3] For a field $F$, the rational function field $F(t)$ equals $\operatorname{Frac}(F[t])$ ([[cor-rational-function-field-as-a-fraction-field]]).

[L4] The Laurent ring $A=\mathbb Z[q,q^{-1}]$ is the principal localisation $\mathbb Z[q]_S$ with $S=\{q^k:k\ge0\}$: every element has a unique finite expansion $\sum_{k\in\mathbb Z}a_kq^k$, and for every unital ring $R$ and unit $u\in R$ there is a unique unital homomorphism $A\to R$ with $q\mapsto u$ ([[def-the-laurent-polynomial-ring]]).

## Verification

**Proof technique:** direct.

1.1 Evaluation at $0$ has kernel $(q)$ and induces $\mathbb Q[q]/(q)\cong\mathbb Q$, so $(q)$ is a maximal ideal of $\mathbb Q[q]$ and $q\neq0$ ([[def-local-ring]]); in particular $(q)$ is a nonzero prime ideal of the PID $\mathbb Q[q]$. [given, F1, algebra]

1.2 The field of fractions of $A_0$ is $\mathbb Q(q)$: every polynomial $f\in\mathbb Q[q]$ lies in $A_0$ as $f/1$, so $\operatorname{Frac}(A_0)$ contains $\operatorname{Frac}(\mathbb Q[q])=\mathbb Q(q)$ by [L3]; conversely $A_0\subseteq\mathbb Q(q)$ and $\mathbb Q(q)$ is a field, so $\operatorname{Frac}(A_0)\subseteq\mathbb Q(q)$. [given, L3, algebra]

2.1 By [F2] applied to $\mathfrak p=(q)$, the localisation $A_0$ is a local ring with maximal ideal $(q)A_0=qA_0$, residue field $\mathbb Q$ under evaluation $f/g\mapsto f(0)/g(0)$: this map is surjective on constants and its kernel consists precisely of fractions with $f(0)=0$, namely $qA_0$, and units exactly the fractions $f/g$ with $f\notin(q)$, that is, $f(0)\neq0$ and $g(0)\neq0$. [step 1.1, F2, algebra]

3.1 By step 1.1, $(q)$ is a nonzero prime ideal of the principal ideal domain $\mathbb Q[q]$, and by step 2.1 the ring $A_0$ is a local domain with maximal ideal $qA_0\neq0$. Every ideal $J$ of $A_0$ is generated by its contraction: if $f/g\in J$ with $g(0)\neq0$ then $f=g\cdot(f/g)\in J\cap\mathbb Q[q]$ and $f/g=f\cdot(1/g)\in(J\cap\mathbb Q[q])A_0$, while $J\cap\mathbb Q[q]\subseteq J$ gives the reverse inclusion, so $J=(J\cap\mathbb Q[q])A_0$. The contraction $J\cap\mathbb Q[q]$ is an ideal of the principal ideal domain $\mathbb Q[q]$, hence principal, so $J$ is principal and $A_0$ is a local principal ideal domain with nonzero maximal ideal. By [L1] it is a discrete valuation ring; its maximal ideal is generated by $q/1$, so $q/1$ is a uniformiser, and by [L2] there is a discrete valuation $v$ of $\mathbb Q(q)$ with $A_0=\{h:v(h)\ge0\}$. [step 1.1, step 2.1, L1, L2]

4.1 Normalisation. Every nonzero $x=f/g\in\mathbb Q(q)$ can be written uniquely as $q^nu$ with $n\in\mathbb Z$ and $u\in A_0^\times$: factor the maximal powers of $q$ from the nonzero polynomials $f,g$ and subtract their exponents. For the discrete valuation $v$ of step 3.1, units have value zero because both $u$ and $u^{-1}$ lie in $A_0$, so $v(x)=nv(q)$. Surjectivity of $v$ onto $\mathbb Z$ therefore forces $v(q)=1$. Set $\operatorname{ord}_q=v$; this is the vanishing order just computed, with value group $\mathbb Z$ and valuation ring $A_0$. [step 2.1, step 3.1, algebra]

5.1 Uniqueness and units: if $w$ is any discrete valuation with $V_w=A_0$ and $w(q)=1$, then $w=\operatorname{ord}_q$. Indeed, for $x\in\mathbb Q(q)^\times$ one has $w(x)=0$ exactly when $x\in A_0$ and $x^{-1}\in A_0$, that is, exactly when $x\in A_0^\times$; for nonzero $x$ the element $x/q^{\operatorname{ord}_q(x)}$ lies in $A_0^\times$, so $w(x)=w(q^{\operatorname{ord}_q(x)})+0=\operatorname{ord}_q(x)$, using $w(q)=1$, additivity and $w(1)=0$. Thus $\operatorname{ord}_q$ is the unique such valuation and $A_0=\{h:\operatorname{ord}_q(h)\ge0\}$, with units $\{h\neq0:\operatorname{ord}_q(h)=0\}$. [step 3.1, step 4.1, algebra]

6.1 Units and comparisons with $A$: step 2.1 gives the units. For the comparisons, $q^{-1}\in A$ by [L4] with $u=q^{-1}$ in $R=\mathbb Q(q)$ but $q^{-1}\notin A_0$, because $q^{-1}=f/g$ with $g(0)\neq0$ would give $g=qf$ and hence $g(0)=0$, a contradiction; and $(1+q)^{-1}\in A_0$ because $1+q$ has value $1\neq0$ at $0$, while $(1+q)^{-1}\notin A$, because the unique homomorphism $A\to\mathbb Z$ with $q\mapsto1$ of [L4] would send $(1+q)^{-1}(1+q)=1$ to $\mathrm{ev}_1((1+q)^{-1})\cdot2=1$, forcing the integer $\mathrm{ev}_1((1+q)^{-1})=1/2$, which is impossible. [step 2.1, step 5.1, L4, algebra]

7.1 The crystal limit: let $L=\bigoplus_{j\in J}A_0e_j$ be a free $A_0$-module with the displayed basis. The residue classes $e_j+qL$ form a $\mathbb Q$-basis of $L/qL$ because $A_0/qA_0\cong\mathbb Q$ by step 2.1, and the elements $1\otimes e_j$ form a $\mathbb Q$-basis of $\mathbb Q\otimes_{A_0}L$; the displayed map sends the second basis to the first, so it is an isomorphism. For $\lambda\in\mathbb Q(q)^\times$, multiplication by $\lambda$ is a bijection $L\to\lambda L$ carrying $qL$ onto $q\lambda L=\lambda qL$, hence induces an $A_0$-module isomorphism $L/qL\to\lambda L/q\lambda L$. No choice principle is used: the basis of $L$ is given, and all further objects are residue projections of explicitly presented fractional ideals of $\mathbb Q[q]$. [step 2.1, given, algebra] ∎
