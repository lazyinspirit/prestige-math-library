---
id: thm-hilbert-samuel-dimension-theorem
kind: theorem
title: "The degree of the Hilbert-Samuel polynomial equals the dimension of the support"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-existence-of-hilbert-samuel-polynomial, thm-dimension-and-parameters-for-modules, thm-additivity-of-hilbert-samuel-multiplicity, thm-artin-rees-lemma, lem-determinant-trick-for-nakayama, thm-noetherian-ring-ideal-characterisations, thm-local-ring-unit-characterisations]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Theorem (21.4)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
    - title: "Stacks Project, Section 10.60: Dimension"
      url: "https://stacks.math.columbia.edu/tag/00KD"
---

## Statement

Assume the Axiom of Choice.

Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M\neq0$ be a finite
$R$-module, and let $I$ be an ideal of definition for $M$. Then the
Hilbert-Samuel polynomial $P_{I,M}$ has degree
$$ \deg P_{I,M}=\dim \operatorname{Supp}(M). $$

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian local ring $(R,\mathfrak m)$, a
nonzero finite $R$-module $M$, and an ideal of definition $I$ for $M$.

[L1] The dimension of $\operatorname{Supp}(M)$ is the least number of generators of an ideal of definition for $M$, and such generating tuples are systems of parameters for $M$ ([[thm-dimension-and-parameters-for-modules]]).

[L2] Hilbert-Samuel leading coefficients are additive at the maximum polynomial degree in a short exact sequence ([[thm-additivity-of-hilbert-samuel-multiplicity]]).

[L3] Artin-Rees compares the filtration induced on a finite submodule with its intrinsic adic filtration ([[thm-artin-rees-lemma]]).

[L4] The Hilbert-Samuel polynomial exists ([[thm-existence-of-hilbert-samuel-polynomial]]).

[L5] If a finite module $N$ satisfies $JN=N$, then $(1-a)N=0$ for some $a\in J$ ([[lem-determinant-trick-for-nakayama]]).

[L6] Every ideal of a Noetherian commutative ring is finitely generated
([[thm-noetherian-ring-ideal-characterisations]]).

[L7] In a local ring, the nonunits are exactly the elements of its maximal
ideal ([[thm-local-ring-unit-characterisations]]).

## Proof

**Proof technique:** direct.


1.1 Put $A=R/\operatorname{Ann}_R(M)$ and let $J=IA$. Then $A$ is Noetherian local, $M$ is a faithful finite $A$-module, and $\operatorname{Spec}(A)=\operatorname{Supp}_R(M)$. If $m_1,\ldots,m_s$ generate $M$, there is a surjection $A^s\twoheadrightarrow M$ and a faithful injection $A\hookrightarrow M^s$, $a\mapsto(am_1,\ldots,am_s)$. The surjection gives $\chi_{J,M}(n)\le s\chi_{J,A}(n)$. Applying [L3] to the injection gives a bounded shift $c$ and the reverse estimate $\chi_{J,A}(n-c)\le s\chi_{J,M}(n)$ for large $n$. Hence $P_{J,A}$ and $P_{I,M}$ have the same degree. It remains to prove the theorem for the ring $A$. [L3, L4, given, algebra]


1.2 Let $r=\deg P_{J,A}$ and let $d$ be the least number of generators of an ideal of definition of $A$; [L1] identifies $d$ with $\dim A$. Choose an ideal of definition $Q=(x_1,\ldots,x_d)$. The ideals $J$ and $Q$ are finite by [L6] and have the same radical $\mathfrak m_A$. Raising finite generating sets to suitable powers and expanding products therefore gives positive integers $u,v$ with $J^u\subseteq Q$ and $Q^v\subseteq J$. The resulting linear reindexing inequalities between $\chi_{J,A}$ and $\chi_{Q,A}$ show that their eventual polynomials have the same degree. If $d=0$, then $Q=0$ is an ideal of definition, so $A$ has finite length and $r=\deg P_{Q,A}=0$. If $d>0$, every $Q^n/Q^{n+1}$ is a quotient of a direct sum of $\binom{n+d-1}{d-1}$ copies of $A/Q$, indexed by the degree-$n$ monomials in the $x_i$. Its length is therefore bounded by a polynomial of degree $d-1$, and summing the graded-piece lengths gives $r=\deg P_{Q,A}\le d$. [L1, L4, L6, algebra]


1.3 We prove $\dim A\le r$ by induction on $r$. If $r=0$, the increasing integer sequence $\ell_A(A/J^{n+1})$ is eventually constant, so $J^n/J^{n+1}=0$ for all large $n$. Thus the finite ideal $J^n$ from [L6] satisfies $J(J^n)=J^n$. By [L5], some $a\in J$ has $(1-a)J^n=0$; since $a\in J\subseteq\mathfrak m_A$, [L7] makes $1-a$ a unit, and hence $J^n=0$. Because $J$ is an ideal of definition, $\sqrt J=\mathfrak m_A$; nilpotence of $J$ then makes every prime equal to $\mathfrak m_A$, so $\dim A=0$. [L5, L6, L7, algebra]


1.4 Assume $r>0$ and take a strict chain $\mathfrak p_0\subset\mathfrak p_1\subset\cdots\subset\mathfrak p_e=\mathfrak m_A$. If $e=0$, there is nothing to prove, so assume $e>0$. Put $B=A/\mathfrak p_0$. The quotient maps $A/J^{n+1}A\twoheadrightarrow B/J^{n+1}B$ give $\chi_{J,B}(n)\le\chi_{J,A}(n)$, hence $s:=\deg P_{J,B}\le r$. Choose $x\in\mathfrak p_1\setminus\mathfrak p_0$ and write $\bar x$ for its nonzero image in the domain $B$. Multiplication by $\bar x$ is injective, so $$0\to B\xrightarrow{\bar x}B\to C:=B/\bar xB\to0$$ is short exact; the image of $J$ is an ideal of definition in both $B$ and $C$. Applying [L2] at the maximum of $s$ and $\deg P_{J,C}$ cancels the two degree-$s$ contributions from $B$; if $\deg P_{J,C}\ge s$, it would force the nonzero leading coefficient of $P_{J,C}$ to vanish. Hence $\deg P_{J,C}<s\le r$. The images of $\mathfrak p_1,\ldots,\mathfrak p_e$ give a strict prime chain of length $e-1$ in $C$. The induction hypothesis applied to $C$ gives $$e-1\le\dim C\le\deg P_{J,C}\le r-1,$$ and therefore $e\le r$. Since the chain was arbitrary, $\dim A\le r$. [L2, induction, algebra]


2.1 Steps 1.2 and 1.4 give $r=d=\dim A$, and step 1.1 transfers this equality to $M$. Therefore $\deg P_{I,M}=\dim\operatorname{Supp}(M)$. [step 1.1, step 1.2, step 1.4] ∎
