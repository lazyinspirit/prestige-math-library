---
id: cex-stable-isomorphism-does-not-imply-actual-bundle-isomorphism
kind: counterexample
title: Stable isomorphism does not imply actual bundle isomorphism
status: published
origin: pipeline
deps: [def-vector-bundle-map-section-subbundle-and-isomorphism, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §1.1 tangent-bundle example"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Tangent and normal bundles of a sphere, printed pp.9–10"
    - title: "Milnor and Stasheff, Characteristic Classes, §2"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Stable equivalence and tangent-bundle examples, printed pp.14–19"
---

## Statement refuted

**False claim:** if two vector bundles become isomorphic after adding the same
trivial summand, then they were already isomorphic.

The real tangent bundle gives a counterexample:

$$TS^2\oplus\varepsilon_{\mathbb R}^1\cong\varepsilon_{\mathbb R}^3,$$

but $TS^2\not\cong\varepsilon_{\mathbb R}^2$. This is a real boundary example
for the cancellation issue behind Grothendieck completion; it does not assert
an equality between complex bundles in $K^0$.

## Facts & Assumptions

**Given:** the unit sphere $S^2\subset\mathbb R^3$.

[F1] Bundle isomorphisms are fiberwise-linear isomorphisms over the identity,
and a section is nowhere zero when it avoids each zero vector
([[def-vector-bundle-map-section-subbundle-and-isomorphism]]).

[F2] Whitney sum has fiber the direct sum of the two bundle fibers
([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F3] The even sphere $S^2$ has no continuous nowhere-zero tangent vector field
([[thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere]]).

## Counterexample

**Proof technique:** contradiction after an explicit stable isomorphism.

1.1 Write $TS^2=\{(x,v)\in S^2\times\mathbb R^3:\langle x,v\rangle=0\}$. Its normal line is trivialized by $x\mapsto(x,x)$. Using [F2], define $\Phi:TS^2\oplus\varepsilon_{\mathbb R}^1\to S^2\times\mathbb R^3$ by $\Phi((x,v),(x,t))=(x,v+tx)$. The continuous inverse sends $(x,w)$ to $((x,w-\langle w,x\rangle x),(x,\langle w,x\rangle))$. Thus [F1] verifies the displayed stable bundle isomorphism fiber by fiber, including at $t=0$. [F1, F2, construct, algebra]

1.2 Suppose for contradiction that an actual bundle isomorphism $\Psi:\varepsilon_{\mathbb R}^2\to TS^2$ exists. [assume-contra]

2.1 The constant section $x\mapsto(x,(1,0))$ of $\varepsilon_{\mathbb R}^2$ is nowhere zero. Composing it with $\Psi$ gives a continuous nowhere-zero section of $TS^2$, hence a nowhere-zero tangent vector field in the sense of [F1]. [F1, step 1.2, construct]

3.1 This contradicts [F3]. Therefore $TS^2$ is not actually trivial, while step 1.1 proves that it becomes trivial after adding one trivial real line. The two bundles in the false claim are $TS^2$ and $\varepsilon_{\mathbb R}^2$, with the same summand $\varepsilon_{\mathbb R}^1$ added to both. [F3, step 1.1, step 2.1, discharge-contradiction] ∎
