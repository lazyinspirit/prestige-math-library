---
id: thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields
kind: theorem
title: One-parameter subgroups are integral curves of left-invariant fields
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-one-parameter-subgroup-of-a-lie-group", "def-integral-curve-of-a-vector-field", "thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity", "thm-left-invariant-vector-fields-are-complete", "thm-unique-maximal-integral-curve-through-each-point", "thm-chain-rule-for-differentials-of-smooth-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Proposition 3.1 and complete real-case proof, printed page 29
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group
with Lie algebra $\mathfrak g=T_eG$.

If $\gamma:\mathbb R\to G$ is a one-parameter subgroup and
$X=\gamma'(0)$, then

$$\gamma'(t)=d(L_{\gamma(t)})_eX=X^L_{\gamma(t)}$$

for every $t\in\mathbb R$; thus $\gamma$ is the integral curve through $e$ of
the left-invariant field $X^L$. Conversely, the global integral curve through
$e$ of $X^L$ is a one-parameter subgroup. Consequently every
$X\in\mathfrak g$ determines a unique one-parameter subgroup with initial
velocity $X$.

The countable-choice assumption is used exactly through the supplied smooth
invariant-field construction and completeness theorem.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$ with
identity $e$, and $X\in\mathfrak g=T_eG$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] A one-parameter subgroup is a smooth homomorphism
$\gamma:(\mathbb R,+)\to G$, so
$\gamma(s+t)=\gamma(s)\gamma(t)$ and $\gamma(0)=e$.
[[def-one-parameter-subgroup-of-a-lie-group]].

[F3] Evaluation at $e$ identifies $\mathfrak g$ with the left-invariant
smooth fields: $X$ determines the unique field
$X^L_g=d(L_g)_eX$. This result assumes $\mathrm{AC}_\omega$ through the
smooth tangent-bundle framework.
[[thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity]].

[F4] Every left-invariant smooth field is complete, assuming
$\mathrm{AC}_\omega$ through that same framework.
[[thm-left-invariant-vector-fields-are-complete]].

[F5] A curve $c$ is an integral curve of a field $Y$ precisely when
$c'(t)=Y_{c(t)}$. [[def-integral-curve-of-a-vector-field]].

[F6] Through each point there is a unique maximal integral curve.
[[thm-unique-maximal-integral-curve-through-each-point]].

[F7] Differentials of smooth maps obey the chain rule.
[[thm-chain-rule-for-differentials-of-smooth-maps]].

## Proof

**Proof technique:** direct.

1.1 Let $\gamma$ be a one-parameter subgroup with $\gamma'(0)=X$. For fixed $t$, [F2] gives $\gamma(t+s)=L_{\gamma(t)}(\gamma(s))$. Differentiating at $s=0$ and using [F7] yields $$\gamma'(t)=d(L_{\gamma(t)})_e\gamma'(0)=d(L_{\gamma(t)})_eX=X^L_{\gamma(t)}.$$ Hence $\gamma$ is an integral curve of $X^L$ through $e$. [F2, F3, F5, F7, algebra]

1.2 Conversely, let $X^L$ be the unique field supplied by [F3]. By [F4] and [F6], its maximal integral curve $c:\mathbb R\to G$ with $c(0)=e$ is global. Fix $s\in\mathbb R$ and define $a_s(t)=c(s+t)$ and $b_s(t)=c(s)c(t)$. Both curves are defined for every real $t$, and $a_s(0)=b_s(0)=c(s)$. [F3, F4, F6, construct]

2.1 By [F5], $a_s'(t)=X^L_{c(s+t)}=X^L_{a_s(t)}$. The chain rule and left invariance give $$b_s'(t)=d(L_{c(s)})_{c(t)}c'(t)=d(L_{c(s)})_{c(t)}X^L_{c(t)}=X^L_{c(s)c(t)}=X^L_{b_s(t)}.$$ Thus $a_s$ and $b_s$ are global integral curves through the same point at time zero. Uniqueness in [F6] gives $c(s+t)=c(s)c(t)$ for all $s,t\in\mathbb R$. [F3, F5, F6, F7, step 1.2, algebra]

3.1 The curve $c$ is smooth, global, satisfies $c(0)=e$ and the homomorphism law from step 2.1, so it is a one-parameter subgroup by [F2]; its initial velocity is $c'(0)=X^L_e=X$. If $\gamma$ is any other one-parameter subgroup with initial velocity $X$, step 1.1 makes it an integral curve of $X^L$ through $e$, and [F6] forces $\gamma=c$. This proves existence and uniqueness for every $X\in\mathfrak g$. [F2, F3, F5, F6, step 1.1, step 2.1]

4.1 Lie groups are nonempty and boundaryless. If $\dim G=0$, then $X=0$ and the unique curve is constant; in dimension one the proof is unchanged. Both time directions are covered because $c$ has domain all of $\mathbb R$. No metric or nondegeneracy condition occurs. The only choice assumption is the stated $\mathrm{AC}_\omega$, inherited through [F3] and [F4]; fixing one $X$ and one real $s$ adds no family choice. The two implications in the statement are proved in steps 1.1 and 1.2--3.1. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 1.2, step 2.1, step 3.1] ∎
