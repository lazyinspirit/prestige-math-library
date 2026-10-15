---
id: ex-hh-polynomial-primitives-characteristic
kind: example
title: "Primitive polynomials depend on the characteristic"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [lem-hh-group-and-polynomial-hopf-algebras-exist, thm-tensor-product-basis-from-bases]
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass

sources:
  references:
    - title: "Hans-Jürgen Schneider, Lectures on Hopf algebras, notes by Sonia Natale"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "§1, printed pp. 2–3 and 7–8: primitive generators and symmetric-algebra Hopf structure"
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "Example 2.3(iii), PDF p. 4: primitive elements and the coproduct on an enveloping algebra"

---
## Example

In the polynomial Hopf algebra $k[x]$ with $\Delta(x)=x\otimes1+1\otimes x$ and $\varepsilon(x)=0$, call $z$ **primitive** if $\Delta(z)=z\otimes1+1\otimes z$ and $\varepsilon(z)=0$. The generator $x$ is primitive over every field. If $\operatorname{char}k=p>0$, then $x^p$ is primitive too. In characteristic zero, $x^2$ is not primitive.

## Facts & Assumptions

**Given:** A field $k$ and the polynomial Hopf structure in the Example.

[F1] For every field, $k[x]$ has $\Delta(x)=x\otimes1+1\otimes x$ and $\varepsilon(x)=0$ ([[lem-hh-group-and-polynomial-hopf-algebras-exist]]).

[F2] If $\{x^i\}$ is the monomial basis, then $\{x^i\otimes x^j\}$ is a basis of $k[x]\otimes k[x]$ ([[thm-tensor-product-basis-from-bases]]).

## Verification

**Proof technique:** direct.

1.1 The formulas in [F1] give $\Delta(x)=x\otimes1+1\otimes x$ and $\varepsilon(x)=0$, so $x$ is primitive by the definition in the Example. [given, F1]

1.2 Let $\operatorname{char}k=p>0$. The two elements $x\otimes1$ and $1\otimes x$ commute in the tensor-product algebra, so the binomial theorem gives $\Delta(x^p)=\sum_{j=0}^p\binom pj x^j\otimes x^{p-j}$. For $0<j<p$, the integer $\binom pj$ is divisible by the prime $p$ and hence is zero in $k$; the two endpoint terms remain, giving $\Delta(x^p)=x^p\otimes1+1\otimes x^p$. Also $\varepsilon(x^p)=0$, so $x^p$ is primitive. [given, F1, algebra]

1.3 If $\operatorname{char}k=0$, then $\Delta(x^2)=x^2\otimes1+2x\otimes x+1\otimes x^2$. By [F2], $x\otimes x$ is a basis vector and is nonzero; $2\ne0$ in characteristic zero, so the middle term is nonzero. Therefore $\Delta(x^2)\ne x^2\otimes1+1\otimes x^2$, and $x^2$ is not primitive. [given, F1, F2, algebra]

2.1 Step 1.1 verifies the characteristic-independent primitive element, while steps 1.2–1.3 give the characteristic-dependent distinction. The Hopf algebra itself exists in every characteristic by [F1]. [step 1.1, step 1.2, step 1.3, F1] ∎
