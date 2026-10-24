---
id: ex-qa-cyclic-discrete-log-fourier-sample
kind: example
title: A composite-order cyclic discrete-log Fourier sample
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-finite-cyclic-discrete-logarithm
  - thm-qa-finite-cyclic-discrete-logarithm-correctness-success-cost
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Example

Work in the multiplicative group $\mathbb F_{31}^{\times}$ and let $g=9$. Its powers satisfy
$$
9^2\equiv19,\quad 9^3\equiv16,\quad 9^4\equiv20,\quad 9^5\equiv25,\quad 9^{15}\equiv1\pmod{31}.
$$
Since the proper divisors of $15$ are $1,3,5$ and $9,16,25$ are all different from $1$ modulo $31$, $g$ has exact order $q=15$. Set $x=20=g^4$, so the discrete logarithm is $a=4$.

The cyclic DLP subgroup is $H=\langle(-4,1)\rangle\le\mathbb Z_{15}^2$. The Fourier label $(c,d)=(2,8)$ lies in its annihilator because $d\equiv ac\equiv4\cdot2\equiv8\pmod{15}$. Here $\gcd(2,15)=1$ and $2^{-1}\equiv8\pmod{15}$, so the sample recovers
$$
d c^{-1}\equiv8\cdot8\equiv4\pmod{15}.
$$
Verification is direct: $9^4\equiv20=x\pmod{31}$. Under the exact uniform annihilator sample law, this particular pair has probability $1/15$.
