---
id: cex-dual-functor-is-not-covariant
kind: counterexample
title: "The dual construction reverses arrows"
status: draft
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator", "lem-transpose-reverses-composition"]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Definition 4.1 and Lemma 4.3(i), pp.172–173"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
generation:
  role: "counterexample"
proof_strategy: "Write i(t)=(t,0); composition of g(s,t)=as+bt with i is at. The proposed same-direction composition is not defined for a functional on K. No claim that all conceivable covariant assignments are impossible."
---

## Statement refuted

Let $\mathbb K=\mathbb R$ or $\mathbb C$. The proposed composition rule “a bounded $T:X\to Y$ induces $X^*\to Y^*$ by composition” has the wrong direction. For the inclusion $i:\mathbb K\to\mathbb K^2$, $i(t)=(t,0)$, composition instead gives restriction $i^*:(\mathbb K^2)^*\to\mathbb K^*$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

[F2] From [[lem-transpose-reverses-composition]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For bounded linear $T:X\to Y$, $S:Y\to Z$ between normed spaces, $(ST)^*=T^*S^*,\qquad I_X^*=I_{X^*}.$ For bounded $T,U:X\to Y$ and $a,b\in\mathbb K$, $(aT+bU)^*=aT^*+bU^*$.

## Counterexample

1.1 Use the usual scalar norm and the maximum norm on $\mathbb K^2$, so $i$ is bounded. The functional $g_{a,b}(s,t)=as+bt$ is bounded by $|g_{a,b}(s,t)|\le(|a|+|b|)\max(|s|,|t|)$. Composition gives $(i^*g_{a,b})(t)=g_{a,b}(t,0)=at$. [F1]

2.1 A functional $f:\mathbb K\to\mathbb K$ cannot be composed as $f\circ i$ to produce a functional on $\mathbb K^2$: the output of $i$ has the wrong type for the input of $f$, and the composite would in any event have domain $\mathbb K$. The valid composition reverses arrows, as also expressed by $(ST)^*=T^*S^*$. Setting $a=0,b=1$ in step 1.1 even gives a nonzero functional whose restriction is zero. This refutes the proposed composition rule, without claiming every conceivable covariant assignment is impossible. [F2, step 1.1] ∎
