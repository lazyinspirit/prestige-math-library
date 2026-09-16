---
id: prop-commuting-lie-algebra-elements-have-multiplicative-exponentials
kind: proposition
title: Commuting Lie-algebra elements have multiplicative exponentials
status: published
origin: pipeline
deps: ["def-countable-choice", "def-lie-group", "thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute", "prop-exponential-scales-one-parameter-subgroups", "def-lie-bracket-on-the-tangent-space-of-a-lie-group", "thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields", "def-one-parameter-subgroup-of-a-lie-group", "thm-one-parameter-subgroups-are-exactly-exponentials", "thm-chain-rule-for-differentials-of-smooth-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 3.36 and complete flow proof, printed page 39
verification:
  audited: 2026-09-14
  precheck: pass
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group
with Lie algebra $\mathfrak g$. If $X,Y\in\mathfrak g$ satisfy $[X,Y]_G=0$,
then

$$\exp_G(X+Y)=\exp_G(X)\exp_G(Y)=\exp_G(Y)\exp_G(X).$$

The countable-choice assumption is used exactly through the supplied tangent
bracket, invariant-field, and exponential results.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$ with identity $e$ and Lie algebra $\mathfrak g$, and $X,Y\in\mathfrak g$ with $[X,Y]_G=0$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] Lie-group multiplication $m:G\times G\to G$ is smooth. [[def-lie-group]].

[F3] The tangent bracket satisfies $[X^L,Y^L]=[X,Y]_G^L$. [[def-lie-bracket-on-the-tangent-space-of-a-lie-group]].

[F4] Two smooth vector fields have commuting local flows if and only if their bracket vanishes. [[thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute]].

[F5] The one-parameter subgroup $\gamma_X$ is the global identity integral curve of $X^L$. [[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields]].

[F6] The scaling and additive-parameter identities are $\gamma_X(t)=\exp_G(tX)$ and $\exp_G((s+t)X)=\exp_G(sX)\exp_G(tX)$. [[prop-exponential-scales-one-parameter-subgroups]].

[F7] A one-parameter subgroup is a smooth homomorphism $(\mathbb R,+)\to G$. [[def-one-parameter-subgroup-of-a-lie-group]].

[F8] A one-parameter subgroup with initial velocity $Z$ is exactly the curve $t\mapsto\exp_G(tZ)$. [[thm-one-parameter-subgroups-are-exactly-exponentials]].

[F9] Differentials of smooth maps obey the chain rule. [[thm-chain-rule-for-differentials-of-smooth-maps]].

## Proof

**Proof technique:** direct.

1.1 By [F3], $[X^L,Y^L]=[X,Y]_G^L=0$. The forward implication of [F4] therefore says that the global flows of $X^L$ and $Y^L$ commute. [F3, F4]

2.1 By [F3], $X^L$ and $Y^L$ are left invariant. For fixed $g$, the chain rule and left invariance show that the left translates of the identity integral curves in [F5] are integral curves through $g$. Hence [F5] and [F6] give the global flows $\Phi_t^X(g)=g\exp_G(tX)$ and $\Phi_s^Y(g)=g\exp_G(sY)$. Evaluating the commutation identity from step 1.1 at $e$ gives $\exp_G(sY)\exp_G(tX)=\exp_G(tX)\exp_G(sY)$ for every $s,t\in\mathbb R$. [F3, F4, F5, F6, F9, step 1.1]

3.1 Define $c(t)=\exp_G(tX)\exp_G(tY)$. It is smooth by [F2], [F5], and [F6]. For $s,t\in\mathbb R$, [F6] and step 2.1 give $$\begin{aligned}c(s+t)&=\exp_G(sX)\exp_G(tX)\exp_G(sY)\exp_G(tY)\\&=\exp_G(sX)\exp_G(sY)\exp_G(tX)\exp_G(tY)=c(s)c(t).\end{aligned}$$ Also $c(0)=e$, so $c$ is a one-parameter subgroup by [F7]. [F2, F6, F7, step 2.1, algebra]

4.1 Let $m:G\times G\to G$ be multiplication and put $\alpha(t)=\exp_G(tX)$ and $\beta(t)=\exp_G(tY)$. The identities $m(g,e)=g$ and $m(e,h)=h$ show that $dm_{(e,e)}(X,0)=X$ and $dm_{(e,e)}(0,Y)=Y$. Since a differential is linear, $$dm_{(e,e)}(X,Y)=X+Y.$$ Hence [F5], [F6], and [F9] give $c'(0)=X+Y$. [F2, F5, F6, F9, step 3.1, algebra]

5.1 By [F8], the one-parameter subgroup $c$ with initial velocity $X+Y$ is $c(t)=\exp_G(t(X+Y))$. At $t=1$, $$\exp_G(X+Y)=\exp_G(X)\exp_G(Y).$$ Step 2.1 with $s=t=1$ also gives $\exp_G(X)\exp_G(Y)=\exp_G(Y)\exp_G(X)$. [F7, F8, step 2.1, step 3.1, step 4.1]

6.1 Lie groups are nonempty and boundaryless. If $\dim G=0$, then $X=Y=0$ and all terms equal $e$; in dimension one the proof is unchanged. All flows and exponential curves are global, so no endpoint issue occurs. No metric or nondegeneracy condition occurs. The only choice use is the stated $\mathrm{AC}_\omega$, inherited through [F3], [F5], [F6], and [F8]; fixing two fields and finitely many parameters adds no choice. No biconditional is asserted. [F1, F2, F3, F4, F5, F6, F7, F8, F9, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
