---
id: cex-product-of-two-distributions-is-not-canonically-defined
kind: counterexample
title: Product of two distributions is not canonically defined
status: published
origin: pipeline
deps: [def-distributional-derivative, def-multiplication-of-a-distribution-by-a-smooth-function, def-dirac-delta-and-its-derivatives, def-locally-integrable-function-on-r-n, def-regular-distribution-from-a-locally-integrable-function, thm-locally-integrable-functions-embed-in-distributions, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Section 3.1.2, equations (3.3)–(3.4), pp. 39–40 (Heaviside function and its distributional derivative)"
proof_strategy: contradiction
---

## Statement refuted

There is no associative commutative differential $\mathbb C$-algebra $A$
with all three of the following properties:

1. there is an injective complex-linear map $J:\mathcal D'(\mathbb R)\to A$;
2. a derivation $\partial:A\to A$ satisfies
   $\partial J(u)=J(u')$ for every distribution $u$; and
3. if $f,g$ are locally integrable piecewise smooth functions and $fg$ is
   locally integrable, then
   $J(u_f)J(u_g)=J(u_{fg})$ for their regular distributions.

Thus an associative commutative product cannot simultaneously extend all such
pointwise products, preserve the distributional derivative, and keep the
embedding of distributions injective.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and a hypothetical triple
$(A,J,\partial)$ satisfying the three displayed requirements.

[F1] A locally integrable function $f$ defines the regular distribution
$u_f$, and $f\mapsto u_f$ is injective
([[def-locally-integrable-function-on-r-n]],
[[def-regular-distribution-from-a-locally-integrable-function]],
[[thm-locally-integrable-functions-embed-in-distributions]]).

[F2] Distributional differentiation is defined by
$\langle u',\varphi\rangle=-\langle u,\varphi'\rangle$
([[def-distributional-derivative]]).

[F3] The Dirac distribution satisfies
$\langle\delta_0,\varphi\rangle=\varphi(0)$
([[def-dirac-delta-and-its-derivatives]]).

[F4] Products of a distribution with a smooth function already have a
canonical meaning, but the Heaviside function used below is not smooth
([[def-multiplication-of-a-distribution-by-a-smooth-function]]).

[F5] Integration by parts, and hence the endpoint evaluation of an integral
of $\varphi'$, is valid for compactly supported smooth test functions
([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

## Counterexample

**Proof technique:** contradiction from the Heaviside idempotent.

1.1 Assume for contradiction that $(A,J,\partial)$ satisfies the three stated requirements.  Let $H=\mathbf 1_{(0,\infty)}$.  It is locally integrable and piecewise smooth; evaluate its derivative on an arbitrary $\varphi\in\mathcal D(\mathbb R)$. [assume-contra, F1, F2, F5]

$$\langle H',\varphi\rangle=-\int_0^\infty\varphi'(x)\,dx=\varphi(0)=\langle\delta_0,\varphi\rangle.$$

Thus $H'=\delta_0$. [F1, F2, F3, F5]

2.1 Put $h=J(u_H)$ and $d=J(\delta_0)$.  Since $H^2=H$ and $H^3=H$ pointwise, property 3 gives $h^2=h$ and $h^3=h$.  Property 2 and step 1.1 give $\partial h=d$. [given, step 1.1]

3.1 Apply the derivation to $h^2=h$ and $h^3=h$. [given, step 2.1, algebra]

$$2hd=d.$$

Apply it to $h^3=h$.  Associativity, commutativity, and the Leibniz rule give

$$3h^2d=d.$$

Because $h^2=h$, subtraction of these identities gives $hd=0$, and the first
identity then gives $d=0$. [given, step 2.1, algebra]

4.1 Yet $\delta_0\ne0$: choose a test function with $\varphi(0)=1$ and use [F3].  Injectivity of $J$ therefore implies $d=J(\delta_0)\ne0$, contradicting step 3.1. [given, F3, step 3.1]

5.1 The contradiction concerns only the simultaneous requirements above.  Special products, including [F4], and separately chosen nonlinear regularizations are not ruled out.  Countable Choice is used only through the published regular-distribution and integration interfaces. [F1, F4, F5, step 4.1, discharge-contradiction: step 4.1] ∎
