---
id: thm-one-parameter-subgroups-are-exactly-exponentials
kind: theorem
title: One-parameter subgroups are exactly exponentials
status: published
origin: pipeline
deps: ["def-countable-choice", "prop-exponential-scales-one-parameter-subgroups", "def-one-parameter-subgroup-of-a-lie-group", "thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Proposition 3.1 and proof, printed page 29; Definition 3.2 and following scaling argument, printed page 30
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group
with Lie algebra $\mathfrak g$. A smooth curve $\gamma:\mathbb R\to G$ is a
one-parameter subgroup if and only if there is a unique $X\in\mathfrak g$ such
that

$$\gamma(t)=\exp_G(tX)$$

for every $t\in\mathbb R$. Necessarily $X=\gamma'(0)$. The countable-choice
assumption is used exactly through the supplied existence and uniqueness of
the one-parameter subgroups $\gamma_X$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$ with Lie algebra $\mathfrak g$, and a smooth curve $\gamma:\mathbb R\to G$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] The scaling identity is $\gamma_X(t)=\exp_G(tX)$. [[prop-exponential-scales-one-parameter-subgroups]].

[F3] A one-parameter subgroup is a smooth homomorphism $(\mathbb R,+)\to G$. [[def-one-parameter-subgroup-of-a-lie-group]].

[F4] Assuming $\mathrm{AC}_\omega$, every $X\in\mathfrak g$ determines a unique one-parameter subgroup $\gamma_X$ with $\gamma_X'(0)=X$, and any one-parameter subgroup having initial velocity $X$ is this curve. [[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields]].

## Proof

**Proof technique:** direct.

1.1 Suppose $\gamma$ is a one-parameter subgroup, and put $X=\gamma'(0)$. By uniqueness in [F4], $\gamma=\gamma_X$, so [F2] gives $\gamma(t)=\exp_G(tX)$ for every real $t$. If also $\gamma(t)=\exp_G(tY)$ for every $t$, [F2] identifies this curve with $\gamma_Y$; differentiating at zero yields $Y=\gamma'(0)=X$. [F2, F3, F4, algebra]

1.2 Conversely, fix $X\in\mathfrak g$. By [F4], $\gamma_X$ is a one-parameter subgroup, and [F2] gives $t\mapsto\exp_G(tX)=\gamma_X(t)$. Hence every exponential curve is a one-parameter subgroup in the sense of [F3]. [F2, F3, F4]

2.1 Lie groups are nonempty and boundaryless. If $\dim G=0$, then $X=0$ and the only exponential curve is constant; in dimension one the proof is unchanged. The curves have domain all of $\mathbb R$, so there is no finite endpoint. No metric or nondegeneracy condition occurs. The only choice use is the stated $\mathrm{AC}_\omega$, inherited through [F2] and [F4]; taking one derivative adds no choice. Step 1.1 proves the forward implication and uniqueness, and step 1.2 proves the reverse implication. [F1, F2, F3, F4, step 1.1, step 1.2] ∎
