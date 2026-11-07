---
id: lem-smith-diagonal-spin-double-coset-reduction
kind: lemma
title: "Double-coset reduction of diagonal spin to the quadratic case"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-decomposition-and-inertia-in-towers, thm-decomposition-and-inertia-fixed-fields, lem-smith-quadratic-diagonal-spin-invariance]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the quadratic diagonal-spin
  and number-field decomposition interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families II, Proposition 5.1"
      url: "https://arxiv.org/pdf/2207.05143"
      locator: "§5.1, reduction of diagonal spin to a quadratic involution"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K/F$ be a finite Galois extension of number fields and let $V$ contain the archimedean places, the places above $2$, and the places ramified in $K/F$. Let $\mathfrak P,\mathfrak Q$ be primes of $K$ over distinct finite places of $F$ outside $V$, with the same decomposition subgroup $D\le\operatorname{Gal}(K/F)$. Put $E=K^D$ and let $\tau\in\operatorname{Gal}(K/F)\setminus D$ satisfy $D\tau D=D\tau^{-1}D$.

Suppose $\alpha,\beta\in E^\times$ have valuation $1$ at $\mathfrak P\cap E$ and $\mathfrak Q\cap E$ respectively, valuation $0$ at every other finite prime of $E$ outside $V$, and $\alpha/\beta\in(E_w^\times)^2$ at every place $w$ of $E$ above $V$. Then there is $t\in D\tau$ such that, with $L=E\,tE$, the automorphism $t$ restricts to an involution of $L$, the two primes $\mathfrak p=\mathfrak P\cap L$ and $\mathfrak q=\mathfrak Q\cap L$ split in $L/L^{\langle t\rangle}$, and
$$\left(\frac{\alpha}{t\mathfrak p}\right)=\left(\frac{\beta}{t\mathfrak q}\right),$$
where the quadratic residue symbols are taken in $L$. In addition, put $L_\tau=E\,\tau E$. Then the original double-coset representative satisfies $$\left(\frac{\alpha}{(\tau\mathfrak P)\cap L_\tau}\right)=\left(\frac{\beta}{(\tau\mathfrak Q)\cap L_\tau}\right).$$ The result uses the explicit local-square labels and normalized generators; it does not assert that those labels are the source's original grid classes.

## Statement references

[[thm-decomposition-and-inertia-in-towers]]

[[thm-decomposition-and-inertia-fixed-fields]]

[[lem-smith-quadratic-diagonal-spin-invariance]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families II*, Proposition 5.1](https://arxiv.org/pdf/2207.05143)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the finite Galois extension, auxiliary places, primes, double coset, and generators in the Statement.

[F1] The decomposition group of a prime in a tower is obtained by intersecting with the relevant Galois subgroup. [[thm-decomposition-and-inertia-in-towers]]

[F2] A prime in a finite Galois extension is the unique prime over its contraction to its decomposition field. [[thm-decomposition-and-inertia-fixed-fields]]

[F3] In a quadratic extension, compatible local-square normalized generators at distinct split base primes have equal diagonal odd spin. [[lem-smith-quadratic-diagonal-spin-invariance]]

## Proof

1.1 The double-coset identity gives $a,b\in D$ with $\tau^{-1}=a\tau b$. Put $t=b\tau$. Then $t^2=ba^{-1}\in D$. Let $H=D\cap tDt^{-1}$. Since $t^2\in D$, conjugating $H$ by $t$ gives $tDt^{-1}\cap D=H$, and $t^2$ itself lies in both factors. Thus $t$ normalizes $H$ and its image in $N(H)/H$ has order two: $t\notin D$ because $\tau\notin D$. By Galois correspondence $K^H=E\,tE=L$, so $t$ induces the stated nontrivial involution on $L$. [given, construct, algebra]

2.1 Put $F'=L^{\langle t\rangle}$. Since $t$ normalizes $H$ and $t^2\in H$, $\operatorname{Gal}(K/F')=\langle H,t\rangle=H\sqcup tH$. Because $H\subseteq D$ and $t\notin D$, its intersection with $D$ is exactly $H$. By [F1], the decomposition group of $\mathfrak P$ in $K/F'$ is $H$, so the decomposition group of $\mathfrak p=\mathfrak P\cap L$ in $L/F'$ is trivial. Thus $\mathfrak p$ splits. The same argument applies to $\mathfrak Q$, and their underlying $F'$-places are distinct because their underlying $F$-places are distinct. [F1, step 1.1, given, algebra]

3.1 By [F2], $\mathfrak P$ is the unique prime of $K$ above $\mathfrak P\cap E$; hence $\mathfrak p$ is the unique prime of $L$ above that contraction. The same holds for $\mathfrak Q$ and $\mathfrak q$. Outside $V$, the tower is unramified, so the valuations of $\alpha$ and $\beta$ lifted to $L$ are still exactly $1$ at $\mathfrak p$ and $\mathfrak q$ and $0$ at all other primes outside the places of $F'$ above $V$. The local square condition over $E$ remains true in every completion of $L$ above those places. [F2, step 2.1, given, algebra]

4.1 The places of $F'$ above $V$ contain the archimedean places, the dyadic places, and the places ramified in $L/F'$. Steps 2.1 and 3.1 therefore give all hypotheses of [F3] for the quadratic extension $L/F'$ and the generators $\alpha,\beta$. Its conclusion is the displayed equality of residue symbols at $t\mathfrak p$ and $t\mathfrak q$. Write $t=b\tau$ as in step 1.1. The element $b\in D$ fixes $E$, $\alpha$ and $\beta$, and maps $L_\tau=E\tau E$ isomorphically onto $L=EtE$. It maps $(\tau\mathfrak P)\cap L_\tau$ to $t\mathfrak p$ and similarly for $\mathfrak Q$. These are primes at which the respective generators are units: otherwise their contractions to $E$ would be the original selected primes, contradicting [F2] and $\tau\notin D$. Functoriality of residue quadratic characters under this field isomorphism gives the second equality. No identification with any other grid-class convention is used. [F2, F3, step 1.1, step 2.1, step 3.1, algebra] ∎
