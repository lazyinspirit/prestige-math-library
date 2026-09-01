---
id: prop-semifinite-measures-make-l-q-representatives-unique
kind: proposition
title: "On a semifinite measure space, a representing $L^q$ function is unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, prop-essential-supremum-is-attained-as-the-least-essential-bound]
proof_strategy: "Subtract the two representing functions, observe that the induced pairing is the zero functional, and use the norm formula for $\\Lambda_g$ to force the difference to be the zero $L^q$ class."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Proposition 7.13 and Theorem 7.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a semifinite measure space, let $1 \le p < \infty$,
and let $q$ be conjugate to $p$. If $g,h \in L^q(\mu)$ satisfy
$$\int fg\,d\mu=\int fh\,d\mu\qquad([f]\in L^p(\mu)),$$
then $g=h$ in $L^q(\mu)$. Equivalently, on a semifinite measure space a bounded
functional on $L^p(\mu)$ has at most one representing $L^q(\mu)$ class.

## Facts & Assumptions

**Given:** A semifinite measure space $(X,\mathcal A,\mu)$, an exponent
$1 \le p < \infty$, its conjugate exponent $q$, and $g,h \in L^q(\mu)$ such
that $\int fg\,d\mu=\int fh\,d\mu$ for every $[f] \in L^p(\mu)$.

[L1] On a semifinite measure space,
$$\|\Lambda_u\|=\|u\|_q\qquad(u \in L^q(\mu))$$
([[prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]]).

[L2] For finite exponents, the $L^q$ norm is a genuine norm on the quotient
space [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]].

[L3] If $\|u\|_\infty=0$, then $|u|\le0$ almost everywhere, so $u=0$ almost
everywhere
([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

## Proof

**Proof technique:** Subtract the two representing functions, observe that the
induced pairing is the zero functional, and use the norm formula for
$\Lambda_g$ to force the difference to be the zero $L^q$ class.

1.1 For every $[f] \in L^p(\mu)$, the assumption gives [given, algebra]
$$\Lambda_{g-h}([f])=\int f(g-h)\,d\mu=0.$$
So $\Lambda_{g-h}$ is the zero functional on $L^p(\mu)$. [given, algebra]

2.1 Applying [L1] to $u=g-h$ yields [L1, step 1.1]
$$\|g-h\|_q=\|\Lambda_{g-h}\|=0.$$

3.1 If $q<\infty$, [L2] says that zero $L^q$ norm means the zero class, so [L2, L3, step 2.1]
$g=h$ in $L^q(\mu)$. If $q=\infty$, then step 2.1 and [L3] give
$g=h$ almost everywhere. In either case the representing class is unique. ∎
