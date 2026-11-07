---
id: def-w-tricked-von-mangoldt-function
kind: definition
title: "Prime-supported W-tricked von Mangoldt function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-w-trick-prime-modulus
  - def-prime
  - def-unit-group-modulo-n-and-euler-totient
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§§3, 9–10 and Appendix A; exact passages inspected in the complete local full-text snapshot"
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 10"
      url: "https://kskedlaya.org/18.785/errorbounds2.pdf"
      locator: "Theorem 10.11; statement/interface inspected, not used as a proof of the current draft supplier"
---
## Definition

Let $w\ge2$, $W=W(w)$ be the W-trick modulus, and let $b$ be an integer coprime to $W$. For every integer $n$ with $Wn+b>1$, define the **prime-supported W-tricked von Mangoldt function** by
$$\widetilde\Lambda_{W,b}(n):=\frac{\varphi(W)}{W}\log(Wn+b)\,\mathbf 1_{\{Wn+b\text{ is prime}\}}.$$
Here $\mathbf 1_E$ equals $1$ when $E$ holds and $0$ otherwise, and $\varphi(W)$ is the number of invertible residue classes modulo $W$. In the main construction $b=1$ and we abbreviate this function to $\widetilde\Lambda_W$.

## Definition references

[[def-w-trick-prime-modulus|W-trick modulus and progression]]

[[def-prime|Prime and composite integers]]

[[def-unit-group-modulo-n-and-euler-totient|Unit group and Euler totient]]

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Kedlaya, Chapter 10, Theorem 10.11](https://kskedlaya.org/18.785/errorbounds2.pdf)
