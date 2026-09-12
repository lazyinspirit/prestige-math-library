---
id: "cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable"
kind: "corollary"
title: "Conditional expectation as a measurable function of the conditioning variable"
deps: ["thm-disintegration-of-a-joint-law-on-standard-borel-spaces", "thm-conditional-integration-through-a-regular-conditional-law", "thm-measurability-of-integration-against-a-kernel", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
verification:
  audited: 2026-09-12
---

## Statement

Assume AC. Let X,Y take values in standard-Borel E,T, and let K be a disintegration kernel giving the conditional law of X given Y. For measurable $f:E\to[0,\infty]$, put $h(y)=\int_E f(x)K(y,dx)$. Then h is measurable and
$$E[f(X)\mid\sigma(Y)]=h(Y)\quad\text{almost surely}.$$

For measurable real f with $E|f(X)|<\infty$, define $D=\{y:\int|f(x)|K(y,dx)<\infty\}$ and use the signed integral for h on D, zero off D. Then $P_Y(D)=1$, h is real measurable, and the same identity holds.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Under AC a disintegration kernel has the rectangle and all nonnegative joint-test identities. [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]].

[F2] A specified RCD integrates nonnegative or integrable tests to conditional-expectation versions. [[thm-conditional-integration-through-a-regular-conditional-law]].

[F3] Probability-kernel integration is measurable, including signed integration with zero filling. [[thm-measurability-of-integration-against-a-kernel]].

[F4] AC covers disintegration existence and the inherited conditional-expectation class convention. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 The product function $(y,x)\mapsto f(x)$ is measurable by the rectangle inverse-image test. Thus [F3] makes h measurable. The rectangle identities of [F1] make $L(\omega,A)=K(Y(\omega),A)$ an RCD of X given $\sigma(Y)$, since the events of that sigma-algebra are exactly inverse images of measurable Y-events. Applying [F2] to this L gives $\int f(x)L(\omega,dx)=E[f(X)\mid\sigma(Y)]$ as classes, under [F4]. The integral on the left is h(Y) by its definition, which proves the nonnegative clause, allowing infinity. [F1, F2, F3, F4]

2.1 For real f, [F3] makes $a(y)=\int|f(x)|K(y,dx)$ and $D=\{a<\infty\}$ measurable and makes the zero-filled signed h real measurable. The nonnegative test identity of [F1] gives $\int a\,dP_Y=E|f(X)|=C<\infty$. For every integer $n\ge1$, $nP_Y(D^c)\le C$, hence $P_Y(D^c)=0$. Its inverse image under Y is null by the marginal definition. On that inverse-image complement the signed integral through L is h(Y), and on it both zero-fill conventions agree. The signed clause of [F2] therefore proves the stated real integrable conditional identity. Values at any fixed marginal-null fibre are not prescribed by this almost-sure identity. [step 1.1, F1, F2, F3, F4] ∎
