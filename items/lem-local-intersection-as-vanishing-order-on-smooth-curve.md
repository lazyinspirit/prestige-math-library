---
id: lem-local-intersection-as-vanishing-order-on-smooth-curve
kind: lemma
title: Intersection with a smooth curve is a vanishing order
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-composition-series-and-length-of-a-module, def-discrete-valuation-ring, def-local-intersection-multiplicity-plane-curves, def-local-parameter-smooth-plane-curve, def-uniformising-parameter, lem-local-intersection-length-finite, thm-dvr-element-normal-form, thm-dvr-ideal-and-module-length, thm-localisation-commutes-with-quotients]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C$ be a plane projective curve smooth at $p$, and let $D$ be a plane projective curve whose local equation $g$ at $p$ does not vanish identically on $C$ (no common local component through $p$). Then

$$ I_p(C,D)=\operatorname{ord}_{p}(g|_C),$$

the valuation of the image of $g$ in the discrete valuation ring $\mathcal O_{C,p}$.

## Facts & Assumptions

**Given:** AC, a plane projective curve $C=V(F)$ smooth at $p$, a plane projective curve $D=V(G)$ with local equation $g$ at $p$ whose restriction $g|_C$ is nonzero, and a local equation $f$ of $C$ at $p$.

[F1] The local ring $\mathcal O_{C,p}=\mathcal O_{\mathbf P^2,p}/(f)$ is a discrete valuation ring with valuation $\operatorname{ord}_p$, and the class of $g$ in it is the restriction $g|_C$ [[def-local-parameter-smooth-plane-curve]], [[def-discrete-valuation-ring]], [[def-uniformising-parameter]].

[F2] Length is unchanged on passing to the quotient by the equation of the curve, because an $O/(f)$-module has exactly the same submodules over $O$ and over $O/(f)$: $\mathcal O_{\mathbf P^2,p}/(f,g)\cong\mathcal O_{C,p}/(g|_C)$ by localisation commuting with quotients [[thm-localisation-commutes-with-quotients]], so $I_p(C,D)=\ell_{\mathcal O_{C,p}}(\mathcal O_{C,p}/(g|_C))$ [[def-local-intersection-multiplicity-plane-curves]].

[F3] In a discrete valuation ring $V$ with uniformiser $\pi$, a nonzero element $x=u\pi^{n}$ with $u$ a unit has $\ell_V(V/(x))=n$; a nonzero element of the DVR is a nonzerodivisor, so the quotient is a finite-length module exactly of this length [[thm-dvr-element-normal-form]], [[thm-dvr-ideal-and-module-length]], [[def-composition-series-and-length-of-a-module]].

[F4] Since $g$ does not vanish identically on $C$, its class in the DVR is nonzero, so the finiteness hypothesis of the definition is satisfied and [F3] applies [[lem-local-intersection-length-finite]].

## Proof

1.1 The ring $\mathcal O_{C,p}$ is a discrete valuation ring by [F1], and the restriction $g|_C$ is its nonzero element. The quotient identification of [F2] gives $I_p(C,D)=\ell_V(V/(g|_C))$ with $V=\mathcal O_{C,p}$. [F1, F2, F4, given]

1.2 In the discrete valuation ring $V$ with uniformiser $\pi$ and valuation $\operatorname{ord}_p$, the element $g|_C$ has the normal form $g|_C=u\pi^{n}$ with $u$ a unit, and the length of $V/(g|_C)$ equals $n=\operatorname{ord}_p(g|_C)$. [F1, F3, algebra]

2.1 Combining steps 1.1 and 1.2, $I_p(C,D)=\ell_V(V/(g|_C))=\operatorname{ord}_p(g|_C)$; and by the convention of the definition the value is $0$ exactly when $g|_C$ is a unit, i.e. when $p\notin D$. This proves the displayed equality. [step 1.1, step 1.2, F3, given] ∎ 