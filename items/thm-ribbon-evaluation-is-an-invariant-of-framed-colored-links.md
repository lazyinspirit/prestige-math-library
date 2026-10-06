---
id: thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links
kind: theorem
title: "The ribbon evaluation is an invariant of framed colored links"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [lem-ribbon-trace-equals-the-framed-closure-evaluation, thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor, def-ribbon-evaluation-of-an-x-colored-closed-braid, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I Theorem I.2.5 and the isotopy invariance of $F$, printed pp. 39--40"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10 Remark 8.10.3 (framed links, and the fact that Markov stabilization changes framing), printed pp. 216--217"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $\mathcal C$ be a
ribbon category and $X\in\mathcal C$. If $\beta\in B_n$
and $\beta'\in B_{n'}$, with $n,n'\ge1$, are braids whose blackboard-framed $X$-colored closures
are isotopic as framed oriented tangles, then

$$t_n(\beta)=t_{n'}(\beta')$$

in $\operatorname{End}_{\mathcal C}(\mathbf 1)$. More generally, $t$ is an
invariant of framed $X$-colored links: the value $t_n(\beta)$ depends only on
the framed isotopy class of the closure of $\beta$. Ordinary Markov
stabilization is not a framed isotopy: it inserts a curl and is handled only
after writhe normalization.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a ribbon category $\mathcal C$, an object $X$, braids $\beta\in B_n$ and $\beta'\in B_{n'}$ whose blackboard-framed $X$-colored closures are isotopic as framed oriented tangles.

[L1] The ribbon evaluation equals the evaluation of the blackboard-framed closure: $t_n(\beta)=F_X(\widehat\beta^{\mathrm{fr}})$, and the same for $\beta'$; moreover the closure of the stabilized braid $\iota_n(\beta)\sigma_n^{\pm1}$ is the closure of $\beta$ with one full twist added on a band ([[lem-ribbon-trace-equals-the-framed-closure-evaluation]]).

[L2] The tangle evaluation functor assigns equal values to isotopic framed tangles: isotopic framed tangles are equal morphisms of the framed oriented tangle category, and a functor preserves equalities ([[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]]).

## Proof

**Proof technique:** direct.

1.1 **The two evaluations agree.** By [L1] $t_n(\beta)=F_X(\widehat\beta^{\mathrm{fr}})$ and $t_{n'}(\beta')=F_X(\widehat{\beta'}^{\mathrm{fr}})$. The closures are isotopic framed oriented tangles by hypothesis, so by [L2] their values under $F_X$ are equal. Hence $t_n(\beta)=t_{n'}(\beta')$. [L1, L2, given]

1.2 **The framing changes under stabilization.** By [L1], stabilization inserts one signed full twist. A framing number is the linking number of a component with its normal push-off; a full twist changes that number by $\pm1$ (Turaev, Chapter I §2.1, printed pp. 34--35). The sum of component framing numbers is preserved by framed isotopy, including permutation of components, and changes by $\pm1$ here. Thus stabilization is not a framed isotopy. Its evaluations can nevertheless coincide in a particular category; the functorial invariance alone gives no stabilization identity. [L1, given]

2.1 **Framed-link invariance.** On any closed framed $X$-colored tangle $L$, define its evaluation to be $F_X(L)$. By [L2] this is a framed-isotopy invariant, and [L1] identifies it with $t_n(\beta)$ whenever $L$ is the blackboard-framed closure of $\beta$. On the empty tangle the strict-model evaluator is the identity of the unit, agreeing with $t_0(e)$. This constructs the general evaluation without assuming that every framing has a blackboard-braid representative. [L1, L2, step 1.1, construct]

3.1 **Conclusion.** Steps 1.1--1.2 give the framed-isotopy invariance of the ribbon evaluation, and step 1.2 records that ordinary Markov stabilization changes the framing and lies outside this statement. The only choice principle used is $\mathrm{AC}_\omega$, consumed through the closure comparison of [L1] and the functor $F_X$ of [L2]; the final comparison of the two values is then functoriality of $F_X$ applied to equal morphisms. [step 1.1, step 2.1, step 1.2] ∎ 