---
id: thm-the-hecke-trace-construction-is-an-oriented-link-invariant
kind: theorem
title: "The Hecke trace construction is an oriented link invariant"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps: [def-homflypt-polynomial-from-the-hecke-markov-trace,
       lem-the-markov-trace-of-an-inverse-hecke-generator,
       thm-the-ocneanu-markov-trace-exists-and-is-unique,
       def-markov-conjugation-and-stabilization-moves,
       thm-markovs-closed-braid-equivalence-theorem,
       def-closure-of-a-geometric-braid,
       def-the-homflypt-coefficient-ring,
       def-exponent-sum-of-a-braid,
       lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units,
       lem-markov-moves-preserve-oriented-closure-isotopy,
       def-axiom-of-choice, thm-alexanders-closed-braid-theorem,
       def-oriented-link-in-s-three-and-ambient-isotopy,
       prop-the-artin-presentation-surjects-onto-geometric-braids]
justified_by: []
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
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.3 Theorem 12 and its proof outline (printed pp. 47-49): Ocneanu's trace and Markov's theorem give the HOMFLYPT invariant"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Theo Johnson-Freyd, MATH 448 Reshetikhin-Turaev invariants, lecture notes 15 January 2016, Sections 1-3 (the Ocneanu trace and the Markov property)"
      url: "https://categorified.net/RTinvariants/Jan15.pdf"
---

## Statement

Assume the Axiom of Choice. Let $P$ be the Hecke-trace polynomial of
[[def-homflypt-polynomial-from-the-hecke-markov-trace]] with coefficient ring
$R$ of [[def-the-homflypt-coefficient-ring]]. Then:

(1) **conjugation**: $P(\widehat{\gamma\beta\gamma^{-1}})=P(\widehat{\beta})$
for all $n\ge1$ and all $\beta,\gamma\in B_n$;

(2) **positive stabilization**:
$P(\widehat{\beta\sigma_n})=P(\widehat{\beta})$ for all $\beta\in B_n$;

(3) **negative stabilization**:
$P(\widehat{\beta\sigma_n^{-1}})=P(\widehat{\beta})$ for all $\beta\in B_n$;

(4) consequently, if $\beta\in B_n$ and $\beta'\in B_m$ are braids whose
closures are ambient-isotopic oriented links, then
$P(\widehat\beta)=P(\widehat{\beta'})$. The assignment
$\widehat\beta\mapsto P(\widehat\beta)$ is therefore a well-defined invariant
of oriented links in $S^3$, taking values in $R$ and normalized by
$P(\text{unknot})=1$ and $P(\varnothing)=uz$; it is denoted $P(L)$ for an oriented link $L$.

## Facts & Assumptions

**Given:** AC ([[def-axiom-of-choice]]), the coefficient ring $R$, the Hecke tower $H(1)\subset H(2)\subset \cdots$ over $\Lambda$, the trace family $\operatorname{tr}_n$, the homomorphism $\pi_n:B_n\to H(n)^\times$, the exponent sum $e$, and the polynomial $P$ of [[def-homflypt-polynomial-from-the-hecke-markov-trace]]. AC is used through [F7], whose closed-braid equivalence theorem assumes AC.

[F1] $P(\widehat\beta)=u^{e(\beta)}\alpha^{n-1}\operatorname{tr}_n(\pi_n(\beta))$ for $\beta\in B_n$, and this is well defined from the braid element ([[def-homflypt-polynomial-from-the-hecke-markov-trace]]).

[F2] The Ocneanu trace satisfies (M1)-(M4): $\operatorname{tr}_n(1)=1$, $\operatorname{tr}_{n+1}\circ\iota_n=\operatorname{tr}_n$, $\operatorname{tr}_n(xy)=\operatorname{tr}_n(yx)$ and $\operatorname{tr}_{n+1}(xT_n)=z\operatorname{tr}_n(x)$ for $x\in H(n)$; also $\operatorname{tr}_{n+1}(xT_ny)=z\operatorname{tr}_n(xy)$ for $x,y\in H(n)$ ([[thm-the-ocneanu-markov-trace-exists-and-is-unique]]).

[F3] Each generator is a unit with $T_i^{-1}=v^{-1}T_i+(v^{-1}-1)$ and $T_i=vT_i^{-1}+(v-1)$, and with $z_-:=v^{-1}(z+1-v)$ one has $\operatorname{tr}_{n+1}(xT_n^{-1})=z_-\operatorname{tr}_n(x)$ for $x\in H(n)$ ([[lem-the-markov-trace-of-an-inverse-hecke-generator]]).

[F4] $e:B_n\to\mathbb Z$ is a homomorphism with $e(\sigma_i)=1$, so $e(\gamma\beta\gamma^{-1})=e(\beta)$, $e(\beta\sigma_n)=e(\beta)+1$ and $e(\beta\sigma_n^{-1})=e(\beta)-1$ ([[def-exponent-sum-of-a-braid]]).

[F5] $\pi_n$ is a group homomorphism with $\pi_n(\sigma_i)=T_i$, so $\pi_{n+1}(\beta\sigma_n)=\iota_n(\pi_n(\beta))T_n$ and $\pi_{n+1}(\beta\sigma_n^{-1})=\iota_n(\pi_n(\beta))T_n^{-1}$ under the inclusion $B_n\to B_{n+1}$ and $\iota_n:H(n)\to H(n+1)$, and $\pi_n(\gamma\beta\gamma^{-1})=\pi_n(\gamma)\pi_n(\beta)\pi_n(\gamma)^{-1}$ ([[lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units]]).

[F6] $R$ is commutative, $u,z$ are units, and $u\alpha z=1$ and $u^{-1}\alpha z_-=1$ with $\alpha=(uz)^{-1}$, $z_-=v^{-1}(z+1-v)$ ([[def-the-homflypt-coefficient-ring]]).

[F7] Markov's theorem together with the moves of [[def-markov-conjugation-and-stabilization-moves]]: two braids have ambient-isotopic oriented closures if and only if they are related by conjugation, by positive and negative stabilizations and by the inverse destabilizations ([[thm-markovs-closed-braid-equivalence-theorem]]); each move changes the closure by an ambient isotopy preserving orientation ([[lem-markov-moves-preserve-oriented-closure-isotopy]], [[def-closure-of-a-geometric-braid]]).

[F8] Under AC, every nonempty oriented link is equivalent to the closure of a braid with $n\ge1$; the empty link is the closure of the unique braid in $B_0$ ([[thm-alexanders-closed-braid-theorem]]). The geometric braid has an Artin-word representative by [[prop-the-artin-presentation-surjects-onto-geometric-braids]], so the algebraic trace formula applies. A link in $S^3$ can first be moved off infinity as in the conventions of [[def-oriented-link-in-s-three-and-ambient-isotopy]] (also used by the closure supplier).

## Proof

1.1 **Conjugation.** For $\beta,\gamma\in B_n$ the closures of $\gamma\beta\gamma^{-1}$ and $\beta$ are ambient-isotopic by [F7]; to see the invariance algebraically, [F4] gives $e(\gamma\beta\gamma^{-1})=e(\beta)$, and [F5] gives $\pi_n(\gamma\beta\gamma^{-1})=\pi_n(\gamma)\pi_n(\beta)\pi_n(\gamma)^{-1}$, so the trace property (M3) of [F2] gives $\operatorname{tr}_n(\pi_n(\gamma\beta\gamma^{-1})) =\operatorname{tr}_n(\pi_n(\beta))$; the normalising factors are therefore equal and $P(\widehat{\gamma\beta\gamma^{-1}})=P(\widehat\beta)$. [F1, F2, F4, F5, F7]

1.2 **Positive stabilization.** Let $\beta\in B_n$; then $\pi_{n+1}(\beta\sigma_n)=\iota_n(\pi_n(\beta))T_n$ by [F5], so by (M4) of [F2] and (M2), $\operatorname{tr}_{n+1}(\pi_{n+1}(\beta\sigma_n)) =\operatorname{tr}_{n+1}(\iota_n(\pi_n(\beta))T_n) =z\operatorname{tr}_n(\pi_n(\beta))$. Including this trace multiplier, the stabilized value is $P(\widehat{\beta\sigma_n})=u^{e(\beta)+1}\alpha^{n}z\operatorname{tr}_n(\pi_n(\beta))=(u\alpha z)P(\widehat\beta)$ by [F1] and [F4]. Since $u\alpha z=1$ by [F6], $P(\widehat{\beta\sigma_n})=P(\widehat\beta)$. [F1, F2, F4, F5, F6, algebra]

1.3 **Negative stabilization.** Similarly $\pi_{n+1}(\beta\sigma_n^{-1})=\iota_n(\pi_n(\beta))T_n^{-1}$ by [F5], and [F3] gives $\operatorname{tr}_{n+1}(\iota_n(\pi_n(\beta))T_n^{-1}) =z_-\operatorname{tr}_n(\pi_n(\beta))$. Including the trace multiplier, $P(\widehat{\beta\sigma_n^{-1}})=u^{e(\beta)-1}\alpha^{n}z_-\operatorname{tr}_n(\pi_n(\beta))=(u^{-1}\alpha z_-)P(\widehat\beta)$ by [F1] and [F4]. Since $u^{-1}\alpha z_-=1$ by [F6], $P(\widehat{\beta\sigma_n^{-1}})=P(\widehat\beta)$. [F1, F3, F4, F5, F6, algebra]

2.1 **Invariance on link types.** By [F7] two braids with ambient-isotopic oriented closures are connected by a finite chain of braid relations, conjugations, stabilizations and destabilizations; braid relations do not change the element of $B_n$, hence do not change $P$ by [F1]; conjugation is step 1.1 and the two stabilizations are steps 1.2 and 1.3, while a destabilization is the reverse of one of these equalities; each move preserves the isotopy class of the closure by [F7]. Hence $P$ is constant along the chain. By [F8] every nonempty oriented link has a braid representative, so these values define an invariant on every nonempty link type. The empty link has only its zero-strand representative by the page-count property of [F7], and its separate value $P(\varnothing)=uz$ from [F1] is invariant. The unknot is the closure of $1\in B_1$, and $P=u^{0}\alpha^{0}\operatorname{tr}_1(1)=1$ by (M1) of [F2]. [F1, F2, F7, F8, step 1.1, step 1.2, step 1.3] ∎

## Remarks

- The two normalising constants are exactly the ones forced by the stabilizations: the positive move scales the trace by $z$, the negative by $z_-$, and the relations of the coefficient ring make the corresponding factors $u\alpha z$ and $u^{-1}\alpha z_-$ equal to $1$.
- The invariant is the HOMFLYPT polynomial in the normalisation of [[def-the-homflypt-coefficient-ring]]; its skein relation is [[thm-the-homflypt-skein-relation]] and its Jones specialization is [[def-temperley-lieb-quotient-and-jones-specialization]].
