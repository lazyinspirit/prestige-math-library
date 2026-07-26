---
id: thm-cauchy-criterion-via-lub
kind: theorem
title: "The Cauchy criterion from the least-upper-bound property: in a complete ordered field every Cauchy sequence converges"
status: published
origin: session
deps: [lem-cauchy-sequence-bounded, thm-bolzano-weierstrass, lem-cauchy-with-convergent-subsequence, def-real-limit, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.11(c))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4 (Thm 6.4.18)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.4 (Thm 2.4.5)"
      url: "https://www.jirka.org/ra/"
---

## Statement

Every Cauchy sequence of reals converges to a real ([[def-real-limit]]).

More carefully, this is a statement about the *axioms*: in a complete ordered
field, that is in an ordered field with the least-upper-bound property
([[def-complete-ordered-field]]), every Cauchy sequence converges. The proof
below uses nothing about $\mathbb{R}$ except that property, through
[[thm-bolzano-weierstrass]].

**This library already knows the conclusion by a different route.**
It is proved on the Cauchy-construction page, where
$\mathbb{R}$ is built out of Cauchy sequences of rationals and completeness is
read off the construction. That proof is about a particular construction; this
one is about the axioms, and it is what tells us the statement holds in *any*
complete ordered field, however it was obtained.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x_k)$ of reals, $\mathbb{R}$ being a complete ordered field.

[L1] Every Cauchy sequence of reals is bounded ([[lem-cauchy-sequence-bounded]]).

[L2] Bolzano-Weierstrass: every bounded sequence of reals has a convergent subsequence, that is a strictly increasing $n$ and a real $L$ with $x_{n_j} \to L$ ([[thm-bolzano-weierstrass]]).

[L3] A Cauchy sequence with a subsequence converging to $L$ converges to $L$ ([[lem-cauchy-with-convergent-subsequence]]).

[L4] Convergence of a sequence of reals to a real ([[def-real-limit]]).

[L5] $\mathbb{R}$ is a complete ordered field, and this is the only property of it used, through [L2] ([[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 The Cauchy sequence $(x_k)$ is bounded. [given, L1]

2.1 Being bounded, $(x_k)$ has a convergent subsequence: fix a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and a real $L$ with $x_{n_j} \to L$. [step 1.1, L2, L5, choose]

3.1 The sequence $(x_k)$ is Cauchy and has a subsequence converging to $L$, so it converges to $L$. [step 2.1, L3]

4.1 An arbitrary Cauchy sequence of reals has therefore been shown to converge to a real, so every Cauchy sequence of reals converges, and this was derived from the least-upper-bound property alone. [step 3.1, L4, L5] ∎

## Remarks

- **The three steps are exactly the three lemmas, and each is sharp.** A Cauchy
  sequence is bounded ([[lem-cauchy-sequence-bounded]]); a bounded sequence has a
  convergent subsequence ([[thm-bolzano-weierstrass]]); a Cauchy sequence with a
  convergent subsequence converges ([[lem-cauchy-with-convergent-subsequence]]).
  Dropping the Cauchy hypothesis at the last step breaks the chain, since a
  bounded sequence need not converge ([[fs-bounded-implies-convergent]]).

- **Where completeness enters.** Only in the middle step, and there only through
  [[cor-monotone-converges-iff-bounded]] inside the proof of
  Bolzano-Weierstrass. The first and third steps hold in any ordered field. That
  localisation is the reason for the page order.

- **The converse needs an extra hypothesis.** Cauchy completeness alone does not
  imply the least-upper-bound property; it does so together with the Archimedean
  property, and there are Cauchy complete non-Archimedean ordered fields that are
  not Dedekind complete. This library does not prove that here; the equivalences
  between the forms of completeness are the subject of a later page, and
  [[rem-completeness-routes]] states precisely what is and is not established
  now.

- **The name.** "Cauchy criterion" is the useful reading: the theorem lets one
  prove convergence without producing the limit, which is what makes it the
  standard tool for series and for uniform convergence later on.

- The construction-side proof of the same sentence is
  [[thm-reals-cauchy-complete]], and [[rem-completeness-routes]] sets out why
  this library keeps both. Neither proof uses the other, and nothing above
  depends on that item.
