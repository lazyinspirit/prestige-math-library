---
id: ex-continued-fraction-of-square-root-two
kind: example
title: "The continued fraction [1; overline 2] for sqrt(2)"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-continued-fraction-complete-quotients, def-convergents-of-regular-continued-fraction, lem-continued-fraction-determinant-identity, lem-continued-fraction-error-bound, thm-continued-fraction-algorithm-for-real-numbers, thm-lagrange-periodic-continued-fraction-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "Bruce Ikenaga, Periodic Continued Fractions"
      url: "https://sites.millersville.edu/bikenaga/number-theory/periodic-continued-fractions/periodic-continued-fractions.html"
pipeline_run: null
---

## Example

The continued fraction of $\sqrt2$ is
$$\sqrt2=[1;\overline2],$$
with convergents
$$1,\quad \frac32,\quad \frac75,\quad \frac{17}{12},\ldots.$$

## Facts & Assumptions

**Given:** The real number $\sqrt2$.

[F1] Consecutive convergents satisfy $p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}$ ([[lem-continued-fraction-determinant-identity]]).

[F2] For an irrational number $\alpha$, the convergents alternate around $\alpha$ and satisfy $|\alpha-p_n/q_n|<1/(q_nq_{n+1})$ ([[lem-continued-fraction-error-bound]]).

[F3] The complete-quotient algorithm chooses the unique integer part and then
takes the reciprocal of the positive fractional part
([[def-continued-fraction-complete-quotients]]).

[F4] If the complete-quotient algorithm does not terminate, its resulting
infinite regular continued fraction converges to the original real number
([[thm-continued-fraction-algorithm-for-real-numbers]]).

[F5] For digits $a_n$, the convergent numerators and denominators start from
$p_{-2}=0,p_{-1}=1,q_{-2}=1,q_{-1}=0$ and satisfy
$p_n=a_np_{n-1}+p_{n-2}$ and $q_n=a_nq_{n-1}+q_{n-2}$
([[def-convergents-of-regular-continued-fraction]]).

## Verification

**Proof technique:** direct.

1.1 Since $1<\sqrt2<2$, [F3] gives $a_0=1$. Then [F3, F4, given, algebra]
$$\alpha_1=\frac1{\sqrt2-1}=\sqrt2+1,$$
so $2<\alpha_1<3$ and $a_1=2$. Moreover
$$\frac1{\alpha_1-2} = \frac1{\sqrt2-1} = \alpha_1,$$
so every later complete quotient is again $\alpha_1$. Thus the algorithm never
terminates and produces the digits $1,2,2,\ldots$; by [F4] its continued
fraction converges to the original number. Hence
$$\sqrt2=[1;\overline2].$$
[F3, F4, given, algebra]

2.1 Applying [F5] to the digits from step 1.1 gives [F5, step 1.1, algebra]
$$(p_0,q_0)=(1,1),\quad(p_1,q_1)=(3,2),\quad(p_2,q_2)=(7,5),\quad(p_3,q_3)=(17,12),$$
so the convergents begin
$$1,\qquad\frac32,\qquad\frac75,\qquad\frac{17}{12}.$$
The same recurrence gives $q_4=29$. For the displayed pairs one checks
$$3\cdot1-1\cdot2=1,\qquad 7\cdot2-3\cdot5=-1,\qquad 17\cdot5-7\cdot12=1,$$
exactly as [F1] predicts. [F1, F5, step 1.1, algebra]

3.1 The error formula [F2] now gives [F2, step 2.1, algebra]
$$\left|\sqrt2-\frac32\right|=\frac{3-2\sqrt2}{2}<\frac1{10},\qquad \left|\sqrt2-\frac75\right|=\frac{5\sqrt2-7}{5}<\frac1{60},$$
and similarly
$$\left|\sqrt2-\frac{17}{12}\right|=\frac{17-12\sqrt2}{12}<\frac1{348}.$$
So the concrete convergents alternate around $\sqrt2$ with the expected quality
of approximation. [F2, step 2.1, algebra] ∎
