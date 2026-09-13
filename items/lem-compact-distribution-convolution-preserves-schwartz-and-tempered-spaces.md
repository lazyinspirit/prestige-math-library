---
id: lem-compact-distribution-convolution-preserves-schwartz-and-tempered-spaces
kind: lemma
title: Compact distribution convolution preserves schwartz and tempered spaces
status: draft
origin: pipeline
deps: [lem-compactly-supported-distributions-extend-to-smooth-functions, def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, lem-distribution-pairing-with-smooth-parameter-families, lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis, def-tempered-distribution, thm-tempered-distributions-embed-continuously-in-distributions, def-convolution-of-distributions-when-one-has-compact-support]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§11.2.1 item (6), p. 127, and Proposition 11.28, pp. 130–131"
proof_strategy: direct
---

## Statement

Let $v\in\mathcal D'(\mathbb R^n)$ have compact support.  Then

$$C_v:\mathcal S\to\mathcal S,\qquad (C_v\varphi)(x)=(v*\varphi)(x)=\langle v_y,\varphi(x-y)\rangle,$$

is continuous and complex-linear.  If $u\in\mathcal S'$, define
$u*v\in\mathcal S'$ by

$$\langle u*v,\psi\rangle =\left\langle u_x,\left\langle v_y,\psi(x+y)\right\rangle\right\rangle.$$

After restricting $u$ and $u*v$ to $\mathcal D'$, this agrees with the
ordinary distribution convolution in which one factor has compact support.
All assertions hold in ZF.

## Facts & Assumptions

**Given:** A compactly supported distribution $v$, a Schwartz function
$\varphi$, and a tempered distribution $u$ ([[def-tempered-distribution]]).

[F1] Compactly supported distributions act continuously on all smooth
functions and obey a fixed compact finite-order estimate
([[lem-compactly-supported-distributions-extend-to-smooth-functions]]).

[F2] The Schwartz seminorms/topology are those of
[[def-schwartz-space-and-its-seminorms]] and
[[def-schwartz-topology-and-convergence]].

[F3] The smooth-parameter clause for compact distribution pairings holds in
ZF ([[lem-distribution-pairing-with-smooth-parameter-families]]).

[F4] Distribution convolution with one compactly supported factor is
well-defined by the addition-map pairing and is commutative
([[def-convolution-of-distributions-when-one-has-compact-support]],
[[lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis]]).

[F5] Restriction embeds $\mathcal S'$ into $\mathcal D'$
([[thm-tempered-distributions-embed-continuously-in-distributions]]).

## Proof

**Proof technique:** uniform compact-support estimates and transposition.

1.1 Choose a compact neighborhood $K$ of $\operatorname{supp}v$ and an order $m$ for the estimate in [F1].  Differentiate by [F3] and expand $x^\alpha=((x-y)+y)^\alpha$. [F1, F3, algebra]

$$p_{\alpha\beta}(C_v\varphi) \leq C_{v,K,\alpha,\beta} \max_{|\gamma|\leq m,\ |\delta|\leq|\alpha|} p_{\delta,\,\beta+\gamma}(\varphi).$$

Only finitely many terms occur because $y$ stays in $K$. [F1, F2, F3,
algebra]

2.1 The estimates in step 1.1 show that $C_v\varphi$ is Schwartz and that $C_v$ is continuous.  Replacing $y$ by $-y$ proves the same statement for $T_v\psi(x)=\langle v_y,\psi(x+y)\rangle$; equivalently $T_v=C_{\check v}$ for the reflected compact distribution $\check v$. [F2, step 1.1]

3.1 The displayed candidate for $u*v$ is $u\circ T_v$.  By step 2.1 this is a continuous complex-linear functional on $\mathcal S$, hence tempered. [given, step 2.1]

4.1 For $\psi\in\mathcal D$, the inner function $T_v\psi$ is precisely the iterated-pairing test used by the addition-map definition in [F4]. [F4, step 3.1]

$$\langle u*v,\psi\rangle =\langle \rho(u)\otimes v,(x,y)\mapsto\psi(x+y)\rangle$$

with the cutoff interpretation prescribed there.  This proves agreement after
the embedding [F5].  The cases $u=0$, $v=0$, or empty support give zero.  Only
the ZF smooth-parameter clause of [F3] was used; no integral-interchange clause
or choice axiom entered. [F3, F4, F5, step 3.1] ∎
