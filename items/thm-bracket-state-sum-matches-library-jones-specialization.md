---
id: thm-bracket-state-sum-matches-library-jones-specialization
kind: theorem
title: "The bracket state sum matches the library Jones specialization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-elementary-geometric-half-twist
  - def-exponent-sum-of-a-braid
  - def-closure-of-a-geometric-braid
  - def-braid-group-by-the-artin-presentation
  - lem-hecke-bracket-trace-dictionary-and-local-descent
  - thm-normalized-bracket-is-an-oriented-link-invariant
  - def-temperley-lieb-quotient-and-jones-specialization
  - thm-the-hecke-trace-construction-is-an-oriented-link-invariant
  - thm-alexanders-closed-braid-theorem
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes full AC for the library Hecke link invariant; derives ACω for the normalized bracket theorem through the stated implication."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§III and VI, printed pp. 430–432 and 466–469"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
    - title: "Justin Roberts, Knots Knotes, §§4.1–4.4, printed pp. 21–26"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "François Funar, A Crash Course in Quantum Invariants of Knots and 3-Manifolds, Chapter 3, §§1.1–2.3"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf"
---

## Statement


Assume the Axiom of Choice. Let $A$ and $t$ be formal variables and $K$ a
nonempty oriented link, and let $D$ be any regular oriented diagram
representing $K$. At each crossing of $D$ use the source chart with over-strand southwest-to-northeast: A joins left and right
endpoints with coefficient $A$, and B joins top and bottom endpoints with
coefficient $A^{-1}$. A state $S:C(D)\to\{A,B\}$ assigns one smoothing at every
crossing; let $a(S)$ and $b(S)$ count these choices and $|S|$ count the
resulting circles. Fix a unit viewing normal $n$ and orient the projection
plane $P$ so $(u,v)$ is positive exactly when $(n,u,v)$ is positive in the
ambient oriented $3$-sphere. Define
$$\operatorname{sgn}(c)=\operatorname{sgn}\det_P(v_{\rm over},v_{\rm under}), \qquad \operatorname{wr}(D)=\sum_c\operatorname{sgn}(c),$$
$$f_K(A)=(-A^3)^{-\operatorname{wr}(D)} \sum_{S:C(D)\to\{A,B\}}A^{a(S)-b(S)}(-A^2-A^{-2})^{|S|-1}.$$
This value is independent of the chosen regular oriented diagram of $K$.
For an $n$-strand braid $\beta$ whose oriented closure is $K$, let
$e:B_n\to\mathbb Z$ be the homomorphism $e(\sigma_i)=1$, where $\sigma_i$
is the positive geometric Artin half twist. Let $H(n)$ be the type-A Hecke
algebra with generators $T_i$, quadratic relation $T_i^2=(v-1)T_i+v$, braid
relations, and distant commutation, and let $\pi_n(\sigma_i)=T_i$. Its
normalized Markov trace $\operatorname{tr}_n$ satisfies
$\operatorname{tr}_n(1)=1$, cyclicity, tower restriction, and
$\operatorname{tr}_{n+1}(xT_n)=z\operatorname{tr}_n(x)$. Define the library
Jones value by
$$V_K(t)=s^{e(\beta)}\left(-\frac{s^2+1}{s}\right)^{n-1} \operatorname{tr}_n(\pi_n(\beta))\Big|_{v=s^2,\,z=-1/(s^2+1),\,t=s^2},$$
where $s=t^{1/2}$. With $A=t^{-1/4}$, these values satisfy
$$V_K(t)=f_K(t^{-1/4}).$$
## Statement references

[[def-temperley-lieb-quotient-and-jones-specialization|Hecke-trace Jones specialization]]

[[thm-normalized-bracket-is-an-oriented-link-invariant|Normalized bracket invariance]]

[[lem-hecke-bracket-trace-dictionary-and-local-descent|Braid closure trace dictionary]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §§III and VI](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §§4.1–4.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Funar, *A Crash Course in Quantum Invariants of Knots and 3-Manifolds*, Chapter 3, §§1.1–2.3](https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf)

## Facts & Assumptions

**Given:** Full AC, a nonempty oriented link $K$, a braid closure of $K$, and
the two polynomial constructions in the statement.

[A1] Full AC means that every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F1] Full AC implies countable choice
([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] The positive Artin half twist has determinant crossing sign $+1$; the
opposite reflected half twist exchanges over and under and has sign $-1$
([[def-oriented-crossing-sign-writhe-and-blackboard-framing]],
[[def-elementary-geometric-half-twist]]).

[F3] The braid exponent sum is additive, with $e(\sigma_i)=1$ and
$e(\sigma_i^{-1})=-1$
([[def-exponent-sum-of-a-braid]]).

[F4] For every braid closure, the normalized bracket satisfies
$$f_{\widehat\beta}(A)=(-A^3)^{-\operatorname{wr}(\widehat\beta)} \langle\widehat\beta\rangle,$$
and its value is independent of the regular diagram under AC$ _\omega$
([[thm-normalized-bracket-is-an-oriented-link-invariant]]).

[F5] For every $n$-braid, the raw bracket has the trace expression
$$\langle\widehat\beta\rangle =\delta^{n-1}(-A)^{e(\beta)}\operatorname{tr}_n(\pi_n(\beta)) \big|_{v=A^{-4},\,z=-1/(A^{-4}+1)},\qquad \delta=-A^2-A^{-2}$$
([[lem-hecke-bracket-trace-dictionary-and-local-descent]]).

[F6] The library Jones value is invariant under braid equivalence and Markov
moves under full AC, and is given by the trace formula in the Statement
([[thm-the-hecke-trace-construction-is-an-oriented-link-invariant]],
[[def-temperley-lieb-quotient-and-jones-specialization]]).

[F7] Every nonempty oriented link has a braid closure under full AC
([[thm-alexanders-closed-braid-theorem]],
[[def-closure-of-a-geometric-braid]]).

[F8] Every element of $B_n$ is represented by a finite word in the Artin
generators and their inverses; each letter is one geometric half twist or its
opposite, and the closure joins the braid endpoints
([[def-braid-group-by-the-artin-presentation]],
[[def-elementary-geometric-half-twist]],
[[def-closure-of-a-geometric-braid]]).

## Proof

1.1 A closed braid diagram has one crossing for each letter in a finite Artin word and no crossings at its closure arcs. Each positive generator contributes $+1$ to writhe by [F2]. In the reflected inverse half twist, the over- and under-strands exchange while their oriented projected tangent vectors retain their respective directions; exchanging the two vectors negates their determinant, so each inverse generator contributes $-1$. Summing over the word and using the homomorphism in [F3] and the finite word representation in [F8] gives $$\operatorname{wr}(\widehat\beta)=e(\beta).$$ [F2, F3, F8, algebra]

2.1 Put $q=A^{-2}$ and $t=q^2$. Then $\delta=-A^2-A^{-2}=-(q+q^{-1})=-(t+1)/q$. By [F5] and step 1.1, $$\begin{aligned} f_{\widehat\beta}(A) &=(-A^3)^{-e(\beta)}\delta^{n-1}(-A)^{e(\beta)} \operatorname{tr}_n(\pi_n(\beta))\\ &=q^{e(\beta)}\delta^{n-1}\operatorname{tr}_n(\pi_n(\beta))\\ &=q^{e(\beta)}\left(-\frac{q^2+1}{q}\right)^{n-1} \operatorname{tr}_n(\pi_n(\beta)). \end{aligned}$$ This is exactly the library trace normalization with $s=q$ and $t=s^2$ from [F6]. Thus the two constructions agree on every braid closure. [F4, F5, F6, step 1.1, algebra]

3.1 Put $R_A=\mathbb Z[A^{\pm1},(A^{-4}+1)^{-1}]$, as in [F5]. The target coefficient ring in [F6] is $T=\mathbb Z[s^{\pm1},(s^2+1)^{-1}]$. The substitution $s\mapsto A^{-2}$, $t=s^2\mapsto A^{-4}$ defines a ring map $T\to R_A$. It is injective because distinct Laurent powers $s^k$ map to distinct Laurent monomials $A^{-2k}$, and the localization denominator maps to the unit $A^{-4}+1$. Hence the equality from step 2.1 is an equality in $T$, with $t=s^2$, rather than only after embedding the two values in a larger ring. [F5, F6, step 2.1, algebra]

4.1 By [A1] and [F1], full AC supplies the countable-choice hypothesis of [F4]. By [F7], choose a braid closure for the given nonempty link $K$. The calculation in step 2.1 and its ring identification in step 3.1 prove equality on that closure; the invariance in [F4] and [F6] makes both values independent of the chosen regular diagram and braid representative. Therefore $V_K(t)=f_K(t^{-1/4})$ for every nonempty oriented link. [A1, F1, F4, F6, F7, step 2.1, step 3.1, given] ∎
