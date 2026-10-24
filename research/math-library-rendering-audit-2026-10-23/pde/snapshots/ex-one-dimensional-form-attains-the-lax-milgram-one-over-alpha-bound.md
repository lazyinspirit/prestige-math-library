---
id: "ex-one-dimensional-form-attains-the-lax-milgram-one-over-alpha-bound"
kind: "example"
title: "A one-dimensional form attains the $1/\\alpha$ Lax--Milgram bound"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 6
deps:
  - "cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha"
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-hilbert-space"
  - "def-operator-norm"
  - "thm-lax-milgram"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§5.3, the estimate $|u|\\le|\\varphi|/\\alpha$ and its use in Corollary 5.8, printed p. 140"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the two-sided isomorphism bound in the Lax–Milgram Lemma, printed p. 71, with surjectivity completed on p. 72."
---

## Example

On $H=\mathbb C$ with the standard inner product and $\alpha>0$, let $a(u,v):=\alpha u\overline v$ and let $F_c(v):=c\overline v$ for a fixed $c\in\mathbb C$. Then $a$ is bounded with $M=\alpha$, coercive with the same constant $\alpha$, and the Lax--Milgram solution of $a(u,v)=F_c(v)$ for all $v$ is $$u=\frac{c}{\alpha},$$ since $\alpha u\overline v=c\overline v$ for all $v$ forces $\alpha u=c$. The solution operator has norm exactly $1/\alpha$: $\|F_c\|=\sup_{|v|\le1}|c\overline v|=|c|$ and $|u|=|c|/\alpha$, so $$\|S\|=\frac1\alpha .$$ Hence the bound of [[cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha]] is attained and cannot be improved uniformly over coercive forms; this is the plan’s sharpness example and the one-dimensional model of the general estimate.

## Facts & Assumptions

**Given:** A real $\alpha>0$; the Hilbert space $H=\mathbb C$ with its usual inner product and modulus; the form $a(u,v)=\alpha u\overline v$; and the functional $F_c(v)=c\overline v$ for a fixed $c\in\mathbb C$.

[F1] $a$ is sesquilinear, bounded with $M=\alpha$, and coercive with the same constant: $|a(u,v)|=\alpha|u||v|$ and $a(u,u)=\alpha|u|^2$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-hilbert-space]]).

[F2] Every conjugate-linear functional on $\mathbb C$ has the form $F_c(v)=\overline v\,F_c(1)$; testing at $v=1$ directly determines the unique solution. The abstract comparison is [[cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha]], but no choice principle is needed for this scalar computation.

[F3] Operator norm: $\|F_c\|=\sup_{|v|\le1}|c\overline v|=|c|$ and $\|S\|=\sup\{\|S(F)\|:\|F\|\le1\}$ ([[def-operator-norm]]).



## Proof

1.1 Direct solution: the equation $a(u,v)=F_c(v)$ reads $\alpha u\overline v=c\overline v$ for every $v\in\mathbb C$. Testing with $v=1$ forces $\alpha u=c$, that is $u=c/\alpha$; conversely this $u$ satisfies the equation for every $v$. The scalar equation also proves uniqueness directly. [F1, F2, algebra]

1.2 Boundedness and coercivity constants: from $|a(u,v)|=\alpha|u||v|$ the least bound is $M=\alpha$, and coercivity holds with $\alpha$ since $a(u,u)=\alpha|u|^2$; no larger coercivity constant can work at $u=1$. [F1]

2.1 Norms: $\|F_c\|=|c|$ by [F3], and $S(F_c)=c/\alpha$ has modulus $|c|/\alpha$, so $\|S(F_c)\|/\|F_c\|=1/\alpha$ for every $c\ne0$; hence $\|S\|=1/\alpha$, attaining the bound of the corollary. [F2, F3, step 1.1]

3.1 Conclusion: the estimate $\|S\|\le1/\alpha$ is sharp and cannot be improved uniformly over bounded coercive forms on a fixed Hilbert space; the one-dimensional computation is the model of the general constant. [step 1.2, step 2.1] ∎ 