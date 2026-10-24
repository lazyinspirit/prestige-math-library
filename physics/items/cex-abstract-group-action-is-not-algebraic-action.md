---
id: "cex-abstract-group-action-is-not-algebraic-action"
kind: "counterexample"
title: "An abstract group action need not be an algebraic action"
status: published
origin: "pipeline"
deps: ["def-rational-action-on-affine-variety", "prop-affine-algebraic-actions-coordinate-ring-coaction", "thm-coordinate-ring-of-affine-action-is-locally-finite", "def-axiom-of-choice", "thm-classical-affine-global-regular-functions-coordinate-ring", "thm-classical-polynomial-functions-equal-coordinate-ring"]
provenance: {"statement": "ai-generated", "proof": "ai-altered"}
sources: {"references": [{"title": "Michel Brion, Introduction to actions of algebraic groups (2010)", "url": "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf", "locator": "§1.1, Definitions 1.4, 1.6, 1.8, Lemma 1.5, Example 1.7 and Proposition 1.9; printed pp. 3–4"}, {"title": "Philippe Gille, Introduction to reductive group schemes over rings, full notes retrieved 2026-10-02", "url": "https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf", "locator": "§6, Proposition 6.0.5, pp. 25–27; Proposition 6.2.1, pp. 30–31; Theorem 6.3.1, p. 32"}, {"title": "J. S. Milne, Algebraic Groups (2022)", "url": "https://www.jmilne.org/math/Books/iAG2022.pdf", "locator": "§4(a) Remark 4.1, pp. 83–84; Proposition 4.7 and Corollary 4.8, p. 86; Theorem 12.12 and Remark 12.13, printed pp. 234–235"}]}
generation: {"role": "counterexample"}
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-03
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-03
    scope: Recovered historical Step5 independent whole-item claim/body/proof read for cex-abstract-group-action-is-not-algebraic-action and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-23; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.
    delegated_by: owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch
    content_sha256: a58618d519e61659f6e7ce4210d837fcca613162da789f45daf2ab1d33abac56
    evidence:
      - research/frontier-38-owner-30-reader-23.md
      - research/frontier-38-owner-30-reader-findings-23.json
      - research/frontier-38-owner-30-dispatch/reader-reader-23.result.json
      - research/frontier-38-owner-30-step5-hash-23-pre.json
    historical_binding:
      commit: d90f26208
      file: items/cex-abstract-group-action-is-not-algebraic-action.md
      historical_raw_sha256: 3e39ea3aa6bed7b684fa8c7a8dd23af19d7df1142431b8a0aa1e59f78c54f35d
      transformations:
        - remove only judge stamp using stripJudgeStamp
        - publication changed status draft to published; verification metadata excluded from content hash
      source_snapshot: sources and source locators included in the exact bound mathematical carrier
      read_completed_at: 2026-10-03T08:25:40.626Z
---

## Statement refuted

Every abstract action of the group of complex points of an affine algebraic group on an affine algebraic set is algebraic and induces a rational coordinate-ring representation.

## Facts & Assumptions

**Given:** The additive group $G=(\mathbb C,+)$, $X=\mathbb A^1$, and the abstract action $g\cdot x=x+\overline g$. AC is assumed for the published classical affine function theorem and the A-page coaction implication ([[def-axiom-of-choice]]).

[F1] An algebraic action must be a morphism, and its coordinate action uses inverse pullback ([[def-rational-action-on-affine-variety]]).

[F2] An algebraic action would have an algebraic coordinate coaction and locally finite rational coordinate representation ([[prop-affine-algebraic-actions-coordinate-ring-coaction]], [[thm-coordinate-ring-of-affine-action-is-locally-finite]]).

[F3] Global regular functions on an affine algebraic set are coordinate-ring elements, hence polynomial functions ([[thm-classical-affine-global-regular-functions-coordinate-ring]], [[thm-classical-polynomial-functions-equal-coordinate-ring]]).

## Counterexample

1.1 Conjugation is additive, so $g\cdot(h\cdot x)=x+\overline h+\overline g=(g+h)\cdot x$ and $0\cdot x=x$. Each fixed $g$ acts by the polynomial translation $x\mapsto x+\overline g$. But the joint action is not a morphism: restriction along $g\mapsto(g,0)$ would make $g\mapsto\overline g$ a polynomial on $\mathbb A^1$. Such a polynomial would equal $g$ on all real numbers, hence be the identity polynomial, but would then send $i$ to $i$ rather than $-i$. [given, F1, F3, algebra]

2.1 Inverse pullback acts on $W=\mathbb C1+\mathbb Cz$ by $1\mapsto1$ and $z\mapsto z-\overline g$. Thus $W$ is stable, yet its representation has nonregular matrix coefficient $-\overline g$, by step 1.1. No larger finite-dimensional stable subspace containing $z$ can be algebraic: it contains every translate $z-\overline g$, in particular the translate $z-1$ for the group element $1$, so it also contains the difference $z-(z-1)=1$ and hence the stable $W$, and restriction to $W$ would have regular matrix entries by taking a finite basis extending a basis of $W$. Consequently the coordinate representation is not rational, even though each polynomial's translates lie in its finite-dimensional bounded-degree space. This explicitly violates the rationality conclusion in F2, and refutes the claim. [F1, F2, step 1.1, algebra] ∎
