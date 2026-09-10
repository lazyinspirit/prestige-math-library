---
id: fs-a-countable-elementary-submodel-is-a-transitive-subset
kind: false-statement
title: "A countable elementary submodel need not be transitive"
status: draft
origin: pipeline
deps: [thm-countable-elementary-submodels-and-transitive-collapses, lem-collapse-fixes-transitive-parts-and-orders-ordinals, def-axiom-of-choice, thm-hartogs]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — §4 Theorem 4.4 and Exercise 4.7 pp11–12, local counterexample"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

False statement: every countable elementary submodel of a transitive set is transitive. In ZFC there is a countable $X\prec V_\theta$ with $\omega_1\in X$ that is not transitive.

## Facts & Assumptions

[F1] [[thm-hartogs]]: For every set $A$ there is an ordinal (def-ordinal) that does not inject
into $A$, that is, admits no injective function into $A$. The least such
ordinal is the **Hartogs number** $\aleph(A)$, and it is exactly

$$\aleph(A) = \{\mathrm{ot}(S, R) : S \subseteq A \text{ and } R \text{ well-orders } S\},$$

the set of order types (thm-mostowski-collapse) of the well-ordered subsets
of $A$.

**The proof is choice free.** That is the whole point of the theorem: in ZF
alone, with no assumption that $A$ can be well ordered, one still gets an
ordinal too long to be laid inside $A$.

[F2] [[thm-countable-elementary-submodels-and-transitive-collapses]]: In ZFC, if an infinite set membership structure $M$ satisfies Extensionality, then for every at most countable $A\subseteq M$ there is a countably infinite $X\prec M$ containing $A$, and $X$ has a countable transitive collapse. To retain a set $a\in M$ as one parameter, use $A=\{a\}$.

[F3] [[lem-collapse-fixes-transitive-parts-and-orders-ordinals]]: Let $\pi:X\to\bar X$ be a collapse of actual membership as above. It fixes every transitive subset $A\subseteq X$ pointwise. If $\alpha\in X$ is an actual ordinal, $\pi(\alpha)$ is the order type of $X\cap\alpha$. In particular, if $X\cap\alpha$ is transitive, $\pi(\alpha)=X\cap\alpha$.

[F4] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function

## Refutation

**Given:** Ambient ZFC and actual cumulative hierarchy stages.

1.1 By F1 let $\kappa$ be the least ordinal not injecting into $\omega$, that is $\omega_1$. Choose $\theta=\kappa+\omega$. Then $\kappa\in V_\theta$, the stage is infinite and transitive, and it satisfies Extensionality: any actual distinguishing member of two elements remains in the stage by transitivity. With AC as in F4, apply F2 to the parameter set $\{\kappa\}$ to get a countable $X\prec V_\theta$ containing $\kappa$. [F1, F2, F4, given]

2.1 If $X$ were transitive, $\kappa\in X$ would imply $\kappa\subseteq X$. Composing this inclusion with a countability injection $X\to\omega$ would inject $\kappa$ into $\omega$, contradicting its definition. Thus this $X$ satisfies the hypotheses of the proposed assertion and fails its conclusion. [step 1.1, algebra]

3.1 F3 computes the collapse value of $\kappa$ as $\operatorname{ot}(X\cap\kappa)$, a countable ordinal because the trace is countable. It cannot equal the uncountable $\kappa$. The transitive collapse is therefore a different membership presentation, as required. [F3, step 1.1, step 2.1] ∎

