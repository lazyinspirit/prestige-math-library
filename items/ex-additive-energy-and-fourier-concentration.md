---
id: ex-additive-energy-and-fourier-concentration
kind: example
title: "High additive energy forces a large Fourier coefficient"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [thm-additive-energy-fourier-identity]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "§4.2, equations (4.14)–(4.15) and Lemma 4.9, printed pp. 157–158: fourth moment and zero-frequency coefficient"
    - title: "Swastik Kopparty, Fourier Analysis, Topics in Finite Fields course notes"
      url: "https://www.math.toronto.edu/swastik/courses/finitefields-F23/fourier.pdf"
      locator: "§1.6.1, PDF p. 4: the fourth moment and density baseline"
verification:
  precheck: pass
---

## Example

Let $N\ge2$, $G=\mathbb Z/N\mathbb Z$, and $\varnothing\ne A\subsetneq G$, with $m=|A|$. Define $E(A)$ as the number of ordered quadruples $(a,b,c,d)\in A^4$ with $a+b=c+d$ in $G$, and use the negative-sign unitary DFT $\widehat f(\xi)=N^{-1/2}\sum_{x=0}^{N-1}f([x]_N)e^{-2\pi i\xi x/N}$, where any integer representative of $\xi$ gives the same value. If $E(A)>m^4/N$, then some nonzero $\xi\in G$ satisfies

$$|\widehat{1_A}(\xi)|^4\ge\frac{E(A)/N-m^4/N^2}{N-1}.$$

## Example references

[Tao and Vu, *Additive Combinatorics*, §4.2](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

[Kopparty, *Fourier Analysis*, §1.6.1](https://www.math.toronto.edu/swastik/courses/finitefields-F23/fourier.pdf)

## Facts & Assumptions

**Given:** $N\ge2$, $G=\mathbb Z/N\mathbb Z$, a proper nonempty $A\subsetneq G$, $m=|A|$, and $E(A)>m^4/N$.

[A1] $1\le m<N$, there are exactly $N-1$ nonzero frequencies in $G$, and the stated Fourier transform satisfies $\widehat{1_A}(0)=m/\sqrt N$ by its defining finite sum.

[F1] For every $B\subseteq G$, $E(B)=N\sum_{\xi\in G}|\widehat{1_B}(\xi)|^4$, with $E(B)$ the count of ordered equal-sum quadruples ([[thm-additive-energy-fourier-identity]]).

## Verification

**Given:** The data in [A1] and [F1].

1.1 The zero-frequency term is $|\widehat{1_A}(0)|^4=m^4/N^2$ by [A1]. Subtracting it from the full fourth moment in [F1] gives $\sum_{\xi\ne0}|\widehat{1_A}(\xi)|^4=E(A)/N-m^4/N^2>0$. [A1, F1, algebra]

2.1 The sum in step 1.1 has exactly $N-1$ nonnegative terms, so at least one term is at least their average. Taking its nonnegative fourth root gives a nonzero frequency $\xi$ with $|\widehat{1_A}(\xi)|^4\ge(E(A)/N-m^4/N^2)/(N-1)$. [A1, step 1.1, construct, algebra] ∎

## Remarks

The threshold $m^4/N$ is the contribution of the zero frequency alone. The strict inequality makes the remaining fourth-moment mass positive and therefore forces a nonzero frequency.
