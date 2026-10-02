---
id: cor-nevanlinna-picard-theorems
kind: corollary
title: "Little and Great Picard consequences of Nevanlinna theory"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-nevanlinna-second-main-theorem
  - lem-nevanlinna-growth-dominates-logarithm
  - lem-nevanlinna-exterior-three-value-extension
  - thm-fundamental-theorem-of-algebra-liouville-proof
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §§4–6"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§§4–6, printed pp. 6–14: the plane Second Main Theorem and its Picard consequences"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §§1–2, printed pp. 87–98; Ch. 4 §3, printed pp. 121–122: defects, Picard values and logarithmic-derivative estimates"
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§§5–6.1, printed pp. 35–43: the truncated Second Main Theorem and Picard's theorems"
---

## Statement

Assume Countable Choice.

1. A nonconstant meromorphic function on $\mathbb C$ omits at most two values of
   the Riemann sphere. Consequently a nonconstant entire function omits at most
   one finite value.
2. Let $f$ be meromorphic on a punctured disc $0<|z-z_0|<r^*$ with an isolated
   essential singularity at $z_0$, that is, $f$ admits no meromorphic extension
   across $z_0$. Then in every punctured neighbourhood of $z_0$ every sphere
   value is assumed infinitely often, with at most two exceptions. If in
   addition $f$ is holomorphic on the punctured disc, then at most one finite
   value is exceptional in this sense.

## Facts & Assumptions

**Given:** A nonconstant meromorphic plane function for clause (1), and a meromorphic function on a punctured disc with an isolated essential singularity for clause (2). Assume Countable Choice.

[F1] For three distinct sphere targets omitted by a nonconstant meromorphic plane function $h$, the truncated Second Main Theorem gives $T(r,h)\le C(\log^+T(r,h)+\log r)$ outside a set of finite linear measure ([[thm-nevanlinna-second-main-theorem]]).

[F2] If $h$ is transcendental, then $T(r,h)/\log r\to\infty$ and $T(r,h)\to\infty$ ([[lem-nevanlinna-growth-dominates-logarithm]]).

[F3] A meromorphic function on an exterior domain that omits three fixed distinct sphere values outside a larger circle extends meromorphically across infinity ([[lem-nevanlinna-exterior-three-value-extension]]).

[F4] Every nonconstant complex polynomial has a complex root ([[thm-fundamental-theorem-of-algebra-liouville-proof]]).

## Proof

**Proof technique:** direct, with contradiction arguments for three omitted values.

1.1 A nonconstant rational function $P/Q$, with coprime polynomials and $d=\max(\deg P,\deg Q)\ge1$, omits at most one sphere value. If $\deg Q<d$, then $\deg(P-aQ)=d$ for every finite $a$, so [F4] makes every finite value attained; $\infty$ is omitted only when $Q$ is constant. If $\deg Q=d$, then $Q$ has a root, so $\infty$ is attained. When $\deg P=d$, the polynomial $P-aQ$ has degree $d$ except possibly for the single value $a$ that cancels its leading term. When $\deg P<d$, every $a\ne0$ gives a polynomial $P-aQ$ of degree $d$, and $a=0$ is attained unless $P$ is a nonzero constant. Thus at most one finite value can be omitted in this case. [F4, algebra]

1.2 Let $f$ be meromorphic on $0<|z-z_0|<r^*$ with an isolated essential singularity. If three distinct sphere values are omitted on $0<|z-z_0|<\rho$ for some $\rho<r^*$, then $G(w):=f(z_0+\rho/w)$ is meromorphic on $|w|>1$ and omits those values there. Apply [F3] with $R=1$ and $R_1=2$: $G$ extends meromorphically across infinity. Inversion then extends $f$ meromorphically across $z_0$, a contradiction. Thus no three distinct values are omitted on any punctured neighbourhood. [F3, given, discharge-contradiction]

2.1 Suppose a nonconstant meromorphic plane function $h$ omits three distinct sphere values. By step 1.1 it is transcendental. [F1] gives $T(r,h)\le C(\log^+T(r,h)+\log r)$ outside a set $E$ of finite linear measure, while [F2] makes the right side $o(T(r,h))$ as $r\to\infty$. The complement of $E$ is unbounded, so this inequality is impossible at sufficiently large $r\notin E$. Hence a nonconstant meromorphic plane function omits at most two sphere values. [F1, F2, step 1.1, discharge-contradiction]

2.2 If three distinct sphere values each had only finitely many preimages in some punctured neighbourhood, choose one radius smaller than all three neighbourhood radii. Their combined preimage set inside it is finite. Choose a still smaller radius below the distance from $z_0$ to every point of that finite set; if the set is empty, any smaller radius works. All three values are then omitted on that smaller punctured disc, contrary to step 1.2. Hence at most two sphere values fail to occur infinitely often in every punctured neighbourhood. [step 1.2, choose, cases]

3.1 An entire function omits $\infty$, so step 2.1 leaves at most one omitted finite value. A function holomorphic on the punctured disc also omits $\infty$, so step 2.2 leaves at most one finite value that fails to occur infinitely often near the puncture. [step 2.1, step 2.2, algebra] ∎
