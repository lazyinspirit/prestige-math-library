---
id: ex-a-power-function-realises-the-duality-norm-on-unit-interval
kind: example
title: "A power function on $(0,1]$ realizes the duality norm on the unit interval"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]
proof_strategy: "Take $g(x)=x^{-a}$ with $0<a<1/q$, normalize the extremizer $|g|^{q-1}$ explicitly, and compute both norms by one-variable power integrals."
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Proposition 7.13"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 6.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Example

Let $1<p<\infty$ with conjugate exponent $q$, and choose $a$ with
$0<a<1/q$. On $(0,1]$ with Lebesgue measure, define
$$g(x):=x^{-a},\qquad f(x):=(1-aq)^{1/p}x^{-a(q-1)}.$$
Then $g \in L^q(0,1)$, the class $[f]$ has $\|[f]\|_p=1$, and
$$\int_0^1 f(x)g(x)\,dx=\|g\|_q=\|\Lambda_g\|=(1-aq)^{-1/q}.$$
So this explicit power pair realizes the norm of the duality functional.

## Facts & Assumptions

**Given:** An exponent $1<p<\infty$, its conjugate exponent $q$, and a real
parameter $a$ with $0<a<1/q$.

[L1] The pairing functional $\Lambda_g$ has norm $\|g\|_q$
([[prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]]).

## Verification

**Proof technique:** Take $g(x)=x^{-a}$ with $0<a<1/q$, normalize the
extremizer $|g|^{q-1}$ explicitly, and compute both norms by one-variable power
integrals.

1.1 Since $aq<1$, one has $1-aq>0$ and therefore $$\int_0^1 x^{-aq}\,dx=\left[\frac{x^{1-aq}}{1-aq}\right]_0^1=(1-aq)^{-1}.$$ Hence $g \in L^q(0,1)$ and $$\|g\|_q^q=\int_0^1 x^{-aq}\,dx=(1-aq)^{-1},\qquad \|g\|_q=(1-aq)^{-1/q}.$$ [given, algebra]

2.1 The chosen function $f$ satisfies $$|f(x)|^p=(1-aq)x^{-aq}.$$ Step 1.1 therefore gives $$\|[f]\|_p^p=(1-aq)\int_0^1 x^{-aq}\,dx=1,$$ so $\|[f]\|_p=1$. [step 1.1, given, algebra]

2.2 Also $$f(x)g(x)=(1-aq)^{1/p}x^{-aq},$$ so another use of step 1.1 gives $$\int_0^1 f(x)g(x)\,dx=(1-aq)^{1/p}\int_0^1 x^{-aq}\,dx=(1-aq)^{1/p-1}=(1-aq)^{-1/q}.$$ By step 1.1 and [L1], this equals $\|g\|_q=\|\Lambda_g\|$. [L1, step 1.1, given, algebra]
∎
