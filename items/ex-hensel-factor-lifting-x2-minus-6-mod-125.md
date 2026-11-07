---
id: ex-hensel-factor-lifting-x2-minus-6-mod-125
kind: example
title: "Lift X^2-1 modulo 5 to a factorization of X^2-6 modulo 125"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - alg-finite-precision-hensel-factor-lifting-over-zp
  - thm-finite-precision-hensel-factor-lifting-correctness
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Theorem 7.33"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I, Fall 2021, Lecture 9, Hensel's lemmas"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification: {}
---

## Example

For $p=5$, $N=3$, and $f(T)=T^2-6$ in
$R_3[T]=(\mathbb Z/125\mathbb Z)[T]$, the coprime factorization
$\bar f(T)=(T-1)(T+1)$ over $\mathbb F_5$ lifts under the finite-precision
Hensel procedure to
$$f(T)=(T+109)(T+16)\quad\text{in }R_3[T].$$
The reductions of these factors are $T-1$ and $T+1$, respectively.

## Example references

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Theorem 7.33](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Andrew V. Sutherland, MIT 18.785, Fall 2021, Lecture 9, Hensel's lemmas](https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf)

## Facts & Assumptions

**Given:** $R_3=\mathbb Z/125\mathbb Z$, $f(T)=T^2-6$, and the initial
residue factors $\bar g=T-1$, $\bar h=T+1$ in $\mathbb F_5[T]$.

[F1] [[alg-finite-precision-hensel-factor-lifting-over-zp]]: At each stage
$r$, the procedure computes $\epsilon_r=(f-GH)/5^r\bmod5$, chooses the
unique $u_r$ of degree less than $1$ with
$u_r\bar H\equiv\epsilon_r\pmod{\bar G}$, sets
$v_r=(\epsilon_r-u_r\bar H)/\bar G$, and adds $5^r u_r,5^r v_r$ to the
current factors.

[F2] [[thm-finite-precision-hensel-factor-lifting-correctness]]: For a monic
polynomial modulo $p^N$ with coprime monic residue factors, the procedure
terminates after at most $N-1$ corrections and returns a factorization with
the prescribed degrees and reductions.

## Verification

**Given:** The data above.


1.1 Modulo $5$, $f(T)=T^2-6\equiv T^2-1=(T-1)(T+1)$. The two linear factors are coprime because their roots $1$ and $-1$ are distinct in $\mathbb F_5$. Thus the algorithm's input hypotheses hold. [given, algebra]

2.1 The initial lifts are $G=T-1$ and $H=T+1$, so $f-GH=-5$ and $\epsilon_1=-1$ in $\mathbb F_5[T]$. Modulo $\bar G=T-1$, $\bar H=T+1\equiv2$ and $\epsilon_1\equiv4$, hence $u_1=2$. Then $v_1=(-1-2(T+1))/(T-1)=3$ in $\mathbb F_5[T]$. The first corrections give $G=T+9$ and $H=T+16$ in $R_3[T]$. [F1, step 1.1, algebra]

3.1 Their product is $T^2+25T+144$, so $f-GH=25(4-T)$ modulo $125$ and $\epsilon_2=4-T$ in $\mathbb F_5[T]$. Modulo $T-1$, $\bar H=2$ and $\epsilon_2=3$, giving $u_2=4$; then $v_2=(4-T-4(T+1))/(T-1)=0$ in $\mathbb F_5[T]$. The second correction returns $G=T+109$ and $H=T+16$ modulo $125$. [F1, step 2.1, algebra]

4.1 The final factors reduce to $T-1$ and $T+1$ modulo $5$, and $(T+109)(T+16)=T^2+125T+1744\equiv T^2+119=T^2-6\pmod{125}$. Thus they are the stated factorization in $R_3[T]$. [step 3.1, algebra]

5.1 Here $N-1=2$, so the two calculated correction stages exhaust the procedure. The output satisfies the correctness statement [F2], and the direct product calculation in step 4.1 verifies the example's exact claim. [F2, step 4.1] ∎