---
id: lem-blr-testing-supplies-nearby-linear-decoders
kind: lemma
title: "The BLR test supplies a nearby unique linear decoder"
status: draft
origin: pipeline
deps:
  - def-walsh-hadamard-encoding-and-relative-distance
  - lem-walsh-hadamard-code-has-distance-one-half
  - lem-boolean-cube-fourier-inversion-and-parseval
  - def-self-correction-of-a-noisy-linear-function
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: constructive
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.1 Theorem 18.23 and local decoding, printed pp. 363–365; §19.3.2 proof of Theorem 19.9, printed pp. 390–391"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
---

## Statement

Let $n\ge0$, $f:\mathbb F_2^n\to\mathbb F_2$,
$h(x)=(-1)^{f(x)}$, and
$\widehat h(a)=\mathbb E_x[h(x)(-1)^{a\cdot x}]$. Define its BLR rejection
probability by
$$\epsilon=\Pr_{x,y\text{ independent uniform in }\mathbb F_2^n}[f(x+y)\ne f(x)+f(y)].$$
Let $a_*$ be the lexicographically first maximizer of $\widehat h(a)$ over
$a\in\mathbb F_2^n$. If $\epsilon<1/2$, then
$\operatorname{dist}(f,\operatorname{WH}_n(a_*))\le\epsilon$. If
$\epsilon<1/4$, this is the unique linear Walsh–Hadamard word at distance
less than $1/4$ from $f$. For every requested $r\in\mathbb F_2^n$, the
self-corrector $\operatorname{Corr}_f(r;y)=f(y)+f(r+y)$, with $y$ uniform,
returns $a_*\cdot r$ with probability at least $1-2\epsilon$.

## Facts & Assumptions

[F1] $\operatorname{WH}_n(a)$ is the truth table of $x\mapsto a\cdot x$;
relative distance is normalized disagreement on the cube.
([[def-walsh-hadamard-encoding-and-relative-distance]])

[F2] For normalized Boolean-cube characters, Fourier inversion is
$h(x)=\sum_a\widehat h(a)\chi_a(x)$.
([[lem-boolean-cube-fourier-inversion-and-parseval]])

[F3] Parseval gives $\mathbb E_x h(x)^2=\sum_a\widehat h(a)^2$.
([[lem-boolean-cube-fourier-inversion-and-parseval]])

[F4] Distinct linear Walsh–Hadamard words have relative distance exactly
$1/2$ (and there are no distinct messages when $n=0$).
([[lem-walsh-hadamard-code-has-distance-one-half]])

[F5] The two-query corrector chooses uniform $y$ and returns
$f(y)+f(r+y)$.
([[def-self-correction-of-a-noisy-linear-function]])

## Proof

**Given:** Fix $n$ and $f$ as in the statement; the vectors $x,y$ in the
rejection probability are independent and uniform.

1.1 The BLR test accepts exactly when $f(x)+f(y)+f(x+y)=0$ in $\mathbb F_2$. Thus $h(x)h(y)h(x+y)$ is $1$ on acceptance and $-1$ on rejection, so $\mathbb E_{x,y}[h(x)h(y)h(x+y)]=1-2\epsilon$. For $n=0$ the only pair is $((),())$ and the test rejects exactly when $f(())=1$, so $\epsilon<1/2$ forces $f(())=0$. [given, algebra]

2.1 Write $\chi_a(x)=(-1)^{a\cdot x}$. By Fourier inversion (F2), $h(x+y)=\sum_a\widehat h(a)\chi_a(x+y)$, and $\chi_a(x+y)=\chi_a(x)\chi_a(y)$. Expanding the expectation in step 1.1 and using independence of $x,y$ gives $\mathbb E_{x,y}[h(x)h(y)h(x+y)]=\sum_a\widehat h(a)(\mathbb E_xh(x)\chi_a(x))(\mathbb E_yh(y)\chi_a(y))=\sum_a\widehat h(a)^3$. [F2, step 1.1, algebra]

3.1 Parseval (F3) and $h^2=1$ give $\sum_a\widehat h(a)^2=1$. With $M=\max_a\widehat h(a)$, step 2.1 yields $1-2\epsilon=\sum_a\widehat h(a)^3\le M\sum_a\widehat h(a)^2=M$. Choose the first maximizer $a_*$ in the finite lexicographic order. Since $\widehat h(a_*)=\Pr[f(x)=a_*\cdot x]-\Pr[f(x)\ne a_*\cdot x]$, its Walsh–Hadamard word has distance $(1-\widehat h(a_*))/2\le\epsilon$. [F1, F3, step 2.1, construct, algebra]

4.1 If $\epsilon<1/4$, the word from step 3.1 is within distance $<1/4$. Any other linear word within distance $<1/4$ would, by the triangle inequality for normalized Hamming distance, be at distance $<1/2$ from it, contradicting (F4); for $n=0$ there is only one linear word. Thus the nearby word is unique. [F4, step 3.1, algebra]

5.1 By (F5), the corrector returns $f(y)+f(r+y)$. Each point $y$ and $r+y$ is uniform, so each queried value differs from $a_*\cdot y$ or $a_*\cdot(r+y)$ with probability $\delta=\operatorname{dist}(f,\operatorname{WH}_n(a_*))\le\epsilon$. A union bound, without assuming independence of the two error events, shows that with probability at least $1-2\epsilon$ both values are correct; then their sum is $a_*\cdot r$. When $n=0$, $\epsilon<1/2$ forces $f(())=0$, and the singleton-table corrector returns the sole linear value $0$. [F1, F5, step 3.1, algebra, discharge-construct] ∎
