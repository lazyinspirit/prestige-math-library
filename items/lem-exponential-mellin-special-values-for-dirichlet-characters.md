---
id: lem-exponential-mellin-special-values-for-dirichlet-characters
kind: lemma
title: "Exponential Mellin sums give Dirichlet special values"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-gauss-sum-dirichlet-character
  - def-generalized-bernoulli-number
  - def-primitive-dirichlet-character-and-conductor
  - lem-primitive-gauss-sum-twist
  - thm-dirichlet-l-special-values-via-generalized-bernoulli-numbers
  - thm-primitive-gauss-sum-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions"
      url: "https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf"
      locator: "Theorem 2.4, Lemma 5.9 and proof, printed pp. 110–111 and 144–145"
    - title: "J. Sharifi, Iwasawa Theory lecture notes"
      url: "https://www.math.ucla.edu/~sharifi/iwasawa.pdf"
      locator: "§§2.1–2.3, printed pp. 37–51"
verification: {}
---

## Statement

Let $\alpha$ be a nontrivial primitive Dirichlet character of conductor $q>1$, put $\varepsilon_q=e^{2\pi i/q}$ and $\tau(\alpha^{-1})=\sum_{a\bmod q}\alpha^{-1}(a)\varepsilon_q^a$, and define for $t>0$
$$f_\alpha(t)=-\frac{1}{\tau(\alpha^{-1})}\sum_{a\in(\mathbb Z/q\mathbb Z)^\times}\frac{\alpha^{-1}(a)}{e^t\varepsilon_q^a-1}.$$
Then $f_\alpha$ extends analytically to a neighbourhood of $t=0$, its derivatives decay exponentially at infinity, and for every integer $m\ge0$,
$$f_\alpha^{(m)}(0)=L(-m,\alpha).$$

## Statement references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, Theorem 2.4 and Lemma 5.9, pp. 110–111 and 144–145](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

[J. Sharifi, *Iwasawa Theory*, §§2.1–2.3, pp. 37–51](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A nontrivial primitive Dirichlet character $\alpha$ of conductor $q>1$.

[F1] For a primitive character $\chi$ modulo $q$, $\sum_{a\bmod q}\chi(a)e(am/q)=\overline{\chi(m)}\tau(\chi)$. [[lem-primitive-gauss-sum-twist]]

[F2] A primitive Gauss sum is nonzero, since $|\tau(\chi)|^2=q$. [[def-gauss-sum-dirichlet-character]] [[thm-primitive-gauss-sum-norm]]

[F3] For every integer $r\ge1$, $L(1-r,\alpha)=-B_{r,\alpha}/r$. [[thm-dirichlet-l-special-values-via-generalized-bernoulli-numbers]]

[F4] $B_{r,\alpha}=q^{r-1}\sum_{a=1}^{q}\alpha(a)B_r(a/q)$, with $B_r(X)$ defined by its Bernoulli generating function. [[def-generalized-bernoulli-number]]

## Proof

1.1 Since $q>1$ and $a$ is a unit modulo $q$, $\varepsilon_q^a\ne1$; hence every denominator in the finite sum is nonzero at $t=0$, so the sum is analytic near zero. As $t\to+\infty$, each denominator is asymptotic to $e^t\varepsilon_q^a$, and the same estimate holds after any fixed number of derivatives; thus the derivatives decay exponentially. [F2, given, algebra]

1.2 For $t>0$, expand each denominator geometrically and apply [F1] with $m=-n$:
$$f_\alpha(t)=-\frac{1}{\tau(\alpha^{-1})}\sum_{n\ge1}e^{-nt}\sum_{a\bmod q}\alpha^{-1}(a)\varepsilon_q^{-an}=-\alpha(-1)\sum_{n\ge1}\alpha(n)e^{-nt}.$$
Terms with $(n,q)>1$ vanish because $\alpha(n)=0$. For $\operatorname{Re}s>1$, termwise integration against $t^{s-1}/\Gamma(s)$ is justified by absolute convergence, and gives
$$\frac{1}{\Gamma(s)}\int_0^\infty f_\alpha(t)t^{s-1}\,dt=-\alpha(-1)L(s,\alpha).$$
[F1, F2, given, algebra]

2.1 For any smooth exponentially decaying $f$ analytic at zero, put $M_f(s)=\Gamma(s)^{-1}\int_0^\infty f(t)t^{s-1}\,dt$ initially for $\operatorname{Re}s>0$. Integration by parts and $\Gamma(s+1)=s\Gamma(s)$ give $M_f(s)=-M_{f'}(s+1)$ there. Iterating this identity and continuing the right side to $s=-m$ yields
$$M_f(-m)=(-1)^{m+1}\int_0^\infty f^{(m+1)}(t)\,dt=(-1)^m f^{(m)}(0).$$
The last equality follows from exponential decay of $f^{(m)}$. [F2, step 1.1, algebra]

2.2 Applying step 2.1 to $f_\alpha$ and the analytic continuation in step 1.2 gives
$$f_\alpha^{(m)}(0)=(-1)^{m+1}\alpha(-1)L(-m,\alpha).$$
The generating function implies $B_r(1-X)=(-1)^rB_r(X)$. Replacing $a$ by $q-a$ in [F4] therefore gives $B_{m+1,\alpha}=\alpha(-1)(-1)^{m+1}B_{m+1,\alpha}$. If $\alpha(-1)\ne(-1)^{m+1}$, this forces $B_{m+1,\alpha}=0$ and hence $L(-m,\alpha)=0$ by [F3]. If $\alpha(-1)=(-1)^{m+1}$, the factor $(-1)^{m+1}\alpha(-1)$ is $1$. In both cases $f_\alpha^{(m)}(0)=L(-m,\alpha)$. [F3, F4, step 1.2, step 2.1, algebra] ∎
