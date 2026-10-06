---
id: lem-ribbon-trace-equals-the-framed-closure-evaluation
kind: lemma
title: "The ribbon trace equals the framed-closure evaluation"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [def-ribbon-evaluation-of-an-x-colored-closed-braid, thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor, thm-basic-properties-of-the-categorical-trace, def-the-framed-oriented-tangle-category, def-the-categorical-trace-of-a-morphism-into-the-double-dual, def-left-dual-and-right-dual-object, def-twist-and-ribbon-structure, thm-a-braided-rigid-category-has-a-drinfeld-morphism, def-countable-choice]
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
      locator: "Chapter I Corollary 2.7.1 and Corollary 2.7.2, printed pp. 42--44; Theorem I.2.5 and the trace formula (1.5.a), printed pp. 21--22 and 39--40"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10 Remark 8.10.3, formula (8.35) and the relation of the spherical trace (8.40) to $\\operatorname{Tr}_L$, printed pp. 216--218 and 220"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $\mathcal C$ be a
ribbon category with chosen left duals and twist
$\theta$ ([[def-twist-and-ribbon-structure]]), let $X\in\mathcal C$, let
$n\ge1$ and $\beta\in B_n$, and let $\widehat\beta^{\mathrm{fr}}$ be the
blackboard-framed closure of $\beta$: the closed framed tangle diagram obtained
from the $(n,n)$-tangle diagram of $\beta$ by joining its top boundary points
to its bottom boundary points by the identity pairing in the blackboard
framing, with every band colored by $X$. Denote by
$F_X(\widehat\beta^{\mathrm{fr}})$ the value of the tangle evaluation functor
on a word in the elementary generators representing this closed diagram. Then

$$t_n(\beta)=F_X(\widehat\beta^{\mathrm{fr}})\in\operatorname{End}_{\mathcal C}(\mathbf 1),$$

where $t_n$ is the ribbon trace of
[[def-ribbon-evaluation-of-an-x-colored-closed-braid]] and $F_X$ is the tangle
evaluation functor of
[[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]].
Consequently $t_n(\beta)$ depends only on the framed isotopy class of
$\widehat\beta^{\mathrm{fr}}$, and the blackboard-framed closure of the positive
stabilization $\iota_n(\beta)\sigma_n$ is the framed closure of $\beta$ with
one positive curl added on a band, while the closure of the negative
stabilization adds one negative curl; with Turaev's convention the positive
curl is the generator $\varphi_X$ with $F_X(\varphi_X)=\theta_X$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a ribbon category $\mathcal C$ with chosen left duals and twist $\theta$; an object $X$; $n\ge1$ and $\beta\in B_n$; the $(n,n)$-tangle diagram of $\beta$ and its blackboard-framed closure obtained by joining free ends by the identity pairing.

[L1] The ribbon trace is $t_n(\beta)=\operatorname{Tr}_L(j_{X^{\otimes n}}\rho_n(\beta))$ with $j=u\theta$, the Drinfeld morphism $u$ of [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]], and the canonical braid action $\rho_n$ ([[def-ribbon-evaluation-of-an-x-colored-closed-braid]], [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]).

[L2] Under $\mathrm{AC}_\omega$ ([[def-countable-choice]]) the tangle evaluation functor $F_X$ sends the positive crossing to $c_{X,X}$, the cup and cap of the positive strand to $\operatorname{coev}_X$ and $\operatorname{ev}_X$, the positive twist to $\theta_X$, and is a monoidal functor; isotopic framed tangles have equal values ([[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]]). The elementary tangles of the framed oriented tangle category and the reading of a closed diagram as a word in the generators are as in [[def-the-framed-oriented-tangle-category]].

[L3] For a chosen left dual $Y^{\vee}$ of $Y$ the maps $\operatorname{ev}_Y\colon Y^{\vee}\otimes Y\to\mathbf 1$ and $\operatorname{coev}_Y\colon\mathbf 1\to Y\otimes Y^{\vee}$ satisfy the zig-zag identities ([[def-left-dual-and-right-dual-object]]).

[F1] Turaev's trace formula (1.5.a) is $\operatorname{tr}(f)=d_V\circ c_{V,V^{\vee}}\circ((\theta_V f)\otimes1_{V^{\vee}})\circ b_V$ for $f\in\operatorname{End}(V)$, and Corollary 2.7.2 states that closing the free ends of an $(n,n)$-graph $\Phi$ gives $F(\overline\Phi)=\operatorname{tr}(F(\Phi))$ (Turaev, printed pp. 21--22 and 43--44).

[F2] In the library's LEFT-dual convention, the pivotal trace is $\operatorname{Tr}(f)=\operatorname{ev}_{X^\vee}\circ(\psi_X f\otimes1_{X^\vee})\circ\operatorname{coev}_X$ with $\psi=u\theta$, so $\operatorname{Tr}(f)=\operatorname{Tr}_L(\psi_X f)$. The evaluator is $\operatorname{ev}_{X^\vee}$ because the preceding target is $X^{\vee\vee}\otimes X^\vee$. This translates EGNO formula (8.40) and its following trace-identification sentence; the commuting proof diagram following (8.41) explicitly uses $\operatorname{ev}_{X^*}$ (author final text, printed p. 220).

[L4] The left categorical trace is $\operatorname{Tr}_L(a)=\operatorname{ev}_{Y^{\vee}}\circ(a\otimes1_{Y^{\vee}})\circ\operatorname{coev}_Y$ for $a\colon Y\to Y^{\vee\vee}$ ([[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]).

## Proof

**Proof technique:** direct.

1.1 **The word of the closed diagram.** Read the closed framed diagram $\widehat\beta^{\mathrm{fr}}$ as a word in the elementary generators of the framed oriented tangle category: the diagram of $\beta$ contributes its crossings, and the closing bands contribute, at the free ends, one coevaluation and one evaluation pair together with the crossings and twists produced by the blackboard framing of the closing bands. Since $F_X$ is monoidal [L2], its value on the closed diagram is the composite of the corresponding generator values: evaluations $\operatorname{ev}$, coevaluations $\operatorname{coev}$, braidings $c$ and twists $\theta$. By the closure corollary of [F1] this composite is exactly Turaev's trace: $$F_X(\widehat\beta^{\mathrm{fr}})=\operatorname{tr}\bigl(\rho_n(\beta)\bigr)=\operatorname{ev}_{X^{\otimes n}}\circ c_{X^{\otimes n},(X^{\otimes n})^{\vee}}\circ\bigl((\theta_{X^{\otimes n}}\rho_n(\beta))\otimes1_{(X^{\otimes n})^{\vee}}\bigr)\circ\operatorname{coev}_{X^{\otimes n}},$$ where $\rho_n(\beta)=F_X$ applied to the $(n,n)$-tangle of $\beta$ by the generator values of [L2]. [L2, F1, construct]

2.1 **The trace formula equals the library trace.** By [F2] the composite of [F1] equals $\operatorname{Tr}_L(\psi_{X^{\otimes n}}\rho_n(\beta))$ with $\psi=u\theta$: expanding $\psi_X=u_X\theta_X$ by the defining composite of the Drinfeld morphism and substituting into [L4], the evaluation–coevaluation pair introduced by $u$ is cancelled against the outer evaluation by the zig-zag identities of [L3], leaving precisely Turaev's composite. Hence $F_X(\widehat\beta^{\mathrm{fr}})=\operatorname{Tr}_L(j_{X^{\otimes n}}\rho_n(\beta))=t_n(\beta)$ by [L1]. [L1, L3, L4, F2, step 1.1, algebra]

3.1 **Invariance and the curl.** Since $F_X$ is a functor and isotopic framed tangles are equal morphisms of the framed oriented tangle category [L2], the value $F_X(\widehat\beta^{\mathrm{fr}})$ depends only on the framed isotopy class of the closure; by step 2.1 the same holds for $t_n(\beta)$. The closure of $\iota_n(\beta)\sigma_n^{\pm1}$ is obtained from the closure of $\beta$ by adding one crossing and one band to the last strand, which in the blackboard framing is the insertion of one full twist $\varphi^{\pm1}_X$ on a band; by the generator values of [L2] its image is $\theta_X^{\pm1}$, and with the declared convention the positive stabilization corresponds to the positive curl $\varphi^{+}_X$ with $F_X(\varphi^{+}_X)=\theta_X$. [L2, step 1.1, step 2.1, construct]

4.1 **Conclusion.** Steps 1.1 and 2.1 identify the ribbon trace with the functor's value on the blackboard-framed closure, step 3.1 records the framed-isotopy invariance and the local curl picture used by the stabilization lemma. Multiplicativity and cyclicity of the trace, where used, are the published properties of [[thm-basic-properties-of-the-categorical-trace]]. The only choice principle used is $\mathrm{AC}_\omega$, consumed through the existence of the functor $F_X$ of [L2], which rests on the classification input of the tangle lemma; with $F_X$ available the trace computations of steps 1.1--3.1 are finite and use no further choice. [L1, L2, step 1.1, step 2.1, step 3.1] ∎ 